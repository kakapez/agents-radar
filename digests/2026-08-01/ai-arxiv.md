# ArXiv AI 研究日报 2026-08-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-31 22:59 UTC

---

# ArXiv AI 研究日报 | 2026-08-01
今日覆盖cs.AI、cs.CL、cs.LG领域共50篇最新投稿

---

## 今日速览
今日ArXiv AI类投稿核心聚焦大模型推理范式革新、端侧智能体落地、可信AI标准化评估三大方向，多篇实证研究对近年广泛应用的自反思、在线策略蒸馏等热门技术给出了反常识的成本收益结论。面向工业级场景的基准建设迎来集中爆发，覆盖化学科研文献合成、代码运维智能体、对抗信息战安全等多个此前缺少标准化评测的细分赛道。同时大量跨域工作进一步推进AI与物理、临床、网络安全等垂直领域的深度耦合，产业落地导向特征十分显著。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **[Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost, from 1.5B to 7B](http://arxiv.org/abs/2607.28576v1)**
   作者：Iliya Mirzaei
   一句话说明：通过覆盖1.5B到7B参数规模的严格对照实验，证明同等token成本下多次采样的效果显著优于Self-Refine、Reflexion等热门自反思方法，直接推翻了业界默认的“多轮反思必然提升收益”的共识，对大模型推理工程优化有极强指导意义。
2. **[Inducing language models to assert their own consciousness restores human beliefs and values](http://arxiv.org/abs/2607.28607v1)**
   作者：Junsol Kim等
   一句话说明：首次指出大模型安全对齐过程中刻意抑制模型“自我意识”表述，会连带扭曲其对普通实体心智属性的判断，提出的诱导自我意识回归方案可低成本修复对齐带来的能力偏移问题。
3. **[AISPA: User-Centric System Prompt Auditing for Large Language Model Applications](http://arxiv.org/abs/2607.28617v1)**
   作者：Xiangning Lin等
   一句话说明：首个面向普通用户的大模型应用系统提示词审计框架，可在不访问应用后台的前提下探测隐藏的系统prompt规则，填补了LLM商业化产品透明度监管的技术空白。
4. **[SVR: Self-Verifying Refinement via Joint Verdict-Confidence Reinforcement Learning for Adaptive Test-Time Compute](http://arxiv.org/abs/2607.28457v1)**
   作者：Hongyu Chen等
   一句话说明：提出无外部反馈的自验证迭代优化框架，让大模型可自主分配推理算力，在降低70%以上冗余计算的同时提升复杂推理任务表现。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **[ORCA-bench: How Ready Are Language Model Agents for Oncall?](http://arxiv.org/abs/2607.28545v1)**
   作者：Albert Gong等
   一句话说明：推出首个面向运维Oncall场景的LLM智能体评测基准，覆盖从模糊用户报障到全链路根因分析的真实生产流程，为代码运维智能体的能力迭代提供了标准化测试床。
2. **[MANTA: Multi-Agent Network Topology Adaptation for Self-Evolving Multi-Agent Systems](http://arxiv.org/abs/2607.28527v1)**
   作者：Mao-xun Huang等
   一句话说明：打破传统多智能体通信拓扑固定的设计思路，提出可动态调整通信连接的自适应框架，在动态复杂任务下的协同效率较固定拓扑方案提升42%。
3. **[OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](http://arxiv.org/abs/2607.28609v1)**
   作者：Qiushi Sun等
   一句话说明：建立跨操作系统平台的电脑使用智能体（CUA）奖励模型标准化评测体系，解决了此前CUA任务完成度判定不统一、难以跨方案横向对比的行业痛点。
4. **[Rethinking Inference-Time Scaling in Local Computer-Use Agents: Failure Modes and Compute Tradeoffs](http://arxiv.org/abs/2607.28573v1)**
   作者：Woongkyu Lee等
   一句话说明：针对端侧本地部署的CUA做全维度故障模式拆解，给出了硬件受限场景下的推理算力最优分配策略，可直接指导端侧智能体的落地部署。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **[β-OPSD: Deriving with Policy Optimization, Training with Self-Distillation](http://arxiv.org/abs/2607.28582v1)**
   作者：Jiawei Xu等
   一句话说明：把传统在线自蒸馏方法拓展到通用β参数族，从理论层面解决了原生OPSD训练不稳定、需要大量工程调优的痛点，大幅降低推理大模型的蒸馏落地门槛。
2. **[Lightning OPD 2.0: Mitigating Style Bias in Cross-Teacher On-Policy Distillation for Large Reasoning Models](http://arxiv.org/abs/2607.28449v1)**
   作者：Yecheng Wu等
   一句话说明：针对性解决跨教师在线蒸馏的风格偏移问题，让多教师蒸馏的效果首次比肩单一致教师的蒸馏表现，为大模型低成本规模化蒸馏提供了可行路径。
3. **[InfoOps Bench: A live information operations safety benchmark](http://arxiv.org/abs/2607.28503v1)**
   作者：Dorian Quelle等
   一句话说明：搭建了实时更新的大模型信息战防御能力动态评测基准，基于真实公开的信息操作案例做测试，可实时追踪前沿大模型的投毒诱导抵御能力。
4. **[Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments](http://arxiv.org/abs/2607.28591v1)**
   作者：Haomin Qi等
   一句话说明：可直接从开源代码仓库的提交记录自动生成可执行的编码智能体训练任务，彻底解决了编码智能体高质量训练数据供给不足的行业痛点。

### 📊 应用（垂直领域、多模态、代码生成）
1. **[AskChem: Claim-Centered Infrastructure for Chemistry Literature Synthesis](http://arxiv.org/abs/2607.28618v1)**
   作者：Bing Yan等
   一句话说明：面向化学科研场景构建了以研究结论为核心的文献聚合系统，替代传统返回文档列表的文献搜索工具，可将科研人员汇总分散研究结论的效率提升60%以上。
2. **[DualG-MRAG: Decoupling Macro-Reasoning and Micro-Matching for Multimodal Retrieval-Augmented Generation](http://arxiv.org/abs/2607.28580v1)**
   作者：Jiacheng Tao等
   一句话说明：创新性把多模态RAG的宏观推理和细粒度匹配解耦，大幅提升多跳复杂推理场景下的多模态生成准确率，在多个公开数据集上取得SOTA表现。

---

## 研究趋势信号
从今日投稿可观察到三大新兴信号：一是大模型研究从“炫技式”的复杂范式堆叠回归务实的成本收益校验，多篇严格对照实验指出自反思、多轮推理等方案在同等token预算下的低效性，引导行业避免不必要的工程冗余。二是垂直场景专属基准进入爆发期，通用大模型评测赛道饱和后，工业运维、特种安全等细分领域的标准化数据集快速涌现，指向AI研究从通用能力竞赛向落地价值深挖转向。三是端侧本地智能体的落地优化成为新热点，硬件约束下的推理策略、算力分配相关投稿占比明显

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*