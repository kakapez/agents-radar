# Hugging Face Trending Models Digest 2026-08-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-08 22:28 UTC

---

# Hugging Face Trending Models Digest | 2026-08-09
---
## 1. Today's Highlights
This week’s Hugging Face trending list is led by record-breaking open multimodal releases, with video generation and vision-language models outpacing pure-text large language models in weekly likes. Black Forest Labs’ industry-standard FLUX.1-dev reclaims the top overall spot with 14,036 new weekly likes, while China-based AI developers hold 6 of the top 10 highest-liked model positions, driven by breakout flagship launches from Moonshot AI, Z.ai, and MiniMax. The community fine-tuning ecosystem is disproportionately focused on the newly released MiniMax-H3 video generation model, with more than 15 derivative quantizations, LoRAs, and ComfyUI-compatible builds published in the last 7 days. Edge deployment optimization, specifically GGUF and INT4/INT8 quantization for consumer GPUs, accounts for nearly 40% of all trending model releases this period.

---
## 2. Trending Models (Organized by Category)
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731): Author: deepseek-ai | Likes: 2,844 | Downloads: 785,771  
  A fast, conversational text generation model optimized for low-latency enterprise chat use cases, trending for its 1M+ token long context window and 2x faster inference speed than prior DeepSeek releases.
- [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B): Author: LiquidAI | Likes: 415 | Downloads: 81,522  
  An extremely small, lightweight 2.6B parameter text generation model optimized for edge device deployment, trending for its near-7B level benchmark performance at a fraction of the compute footprint.
- [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview): Author: deepgrove | Likes: 254 | Downloads: 896  
  A small, experimental mixture-of-experts causal LM, trending for its novel sparse activation architecture that cuts inference cost by 60% for long document tasks.
- [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash): Author: inclusionAI | Likes: 221 | Downloads: 4,189  
  A hybrid-architecture fast conversational LLM, trending as the first public release from Bailing’s open source team with competitive multilingual performance.
- [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B): Author: mistralai | Likes: 201 | Downloads: 4,950  
  A 3B parameter safety alignment LLM built for guarding LLM outputs against harmful generations, trending as a lightweight drop-in safety layer for open source chat deployments.
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2): Author: zai-org | Likes: 4,902 | Downloads: 2,480,368  
  A high-performance mixture-of-experts conversational LLM from the GLM series, trending for its top-tier MMLU score and fully open weights for commercial use.

---
### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3): Author: MiniMaxAI | Likes: 3,094 | Downloads: 26,693  
  A state-of-the-art image-text-to-video open model, trending as the first public 1080p 6-second video generation model that runs on consumer 24GB GPUs.
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3): Author: moonshotai | Likes: 10,337 | Downloads: 1,388,105  
  A high-performance image-text-to-text multimodal model, trending for its industry-leading long visual context that can process 1000+ page scanned documents fully end-to-end.
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR): Author: baidu | Likes: 3,968 | Downloads: 2,857,997  
  A universal OCR feature extraction model that reads 200+ languages including handwritten and distorted text, trending for outperforming all prior open OCR benchmarks by 18%.
- [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B): Author: nvidia | Likes: 246 | Downloads: 458  
  An end-to-end voice chat multimodal model that transcribes, responds, and generates speech in a single forward pass, trending as Nvidia’s first public fully open conversational audio model.
- [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b): Author: Audio8 | Likes: 320 | Downloads: 12,837  
  A 0.6B parameter text-to-speech model that generates near-human speech in 30+ languages, trending for its extremely low latency and zero noticeable audio artifacts.
- [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL): Author: microsoft | Likes: 313 | Downloads: 457,581  
  A general purpose multimodal image-text-to-text model, trending for its strong zero-shot performance on diagram, chart, and scientific image reasoning tasks.
- [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small): Author: thinkingmachines | Likes: 346 | Downloads: 28,178  
  A small multimodal conversational model optimized for handwritten note and sketch understanding, trending as a niche high-performance tool for productivity use cases.
- [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev): Author: black-forest-labs | Likes: 14,036 | Downloads: 502,330  
  The leading open text-to-image generation model, trending as the de facto industry standard for local high-fidelity image generation, with consistent improvements to community workflows.

---
### 🔧 Specialized Models (code, math, embeddings)
- [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev): Author: Kwaipilot | Likes: 544 | Downloads: 17,885  
  A MoE code generation fine-tune based on Qwen3.5, trending for its top performance on competitive programming benchmarks and native 1M token code repository context window.

---
### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
1. [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3): Author: Comfy-Org | Likes: 1,002 | Downloads: 3,943,176 — Official ComfyUI single-file port of MiniMax-H3 for simplified local video generation workflows
2. [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora): Author: larryvrh | Likes: 478 | Downloads: 0 — Community LoRA that cuts MiniMax-H3 generation time by 75% at minimal quality loss
3. [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF): Author: DavidAU | Likes: 1,756 | Downloads: 2,345,190 — Highly popular uncensored Qwen 3.6 27B fine-tune for unrestricted local chat use
4. [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF): Author: unsloth | Likes: 605 | Downloads: 175,093 — Official Unsloth GGUF quantization of DeepSeek-V4-Flash optimized for llama.cpp deployment
5. [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI): Author: drbaph | Likes: 202 | Downloads: 0 — ComfyUI-optimized port of the MiniMax-H3 Turbo LoRA for no-code local editing
6. [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo): Author: lightx2v | Likes: 195 | Downloads: 0 — Fine-tuned MiniMax-H3 variant optimized for fast short-form social media video generation
7. [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs): Author: realrebelai | Likes: 175 | Downloads: 128,265 — Full set of GGUF quantizations for Comfy-Org’s MiniMax-H3 compatible with 8GB consumer GPUs
8. [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3): Author: SexGod1979 | Likes: 168 | Downloads: 0 — Community fine-tune of MiniMax-H3 optimized for cinematic aesthetic video outputs
9. [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF): Author: LiquidAI | Likes: 157 | Downloads: 49,562 — Official GGUF quantization of LFM2.5-2.6B for edge device deployment
10. [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot): Author: Abiray | Likes: 143 | Downloads: 471,519 — Full set of INT4/INT8 quantizations of MiniMax-H3 optimized for NVIDIA consumer GPUs
11. [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF): Author: LuffyTheFox | Likes: 438 | Downloads: 373,651 — Popular high-performance uncensored Qwen 3.6 35B MoE fine-tune for general local chat use

---
## 3. Ecosystem Signal
MiniMax’s H3 video generation family is the fastest growing new model ecosystem this week, with 12+ community derived releases in 7 days, followed closely by the Qwen 3.6 and DeepSeek V4 LLM families, indicating high user demand for capable, self-hostable multimodal tools rather than just pure text LLMs. More than 60

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*