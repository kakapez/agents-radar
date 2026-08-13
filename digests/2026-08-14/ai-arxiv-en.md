# ArXiv AI Research Digest 2026-08-14

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-13 22:40 UTC

---

# ArXiv AI Research Digest (2026-08-14)
---
## 1. Today's Highlights
Today’s submissions reflect a distinct shift away from incremental foundation model scaling toward practical, production-focused AI advances that address unmet pain points in real-world deployment. Standout breakthroughs include the first demonstration of parameter-free test-time strong-to-weak capability transfer for LLMs, a new class of stealthy cybersecurity exploits for modular LLM agent ecosystems, and multiple empirical studies that debunk widely accepted untested assumptions in LLM training and evaluation. A heavy focus on enterprise-grade agent benchmarks and domain-specific tailored systems also signals that the field is prioritizing verifiable, auditable performance for regulated high-stakes use cases. Multiple submissions also deliver order-of-magnitude efficiency improvements for RAG, Kolmogorov-Arnold Network, and reinforcement learning workflows that reduce deployment costs by eliminating expensive annotation and retraining requirements.

---
## 2. Key Papers
### 🧠 Large Language Models (architecture, training, alignment, evaluation)
1. **[AI4AI at Test-Time: Strong-to-Weak Capability Transfer via Harnesses](http://arxiv.org/abs/2608.12307v1)**  
   Authors: Cheng Qian, Wenting Zhao, Liangwei Yang et al.  
   Key contribution: Demonstrates for the first time that strong-to-weak model capability transfer can be achieved entirely at test time without any parameter updates, eliminating the massive computational overhead of traditional training-time distillation workflows for resource-constrained edge deployments.
2. **[Information Abundance Paradox: Long-Context Training Undermines Parametric Knowledge](http://arxiv.org/abs/2608.12218v1)**  
   Authors: Arda Uzunoglu, Benjamin van Durme, Daniel Khashabi  
   Key contribution: Presents rigorous empirical validation that extended long-context training protocols actively erode the fixed parametric world knowledge stored in LLMs, correcting the widespread untested industry assumption that longer context exposures uniformly improve model performance.
3. **[Who Thinks Best Depends on How Long You Let Them: Budget-Dependent Rankings in LLM Evaluation](http://arxiv.org/abs/2608.12150v1)**  
   Authors: Rodrigo Guedes de Souza, Alison R. Panisson  
   Key contribution: Proves that standard fixed-token inference budgets produce unstable, misleading LLM performance rankings across common reasoning benchmarks, providing actionable guidance for building evaluation protocols that align more closely with real-world use case requirements.
4. **[Massive Activations in Hybrid Linear Attention Large Language Models: Pre-Attention Spikes and Inter-Spike Plateaus](http://arxiv.org/abs/2608.12149v1)**  
   Authors: Zunhai Su, Bohan Sun, Xialie Zhuang et al.  
   Key contribution: Uncovers consistent, architecture-specific patterns of large activation spikes immediately before full attention layers in low-cost hybrid linear attention LLMs, delivering new design insights for quantization and inference speedups for these increasingly popular long-context model architectures.

---
### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
1. **[VAKRA: Evaluating Multi-Hop Reasoning Across APIs and Retrieval Under Tool-Use Policies](http://arxiv.org/abs/2608.12282v1)**  
   Authors: Ankita Rajaram Naik, Anupama Murthi, Benjamin Elder et al.  
   Key contribution: Introduces the first enterprise-grade benchmark for multi-hop LLM agent reasoning that combines structured API access, document retrieval, and real-world tool use access constraints, filling a critical gap between isolated academic agent benchmarks and production enterprise requirements.
2. **[Convergent Detour Hijacking: Task-Preserving Resource Amplification in Skill-Based LLM Agents](http://arxiv.org/abs/2608.12273v1)**  
   Authors: Junliang Liu, Ruoyu Li, Wenxin Tang et al.  
   Key contribution: Discovers a new class of stealthy exploit for third-party skill-enabled LLM agents that hijacks task workflows to siphon off excessive computational resources without breaking end-user task functionality, highlighting previously unrecognized cybersecurity risks in modular public agent ecosystems.
3. **[One Frozen Simulator Is Not Enough: Simulator Collapse in Multi-Agent RL](http://arxiv.org/abs/2608.12253v1)**  
   Authors: Simon Yu, Nicholas Tomlin, Marwa Abdulhai et al.  
   Key contribution: Identifies and formally defines the "simulator collapse" failure mode that plagues nearly all existing multi-agent RL pipelines for human-AI interaction, where a single frozen LLM user simulator mode-collapses and produces policies that fail to generalize to real human users.
4. **[SCOUT: Unlocking Enhanced Spatial Reasoning via Structured Chain-of-Thought and Multi-Objective Process Reward](http://arxiv.org/abs/2608.12220v1)**  
   Authors: Zile Zhou, Huining Yuan, Weichen Zhang et al.  
   Key contribution: Delivers a new VLM spatial reasoning framework that combines structured chain-of-thought reasoning and multi-step process reward modeling to close 32% of the performance gap on spatial reasoning tasks that have long been a persistent bottleneck for state-of-the-art vision-language models.

---
### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
1. **[Redistribution-based Cost Inference Improves Sparse Safe Offline RL](http://arxiv.org/abs/2608.12306v1)**  
   Authors: Ebenezer Gelo, Geraud Nangue Tasse, Steven James et al.  
   Key contribution: Introduces a novel redistribution-based cost inference technique that enables safe offline reinforcement learning to operate using only trajectory-level binary unsafe feedback, eliminating the long-standing requirement for expensive dense per-step cost annotations in real-world RL deployment.
2. **[HYDRA: Hyperbolic Dynamic Representation Architecture for Kolmogorov-Arnold Networks](http://arxiv.org/abs/2608.12194v1)**  
   Authors: Zhao Su, Yuxin Xia, Haoran Li et al.  
   Key contribution: Proposes an optimized architecture for the popular new Kolmogorov-Arnold Networks (KANs) that cuts parameter redundancy by 60% while retaining full function approximation performance, drastically improving KAN scalability for large-scale machine learning tasks.
3. **[QV-PIC: Query-Aware Visual Position-Independent Caching for Efficient RAG Serving](http://arxiv.org/abs/2608.12121v1)**  
   Authors: Yilin Liu, Rui Meng, Wangze Ni et al.  
   Key contribution: Presents a new caching framework for production RAG systems that reduces redundant prefill computation by reusing query-aware visual and text KV states across requests, cutting RAG serving latency by up to 47% in high-throughput enterprise deployments.

---
### 📊 Applications (domain-specific, multimodal, code generation)
1. **[An Agentic Workflow for Legacy HPC Modernization: Converting the Two-Electron-Integral Core of GAMESS](http://arxiv.org/abs/2608.12249v1)**  
   Authors: Yuzhong Shen, Masha Sosonkina, Peng Xu et al.  
   Key contribution: Deploys the first production-grade agentic AI workflow for large-scale legacy Fortran code modernization, demonstrating zero-human-error conversion of the computationally intensive two-electron integral core of the widely used GAMESS computational chemistry package at unprecedented speed.
2. **[A corpus-specific clinical RAG system matches or outperforms newer frontier LLMs on HealthBench](http://arxiv.org/abs/2608.12138v1)**  
   Authors: Praveen Reddy, Charuta Mandke, Suvrankar Datta et al.  
   Key contribution: Proves that a carefully curated, corpus-specific clinical RAG system can outperform general-purpose frontier LLMs on a representative medical benchmark, offering a far lower-cost, more auditable alternative to expensive state-of-the-art generalist models for clinical use cases.
3. **[ScreenShot: A Foundation Model for Few-Shot Combination Drug Screening](http://arxiv.org/abs/2608.12219v1)**  
   Authors: Antoine de Mathelin, Christopher Tosh, Wesley Tansey  
   Key contribution: Releases the first few-shot foundation model for combinatorial drug combination screening that reduces the required experimental validation volume by over 80% for novel treatment combination discovery, drastically cutting the cost and timeline for developing drug resistance-mitigating therapies.

---
## 3. Research Trend Signal
Today’s submissions clearly signal a major ongoing shift in AI research priorities away from incremental foundation model scaling toward "AI engineering for production usability." Four distinct emerging directions stand out: first, test-time compute optimization that avoids costly parameter retraining for capability transfer and deployment efficiency; second, rigorous auditing of untested long-held assumptions in LLM design, evaluation, and training that reveal hidden performance tradeoffs teams have previously overlooked; third, the maturation of agent cybersecurity and reliability research to address real-world vulnerabilities before wide-scale enterprise agent deployment; and fourth, targeted lightweight domain-specific systems that outperform large generalist models on niche high-stakes tasks at a fraction of the computational cost.

---
## 4. Worth Deep Reading
1. **[AI4AI at Test-Time: Strong-to-Weak Capability Transfer via Harnesses](http://arxiv.org/abs/2608.12307v1)**  
   This work upends decades of established distillation paradigms, unlocking massive cost savings for edge and on-premise LLM deployments that cannot afford parameter fine-tuning, with implications for every production AI pipeline that relies on small student models for low-latency inference.
2. **[Information Abundance

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*