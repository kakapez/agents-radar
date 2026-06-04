# ArXiv AI 研究日报 2026-06-04

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-03 23:44 UTC

---

# ArXiv AI 研究日报
日期：2026-06-04  覆盖来源：cs.AI、cs.CL、cs.LG 领域2026-06-02最新投稿
---

## 今日速览
今日ArXiv AI投稿集中在大模型底层机制创新、智能体落地瓶颈突破两大核心方向，一批研究跳出传统缩放定律、RLHF等成熟范式提出了类脑记忆巩固、微观神经元演化规律等全新视角。针对长推理场景显存占用、开放任务奖励信号缺失等行业痛点也产出了可直接落地的优化方案，同时覆盖金融、医疗、无人机导航等垂直场景的专属基准与落地算法集中涌现，整体呈现出从基础能力堆叠向场景可靠性、长生命周期能力延伸的研究特征。

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **[Language Models Need Sleep: Learning to Self-Modify and Consolidate Memories](http://arxiv.org/abs/2606.03979v1)**
   作者：Ali Behrouz, Farnoosh Hashemi, Vahab Mirrokni
   一句话说明：类比人类睡眠机制首次提出LLM自主修改权重巩固长期记忆的框架，解决现有大模型灾难性遗忘、长期记忆留存率低的核心痛点，开辟了大模型长生命周期优化的全新思路。
2. **[Neuron Populations Exhibit Divergent Selectivity with Scale](http://arxiv.org/abs/2606.03990v1)**
   作者：Amil Dravid, Yasaman Bahri, Alexei A. Efros et al.
   一句话说明：突破传统缩放定律仅观测宏观损失的局限，从神经元种群选择性的微观维度揭示大模型随规模增长的演化规律，为大模型的精准架构设计提供全新的微观指导视角。
3. **[Value-Aware Stochastic KV Cache Eviction for Reasoning Models](http://arxiv.org/abs/2606.03928v1)**
   作者：Ting-Yun Chang, Harvey Yiyun Fu, Deqing Fu et al.
   一句话说明：针对长思维链推理场景的显存瓶颈提出价值感知的随机KV缓存淘汰策略，大幅降低显存占用的同时不损失推理精度，显著提升长推理大模型的部署效率。
4. **[Quantifying Faithful Confidence Expression in Large Reasoning Models](http://arxiv.org/abs/2606.03969v1)**
   作者：Areeb Gani, Asal Meskin, Gabrielle Kaili-May Liu et al.
   一句话说明：首次系统性定义大推理模型的忠实置信度校准评估框架，解决大模型输出信心与实际能力不匹配的核心信任问题，为医疗、金融等高风险场景的大模型落地提供标准化评估依据。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **[Skill-RM: Unifying Heterogeneous Evaluation Criteria via Agent Skill](http://arxiv.org/abs/2606.03980v1)**
   作者：Tao Chen, Gangwei Jiang, Pengyu Cheng et al.
   一句话说明：打破现有奖励模型评价标准碎片化的行业痛点，基于智能体技能维度统一异构评价指标，大幅提升RLHF阶段的奖励信号质量，可直接兼容各类大模型后训练流水线。
2. **[Agentic Chain-of-Thought Steering for Efficient and Controllable LLM Reasoning](http://arxiv.org/abs/2606.03965v1)**
   作者：Yu Xia, Zhouhang Xie, Xin Xu et al.
   一句话说明：提出推理阶段可干预的智能体思维链引导框架，在不损失最终答案精度的前提下减少冗余token消耗，实现推理过程的细粒度可控。
3. **[Synthesize and Reward -- Reinforcement Learning for Multi-Step Tool Use in Live Environments](http://arxiv.org/abs/2606.03892v1)**
   作者：Ibrahim Abdelaziz, Asim Munawar, Kinjal Basu et al.
   一句话说明：系统性解决真实在线环境下大模型多步工具调用训练的三大核心障碍，大幅提升工具调用的执行成功率，为实用型智能体训练提供完整落地方案。
4. **[QUBRIC: Co-Designing Queries and Rubrics for RL Beyond Verifiable Rewards](http://arxiv.org/abs/2606.03968v1)**
   作者：Rongzhi Zhang, Rui Feng, Zhihan Zhang et al.
   一句话说明：突破现有基于评分标准的RL的查询分布固定瓶颈，通过查询与评分标准协同设计，将强化学习的适用范围拓展到不可直接验证的开放任务场景。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **[PyraMathBench: Evaluating and Improving Mathematical Capability in Large Language Models](http://arxiv.org/abs/2606.03858v1)**
   作者：Zetian Ouyang, Linlin Wang, Gerard de Melo et al.
   一句话说明：推出融合数值处理和数学推理的全新基准测试集，精准定位现有大模型数学能力的失败根因，填补该领域可解释性评估的空白。
2. **[FlashbackCL: Mitigating Temporal Forgetting in Federated Learning](http://arxiv.org/abs/2606.03939v1)**
   作者：Mubarak A. Ojewale, Adriana E. Chis, Jorge M. Cortes-Mendoza et al.
   一句话说明：针对联邦学习场景下客户端数据分布随时间漂移的时间遗忘问题，提出全新的遗忘缓解算法，大幅提升边端动态场景下联邦模型的稳定性。
3. **[Denoise First, Orthogonalize Later: Understanding Momentum in Muon via Spectral Filtering](http://arxiv.org/abs/2606.03899v1)**
   作者：Xianliang Li, Zihan Zhang, Weiyang Liu et al.
   一句话说明：从谱滤波角度揭示当前大模型训练SOTA优化器Muon中动量的核心作用机制，填补该方向的理论空白，为后续优化器迭代提供明确指导。

### 📊 应用（垂直领域、多模态、代码生成）
1. **[Imaginative Perception Tokens Enhance Spatial Reasoning in Multimodal Language Models](http://arxiv.org/abs/2606.03988v1)**
   作者：Mahtab Bigverdi, Lindsey Li, Weikai Huang et al.
   一句话说明：提出想象感知token机制，解决多模态大模型对不可见视角、遮挡空间的空间推理痛点，显著提升视觉语言模型的空间感知能力。
2. **[Hedge-Bench: Benchmarking Agents on Hard, Realistic Tasks Pertaining to Financial Reasoning](http://arxiv.org/abs/2606.03918v1)**
   作者：Eric Cho, Shawn Huang, Alice Lu et al.
   一句话说明：推出面向金融领域智能体的真实高难度任务基准，覆盖分析师级别的开放金融推理场景，填补高价值垂直场景智能体评估的空白。
3. **[CoralBay: A Self-Supervised CT Foundation Model](http://arxiv.org/abs/2606.03888v1)**
   作者：Ioannis Gatopoulos, Nicolas Känzig, Sebastian Otálora et al.
   一句话说明：发布首个专为3D CT医学影像预训练的自监督基础模型，在各类下游医学影像任务上实现大幅性能提升，推动医疗AI大模型落地进程。

## 研究趋势信号
从今日投稿可观察到，大模型研究正从宏观指标优化向微观机制解析、长生命周期能力延伸方向演进，类脑记忆机制、大模型缩放微观规律、开放场景奖励信号设计成为核心创新热点；同时针对垂直高价值场景的专属基准、面向动态边端部署的联邦学习优化、多模态模型的认知推理等细分方向投稿占比明显上升，行业研究重心逐步从基础能力堆叠转向落地可靠性、场景适配性的深度打磨。

## 值得精读
1. **《Language Models Need Sleep: Learning to Self-Modify and Consolidate Memories》**：完全跳出现有大模型训练的传统范式，借鉴认知科学思路提出的长期记忆巩固框架极具启发性，很可能开辟大模型长生命周期优化的全新研究赛道，值得完整精读获取创新思路。
2. **《Neuron Populations Exhibit Divergent Selectivity with Scale》**：打破过往仅从损失曲线解读缩放定律的研究惯性，从神经元微观层面揭示大模型规模增长的内在演化逻辑，对所有做大模型预训练、架构设计的研究者都有极强的参考价值。
3. **《Skill-RM: Unifying Heterogeneous Evaluation Criteria via Agent Skill》**：直接命中当前RLHF体系里奖励模型标准混乱的行业共性痛点，提出的统一评估框架可直接落地，对工业界大模型对齐迭代有极高的实用价值。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*