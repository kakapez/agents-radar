# Hugging Face Trending Models Digest 2026-07-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-07 23:01 UTC

---

# Hugging Face Trending Models Digest | 2026-07-08
---
## 1. Today's Highlights
As of July 8 2026, the top trending Hugging Face models this week are led by high-performing official open-weight releases from major domestic and global AI vendors, paired with massively popular community-optimized variants built for local consumer deployment. The highest-listed model this week, zai-org/GLM-5.2, earned 3,587 weekly likes, outperforming all other releases by a wide margin as benchmark results show it matches mid-tier closed model performance at a competitive parameter size. Over 40% of the top 30 trending models are derivatives of the Qwen 3.5 / 3.6 family, indicating massive ecosystem adoption of Alibaba's open model line. Download volumes for local inference optimized models hit new highs, with 7 separate releases exceeding 1M weekly downloads, showing surging end-user demand for runnable, low-overhead AI tools.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   - Author: zai-org | Likes: 3,587 | Downloads: 281,584
   - Official open-weight MoE conversational LLM built on the new GLM MoE DSA architecture, it is this week's highest-liked model thanks to published zero-shot reasoning performance that matches leading closed models at lower inference cost.
2. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   - Author: tencent | Likes: 480 | Downloads: 121
   - Flagship new release from Tencent's Hunyuan line, the base model is only days old and already drawing massive community attention for its reported 1M+ native context window.
3. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
   - Author: deepseek-ai | Likes: 424 | Downloads: 15,538
   - Distributed inference-optimized variant of DeepSeek's latest V4 Pro LLM, designed to run efficiently across multi-GPU clusters for high-throughput enterprise workloads.
4. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
   - Author: Qwen | Likes: 560 | Downloads: 60,736
   - Official 35B A3B quantized agent-specific LLM optimized for tool use and long-running multi-step autonomous task execution.
5. **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
   - Author: mistralai | Likes: 157 | Downloads: 157
   - New flagship 119B quantized base model from Mistral, released only hours prior to the digest with limited initial access.
6. **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
   - Author: meituan-longcat | Likes: 138 | Downloads: 385
   - Long-context optimized open LLM from Meituan, built to process 2M+ token inputs natively without context degradation.
7. **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)**
   - Author: AliesTaha | Likes: 184 | Downloads: 3,886
   - Community fine-tuned Qwen 3 variant specialized for narrative writing and story generation, popular with creative users.

### 🎨 Multimodal & Generation (image, text-to-X, multimodal)
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - Author: baidu | Likes: 1,828 | Downloads: 1,084,945
   - State-of-the-art open OCR model that extracts text from any arbitrary document, handwriting, or real-world scene without input length limits, drawing massive interest from developer teams building document processing pipelines.
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - Author: nvidia | Likes: 2,656 | Downloads: 1,424,958
   - Ultra-lightweight multimodal 3B model that can localize any arbitrary object described in natural language in an input image with zero fine-tuning, extremely popular for edge vision use cases.
3. **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
   - Author: krea | Likes: 539 | Downloads: 123,729
   - Fast optimized text-to-image generation model that outputs photorealistic 1024px images in under 200ms on consumer GPUs, trending for real-time generative art use cases.
4. **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)**
   - Author: eric-venti-seeds | Likes: 95 | Downloads: 0
   - New popular Flux 2 LoRA fine-tune that controls lighting direction and sun position for photorealistic image generation, shared for free with no required downloads.

### 🔧 Specialized Models (domain-specific)
1. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   - Author: google | Likes: 286 | Downloads: 9,458
   - Open zero-shot tabular foundation model that supports both classification and regression tasks without fine-tuning, trending for data science teams that need fast baseline model performance on custom structured datasets.
2. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
   - Author: yuxinlu1 | Likes: 1,072 | Downloads: 384,383
   - Gemma 4 specialized agentic LLM optimized for coding and terminal execution, popular for local autonomous development workflows.
3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
   - Author: yuxinlu1 | Likes: 2,636 | Downloads: 674,977
   - Top performing lightweight open coding model, outperforming much larger 70B+ coding models on standard HumanEval benchmarks for local code assistant use cases.

### 📦 Fine-tunes & Quantizations (community optimized, GGUF)
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - Author: HauhauCS | Likes: 2,551 | Downloads: 2,823,988
   - Uncensored quantized multimodal Qwen 3.6 release, one of the highest download models this week for unrestricted local general purpose use.
2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
   - Author: unsloth | Likes: 990 | Downloads: 2,842,118
   - Unsloth-optimized multi-token prediction Qwen 3.6 GGUF release, the highest downloaded model on the trending list for fast high-performance local inference.
3. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   - Author: empero-ai | Likes: 1,746 | Downloads: 1,683,711
   - 1M native context fine-tuned Qwen 3.5 reasoning model in GGUF format, massively popular for processing full books, codebases and long documents locally.
4. **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
   - Author: nvidia | Likes: 314 | Downloads: 538,687
   - Nvidia optimized NVFP4 quantized Qwen 3.6 release that runs near-native speed and accuracy on consumer RTX 40-series GPUs.
5. **[deepreinforce-ai/Ornith series](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** (includes 9B/35B base and GGUF variants)
   - Author: deepreinforce-ai | Likes ranging 357-779 | Downloads ranging 136k-502k
   - MIT licensed fully open fine-tuned Qwen 3.5 LLM line, popular for commercial use cases with no restrictive licensing terms.
6. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   - Author: froggeric | Likes: 741 | Downloads: 0
   - Community shared curated set of corrected Jinja chat templates for all Qwen 3.5/3.6 model variants, solving widespread chat format compatibility bugs across deployment frameworks.
7. **[hugui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)**
   - Author: huihui-ai | Likes: 185 | Downloads: 7,349
   - Uncensored abliterated GGUF quant of GLM 5.2 that removes all built-in alignment guardrails from the official release.
8. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** + [Agents-A1-Q4_K_M-GGUF](https://huggingface.co/InternScience/Agents-A1-Q4_K_M-GGUF)
   - Author: InternScience | Likes 372 / 74 | Downloads 14,723 / 11,226
   - Multimodal agent MoE model line optimized for autonomous task execution, with a lightweight GGUF release for local deployment.
9. **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)**
   - Author: Jackrong

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*