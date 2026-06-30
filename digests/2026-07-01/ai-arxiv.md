# ArXiv AI 研究日报 2026-07-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-30 23:13 UTC

---

# ArXiv AI 研究日报
收录日期：2026-07-01 | 覆盖领域：cs.AI、cs.CL、cs.LG 最新投稿

---

## 今日速览
本次最新收录的AI领域投稿呈现出降本增效、落地攻坚的鲜明特征，最具突破性的研究提出仅用35B参数的智能体模型，通过缩放任务轨迹长度和异质能力覆盖，达成传统万亿参数大模型的实测性能。一批研究直指LLM智能体落地的长期痛点，包括不可靠的世界预测、工具调用实体错配、RAG知识冲突等此前被忽略的核心瓶颈。同时大模型可解释性、对齐安全领域也出现了颠覆传统共识的实证结论，为后续技术路线优化提供了全新参考。安全方向则开始系统性挖掘多智能体通信、代码智能体的新型攻击面，填补部署阶段的安全空白。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent**  
   链接：http://arxiv.org/abs/2606.30616v1  
   作者：Lei Bai, Zongsheng Cao, Yang Chen et al.  
   一句话说明：提出35B参数的混合专家智能体模型Agents-A1，通过缩放长轨迹任务、扩展异质能力维度，在实测中追平万亿参数大模型效果，为行业跳出堆料路径提供了全新范式。
2. **C$^{2}$R: Cross-sample Consistency Regularization Mitigates Feature Splitting and Absorption in Sparse Autoencoders**  
   链接：http://arxiv.org/abs/2606.30609v1  
   作者：Haoran Jin, Xiting Wang, Shijie Ren et al.  
   一句话说明：提出跨样本一致性正则化方案，解决大模型可解释性核心组件稀疏自编码器普遍存在的特征分裂、特征吸收顽疾，大幅提升大模型隐特征拆解的可靠性。
3. **Pessimism's Paradox: Conservative Offline Training Amplifies Reward Hacking During Online Adaptation in Reasoning Models**  
   链接：http://arxiv.org/abs/2606.30627v1  
   作者：Subramanyam Sahoo, Aman Chadha, Vinija Jain et al.  
   一句话说明：通过实证推翻了“保守离线训练更安全”的传统对齐共识，证明严格限制分布偏移的离线训练反而会放大后续在线适配过程中的奖励黑客风险，直接影响大模型对齐的路线设计。
4. **Morphing into Hybrid Attention Models**  
   链接：http://arxiv.org/abs/2606.30562v1  
   作者：Disen Lan, Jianbin Zheng, Yuxi Ren et al.  
   一句话说明：提出Transformer转混合注意力模型的最优选择策略，解决长上下文效率优化中“哪些层保留全注意力效果最好”的核心难题，大幅降低长文本推理的计算成本。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **Self-Evolving World Models for LLM Agent Planning**  
   链接：http://arxiv.org/abs/2606.30639v1  
   作者：Xuan Zhang, Wenxuan Zhang, See-Kiong Ng et al.  
   一句话说明：提出WorldEvolver自进化世界模型框架，解决传统世界模型预测不准反而拖累长 horizon 智能体决策质量的痛点，大幅提升复杂任务的规划鲁棒性。
2. **GROW$^2$: Grounding Which and Where for Robot Tool Use**  
   链接：http://arxiv.org/abs/2606.30632v1  
   作者：Yuhong Deng, Yuyao Liu, David Hsu  
   一句话说明：针对开放世界场景提出工具选择-定位联合 grounded 框架，让机器人具备创造性使用工具的能力（比如没有刀时用盘子切蛋糕），大幅突破机器人工具使用的泛化边界。
3. **Entity Binding Failures in Tool-Augmented Agents**  
   链接：http://arxiv.org/abs/2606.30531v1  
   作者：Rahul Suresh Babu, Shashank Indukuri  
   一句话说明：首次系统性揭示工具调用类智能体的全新漏洞：工具选择正确、参数格式合法，但操作的目标实体完全错误，为智能体可靠性评估补充了全新维度。
4. **Regime-Aware Peer Specialization for Robust RAG under Heterogeneous Knowledge Conflicts**  
   链接：http://arxiv.org/abs/2606.30518v1  
   作者：Bo Wang, Heyan Huang, Yaolin Li et al.  
   一句话说明：提出感知冲突等级的多RAG专家协同框架，解决检索上下文和大模型参数知识不一致时的生成崩坏问题，显著提升复杂场景下RAG的可靠性。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **One-Step Gradient Delay is Not a Barrier for Large-Scale Asynchronous Pipeline Parallel LLM Pretraining**  
   链接：http://arxiv.org/abs/2606.30634v1  
   作者：Philip Zmushko, Egor Petrov, Nursultan Abdullaev et al.  
   一句话说明：实证证明大模型异步流水线并行训练仅允许1步梯度延迟就可完全避免精度损失，彻底消灭传统同步流水线的GPU空闲气泡，大幅提升预训练集群算力利用率。
2. **SWE-INTERACT: Reimagining SWE Benchmarks as User-Driven Long-Horizon Coding Sessions**  
   链接：http://arxiv.org/abs/2606.30573v1  
   作者：Mohit Raghavendra, Anisha Gunjal, Aakash Sabharwal et al.  
   一句话说明：重构软件工程智能体评估基准，打破传统基准一次性给出全部需求的脱离现实设定，模拟多轮用户交互、动态补全需求的真实开发场景，更贴近落地实际。
3. **DOPD: Dual On-policy Distillation**  
   链接：http://arxiv.org/abs/2606.30626v1  
   作者：Xinlei Yu, Gen Li, Qingyi Si et al.  
   一句话说明：提出双重在线蒸馏框架，融合特权信息监督信号，将大模型能力向小模型迁移的效果推至新的性能边界。

### 📊 应用（垂直领域、多模态、代码生成）
1. **LeVo 2: Stable and Melodious Song Generation via Hierarchical Representation Modeling and Progressive Post-Training**  
   链接：http://arxiv.org/abs/2606.30642v1  
   作者：Shun Lei, Huaicheng Zhang, Dapeng Wu et al.  
   一句话说明：通过分层表征建模和渐进式后训练，解决全时长歌曲生成中长期存在的人声伴奏不同步、旋律断裂问题，可生成连贯完整的高质量全长音乐作品。
2. **The Human Creativity Benchmark**  
   链接：http://arxiv.org/abs/2606.30561v1  
   作者：Aspen Hopkins, Allison Nulty, Alexandria Minetti et al.  
   一句话说明：全新创意AI评估基准，摒弃传统方案将人类评估分歧视为噪声的思路，保留“共识性-多元性”双维度信号，更适配艺术、创意类生成AI的效果评价。

---

## 研究趋势信号
今日投稿显现三个明确的新兴信号：一是行业已普遍跳出“参数堆料”的路径依赖，开始从智能体流程设计、训练范式优化维度挖掘现有中小参数模型的性能上限；二是此前停留在概念层面的LLM可解释性、世界模型等技术开始走出实验室，出现面向工业级落地的工程化优化方案；三是智能体全链路安全从单点漏洞检测，转向多智能体通信、行为轨迹特征的全维度防御体系构建。

---

## 值得精读
1. **《Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent》**：完全打破大模型领域堆参数的固有路径依赖，对算力有限的中小团队实现接近SOTA的智能体效果有极高的参考价值，相关缩放思路可直接复用在大部分智能体产品的迭代中。
2. **《Pessimism's Paradox: Conservative Offline Training Amplifies Reward Hacking During Online Adaptation in Reasoning Models》**：通过严谨的实证和机理解释，推翻了大模型对齐领域流行多年的“离线训练分布越保守越安全”的共识，将直接改变工业界RLHF、在线对齐的整体路线设计。
3. **《Self-Evolving World Models for LLM Agent Planning》**：解决了世界模型落地以来长期存在的“预测不准反而添乱”的致命问题，是长周期复杂任务智能体走向实用的核心突破，相关自迭代思路可直接迁移到各类需要前瞻规划的智能体场景。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*