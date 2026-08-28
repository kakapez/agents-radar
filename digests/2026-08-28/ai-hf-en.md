# Hugging Face Trending Models Digest 2026-08-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-28 05:58 UTC

---

# Hugging Face Trending Models Digest | 2026-08-28
---
## 1. Today's Highlights
As of this week, the Hugging Face trending leaderboard is overwhelmingly dominated by open-weight releases from Chinese foundation model developers, with the Qwen family accounting for over half of the top 30 most-listed models. Standout high-engagement drops include Qwen’s flagship Qwen3.8-27B LLM, Moonshot AI’s Kimi-K3 multimodal model, and MiniMax’s viral MiniMax-H3 text-to-video model, all pulling in 10k+ likes and millions of cumulative downloads. Community quantization and fine-tuning pipelines are seeing disproportionate user traction, with multiple derivative GGUF models logging far higher download counts than their official base counterparts. Niche tooling for popular model ecosystems, such as fixed chat template repositories, are also gaining unexpected mainstream adoption among developers.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Author: Qwen, Likes: 13,064, Downloads: 3,457,687
  Flagship 27B parameter multimodal conversational LLM from Qwen, trending as the current most popular open-weight base LLM for general-purpose chat and instruction use cases.
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | Author: moonshotai, Likes: 11,044, Downloads: 2,829,554
  State-of-the-art open multimodal LLM from Moonshot AI, trending for its GPT-4o comparable reasoning performance and compressed tensor optimization for fast inference.
- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | Author: deepseek-ai, Likes: 3,768, Downloads: 3,959,575
  Fast inference optimized text generation LLM from DeepSeek, trending for its low latency and strong long context support for enterprise deployment.
- [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | Author: zai-org, Likes: 1,369, Downloads: 34
  Latest lightweight flash variant of the GLM 5 series, trending for its new image-text-to-text capability integrated into a small fast text generation backbone.
- [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | Author: ornith-ai, Likes: 467, Downloads: 88,102
  35B MoE LLM fine-tuned from Qwen 3.5, trending for its strong performance on creative writing and coding tasks.
- [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | Author: thomsonreuters, Likes: 135, Downloads: 349
  Small enterprise-grade news and legal analysis LLM, trending as a domain-specific drop from a major media organization.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | Author: MiniMaxAI, Likes: 4,543, Downloads: 4,855,095
  Leading open image-text-to-video diffusion model, trending for its 1080p 60s video generation capability that matches closed commercial products.
- [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Author: Qwen, Likes: 4,001, Downloads: 4,810
  New experimental fast multimodal Qwen variant, trending as the preview build of Qwen's upcoming next-generation multimodal pipeline.
- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Author: Lightricks, Likes: 1,943, Downloads: 912,729
  Single-file diffusion image-to-video model, trending for its ultra-simple deployment workflow with no external dependencies.
- [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | Author: MiniMaxAI, Likes: 1,277, Downloads: 19,726
  Open text-to-music generation model, trending for its ability to produce full-length high-fidelity tracks with lyric alignment.
- [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | Author: sensenova, Likes: 183, Downloads: 4,232
  All-to-any native multimodal model, trending for its ability to process and generate arbitrary text, audio, image and video outputs in a single pipeline.
- [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | Author: alibaba-pai, Likes: 149, Downloads: 3,344
  Unified controlnet for MiniMax H3, trending for adding fine-grained motion and composition control to the popular open video generation model.
- [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Author: Audio8, Likes: 181, Downloads: 4,477
  100M parameter ultra-light TTS model, trending for near-realtime performance running on edge devices.
- [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | Author: BreezeBlue, Likes: 132, Downloads: 240
  New natural speech TTS model, trending for its zero-shot voice cloning support with no prompt engineering required.
- [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Author: Qwen, Likes: 128, Downloads: 2,219
  Official FP8 quantized release of Qwen's experimental Flash-Next multimodal model, trending for fast inference on consumer GPUs.
- [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | Author: alibaba-pai, Likes: 118, Downloads: 609
  Performance fine-tune LoRAs for MiniMax H3, trending for cutting down video generation inference time by 70%.

### 🔧 Specialized Models
- [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | Author: froggeric, Likes: 1,504, Downloads: 0
  Community-maintained repository of corrected Jinja chat templates for all Qwen 3.5 and newer variants, trending as a critical utility that fixes common broken inference issues for Qwen deployments across frameworks.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | Author: unsloth, Likes: 3,088, Downloads: 7,758,790
  Unsloth quantized full GGUF suite of Qwen3.8-27B, trending as the most popular local deployment LLM distribution with support for all llama.cpp compatible hardware.
- [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | Author: unsloth, Likes: 470, Downloads: 4,354
  GGUF quantized release of experimental Qwen3.8-Flash-Next, trending for enabling the new multimodal preview model to run on consumer hardware.
- [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | Author: OBLITERATUS, Likes: 857, Downloads: 509,270
  Abliterated unrestricted fine-tune of Qwen3.8-27B, trending for its full removal of alignment guardrails for unfiltered local use.
- [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | Author: orcarouter, Likes: 1,212, Downloads: 273,577
  FP8 quantized uncensored Qwen3.8-27B fine-tune, trending for near lossless performance with no content restrictions.
- [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | Author: orcarouter, Likes: 1,169, Downloads: 83,352
  MLX port of the uncensored Qwen3.8-27B variant, trending for optimized native performance on Apple Silicon hardware.
- [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | Author: HauhauCS, Likes: 693, Downloads: 938,219
  GGUF uncensored Qwen3.8-27B with multi-token prediction optimization, trending for 2x faster generation speed with no quality loss.
- [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | Author: unsloth, Likes: 215, Downloads: 0
  In-progress GGUF quantized release of GLM-5.3-Flash, trending for early access to the community's GLM quantization pipeline.
- [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | Author: JonathanColetti, Likes: 786, Downloads: 1,666,948
  Community GGUF distribution of uncensored Qwen3.8-27B, trending as the highest-performing MTP-enabled GGUF build for consumer hardware.
- [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | Author: orcarouter, Likes: 497, Downloads: 188,460
  Full GGUF suite of orcarouter's uncensored Qwen3.8-27B, trending for its wide range of quantization sizes for edge to server deployments.
- [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | Author: huihui-ai, Likes: 406, Downloads: 1,355,482
  Abliterated Qwen3.8-27B GGUF variant, trending for its optimized 4-bit quantization that fits on 8GB consumer GPUs.
- [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | Author: ornith-ai, Likes: 327, Downloads: 1,469,059


---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*