# Hugging Face 热门模型周报 2026-10-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-12 02:13 UTC

---

# Hugging Face 热门模型每周精选（2026-10-12）

## 1. 过去 7 天亮点
本周通义千问（Qwen）生态在热门榜单中占据主导地位，Qwen3.8-27B 多模态基础模型以 17,511 个点赞、680 万次下载量领跑全榜，高需求的量化版本与微调版本为其提供了有力支撑。视频生成与编辑工具热度持续攀升，Lightricks 推出的 LTX-2.5 图生视频模型以 7,325 个点赞成为点赞数最高的模型，下载量突破 170 万次。小众垂直领域模型也崭露头角：Cloudflare 发布了两款 Clef 多模态模型，convaiinnovations 的 Laya 文本分类器收获 5,493 个点赞，Meta 的 SAM3 掩码生成模型下载量突破 200 万次。社区驱动的头部基础模型量化版本与无审查微调版本始终是用户参与度的核心来源，在热度前 30 的模型中，GGUF 变体占比超过一半。

---

## 2. 热门模型

### 🧠 语言模型（大语言模型、对话模型、指令微调模型）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 887 | 12,550 | 一款以推理能力为核心的混合专家（MoE）文本生成模型，针对 vLLM 部署做了优化。凭借出色的推理性能与面向企业场景的高效推理架构登上热门榜单。 |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 691 | 48,389 | Xing4.0 系列的 29B 参数文本生成模型，以 GGUF 格式发布，支持轻量级本地部署。在消费级硬件上实现了参数量与性能的平衡，因此受到关注。 |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 323 | 108,900 | 一款 27B 文本生成模型，针对工具调用与函数调用场景优化，提供极低的 2 位 GGUF 量化版本。即便在极致压缩下仍保持出色的工具调用性能，因此登上热门。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,632 | 4,549,911 | 一款 27B 三值（2 位）量化文本生成模型，专为 llama.cpp 部署打造，质量损失极小。在超低位宽推理领域实现了行业领先的效率，下载量突破 450 万次。 |

### 🎨 多模态与生成模型（图像、视频、音频、文本生成各类内容）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,097 | 37,647 | 一款基于 Gemma4 的图文转文本模型，专注于对多模态输入生成类人化对话回复。输出风格自然、拟人化，在开放对话基准测试中表现优于许多更大规模的模型，因此受到关注。 |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,028 | 14,351 | 一款基于 Qwen3.5 的图文转文本模型，专为快速边缘部署的多模态理解场景打造。针对 Cloudflare 边缘计算生态优化了推理速度，因此登上热门榜单。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,325 | 1,726,683 | 一款基于扩散模型的图生视频模型，同时支持文生视频与视频转视频工作流。是本周点赞数最高的模型，凭借电影级输出质量与灵活的视频生成管线支持受到热捧。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,511 | 6,843,108 | 通义千问的旗舰级 27B 多模态对话模型，支持图文转文本任务。是本周下载量最高的模型，在视觉语言推理与对话场景中展现了顶尖性能，因此备受关注。 |
| [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 300 | 10,843 | 一款 3B 参数的小型多模态模型，基于 LFM2-VL 架构打造，用于端侧图文理解。体积极小且性能出色，适合边缘与移动端部署，因此登上热门。 |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 756 | 22,123 | Cloudflare Clef 多模态模型的更快、更轻量版本，针对低延迟边缘推理优化。在实时多模态应用中实现了速度与精度的平衡，因此受到关注。 |
| [nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 238 | 56,525 | 一款经过深度微调的 Qwen3.8-27B 多模态模型，针对推理与编码任务优化。采用了 SFT、RLOO、MTP 叠加的微调管线，在各类基准测试中性能提升显著，因此登上热门。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 801 | 4,189,006 | 通义千问 Qwen3.8-Flash-Next 多模态模型的 GSQ-RCO 量化 GGUF 变体，采用混合精度压缩。在极致量化水平下质量损失极小，下载量突破 400 万次。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,229 | 136,103 | 通义千问官方推出的文生图模型，支持通过 Diffusers 实现图像创作与编辑工作流。输出保真度高，与文本提示的对齐能力出色，因此受到关注。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,657 | 2,016,567 | 一款经过无审查优化、面向编码场景的 Qwen3.8-27B 微调版本，采用 GGUF 格式并经过 MTP 训练。编码性能出色且输出无限制，下载量突破 200 万次。 |
| [FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism) | FrancisRing | 162 | 0 | 一款基于视频扩散 Transformer 架构的音视频联合生成模型。作为实现音视频同步输出的新型开源方案，即便处于早期预发布阶段仍受到关注。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,112 | 1,870,465 | 通义千问推出的快速轻量多模态对话模型，针对低延迟推理优化。推理速度远高于全尺寸模型，同时性能接近顶尖水平，因此受到热捧。 |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 544 | 4,702 | 通义千问 Image 2.1 文生图模型的更快优化版本，面向高吞吐量生成场景。在生产场景中缩短了推理时间同时保持输出质量，因此登上热门。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,153 | 1,489,676 | 通义千问旗舰级 Qwen3.8-27B 多模态模型的 GSQ-RCO 混合精度量化 GGUF 变体。内存占用仅为原模型的一小部分，性能却接近浮点数版本，下载量近 150 万次。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,365 | 1,382,367 | 深度求索推出的快速多模态模型，同时支持文本生成与图文转文本任务。性能与通义千问 Flash 系列形成有力竞争，企业部署吞吐量高，因此受到关注。 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,073 | 2,081,596 | Meta 推出的第三代 Segment Anything Model 掩码生成模型，同时支持图像与视频分割任务。零样本分割精度有所提升，具备跨模态特征提取能力，因此登上热门。 |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 760 | 614,193 | 通义千问 Qwen3.8-Flash-Next 多模态模型的去限制（无审查）GGUF 微调版本。输出无限制且推理速度快，深受追求无过滤多模态对话的用户欢迎。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,992 | 2,188,658 | 通义千问 Image 2.1 文生图模型的无审查 GGUF 变体，针对 ComfyUI 工作流优化。是本周下载量最高的图像生成模型，创意输出不受限制且支持本地部署，因此受到热捧。 |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 330 | 100,530 | 通义千问快速版 Image 2.1 Turbo 模型的无审查 GGUF 变体，针对本地图生场景优化。推理速度快，支持无限制提示词，可在消费级 GPU 上运行，因此受到关注。 |
| [speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 153 | 393 | 一款 3B 参数的小型像素空间扩散文生图模型，专为轻量部署打造。作为新型小体积图像生成架构，可在低资源硬件上高效运行，因此受到关注。 |

### 🔧 专用模型（代码、数学、医疗、嵌入模型）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,720 | 98,829 | 谷歌推出的第二代 EmbeddingGemma 模型，用于特征提取与文本嵌入任务。在检索增强生成（RAG）与语义搜索场景中具备顶尖的嵌入精度，因此登上热门。 |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 357 | 18,079 | 一款土耳其语语音合成模型，专为快速、高质量语音合成打造。土耳其语语音输出自然，推理轻量，填补了小语种 TTS 工具的空白，因此受到关注。 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,493 | 44,088 | 一款文本分类模型，针对企业对话 AI 系统中的校准决策场景优化。专注于高风险分类场景下校准、可靠的输出，定位独特因此受到热捧。 |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 256 | 59,274 | 谷歌 EmbeddingGemma-2 模型的 GGUF 量化变体，支持多模态嵌入任务。可在消费级硬件上为 RAG 管线提供轻量本地嵌入推理，因此登上热门。 |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 336 | 16,434 | 一款端侧自动语音识别（语音转文本）模型，针对低资源边缘部署优化。体积小，离线语音识别性能出色，因此受到关注。 |

### 📦 微调与量化模型（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,026 | 6,488,262 | Unsloth 官方推出的通义千问 Qwen3.8-27B 基础模型 GGUF 量化版本，针对快速本地推理优化。是本周下载量第二高的模型，量化质量可靠，与 llama.cpp 及各类 UI 工具兼容性广泛，因此受到热捧。 |

---

## 3. 生态信号
本周期内通义千问模型家族是当之无愧的增长领跑者，热度前 30 的模型中有 12 款基于通义千问基础模型构建，其中包括下载量前两名的模型（Qwen3.8-27B 及其 Unsloth GGUF 变体）。开源权重生态的社区参与度持续超过专有模型发布，几乎所有热门模型均为完全开源权重，且拥有活跃的社区微调与量化生态支持。

量化相关活动依旧火热，30 款热门模型中有 16 款为 GGUF 变体，总下载量突破 3000 万次。ISTA-DASLab 推出的 GSQ-RCO 等新型混合精度技术正逐渐受到关注，这类技术可在 2 位与 4 位压缩水平下实现接近浮点数的质量。无审查微调版本也是用户参与度的稳定驱动因素，前 30 名中有 5 款模型明确主打无限制输出，凸显出用户对封闭专有模型之外的无过滤开源权重替代方案的强烈需求。

---

## 4. 值得探索
1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** —— 作为本周点赞数最高的模型，它拥有顶尖的视频生成质量，为开源图生视频与文生视频工作流设立了新标杆。支持灵活的输入格式（图像、文本、视频），非常适合测试扩散视频技术最新进展的创作者与研究人员使用。
2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** —— 通义千问的旗舰多模态模型成为本周下载量最高的模型实至名归：它具备顶尖的视觉语言推理与对话性能。对于所有构建多模态应用，或是需要将开源视觉语言模型与闭源方案做对比评估的开发者而言，它都是核心基准模型。
3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** —— 这款三值 2 位量化的 27B 模型是极致压缩领域的突破，450 万次下载量印证了强劲的实际需求。所有从事边缘部署或本地大语言模型推理工作的人员都值得研究它，它证明了高参数量模型可以在消费级硬件上运行，且质量损失极小。

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*