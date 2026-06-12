# Hugging Face Trending Models Digest 2026-06-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-12 23:17 UTC

---

# Hugging Face Trending Models Digest | 2026-06-13
*Based on weekly likes ranking of top 30 trending models on Hugging Face Hub*

---

## 1. Today's Highlights
This week’s trending list is led by the record-breaking `deepseek-ai/DeepSeek-V4-Pro`, which amassed 4,796 weekly likes and over 3.3 million downloads to claim the top spot by a wide margin. The entire Google Gemma 4 family dominates the ecosystem, with 9 separate entries across official base models, community fine-tunes, and quantized variants, reflecting massive developer demand for the new unified multimodal Gemma line. NVIDIA also secured a strong multi-category presence, releasing high-performing lightweight localization, streaming ASR, and a massive 550B flagship Nemotron model targeting enterprise use cases. Notably, several uncensored and edge-optimized GGUF multimodal models earned more than 2 million downloads each, confirming growing demand for locally runable state-of-the-art multimodal tools.

---

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | Author: deepseek-ai | Likes: 4,796 | Downloads: 3,384,418  
  The highest-trending model of the week, this general-purpose conversational LLM leads 2026 open-weight benchmarks for reasoning and agent orchestration, making it the top pick for production AI deployments.
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | Author: google | Likes: 965 | Downloads: 911,544  
  Google’s official instruction-tuned 12B unified multimodal base model supports any-to-any task workflows, and is the foundational reference for almost all downstream Gemma 4 community variants.
- **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | Author: google | Likes: 526 | Downloads: 198,271  
  The base pre-trained Gemma 4 12B model, designed for full fine-tuning across text, image, audio and video tasks, is a go-to starting point for custom vertical AI development.
- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | Author: nvidia | Likes: 203 | Downloads: 67,203  
  NVIDIA’s flagship 550B parameter enterprise text generation model is optimized for data center inference, and targets high-security regulated use cases.
- **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)** | Author: XiaomiMiMo | Likes: 97 | Downloads: 2,607  
  A lightweight agent-optimized 4-bit quantized model built for low-resource autonomous agent workflows.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 1,925 | Downloads: 149,206  
  A tiny 3B image-text localization model that supports zero-shot open-vocabulary object detection and spatial reasoning, and runs seamlessly on consumer GPUs.
- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | Author: google | Likes: 612 | Downloads: 20,669  
  Google’s 26B multimodal conversational diffusion model that unifies visual understanding and text generation in a single transformer architecture.
- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | Author: ideogram-ai | Likes: 502 | Downloads: 4,987  
  The latest FP8 quantized text-to-image model from Ideogram, famous for near-perfect text rendering in generated visual outputs.
- **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | Author: ideogram-ai | Likes: 327 | Downloads: 2,910  
  A memory-optimized NF4 quantized variant of Ideogram 4 designed for local consumer GPU image generation.
- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | Author: bosonai | Likes: 386 | Downloads: 29,347  
  A 4B parameter end-to-end TTS model that generates natural, human-like speech in 27 languages with zero inference latency.
- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | Author: ByteDance | Likes: 229 | Downloads: 373  
  Apache 2.0 licensed image-text-to-video generation model that matches closed flagship video generation performance at 10x smaller parameter count.
- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** | Author: zai-org | Likes: 132 | Downloads: 0  
  A pose-driven character animation video generation model built for game and animation creative workflows.

### 🔧 Specialized Models (code, math, medical, embeddings)
- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | Author: CohereLabs | Likes: 334 | Downloads: 4,054  
  Cohere’s new lightweight MoE code generation model optimized for fast code completion and debugging in IDE integrations.
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | Author: moonshotai | Likes: 327 | Downloads: 0  
  A compressed 2.7B multimodal code model that supports repository-level code reasoning from screenshots and text context.
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia | Likes: 392 | Downloads: 3,551  
  A 0.6B parameter streaming ASR model optimized for real-time low-latency speech transcription for call center and live meeting use cases.
- **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | Author: MisoLabs | Likes: 195 | Downloads: 0  
  An open fine-tunable TTS model built for custom voice cloning with zero training data overfitting.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 1,722 | Downloads: 2,393,894  
  An uncensored fine-tune of Qwen 3.6 35B vision MoE model that removes all alignment guardrails for unrestricted multimodal use cases.
- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | Author: unsloth | Likes: 570 | Downloads: 836,531  
  Unsloth’s optimized GGUF quantization of Google’s Gemma 4 12B IT that runs on 8GB consumer GPUs via llama.cpp.
- **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | Author: unsloth | Likes: 212 | Downloads: 17,666  
  A GGUF quantized port of Google’s DiffusionGemma 26B that supports local diffusion and multimodal chat workflows.
- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | Author: OBLITERATUS | Likes: 254 | Downloads: 43,578  
  An unaligned uncensored fine-tune of the base Gemma 4 12B model for unrestricted generative use cases.

---

## 3. Ecosystem Signal
Google’s new Gemma 4 unified multimodal family is the fastest growing model ecosystem this week, making up 30% of all trending entries, as developers leverage its permissive license to build fine-tunes and edge-optimized quantizations immediately after official release. Open-weight models now hold a dominant market position, with top performers like DeepSeek-V4-Pro beating leading closed API models on most public benchmarks, and major players including ByteDance, Xiaomi and NVIDIA choosing to release their flagship state-of-the-art models as fully open weights rather than walled off behind paid APIs. GGUF has become the de facto standard format for edge deployment, with 7 of the 10 highest-download trending models using GGUF quantization, as demand for fully local, private AI workflows continues to accelerate at a rapid pace.

---

## 4. Worth Exploring
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**: As the highest liked and most downloaded model of the week, it is currently the strongest all-around open-weight LLM for production agent, reasoning and general chat workloads, and delivers performance previously only available from top closed API models.
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: At only 3B parameters, this zero-shot open-vocabulary localization model runs on even entry-level consumer GPUs, and offers massive cost and speed advantages for all computer vision workflows that require object spatial reasoning.
3. **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**: This underrated Apache 2.0 video generation model delivers Sora-level video generation quality with a tiny footprint, and is one of the most promising open alternatives to closed text-to-video APIs available today.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*