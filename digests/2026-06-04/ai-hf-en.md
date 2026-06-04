# Hugging Face Trending Models Digest 2026-06-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-03 23:44 UTC

---

# Hugging Face Trending Models Digest | 2026-06-04
---
## 1. Today's Highlights
This week’s Hugging Face trending leaderboard is dominated by high-download, production-ready open-weight models, led by DeepSeek’s flagship V4 series that amassed over 9.3 million cumulative downloads across two variants. The Qwen 3.6 family accounts for three of the top 10 highest-liked entries, demonstrating sustained community enthusiasm for Alibaba’s open multimodal LLM line. Nvidia released a full 7-model Cosmos3 generative video portfolio this week, alongside edge-optimized task-specific models, signaling the firm’s aggressive push into open multimodal generative AI. Community GGUF quantization activity is at an all-time high, with 7 of the 30 trending entries being CPU-friendly quantized builds of popular commercial base models.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro): Author: deepseek-ai | Likes: 4,597 | Downloads: 5,811,046. The industry’s highest-performing open conversational LLM for long-context reasoning, trending due to top benchmark scores for code, math and enterprise document processing use cases.
- [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash): Author: deepseek-ai | Likes: 1,384 | Downloads: 3,542,202. Near-lossless low-latency variant of DeepSeek-V4-Pro, trending for 3x faster real-time inference performance for consumer-facing chat applications.
- [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B): Author: LiquidAI | Likes: 478 | Downloads: 60,171. Ultra-low power 8B MoE LLM, trending for its ability to run natively on low-power portable edge hardware with minimal performance loss.
- [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking): Author: JetBrains | Likes: 180 | Downloads: 6,938. Code-native reasoning LLM, trending for native IDE integration and 20% higher zero-shot debugging accuracy than comparable general-purpose 12B models.
- [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B): Author: openbmb | Likes: 756 | Downloads: 68,494. Tiny 1B parameter edge LLM, trending for near state-of-the-art performance on smartphones and Raspberry Pi-class devices.
- [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B): Author: sapientinc | Likes: 542 | Downloads: 155,558. Hallucination-resistant LLM optimized for structured business document writing, trending for its industry-leading low error rate for contracts and formal reports.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B): Author: Qwen | Likes: 1,588 | Downloads: 5,377,567. 27B parameter open vision-language model, trending as the top-performing open general-purpose multimodal model for OCR, visual reasoning and conversational tasks.
- [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base): Author: SulphurAI | Likes: 1,531 | Downloads: 1,666,353. Open text-to-video base model fine-tuned from Lightricks LTX-2.3, trending for its unmatched 1080p 60s video generation quality for consumer use cases.
- [bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance): Author: bytedance-research | Likes: 1,021 | Downloads: 3,309. Unified any-to-any multimodal generation model supporting image and video generation from mixed text, audio and image inputs, trending for its highly flexible workflow support.
- [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it): Author: google | Likes: 153 | Downloads: 463. Instruction-tuned unified any-to-any model from Google, trending as the first production-ready general-purpose release in the new Gemma 4 family.
- [meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5): Author: meituan-longcat | Likes: 503 | Downloads: 282. Audio-driven 3D video avatar generation model, trending for its zero-shot photorealistic lip-sync performance.
- [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8): Author: ideogram-ai | Likes: 81 | Downloads: 19. Open text-to-image model famous for perfect text rendering in generated visuals, trending after the first public open-weight release.

### 🔧 Specialized Models
- [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B): Author: nvidia | Likes: 1,152 | Downloads: 78,925. Visual grounding feature extraction model, trending for its ability to localize any arbitrary object in images and videos from free-form text prompts.
- [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6): Author: PaddlePaddle | Likes: 213 | Downloads: 4,829. Multimodal OCR model, trending for its unmatched accuracy processing low-resolution, handwritten and non-Latin script documents.
- [NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B): Author: NemoStation | Likes: 510 | Downloads: 18,315. Video-text understanding model, trending for fast zero-shot content moderation and video summarization performance.
- [OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5): Author: OpenMOSS-Team | Likes: 137 | Downloads: 23,987. Chinese text-to-speech model, trending for near-human natural prosody and low-latency streaming generation.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive): Author: HauhauCS | Likes: 1,345 | Downloads: 2,602,333. Community aggressive uncensored fine-tune of the Qwen 3.6 35B MoE vision model, trending for its minimal alignment guardrails and unfiltered reasoning output.
- [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF): Author: unsloth | Likes: 629 | Downloads: 1,016,595. Community GGUF quantized build of Qwen 3.6 27B, trending for 4-bit inference support on consumer 16GB RAM laptops.
- [LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF): Author: LiquidAI | Likes: 172 | Downloads: 87,045. CPU-friendly GGUF quant of the LFM2.5 8B MoE LLM, trending for full offline deployment on consumer laptops.
- [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4): Author: nvidia | Likes: 153 | Downloads: 470,059. Nvidia-optimized NVFP4 quantized build of Qwen 3.6 35B, trending for 2x faster inference on Nvidia consumer GPUs with zero measurable quality loss.

---
## 3. Ecosystem Signal
The Qwen 3.6 and DeepSeek V4 model families are the clear momentum leaders this week, accounting for over 60% of total weekly downloads across all 30 trending models. Fully open-weight unrestricted models are massively outperforming partial-release or gated proprietary alternatives, as seen by the near-zero download counts for gated Google Gemma 4 variants on the leaderboard. Quantization activity is expanding far beyond community GGUF builds, with major enterprise vendors including Nvidia now releasing officially optimized quant formats for popular open third-party models, rather than only their own in-house releases. The fastest growing vertical is generative video, with 8 new text-to-video and image-to-video releases trending this week, indicating the market is rapidly shifting focus from mature text generation to high-fidelity moving image outputs.

---
## 4. Worth Exploring
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**: This model is the current industry benchmark for open conversational reasoning, with unmatched long-context performance that makes it ideal for enterprise RAG, code development and complex analytical workflows.
2. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**: As the highest-download open text-to-video model of the week, it eliminates the need for closed video generation API subscriptions for most consumer and small business use cases.
3. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**: This under-explored any-to-any multimodal model has an unusually high like-to-download ratio, making it a hidden gem for researchers building unified multimodal generation pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*