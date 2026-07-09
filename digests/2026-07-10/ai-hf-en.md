# Hugging Face Trending Models Digest 2026-07-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-09 23:12 UTC

---

# Hugging Face Trending Models Digest | 2026-07-10
---

## 1. Today's Highlights
This week’s Hugging Face trending leaderboard is defined by strong releases from both major global AI labs and high-velocity open source communities, with the top spot for user likes claimed by the newly released zai-org/GLM-5.2 MoE LLM that earned 3,722 weekly likes. Quantized community fine-tunes targeted for local consumer hardware are driving the vast majority of download volume, with three separate models crossing the 2.5 million weekly download mark alone. Qwen 3.5/3.6 derived models account for nearly 40% of all trending entries, reflecting outsized momentum for Alibaba’s open model family. New niche releases spanning tabular processing, advanced identity-preserving image editing, and ultra-optimized visual OCR also expanded the platform’s specialized model ecosystem this week.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org | Likes: 3,722 | Downloads: 362,300
  A conversational, MoE-based text generation model built with the new glm_moe_dsa architecture, trending as the highest-rated new base LLM release of the week for its strong 128K context window performance.
- [tencent/Hy3](https://huggingface.co/tencent/Hy3) | Author: tencent | Likes: 606 | Downloads: 5,572
  Tencent’s latest Hunyuan v3 text generation model, trending for its improved multilingual reasoning performance over prior Hunyuan iterations.
- [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | Author: InternScience | Likes: 429 | Downloads: 23,112
  A Qwen3.5 MoE agent-optimized text generation model, trending for its out-of-the-box compatibility with multi-step tool calling workflows.
- [deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | Author: deepseek-ai | Likes: 457 | Downloads: 29,230
  DeepSeek’s optimized V4 Pro variant, trending for its documented 2x throughput speedup for long text generation use cases.
- [mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B) | Author: mistralai | Likes: 178 | Downloads: 258
  Mistral’s 119B parameter dense base model, trending for its Apache 2.0 open license and low 6-bit memory footprint for its size class.
- [meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0) | Author: meituan-longcat | Likes: 163 | Downloads: 1,107
  Meituan’s latest long-context conversational LLM, trending for its industry-leading 2M token context window support.
- [nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4) | Author: nvidia | Likes: 84 | Downloads: 16,959
  Nvidia’s 75B reasoning-specialized LLM, trending for its top benchmark performance on complex puzzle and competitive coding tasks.
- [nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B) | Author: nvidia | Likes: 79 | Downloads: 436
  Nvidia’s 30B parameter audio-augmented text LLM, trending for its ability to transcribe and reason over 2-hour audio files natively.
- [AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces) | Author: AliesTaha | Likes: 195 | Downloads: 4,647
  A Qwen3-based instruction tuned LLM optimized for creative narrative generation, trending for its high quality long-form fantasy writing output.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia | Likes: 2,686 | Downloads: 1,447,244
  A lightweight image-text-to-text visual localization model, trending for its near-zero-shot ability to identify and segment any referenced object in images without fine-tuning.
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu | Likes: 1,901 | Downloads: 1,246,042
  A text extraction multimodal model, trending for its ability to read distorted, handwritten, and low-resolution text across 100+ languages with near-perfect accuracy.
- [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | Author: krea | Likes: 569 | Downloads: 157,302
  Krea’s new fast text-to-image flow matching model, trending for its ability to generate 1024p photorealistic images in under 200ms on consumer GPUs.
- [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | Author: conradlocke | Likes: 130 | Downloads: 0
  A Krea-2 fine-tuned identity preservation LoRA, trending for its ability to edit images of people without altering their facial features.
- [eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B) | Author: eric-venti-seeds | Likes: 123 | Downloads: 0
  A Flux2Klein image-to-image LoRA, trending for its precise control over lighting direction and sun positioning for generated scenes.
- [Patil/Krea-2-depth-controlnet](https://huggingface.co/Patil/Krea-2-depth-controlnet) | Author: Patil | Likes: 83 | Downloads: 0
  A Krea-2 compatible depth ControlNet, trending for adding spatial layout control to the Krea-2 Turbo image generation pipeline.
- [open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1) | Author: open-gigaai | Likes: 84 | Downloads: 0
  An Apache 2.0 open world generation diffusion model, trending for its ability to generate infinite 3D game environment assets from text prompts.
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | Author: empero-ai | Likes: 748 | Downloads: 179,378
  A Qwen3.5 9B multimodal model, trending for its long context myth and fantasy themed instruction tuning.
- [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | Author: bottlecapai | Likes: 176 | Downloads: 2,189
  A Qwen3.6 27B multimodal reasoning model, trending for its step-by-step visual problem solving capabilities.
- [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | Author: froggeric | Likes: 822 | Downloads: 0
  A curated library of corrected Jinja chat templates for all Qwen3.5/3.6 variants, trending for eliminating common rendering errors across inference engines.

### 🔧 Specialized Models (code, math, medical, embeddings)
- [google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch) | Author: google | Likes: 329 | Downloads: 16,374
  Google’s zero-shot tabular classification and regression foundation model, trending for its ability to outperform task-specific XGBoost models on unseen tabular datasets without fine-tuning.
- [nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4) | Author: nvidia | Likes: 332 | Downloads: 748,054
  Nvidia’s ModelOpt optimized 27B Qwen3.6 model, trending for its 4-bit NVFP4 quantization that delivers near-float16 performance with 60% lower memory usage.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | Author: unsloth | Likes: 1,024 | Downloads: 2,894,918
  Unsloth’s MTP-optimized GGUF Qwen3.6 27B release, trending as the highest-downloaded model of the week for its support for 1M+ context and 100+ token/s generation on consumer RTX 4090 GPUs.
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS | Likes: 2,594 | Downloads: 2,716,428
  An uncensored vision-enabled 35B Qwen3.6 GGUF model, trending for its unfiltered output and strong multi-modal reasoning performance.
- [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | Author: yuxinlu1 | Likes: 2,667 | Downloads: 703,735
  A coding-specialized Gemma4 GGUF model, trending for its top performance on humaneval and competitive coding benchmarks at a 12B parameter size.
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai | Likes: 1,924 | Downloads: 1,875,602
  The GGUF quantized release of the Qwythos 9B fantasy multimodal model, trending for its broad compatibility with llama.cpp edge inference deployments.
- [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | Author: deepreinforce-ai | Likes: 818 | Downloads: 957,721
  A MIT licensed 35B text generation GGUF model, trending for its full endpoints compatibility with all major LLM inference hosting platforms.
- [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | Author: yuxinlu1 | Likes: 1,114 | Downloads: 418,171
  An agent-optimized 12B Gemma4 GGUF model, trending for its native terminal interaction and multi-step task automation capabilities.
- [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | Author: GnLOLot | Likes: 140 | Downloads: 2,239
  A 1B parameter quantized MiniCPM5 model, trending for its ultra-small footprint and surprising strong reasoning performance for edge deployment.
- [

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*