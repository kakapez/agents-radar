# ArXiv AI 研究日报 2026-07-23

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-22 23:03 UTC

---

# ArXiv AI 研究日报 | 2026年7月23日
---
## 今日速览
今日ArXiv计算机领域AI相关投稿共50篇，核心围绕大模型训练范式迭代、智能体生产级落地两大主线推进。近期行业高度关注的可验证奖励强化学习（RLVR）方向集中释放多项突破，解决了硬问题下无有效学习信号的长期痛点。同时大量面向工程实践的编排框架、垂直场景专属评测基准集中发布，覆盖代码研发、金融风控、医疗病理等多个高价值赛道。生成式AI安全研究也从远期极端风险讨论转向真实场景下的隐性故障、供应链攻击等产业迫切需要解决的现实问题。
---
## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **Copy Less, Ground More: Overcoming Repetitive Copying in Long-Context Reasoning via Evidence-Aware Reinforcement Learning**  
   链接：http://arxiv.org/abs/2607.19345v1 | 作者：Lizhe Fang 等  
   一句话说明：首次系统性定位长上下文推理中普遍存在的模型重复复制输入内容的失效问题，提出证据感知强化学习方案大幅降低无意义重复输出占比，显著提升长文档问答、推理任务性能。
2. **Prompt Design at Scale: How Format, Instruction Count, and Context Length Shape Instruction Adherence and Hallucination in Large Language Models**  
   链接：http://arxiv.org/abs/2607.19257v1 | 作者：Netanel Eliav  
   一句话说明：通过大规模对照实验量化了提示格式、指令数量、上下文长度三个核心变量对LLM指令遵从度、幻觉率的影响，为工业界提示工程提供了可落地的量化参考依据。
3. **Inference-Time Steering for Cross-Lingual Factual Consistency in LLMs**  
   链接：http://arxiv.org/abs/2607.19243v1 | 作者：Alexander Manev  
   一句话说明：提出推理阶段定向调控方案，缓解当前LLM高资源语言知识偏向导致的跨语言事实不一致问题，大幅提升小语种场景下的输出可靠性。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **Agents in the Wild: Where Research Meets Deployment**  
   链接：http://arxiv.org/abs/2607.19336v1 | 作者：Grace Hui Yang 等  
   一句话说明：系统性梳理了当前LLM智能体从实验室原型转向生产级部署的核心挑战与实践路径，是产业从业者不可多得的落地指南类综述。
2. **CodeRescue: Budget-Calibrated Recovery Routing for Coding Agents**  
   链接：http://arxiv.org/abs/2607.19338v1 | 作者：Qijia He 等  
   一句话说明：针对编码智能体失败重试场景，提出预算校准的恢复路由机制，在保证代码生成准确率的前提下大幅降低大模型调用综合成本。
3. **Graph-Based Agentic AI with LangGraph: Workflow Pathways for Long-Running Stateful Business Processes**  
   链接：http://arxiv.org/abs/2607.19297v1 | 作者：Daniel Pearson 等  
   一句话说明：作为LangGraph团队出品的工业实践指南，给出了面向长周期有状态企业业务流程的智能体编排完整落地范式。
4. **Off-Context GRPO: Learning to Reason on Hard Problems using Privileged Information**  
   链接：http://arxiv.org/abs/2607.19313v1 | 作者：Priyank Agrawal 等  
   一句话说明：解决了RLVR训练中模型完全生成不出正确解就无法获得学习信号的冷启动问题，大幅提升了LLM在高难度数学、代码类任务上的RL训练效率。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **ISO: An RLVR-Native Optimization Stack**  
   链接：http://arxiv.org/abs/2607.19331v1 | 作者：Hanqing Zhu 等  
   一句话说明：推出首个原生面向可验证奖励强化学习的完整优化栈，打通了从奖励信号生成到大模型权重更新的全链路，大幅降低RLVR技术落地门槛。
2. **CircuitKIT : Circuit Discovery, Evaluation, and Application Toolkit for Mechanistic Interpretability**  
   链接：http://arxiv.org/abs/2607.19317v1 | 作者：Pratinav Seth 等  
   一句话说明：推出大模型可解释性研究全流程工具包，一站式支持Transformer内部电路的发现、评估、干预全流程操作，大幅降低相关研究的开发成本。
3. **AdaFlash: Adaptive Speculative Decoding via On-Policy Distilled Diffusion Drafters**  
   链接：http://arxiv.org/abs/2607.19223v1 | 作者：Yu-Yang Qian 等  
   一句话说明：提出全新的自适应投机解码方案，用扩散模型作为草稿器，在不损失生成质量的前提下将大模型推理速度提升数倍。
4. **Provable diffusion-based posterior sampling for linear inverse problems via DDIM**  
   链接：http://arxiv.org/abs/2607.19333v1 | 作者：Yuchen Jiao 等  
   一句话说明：为扩散方法求解线性逆问题提供了严格的理论收敛证明，补上了该领域长期缺失的理论严谨性短板。

### 📊 应用（垂直领域、多模态、代码生成）
1. **PathAgentBench: Benchmarking Evidence-Seeking Vision-Language Models on Whole-Slide Pathology Image**  
   链接：http://arxiv.org/abs/2607.19261v1 | 作者：Dankai Liao 等  
   一句话说明：推出首个面向全切片病理图像的多模态智能体评测基准，推动医疗多模态模型从做选择题向自主检索诊断证据的方向进化。
2. **They'll Verify. They Just Won't Act. How Authority Framing and Laundered Code Turn a Trusted Agentic CI/CD Pipeline Into an Attack Surface**  
   链接：http://arxiv.org/abs/2607.19267v1 | 作者：Yohann Sidot  
   一句话说明：首次系统性验证了智能体驱动的CI/CD流水线存在的新型供应链攻击风险，为AI软件工程安全提供了重要参考。
3. **Reasoning Before Translation: Enhancing Legal Machine Translation with Structured Reasoning**  
   链接：http://arxiv.org/abs/2607.19181v1 | 作者：Aixiu An 等  
   一句话说明：将结构化推理引入法律翻译场景，解决了法律文本对术语、逻辑严谨性的超高要求难题，在法律翻译任务上取得SOTA性能。
---
## 研究趋势信号
从今日投稿可以观察到两个明确的产业级趋势：一是RLVR已经从零散的单点算法创新，进化出了全栈优化框架、面向多下游任务的适配方案，正在快速成为大模型后训练的主流范式；二是AI安全的研究重心已经从讨论远期极端风险，转向真实部署场景下的隐性故障、智能体供应链攻击、合规可审计性等产业落地迫切需要解决的现实问题，产学研两端的方向对齐度明显提升。
---
## 值得精读
1. **《Agents in the Wild: Where Research Meets Deployment》**：作为梳理智能体从研究到部署路径的全景式综述，覆盖了软件研发、科学发现等多个落地场景的踩坑经验，是所有做LLM智能体落地的从业者必读的指南类文献。
2. **《ISO: An RLVR-Native Optimization Stack》**：RLVR是当前公认的下一代大模型对齐核心技术，这篇工作完整公开了全链路

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*