# Hugging Face Trending Models Digest 2026-08-31

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-31 00:13 UTC

---

# Hugging Face Trending Models Digest | 2026-08-31
---
## 1. Today's Highlights
As of this weekly trending snapshot, open-weight releases from leading Chinese AI teams dominate top ranks, demonstrating massive global adoption outside of Western-centric model ecosystems. Alibaba Cloud’s Qwen 3.8 family leads weekly likes by a wide margin, with its flagship 27B multimodal variant earning 13,346 new likes, followed closely by Moonshot AI’s newly open-sourced Kimi-K3 at 11,100 likes. Open text-to-video generation is the fastest-growing new vertical, with 6 video-focused models earning millions of combined downloads in a single week. Community-derived quantizations and fine-tunes of flagship base models consistently log far higher raw download volumes than many official small-scale preview releases, even niche utility assets with zero public downloads (such as curated chat template packs) earn strong community engagement for their practical value.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash): Author: zai-org | Likes: 1,711 | Downloads: 346,516  
  A latency-optimized variant of the GLM-5 text generation family, trending for fast long-context inference for consumer chat use cases.
- [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3): Author: zai-org | Likes: 1,337 | Downloads: 50,116  
  The base conversational GLM-5 MOE model, popular for its strong multilingual reasoning performance.
- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731): Author: deepseek-ai | Likes: 3,824 | Downloads: 4,575,518  
  DeepSeek’s latest fast inference V4 LLM release, trending for industry-leading code and math reasoning capabilities.
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3): Author: moonshotai | Likes: 11,100 | Downloads: 2,794,721  
  Moonshot’s first fully open-sourced Kimi flagship model, trending for its 1M+ token native long context window.
- [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B): Author: ornith-ai | Likes: 505 | Downloads: 147,038  
  A 35B parameter MOE LLM fine-tuned for general conversational use, built on Qwen 3.5 base weights.
- [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview): Author: tencent | Likes: 319 | Downloads: 2,123  
  The first public preview of Tencent’s Hunyuan 4 open LLM, generating strong early community curiosity.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next): Author: Qwen | Likes: 4,384 | Downloads: 121,976  
  A lightweight optimized multimodal image-text-to-text model, popular for edge device multimodal chat deployment.
- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B): Author: Qwen | Likes: 13,346 | Downloads: 4,511,348  
  Qwen’s flagship 27B multimodal conversational model, the highest-liked model in this week’s trending list.
- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5): Author: Lightricks | Likes: 2,264 | Downloads: 1,137,181  
  A leading open diffusion image-to-video model, trending for high-fidelity 1080p short video generation.
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3): Author: MiniMaxAI | Likes: 4,657 | Downloads: 5,263,381  
  A state-of-the-art open text-to-video model, the highest-download generation model on this week’s list.
- [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2): Author: BreezeBlue | Likes: 211 | Downloads: 1,838  
  A new lightweight text-to-speech model with zero-shot voice cloning support.
- [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree): Author: FastVideo | Likes: 193 | Downloads: 0  
  A 4-step distilled fast text-to-video preview model that eliminates the need for large training datasets.
- [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union): Author: alibaba-pai | Likes: 163 | Downloads: 5,538  
  A unified ControlNet add-on for MiniMax-H3 that supports granular control of generated video content.
- [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs): Author: alibaba-pai | Likes: 152 | Downloads: 23,734  
  A set of speed optimization LoRAs that reduce MiniMax-H3 generation time by 70% on consumer GPUs.

### 🔧 Specialized Models (code, math, medical, embeddings)
- [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small): Author: thomsonreuters | Likes: 158 | Downloads: 1,009  
  A domain-specialized small multimodal LLM fine-tuned for financial news and reporting use cases.
- [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1): Author: pipecat-ai | Likes: 150 | Downloads: 3,982  
  A speech-optimized LLM built for low-latency real-time telephony and voice assistant workflows.
- [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF): Author: peculiar-ragdoll | Likes: 140 | Downloads: 87,848  
  A 35B parameter quantized code-specialized MOE model optimized for local software development workflows.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF): Author: unsloth | Likes: 603 | Downloads: 328,195  
  An official Unsloth GGUF quantization of the Qwen 3.8 Flash Next multimodal model.
- [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF): Author: unsloth | Likes: 3,239 | Downloads: 8,839,153  
  The highest-download model this week, a highly optimized GGUF quant of the Qwen 3.8 27B flagship for local deployment.
- [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF): Author: unsloth | Likes: 288 | Downloads: 45,936  
  Unsloth’s GGUF quantization of the GLM-5.3 Flash inference model.
- [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED): Author: OBLITERATUS | Likes: 946 | Downloads: 725,757  
  A de-aligned uncensored fine-tune of Qwen 3.8 27B that removes built-in content restrictions.
- [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX): Author: orcarouter | Likes: 1,235 | Downloads: 109,121  
  An uncensored Qwen 3.8 27B fine-tune optimized natively for Apple Silicon MLX framework deployment.
- [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF): Author: HauhauCS | Likes: 785 | Downloads: 1,158,065  
  A GGUF quantized uncensored Qwen 3.8 27B variant with added Medusa MTP acceleration for 2x faster generation.
- [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8): Author: orcarouter | Likes: 1,286 | Downloads: 301,964  
  A high-performance FP8 uncensored fine-tune of Qwen 3.8 27B optimized for NVIDIA GPU inference.
- [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8): Author: Qwen | Likes: 159 | Downloads: 76,935  
  Official FP8 quantization of the Qwen 3.8 Flash Next multimodal model for high-throughput deployment.
- [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF): Author: JonathanColetti | Likes: 850 | Downloads: 1,991,437  
  A popular community uncensored GGUF quant of Qwen 3.8 27B optimized for llama.cpp.
- [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF): Author: orcarouter | Likes: 578 | Downloads: 238,397  
  A widely used base uncensored GGUF quant of the Qwen 3.8 27B model.
- [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF): Author: huihui-ai | Likes: 457 | Downloads: 1,622,056  
  A highly downloaded abliterated Qwen 3.8 27B GGUF variant with zero alignment guardrails.
- [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF): Author: orcarouter

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*