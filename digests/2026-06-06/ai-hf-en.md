# Hugging Face Trending Models Digest 2026-06-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-05 23:09 UTC

---

# Hugging Face Trending Models Digest | 2026-06-06
---
## 1. Today's Highlights
This week’s Hugging Face trending list is led by record-breaking open LLM releases, with DeepSeek’s new V4 Pro model amassing 4,657 weekly likes to take the top overall spot, alongside cumulative downloads across its V4 line exceeding 9 million. Qwen 3.6 variants dominate high-download rankings, with community fine-tunes and optimized quantizations earning millions of consumer-facing pulls. Nvidia launched a coordinated 7-model ecosystem drop spanning lightweight visual grounding, Cosmos 3 omni generation, and ultra-large Nemotron 3 model lines, capturing broad developer attention. Text-to-video generation also saw a major breakout, with SulphurAI’s open base video model gaining nearly 1,600 weekly likes to rank among the top 5 most-liked models on the platform.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro): Author: deepseek-ai, Likes: 4,657, Downloads: 5,562,821. The highest-rated state-of-the-art open general-purpose LLM released this week, trending for its industry-leading reasoning, long context, and conversational performance that outperforms many closed proprietary alternatives.
- [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash): Author: deepseek-ai, Likes: 1,412, Downloads: 3,473,265. The speed-optimized distilled variant of DeepSeek V4 Pro, trending for 3x higher inference throughput with minimal quality loss for production workloads.
- [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B): Author: google, Likes: 333, Downloads: 53,525. Google’s new unified 12B any-to-any base model, trending for its permissive license and strong multi-task generalist performance across text and vision tasks.
- [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B): Author: LiquidAI, Likes: 526, Downloads: 82,709. A lightweight MoE 8B-class LLM, trending for its extremely low latency and near 70B-class performance for edge text generation use cases.
- [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B): Author: sapientinc, Likes: 702, Downloads: 159,014. A 1B parameter ultra-small high-performance LLM, trending for its ability to run fully offline on low-power consumer and IoT hardware without meaningful quality tradeoffs.
- [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B): Author: openbmb, Likes: 770, Downloads: 91,235. OpenBMB’s latest 1B small LLM, trending for its strong multilingual performance and compatibility with consumer mobile deployment.
- [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking): Author: JetBrains, Likes: 223, Downloads: 14,709. A 12B thinking-optimized LLM built for code and software development workflows, trending for its native tool use and low hallucination rate for engineering tasks.
- [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4): Author: nvidia, Likes: 191, Downloads: 822,125. Nvidia’s custom FP4 quantized MoE variant of Qwen 3.6, trending for its optimized performance on Nvidia consumer and data center GPUs.
- [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16): Author: nvidia, Likes: 115, Downloads: 9,125. Nvidia’s flagship 550B total parameter ultra-large MoE LLM, trending for its state-of-the-art performance on complex enterprise reasoning tasks.
- [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4): Author: nvidia, Likes: 106, Downloads: 7,419. The FP4 quantized, more deployable variant of the 550B Nemotron 3 Ultra, trending for reduced memory footprint without major accuracy drops.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B): Author: nvidia, Likes: 1,372, Downloads: 101,823. A 3B lightweight visual grounding multimodal model, trending for its ability to accurately locate any object in images from free text prompts on edge hardware.
- [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it): Author: google, Likes: 543, Downloads: 142,851. The instruction-tuned variant of Google’s Gemma 4 unified multimodal model, trending for strong zero-shot vision-language task performance.
- [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash): Author: stepfun-ai, Likes: 331, Downloads: 27,948. A fast Chinese-optimized vision-language LLM, trending for its low latency and strong performance on bilingual Chinese and English multimodal prompts.
- [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8): Author: ideogram-ai, Likes: 269, Downloads: 1,246. Ideogram’s new text-to-image diffusion model optimized for accurate text rendering in generated outputs, trending for its open-weight release after years as a closed API.
- [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4): Author: ideogram-ai, Likes: 191, Downloads: 1,594. The 4-bit quantized consumer-deployable variant of Ideogram 4, trending for running high quality image generation on mid-range consumer GPUs.
- [nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano): Author: nvidia, Likes: 176, Downloads: 21,625. The smallest lightweight nano variant of Nvidia’s new Cosmos 3 omni generation suite, trending for fast, low-resource video and image generation on edge devices.
- [nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super): Author: nvidia, Likes: 142, Downloads: 19,227. The flagship full-size Cosmos 3 omni generative model, trending for its state-of-the-art photorealistic long-form video generation capability.
- [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6): Author: PaddlePaddle, Likes: 245, Downloads: 6,881. The latest upgraded PaddleOCR multimodal text extraction model, trending for its support for 100+ languages and complex document structure parsing.
- [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R): Author: ByteDance, Likes: 139, Downloads: 175. ByteDance’s new image-to-video renderer model, trending for its state-of-the-art photorealistic 3D-consistent video output from a single reference image.
- [meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5): Author: meituan-longcat, Likes: 519, Downloads: 1,675. An open audio-text-to-video avatar generation model, trending for its highly accurate lip sync and natural human avatar movement.
- [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b): Author: bosonai, Likes: 116, Downloads: 408. A 4B multimodal text-to-speech model, trending for its natural multi-speaker, multi-accent generation in 20+ languages.
- [nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image): Author: nvidia, Likes: 116, Downloads: 1,194. The text-to-image specialized variant of Cosmos 3 Super, trending for its ultra-high resolution, photorealistic output that competes with top closed image generation services.
- [nvidia/PiD](https://huggingface.co/nvidia/PiD): Author: nvidia, Likes: 310, Downloads: 901. A state-of-the-art image-to-image super-resolution model, trending for its ability to upscale low-res or noisy images up to 8K resolution with zero artifact generation.
- [nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video): Author: nvidia, Likes: 106, Downloads: 1,076. The image-to-video specialized variant of Cosmos 3 Super, trending for generating consistent, high-fidelity 10-second 4K video from a single input image.
- [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nvidia/nemotron-3.5-asr-streaming-0.6b): Author: nvidia, Likes: 190, Downloads: 597. A 0.6B parameter streaming ASR model, trending for sub-100ms latency and high accuracy for low-resource languages for real-time speech transcription.
- [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base): Author: SulphurAI, Likes: 1,565, Downloads: 1,691,633. An open text-to-video base model built on the Lightricks LTX-2.3 foundation, trending for its native GGUF support that lets it run on consumer 16GB VRAM GPUs.
- [MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS): Author: MisoLabs, Likes: 109, Downloads: 0. A new open text-to-speech model with zero cloning drift, trending for its perfect voice cloning capability that is indistinguishable from human speech.

### 🔧 Specialized Models
*No dedicated niche specialized (medical, math, code) models ranked in this week’s top 30 trending list, with all high-interest specialized use cases covered by generalist multimodal and LLM releases. The streaming ASR, OCR, and super-resolution models listed above in the multimodal category represent the highest-impact specialized releases this week.*

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AW

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*