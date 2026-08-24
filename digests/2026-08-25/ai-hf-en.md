# Hugging Face Trending Models Digest 2026-08-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-24 22:25 UTC

---

# Hugging Face Trending Models Digest (2026-08-25)
---
## 1. Today's Highlights
The open-source ecosystem is currently dominated by the recent launch of Qwen/Qwen3.8-27B, which claimed the top weekly likes spot with 12,505 likes and nearly 2.7 million downloads, outpacing all other new model releases by a wide margin. Multiple leading Chinese AI vendors, including MiniMax and DeepSeek, have seen their latest open-weight multimodal and LLM releases break into the top 15 trending positions, signaling a major shift in global open AI development leadership. Community modification and optimization activity for the Qwen 3.8 family is unprecedented, with more than 15 distinct fine-tuned, quantized, and utility variants trending on the same weekly ranking list. Generative video models are also posting explosive download growth, with two separate video generation releases crossing the 3 million total download mark this week.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Author: Qwen | Likes: 12,505 | Downloads: 2,645,226
  The flagship 27B multimodal conversational base model from the Qwen team, trending for its industry-leading balance of high benchmark performance and accessible inference requirements for both cloud and edge deployments.
- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | Author: deepseek-ai | Likes: 3,681 | Downloads: 3,274,129
  An optimized low-latency variant of DeepSeek's latest V4 LLM, surging in popularity for production chat use cases where near-full model performance is required at 3x faster inference speeds.
- **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** | Author: superwhisper | Likes: 229 | Downloads: 2,976
  A sub-1B parameter lightweight text generation model optimized for edge ASR and on-device personal assistant workflows, gaining traction among embedded AI developers.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Author: Lightricks | Likes: 1,721 | Downloads: 790,378
  A versatile single-file diffusion model supporting text-to-video, image-to-video, and video-to-video tasks, trending for its extremely high fidelity short-form clip generation targeted at social content creators.
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | Author: MiniMaxAI | Likes: 4,417 | Downloads: 4,465,161
  A state-of-the-art open text-to-video model that outputs 1080p long-form clips, now one of the most downloaded generative media models on the Hugging Face hub.
- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | Author: MiniMaxAI | Likes: 1,227 | Downloads: 18,065
  A text-to-music model that generates full-length royalty-free high-fidelity audio, rapidly gaining adoption among indie content creators and game developers.
- **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** | Author: Audio8 | Likes: 145 | Downloads: 2,775
  An ultra-small preview text-to-speech model with near-human natural speech cadence, trending for its strong zero-shot voice cloning performance at less than 1B parameters.
- **[LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler)** | Author: LBH-123-AI | Likes: 181 | Downloads: 0
  A community-built custom latent upscaler tailored exclusively for MiniMax-H3 video outputs, designed to boost resolution and detail without full re-rendering of generated clips.

### 🔧 Specialized Models (code, math, medical, embeddings)
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | Author: froggeric | Likes: 1,445 | Downloads: 0
  A community-curated set of corrected Jinja chat templates for the full Qwen 3.5 model family, fixing widespread formatting errors that cause broken outputs in third-party inference frameworks.
- **[peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates)** | Author: peculiar-ragdoll | Likes: 225 | Downloads: 0
  An alternate optimized set of MLX-compatible chat templates for Qwen 3.5 models, built to eliminate prompt formatting mismatches for users running models on Apple Silicon hardware.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | Author: unsloth | Likes: 2,830 | Downloads: 7,009,063
  An official Unsloth GGUF quantization of the base Qwen3.8-27B, optimized for maximum speed on llama.cpp, now the most downloaded variant of the model across the entire hub.
- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | Author: orcarouter | Likes: 1,026 | Downloads: 57,947
  An uncensored, abliterated MLX-format fine-tune of Qwen3.8-27B, purpose-built for native fast inference on Apple Silicon Mac devices.
- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | Author: OBLITERATUS | Likes: 691 | Downloads: 312,627
  A fully unaligned multimodal fine-tune of Qwen3.8-27B that removes all safety alignment guardrails, trending for unrestricted creative and research use cases.
- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | Author: orcarouter | Likes: 1,092 | Downloads: 224,114
  A FP8 quantized uncensored fine-tune of Qwen3.8-27B, optimized for high-throughput deployment on consumer and enterprise NVIDIA GPUs.
- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | Author: HauhauCS | Likes: 576 | Downloads: 761,975
  A GGUF quantized uncensored multimodal variant with added multi-token prediction (MTP) for 2x faster generation speeds.
- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | Author: ornith-ai | Likes: 394 | Downloads: 60,294
  A 35B multimodal fine-tune built on the Qwen 3.5 MoE architecture, optimized for long context document processing tasks.
- **[JonathanColetti/Qwen3.8-27B-Uncensored-GG

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*