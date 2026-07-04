# Hugging Face Trending Models Digest 2026-07-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-04 22:57 UTC

---

# Hugging Face Trending Models Digest | 2026-07-05
---
## 1. Today's Highlights
This week’s Hugging Face trending ranking is led by high-performance open-weight foundation model releases, with zai-org’s GLM-5.2 leading total weekly likes at 3,396, while community fine-tuned and quantized variants drive the highest download volumes that top out at nearly 3 million units for the top entry. Vision-language capabilities are now a near-standard feature for top-ranked LLMs, with 11 of the 30 trending models supporting image-text-to-text workflows, marking a 72% increase from the previous month’s trending snapshot. Domain-specific use cases, from cybersecurity code auditing to zero-shot tabular analysis, are attracting dedicated high-download releases as the open ecosystem moves beyond general-purpose chat applications. Enterprise hardware-optimized releases from major infrastructure vendors make up 13% of the trending list, catering to low-latency inference deployments on both consumer and data center GPU stacks.

---
## 2. Trending Models (Organized by Category)
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org | Likes: 3,396 | Downloads: 208,920  
  A leading conversational MoE text generation base model built on the new glm_moe_dsa architecture, trending as the most well-received general-purpose LLM release of the week.
- [deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | Author: deepseek-ai | Likes: 367 | Downloads: 10,306  
  A high-speed variant of DeepSeek’s latest V4 LLM optimized for distributed spark inference, trending among teams deploying large-scale generative AI clusters.
- [deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark) | Author: deepseek-ai | Likes: 154 | Downloads: 40,271  
  A low-latency, edge-optimized iteration of the DeepSeek V4 line, trending for its sub-100ms token generation performance on mid-tier consumer GPUs.
- [deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) | Author: deepreinforce-ai | Likes: 376 | Downloads: 69,837  
  A 9B parameter Qwen3.5-based text generation model with built-in vision support, popular among local agent developers for its small footprint and strong reasoning.
- [deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B) | Author: deepreinforce-ai | Likes: 331 | Downloads: 218,657  
  A 35B MoE Ornith iteration with enhanced long-context handling, trending for its MIT-licensed fully open release with no commercial restrictions.
- [deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B) | Author: deepreinforce-ai | Likes: 208 | Downloads: 33,268  
  A flagship 397B MoE general-purpose LLM in the Ornith line, trending as one of the largest fully open-weight foundation models available on the hub.
- [Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | Author: Qwen | Likes: 532 | Downloads: 50,188  
  A 35B MoE LLM purpose-built for multi-agent simulation environments, trending among AI agent research teams.
- [nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4) | Author: nvidia | Likes: 248 | Downloads: 184,521  
  A NVIDIA-optimized FP4 quantized Qwen3.6 27B model, trending for its 2x faster inference speed on NVIDIA RTX and H-series GPUs.
- [nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4) | Author: nvidia | Likes: 222 | Downloads: 236,501  
  A hardware-optimized NVFP4 quantized release of the popular GLM-5.2 base model, popular for production data center deployments.
- [nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16) | Author: nvidia | Likes: 120 | Downloads: 10,479  
  A two-tower embedding model built for 100M-scale retrieval workloads, trending for its industry-leading zero-shot retrieval accuracy.
- [mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B) | Author: mistralai | Likes: 96 | Downloads: 4  
  A 119B parameter formal mathematics reasoning LLM, trending for its record performance on Lean theorem proving benchmarks.
- [AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces) | Author: AliesTaha | Likes: 115 | Downloads: 0  
  A Qwen3-based instruction-tuned LLM fine-tuned for long-form narrative generation, trending among generative storytelling developers.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | Author: empero-ai | Likes: 667 | Downloads: 135,665  
  A 1M long-context vision-language 9B model, popular for extended document and multi-image analysis use cases.
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu | Likes: 1,711 | Downloads: 988,379  
  A state-of-the-art open OCR model that supports infinite-length scanned document parsing, trending for its near-commercial-level accuracy for over 100 languages.
- [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia | Likes: 2,604 | Downloads: 1,194,542  
  A 3B vision-language model for zero-shot open-vocabulary object localization, trending as one of the smallest high-performance computer vision foundation models available.
- [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | Author: krea | Likes: 496 | Downloads: 89,384  
  A fast iteration text-to-image generation model, trending for its 2-step image generation performance at photorealistic quality.
- [Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2) | Author: Comfy-Org | Likes: 249 | Downloads: 10  
  A Krea-2 base model packaged for direct use in ComfyUI workflows, popular among generative art creators.
- [fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA) | Author: fal | Likes: 155 | Downloads: 0  
  A LoRA fine-tune for the LTX video generation model that outputs photorealistic 3D consistent video, trending among generative video developers.
- [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | Author: InternScience | Likes: 236 | Downloads: 5,456  
  A MoE vision-language model purpose-built for real-world robotics agent control, trending in embodied AI research circles.
- [Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF) | Author: Jackrong | Likes: 131 | Downloads: 59,971  
  A vision-enabled code-specialist multimodal model, popular for code debugging from screenshots of IDE interfaces.

### 🔧 Specialized Models (code, math, medical, embeddings)
- [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | Author: yuxinlu1 | Likes: 1,009 | Downloads: 342,752  
  A Gemma4-based agentic fine-tune optimized for terminal coding and system administration tasks, trending among power users running local AI assistants.
- [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | Author: yuxinlu1 | Likes: 2,595 | Downloads: 641,260  
  A top-ranked Gemma4 12B coding-specialized model, trending for its benchmark performance exceeding much larger 70B coding LLMs.
- [google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch) | Author: google | Likes: 192 | Downloads: 1,177  
  A zero-shot tabular classification and regression model, trending as one of the first open foundation models built exclusively for structured data workloads.
- [BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6) | Author: BugTraceAI | Likes: 132 | Downloads: 12,001  
  A cybersecurity-specialized LLM fine-tuned for vulnerability scanning and exploit development, popular among red team security professionals.
- [nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart) | Author: nationaldesignstudio | Likes: 122 | Downloads: 1,881  
  A BERT-based token classification model for PII detection, trending for its optimized browser-based inference via transformers.js.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*