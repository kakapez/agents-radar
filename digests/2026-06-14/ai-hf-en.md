# Hugging Face Trending Models Digest 2026-06-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-13 23:04 UTC

---

# Hugging Face Trending Models Digest | 2026-06-14
---
## 1. Today's Highlights
The latest weekly trending ranking is led by record-breaking open-weight model releases from top AI vendors, with deepseek-ai’s DeepSeek-V4-Pro taking the top spot by a wide margin with 4,812 weekly likes. Google’s newly launched Gemma 4 family dominates the ecosystem, with 11 of the top 30 trending models built on the unified Gemma4 architecture across base variants, community fine-tunes, and quantized builds. Leading enterprise players including Nvidia, Ideogram, ByteDance, and CohereLabs also released new open-weight multimodal, speech, and code models targeting production use cases. Local deployment optimized GGUF quantizations remain the fastest growing category, with community uncensored and unrestricted fine-tunes attracting millions of downloads from hobbyist and developer users.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | Author: deepseek-ai | Likes: 4,812 | Downloads: 3,250,404. This flagship conversational text generation model leads all trending models in both likes and downloads, and is widely regarded as the current highest-performing open-weight general purpose LLM for production chat and reasoning workloads.
- [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B) | Author: google | Likes: 531 | Downloads: 207,338. The raw base variant of Google’s new unified Gemma 4 family, it supports any-to-any modality processing and is trending as a popular foundational checkpoint for custom fine-tuning projects.
- [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | Author: nex-agi | Likes: 236 | Downloads: 3,092. A text generation MoE model built on the Qwen3.5 architecture, it is trending for its low inference latency and strong multi-turn chat performance on consumer hardware.
- [nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini) | Author: nex-agi | Likes: 193 | Downloads: 3,760. A smaller, more efficient distilled variant of the Nex-N2-Pro model, optimized for edge and embedded text generation use cases.
- [XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash) | Author: XiaomiMiMo | Likes: 105 | Downloads: 3,590. A FP4 quantized agent-optimized LLM from Xiaomi, trending for its native tool calling and long context support for autonomous agent workflows.
- [prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B) | Author: prefeitura-rio | Likes: 94 | Downloads: 5,943. A 397B parameter MoE conversational model released by the Rio de Janeiro municipal government, it is trending as one of the largest fully public open LLM checkpoints available.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | Author: google | Likes: 701 | Downloads: 92,080. A new diffusion-powered multimodal instruction tuned model from Google, it combines the Gemma LLM architecture with generative diffusion capabilities for end-to-end image-text conversational workflows.
- [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia | Likes: 1,958 | Downloads: 69,443. A lightweight 3B parameter visual grounding model from Nvidia, it can locate any arbitrary object in images and videos via natural language prompts, making it highly popular for computer vision pipeline integration.
- [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | Author: MiniMaxAI | Likes: 411 | Downloads: 1,031. The new flagship multimodal model from Chinese AI firm MiniMax, it supports simultaneous text, image, and audio input processing for cross-modal reasoning tasks.
- [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | Author: google | Likes: 994 | Downloads: 1,005,883. The instruction-tuned variant of Google’s Gemma 4 any-to-any model, it has passed 1 million weekly downloads as the most accessible unified multimodal flagship for general users.
- [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | Author: bosonai | Likes: 413 | Downloads: 32,162. A 4B parameter text-to-speech model built on Qwen3 architecture, trending for its near-human voice quality and zero-shot voice cloning support.
- [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | Author: ideogram-ai | Likes: 516 | Downloads: 6,535. The latest state-of-the-art text-to-image generation model from Ideogram, famous for industry-leading perfect text rendering in generated images.
- [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4) | Author: ideogram-ai | Likes: 333 | Downloads: 3,276. A lower 4-bit quantized variant of Ideogram 4, optimized for running the top-tier text-to-image model on consumer GPUs with less than 10GB VRAM.
- [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2) | Author: zai-org | Likes: 151 | Downloads: 0. A new pose-driven character animation image-to-video model, trending for its ability to generate consistent long-form character motion without style drift.
- [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | Author: ByteDance | Likes: 235 | Downloads: 426. A state-of-the-art open image-text-to-video renderer model from ByteDance, it is trending following the publication of its associated peer-reviewed research paper.
- [google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2) | Author: google | Likes: 187 | Downloads: 7,331. A new real-time text-to-audio generation model from Google Magenta, optimized for TFLite deployment for low-latency edge music and sound effect generation.

### 🔧 Specialized Models (code, math, medical, embeddings)
- [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | Author: moonshotai | Likes: 513 | Downloads: 1,689. A code-specialist variant of Moonshot’s Kimi K2.7 LLM, trending for its exceptional long context code debugging and repository refactoring performance.
- [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | Author: CohereLabs | Likes: 354 | Downloads: 6,533. A compact, lightweight code generation MoE model from Cohere, optimized for fast local code completion on IDEs without cloud connectivity.
- [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | Author: nvidia | Likes: 400 | Downloads: 3,975. A 0.6B parameter streaming automatic speech recognition model, it supports sub 100ms latency real-time transcription for voice and video calling use cases.
- [Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF) | Author: Jackrong | Likes: 155 | Downloads: 11,291. A GGUF quantized coder model based on Qwen 3.6, trending for its MTP (more tokens prediction) architecture that speeds up code generation output by 3x.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) | Author: unsloth | Likes: 246 | Downloads: 42,885. An optimized GGUF quantization of Google’s DiffusionGemma model, allowing local deployment on consumer hardware.
- [OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED) | Author: OBLITERATUS | Likes: 275 | Downloads: 50,289. A community de-aligned fine-tune of Gemma 4 12B that removes all built-in safety alignment restrictions for unrestricted research use.
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS | Likes: 1,761 | Downloads: 2,411,202. An aggressively uncensored 3-bit quantized multimodal Qwen 3.6 fine-tune, it is one of the highest downloaded trending models targeted at local unrestricted personal use.
- [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | Author: unsloth | Likes: 580 | Downloads: 872,895. The most popular GGUF quantization of Google’s Gemma 4 12B IT, optimized for zero-overhead llama.cpp local deployment.
- [unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF) | Author: unsloth | Likes: 212 | Downloads: 227,830. A quantized-aware trained GGUF variant of Gemma 4 12B IT, that preserves full original model performance at half the inference footprint.
- [huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://hug

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*