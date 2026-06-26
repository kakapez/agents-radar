# Hugging Face Trending Models Digest 2026-06-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-26 23:06 UTC

---

# Hugging Face Trending Models Digest | 2026-06-27
---
## 1. Today's Highlights
As of June 27 2026, the weekly trending Hugging Face leaderboard is dominated by newly released Chinese-origin foundational model families, with Zai-org’s GLM-5.2 taking the top spot for weekly user likes, while community fine-tunes of Qwen 3.x and Google Gemma 4 variants drive multi-7-figure total download volumes across the board. A notable breakout entry is HauhauCS’s uncensored Qwen 3.6 35B MoE, which has amassed over 3.4 million downloads, vastly outpacing many official upstream releases. Enterprise vendors including NVIDIA, Baidu, Microsoft, and MiniMax all debut high-performing new releases focused on optimized inference and specialized use cases spanning OCR, ASR, and agentic workflows. Local-deployment friendly GGUF format releases make up 40% of the full 30-model trending list, reflecting widespread user demand for runnable on-prem model tools.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
1. [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org, Likes: 2587, Downloads: 83589
   The latest MoE DSA open generative LLM from Z.ai, topping the weekly likes chart for its strong conversational reasoning and low inference overhead compared to similarly sized models.
2. [Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | Author: Qwen, Likes: 319, Downloads: 13186
   Qwen’s official agent-optimized multimodal LLM built for end-to-end task execution in simulated and real-world tool use environments.
3. [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | Author: microsoft, Likes: 355, Downloads: 5735
   Microsoft’s lightweight 4B context-optimized SFT model designed to reduce latency for long-document processing in low-resource agent deployments.
4. [LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M) | Author: LiquidAI, Likes: 110, Downloads: 8286
   An ultra-small edge-deployable LLM optimized for embedded device use cases that requires minimal compute resources.

---
### 🎨 Multimodal & Generation (image, audio, text-to-X)
1. [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu, Likes: 1034, Downloads: 134146
   Baidu’s new state-of-the-art open OCR model that supports unlimited-length multi-language document parsing for scanned, handwritten, and low-quality text inputs.
2. [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | Author: krea, Likes: 285, Downloads: 8721
   A fast text-to-image model optimized for near-real-time generative design workflows, built on top of Krea’s raw base generative model.
3. [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | Author: nvidia, Likes: 706, Downloads: 56434
   A lightweight streaming ASR model optimized for low-latency real-time speech transcription across 50+ languages for edge and cloud deployments.
4. [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | Author: MiniMaxAI, Likes: 1246, Downloads: 169951
   MiniMax’s latest general-purpose multimodal model that supports interleaved image, text and video input processing for high-level visual reasoning tasks.
5. [datalab-to/lift](https://huggingface.co/datalab-to/lift) | Author: datalab-to, Likes: 158, Downloads: 6054
   A specialized document parsing multimodal model built to extract structured data directly from native and scanned PDF files.
6. [krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw) | Author: krea, Likes: 202, Downloads: 10408
   The unfiltered raw base generative model for the Krea 2 text-to-image family, released for fine-tuning by creative teams.
7. [Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2) | Author: Comfy-Org, Likes: 137, Downloads: 10
   An official pre-configured ComfyUI workflow bundle for the Krea 2 generative image model designed for no-code user adoption.

---
### 🔧 Specialized Models (code, math, use-case targeted)
1. [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | Author: yuxinlu1, Likes: 682, Downloads: 186663
   A Gemma 4 fine-tune optimized for terminal interaction and end-to-end software engineering agent workflows, formatted for local deployment.
2. [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | Author: yuxinlu1, Likes: 2396, Downloads: 516333
   The highest-liked coding-specialized model on the trending list, a highly performant Gemma 4 fine-tune for full-stack software development tasks.
3. [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | Author: WeiboAI, Likes: 728, Downloads: 54638
   A small 3B math-specialized reasoning LLM that outperforms far larger models on K-12 and university-level formal math problem solving.
4. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia, Likes: 2381, Downloads: 494756
   Nvidia’s open 3B visual grounding model that can detect, segment, and localize any object in an input image based on free-form text prompts.
5. [Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable) | Author: Chunjiang-Intelligence, Likes: 107, Downloads: 1103
   A cybersecurity-specialized fine-tune of the DeepSeek V4 LLM built for vulnerability analysis, penetration testing, and threat intelligence processing.

---
### 📦 Fine-tunes & Quantizations (community variants, GGUF, optimized formats)
1. [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS, Likes: 2263, Downloads: 3453492
   A massively popular uncensored vision-enabled Qwen 3.6 35B MoE GGUF fine-tune designed for unrestricted local deployment for research and creative use cases.
2. [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | Author: nvidia, Likes: 361, Downloads: 4812629
   Nvidia’s official hardware-optimized NVFP4 quant of the Qwen 3.6 35B MoE LLM, purpose-built for maximum throughput on NVIDIA Hopper and Ada architecture GPUs.
3. [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai, Likes: 579, Downloads: 486810
   A Qwen 3.5 9B fine-tune optimized for long-form creative writing and narrative generation, released in GGUF format for local use.
4. [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | Author: empero-ai, Likes: 444, Downloads: 20346
   The full-precision transformers release of the Qwythos 9B creative narrative fine-tune.
5. [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | Author: unsloth, Likes: 408, Downloads: 107553
   Unsloth’s official optimized GGUF quant release of the latest GLM-5.2 MoE LLM for fast local inference.
6. All deepreinforce-ai Ornith 1.0 series variants: 35B GGUF, 9B GGUF, 35B full precision, 9B full precision, 397B full precision | Author: deepreinforce-ai, total likes: 707, total downloads: 5273
   A family of permissively MIT licensed open multimodal LLMs built on Qwen 3.5 weights, made available in multiple sizes and formats for unrestricted commercial use.
7. [huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated) | Author: huihui-ai, Likes: 135, Downloads: 5445
   An alignment-removed abliterated fine-tune of the popular Gemma 4 12B coding model to remove refusals for unrestricted coding and research use.
8. [Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF) | Author: Jackrong, Likes: 93, Downloads: 35027
   A vision-enabled Qwen 3.6 27B coding GGUF fine-tune built to process hand-drawn UI/UX

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*