# Hugging Face Trending Models Weekly Digest 2026-09-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-07 01:53 UTC

---

# Hugging Face Trending Models Weekly Digest (2026-09-07)

## 1. Last 7 Days' Highlights
This week’s trending list is dominated by rapid iterations of frontier multimodal models, with Qwen’s 3.8 family and GLM 5.3 series driving the bulk of new community engagement. Video generation models saw a major milestone with MiniMax-H3 topping download volumes for generative media, while Google’s new TimesFM 3.0 brought fresh momentum to time-series forecasting as a fast-growing niche. The ecosystem also saw explosive demand for quantized GGUF variants of top LLMs, as end users prioritize local deployment and on-device inference accessibility. Established utility models like all-MiniLM-L6-v2 and BERT continue to hold steady in downloads, cementing their role as foundational building blocks for production NLP pipelines.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 615 | 5,477 | A 4B-parameter lightweight text generation LLM from the Spark 2.5 family. It is trending as a compact, efficient open model option for edge and low-resource deployment use cases. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,739 | 410,074 | A conversational text generation LLM built on GLM’s MoE DSA architecture. It is trending as a next-generation open MoE model with strong dialogue performance and high community interest in the GLM 5.3 roadmap. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,707 | 14,612,342 | The classic foundational GPT-2 text generation model from OpenAI’s community release. It remains trending as a universal baseline for LLM research, fine-tuning experiments, and educational use cases. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 186 | 1,723 | A 36B-parameter K2 Horizon MoVA text generation LLM with A4B optimization. It is trending as a new large-scale open MoE-style model targeting high-performance inference efficiency. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,989 | 52,338,347 | The standard BERT base uncased fill-mask model from Google, a cornerstone of modern NLP. It remains trending as the go-to backbone for text classification, embedding, and understanding tasks across industries. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,156 | 7,054,316 | A distilled, smaller and faster variant of BERT base uncased for fill-mask and NLP tasks. It is trending for its balance of performance and speed, ideal for production deployments with latency constraints. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 445 | 6,441 | A preview release of Tencent’s Hunyuan 4 (Hy4) text generation LLM. It is trending as the latest frontier model entry from Tencent, drawing early interest from the research and developer community. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 747 | 209,191 | An experimental flash-optimized multimodal model from DeepSeek’s V4 family supporting image-text-to-text. It is trending for its fast inference speed and cutting-edge vision-language performance as an early preview build. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,135 | 6,190,807 | A 27B-parameter multimodal conversational model from Qwen’s 3.8 lineup with image-text-to-text capability. It is the highest-liked new release this week, valued for its strong vision-language alignment and broad conversational utility. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,943 | 432,966 | A next-generation flash-optimized multimodal model from the Qwen 3.8 experimental series. It is trending for its accelerated inference throughput, making high-performance multimodal generation accessible at scale. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,970 | 1,526,928 | A diffusion-based video generation model supporting image-to-video, text-to-video, and video-to-video workflows. It is trending for its high-fidelity video output quality and flexible multimodal generation capabilities. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,099 | 761,364 | A flash-optimized multimodal conversational model from the GLM 5.3 series with image-text-to-text support. It is trending as a fast, efficient vision-language option aligned with the broader GLM 5.3 release momentum. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 461 | 6,357 | A second-generation text-to-speech model built on transformer architecture. It is trending as a new open TTS entry with natural voice output and lightweight deployment characteristics. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,968 | 4,986,349 | A state-of-the-art multimodal video generation model supporting both text-to-video and image-to-video tasks. It is the top trending generative media model this week, driven by widespread interest in its high-quality long-form video output. |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 209 | 0 | A fine-tuned text-to-video variant built on top of MiniMax-H3 by the OpenVDN community. It is trending as an early community customization of the viral MiniMax-H3, targeting specialized video generation use cases. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,211 | 20,579,479 | OpenAI’s CLIP ViT-B/32 zero-shot image classification and vision-language embedding model. It remains trending as a universal backbone for multimodal retrieval, classification, and vision-language pipeline development. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 116 | 889 | A 7B-parameter streaming automatic speech recognition model from Microsoft’s VibeVoice family. It is trending as a new high-performance streaming ASR option for real-time transcription use cases. |

### 🔧 Specialized Models (code, math, medical, embeddings)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 507 | 144,455 | Google’s third-generation TimesFM pretrained time-series forecasting model implemented in PyTorch. It is trending as a major update to the leading open time-series foundation model, with improved accuracy across diverse forecasting benchmarks. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,568 | 253,029,336 | A lightweight, high-speed sentence embedding model for sentence similarity and semantic retrieval tasks. It is the most downloaded model on the trending list, serving as the de facto standard for production semantic search and text matching pipelines. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 263 | 12,464 | Meta’s 300M-parameter Massively Multilingual Speech (MMS) pretrained model built on wav2vec2 architecture. It is trending for its broad multilingual speech representation capabilities, supporting low-resource language speech processing workflows. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 165 | 15,648 | A cybersecurity-specialized fine-tune of GLM 5.3 with FP8 precision and refusal removal. It is trending as a niche domain-specific model tailored for cybersecurity research and red-teaming use cases. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 469 | 348,389 | A GSQ-RCO quantized GGUF build of Qwen3.8-27B optimized for efficient inference. It is trending as a high-quality quantization of the top-performing Qwen3.8 multimodal model for local deployment. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,590 | 10,311,462 | An official Unsloth-optimized GGUF quantized release of Qwen/Qwen3.8-27B. It is the most downloaded Qwen3.8 variant this week, valued for its fast local inference and broad compatibility with llama.cpp ecosystems. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 248 | 211,018 | A heavily fine-tuned uncended GGUF variant of Qwen3.8-27B focused on coding and unrestricted generation. It is trending as a highly customized community build targeting power users seeking unfiltered and coding-optimized performance. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 810 | 823,733 | An Unsloth-optimized GGUF quantized release of Qwen3.8-Flash-Next multimodal model. It is trending for bringing the flash-accelerated Qwen 3.8 experimental model to local inference setups with minimal quality loss. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 982 | 1,568,315 | An uncensored, aggressively fine-tuned GGUF variant of Qwen3.8-27B with multimodal vision support. It is trending for its high community engagement and demand for unfiltered open multimodal model options. |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 130 | 22,128 | A community GGUF quantized build of the Qwen3.8 27B Flash multimodal model. It is trending as a lightweight, accessible flash-optimized option for running Qwen 3.8 vision models on consumer hardware. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,107 | 995,160 | An abliterated (refusal-removed) fine-tune of Qwen3.8-27B available in MLX, safetensors, and GGUF formats. It is trending for its unrestricted generation capability and broad format support across Apple Silicon and GPU setups. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 752 | 287,720 | An abliterated uncensored GGUF quantized variant of Qwen3.8-27B multimodal model. It is trending as a popular community build for users seeking unfiltered multimodal generation with efficient local inference. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 114 | 13,321 | An official NVIDIA ModelOpt-optimized NVFP4 quantized release of Qwen3.8-Flash-Next. It is trending as a hardware-optimized build designed to maximize inference throughput on NVIDIA GPUs with minimal quality degradation. |

## 3. Ecosystem Signal
The Qwen 3.8 family is the clear momentum leader this cycle, with 10 of the 30 trending slots occupied by base, fine-tuned, and quantized variants of Qwen3.8-27B and Qwen3.8-Flash-Next — far outpacing competing model lineups. The GLM 5.3 series from zai-org is the second fastest-growing family, with both base and flash-optimized multimodal builds gaining rapid traction alongside community domain fine-tunes such as the cybersecurity-specialized variant.

Open-weight models continue to dominate the trending list entirely, with no proprietary API-only releases making the cut, underscoring the Hugging Face community’s strong preference for accessible, modifiable weights. Quantization activity is concentrated heavily on GGUF format builds optimized for local and edge inference, with NVIDIA’s NVFP4 and ISTA-DASLab’s GSQ-RCO methods emerging as new high-performance alternatives to standard quantization approaches. Fine-tuning trends skew heavily toward uncensored and abliterated variants of top LLMs, reflecting persistent unmet demand for unrestricted open model access.

## 4. Worth Exploring
1. **Qwen/Qwen3.8-27B** — As the highest-liked and most widely adopted new base multimodal model this week, it sets a new baseline for open 27B-parameter vision-language performance, with a massive ecosystem of fine-tunes and quantizations already available to support nearly any deployment use case.
2. **MiniMaxAI/MiniMax-H3** — The fastest-rising video generation model in the trending list, it delivers state-of-the-art text-to-video and image-to-video output quality and already has community fine-tunes in development, making it a key model to track for the future of generative video.
3. **google/timesfm-3.0-pytorch** — A major update to the leading open time-series foundation model, it fills a critical niche for production forecasting use cases and represents a fast-growing area of open-weight AI development outside of standard LLM and multimodal workflows.

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*