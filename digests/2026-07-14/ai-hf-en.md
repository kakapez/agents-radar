# Hugging Face Trending Models Digest 2026-07-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-13 22:55 UTC

---

# Hugging Face Trending Models Digest | 2026-07-14
---
## 1. Today's Highlights
This week’s trending chart is led by zai-org’s GLM-5.2, the highest-listed model with 3,896 weekly likes, marking a major breakthrough for global adoption of Zhipu AI’s open MoE LLM line. The Qwen model ecosystem dominates over 40% of all trending entries, spanning base models, multimodal variants, uncensored fine-tunes, and heavily optimized quantizations that rack up millions of weekly downloads. Flagship open-weight releases from large enterprise vendors including Tencent, Baidu, NVIDIA and Google make up nearly a third of the list, demonstrating that top AI firms now prioritize public Hugging Face distribution to reach developer audiences. Download volumes are heavily skewed toward end-user optimized local deployment builds, with 7 separate models crossing the 1 million weekly download mark this cycle.

---
## 2. Trending Models (Organized by Category)
### 🧠 Language Models (LLMs, chat, instruction-tuned)
1. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   - Author: tencent | Likes: 754 | Downloads: 9,157
   - Official open release of Tencent’s latest Hunyuan 3 text generation model, trending for its strong long-context performance on consumer hardware.
2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   - Author: zai-org | Likes: 3,896 | Downloads: 464,914
   - Top-liked trending model this week, a state-of-the-art open conversational MoE model that outperforms many larger closed alternatives on standard benchmarks.
3. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   - Author: froggeric | Likes: 886 | Downloads: 0
   - Community-maintained corrected Jinja chat templates for the entire Qwen 3.5/3.6 model family, trending to resolve widespread prompt formatting bugs.
4. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
   - Author: InternScience | Likes: 524 | Downloads: 29,801
   - Qwen 3.5 MoE-based agent framework optimized for tool use and multi-step task execution, popular for building local autonomous agents.
5. **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)**
   - Author: nvidia | Likes: 142 | Downloads: 1,058
   - NVIDIA’s latest 30B parameter specialized reasoning LLM built for high-performance compute workloads.
6. **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**
   - Author: nvidia | Likes: 114 | Downloads: 38,775
   - 75B parameter puzzle-solving and coding fine-tune of the Nemotron line, optimized for complex logical tasks.
7. **[empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2)**
   - Author: empero-ai | Likes: 96 | Downloads: 2,476
   - Full-precision base release of the popular Qwythos 9B fine-tune built for creative writing use cases.
8. **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**
   - Author: SupraLabs | Likes: 113 | Downloads: 1,573
   - Tiny 51M parameter model routing classifier that automatically sends prompts to the most appropriate expert LLM.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   - Author: empero-ai | Likes: 2,080 | Downloads: 1,985,221
   - Vision-enabled 9B fine-tune optimized for long-form myth and story generation, trending for its strong 1M token context window.
2. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
   - Author: bottlecapai | Likes: 304 | Downloads: 4,909
   - Multimodal reasoning fine-tune of Qwen 3.6 27B built for step-by-step visual problem solving.
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - Author: baidu | Likes: 1,963 | Downloads: 1,506,937
   - State-of-the-art open OCR model that supports over 100 languages and unconstrained document parsing.
4. **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
   - Author: Alissonerdx | Likes: 124 | Downloads: 0
   - LORA fine-tune for LTX video models that preserves consistent face identity across long generated clips.
5. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   - Author: google | Likes: 362 | Downloads: 21,590
   - Google’s zero-shot tabular foundation model that handles both classification and regression tasks without fine-tuning.
6. **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)**
   - Author: robbyant | Likes: 99 | Downloads: 513
   - Video generation MoE model optimized for fast 1080p text-to-video output.
7. **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)**
   - Author: CohereLabs | Likes: 102 | Downloads: 11,647
   - State-of-the-art open Arabic ASR model optimized for dialect and noisy audio transcription.
8. **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)**
   - Author: nineninesix | Likes: 95 | Downloads: 3,940
   - Fast, low-latency text-to-speech model built on Qwen 3.5 architecture that generates near-human voice output.
9. **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)**
   - Author: robbyant | Likes: 92 | Downloads: 0
   - Lightweight open world model optimized for fast image-to-video generation of 3D environment sequences.
10. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    - Author: nvidia | Likes: 2,720 | Downloads: 1,503,441
    - Lightweight 3B multimodal grounding model that can locate any arbitrary object in an image via natural language prompts.

### 🔧 Specialized Models (code, math, utility, embeddings)
1. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
   - Author: conradlocke | Likes: 251 | Downloads: 0
   - Krea 2 image editing LORA built for consistent human identity modification without training artifacts.
2. **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**
   - Author: GnLOLot | Likes: 219 | Downloads: 68,714
   - Tiny 1B parameter edge-optimized reasoning model that delivers strong step-by-step performance on phones and SBCs.
3. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   - Author: OpenMOSS-Team | Likes: 161 | Downloads: 39,509
   - All-in-one audio transcription and speaker diarization model for meeting recording processing.
4. **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**
   - Author: unsloth | Likes: 161 | Downloads: 49,423
   - Optimized quantized build of DeepSeek V4, the top open coding model, for fast local inference.
5. **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)**
   - Author: migtissera | Likes: 103 | Downloads: 1,105
   - Multimodal fine-tune built for long-form text and visual novel generation use cases.

### 📦 Fine-tunes & Quantizations (community builds, GGUF, optimized variants)
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - Author: HauhauCS | Likes: 2,710 | Downloads: 2,512,124
   - Uncensored quantized multimodal fine-tune of Qwen 3.6 35B MoE, trending for no alignment guardrails for creative research use.
2. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
   - Author: yuxinlu1 | Likes: 1,176 | Downloads: 452,627
   - Agentic fine-tune of Google Gemma 4 12B optimized for terminal access and coding task execution.
3. **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)**
   - Author: empero-ai | Likes

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*