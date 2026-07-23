# Hugging Face Trending Models Digest 2026-07-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-23 22:56 UTC

---

# Hugging Face Trending Models Digest (2026-07-24)

---

## 1. Today's Highlights
This week’s Hugging Face trends are dominated by high-performing open-weight multimodal and large language models, led by zai-org’s GLM-5.2 which accumulated 4,364 weekly likes to become the platform’s most popular new release. Google’s open Google/gemma-4-31B-it multimodal model saw explosive adoption, hitting over 12.6 million weekly downloads to far outpace the uptake of pure text-only LLMs. Niche, ultra-low-bit 1-bit and 2-bit quantized model lines from prism-ml are seeing massive end-user traction, with multiple variants earning millions of downloads. Qwen family models are ubiquitous across all categories, appearing as base models for everything from vision fine-tunes to TTS and uncensored community builds.

---

## 2. Trending Models (Organized by Category)
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 4,364 | Downloads: 596,442
  A high-performance MoE conversational text generation model that is the highest-liked trending release this week, favored for its low latency and strong multilingual reasoning capabilities.
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | Author: upstage | Likes: 402 | Downloads: 362
  Upstage’s flagship 250B parameter open text generation model, trending for its state-of-the-art long-context performance for enterprise use cases.
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | Author: Nanbeige | Likes: 312 | Downloads: 4,532
  A lightweight, compact 3B parameter Chinese-centric LLM optimized for edge deployment on consumer devices.
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | Author: poolside | Likes: 509 | Downloads: 13,285
  Poolside’s popular small coding-focused text generation model used widely for local developer tooling.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 2,875 | Downloads: 2,414,259
  A breakthrough image-text-to-text OCR model that supports unlimited text extraction across any document, handwriting or scene text, leading to massive enterprise adoption.
- **[Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice)** | Author: Qwen | Likes: 1,795 | Downloads: 2,497,020
  A highly customizable text-to-speech model that supports zero-shot custom voice cloning, trending for its near-human audio output quality.
- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | Author: microsoft | Likes: 181 | Downloads: 411
  A new all-in-one text-to-image and image-editing diffusion model optimized for fast iterative creative workflows.
- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | Author: openbmb | Likes: 163 | Downloads: 408
  A vision-language-action robotics model built for real-world industrial and domestic robot manipulation tasks.

### 🔧 Specialized Models (code, math, domain-specific)
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | Author: moonshotai | Likes: 1,245 | Downloads: 766,522
  A vision-augmented code generation model that can process screenshots of UI mockups to output production-ready full-stack code, making it a favorite for developer workflows.
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia | Likes: 924 | Downloads: 750,118
  A lightweight streaming automatic speech recognition model optimized for real-time low-latency transcription of calls and live streams.
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | Author: OpenMOSS-Team | Likes: 319 | Downloads: 111,598
  An all-in-one audio transcription and speaker diarization model that eliminates the need for separate ASR and speaker segmentation pipelines.
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | Author: ATH-MaaS | Likes: 257 | Downloads: 26,919
  An open alternative to Baidu’s Unlimited-OCR for users seeking a lightweight OCR fine-tuned for low-resource languages.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, low-bit builds)
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | Author: prism-ml | Likes: 980 | Downloads: 576,083
  A 2-bit ternary quantized 27B parameter conversational GGUF model that can run smoothly on 8GB consumer VRAM without major quality loss.
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | Author: prism-ml | Likes: 619 | Downloads: 1,910,116
  A 1-bit quantized 27B GGUF model that is one of the most popular local deployable LLMs for end-user chat use cases.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 3,032 | Downloads: 2,027,080
  A community fine-tuned uncensored vision-enabled Qwen 3.6 35B MoE model popular for unrestricted general-purpose multimodal use.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 2,438 | Downloads: 2,126,755
  A reasoning-optimized Qwen 3.5 9B GGUF fine-tune that outperforms much larger base models on complex logical reasoning benchmarks.

---

## 3. Ecosystem Signal
The Qwen model family is the clear momentum leader this week, serving as the base for nearly half of all trending fine-tunes spanning vision, TTS, uncensored chat, and reasoning use cases, confirming Alibaba’s open LLM line has become the de facto foundation for community builds. The trend of ultra-low-bit 1-bit and 2-bit quantization is rapidly maturing, with prism-ml’s Bonsai line earning millions of downloads from users who can run 27B-parameter models on low-cost consumer hardware previously limited to 7B models. 100% of top trending releases this week are fully open-weight, no gated proprietary models appear in the top 30, as major players including Google, Nvidia, Baidu, and Upstage prioritize open access to capture developer mindshare. GGUF remains the dominant end-user deployment format, even official vendor releases are now publishing GGUF variants alongside standard safetensors builds.

---

## 4. Worth Exploring
1. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**: This 1-bit 27B quantized model is a landmark demonstration of how far low-bit quantization has advanced, letting developers run near state-of-the-art 27B LLM performance on 8GB consumer GPUs, making it ideal for privacy-first local deployments.
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: The highest-liked domain-specific model this week delivers unmatched unlimited OCR performance across arbitrary documents, handwritten notes, and scene text, and represents a major open alternative to paid commercial OCR APIs.
3. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**: The top-liked new release of the week is a high-performance open MoE LLM that competes directly with top closed models on multilingual reasoning and long-context tasks at a fraction of the deployment cost.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*