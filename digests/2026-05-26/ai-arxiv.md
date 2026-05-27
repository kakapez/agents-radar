# ArXiv AI 研究日报 2026-05-26

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-26 14:07 UTC

---

## **ArXiv AI 研究日报 (2026-05-26)**

### **今日速览**
今日的研究焦点显著地从**模型能力的“内卷”转向了系统能力的“外拓”**。围绕大语言模型（LLM）智能体，研究者们正在构建更可靠、可验证的模拟环境（如MobileGym）和更模块化、可审计的系统架构（“Scaling the Harness”）。同时，模型评估领域正经历深刻反思，不仅出现了针对评估工具自身的审计框架，也涌现出将科学发现能力、市场承诺理解等作为新评估维度的基准。此外，**多模态持续学习**和**生成模型与强化学习的深度结合**（如AdvantageFlow）是两个值得关注的新兴技术方向。

### **重点论文**

#### **🧠 大语言模型（架构、训练、对齐、评估）**
1.  **Forgetting in Language Models: Capacity, Optimization, and Self-Generated Replay**
    [链接](http://arxiv.org/abs/2605.26097v1) | 作者：Marek et al.
    > 揭示了语言模型能通过自我生成回放数据来抗遗忘，而非依赖外部存储，这对理解模型内部机制和高效训练具有重要意义。

2.  **Looped Diffusion Language Models**
    [链接](http://arxiv.org/abs/2605.26106v1) | 作者：Lee et al.
    > 提出通过选择性循环早期-中期Transformer层来显著提升掩码扩散语言模型（MDM）的生成质量和效率，是对非自回归语言模型架构的一次有效探索。

3.  **Language Models Need Sleep**
    [链接](http://arxiv.org/abs/2605.26099v1) | 作者：Lee et al.
    > 借鉴人类睡眠机制，研究模型通过“睡眠”将近期上下文整合为持久快速权重，以提升长上下文任务的处理能力，视角新颖。

#### **🤖 智能体与推理（规划、工具使用、多智能体、思维链）**
4.  **MobileGym: A Verifiable and Highly Parallel Simulation Platform for Mobile GUI Agent Research**
    [链接](http://arxiv.org/abs/2605.26114v1) | 作者：Wu et al.
    > 为移动GUI智能体研究提供了首个可验证、高保真且完全可控的仿真环境，解决了该领域长期缺乏可靠评估基准的痛点。

5.  **From Model Scaling to System Scaling: Scaling the Harness in Agentic AI**
    [链接](http://arxiv.org/abs/2605.26112v1) | 作者：Gu
    > 提出AI智能体的下一场革命在于“系统扩展”而非“模型扩展”，即构建可审计、持久、模块化的执行架构，具有重要的范式指导意义。

6.  **VeriTrace: Evolving Mental Models for Deep Research Agents**
    [链接](http://arxiv.org/abs/2605.26081v1) | 作者：Zhao et al.
    > 关注深度研究智能体中“心智模型”的显式演化与管理，旨在防止信息污染，提升复杂、不确定环境下的研究可靠性。

7.  **CausaLab: A Scalable Environment for Interactive Causal Discovery Toward AI Scientists**
    [链接](http://arxiv.org/abs/2605.26029v1) | 作者：Yang et al.
    > 构建了一个交互式因果发现环境，用于评估LLM智能体能否像科学家一样进行假设生成与验证，推动了“AI科学家”能力评估的标准化。

#### **🔧 方法与框架（新技术、基准测试、效率优化）**
8.  **Automated Benchmark Auditing for AI Agents and Large Language Models**
    [链接](http://arxiv.org/abs/2605.26079v1) | 作者：Wang et al.
    > 首次提出自动化基准审计框架，用于检测专家设计的基准任务中的隐含假设和脆弱评估逻辑，直指当前评估体系的核心缺陷。

9.  **DiscoverPhysics: Benchmarking LLMs for Out-of-the-Box Scientific Thinking**
    [链接](http://arxiv.org/abs/2605.26087v1) | 作者：Wiemann et al.
    > 设计了一个交互式基准，要求LLM智能体通过实验主动发现未知物理定律，旨在衡量真正的科学推理能力而非知识回忆。

10. **Deployment-complete benchmarking**
    [链接](http://arxiv.org/abs/2605.25997v1) | 作者：Mansouri et al.
    > 提出“部署完备基准”概念，强调评估结果应能直接决定部署行动，推动了评估方法与下游任务决策的紧密耦合。

#### **📊 应用（垂直领域、多模态、代码生成）**
11. **Prism: A Plug-in Reproducible Infrastructure for Scalable Multimodal Continual Instruction Tuning**
    [链接](http://arxiv.org/abs/2605.26110v1) | 作者：Tang et al.
    > 为多模态大模型（MLLM）的持续指令微调提供了一个可复现、模块化的基础架构，解决了该领域缺乏标准化训练流程和可复现性工具的问题。

12. **AdvantageFlow: Advantage-Weighted Least Squares for RL in Flow Models**
    [链接](http://arxiv.org/abs/2605.26013v1) | 作者：Kveton et al.
    > 将强化学习与流模型（如Rectified Flow）的前向过程结合，用于图像生成等任务的对齐，是生成模型优化方法的新尝试。

13. **MAGIC: Multimodal Alignment & Grounding-aware Instruction Coreset for Vision-Language Models**
    [链接](http://arxiv.org/abs/2605.26004v1) | 作者：Biswas et al.
    > 提出基于多模态对齐与定位感知的核心集选择方法，用于优化海量视觉-语言指令数据，提升指令微调的效率和质量。

### **研究趋势信号**
今日投稿清晰地揭示了三个新兴趋势：第一，**智能体研究的“基建化”**，即从追求单一模型性能，转向构建可验证、模块化、可审计的智能体运行时环境（Harness）和系统架构，这标志着该领域正从原型探索走向工程化。第二，**评估的“元评估”与“场景化”**，研究者不仅关注模型评估，更开始评估“评估工具”本身的可靠性（如Auto Benchmark Auditing），同时设计出更贴近真实世界复杂应用（如市场决策、科学发现）的评估场景。第三，**模型效率与持续学习的“工具化”**，针对多模态模型持续适应新任务的需求，出现了像Prism这样的即插即用式基础设施，旨在将持续学习从研究技巧转化为可复现的工程实践。

### **值得精读**
1.  **From Model Scaling to System Scaling: Scaling the Harness in Agentic AI**
    [链接](http://arxiv.org/abs/2605.26112v1)
    **理由**：这是一篇**视角宏大的框架性思考论文**。它超越了当前对模型能力的追逐，率先系统性地论证了智能体AI发展的下一瓶颈在于“系统层”——即围绕基础模型的执行架构。对于所有从事智能体系统设计、平台开发和评估的研究者与工程师，这篇论文提供了极具启发性的顶层设计思路。

2.  **DiscoverPhysics: Benchmarking LLMs for Out-of-the-Box Scientific Thinking**
    [链接](http://arxiv.org/abs/2605.26087v1)
    **理由**：该基准在评估理念上实现了**重要突破**。它不再测试LLM“知道什么”，而是测试其“能否像科学家一样发现”，通过让模型主动设计实验来探索未知物理定律，真正衡量了假设生成、实验设计和因果推理等核心科学能力，是评估AI科学潜力的标杆之作。

3.  **Automated Benchmark Auditing for AI Agents and Large Language Models**
    [链接](http://arxiv.org/abs/2605.26079v1)
    **理由**：这篇论文触及了当前AI评估领域的**“阿喀琉斯之踵”**——基准测试自身的质量。它提出的自动化审计方法，为确保评估结果的可靠性和公平性提供了必要的工具和视角。任何依赖复杂基准进行模型评估和比较的研究者，都应关注此方法以反思和提升自身评估体系的质量。