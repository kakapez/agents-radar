# Hugging Face 热门模型周报 2026-10-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-26 01:05 UTC

---

# Hugging Face 热门模型每周摘要
*截至 2026-10-26 的一周*

## 1. 本周亮点
本周 Hugging Face 热门榜单以多模态大语言模型为主，通义千问（Qwen）的 270 亿参数图生文模型以点赞量和下载量位居榜首。视频生成模型的采用率极高，Lightricks 的 LTX-2.5 周下载量突破 210 万次。社区活动主要集中在热门基础模型的量化与微调版本，尤其是面向本地部署的 GGUF 版本。无论是大型实验室还是独立研究者发布的开放权重模型，其社区参与度持续超过专有闭源模型，尤其是在需要无审查或定制适配的场景中。

## 2. 热门模型

### 🧠 语言模型（LLM、聊天模型、指令微调模型）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 858 | 6,444 | 一款面向通用聊天场景优化的对话式文本生成大语言模型。作为大型闭源聊天系统的轻量级替代方案，它引发了社区的广泛关注。 |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 495 | 3,488 | 一款 40 亿参数的文本生成大语言模型，专为高效边缘部署设计。由于体积小巧，它被运行在消费级硬件上的开发者广泛采用。 |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 375 | 0 | 一款基于 Llama 架构的 330 亿参数文本生成大语言模型。它刚发布，虽暂无下载量，但凭借出色的指令微调表现已引发早期关注。 |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 183 | 807 | 一款基于通义千问（Qwen）架构、针对 DNA 序列分析微调的文本生成模型。它代表了大语言模型适配专业科学研究场景的发展趋势。 |
| [KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview) | KRAFTON | 186 | 1,177 | 一款迷你版预览文本生成大语言模型。凭借高效的设计和在常见语言基准测试中的强劲基础表现，它吸引了广泛关注。 |
| [ornith-ai/Ornith-1.5-122B](https://huggingface.co/ornith-ai/Ornith-1.5-122B) | ornith-ai | 177 | 48,477 | 一款基于 Qwen3.5 架构构建的 1220 亿参数混合专家（MoE）文本生成大语言模型。尽管体积庞大，但其庞大的参数量和多模态能力推动了稳定的下载量。 |

### 🎨 多模态与生成（图像、视频、音频、文本生成各类内容）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 2,982 | 85,275 | 一款高速图生文多模态模型。凭借在视觉和语言任务中的低延迟推理性能，它正成为热门。 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 1,604 | 660,874 | 一款针对 ComfyUI 优化的图生图扩散模型，用于图像生成和编辑。它已被数十万创作者下载，用于视觉内容制作流程。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,337 | 2,107,108 | 一款支持文本生成视频和视频转视频的图生视频扩散模型。其每周 210 万次的下载量使其成为本周平台上最受欢迎的视频生成模型之一。 |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 728 | 10,757 | 一款经过监督微调的文本生成图像扩散模型。凭借高保真的输出质量和开放的 Apache-2.0 许可证，它广受欢迎。 |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 352 | 7,355 | 一款快速的图生文多模态模型。凭借高效的推理速度和强大的跨模态理解能力，它正成为热门。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,040 | 2,235,846 | 通义千问图像（Qwen-Image）文本生成图像模型的量化无审查版本，针对 ComfyUI 优化。由于对无过滤创意生成的需求，其下载量已超过 220 万次。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,395 | 7,762,014 | 一款 270 亿参数的图生文对话式多模态模型。它是本周点赞最多、下载量最高的模型，被广泛应用于通用多模态聊天和推理任务。 |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,013 | 21,375 | 一款多说话人文生语音模型。凭借自然的语音质量和对富有戏剧性、个性丰富的语音生成的支持，它正成为热门。 |
| [lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss) | lodestones | 260 | 23,972 | 一款基于 MOSS-Image 架构构建的文本生成图像扩散模型。凭借快速推理和高分辨率输出，它在创作者中越来越受欢迎。 |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS-Team | 554 | 7,641 | MOSS-Image 系列的基础文本生成图像扩散模型。它是本周多个社区微调模型的基础，显示出强劲的生态发展势头。 |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 451 | 2,161,961 | MOSS-Image 模型的 ComfyUI 打包扩散单文件版本。其 210 万次的下载量反映了它与流行的 ComfyUI 创意工作流程平台的强大集成。 |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 425 | 4,636 | 一款针对光学字符识别（OCR）的图生文模型，专为 CPU 推理优化。凭借轻量设计和在扫描文档及手写文本任务上的出色表现，它正成为热门。 |
| [orcarouter/OrcaCyber-Nano-1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0) | orcarouter | 254 | 30,330 | 一款针对网络安全和逆向工程任务微调的视觉-语言多模态模型。它代表了面向技术场景的领域专用多模态模型这一新兴细分领域。 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,109 | 1,849,059 | Meta 分段任意模型（Segment Anything Model）的第三代，用于掩码生成，新增了视频支持。其 180 万次的下载量使其成为计算机视觉分割工作流程的领先工具。 |
| [Comfy-Org/Fibo-2.0](https://huggingface.co/Comfy-Org/Fibo-2.0) | Comfy-Org | 179 | 124,557 | 一款 ComfyUI 打包的扩散单文件图像生成模型。自近期发布以来，它已被下载超过 12 万次，用于创意图像生成场景。 |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,155 | 143,152 | 一款基于通义千问（Qwen）架构微调的图生文模型，用于将 AI 生成的文本转换为更自然、更像人类语言的散文。它在希望降低生成内容“AI 味”的用户中广受欢迎。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 289 | 3,875 | 一款针对科学推理任务优化的混合专家（MoE）文本生成模型。它基于 Qwen3.5 架构构建，专为支持研究和数据分析工作流程设计。 |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 367 | 9,765 | Mistral AI 推出的 2.09 亿参数时间序列预测基础模型。这是该实验室首个专用时间序列模型，凭借在预测分析任务上的强劲表现成为热门。 |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,921 | 212,769 | 谷歌推出的特征提取嵌入模型，基于 Gemma 2 架构构建。由于对用于检索和检索增强生成（RAG）系统的高质量文本嵌入的需求，其下载量已超过 20 万次。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 281 | 412,392 | DeepSeek-V4.1-Flash 模型的 GSQ-RCO 混合精度 GGUF 量化版本。在消费级硬件上本地运行该模型的用户已下载超过 40 万次。 |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 365 | 6,792 | DeepSeek-V4.1-Flash 图生文模型的无审查 FP8 微调版本。它在希望获得无内容限制的多模态能力的用户中广受欢迎。 |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 250 | 103,369 | Unsloth 对 RecursiveSI/flint 聊天模型的官方 GGUF 量化版本。其下载量已超过 10 万次，反映了社区对小型聊天模型优化本地部署的强烈需求。 |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 216 | 7,293 | DeepSeek-V4.1-Flash-1017 的去禁用（去除拒绝回复）GGUF 量化版本，针对 llama.cpp 本地部署优化。它面向寻求无审查本地大语言模型性能的用户。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,091 | 1,671,015 | 通义千问 3.8-27B 的深度微调无审查 GGUF 变体，针对创意小说和编码任务优化。其下载量已超过 160 万次，使其成为本周最受欢迎的社区微调模型之一。 |

## 3. 生态信号
当前 Hugging Face 生态在开放权重多模态模型方面展现出强劲发展势头，通义千问（Qwen）和 DeepSeek 系列在参与度和下载量指标上均占据主导地位。仅 Qwen3.8-27B 一款模型的周下载量就超过 770 万次，表明大型开放多模态模型在许多常见场景中已能与闭源系统相媲美。量化活动主要集中在 GGUF 格式变体上，社区团队几乎为每一款主流基础模型发布都制作了优化的本地部署版本。无审查和去禁用微调模型持续吸引大量用户关注，尤其是在图像生成和聊天场景中。面向科学、网络安全和时间序列任务的专用模型也正成为快速增长的细分领域，表明生态系统正从通用聊天和创意生成场景向外拓展。由于部署成本更低、定制灵活性更高，大型实验室和独立研究者发布的开放权重模型在社区采用率上始终优于专有闭源模型。

## 4. 值得探索
1. **Qwen/Qwen3.8-27B**：这款模型是本周的明显亮点，拥有出色的性能、大规模的社区采用，并支持图文理解和对话推理。对于大多数通用场景，它非常值得评估，可作为闭源多模态 API 的替代方案。
2. **Lightricks/LTX-2.5**：该模型周下载量超过 210 万次，支持图像、文本和视频输入生成视频输出，代表了开放权重视频生成的当前最高水平。它是构建创意视频工具或尝试多模态视频工作流程的开发者的理想选择。
3. **google/embeddinggemma-2**：作为谷歌推出的高性能开放嵌入模型，它在检索增强生成（RAG）和检索场景中已获得了高下载量。对于希望在不依赖闭源嵌入 API 的情况下提升检索系统质量的团队，它值得一试。

---

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*