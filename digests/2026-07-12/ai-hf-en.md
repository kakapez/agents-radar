# Hugging Face Trending Models Digest 2026-07-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-11 22:48 UTC

---

# Hugging Face Trending Models Digest | 2026-07-12
---
## 1. Today's Highlights
This week’s Hugging Face trending chart is dominated by a mix of high-profile official flagship releases from major global tech firms, and extremely high-demand community quantized builds tailored for edge deployment. The top-liked release, Zhipu AI’s GLM-5.2, has earned 3.8k weekly likes, marking the latest major milestone for the widely used Chinese open-source LLM family. Qwen 3.5 and Qwen 3.6 derived models make up over 40% of the full trending list, reflecting the community’s overwhelming preference for Alibaba’s latest open base model family. Download volumes for top quantized multimodal and reasoning builds have surged past 2.5M, indicating massive end-user adoption of local, no-cloud inference workflows.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org | Likes: 3,829 | Downloads: 421,270
  A state-of-the-art open MoE text generation model optimized for conversational and general reasoning tasks, trending as the week’s highest-voted flagship LLM release.
- [tencent/Hy3](https://huggingface.co/tencent/Hy3) | Author: tencent | Likes: 697 | Downloads: 8,210
  Tencent’s latest official open Hunyuan 3 base LLM, trending for its long-context window and low inference latency for enterprise use cases.
- [meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat 2.0) | Author: meituan-longcat | Likes: 176 | Downloads: 1,572
  Meituan’s long-context optimized conversational LLM, trending for its 2M token processing capacity for extended document workflows.
- [mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B) | Author: mistralai | Likes: 189 | Downloads: 350
  Mistral’s latest 119B parameter MoE LLM, trending as a high-performance base model for vLLM accelerated deployment.
- [SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M) | Author: SupraLabs | Likes: 98 | Downloads: 1,275
  A tiny 51M parameter LLM designed to route user queries to the most appropriate large model, trending as a low-overhead tool for building multi-model orchestration systems.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia | Likes: 2,707 | Downloads: 1,472,194
  A lightweight open image-text model for zero-shot visual object localization, trending for its near state-of-the-art accuracy running on consumer GPUs.
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu | Likes: 1,929 | Downloads: 1,380,690
  Baidu’s new open OCR model that supports text extraction from any arbitrary image, trending for its support for over 100 languages including low-resource scripts.
- [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | Author: OpenMOSS-Team | Likes: 109 | Downloads: 12,817
  An end-to-end audio transcription and speaker diarization model, trending for its seamless zero-shot processing of multi-speaker podcasts and meetings.
- [CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026) | Author: CohereLabs | Likes: 89 | Downloads: 7,687
  A specialized Arabic ASR model fine-tuned for dialectal speech, trending for far higher accuracy than general-purpose speech models for MENA region use cases.
- [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Author: Alissonerdx | Likes: 99 | Downloads: 0
  A LoRA for the LTX 2 text-to-video pipeline that preserves face identity across generated clips, trending as a popular open tool for AI video content creators.

### 🔧 Specialized Models
- [google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch) | Author: google | Likes: 348 | Downloads: 20,110
  Google’s open tabular foundation model for zero-shot classification and regression on structured data, trending for eliminating the need for manual feature engineering for enterprise analytics.
- [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | Author: InternScience | Likes: 491 | Downloads: 28,141
  A multimodal MoE agent model fine-tuned for tool use, trending for its ability to execute complex multi-step tasks across code, document, and visual inputs.

### 📦 Fine-tunes & Quantizations
- [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | Author: unsloth | Likes: 1,047 | Downloads: 2,904,169
  A fast, optimized GGUF quantization of Qwen 3.6 27B from Unsloth, trending as the most downloaded local inference compatible model of the week.
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS | Likes: 2,649 | Downloads: 2,641,936
  An uncensored, aggressive fine-tune of Qwen 3.6 35B vision MoE, trending for its lack of alignment guardrails for unrestricted creative and research use.
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai | Likes: 2,008 | Downloads: 1,944,961
  A Claude Mythos fine-tuned 9B Qwen 3.5 GGUF build, trending for its exceptional performance on roleplay and long-form narrative generation.
- [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | Author: yuxinlu1 | Likes: 1,148 | Downloads: 436,530
  An agentic fine-tuned GGUF build of Gemma 4 12B, trending for its out-of-the-box terminal and coding tool use capabilities on local hardware.

## 3. Ecosystem Signal
The 2026 mid-year Hugging Face trend confirms the Qwen 3.5/3.6 family as the de facto dominant open base model ecosystem, making up ~40% of all trending models across base, fine-tune, multimodal, and quantization variants. All 10 of the week’s highest-download models are fully open-weight with no restrictive commercial licensing, confirming that user preference has fully shifted away from closed API-only proprietary models for nearly all use cases. GGUF quantization activity is at an all-time high, with 9 of the top 15 highest-download releases being llama.cpp compatible builds, proving massive unmet demand for low-overhead, edge-deployable inference that works on consumer hardware rather than cloud datacenters. Major hardware vendors including Nvidia are already releasing hardware-optimized Qwen-derived variants, further cementing the open model family’s market leadership.

## 4. Worth Exploring
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**: The week’s highest-liked flagship release, this open MoE LLM delivers state-of-the-art conversational reasoning performance on par with top closed models, with no restrictive commercial licensing making it ideal for enterprise production deployment.
2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**: The week’s most downloaded model at nearly 3M downloads, this highly optimized quantization runs smoothly on mid-range consumer GPUs, making full 27B parameter state-of-the-art LLM performance accessible to hobbyists and small teams without expensive cloud infrastructure.
3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: This lightweight multimodal model delivers zero-shot visual object localization capability at 3B parameters, and can be easily integrated into existing LLM agent workflows to add strong visual reasoning capabilities without the overhead of running a full 70B+ multimodal model.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*