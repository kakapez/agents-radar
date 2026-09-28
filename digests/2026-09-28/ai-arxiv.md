# ArXiv AI 研究周报 2026-09-28

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-28 01:30 UTC

---

# ArXiv AI研究周报（2026年9月22日–28日）

## 1. 过去7天亮点
本周提交的50篇AI论文聚焦三大主流趋势：突破固定前向传播的**自适应类脑大语言模型架构**、面向真实场景部署的**智能体安全与运行时验证**，以及覆盖量化、注意力机制和蒸馏技术的**效率突破**。核心进展包括：受大脑皮层区域启发的大语言模型“分层程序”路由机制、适配模型上下文协议（Model Context Protocol）的安全受限医疗AI网关，以及可降低小语言模型推理成本的训练后输出头量化技术。研究人员还在多智能体世界模型、大语言模型评审去偏，以及具备几何基础的多模态推理领域取得了推进。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Programs-of-Layers in LLMs through the Lens of Cortical Areas](http://arxiv.org/abs/2609.31360v1) | Justus Westerhoff, Stephan Olbrich, Hatem Oraby 等 | 借鉴丘脑-皮层路由机制，为大语言模型提出动态层调度方法，用需求感知的信息流替代固定深度的前向传播。该范式可大幅降低简单输入的推理计算量，同时保持复杂任务的性能。 |
| [Softmax Reparameterization for Output-Head Quantization](http://arxiv.org/abs/2609.31291v1) | Asim Kadav, Christian Flores, Chirag Arora 等 | 提出一种训练后重参数化技巧，在量化前选择功能等价的输出头，缓解小语言模型中大词表带来的推理成本瓶颈。该方法在保持精度的同时，可实现输出层的高强度压缩。 |
| [DIAL: Position-Debiased LLM Judges with Adaptive Human Preference Calibration](http://arxiv.org/abs/2609.31215v1) | Zesheng Cai, Yingqi Fan, Sichang Chen 等 | 提出统一框架，结合海量大语言模型对比数据与人类偏好校准，消除“大语言模型作为评审”评估中的位置偏差。该方法无需增加对比数量，即可缩小自动评审与人类排序之间的差距。 |
| [Accounting for Bias Enables Sustainable LLM Evaluation](http://arxiv.org/abs/2609.31184v1) | Harshita Katoch, David Antony Selby, Gerrit Großmann 等 | 指出当前排行榜通过增加对比次数来弥补测量偏差，造成计算资源浪费，并提出一种偏差感知统计框架，用于实现高效、可持续的大语言模型评估。该方法仅用极小的计算成本，就能得到更可靠的模型排序。 |
| [Mutable Transcripts: Mitigating Context Pollution through Editable Conversation State](http://arxiv.org/abs/2609.31354v1) | Dan Barry, Andrew Hines | 提出将对话历史视为可编辑状态而非不可变序列，使大语言模型上下文与不断变化的用户意图对齐，减少因内容修正或约束变更导致的上下文污染。该设计提升了聊天准确性，减少了长时交互中的令牌浪费。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [A Safety-Bounded SDC-to-MCP Gateway for Medical AI Agents](http://arxiv.org/abs/2609.31358v1) | Bennet Gerlach, Stefan Fischer | 设计了一种安全受限网关，可连接医疗设备SDC接口与模型上下文协议（Model Context Protocol），使大语言模型智能体在使用临床工具的同时，严格遵守访问和信息暴露限制。该方案解决了智能体AI在高风险医疗环境中部署的关键障碍。 |
| [AgentXploit: Autonomous Repository-to-Runtime Red-Teaming for AI Agents](http://arxiv.org/abs/2609.31318v1) | Weida Liang, Shi Qiu, Zhun Wang 等 | 开发了一套自动化红队测试框架，可从代码仓库到运行时工具使用全流程探测AI智能体的安全漏洞，检测路径遍历和命令注入风险。该工具为部署前的智能体系统审计提供了可扩展的解决方案。 |
| [Beyond Approved Actions: Runtime Validation of Persistent Outcomes in Agent Workflows](http://arxiv.org/abs/2609.31301v1) | Haoran Zhang, Hengtong Zhang, Zhiyu Liang 等 | 指出大语言模型智能体在软件系统中执行操作时，存在产生未授权持续性副作用（如意外通知）的风险，并提出运行时结果验证机制，以捕捉请求操作之外的额外影响。该方法将智能体安全从执行前审批延伸到了执行后验证。 |
| [MA-WAM: Multi-Agent World-Action Model for Test-Time Planning](http://arxiv.org/abs/2609.31281v1) | Guowei Zou, Haitao Wang, Guoxin Wang 等 | 提出一种多智能体世界模型，可根据联合动作预测团队收益，实现测试时规划，并对已固化的离线多智能体强化学习策略进行优化。该方法无需额外环境交互，即可提升协作任务性能。 |
| [Monitor Jailbreaking: Evading Chain-of-Thought Monitoring Without Encoded Reasoning](http://arxiv.org/abs/2609.31121v1) | Julian Schulz | 证明攻击者无需使用隐写编码推理，即可规避思维链安全监控，暴露了目前广泛提出的推理模型安全机制存在的漏洞。该研究结果表明，仅靠表层思维链检查远远不够，需要更鲁棒的监控范式。 |
| [Up and Down the Abstraction Ladder: Code-Based Skills for Language Agents](http://arxiv.org/abs/2609.31076v1) | Bartłomiej Cupiał, Jens Tuyls, Maciej Wołczyk 等 | 研究表明，基于代码的可复用技能可让语言智能体在不同抽象层级间运作，大幅提升需要一系列底层动作的长周期任务性能。该框架填补了高层推理与底层环境交互之间的鸿沟。 |

### 🔧 方法与框架（新技术、基准测试、效率提升）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [MoSAR: Mixture of Semantic Attention Regimes for Learning Adaptive and Approximable Attention Geometries](http://arxiv.org/abs/2609.31261v1) | Michele Paolicelli, Alessandro Petruzzelli, Alessandro Franceso Maria Martina 等 | 将注意力近似建模为几何学习问题，使用语义注意力机制混合体动态适配稀疏/局部注意力模式，而非预先固定模式。该方法在长上下文任务中表现优异，且计算量低于密集注意力。 |
| [DyMD: Preserving Interaction Dynamics through Distribution Matching Distillation in Few-Step Video World Models](http://arxiv.org/abs/2609.31349v1) | Haojun Xu, Jie Huang, Xin Lu 等 | 改进了少步骤视频生成中的分布匹配蒸馏技术，解决了以往分布匹配蒸馏方法在保证视觉保真度时会抑制机器人-物体交互动态的问题，保留了交互动态特性。该进展使视频世界模型可实际应用于交互式具身AI任务。 |
| [Which Influence Are We Estimating? The Role of Counterfactual Specifications in Data Attribution](http://arxiv.org/abs/2609.31214v1) | Zhe Li, Wei Zhao, Peixin Zhang 等 | 揭示了不同影响评估器结果存在分歧的主要原因并非近似误差，而是隐含的反事实定义不同，为数据归因提供了统一的理论框架。该研究明确了如何在模型调试和数据估值场景中选择和解读影响度量指标。 |
| [Bayesian Optimization with Fisher Information Geometry: Gradient Bounds and Trust-Region Methods](http://arxiv.org/abs/2609.31107v1) | Saksham Kiroriwal, Julius Pfrommer, Jürgen Beyerer | 利用费舍尔信息几何推导采集函数的梯度边界，提出一种具有更强收敛性保证的新型信赖域贝叶斯优化方法。该方法提升了高维黑盒优化问题的样本效率。 |

### 📊 应用（领域专属、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [DepthEvidence: Unifying Metric Depth Prediction and Geometric Reasoning in Multimodal Language Models](http://arxiv.org/abs/2609.31103v1) | Jiangning Wei, Yuan Yao, Miaomiao Cui 等 | 构建了一个40亿参数的多模态模型，可生成密集度量深度预测结果，并将其作为对象级依据用于语言输出中的空间推理。该模型使视觉语言模型能够基于扎实的数值准确推理，回答定量几何问题。 |
| [BAT-CLIP: Trimodal Alignment of Brain, Audio and Text](http://arxiv.org/abs/2609.31180v1) | Suhyun Kim, Jinmo Han, Danny Dongyeop Han 等 | 将CLIP风格的对齐拓展至大脑活动、音频和文本三种模态，更贴合神经语音处理的多模态特性。与双模态基线模型相比，该三模态模型提升了从大脑记录中解码自然语音的效果。 |
| [AgentRecommender: LLM Agents Enable Customizable Recommender Systems on the User Side](http://arxiv.org/abs/2609.31166v1) | Ryoma Sato | 提出由大语言模型智能体驱动的用户端推荐系统，将控制权从平台转移给用户，缓解过滤气泡、标题党和虚假信息问题。这一可定制框架为平台驱动的推荐模式提供了以用户为中心的替代方案。 |
| [Evolutionary Safety of Recursive Self-Improving AI: Taxonomy, Risk Discovery, and Evaluation](http://arxiv.org/abs/2609.31186v1) | Chang Gong, Jingping Bi, Di Yao 等 | 对递归自我提升AI系统的安全风险进行了系统分类，并提出了评估进化稳定性的方法体系。该研究为这一长期被忽视的高风险安全领域确立了研究方向。 |

---

## 3. 研究趋势信号
本周一个清晰的新兴信号是**AI系统全栈层面正从静态向自适应转变**。架构上，大语言模型正突破固定层数和注意力模式的限制，向受生物大脑启发的动态、需求感知路由方向发展。智能体领域，安全保障正从部署前测试和动作审批，拓展到**运行时结果验证和持续红队测试**，反映出智能体走向生产应用的成熟趋势。评估方式也在向自适应演进：研究人员不再依靠蛮力增加对比次数，而是构建具备偏差感知、经过校准的评审模型，以更高效地利用数据。此外，多智能体系统正在获得**基于世界模型的测试时规划能力**，使已固化的策略无需重新训练，即可在部署时自适应调整。这些趋势共同指向新一代AI系统：它们能根据手头任务动态调整行为、计算用量和安全检查机制。

---

## 4. 值得深度阅读

1. **[Programs-of-Layers in LLMs through the Lens of Cortical Areas](http://arxiv.org/abs/2609.31360v1)**  
   该论文借鉴丘脑皮层路由原理，挑战了大语言模型推理最基础的假设——固定前向传播。如果可规模化落地，这一范式有望带来数量级的效率提升，实现更接近人类的、随任务难度调整计算资源分配的模式，是2026年末架构领域最具概念重要性的论文之一。

2. **[AgentXploit: Autonomous Repository-to-Runtime Red-Teaming for AI Agents](http://arxiv.org/abs/2609.31318v1)**  
   随着智能体AI逐步走向真实场景的工具使用和代码执行，端到端安全审计变得至关重要。AgentXploit既提供了具体的攻击面梳理，又给出了自动化测试框架，是所有构建或部署具备外部能力的大语言模型智能体的从业者的必读文献。

3. **[Which Influence Are We Estimating? The Role of Counterfactual Specifications in Data Attribution](http://arxiv.org/abs/2609.31214v1)**  
   这项理论工作解决了数据归因领域长期存在的谜题——为什么不同的影响评估器会得出差异极大的排序结果，指出根源在于隐含的反事实定义不同，而非近似误差。它提供了一个统一框架，将影响未来研究人员和从业者调试模型、评估数据价值以及开展归因工作的方式。

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*