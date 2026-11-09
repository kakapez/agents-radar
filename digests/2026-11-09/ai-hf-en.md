# Hugging Face Trending Models Weekly Digest 2026-11-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-09 02:31 UTC

---

# Hugging Face Trending Models Weekly Digest
**Week Ending: 2026-11-09**

## 1. Last 7 Days' Highlights
This week on Hugging Face, the Qwen3.5/3.8 ecosystem has emerged as the dominant force, with 8 of the 30 trending models built on Qwen architectures, including the top-downloaded model, Qwen/Qwen3.8-27B, which racked up over 7.6 million downloads. Generative media models saw massive engagement, with image-to-video and text-to-image tools drawing millions of combined downloads, driven by demand for accessible creative AI. Community activity remains heavily focused on uncensored fine-tunes and GGUF quantizations for edge deployment, particularly for Qwen and DeepSeek base models. 3D generation tools also made a notable entry into the top ranks, led by speridlabs/idol, the highest-liked model at 1,397 weekly likes.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,419 | 7,668,187 | A 27B-parameter multimodal conversational LLM from the Qwen team, trending as the most downloaded model this week. It supports image-text-to-text tasks and is optimized for general chat and reasoning use cases. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,730 | 25,569 | A multimodal LLM built for image-text-to-text generation, optimized for compressed-tensors deployment. It has gained traction for its balanced performance across general reasoning and visual understanding tasks. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,558 | 73,562 | A lightweight 1.7B-parameter text-generation LLM designed for efficient on-device deployment. It is trending for its strong small-model performance in edge use cases. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,411 | 295,747 | A fast, multimodal LLM from the DeepSeek team supporting both text and image input. It is popular for its low-latency text generation and strong general-purpose reasoning capabilities. |
| [baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) | baidu | 232 | 1,400 | A MoE-based text-generation base model from Baidu's ERNIE series. It is newly trending as an efficient base for further fine-tuning across Chinese and English language tasks. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,638 | 11,628 | A large 1T-parameter MoE multimodal LLM optimized for vLLM and SGLang deployment. It is gaining attention for its high-performance general reasoning and enterprise-grade deployment support. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,138 | 2,661,026 | A diffusion-based video generation model supporting image-to-video, text-to-video, and video-to-video tasks. It is the most liked and downloaded generative media model this week, with support for flexible video editing workflows. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,762 | 1,167,959 | A ComfyUI-optimized version of the Flux 3 image generation model, supporting both image generation and editing. It is popular among creative practitioners for its ease of use in custom ComfyUI pipelines. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,112 | 1,982,669 | The third iteration of Meta's Segment Anything Model, supporting video mask generation and feature extraction. It is trending for its state-of-the-art performance in automatic object segmentation for both images and videos. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,728 | 76,804 | A quantized GGUF version of Qwen's Turbo image generation model, optimized for ComfyUI deployment. It balances high image generation quality with reduced hardware requirements for local use. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 1,397 | 22,854 | An image-to-3D model built on Gaussian Splatting technology, released under the Apache 2.0 license. It is the highest-liked model this week for its ability to generate high-quality 3D assets from single images. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,108 | 67,230 | A 30B-parameter automatic speech recognition model from NVIDIA's Nemotron series. It is trending for its industry-leading transcription accuracy across multiple languages and audio conditions. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 516 | 1,083 | A flexible video generation model from Pika Labs supporting both video and audio-video generation. It is newly released and gaining early traction for its dynamic video output capabilities. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 254 | 625,136 | A ComfyUI-optimized diffusion model for text-to-image and image-to-image generation. It is widely downloaded for its fast, high-quality image output in creative workflows. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 196 | 76,308 | A video-to-video model optimized for character replacement and video editing. It is popular for its ability to swap characters in existing videos with minimal artifacts. |

### 🔧 Specialized Models (code, math, medical, embeddings)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 921 | 254,053 | A 4B-parameter code model fine-tuned from Qwen3.5 for 3D development tasks, with native Three.js support. It is heavily downloaded for its ability to generate 3D web code from natural language prompts. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 275 | 33,641 | A specialized variant of the Qwen3.5-4B 3D Coder focused on GLB 3D asset generation. It is trending among 3D developers for its ability to output production-ready GLB models directly from code. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 861 | 7,088 | An uncensored fine-tune of the 9B Qwen3.5-based DeepSeek V4 Pro model. It is popular with users seeking unfiltered text generation for research and creative use cases. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,711 | 1,553,252 | A GGUF-quantized uncensored fine-tune of Qwen3.8-27B, optimized for both coding and creative fiction generation. It is one of the most downloaded community fine-tunes this week, with support for edge deployment via GGUF. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,538 | 1,548,621 | An official GGUF quantized version of Qwen3.8-Flash-Next, optimized for fast deployment on consumer hardware. It is widely downloaded for its balance of speed and performance for edge use cases. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 391 | 130,020 | A GGUF-quantized uncensored fine-tune of DeepSeek V4.1 Flash, using GSQ quantization for efficient edge deployment. It is trending among users seeking low-resource access to DeepSeek's latest model capabilities. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 206 | 258,719 | A specialized GGUF quantized fine-tune of DeepSeek V4.1 Flash focused on coding tasks. It is heavily downloaded by developers looking for fast, on-device coding assistance. |
| [Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF) | Scantist | 1,292 | 4,938 | A GGUF quantized slim variant of GLM-5.3, built with MoE architecture optimized via neural architecture search. It is gaining traction for its efficient MoE performance on edge hardware. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 294 | 1,747 | A supervised fine-tuned 27B model based on Qwen3.5, developed by Nous Research. It is trending for its optimized general-purpose performance from a leading open AI research lab. |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 187 | 136,706 | An i1-quantized GGUF version of the popular uncensored DeepSeek-V4-Pro-Qwen3.5-9B fine-tune. It is downloaded by users seeking a smaller, more efficient version of the popular uncensored model for local deployment. |
| [PrunaAI/P-H3-Image](https://huggingface.co/PrunaAI/P-H3-Image) | PrunaAI | 172 | 893 | A base diffusers version of the P-H3-Image text-to-image generation model. It is newly released alongside its ComfyUI variant, targeting users building custom image generation pipelines. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 406 | 5,087 | A 65B-parameter preview model released under the Apache 2.0 license, with custom code support. It is trending as a new open-weight base model from emerging developer ricursiveAI. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 419 | 1,003 | A fine-tune of the MiniMax-H3 base model, developed by community contributor FusionCow. It is newly trending as a specialized fine-tune of the emerging MiniMax-H3 model family. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 234 | 22,737 | An 8B-parameter text-generation model based on the Granite architecture, released by webAI-Official. It is gaining traction as an efficient base model for specialized web use cases. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 391 | 10,197 | An 8-bit quantized custom-code model optimized via NVIDIA's modelopt toolkit. It is trending as an efficient, low-resource model for specialized edge deployments. |

## 3. Ecosystem Signal
The Qwen model family has emerged as the clear ecosystem leader this week, accounting for nearly a third of all trending models and dominating both download and like counts across base models, fine-tunes, and specialized variants. Open-weight models continue to drive the majority of community activity, with GGUF quantizations making up over 25% of trending entries, reflecting strong demand for edge-deployable, low-resource models that run on consumer hardware. Uncensored fine-tunes remain a persistent community focus, particularly for popular base models like Qwen3.8 and DeepSeek-V4, indicating ongoing user demand for unfiltered model behavior alongside official safety-aligned releases. Emerging model families including MiniMax-H3 and GLM-5.3 are also gaining early traction, with dedicated fine-tunes and quantizations appearing within days of base model releases, signaling a fast-moving open development cycle.

## 4. Worth Exploring
1. **[speridlabs/idol](https://huggingface.co/speridlabs/idol)**: This image-to-3D Gaussian Splatting model is the highest-liked entry this week, offering a fully open Apache 2.0 licensed tool for generating high-quality 3D assets from single images. It fills a critical gap in the open 3D generation space, with strong potential for game development, AR/VR, and 3D content creation use cases.
2. **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)**: This specialized 4B code model combines Qwen's strong coding capabilities with Three.js and 3D web development expertise, making it an excellent low-resource tool for developers building interactive 3D web experiences. Its high download count (over 250k in a week) reflects real-world utility for front-end 3D development workflows.
3. **[facebook/sam3](https://huggingface.co/facebook/sam3)**: Meta's latest Segment Anything Model adds video segmentation support to its industry-leading image segmentation capabilities. With nearly 2 million weekly downloads, it is a foundational tool for computer vision researchers and developers working on video analysis, object tracking, and visual content editing pipelines.

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*