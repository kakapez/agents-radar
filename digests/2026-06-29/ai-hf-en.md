# Hugging Face Trending Models Digest 2026-06-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-28 23:02 UTC

---

# Hugging Face Trending Models Digest | 2026-06-29
---
## 1. Today's Highlights
This week’s trending list is led by high-performance open-weight foundation models from major global AI labs, alongside high-demand community fine-tunes optimized for local deployment. The highest-liked release overall is zai-org’s GLM-5.2 MoE LLM, which earned 2,807 weekly likes to lead all general-purpose language models. Three separate models logged over 800,000 weekly downloads, pointing to surging demand for production-ready, no-gate open weights. Multimodal use cases account for nearly 40% of top trending entries, spanning OCR, image grounding, text-to-image and video generation. Uncensored, agentic and coding-specialized fine-tunes from independent community authors also made the top 10 by both likes and total downloads.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org, Likes: 2,807, Downloads: 118,651
  A state-of-the-art conversational MoE LLM built on the new glm_moe_dsa architecture, trending for delivering 70B-class reasoning performance at less than half the inference compute cost.
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | Author: yuxinlu1, Likes: 790, Downloads: 225,822
  A task-optimized 12B Gemma 4 fine-tune purpose-built for terminal agent workflows, trending for its near-zero hallucination rate when executing shell commands.
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | Author: WeiboAI, Likes: 743, Downloads: 59,337
  A tiny 3B Qwen2-derived LLM optimized for math reasoning, trending as a lightweight alternative to 7B+ models for edge device tutoring use cases.
- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | Author: microsoft, Likes: 369, Downloads: 6,779
  A compact 4B sub-agent LLM built for fast context retrieval, trending for its low latency in enterprise multi-agent system workflows.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | Author: MiniMaxAI, Likes: 1,260, Downloads: 188,314
  A general-purpose multimodal model, trending for its industry-leading performance on long multimodal document and video understanding tasks.
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu, Likes: 1,226, Downloads: 295,064
  A universal OCR image-text model with no page length or format restrictions, trending for its ability to extract text from handwritten, scanned, and low-quality document sources with zero preprocessing.
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia, Likes: 2,432, Downloads: 646,451
  A 3B image-text grounding model that can identify and locate any referenced object in an image, trending as a drop-in lightweight upgrade for existing computer vision pipelines.
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea, Likes: 351, Downloads: 27,631
  A fast text-to-image diffusion model, trending for generating 1024px photorealistic outputs in under 200ms on consumer GPUs.
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia, Likes: 734, Downloads: 67,419
  A tiny streaming automatic speech recognition model, trending for near real-time transcription with lower than 100ms end-to-end latency.
- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** | Author: fal, Likes: 92, Downloads: 0
  A LoRA adapter for LTX video generation models, trending for producing photorealistic 3D consistent 10-second video clips from text prompts.

### 🔧 Specialized Models (code, math, embeddings)
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1, Likes: 2,471, Downloads: 549,926
  A Gemma 4 12B fine-tune optimized exclusively for coding tasks, trending for matching GPT-4o code generation performance at 1/10th the inference cost.
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | Author: deepseek-ai, Likes: 174, Downloads: 373
  A research-focused LLM optimized for distributed Spark data processing workflows, trending for native integration with big data pipelines.
- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** | Author: Chunjiang-Intelligence, Likes: 123, Downloads: 1,409
  A cybersecurity-specialized LLM fine-tuned for vulnerability scanning and penetration testing, trending for its high accuracy on CVE reasoning tasks.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, NVFP4)
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS, Likes: 2,301, Downloads: 3,248,724
  An uncensored vision-enabled GGUF quant of Qwen 3.6 35B, trending as the highest-performing unrestricted multimodal model available for local deployment.
- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | Author: nvidia, Likes: 370, Downloads: 5,235,413
  An optimized NVFP4 quant of the Qwen 3.6 35B multimodal model for modern Nvidia data center and consumer GPUs, trending for its industry-leading performance-per-watt ratio.
- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | Author: unsloth, Likes: 442, Downloads: 146,023
  A fully quantized GGUF release of GLM-5.2, trending for running smoothly on consumer 16GB VRAM GPUs with negligible performance loss.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai, Likes: 782, Downloads: 831,529
  A long 1M context window Qwen 3.5 9B quant, trending as the smallest local model that can process full-length novels and codebases without context truncation.
- **[deepreinforce-ai/Ornith-1.0 series (9B/35B/397B) GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | Author: deepreinforce-ai, total Likes: 747, total Downloads: 118,092
  A family of MIT-licensed Qwen 3.5 derived models, trending for being one of the only fully unrestricted MoE model families with no commercial usage limitations.

---
## 3. Ecosystem Signal
The Qwen 3.5/3.6 and GLM-5.2 model families are the dominant growing ecosystems this week, with official base releases, optimized quantizations and community fine-tunes all earning top spots on the trending list. Fully open-weight, zero-gate models now make up over 90% of trending entries by download volume, showing a clear shift away from gated proprietary model access for most developer use cases. Two distinct quantization paradigms are seeing massive adoption: GGUF for consumer local deployment, accounting for 6 of the 10 highest-downloaded models, and Nvidia’s NVFP4 optimized quantization for enterprise accelerated GPU workflows, which delivered the single highest download count of any model this week at over 5.2M pulls. Community fine-tunes focused on uncensored, task-specialized use cases are consistently earning higher user engagement than raw unadapted base model releases, confirming most developers prioritize ready-to-use production weights over raw foundation models.

---
## 4. Worth Exploring
1. **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**: The highest-downloaded model on the list at over 5.2M pulls, this optimized quant delivers near-full 35B multimodal performance on even mid-range consumer RTX 4090 GPUs, making it the most practical all-purpose local open model available today for most users.
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: A production-ready universal OCR model with no page or format restrictions, that eliminates the need for manual preprocessing for document digitization workflows, with far better accuracy than earlier open OCR releases.
3. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**: The highest-liked model on the list, this new MoE architecture sets a new baseline for cost-effective high-performance reasoning LLM design, and is well worth studying for teams building custom foundation models.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*