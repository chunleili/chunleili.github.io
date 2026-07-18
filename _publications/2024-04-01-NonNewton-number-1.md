---
title: "A Unified Particle-Based Solver for non-Newtonian Behaviors Simulation"
collection: publications
category: manuscripts
permalink: /publication/2024-04-01-NonNewton-number-1
# excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2024-04-01
venue: 'TVCG'
authors: 'Chunlei Li, Yang Gao, Jiayi He, Tianwei Cheng, Shuai Li, Aimin Hao, Hong Qin'
teaser: 'images/nonNewton_preview.png'
slidesurl: 'https://github.com/chunleili/nonNewtonPaper/blob/main/video.pptx'
paperurl: 'https://arxiv.org/abs/2312.04814'
bibtexurl: 'https://chunleili.github.io/files/NonNewton.bib'
code: 'https://github.com/chunleili/nonNewtonCode'
projecturl: 'https://chunleili.github.io/project-page-nonNewton'
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
![NonNewton](../images/nonNewton_preview.png)


In this paper, we present a unified framework to simulate non-Newtonian behaviors. We combine viscous and elasto-plastic stress into a unified particle solver to achieve various non-Newtonian behaviors ranging from fluid-like to solid-like. Our constitutive model is based on a Generalized Maxwell model, which incorporates viscosity, elasticity and plasticity in one non-linear framework by a unified way. On the one hand, taking advantage of the viscous term, we construct a series of strain-rate dependent models for classical non-Newtonian behaviors such as shear-thickening, shear-thinning, Bingham plastic, etc. On the other hand, benefiting from the elasto-plastic model, we empower our framework with the ability to simulate solid-like non-Newtonian behaviors, i.e., visco-elasticity/plasticity. In addition, we enrich our method with a heat diffusion model to make our method flexible in simulating phase change. Through sufficient experiments, we demonstrate a wide range of non-Newtonian behaviors ranging from viscous fluid to deformable objects. We believe this non-Newtonian model will enhance the realism of physically-based animation, which has great potential for computer graphics.