# Hugging Face Trending Models Weekly Digest 2026-10-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-26 01:05 UTC

---

# Hugging Face Trending Models Weekly Digest
*Week ending 2026-10-26*

## 1. Last 7 Days' Highlights
This week’s Hugging Face trending list is dominated by large multimodal language models, with Qwen’s 27B-parameter image-text-to-text model taking the top spot by likes and downloads. Video generation models saw exceptional adoption, with Lightricks’ LTX-2.5 surpassing 2.1 million weekly downloads. Community activity is heavily focused on quantized and fine-tuned variants of popular base models, particularly GGUF builds for local deployment. Open-weight models from both major labs and independent researchers continue to outpace proprietary closed models in community engagement, especially for use cases requiring uncensored or specialized adaptations.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 858 | 6,444 | A conversational text-generation LLM optimized for general chat use cases. It has attracted strong community interest as a lightweight alternative to larger closed-model chat systems. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 495 | 3,488 | A 4B-parameter text-generation LLM targeted at efficient edge deployment. Its small footprint has driven adoption among developers running models on consumer hardware. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 375 | 0 | A 33B-parameter Llama-based text-generation LLM. It is newly released, with zero downloads yet generating early buzz for its strong instruction-tuning performance. |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 183 | 807 | A Qwen-based text-generation model fine-tuned for DNA sequence analysis. It represents a growing trend of LLMs adapted for specialized scientific research use cases. |
| [KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview) | KRAFTON | 186 | 1,177 | A mini-sized preview text-generation LLM. It has drawn interest for its efficient design and strong baseline performance on common language benchmarks. |
| [ornith-ai/Ornith-1.5-122B](https://huggingface.co/ornith-ai/Ornith-1.5-122B) | ornith-ai | 177 | 48,477 | A 122B-parameter MoE text-generation LLM built on the Qwen3.5 architecture. Its large parameter count and multimodal capabilities have driven solid download numbers despite its size. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 2,982 | 85,275 | A high-speed image-text-to-text multimodal model. It is trending for its low-latency inference performance across both vision and language tasks. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 1,604 | 660,874 | A ComfyUI-optimized image-to-image diffusion model for image generation and editing. It has amassed hundreds of thousands of downloads from creators using it for visual content workflows. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,337 | 2,107,108 | An image-to-video diffusion model supporting text-to-video and video-to-video generation. Its 2.1 million weekly downloads make it one of the most adopted video generation models on the hub this week. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 728 | 10,757 | A supervised fine-tuned text-to-image diffusion model. It is popular for its high-fidelity output quality and open Apache-2.0 license. |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 352 | 7,355 | A fast image-text-to-text multimodal model. It is trending for its efficient inference speed and strong cross-modal understanding capabilities. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,040 | 2,235,846 | A quantized uncensored variant of the Qwen-Image text-to-image model, optimized for ComfyUI. It has exceeded 2.2 million downloads, driven by demand for unfiltered creative generation. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,395 | 7,762,014 | A 27B-parameter image-text-to-text conversational multimodal model. It is the most liked and downloaded model this week, with broad adoption for general-purpose multimodal chat and reasoning tasks. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,013 | 21,375 | A multi-speaker text-to-speech model. It is trending for its natural voice quality and support for dramatic, character-rich speech generation. |
| [lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss) | lodestones | 260 | 23,972 | A text-to-image diffusion model built on the MOSS-Image architecture. It has gained traction among creators for its fast inference and high-resolution output. |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS-Team | 554 | 7,641 | The base text-to-image diffusion model for the MOSS-Image family. It serves as the foundation for multiple community fine-tunes this week, showing strong ecosystem momentum. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 451 | 2,161,961 | A ComfyUI-packaged diffusion single-file version of the MOSS-Image model. Its 2.1 million downloads reflect strong integration with the popular ComfyUI creative workflow platform. |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 425 | 4,636 | An OCR-focused image-to-text model optimized for CPU inference. It is trending for its lightweight design and strong performance on scanned document and handwritten text tasks. |
| [orcarouter/OrcaCyber-Nano-1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0) | orcarouter | 254 | 30,330 | A vision-language multimodal model fine-tuned for cybersecurity and reverse engineering tasks. It represents a growing niche of domain-specialized multimodal models for technical use cases. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,109 | 1,849,059 | The third generation of Meta’s Segment Anything Model for mask generation, with added video support. Its 1.8 million downloads make it a leading tool for computer vision segmentation workflows. |
| [Comfy-Org/Fibo-2.0](https://huggingface.co/Comfy-Org/Fibo-2.0) | Comfy-Org | 179 | 124,557 | A ComfyUI-packaged diffusion single-file image generation model. It has amassed over 120,000 downloads since its recent release for creative image generation use cases. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,155 | 143,152 | A Qwen-based image-text-to-text model fine-tuned to convert AI-generated text into more natural, human-sounding prose. It has gained strong traction among users looking to reduce the "AI tone" of generated content. |

### 🔧 Specialized Models (code, math, medical, embeddings)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 289 | 3,875 | A MoE text-generation model optimized for scientific reasoning tasks. It is built on the Qwen3.5 architecture and is designed to support research and data analysis workflows. |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 367 | 9,765 | A 209M-parameter time-series forecasting foundation model from Mistral AI. It is the first dedicated time-series model from the lab, trending for its strong performance on predictive analytics tasks. |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,921 | 212,769 | A feature-extraction embedding model from Google, built on the Gemma 2 architecture. It has surpassed 200,000 downloads, driven by demand for high-quality text embeddings for retrieval and RAG systems. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 281 | 412,392 | A GSQ-RCO mixed-precision GGUF quantization of the DeepSeek-V4.1-Flash model. It has amassed over 400,000 downloads from users running the model locally on consumer hardware. |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 365 | 6,792 | An uncensored FP8 fine-tune of the DeepSeek-V4.1-Flash image-text-to-text model. It is popular among users looking for unfiltered multimodal capabilities without content restrictions. |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 250 | 103,369 | Unsloth’s official GGUF quantization of the RecursiveSI/flint chat model. It has exceeded 100,000 downloads, reflecting strong demand for optimized local deployments of small chat models. |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 216 | 7,293 | An abliterated (refusal-removed) GGUF quantization of DeepSeek-V4.1-Flash-1017, optimized for llama.cpp local deployment. It caters to users seeking uncensored local LLM performance. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,091 | 1,671,015 | A heavily fine-tuned uncensored GGUF variant of Qwen3.8-27B, optimized for creative fiction and coding tasks. It has surpassed 1.6 million downloads, making it one of the most popular community fine-tunes this week. |

## 3. Ecosystem Signal
The current Hugging Face ecosystem shows clear momentum around open-weight multimodal models, with the Qwen and DeepSeek families dominating both engagement and download metrics. Qwen3.8-27B alone accounts for over 7.7 million weekly downloads, indicating that large open multimodal models have reached parity with closed systems for many common use cases. Quantization activity is heavily concentrated on GGUF format variants, with community teams producing optimized local-deployment builds for nearly every major base model release. Uncensored and abliterated fine-tunes continue to draw significant user interest, particularly for image generation and chat use cases. Specialized models for scientific, cybersecurity, and time-series tasks are also emerging as a fast-growing niche, showing that the ecosystem is expanding beyond general-purpose chat and creative generation use cases. Open-weight models from both large labs and independent researchers are consistently outperforming proprietary closed models in community adoption, driven by lower deployment costs and greater customization flexibility.

## 4. Worth Exploring
1. **Qwen/Qwen3.8-27B**: This model is the clear standout of the week, with exceptional performance, massive community adoption, and support for both image-text understanding and conversational reasoning. It is well worth evaluating as a replacement for closed multimodal APIs for most general-purpose use cases.
2. **Lightricks/LTX-2.5**: With over 2.1 million weekly downloads and support for image, text, and video input to generate video output, this model represents the current state-of-the-art for open-weight video generation. It is ideal for developers building creative video tools or experimenting with multimodal video workflows.
3. **google/embeddinggemma-2**: As a high-performance open embedding model from Google, it has already amassed strong download numbers for RAG and retrieval use cases. It is worth testing for teams looking to improve the quality of their retrieval systems without relying on closed embedding APIs.

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*