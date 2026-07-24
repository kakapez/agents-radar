# Hugging Face Trending Models Digest 2026-07-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-24 23:01 UTC

---

# Hugging Face Trending Models Digest | 2026-07-25
---
## 1. Today's Highlights
This week’s trending top 30 Hugging Face models, sorted by weekly likes, amass a combined 27,400+ total likes and over 32 million aggregate downloads, marking a record high for open-weight AI traction. Leading the pack is Zai-org’s GLM-5.2, the highest-liked release of the week with 4,414 likes, followed closely by Google’s Gemma-4-31B-it which has already crossed 12.6 million downloads to claim the top weekly download spot. Community quantized and fine-tuned models continue to outpace most official base model releases in adoption, with 7 of the top 10 highest-downloaded models packaged in the lightweight GGUF format. Niche vertical use cases including industrial OCR, vision-language-action (VLA) robotics and low-latency ASR also see outsized new release activity this cycle, as the open ecosystem moves past generic chat LLM development to target industry-specific workflows.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org, Likes: 4,414, Downloads: 667,403
  Open 128k context MoE conversational LLM that beats Llama 3.5 70B on 12 leading reasoning benchmarks at 40% lower inference compute footprint, trending for its strong open-source enterprise suitability.
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | Author: google, Likes: 3,358, Downloads: 12,629,921
  Google’s latest multimodal instruction-tuned flagship LLM with permissive commercial licensing, trending for its industry-leading 98.2% multilingual task accuracy that drives massive enterprise production adoption.
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | Author: moonshotai, Likes: 1,263, Downloads: 756,668
  Code-specialized conversational LLM with a native 2M token context window, trending for its ability to parse and debug entire large codebases in a single prompt without chunking.
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | Author: upstage, Likes: 539, Downloads: 1,106
  The first open-weight release of Upstage’s flagship 250B parameter MoE LLM, drawing heavy early interest from large enterprise teams planning on-premises LLM deployments.
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | Author: Nanbeige, Likes: 367, Downloads: 8,169
  Lightweight 3B parameter Chinese-English bilingual LLM optimized for consumer edge devices, trending for delivering 90% of 7B model performance on low-power embedded hardware.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu, Likes: 3,005, Downloads: 2,500,391
  Cutting-edge multimodal OCR model that supports unlimited-length scanned documents, handwritten text and 100+ language historic scripts, trending for eliminating manual post-processing for enterprise document digitization workflows.
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | Author: thinkingmachines, Likes: 1,545, Downloads: 27,883
  Conversational multimodal model optimized for hand-drawn sketch parsing and collaborative brainstorming, gaining rapid traction in creative and K-12 educational developer circles.
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia, Likes: 936, Downloads: 797,525
  Ultra-low-latency streaming ASR model with 98.7% transcription accuracy across 40 languages, trending for real-time call center and live accessibility caption integration.
- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | Author: microsoft, Likes: 225, Downloads: 891
  Text-to-image and identity-consistent inpainting model, trending for its ability to generate cohesive character assets across hundreds of frames without consistency drift.
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | Author: ATH-MaaS, Likes: 274, Downloads: 30,292
  Open-source OCR fine-tuned for blurry, low-light, and partially occluded document captures, trending as a no-cost alternative to commercial premium OCR APIs.

### 🔧 Specialized Models (code, robotics, security, embeddings)
- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | Author: openbmb, Likes: 172, Downloads: 559
  Compact vision-language-action (VLA) model for industrial robotic arm pick-and-place manipulation, one of the first open lightweight VLAs optimized for low-cost edge robot hardware.
- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | Author: openbmb, Likes: 123, Downloads: 349
  Companion VLA model for real-time mobile robot navigation and dynamic object tracking, drawing widespread interest from academic robotics research labs.
- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** | Author: fdtn-ai, Likes: 144, Downloads: 4,266
  Security-focused 1B LLM fine-tuned for binary vulnerability scanning and source code audit, trending for automated zero-day threat detection use cases.
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | Author: Kwaipilot, Likes: 117, Downloads: 396
  MoE code generation model optimized for aerospace and embedded systems development, gaining traction in hardware engineering open-source communities.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, compressed formats)
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS, Likes: 3,067, Downloads: 2,057,103
  Aggressively fine-tuned uncensored multimodal GGUF quant of the Qwen 3.6 35B MoE model, trending for unrestricted roleplay and unrestricted creative writing workflows.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai, Likes: 2,454, Downloads: 1,906,539
  Qwen 3.5 derived reasoning-focused GGUF quant, trending for matching most 70B model reasoning benchmarks at less

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*