"""Render the CV with complete, clickable web addresses as link labels."""

import re
import sys
from pathlib import Path

from jinja2 import ChoiceLoader, DictLoader
from rendercv import data, renderer
from rendercv.renderer.templater import (
    Jinja2Environment,
    MarkdownFile,
    escape_typst_characters,
)


def render(input_path: Path) -> None:
    output = Path("rendercv_output")
    typst_path = renderer.create_a_typst_file_and_copy_theme_files(
        data.read_input_file(input_path), output
    )
    source = typst_path.read_text(encoding="utf-8")
    # Covers body links and the header's original-link calls. Email and phone
    # links retain their natural address/number labels.
    source = re.sub(
        r'((?:original-)?link\("(https?://[^"\n]+)"\)\[)[^\[\]\n]*(\])',
        lambda match: match[1] + escape_typst_characters(match[2]) + match[3],
        source,
    )
    # Keep each two-column heading with the body that follows it.
    before, separator, after = source.partition("#let two-col-entry(")
    heading, next_separator, remainder = after.partition("#let one-col-entry(")
    if not separator or not next_separator:
        raise ValueError("Unexpected RenderCV entry template")
    heading = heading.replace(
        "breakable: design-entries-allow-page-break-in-entries,",
        "sticky: true, breakable: design-entries-allow-page-break-in-entries,",
    )
    source = before + separator + heading + next_separator + remainder
    typst_path.write_text(source, encoding="utf-8")
    renderer.render_a_pdf_from_typst(typst_path)
    renderer.render_pngs_from_typst(typst_path)

    markdown_path = renderer.create_a_markdown_file(
        data.read_input_file(input_path), output
    )
    # RenderCV's default Markdown template omits custom publication summaries.
    environment = Jinja2Environment().environment
    template_name = "markdown/PublicationEntry.j2.md"
    template, _, _ = environment.loader.get_source(environment, template_name)
    template += "\n((* if entry.summary *))\n- <<entry.summary>>\n((* endif *))\n"
    environment.loader = ChoiceLoader(
        [DictLoader({template_name: template}), environment.loader]
    )
    MarkdownFile(data.read_input_file(input_path), environment).create_file(markdown_path)

    def full_markdown_link(match: re.Match) -> str:
        label, target = match.groups()
        if target.startswith(("https://", "http://")):
            return f"[{target}]({target})"
        # RenderCV 2.3 reverses the URL label and target for URL-only papers.
        if label.startswith(("https://", "http://")):
            return f"[{label}]({label})"
        return match[0]

    markdown = re.sub(
        r"\[([^\[\]\n]+)\]\(([^()\n]+)\)",
        full_markdown_link,
        markdown_path.read_text(encoding="utf-8"),
    )
    markdown_path.write_text(markdown, encoding="utf-8")
    renderer.render_an_html_from_markdown(markdown_path)
    print(f"Rendered {input_path}")


if __name__ == "__main__":
    for argument in sys.argv[1:]:
        render(Path(argument))
