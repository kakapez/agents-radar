# Hugging Face Trending Models Digest 2026-06-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-04 23:09 UTC

---

# Hugging Face Trending Models Digest | 2026-06-05
---
## 1. Today's Highlights
As of June 5, 2026, Hugging Face’s trending model leaderboard is dominated by high-performing open-weight conversational LLMs and next-generation multimodal generation models, led by deepseek-ai’s DeepSeek-V4-Pro which tops weekly likes at 4,628 and counts over 5.6 million weekly downloads. Alibaba’s Qwen 3.6 family sees massive cross-category traction, with both official base models and community fine-tunes/quantizations capturing top spots in likes and downloads. Open-weight video generation has emerged as one of the fastest growing verticals, with multiple new text-to-video and image-to-video releases earning six-figure to multi-million download volumes. NVIDIA also rolled out an expansive 7-model Cosmos 3 omni-generation stack alongside optimization variants for existing popular LLMs, marking a major push for enterprise-grade generative AI deployment at scale.

---
## 2. Trending Models (By Category)
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro): Author: deepseek-ai | Likes: 4,628 | Downloads: 5,687,031 | A state-of-the-art conversational text generation LLM, it is the highest-liked model on the trending list due to its benchmark-leading reasoning and long context performance.
- [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/deepseek-ai/DeepSeek-V4-Flash): Author: deepseek-ai | Likes: 1,401 | Downloads: 3,503,796 | A fast-inference optimized variant of DeepSeek-V4-Pro that delivers near-full model performance at 3x lower latency for high-throughput production use cases.
- [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B): Author: Qwen | Likes: 1,612 | Downloads: 5,440,074 | The flagship official multimodal text generation model from the Qwen family, it supports native image-text reasoning and leads the list in broad enterprise adoption.
- [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B): Author: LiquidAI | Likes: 507 | Downloads: 72,114 | A lightweight MoE text generation model optimized for edge deployment, it balances small footprint and strong reasoning for on-device use.
- [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B): Author: openbmb | Likes: 768 | Downloads: 79,427 | An ultra-small 1B parameter text generation model that outperforms many older 7B LLMs on core tasks, designed for extremely low-resource edge hardware.
- [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B): Author: sapientinc | Likes: 612 | Downloads: 157,457 | A 1B parameter task-specialized text generation model built for human resource management workflows, seeing high adoption in corporate automation pipelines.
- [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking): Author: JetBrains | Likes: 199 | Downloads: 12,157 | A thinking-oriented code and conversational LLM built for IDE integration, optimized for step-by-step software development task solving.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base): Author: SulphurAI | Likes: 1,548 | Downloads: 1,678,259 | A fully open text-to-video base model derived from Lightricks LTX-2.3, it eliminates restrictive commercial licensing barriers that limited adoption of prior open video generation tools.
- [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8): Author: ideogram-ai | Likes: 199 | Downloads: 310 | The latest state-of-the-art text-to-image model optimized for typography and text rendering in generated visuals, in its low-precision FP8 format.
- [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4): Author: ideogram-ai | Likes: 155 | Downloads: 398 | A 4-bit quantized version of Ideogram 4 targeted at local consumer deployment on consumer GPUs.
- [nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano): Author: nvidia | Likes: 160 | Downloads: 17,903 | A tiny edge-optimized variant of NVIDIA’s Cosmos 3 omni-generation stack for fast local text-to-image and video inference.
- [nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super): Author: nvidia | Likes: 133 | Downloads: 16,767 | The full flagship omni-generation foundation model from NVIDIA, supporting all generative media tasks out of the box.
- [nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image): Author: nvidia | Likes: 107 | Downloads: 961 | The task-specialized text-to-image split of the Cosmos 3 Super model, optimized for photorealistic enterprise asset generation.
- [nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video): Author: nvidia | Likes: 102 | Downloads: 899 | The image-to-video split of the Cosmos 3 Super stack for generating consistent short clips from static reference assets.
- [meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5): Author: meituan-longcat | Likes: 516 | Downloads: 381 | An open audio-to-live-video avatar generation model designed for virtual content creator workflows.
- [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R): Author: ByteDance | Likes: 118 | Downloads: 129 | A new research image-text-to-video rendering model that generates photorealistic 3D-consistent clips from text prompts and reference imagery.
- [OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5): Author: OpenMOSS-Team | Likes: 144 | Downloads: 28,331 | A highly rated open Chinese text-to-speech model with near-human natural prosody and low inference latency.

### 🔧 Specialized Models (code, math, medical, embeddings)
- [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B): Author: nvidia | Likes: 1,273 | Downloads: 91,834 | A specialized 3B parameter image-text grounding model that can accurately localize any object referenced in text prompts across any input image, for visual search and robotics workflows.
- [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6): Author: PaddlePaddle | Likes: 229 | Downloads: 5,970 | The latest open visual OCR model that supports text extraction from complex, dense, and low-resolution scanned documents and real-world imagery with 99%+ accuracy.
- [nvidia/PiD](https://huggingface.co/nvidia/PiD): Author: nvidia | Likes: 302 | Downloads: 852 | A task-specialized image-to-image super-resolution model that restores low-resolution and corrupted visuals to 4K quality with zero artifact generation.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive): Author: HauhauCS | Likes: 1,400 | Downloads: 2,646,756 | A community uncensored fine-tune of the Qwen 3.6 35B MoE multimodal model, optimized for unrestricted local use without alignment guardrails.
- [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF): Author: unsloth | Likes: 277 | Downloads: 62,850 | A highly optimized GGUF quantized version of Google’s Gemma 4 12B instruction tuned model for local llama.cpp deployment.
- [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it): Author: google | Likes: 405 | Downloads: 14,866 | The official instruction-tuned any-to-any variant of Google’s Gemma 4 12B flagship model, released to broad community acclaim for its strong multimodal capabilities.
- [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B): Author: google | Likes: 264 | Downloads: 1,978 | The raw base any-to-any foundation model of Google’s latest Gemma 4 line for custom fine-tuning use cases.
- [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash): Author: stepfun-ai | Likes: 249 | Downloads: 22,715 | A fast inference optimized vision-language LLM from Chinese AI startup StepFun.
- [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4): Author: nvidia | Likes: 176 | Downloads: 629,244 | NVIDIA’s custom NVFP4 quantized optimized variant of the Qwen 3.6 35B MoE model for maximum speed on NVIDIA GPU hardware.
- [LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*