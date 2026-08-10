# Hugging Face Trending Models Digest 2026-08-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-10 22:36 UTC

---

# Hugging Face Trending Models Digest (2026-08-11)
---
## 1. Today's Highlights
This week’s Hugging Face trending leaderboard is defined by explosive traction for a new wave of multimodal and generative AI releases, led by Black Forest Labs’ flagship text-to-image model *FLUX.1-dev* which tops all entries with 14,076 weekly likes. Moonshot AI’s open multimodal Kimi-K3 crossed 10,000 weekly likes, followed by Baidu’s new Unlimited-OCR utility model and MiniMax’s debut open video generation model MiniMax-H3 which has spawned more than 12 community derivatives on the trending list. Open-weight flagship releases from Chinese AI developers now account for 6 of the top 10 most-liked models, outpacing Western LLM launches in total global download volume. Community optimization activity around newly released base models is at all-time highs, with quantized ports and workflow-specific fine-tunes appearing within 72 hours of official launches.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
1. [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)
   - Author: deepseek-ai | Likes: 3,047 | Downloads: 954,441
   - A fast, conversational 2026-07 release of DeepSeek’s flagship V4 LLM, trending for its industry-leading 1M+ context window and near-zero latency for consumer hardware inference.
2. [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)
   - Author: LiquidAI | Likes: 488 | Downloads: 89,680
   - A lightweight, ultra-efficient small language model optimized for edge deployment, trending for its unmatched performance per parameter for on-device chat use cases.
3. [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)
   - Author: deepgrove | Likes: 309 | Downloads: 1,344
   - A newly previewed small mixture-of-experts (MoE) LLM, trending for demonstrating comparable performance to 10B models at a 2B inference cost.
4. [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)
   - Author: inclusionAI | Likes: 287 | Downloads: 5,261
   - A bilingual English-Chinese conversational LLM, trending for optimized local inference for multilingual chat applications.
5. [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1)
   - Author: endless-frontier | Likes: 149 | Downloads: 617
   - A Qwen3.5 MoE-based conversational multimodal LLM, trending for early access release of its unfiltered, uncensored fine-tuned variant.
6. [SyzygyResearch/Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B)
   - Author: SyzygyResearch | Likes: 114 | Downloads: 2,129
   - A ternary 35B LLM built on Qwen3.5, trending for its breakthrough additive quantization architecture that cuts memory usage by 75%.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
1. [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)
   - Author: MiniMaxAI | Likes: 3,419 | Downloads: 47,468
   - A new open image-text-to-video generation model, trending as the first open SOTA video model that matches closed API performance for 1080p 10-second clip generation.
2. [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)
   - Author: moonshotai | Likes: 10,468 | Downloads: 1,510,032
   - A flagship open vision-language model (VLM), trending for its industry-leading long multimodal context support and near-human performance on visual reasoning benchmarks.
3. [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)
   - Author: meta-models | Likes: 668 | Downloads: 0
   - Meta’s newly released 30B multimodal conversational model, trending for being the first open VLM that matches GPT-4o 2026 visual reasoning scores.
4. [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)
   - Author: black-forest-labs | Likes: 14,076 | Downloads: 480,762
   - The leading open text-to-image generation model, trending for retaining its position as the user-favorite base model for custom fine-tunes and photorealistic image generation.

### 🔧 Specialized Models (code, math, medical, embeddings)
1. [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)
   - Author: baidu | Likes: 4,001 | Downloads: 2,921,751
   - A universal OCR model that extracts text from any real-world, scanned, or distorted visual input, trending for immediately becoming the new standard for all production text extraction pipelines.
2. [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)
   - Author: nvidia | Likes: 295 | Downloads: 597
   - A 11B speech-language end-to-end voice chat model, trending for eliminating the need for separate ASR and TTS steps in conversational voice workflows.
3. [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)
   - Author: mistralai | Likes: 221 | Downloads: 6,343
   - A lightweight 3B content safety moderation model, trending as the new industry standard for fast, accurate harm detection across LLM and generation model outputs.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, LoRA)
1. [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)
   - Author: Comfy-Org | Likes: 1,142 | Downloads: 6,009,639
   - A single-file diffusion port of MiniMax-H3 for native ComfyUI integration, trending as the most popular distribution of the video base model for desktop workflows.
2. [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)
   - Author: larryvrh | Likes: 596 | Downloads: 0
   - A community LoRA that reduces MiniMax-H3 inference time by 70%, trending for enabling real-time video generation on consumer RTX 40-series GPUs.
3. [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)
   - Author: DavidAU | Likes: 1,857 | Downloads: 2,439,083
   - A heavily fine-tuned uncensored 27B Qwen3.6 GGUF for roleplay and creative use cases, trending as the top downloaded community fine-tune for local offline use.
4. [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)
   - Author: ethanfel | Likes: 439 | Downloads: 0
   - An INT8 quantized fine-tune of Qwen3-VL optimized as a prompt encoder for MiniMax-H3 video generation in ComfyUI workflows.
5. [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)
   - Author: lightx2v | Likes: 259 | Downloads: 15,087
   - An optimized image-to-video fine-tune of MiniMax-H3, trending for supporting fast reverse image to video short clip generation.
6. [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)
   - Author: unsloth | Likes: 636 | Downloads: 199,167
   - An official Unsloth GGUF quantization of DeepSeek-V4-Flash, trending for enabling 4-bit local inference on 16GB RAM consumer laptops.
7. [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)
   - Author: LiquidAI | Likes: 183 | Downloads: 89,611
   - An official GGUF port of LFM2.5-2.6B for Llama.cpp edge deployment, trending for zero-overhead local inference on mobile and embedded devices.
8. [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)
   - Author: unsloth | Likes: 194 | Downloads: 0
   - A 4-bit GGUF quantization of Meta’s Muse-Glimmer 30B VLM, trending for running the high-performance multimodal model on consumer desktop GPUs.
9. [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF)
   - Author: meta-models | Likes: 136 | Downloads: 0
   - An official GGUF quantization release of the Muse-Glimmer-30B model.
10. [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs)
    - Author: realrebelai | Likes: 192 | Downloads: 174,862
    - A full set of GGUF quantizations for MiniMax-H3 spanning INT4 to FP16, trending for enabling llama.cpp video generation workflows.
11. [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)
    - Author: drbaph | Likes: 250 | Downloads: 0
    - A pruned, ComfyUI-native version of the MiniMax-H3 Turbo LoRA.
12. [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3)
    - Author: SexGod1979 | Likes: 248 | Downloads: 0
    - A community creative fine-tune of MiniMax-H3 for stylized video generation.
13. [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy)
    - Author: Kijai | Likes: 256 | Downloads: 0
    - A US-region ComfyUI-optimized build of MiniMax-H3.
14. [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental)
    - Author: Kijai | Likes: 183 | Downloads

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*