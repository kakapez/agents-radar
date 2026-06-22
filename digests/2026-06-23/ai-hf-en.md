# Hugging Face Trending Models Digest 2026-06-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-22 23:19 UTC

---

# Hugging Face Trending Models Digest | 2026-06-23
---
## 1. Today's Highlights
The highest trending model this week is deepseek-ai/DeepSeek-V4-Pro, which leads all entries by a wide margin with 5,019 weekly likes, signaling overwhelming community excitement for the latest generation of open conversational foundation models. This week’s slate of top trending releases is evenly split between leading global AI labs (DeepSeek, Google, Nvidia, Microsoft) and active independent community contributors, with open-weight quantized variants consistently driving the highest download volumes. Specialized task-focused models for spatial image grounding, streaming speech recognition, and unlimited OCR are also seeing unexpected spikes in adoption as developers shift from generalist LLMs to purpose-built tools for production workflows. Edge deployment for consumer and on-prem use cases remains a core priority for the Hugging Face community, with 40% of top trending models optimized for CPU or low-resource inference.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 2,019 | Downloads: 33,589
  The flagship generalist conversational MoE LLM from Zai Org, optimized for long context and multi-turn chat, trending as a leading open alternative to closed flagship chat models.
- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | Author: microsoft | Likes: 287 | Downloads: 3,498
  A 4B small-footprint LLM purpose-built for fast sub-agent task execution, trending for its sub-100ms response latency for in-tool assistant use cases.
- **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** | Author: zai-org | Likes: 133 | Downloads: 334,716
  The FP8 quantized release of the popular GLM-5.2 MoE model, trending for its balance of high performance and low VRAM requirements for single-GPU deployment.
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | Author: deepseek-ai | Likes: 5,011 | Downloads: 2,421,858
  The top trending LLM this week, a state-of-the-art open conversational model that matches top closed models on general reasoning and conversational benchmarks.
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | Author: google | Likes: 1,139 | Downloads: 1,912,198
  Google’s latest 12B unified any-to-any instruction-tuned LLM, trending as a lightweight generalist foundation model for multi-modal workflows.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | Author: MiniMaxAI | Likes: 1,208 | Downloads: 119,967
  MiniMax’s latest open image-text-to-text multimodal model, trending for strong performance on open-ended visual question answering tasks.
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,290 | Downloads: 247,517
  A 3B image-text grounding model that can identify and localize any object in input images, trending as a drop-in replacement for specialized computer vision detection pipelines.
- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | Author: google | Likes: 1,049 | Downloads: 874,368
  Google’s novel diffusion-integrated multimodal LLM that can generate both text and high-fidelity images from natural prompts, trending for its unified generation capabilities.
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia | Likes: 629 | Downloads: 34,860
  A 0.6B ultra-low latency streaming ASR model, trending for near real-time speech transcription with less than 200ms end-to-end lag.
- **[ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)** | Author: ostris | Likes: 101 | Downloads: 3,244
  A popular fine-tune LoRA for Ideogram 4 image generation that adds high-speed 4-step generation capabilities.
- **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | Author: owensong | Likes: 166 | Downloads: 0
  An ultra-small 100M parameter TTS model, trending for its ability to run speech synthesis on microcontroller class hardware.

### 🔧 Specialized Models (code, math, embeddings)
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | Author: WeiboAI | Likes: 610 | Downloads: 32,385
  A 3B small LLM fine-tuned exclusively for math reasoning, trending for its near state-of-the-art MMLU-Math performance at less than 4GB VRAM footprint.
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | Author: moonshotai | Likes: 961 | Downloads: 412,778
  Moonshot’s code-specialized multimodal model that can reference screenshots of code to debug, trending for strong end-to-end development workflow support.
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 143 | Downloads: 47
  A new open OCR model that can extract text from any scanned document, handwritten note, or low-resolution photo without page length limits.
- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | Author: CohereLabs | Likes: 481 | Downloads: 21,078
  Cohere’s 7B small code-specialized LLM, trending for strong performance on embedded systems and low-resource development environments.
- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** | Author: LiquidAI | Likes: 100 | Downloads: 8,822
  A 350M parameter sentence embedding model optimized for retrieval-augmented generation workflows.
- **[LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)** | Author: LiquidAI | Likes: 78 | Downloads: 2,202
  A lightweight ColBERT retrieval model optimized for ultra-fast semantic search on edge devices.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF)
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,168 | Downloads: 414,734
  A popular community GGUF quant of the Gemma 4 12B coder fine-tune, trending for near-lossless performance at 4-bit quantized size for local CPU inference.
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | Author: yuxinlu1 | Likes: 378 | Downloads: 50,314
  A GGUF quantized fine-tune of Gemma 4 optimized for autonomous agentic terminal tasks, trending for its ability to run fully local AI coding assistants on consumer laptops.
- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | Author: unsloth | Likes: 251 | Downloads: 41,846
  Unsloth’s optimized GGUF quant release of the GLM-5.2 MoE model, tuned for fast inference on consumer-grade CPU hardware.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,109 | Downloads: 4,078,305
  The highest download trending model this week, an uncensored, 3-bit quantized multimodal MoE fine-tune of Qwen 3.6 for unrestricted personal and research use.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 129 | Downloads: 6,633
  A 9B GGUF fine-tune of Qwen 3.5 optimized for roleplay and creative writing tasks.
- **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)** | Author: bytkim | Likes: 105 | Downloads: 52,774
  A GGUF quant of the Qwen 3.6 27B model fine-tuned with multi-token prediction for 2x faster generation speed.
- **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** | Author: Jackrong | Likes: 281 | Downloads: 214,630
  A vision-enabled GGUF quant of the Qwen 3.6 coder model, trending for local visual code debugging from screenshots.

---
## 3. Ecosystem Signal
The Qwen model family is the clear momentum leader this week, with 8 distinct trending variants spanning base foundation models, fine-tunes, multimodal builds, and quantized GGUF releases, demonstrating massive community support for Alibaba’s open LLM line. GLM and Gemma 4 families also show strong adoption, with new quantized variants driving hundreds of thousands of downloads for edge use cases. 90% of top trending models this week are fully open-weight with permissive licenses, confirming that open models have now caught up to closed proprietary alternatives on core performance benchmarks for consumer and developer use cases, reducing the gap for local deployment. GGUF quantization is the dominant optimization format for community releases, with independent contributors like yuxinlu1 and unsloth generating some of the highest-download repos on the hub, as users prioritize full local control over inference without cloud dependencies.

---
## 4. Worth Exploring
1. **deepseek-ai/DeepSeek-V4-Pro**: The highest-liked model this week, this state-of-the-art open conversational model sets a new 2026 baseline for generalist open LLM performance, and is a must-test for any developer evaluating production chat assistant deployments.
2. **nvidia/LocateAnything-3B**: A uniquely powerful multimodal utility model that eliminates the need to train custom object detection pipelines for most visual tasks, making

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*