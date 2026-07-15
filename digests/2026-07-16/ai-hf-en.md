# Hugging Face Trending Models Digest 2026-07-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-15 22:58 UTC

---

# Hugging Face Trending Models Digest | 2026-07-16
---

## 1. Today's Highlights
As of July 16, 2026, the Hugging Face trending leaderboard is dominated by high-performance open-weight large language models and their derivative fine-tunes, with 6 models recording over 1 million weekly downloads, far outpacing typical trending traffic metrics from 6 months prior. Standout official releases include ZAI Org’s state-of-the-art MoE GLM-5.2 and Tencent’s Hunyuan 3 text generation model, which have accrued nearly 500k and 10k respective downloads in their first week on the hub. Community demand for uncensored, reasoning-enhanced multimodal LLMs is clearly visible, with the HauhauCS Qwen3.6 35B A3B Uncensored model landing at the 3rd spot for weekly likes despite being a non-official community fine-tune. Experimental ultra-low bit quantization also occupies a large share of the trending chart, with 1-bit and 2-bit ternary LLM variants seeing new public releases after months of private research.

---

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org | Likes: 3,991 | Downloads: 489,611
  A brand new MoE conversational base text generation model optimized for long context and general reasoning, trending as a top open challenger to closed commercial chat models.
- [tencent/Hy3](https://huggingface.co/tencent/Hy3) | Author: tencent | Likes: 799 | Downloads: 10,406
  The latest full-weight release in Tencent’s Hunyuan LLM line, optimized for low-latency consumer chat deployment.
- [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | Author: InternScience | Likes: 552 | Downloads: 30,539
  A Qwen3.5 MoE model fine-tuned natively for autonomous agent workflow orchestration, gaining traction in local agent development circles.
- [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | Author: GnLOLot | Likes: 129 | Downloads: 3,483
  A 1B parameter small footprint LLM fine-tuned for enhanced chain-of-thought reasoning at edge compute scales.
- [empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2) | Author: empero-ai | Likes: 121 | Downloads: 3,959
  A full-weight Qwen3.5 fine-tune optimized for myth and narrative generation, popular with roleplay and creative writing users.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai | Likes: 2,211 | Downloads: 2,006,265
  A multimodal Qwen3.5 fine-tune trained on 1M high-quality Claude prompt-response pairs, designed for both reasoning and visual input tasks.
- [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | Author: bottlecapai | Likes: 364 | Downloads: 6,208
  A 27B Qwen3.6 multimodal model fine-tuned for step-by-step visual reasoning, targeted at educational and enterprise use cases.
- [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | Author: thinkingmachines | Likes: 297 | Downloads: 0
  A new multimodal model that supports joint image and audio input processing, trending for its novel unified multi-signal architecture.
- [robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast) | Author: robbyant | Likes: 99 | Downloads: 0
  A lightweight causal image-to-video diffusion model optimized for sub-2-second generation on consumer GPUs.
- [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Author: Alissonerdx | Likes: 154 | Downloads: 0
  An LTX Video LORA that preserves consistent facial identity across long generated clips, highly sought after by content creators.
- [mgwr/M87](https://huggingface.co/mgwr/M87) | Author: mgwr | Likes: 125 | Downloads: 2,408
  A Krea-2 fine-tuned text-to-image LORA that generates high-fidelity astrophotography and cosmic themed visuals.

### 🔧 Specialized Models (code, math, medical, embeddings)
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu | Likes: 2,001 | Downloads: 1,715,301
  A state-of-the-art open-weight OCR model that supports unlimited document length and 120+ languages, trending for breaking prior open OCR accuracy records.
- [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | Author: OpenMOSS-Team | Likes: 212 | Downloads: 65,109
  A joint speech transcription and speaker diarization model that supports 96kHz audio input, optimized for podcast and meeting processing.
- [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | Author: froggeric | Likes: 915 | Downloads: 0
  A community maintained repository of standardized Jinja chat templates that resolve common rendering bugs across all Qwen 3.x model variants.
- [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | Author: conradlocke | Likes: 306 | Downloads: 0
  A Krea-2 image editing LORA that preserves facial identity across inpainting and prompt-based edits, popular with ComfyUI users.
- [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | Author: ATH-MaaS | Likes: 116 | Downloads: 745
  A lightweight multimodal OCR model optimized for handwritten and low-resolution document scanning use cases.
- [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Author: Cactus-Compute | Likes: 236 | Downloads: 571
  A new open model specialized for zero-shot function calling and parallel tool use, targeted at local autonomous agent development.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS | Likes: 2,757 | Downloads: 2,443,871
  An A3B quantized, fully uncensored multimodal Qwen3.6 35B model, the highest-downloaded uncensored LLM on the hub this week.
- [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | Author: yuxinlu1 | Likes: 1,198 | Downloads: 468,629
  A quantized Gemma 4 12B GGUF fine-tuned for agentic coding and terminal automation workflows.
- [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | Author: deepreinforce-ai | Likes: 892 | Downloads: 1,533,354
  A MIT-licensed 35B GGUF LLM optimized for low-latency local deployment on consumer hardware.
- [unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4) | Author: unsloth | Likes: 206 | Downloads: 1,599,150
  An NVFP4 quantized Qwen3.6 27B model optimized for 4GB+ NVIDIA consumer GPU deployment, released by leading quantization team Unsloth.
- [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | Author: prism-ml | Likes: 453 | Downloads: 23
  An experimental 2-bit ternary 27B GGUF LLM that fits entirely on low-cost edge CPUs and single-board computers.
- [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | Author: prism-ml | Likes: 260 | Downloads: 513
  A 1-bit quantized 27B GGUF LLM, one of the first publicly released working 1-bit large language models.
- [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | Author: GnLOLot | Likes: 247 | Downloads: 89,892
  A 1B parameter reasoning-focused LLM quantized to GGUF for zero-overhead edge deployment.
- [empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | Author: empero-ai | Likes: 143 | Downloads: 70,260
  A quantized GGUF release of the creative Qwythos 9B v2 model optimized for llama.cpp deployment.
- [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | Author: jlnsrk | Likes: 109 | Downloads: 2,188
  An int4 quantized GLM-5.2 variant optimized for CPU inference with streaming expert offloading to reduce memory footprint.
- [AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF) | Author: AngelSlim | Likes: 107 | Downloads: 0
  A community GGUF port of Tencent’s Hy3 LLM, available under permissive Apache 2.0 license.
- [unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsl

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*