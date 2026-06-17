# ArXiv AI 研究日报 2026-06-18

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-17 23:24 UTC

---

# ArXiv AI 研究日报 | 2026-06-18
---
## 今日速览
今日ArXiv AI领域共上线50篇相关投稿，核心聚焦大模型原生架构创新、智能体能力边界突破、落地效率优化三大方向。多篇工作跳出传统Transformer范式，提出可变宽度Transformer、循环世界模型、不动点推理器等全新架构，有效解决长推理误差累积、算力错配等长期痛点。同时一批针对性的评测基准发布，覆盖医疗智能体、学术复现、欧盟法律推理等过去评估空白场景，大幅补全了大模型落地前的校验能力。此外面向边缘端的轻量化模型优化、具身智能自进化机制等落地导向研究占比显著提升，产业落地属性明确。
---
## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **Variable-Width Transformers**  
   链接：http://arxiv.org/abs/2606.18246v1  
   作者：Zhaofeng Wu, Oliver Sieberling等  
   一句话说明：打破传统Transformer全层固定宽度的设计，按不同层的功能差异化分配参数量和算力，为大模型训练推理降本提供了全新架构思路。
2. **Zone of Proximal Policy Optimization: Teacher in Prompts, Not Gradients**  
   链接：http://arxiv.org/abs/2606.18216v1  
   作者：Byung-Kwan Lee, Ximing Lu等  
   一句话说明：跳出传统知识蒸馏依赖梯度对齐的范式，用提示传递大模型教师的能力，解决小模型蒸馏后泛化性暴跌的顽疾。
3. **Towards Understanding and Measuring COGNITIVE ATROPHY in LLM Behaviour**  
   链接：http://arxiv.org/abs/2606.18129v1  
   作者：Abeer Badawi, Moyosoreoluwa Olatosi等  
   一句话说明：首次针对长期多轮情感交互场景提出LLM认知萎缩评测维度，填补了心理健康场景大模型长期可用性的评估空白。
4. **Unintended Effects of Geographic Conditioning in Large Language Models**  
   链接：http://arxiv.org/abs/2606.18124v1  
   作者：Naz Col, David M. Chan  
   一句话说明：系统验证了当前大模型基于用户地理位置本地化响应引入的隐性地域偏见问题，为大模型合规性优化提供了关键参考。

### 🤖 智能体与推理
1. **Visual Verification Enables Inference-time Steering and Autonomous Policy Improvement**  
   链接：http://arxiv.org/abs/2606.18247v1  
   作者：Mingtong Zhang, Dhruv Shah  
   一句话说明：提出VERITAS生成-校验框架，实现了机器人策略在推理阶段的动态引导和自主迭代，无需大量人类标注反馈。
2. **EvolveNav: Proactive Preflection and Self-Evolving Memory for Zero-Shot Object Goal Navigation**  
   链接：http://arxiv.org/abs/2606.18235v1  
   作者：Qi Chai, Wenhao Shen等  
   一句话说明：通过自进化记忆机制解决现有具身导航大模型依赖静态先验、重复犯错的问题，大幅提升零样本导航效率。
3. **Looped World Models**  
   链接：http://arxiv.org/abs/2606.18208v1  
   作者：Hongyuan Adam Lu, Z. L. Victor Wei等  
   一句话说明：提出首个循环架构的世界模型，解决传统长程仿真深度计算成本高、误差累积的核心矛盾，兼顾仿真保真度和部署效率。
4. **Fixed-Point Reasoners: Stable and Adaptive Deep Looped Transformers**  
   链接：http://arxiv.org/abs/2606.18206v1  
   作者：Sajad Movahedi, Vera Milovanović等  
   一句话说明：针对循环架构Transformer的梯度消失/爆炸问题提出不动点训练机制，让模型可自适应调整推理步数适配不同复杂度任务。

### 🔧 方法与框架
1. **ReproRepo: Scaling Reproducibility Audits with GitHub Repository Issues**  
   链接：http://arxiv.org/abs/2606.18237v1  
   作者：Shanda Li, Qiuhong Anna Wei等  
   一句话说明：用真实GitHub Issue替代人工构造数据集，首次实现低成本、大规模的LLM辅助科研结果复现能力评测。
2. **RubricsTree: Scalable and Evolving Open-Ended Evaluation of Personal Health Agents across Health Memory and Medical Skills**  
   链接：http://arxiv.org/abs/2606.18203v1  
   作者：Weizhi Zhang, Zechen Li等  
   一句话说明：构建覆盖健康记忆、医疗技能双维度的开放评测框架，解决医疗智能体部署前标注成本高、校验难的痛点。
3. **Ternary Mamba: Grouped Quantization-Aware Training of W1.58A16 State Space Models**  
   链接：http://arxiv.org/abs/2606.18114v1  
   作者：Ramprasath Ganesaraja, Sahil Dilip Panse等  
   一句话说明：仅需在预训练Mamba checkpoint上微调，训练token量比过往从零开始的三值SSM工作低1000倍，大幅降低边缘端部署成本。

### 📊 应用
1. **A Red-Team Study of Anthropic Fable 5 & Opus 4.8 Models**  
   链接：http://arxiv.org/abs/2606.18193v1  
   作者：Nicola Franco  
   一句话说明：用7826条覆盖10大类危害的prompt系统性测试两款前沿闭源大模型的越狱鲁棒性，为前沿模型安全对齐提供了实测参考。
2. **The Measurement Gap in the Automation of EU Law: Benchmarking Doctrinal Legal Reasoning under the EU AI Act**  
   链接：http://arxiv.org/abs/2606.18158v1  
   作者：Michèle Finck  
   一句话说明：首个聚焦欧盟教义法律推理的评测基准，跳出传统法律AI只测试辅助类任务的局限，适配欧盟AI法案对合规AI的评估要求。
---
## 研究趋势信号
今日投稿呈现三个明确的新兴信号：一是跳出Transformer的原生架构探索热度快速上升，循环状态空间、动态可变计算路径的相关工作占比大幅提升；二是智能体相关研究从能力堆叠转向可用性优化，聚焦自进化记忆、非易失性存储调度等落地级痛点；三是垂直领域大模型评测从泛用基准转向场景专属深度校验，学术复现、医疗、法律等高风险场景的定向评测工作快速增长，反映行业从“拼效果”转向“拼落地合规性”的趋势。
---
## 值得精读
1. **Looped World Models**：同时打通大模型长推理、世界模型长仿真两大领域的误差累积痛点，提出的循环架构思路兼具理论创新性和产业落地价值，可为后续长序列任务优化提供通用参考。
2. **ReproRepo: Scaling Reproducibility Audits with GitHub Repository Issues**：针对AI科研领域长期存在的复现难痛点提出了完全低成本的规模化解决方案，有望系统性提升整个领域的研究透明度。
3. **Ternary Mamba: Grouped Quantization-Aware Training of W1.58A16 State Space Models**：大幅降低了SSM类模型边缘部署的门槛，技术路径简洁可复现，对端侧大模型落地有极高的工程参考价值。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*