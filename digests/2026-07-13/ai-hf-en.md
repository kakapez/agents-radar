# Hugging Face Trending Models Digest 2026-07-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-12 22:49 UTC

---

# Hugging Face Trending Models Digest | 2026-07-13
---
## 1. Today's Highlights
This week’s highest-listed trending model is zai-org’s GLM-5.2, a state-of-the-art open MoE conversational LLM that has amassed over 3,800 weekly likes as one of the most anticipated Chinese foundation model releases of Q3 2026. Alibaba’s Qwen 3.5/3.6 base architecture dominates the high-download ranks, with 7 of the top 10 most downloaded models built on Qwen weights for combined multimodal, reasoning, and local inference use cases. Leading enterprise AI teams from Tencent, Baidu, NVIDIA and Google have all dropped production-ready open models this week, sitting alongside high-traffic community fine-tunes that pull millions of consumer downloads. Multimodal support is now a standard feature for most mid-size 9B-35B LLMs, with over half of all top trending text-generation pipelines supporting image-text-to-text input out of the box.
---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
1. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
   Author: tencent | Likes: 717 | Downloads: 8,655  
   Tencent’s latest open Hunyuan 3 text-generation LLM, optimized for long-context conversational use and drawing high interest from developers following its official benchmark release.
2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   Author: zai-org | Likes: 3,854 | Downloads: 441,413  
   The highest-liked model of the week, a MoE DSA open conversational LLM that delivers GPT-4o-mini level performance for most common tasks with fully unrestricted commercial use access.
3. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**  
   Author: InternScience | Likes: 507 | Downloads: 29,038  
   A Qwen 3.5 MoE LLM optimized end-to-end for agent tool use, with pre-trained function calling and multimodal input support built in for enterprise agent pipelines.
4. **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**  
   Author: meituan-longcat | Likes: 182 | Downloads: 1,767  
   A conversational long-context LLM fine-tuned for 1M+ token document processing, targeted at enterprise RAG workflow use cases.
5. **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)**  
   Author: nvidia | Likes: 131 | Downloads: 901  
   NVIDIA’s latest experimental 30B open text-generation LLM, tuned for low-resource edge inference on consumer-grade NVIDIA hardware.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
   Author: empero-ai | Likes: 2,043 | Downloads: 1,967,677  
   A 1M-token context Qwen 3.5 multimodal reasoning model quantized for local llama.cpp deployment, extremely popular with hobbyist local LLM users.
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
   Author: baidu | Likes: 1,942 | Downloads: 1,430,656  
   A production-grade open OCR model that supports over 100 languages and scans of any length, replacing most proprietary commercial OCR tools for many developers.
3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   Author: nvidia | Likes: 2,714 | Downloads: 1,501,653  
   A lightweight 3B multimodal feature extraction model that enables zero-shot object localization on any image without fine-tuning, outperforming many 10B+ dedicated detection models.
4. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**  
   Author: OpenMOSS-Team | Likes: 126 | Downloads: 14,491  
   An end-to-end audio-to-text model that combines speech transcription and speaker diarization in a single pipeline with no post-processing required.
5. **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)**  
   Author: CohereLabs | Likes: 95 | Downloads: 9,860  
   A specialized open ASR model optimized for colloquial Arabic dialects, filling a major gap in under-resourced audio model releases.
6. **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**  
   Author: Alissonerdx | Likes: 107 | Downloads: 0  
   A LoRA adapter for the LTX text-to-video pipeline that delivers near-perfect identity preservation for generated human characters.

### 🔧 Specialized Models (code, math, embeddings)
1. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
   Author: froggeric | Likes: 861 | Downloads: 0  
   A community-maintained set of corrected Jinja chat templates for all Qwen 3.5/3.6 variants, fixing widespread common formatting bugs that break inference on third-party frameworks.
2. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**  
   Author: google | Likes: 354 | Downloads: 20,973  
   Google’s open zero-shot tabular foundation model that supports classification and regression tasks on structured CSV data without custom training.
3. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
   Author: yuxinlu1 | Likes: 1,159 | Downloads: 445,368  
   A fine-tuned Gemma 4 12B model purpose-built for terminal coding and agentic workflow automation, popular with self-hosted developer tooling users.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   Author: HauhauCS | Likes: 2,673 | Downloads: 2,596,384  
   An uncensored Qwen 3.6 35B multimodal GGUF quant, one of the highest-performing unrestricted local LLMs available this week.
2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**  
   Author: unsloth | Likes: 1,057 | Downloads: 2,905,019  
   Unsloth’s optimized GGUF quant of Qwen 3.6 27B, with 10% faster inference and near-zero accuracy loss compared to full-precision weights.
3. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
   Author: deepreinforce-ai | Likes: 855 | Downloads: 1,347,036  
   A MIT-licensed 35B text-generation quantized LLM, one of the most permissive unrestricted 30B+ model options available for commercial deployment.
4. **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**  
   Author: unsloth | Likes: 176 | Downloads: 1,378,663  
   A NVIDIA-optimized NVFP4 4-bit quant of Qwen 3.6 27B, purpose-built for fast inference on consumer RTX 30/40 series GPUs.
---
## 3. Ecosystem Signal
Alibaba’s Qwen 3.5/3.6 architecture is unequivocally the highest-momentum base model family right now, with over 10 of the 30 trending models built on Qwen weights across use cases ranging from reasoning to vision to uncensored deployments. The trend toward fully open, locally runnable models continues to accelerate: all of the 10 highest-download models this week have no restrictive weight access policies, outpacing closed proprietary API model adoption for hobbyist and small enterprise use cases. Quantization formats also see explosive growth, with 12 of the 30 trending models released as GGUF or NVFP4 optimized low-bit variants, most pulling over 1M

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*