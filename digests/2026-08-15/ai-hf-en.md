# Hugging Face Trending Models Digest 2026-08-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-14 22:21 UTC

---

# Hugging Face Trending Models Digest | 2026-08-15
---
## 1. Today's Highlights
As of August 15 2026, Hugging Face weekly trending rankings are led by two blockbuster flagship multimodal releases: Moonshot AI’s Kimi-K3 and Alibaba’s Qwen3.8-27B, which secured 10,666 and 8,863 weekly likes respectively to top the overall chart. The single most dominant ecosystem trend this week is the explosion of derivative models built on MiniMax AI’s open text-to-video MiniMax-H3 base, which accounts for nearly a third of all entries in the trending top 30. DeepSeek’s latest V4 generation of text models continue to see massive production adoption, with the Flash variant crossing 1.6 million weekly downloads. Community quantization and fine-tuning workflows have also matured to the point that official flagship models get usable consumer-hardware-ready GGUF/FP8 ports within 72 hours of their public release.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | Author: moonshotai | Likes: 10,666 | Downloads: 1,974,635
  This new flagship multimodal chat model is the highest-liked release of the week, optimized for long-context visual and text reasoning with compressed tensor support for efficient deployment.
- [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Author: Qwen | Likes: 909 | Downloads: 3,832
  A 2.4 trillion parameter MoE text-only conversational model, the largest open-weight LLM from Qwen to date, trending for its state-of-the-art reasoning benchmark performance.
- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | Author: deepseek-ai | Likes: 3,378 | Downloads: 1,606,491
  An optimized low-latency variant of DeepSeek’s V4 LLM, trending as the leading open model for enterprise conversational workload deployments.
- [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | Author: deepseek-ai | Likes: 429 | Downloads: 245
  A newly released high-precision full-weight variant of the DeepSeek V4 line, trending for early access from enterprise developers testing its top-tier reasoning capabilities.
- [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | Author: LiquidAI | Likes: 614 | Downloads: 124,172
  An ultra-small 2.6B parameter lightweight LLM optimized for edge device deployment, trending for its exceptional performance-to-size ratio.
- [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | Author: nvidia | Likes: 257 | Downloads: 119,572
  A 30B parameter FP4 quantized text generation model from NVIDIA, trending for its hardware-native acceleration on consumer RTX GPUs.
- [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | Author: nvidia | Likes: 141 | Downloads: 34,137
  A full BF16 weight release of NVIDIA’s 30B Nemotron LLM, trending for its zero-degradation performance for high-end inference deployments.
- [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | Author: inclusionAI | Likes: 231 | Downloads: 2,283
  A MIT-licensed lightweight hybrid reasoning LLM, trending for its unrestricted commercial use terms.
- [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | Author: dots-studio | Likes: 134 | Downloads: 11
  A newly released experimental note-taking optimized LLM, trending for early user testing.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Author: Qwen | Likes: 8,863 | Downloads: 2
  The top-2 overall trending flagship image-text-to-text conversational model from Qwen, newly released this week, with very early access limited to core developers.
- [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | Author: meta-models | Likes: 1,507 | Downloads: 165,300
  Meta’s open 30B multimodal conversational model, trending for its strong visual reasoning and open license for commercial use.
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | Author: MiniMaxAI | Likes: 3,916 | Downloads: 1,997,541
  A state-of-the-art open image/text-to-video generation model, the most widely adopted open video model on the platform to date.
- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Author: Lightricks | Likes: 847 | Downloads: 207,830
  A multi-capability video diffusion model supporting text-to-video, image-to-video and video-to-video transformations, trending for its high 4K output quality.
- [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | Author: MiniMaxAI | Likes: 644 | Downloads: 63
  A newly released text-to-music generation model supporting 10-minute high-fidelity audio outputs, trending for early access evaluation.
- [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Author: Gazingstars123 | Likes: 158 | Downloads: 10,106
  A lightweight ComfyUI-optimized text-to-image diffusion model, trending for its fast local inference speeds.

### 🔧 Specialized Models
- [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | Author: nvidia | Likes: 380 | Downloads: 1,366
  A specialized speech-optimized 11B model for real-time voice conversational use cases, backed by peer-reviewed published research.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | Author: unsloth | Likes: 730 | Downloads: 0
  Unsloth’s official GGUF quantized port of the Qwen 3.8-27B multimodal model, trending ahead of its public download release for local hardware deployment.
- [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | Author: unsloth | Likes: 414 | Downloads: 596,774
  A community GGUF port of Meta’s Muse-Glimmer 30B multimodal model, trending for its ability to run the 30B model on 16GB consumer GPUs.
- [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Author: Comfy-Org | Likes: 1,316 | Downloads: 11,768,622
  An official ComfyUI single-file distribution port of the MiniMax-H3 video model, the highest-downloaded model on this week’s trending list.
- [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | Author: lightx2v | Likes: 493 | Downloads:

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*