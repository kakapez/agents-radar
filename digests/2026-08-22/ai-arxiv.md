# ArXiv AI 研究日报 2026-08-22

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-21 22:24 UTC

---

# ArXiv AI 研究日报 2026-08-22
今日覆盖cs.AI、cs.CL、cs.LG分类共50篇最新AI投稿

---

## 今日速览
今日AI领域投稿核心研究集中在大模型能力评估、智能体落地优化、垂直场景合规AI三大方向。多篇全新基准填补了领域长期的评估空白，覆盖上下文敏感模型遗忘、递归自改进真实性、LLM记忆认知陷阱等此前被忽略的细分维度。智能体研究从单工具调用向跨任务技能迁移、推理算力自适应分配的全链路优化延伸，出现了业界首个原生针对普通CPU部署设计的轻量小模型，大幅降低端侧AI落地门槛。多个强监管垂直领域的AI解决方案进一步完善，覆盖医疗报告解读、法律合同审核、区块链金融风险检测等成熟落地场景。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **ConceptGuard: Benchmarking Context-Sensitive Unlearning in Large Language Models**  
   http://arxiv.org/abs/2608.20338v1 | 作者：Sahil Kale, Ian Harris  
   一句话说明：首个面向上下文敏感场景的LLM选择性遗忘基准，解决了现有遗忘方案仅测试独立事实、无法真实评估复杂语境下敏感/有害知识移除效果的核心痛点。
2. **Inject, Align, Recover: Staged Post-Training for Retrieval-Free Document Knowledge Internalization**  
   http://arxiv.org/abs/2608.20281v1 | 作者：Qian Kou等  
   一句话说明：提出分阶段后训练方案实现无检索的文档知识内化，无需推理时外接检索工具即可让大模型准确回答指定语料库的相关问题，大幅降低落地部署成本。
3. **Daedalus-150M: A Convolution-Attention Hybrid Designed for CPU Inference**  
   http://arxiv.org/abs/2608.20210v1 | 作者：Christos Koutsiaris  
   一句话说明：业界首个原生面向普通CPU单用户4比特推理设计的1.5亿参数卷积注意力混合小模型，仅在6个模块保留完整注意力，大幅提升端侧轻量场景的部署效率。
4. **When Text and Numbers Disagree: Evidence Arbitration in Large Language Models**  
   http://arxiv.org/abs/2608.20116v1 | 作者：Mattia Carletti等  
   一句话说明：系统性研究大模型在文本摘要、数值观测、工具输出三类信息冲突时的决策逻辑，为高可靠工业场景下LLM证据处理机制的优化提供了明确方向。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **MidTool: Mid-training Data Synthesis for Agentic Tool Use**  
   http://arxiv.org/abs/2608.20314v1 | 作者：Fengqing Jiang等  
   一句话说明：提出大模型预训练中期的工具使用合成数据生成方案，无需海量人工标注即可大幅强化LLM智能体的工具调用能力，是性价比极高的Agent能力增强路径。
2. **Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents**  
   http://arxiv.org/abs/2608.20274v1 | 作者：Yiyang Feng等  
   一句话说明：首次系统性研究LLM智能体跨任务技能迁移的可靠性问题，明确了可迁移技能的边界和提升迁移稳定性的优化方向，为长期运行的自主智能体持续成长提供了支撑。
3. **Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation**  
   http://arxiv.org/abs/2608.20256v1 | 作者：Gijs Kassenaar等  
   一句话

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*