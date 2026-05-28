# ArXiv AI 研究日报 2026-05-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-28 23:17 UTC

---

# ArXiv AI 研究日报 | 2026-05-29
今日覆盖cs.AI、cs.CL、cs.LG分类共50篇最新投稿

---

## 今日速览
今日上线的50篇AI论文集中围绕大模型落地的核心痛点展开，首次出现了从稳定性-塑性经典两难视角系统性重估全品类PEFT方案的基准PEFT-Arena，打破了过往仅以下游准确率评价PEFT的行业惯例。多项研究跳出纯性能刷点的思路，针对当前LLM评测、智能体可靠性等领域普遍存在的“性能注水”现象提出了严谨的实证批判。同时大模型训练与推理的边界正在消融，零阶微调等新范式被证明可直接复用推理基础设施，大幅降低大模型适配的资源门槛。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **PEFT-Arena: Understanding Parameter-Efficient Finetuning from a Stability-Plasticity Perspective**  
链接: http://arxiv.org/abs/2605.28819v1 | 作者: Yangyi Huang等  
一句话说明：搭建了首个面向PEFT方案的稳定性-塑性联合评测基准，揭示了当前主流PEFT方法在下游精度与预训练能力保留之间的权衡规律，为PEFT选型提供了全新维度的权威参考。
2. **Self-Improving Language Models with Bidirectional Evolutionary Search**  
链接: http://arxiv.org/abs/2605.28814v1 | 作者: Guowei Xu等  
一句话说明：提出双向进化搜索框架解决传统Best-of-N、树搜索自改进方法的稀疏奖励问题，在不引入额外强监督的前提下显著提升LLM推理自迭代效率。
3. **Towards Reliable Multilingual LLMs-as-a-Judge: An Empirical Study**  
链接: http://arxiv.org/abs/2605.28710v1 | 作者: Irune Zubiaga等  
一句话说明：首次系统性完成了多语言场景下LLM作为自动评估者的可靠性实证分析，明确了低资源语言评测场景下LLM-as-judge的失效边界与优化方向。
4. **The Importance of Being Statistically Earnest: A Critical Re-evaluation of GSM-Symbolic**  
链接: http://arxiv.org/abs/2605.28700v1 | 作者: Dominika Agnieszka Długosz等  
一句话说明：从统计严谨性角度推翻了此前GSM-Symbolic基准提出的“所有现有LLM都不具备符号推理能力”的激进结论，为后续推理评测基准的设计提供了严谨性规范。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **Rethinking Memory as Continuously Evolving Connectivity**  
链接: http://arxiv.org/abs/2605.28773v1 | 作者: Jizhan Fang等  
一句话说明：跳出传统把记忆当静态存储库的固化思路，提出将大模型智能体记忆建模为动态演化的连接网络，大幅提升动态环境下的记忆复用与抗干扰能力。
2. **LiveBrowseComp: Are Search Agents Searching, or Just Verifying What They Already Know?**  
链接: http://arxiv.org/abs/2605.28721v1 | 作者: HuiMing Fan等  
一句话说明：通过严格对照实验证明当前主流搜索智能体普遍存在“内在知识依赖”问题，大部分场景下并未真的执行搜索，而是用网络结果为自身已有知识做背书，戳破了当前检索增强智能体的性能泡沫。
3. **SwarmHarness: Skill-Based Task Routing via Decentralized Incentive-Aligned AI Agent Networks**  
链接: http://arxiv.org/abs/2605.28764v1 | 作者: Edwin Jose  
一句话说明：提出无中心化协调的分布式AI智能体网络协议，通过激励对齐实现闲置边缘/家庭GPU资源的安全调度，为构建大规模分布式智能体集群提供了可行技术路径。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **LLM Zeroth-Order Fine-Tuning is an Inference Workload**  
链接: http://arxiv.org/abs/2605.28760v1 | 作者: Zelin Li等  
一句话说明：反常识地论证了零阶微调本质是仅依赖前向传播的推理类工作负载，完全可以复用现有推理集群的基础设施实现，彻底消除了此前零阶微调需要专用训练集群的资源门槛。
2. **Ω-QVLA: Robust Quantization for Vision-Language-Action Models via Composite Rotation and Per-step Scaling**  
链接: http://arxiv.org/abs/2605.28803v1 | 作者: Xinyu Wang等  
一句话说明：面向机器人领域广泛使用的VLA模型提出了全新的鲁棒量化方案，解决了此前VLA多模态骨干+扩散动作头无法同时高效压缩的行业痛点，将VLA端侧部署的参数开销降低70%以上。
3. **CORE: Contrastive Reflection Enables Rapid Improvements in Reasoning**  
链接: http://arxiv.org/abs/2605.28742v1 | 作者: Linas Nasvytis等  
一句话说明：提出对比反思框架，仅需几十条训练样本即可实现大模型推理能力的快速提升，对比此前RLVR等方案将自改进所需的样本量降低一个数量级。

---

### 📊 应用（垂直领域、多模态、代码生成）
1. **Beyond Binary: Sim-to-Real Dexterous Manipulation with Physics-Grounded Contact Representation**  
链接: http://arxiv.org/abs/2605.28812v1 | 作者: Jiahe Pan等  
一句话说明：提出基于物理建模的接触表示方法，大幅缩小了灵巧操作领域的Sim2Real鸿沟，首次实现了触觉等高密度接触信息从仿真到真实世界的高效迁移。
2. **Code as a Weapon: A Consensus-Labeled Prompt Bank for Measuring Coding-Model Compliance with Malicious-Code Requests**  
链接: http://arxiv.org/abs/2605.28734v1 | 作者: Richard J. Young等  
一句话说明：构建了首个经过共识标注的

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*