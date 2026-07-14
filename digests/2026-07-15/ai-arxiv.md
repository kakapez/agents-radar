# ArXiv AI 研究日报 2026-07-15

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-14 22:56 UTC

---

# ArXiv AI 研究日报 2026-07-15
---
## 今日速览
今日共收录50篇cs.AI、cs.CL、cs.LG领域最新ArXiv投稿，核心方向覆盖大模型机制解析、智能体安全评测、模型效率优化、具身智能落地四大板块。多篇前沿工作填补了LLM元认知底层逻辑、LLM-as-Judge偏差形成机制、多智能体分布式隐害等此前研究的空白。同时新发布了高等数学证明评测、多模态工具调用评测等多个高实用性基准，配套开源框架直接降低相关领域研究门槛。理论层面Transformer归纳动力学、Grokking可控性等方向的突破也为大模型训练优化提供了可落地的新路径。
---
## 重点论文（共12篇）
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **《Metacognition in LLMs: Foundations, Progress, and Opportunities》** http://arxiv.org/abs/2607.11881v1
   作者：Gabrielle Kaili-May Liu et al.
   说明：系统梳理大模型元认知领域的研究基础、当前进展与未来方向，是该赛道目前最完整的路线图类综述，为打造透明、高可靠性LLM提供了顶层参考框架。
2. **《Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias》** http://arxiv.org/abs/2607.11871v1
   作者：Zixiang Xu et al.
   说明：跳出此前输入扰动层面的LLM裁判偏差研究范式，首次从隐藏层表征维度解析偏差形成机理，提供了更底层的偏差检测与缓解思路。
3. **《How Temperature Shapes Ideological Discourse in Retrieval-Augmented Generation?》** http://arxiv.org/abs/2607.11783v1
   作者：Elmira Salari et al.
   说明：首次系统性揭示RAG系统中温度参数对输出意识形态倾向的影响规律，为RAG内容安全管控提供了此前未被关注的优化维度。
4. **《Production and Perception in LLMs: A Token Probability Approach》** http://arxiv.org/abs/2607.11703v1
   作者：Anna Marklová et al.
   说明：从token概率分布视角验证大模型也存在类似人类的语言生成-感知不对称性，为理解LLM的底层认知特性提供了新的实证依据。

### 🤖 智能体与推理
1. **《When Local Monitors Miss Compositional Harm: Diagnosing Distributed Backdoors in Multi-Agent Systems》** http://arxiv.org/abs/2607.11751v1
   作者：Yibo Hu et al.
   说明：首次发现多智能体系统的分布式后门漏洞——恶意载荷拆分后可绕过所有单节点本地检测，直接点出当前LLM智能体安全体系的核心盲区。
2. **《Agent Hacks Agent: Autoresearch for Production-Agent Red-Teaming》** http://arxiv.org/abs/2607.11698v1
   作者：Xutao Mao et al.
   说明：提出用智能体自动对生产级LLM代理进行红队测试的框架，大幅提升复杂工作流下智能体漏洞挖掘效率。
3. **《Think Through a Bottleneck: Hourglass Reasoning for Rigorous Induction》** http://arxiv.org/abs/2607.11696v1
   作者：Huan Zhu
   说明：提出沙漏式推理架构，通过强制隔离不同推理阶段的信息流，解决了此前自细化提示无法提升少样本归纳推理性能的痛点。
4. **《MM-ToolSandBox: A Unified Framework for Evaluating Visual Tool-Calling Agents》** http://arxiv.org/abs/2607.11818v1
   作者：Kaixin Ma et al.
   说明：开源覆盖16个领域500+工具的多模态工具调用智能体评测框架，补齐了此前视觉接地类智能体缺乏统一评测基准的短板。

### 🔧 方法与框架
1. **《Sequential Coding: Pushing the Limits of Model Compression with Self-Generated Training Data》** http://arxiv.org/abs/2607.11883v1
   作者：Shikai Qiu et al.
   说明：提出全新的序列编码模型压缩范式，利用模型自生成训练数据突破现有压缩技术的性能上限，为端侧部署大模型提供了新路径。
2. **《Invariant Learning Dynamics of Transformers in Inductive Reasoning Tasks》** http://arxiv.org/abs/2607.11875v1
   作者：Tiberiu Musat et al.
   说明：建立通用理论框架解释Transformer归纳推理能力的涌现规律，跳出此前绑定特定任务的动力学研究局限。
3. **《RAGU: A Multi-Step GraphRAG Engine with a Compact Domain-Adapted LLM》** http://arxiv.org/abs/2607.11683v1
   作者：Mikhail Komarov et al.
   说明：开源多步提取的轻量化GraphRAG引擎，解决了传统单次知识图谱生成噪声大、检索鲁棒性差的问题。
4. **《How to Tame Grokking: Representation Geometry as a Control Signal》** http://arxiv.org/abs/2607.11666v1
   作者：Maksim A Kazanskii
   说明：发现可通过表征几何属性作为控制信号，

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*