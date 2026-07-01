# Hugging Face Trending Models Digest 2026-07-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-01 23:15 UTC

---

# Hugging Face Trending Models Digest | 2026-07-02
---
## 1. Today's Highlights
This week’s Hugging Face trending rankings are led by flagship open large language model releases from Chinese AI development teams, with zai-org’s GLM-5.2 taking the top spot for weekly likes with over 3,100 new engagements. Unprecedented demand for locally runnable, unaligned multimodal models is on clear display, as a community fine-tuned Qwen 3.6 35B variant crossed 3 million weekly downloads, the highest volume on this week’s list. New specialized vision capabilities including unlimited-scenario OCR from Baidu and a lightweight open visual localization model from NVIDIA have also seen explosive user traction, alongside a wave of optimized quantizations targeting consumer hardware. Local inference tooling ecosystems for GGUF and ComfyUI are rapidly maturing, with dozens of community derivatives of top base models appearing in the trending rankings.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org, Likes: 3,168, Downloads: 159,967
  A state-of-the-art open conversational MoE language model built on the novel GLM MoE DSA architecture, trending as one of the highest-performing fully open base LLMs released in 2026.
- [deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) | Author: deepreinforce-ai, Likes: 332, Downloads: 46,677
  A lightweight 9B multimodal text generation base model fine-tuned from Qwen 3.5, trending for its MIT license that enables unencumbered commercial use.
- [deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B) | Author: deepreinforce-ai, Likes: 288, Downloads: 135,452
  A 35B MoE multimodal base model with full MIT licensing, trending for its strong reasoning and low commercial adoption friction.
- [deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B) | Author: deepreinforce-ai, Likes: 186, Downloads: 5,792
  A massive 397B parameter MoE flagship base model from DeepReinforce AI, trending as one of the largest fully open release models available.
- [deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | Author: deepseek-ai, Likes: 276, Downloads: 7,629
  An optimized version of DeepSeek’s latest V4 LLM built for distributed Spark inference workloads, trending for enterprise large-scale deployment use cases.
- [deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark) | Author: deepseek-ai, Likes: 123, Downloads: 13,038
  A faster inference variant of DeepSeek V4 optimized for low-latency Spark pipeline deployments, trending for real-time enterprise generative AI workflows.
- [LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M) | Author: LiquidAI, Likes: 180, Downloads: 21,935
  An ultra-small 230M parameter edge-optimized LLM, trending for deployment on low-power embedded and IoT hardware.
- [InternScience/Agents-A1](https://huggingface.co/InternScience, Likes: 138, Downloads: 511)
  A purpose-built multimodal agent base model trained on real-world interactive task datasets, trending for autonomous agent development.
- [meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0) | Author: meituan-longcat, Likes: 134, Downloads: 0
  A new long-context LLM benchmark suite release from Meituan, trending as a standardized evaluation resource for long context model performance.

### 🎨 Multimodal & Generation (image, video, text-to-X)
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu, Likes: 1,573, Downloads: 630,246
  A production-grade OCR model capable of extracting text from any arbitrary image, document or scanned media with no length limit, trending for universal text digitization use cases.
- [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia, Likes: 2,544, Downloads: 896,058
  A lightweight 3B parameter open visual grounding model that can identify and segment any arbitrary object in any image, trending as a drop-in replacement for proprietary visual localization tools.
- [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | Author: krea, Likes: 435, Downloads: 56,953
  A fast iteration variant of Krea’s latest state-of-the-art open text-to-image model, trending for real-time AI art generation workflows.
- [krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw) | Author: krea, Likes: 260, Downloads: 39,515
  The unfiltered raw base checkpoint for Krea 2 text-to-image, trending for custom fine-tuning of art generation models.
- [fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA) | Author: fal, Likes: 136, Downloads: 0
  A specialized LoRA for the LTX video generation model that outputs photorealistic 3D content, trending for 3D asset generation pipelines.
- [Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2) | Author: Comfy-Org, Likes: 223, Downloads: 10
  An official pre-configured ComfyUI workflow pack for Krea 2 text-to-image, trending to lower adoption friction for the new image generation model.
- [ilkerzgi/fal-Krea-2-Style-LoRAs](https://huggingface.co/ilkerzgi/fal-Krea-2-Style-LoRAs) | Author: ilkerzgi, Likes: 99, Downloads: 0
  A curated index of community style LoRAs built for Krea 2, trending for AI art creators looking to apply custom artistic styles to generated outputs.

### 🔧 Specialized Models (code, agent, reasoning)
- [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | Author: yuxinlu1, Likes: 917, Downloads: 288,741
  A purpose-built agentic model fine-tuned from Google Gemma 4, optimized for terminal interaction and software engineering agent tasks, trending for local development assistant use cases.
- [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | Author: yuxinlu1, Likes: 2,551, Downloads: 597,090
  A highly rated 12B Gemma 4 fine-tune specialized for coding, trending for its above-average performance on complex software development tasks.
- [Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | Author: Qwen, Likes: 497, Downloads: 34,371
  A 35B MoE multimodal model purpose-built for training and running world model based autonomous agents, trending for open agent development research.
- [Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF) | Author: Jackrong, Likes: 99, Downloads: 12,635
  A multimodal coding fine-tune of Qwen 3.6 35B, optimized for end-to-end code generation from screenshot inputs, trending for frontend development workflows.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, hardware optimized)
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS, Likes: 2,375, Downloads: 3,055,962
  A fully uncensored multimodal fine-tune of Qwen 3.6 35B, trending as the most popular local unaligned model for unrestricted personal use.
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai, Likes: 1,145, Downloads: 1,113,871
  A long-context 9B Qwen fine-tune quantized to GGUF format, trending for high performance reasoning workloads running on consumer hardware.
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | Author: empero-ai, Likes: 614, Downloads: 114,499
  The full unquantized base checkpoint of the Qwythos reasoning fine-tune, trending for custom downstream fine-tuning and enterprise deployments.
- [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | Author: deepreinforce-ai, Likes: 607, Downloads: 233,701
  GGUF quantized version of the 35B Ornith MoE model, trending for local inference with full MIT license compatibility.
- [deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF) | Author: deepreinforce-ai, Likes: 365, Downloads: 191,409
  Lightweight GGUF quantized 9B Ornith variant, trending for fast local inference on mid-range consumer GPUs.
- [nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4) | Author: nvidia, Likes: 196, Downloads: 136,933
  An official 4-bit NVFP4 optimized quantization of GLM 5.2 for NVIDIA GPU hardware, trending for maximized performance on NVIDIA consumer and enterprise GPUs.
- [nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4) | Author: nvidia, Likes: 168, Downloads: 2,671
  An official NVIDIA NVFP4 quantized variant of Qwen 3.6 27B, trending for high-performance inference on NVIDIA Ada Lovelace and newer GPU architectures.
- [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | Author: unsloth, Likes: 490, Downloads: 212,201
  An optimized Unsloth exported GGUF quantization of GLM 5.2, trending for fast and memory-efficient local runs.
- [unsloth/Qwen-AgentWorld-3

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*