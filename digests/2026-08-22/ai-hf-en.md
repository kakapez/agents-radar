# Hugging Face Trending Models Digest 2026-08-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-21 22:24 UTC

---

# Hugging Face Trending Models Digest | 2026-08-22
---
## 1. Today's Highlights
This week’s Hugging Face trending leaderboard is dominated overwhelmingly by releases built around Alibaba’s Qwen 3.8 model family, with the base multimodal 27B variant taking the #1 spot with nearly 12,000 weekly likes. Moonshot AI’s open-weight Kimi-K3 multimodal model ranks a close second with over 10,900 likes, marking a rare strong showing from a non-Qwen base model. Generative video and text-to-audio models are also seeing explosive user adoption, with top video models accumulating millions of cumulative downloads as the category moves from closed SaaS to open local deployment. The largest community trend is the release of dozens of abliterated/uncensored fine-tunes and consumer-friendly quantizations targeting local, offline LLM use cases.

---
## 2. Trending Models (By Category)
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | Author: moonshotai | Likes: 10,910 | Downloads: 2,448,810
  A high-performance open-weight conversational and feature extraction multimodal LLM from Moonshot AI, it is the second most liked model on the leaderboard as users compare its performance to the top-ranked Qwen 3.8 line.
- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | Author: deepseek-ai | Likes: 3,605 | Downloads: 2,833,064
  A lightweight fast inference variant of DeepSeek’s latest V4 conversational model, it sees massive uptake for production low-latency chat deployments.
- **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** | Author: deepseek-ai | Likes: 704 | Downloads: 49,601
  The updated high-performance full V4 Pro text generation model from DeepSeek, trending for improved reasoning benchmarks compared to earlier V4 releases.
- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** | Author: Qwen | Likes: 1,135 | Downloads: 15,702
  A massive 2.4 trillion parameter MoE text-only conversational LLM from Qwen, trending as one of the largest open-weight models ever released for general use.
- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | Author: ornith-ai | Likes: 280 | Downloads: 9,165
  A fine-tuned Qwen 3.5 MoE text generation model optimized for creative workloads, trending for strong open-ended generation performance.
- **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** | Author: superwhisper | Likes: 185 | Downloads: 1,136
  A small lightweight text generation model fine-tuned for ASR transcription formatting, trending for its low-latency local speech-to-text performance.
- **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** | Author: z-lab | Likes: 167 | Downloads: 21,092
  A Qwen 3.8 variant optimized for DFlash2 speculative decoding, trending for 3x faster inference speeds on consumer and enterprise GPUs.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Author: Qwen | Likes: 11,942 | Downloads: 1,726,651
  The base flagship multimodal image-text-to-text conversational LLM from Qwen, it ranks #1 overall this week for its industry-leading combination of vision and language performance at a 27B parameter size.
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | Author: MiniMaxAI | Likes: 4,289 | Downloads: 3,614,443
  An open text-to-video and image-to-video diffusion model, trending as the highest-performance open generative video model available to date.
- **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** | Author: meta-models | Likes: 1,731 | Downloads: 505,113
  A 30B parameter multimodal conversational image-text-to-text model, trending for near state-of-the-art visual reasoning performance for open models.
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Author: Lightricks | Likes: 1,481 | Downloads: 654,175
  A single-file diffusion model supporting text-to-video, image-to-video, and video-to-video tasks, trending for its small file size and fast local video generation capabilities.
- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | Author: MiniMaxAI | Likes: 1,157 | Downloads: 15,678
  An open text-to-music generation diffusion model, trending for producing high-fidelity 3-minute full tracks with user-specified genre and instrumentation.
- **[TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max)** | Author: TenStrip | Likes: 306 | Downloads: 0
  A community fine-tune of MiniMax-H3 for unrestricted generative video output, trending among creators looking for flexible open video generation without content filters.

### 🔧 Specialized Models
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | Author: froggeric | Likes: 1,364 | Downloads: 0
  A community utility pack of corrected Jinja chat templates for all Qwen 3.5 and 3.8 model variants, trending to fix common broken formatting bugs that cause degraded model output for self-hosted users.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | Author: unsloth | Likes: 2,492 | Downloads: 5,804,917
  An optimized GGUF quantization of the base Qwen 3.8-27B from Unsloth, it is the highest downloaded model on the entire trending list, optimized for fast running on consumer llama.cpp setups.
- **[Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)** | Author: Qwen | Likes: 656 | Downloads: 1,939,895
  Official FP8 quantized release of the base Qwen 3.8-27B from the Qwen team, trending for near-lossless performance at a 50% smaller file size.
- **[unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4)** | Author: unsloth | Likes: 323 | Downloads: 1,013,917
  A NVFP4 optimized quantization of Qwen 3.8-27B for NVIDIA consumer GPUs, trending for running the full 27B model on 16GB VRAM with minimal performance loss.
- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | Author: orcarouter | Likes: 812 | Downloads: 18,193
  An abliterated unrestricted Qwen 3.8-27B fine-tune formatted for Apple MLX, trending for native fast performance on M-series Mac devices.
- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | Author: orcarouter | Likes: 774 | Downloads: 107,520
  An FP8 quantized uncensored abliterated Qwen 3.8-27B fine-tune, trending for users that need open conversational output without alignment restrictions.
- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | Author: JonathanColetti | Likes: 558 | Downloads: 1,126,222
  A GGUF quantization of an uncensored Qwen 3.8-27B variant with added MTP fast inference support, it is one of the highest downloaded community fine-tunes on the leaderboard.
- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | Author: OBLITERATUS | Likes: 432 | Downloads: 123,956
  A heavily abliterated alignment-free Qwen 3.8-27B release available in MLX, safetensors and GGUF formats, trending for completely unrestricted output.
- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | Author: HauhauCS | Likes: 414 | Downloads: 357,225
  A multimodal uncensored Qwen 3.8 GGUF variant optimized for aggressive MTP inference, trending for 2x faster generation speed on CPU and GPU.
- **[empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF)** | Author: empero-ai | Likes: 232 | Downloads: 74,038
  A quantized Qwen 3.8-27B GGUF fine-tune optimized for long-form writing and narrative tasks, trending for its strong fiction generation performance.
- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | Author: orcarouter | Likes: 281 | Downloads: 68,275
  The base GGUF release of Orcarouter’s popular uncensored Qwen 3.8-27B fine-tune, trending for general purpose local unrestricted chat use.
- **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** | Author: ornith-ai | Likes: 198 | Downloads: 123,237
  GGUF quantization of the Ornith 1.5 35B creative text generation model, trending for local deployment on consumer hardware.
- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | Author: huihui-ai

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*