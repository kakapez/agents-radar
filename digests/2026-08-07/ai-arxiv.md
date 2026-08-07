# ArXiv AI 研究日报 2026-08-07

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-07 01:29 UTC

---

# ArXiv AI 研究日报（2026-08-07）
今日收录cs.AI、cs.CL、cs.LG分类最新AI投稿共50篇

---

## 今日速览
今日ArXiv上线的AI领域投稿覆盖大模型底层优化、智能体全栈可靠性、垂直场景普惠落地三大核心方向。多项突破跳出传统堆参数、刷通用榜的路径，提出了大量免训练、轻量级的落地友好型技术方案。同时一批填补细分领域空白的专用基准、低资源语言模型密集发布，公共服务、医疗、生物医药等高价值场景的研究占比显著提升。智能体相关研究已经形成从理论边界定义到运行时安全防护的完整链条，指向下一阶段AI落地的核心攻关方向。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **Beyond Sequence Order: Syntax-Informed Positional Embeddings for Transformers**  
   http://arxiv.org/abs/2608.06111v1 | 作者：Haris Riaz等  
   提出轻量级语法感知位置编码SiPE，让Transformer的位置编码不再仅依赖token顺序，融入依赖句法先验，无需大幅改造模型即可在句法类任务上获得明显性能提升。
2. **MameLoshnLM: Yiddish Language Model and Evaluation Benchmark**  
   http://arxiv.org/abs/2608.05850v1 | 作者：Uri Katz等  
   发布首个开源8B参数意第绪语专用大模型和配套评测基准，填补了低资源濒危语言大模型的空白，为其他小语种语言模型训练提供了可复用范式。
3. **Poli-Bias: Understanding and Measuring Large Language Model Biases in International Political Conflicts**  
   http://arxiv.org/abs/2608.06123v1 | 作者：Massi-Nissa Abboud等  
   提出反事实框架Poli-Bias，解决传统方法难以捕捉LLM在国际政治冲突中隐含的叙事、法律推理层面偏见的痛点，是目前少有的针对地缘政治场景的LLM偏见量化工具。
4. **Mitigating Scoring Bias in LLM-as-a-Judge via Random Number Generation**  
   http://arxiv.org/abs/2608.05726v1 | 作者：Yuma Asato等  
   提出用随机数注入的极简策略缓解LLM自动评估中的评分漂移、刻板打分问题，无需额外微调就能大幅提升LLM-as-a-Judge的评分一致性。

### 🤖 智能体与推理（规划、工具使用、安全）
1. **Routing Is Least Learnable Where It Is Most Valuable: Bounds on Representation Routing for Web Agents**  
   http://arxiv.org/abs/2608.06171v1 | 作者：Jiaming Wei等  
   针对Web智能体传统固定观测模式的缺陷，在两个主流Web交互基准上量化了分任务路由观测模态的收益，首次给出了表示路由能力的理论下界，为Web代理落地的性能瓶颈提供了明确解释。
2. **DreamGuard: Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model**  
   http://arxiv.org/abs/2608.05695v1 | 作者：Wenhao Lin等  
   提出基于风险感知世界模型的LLM代理运行时护栏，不需要前置枚举所有风险动作，就能提前预判危险操作，大幅降低代理访问真实系统的安全隐患。
3. **When Self-Evolution Backfires: Pre-Commit Gating against Skill Contamination in LLM Agents**  
   http://arxiv.org/abs/2608.05810v1 | 作者：Linfang Shang等  
   首次发现自进化智能体的技能库规模超过阈值后会出现能力反向退化的污染现象，提出的预提交门控机制可以避免该问题，为自进化代理的长期迭代提供了核心保障。
4. **ECHO: A Locally-Deployable Agentic Health Assistant with Temporal Memory, Safety Guardrails, and Speech Assessment**  
   http://arxiv.org/abs/2608.06110v1 | 作者：Abdulkadir Külçe等  
   完全本地化部署的慢性病管理智能健康助手，集成时序记忆、安全护栏和语音评估模块，不需要上传用户隐私数据就能完成长期健康监护，完全符合医疗数据合规要求。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **GROM: Gradient-Free Rapid One-Shot Machine Unlearning**  
   http://arxiv.org/abs/2608.05783v1 | 作者：Paweł Batorski等  
   提出无梯度的单步快速机器遗忘框架GROM，不需要迭代微调就能从大模型中移除指定敏感知识，性能超过现有SOTA方案，大幅降低了大模型合规卸载的成本。
2. **Training-Free Token-Level Steering for LLM Personalized Co-Writing**  
   http://arxiv.org/abs/2608.06069v1 | 作者：Wenhao Mao等  
   免训练的token级LLM个性化协同写作引导方案，不需要微调、不依赖检索增强就能生成符合用户特定写作风格的内容，解决了传统个性化方案成本高、粒度粗的问题。
3. **LangChoiceBench: Measuring and Explaining Programming-Language Choice in LLMs**  
   http://arxiv.org/abs/2608.06041v1 | 作者：Lukas Twist等  
   首个针对大模型生成代码时的编程语言偏好的项目级基准LangChoiceBench，可以系统量化不同大模型过度偏好Python、忽略任务适配其他编程语言的问题，为代码生成模型的公平性优化提供了测试工具。
4. **On-Policy Delta Distillation for Multilingual Math Reasoning**  
   http://arxiv.org/abs/2608.05802v1 | 作者：Byeongho Heo等  
   将在线策略蒸馏的变体OPD²首次应用到多语言数学推理场景，不需要大规模RL就能让小模型获得接近大模型的多语言推理能力，大幅降低了推理模型的训练成本。

### 📊 应用（垂直领域、多模态）
1. **FormBharo: Designing and Evaluating a Voice Agent for Conversational Form Filling in Rural India**  
   http://arxiv.org/abs/2608.06027v1 | 作者：Aman Dalmia等  
   面向印度农村文盲用户的语音填表智能代理，解决了基层社会福利申请流程中人力不足、用户不会读写的痛点，为低数字素养地区的普惠AI落地提供了成熟案例。
2. **EpiBench: Can LLMs Understand Epitopes for Antibody

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*