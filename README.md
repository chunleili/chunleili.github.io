# How to use

## Change the cv
Change _data/cv.yaml
The github workflow script .github/workflows/cv-pdf.yml will automatically generate the cv.pdf and cv.md files using [rendercv](https://rendercv.com/).
See [rendercv](https://rendercv.com/) for the format of the cv.yaml file.
Render locally with `.venv-rendercv/bin/python scripts/render_cv.py _data/cv.yaml _data/cv_zh.yaml` to preserve complete, clickable URL labels in both PDF and Markdown outputs.


Template repository for Academic Pages:
https://github.com/academicpages/academicpages.github.io
