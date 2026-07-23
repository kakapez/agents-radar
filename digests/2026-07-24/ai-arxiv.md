# ArXiv AI 研究日报 2026-07-24

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-23 22:56 UTC

---

# ArXiv AI 研究日报
2026-07-24 收录范围：cs.AI / cs.CL / cs.LG 领域当日最新预印本

---

## 今日速览
今日收录的50篇预印本覆盖大语言模型落地、神经符号推理、科学机器学习、机器人学习四大核心赛道，既涌现出非西方文化语境LLM对齐、生成式AI产业影响实证等特色研究，也出现了多项效率优化、可解释性方向的底层技术突破。其中Token级大小模型协同推理框架、面向零售场景人形机器人的VLA训练体系等成果，直接指向大模型与具身智能的规模化落地痛点。多篇研究围绕LLM价值识别、安全概率边界计算展开，补全了大模型对齐的可量化评估链条。同时物理先验与新型网络架构KAN的结合进一步深化，为科学计算类任务提供了精度更优的新范式。

---

## 重点论文
共13篇核心论文，按主题分类如下：
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **LKValues: Aligning Large Language Models with Sri Lankan Societal Values**  
   链接：http://arxiv.org/abs/2607.20410v1 | 作者：Nethmi Muthugala等  
   一句话说明：首次提出面向斯里兰卡本土文化价值的LLM对齐方案，填补了现有对齐体系普遍偏向西方规范、忽略南亚多文化社会特殊语境的空白。
2. **Train the Model, Not the Reader: Decodability Supervision for Verifiable Activation Explanations**  
   链接：http://arxiv.org/abs/2607.20379v1 | 作者：Hiskias Dingeto  
   一句话说明：提出全新的可解码性监督范式，解决了现有大模型隐层激活解释方法无法检测虚假断言的固有缺陷，大幅提升激活解释的可靠性。
3. **PyroDash: Cost-Efficient Token-Level Small-Large Language Model Collaborative Inference**  
   链接：http://arxiv.org/abs/2607.20327v1 | 作者：Niqi Lyu等  
   一句话说明：实现Token粒度的大小模型协同推理框架，可在保证输出质量的前提下大幅降低大模型规模化服务的推理成本，工业落地价值极高。
4. **Sound Probabilistic Safety Bounds for Large Language Models**  
   链接：http://arxiv.org/abs/2607.20286v1 | 作者：Mahdi Nazeri等  
   一句话说明：基于Clopper-Pearson置信区间与PAC理论，首次提出可严格计算的LLM生成有害内容概率的严谨边界方法，为大模型安全合规评估提供量化支撑。
5. **HalluTruthQA: A Fine-Grained Benchmark for Hallucination Detection, Localization, and Explanation in Arabic Question Answering**  
   链接：http://arxiv.org/abs/2607.20219v1 | 作者：Abdessalam Bouchekif等  
   一句话说明：推出阿拉伯语领域首个细粒度QA幻觉检测基准，覆盖错误定位、原因解释等多层任务，补全了低资源语种大模型幻觉评估的数据集缺口。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **SoftReason: A Fully Differentiable Neuro-Soft-Symbolic Deductive Reasoning Architecture over High-Dimensional Perceptual Data**  
   链接：http://arxiv.org/abs/2607.20402v1 | 作者：Wael AbdAlmageed  
   一句话说明：提出完全可微的神经软符号推理架构，打通了高维感知输入到知识图谱规则驱动的演绎推理全链路，解决了传统神经符号流水线端到端不可训练的痛点。
2. **PoTRE: Test-Time Reasoning inspired by Cognitive Heterogeneity**  
   链接：http://arxiv.org/abs/2607.20268v1 | 作者：Anmol Kankariya等  
   一句话说明：参考人类认知异质性设计的测试时推理框架，有效解决大模型长程规划、迭代纠错能力不足的问题，复杂场景下推理鲁棒性显著提升。
3. **Courteous Anticipation: Improving Long-Lived Task Planning in Persistent Shared Environments**  
   链接：http://arxiv.org/abs/2607.20289v1 | 作者：Md Ridwan Hossain Talukder等  
   一句话说明：提出带前瞻预判的多机器人协同任务规划方法，解决了传统孤立任务规划留下的终端状态约束冲突、后续任务执行效率低下的问题。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **PG-KINN: A Physics-Informed Petrov-Galerkin Kolmogorov-Arnold Network for Solving Forward and Inverse PDEs**  
   链接：http://arxiv.org/abs/2607.20378v1 | 作者：Amirhossein Sadr等  
   一句话说明：将物理知情学习与新型KAN架构结合，提出求解正/逆偏微分方程的全新方案，相比传统MLP类物理感知网络兼具精度与可解释性优势。
2. **Online Variance Reduction for Domain Adaptation on Streaming Data**  
   链接：http://arxiv.org/abs/2607.20374v1 | 作者：Andrea Napoli  
   一句话说明：针对流数据场景设计适配MMD、CORAL两类分布匹配损失的在线方差缩减算法，首次实现无监督域适应在增量、分布式场景下的高效部署。
3. **ELSAA: Efficient Low-Rank and Sparse Attention Approximation for Training Transformers**  
   链接：http://arxiv.org/abs/2607.20214v1 | 作者：Mahdi Heidari等  
   一句话说明：融合低秩分解与稀疏约束思路提出全新的高效注意力近似方法，大幅降低长文本Transformer训练的二次复杂度瓶颈。

### 📊 应用（垂直领域、多模态、跨领域落地）
1. **Closing the Lab-to-Store Gap: A Data-Efficient Post-Training and Experience-Driven Learning VLA Framework for Retail Humanoids**  
   链接：http://arxiv.org/abs/2607

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*