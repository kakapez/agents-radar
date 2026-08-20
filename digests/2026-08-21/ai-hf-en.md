# Hugging Face Trending Models Digest 2026-08-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-20 22:27 UTC

---

# Hugging Face Trending Models Digest | 2026-08-21
---
## 1. Today's Highlights
This week’s Hugging Face trending charts are dominated by flagship releases from leading Chinese AI labs, with two >10k like multi-modal models (Qwen’s Qwen3.8-27B and Moonshot AI’s Kimi-K3) taking the top two spots by a wide margin. The Qwen3.8-27B base ecosystem is the clear breakout star of the week, with over half the 30 trending models being directly derived from it, ranging from official optimized variants to community fine-tunes and quantizations. Open-weight generative media models also saw sharp growth, with new state-of-the-art text-to-video and text-to-audio releases from MiniMax and Lightricks hitting top 10 positions. Community demand for unrestricted, alignment-free uncensored large language model variants is at an all-time high, with dozens of abliterated fine-tunes earning hundreds of thousands of combined downloads this week.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**: Author: moonshotai | Likes: 10,883 | Downloads: 2,349,853. The official open-weight flagship conversational LLM from Moonshot AI, trending for its near-closed-model performance and optimized compressed tensor inference support.
- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**: Author: deepseek-ai | Likes: 3,575 | Downloads: 2,547,549. DeepSeek’s fast inference optimized V4 release, trending for its sub-100ms token generation speed for long context enterprise chat use cases.
- **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)**: Author: deepseek-ai | Likes: 677 | Downloads: 43,287. The latest high-performance DeepSeek V4 iteration released mid-August, trending for its improved reasoning and coding benchmarks.
- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**: Author: Qwen | Likes: 1,120 | Downloads: 14,592. Qwen’s new 2.4T parameter Mixture-of-Experts text-only LLM, trending as one of the largest open-weight conversational models ever released.
- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)**: Author: ornith-ai | Likes: 209 | Downloads: 1,713. A 35B Qwen3.5-derived MoE LLM, trending for its competitive performance on edge consumer GPU hardware.
- **[dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev)**: Author: dots-studio | Likes: 242 | Downloads: 1,373. A specialized note-taking focused LLM, trending for its 1M+ token native context window optimized for personal knowledge management.
- **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)**: Author: z-lab | Likes: 151 | Downloads: 12,235. A Qwen3.8 variant optimized for deep speculative decoding, trending for its 2x faster generation speed on consumer hardware.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: Author: Qwen | Likes: 11,728 | Downloads: 1,373,584. Qwen’s flagship 27B multimodal image-text-to-text model, trending for its state-of-the-art multimodal reasoning and zero-shot conversational performance.
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**: Author: MiniMaxAI | Likes: 4,236 | Downloads: 3,308,673. A leading open text-to-video and image-to-video generation model, trending for its 10-second 4K output capability that closes the gap with closed commercial video generation tools.
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: Author: Lightricks | Likes: 1,410 | Downloads: 611,825. A diffusion-based image-to-video model, trending for its single-file weight distribution that requires no complex dependency setup.
- **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**: Author: meta-models | Likes: 1,718 | Downloads: 478,622. A 30B multimodal conversational LLM, trending for its industry-leading long visual context support for 100+ page document analysis.
- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**: Author: MiniMaxAI | Likes: 1,099 | Downloads: 14,471. A text-to-music generation model, trending for its ability to generate full 3-minute studio quality audio tracks from plain text prompts.
- **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)**: Author: lightx2v | Likes: 649 | Downloads: 380,072. A speed-optimized finetune of MiniMax H3, trending for its 2-second 1080p video generation that cuts inference time by 75%.
- **[TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max)**: Author: TenStrip | Likes: 297 | Downloads: 0. A NSFW-capable unaligned text-to-video finetune of MiniMax H3, trending in community creator circles for its unrestricted generation support.

### 🔧 Specialized Models (utility, supporting tools)
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**: Author: froggeric | Likes: 1,334 | Downloads: 0. A community-maintained repository of corrected Jinja chat templates for all Qwen3 variants, trending for resolving widespread prompt formatting bugs that broke Qwen model generation for thousands of users.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**: Author: unsloth | Likes: 2,349 | Downloads: 5,126,652. The official Unsloth quantized release of Qwen3.8-27B, trending for its near-lossless GGUF format that runs on consumer laptops with 16GB of RAM.
- **[Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)**: Author: Qwen | Likes: 633 | Downloads: 1,517,643. Official FP8 quant of the base Qwen3.8-27B model, trending for its 30% faster inference on NVIDIA RTX 40-series GPUs with zero accuracy loss.
- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)**: Author: orcarouter | Likes: 675 | Downloads: 76,109. An abliterated, alignment-free FP8 Qwen3.8-27B fine-tune, trending for its removal of all built-in refusal guardrails.
- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)**: Author: orcarouter | Likes: 705 | Downloads: 2,628. An MLX-format uncensored Qwen3.8-27B release optimized for Apple Silicon hardware, trending for native fast execution on M-series Macs.
- **[unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4)**: Author: unsloth | Likes: 308 | Downloads: 831,483. A 4-bit NVFP4 quant of Qwen3.8-27B, trending for its ability to run the full model on 8GB consumer GPUs.
- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)**: Author: JonathanColetti | Likes: 510 | Downloads: 979,768. A popular uncensored GGUF Qwen fine-tune with MTP support, trending for its fast generation on llama.cpp stacks.
- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)**: Author: HauhauCS | Likes: 360 | Downloads: 268,258. A multi-token prediction optimized aggressive uncensored GGUF Qwen variant, trending for 4x speedups during local generation.
- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)**: Author: OBLITERATUS | Likes: 247 | Downloads: 4,415. A heavily abliterated alignment-free Qwen variant, trending for zero refusals even on highly sensitive prompts.
- **[empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF)**: Author: empero-ai | Likes: 220 | Downloads: 55,074. A lightweight GGUF Qwen quant, trending for its small file size without major quality degradation.
- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)**: Author: orcarouter | Likes: 237 | Downloads: 52,382. A leading community uncensored GGUF Qwen fine-tune, trending for its consistent generation quality across all quant sizes.
- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)**: Author: huihui-ai | Likes: 199 | Downloads: 187,008. A widely used abliterated GGUF Qwen variant, trending for its near-base-model performance while removing all content guardrails.
- **[0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF)**: Author: 0bserverx | Likes: 187 | Downloads: 326,638. A heavily modified uncensored GGUF Qwen release, trending in local LLM communities for its unrestricted creative use cases.
- **[Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF)**: Author: Blackfrost-A

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*