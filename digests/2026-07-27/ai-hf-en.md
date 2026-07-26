# Hugging Face Trending Models Digest 2026-07-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-26 22:58 UTC

---

# Hugging Face Trending Models Digest | 2026-07-27
---
## 1. Today's Highlights
This week’s trending Hugging Face charts are dominated by high-performance open-weight language models, purpose-built multimodal tools, and extremely optimized quantized variants for local deployment. The top-liked release is ZAI Org’s GLM-5.2, a 4.4k+ likes MoE text generation model that outperforms many closed proprietary alternatives on standard LLM benchmarks. Community fine-tunes of the Alibaba Qwen 3.6 family account for nearly 1/3 of all top 30 trending models, reflecting massive developer adoption of the base Qwen architecture. Standout utility models include Baidu’s Unlimited-OCR, which has already crossed 2.5 million downloads in its first week of trending, and new 1-bit/2-bit quantized LLMs that unlock running 27B parameter models on consumer edge hardware.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   Author: zai-org | Likes: 4,473 | Downloads: 827,191  
   A leading open-access MoE text generation model built on the GLM MoE DSA architecture, trending for its near-closed-model performance on reasoning, conversational alignment, and multilingual support.
2. **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**  
   Author: upstage | Likes: 589 | Downloads: 3,305  
   A 250B parameter fully open base LLM, trending as one of the largest unrestricted open text generation models available for commercial fine-tuning.
3. **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**  
   Author: poolside | Likes: 694 | Downloads: 56,445  
   A lightweight fast inference LLM optimized for developer tooling use cases, trending for its low latency and 128k long context window.
4. **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**  
   Author: Nanbeige | Likes: 442 | Downloads: 14,049  
   A tiny 3B parameter enterprise-focused LLM built for Chinese language workflows, trending for its ability to run unmodified on low-resource server hardware.
5. **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**  
   Author: Motif-Technologies | Likes: 193 | Downloads: 2,400  
   An early beta multimodal reasoning LLM optimized for pattern recognition tasks, trending for its native support for unstructured document classification.
6. **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**  
   Author: fdtn-ai | Likes: 185 | Downloads: 5,978  
   A 1B parameter LLM fine-tuned for cybersecurity use cases, trending as the first small open model purpose-built for threat detection and log analysis.

---
### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
   Author: baidu | Likes: 3,198 | Downloads: 2,593,460  
   A no-restriction image-text OCR model that supports over 200 languages and handwritten, scanned, and distorted documents, trending for outperforming all prior open OCR tools on general benchmark tests.
2. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**  
   Author: thinkingmachines | Likes: 1,579 | Downloads: 34,511  
   A multimodal conversational model optimized for handwritten note parsing, trending for its ability to transcribe and make inferences from messy hand-drawn diagrams and notebooks.
3. **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**  
   Author: microsoft | Likes: 333 | Downloads: 1,375  
   A text-to-image generation model, trending for its sub-second generation speed and native support for inpainting and outpainting workflows.
4. **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**  
   Author: nvidia | Likes: 125 | Downloads: 32,700  
   An edge-optimized multimodal generative model for on-device video and image generation, trending for its compatibility with consumer RTX 4000 series GPUs.
5. **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**  
   Author: owensong | Likes: 173 | Downloads: 298  
   A tiny CPU-optimized text-to-speech model, trending for zero-latency local speech generation that runs entirely on low-power edge devices.
6. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**  
   Author: conradlocke | Likes: 542 | Downloads: 0  
   A community LoRA for Krea 2 image generation, trending for zero-distortion identity preservation when editing portraits for visual content workflows.
7. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**  
   Author: openbmb | Likes: 177 | Downloads: 643  
   A vision-language-action robotics model for industrial arm manipulation tasks, trending as the first small open VLA optimized for consumer robotics hardware.
8. **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**  
   Author: openbmb | Likes: 130 | Downloads: 398  
   A companion robotics model to MiniCPM-RobotManip, trending for real-time object tracking on mobile robot platforms.
9. **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)**  
   Author: baseten | Likes: 110 | Downloads: 2,033  
   A quantized vision-language variant of the top GLM-5.2 LLM, trending for its fast inference on NVIDIA consumer GPUs.
10. **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**  
    Author: microsoft | Likes: 107 | Downloads: 1,225  
    A multimodal model fine-tuned for computer use tasks, trending for its native ability to control desktop software directly from text prompts.
11. **[microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo)**  
    Author: microsoft | Likes: 88 | Downloads: 946  
    An instruction-based image-to-image editing model, trending for 3-second high-fidelity image edits without requiring manual mask inputs.

---
### 🔧 Specialized Models (code, math, OCR, etc.)
1. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**  
   Author: moonshotai | Likes: 1,293 | Downloads: 730,129  
   A multimodal code generation model that parses screenshots of code and handwritten pseudocode, trending for top performance on SWE-bench benchmarks.
2. **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**  
   Author: Kwaipilot | Likes: 194 | Downloads: 3,764  
   A multimodal code assistant fine-tuned for embedded systems development, trending for its native support for 100+ niche programming languages.
3. **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**  
   Author: ATH-MaaS | Likes: 307 | Downloads: 35,562  
   An open OCR model optimized for scanned book and legal document parsing, trending as a lightweight fast alternative to larger general-purpose OCR systems.

---
### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
   Author: empero-ai | Likes: 2,477 | Downloads: 1,410,054  
   A community GGUF fine-tune of Qwen 3.5 optimized for reasoning, trending for matching the performance of 30B+ models in a lightweight 9B GGUF footprint.
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   Author: HauhauCS | Likes: 3,112 | Downloads: 1,927,138  
   A 35B parameter uncensored multimodal Qwen 3.6 fine-tune, trending for no content alignment guardrails for unrestricted local use cases.
3. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
   Author: prism-ml | Likes: 1,048 | Downloads: 631,970  
   A 2-bit ternary quantized 27B LLM, trending for enabling 27B model inference on 8GB of VRAM with minimal quality loss.
4. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
   Author: prism-ml | Likes: 650 | Downloads: 2,187,304  
   A 1-bit quantized 27B GGUF LLM, trending as the first mass-adopted 1-bit open conversational model that runs on 4GB of VRAM.
5. **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**  
   Author: DavidAU | Likes: 630 | Downloads: 552,026  
   A heavily fine-tuned multimodal uncensored Qwen 3.6 GGUF variant, trending for its custom long context and story generation optimization.
6. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**  
   Author: bottlecapai | Likes: 555 | Downloads: 27,823  
   A reasoning-optimized Qwen 3.6 fine-tune, trending for its top performance on math and logic challenge benchmarks.
7. **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)**  
   Author: unsloth | Likes: 200 | Downloads: 102,684  
   An Unsloth-optimized GGUF

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*