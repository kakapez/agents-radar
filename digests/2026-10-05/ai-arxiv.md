# ArXiv AI 研究周报 2026-10-05

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-05 01:47 UTC

---

# ArXiv AI 研究周报（2026-09-29 至 2026-10-05）

---

## 1. 近 7 天亮点
本周新增的 50 篇 AI 提交论文围绕提升大语言模型（LLM）的可靠性与效率、拓展智能体在真实场景任务中的能力，以及为研究不足的问题领域构建严谨基准展开。核心突破包括：LLM 融合坍塌的预测框架、面向长上下文复用的自优化 KV 缓存设计，以及 LLM 智能体可执行不确定性推理的形式化方法。研究人员还发布了针对性基准，覆盖 GPU 内核生成、交易策略代码等价性、跨视频电商推理和工作区智能体安全风险等方向。多模态与领域专用 AI 的进展则涵盖医学影像、天气预报、抗体发现和罕见病诊断。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Predicting and Repairing Merge Collapse in Large Language Models](http://arxiv.org/abs/2610.03199v1) | Jungseob Lee, Seungyoon Lee, Sugyeong Eo 等 | 该论文识别出专家任务向量的一项统计特征，可可靠预测通过任务向量平均融合微调 LLM 时的性能坍塌问题，并提出了一种轻量修复方法来恢复性能。该方法解决了参数高效的多任务模型组合中的关键痛点，无需通过成本高昂的全面评估来检测融合失败。 |
| [KV$^2$: A Self-Refining KV Cache](http://arxiv.org/abs/2610.03198v1) | Johannes Wesch, Danni Liu, Jan Niehues | 本文提出了一种与查询无关的自优化 KV 缓存，可在可复用的长上下文场景中迭代提升压缩质量，相比静态压缩方法能更有效地平衡内存占用与输出质量。对于单个预填充上下文服务于大量下游查询的工作负载，该方法效果尤为显著，可同时降低延迟与计算成本。 |
| [Collective Bias Mitigation via Model Routing and Collaboration](http://arxiv.org/abs/2610.03240v1) | Mingzhe Du, Luu Anh Tuan, Xiaobao Wu 等 | 该论文提出了一种多模型路由与协作框架，可减少 LLM 输出中的社会偏见，且不会产生单模型自去偏的额外开销，也不会导致性能下降。该框架利用异构模型的互补优势，提升了公共卫生、金融和治理等高风险部署场景下的价值对齐水平。 |
| [Gains and Collapse in On-Policy Distillation:A Reinforcement Learning Perspective](http://arxiv.org/abs/2610.03185v1) | Han Cui, Jianhao Yan, Yun Luo 等 | 本文从强化学习（RL）视角，为 LLM 同策略蒸馏中的性能提升与退化性重复生成提供了统一解释，明确了导致这两种结果的 divergence 机制。该研究为设计更稳定、可避免模式坍塌的训练后蒸馏流程奠定了理论基础。 |
| [Emergent Structure in the Marginal Attention Space of Language Models](http://arxiv.org/abs/2610.03109v1) | Valentino Maiorca, Walter Nelson, Francesco Locatello 等 | 该研究通过对查询输入求边缘化，刻画了独立训练的 LLM 之间 softmax 后注意力权重的共享结构模式，揭示了注意力机制中跨模型一致性的涌现现象。该成果推进了对 LLM 内部表征的理解，对模型可解释性和可迁移干预技术具有启示意义。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Not Until the Evidence Says So: Teaching LLM Investigators When to Close a Case](http://arxiv.org/abs/2610.03190v1) | Tingzhu Bi, Ping Wang, Meng Ma | 本文针对执行事故、缺陷和停运分析的 LLM 调查智能体，形式化了证据充分性决策问题——智能体需判断已收集证据何时支持结案，而非仅回答问题。该研究通过引入基于证据完整性的停止准则，填补了调查工作流中智能体推理的空白。 |
| [Ask, Relax, or Act? Evaluating Actionable Indeterminacy in LLM Preference Reasoning](http://arxiv.org/abs/2610.03102v1) | Ang Li, Yue Lin, Feifei Kou 等 | 该论文形式化了 LLM 智能体的可执行不确定性，定义了何时应采取行动、请求澄清或放宽约束，判断依据为可接受场景下的偏好对齐情况。该方法减少了智能体决策中成本高昂的失误（如过度澄清或过早行动），提升了面向真实用户任务的可靠性。 |
| [Source Preference in the Wild: How LLM Agents Favor Items by Source, and How to Reduce It](http://arxiv.org/abs/2610.03195v1) | Jonghyun Song, Haewon Park, Jeonghoon Shim 等 | 该研究量化了 LLM 智能体在产品选择、文献引用等任务的搜索与决策中存在的系统性来源偏见，并提出了去偏干预措施以提升推荐公平性。该研究关注了一种研究不足的对齐风险，这种风险可能在智能体介导的搜索中扭曲用户结果和市场竞争。 |
| [Peer Influence across Heterogeneous AI Models](http://arxiv.org/abs/2610.03095v1) | Frida Nøhr Laustsen, Marie Haahr Petersen, Victoria Popa 等 | 该论文测量了不同规模、不同系列的异构 LLM 智能体在出现分歧时的说服动态，识别出哪些模型属性可预测其在多智能体交互中对其他模型的影响力。该成果对多智能体系统设计具有关键意义，因为它揭示了协作决策中哪些判断更易占据主导。 |
| [Securing Computer-Use Agents Against Branch Steering Attacks](http://arxiv.org/abs/2610.03089v1) | Giulio Zingrillo, Hanna Foerster, Ilia Shumailov 等 | 本文识别出针对计算机操作智能体的分支引导攻击——即渲染页面中的间接提示注入会劫持智能体的工作流路径，并基于双 LLM 安全模式评估了防御方案。该研究增强了与不可信网页和 GUI 环境交互的智能体的安全态势。 |

### 🔧 方法与框架（新技术、基准、效率提升）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [JOVE: Joint Execution and Verification for Resource-Aware LLM Task Graphs](http://arxiv.org/abs/2610.03296v1) | Haoran Zhang, Dongjun Kim, Seohyeon Cha 等 | JOVE 是一个联合执行与验证框架，可将复杂推理分解为任务图，分发到异构 LLM 上执行，动态将子任务匹配到对应模型，同时验证输出正确性。该框架解决了单个子任务适配模型的先验不确定性问题，同时提升了分布式 LLM 推理的延迟和准确率。 |
| [D2K-Bench: Can LLM Agents Turn Expert Designs into Efficient GPU Kernels?](http://arxiv.org/abs/2610.03226v1) | Daifeng Li, Huiqiang Jiang, Chengruidong Zhang 等 | D2K-Bench 是一个包含 26 项任务、85 个工作负载的诊断性基准，它不止衡量运行时性能，还能区分 LLM 生成 GPU 内核时的设计发现差距与实现差距。该基准为改进面向高性能计算的代码生成智能体提供了细粒度评估框架。 |
| [EvoRiskBench: An Evolving Benchmark for Runtime Security Risks in Workspace Agents](http://arxiv.org/abs/2610.03153v1) | Shiyi Kuang, Xuemei Luo, Kun Liu 等 | EvoRiskBench 是一个针对工作区智能体运行时安全风险的动态演化基准，旨在跟上静态基准无法覆盖的模型能力、工具和威胁向量的演进。该基准可对访问和修改外部资源的有状态、多步骤智能体进行更鲁棒的安全评估。 |
| [AdaStep: Adaptive Step Credit Weighting for Agentic Reinforcement Learning](http://arxiv.org/abs/2610.03223v1) | Xin Wang, Wenhao Wu, Menghao Zhang 等 | AdaStep 为长时序 LLM 智能体强化学习训练引入了自适应步级信用权重，解决了稀疏结果奖励不可靠、步级信用估计存在噪声的问题。该方法通过为长轨迹中的单个决策分配更准确的贡献权重，提升了智能体系统的样本效率和最终性能。 |

### 📊 应用（领域专用、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Multimodal reasoning for broadly neutralizing antibody discovery from label-free human B cell repertoires across virus families](http://arxiv.org/abs/2610.03160v1) | Hantao Lou, Jianqing Zheng, Can Yue 等 | 本文提出了一种多模态推理框架，可从跨多个病毒科的无标记人类 B 细胞库中识别罕见的广谱中和抗体，性能优于现有计算工具。该框架通过实现大规模天然免疫库分析，加速了免疫治疗和疫苗研发。 |
| [Hindsight-Guided Rationale Distillation for Rare Disease Diagnosis](http://arxiv.org/abs/2610.03176v1) | Aarav Singh, Animesh Pathak, Navyansh Singh 等 | 该研究将后见之明引导的思维链蒸馏应用于罕见病诊断，使用可访问真值的 8B 教师模型训练 1.5B 学生模型。尽管这一高难度任务的绝对准确率仍然较低，但该方法提升了资源有限、无法部署大模型的临床场景下的诊断推理质量。 |
| [S2S-JEPA: Predicting the Predictable at Subseasonal-to-Seasonal Timescales](http://arxiv.org/abs/2610.03106v1) | Chenyu Dong, Gianmarco Mengaldo | S2S-JEPA 将 JEPA 架构扩展到季节内至季节尺度的天气预报（提前 2 周至 2 个月），这一领域被称为“可预测性荒漠”，当前 AI 气象模型在此表现不佳。该方法通过延长可靠 AI 预报的时间范围，可为农业、能源和水资源管理提供更好的规划支持。 |
| [MintEval: Do LLMs Implement the Trading Strategy You Asked For? A Behavioural-Equivalence Benchmark for Natural-Language-to-Strategy Code](http://arxiv.org/abs/2610.03080v1) | Siyu Wang, Yifan Wang, Yuecheng He | MintEval 是一个行为等价性基准，用于评估 LLM 生成的交易策略代码是否真正实现了自然语言描述的风险与收益逻辑，而非仅能无错误运行。该基准解决了金融代码生成中一种关键的隐性失效模式——回测看似有效，但实际与预期策略不符。 |

---

## 3. 研究趋势信号
本周一个清晰的新兴趋势是，AI 模型评估正从标准问答基准转向衡量高风险领域部署的智能体系统的**决策质量与运行可靠性**。多篇论文提出了相关框架，涉及智能体何时应停止收集证据、如何在行动、询问或放宽约束之间做选择，以及如何检测代码生成和安全工作流中的隐性失效。此外，**分布式异构 LLM 系统**也受到越来越多的关注，相关研究包括任务图路由、用于偏见缓解的模型协作，以及跨模型同伴影响动态。最后，研究人员越来越多地构建**演化式、诊断性基准**而非静态测试集，因为他们认识到，模型能力和威胁向量快速演进，需要超越单一性能分数的持续、细粒度评估。

---

## 4. 值得深度阅读

1. **[Predicting and Repairing Merge Collapse in Large Language Models](http://arxiv.org/abs/2610.03199v1)** — 模型融合是一种快速发展、低成本的多任务能力组合技术，无需完整重新训练，但不可预测的坍塌问题限制了其实际应用。该论文既提供了预测指标，又给出了实用修复方案，对从业者来说立即可用，同时也推进了对任务向量相互作用的理论理解。

2. **[Ask, Relax, or Act? Evaluating Actionable Indeterminacy in LLM Preference Reasoning](http://arxiv.org/abs/2610.03102v1)** — 该研究形式化了自主智能体一个关键但研究不足的推理步骤：将不确定性转化为适当的后续行动。其提出的可执行不确定性形式化框架弥合了不确定性估计与真实决策之间的差距，可广泛应用于客户服务、企业级和消费级智能体部署。

3. **[Gains and Collapse in On-Policy Distillation:A Reinforcement Learning Perspective](http://arxiv.org/abs/2610.03185v1)** — 同策略蒸馏是核心的训练后技术，但其失效模式仍未被充分理解。该论文从统一的 RL 视角解释了性能提升和退化坍塌两种现象，提供了基础性洞见，将指导更稳定、更高效的 LLM 训练流程设计。

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*