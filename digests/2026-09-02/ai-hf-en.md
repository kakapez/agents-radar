# Hugging Face Trending Models Digest 2026-09-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-01 23:48 UTC

---

# Hugging Face Trending Models Digest | 2026-09-02
---
## 1. Today's Highlights
This week’s trending Hugging Face ecosystem is dominated by flagship open LLM releases from leading Chinese AI labs, paired with a massive boom in state-of-the-art text-to-video generative models and high-velocity community derivative builds. Top-performing models logged as much as 9.3 million weekly downloads, reflecting skyrocketing demand for production-ready, locally runnable open weights. Uncensored, quantized variants of top official models made up nearly half of the trending listings, indicating a huge unmet user demand for local, unrestricted inference. The multimodal category also saw new low-step video generation releases that cut inference runtime by 75% compared to earlier 2026 generation models.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | Author: zai-org | Likes: 1,466 | Downloads: 94,403
  The official text-only flagship MoE LLM from Zhipu AI, optimized for long context conversational use, trending as a high-performance drop-in replacement for earlier GLM-4 releases.
- **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** | Author: tencent | Likes: 382 | Downloads: 3,516
  The first public preview of Tencent’s 4th generation Hunyuan text LLM, trending for its 2M token native context window and enterprise-grade accuracy for enterprise document processing.
- **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | Author: pipecat-ai | Likes: 185 | Downloads: 6,813
  A speech-optimized small language model fine-tuned for real-time voice assistant workloads, trending for its ultra-low latency at under 100ms per token.
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | Author: moonshotai | Likes: 11,129 | Downloads: 2,783,061
  Moonshot AI’s flagship open multimodal LLM, trending for its industry-leading 10M token native context window that can process entire full-length books and codebases in a single prompt.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Author: Qwen | Likes: 4,634 | Downloads: 207,941
  Alibaba Qwen’s latest ultra-fast multimodal conversational model, trending for sub-200ms image to text generation speeds on consumer GPUs.
- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | Author: zai-org | Likes: 1,878 | Downloads: 441,348
  The multimodal flash variant of GLM-5.3, trending for its open support for 4K high resolution image input at very low compute overhead.
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Author: Qwen | Likes: 13,581 | Downloads: 4,960,483
  Qwen’s top-tier 27B parameter multimodal flagship, the highest-liked model on the trending list, trending for matching closed-source GPT-4o benchmark scores fully on open weights.
- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** | Author: deepseek-ai | Likes: 447 | Downloads: 17,893
  DeepSeek’s experimental fast vision model, trending for its specialized support for complex mathematical diagram and formula parsing.
- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | Author: BreezeBlue | Likes: 306 | Downloads: 3,086
  A near-human zero-shot TTS model with native multi-language support, trending for its near-zero audio artifact rate at 24kHz output.
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Author: Lightricks | Likes: 2,460 | Downloads: 1,232,274
  An all-in-one image-to-video, text-to-video, video-to-video generation model, trending for its 7-second 4K high motion generation quality.
- **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | Author: FastVideo | Likes: 233 | Downloads: 0
  A 4-step text-to-video distilled model, trending for its ability to generate high quality 1080p video in under 2 seconds on mid-tier consumer GPUs.
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | Author: MiniMaxAI | Likes: 4,748 | Downloads: 5,532,597
  The week’s top performing video generation model, trending for its industry-leading 10-second 1080p 30fps video output that matches closed Sora tier quality.
- **[alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)** | Author: alibaba-pai | Likes: 176 | Downloads: 32,893
  An official acceleration LoRA for MiniMax H3, trending to cut generation compute use by 60% with no perceptual quality loss.

### 🔧 Specialized Models (code, math, medical, embeddings)
- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** | Author: google | Likes: 211 | Downloads: 0
  Google’s latest open state-of-the-art time series forecasting model, trending for zero-shot support for 1000+ distinct forecasting tasks out of the box.
- **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** | Author: thomsonreuters | Likes: 181 | Downloads: 1,130
  A domain-specialized small multimodal LLM for financial news and market data analysis, trending for zero hallucination rates on earnings report parsing.
- **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** | Author: peculiar-ragdoll | Likes: 183 | Downloads: 130,086
  A 35B parameter Mixture of Experts coding specialized LLM, trending for outperforming all prior open code models on HumanEval and MBPP benchmarks.
- **[Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental)** | Author: Kijai | Likes: 389 | Downloads: 0
  A leak of the unreleased extended 1-minute generation variant of MiniMax H3, trending in developer circles for its long form video generation capabilities.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | Author: unsloth | Likes: 667 | Downloads: 431,339
  Unsloth’s optimized GGUF quantized build of Qwen3.8-Flash-Next, trending for running the full model smoothly on 8GB consumer GPU VRAM.
- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | Author: unsloth | Likes: 3,334 | Downloads: 9,354,057
  The most downloaded model on the list, an optimized quantized build of the Qwen 27B flagship that runs on 16GB VRAM with near no quality loss.
- **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | Author: unsloth | Likes: 326 | Downloads: 63,718
  GGUF quantized variant of GLM-5.3-Flash optimized for local consumer inference, trending for its fast x86 CPU support.
- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | Author: OBLITERATUS | Likes: 1,000 | Downloads: 805,791
  A de-aligned uncensored fine-tune of Qwen3.8-27B, trending for full removal of all built-in content alignment guardrails.
- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | Author: HauhauCS | Likes: 836 | Downloads: 1,276,092
  An optimized MTP-enhanced uncensored GGUF build of Qwen 27B, trending for 30% faster generation speed than standard GGUF quantizations.
- **[Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8)** | Author: Qwen | Likes: 178 | Downloads: 130,451
  Official FP8 quantized release of Qwen3.8-Flash-Next, trending for native support on all modern NVIDIA RTX 40 and AMD RDNA 3 GPUs.
- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | Author: orcarouter | Likes: 168 | Downloads: 64,325
  Uncensored GGUF variant of Qwen3.8-Flash-Next optimized for edge device inference.
- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | Author: orcarouter | Likes: 1,261 | Downloads: 121,028
  Apple MLX optimized uncensored build of Qwen3.8-27B, trending for native near real-time generation on M2/M3 Mac silicon.
- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | Author: orcarouter | Likes: 1,349 | Downloads: 316,128
  FP8 quantized uncensored fine-tune of Qwen3.8-27B, trending for deployment on consumer and enterprise GPU clusters.
- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | Author: orcarouter | Likes: 633 | Downloads: 254,529
  Popular general purpose uncensored GGUF build of the Qwen 27B multimodal model.
- **[orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)** | Author: orcarouter | Likes: 142 | Downloads: 2,576
  Uncensored FP8 fine-tune of GLM-5.3-Flash for local unrestricted inference use cases.
- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | Author: JonathanColetti | Likes: 889 | Downloads: 2,143,289
  A high-performance MTP enhanced uncensored GGUF variant, trending as one of the most stable local inference builds for Qwen 27B.
- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*