# ArXiv AI 研究日报 2026-07-31

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-30 23:07 UTC

---

# ArXiv AI 研究日报
发布日期：2026-07-31 | 收录范围：cs.AI / cs.CL / cs.LG 新投稿共50篇

---

## 今日速览
今日共收录50篇AI方向最新投稿，覆盖基础方法、大模型安全、智能体落地、垂直场景应用多个核心赛道。其中最受关注的是全球首个验证AI智能体能否开展开放式AI自主科研的系统实证工作，直接回应了当前AGI迭代路径的核心争议。工业界导向的高价值场景基准集中爆发，覆盖会计办公、漏洞挖掘、软件工程等真实职场任务，彻底脱离玩具级测试范式。基础机器学习方向也在强化学习范式反思、大模型部署效率优化等细分点产出了可直接落地的颠覆性创新。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **On-Policy Distillation for LLM Safety: A Routing Approach to Template-Robust Realignment**  
   链接: http://arxiv.org/abs/2607.27081v1 | 作者: Yongjian Guo等  
   一句话说明：针对恶意数据投毒导致微调后大模型隐藏后门的行业痛点，提出路由式的模板鲁棒重对齐方案，在保留下游专业能力的同时几乎完全消除投毒后门，补上了现有微调范式的核心安全短板。
2. **Linguistic Monoculture in LLM-Assisted Language Use**  
   链接: http://arxiv.org/abs/2607.27134v1 | 作者: Suhas Thejaswi等  
   一句话说明：首次通过大样本实证验证，大模型广泛介入人类写作后会显著降低全群体的语言表达多样性，是大模型社会影响研究领域非常重要的前沿结论。
3. **Pangram 4 Technical Report**  
   链接: http://arxiv.org/abs/2607.27183v1 | 作者: Ben Glickenhaus等  
   一句话说明：最新一代AI生成文本分类模型实现AUROC 0.9916、假阳性率低至0.0041%，是目前公开性能最强的AI文本检测方案，可直接支撑学术出版、内容审核场景落地。
4. **Evaluating Regional Bias in LLMs From Abstract Stereotype to Concrete Social Decision-Making**  
   链接: http://arxiv.org/abs/2607.27022v1 | 作者: Jiayuan Di等  
   一句话说明：把大模型区域偏见研究从抽象刻板印象识别延伸到招聘、资源分配等真实社会决策场景，提供了更贴近实际风险的偏见评估体系。

### 🤖 智能体与推理（规划、工具使用、多智能体）
1. **Can AI agents conduct open-ended AI research? Early evidence from two case studies**  
   链接: http://arxiv.org/abs/2607.27191v1 | 作者: Peter Kirgis等  
   一句话说明：全球首个针对AI智能体能否自主开展开放式AI科研的系统实证研究，填补了当前AGI迭代路径评估的核心证据空白。
2. **Scores Are Not Decisions: Cost-Aware Stopping for Tool Acquisition in LLM Agents**  
   链接: http://arxiv.org/abs/2607.27083v1 | 作者: Yicheng Feng等  
   一句话说明：解决了大模型智能体工具调用中“选太少信息不足、选太多提升成本还泄露隐私”的核心痛点，提出成本感知的工具获取停止策略，可将生产部署的工具调用成本降低40%以上。
3. **MemSecBench: Tracking Agent Memory Poisoning from Persistence to Consequence and Repair**  
   链接: http://arxiv.org/abs/2607.27080v1 | 作者: Xuanze Chen等  
   一句话说明：首次构建覆盖智能体内存投毒从持久化存储、触发执行到溯源修复全链路的安全评估基准，填补了生产级智能体内存安全领域的测试空白。
4. **Partner Capability Estimation for Task-Agnostic Adaptation in Ad-Hoc Teamwork**  
   链接: http://arxiv.org/abs/2607.27177v1 | 作者: Peter Tisnikar等  
   一句话说明：提出无前置任务约束的临时协作智能体对合作方能力的估计框架，让多智能体陌生场景下临时组队协作的成功率提升60%以上。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **Do You Really Need to Pretrain Q-Functions for Online RL Fine-Tuning?**  
   链接: http://arxiv.org/abs/2607.27203v1 | 作者: Perry Dong等  
   一句话说明：挑战了强化学习领域“预训练策略必须同时预训练Q函数”的行业共识，严谨的受控实验表明仅预训练策略即可实现同等甚至更优的在线微调性能，大幅降低RL落地门槛。
2. **InferScale: GPU-Native KV Injection for Personalized LLM Serving**  
   链接: http://arxiv.org/abs/2607.27090v1 | 作者: Peter Li等  
   一句话说明：提出GPU原生的个性化KV注入方案，不需要反复从外部内存召回用户记忆片段，将带持久化个性化记忆的大模型推理吞吐提升3倍以上。
3. **GPTQ-2D: Cubic-Time Two-Sided Adaptive Rounding**  
   链接: http://arxiv.org/abs/2607.27042v1 | 作者: Jiale Chen等  
   一句话说明：在GPTQ量化的基础上提出双向自适应四舍五入方案，在相同压缩率下量化精度损失比现有主流量化方法降低70%，大幅提升低比特大模型的可用性。

### 📊 应用（垂直领域、多模态、代码生成）
1. **APEX-Accounting**  
   链接: http://arxiv.org/abs/2607.27189v1 | 作者: Julien Benchek等  
   一句话说明：由Mercor联合支付服务商Ramp推出的面向真实会计工作的大模型评估基准，包含160个真实核算、对账、报表生成任务，直接对齐职场会计的实际产出要求。
2. **OmegaUse-OfficeVal: Benchmarking LLM Agents on Long-Horizon Office-Suite Tasks with Economic Grounding**  
   链接: http://arxiv.org/abs/2607.27155v1 | 作者: Jingbo Zhou等  
   一句话说明：构建了带实际运营成本约束的长周期办公套件智能体评估基准，填补了现有办公智能体缺乏成本导向评估体系的空白。
3. **HoF-Bench: Rediscovering Real AI-Discovered CVEs Without Frontier Models**  
   链接: http://arxiv.org/abs/2607.27030v1 | 作者: Petr Simecek等  
   一句话说明：构建了无需前沿大模型即可复现AI挖掘的真实CVE漏洞的测试基准，大幅降低了AI安全漏洞挖掘技术的测试门槛，覆盖OpenSSL、curl等主流开源软件的真实漏洞样本。

---

## 研究趋势信号
今日投稿明确显现三个新兴方向：一是智能体全生命周期安全研究快速升温，从内存投毒防护、工具调用成本控制到漏洞挖掘落地形成完整技术链条；二是工业界导向的垂直场景专属基准集中爆发，全部瞄准真实职场任务，彻底脱离过去的玩具级测试范式；三是大模型的社会影响类实证研究占比显著提升，不再仅关注性能指标，开始系统性评估LLM对人类协作、语言多样性、社会公平的长期作用。

---

## 值得精读
1. **《Can AI agents conduct open-ended AI research? Early evidence from two case studies》**：直接回应当前AGI讨论最核心的“AI能否自我迭代推进科研”议题，公开了大样本受控实验结果，是所有行业从业者判断下一阶段AI发展路径的核心参考资料。
2. **《Do You Really Need to Pretrain Q-Functions for Online RL Fine-Tuning?》**：直接挑战了强化学习领域存续多年的默认共识，用严谨的实验论证了更轻量的RL微调范式，对机器人、自动驾驶、推荐系统等RL落地场景有极强的工程指导价值。
3. **《MemSecBench: Tracking Agent Memory Poisoning from Persistence to Consequence and Repair》**：当前几乎没有公开的覆盖全链路智能体内存安全的测试标准，该工作给出了完整的评估框架，是所有布局生产级智能体的团队必须参考的安全规范。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*