---
permalink: /
title: "Chunlei Li Personal Page"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

I am a Ph.D. student in Computer Science at VR Lab, Beihang University. I am about to complete my Ph.D. degree in 2026. My research interests include physics-based animation, computer graphics, simulation, and neural operator. I am supervised by Prof. [Qinping Zhao](https://www.cae.cn/cae/html/main/colys/42717920.html) and Prof. [Yang Gao](https://scse.buaa.edu.cn/info/1078/12180.htm). I am currently a visiting student at University College London under the supervision of Prof. [He Wang](https://drhewang.com/).

[My CV](https://chunleili.github.io/files/cv.pdf) | Contact: li_cl@foxmail.com

## Publications

<div class="pub-list">
  {% assign pubs = site.publications | sort: 'date' | reverse %}
  {% for pub in pubs %}
  <div class="pub-row">
    {% if pub.teaser %}
    <div class="pub-thumb">
      <a href="{{ base_path }}/{{ pub.teaser }}"><img src="{{ base_path }}/{{ pub.teaser }}" alt="{{ pub.title }}"></a>
    </div>
    {% endif %}
    <div class="pub-meta">
      <a class="pub-title" href="{{ base_path }}{{ pub.url }}">{{ pub.title }}</a>
      {% if pub.authors %}
      <div class="pub-authors">{{ pub.authors | replace: "Chunlei Li", "<b>Chunlei Li</b>" }}</div>
      {% endif %}
      <div class="pub-venue">{{ pub.venue }}{% unless pub.venue contains "Review" %}, {{ pub.date | date: "%Y" }}{% endunless %}</div>
      <div class="pub-links">
        {% if pub.paperurl %}<a href="{{ pub.paperurl }}">Paper</a>{% endif %}
        {% if pub.projecturl %}<a href="{{ pub.projecturl }}">Project</a>{% endif %}
        {% if pub.code %}<a href="{{ pub.code }}">Code</a>{% endif %}
        {% if pub.videourl %}<a href="{{ pub.videourl }}">Video</a>{% endif %}
        {% if pub.slidesurl %}<a href="{{ pub.slidesurl }}">Slides</a>{% endif %}
        {% if pub.bibtexurl %}<a href="{{ pub.bibtexurl }}">BibTeX</a>{% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>

<style>
.pub-list { margin-top: 0.5em; }
.pub-row {
  display: flex;
  align-items: center;
  gap: 1.2em;
  padding: 1em 0;
  border-bottom: 1px solid #e5e5e5;
}
.pub-row:last-child { border-bottom: none; }
.pub-thumb {
  flex: 0 0 240px;
  max-width: 240px;
}
.pub-thumb img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  transition: transform 0.15s ease;
}
.pub-thumb img:hover { transform: scale(1.03); }
.pub-meta { flex: 1; min-width: 0; }
.pub-title {
  display: block;
  font-size: 1.05em;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 0.25em;
  text-decoration: none;
}
.pub-authors { font-size: 0.85em; color: #555; margin-bottom: 0.15em; }
.pub-venue { font-size: 0.85em; color: #777; font-style: italic; margin-bottom: 0.3em; }
.pub-links { font-size: 0.85em; }
.pub-links a {
  display: inline-block;
  margin-right: 0.35em;
  padding: 0.1em 0.55em;
  border: 1px solid #bbb;
  border-radius: 999px;
  text-decoration: none;
}
.pub-links a:hover { background: #f2f2f2; }
@media (max-width: 600px) {
  .pub-row { flex-direction: column; align-items: flex-start; gap: 0.6em; }
  .pub-thumb { flex-basis: auto; max-width: 100%; }
}
</style>

### Earlier publications (M.Sc., energy engineering)

- Multi-objective Optimization of sCO₂, sCO₂/tCO₂ Cycles Based on Energy-Exergy-Economy Balanced Analysis. *International Journal of Exergy*, 2022. [doi](https://doi.org/10.1504/IJEX.2022.122308)

---

Github of this website: [https://github.com/chunleili/chunleili.github.io](https://github.com/chunleili/chunleili.github.io)

Old blog: [https://chunleili.github.io/old-blog/](https://chunleili.github.io/old-blog/)
