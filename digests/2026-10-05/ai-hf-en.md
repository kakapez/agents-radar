# Hugging Face Trending Models Weekly Digest 2026-10-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-05 01:47 UTC

---

# Hugging Face Trending Models Weekly Digest (2026-10-05)

---

## 1. Last 7 Days' Highlights
Qwen maintains its dominance in the trending charts this week, with the Qwen3.8-27B multimodal model leading all entries with 16,939 weekly likes and over 6.8 million downloads. Video generation models also saw strong momentum: Lightricks’ LTX-2.5 ranked second in likes at 6,316 while surpassing 1.6 million downloads, reflecting growing user demand for high-performance open video tools. Quantized and community fine-tuned variants of top base models—especially GGUF formats optimized for local deployment—dominate download volumes, with multiple Qwen3.8 and ternary 2-bit quantization variants each pulling in millions of weekly downloads. New entrants like Cloudflare’s clef multimodal series and DeepSeek-V4.1-Flash also gained rapid traction, signaling accelerating competition in lightweight multimodal models.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 400 | 1,135 | A Mixture-of-Experts (MoE) reasoning-focused text generation model optimized for vLLM deployment. It is trending for its strong reasoning performance and efficient MoE architecture suited for enterprise inference workloads. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 287 | 14,361 | A 29B parameter text generation model released in GGUF format for local and edge deployment. It is trending among open LLM enthusiasts for its balanced size-performance ratio and broad compatibility with llama.cpp runtimes. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 361 | 14,195 | An uncensored 27B parameter text generation model fine-tuned from Qwen3.8, distributed in GGUF format. It is trending for its cyber domain specialization and unrestricted output alignment for specialized use cases. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,416 | 4,045,810 | A 2-bit ternary quantized 27B parameter LLM optimized for ultra-low-resource deployment via llama.cpp. It is trending for delivering near-full-precision performance at an extremely compact model size, driving over 4 million weekly downloads. |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 215 | 946 | An uncensored GLM-5.3 MoE model compressed to 3.0 bits per weight using EXL3 quantization. It is trending among power users for its high inference speed on consumer GPUs and unrestricted generation capabilities. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,217 | 4,214 | An image-text-to-text multimodal model built on the Qwen3.5 architecture, optimized for edge and cloud deployment. It is trending as Cloudflare’s first open multimodal release, with strong performance on visual understanding tasks for production use cases. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 429 | 6,372 | A lightweight, fast variant of the clef multimodal model designed for low-latency inference. It is trending for its optimized latency profile, making it suitable for real-time edge applications like content moderation and visual querying. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,939 | 6,821,761 | A state-of-the-art 27B parameter image-text-to-text multimodal conversational model from the Qwen family. It is the top trending model this week, leading in both likes and downloads for its strong vision-language reasoning and broad conversational capabilities. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,948 | 90,003 | A high-performance text-to-image generation model with built-in image editing capabilities, built on the Qwen image generation suite. It is trending for its strong photorealism and flexible editing workflows compatible with Diffusers pipelines. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,316 | 1,626,951 | A diffusion-based video generation model supporting image-to-video, text-to-video, and video-to-video workflows via a single file. It is the second-most-liked model this week, driven by its high video quality and accessible single-file deployment format. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 588 | 272,896 | A turbocharged text-to-image variant of Qwen-Image-2.1 optimized for fast generation. It is trending for its balance of generation speed and output quality, making it popular for rapid iteration in creative workflows. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,859 | 12,638 | A 9B parameter vision-language model specialized in spatial reasoning and multimodal understanding tasks. It is trending for its strong spatial reasoning performance, which outperforms many larger models on geometry and visual layout benchmarks. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,181 | 203,086 | A Qwen-Image-2.1 based LoRA model for high-fidelity face swapping in images. It is trending for its natural-looking face swap results and seamless integration with Qwen’s image editing pipeline, driving over 200k weekly downloads. |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 291 | 15,800 | A LoRA adapter for MiniMax-H3 video models enabling consistent character swapping in video sequences. It is trending for its ability to maintain character identity across long video clips, a key pain point for video editing workflows. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,094 | 798,422 | A fast, lightweight multimodal image-text-to-text model from DeepSeek optimized for low-latency conversational use cases. It is trending for its strong performance-to-speed ratio, positioning it as a top alternative to Qwen’s flash multimodal series. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 186 | 5,742 | A LoRA adapter for MiniMax-H3 that enables 360-degree orbit video generation from image and text inputs. It is trending for its unique first-last-frame guided orbit generation capability, opening new use cases for 3D-style content creation. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,897 | 1,480,842 | An experimental fast multimodal model from Qwen’s Qwen4 preview line, optimized for conversational image-text tasks. It is trending as Qwen’s latest high-speed multimodal release, with strong early performance on visual reasoning benchmarks. |
| [lilylilith/QI_2.1_AnyAngle](https://huggingface.co/lilylilith/QI_2.1_AnyAngle) | lilylilith | 126 | 0 | A Qwen-Image-2.1 LoRA fine-tuned for generating and editing characters from any camera angle. It is a new trending release targeted at character design workflows, with strong early interest from digital artists. |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 202 | 2,635 | An automatic speech recognition (ASR) model optimized for Apple Silicon via MLX, built on the Parakeet TDT five-value architecture. It is trending among Apple ecosystem users for its fast on-device speech-to-text performance and low memory footprint. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,145 | 1,553,744 | An uncensored GGUF-quantized variant of Qwen-Image-2.1 optimized for ComfyUI workflows. It is trending for its unrestricted image generation capabilities and broad compatibility with local image generation pipelines, driving over 1.5 million weekly downloads. |

### 🔧 Specialized Models (code, math, medical, embeddings)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,164 | 3,752 | A text classification model built on the Laya System-One architecture, optimized for calibrated decision-making tasks. It is the third-most-liked model this week, recognized for its industry-leading accuracy on calibrated classification benchmarks for enterprise use cases. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 715 | 3,445 | An 8B parameter contrastive learning-based text ranking and reranking verifier model. It is trending for its strong performance on retrieval-augmented generation (RAG) workflows, outperforming many dedicated reranker models on long-context ranking tasks. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 673 | 53,014 | A voice activity detection and audio frame classification model for speaker diarization, part of NVIDIA’s Nemotron 3 family. It is trending for its high diarization accuracy and optimized inference for production audio pipelines, with 53k+ weekly downloads. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 415 | 3,657 | A multilingual text classification decision model built on PyTorch with Safetensors weights. It is trending for its strong cross-lingual classification performance and lightweight footprint, suitable for deployment in global decision support systems. |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 402 | 1,516 | A computer vision image classification model introduced in a recent arXiv paper (2609.33325), built on the VisionHOPE architecture. It is trending as a new state-of-the-art open image classification model, driving research interest in vision backbone improvements. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 366 | 53,625 | A GLiNER 2.5-based token classification model optimized for text extraction, intent classification, and text classification tasks. It is trending for its flexible zero-shot extraction capabilities and high throughput, with over 53k weekly downloads for NLP pipeline integration. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 556 | 1,886,975 | A GSQ-RCO mixed-precision quantized GGUF variant of Qwen3.8-Flash-Next, optimized for low-resource multimodal inference. It is trending for its minimal quality loss at aggressive quantization levels, driving nearly 1.9 million weekly downloads for local multimodal deployment. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 260 | 351,230 | A code-specialized quantized GGUF variant of Qwen3.8-Flash-Next, using GSQ-RCO pruning and quantization. It is trending for its strong coding performance in a compact, locally deployable format, with 350k+ weekly downloads. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,960 | 1,636,747 | A GSQ-RCO mixed-precision quantized GGUF build of Qwen3.8-27B, optimized for high-performance local multimodal inference. It is trending for delivering near-base-model performance at a fraction of the memory footprint, with over 1.6 million weekly downloads. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,423 | 2,164,143 | A community fine-tuned and quantized GGUF variant of Qwen3.8-27B, optimized for coding, creative writing, and uncensored generation via Unsloth. It is trending for its all-in-one capabilities across coding, creative, and conversational tasks, with 2.1 million+ weekly downloads. |

---

## 3. Ecosystem Signal
The Qwen model family continues to dominate the open-weight ecosystem, accounting for 14 of the 30 trending models this week across base models, image generation, and community fine-tunes. Its Qwen3.8 multimodal line has become the de facto foundation for community innovation, with quantization teams like ISTA-DASLab and independent fine-tuners building high-download variants optimized for local deployment.

Open-weight models maintain clear momentum over proprietary alternatives, with top entries like Qwen3.8-27B and LTX-2.5 each pulling in millions of weekly downloads—driven by demand for customizable, on-premise, and edge-deployable AI tools. Quantization activity is intensifying beyond standard 4-bit formats: ternary 2-bit models (Ternary-Bonsai-2) and mixed-precision GSQ-RCO methods are gaining mainstream traction, proving that extreme compression can preserve usable performance for consumer hardware use cases.

---

## 4. Worth Exploring
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: As the top-ranked model by both likes and downloads, it represents the current state of the art in open multimodal models. Its strong vision-language reasoning and conversational capabilities make it a benchmark for evaluating new multimodal systems, and its broad ecosystem of fine-tunes and quantizations ensures deployment flexibility for every use case.
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**: This 2-bit ternary quantized 27B LLM is a breakthrough in extreme model compression, delivering over 4 million weekly downloads while maintaining near-full-precision performance. It is ideal for studying the limits of low-bit quantization and deploying large language models on memory-constrained consumer and edge hardware.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: As the highest-trending video generation model this week, LTX-2.5 demonstrates the rapid maturation of open video diffusion tools. Its single-file format and support for image-to-video, text-to-video, and video-to-video workflows make it a versatile tool for creators and researchers exploring generative video applications.

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*