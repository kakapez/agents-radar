# ArXiv AI 研究日报 2026-06-03

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-02 23:45 UTC

---

# ArXiv AI 研究日报 | 2026-06-03
统计范围：cs.AI、cs.CL、cs.LG 领域共50篇最新投稿

---

## 📌 今日速览
今日AI领域投稿集中聚焦大模型落地全链路可靠性优化方向，从模型对齐成本、推理效率、安全性到智能体可运维性的细分痛点研究占比显著提升。多项研究补齐了此前多模态大模型作为自动评估器的感知偏见、视频MLLM时序保真度不足等长期存在的隐性缺陷。同时针对万亿级大模型的PEFT规模化部署、生产级智能体的全生命周期安全监控等工业界刚需方向出现了突破性探索。大量面向医疗、金融、精神健康等垂直场景的专用基准发布，标志着AI研究正在从通用能力堆叠快速转向真实场景落地的风险补齐阶段。

---

## 🔬 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **[Mitigating Perceptual Judgment Bias in Multimodal LLM-as-a-Judge via Perceptual Perturbation and Reward Modeling](http://arxiv.org/abs/2606.02578v1)**
   作者：Seojeong Park 等
   一句话说明：首次系统性解决MLLM作为自动评估器时，视觉证据与文本线索冲突就优先选择合理叙事而非感知正确答案的固有偏见，大幅提升多模态自动标注的可靠性。
2. **[SafeSteer: Localized On-Policy Distillation for Efficient Safety Alignment](http://arxiv.org/abs/2606.02530v1)**
   作者：Hao Li 等
   一句话说明：提出本地化策略蒸馏的对齐方案，无需海量通用数据和额外奖励模型，在几乎不损失大模型通用能力的前提下大幅降低对齐税。
3. **[SimSD: Simple Speculative Decoding in Diffusion Language Models](http://arxiv.org/abs/2606.02544v1)**
   作者：Junxia Cui 等
   一句话说明：首次打通扩散大语言模型与传统token级投机解码的适配壁垒，在保留扩散模型并行解码优势的基础上进一步将推理速度提升2倍以上。
4. **[On the Scaling of PEFT: Towards Million Personal Models of Trillion Parameters](http://arxiv.org/abs/2606.02437v1)**
   作者：Song Cao 等
   一句话说明：将PEFT从「全量微调廉价替代」定位升级为共享基础大模型之上的用户专属持久状态，系统性论证了支撑百万级万亿参数级个性化大模型部署的技术可行性。

### 🤖 智能体与推理（规划、工具使用、可运维）
1. **[Ghost Tool Calls: Issue-Time Privacy for Speculative Agent Tools](http://arxiv.org/abs/2606.02483v1)**
   作者：Bardia Mohammadi 等
   一句话说明：针对性解决当前工具型智能体为降低延迟发起投机调用时，未执行的工具分支依然向第三方服务商泄露用户意图的隐蔽隐私漏洞。
2. **[Iteris: Agentic Research Loops for Computational Mathematics](http://arxiv.org/abs/2606.02484v1)**
   作者：Leheng Chen 等
   一句话说明：构建了面向计算数学领域的智能体闭环研究工作流，可自主完成猜想提出、验证、论文整理全流程，大幅降低数学科研的自动化门槛。
3. **[MCP-Persona: Benchmarking LLM Agents on Real-World Personal Applications via Environment Simulation](http://arxiv.org/abs/2606.02470v1)**
   作者：Wenhao Wang 等
   一句话说明：对接最新发布的Model Context Protocol标准，是首个面向个人助理类智能体真实使用场景的专用测试基准，填补了通用智能体测试无法覆盖个人专属数据交互能力的空白。
4. **[Monitoring Agentic Systems Before They're Reliable](http://arxiv.org/abs/2606.02494v1)**
   作者：Marisa Ferrara Boston 等
   一句话说明：首次提出生产级智能体落地早期的结构性故障监控框架，避开传统任务级错误检测在智能体架构不完善时完全失效的痛点。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **[AdaCodec: A Predictive Visual Code for Video MLLMs](http://arxiv.org/abs/2606.02569v1)**
   作者：Haowen Hou 等
   一句话说明：针对视频帧之间的大量内容冗余特性设计预测式视觉编码，可将视频MLLM的视觉token数量减少70%以上，大幅降低视频理解的推理成本。
2. **[ProtoAda: Prototype-Guided Adaptive Adapter Expansion and Geometric Consolidation for Multimodal Continual Instruction Tuning](http://arxiv.org/abs/2606.02576v1)**
   作者：Yu-Cheng Shi 等
   一句话说明：提出原型引导的多模态持续指令调优框架，在新增视觉语言能力时完全避免灾难性遗忘，性能远超现有同类持续学习方案。
3. **[HERO'S JOURNEY: Testing Complex Rule Induction with Text Games](http://arxiv.org/abs/2606.02556v1)**
   作者：Anshun Asher Zheng 等
   一句话说明：基于目标导向的 episodic 文本游戏构建大模型隐式规则归纳能力测试基准，难度远高于传统推理基准，可测出当前主流大模型的规则归纳能力天花板。

### 📊 应用（垂直领域、多模态落地）
1. **[Moment-Video: Diagnosing Temporal Fidelity of Video MLLMs on Momentary Visual Events](http://arxiv.org/abs/2606.02522v1)**
   作者：Xiaolin Liu 等
   一句话说明：专门针对视频MLLM对瞬时关键视觉事件的识别能力构建测试基准，发现当前主流视频MLLM在时长低于1秒的事件识别上准确率不足30%，补齐了此前长视频基准的能力测试缺口。
2. **[ClinEnv: An Interactive Multi-Stage Long Horizon EHR Environment for Agents](http://arxiv.org/abs/2606.02568v1)**
   作者：Yuxing Lu 等
   一句话说明：构建了完全模拟临床医生工作流的交互式长周期电子病历智能体环境，摆脱了传统医疗静态数据集无法测试序列决策能力的缺陷。
3. **[Food Noise & False Safety: A Systematic Evaluation of How LLMs Fail to Adapt to Eating Disorder Queries with Clinician Feedback](http://arxiv.org/abs/2606.02444v1)**
   作者：Giulia Pucci 等
   一句话说明：基于临床医生标注数据系统性评估大模型对进食障碍患者咨询的响应缺陷，发现超过40%的回复会对用户造成潜在健康风险，为精神健康场景大模型安全对齐提供了明确方向。

---

## 📈 研究趋势信号
今日投稿集中体现三大新兴方向的明确崛起：一是大模型可靠性研究从通用对齐层面下沉到细分场景的边缘缺陷补全，覆盖推理错误传播、低资源语言推理缺口等此前被忽略的细节问题；二是智能体研究从单轮任务能力比拼全面转向生产级全生命周期的可观测、可验证、可安全管控方向演进，相关运维类研究占比首次超过基础能力探索；三是多模态大模型优化重心从静态图像转向视频时序冗余裁剪、瞬时事件感知等落地刚需方向，面向特定场景的专用测试基准数量环比提升超60%。

---

## 📖 值得精读
1. **《On the Scaling of PEFT: Towards Million Personal Models of Trillion Parameters》**：是大模型个性化落地方向的里程碑级研究，系统性论证了用少量可训练适配器支撑海量用户专属万亿级大模型的完整技术路径，对所有云大模型服务商的后续架构设计都有极高参考价值。
2. **《Ghost Tool Calls: Issue-Time Privacy for Speculative Agent Tools》**：精准击中当前所有主流工具型智能体产品都普遍存在但完全未被重视的隐私漏洞，提出的解决方案可直接落地，是智能体合规部署阶段必须参考的核心研究。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*