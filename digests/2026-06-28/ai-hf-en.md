# Hugging Face Trending Models Digest 2026-06-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-27 23:02 UTC

---

# Hugging Face Trending Models Digest | 2026-06-28
---
## 1. Today's Highlights
This week’s Hugging Face trending list is led by a wave of high-performance open-weight large language model updates, anchored by the 2.67k weekly likes earned by the newly released zai-org/GLM-5.2 conversational MoE LLM. Standout download metrics show edge-deployable, community-modified quantized models are massively outpacing base model uptake, with one Qwen 3.6 derived quant exceeding 5 million total downloads. New specialized releases span enterprise-grade unlimited OCR, precise spatial localization vision models, and fast streaming ASR tools from major vendors including Baidu, NVIDIA, and Microsoft. Uncensored, use case-focused community fine-tunes of popular base models account for 4 of the top 10 highest-downloaded assets on the hub this period.
---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org | Likes: 2,670 | Downloads: 98,994
  A state-of-the-art MoE DSA conversational text generation LLM, trending as one of the highest-performing open-weight general-purpose chat models released in Q2 2026.
- [Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | Author: Qwen | Likes: 356 | Downloads: 18,872
  A 35B multimodal MoE LLM optimized for autonomous agent workflow orchestration, trending among AI agent development teams.
- [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | Author: WeiboAI | Likes: 742 | Downloads: 57,521
  A compact 3B Qwen2-derived LLM fine-tuned for advanced mathematical reasoning, trending for its small size and high accuracy on math benchmark tasks.
- [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | Author: microsoft | Likes: 365 | Downloads: 6,447
  A 4B Qwen3-derived LLM optimized for low-latency long-context sub-agent execution, trending for enterprise multi-agent system development.
- [deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | Author: deepseek-ai | Likes: 120 | Downloads: 0
  The latest flagship DeepSeek V4 Pro LLM built for distributed spark inference, trending following its associated research paper publication.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu | Likes: 1,135 | Downloads: 212,760
  A unrestricted, high-accuracy image-to-text OCR model with no page or resolution limits, trending as a drop-in free alternative to commercial paid OCR APIs.
- [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | Author: MiniMaxAI | Likes: 1,252 | Downloads: 182,714
  A leading open full multimodal vision-language model that supports interleaved image, text and audio inputs, trending for its near-commercial proprietary performance.
- [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia | Likes: 2,405 | Downloads: 570,466
  A 3B vision model for zero-shot spatial object localization in any image, trending for robotics and autonomous computer vision use cases.
- [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | Author: krea | Likes: 309 | Downloads: 17,445
  A fast inference text-to-image diffusion model optimized for near real-time generation, trending for creative AI tool integrations.
- [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | Author: nvidia | Likes: 718 | Downloads: 61,857
  A 0.6B parameter streaming automatic speech recognition model, trending for low-latency real-time transcription workflows.
- [krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw) | Author: krea | Likes: 214 | Downloads: 17,748
  The unfiltered base version of the Krea 2 text-to-image model, trending for custom fine-tuning by generative AI artists.

### 🔧 Specialized Models (code, math, agent, embeddings)
- [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | Author: yuxinlu1 | Likes: 2,425 | Downloads: 536,130
  A Gemma 4 derived coding-focused LLM fine-tuned for full-stack software development, trending for its top performance on coding benchmarks at its size class.
- [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | Author: yuxinlu1 | Likes: 729 | Downloads: 206,828
  An agent-optimized 12B Gemma 4 LLM fine-tuned for terminal tool use, trending for local autonomous coding agent deployment.
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | Author: empero-ai | Likes: 486 | Downloads: 30,298
  A 9B Qwen3.5 multimodal reasoning fine-tune, trending for its near-Claude level long context reasoning capabilities.
- [Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable) | Author: Chunjiang-Intelligence | Likes: 112 | Downloads: 1,328
  A DeepSeek V4 derived fine-tune optimized for cybersecurity analysis tasks, trending among offensive and defensive security research teams.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS | Likes: 2,277 | Downloads: 3,331,475
  A fully uncensored, vision-enabled Qwen 3.6 35B MoE GGUF quant, trending as the most popular local deployable unrestricted multimodal LLM this week.
- [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | Author: nvidia | Likes: 366 | Downloads: 5,022,254
  A NVIDIA hardware optimized NVFP4 quantized version of the Qwen 3.6 35B MoE model, trending for maximum performance per watt on production NVIDIA GPU clusters.
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai | Likes: 670 | Downloads: 712,627
  The GGUF quantized version of the Qwythos 9B reasoning model for CPU/low-resource edge deployment, trending for local LLM users running on consumer hardware.
- [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | Author: unsloth | Likes: 426 | Downloads: 125,230
  A community optimized GGUF quant of the GLM-5.2 MoE model, trending for fast local inference on consumer hardware.
- [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | Author: deepreinforce-ai | Likes: 315 | Downloads: 20,266
  A MIT-licensed 35B Qwen3.5 MoE GGUF fine-tune, trending for commercial use cases with no restrictive licensing terms.
- [deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF) | Author: deepreinforce-ai | Likes: 219 | Downloads: 11,034
  A MIT-licensed 9B Qwen3.5 GGUF fine-tune, trending for unrestricted commercial small LLM deployment.
- [HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced) | Author: HauhauCS | Likes: 96 | Downloads: 32,222
  An uncensored, vision-enabled Gemma 4 12B GGUF fine-tune, trending for balanced multimodal performance on local hardware.
- [Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF) | Author: Jackrong | Likes: 97 | Downloads: 49,935
  A 27B Qwen 3.6 derived coding GGUF multimodal model, trending for local code generation with visual context support.
- [nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4) | Author: nvidia | Likes: 124 | Downloads: 6,464
  NVIDIA's hardware optimized NVFP4 quant of GLM-5.2, trending for production deployment on NVIDIA enterprise GPU stacks.
- [deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) | Author: deepreinforce-ai | Likes: 164 | Downloads: 1,501
  Full precision MIT-licensed 9B Qwen3.5 fine-tune, trending for custom fine-tuning by commercial teams.
- [deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B) | Author: deepreinforce-ai | Likes: 158 | Downloads: 7,571
  Full precision MIT-licensed 35B Qwen3.5 MoE fine-tune, trending for unrestricted commercial LLM development.
- [deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B) | Author: deepreinforce-ai | Likes: 120 | Downloads: 463
  Full precision MIT-licensed 397B Qwen3.5 MoE flagship model, trending among large-scale LLM research teams.
- [LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M) | Author: LiquidAI | Likes: 128 | Downloads: 9,791
  A 230M parameter tiny LLM optimized for edge devices, trending for ultra-low footprint embedded AI deployments.
- [huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated) | Author: huihui-ai | Likes: 137 | Downloads: 6,250
  An abliterated uncensored fine-tune of the Gemma 4 12B coder model, trending for unrestricted local coding use cases.
- [Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2) | Author: Comfy-Org | Likes: 156 | Downloads: 10
  Official ComfyUI adapter pack for the Krea 2 text-to-image model, trending for creative workflow integration.
---
## 3. Ecosystem Signal
The Qwen model family is the clear dominant momentum leader this period, with 8 out

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*