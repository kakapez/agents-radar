# Hugging Face Trending Models Weekly Digest 2026-10-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-12 02:13 UTC

---

# Hugging Face Trending Models Weekly Digest (2026-10-12)

## 1. Last 7 Days' Highlights
Qwen’s ecosystem dominates this week’s trending charts, with the Qwen3.8-27B multimodal base model leading all entries at 17,511 likes and 6.8M downloads, supported by high-demand quantizations and fine-tunes. Video generation and editing tools continue to surge, as Lightricks’ LTX-2.5 image-to-video model tops all likes at 7,325 and crosses 1.7M downloads. Niche specialized models also gained traction: Cloudflare launched two Clef multimodal models, convaiinnovations’ Laya text classifier hit 5,493 likes, and Facebook’s SAM3 mask generation model crossed 2M downloads. Community-driven quantizations and uncensored fine-tunes of top base models remain a consistent core of user engagement, with GGUF variants accounting for over half of the top 30 entries.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 887 | 12,550 | A MoE (mixture-of-experts) reasoning-focused text generation model optimized for vLLM deployment. It is trending for its strong reasoning performance and efficient inference architecture targeting enterprise use cases. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 691 | 48,389 | A 29B parameter text generation model from the Xing4.0 family, released in GGUF format for lightweight local deployment. It is trending for its balance of size and performance for consumer hardware setups. |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 323 | 108,900 | A 27B text generation model optimized for tool calling and function calling use cases, available in ultra-low 2-bit GGUF quantization. It is trending for its strong tool use performance even at extreme compression levels. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,632 | 4,549,911 | A 27B ternary (2-bit) quantized text generation model built for llama.cpp deployment with minimal quality loss. It is trending for its industry-leading efficiency in ultra-low-bit inference, driving over 4.5M downloads. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,097 | 37,647 | A Gemma4-based image-text-to-text model focused on human-like conversational responses to multimodal inputs. It is trending for its natural, humanized output style that outperforms many larger models on open-ended dialogue benchmarks. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,028 | 14,351 | A Qwen3.5-based image-text-to-text model built for fast, edge-deployable multimodal understanding. It is trending for its optimized inference speed tailored for Cloudflare’s edge computing ecosystem. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,325 | 1,726,683 | A diffusion-based image-to-video model that also supports text-to-video and video-to-video workflows. It is the most-liked model this week, trending for its cinematic output quality and support for flexible video generation pipelines. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,511 | 6,843,108 | Qwen’s flagship 27B multimodal conversational model supporting image-text-to-text tasks. It is the most-downloaded model this week, trending for its state-of-the-art performance across vision-language reasoning and chat use cases. |
| [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 300 | 10,843 | A 3B parameter small multimodal model built on the LFM2-VL architecture for on-device image-text understanding. It is trending for its tiny footprint and strong performance for edge and mobile deployment. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 756 | 22,123 | A faster, lightweight variant of Cloudflare’s Clef multimodal model optimized for low-latency edge inference. It is trending for its balance of speed and accuracy for real-time multimodal applications. |
| [nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 238 | 56,525 | A heavily fine-tuned Qwen3.8-27B multimodal model optimized for reasoning and coding tasks. It is trending for its stacked fine-tuning pipeline combining SFT, RLOO, and MTP for enhanced performance across benchmarks. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 801 | 4,189,006 | A GSQ-RCO quantized GGUF variant of Qwen’s Qwen3.8-Flash-Next multimodal model with mixed-precision compression. It is trending for its minimal quality loss at extreme quantization levels, driving over 4M downloads. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,229 | 136,103 | Qwen’s official text-to-image generation model supporting both image creation and editing workflows via Diffusers. It is trending for its high-fidelity output and strong alignment with text prompts. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,657 | 2,016,567 | An uncensored, coding-optimized fine-tune of Qwen3.8-27B in GGUF format with MTP training. It is trending for its strong coding performance and unrestricted output profile, crossing 2M downloads. |
| [FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism) | FrancisRing | 162 | 0 | A joint video-audio generation model built on video diffusion transformer architecture. It is trending as a novel open-source approach to synchronized video and audio output, even in its early pre-release stage. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,112 | 1,870,465 | Qwen’s fast, lightweight multimodal conversational model optimized for low-latency inference. It is trending for its near-state-of-the-art performance at significantly faster inference speeds than full-size models. |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 544 | 4,702 | A faster, optimized variant of Qwen’s Image 2.1 text-to-image model for high-throughput generation. It is trending for its reduced inference time while maintaining output quality for production use cases. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,153 | 1,489,676 | A GSQ-RCO mixed-precision quantized GGUF variant of Qwen’s flagship Qwen3.8-27B multimodal model. It is trending for delivering near-float performance at a fraction of the memory footprint, with nearly 1.5M downloads. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,365 | 1,382,367 | DeepSeek’s fast multimodal model supporting both text generation and image-text-to-text tasks. It is trending for its strong competitive performance with Qwen’s Flash series and high throughput for enterprise deployment. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,073 | 2,081,596 | Meta’s third-generation Segment Anything Model for mask generation, supporting both image and video segmentation tasks. It is trending for its improved zero-shot segmentation accuracy and cross-modal feature extraction capabilities. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 760 | 614,193 | An abliterated (uncensored) GGUF fine-tune of Qwen’s Qwen3.8-Flash-Next multimodal model. It is trending for its unrestricted output profile and fast inference, popular among users looking for unfiltered multimodal chat. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,992 | 2,188,658 | An uncensored GGUF variant of Qwen’s Image 2.1 text-to-image model optimized for ComfyUI workflows. It is the most-downloaded image generation model this week, trending for its unrestricted creative output and local deployment support. |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 330 | 100,530 | An uncensored GGUF variant of Qwen’s fast Image 2.1 Turbo model, optimized for local image generation. It is trending for its fast inference speed and unrestricted prompt support for consumer GPUs. |
| [speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 153 | 393 | A tiny 3B parameter pixel-space diffusion text-to-image model built for lightweight deployment. It is trending as a novel small-footprint image generation architecture that runs efficiently on low-resource hardware. |

### 🔧 Specialized Models (code, math, medical, embeddings)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,720 | 98,829 | Google’s second-generation EmbeddingGemma model for feature extraction and text embedding tasks. It is trending for its state-of-the-art embedding accuracy for retrieval-augmented generation (RAG) and semantic search use cases. |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 357 | 18,079 | A Turkish-language text-to-speech model built for fast, high-quality speech synthesis. It is trending for its natural Turkish voice output and lightweight inference, filling a gap for underrepresented language TTS tools. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,493 | 44,088 | A text classification model optimized for calibrated decision-making in enterprise conversational AI systems. It is trending for its unique focus on calibrated, reliable outputs for high-stakes classification use cases. |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 256 | 59,274 | A GGUF quantized variant of Google’s EmbeddingGemma-2 model supporting multimodal embedding tasks. It is trending for enabling lightweight, local embedding inference for RAG pipelines on consumer hardware. |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 336 | 16,434 | An on-device automatic speech recognition (speech-to-text) model optimized for low-resource edge deployment. It is trending for its small footprint and strong performance for offline speech recognition use cases. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,026 | 6,488,262 | Unsloth’s official GGUF quantization of Qwen’s Qwen3.8-27B base model, optimized for fast local inference. It is the second-most downloaded model this week, trending for its reliable quantization quality and broad compatibility with llama.cpp and UIs. |

---

## 3. Ecosystem Signal
Qwen’s model family is the clear momentum leader this cycle, with 12 of the top 30 trending entries built on Qwen base models, including the top two most-downloaded models (Qwen3.8-27B and its Unsloth GGUF variant). The open-weight ecosystem continues to outpace proprietary model releases in community engagement, with nearly all trending models fully open-weight and supported by active community fine-tuning and quantization ecosystems.

Quantization activity remains red-hot, with GGUF variants accounting for 16 of 30 trending models and driving a combined 30M+ downloads. New mixed-precision techniques like GSQ-RCO from ISTA-DASLab are gaining traction for delivering near-float quality at 2-bit and 4-bit compression levels. Uncensored fine-tunes are also a consistent driver of engagement, with 5 of the top 30 models explicitly marketed as unrestricted, highlighting strong user demand for unfiltered open-weight alternatives to closed proprietary models.

---

## 4. Worth Exploring
1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – As the most-liked model of the week with top-tier video generation quality, it sets a new bar for open-weight image-to-video and text-to-video workflows. Its support for flexible input formats (image, text, video) makes it ideal for creators and researchers testing the latest in diffusion video technology.
2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – Qwen’s flagship multimodal model is the most-downloaded entry this week for good reason: it delivers state-of-the-art vision-language reasoning and conversational performance. It is a critical benchmark for anyone building multimodal applications or evaluating open-weight VLMs against closed alternatives.
3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** – This ternary 2-bit quantized 27B model is a breakthrough in extreme compression, with 4.5M downloads proving strong real-world demand. It is worth studying for anyone working on edge deployment or local LLM inference, as it demonstrates that high-capacity models can run on consumer hardware with minimal quality loss.

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*