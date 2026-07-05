# Hugging Face Trending Models Digest 2026-07-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-05 23:01 UTC

---

# Hugging Face Trending Models Digest | 2026-07-06
---
## 1. Today's Highlights
As of July 6, 2026, this week’s trending Hub rankings are dominated by newly released Qwen 3.5/3.6 and GLM-5.2 family models, with heavy user engagement focused on both high-performance base variants and end-user-optimized quantized builds. Multimodal use cases continue to see explosive growth, with three of the top 10 highest-liked models built for image-text-to-text workflows including NVIDIA’s top-performing LocateAnything-3B. Community fine-tunes and GGUF quantizations make up over 40% of the full 30-model trending list, reflecting strong end-user demand for local, customizable deployments. Agent and coding-specialized models also hold 22% of trending slots, pointing to growing real-world adoption of LLMs for production developer and automation use cases.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,466 | Downloads: 220,379
  The official state-of-the-art open MoE conversational LLM, trending as the highest-liked model of the week for its breakthrough low hallucination rate and long context performance that outperforms competing general-purpose open models.
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | Author: deepseek-ai | Likes: 386 | Downloads: 12,580
  A distributed inference-optimized variant of DeepSeek’s flagship V4 LLM, trending for its 3x faster generation throughput for multi-user enterprise workloads.
- **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)** | Author: deepseek-ai | Likes: 159 | Downloads: 48,696
  A lightweight, low-latency iteration of DeepSeek-V4 optimized for edge and low-resource cloud deployments, popular for consumer-facing chatbot integrations.
- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Author: Qwen | Likes: 546 | Downloads: 55,113
  Qwen’s official 35B MoE agentic LLM fine-tuned for tool use and multi-step task completion, trending as a leading open model for autonomous agent development.
- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** | Author: mistralai | Likes: 115 | Downloads: 26
  Mistral’s 119B math and formal reasoning focused LLM, drawing early attention from academic teams working on automated theorem proving.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,616 | Downloads: 1,247,265
  A lightweight 3B multimodal model for zero-shot open-vocabulary object localization in images, trending for its ability to run on consumer GPUs at near real-time speeds.
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,743 | Downloads: 1,044,217
  A state-of-the-art OCR model that supports 200+ languages and text extraction from any document, screenshot or handwritten note, trending as the new de facto open OCR standard.
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 513 | Downloads: 99,049
  A fast iteration text-to-image model optimized for 1024x1024 4-step generation, popular for consumer creative workflows.
- **[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)** | Author: Comfy-Org | Likes: 255 | Downloads: 10
  The official ComfyUI-optimized port of Krea-2, drawing attention from the generative art community for its native pipeline compatibility.

### 🔧 Specialized Models (code, math, medical, embeddings)
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,608 | Downloads: 651,758
  A code-specialized fine-tune of Google’s Gemma 4 12B, trending as the top performing local open coding model with near GPT-4 level debug performance.
- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 221 | Downloads: 2,670
  Google’s zero-shot tabular foundation model for classification and regression, trending for eliminating the need for custom model training for most data science use cases.
- **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** | Author: BugTraceAI | Likes: 134 | Downloads: 12,196
  A cybersecurity-specialized model fine-tuned for vulnerability detection and exploit analysis, popular among devsecops teams.
- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** | Author: nationaldesignstudio | Likes: 128 | Downloads: 2,783
  A lightweight onnx BERT model for real-time PII redaction in text, trending for browser-side compliance workflows.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 1,544 | Downloads: 1,533,844
  A quantized fine-tune of Qwen 3.5 optimized for long context reasoning, the highest-downloaded text generation LLM on the trending list.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,481 | Downloads: 3,018,257
  An uncensored vision-enabled 35B Qwen 3.6 GGUF variant, trending for its lack of alignment guardrails for unrestricted creative and technical use cases.
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | Author: unsloth | Likes: 963 | Downloads: 2,776,389
  Unsloth’s optimized quantized fine-tune of Qwen 3.6 with multi-token prediction support, popular for fast local generation.
- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** | Author: nvidia | Likes: 272 | Downloads: 297,130
  NVIDIA’s custom NVFP4 quantized port of Qwen 3.6 optimized for H100 and consumer Ada Lovelace GPU deployments.
- **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** | Author: nvidia | Likes: 240 | Downloads: 280,087
  NVIDIA’s low-bit quantized GLM-5.2 variant, delivering 2x faster inference with minimal accuracy loss.
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | Author: yuxinlu1 | Likes: 1,029 | Downloads: 355,871
  An agent and terminal control optimized Gemma 4 fine-tune, popular for local automation workflows.
- **[deepreinforce-ai/Ornith-1.0 series](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** | Author: deepreinforce-ai | Combined Likes: ~1,885 | Combined Downloads: ~1,047,000
  A full family of MIT-licensed Qwen 3.5 based 9B and 35B base and GGUF models, trending for their fully open licensing with no commercial restrictions.

---
## 3. Ecosystem Signal
Qwen 3.5/3.6 and GLM-5.2 are the fastest growing model families in the open 2026 Hugging Face ecosystem, accounting for 60% of all trending model slots and outpacing legacy Mistral and Llama family adoption for the first time. Open-weight models are now the de facto standard for cutting-edge development, with zero proprietary closed model releases appearing on this week’s trending rankings, as end users prioritize full customization and local deployment access over limited API-only closed model access. GGUF has cemented itself as the global standard for end-user model distribution, with 11 of the 30 trending models released in the format. Custom hardware-aligned quantization formats like NVIDIA’s NVFP4 are also gaining rapid traction for enterprise datacenter deployments. Community fine-tuning of newly released base models now happens within 24-72 hours of official launch, with uncensored, use-case specialized, and abliterated variants immediately hitting top trending ranks, demonstrating unmet user demand for unconstrained models not offered by official model vendors.

---
## 4. Worth Exploring
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: This 3B lightweight multimodal model delivers class-leading zero-shot object localization performance at a small enough size to run on even 8GB consumer GPUs, making it a game-changing building block for custom edge computer vision workflows that do not require expensive cloud API calls.
2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**: The highest-liked model of the week offers exceptional conversational performance and a fully permissive license, and serves as a compelling drop-in replacement for older generation LLMs for most enterprise and consumer chatbot use cases.
3. **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**: The first cybersecurity-specialized open model to reach trending status, it drastically reduces the manual work required for devsecops teams to identify and triage code vulnerabilities in production software deployments.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*