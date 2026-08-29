# ArXiv AI 研究日报 2026-08-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-29 03:31 UTC

---

# ArXiv AI 研究日报
2026年8月29日 | 覆盖领域：cs.AI / cs.CL / cs.LG 最新投稿汇总

---

## 今日速览
今日AI方向共收录50篇最新投稿，核心热点集中在LLM推理优化、智能体全链路研发、低成本大模型落地三大方向。多篇工作跳出传统依赖大规模标注/海量轨迹的优化思路，从测试时调整、小模型失败模式复用、弱模型引导等新路径实现推理性能跃升。智能体领域从技能构建、红队测试、失配监控到数据质量评估形成闭环研究链条，落地性大幅提升。同时多篇面向垂直场景的公平性、包容性基准发布，填补了代码评审、企业级知识库、视障群体服务等此前的评估空白。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090**  
   链接：http://arxiv.org/abs/2608.27370v1 | 作者：Kairong Luo 等  
   一句话说明：提出首个可在单消费级RTX 5090显卡上完成2B参数大模型预训练的低成本方案，总投入低于5090美元，大幅降低中小团队大模型自研门槛。
2. **Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO**  
   链接：http://arxiv.org/abs/2608.27351v1 | 作者：Yunpeng Ba 等  
   一句话说明：首次系统对比进化策略（ES）与当前主流的GRPO后训练范式，证明ES可实现比GRPO更宽的推理覆盖度，为LLM后训练提供了新的选型参考。
3. **Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance**  
   链接：http://arxiv.org/abs/2608.27340v1 | 作者：Allison Zhuang 等  
   一句话说明：打破评估感知是单维度属性的固有认知，证明能力框架提示可有效调控模型在评估场景下的合规性，为安全评估流水线设计提供新的优化思路。
4. **TTPO: Test-Time Policy Optimization**  
   链接：http://arxiv.org/abs/2608.27448v1 | 作者：Aozhe Wang 等  
   一句话说明：全新测试时策略优化框架无需依赖任何标注真值，即可在推理阶段对LLM的数学推理能力进行校准，解决了传统后训练方法无法在测试阶段动态调优的痛点。

---

### 🤖 智能体与推理
1. **WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**  
   链接：http://arxiv.org/abs/2608.27454v1 | 作者：Liyan Tang 等  
   一句话说明：提出将智能体交互经验沉淀为可复用持久化技能知识库的框架，支持智能体在持续交互过程中自动迭代技能体系，大幅减少重复学习成本。
2. **RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution**  
   链接：http://arxiv.org/abs/2608.27439v1 | 作者：Junjie Zhang 等  
   一句话说明：自研经验驱动技能进化的自动化红队智能体，突破传统固定攻击范式的局限，可生成动态迭代的越狱攻击策略，显著提升LLM智能体的安全测试效率。
3. **INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment**  
   链接：http://arxiv.org/abs/2608.27348v1 | 作者：Yutong Zhang 等  
   一句话说明：提出将意图单独抽象为工具的架构模式，可大幅简化智能体失配行为的追踪识别过程，解决了传统CoT监控难以定位智能体有害动作根因的问题。
4. **What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents**  
   链接：http://arxiv.org/abs/2608.27260v1 | 作者：Xingshan Zeng 等  
   一句话说明：首次从环境-任务-交互-成功信号一致性的ACE视角，系统性定义了高质量智能体交互数据的核心标准，结束了当前智能体数据生成无明确评估标尺的现状。

---

### 🔧 方法与框架
1. **CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes**  
   链接：http://arxiv.org/abs/2608.27455v1 | 作者：Yufan Wu 等  
   一句话说明：首创推理时弱到强泛化框架，无需额外标注和外部验证，仅通过小语言模型的失败模式引导大模型生成，即可实现推理性能的显著提升。
2. **SWE-Prime: Fewer Trajectories, Better Performance**  
   链接：http://arxiv.org/abs/2608.27449v1 | 作者：Dewu Zheng 等  
   一句话说明：提出面向软件解决场景的SFT优化方案，无需构建大规模智能体轨迹数据集，仅靠少量高质量样本即可实现更优的代码问题解决性能，大幅降低SWE领域微调成本。
3. **Naive Prompt Optimization: Rethinking the Need for Complex Prompt Search**  
   链接：http://arxiv.org/abs/2608.27266v1 | 作者：Yuan Chang 等  
   一句话说明：反常识论证了大部分复杂提示搜索算法的性能收益实际来自简单朴素优化维度，为业界节省提示优化的算力投入提供了明确指导。
4. **BTS-AgentBench: A Deterministic, Replayable Pipeline from Read-Only Telemetry Logs to Agent Benchmarks**  
   链接：http://arxiv.org/abs/2608.27334v1 | 作者：Jeong-Yoon Kim 等  
   一句话说明：提出可从工业环境只读遥测日志自动生成可复现智能体基准的流水线，大幅降低了真实场景智能体评估数据的构建门槛。

---

### 📊 应用
1. **BrailleBench: Investigating Multi-Criteria Braille Comprehension in Large Language Models**  
   链接：http://arxiv.org/abs/2608.27268v1 | 作者：Jinghan Zhang 等  
   一句话说明：首个面向盲/聋盲

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*