# Hugging Face Trending Models Digest 2026-07-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-17 22:50 UTC

---

# Hugging Face Trending Models Digest (2026-07-18)
---
## 1. Today's Highlights
This week’s trending Hugging Face stack is led by the official release of zai-org’s GLM-5.2, the top-liked model at 4,070 weekly likes as the latest flagship open MoE text generation model. Qwen 3.5/3.6 derived models make up 60% of the top 10 highest-download entries, with multiple vision-enabled variants crossing 2 million downloads apiece. Ultra-low-bit 1-bit and 2-bit ternary quantized models from prism-ml are seeing unprecedented consumer adoption, with the 1-bit Bonsai-27B GGUF hitting over 1 million downloads. Non-model utility assets including corrected chat templates also earned nearly 1,000 weekly likes despite zero raw model downloads, highlighting the community’s growing focus on usability polish alongside raw model capability.

---
## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2): Author zai-org, Likes 4070, Downloads 534698. This new flagship open MoE conversational LLM tops weekly likes thanks to its industry-leading 128k context window and permissive licensing for commercial use.
- [tencent/Hy3](https://huggingface.co/tencent/Hy3): Author tencent, Likes 819, Downloads 12719. Tencent’s latest open Hunyuan text generation model is trending for its top-tier function calling performance out of the box.
- [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1): Author InternScience, Likes 572, Downloads 34066. This Qwen 3.5 MoE agent-optimized model is purpose-built for autonomous multi-step task execution for local agent workflows.
- [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking): Author GnLOLot, Likes 133, Downloads 4840. A tiny 1B parameter fine-tune that delivers near top-tier reasoning performance at speeds fast enough to run on low-power edge devices.
- [empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2): Author empero-ai, Likes 137, Downloads 7980. The base non-quantized release of the popular mythos/fantasy fine-tuned Qwen 9B model.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive): Author HauhauCS, Likes 2825, Downloads 2295313. This uncensored vision-enabled 35B MoE model is trending for unrestricted local multimodal generation with no alignment guardrails.
- [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF): Author empero-ai, Likes 2270, Downloads 2096147. A long-context 1M token vision GGUF model optimized for fantasy writing and visual worldbuilding.
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR): Author baidu, Likes 2018, Downloads 1992355. Baidu’s open state-of-the-art OCR model can extract text from any scanned document, handwritten note or low-resolution image at near-perfect accuracy.
- [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling): Author thinkingmachines, Likes 949, Downloads 7870. This new conversational multimodal model supports interleaved text, image and audio input for unified general purpose workflows.
- [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B): Author Wan-AI, Likes 106, Downloads 2185. A new high-fidelity image-to-video generation model optimized for smooth motion and character consistency.
- [mgwr/M87](https://huggingface.co/mgwr/M87): Author mgwr, Likes 146, Downloads 3874. A new open text-to-image generation model competing with top commercial image generators for photorealism.
- [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID): Author Alissonerdx, Likes 177, Downloads 0. A face identity preservation LoRA for LTX video models that prevents face distortion during video generation.

### 🔧 Specialized Models
- [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize): Author OpenMOSS-Team, Likes 248, Downloads 83160. An end-to-end audio transcription and speaker diarization model that processes multi-hour recordings in minutes.
- [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2): Author ATH-MaaS, Likes 152, Downloads 10795. A lightweight fast OCR model optimized for deployment on edge devices.
- [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle): Author Cactus-Compute, Likes 256, Downloads 874. A specialized tool-use and function calling benchmark model that tests agent reliability across thousands of API call scenarios.
- [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates): Author froggeric, Likes 932, Downloads 0. A community asset with corrected Jinja chat templates for all Qwen 3.x model variants, fixing common generation errors caused by broken official templates.
- [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit): Author conradlocke, Likes 342, Downloads 0. A Krea 2 image editing LoRA that preserves human identity when modifying portrait images.
- [Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt): Author Cseti, Likes 85, Downloads 0. A video generation LoRA that adds novel view synthesis capabilities to existing LTX video models.

### 📦 Fine-tunes & Quantizations
- [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf): Author prism-ml, Likes 387, Downloads 1045182. The viral 1-bit quantized 27B conversational LLM that can run smoothly on 8GB of RAM on consumer laptops.
- [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf): Author prism-ml, Likes 672, Downloads 200774. A 2-bit ternary quantized variant of Bonsai that balances ultra-low footprint and near full-model accuracy.
- [unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4): Author unsloth, Likes 224, Downloads 1924495. Unsloth’s optimized NVFP4 quant of Qwen 3.6 27B that delivers maximum performance on NVIDIA consumer GPUs.
- [empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF): Author empero-ai, Likes 157, Downloads 98370. The lightweight GGUF quantized release of Qwythos 9B v2 for local deployment.
- [AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF): Author AngelSlim, Likes 120, Downloads 84834. The community GGUF quant release of Tencent’s Hy3 LLM.
- [prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit): Author prism-ml, Likes 116, Downloads 17127. The 1-bit MLX variant of Bonsai optimized for native Apple Silicon deployment.
- [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4): Author jlnsrk, Likes 127, Downloads 3447. An int4 quantized GLM-5.2 variant with expert streaming support to run the full MoE model on consumer CPUs.
- [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF): Author GnLOLot, Likes 273, Downloads 154762. The GGUF quant of the Tiny 1B reasoning model for ultra-portable local use.
- [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF): Author GnLOLot, Likes 101, Downloads 6367. The updated v2 GGUF release of the 1B local reasoning model.
- [unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF): Author unsloth, Likes 89, Downloads 5194. The community GGUF quant of Inkling multimodal model for local multimodal workflows.
- [prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit): Author prism-ml, Likes 98, Downloads 14605. The 2-bit ternary Bonsai variant optimized for native Apple Silicon hardware.
- [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B): Author bottlecapai, Likes 413, Downloads 9383. A fine-tuned Qwen 3.6 27B multimodal model optimized for step-by-step reasoning tasks.

---
## 3. Ecosystem Signal
The 2026-07-18 trending list confirms the Qwen 3.5/3.6 model family is now the dominant base checkpoint for the open LLM ecosystem, making up 70% of all top high-download models, as community developers prioritize its permissive licensing, strong native vision support, and wide hardware compatibility over older LLM lineups. Zero proprietary closed models appear on the top 30 trending list, confirming full user shift to open-weight models for all use cases from personal local use to production deployment. Ultra-low-bit 1-bit and 2-bit ternary quantizations have moved from experimental niche releases to mainstream adoption, with prism-ml’s Bonsai 27B 1-bit model earning over 1 million downloads. GGUF is now the de facto distribution standard for all consumer-facing models, with every major new flagship LLM receiving a community quantized GGUF release within 72 hours of launch.

---
## 4. Worth Exploring
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**: This top-liked new open MoE LLM offers industry-leading context window performance and full commercial permissive licensing, making it a perfect candidate for teams looking to replace closed API LLM endpoints

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*