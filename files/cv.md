# Chunlei Li (李春蕾)'s CV

- Phone: +86 176 0063 3417
- Email: [li_cl@foxmail.com](mailto:li_cl@foxmail.com)
- Location: London / Beijing
- Website: [chunleili.github.io](https://chunleili.github.io/)


# Summary

I'm a PhD candidate at the VR Lab of Beihang University from 2021, supervised by Prof. Qinping Zhao and Prof. Yang Gao. My research focuses on physical simulation in computer graphics. Currently I am a visiting student at University College London, supervised by Prof. He Wang. I am about to graduate in 2026/2027. Interest: Numerical Methods, Physical Simulation, Physical Based Animation, Reinforcement Learning, Computer Graphics, AI4S, PDE.

# Education

## University College London, Visiting PhD in Computer Science

- Sept 2025 – Sept 2026

## Beihang University (BUAA), PhD in Computer Science

- Sept 2021 – Dec 2026

## Beihang University (BUAA), MSc in Power Engineering and Engineering Thermophysics

- Sept 2018 – June 2021

## University of Michigan, Dearborn, Exchange Student in Energy and Power Engineering

- Sept 2016 – May 2017

## North China Electric Power University (Beijing), BSc in Energy and Power Engineering

- Sept 2014 – July 2018

# Publications

## RLMuscle: Muscle-Driven Character Animation via Reinforcement Learning ([https://chunleili.github.io/project-page-rlmuscle/](chunleili.github.io/project-page-rlmuscle))
- Under Review
- Chunlei Li, Siyuan Yu, Yang Gao, Shuai Li, Peng Yu, Aimin Hao, He Wang
- IEEE Transactions on Visualization and Computer Graphics
- Motivation: in most 3D animation pipelines artists hand-tune per-muscle activations, which is time-consuming and lacks physical realism. Novelty: an RL controller trained on a 1D Hill-type surrogate automatically discovers per-muscle activations, which then drive a GPU multigrid-XPBD volumetric simulator with Hill-type fiber constraints, animating a 194-muscle full-body model at 18 ms per frame.

## MGPBD: A Multigrid Accelerated Global XPBD Solver ([10.1145/3721238.3730720](https://doi.org/10.1145/3721238.3730720))
- Aug 2025
- Chunlei Li, Peng Yu, Tiantian Liu, Siyuan Yu, Yuting Xiao, Shuai Li, Aimin Hao, Yang Gao, Qinping Zhao
- SIGGRAPH
- Motivation: XPBD's Gauss-Seidel solver stalls on low-frequency errors, causing instability in high-resolution, high-stiffness simulations. Novelty: a global UA-AMG preconditioned CG solver with lazy prolongator reuse and lightweight near-kernel construction, greatly improving convergence and stability at low overhead.

## Parallel Constraint Graph Partitioning and Coloring for Realtime Soft-Body Cutting ([10.2312/pg.20251267](https://doi.org/10.2312/pg.20251267))
- Apr 2025
- Peng Yu, Ruiqi Wang, Chunlei Li, Yuxuan Li, Xiao Zhai, Yuanbo He, Hongyu Wu, Aimin Hao
- Pacific Graphics
- Motivation: cutting changes mesh topology on the fly, invalidating the precomputed constraint partitioning and coloring that parallel GPU solvers rely on. Novelty: a parallel constraint-graph re-partitioning and re-coloring scheme that restores solver parallelism instantly, enabling realtime soft-body cutting.

## A Unified Particle-Based Solver for non-Newtonian Behaviors Simulation ([10.1109/TVCG.2023.3341453](https://doi.org/10.1109/TVCG.2023.3341453))
- Dec 2023
- Chunlei Li, Yang Gao, Jiayi He, Tianwei Cheng, Shuai Li, Aimin Hao
- IEEE Transactions on Visualization and Computer Graphics
- Motivation: non-Newtonian materials such as mud, dough and slime span fluid-like and solid-like behaviors that single-purpose solvers cannot capture consistently. Novelty: a unified SPH solver whose constitutive model smoothly covers viscous, elastic and plastic regimes, reproducing shear-thinning/thickening and viscoelastic effects in one framework.

## Comparison between Two Eulerian-Lagrangian Methods: CFD-DEM & MPPIC on the biomass gasification in a fluidized bed ([10.1007/s13399-021-01384-2](https://doi.org/10.1007/s13399-021-01384-2))
- Feb 2021
- Chunlei Li, Qitai Eri
- Biomass Conversion and Biorefinery

## Comparative Study of Three Modified sCO2 Brayton Recompression Cycles Based on Energy and Exergy Analysis with GA Optimization ([10.1504/IJEX.2021.115652](https://doi.org/10.1504/IJEX.2021.115652))
- Jan 2021
- Chunlei Li, Qitai Eri
- International Journal of Exergy

## Multi-objective Optimization of sCO₂, sCO₂/tCO₂ Cycles Based on Energy-Exergy-Economy Balanced Analysis ([10.1504/IJEX.2022.122308](https://doi.org/10.1504/IJEX.2022.122308))
- Apr 2022
- Chunlei Li, Qitai Eri
- International Journal of Exergy

# Experience

## Zeno Tech, R&D

- June 2022 – Dec 2022
- Online
- Intern: R&D of the PBD method in the DCC software using C++.

## Taichi Graphics, R&D

- Feb 2023 – Sept 2023
- Beijing
- Intern: R&D of the PBD method. Supervised by Dr. Tiantian Liu, development of PBD solver.

## Alibaba, R&D

- May 2025 – Nov 2025
- Beijing
- R&D of the multigrid accelerated GPU-based muscle simulation in Houdini.

# Awards

- Top 10 Outstanding Graduate Students Candidate of Beihang University: Beihang University
- Outstanding Graduate of Beihang University: Beihang University
- Outstanding Graduate of NCEPU (Beijing): NCEPU (Beijing)
# Skills

- Languages: CET Band 6: 578, CET Band 4: 560, TOEFL: 97, GRE: 323+3.5
- DCC Software: Houdini(5 years user)
- Physics Engines: Newton (PR contributor), MuJoCo, PhysX
- World Models: Experience in debugging DreamZero
