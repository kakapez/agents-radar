# Hugging Face Trending Models Digest 2026-08-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-23 22:20 UTC

---

# Hugging Face Trending Models Digest (2026-08-24)
---
## 1. Today's Highlights
The week’s top trending models are headlined by two 10k+ weekly-likes flagships: Alibaba’s official open-weight Qwen/Qwen3.8-27B and Moonshot AI’s moonshotai/Kimi-K3, which have already accumulated over 5 million combined total downloads in 7 days. Open-weight text-to-video generation releases from MiniMax and Lightricks have also posted explosive traction, racking up 4.7 million aggregate downloads as creators shift away from closed video generation APIs. Over 60% of all trending entries are community-derived variants of the popular Qwen 3.8-27B backbone, reflecting massive developer appetite to run state-of-the-art multimodal LLMs locally. DeepSeek’s latest V4 Flash and Pro text generation variants also hold strong top-tier ranks, serving as the go-to choice for power users building low-latency production conversational agents.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B): Author Qwen, Likes 12,302, Downloads 2,358,347. This is the official flagship open-weight 27B multimodal conversational LLM from the Qwen team, trending as the highest-rated new release for its industry-balanced strong visual reasoning and out-of-the-box chat performance.
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3): Author moonshotai, Likes 10,948, Downloads 2,727,920. This is the latest open-weight image-text-to-text model from Kimi developer Moonshot AI, trending for its class-leading 2M+ token long context support and compressed tensor optimizations that cut inference costs by 40% for production deployments.
- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731): Author deepseek-ai, Likes 3,651, Downloads 3,089,709. This is the speed-optimized iteration of DeepSeek’s top-tier V4 text-generation LLM, trending for its sub-100ms token latency at batch size 1 that enables smooth real-time chat on consumer GPUs.
- [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813): Author deepseek-ai, Likes 733, Downloads 57,928. This is the mid-August updated high-performance Pro variant of DeepSeek V4, trending for its expanded 1M token context window and 12% higher math reasoning accuracy than earlier V4 releases.
- [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B): Author ornith-ai, Likes 361, Downloads 23,516. This is a 35B parameter Qwen3.5-MoE derived text generation LLM, trending for its 32% smaller inference footprint than equivalent dense 70B models.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3): Author MiniMaxAI, Likes 4,375, Downloads 4,039,236. This is MiniMax’s state-of-the-art open image-text-to-video generation model, trending for its ability to output artifact-free 4K 60fps 10-second clips from text prompts or reference input images.
- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5): Author Lightricks, Likes 1,637, Downloads 738,345. This is the single-file diffusion-powered text-to-video and image-to-video model from Lightricks, trending for its 7GB footprint that runs seamlessly on consumer RTX 3090 GPUs without VRAM offloading.
- [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3): Author MiniMaxAI, Likes 1,205, Downloads 17,421. This is MiniMax’s leading open text-to-music generation model, trending for its ability to produce 3-minute full-length high-fidelity multi-track audio fully aligned to natural language prompts.
- [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler): Author LBH-123-AI, Likes 166, Downloads 0. This is a community-built dedicated latent upscaler for MiniMax-H3 generated videos, trending for its 2x resolution upscaling that preserves fine-grained generation details without introducing visual glitches.

### 🔧 Specialized Models
- [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates): Author froggeric, Likes 1,420, Downloads 0. This is a community-maintained pack of corrected Jinja chat templates for all Qwen 3.5 variants, trending as a critical utility that fixes widespread broken prompt formatting bugs across unofficial third-party fine-tunes.
- [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini): Author superwhisper, Likes 212, Downloads 2,280. This is a 1B parameter lightweight Qwen3-derived model optimized for simultaneous multilingual speech recognition and text generation, trending for its 99% transcription accuracy on noisy real-world audio.
- [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2): Author z-lab, Likes 201, Downloads 36,234. This is a Qwen3.8-27B variant optimized for DFlash2 deep speculative decoding, trending for its 3x faster inference speed on consumer GPUs with no measurable accuracy drop.
- [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2): Author incoai, Likes 162, Downloads 69,783. This is a community-developed alternative DFlash2 optimized Qwen3.8-27B release, trending for its expanded hardware compatibility across both NVIDIA and AMD consumer GPUs.
- [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates): Author peculiar-ragdoll, Likes 198, Downloads 0. This is a set of specialized chat templates for unfiltered Qwen 3.5 fine-tunes, trending for its 15% reduction in false positive prompt injection blocks.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF): Author unsloth, Likes 2,732, Downloads 6,674,515. This is the official Unsloth quantized GGUF release of Qwen/Qwen3.8-27B, trending as the most popular lightweight deployment variant optimized for llama.cpp execution.
- [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8): Author Qwen, Likes 670, Downloads 2,653,678. This is the official 8-bit floating point quantized release of the base Qwen 3.8-27B, trending for its 25% reduced VRAM usage with zero perceptible accuracy loss.
- orcarouter/Qwen3.8-27B-Uncensored-FP8, OBLITERATUS/Qwen3.8-27B-OBLITERATED, [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GG

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*