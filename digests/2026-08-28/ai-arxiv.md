# ArXiv AI 研究日报 2026-08-28

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-28 05:58 UTC

---

# ArXiv AI 研究日报
发布日期：2026-08-28 | 统计范围：当日cs.AI、cs.CL、cs.LG领域50篇最新投稿

---

## 今日速览
今日AI领域投稿呈现极强的落地导向，核心围绕大语言模型推理优化、智能体全链路技术迭代两大主线产出多个范式级新成果。推理时优化系列工作首次提出无需大量重复生成、无需外部标注的弱到强泛化方案，大幅降低大模型推理增益的算力成本。开源社区发布仅需单消费级RTX 5090、总预算低于5090美元即可完成的2B大模型预训练方案，大幅降低中小团队大模型研发门槛。智能体方向同步覆盖红队测试、对齐审计、工业级基准建设、高质量数据标准等落地痛点，补全生产部署的关键技术缺口。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **[Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090](http://arxiv.org/abs/2608.27370v1)**
   作者：Kairong Luo et al. | 核心贡献：提出轻量化大模型预训练全流程低成本方案，基于Qwen2架构扩展得到2B参数模型，总训练成本控制在5090美元以内，为小团队提供了可复制的大模型预训练平民化路径。
2. **[Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO](http://arxiv.org/abs/2608.27351v1)**
   作者：Yunpeng Ba et al. | 核心贡献：系统论证进化策略（ES）用于大模型推理后训练的优势，证明其相比主流GRPO方案能获得更宽的推理覆盖度，为低显存下做大模型推理能力升级提供了新选择。
3. **[Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance](http://arxiv.org/abs/2608.27340v1)**
   作者：Allison Zhuang et al. | 核心贡献：打破了评估认知（eval-awareness）是单一属性的固有认知，发现能力表述框架可以预测模型在测试场景下的合规性，为大模型安全评估管线优化提供了全新思路。
4. **[Your Voice Cloning System is Secretly a Voice Anonymizer](http://arxiv.org/abs/2608.27360v1)**
   作者：Romolo Muletta et al. | 核心贡献：无需微调即可将主流多语言语音克隆模型XTTSv2直接复用为 speaker 匿名化工具，在保留语音语义内容的同时完全擦除说话人身份属性，大幅降低语音隐私保护的落地成本。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **[CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1)**
   作者：Yufan Wu et al. | 核心贡献：提出全新推理时泛化框架，无需重复生成、外部验证，仅利用小语言模型的失败案例即可驱动大模型实现推理性能跃升，开辟了推理时缩放的低成本新范式。
2. **[TTPO: Test-Time Policy Optimization](http://arxiv.org/abs/2608.27448v1)**
   作者：Aozhe Wang et al. | 核心贡献：首次实现无标注的大模型测试时策略优化，完全摆脱传统RL、自蒸馏方法对真值标签的依赖，可在推理阶段动态提升大模型的数学推理性能。
3. **[RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution](http://arxiv.org/abs/2608.27439v1)**
   作者：Junjie Zhang et al. | 核心贡献：提出经验驱动技能演化的自动红队智能体，跳出传统固定攻击集的局限，可以自主迭代生成新型越狱攻击手段，大幅提升LLM智能体工具调用场景的安全测试覆盖度。
4. **[INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment](http://arxiv.org/abs/2608.27348v1)**
   作者：Yutong Zhang et al. | 核心贡献：提出将智能体内在意图抽象为可审计工具的架构，大幅降低智能体工具调用场景下的错配行为追踪难度，为生产级智能体的安全管控提供了可落地方案。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **[SWE-Prime: Fewer Trajectories, Better Performance](http://arxiv.org/abs/2608.27449v1)**
   作者：Dewu Zheng et al. | 核心贡献：打破了代码智能体训练依赖海量成功轨迹的固有思路，提出的筛选方案仅用少量高质量轨迹即可训练出性能更优的软件问题解决大模型，大幅降低代码智能体的训练数据成本。
2. **[From Static to Dynamic: Benchmarking Real-World Code Review with MCR-Bench](http://arxiv.org/abs/2608.27442v1)**
   作者：Dewu Zheng et al. | 核心贡献：构建了首个面向真实迭代场景的动态代码评审基准MCR-Bench，覆盖多轮交互的代码评审全流程，弥补了现有静态代码评测无法反映真实开发场景的缺陷。
3. **[Naive Prompt Optimization: Rethinking the Need for Complex Prompt Search](http://arxiv.org/abs/2608.27266v1)**
   作者：Yuan Chang et al. | 核心贡献：证明极简的朴素提示优化方案即可达到和复杂提示搜索算法相当的性能，破除了当前提示优化领域盲目追求复杂算法的迷思，大幅降低智能体提示优化的工程成本。

### 📊 应用（垂直领域、多模态、代码生成）
1. **[WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](http://arxiv.org/abs/2608.27454v1)**
   作者：Liyan Tang et al. | 核心贡献：提出将智能体交互经验沉淀为可复用技能知识库的框架WikiSkill，实现智能体能力的可持续迭代，为长生命周期智能体的能力演化提供了通用架构。
2. **[LLMs Can Design Near-Optimal OR Algorithms](http://arxiv.org/abs/2608.27296v1)**
   作者：Jackie Baek | 核心贡献：验证了大语言模型可以直接生成接近最优解的运筹学算法，覆盖库存控制、排队网络优化等经典OR任务，为工业界运筹优化问题的低成本落地提供了全新路径。

---

## 研究趋势信号
今日投稿集中体现AI研发从前沿指标竞赛向工业落地技术沉淀转向的明确信号：一方面大量工作跳出对大算力、强标注的依赖，探索弱模型指导、无标注测试时优化等低成本升级路径；另一方面智能体方向从零散的单点能力创新转向全链路技术栈补全，覆盖基准建设、安全审计、数据标准、技能演化等生产级部署必须解决的核心痛点，同时面向企业、残障包容等小众场景的专项基准开始快速涌现。

---

## 值得精读
1. **[Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090](http://arxiv.org/abs/2608.27370v1)**：打破了大模型预训练必须百万级美元预算的行业认知，完整的低预算训练配方能够直接赋能中小高校、个人研究者参与大模型原生创新，普惠价值极高。
2. **[What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents](http://arxiv.org/abs/2608.27260v1)**：首次系统性定义了高质量智能体交互数据的评价标准，跳出之前靠堆数据量提升智能体性能的误区，为智能体训练的数据管线建设提供了完整的顶层指导。
3. **[CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1)**：跳出了当前推理时缩放依赖多轮采样、外部验证的固有范式，开辟了利用小模型失败轨迹直接给大模型推理提效的全新方向，相关思路可以直接落地到现有大模型服务链路中降低推理成本。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*