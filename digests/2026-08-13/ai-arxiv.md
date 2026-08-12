# ArXiv AI 研究日报 2026-08-13

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-12 22:40 UTC

---

# ArXiv AI 研究日报（2026-08-13 收录批次）
今日覆盖 cs.AI、cs.CL、cs.LG 三类共50篇最新投稿，所有论文均发布于2026-08-11

---

## 今日速览
今日更新的50篇AI投稿覆盖大模型可解释性、多语言安全、智能体落地痛点、AI辅助数学科研等多个核心前沿方向。多项研究首次曝光了低资源语言场景下大模型安全对齐完全失效的普遍漏洞，也推出了金融推理、性别暴力对话等多个稀缺敏感领域的专属基准与数据生成方案。领域还系统复盘了可信NLP六年发展脉络，明确行业已经走完了事后可解释性的早期阶段，正式进入主动可控的技术路线。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **Beyond a Bag of Features: Set-Level Instability in Sparse Autoencoders**  
   链接：http://arxiv.org/abs/2608.11197v1 | 作者：Nikolai Bolik 等  
   一句话说明：发现稀疏自编码器在LLM特征解析上的集合级不稳定性，修正了过往基于稠密表示的类别边界研究结论，是LLM可解释性领域的重要新发现。
2. **Attention-Path Fragility as an Uncertainty Signal in Large Language Models**  
   链接：http://arxiv.org/abs/2608.11138v1 | 作者：Minsoo Kim 等  
   一句话说明：提出用注意力路径扰动后的脆弱性作为LLM不确定性的全新度量ASMI，无需额外训练就能显著提升模型输出的可靠度识别能力。
3. **The Illusion of Cross-Lingual Safety in Low-Resource Languages**  
   链接：http://arxiv.org/abs/2608.11146v1 | 作者：Abigail Oppong 等  
   一句话说明：证实仅在英文上做安全对齐的LLM，防护能力会在低资源语言场景下完全失效，暴露了当前多语言大模型的核心安全隐患。
4. **Mapping and Measuring the Behavioral Evolution of Large Language Models**  
   链接：http://arxiv.org/abs/2608.11027v1 | 作者：Dong Qiao 等  
   一句话说明：基于1万条共享prompt系统刻画了32个大模型家族的行为演化路径，突破了过往仅靠准确率评估模型代际差异的局限性。
5. **ReRound: Reconstructive Rounding to Resolve Midpoint Ambiguity in Calibration-Free LLM Quantization**  
   链接：http://arxiv.org/abs/2608.11045v1 | 作者：He-Yen Hsieh 等  
   一句话说明：提出免校准LLM量化的全新重构取整方法，解决了传统量化里的区间中点歧义问题，大幅提升大模型端侧部署效率。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **SkillZip: Evaluation-Free Skill Compression for Self-Evolving Agents by Discovering Reusable Structure**  
   链接：http://arxiv.org/abs/2608.11079v1 | 作者：Xiaofan Bai 等  
   一句话说明：无需额外评估就能自动挖掘智能体积累的操作技能中的可复用结构，彻底解决自进化Agent随技能库膨胀带来的推理开销飙升问题。
2. **Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding**  
   链接：http://arxiv.org/abs/2608.11095v1 | 作者：Kushal Chakrabarti  
   一句话说明：首次指出智能代码助手的记忆文件无限制增长是源于「灾难性记忆」缺陷，为解决编码Agent的长期存储冗余问题提供了理论依据。
3. **Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration**  
   链接：http://arxiv.org/abs/2608.11195v1 | 作者：Alan Li 等  
   一句话说明：完整披露了人机协作攻克格罗滕迪克常数上界的全流程实践，是目前公开的最长周期数学AI辅助科研的落地案例。
4. **Actions Speak Louder than Words: Measuring Cross-Lingual Policy Retention in Tool-Using Agents**  
   链接：http://arxiv.org/abs/2608.11110v1 | 作者：Sourabrata Mukherjee 等  
   一句话说明：提出不再仅看最终输出、而是通过动作序列评估多语言工具调用Agent策略一致性的全新指标，填补了多语言智能体的评估空白。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **ConVAWG: A Retrieval-Grounded Framework for Controlled Synthetic Dialogue Generation in Violence Against Women and Girls**  
   链接：http://arxiv.org/abs/2608.11200v1 | 作者：Chen Lyu 等  
   一句话说明：面向难以获取真实数据的家暴/性别暴力敏感对话场景，提出检索增强的可控合成对话生成框架，为该类社会议题研究提供了数据解决方案。
2. **How to Verify Consistency of Probabilistic Claims**  
   链接：http://arxiv.org/abs/2608.11181v1 | 作者：Orr Paradise, Yoshua Bengio 等  
   一句话说明：由Yoshua Bengio团队牵头，证明了大模型概率预测输出的自一致性校验可以在多项式时间内完成，为AI安全中的诚实性验证提供了全新可行路径。
3. **From Interpretability to Control: Insights from Six Years of the TrustNLP Workshop**  
   链接：http://arxiv.org/abs/2608.11171v1 | 作者：Rahul Gupta 等  
   一句话说明：系统梳理了可信NLP领域6年发展历程，明确提出领域已从早期的事后可解释性阶段，全面转向机制理解和主动可控的新阶段。
4. **V-FiLLM: Verified Financial LLM Reasoning Benchmark**  
   链接：http://arxiv.org/abs/2608.11047v1 | 作者：Alicia Larsen 等  
   一句话说明：推出了首个完全基于可执行计算树生成的金融大模型推理基准，解决了过往金融评测集标注错误、答案不可靠的通病。

### 📊 应用（垂直领域、多模态、代码生成）
1. **MultiModal Code-Switching: Interleaving Visual Objects into Language for Explicit Object-Level Alignment**  
   链接：http://arxiv.org/abs/2608.11167v1 | 作者：Changhao Xiang 等  
   一句话说明：提出多模态码切换训练范式，将视觉对象嵌入到文本序列中做细粒度对齐，彻底解决多模态大模型的指称歧义问题。
2. **Surgical WAM: A World-Action Model for Data-Efficient Surgical Robot Learning**  
   链接：http://arxiv.org/abs/2608.11204v1 | 作者：Wenrui Bao 等  
   一句话说明：面向手术机器人领域提出世界动作模型Surgical WAM，大幅降低对昂贵带标注遥操作轨迹数据的需求，实现小样本下的高精度手术机器人控制。

---

## 研究趋势信号
今日投稿集中呈现三个明确趋势：一是大模型研究从通用性能评估下沉到低资源语言安全、对齐迁移性等此前被忽视的长尾风险方向；二是智能体领域开始聚焦长期记忆冗余、技能膨胀等落地过程中暴露的真实痛点，而非仅追求基准跑分；三是敏感垂直领域的定制化数据集与生成框架快速涌现，覆盖社会安全、金融、医疗等数据获取门槛极高的场景。

---

## 值得精读
1. **《Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration》**：首次完整公开大模型辅助顶尖数学研究的全流程实操经验，对于想探索AI+科研落地的从业者有极高的参考价值，没有冗余背景铺垫，全部为可复用的落地经验。
2. **《The Illusion of Cross-Lingual Safety in Low-Resource Languages》**：直接点出当前全球主流多语言大模型普遍存在的未被披露的重大安全漏洞，所有计划做面向全球多区域部署LLM的团队都需要掌握该结论，规避低资源语言场景下的对齐失效风险。
3. **《How to Verify Consistency of Probabilistic Claims》**：由深度学习泰斗Yoshua Bengio团队产出，从理论层面突破了大模型概率输出诚实性校验的效率瓶颈，是近年AI安全基础理论领域少有的兼具突破性和落地可行性的核心成果。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*