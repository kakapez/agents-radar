# Hugging Face Trending Models Weekly Digest 2026-09-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-28 01:30 UTC

---

# Hugging Face Trending Models Weekly Digest (2026-09-28)

## 1. Last 7 Days' Highlights
Qwen3.8-27B dominates the trending chart with 16,429 weekly likes and 6.7M downloads, cementing Qwen’s position as a leading open multimodal model family. Text-to-image innovation surges around Qwen-Image-2.1, with the official base model and 6 community variants all ranking in the top 30, driven by high demand for open image generation tools. Lightricks’ LTX-2.5 video generation model emerges as a breakout hit with 5,333 likes and 1.6M downloads, signaling accelerating growth in open video AI. Low-bit quantization remains a core ecosystem priority, with GGUF-format ternary and 2-bit models posting some of the highest download volumes across the chart.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,782 | 45,028 | A 29B parameter conversational text generation model built on transformers with safetensors format. It is trending for its strong conversational performance and accessible 4-bit quantized design, making it deployable on consumer hardware. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 738 | 5,904 | A text generation model fine-tuned on the Qwen3.5/3.8 architecture with safetensors weights. It is trending for its focus on high-quality, stylized text generation tailored for creative writing use cases. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 557 | 75,079 | A reinforcement learning optimized text generation model from Xiaomi’s MiMo family, supporting multimodal inputs. It is trending for its strong general-purpose performance and RL-tuned alignment for real-world dialogue applications. |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 491 | 25,661 | A lightweight, fast inference variant of the MiMo-V2.6 RL-tuned text generation model. It is trending for its balance of speed and performance, targeting low-latency multimodal deployment scenarios. |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 349 | 3,456 | An 80B parameter base large language model from Yandex’s AliceAI series, with custom code support. It is trending as a new high-capacity open base model for research and downstream fine-tuning. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,429 | 6,727,629 | A 27B parameter image-text-to-text multimodal conversational model from the Qwen3.5 family, with safetensors weights. It is the top trending model of the week, driven by its state-of-the-art multimodal reasoning performance and massive adoption across both research and production use cases. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,333 | 1,601,089 | A diffusion-based video generation model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video workflows. It is trending as a breakthrough open video generation model, with high-fidelity output and support for multiple video generation paradigms. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,813 | 651,078 | A fast inference multimodal model supporting both text generation and image-text-to-text tasks from DeepSeek. It is trending for its industry-leading low-latency multimodal reasoning, making it ideal for real-time interactive applications. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,498 | 52,804 | The official base text-to-image generation model from Qwen, supporting both image generation and editing via diffusers. It is trending as a new state-of-the-art open image model, spawning a large ecosystem of community fine-tunes and quantizations. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,680 | 11,612 | A 9B parameter vision-language multimodal model optimized for spatial reasoning tasks. It is trending for its strong performance on visual reasoning benchmarks, filling a niche for spatial-aware open VLM applications. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 522 | 8,839 | A 9B parameter distilled image-text-to-text multimodal model based on Qwen3.5 architecture. It is trending for its compact size and strong performance, derived from distillation of larger MiMo models for edge deployment. |
| [StarDoc-AI/TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR) | StarDoc-AI | 601 | 27,837 | An OCR-specialized image-text-to-text model built on the Qwen2.5-VL architecture. It is trending for its high accuracy on document and telemetry image text extraction, addressing a high-demand industrial OCR use case. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,075 | 19,434 | A streaming automatic speech recognition model with support for infinite-length audio inputs. It is trending for its long-form audio transcription capability and low-latency streaming design, ideal for live captioning and meeting transcription. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 437 | 8,243 | An automatic speech recognition model from NetEase Youdao’s Confucius4 series, built on Qwen3 ASR architecture. It is trending for its strong Chinese and multilingual ASR performance, optimized for education and translation use cases. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 409 | 22,514 | A voice activity detection and speaker diarization model from NVIDIA’s Nemotron-3 family, supporting GGUF and NeMo formats. It is trending for its high-accuracy speaker separation capability, a critical component for enterprise audio processing pipelines. |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 243 | 1,740 | A 9B parameter vision-language model built on Qwen3.5 architecture, Apple’s first open VLM release on Hugging Face. It is trending for its strong visual understanding performance and Apple’s backing, drawing attention from both research and on-device AI communities. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,099 | 0 | A text classification model optimized for calibrated decision making, part of the System One model suite. It is trending for its novel approach to calibrated text classification, reducing prediction uncertainty for high-stakes enterprise use cases. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 610 | 0 | A cross-encoder natural language inference model fine-tuned on Qwen3.5 architecture for text classification. It is trending as a high-performance open verifier model, designed to improve factuality and reasoning accuracy for LLM pipelines. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 410 | 766 | An 8B parameter text ranking and reranking model built on contrastive learning principles. It is trending as a new state-of-the-art open reranker, delivering strong retrieval performance for RAG and search applications. |
| [convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 306 | 0 | A multilingual text classification model based on mBERT, extending the Laya calibrated decision framework to multilingual use cases. It is trending for its calibrated classification capability across multiple languages, addressing a gap in enterprise multilingual NLP tools. |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 270 | 248 | A unified text classification model based on Gemma4, supporting both text and image-text input modalities. It is trending for its omni-modal classification design, unifying traditional NLP and multimodal classification tasks in a single model. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 208 | 19,757 | A token classification model from the GLiNER2 family, optimized for text extraction and intent classification. It is trending for its flexible named entity recognition and intent detection capabilities, widely used for conversational AI and information extraction workflows. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,192 | 3,343,748 | A 2-bit ternary quantized 27B parameter language model in GGUF format for llama.cpp deployment. It is the highest-downloaded LLM quantization of the week, trending for its extreme compression ratio with minimal quality loss, enabling 27B-class model inference on consumer GPUs. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 807 | 3,987,373 | A ComfyUI-optimized single-file distribution of Qwen-Image-2.1 for both base model and fine-tune use cases. It is the highest-downloaded model of the week, trending for its seamless integration with the popular ComfyUI workflow platform, making state-of-the-art image generation accessible to creators. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,086 | 964,220 | An uncensored GGUF quantized variant of Qwen-Image-2.1 optimized for ComfyUI workflows. It is trending for its unrestricted content generation capability and GGUF format support, addressing high demand for flexible, uncensored open image generation tools. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,778 | 1,608,439 | A GSQ-RCO mixed-precision quantized GGUF variant of Qwen3.8-27B multimodal model. It is trending for its innovative quantization technique, delivering near-fp16 performance at a fraction of the memory footprint for the popular Qwen3.8-27B model. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 341 | 133,151 | A LoRA fine-tuned turbo variant of Qwen-Image-2.1 optimized for fast text-to-image and image-to-image generation. It is trending for its significantly reduced inference time while maintaining high image quality, ideal for iterative creative workflows. |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 270 | 194,341 | A quantized GGUF distribution of Qwen-Image-2.1 from Unsloth, optimized for fast inference and fine-tuning. It is trending for its high-quality quantization and Unsloth’s reputation for performance-optimized model distributions. |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 300 | 145,246 | An FP8 quantized GGUF variant of the Qwen-Image-2.1 text encoder, optimized for ComfyUI workflows. It is trending for its specialized text encoder optimization, improving prompt understanding for image generation pipelines while reducing memory usage. |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 302 | 0 | A design-focused text-to-image model fine-tuned for creative design use cases, built on diffusers with safetensors weights. It is trending as a niche fine-tune tailored for graphic design and industrial design generation, addressing a gap in specialized open image models. |

---

## 3. Ecosystem Signal
The Qwen model family has emerged as the undisputed leader of the open-weight ecosystem this week, with 11 Qwen-based models ranking in the top 30 across multimodal, image generation, and text classification categories. Open-weight models continue to outpace proprietary alternatives in Hugging Face adoption, with community-driven fine-tunes and quantizations consistently driving higher download volumes than official base releases — a trend underscored by Comfy-Org’s Qwen-Image-2.1 distribution hitting nearly 4 million downloads.

Quantization remains the most active ecosystem development vector: GGUF-format models account for 7 of the top 30 spots, with innovative techniques ranging from 2-bit ternary compression to mixed-precision GSQ-RCO enabling increasingly large models to run on consumer hardware. The rapid proliferation of fine-tunes within days of Qwen-Image 2.1’s release also highlights the maturing speed of the open-source AI development cycle, with community extensions now launching in parallel with official model rollouts.

---

## 4. Worth Exploring
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: As the top trending model with 6.7 million weekly downloads, it sets a new bar for open multimodal reasoning performance. Its combination of text and visual understanding capabilities makes it a versatile foundation for everything from RAG systems to creative AI applications, and its massive adoption ensures robust community support and tooling.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: A standout open video generation model that supports four different video creation workflows (image-to-video, text-to-video, video-to-video, image-text-to-video) in a single architecture. Its 1.6 million downloads in a week signal it is rapidly becoming the go-to open alternative for video generation, with quality approaching closed-source options.
3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**: This 2-bit ternary quantized 27B model represents a breakthrough in extreme compression, delivering usable 27B-parameter performance on hardware that previously could only run 7B models. It is a prime example of how quantization innovation is democratizing access to large language models, making it well worth testing for edge and low-resource deployment use cases.

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*