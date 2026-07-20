# Hugging Face Trending Models Digest 2026-07-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-20 23:00 UTC

---

# Hugging Face Trending Models Digest (2026-07-21)
---
## 1. Today's Highlights
This week’s Hugging Face trending list is led by high-impact official open-weight releases, headlined by ZAI Org’s GLM-5.2 that earned 4,220 weekly likes to claim the top spot, followed closely by Google’s newly launched Gemma-4-31B-it multimodal model. Prism ML’s family of ultra-low-bit Bonsai 27B models has exploded in adoption, with its 1-bit GGUF variant crossing 1.26 million weekly downloads as 2-bit and 1-bit quantization moves from experimental to mainstream for edge deployments. There is also a noticeable surge of community uncensored Qwen 3.6 fine-tunes optimized for local consumer use, alongside new niche open models for robotics manipulation, real-time video understanding, and long-document OCR.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 4,220 | Downloads: 531,947
  A new MoE conversational text generation model built on the custom glm_moe_dsa architecture, trending for its state-of-the-art performance matching top closed-source generalist LLMs at a smaller open footprint.
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | Author: google | Likes: 3,295 | Downloads: 11,987,240
  Google’s latest open conversational multimodal model, the highest-downloaded entry on this week’s leaderboard, trending for its well-aligned instruction following and broad enterprise use case support.
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 847 | Downloads: 13,698
  Tencent’s official open-weight Hunyuan 3 text generation model, trending for its strong low-resource language support and Apache 2.0 license for unrestricted commercial adoption.
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | Author: moonshotai | Likes: 1,171 | Downloads: 713,992
  Moonshot AI’s open long-context code-focused image-text-to-text model, trending for its 10M+ token context window and high performance on complex code generation tasks.
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** | Author: GnLOLot | Likes: 159 | Downloads: 5,494
  A lightweight 1B parameter thinking fine-tune of the open MiniCPM5 LLM, trending for its surprising reasoning performance at an extremely small model size.
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Author: Cactus-Compute | Likes: 290 | Downloads: 950
  A JAX-native small LLM optimized exclusively for function calling and tool use, trending for its near-zero latency on agent tasks.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 2,421 | Downloads: 2,122,848
  Baidu’s general-purpose unlimited OCR model, trending for its ability to extract text from arbitrarily long, distorted, or low-resolution scanned documents without page limits.
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | Author: thinkingmachines | Likes: 1,257 | Downloads: 13,462
  A new conversational multimodal image-text-to-text model, trending for its support for handwritten sketch interpretation and handwritten note summarization.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 2,366 | Downloads: 2,117,323
  A Qwen3.5-based multimodal reasoning fine-tune, trending for its top-tier performance on visual math and complex diagram understanding tasks.
- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | Author: Wan-AI | Likes: 144 | Downloads: 2,408
  An open 14B parameter image-to-video generation model, trending for its 10-second 4K output capability and smooth human motion rendering.
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | Author: OpenMOSS-Team | Likes: 290 | Downloads: 87,533
  A joint audio transcription and speaker diarization model, trending for its end-to-end pipeline that eliminates pre-processing steps for multi-speaker audio recordings.
- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** | Author: OpenMOSS-Team | Likes: 88 | Downloads: 544
  A real-time video-text-to-text multimodal model, trending for its sub-100ms latency for live video stream captioning and event detection.
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | Author: conradlocke | Likes: 455 | Downloads: 0
  A ComfyUI-compatible LoRA for identity-preserving image editing, trending for its ability to edit portrait images without altering facial features.
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Author: Alissonerdx | Likes: 210 | Downloads: 0
  A text-to-video LoRA for identity preservation, trending for generating long clips of consistent human subjects without facial distortion.
- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** | Author: bottlecapai | Likes: 481 | Downloads: 10,647
  A multimodal Qwen3.6 fine-tune optimized for structured visual reasoning, trending for its step-by-step explanation outputs for visual problem solving.

### 🔧 Specialized Models (code, math, embeddings, niche use cases)
- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** | Author: nvidia | Likes: 85 | Downloads: 61,708
  A lightweight sentence similarity embedding model, trending for its state-of-the-art performance on multilingual retrieval tasks at a 1B parameter footprint.
- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | Author: openbmb | Likes: 108 | Downloads: 0
  An open Vision-Language-Action (VLA) model for robotic manipulation, trending for supporting zero-shot transfer of manipulation tasks across different commercial robot arms.
- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | Author: openbmb | Likes: 99 | Downloads: 0
  A VLA model optimized for dynamic object tracking for mobile robots, trending for its low compute footprint ideal for edge robot deployment.
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | Author: ATH-MaaS | Likes: 217 | Downloads: 14,587
  A high-speed lightweight OCR model, trending for its <10ms inference time on mobile CPUs for real-time scanned document processing.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, MLX)
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | Author: prism-ml | Likes: 540 | Downloads: 1,262,894
  A 1-bit quantized 27B conversational LLM, trending for its near-lossless performance that can run natively on consumer 16GB RAM laptops via llama.cpp.
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | Author: prism-ml | Likes: 848 | Downloads: 338,945
  A 2-bit ternary quantized variant of the Bonsai 27B model, trending for its balance of higher reasoning performance and tiny file size perfect for edge deployments.
- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** | Author: prism-ml | Likes: 154 | Downloads: 21,690
  1-bit quantized Bonsai 27B optimized for Apple MLX hardware, trending for near-native speed on M-series Mac devices.
- **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)** | Author: prism-ml | Likes: 130 | Downloads: 17,869
  2-bit ternary Bonsai 27B optimized for Apple MLX, trending as the highest performing 27B LLM that can run locally on base M2 Macs.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,933 | Downloads: 2,007,025
  An uncensored 3-bit quantized MoE fine-tune of Qwen3.6 vision model, trending for its unrestricted conversational output for local private use.
- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)** | Author: empero-ai | Likes: 193 | Downloads: 105,749
  The base multimodal GGUF quantized release of the Qwythos 9B model, trending as a lightweight all-in-one local vision-language model.
- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** | Author: AngelSlim | Likes: 149 | Downloads: 109,749
  Community GGUF quantized release of Tencent’s Hy3 LLM, trending for its Apache 2.0 license that allows fully unrestricted redistribution and modification.
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)** | Author: GnLOLot | Likes: 134 | Downloads: 28,012
  GGUF quantized version of the MiniCPM5 1B thinking fine-tune, trending for its ability to run on even low-spec single-board computers for offline agent tasks.
- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | Author: DavidAU | Likes: 149 | Downloads: 16,719
  A heavily optimized uncensored story and roleplay fine-tune of Qwen3.6, trending for its long-form creative writing performance.
- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** | Author: unsloth | Likes: 110 | Downloads: 6,771
  GGUF quantized release of the Inkling multimodal model, trending for its addition of audio-text processing capabilities not present in the base release.
- **[LuffyThe

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*