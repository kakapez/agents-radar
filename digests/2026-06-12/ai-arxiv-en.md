# ArXiv AI Research Digest 2026-06-12

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-06-11 23:22 UTC

---

# ArXiv AI Research Digest (2026-06-10)
---
## 1. Today's Highlights
The 50 latest ArXiv AI submissions center on advancing AI systems beyond lab prototypes to robust, auditable, production-grade deployments across sectors. Key breakthroughs span full-stack transparency for LLMs, standardized governance frameworks for autonomous agents, major efficiency gains for inference and RL training pipelines, and rigorous new benchmarks that eliminate spurious performance gains that have inflated published model scores in recent years. Multiple works also demonstrate that state-of-the-art robotics and healthcare AI performance can be achieved without expensive dedicated hardware or large curated high-quality datasets, lowering barriers for widespread real-world adoption. Notably, a cohort of papers addresses previously uncharacterized hidden risks from unregulated recursive LLM training pipelines, filling critical gaps for regulatory compliance and safety auditing.

---
## 2. Key Papers
### 🧠 Large Language Models (architecture, training, alignment, evaluation)
1. **[Which Models Are Our Models Built On? Auditing Invisible Dependencies in Modern LLMs](http://arxiv.org/abs/2606.12385v1)**  
   Authors: S. Adhikesaven, H. Sun, S. Min  
   The first systematic auditing framework that maps recursive, undocumented upstream dependencies across modern LLM training pipelines, addressing critical transparency gaps that make it impossible to trace hidden harms or licensing violations across stacked generations of foundation models.
2. **[Redesign Mixture-of-Experts Routers with Manifold Power Iteration](http://arxiv.org/abs/2606.12397v1)**  
   Authors: S. Wu, A. Lv, R. Xie et al.  
   This work reimagines MoE routing using manifold power iteration to align router weight representations with actual expert embeddings, cutting cross-expert routing errors by 32% across 7B to 70B parameter scales for far more efficient, lower-overhead MoE serving.
3. **[ALIGNBEAM : Inference-Time Alignment Transfer via Cross-Vocabulary Logit Mixing](http://arxiv.org/abs/2606.12342v1)**  
   Authors: C. Chawla, P. Seth, V. K. Sankarapu  
   The first inference-time alignment technique that works across models with mismatched tokenizers and vocabularies, eliminating the safety degradation that plagues domain-fine-tuned LLMs without requiring full costly retraining.
4. **[Anatomy of Post-Training: Using Interpretability to Characterize Data and Shape the Learning Signal](http://arxiv.org/abs/2606.12360v1)**  
   Authors: L. Bergen, U. Bhalla, S. Baskaran et al.  
   This work leverages mechanistic interpretability to demystify the previously black-box LLM post-training pipeline, giving practitioners granular visibility to remove spurious correlations from preference datasets before they get encoded into model behavior.

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
1. **[A Five-Plane Reference Architecture for Runtime Governance of Production AI Agents](http://arxiv.org/abs/2606.12320v1)**  
   Author: K. Tallam  
   The first standardized 5-layer governance framework for deployed enterprise AI agents, solving the critical unmet need for runtime security, access control, and audit logging for systems that dynamically manipulate data across disparate organizational silos.
2. **[APO: Agentic Procedural Policy Optimization](http://arxiv.org/abs/2606.12384v1)**  
   Authors: X. Wang, Z. Ma, Y. Wang et al.  
   This new RL for agents credit assignment framework allocates rewards to fine-grained procedural action steps rather than coarse tool call boundaries, improving multi-turn tool use success rates by 27% on complex open-ended tasks.
3. **[PROJECTMEM: A Local-First, Event-Sourced Memory and Judgment Layer for AI Coding Agents](http://arxiv.org/abs/2606.12329v1)**  
   Authors: R. C. Malo, T. Qiu  
   This open memory layer for coding agents preserves all past debugging decisions across sessions, eliminating redundant work and cutting agent task completion latency by 40% for long-running software engineering projects.
4. **[DIRECT: When and Where Should You Allocate Test-Time Compute in Embodied Planners?](http://arxiv.org/abs/2606.12402v1)**  
   Authors: J. Dao, M. Ganai, Y. Abukhadra et al.  
   This dynamic scheduling framework assigns test-time compute to only the high-uncertainty steps of VLM-powered embodied planners, cutting average inference cost by 60% while preserving the full performance gains of scaled compute.

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
1. **[Context-Driven Incremental Compression for Multi-Turn Dialogue Generation](http://arxiv.org/abs/2606.12411v1)**  
   Authors: Y. Jung, J. Kim, E. Jung et al.  
   This incremental context compression method enables cross-turn memory sharing for conversational agents, reducing KV cache footprint by 75% for multi-hour dialogues with zero measurable fidelity loss compared to full uncompressed context.
2. **[The Standard Interpretable Model: A general theory of interpretable machine learning to deductively design interpretable methods using Lagrangian mechanics](http://arxiv.org/abs/2606.12289v1)**  
   Authors: P. Barbiero, G. De Felice, M. E. Zarlenga et al.  
   The first unifying general theory for interpretable ML derived from Lagrangian mechanics, which eliminates ad-hoc design choices for explanation methods and provably guarantees their alignment with underlying model decision boundaries.
3. **[Breaking Entropy Bounds: Accelerating RL Training via MTP with Rejection Sampling](http://arxiv.org/abs/2606.12370v1)**  
   Authors: Y. Li, H. Jiang, Y. Xu et al.  
   This work combines multi-token prediction with rejection sampling to break the entropy limit of existing LLM RL rollout pipelines, doubling the throughput of DPO/PPO training without reducing final model performance.
4. **[Claw-SWE-Bench: A Benchmark for Evaluating OpenClaw-style Agent Harnesses on Coding Tasks](http://arxiv.org/abs/2606.12344v1)**  
   Authors: M. Zheng, K. Han, B. Li et al.  
   This new standardized benchmark adapts the popular SWE-Bench task suite to support general autonomous coding agents, enabling fair, reproducible evaluation of unconstrained agent harness performance on real-world software engineering challenges.

### 📊 Applications (domain-specific, multimodal, code generation)
1. **[ATLAS: Active Theory Learning for Automated Science](http://arxiv.org/abs/2606.12386v1)**  
   Authors: N. Éltető, N. D. Daw, K. L. Stachenfeld et al.  
   This active learning framework for automated science dynamically selects maximally informative experimental runs to test competing mechanistic hypotheses, reducing the total number of required lab trials by over 50% for cognitive science research workflows.
2. **[ATLAS H&E-TME: Scalable AI-Based Tissue Profiling at Expert Pathologist-Level Accuracy](http://arxiv.org/abs/2606.12346v1)**  
   Authors: K. Standvoss, M. Hägele, R. Krupar et al.  
   This foundation model-powered pathology system achieves practicing pathologist-level accuracy for tumor microenvironment profiling across whole slide H&E images, enabling low-cost, scalable cancer diagnosis deployment for underresourced clinical settings.
3. **[Reassessing High-Performing LLMs on Polish Medical Exams: True Competence or Bias

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*