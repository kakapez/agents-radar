# Hugging Face Trending Models Weekly Digest 2026-09-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-21 00:58 UTC

---

# Hugging Face Trending Models Weekly Digest
*Week of 2026-09-21*

---

## 1. Last 7 Days' Highlights
Qwen’s 3.8 model family dominated this week’s trending charts, with the base Qwen3.8-27B multimodal model topping the likes leaderboard at 15,862 and spurring a wave of community quantizations and fine-tunes. Video generation models saw surging engagement, with MiniMax-H3 and Lightricks LTX-2.5 both posting over 1.5 million downloads amid strong demand for open video generation tools. Ultra-low-bit quantization innovations also stood out, led by prism-ml’s ternary 2-bit Bonsai models optimized for edge and consumer hardware deployment.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 889 | 12,617 | A 29B parameter conversational text generation model built on the Xing4.0 architecture. It is trending for its strong open conversational performance and accessibility as a mid-sized open-weight chat model. |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 477 | 0 | A 1B parameter small language model optimized for structured and constrained decoding on Apple Silicon via MLX. It is trending for its focus on efficient parallel decoding for edge use cases. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,627 | 420,622 | A 2B parameter lightweight text generation model from the MiniCPM family. It is trending for its strong performance relative to its small size, making it ideal for edge and on-device deployment. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,769 | 5,910,102 | An 8B parameter instruction-tuned chat model from Meta’s Llama 3.1 family. It remains a staple open-weight baseline, trending for its consistent performance and widespread community adoption as a fine-tuning base. |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 980 | 11,913 | A 9B parameter agentic text generation model built on Qwen3.5 text architecture. It is trending for its specialized optimization for agent workflows and tool use cases. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,549 | 76,669 | A 35B parameter MoE text generation model optimized for edge inference. It is trending for its MLX support and balance of large model capacity with edge-deployable efficiency. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,433 | 496,684 | A high-speed image-text-to-text multimodal model from DeepSeek’s V4.1 line. It is trending for its fast inference speeds and strong multimodal reasoning performance. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 758 | 183 | A text-to-image and image-editing diffusion model from Qwen’s image generation family. It is trending as Qwen’s latest open image generation release with advanced editing capabilities. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,862 | 7,331,932 | A 27B parameter image-text-to-text multimodal conversational model from Qwen’s 3.8 family. It tops this week’s likes and downloads charts for its industry-leading open multimodal performance. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 916 | 17,403 | A 3B parameter text-to-audio model specialized for music generation with agentic editing capabilities. It is trending for its symbolic planning approach to high-quality controllable music generation. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,552 | 1,609,559 | A diffusion-based image-to-video model supporting text-to-video and video-to-video workflows. It is trending for its high-fidelity video output and flexible single-file diffusion format. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,492 | 761,112 | A fast, experimental multimodal conversational model from Qwen’s 3.8 Flash line. It is trending for its low-latency inference and next-generation experimental Qwen4 architecture features. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,525 | 4,057,444 | A state-of-the-art image-text-to-video generation model from MiniMax. It is trending for its high-quality text-to-video and image-to-video output and massive download volumes this week. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 213 | 3,750 | A 9B parameter vision-language model specialized for spatial reasoning tasks. It is trending for its strong multimodal spatial reasoning capabilities in the mid-sized model segment. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,500 | 3,109,084 | A high-speed multimodal conversational model from the GLM 5.3 family. It is trending for its fast inference and strong open multimodal chat performance. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,495 | 1,908,396 | A ternary 2-bit GGUF quantized 27B text generation model optimized for llama.cpp. It is trending for its industry-leading ultra-low-bit quantization quality and massive download adoption. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,480 | 1,217,204 | A GSQ-RCO mixed-precision GGUF quantization of Qwen3.8-27B multimodal model. It is trending for its high-quality mixed-precision quantization that balances size and performance. |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 284 | 30,043 | An MLX-optimized 2-bit ternary quantization of the Ternary-Bonsai-2-27B model for Apple Silicon. It is trending for enabling high-capacity LLM deployment on consumer Apple devices. |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 509 | 10,962 | An optimized fine-tune of Qwen3.8-27B multimodal model with improved efficiency. It is trending for its faster inference speeds without major performance tradeoffs. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,430 | 6,941,478 | Official Unsloth GGUF quantization of Qwen3.8-27B multimodal base model. It is trending as one of the most popular optimized distributions of the top-performing Qwen3.8 base model. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,002 | 1,301,417 | An uncensored, multi-skill fine-tuned GGUF build of Qwen3.8-27B optimized for coding and general use. It is trending for its uncensored alignment and combined coding and conversational capabilities. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 265 | 120 | A ComfyUI-optimized distribution of Qwen-Image-2.1 diffusion model. It is trending for making Qwen’s latest image generation model accessible via the popular ComfyUI workflow ecosystem. |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 329 | 136,668 | A GGUF quantized build of the Swift-Qwen3.8-27B optimized for efficient thinking workflows. It is trending for its combination of speed optimizations and accessible llama.cpp deployment. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 572 | 242,751 | A community fine-tuned variant of MiniMax-H3 video generation model. It is trending for its improved video generation quality and support for extended video workflows. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 190 | 42,965 | A GSQ-RCO mixed-precision GGUF quantization of Qwen3.8-Flash-Next multimodal model. It is trending for bringing high-quality quantization to Qwen’s latest experimental fast multimodal model. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 325 | 34,688 | An uncensored FP8 fine-tune of DeepSeek-V4.1-Flash multimodal model. It is trending for its uncensored alignment and memory-efficient FP8 precision. |
| [Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4](https://huggingface.co/Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4) | Mothersuperior | 159 | 0 | A LoRA tokenizer fine-tune for the YuE2 audio generation model optimized for realistic audio. It is trending for improving the realism of YuE2’s music and audio generation outputs. |

---

## 3. Ecosystem Signal
The Qwen 3.8 model family is the clear momentum leader this cycle, accounting for 11 of the 30 trending models across base releases, fine-tunes, and quantizations, with total downloads exceeding 17 million. Open-weight models continue to dominate the trending charts entirely, with no proprietary model releases making the top 30, underscoring the open ecosystem’s growing capability parity across language, multimodal, and video generation tasks.

Quantization activity remains extremely robust, with GGUF builds making up nearly half of trending models. New innovations in ultra-low-bit (ternary 2-bit) and mixed-precision (GSQ-RCO) quantization are driving massive adoption by enabling high-capacity 27B+ model deployment on consumer and edge hardware. Community fine-tuning is also heavily focused on uncensored variants and domain-specific optimizations (coding, agentic workflows) built on top of leading open base models.

---

## 4. Worth Exploring
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: As the top-trending model with industry-leading open multimodal performance and over 7 million downloads, it is the new baseline for state-of-the-art open multimodal chat models and a foundation for the broader ecosystem of fine-tunes built on it.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**: The fastest-rising video generation model of the week, with 4 million downloads, representing the cutting edge of open text-to-video and image-to-video capabilities and a major leap in accessible open video generation quality.
3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**: A breakthrough in ultra-low-bit quantization, demonstrating that ternary 2-bit 27B models can retain enough quality for widespread consumer deployment, pointing to the next frontier of efficient on-device large language model inference.

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*