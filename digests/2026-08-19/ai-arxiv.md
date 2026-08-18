# ArXiv AI 研究日报 2026-08-19

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-18 22:22 UTC

---

# ArXiv AI 研究日报（2026-08-19）
今日覆盖cs.AI、cs.CL、cs.LG板块共50篇最新投稿

---

## 今日速览
今日投稿覆盖大模型安全对齐、具身长周期任务、长上下文效率优化、高可信垂直落地等多个核心赛道。多篇论文针对性解决了现有VLA系统误差累积、RAG检索证据失效等长期存在的行业痛点，更首次披露了「模型催眠」这一可跨模型实现强行为控制的新型攻击路径。同时一批面向金融审计、医疗AI、自动驾驶等高风险场景的落地框架集中发布，配套推出的可验证解释性评测新范式也为高可信AI的规模化落地扫清了标准层面的障碍。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **Model Hypnosis: Strong control of AI via additive subliminal effects**  
   链接: http://arxiv.org/abs/2608.16834v1 | 作者: Enric Boix-Adsera等  
   一句话说明：首次定义并验证「模型催眠」现象，证明跨家族、不同参数规模的大模型都能通过组合多个看似无关的弱潜在线索实现完全的行为控制，是LLM安全领域的突破性发现。
2. **Policy Iteration with Human Feedback: Bringing Post-Training RL to In-context Learning**  
   链接: http://arxiv.org/abs/2608.16831v1 | 作者: Minh-Ha Nguyen等  
   一句话说明：把传统强化学习的策略迭代和人类反馈引入上下文学习范式，无需全参数微调就能实现大模型行为的精准对齐，大幅降低RLHF的部署成本。
3. **Le Critique: Privileged Value Functions for LLM Reinforcement Learning**  
   链接: http://arxiv.org/abs/2608.16739v1 | 作者: Siddarth Venkatraman等  
   一句话说明：针对现有LLM RL算法只能拿到序列级奖励的短板，设计特权价值函数实现细粒度步级信用分配，大幅降低大模型强化学习的训练方差。
4. **Would this change your answer? Evaluating Explanations of LLM Behavior In The Wild with Counterfactual Experiments**  
   链接: http://arxiv.org/abs/2608.16747v1 | 作者: Adam Karvonen等  
   一句话说明：提出基于反事实可模拟性的LLM解释性评测新标准，解决了过往解释性研究无法验证「好解释」有效性的行业痛点。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory**  
   链接: http://arxiv.org/abs/2608.16889v1 | 作者: Bingxin Xu等  
   一句话说明：针对长周期机器人操作的误差累积问题，提出基于智能体子任务探索和转移感知记忆的新框架，大幅提升多阶段接触型操作任务的成功率。
2. **When State Becomes an Attack Surface: State-Semantic Injection in LLM-Driven Embodied Agents**  
   链接: http://arxiv.org/abs/2608.16806v1 | 作者: Jiawei Liu等  
   一句话说明：首次定义LLM具身智能体的「状态语义注入」攻击面，证明攻击者可通过篡改环境状态的语义描述完全操控智能体行动，为具身安全防护提供了全新研究视角。
3. **GRIP: Grounded Reasoning via Information-Restricted Premises**  
   链接: http://arxiv.org/abs/2608.16776v1 | 作者: Lirui Teng等  
   一句话说明：解决了现有RAG系统中查询主导潜态、检索证据完全失效的「查询支配」问题，通过信息受限前提设计大幅提升检索增强推理的事实准确率。
4. **When Agents Coordinate: Measuring Coordination in Multi-Agent AI Coding**  
   链接: http://arxiv.org/abs/2608.16801v1 | 作者: Giuseppe Destefanis等  
   一句话说明：推出首个多智能体代码开发场景下的协作度量化评测工具，填补了过往多智能体研究只看任务成功率、不评估内部协作效率的空白。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **Proteus: Incremental Memory Activation for Long-Context Sequence Modeling**  
   链接: http://arxiv.org/abs/2608.16844v1 | 作者: Reza Bayat等  
   一句话说明：提出增量内存激活的长上下文序列建模新架构，打破了过往内存模型全程暴露静态内存的固有缺陷，长上下文处理效率和准确率均实现显著提升。
2. **What Do Compliance Detectors Read? An Audit of Activation Probes and Guard Models**  
   链接: http://arxiv.org/abs/2608.16852v1 | 作者: Saisab Sadhu等  
   一句话说明：对当前主流LLM部署中广泛使用的合规检测探针、防护模型开展系统性审计，发现多数现有合规方案无法真正识别输出内容是否符合监管规则，为高合规场景的大模型部署敲响警钟。
3. **CaliBench: Are the Stochastic Dynamics of Video World Models Physically Calibrated?**  
   链接: http://arxiv.org/abs/2608.16829v1 | 作者: Jonathan Sadeghi等  
   一句话说明：发布针对视频世界模型物理动力学随机性的全新基准，首次实现对生成样本细粒度任意现象的不确定性校验，填补了世界模型评测领域的空白。
4. **AutoSR: Automatic Symbolic Regression by Searching Research States**  
   链接: http://arxiv.org/abs/2608.16876v1 | 作者: Kejia Zhang等  
   一句话说明：推出全自动符号回归系统AutoSR，不再搜索孤立方程而是对持续科学研究状态做遍历，能从噪声有限的数据中挖掘出更符合科学规律的可解释表达式。

### 📊 应用（垂直领域、多模态、代码生成）
1. **LAVA: Logic-Aware Validation and Augmentation Framework for Large-Scale Financial Document Auditing**  
   链接: http://arxiv.org/abs/2608.16763v1 | 作者: Ruoqi Shu等  
   一句话说明：针对金融文档审计的高准确性、高一致性要求，推出逻辑感知的大规模校验增强框架，在异构格式的工资核算、税务合规、信贷审批场景下实现零逻辑错误。
2. **TDD-Agent: Test-Driven Reasoning for Code Generation**  
   链接: http://arxiv.org/abs/2608.16742v1 | 作者: Hongyue Yu等  
   一句话说明：把软件工程中的测试驱动开发范式引入LLM代码生成，用动态生成的测试用例全程引导实现，大幅提升仓库级复杂代码生成的正确率。
3. **MIRROR: Multimodal Intelligent Radiology Reasoning and Observation Reporter**  
   链接: http://arxiv.org/abs/2608.16709v1 | 作者: Vignesh Nagarajan等  
   一句话说明：推出多模态放射科推理报告系统，实现分类结果和自然语言报告的完全解耦，从根源上避免生成式医疗AI系统凭空编造不存在的诊断结论。

---

## 研究趋势信号
今日投稿集中释放出高可信AI成为行业核心共识的明确信号：大模型安全研究正在从传统对抗Prompt探测，快速延伸到潜在线索控制、具身智能体状态注入等全新攻击面，面向金融、医疗、自动驾驶等高风险场景的AI系统也开始原生嵌入可审计、逻辑可校验的设计，不再依赖事后补全的合规方案，整体技术落地的严谨性正在快速提升。

---

## 值得精读
1. **《Model Hypnosis: Strong control of AI via additive subliminal effects》**：首次系统性验证了跨模型家族、跨参数规模的大模型都能被多个看似无关的弱潜在线索组合实现完全行为控制，这一安全发现几乎影响所有正在落地的大模型应用，参考价值极高。
2. **《Proteus: Incremental Memory Activation for Long-Context Sequence Modeling》**：提出的

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*