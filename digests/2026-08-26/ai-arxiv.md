# ArXiv AI 研究日报 2026-08-26

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-25 22:26 UTC

---

# ArXiv AI 研究日报 | 2026年8月26日
今日覆盖cs.AI、cs.CL、cs.LG分类共50篇最新AI投稿

---

## 今日速览
今日上线投稿核心覆盖大模型训练优化、长周期智能体技术、基准体系建设、高价值垂直场景落地四大板块。针对当前GRPO等无 critic LLM后训练方案的效率短板，业界首次推出稳定、低成本的critic训练范式，填补了RLHF类技术的长期性能缺口。同时多篇长 horizon 智能体相关的框架、攻击范式、专项评测集中发布，形成智能体落地的完整配套研究链条。多个面向复杂工业、科学场景的全新基准填补了原有评测体系的空白，推动AI能力快速向非标准化真实任务渗透。

---

## 重点论文
### 🧠 大语言模型（架构、训练、对齐、评估）
1. **[How to Train a Critic Stably and Efficiently](http://arxiv.org/abs/2608.23566v1)**  
作者：Penghui Qi, Xiangxin Zhou, Wee Sun Lee  
一句话说明：解决了LLM强化学习训练中critic模块普遍不稳定的痛点，可从单条响应中估计token级优势，完全替代GRPO等基于批量采样的无critic方案，大幅降低大模型后训练成本。
2. **[Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty](http://arxiv.org/abs/2608.23497v1)**  
作者：Yipeng Zhao, Qishun Yang, Shenzhe Zhu et al.  
一句话说明：针对思维链推理微调带来的隐性对齐漏洞，提出跨架构通用的安全方向惩罚机制，解决纯推理类数据微调诱导LLM产生有害行为的行业共性难题。
3. **[ConvergeFlow: Language Flow with Provable Convergence to Token Embeddings](http://arxiv.org/abs/2608.23551v1)**  
作者：Na Li, Yuchen Jiao, Changxiao Cai et al.  
一句话说明：首次证明流语言模型的训练过程可确定性收敛到合法token嵌入，打破了此前连续流大模型必须依赖交叉熵解码器的技术惯例，开辟了非离散LLM的全新发展路线。
4. **[ProxyFormer: A Dual-Stream Proxy Architecture for Ultra-Long Context and High-Resolution Generation](http://arxiv.org/abs/2608.23463v1)**  
作者：Zhongpan Tang  
一句话说明：用代理token构建双流注意力架构，从底层降低长上下文、高分辨率生成的注意力二次计算复杂度，无需额外缓存策略即可直接支持十万级以上超长序列推理。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
1. **[Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1)**  
作者：Seth Karten, Alex L. Zhang, Kevin Thomas et al.  
一句话说明：开源自改进RLM编码智能体框架，通过持久化IPython REPL和递归语言建模范式，解决长周期任务下智能体外源信息调用、计算资源调度的可靠性问题。
2. **[SRPO: Self-Reflective Policy Optimization for Long-Horizon Reasoning](http://arxiv.org/abs/2608.23493v1)**  
作者：Jialong Liu, Yuling Shi, Ning Yang et al.  
一句话说明：将人类自我反思机制引入大模型策略优化，把稀疏的最终任务反馈转化为中间可学习的结构化指导信号，大幅提升超过10步以上的长链路推理任务表现。
3. **[InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](http://arxiv.org/abs/2608.23471v1)**  
作者：Hanling Tian, Gengyu Zhang, Zeyang Sha et al.  
一句话说明：首次系统性提出针对LLM智能体持久化内存模块的注入攻击范式，仅通过公开交互链路就能篡改智能体长期记忆，为落地级智能体的安全防护指明了全新风险方向。
4. **[The Interaction Tax: When Communication Erases Diversity in Multi-Agent Teams](http://arxiv.org/abs/2608.23541v1)**  
作者：Summer Eunhyung Ann, Haokun Liu, Chenhao Tan  
一句话说明：揭示多智能体协作的「交互税」现象：无约束多轮通信会抹平不同智能体的观点多样性，反而降低复杂任务最终求解质量，推翻了多智能体交互必然收益递增的普遍假设。

### 🔧 方法与框架（新技术、基准测试、效率优化）
1. **[SWE Refactor Bench: Can Coding Agents Complete a Long-Horizon, Whole-Repository Stack Migration?](http://arxiv.org/abs/2608.23564v1)**  
作者：Deyao Hong, Yizhe Chi, Wenyi Li et al.  
一句话说明：推出首个面向全仓库级技术栈迁移的编码智能体评测基准，填补了现有代码测试集仅覆盖单文件小bug修复的空白，是当前工业界最具真实性的代码智能体能力标尺。
2. **[ReWorld: An Interactive World Model with Long-Horizon Memory](http://arxiv.org/abs/2608.23565v1)**  
作者：Zhifei Chen, Luozhou Wang, Guibao Shen et al.  
一句话说明：提出的交互式长记忆世界模型通过训练阶段分离控制短视和长时记忆、推理阶段做边界约束，首次实现了高实时性、支持无限历史信息调用的可交互开源世界模型。
3. **[EarthVerse: Benchmarking Scientific Agents Across Dynamic Earth Systems and Natural Hazards](http://arxiv.org/abs/2608.23525v1)**  
作者：Zhiqing Cui, Xinxiang Yin, Yihong Tang et al.  
一句话说明：上线首个面向地球自然系统、灾害场景的科学智能体评测基准，覆盖多模态异源观测数据融合、动态物理过程推演等硬核科学任务，为科学AI的能力评估提供了统一标准。
4. **[ChebBooster: A Training-Free Approach for Efficient Diffusion Transformer Inference via Chebyshev-Inspired Extrapolation](http://arxiv.org/abs/2608.23429v1)**  
作者：Chengjie Lu, Tianchi Deng, Zhengqi He et al.  
一句话说明：无需额外微调的DiT推理加速方案，基于切比雪夫外推机制跳过冗余采样步，在不损失生成质量的前提下最高可把DiT采样速度提升3倍以上。

### 📊 应用（垂直领域、多模态、行业落地）
1. **[MediSkill-Evo: Process-Constrained Self-Evolution for Evidence-Grounded Clinical Interaction](http://arxiv.org/abs/2608.23397v1)**  
作者：Ruoyu Wu, Shenfu Xie, Yinqian Sun et al.  
一句话说明：临床交互智能体在自我迭代过程中严格遵循诊疗流程约束，不会为了得到正确诊断跳过证据采集合规步骤，可直接转化为落地级临床辅助问诊系统。
2. **[EG-ARSA: An Expert-Grounded Open Model for Visual Road Safety Auditing in Low-Resource Settings](http://arxiv.org/abs/2608.23563v1)**  
作者：Md Thamed Bin Zaman Chowdhury, Moazzem Hossain  
一句话说明：首个面向低资源国家的开源道路安全审计视觉大模型，仅需少量专家标注数据就能替代人工完成大范围路检，解决中低收入国家道路安全检测人力不足的痛点。

---

## 研究趋势信号
今日投稿集中显示，AI研究正从单模型能力优化全面转向「体系化落地配套」方向：一方面长周期智能体相关的训练方法、安全攻击、评测基准同步爆发，标志着智能体技术即将跨过早期原型阶段进入落地前夜；另一方面大量覆盖垂直复杂场景的空白基准持续推出，科学计算、工业系统、专业服务类AI的可量化评估体系快速成熟，未来半年将出现更多高价值垂直场景AI落地的标杆成果。

---

## 值得精读
1. **《How to Train a Critic Stably and Efficiently》**：该研究从根本上解决了LLM基于critic的RL训练不稳定的长期行业痛点，性能远超当前主流的GRPO类无critic方案，会直接影响下一代大模型对齐技术的路线选择，是大模型后训练领域的里程碑级研究。
2. **《InjecMEM: Memory Injection Attack on LLM Agent Memory Systems》**：全球首个系统性披露LLM智能体持久化内存漏洞的研究，直接关系到未来所有落地级智能体系统的安全架构设计，对智能体的生产部署有极高的行业参考价值。
3. **《SWE Refactor Bench: Can Coding Agents Complete a Long-Horizon, Whole-Repository Stack Migration?》**：首次把编码智能体的评测从单bug修复提升到全仓库级栈迁移的真实工业场景，后续所有代码智能体的能力迭代都会以该基准作为核心标尺，对软件工程AI的发展影响深远。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*