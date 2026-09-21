# Hugging Face 热门模型周报 2026-09-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-21 00:58 UTC

---

# Hugging Face 热门模型周报
*2026年9月21日当周*

---

## 1. 过去7天亮点
Qwen 3.8模型家族霸榜本周热门榜单，其中基础多模态模型Qwen3.8-27B以15862个点赞荣登点赞榜榜首，还带动了社区一波量化和微调热潮。视频生成模型的用户参与度激增，MiniMax-H3和Lightricks LTX-2.5的下载量均突破150万，反映出市场对开源视频生成工具的强劲需求。超低比特量化创新同样引人注目，代表是prism-ml推出的三值2比特Bonsai模型，专为边缘设备和消费级硬件部署优化。

---

## 2. 热门模型

### 🧠 语言模型（大语言模型、对话模型、指令微调模型）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 889 | 12,617 | 基于Xing4.0架构构建的29B参数对话式文本生成模型。凭借出色的开源对话性能和作为中等规模开源权重对话模型的易用性跻身热门。 |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 477 | 0 | 1B参数小语言模型，通过MLX针对Apple Silicon设备的结构化约束解码做了优化。因专注边缘场景高效并行解码而受到关注。 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,627 | 420,622 | MiniCPM家族推出的2B参数轻量级文本生成模型。特点是体积小但性能强劲，非常适合边缘端和端侧部署，因此跻身热门。 |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,769 | 5,910,102 | Meta Llama 3.1家族的8B参数指令微调对话模型。作为经典的开源权重基准模型，凭借稳定的性能和广泛的社区采用（常被用作微调基座）持续热门。 |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 980 | 11,913 | 基于Qwen3.5文本架构构建的9B参数智能体文本生成模型。因针对智能体工作流和工具调用场景做了专项优化而受到关注。 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,549 | 76,669 | 35B参数MoE文本生成模型，专为边缘推理优化。因支持MLX，且兼顾大模型能力与边缘部署效率而跻身热门。 |

---

### 🎨 多模态与生成模型（图像、视频、音频、文本转X）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,433 | 496,684 | DeepSeek V4.1系列的高速图文转文本多模态模型。凭借推理速度快、多模态推理能力强的特点跻身热门。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 758 | 183 | Qwen图像生成家族的文生图和图像编辑扩散模型。作为Qwen最新开源图像生成版本，具备先进编辑能力，因此受到关注。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,862 | 7,331,932 | Qwen 3.8家族的27B参数图文转文本多模态对话模型。凭借业界领先的开源多模态性能，登顶本周点赞榜和下载量榜首。 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 916 | 17,403 | 3B参数文本转音频模型，专注音乐生成，支持智能体编辑功能。采用符号规划方法实现高质量可控音乐生成，因此跻身热门。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,552 | 1,609,559 | 基于扩散的图生视频模型，支持文生视频和视频转视频工作流。凭借高保真视频输出和灵活的单文件扩散格式受到关注。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,492 | 761,112 | Qwen 3.8 Flash系列的快速实验性多模态对话模型。因低延迟推理能力和下一代实验性Qwen4架构特性跻身热门。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,525 | 4,057,444 | MiniMax推出的业界领先图文转视频生成模型。凭借高质量的文生视频和图生视频输出，加上本周海量下载量跻身热门。 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 213 | 3,750 | 9B参数视觉语言模型，专注空间推理任务。在中等规模模型中具备出色的多模态空间推理能力，因此受到关注。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,500 | 3,109,084 | GLM 5.3家族的高速多模态对话模型。凭借推理速度快、开源多模态对话性能强劲跻身热门。 |

---

### 📦 微调与量化模型（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,495 | 1,908,396 | 针对llama.cpp优化的三值2比特GGUF量化27B文本生成模型。凭借业界领先的超低比特量化质量和海量下载采用率跻身热门。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,480 | 1,217,204 | Qwen3.8-27B多模态模型的GSQ-RCO混合精度GGUF量化版本。凭借兼顾体积与性能的高质量混合精度量化受到关注。 |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 284 | 30,043 | Ternary-Bonsai-2-27B模型的MLX优化2比特三值量化版本，适配Apple Silicon设备。因支持在消费级苹果设备上部署大参数量大语言模型而受到关注。 |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 509 | 10,962 | Qwen3.8-27B多模态模型的优化微调版本，效率有所提升。凭借推理速度更快且无明显性能损失的特点跻身热门。 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,430 | 6,941,478 | Qwen3.8-27B多模态基座模型的Unsloth官方GGUF量化版本。作为性能顶尖的Qwen3.8基座模型最受欢迎的优化发行版之一持续热门。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,002 | 1,301,417 | Qwen3.8-27B的无审查多技能微调GGUF版本，针对编码和通用场景优化。凭借无审查对齐、兼具编码与对话能力跻身热门。 |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 265 | 120 | Qwen-Image-2.1扩散模型的ComfyUI优化发行版。让用户能通过热门的ComfyUI工作流生态使用Qwen最新图像生成模型，因此受到关注。 |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 329 | 136,668 | Swift-Qwen3.8-27B的GGUF量化版本，针对高效思考类工作流优化。兼具速度优化和便捷的llama.cpp部署能力，因此跻身热门。 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 572 | 242,751 | MiniMax-H3视频生成模型的社区微调变体。视频生成质量有所提升，支持长视频工作流，因此受到关注。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 190 | 42,965 | Qwen3.8-Flash-Next多模态模型的GSQ-RCO混合精度GGUF量化版本。为Qwen最新实验性快速多模态模型提供了高质量量化方案，因此受到关注。 |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 325 | 34,688 | DeepSeek-V4.1-Flash多模态模型的无审查FP8微调版本。凭借无审查对齐和内存高效的FP8精度跻身热门。 |
| [Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4](https://huggingface.co/Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4) | Mothersuperior | 159 | 0 | YuE2音频生成模型的LoRA分词器微调版本，针对真实感音频优化。提升了YuE2音乐和音频生成输出的真实感，因此受到关注。 |

---

## 3. 生态信号
Qwen 3.8模型家族是本周期当之无愧的势头领跑者：在30个热门模型中，基座版本、微调版本和量化版本合计占11席，总下载量突破1700万。热门榜单完全由开源权重模型主导，无专有模型进入前30，凸显出开源生态在语言、多模态和视频生成任务上的能力正快速追平。

量化相关活跃度依然极高，GGUF版本占热门模型近半数。超低比特（三值2比特）和混合精度（GSQ-RCO）量化的新进展推动了大规模采用——27B及以上参数的大模型如今也能部署在消费级和边缘硬件上。社区微调也高度聚焦两大方向：基于主流开源基座模型的无审查变体，以及面向特定领域（编码、智能体工作流）的优化版本。

---

## 4. 值得探索
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**：作为本周热度最高的模型，它拥有业界领先的开源多模态性能，下载量超700万，是当前顶尖开源多模态对话模型的新基准，也是整个生态基于它构建微调模型的核心基座。
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：本周上升最快的视频生成模型，下载量达400万，代表了开源文生视频和图生视频能力的前沿水平，也是开源视频生成质量向易用化迈进的一大步。
3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**：超低比特量化领域的突破，证明三值2比特27B模型能保留足够质量，可广泛用于消费级部署，指明了端侧大语言模型高效推理的下一个前沿方向。

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*