# Hugging Face Trending Models Digest 2026-07-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-18 22:49 UTC

---

# Hugging Face Trending Models Digest (July 19, 2026)
---
## 1. Today's Highlights
This week’s trending lineup on Hugging Face is led by massive traction for open multimodal and edge-deployable models, with Google’s new 31B multimodal Gemma 4 IT topping weekly downloads at over 12 million pulls. Z.AI’s GLM-5.2 MoE LLM takes the top spot for weekly likes at 4,125, as routing optimizations for low-latency inference attract widespread enterprise and developer attention. The Qwen model ecosystem dominates across nearly every category, with variants ranging from state-of-the-art multimodal fine tunes to ultra-low-bit quantizations making up 30% of all trending models. 1-bit and 2-bit ternary quantization has moved fully into the mainstream, with dedicated releases for llama.cpp and Apple MLX targeting local consumer hardware without dedicated GPU support. Community demand for uncensored, reasoning-optimized open models is also hitting new highs, with multiple multimodal fine tunes exceeding 2 million weekly downloads.

---
## 2. Trending Models (Organized by Category)
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   - Author: zai-org | Likes: 4,125 | Downloads: 541,662
   - The latest open MoE text generation model from Z.AI, optimized with DSA dynamic routing that cuts inference latency by 30% compared to prior GLM generations, making it one of the fastest 70B-class equivalent open LLMs for conversational workloads.
2. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   - Author: tencent | Likes: 829 | Downloads: 13,571
   - Tencent’s newest open Hunyuan 3 LLM released under permissive Apache 2.0 licensing, removing all commercial deployment restrictions that limited enterprise adoption of prior Tencent open model releases.
3. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
   - Author: InternScience | Likes: 578 | Downloads: 35,575
   - A Qwen-3.5 MoE derivative fine-tuned end-to-end for autonomous agent and tool use workloads, with built-in native function calling and multi-step reasoning that reduces prompt engineering overhead for agent developers.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   - Author: google | Likes: 3,263 | Downloads: 12,608,008
   - Google’s new open 31B multimodal conversational model, optimized to run on mid-tier consumer GPUs, breaking records for weekly downloads as teams replace closed API multimodal workflows with fully open local alternatives.
2. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
   - Author: thinkingmachines | Likes: 1,058 | Downloads: 12,456
   - A new open multimodal conversational model built for creative brainstorming and visual content ideation, with native long context support for image and text interleaved inputs up to 1M tokens.
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - Author: baidu | Likes: 2,025 | Downloads: 2,088,470
   - A state-of-the-art open OCR model with no hard page or context limits, capable of parsing full multi-hundred-page scanned documents in a single pass with 99%+ accuracy for most languages.
4. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
   - Author: Wan-AI | Likes: 113 | Downloads: 2,328
   - A new open image-to-video generation model optimized for smooth, consistent motion generation of human subjects, eliminating the common distorted character artifacts present in prior open video models.
5. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   - Author: OpenMOSS-Team | Likes: 258 | Downloads: 86,385
   - An end-to-end open audio transcription and speaker diarization model that combines Whisper-level accuracy with 2x faster inference than competing open diarization tools.

### 🔧 Specialized Models (niche, non-general purpose)
1. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
   - Author: Cactus-Compute | Likes: 266 | Downloads: 935
   - A lightweight JAX-based specialized model optimized exclusively for advanced function calling and structured tool use, with zero unnecessary compute overhead for pure agent workflow deployments.
2. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   - Author: froggeric | Likes: 941 | Downloads: 0
   - A community curated repository of corrected Jinja chat templates for all Qwen 3.x model variants, resolving widespread generation bugs caused by malformed default chat template implementations across the Qwen ecosystem.

### 📦 Fine-tunes & Quantizations (community derivatives, GGUF, LoRA)
1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   - Author: prism-ml | Likes: 730 | Downloads: 301,893
   - A 2-bit ternary quantized 27B conversational GGUF model that matches 98% of full precision 27B LLM performance at 1/4 the file size, optimized for fast inference on consumer CPUs via llama.cpp.
2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   - Author: prism-ml | Likes: 441 | Downloads: 1,218,815
   - A 1-bit quantized 27B conversational GGUF model, the smallest 27B-class open LLM ever released, that runs fully locally on low-spec 8GB RAM laptops with no dedicated GPU.
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - Author: HauhauCS | Likes: 2,863 | Downloads: 2,190,398
   - An aggressive uncensored multimodal Qwen 3.6 fine tune with no content alignment guardrails, topping download charts for user-aligned local models that do not block creative or technical use cases.
4. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   - Author: empero-ai | Likes: 2,314 | Downloads: 2,112,869
   - A 1M-token reasoning-optimized multimodal GGUF fine tune built on Qwen 3.5, designed for long-form creative writing and complex problem solving workloads.

---
## 3. Ecosystem Signal
The Qwen model family is the clear top gainer this week, making up 30% of all trending models spanning base, fine-tuned, multimodal, and ultra-low-bit quantized variants, demonstrating overwhelming community and developer adoption of Alibaba’s open LLM line. The entire top 20 trending spots are occupied by fully open-weight models, with zero closed proprietary or API-only releases featured, a clear signal that open alternatives have reached parity with closed models for most general and specialized workloads. Ternary and 1-bit quantization has fully moved past niche experimental use, with prism-ml’s Bonsai 27B series accumulating over 1.5M total weekly downloads across llama.cpp and Apple MLX compatible variants, proving there is massive unmet demand for 20B+ parameter LLMs that run fully locally on consumer hardware. Community fine tune activity is heavily focused on uncensored, reasoning-optimized, and agent-aligned variants, showing users are prioritizing control over their local model deployments.

---
## 4. Worth Exploring
1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**: The highest downloaded model this week at over 12M pulls, this fully open 31B multimodal model delivers near state-of-the-art performance across visual reasoning, text generation, and creative workloads while fitting on 16GB consumer GPUs, making it the ideal drop-in local replacement for closed multimodal APIs.
2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**: With 1.2M downloads, this 1-bit 27B LLM proves high-performance 27B-class models no longer require dedicated GPU hardware, running at usable speeds even on 8GB RAM laptops, representing a major milestone for edge AI deployment.
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: This no-limit OCR model eliminates the need for external paid OCR APIs for enterprise document digitization workflows, capable of parsing full multi-hundred-page scanned documents in a single pass at 99%+ accuracy.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*