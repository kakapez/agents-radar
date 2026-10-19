# Hugging Face 热门模型周报 2026-10-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-19 01:00 UTC

---

# Hugging Face 热门模型每周精选
*截至 2026-10-19（按周点赞数排序）*

---

## 1. 近 7 天亮点
通义千问（Qwen）模型家族称霸本周热门榜单，其中 Qwen3.8-27B 多模态模型拿下点赞榜头名，其图像生成版本与 Flash 优化版本也收获了极高的用户关注度。视频扩散模型仍是热度最高的赛道之一：Lightricks 推出的 LTX-2.5 图生视频模型周下载量突破 200 万，周点赞数超 8000。百度 Unlimited-OCR 与 Meta SAM3 的周下载量均突破 160 万，反映出市场对高精度视觉工具类模型的爆发式需求。此外，Qwen 与 MOSS 图像模型的社区微调版、量化版热度飙升，体现出用户对轻量、无审查、可直接部署的模型变体的强烈需求。

---

## 2. 热门模型

### 🧠 语言模型（大语言模型、对话模型、指令微调模型）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 470 | 13,007 | 基于 LiquidAI LFM2 架构构建的 24B 参数 MoE 文本生成模型。凭借高效的激活参数设计走红，在保持优异性能的同时降低了推理计算成本。 |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 542 | 410,558 | 面向工具调用场景优化的 27B 参数函数调用大语言模型。其热度源于支持极致量化（通过 GGUF/llama.cpp 可低至 2 比特），且在边缘部署场景下具备稳定的工具调用准确率。 |
| [tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B) | tencent | 189 | 1,187 | 腾讯 Hy 内存优化系列推出的 30B 对话式文本生成模型。主打长上下文记忆能力，适配长时对话、高回忆需求类应用场景。 |

### 🎨 多模态与生成模型（图像、视频、音频、文本转 X）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 1,338 | 10,233 | 深度求索（DeepSeek）V4.1 系列的 Flash 优化版图文转文本多模态模型。凭借推理速度快、多模态理解能力强的特点走红，适用于实时视觉-语言任务。 |
| [openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 1,008 | 57,935 | MiniCPM-V 4.7 系列的 35B 级别视觉-语言模型。主打紧凑高性能设计，在更低部署成本下实现了具备竞争力的多模态准确率。 |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 694 | 9,620 | 鱼声音频（Fish Audio）戏剧向产品线推出的多说话人文本转语音模型。其热度来自能够生成富有表现力的戏剧化配音效果，且说话人音色辨识度高，适配音频内容创作需求。 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 812 | 338,036 | 适配 ComfyUI 的 Flux 3 图生图生成模型。凭借高质量的图像编辑与生成能力，加上对 ComfyUI 工作流的原生支持，受到创作者欢迎。 |
| [meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B) | meta-models | 546 | 1,809 | Meta Muse Spark 系列的 816B 级别多模态图文转文本模型。凭借超大参数规模与顶尖的视觉-语言推理能力受到关注。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 8,377 | 2,012,496 | 基于扩散技术的图生视频模型，支持文生视频、视频转视频工作流。凭借行业领先的视频生成质量与超 200 万的周下载量，成为本周最热门的视频模型。 |
| [black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black-forest-labs | 488 | 52,315 | 黑森林实验室（Black Forest Labs）推出的核心 Flux 3 图生图生成模型。在广受采用的 Flux 模型家族基础上，升级了图像生成保真度与编辑精度，因此走红。 |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 342 | 2,087 | OpenMOSS 项目推出的有监督微调文生图生成模型。作为新兴的开源图像生成选项受到关注，英文提示词遵循能力强，创意产出质量优异。 |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 984 | 23,131 | 通义千问 Image 2.1 系列的高速文生图生成模型。凭借生成速度与视觉质量的均衡表现走红，支持图像创作与编辑两类场景。 |
| [openbmb/MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B) | openbmb | 387 | 22,689 | MiniCPM-V 4.7 系列的 1B 参数轻量视觉-语言模型。主打极小体积与优秀的边缘部署适配性，在低资源设备上仍能提供可用的多模态性能。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,959 | 7,695,206 | 通义千问 3.8 系列的 27B 参数对话式图文转文本多模态模型。是本周点赞数与下载量双料冠军，周下载量达 770 万，多模态对话性能处于行业领先水平。 |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS-Team | 294 | 1,791 | OpenMOSS 图像项目的基础文生图生成模型。作为完全开源的基础模型，适用于图像生成研究与社区微调，因此受到关注。 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,623 | 1,945,717 | Meta 推出的第三代 Segment Anything Model（通用分割模型），支持掩码生成与视频分割。升级后的零样本分割准确率更高，且支持视频输入，周下载量接近 200 万。 |
| [nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local) | nvidia | 213 | 4,876 | 英伟达优化的 Qwen3.8-Flash-Next FP4 量化本地部署版本。在英伟达硬件上的推理效率经过优化，非常适合本地多模态部署场景。 |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 203 | 1,811 | 面向低资源部署打造的 CPU 优化型图像转文本 OCR 模型。支持 ONNX 运行时，无需 GPU 即可实现出色的 OCR 准确率，因此走红。 |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 512 | 25,366 | 适配 MiniMax-H3 的 LoRA 适配器，可基于图像输入生成 360 度环绕式视频。凭借独特的首尾帧引导视频合成能力受到关注，适用于 3D 风格内容创作。 |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 194 | 354,126 | OpenMOSS 图像生成基础模型的 ComfyUI 优化打包版。可与 ComfyUI 工作流无缝集成，在创作者社区周下载量超 35 万。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,329 | 2,485,835 | 通义千问 3.8 实验线的 Flash 优化多模态对话模型。主打超快推理速度与顶尖的多模态对话性能，周下载量达 250 万。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,637 | 1,316,711 | 深度求索推出的核心 Flash 优化 V4.1 多模态模型。图文理解能力出色、推理速度快，在视觉-语言任务场景周下载量达 130 万。 |
| [nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 433 | 256,336 | 基于 Qwen3.8-27B 的多技能微调变体，聚焦编码、推理与高效思考能力。融合了广泛的能力，且支持标准格式与 GGUF 部署格式，因此走红。 |

### 🔧 专项模型（代码、数学、医疗、嵌入模型）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,662 | 164,339 | 谷歌推出的第二代 EmbeddingGemma 文本嵌入特征提取模型。在检索与 RAG 场景下的嵌入质量达到行业顶尖水平，周下载量超 16 万。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,793 | 1,652,742 | 百度视觉产品线推出的高精度 OCR 与特征提取模型。在复杂文档与图像布局下的文本识别性能行业领先，周下载量超 160 万。 |
| [vllm-sr/d3](https://huggingface.co/vllm-sr/d3) | vllm-sr | 238 | 4,532 | 基于 Qwen3.5 架构构建的零样本分类与特征提取模型。零样本分类准确率出色，且兼容 vLLM 服务框架。 |

### 📦 微调与量化版本（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,947 | 103,709 | 社区微调模型，专门用于生成拟人化文本，提供 GGUF 与 safetensors 两种格式。可有效让 AI 生成文本无法被检测，周下载量超 10 万。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,559 | 2,661,687 | 通义千问 Image 2.1 文生图模型的无审查量化微调版。主打无限制图像生成能力，支持 GGUF 与 ComfyUI，周下载量超 260 万。 |
| [LiquidAI/LFM2.5-24B-A2B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B-GGUF) | LiquidAI | 206 | 107,599 | LiquidAI LFM2.5-24B MoE 文本生成模型的 GGUF 量化版本。支持 llama.cpp 部署，且提供丰富的量化档位适配边缘场景。 |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 555 | 387,254 | 通义千问 Image 2.1 Turbo 生成模型的无审查 GGUF 量化版本。推理速度快，支持无限制创意图像生成，受到本地部署用户欢迎。 |

---

## 3. 生态信号
通义千问模型家族是本周期当之无愧的增长领跑者：共有 8 款模型上榜，覆盖多模态、文本生成、图像生成、量化变体等多个方向，同时拿下点赞榜与下载榜榜首。开源权重模型继续包揽热门榜单全部席位，前 30 名中没有仅通过专有 API 提供的模型——这表明开源权重生态正在部署易用性与社区采用率方面持续扩大领先优势。

量化与社区微调活动依旧十分活跃，尤其是围绕 Qwen 与 MOSS 图像模型的相关内容。无审查版本与 GGUF 格式变体每周贡献数百万下载量，凸显出用户对无限制、可本地部署模型的强烈需求。视频扩散模型与视觉工具类模型（OCR、分割）也是增长迅速的赛道，Lightricks、Meta 与百度的相关产品周下载量均突破 150 万。

---

## 4. 值得探索
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**：本周毫无争议的热度冠军，收获 17,959 个点赞与超 770 万下载量。这款 27B 参数的多模态模型具备行业领先的对话式视觉-语言性能，适用于通用多模态对话、文档理解、视觉推理等各类场景，值得测试。
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**：本周平台最热门的视频生成模型，下载量超 200 万。LTX-2.5 支持图生视频、文生视频、视频转视频工作流，是创作者与开发 AI 视频生成工具的开发者的必探索选项。
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：收获 4,793 个点赞与超 160 万周下载量，这款 OCR 模型在复杂布局下的文本识别能力达到行业顶尖水平。适用于文档处理、信息提取、视觉流水线集成等场景，值得评估。

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*