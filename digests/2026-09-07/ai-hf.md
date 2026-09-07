# Hugging Face 热门模型周报 2026-09-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-07 01:53 UTC

---

# Hugging Face 热门模型周报（2026-09-07）

## 1. 近7天亮点
本周热门榜单以前沿多模态模型的快速迭代为主导，Qwen 3.8 系列与 GLM 5.3 系列贡献了社区大部分新增活跃度。视频生成领域迎来重要里程碑：MiniMax-H3 登顶生成式媒体类模型下载量榜首；谷歌推出的全新 TimesFM 3.0 则为快速增长的细分领域——时序预测注入了新动力。生态中顶尖大语言模型的 GGUF 量化版本需求呈爆发式增长，终端用户对本地部署与端侧推理的可及性愈发重视。all-MiniLM-L6-v2、BERT 等成熟工具类模型的下载量保持稳定，进一步巩固了其作为生产级自然语言处理 pipeline 基础组件的地位。

## 2. 热门模型

### 🧠 语言模型（大语言模型、对话模型、指令微调模型）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 615 | 5,477 | Spark 2.5 系列的 40 亿参数轻量文本生成大模型，作为紧凑高效的开源模型选项，适用于边缘端与低资源部署场景，因而登上热门。 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,739 | 410,074 | 基于 GLM  MoE DSA 架构构建的对话式文本生成大模型，作为下一代开源 MoE 模型，具备出色的对话表现，社区对 GLM 5.3 的路线规划关注度极高，因此登上热门。 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,707 | 14,612,342 | OpenAI 社区发布的经典基础 GPT-2 文本生成模型，始终是大语言模型研究、微调实验与教学场景的通用基准，持续位居热门。 |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 186 | 1,723 | 搭载 A4B 优化的 360 亿参数 K2 Horizon MoVA 文本生成大模型，是面向高性能推理效率的全新大规模开源 MoE 类模型，因而登上热门。 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,989 | 52,338,347 | 谷歌推出的标准 BERT base uncased 掩码填充模型，是现代自然语言处理的基石。始终是各行业文本分类、向量嵌入与理解任务的首选主干模型，持续位居热门。 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,156 | 7,054,316 | BERT base uncased 的蒸馏版本，体积更小、速度更快，适用于掩码填充与各类 NLP 任务。凭借性能与速度的平衡表现，非常适合有延迟要求的生产部署，因而登上热门。 |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 445 | 6,441 | 腾讯混元 4（Hy4）文本生成大模型的预览版本，作为腾讯最新推出的前沿模型，已获得研究与开发者社区的早期关注，因而登上热门。 |

### 🎨 多模态与生成模型（图像、视频、音频、文本生成类）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 747 | 209,191 | 深度求索 V4 系列的实验性 Flash 优化多模态模型，支持图文输入转文本输出。作为早期预览版本，凭借超快的推理速度与顶尖的视觉-语言性能登上热门。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,135 | 6,190,807 | 通义千问 3.8 系列的 270 亿参数多模态对话模型，支持图文输入转文本输出。是本周点赞数最高的新发布模型，凭借出色的视觉-语言对齐能力与广泛的对话实用性广受好评。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,943 | 432,966 | 通义千问 3.8 实验系列的下一代 Flash 优化多模态模型，凭借更高的推理吞吐量登上热门，让高性能多模态生成可规模化落地。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,970 | 1,526,928 | 基于扩散技术的视频生成模型，支持图生视频、文生视频与视频转视频工作流。凭借高保真视频输出质量与灵活的多模态生成能力登上热门。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,099 | 761,364 | GLM 5.3 系列的 Flash 优化多模态对话模型，支持图文输入转文本输出。作为快速高效的视觉-语言选项，借 GLM 5.3 整体发布的热度登上热门。 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 461 | 6,357 | 基于 Transformer 架构构建的第二代文本转语音模型，作为全新的开源 TTS 方案，凭借自然的语音输出效果与轻量部署特性登上热门。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,968 | 4,986,349 | 顶尖水平的多模态视频生成模型，支持文生视频与图生视频任务。是本周生成式媒体类最热门的模型，其高质量长视频生成能力引发了广泛关注。 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 209 | 0 | OpenVDN 社区基于 MiniMax-H3 微调的文生视频变体。作为爆火模型 MiniMax-H3 的早期社区定制版本，面向专业视频生成场景，因而登上热门。 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,211 | 20,579,479 | OpenAI 推出的 CLIP ViT-B/32 零样本图像分类与视觉-语言向量嵌入模型。始终是多模态检索、分类与视觉-语言 pipeline 开发的通用主干，持续位居热门。 |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 116 | 889 | 微软 VibeVoice 系列的 70 亿参数流式自动语音识别模型，作为面向实时转写场景的全新高性能流式 ASR 方案登上热门。 |

### 🔧 专项模型（代码、数学、医疗、向量嵌入）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 507 | 144,455 | 谷歌推出的第三代 TimesFM 预训练时序预测模型，基于 PyTorch 实现。作为领先的开源时序基础模型的重大更新，在各类预测基准测试中准确率均有提升，因而登上热门。 |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,568 | 253,029,336 | 轻量高速的句子向量嵌入模型，适用于句子相似度计算与语义检索任务。是热门榜单中下载量最高的模型，是生产级语义搜索与文本匹配 pipeline 的事实标准。 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 263 | 12,464 | Meta 推出的 3 亿参数大规模多语言语音（MMS）预训练模型，基于 wav2vec2 架构构建。凭借广泛的多语言语音表征能力，支持低资源语言语音处理工作流，因而登上热门。 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 165 | 15,648 | GLM 5.3 的网络安全专项微调版本，采用 FP8 精度并移除了拒绝回复机制。作为面向网络安全研究与红队测试场景的细分领域定制模型登上热门。 |

### 📦 微调与量化模型（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 469 | 348,389 | Qwen3.8-27B 的 GSQ-RCO 量化 GGUF 版本，面向高效推理优化。作为性能顶尖的 Qwen3.8 多模态模型的高质量量化版本，适用于本地部署，因而登上热门。 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,590 | 10,311,462 | Unsloth 官方优化的 Qwen/Qwen3.8-27B GGUF 量化发布版。是本周下载量最高的 Qwen3.8 变体，凭借快速的本地推理能力与对 llama.cpp 生态的广泛兼容性广受青睐。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 248 | 211,018 | Qwen3.8-27B 的深度微调无审查 GGUF 变体，专注于代码生成与无限制生成。作为高度定制化的社区构建版本，面向追求无过滤、代码优化性能的高级用户，因而登上热门。 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 810 | 823,733 | Unsloth 优化的 Qwen3.8-Flash-Next 多模态模型 GGUF 量化发布版，将 Flash 加速的 Qwen 3.8 实验模型带到本地推理环境，且质量损失极小，因而登上热门。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 982 | 1,568,315 | Qwen3.8-27B 的无审查、深度微调 GGUF 变体，支持多模态视觉能力。凭借极高的社区参与度，以及用户对无过滤开源多模态模型的需求登上热门。 |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 130 | 22,128 | 社区构建的 Qwen3.8 27B Flash 多模态模型 GGUF 量化版本，作为轻量易获取的 Flash 优化选项，可在消费级硬件上运行 Qwen 3.8 视觉模型，因而登上热门。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,107 | 995,160 | Qwen3.8-27B 的解除审查（移除拒绝回复）微调版本，提供 MLX、safetensors 与 GGUF 格式。凭借无限制生成能力，以及对 Apple Silicon 与 GPU 设备的广泛格式支持登上热门。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 752 | 287,720 | Qwen3.8-27B 多模态模型的解除审查无过滤 GGUF 量化变体，是热门的社区构建版本，面向追求无过滤多模态生成与高效本地推理的用户。 |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 114 | 13,321 | 英伟达官方通过 ModelOpt 优化的 Qwen3.8-Flash-Next NVFP4 量化发布版，作为硬件优化构建版本，旨在最大化英伟达 GPU 上的推理吞吐量，同时将质量损失降至最低，因而登上热门。 |

## 3. 生态信号
Qwen 3.8 系列是本周期当之无愧的热度领跑者：30 个热门席位中有 10 个被 Qwen3.8-27B 与 Qwen3.8-Flash-Next 的基础版、微调版与量化版占据，远超其他竞品模型系列。zai-org 推出的 GLM 5.3 系列是增长第二快的模型家族，其基础版与 Flash 优化多模态版本均快速走红，同时还有网络安全专项版等社区领域微调版本同步涌现。

开源权重模型完全主导了本周热门榜单，无任何仅提供专有 API 的模型入选，凸显了 Hugging Face 社区对可访问、可修改权重的强烈偏好。量化相关的热度高度集中于面向本地与边缘推理优化的 GGUF 格式版本，英伟达的 NVFP4 与 ISTA-DASLab 的 GSQ-RCO 方法正成为标准量化方案之外的高性能新选择。微调趋势则明显向顶尖大模型的无审查、解除审查版本倾斜，反映出市场对无限制开源模型访问的需求仍未得到充分满足。

## 4. 值得关注
1. **Qwen/Qwen3.8-27B** —— 作为本周点赞数最高、应用最广泛的全新基础多模态模型，它为开源 270 亿参数视觉-语言性能树立了新基准。目前已拥有庞大的微调与量化生态，可支持几乎所有部署场景。
2. **MiniMaxAI/MiniMax-H3** —— 是热门榜单中上升最快的视频生成模型，拥有顶尖的文生视频与图生视频输出质量，目前已有社区微调版本在开发中，是生成式视频未来发展的重点跟踪模型。
3. **google/timesfm-3.0-pytorch** —— 作为领先开源时序基础模型的重大更新，它填补了生产级预测场景的关键细分空白，代表了通用大语言模型与多模态工作流之外，开源权重 AI 开发的一个快速增长领域。

---

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*