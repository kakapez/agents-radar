# Hugging Face Trending Models Weekly Digest 2026-09-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-14 00:53 UTC

---

# Hugging Face Trending Models Weekly Digest (2026-09-14)
*Based on 30 top trending models sorted by weekly likes*

---

## 1. Last 7 Days' Highlights
Qwen continues to dominate the open-weight LLM space, with its Qwen3.8-27B base model and related quantized/fine-tuned variants accounting for 6 of the top 30 trending entries, led by the base model’s 14,973 likes and 7.7M+ downloads. Video generation models saw strong momentum, with Lightricks’ LTX-2.5 and MiniMaxAI’s MiniMax-H3 both ranking in the top 10 by likes, driven by demand for high-fidelity text-to-video and image-to-video workflows. Small, efficient LLMs remain a hot category, with new releases from DeepSeek (V4.1-Flash), openbmb (MiniCPM5-2B), and XHToken (Spark-X2.5-4B) all posting triple-digit weekly likes. Niche specialized models also gained traction, including Google’s TimesFM 3.0 time-series forecasting model and Qwen’s autonomous driving model Qwen-Drive-1.0-4B.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,206 | 244,457 | A lightweight flash-optimized multimodal LLM with image-text-to-text capabilities built on the DeepSeek V4.1 architecture. It is trending for its fast inference speed and strong performance on multimodal conversational tasks, making it suitable for low-latency deployments. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,342 | 150,110 | A 2B-parameter compact LLM based on the LLaMA architecture, optimized for edge and on-device deployment. It is trending for its strong performance-to-size ratio, delivering competitive text generation quality with minimal compute requirements. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 1,045 | 3,552 | A 35B-parameter MoE LLM based on Qwen 3.5 MoE, optimized for edge inference with MLX support. It is trending as a high-capacity edge-friendly model, enabling near-state-of-the-art performance on consumer hardware. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 757 | 3,970 | A compact multimodal MoE LLM built on Qwen 3.5 MoE, supporting both text and image-text-to-text generation. It is trending for its small form factor and strong agentic capabilities, making it ideal for lightweight AI agent deployments. |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 623 | 30,289 | The pro-tier variant of the Nex-N2.5 MoE LLM line, with enhanced text and multimodal generation performance. It is trending for its strong agent workflow support and competitive performance relative to larger dense models. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,154 | 21,336 | A 4B-parameter general-purpose LLM built on the Spark 2.5 architecture, optimized for conversational and instruction-following tasks. It is trending for its balanced performance and efficiency, suitable for a wide range of consumer and enterprise use cases. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 433 | 30,310 | A cybersecurity-specialized MoE LLM based on GLM 5.3 DSA, fine-tuned for security analysis and red teaming use cases. It is trending for its refusal-removed, abliterated design, enabling unrestricted security research workflows. |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 217 | 99,716 | The GGUF-quantized version of the MiniCPM5-2B compact LLM, optimized for CPU and edge inference. It is trending alongside the base model, driven by demand for lightweight, deployable small LLMs. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,040 | 15,158,496 | The classic 124M-parameter GPT-2 base text generation model, widely used as a baseline for LLM research and fine-tuning. It remains a staple of the Hugging Face ecosystem, with consistent high downloads driven by educational and prototyping use cases. |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,737 | 7,979 | A 4B-parameter agent-optimized LLM built on the Qwen 3.5 text architecture, designed for tool use and autonomous workflows. It is trending for its strong agentic capabilities, outperforming many larger models on task completion benchmarks. |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 139 | 474 | A flash-optimized multimodal LLM with image-text-to-text capabilities, built for fast conversational deployments. It is a new entrant gaining early traction for its low latency and competitive multimodal performance. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,973 | 7,768,964 | A 27B-parameter state-of-the-art multimodal LLM with image-text-to-text and conversational capabilities, built on the Qwen 3.5 architecture. It is the top trending model of the week, driven by its industry-leading performance on multimodal benchmarks and broad enterprise adoption. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 408 | 3,707 | A 3B-parameter text-to-audio model specialized in music generation, with support for symbolic planning and agentic audio editing. It is trending for its high-quality music output and unique agent-driven editing capabilities, enabling iterative music creation workflows. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,744 | 1,548,442 | A state-of-the-art diffusion-based video generation model supporting text-to-video, image-to-video, and video-to-video workflows. It is trending for its high-fidelity 1080p output and fast generation speed, making it a top choice for creative video production. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 374 | 123,491 | A community-modified video generation model based on the MiniMax H3 architecture, optimized for enhanced creative control. It is trending for its improved generation quality and support for advanced video editing workflows beyond the base model. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,239 | 4,819,845 | A flagship multimodal video generation model supporting text-to-video, image-to-video, and image-text-to-video workflows. It is one of the most popular video models on Hugging Face, driven by its cinematic output quality and support for long-form video generation. |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 193 | 1,202 | A zero-shot text-to-speech model with voice cloning capabilities, developed by Tencent. It is a new entrant gaining traction for its high-fidelity speech synthesis and accurate voice cloning performance with minimal reference audio. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,166 | 624,390 | A flash-optimized experimental multimodal LLM from the Qwen 4 development line, with image-text-to-text conversational capabilities. It is trending for its extremely fast inference speed and near-base-model performance, ideal for low-latency production deployments. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,305 | 1,576,209 | A flash-optimized multimodal LLM based on GLM 5.3 Next, with image-text-to-text and conversational capabilities. It is trending for its fast inference speed and strong Chinese and English bilingual performance, making it popular for conversational AI deployments. |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 196 | 4,119 | A specialized multimodal LLM for autonomous driving, built for motion planning and driving scene understanding. It is trending as a new open-weight model for autonomous driving research, filling a gap in accessible driving-specific AI models. |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 216 | 0 | A video-to-video generation model specialized in character animation and character replacement in existing videos. It is a new release gaining early buzz for its ability to animate static characters in video with realistic motion and consistency. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 774 | 797,832 | The 3.0 version of Google’s TimesFM pre-trained time series forecasting model, released in PyTorch format. It is trending for its state-of-the-art zero-shot forecasting performance across a wide range of time series domains, from finance to IoT. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,931 | 252,928,721 | A lightweight 6-layer sentence embedding model, the de facto standard for sentence similarity and semantic search tasks. It remains the most downloaded model on the list, driven by its widespread use in RAG, search, and classification pipelines across industries. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,303 | 46,513,338 | The classic BERT base uncased model, the foundational masked language model for NLP research and downstream fine-tuning. It remains a staple of the NLP ecosystem, with consistent high downloads for text classification, named entity recognition, and other tasks. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 532 | 12,880 | A 300M-parameter pre-trained wav2vec2 model from Meta’s Massively Multilingual Speech (MMS) project, supporting over 1,100 languages. It is trending for its broad multilingual speech processing capabilities, enabling low-resource language speech recognition research. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,437 | 7,325,282 | A distilled, smaller, faster version of BERT base uncased, retaining 97% of the original model’s performance with 40% fewer parameters. It remains a popular choice for production NLP deployments where efficiency is a priority. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,504 | 21,331,361 | The base ViT-B/32 variant of OpenAI’s CLIP zero-shot image classification model, widely used for image-text retrieval and multimodal embedding tasks. It is a foundational multimodal model, with consistent high downloads for search, classification, and creative AI workflows. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 970 | 769,557 | A GSQ-RCO quantized GGUF version of Qwen3.8-27B, optimized for minimal quality loss at low bitrates via mixed-precision quantization. It is trending for its industry-leading quantization quality, enabling near-fp16 performance of the 27B model on consumer GPUs. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,011 | 11,005,880 | The official Unsloth GGUF quantization of Qwen3.8-27B, optimized for fast inference and low memory usage. It is the most downloaded quantized variant of Qwen3.8-27B, driven by Unsloth’s reputation for high-quality, fast quantizations and broad community adoption. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 637 | 750,591 | A heavily fine-tuned unc GGUF variant of Qwen3.8-27B, merged with multiple coding and creative fine-tunes for enhanced versatility. It is trending for its uncensored design, strong coding performance, and broad general-purpose capabilities beyond the base model. |

---

## 3. Ecosystem Signal
The Qwen model family is the clear momentum leader this week, with 6 entries spanning base models, flash variants, specialized domain models, and quantized fine-tunes — cementing its position as the dominant open-weight LLM ecosystem, comparable to Meta’s LLaMA line at its peak. Open-weight models continue to outpace proprietary releases in Hugging Face activity: all 30 trending entries are open-weight, with use cases ranging from edge deployment to enterprise-grade multimodal AI, indicating a growing shift toward open, customizable model stacks for production.

Quantization and fine-tuning activity remains heavily concentrated around top base models, with Qwen3.8-27B alone spawning 3 top-trending derived variants. The rise of GSQ-RCO and other advanced mixed-precision quantization techniques shows that the community is pushing the limits of model compression to run state-of-the-art 20B+ parameter models on consumer hardware. MoE architectures also continue to gain traction, with multiple new MoE releases targeting edge inference, pointing to a future where high-capacity, efficient MoE models become the default for both cloud and edge deployments.

---

## 4. Worth Exploring
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The top trending model of the week is a must-test for anyone working on multimodal AI, delivering industry-leading image-text understanding and conversational performance. Its massive download numbers and broad ecosystem of fine-tunes and quantizations make it a flexible choice for everything from research prototyping to production deployment, with options for every hardware setup.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Stand out among the week’s video generation releases with its high-fidelity 1080p output and fast inference speed. It supports text-to-video, image-to-video, and video-to-video workflows, making it a versatile tool for creative AI practitioners, and its 1.5M+ downloads indicate it is quickly becoming a community standard for open video generation.
3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — This quantization release is worth studying for anyone interested in model compression, as it showcases the latest GSQ-RCO mixed-precision quantization technique that delivers near-fp16 quality at much lower bitrates. For users looking to run Qwen3.8-27B on consumer GPUs, it offers a better quality-to-size ratio than standard GGUF quantizations, representing the cutting edge of open model compression.

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*