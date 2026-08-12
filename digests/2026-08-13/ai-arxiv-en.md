# ArXiv AI Research Digest 2026-08-13

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-12 22:40 UTC

---

# ArXiv AI Research Digest (2026-08-13)
---
## 1. Today's Highlights
Today’s 50 cross-domain AI submissions span groundbreaking use cases of AI agents in formal theoretical research, under-documented critical safety gaps in multilingual LLMs, and new mechanistic insights into LLM behavior that move beyond superficial capability benchmarking. The featured case study on human-AI collaboration to improve bounds on the Grothendieck constant represents a major milestone for long-horizon AI deployment in pure mathematical research, delivering replicable workflows for AI-augmented scientific discovery. Multiple papers independently reveal severe limitations of English-first AI alignment and capability transfer to low-resource linguistic contexts, exposing a large, previously unaddressed global AI equity and safety gap. New methods for test-time adaptive GUI agents and compression for self-evolving coding agents also mark a clear shift of the field toward optimizing for reliable real-world long-horizon agent deployment rather than static model performance on benchmarks.

---
## 2. Key Papers
### 🧠 Large Language Models (architecture, training, alignment, evaluation)
- **[Beyond a Bag of Features: Set-Level Instability in Sparse Autoencoders](http://arxiv.org/abs/2608.11197v1)** | Nikolai Bolik, Lennart Stöpler, Artur Andrzejak
  Re-examines LLM representation structure using sparse autoencoder activation overlap instead of standard cosine similarity, revealing uncharacterized set-level feature instability that threatens the reliability of existing mechanistic interpretability and alignment workflows.
- **[Attention-Path Fragility as an Uncertainty Signal in Large Language Models](http://arxiv.org/abs/2608.11138v1)** | Minsoo Kim, Sungyoung Ji, Kisung Moon et al.
  Introduces ASMI, a lightweight uncertainty metric derived from controlled perturbations to LLM attention pathways, that outperforms traditional output distribution breadth signals at identifying fragile, high-risk confident predictions for safety-critical use cases.
- **[ReRound: Reconstructive Rounding to Resolve Midpoint Ambiguity in Calibration-Free LLM Quantization](http://arxiv.org/abs/2608.11045v1)** | He-Yen Hsieh, H. T. Kung
  Proposes a diffusion-augmented post-training quantization method that eliminates performance loss from standard round-to-nearest midpoint ambiguity, enabling high-fidelity 4-bit/8-bit calibration-free LLM compression with negligible end-task accuracy degradation.
- **[The Illusion of Cross-Lingual Safety in Low-Resource Languages](http://arxiv.org/abs/2608.11146v1)** | Abigail Oppong, P Sam Sahil, Tadesse Destaw Belay et al.
  Systematically demonstrates that English-first LLM alignment safeguards almost entirely fail to transfer to low-resource languages, exposing a critical unaddressed vulnerability for billions of global LLM users.

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
- **[Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration](http://arxiv.org/abs/2608.11195v1)** | Alan Li, Rahul Saha, Anton Xue et al.
  Documents the first successful large-scale, multi-year human-AI collaborative campaign to improve a long-standing open mathematical bound, establishing replicable best practices for deploying AI agents in formal theoretical research.
- **[SkillZip: Evaluation-Free Skill Compression for Self-Evolving Agents by Discovering Reusable Structure](http://arxiv.org/abs/2608.11079v1)** | Xiaofan Bai, Hongqiang Lin, Chao Liu et al.
  Presents a zero-evaluation skill compression framework for self-evolving agents that prunes redundant, duplicated action sequences accumulated over long deployment, cutting skill storage overhead by up to 70% without measurable performance loss.
- **[Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1)** | Kushal Chakrabarti
  Identifies a pervasive failure mode in real-world agentic coding systems dubbed "catastrophic remembering", where unbounded growth of context files like CLAUDE.md degrades long-term agent productivity, offering actionable mitigation guidelines for industrial agent deployments.

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
- **[Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation](http://arxiv.org/abs/2608.11191v1)** | Shiyu Xuan, Zechao Li
  Proposes the first test-time adaptive GUI grounding model that uses self-reflection on failed predictions for on-policy self-distillation, eliminating the need for task-specific fine-tuning to adapt to entirely unseen UI interfaces.
- **[ConVAWG: A Retrieval-Grounded Framework for Controlled Synthetic Dialogue Generation in Violence Against Women and Girls](http://arxiv.org/abs/2608.11200v1)** | Chen Lyu, Xingwei Tan, Simon Cullen et al.
  Introduces the first retrieval-grounded synthetic dialogue generation framework for the highly sensitive domestic abuse domain, enabling ethics-compliant research on conversational abuse dynamics without accessing or releasing identifiable real victim data.
- **[Conditional Independence Tests for Constraint-Based Causal Discovery: A Survey](http://arxiv.org/abs/2608.11156v1)** | Pavel Averin, Theodoros Moysiadis, Ioannis Katakis
  Provides a unified, modern survey of conditional independence testing methods for causal discovery, with a standardized benchmark taxonomy that resolves long-standing conflicting experimental results in the causal ML community.
- **[V-FiLLM: Verified Financial LLM Reasoning Benchmark](http://arxiv.org/abs/2608.11047v1)** | Alicia Larsen, Victoire Laurent, Aulia Kharis Rakhamsari et al.
  Releases a new executable, ground-truth verified benchmark for LLM financial reasoning over structured tabular data, filling a critical gap in existing STEM LLM evaluation that ignores real-world financial domain constraints.

### 📊 Applications (domain-specific, multimodal, code generation)
- **[Surgical WAM: A World-Action Model for Data-Efficient Surgical Robot Learning](http://arxiv.org/abs/2608.11204v1)** | Wenrui Bao, Tianyun Jiang, Zhiben Chen et al.
  Presents a world-action model for surgical robot manipulation that cuts required labeled demonstration data by 60% for long-horizon precise surgical tasks, addressing the core bottleneck of scarce annotated surgical robot trajectory data.
- **[MultiModal Code-Switching: Interleaving Visual Objects into Language for Explicit Object-Level Alignment](http://arxiv.org/abs/2608.11167v1)** | Changhao Xiang, Shangyu Xing, Zhen Wu et al.
  Proposes a new multimodal alignment paradigm that interleaves discrete visual object tokens directly into text sequences, resolving referential ambiguity in existing MLLMs that rely only on coarse global image-text alignment.
- **[myMediWhisper: Construction of Burmese Medical Speech Corpus and Whisper Fine-Tuning for Clinical Dialogue ASR](http://arxiv.org/abs/2608.11036v1)** | Ye Kyaw Thu, Ye Bhone Lin, Thura Aung et al.
  Releases the first validated 28-hour Burmese medical speech corpus and fine-tuned clinical ASR model, closing a major access gap for AI-powered clinical documentation in low-resource Southeast Asian healthcare settings.

---
## 3. Research Trend Signal
This batch of submissions shows three clear emerging signals that diverge from 2025’s dominant scaling-focused research. First, there is a sharp rise in work quantifying previously unmeasured failure modes of deployed production AI agents, including catastrophic remembering in coding systems and attention-path fragility, as the field shifts priority from raw capability gains to reliable long-term deployment. Second, multilingual AI research is moving far beyond translation tasks to uncover hidden safety, tool-use action consistency, and cross-lingual generation gaps for low-resource languages, as regulators and industry increasingly push for global, equitable AI rollout. Third, human-AI collaborative research for formal domains such as pure mathematics is moving from proof-of-concept to structured, documented workflows that produce verifiable, peer-reviewed scientific progress.

---
## 4. Worth Deep Reading
1. **[Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration](http://arxiv.org/abs/2608.11195v1)**
  This is the first public, fully transparent account of a multi-year successful human-AI theoretical research campaign, with actionable best practices that will shape the next generation of AI agent tools for scientists, far beyond narrow LLM capability benchmarking.
2. **[The Illusion of Cross-Lingual Safety in Low-Resource Languages](http://arxiv.org/abs/2608.11146v1)**
  This work uncovers a massive, largely unrecognized global AI safety vulnerability that affects billions of users, with direct implications for every major LLM vendor and national AI regulatory framework currently under development.
3. **[Beyond a Bag of Features: Set-Level Instability in Sparse Autoencoders](http://arxiv.org/abs/2608.11197v1)**
  It challenges a widely adopted standard practice in LLM interpretability research, offering a more robust analytical framework that will inform years of future work on mechanistic interpretability and feature editing for aligned LLMs.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*