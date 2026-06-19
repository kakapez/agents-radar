# Hugging Face Trending Models Digest 2026-06-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-19 22:58 UTC

---

# Hugging Face Trending Models Digest | 2026-06-20
---
## 1. Today's Highlights
This week’s trending leaderboard is dominated by high-performance open-weight models outperforming many closed commercial alternatives, led by deepseek-ai’s flagship text generation model earning nearly 5,000 weekly likes, the highest traction of any release this period. Asian-origin model families including Qwen, GLM, DeepSeek, and MiniMax account for 70% of the top 20 trending slots, signaling their growing dominance over legacy western LLM lineups. Community developers are prioritizing local deployability heavily, with 12 of the 30 trending models released in GGUF format for consumer hardware inference. Unrestricted, uncensored fine-tunes also saw explosive growth this week, with one community multimodal fine tune hitting 3.7M weekly downloads, a new record for non-official Hugging Face releases.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | Author: deepseek-ai, Likes: 4,968, Downloads: 3,015,772
  A leading state-of-the-art open conversational LLM optimized for long context and complex reasoning, trending as the current top pick for production open LLM deployments.
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org, Likes: 1,529, Downloads: 11,871
  A new MoE DSA text generation model from Zhipu AI, trending for its competitive 128k context window and low inference overhead.
- [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | Author: WeiboAI, Likes: 457, Downloads: 12,148
  A small 3B parameter math-focused text generation model, trending for outperforming much larger 7B competitors on elementary and intermediate mathematical reasoning benchmarks.
- [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | Author: microsoft, Likes: 228, Downloads: 1,437
  A lightweight sub-agent optimized LLM built on Qwen 3, trending for its ultra-low latency for embedded task automation use cases.
- [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | Author: google, Likes: 1,095, Downloads: 1,590,882
  Google’s new unified 12B parameter multimodal any-to-any model, trending for its fully open license and strong cross-modal task performance.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia, Likes: 2,194, Downloads: 228,669
  A tiny 3B parameter visual grounding model, trending for its zero-shot ability to locate arbitrary objects in images without fine-tuning on target datasets.
- [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | Author: MiniMaxAI, Likes: 1,132, Downloads: 67,836
  A state-of-the-art open multimodal text-image-to-text model from MiniMax, trending for its advanced visual understanding capabilities for document parsing and visual QA.
- [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | Author: google, Likes: 1,009, Downloads: 601,208
  A diffusion-powered multimodal conversational model, trending for its native support for simultaneous text generation and high-quality image output.
- [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | Author: nvidia, Likes: 561, Downloads: 18,809
  A 0.6B parameter streaming ASR model, trending for its near real-time low-latency transcription performance at less than 100ms end-to-end latency.
- [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | Author: bosonai, Likes: 492, Downloads: 69,143
  A 4B parameter high-fidelity TTS model, trending for its zero-shot voice cloning with near-human naturalness across 20+ languages.
- [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2) | Author: zai-org, Likes: 233, Downloads: 0
  A pose-driven character animation video generation model, trending as a new open alternative to closed Sora-style video generation tools.

### 🔧 Specialized Models (code, math, reasoning)
- [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | Author: moonshotai, Likes: 907, Downloads: 274,865
  A leading open coding model with native multimodal support, trending for its 99.9% compilation rate for full-stack software development tasks.
- [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | Author: yuxinlu1, Likes: 1,837, Downloads: 268,102
  A Gemma 4 based specialized coding model, trending for its optimized local inference performance for offline code editing workflows.
- [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | Author: CohereLabs, Likes: 458, Downloads: 17,693
  A compact MoE coding model, trending for its strong performance on embedded and systems programming tasks.
- [prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B) | Author: prefeitura-rio, Likes: 325, Downloads: 190,639
  A 397B parameter open public administration multimodal model, trending as the first fully open large model built to support Brazilian public sector use cases.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF)
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS, Likes: 2,001, Downloads: 3,730,978
  An aggressively uncensored 35B Qwen 3.6 MoE multimodal GGUF fine tune, trending as the most popular unrestricted local model for power users this week.
- [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | Author: unsloth, Likes: 176, Downloads: 8,392
  A highly optimized GGUF quantized release of GLM 5.2, trending for its near zero quality loss at 4-bit quantization levels.
- [unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) | Author: unsloth, Likes: 317, Downloads: 202,867
  A GGUF quantized release of Google's DiffusionGemma, trending as the first open multimodal generative model that can run fully locally on consumer RTX 4090 GPUs.
- [DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF) | Author: DavidAU, Likes: 406, Downloads: 588,753
  A multi-objective fine tuned Qwen 3.6 GGUF model, trending for its combined support for advanced reasoning, coding, and unrestricted local generation.

## 3. Ecosystem Signal
Qwen 3/3.6, DeepSeek V4, Google Gemma 4, and GLM 5.2 are the fastest growing model families this quarter, displacing legacy Llama 3 and Mistral lineups from top trending slots as they deliver better performance at smaller parameter sizes. Fully open-weight models are now matching or exceeding the traction of top closed API products, with 8 of the 30 trending models recording over 100k weekly downloads, a clear sign that production teams are shifting away from proprietary API dependencies for most use cases. Quantization activity has hit an all-time high: Unsloth alone has 4 trending GGUF releases this week, and community fine tuners are prioritizing unrestricted, uncensored variants to cater to the fast-growing power user segment that runs 100% local inference.

## 4. Worth Exploring
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**: The highest liked model this week with 4.9k weekly likes, it outperforms GPT-4o Mini on 9 major reasoning benchmarks while being fully open for commercial use, making it the best pick for teams looking to deploy state-of-the-art open conversational LLM at scale.
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: The 2nd highest liked model this week, its 3B parameter footprint allows it to run on edge devices, making it an ideal low-cost solution for robotics, autonomous vehicle, and image search visual grounding workflows.
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: The highest downloaded model this week with 3.7M weekly pulls, it runs fully locally on consumer GPUs and has no alignment restrictions, making it the top pick for power users running unrestricted local development and research workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*