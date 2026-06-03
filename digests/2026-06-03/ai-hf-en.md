# Hugging Face Trending Models Digest 2026-06-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-02 23:45 UTC

---

# Hugging Face Trending Models Digest | 2026-06-03
---
## 1. Today's Highlights
As of June 3, 2026, the Hugging Face weekly trending leaderboard is dominated by high-performance open-weight conversational models, with deepseek-ai’s DeepSeek-V4-Pro claiming the top spot by a wide margin at over 4,500 weekly likes and 5.8M cumulative downloads. Multimodal and generative media models saw exceptional weekly engagement, with new text-to-video, vision-language, and any-to-any generative releases earning top 20 spots across likes and download metrics. NVIDIA secured six separate positions on the trending list, spanning localization tools, optimized language checkpoints, and its Cosmos 3 family of multimodal generative models, signaling the firm’s aggressive push into open-weight developer tooling. A surprising breakout entry from OpenAI, the privacy-filter token classification model, earned over 1,500 weekly likes, highlighting growing developer demand for lightweight, production-ready PII redaction tooling.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
   Author: deepseek-ai | Likes: 4,568 | Downloads: 5,829,042  
   It is DeepSeek’s flagship open-weight conversational LLM, trending for its industry-leading 1M+ token context window and state-of-the-art benchmark performance that outperforms many comparable closed-source models for enterprise reasoning workloads.
2. **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/deepseek-ai/DeepSeek-V4-Flash)**  
   Author: deepseek-ai | Likes: 1,361 | Downloads: 3,525,218  
   The low-latency optimized variant of DeepSeek-V4-Pro, it is trending for delivering 2x faster inference speed with less than 2% accuracy degradation for real-time chat and API use cases.
3. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**  
   Author: LiquidAI | Likes: 440 | Downloads: 47,742  
   A lightweight small MoE language model, it is trending for its class-leading performance on edge hardware for local, offline text generation tasks.
4. **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**  
   Author: openbmb | Likes: 733 | Downloads: 57,683  
   A 1B parameter ultra-light LLM, it is trending for its surprisingly strong reasoning performance relative to its tiny footprint, making it ideal for IoT and embedded device deployments.
5. **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**  
   Author: JetBrains | Likes: 122 | Downloads: 799  
   A specialized reasoning-focused LLM optimized for coding and problem solving, it is trending for its tight integration with JetBrains IDE ecosystems for developer-facing AI assistants.
6. **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**  
   Author: sapientinc | Likes: 466 | Downloads: 153,029  
   A small 1B parameter LLM optimized for human resources and enterprise administrative workflows, it is trending for its out-of-the-box fine-tuning for common corporate document processing tasks.

---
### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
1. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**  
   Author: SulphurAI | Likes: 1,512 | Downloads: 1,663,826  
   A high-performance open text-to-video model derived from Lightricks LTX-2.3, it is trending for its support for 10-second 1080p output at a fraction of the compute cost of competing generative video models.
2. **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**  
   Author: Qwen | Likes: 1,577 | Downloads: 5,243,648  
   Flagship vision-language MoE model from the Qwen team, it is trending for near state-of-the-art performance on all vision-language benchmarks at a low total inference cost for enterprise use.
3. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**  
   Author: bytedance-research | Likes: 1,011 | Downloads: 3,192  
   A unified any-to-any multimodal generative model, it is trending as one of the first production-ready open models that can seamlessly generate text, images, and video from any mixed input modality.
4. **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**  
   Author: Supertone | Likes: 779 | Downloads: 59,026  
   A state-of-the-art TTS model for natural, human-like speech synthesis, it is trending for its near-zero latency output and support for 20+ languages with zero voice cloning fine-tuning required.
5. **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**  
   Author: stepfun-ai | Likes: 213 | Downloads: 12,932  
   A fast multimodal vision-language model, it is trending for its support for real-time streaming video input analysis for edge surveillance and content moderation use cases.
6. **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**  
   Author: meituan-longcat | Likes: 485 | Downloads: 174  
   A specialized audio+image to video avatar generation model, it is trending for its ability to generate photorealistic talking head avatars from a single portrait and audio clip in under 2 seconds.
7. **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**  
   Author: nvidia | Likes: 260 | Downloads: 646  
   A diffusion-based image super-resolution model, it is trending for its ability to upscale low-resolution images to 8K resolution without common generative artifacts.
8. **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)**  
   Author: NemoStation | Likes: 493 | Downloads: 17,616  
   A small video-text-to-text model, it is trending for its ability to run full video understanding tasks on consumer GPUs with less than 8GB of VRAM.

---
### 🔧 Specialized Models
1. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**  
   Author: openai | Likes: 1,592 | Downloads: 300,247  
   A lightweight token classification model, it is trending as a free, production-ready tool for real-time PII and sensitive data redaction for generative AI pipelines.
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   Author: nvidia | Likes: 960 | Downloads: 61,604  
   A visual grounding model, it is trending for its ability to accurately locate any object described in natural language across images and video with zero fine-tuning.
3. **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**  
   Author: PaddlePaddle | Likes: 184 | Downloads: 4,003  
   A state-of-the-art multilingual OCR model optimized for scanned documents and handwritten text, it is trending for its 99%+ accuracy across 100+ languages.
4. **[Kwai-Keye/Keye-VL-2.0-30B-A3B](https://huggingface.co/Kwai-Keye/Keye-VL-2.0-30B-A3B)**  
   Author: Kwai-Keye | Likes: 98 | Downloads: 964  
   A specialized vision-language feature extraction model, it is trending for its industry-leading performance for short video content understanding and recommendation system use cases.

---
### 📦 Fine-tunes & Quantizations
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   Author: HauhauCS | Likes: 1,274 | Downloads: 2,573,320  
   A community fine-tuned uncensored MoE vision-language model derived from Qwen 3.6, it is trending for its unrestricted output and strong performance for roleplay and creative generation use cases.
2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**  
   Author: unsloth | Likes: 609 | Downloads: 982,631  
   A highly optimized GGUF quantization of the Qwen 3.6-27B vision-language model, it is trending for its ability to run smoothly on consumer laptops with 16GB of RAM via llama.cpp.
3. **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)**  
   Author: LiquidAI | Likes: 158 | Downloads: 70,865  
   A CPU-optimized GGUF quantization of the LFM2.5-8B small MoE model, it is trending as one of the highest-performing local text generation models for 4GB RAM edge devices.
4. **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**  
   Author: nvidia | Likes: 137 | Downloads: 313,480  
   An NVIDIA-optimized 4-bit NVFP4 quantized checkpoint of the Qwen 3

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*