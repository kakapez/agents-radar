# Hugging Face Trending Models Digest 2026-07-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-06 23:08 UTC

---

# Hugging Face Trending Models Digest | 2026-07-07
---
## 1. Today's Highlights
As of July 7, 2026, the Hugging Face trending leaderboard is dominated by high-interest open large language model releases and multi-million download community-optimized quantizations, with over 10 entries surpassing 100,000 weekly downloads. The highest-liked release this week is zai-org’s GLM-5.2, a conversational MoE LLM that earned 3,529 weekly likes, while community GGUF quantizations are breaking download records with several entries crossing 2.8M downloads for edge and local deployment. The Qwen model family continues to expand its market footprint, with official optimized variants, third-party fine-tunes, and quantizations spanning reasoning, coding, agent, and multimodal use cases across the top 30 trending list. Enterprise and big tech contributors including Nvidia, Google, Baidu, and Tencent are also debuting highly specialized open models targeting use cases from tabular classification to unlimited OCR.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,529 | Downloads: 231,218
  A state-of-the-art conversational Mixture-of-Experts LLM built on the new glm_moe_dsa architecture, trending as the top-performing open alternative to closed general-purpose chat models.
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | Author: InternScience | Likes: 344 | Downloads: 8,766
  A Qwen 3.5 MoE base agent LLM optimized for autonomous task execution, gaining traction among agent framework developers for its native multi-step planning capabilities.
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 320 | Downloads: 2
  The latest official open Hunyuan 3 generation LLM from Tencent, generating massive early interest as a highly anticipated competitor to mainstream SOTA open chat models.
- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** | Author: nvidia | Likes: 289 | Downloads: 430,676
  A Nvidia ModelOpt FP4 quantized official port of Qwen 3.6 27B, optimized for fast inference on Nvidia consumer and enterprise GPUs, trending for its near-zero accuracy loss at 4-bit weights.
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | Author: deepseek-ai | Likes: 409 | Downloads: 14,276
  The latest distributed inference optimized variant of DeepSeek V4 Pro, built for low-latency high-throughput deployment in production conversational AI stacks.
- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** | Author: AliesTaha | Likes: 177 | Downloads: 2,903
  A Qwen3 fine-tune specialized in narrative generation and traceability for LLM chain-of-thought outputs, popular for debugging complex reasoning workflows.
- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** | Author: mistralai | Likes: 141 | Downloads: 106
  A 119B parameter vLLM-optimized base Mistral model, trending among large-scale inference teams as a high-performance base for custom fine-tuning.
- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** | Author: meituan-longcat | Likes: 113 | Downloads: 43
  The latest extended context conversational LLM from Meituan, generating early buzz for its claimed 1M+ token native context window.
- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Author: Qwen | Likes: 556 | Downloads: 57,835
  Official 35B agentic MoE LLM from the Qwen team, fine-tuned specifically for interactive multi-agent simulation tasks.
- **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)** | Author: deepreinforce-ai | Likes: 350 | Downloads: 231,342
  A Qwen 3.5 MoE 35B open source LLM under MIT license, popular for permissive commercial use in agentic application stacks.
- **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)** | Author: deepreinforce-ai | Likes: 391 | Downloads: 86,136
  The lightweight 9B MIT licensed variant of the Ornith LLM line, optimized for fast edge deployment on consumer hardware.
- **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)** | Author: nvidia | Likes: 126 | Downloads: 10,766
  A two-tower embedding 30B base LLM from Nvidia, built for high-performance retrieval augmented generation (RAG) workflows.
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | Author: froggeric | Likes: 694 | Downloads: 0
  A community-maintained repository of corrected, production-ready Jinja chat templates for all Qwen family models, trending to fix widespread chat template parsing bugs in existing deployments.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,790 | Downloads: 1,070,230
  A zero-shot unlimited OCR vision-text model from Baidu, capable of extracting text from any real-world or document image without language or resolution limits, trending as a drop-in replacement for older limited OCR systems.
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,633 | Downloads: 1,340,559
  A 3B parameter multimodal feature extraction model that enables zero-shot arbitrary object localization across any input image without fine-tuning, rapidly becoming a standard base for new computer vision pipelines.
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 528 | Downloads: 109,470
  A fast-optimized text-to-image diffusion model, trending for generating high-quality 1024px outputs in under 2 steps on consumer GPUs.
- **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)** | Author: eric-venti-seeds | Likes: 78 | Downloads: 0
  A lightweight Flux2 9B LoRA fine-tune that adds accurate natural lighting and sun direction control to image-to-image generation workflows.
- **[DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED](https://huggingface.co/DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED)** | Author: DavidAU | Likes: 158 | Downloads: 58,755
  A vision-enabled uncensored Qwen 3.5 9B fine-tune with enhanced long-form reasoning, popular for unrestricted multimodal research use cases.

### 🔧 Specialized Models (code, math, medical, embeddings)
- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 255 | Downloads: 7,036
  Google's open zero-shot tabular foundation model that outperforms traditional gradient-boosted decision trees on unseen tabular classification and regression tasks, trending among data science teams.
- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** | Author: nationaldesignstudio | Likes: 136 | Downloads: 3,821
  A lightweight BERT token classification model optimized for client-side PII detection via Transformers.js and ONNX, popular for privacy-focused web application deployments.
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,622 | Downloads: 664,319
  A Gemma 4 12B coding and reasoning specialized quantized model, trending as a top open local alternative to

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*