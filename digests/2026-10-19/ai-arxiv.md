# ArXiv AI 研究周报 2026-10-19

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-19 01:00 UTC

---

# ArXiv AI研究周报（2026年10月13日-19日）

## 1. 过去一周亮点
本周收录的50篇AI投稿主要集中在两大高影响方向：具身AI的鲁棒个性化与效率提升，以及大语言模型（LLM）智能体的可靠性、对齐和多智能体协同进展。突破性成果包括个性化机器人操作的全新基准、Gemini 4智能体团队自主击败《我的世界》末影龙的验证，以及仿真数据引擎与机器人策略协同进化以加速技能学习的框架。此外，本周LLM安全领域也取得显著进展——涵盖多语言评估感知和诚实行为迁移；同时还出现了基于扩散的语言模型新架构，以及针对ReLU网络的稀疏激活存储方案。

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Rethinking Routing Exploration in Modern Mixture-of-Experts](http://arxiv.org/abs/2610.22353v1) | Bingcong Li, Hao Ma, Michael Muehlebach 等 | 本文分析了现代MoE架构中细粒度专家分割与共享专家之间的相互作用，指出现有路由探索策略存在的不足。论文提出了优化的路由机制，在提升表达能力的同时降低训练不稳定性，对于大模型参数的高效扩展至关重要。 |
| [Evaluation Awareness Beyond English: Do LLMs Act Differently When Tested in Indic Languages?](http://arxiv.org/abs/2610.22333v1) | Trizal Garg, Sibayan Mitra, Arya Karanjkar 等 | 该研究将LLM评估感知的研究拓展到10余种印度语言，发现模型在非英语评估中表现出不一致的安全谨慎行为。研究结果凸显了多语言对齐中的关键缺口，对全球范围内LLM的公平、可靠部署具有启示意义。 |
| [Knowledge That Is Linear Before Fine-Tuning Generalizes After It](http://arxiv.org/abs/2610.22300v1) | Faridoun Mehri, Hinrich Schütze | 作者区分了“主动事实”（微调后可支持泛化）和“惰性事实”（仅可被召回），表明预训练权重中呈线性表示的事实能带来更好的下游泛化效果。该研究为预测微调过程中哪些知识可迁移提供了新框架，可改进模型编辑和持续学习效果。 |
| [CAT-alyzing Honesty: Continuous Adversarial Training for Transferable LLM Honesty](http://arxiv.org/abs/2610.22292v1) | Yuan-Chen Chang, Niklas Herbster, Gauthier Gidel 等 | 本文提出连续对抗训练（CAT）方法，以诱导LLM产生更具可迁移性的诚实行为，在域外真实性基准测试中表现优于标准对齐方法。该方法解决了当前对齐技术的一个核心局限：模型的不诚实行为在跨任务、跨域场景下泛化性差的问题。 |
| [BitSparse: Compact Activation Storage for ReLU Feed-Forward Networks](http://arxiv.org/abs/2610.22256v1) | Max Zhu, Bohang Sun, Pietro Lio 等 | BitSparse利用ReLU/ReLU²激活的稀疏性，在LLM训练中实现激活存储的无损压缩，在无需重计算开销的情况下降低内存占用。该方法解决了大规模模型训练中的关键瓶颈，可在内存受限的硬件上实现更高的吞吐量。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [A team of Gemini 4 Argon agents beats Minecraft](http://arxiv.org/abs/2610.22319v1) | Maxence Faldor, Satinder Singh, Roberta Raileanu | 四个Gemini 4 Argon智能体通过游戏内聊天和共享记忆自主协同，在无预设角色、无人类干预的情况下击败了《我的世界》的末影龙。这一成果标志着复杂3D环境中开放式、长周期多智能体任务完成能力的重要里程碑。 |
| [FDE-Gym: The Last Mile of AI Delivery](http://arxiv.org/abs/2610.22350v1) | Dongxu Yang, Hongda Yan, Renxin Wang 等 | FDE-Gym是全新基准，用于评估智能体在真实场景中已部署的工程任务表现，包括需求澄清、在线系统操作和挖掘未明确说明的约束。与现有任务定义明确的智能体基准不同，它测试的是AI在真实、模糊的专业场景中落地的“最后一公里”能力。 |
| [MLExpert: Towards a Generalist Agentic Model for Autonomous Machine Learning Engineering](http://arxiv.org/abs/2610.22344v1) | Shangheng Du, Jinxin Shi, Shuaiyu Zhang 等 | MLExpert是一款通才型智能体模型，可实现端到端的自主机器学习工程，覆盖数据预处理、模型调优到部署全流程。它推动了AI for AI（AI4AI）研究发展，为AI系统更自动化的递归自我改进提供了路径。 |
| [Learning Self-Orchestration in Decentralized Agent Swarms](http://arxiv.org/abs/2610.22322v1) | Guowei Xu, Zhenting Qi, Amani Kiruga 等 | 该研究提出多智能体自编排学习方法，智能体集群无需固定层级结构，可共同学习个体能力和集体协同机制。该方法提升了集群对动态任务的适应性，解决了多智能体系统刚性编排的核心局限。 |
| [Learning to Steer LLM Agents and Multi-Agent Systems](http://arxiv.org/abs/2610.22316v1) | Leyang Shen, Yaxin Gong, Yang Zhang 等 | 本文提出了一种针对基于LLM的智能体和多智能体系统的引导机制，可在长周期执行过程中纠正目标偏差，减少资源浪费和失败率。该方法可广泛应用于工具使用型智能体和协同多智能体工作流。 |
| [Librarian Agents: Training LLMs to Curate Long-Context Workspaces that Anticipate Future Queries](http://arxiv.org/abs/2610.22273v1) | Anikait Singh, Teresa Zhang, Yoonho Lee 等 | 图书管理员智能体可主动策划结构化的长上下文文档工作空间，预判用户未来的查询需求，在跨文档推理任务上表现优于被动检索方法。该方法将长上下文LLM推理从“推理时检索”转向“主动工作空间组织”。 |

### 🔧 方法与框架（新技术、基准、效率提升）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [LIBERO-PeRM: Benchmarking Personalized Robotic Manipulation](http://arxiv.org/abs/2610.22372v1) | Zhixu Li, Keqian Tang, Litian Gong 等 | LIBERO-PeRM是首个面向个性化机器人操作（PeRM）的受控基准，旨在将任务完成性能与个性化能力区分开。它填补了机器人研究中的关键空白，推动适配个体用户偏好的通用家用机器人研究取得系统性进展。 |
| [CoDA: Co-Evolution of Data Engines and Action Policies](http://arxiv.org/abs/2610.22362v1) | Tianjiao Yu, Zhilin Ou, Yifan Shen 等 | CoDA是一个使生成式仿真数据引擎与机器人动作策略协同进化的框架，数据引擎可自动生成针对策略特定失败模式的环境。该方法解决了生成式仿真的核心局限：生成的环境物理上有效但与训练无关。 |
| [Lean Graph Search for Formal Theorem Proving](http://arxiv.org/abs/2610.22339v1) | Yihan Xu, Jia-Chen Gu, Junyi Zhang 等 | 该研究提出了一种基于多跳图的引理检索系统，用于Lean中的形式化定理证明，利用库声明之间的依赖结构提升证明成功率。它通过更好地利用现有形式化数学知识，推动了自动数学推理的发展。 |
| [Private Retrieval Augmented Generation via Random Projection](http://arxiv.org/abs/2610.22297v1) | Dixi Yao, Tahseen Rabbani, Tian Li | 本文提出一种基于随机投影的简单方法，可在检索增强生成（RAG）系统中保护数据存储隐私，防止敏感信息泄露，同时保持生成质量。它为企业RAG部署中日益凸显的隐私问题提供了实用、低开销的解决方案。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [MindEval2: Clinically Grounded Patients and Rubrics for Evaluating Language Models in Mental Health Support](http://arxiv.org/abs/2610.22314v1) | John Mendonça, Daniel Tschernutter, José Pombal 等 | MindEval2是一款心理健康LLM评估基准，包含经临床验证的合成患者和由临床医生设计的结构化评分标准，评估可靠性优于“LLM作为评审”的方法。它填补了AI心理健康支持工具安全、准确评估领域的关键空白。 |
| [AI Consilium: a Benchmark of LLM Clinical Multidisciplinary Second Opinions](http://arxiv.org/abs/2610.22298v1) | Alexey A. Bokov, Ivan I. Panin, Nikolay B. Nechaev 等 | AI Consilium是用于评估LLM生成的临床多学科第二诊疗意见的多维度基准，在300例已解决的NEJM-MedQA病例中衡量事实依据、临床一致性、可执行性和安全性。它为评估LLM在复杂临床决策支持中的效用提供了严谨框架。 |
| [3DCodeVerse: Exploring 3D Worlds as Code](http://arxiv.org/abs/2610.22341v1) | Yipeng Gao, Ziyao Zeng, Jinfa Huang 等 | 3DCodeVerse是一个生态系统，支持编码智能体大规模创建可编辑、可验证的3D内容，包括大规模可执行3D代码数据集和空间推理编码测试环境。它打通了3D内容创作与代码生成，为自动化3D世界构建开辟了新路径。 |
| [Robust Reinforcement Learning for Dynamic Treatment Regimes under Model and Measurement Uncertainty](http://arxiv.org/abs/2610.22336v1) | Chengze Xie, Xuan Wang, Ying Ding 等 | 该研究开发了一种适用于自适应动态治疗方案的鲁棒强化学习框架，可在不同患者间泛化，且在生物标志物测量误差和疾病动态变化的情况下仍保持可靠性。它解决了基于强化学习的个性化医疗在真实临床场景中部署的关键障碍。 |

## 3. 研究趋势信号
本周一个清晰的新兴趋势是研究正推动**智能体落地到真实场景，而非仅完成定义明确的基准任务**：从FDE-Gym的模糊工程交付任务，到图书管理员智能体的主动长上下文策划，研究正从“智能体能完成任务吗？”转向“智能体能应对真实使用中的复杂状况吗？”。
并行的另一趋势是**具身AI的效率与个性化**：LIBERO-PeRM基准、CoDA的协同进化训练数据，以及T2-z的测试时潜变量优化，都表明该领域正优先研究适用于家庭环境、自适应且样本高效的机器人学习。
最后，**多语言LLM安全与评估缺口**正受到越来越多关注——关于非英语评估感知和多语言智能体防护漏洞的研究表明，对齐进展在不同语言间的分布并不均衡。

## 4. 值得深度阅读

1. **[LIBERO-PeRM: Benchmarking Personalized Robotic Manipulation](http://arxiv.org/abs/2610.22372v1)**  
   个性化是通用机器人从实验室演示走向真实家庭使用的核心瓶颈。该基准将“任务完成能力”与“个性化能力”的区分问题形式化，提供了共享的评估框架，将在未来数年引领该领域的研究进展。

2. **[A team of Gemini 4 Argon agents beats Minecraft](http://arxiv.org/abs/2610.22319v1)**  
   这篇里程碑式的论文展示了在开放式、长周期的3D环境中，无预设角色的多智能体自主协同能力。论文对智能体如何分工、沟通和应对挫折的详细分析，为理解前沿模型中涌现的多智能体行为提供了难得的实证洞见。

3. **[Knowledge That Is Linear Before Fine-Tuning Generalizes After It](http://arxiv.org/abs/2610.22300v1)**  
   主动/惰性事实的区分解答了LLM知识表示中的一个根本问题：为什么有些事实仅被记住，而有些事实能支持推理和泛化。该研究结果对模型编辑、持续学习和对齐具有广泛意义，是理解微调如何修改模型知识的基础性贡献。

---

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*