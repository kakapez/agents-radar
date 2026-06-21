# Hugging Face Trending Models Digest 2026-06-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-21 23:13 UTC

---

# Hugging Face Trending Models Digest | 2026-06-22
---
## 1. Today's Highlights
This week’s Hugging Face trending leaderboard is dominated by high-impact open-weight releases from leading Chinese AI research labs, led by DeepSeek-V4 Pro which takes the top likes spot with nearly 5,000 weekly positive votes. Flagship multimodal releases earn record download counts, with Alibaba Qwen’s official 35B A3B variant crossing 5.1 million downloads in a single week, far outpacing other competing models. There is also an unprecedented surge in local-deployment optimized GGUF quantizations, with 11 of the 30 trending models built for llama.cpp edge inference. Notable niche launches include Nvidia’s new lightweight open-world object localization model and a sub-1B streaming ASR model optimized for low-latency use cases. No major gated proprietary releases broke the weekly top 15 likes ranking this period, indicating strong community preference for fully open, accessible model weights.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
1. [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
   - Author: deepseek-ai | Likes: 4,998 | Downloads: 2,611,991
   - A top-tier fully open conversational LLM that matches closed frontier model performance on reasoning and long context tasks, trending as the current community default for production chat deployments.
2. [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)
   - Author: zai-org | Likes: 1,805 | Downloads: 27,413
   - A new MoE general purpose conversational LLM from the GLM team, trending for its 200k native context window and 7B active parameter footprint that delivers 30B class performance at low inference cost.
3. [zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)
   - Author: zai-org | Likes: 119 | Downloads: 217,361
   - An official FP8 quantized variant of the GLM-5.2 base model, trending for seamless deployment on consumer and enterprise GPUs with no measurable performance drop from the full weight release.
4. [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)
   - Author: microsoft | Likes: 261 | Downloads: 2,593
   - A lightweight 4B sub-agent LLM optimized for fast retrieval-augmented generation workflows, trending for its 1M context support at a tiny memory footprint.
5. [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)
   - Author: nex-agi | Likes: 342 | Downloads: 7,872
   - A community fine-tuned conversational LLM built on Qwen 3.5 MoE, trending for its improved multi-turn follow-up accuracy for consumer chat use cases.
6. [poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)
   - Author: poolside | Likes: 81 | Downloads: 2,580
   - A code-optimized conversational LLM built for vLLM and SGLang high-throughput deployment, trending for 2x faster code generation speed relative to comparable 12B models.

---
### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
1. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
   - Author: nvidia | Likes: 2,240 | Downloads: 241,845
   - A lightweight 3B multimodal vision model built for zero-shot open-world object localization, trending as a game-changing release for robotics, retail analytics and autonomous systems workflows.
2. [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)
   - Author: MiniMaxAI | Likes: 1,176 | Downloads: 104,076
   - A fully open general purpose multimodal model that supports interleaved text, image, short video and audio inputs, trending for its state-of-the-art OCR and diagram reasoning performance.
3. [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
   - Author: google | Likes: 1,034 | Downloads: 762,861
   - A hybrid text and image generation multimodal model built on Google’s Gemma 4 architecture, trending for its ability to generate high fidelity 2K images and respond to text queries in a single unified forward pass.
4. [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)
   - Author: google | Likes: 1,125 | Downloads: 1,815,370
   - Google’s official all-too-any unified multimodal model that processes text, images, audio and video natively, trending as the first small (<15B parameter) fully open any-to-any model from a big tech vendor.
5. [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)
   - Author: nvidia | Likes: 609 | Downloads: 27,275
   - A 0.6B parameter streaming ASR model optimized for <100ms end-to-end latency, trending for its near human transcription accuracy for 30+ languages at a tiny deployment footprint.
6. [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)
   - Author: bosonai | Likes: 505 | Downloads: 76,120
   - A 4B TTS model that supports zero-shot voice cloning for 100+ languages, trending for its near-zero artefact generation for long form audiobook and podcast use cases.
7. [owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)
   - Author: owensong | Likes: 150 | Downloads: 0
   - An ultra-small TTS model under 100M parameters that runs entirely on mobile CPUs, trending for its near real-time speech generation for embedded edge devices.
8. [ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)
   - Author: ostris | Likes: 89 | Downloads: 2,452
   - A community LoRA fine tune for Ideogram 4 that cuts text to image generation speed by 70% with minimal quality loss, trending for fast iterative creative workflows.

---
### 🔧 Specialized Models (code, math, embeddings)
1. [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
   - Author: moonshotai | Likes: 944 | Downloads: 363,308
   - A code-specialist multimodal model that can parse full repository context, UML diagrams and debug runtime error screenshots natively, trending as one of the highest performing open code models released to date.
2. [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)
   - Author: WeiboAI | Likes: 557 | Downloads: 20,277
   - A 3B math reasoning LLM built on Qwen 2 that outperforms 10B+ models on grade school and university level STEM problem solving, trending for its tiny size ideal for edge education use cases.
3. [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)
   - Author: CohereLabs | Likes: 474 | Downloads: 19,551
   - A small 7B code specialist LLM optimized for enterprise internal codebase assistant deployments, trending for its strong support for 20+ niche programming languages and legacy frameworks.
4. [LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)
   - Author: LiquidAI | Likes: 89 | Downloads: 7,726
   - A 350M parameter text embedding model that delivers 2x the retrieval accuracy of BGE large, trending for high performance low-latency semantic search deployments.

---
### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
1. [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)
   - Author: yuxinlu1 | Likes: 2,079 | Downloads: 358,677
   - A community GGUF quantized code fine tune of Google’s Gemma 4 12B, trending as the highest performing local CPU-run code model released this week.
2. [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
   - Author: HauhauCS | Likes: 2,077 | Downloads: 3,966,691
   - A community uncensored GGUF fine tune of Qwen 3.6 35B multimodal, trending for unrestricted generation for research and creative use cases.
3. [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)
   - Author: Qwen | Likes: 2,195 | Downloads: 5,148,673
   - Alibaba’s official 3-bit quantized multimodal flagship model, trending for its unprecedented 5M+ weekly download count and compatibility with nearly all consumer GPUs.
4. [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)
   - Author: yuxinlu1 | Likes: 269 | Downloads: 21,730
   - A community GGUF agent fine tune of Gemma 4 12B optimized for native terminal tool use, trending for running full local agent workflows without cloud connectivity.
5. [un

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*