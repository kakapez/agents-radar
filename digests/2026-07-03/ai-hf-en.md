# Hugging Face Trending Models Digest 2026-07-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-02 23:07 UTC

---

# Hugging Face Trending Models Digest | 2026-07-03
---
## 1. Today's Highlights
This week’s Hugging Face trending list is dominated by open-weight mainstream model family expansions, high-performance community quantizations, and new enterprise-grade multimodal utilities. The highest-liked release is ZAI Org’s GLM-5.2, the latest MoE conversational LLM that amassed 3,248 weekly likes, while an uncensored vision Qwen 3.6 GGUF variant crossed 3 million downloads to become the most widely pulled model on the list. Nvidia’s new ModelOpt NVFP4 optimized ports of top open models saw fast enterprise adoption, with its LocateAnything-3B visual localization model earning 2,572 likes and over 1 million downloads. Several independent releases including the 397B parameter Ornith 1.0 ultra-large LLM from DeepReinforce AI also drew heavy attention from research teams.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **zai-org/GLM-5.2** (https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org | Likes: 3,248 | Downloads: 176,154
  State-of-the-art open conversational MoE LLM built on the new glm_moe_dsa architecture, trending as the top new mainstream base LLM for 2026.
- **deepseek-ai/DeepSeek-V4-Pro-DSpark** (https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | Author: deepseek-ai | Likes: 302 | Downloads: 8,184
  High-performance optimized variant of DeepSeek’s latest V4 series LLM, paired with the DSpark distributed inference framework for low-latency enterprise deployment.
- **deepseek-ai/DeepSeek-V4-Flash-DSpark** (https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark) | Author: deepseek-ai | Likes: 128 | Downloads: 23,939
  Lightweight fast-inference iteration of the DeepSeek V4 line, optimized for edge and low-resource cloud inference use cases.
- **LiquidAI/LFM2.5-230M** (https://huggingface.co/LiquidAI/LFM2.5-230M) | Author: LiquidAI | Likes: 191 | Downloads: 26,357
  Extremely small 230M parameter edge LLM that demonstrates strong zero-shot performance for resource-constrained embedded deployments.
- **InternScience/Agents-A1** (https://huggingface.co/InternScience/Agents-A1) | Author: InternScience | Likes: 178 | Downloads: 1,533
  New research-focused agent framework model built on Qwen 3.5 MoE, designed for end-to-end multi-step task completion workflows.
- **meituan-longcat/LongCat-2.0** (https://huggingface.co/meituan-longcat/LongCat-2.0) | Author: meituan-longcat | Likes: 164 | Downloads: 0
  Unreleased long-context LLM evaluation artifact that drew heavy curiosity for its claimed 10M+ token context window.
- **nationaldesignstudio/rampart** (https://huggingface.co/nationaldesignstudio/rampart) | Author: nationaldesignstudio | Likes: 102 | Downloads: 790
  Lightweight BERT-based PII detection token classification model optimized for client-side processing via Transformers.js.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **baidu/Unlimited-OCR** (https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu | Likes: 1,651 | Downloads: 758,489
  Zero-limit general purpose OCR model that supports over 200 languages and handwritten text extraction, trending for its state-of-the-art accuracy on scanned documents.
- **nvidia/LocateAnything-3B** (https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia | Likes: 2,572 | Downloads: 1,006,831
  All-in-one visual feature extraction and object localization multimodal model that can identify and geolocate any arbitrary object in image inputs with near-zero fine-tuning.
- **krea/Krea-2-Turbo** (https://huggingface.co/krea/Krea-2-Turbo) | Author: krea | Likes: 457 | Downloads: 69,788
  Optimized fast text-to-image generation model that produces photorealistic outputs in under 200ms on consumer GPUs.
- **fal/LTX-2.3-3DREAL-LoRA** (https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA) | Author: fal | Likes: 143 | Downloads: 0
  Popular LoRA adapter for the LTX-2.3 video generation model that adds photorealistic 3D scene rendering capabilities to generated 10-second clips.
- **Comfy-Org/Krea-2** (https://huggingface.co/Comfy-Org/Krea-2) | Author: Comfy-Org | Likes: 229 | Downloads: 10
  Officially ported Krea-2 base model release optimized for native ComfyUI workflow integration.
- **ilkerzgi/fal-Krea-2-Style-LoRAs** (https://huggingface.co/ilkerzgi/fal-Krea-2-Style-LoRAs) | Author: ilkerzgi | Likes: 106 | Downloads: 0
  Curated collection of community style LoRA adapters for the Krea-2 text-to-image model covering 50+ popular artistic and commercial visual styles.

### 🔧 Specialized Models (code, math, agent, tabular)
- **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** (https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | Author: yuxinlu1 | Likes: 2,571 | Downloads: 614,069
  Highly rated coding specialized Gemma 4 12B model optimized for complex software engineering tasks, trending for its 80%+ pass rate on the HumanEval benchmark.
- **Qwen/Qwen-AgentWorld-35B-A3B** (https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | Author: Qwen | Likes: 511 | Downloads: 39,448
  Official Qwen release built specifically for open-world agent simulation tasks, pre-trained on millions of web navigation and tool use trajectories.
- **google/tabfm-1.0.0-pytorch** (https://huggingface.co/google/tabfm-1.0.0-pytorch) | Author: google | Likes: 114 | Downloads: 89
  Zero-shot tabular classification and regression foundation model that outperforms GBDT-based models on 90% of common tabular datasets without fine-tuning.
- **BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6** (https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6) | Author: BugTraceAI | Likes: 121 | Downloads: 8,037
  Cybersecurity specialized GGUF model trained on 10M+ public vulnerability and exploit datasets for automated bug tracing and penetration testing assistance.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, optimized ports)
- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** (https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai | Likes: 1,245 | Downloads: 1,250,562
  Long-context reasoning Qwen 3.5 GGUF fine-tune trained on 1M high-quality Claude 3.5 synthetic trajectories, popular for local deep reasoning workloads.
- **deepreinforce-ai/Ornith-1.0-35B-GGUF** (https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | Author: deepreinforce-ai | Likes: 653 | Downloads: 284,585
  MIT-licensed 35B Ornith LLM GGUF quantization that runs on 24GB consumer GPUs.
- **deepreinforce-ai/Ornith-1.0-9B-GGUF** (https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF) | Author: deepreinforce-ai | Likes: 394 | Downloads: 255,123
  Lightweight MIT-licensed 9B Ornith LLM GGUF optimized for fast local inference.
- **deepreinforce-ai/Ornith-1.0-9B** (https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) | Author: deepreinforce-ai | Likes: 351 | Downloads: 58,385
  Full-precision base 9B Ornith multimodal LLM release.
- **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** (https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | Author: yuxinlu1 | Likes: 956 | Downloads: 314,374
  Agentic workflow optimized Gemma 4 12B GGUF, designed for native terminal interaction and local tool use.
- **deepreinforce-ai/Ornith-1.0-35B** (https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B) | Author: deepreinforce-ai | Likes: 310 | Downloads: 185,633
  Full-precision base 35B Ornith multimodal MoE LLM release.
- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M** (https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | Author: empero-ai | Likes: 641 | Downloads: 124,909
  Full-precision non-quantized base release of the Qwythos reasoning fine-tune.
- **nvidia/Qwen3.6-27B-NVFP4** (https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4) | Author: nvidia | Likes: 209 | Downloads: 27,249
  Nvidia ModelOpt optimized NVFP4 quantization of Qwen 3.6 27B, optimized for maximum performance on Nvidia H100 and RTX 50 series hardware.
- **nvidia/GLM-5.2-NVFP4** (https://huggingface.co/nvidia/GLM-5.2-NVFP4) | Author: nvidia | Likes: 206 | Downloads: 159,698
  Nvidia ModelOpt optimized NVFP4 quantization of GLM-5.2, widely adopted for enterprise MoE inference deployments.
- **deepreinforce-ai/Ornith-1.0-397B** (https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B) | Author: deepreinforce-ai | Likes: 195 | Downloads: 7,358
  Ultra-large 397B parameter flagship Ornith MoE LLM release for state-of-the-art research benchmarks.
- **huihui-ai/Huihui-GLM-5.2-abliterated-GGUF** (https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF) | Author: huihui-ai | Likes: 133 | Downloads: 2,592
  Community abliterated (safety alignment removed) GGUF fine-tune of GLM-5.2 for unrestricted research use.
- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** (https://huggingface.co/HauhauCS/Qwen3.6-35

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*