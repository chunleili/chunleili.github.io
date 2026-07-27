# 李春蕾 (Chunlei Li)'s CV

- Phone: +86 176 0063 3417
- Email: [li_cl@foxmail.com](mailto:li_cl@foxmail.com)
- Location: 伦敦 / 北京
- Website: [chunleili.github.io](https://chunleili.github.io/)


# 个人简介

本人自 2021 年起在北京航空航天大学虚拟现实实验室攻读博士学位,师从赵沁平教授、高阳教授与李帅教授,研究方向为计算机图形学中的物理仿真。目前在伦敦大学学院(UCL)访学,师从王鹤教授,预计 2026/2027 年毕业。研究兴趣:数值方法、物理仿真、基于物理的动画、强化学习、计算机图形学、AI4S、偏微分方程。

**长期研究愿景:** 打通 AI、物理与数值方法。1) *AI for physics*(如神经算子、物理基础模型):用学习去加速、泛化并拓展经典数值方法。2) *physics for AI*(如学习动力学、scaling law 的解释、训练收敛加速):用偏微分方程理论、流体力学与数值分析的方法研究学习本身。

# 教育经历

## 伦敦大学学院(UCL), 访问博士生 in 计算机科学

- 2025年9月 – 2026年9月

## 北京航空航天大学, 博士 in 计算机科学

- 2021年9月 – 2026年12月

## 北京航空航天大学, 硕士 in 动力工程及工程热物理

- 2018年9月 – 2021年6月

## 密歇根大学迪尔伯恩分校, 交换生 in 能源与动力工程

- 2016年9月 – 2017年5月

## 华北电力大学(北京), 学士 in 能源与动力工程

- 2014年9月 – 2018年7月

# 论文发表

## RLMuscle: Muscle-Driven Character Animation via Reinforcement Learning ([https://chunleili.github.io/project-page-rlmuscle/](chunleili.github.io/project-page-rlmuscle))
- 在审
- Chunlei Li, Siyuan Yu, Yang Gao, Shuai Li, Peng Yu, Aimin Hao, He Wang
- IEEE Transactions on Visualization and Computer Graphics
- 动机:在大多数三维动画流程中,美术师需要逐块肌肉手工调节激活量,费时费力且缺乏物理真实感。创新点:提出基于一维 Hill 型替代模型训练的强化学习控制器,自动求解每块肌肉的激活量,并以此驱动带 Hill 型纤维约束的 GPU 多重网格 XPBD 体积仿真器,以每帧 18 毫秒驱动含 194 块肌肉的全身模型。

## MGPBD: A Multigrid Accelerated Global XPBD Solver ([10.1145/3721238.3730720](https://doi.org/10.1145/3721238.3730720))
- 2025年8月
- Chunlei Li, Peng Yu, Tiantian Liu, Siyuan Yu, Yuting Xiao, Shuai Li, Aimin Hao, Yang Gao, Qinping Zhao
- SIGGRAPH
- 动机:XPBD 的 Gauss-Seidel 求解器难以消除低频误差,导致高分辨率、高刚度仿真不稳定。创新点:提出全局 UA-AMG 预条件共轭梯度求解器,结合惰性延拓算子复用与轻量近核空间构造,以极低开销显著提升收敛性与稳定性。

## Parallel Constraint Graph Partitioning and Coloring for Realtime Soft-Body Cutting ([10.2312/pg.20251267](https://doi.org/10.2312/pg.20251267))
- 2025年4月
- Peng Yu, Ruiqi Wang, Chunlei Li, Yuxuan Li, Xiao Zhai, Yuanbo He, Hongyu Wu, Aimin Hao
- Pacific Graphics
- 动机:切割会实时改变网格拓扑,使并行 GPU 求解器依赖的预计算约束划分与着色失效。创新点:提出并行约束图重划分与重着色方案,可即时恢复求解器的并行性,实现实时软体切割。

## A Unified Particle-Based Solver for non-Newtonian Behaviors Simulation ([10.1109/TVCG.2023.3341453](https://doi.org/10.1109/TVCG.2023.3341453))
- 2023年12月
- Chunlei Li, Yang Gao, Jiayi He, Tianwei Cheng, Shuai Li, Aimin Hao
- IEEE Transactions on Visualization and Computer Graphics
- 动机:泥浆、面团、粘液等非牛顿材料兼具类流体与类固体行为,单一用途的求解器难以统一刻画。创新点:提出统一的 SPH 求解器,其本构模型平滑覆盖粘性、弹性与塑性区间,在同一框架内再现剪切变稀/变稠及粘弹性效果。

## Comparison between Two Eulerian-Lagrangian Methods: CFD-DEM & MPPIC on the biomass gasification in a fluidized bed ([10.1007/s13399-021-01384-2](https://doi.org/10.1007/s13399-021-01384-2))
- 2021年2月
- Chunlei Li, Qitai Eri
- Biomass Conversion and Biorefinery

## Comparative Study of Three Modified sCO2 Brayton Recompression Cycles Based on Energy and Exergy Analysis with GA Optimization ([10.1504/IJEX.2021.115652](https://doi.org/10.1504/IJEX.2021.115652))
- 2021年1月
- Chunlei Li, Qitai Eri
- International Journal of Exergy

## Multi-objective Optimization of sCO₂, sCO₂/tCO₂ Cycles Based on Energy-Exergy-Economy Balanced Analysis ([10.1504/IJEX.2022.122308](https://doi.org/10.1504/IJEX.2022.122308))
- 2022年4月
- Chunlei Li, Qitai Eri
- International Journal of Exergy

# 工作经历

## 泽森科工 (Zeno Tech), 研发实习生

- 2022年6月 – 2022年12月
- 远程
- 实习:使用 C++ 在 DCC 软件中研发 PBD 方法。

## 太极图形 (Taichi Graphics), 研发实习生

- 2023年2月 – 2023年9月
- 北京
- 实习:研发 PBD 方法,在刘天添博士指导下开发 PBD 求解器。

## 阿里巴巴 (Alibaba), 研发

- 2025年5月 – 2025年11月
- 北京
- 在 Houdini 中研发多重网格加速的 GPU 肌肉仿真。

# 荣誉奖项

- 北京航空航天大学十佳研究生候选人: 北京航空航天大学
- 北京航空航天大学优秀毕业生: 北京航空航天大学
- 华北电力大学(北京)优秀毕业生: 华北电力大学(北京)
# 专业技能

- 语言能力: CET-6:578,CET-4:560,TOEFL:97,GRE:323+3.5
- DCC 软件: Houdini(5 年使用经验)
- 物理引擎: Newton(PR 贡献者)、MuJoCo、PhysX
- 世界模型: 具有调试 DreamZero 的经验
