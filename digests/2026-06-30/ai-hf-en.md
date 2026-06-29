# Hugging Face Trending Models Digest 2026-06-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-29 22:58 UTC

---

# Hugging Face Trending Models Digest (2026-06-30)
---
## 1. Today's Highlights
This week’s trending Hugging Face models reflect a clear push toward production-ready, edge-optimized open-weight AI across every use case tier. The top-listed release overall is Zai-org’s GLM-5.2 MoE conversational LLM, which accumulated nearly 3,000 weekly likes to lead all model entries. Multiple Qwen3.5 and Qwen3.6 derived models surpassed 3 million weekly downloads, as demand for unrestricted, locally runnable multimodal variants exploded. Leading enterprise AI vendors including Nvidia, Baidu, and DeepSeek all launched purpose-built optimized releases tailored for low-latency enterprise and consumer hardware deployment. Community fine-tune and quantization activity also reached a new 2026 peak, with nearly half the top 30 models being user-optimized GGUF variants for local execution.
---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org | Likes: 2,928 | Downloads: 133,350
  The highest-liked release on the chart, this state-of-the-art MoE conversational LLM draws massive interest for its industry-leading 1M+ long context reasoning and low hallucination rates.
- [Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | Author: Qwen | Likes: 434 | Downloads: 26,223
  Qwen’s purpose-built agent-native MoE LLM, optimized specifically for multi-step tool use, embodied navigation planning, and multi-agent collaboration tasks.
- [deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) | Author: deepreinforce-ai | Likes: 272 | Downloads: 19,170
  A lightweight, MIT-licensed general-purpose LLM fine-tuned on the Qwen3.5 base, targeted at low-cost production workloads.
- [deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | Author: deepseek-ai | Likes: 211 | Downloads: 5,460
  DeepSeek’s flagship updated LLM paired with a proprietary distributed inference framework for high-throughput enterprise serving.
- [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | Author: microsoft | Likes: 369 | Downloads: 7,027
  A compact 4B context-efficient LLM designed to act as a dedicated sub-agent to reduce long-context compute overhead for larger systems.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu | Likes: 1,362 | Downloads: 362,945
  A breakthrough unrestricted OCR model that extracts text from any distorted, handwritten, or low-quality visual input with near-zero error rates.
- [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | Author: krea | Likes: 392 | Downloads: 38,454
  A speed-optimized text-to-image model that generates photorealistic 1024px outputs in under 1 second for real-time creative workflows.
- [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia | Likes: 2,478 | Downloads: 728,320
  A universal visual grounding model that locates any user-specified object in images directly from natural language prompts with no custom fine-tuning required.
- [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | Author: nvidia | Likes: 742 | Downloads: 76,154
  An ultra-low-latency streaming ASR model optimized for real-time transcription of high-volume speech streams at sub 100ms latency.
- [fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA) | Author: fal | Likes: 115 | Downloads: 0
  A LoRA adapter for the LTX video generation suite that adds consistent 3D scene geometry for photorealistic text-to-video outputs.

### 🔧 Specialized Models (code, math, domain-specific)
- [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | Author: WeiboAI | Likes: 748 | Downloads: 63,449
  A compact 3B LLM fine-tuned to deliver 90%+ accuracy on standard K-12 and university mathematical reasoning benchmarks for consumer local execution.
- [Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable) | Author: Chunjiang-Intelligence | Likes: 129 | Downloads: 1,463
  A DeepSeek V4 fine-tune purpose-built for cybersecurity threat detection, vulnerability scanning, and penetration testing workflow support.
- [deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark) | Author: deepseek-ai | Likes: 95 | Downloads: 2,239
  A latency-optimized DeepSeek V4 variant designed for real-time interactive use cases such as customer support and live chat.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, optimized variants)
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai | Likes: 937 | Downloads: 907,682
  A 1M context window quantized GGUF Qwen3.5 fine-tune optimized for local reasoning and creative writing workloads on consumer hardware.
- [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | Author: yuxinlu1 | Likes: 2,501 | Downloads: 561,577
  A highly popular 12B Gemma4 GGUF fine-tune with industry-leading 92% HumanEval coding performance for local developer use.
- [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | Author: unsloth | Likes: 464 | Downloads: 164,180
  A Unsloth-optimized GGUF quantization of GLM-5.2 that runs 30% faster on llama.cpp compatible hardware with minimal accuracy loss.
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS | Likes: 2,330 | Downloads: 3,089,944
  An unrestricted uncensored multimodal Qwen3.6 MoE GGUF fine-tune that is fully unaligned for personal and research use.
- [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | Author: nvidia | Likes: 378 | Downloads: 5,392,518
  A hardware-optimized NVFP4 4-bit quantization of Qwen3.6 that delivers 2x higher throughput on Nvidia consumer and data center GPUs.
---
## 3. Ecosystem Signal
Chinese open model families Qwen and GLM have cemented their lead over Western alternative lines, accounting for over 60% of all high-download trending entries this week, as their unrestricted licensing and strong performance drive mass adoption. Fully open-weight models now make up 100% of the top trending releases, indicating users are prioritizing full control over their AI workloads over closed proprietary SaaS alternatives. Quantization activity has reached a new peak: 50% of top 30 models are GGUF variants optimized for local llama.cpp execution, while Nvidia’s proprietary NVFP4 hardware optimized quantizations have seen explosive adoption exceeding

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*