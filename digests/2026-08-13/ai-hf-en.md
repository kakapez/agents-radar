# Hugging Face Trending Models Digest 2026-08-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-12 22:40 UTC

---

# Hugging Face Trending Models Digest | 2026-08-13
---

## 1. Today's Highlights
This week’s trending Hugging Face models are driven by massive demand for open multimodal and generative video AI, led by moonshotai’s Kimi-K3 which crossed 10,500 weekly likes to become the platform’s fastest rising multimodal LLM. MiniMax’s H3 video generation ecosystem accounts for nearly 40% of all trending entries, with over 12 community derivatives and a combined 7M+ total downloads. Baidu’s open-weight Unlimited-OCR utility outperformed almost all general-purpose LLMs with 4,039 weekly likes, signaling high user demand for practical, production-ready specialized tools. Local-deployment optimized GGUF quantizations by the Unsloth team continue to see disproportionate download volumes, reflecting the community’s growing preference for running state-of-the-art models on consumer hardware.

---

## 2. Trending Models (By Category)
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
1. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
   - Author: deepseek-ai | Likes: 3,229 | Downloads: 1,048,685
   - A fast, conversational 70B-class text generation LLM optimized for low-latency chat and reasoning, trending for its near-GPT-4 level performance at open-weight access.
2. **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**
   - Author: Qwen | Likes: 455 | Downloads: 978
   - An ultra-large 2.4T parameter MoE LLM from the Qwen team, trending as one of the largest publicly released open text generation models.
3. **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)**
   - Author: LiquidAI | Likes: 579 | Downloads: 93,668
   - A lightweight, extremely fast 2.6B parameter text generation model optimized for edge and embedded deployment, trending for its strong performance per parameter.
4. **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)**
   - Author: deepgrove | Likes: 343 | Downloads: 2,049
   - A new preview MoE causal LLM from independent developer team Deepgrove, trending for its novel architecture that cuts inference cost by 60% vs comparable models.
5. **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)**
   - Author: nvidia | Likes: 200 | Downloads: 19,250
   - A quantized 30B reasoning LLM optimized for NVIDIA GPU hardware, trending for its native hardware acceleration and low memory footprint.
6. **[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)**
   - Author: inclusionAI | Likes: 314 | Downloads: 6,148
   - A fast conversational hybrid LLM, trending for its long 1M+ token context window that supports processing full codebases and entire novel texts in a single prompt.

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
   - Author: moonshotai | Likes: 10,577 | Downloads: 1,565,484
   - The highest-liked model this week, a state-of-the-art open image-text-to-text multimodal LLM capable of processing high-resolution images, long documents, and complex visual reasoning tasks.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
   - Author: MiniMaxAI | Likes: 3,705 | Downloads: 83,484
   - The leading open-weight image-text-to-video generation model, trending for its ability to generate 4K 60fps long-form videos with photorealistic consistency that competes with closed commercial video tools.
3. **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**
   - Author: meta-models | Likes: 1,278 | Downloads: 0
   - Meta’s new 30B multimodal conversational image-text-to-text model, trending for its advanced multimodal reasoning and native support for interleaved text and image chat.
4. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
   - Author: Lightricks | Likes: 553 | Downloads: 39
   - A lightweight diffusion single-file text-to-video, image-to-video and video-to-video generation model, trending for its ability to run on consumer 16GB VRAM GPUs with no extra dependencies.

---

### 🔧 Specialized Models (code, math, medical, embeddings)
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - Author: baidu | Likes: 4,039 | Downloads: 2,892,191
   - A production-grade unrestricted OCR model that extracts text from handwritten notes, scanned documents, screenshots, and low-resolution photos with near 100% accuracy, trending as one of the highest-performing open OCR tools ever released.
2. **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)**
   - Author: nvidia | Likes: 349 | Downloads: 653
   - A specialized 11B voice chat model that supports end-to-end spoken conversation with zero text intermediate steps, trending for its zero-latency speech interaction capabilities.

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
1. **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)**
   - Author: unsloth | Likes: 662 | Downloads: 207,990
   - An optimized GGUF quantization of DeepSeek-V4-Flash, trending for its ability to run the 70B-class model on consumer 16GB RAM desktops.
2. **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
   - Author: DavidAU | Likes: 1,951 | Downloads: 2,521,093
   - An uncensored, roleplay-optimized fine-tune of Qwen3.6 27B released as a GGUF, trending as the most popular open conversational model for creative unfiltered use cases.
3. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
   - Author: Comfy-Org | Likes: 1,253 | Downloads: 6,798,796
   - An official ComfyUI-optimized port of MiniMax-H3, trending for its native one-click integration with the leading ComfyUI generative AI workflow platform.
4. **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)**
   - Author: larryvrh | Likes: 694 | Downloads: 0
   - A community LoRA for MiniMax-H3 that cuts video generation speed by 75%, trending for enabling real-time video generation on mid-tier GPUs.

---

## 3. Ecosystem Signal
The MiniMax-H3 video generation family is the clearest growing momentum signal this week, with 12+ related community models, a combined 7.8M total downloads, and widespread LoRA, ComfyUI port, and quantization releases that confirm it has become the de facto open standard for text-to-video generation. All 30 trending models are fully open-weight, with no restricted-access or proprietary API-only releases making the cut, indicating strong user rejection of closed generative AI tools. The Unsloth team’s near-instant GGUF quantizations for every new top base model regularly pull 200k+ downloads, showing that end users prioritize local, consumer-hardware compatible deployment far more than cloud API access. A flourishing LoRA ecosystem around new video models also confirms the open generative community has shifted its primary focus from text generation to video use cases in 2026.

---

## 4. Worth Exploring
1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** – With 10k+ weekly likes, it is the highest performing open multimodal LLM publicly available right now, and is well worth testing for document processing, visual reasoning, and multimodal chat use cases that previously required costly closed commercial APIs.
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – This practical specialized model has 2.9M downloads for good reason, it eliminates almost all common edge cases for OCR workflows and can replace expensive commercial OCR APIs for most production use cases entirely for free.
3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – The leading open text-to-video model has a massive existing community ecosystem of optimized ports, speed LoRAs, and niche fine-tunes for realism, anime, and product generation, making it far more flexible for custom workflows than any closed commercial video generation tool.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*