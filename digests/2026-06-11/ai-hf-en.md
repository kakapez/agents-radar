# Hugging Face Trending Models Digest 2026-06-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-10 23:25 UTC

---

# Hugging Face Trending Models Digest | 2026-06-11
---

## 1. Today's Highlights
The June 11 trending rankings are led by record-breaking engagement for deepseek-ai’s newly released DeepSeek-V4 Pro, which outpaces all other models on the list by a 2.6x margin in weekly likes, crossing 4.7k votes and 4M+ downloads to claim the top spot. The latest Google Gemma 4 family dominates nearly 30% of the trending entries across official releases, community quantizations, and fine-tuned variants, signaling massive ecosystem momentum for Google’s new unified multimodal line. There is also notable surging interest in small, task-specialist multimodal models including Nvidia’s LocateAnything 3B zero-shot object localization tool, alongside a wave of consumer-deployable text-to-X generative models for image, audio, and video creation. Open, permissively licensed releases make up 100% of the top 10 trending models this week, with no gated paywalled proprietary releases cracking the rankings.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | Author: deepseek-ai | Likes: 4758 | Downloads: 4,061,006
   A state-of-the-art open conversational text generation LLM, it tops the rankings for its unmatched reasoning, long-context handling, and broad task performance for general enterprise and consumer use cases.
2. **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | Author: sapientinc | Likes: 739 | Downloads: 134,752
   A lightweight 1B parameter HR domain-specialized text generation model optimized for human resources use cases including resume parsing, interview drafting, and policy writing.
3. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | Author: LiquidAI | Likes: 580 | Downloads: 142,134
   A low-memory MoE text generation model built for fast inference on consumer hardware, trending for its high performance at a fraction of the compute footprint of comparable 7B-13B LLMs.
4. **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | Author: JetBrains | Likes: 280 | Downloads: 18,273
   A reasoning-optimized 12B code and general text LLM released by JetBrains, trending for native integration with JetBrains IDE tooling for local code assistance.
5. **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | Author: CohereLabs | Likes: 250 | Downloads: 1,859
   A small MoE code-specialist LLM built for edge deployment in embedded development environments, trending for its fast low-latency code completion.
6. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | Author: nvidia | Likes: 189 | Downloads: 59,066
   A flagship 550B parameter generalist text generation LLM from Nvidia, trending for industry-leading performance on high-throughput enterprise inference clusters.
7. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)** | Author: nvidia | Likes: 158 | Downloads: 91,117
   A pre-quantized NVFP4 variant of Nemotron 3 Ultra optimized to run natively on Nvidia consumer and data center GPUs without performance loss.
8. **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** | Author: nex-agi | Likes: 178 | Downloads: 1,185
   A MoE multimodal text generation model fine-tuned for enterprise agent workflows, trending for its low hallucination rate on structured tasks.
9. **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)** | Author: nex-agi | Likes: 132 | Downloads: 1,222
   A small lightweight edge-optimized variant of the Nex-N2-Pro model, built to run locally on mobile and embedded device hardware.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 1796 | Downloads: 131,794
   A 3B parameter zero-shot image-text localization model that can identify and segment any object referenced in a text prompt inside arbitrary input images, trending for its unmatched accuracy at its small size class.
2. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | Author: google | Likes: 884 | Downloads: 675,936
   The official instruction-tuned 12B any-to-any generalist multimodal model from Google’s new Gemma 4 line, trending for its unified support for text, image, audio, and video input/output workflows.
3. **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | Author: google | Likes: 500 | Downloads: 140,221
   The base pre-trained 12B any-to-any multimodal model for the Gemma 4 line, popular among researchers building custom fine-tunes on top of Google’s unified multimodal backbone.
4. **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | Author: stepfun-ai | Likes: 363 | Downloads: 50,187
   A fast low-latency vision-language model built for real-time multimodal chat, trending for near-instant response times for cloud and local deployment.
5. **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | Author: ideogram-ai | Likes: 469 | Downloads: 7,170
   The official pre-quantized FP8 release of Ideogram 4’s state-of-the-art text-to-image diffusion model, trending for its best-in-class text rendering in generated images.
6. **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | Author: ideogram-ai | Likes: 307 | Downloads: 6,124
   The 4-bit quantized variant of Ideogram 4 optimized to run locally on mid-tier consumer GPUs.
7. **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | Author: bosonai | Likes: 320 | Downloads: 19,948
   A 4B parameter high-fidelity text-to-speech model with zero-shot voice cloning support, trending for its near-human audio output quality.
8. **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | Author: MisoLabs | Likes: 185 | Downloads: 0
   An open lightweight TTS model optimized for ultra-fast generation on CPU hardware, trending for its permissive Apache 2.0 license for commercial use.
9. **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | Author: google | Likes: 172 | Downloads: 19,806
   Google Magenta’s new TFLite-optimized real-time text-to-music generation model, trending for its ability to generate 10-second music clips in under 100ms on edge devices.
10. **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | Author: ByteDance | Likes: 208 | Downloads: 305
    A new image-text-to-video generation model that produces photorealistic 4K short clips from reference images and text prompts, trending for its novel 3D rendering backbone.
11. **[jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo)** | Author: jdopensource | Likes: 126 | Downloads: 5,457
    An open text-to-video generation model that natively syncs generated video output with generated audio tracks, trending for its all-in-one media workflow support.
12. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | Author: google | Likes: 194 | Downloads: 0
    A 26B multimodal model that unifies diffusion and LLM capabilities inside a single Gemma 4 architecture, currently in early preview for researchers.

### 🔧 Specialized Models
1. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia | Likes: 341 | Downloads: 4,965
   A tiny 0.6B parameter streaming automatic speech recognition model optimized for real-time low-latency transcription with zero lag for live call and meeting workflows, trending for its industry-leading accuracy at its size class.

### 📦 Fine-tunes & Quantizations
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 1630 | Downloads: 3,057,541
   A heavily fine-tuned uncensored, unaligned 35B MoE vision-language model, one of the most popular community releases this week due to its unrestricted generation support for niche use cases.
2. **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | Author: unsloth | Likes: 548 | Downloads: 711,706
   An optimized GGUF quantization of the official Gemma 4 12B IT model built for local deployment on consumer GPUs and CPUs, trending for its near-zero performance loss relative to the full precision release.
3. **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | Author: unsloth | Likes: 186 | Downloads: 148,252
   A quantized aware training GGUF variant of Gemma 4 12B IT that delivers even faster inference without generation quality degradation.
4. **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | Author: unsloth | Likes: 128 | Downloads: 129,110
   A 4-bit GGUF quantization of the 26B Gemma 4 IT model, optimized for local consumer hardware deployment.
5. **[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)** | Author: google | Likes: 123 | Downloads: 96,749
   The official Google-released 4-bit QAT GGUF variant of Gemma 4 12B IT, eliminating the need for community users to manually quantize the flagship model.
6. **[OBLITERATUS/Gemma-4-12B

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*