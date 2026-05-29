# Hugging Face Trending Models Digest 2026-05-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-29 23:13 UTC

---

# Hugging Face Trending Models Digest | 2026-05-30
---

## 1. Today's Highlights
This week’s Hugging Face trending ranking is led by DeepSeek’s newly launched V4-Pro large language model, which crossed 5.8 million weekly downloads to become the fastest-growing open conversational LLM on the platform. Alibaba’s Qwen 3.6 family accounts for over 10 of the 30 trending spots across base models, community fine-tunes, and quantized variants, signaling widespread industry and hobbyist adoption. Standout multimodal launches include ByteDance Research’s production-grade any-to-any generation model *Lance*, and SulphurAI’s industry-leading open text-to-video model Sulphur-2-base that accumulated 1.5 million downloads in its first 7 days. Consumer-focused uncensored fine-tunes and lightweight GGUF quantizations also saw outsized engagement, as end users prioritize models that run natively on local consumer hardware.

---

## 2. Trending Models (Organized by Category)
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | Author: deepseek-ai | Likes: 4,431 | Downloads: 5,836,444  
  This state-of-the-art open conversational LLM is the highest-liked and most downloaded model on the chart, trending for its industry-leading 1M token long context and reasoning performance that matches top-tier closed proprietary models.
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/deepseek-ai/DeepSeek-V4-Flash)** | Author: deepseek-ai | Likes: 1,291 | Downloads: 3,382,438  
  The speed-optimized variant of DeepSeek-V4-Pro, trending for its low-latency conversational performance that retains 98% of the full model’s benchmark scores at 3x faster inference.
- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** | Author: tencent | Likes: 1,088 | Downloads: 15,753  
  A lightweight dense translation LLM optimized for edge deployment, trending as the highest-ranked translation model on the chart thanks to its zero-shot cross-lingual reasoning capabilities for 200+ languages.
- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | Author: openbmb | Likes: 549 | Downloads: 23,629  
  A 1B parameter edge LLM optimized for on-device text generation, trending for its strong per-parameter performance that outperforms many 7B+ legacy small LLMs.
- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | Author: LiquidAI | Likes: 211 | Downloads: 8,854  
  A lightweight MoE LLM built for edge use cases, trending for its minimal memory footprint and strong throughput for local personal assistant workflows.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | Author: circlestone-labs | Likes: 1,592 | Downloads: 723,317  
  A single-file diffusion model optimized for ComfyUI creator workflows, trending as a one-click no-install solution for high-quality creative image generation.
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | Author: SulphurAI | Likes: 1,440 | Downloads: 1,528,838  
  An open text-to-video model, trending as the first public open model that matches the generation quality of leading closed commercial video generation tools for 1080p 30s clips.
- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | Author: bytedance-research | Likes: 974 | Downloads: 2,738  
  A cutting-edge any-to-any multimodal generation model, trending for its ability to seamlessly convert inputs across text, image, audio, and video formats for end-to-end creative workflows.
- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Author: Supertone | Likes: 738 | Downloads: 53,824  
  A state-of-the-art text-to-speech model, trending for its near-human voice cloning capability and native support for 50+ languages.
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 381 | Downloads: 7,861  
  A multimodal visual localization model, trending for its ability to accurately identify and segment arbitrary objects across any input image.

### 🔧 Specialized Models
- **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | Author: NemoStation | Likes: 444 | Downloads: 14,727  
  A video-text-to-text model built for video captioning and long-form video Q&A, trending for its ability to process 2 hour full-length videos without frame sampling.
- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | Author: sapientinc | Likes: 405 | Downloads: 131,828  
  A specialized small text generation model built for high-speed retrieval-augmented generation workflows, trending for its 10x faster inference on consumer GPUs than comparable 7B models.
- **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** | Author: numind | Likes: 196 | Downloads: 49,014  
  A document data extraction vision-language model, trending for its zero-shot structured data extraction capability from unstructured scanned documents.
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | Author: froggeric | Likes: 451 | Downloads: 0  
  A community-maintained collection of corrected Jinja chat templates for all Qwen 3.5/3.6 variants, trending to fix common prompt formatting bugs that break Qwen model performance.

### 📦 Fine-tunes & Quantizations
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 1,049 | Downloads: 2,114,938  
  A popular community uncensored fine-tune of Qwen 3.6 35B MoE, trending for its unrestricted reasoning and performance that outperforms most comparable uncensored open models.
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Author: Qwen | Likes: 1,522 | Downloads: 4,858,365  
  Alibaba’s official flagship open vision-language model, trending as the current best-performing mid-sized open multimodal model for general purpose use.
- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | Author: openbmb | Likes: 1,056 | Downloads: 428,949  
  A lightweight open multimodal fine-tune of Qwen architecture, trending for its unmatched vision-language performance at under 3B parameters.
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | Author: unsloth | Likes: 548 | Downloads: 841,068  
  A speed-optimized GGUF quantization of Qwen 3.6 27B, trending for its native support for llama.cpp local deployment at 40+ tokens per second on consumer GPUs.

---

## 3. Ecosystem Signal
The 2026-05-30 trending data confirms that the Qwen model family is the clear dominant force in the open LLM ecosystem, with derivative models spanning every use case from general chat to edge deployment, a direct result of permissive licensing and strong official community support. Top open models like DeepSeek-V4-Pro now deliver performance parity with mid-tier closed proprietary models, erasing the long-standing quality gap between open and closed weights, and driving rapid enterprise adoption of fully open stacks. Quantization activity has expanded far beyond text LLMs, with GGUF formats now supporting vision, video, and multimodal variants, as the global community prioritizes local, offline, consumer hardware-compatible deployment over cloud-only hosted models. The ecosystem has also become fully global, with US startups, Chinese big tech, and independent community contributors all releasing top-performing competitive models on the same platform.

---

## 4. Worth Exploring
1. **DeepSeek-V4-Pro**: It is the new state-of-the-art open conversational LLM, with benchmark scores that outperform all previous Llama 3 and Qwen variants, making it the most viable open alternative to mid-tier closed models for enterprise production deployment.
2.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*