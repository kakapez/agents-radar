# Hugging Face Trending Models Digest 2026-08-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-15 22:20 UTC

---

# Hugging Face Trending Models Digest | 2026-08-16
---
## 1. Today's Highlights
As of this weekly tracking period, the newly released moonshotai/Kimi-K3 has overtaken Qwen’s flagship visual language model to claim the top spot for weekly likes, signaling rapidly growing user enthusiasm for the Moonshot open model line. 7 of the 30 trending models are tied to MiniMax’s text-to-video H3 family, reflecting exploding mainstream demand for accessible, open video generation tools. Community quantization teams including Unsloth continue to deliver optimized, edge-deployable model variants that regularly earn 6- to 7-figure download counts far outpacing original base model uptake. Uncensored community fine-tunes are also seeing outsized traction, with one 711-parameter Qwen fine-tune accumulating nearly 3 million downloads in its first week on the hub.

## 2. Trending Models (Organized by Category)
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3): Author: moonshotai | Likes: 10,721 | Downloads: 2,100,680
  A state-of-the-art open multimodal language model that combines top-tier reasoning, feature extraction, and fast inference, trending as the highest-rated new LLM release of the month.
- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B): Author: Qwen | Likes: 9,749 | Downloads: 91,917
  Qwen’s latest 27B visual language flagship, trending for its near-closed-model level conversational and visual reasoning performance.
- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731): Author: deepseek-ai | Likes: 3,418 | Downloads: 1,798,247
  A fast, optimized variant of DeepSeek’s V4 large language model, trending for its sub-100ms latency on consumer GPUs for general chat use cases.
- [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813): Author: deepseek-ai | Likes: 487 | Downloads: 19,945
  The latest high-performance full DeepSeek V4 release, trending among enterprise teams for its 1M+ token context window.
- [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B): Author: Qwen | Likes: 965 | Downloads: 6,381
  A 2.4 trillion parameter mixture-of-experts language model, the largest open LLM ever released, trending for frontier LLM research use cases.
- [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4): Author: nvidia | Likes: 270 | Downloads: 170,554
  Nvidia’s highly optimized 30B reasoning LLM, trending for native performance on NVIDIA consumer and data center GPUs.
- [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16): Author: nvidia | Likes: 149 | Downloads: 62,965
  The full-precision BF16 variant of Nvidia’s new Nemotron 3.5 LLM, trending for fine-tuning pipelines.
- [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B): Author: LiquidAI | Likes: 627 | Downloads: 135,448
  An ultra-small 2.6B parameter lightweight LLM, trending for on-device deployment on mobile and embedded hardware.
- [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8): Author: Qwen | Likes: 193 | Downloads: 10,745
  The FP8 quantized release of Qwen’s 2.4T MoE LLM, trending for cost-effective inference testing.
- [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny): Author: inclusionAI | Likes: 255 | Downloads: 4,832
  A MIT-licensed tiny hybrid LLM, trending for open source project prototyping without licensing restrictions.
- [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev): Author: dots-studio | Likes: 160 | Downloads: 240
  A note-taking specialized small LLM, trending for local personal productivity workflows.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3): Author: MiniMaxAI | Likes: 3,971 | Downloads: 2,212,155
  The flagship open text-to-video model, trending as the industry standard base for custom video generation fine-tunes.
- [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B): Author: meta-models | Likes: 1,572 | Downloads: 246,454
  Meta’s 30B multimodal conversational model, trending for its long visual context window for document processing.
- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5): Author: Lightricks | Likes: 936 | Downloads: 378,439
  A multi-functional video generation model supporting image-to-video, text-to-video and video-to-video workflows, trending for short-form content creation.
- [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3): Author: MiniMaxAI | Likes: 766 | Downloads: 5,079
  A state-of-the-art text-to-music generation model, trending for producing full 3-minute high-fidelity audio tracks from prompts.
- [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo): Author: lightx2v | Likes: 513 | Downloads: 211,917
  A community speed-optimized fork of MiniMax-H3, trending for 1-second video generation on mid-tier GPUs.
- [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora): Author: larryvrh | Likes: 756 | Downloads: 0
  A new low-rank adaptation for MiniMax-H3 that cuts generation latency by 75%, trending for community testing.
- [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA): Author: fal | Likes: 192 | Downloads: 12,737
  A fine-tune LoRA for MiniMax-H3 that produces photorealistic human subjects, trending for commercial video production use cases.
- [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B): Author: Gazingstars123 | Likes: 186 | Downloads: 16,829
  A diffusion-based text-to-image model optimized for anime art styles, trending in the generative art community.
- [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3): Author: SexGod1979 | Likes: 330 | Downloads: 633
  A community fine-tune of MiniMax-H3 for stylized cinematic video output, trending for indie creative workflows.
- [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B): Author: LiquidAI | Likes: 142 | Downloads: 4,598
  An ultra-lightweight 3B parameter visual language model, trending for on-device camera and image analysis use cases.
- [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8): Author: Qwen | Likes: 421 | Downloads: 123,157
  FP8 quantized variant of Qwen’s 3.8-27B visual language model, trending for easy local deployment.

### 🔧 Specialized Models
- [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3): Author: Comfy-Org | Likes: 1,345 | Downloads: 12,790,850
  A ComfyUI-native repackage of MiniMax-H3 optimized for no-code video generation pipelines, it is the single most downloaded model on the hub this week.
- [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy): Author: Kijai | Likes: 352 | Downloads: 0
  A community-maintained ComfyUI build of MiniMax-H3 with custom node support, trending for power user video generation workflows.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF): Author: unsloth | Likes: 1,199 | Downloads: 867,963
  A fully quantized GGUF release of Qwen’s 27B VL model, trending for local inference on consumer CPU and GPU hardware.
- [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF): Author: unsloth | Likes: 432 | Downloads: 682,188
  GGUF quantized release of Meta’s Muse-Glimmer 30B multimodal model, trending for fast local document processing.
- [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF): Author: meta-models | Likes: 277 | Downloads: 321,049
  Official GGUF release of Muse-Glimmer-30B from Meta, trending for production edge deployment.
- [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*