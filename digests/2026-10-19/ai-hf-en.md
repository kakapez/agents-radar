# Hugging Face Trending Models Weekly Digest 2026-10-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-19 01:00 UTC

---

# Hugging Face Trending Models Weekly Digest
*As of 2026-10-19 (sorted by weekly likes)*

---

## 1. Last 7 Days' Highlights
Qwen’s model family dominated this week’s trending charts, with its Qwen3.8-27B multimodal model claiming the top spot by likes and its image generation and Flash-optimized variants also earning massive engagement. Video diffusion remained a red-hot category, as Lightricks’ LTX-2.5 image-to-video model drove over 2 million downloads paired with 8,000+ weekly likes. Baidu’s Unlimited-OCR and Meta’s SAM3 both broke 1.6 million downloads, highlighting explosive demand for high-accuracy vision utility models. Community fine-tunes and quantized editions of Qwen and MOSS image models also surged, reflecting strong user appetite for lightweight, uncensored, and deployment-ready model variants.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 470 | 13,007 | A 24B parameter MoE text generation model built on LiquidAI’s LFM2 architecture. It is trending for its efficient active-parameter design, balancing strong performance with lower inference compute costs. |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 542 | 410,558 | A 27B parameter function-calling LLM optimized for tool use scenarios. It is trending for its extreme quantization support (down to 2-bit via GGUF/llama.cpp) and solid tool-calling accuracy for edge deployments. |
| [tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B) | tencent | 189 | 1,187 | A 30B conversational text generation model from Tencent’s Hy memory-optimized series. It is trending for its long-context memory capabilities designed for extended dialogue and recall-heavy applications. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 1,338 | 10,233 | A Flash-optimized image-text-to-text multimodal model from DeepSeek’s V4.1 line. It is trending for its fast inference speed and strong multimodal understanding, making it suitable for real-time vision-language tasks. |
| [openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 1,008 | 57,935 | A 35B-class vision-language model from the MiniCPM-V 4.7 series. It is trending for its compact yet high-performance design, delivering competitive multimodal accuracy with lower deployment overhead. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 694 | 9,620 | A multi-speaker text-to-speech model from Fish Audio’s drama-focused lineup. It is trending for its ability to generate expressive, dramatic voice performances with distinct speaker identities for audio content creation. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 812 | 338,036 | A ComfyUI-optimized Flux 3 image-to-image generation model. It is trending for its high-quality image editing and generation capabilities, paired with native ComfyUI workflow support for creators. |
| [meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B) | meta-models | 546 | 1,809 | An 816B-class multimodal image-text-to-text model from Meta’s Muse Spark series. It is trending for its massive parameter scale and state-of-the-art vision-language reasoning capabilities. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 8,377 | 2,012,496 | A diffusion-based image-to-video model supporting text-to-video and video-to-video workflows. It is trending for its industry-leading video generation quality and 2M+ weekly downloads, making it the most popular video model of the week. |
| [black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black-forest-labs | 488 | 52,315 | The core Flux 3 image-to-image generation model from Black Forest Labs. It is trending for its upgraded image generation fidelity and editing precision, building on the widely adopted Flux model family. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 342 | 2,087 | A supervised fine-tuned text-to-image generation model from the OpenMOSS project. It is trending as a new open image generation option, with strong English prompt following and creative output quality. |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 984 | 23,131 | A high-speed text-to-image generation model from Qwen’s Image 2.1 series. It is trending for its balance of generation speed and visual quality, supporting both image creation and editing use cases. |
| [openbmb/MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B) | openbmb | 387 | 22,689 | A lightweight 1B parameter vision-language model from the MiniCPM-V 4.7 line. It is trending for its tiny size and strong edge-deployment suitability, delivering usable multimodal performance on low-resource devices. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,959 | 7,695,206 | A 27B parameter conversational image-text-to-text multimodal model from Qwen’s 3.8 series. It is the top trending model by both likes and downloads this week, with 7.7M weekly downloads and industry-leading multimodal dialogue performance. |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS-Team | 294 | 1,791 | The base text-to-image generation model from the OpenMOSS image project. It is trending as a fully open base model for image generation research and community fine-tuning. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,623 | 1,945,717 | Meta’s third-generation Segment Anything Model for mask generation and video segmentation. It is trending for its upgraded zero-shot segmentation accuracy and support for video inputs, driving nearly 2M weekly downloads. |
| [nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local) | nvidia | 213 | 4,876 | An FP4-quantized local deployment edition of Qwen3.8-Flash-Next optimized by NVIDIA. It is trending for its optimized inference efficiency on NVIDIA hardware, making it ideal for local multimodal deployments. |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 203 | 1,811 | A CPU-optimized image-to-text OCR model built for low-resource deployment. It is trending for its ONNX runtime support and strong OCR accuracy without GPU requirements. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 512 | 25,366 | A LoRA adapter for MiniMax-H3 that enables 360-degree orbit-style video generation from image inputs. It is trending for its unique first-last-frame guided video synthesis capability for 3D-style content creation. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 194 | 354,126 | A ComfyUI-optimized packaging of OpenMOSS’s image generation base model. It is trending for its seamless integration with ComfyUI workflows, driving 350k+ weekly downloads from creator communities. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,329 | 2,485,835 | A Flash-optimized multimodal conversational model from Qwen’s 3.8 experimental line. It is trending for its ultra-fast inference speed and state-of-the-art multimodal chat performance, with 2.5M weekly downloads. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,637 | 1,316,711 | The core Flash-optimized V4.1 multimodal model from DeepSeek. It is trending for its strong image-text understanding and fast inference, with 1.3M weekly downloads for vision-language tasks. |
| [nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 433 | 256,336 | A multi-skill fine-tuned Qwen3.8-27B variant focused on coding, reasoning, and efficient thinking. It is trending for its wide range of merged capabilities and support for both standard and GGUF deployment formats. |

### 🔧 Specialized Models (code, math, medical, embeddings)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,662 | 164,339 | Google’s second-generation EmbeddingGemma feature extraction model for text embeddings. It is trending for its state-of-the-art embedding quality for retrieval and RAG use cases, driving 160k+ weekly downloads. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,793 | 1,652,742 | A high-accuracy OCR and feature extraction model from Baidu’s vision lineup. It is trending for its industry-leading text recognition performance across complex document and image layouts, with 1.6M+ weekly downloads. |
| [vllm-sr/d3](https://huggingface.co/vllm-sr/d3) | vllm-sr | 238 | 4,532 | A zero-shot classification and feature extraction model built on Qwen3.5 architecture. It is trending for its strong zero-shot classification accuracy and compatibility with vLLM serving frameworks. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,947 | 103,709 | A community fine-tuned model designed to generate human-like text, available in both GGUF and safetensors formats. It is trending for its effectiveness at making AI-generated text undetectable, with 100k+ weekly downloads. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,559 | 2,661,687 | A quantized, uncensored fine-tune of Qwen’s Image 2.1 text-to-image model. It is trending for its unrestricted image generation capabilities and GGUF/ComfyUI support, with 2.6M+ weekly downloads. |
| [LiquidAI/LFM2.5-24B-A2B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B-GGUF) | LiquidAI | 206 | 107,599 | The GGUF-quantized edition of LiquidAI’s LFM2.5-24B MoE text generation model. It is trending for its support for llama.cpp deployment and wide range of quantization levels for edge use cases. |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 555 | 387,254 | An uncensored, GGUF-quantized edition of Qwen’s Image 2.1 Turbo generation model. It is trending for its fast inference speed and unrestricted creative image generation for local deployment users. |

---

## 3. Ecosystem Signal
Qwen’s model family is the clear momentum leader this cycle, with 8 entries across multimodal, text generation, image generation, and quantized variants capturing the top spot by likes and downloads. Open-weight models continue to dominate the trending charts entirely, with no proprietary API-exclusive models appearing in the top 30 — a sign that open-weight ecosystems are expanding their lead in deployment accessibility and community adoption.

Quantization and community fine-tuning activity remains extremely robust, especially around Qwen and MOSS image models. Uncensored and GGUF-formatted variants are driving millions of weekly downloads, highlighting strong user demand for unrestricted, locally deployable models. Video diffusion and vision utility models (OCR, segmentation) are also fast-growing categories, with Lightricks, Meta, and Baidu’s offerings all exceeding 1.5M weekly downloads.

---

## 4. Worth Exploring
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: The undisputed top trending model of the week with 17,959 likes and 7.7M+ downloads, this 27B multimodal model delivers industry-leading conversational vision-language performance. It is worth testing for any general-purpose multimodal chat, document understanding, or visual reasoning use case.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: The most popular video generation model on the hub this week with 2M+ downloads, LTX-2.5 supports image-to-video, text-to-video, and video-to-video workflows. It is a must-explore for creators and developers building AI video generation tools.
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: With 4,793 likes and 1.6M+ weekly downloads, this OCR model delivers state-of-the-art text recognition across complex layouts. It is worth evaluating for document processing, information extraction, and vision pipeline integration.

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*