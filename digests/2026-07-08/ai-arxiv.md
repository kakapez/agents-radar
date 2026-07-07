# ArXiv AI 研究日报 2026-07-08

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-07 23:01 UTC

---

# ArXiv AI 研究日报（2026-07-08）
今日覆盖ArXiv cs.AI、cs.CL、cs.LG领域最新50篇投稿，聚焦大模型新范式、智能体落地、具身机器人实用化三大核心方向。

---

## 今日速览
本次投稿首次将「解决方案验证能力」定义为大语言模型独立于预训练、后训练的全新缩放维度，为进一步提升大模型推理上限提供了低成本新路径。针对强化学习增强大模型推理成本过高的行业痛点，学界提出直接在线策略蒸馏的弱到强泛化方案，可将推理增强大模型的训练开销大幅降低。同时面向真实场景落地的专用基准、安全防御方案集中涌现，覆盖用户自属个人智能体、流式语音交互、医疗多模态编辑等此前被忽略的细分场景。整体投稿呈现出从实验室指标优化向产业落地痛点攻坚的明确转向。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **Weak-to-Strong Generalization via Direct On-Policy Distillation**  
   链接：http://arxiv.org/abs/2607.05394v1 | 作者：Shiyuan Feng et al.  
   一句话说明：提出直接在线策略蒸馏范式，解决了原有RLVR训练大模型推理时需要反复生成大量轨迹的高成本瓶颈，大幅降低推理增强大模型的落地门槛。
2. **LLM-as-a-Verifier: A General-Purpose Verification Framework**  
   链接：http://arxiv.org/abs/2607.05391v1 | 作者：Jacky Kwok et al.  
   一句话说明：首次将通用解决方案验证能力定义为LLM全新缩放轴，通过系统性实验证明该能力可独立提升大模型综合表现，开辟了大模型能力优化的新方向。
3. **Faithfulness to Refusal: A Causal Audit of Neuron Selectors**  
   链接：http://arxiv.org/abs/2607.05355v1 | 作者：Ananth Eswar et al.  
   一句话说明：针对大模型安全神经元编辑的因果有效性首次提出配对审计方案，解决了此前归因方法无法区分神经元关联关系和因果作用的核心问题，大幅提升安全编辑的可靠性。
4. **How Much is Left? LLMs Linearly Encode Their Remaining Output Length**  
   链接：http://arxiv.org/abs/2607.05316v1 | 作者：Mohamed Amine Merzouk et al.  
   一句话说明：首次发现大模型生成过程中会线性编码剩余待输出的token数量，该隐特性为控制大模型生成长度、优化推理资源分配提供了全新的轻量化手段。

### 🤖 智能体与推理（规划、工具使用、多智能体）
1. **CompactionRL: Reinforcement Learning with Context Compaction for Long-Horizon Agents**  
   链接：http://arxiv.org/abs/2607.05378v1 | 作者：Yujiang Li et al.  
   一句话说明：提出带上下文压缩强化学习的长时序智能体框架，解决了长交互任务下智能体上下文溢出的普遍痛点，无需扩展原生上下文窗口即可支撑超长时间任务执行。
2. **Cortex: A Bidirectionally Aligned Embodied Agent Framework for Long-horizon Manipulation**  
   链接：http://arxiv.org/abs/2607.05377v1 | 作者：Jiaqi Peng et al.  
   一句话说明：双向对齐的具身智能体框架填补了高层规划和底层VLA动作策略之间的语义鸿沟，大幅提升了机器人长时序操作任务的成功率。
3. **MetaSkill-Evolve: Recursive Self-Improvement of LLM Agents via Two-Timescale Meta-Skill Evolution**  
   链接：http://arxiv.org/abs/2607.05297v1 | 作者：Zefeng Wang et al.  
   一句话说明：提出双时间尺度元技能自进化的LLM智能体框架，让智能体可以自动迭代优化可复用的技能库，摆脱了此前人工编写技能无法适配多样任务的局限。
4. **OptiAgent: End-to-End Optimization Modeling via Multi-Agent Iterative Refinement**  
   链接：http://arxiv.org/abs/2607.05346v1 | 作者：Adriana Laurindo Monteiro et al.  
   一句话说明：面向运筹优化场景的多智能体迭代精炼框架，可以直接从自然语言问题描述生成可运行的数学求解代码，大幅降低了运筹优化工具的使用门槛。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **What Does a Discrete Diffusion Model Learn?**  
   链接：http://arxiv.org/abs/2607.05381v1 | 作者：Rodrigo Casado Noguerales et al.  
   一句话说明：从理论层面厘清了离散扩散模型本质是不同坐标下的跳率对象，纠正了此前领域内对离散扩散建模目标

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*