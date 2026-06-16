# Hugging Face Trending Models Digest 2026-06-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-16 23:24 UTC

---

# Hugging Face Trending Models Digest | 2026-06-17
---
## 1. Today's Highlights
This week’s trending models are led by DeepSeek-V4-Pro, which earned 4,895 weekly likes (the highest of all 30 tracked models) and over 2.8 million downloads to become the most popular open-weight conversational LLM on the platform. The Alibaba Qwen 3.5/3.6 family dominates download charts, with both official and community fine-tuned variants accumulating more than 9.2 million total weekly downloads across the tracked sample. There is a massive boom in edge-friendly GGUF quantizations, with 9 community-optimized ports of top flagship models landing on the trending list. New niche multimodal releases from Nvidia, Zai Org, and Ideogram also debut this week targeting specialized video generation, streaming ASR, and photorealistic image generation use cases.

---
## 2. Trending Models (Organized by Category)
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
   Author: deepseek-ai | Likes: 4,895 | Downloads: 2,829,747  
   The highest-rated open conversational LLM this week, trending for its industry-leading reasoning and long-context performance that matches top closed proprietary models.
2. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
   Author: Qwen | Likes: 2,135 | Downloads: 3,360,615  
   The top-performing open multimodal MoE model, trending for its A3B compressed weight format that balances high performance and low deployment resource requirements.
3. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**  
   Author: google | Likes: 1,052 | Downloads: 1,223,383  
   Google’s unified any-to-any Gemma 4 flagship release, trending for its flexible architecture that supports text, image, and audio inputs without separate fine-tuning.
4. **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**  
   Author: prefeitura-rio | Likes: 315 | Downloads: 189,744  
   A large open 397B MoE conversational model built on Qwen 3.5, trending as the first major large-scale LLM open-sourced by a municipal government for public service use cases.
5. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   Author: zai-org | Likes: 263 | Downloads: 0  
   The latest MoE iteration of the popular GLM LLM family, trending for its upcoming public release that drew massive pre-release community attention.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   Author: nvidia | Likes: 2,101 | Downloads: 98,698  
   A lightweight 3B visual localization multimodal model, trending for its state-of-the-art performance in open-vocabulary object detection and spatial reasoning at edge-friendly sizes.
2. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**  
   Author: google | Likes: 944 | Downloads: 375,974  
   Google’s diffusion-powered multimodal Gemma variant, trending for its ability to generate and edit images directly from conversational text prompts.
3. **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**  
   Author: MiniMaxAI | Likes: 1,009 | Downloads: 25,064  
   MiniMax’s latest flagship multimodal model, trending for its industry-leading video understanding and multi-turn conversational multimodal reasoning performance.
4. **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**  
   Author: ideogram-ai | Likes: 559 | Downloads: 12,466  
   The latest text-to-image generation model from Ideogram, trending for its near-perfect text rendering in generated images and photorealistic output quality.
5. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**  
   Author: nvidia | Likes: 464 | Downloads: 5,777  
   A 0.6B parameter streaming ASR model, trending for its ultra-low latency and cache-aware design that outperforms larger ASR models for real-time transcription use cases.
6. **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**  
   Author: zai-org | Likes: 204 | Downloads: 0  
   A pose-driven character animation image-to-video model, trending as a highly anticipated upcoming public release for generative video creators.

### 🔧 Specialized Models (code, math, niche tasks)
1. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
   Author: yuxinlu1 | Likes: 1,144 | Downloads: 60,921  
   A specialized 12B Gemma 4 coding fine-tune, trending for its near top-tier code generation and reasoning performance at a small local-deployable size.
2. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**  
   Author: moonshotai | Likes: 798 | Downloads: 102,206  
   Moonshot’s dedicated coding multimodal model, trending for its ability to interpret handwritten code snippets and debug full application codebases end-to-end.
3. **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**  
   Author: WeiboAI | Likes: 158 | Downloads: 0  
   A 3B math-specialized LLM built on Qwen 2, trending as an upcoming lightweight release optimized for K-12 and college-level mathematical reasoning tasks.
4. **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**  
   Author: CohereLabs | Likes: 412 | Downloads: 12,129  
   Cohere’s latest small MoE coding model, trending for its fast inference and strong performance for embedded coding assistant deployments.

### 📦 Fine-tunes & Quantizations (community GGUF, fine-tunes)
1. **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**  
   Author: unsloth | Likes: 631 | Downloads: 1,009,602  
   An optimized GGUF quantization of Google’s Gemma 4 12B IT, trending for its near-lossless 4-bit compression that makes the flagship model run smoothly on consumer hardware.
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   Author: HauhauCS | Likes: 1,887 | Downloads: 2,716,651  
   A highly popular uncensored community fine-tune of the Qwen 3.6 35B multimodal model, trending for its unrestricted output and strong roleplay and creative writing performance.
3. **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**  
   Author: DavidAU | Likes: 369 | Downloads: 366,279  
   A heavily optimized, thinking-capable uncensored GGUF fine-tune of Qwen 3.6, trending for its strong chain-of-thought reasoning and coding performance.
4. **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)**  
   Author: unsloth | Likes: 287 | Downloads: 120,435  
   A GGUF port of Google’s DiffusionGemma 26B, trending as the first locally runnable open multimodal diffusion model for consumer hardware.

---
## 3. Ecosystem Signal
The Qwen model family is the fastest growing ecosystem this week, with 6 tracked trending variants (official and community derived) accounting for over 9 million combined weekly downloads, signaling massive industry and hobbyist adoption of Alibaba’s open MoE line-up. Open-weight models are now clearly outpacing historical closed-to-public model performance, with top open releases like DeepSeek-V4-Pro matching flagship proprietary model benchmarks and earning millions of downloads in a single week. Unsloth’s GGUF quantization pipeline is the dominant community force, with 5 optimized ports of top flagship models on the trending list, confirming explosive user demand for edge-deployable, locally runnable state-of-the-art models that do not rely on cloud API access.

---
## 4. Worth Exploring
1. **DeepSeek-V4-Pro**: The highest-liked model on this week’s list, it offers benchmark-matching performance to top closed proprietary conversational models for free, making it the best choice for teams looking to replace costly LLM API endpoints with self-hosted open infrastructure.
2. **Qwen3.6-35B-A3B**: The most downloaded model on the list at 3.36 million weekly downloads, it is a fully unrestricted, production-ready multimodal MoE model that supports text and vision tasks at a resource-friendly compression level for both cloud and edge deployments.
3. **Nvidia LocateAnything-3B**: With 2,101 weekly likes, this ultra-lightweight 3B visual localization model delivers state-of-the-art open-vocabulary object detection performance that outperforms far larger multimodal models, making it ideal for building low-latency edge computer vision workflows on consumer and embedded hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*