# Hugging Face Trending Models Digest 2026-08-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-17 22:23 UTC

---

# Hugging Face Trending Models Digest | 2026-08-18
---
## 1. Today's Highlights
This week’s Hugging Face trending leaderboard sees a landmark upset as Moonshot AI’s newly released open-weight Kimi-K3 multimodal LLM overtakes Alibaba Qwen’s flagship Qwen3.8-27B to claim the top spot by weekly likes, with over 10,800 upvotes from the developer community. Generative video tools dominated overall download counts, with the ComfyUI-optimized port of MiniMax’s H3 video generation model crossing 14 million downloads to become the most pulled asset on the platform this period. Qwen’s new 3.8 model family remains the most widely adapted base LLM ecosystem, with dozens of community quantizations and uncensored fine-tunes driving massive downstream adoption. Local deployment-focused GGUF and FP8 quantizations continue to see rapid growth, as developers prioritize running state-of-the-art models on consumer hardware without cloud dependency.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **Qwen/Qwen3.8-2.4T-A95B** <https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B> | Author: Qwen, Likes: 1,040, Downloads: 9,465
  This 2.4 trillion parameter MoE conversational text generation model is the largest publicly released Qwen 3.5 variant, trending for its industry-leading performance on complex reasoning and long-context tasks.
- **deepseek-ai/DeepSeek-V4-Pro-0813** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813> | Author: deepseek-ai, Likes: 572, Downloads: 25,006
  The latest professional iteration of DeepSeek’s V4 LLM, released mid-August, is trending for its improved code generation and low hallucination rates for enterprise use cases.
- **deepseek-ai/DeepSeek-V4-Flash-0731** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731> | Author: deepseek-ai, Likes: 3,496, Downloads: 1,978,298
  The optimized, fast-inference DeepSeek V4 Flash variant surged to top LLM download charts this week, optimized for sub-100ms token generation speeds for real-time chat applications.
- **nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4** <https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4> | Author: nvidia, Likes: 307, Downloads: 231,271
  Nvidia’s new lightweight 30B class LLM, quantized to NVFP4 for native hardware acceleration on consumer RTX 40/50 series GPUs, is trending for its near-top-tier performance at tiny memory footprints.
- **Qwen/Qwen3.8-2.4T-A95B-FP8** <https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8> | Author: Qwen, Likes: 219, Downloads: 12,295
  The 8-bit quantized release of Qwen’s massive 2.4T MoE model, enabling the flagship MoE to run on single server A100 GPUs without distributed deployment, is popular among large LLM research teams.
- **nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16** <https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16> | Author: nvidia, Likes: 168, Downloads: 69,833
  The full-precision BF16 base variant of Nvidia’s Nemotron 3.5 Lightning LLM, used as a base for custom fine-tuning across the ecosystem.
- **inclusionAI/Ling-3.0-tiny** <https://huggingface.co/inclusionAI/Ling-3.0-tiny> | Author: inclusionAI, Likes: 301, Downloads: 6,266
  A MIT-licensed tiny 7B class hybrid LLM, trending for its fully permissive license that allows unencumbered commercial use for small business applications.
- **dots-studio/dots3-note-prev** <https://huggingface.co/dots-studio/dots3-note-prev> | Author: dots-studio, Likes: 205, Downloads: 633
  A specialized LLM optimized for personal note-taking and meeting transcription, trending among productivity tool developers.
- **LiquidAI/LFM2.5-2.6B** <https://huggingface.co/LiquidAI/LFM2.5-2.6B> | Author: LiquidAI, Likes: 653, Downloads: 147,270
  A ultra-small 2.6B parameter state-of-the-art text generation model that outperforms many 70B class LLMs on common benchmarks, popular for edge device deployment.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **Qwen/Qwen3.8-27B** <https://huggingface.co/Qwen/Qwen3.8-27B> | Author: Qwen, Likes: 10,690, Downloads: 415,039
  Qwen’s flagship 27B multimodal vision-language model, ranking second overall in weekly likes, is the most widely deployed open VL model for general purpose conversational multimodal tasks.
- **Lightricks/LTX-2.5** <https://huggingface.co/Lightricks/LTX-2.5> | Author: Lightricks, Likes: 1,101, Downloads: 465,529
  A popular all-in-one image-to-video, text-to-video, and video-to-video diffusion model, trending for its 4K 60fps generation capability that matches closed commercial generative video tools.
- **meta-models/Muse-Glimmer-30B** <https://huggingface.co/meta-models/Muse-Glimmer-30B> | Author: meta-models, Likes: 1,660, Downloads: 334,099
  Meta’s new 30B multimodal conversational VL model, trending for its industry-leading long video understanding capability for up to 1 hour of footage.
- **MiniMaxAI/MiniMax-Music3** <https://huggingface.co/MiniMaxAI/MiniMax-Music3> | Author: MiniMaxAI, Likes: 900, Downloads: 10,375
  A state-of-the-art open text-to-music generation model that produces full 3-minute master-quality tracks from natural language prompts.
- **MiniMaxAI/MiniMax-H3** <https://huggingface.co/MiniMaxAI/MiniMax-H3> | Author: MiniMaxAI, Likes: 4,086, Downloads: 2,403,238
  MiniMax’s flagship text-to-video generation model, widely regarded as the best performing open generative video model released to date.
- **lightx2v/Minimax-h3-Turbo** <https://huggingface.co/lightx2v/Minimax-h3-Turbo> | Author: lightx2v, Likes: 583, Downloads: 264,351
  A community fine-tuned turbo variant of MiniMax H3 that cuts generation time by 70% for 5-second clips, popular for real-time video generation use cases.
- **Comfy-Org/MiniMax-H3** <https://huggingface.co/Comfy-Org/MiniMax-H3> | Author: Comfy-Org, Likes: 1,402, Downloads: 14,015,769
  A single-file diffusion-single-file port of MiniMax H3 fully optimized for native ComfyUI deployment, the highest-downloaded asset on the platform this period.
- **Gazingstars123/Anima-2.9B** <https://huggingface.co/Gazingstars123/Anima-2.9B> | Author: Gazingstars123, Likes: 233, Downloads: 23,202
  A tiny 2.9B class text-to-image model that produces photorealistic 1024px outputs, trending for its ultra-fast generation on consumer GPUs.
- **fal/MiniMax-H3-Realism-People-LoRA** <https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA> | Author: fal, Likes: 242, Downloads: 18,562
  A dedicated LoRA for MiniMax H3 that eliminates common artifacts when generating realistic human characters in video outputs.
- **Comfy-Org/MiniMax-Music-3** <https://huggingface.co/Comfy-Org/MiniMax-Music-3> | Author: Comfy-Org, Likes: 166, Downloads: 256,988
  An Apache 2.0 licensed single-file ComfyUI port of MiniMax-Music3 optimized for local music generation workflows.
- **larryvrh/MiniMax-H3-Turbo-Lora** <https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora> | Author: larryvrh, Likes: 786, Downloads: 0
  A high-performance LoRA that adds 10-second high-fidelity video generation capability to the H3 Turbo base model.
- **LiquidAI/LFM2.5-VL-3B** <https://huggingface.co/LiquidAI/LFM2.5-VL-3B> | Author: LiquidAI, Likes: 162, Downloads: 6,816
  A ultra-lightweight 3B parameter vision-language model optimized for edge camera and robotics use cases.
- **moonshotai/Kimi-K3** <https://huggingface.co/moonshotai/Kimi-K3> | Author: moonshotai, Likes: 10,800, Downloads: 2,163,953
  The top trending model of the week, a state-of-the-art 30B class multimodal VL model with industry leading 10M token context window and zero shot multimodal reasoning performance.

### 🔧 Specialized Models
- **froggeric/Qwen-Fixed-Chat-Templates** <https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates> | Author: froggeric, Likes: 1,206, Downloads: 0
  A widely adopted community resource that fixes broken Jinja chat templates across all Qwen 3.5 model variants, eliminating common generation errors for developers deploying Qwen models.

### 📦 Fine-tunes & Quantizations
- **unsloth/Qwen3.8-27B-GGUF** <https://huggingface.co/unsloth/Qwen3.8-27B-GGUF> | Author: unsloth, Likes: 1,622, Downloads: 2,727,609
  Unsloth’s optimized GGUF quantized port of Qwen3.8-27B, compatible with llama.cpp and all local LLM deployment tools, one of the highest downloaded models of the week.
- **Qwen/Qwen3.8-27B-FP8** <https://huggingface.co/Qwen/Qwen3.8-27B-FP8> | Author: Qwen, Likes: 526, Downloads: 495,646
  Official 8-bit floating point quantized release of Qwen’s 3.8-27B VL model, optimized for near-lossless inference on NVIDIA and AMD

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*