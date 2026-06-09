# ArXiv AI 研究日报 2026-06-10

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-09 23:17 UTC

---

# ArXiv AI 研究日报 | 2026-06-10
今日覆盖cs.AI、cs.CL、cs.LG分类共50篇最新投稿。

---

## 今日速览
今日AI领域投稿聚焦大模型对齐机制、智能体长程任务能力、基础理论突破三大核心方向。多篇工作打破了此前对RLHF表层效果的普遍认知，揭示了对齐训练未触及的模型内部隐性特性。Transformer样本复杂度的紧边界证明补上了大模型泛化理论长期缺失的关键空白，同时针对端侧手机智能体、深度研究类智能体的专用基准体系也集中涌现。不少研究跳出传统输出端评估范式，深入模型训练动态、机制层面挖掘此前被忽略的风险点与优化空间。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **[Rethinking the Divergence Regularization in LLM RL](http://arxiv.org/abs/2606.09821v1)**  
   作者：Jiarui Yao, Xiangxin Zhou 等
   > 核心贡献：针对大模型RL训练中普遍存在的离策略不稳定问题，重新审视散度正则项的作用逻辑，为PPO等主流训练方法的信任域控制提供了全新优化思路，直接影响工业界大模型后训练的收敛效率和稳定性。
2. **[The Neutral Mask: How RLHF Provides Shallow Alignment while Leaving Partisan Structure Intact in a Large Language Model](http://arxiv.org/abs/2606.09735v1)**  
   作者：Wendy K. Tam
   > 核心贡献：通过实证研究首次验证RLHF仅实现了表层行为对齐，模型内部原有的立场/党派相关结构完全没有被改变，为对齐逃逸、立场无意识泄露等长期存在的现象提供了扎实的机制解释。
3. **[Tight Sample Complexity of Transformers](http://arxiv.org/abs/2606.09731v1)**  
   作者：Chenxiao Yang, Nathan Srebro, Zhiyuan Li
   > 核心贡献：严格证明了Transformer类模型VC维的紧上下界，补上了大模型泛化能力理论研究长期缺失的核心结论，为大模型预训练的数据量需求估算、容量设计提供了可落地的理论依据。
4. **[Learning to Attack and Defend: Adaptive Red Teaming of Language Models via GRPO](http://arxiv.org/abs/2606.09701v1)**  
   作者：Blake Bullwinkel, Eugenia Kim 等
   > 核心贡献：提出基于GRPO的攻防协同自适应红队框架，通过攻防双方共同进化大幅提升大模型的鲁棒性，解决了传统静态红队无法覆盖新型逃逸攻击样本的痛点。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **[SearchSwarm: Towards Delegation Intelligence in Agentic LLMs for Long-Horizon Deep Research](http://arxiv.org/abs/2606.09730v1)**  
   作者：Pu Ning, Quan Chen 等
   > 核心贡献：提出主打代理委派智能的群体搜索智能体架构，通过主智能体拆分任务、子智能体并行执行的模式，解决了大模型上下文窗口有限无法支撑超长程深度科研任务的行业共性问题。
2. **[iOSWorld: A Benchmark for Personally Intelligent Phone Agents](http://arxiv.org/abs/2606.09764v1)**  
   作者：Lawrence Keunho Jang, Mareks Woodside 等
   > 核心贡献：首个面向带用户本地个人数据的端侧手机智能体的专用基准，填补了此前移动端智能体评估完全脱离真实个性化场景的空白。
3. **[Echo-Memory: A Controlled Study of Memory in Action World Models](http://arxiv.org/abs/2606.09803v1)**  
   作者：Wayne King, Zeyue Xue 等
   > 核心贡献：通过严格控制变量实验，系统性厘清了动作条件世界模型长序列生成失败的核心诱因是记忆机制缺陷而非局部图像合成能力不足，为具身智能体的记忆模块优化指明了方向。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **[Evaluation Cards: An Interpretive Layer for AI Evaluation Reporting](http://arxiv.org/abs/2606.09809v1)**  
   作者：Avijit Ghosh, Anka Reuel 等
   > 核心贡献：提出统一的AI评估报告解释层标准，解决了当前不同榜单、论文、厂商的评估结果无法横向对比、信息披露不透明的行业痛点，推动AI评估走向全行业标准化。
2. **[Preserving Plasticity in Continual Learning via Dynamical Isometry](http://arxiv.org/abs/2606.09762v1)**  
   作者：Andries Rosseau, Robert Müller, Ann Nowé
   > 核心贡献：从动力学等距性的全新视角解决持续训练过程中深度网络可塑性逐步丧失的经典问题，大幅降低了持续学习任务的灾难性遗忘概率。
3. **[Proxy Reward Internalization and Mechanistic Exploitation: A Learned Precursor to Reward Hacking and Its Generalization](http://arxiv.org/abs/2606.09711v1)**  
   作者：Mohammad Beigi, Ming Jin, Lifu Huang
   > 核心贡献：首次发现奖励黑客出现前就存在的代理奖励内化前置现象，能够在模型表面表现完全符合预期的阶段就提前识别出未来发生奖励黑客的风险，为RL训练安全提供了全新的前置检测手段。

### 📊 应用（垂直领域、多模态、代码生成）
1. **[Beyond Probabilistic Similarity: Structural, Temporal, and Causal Limitations of Retrieval-Augmented Generation in the Legal Domain](http://arxiv.org/abs/2606.09724v1)**  
   作者：Hudson de Martim
   > 核心贡献：系统性梳理了现有法律领域RAG架构在结构逻辑、时间效力、因果关联上的三大核心缺陷，解释了当前法律AI频繁出现虚假引用、过时法条的底层原因。
2. **[Data Synthesis and Parameter-Efficient Fine-Tuning for Low-Resource NMT: A Case Study on Q'eqchi' Mayan](http://arxiv.org/abs/2606.09767v1)**  
   作者：Alexander Chulzhanov, Soeren Eberhardt, Arjun Mukherjee
   > 核心贡献：提出完全不依赖爬取土著语言数据的低资源NMT合成方案，兼顾数据主权要求和小语种翻译效果，为濒危语言的数字化保护提供了可落地路径。

---

## 研究趋势信号
今日投稿集中显现三大新兴信号：一是大模型研究从输出效果评测转向内部机制解析，RLHF实际对齐深度、奖励黑客前置风险等此前被忽略的隐性特性成为研究热点；二是智能体赛道从简单工具调用向长程委派、个性化端侧场景延伸，专用垂直基准快速补齐；三是AI评估体系正从零散的榜单竞争走向统一透明的标准化框架建设，安全研究也从表层防御向心理层面、因果层面拓展。

---

## 值得精读
1. **《The Neutral Mask: How RLHF Provides Shallow Alignment while Leaving Partisan Structure Intact in a Large Language Model》**：打破了行业对RLHF对齐效果的普遍乐观认知，用扎实的实证结果揭示了对齐训练的浅层属性，能够解释几乎所有对齐逃逸、立场泄露的现象，对对齐技术的迭代方向有极强的指导意义。
2. **《Tight Sample Complexity of

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*