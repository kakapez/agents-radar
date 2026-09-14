# Hugging Face 热门模型周报 2026-09-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-14 00:53 UTC

---

# Hugging Face 热门模型周报（2026-09-14）
*基于周点赞量排序的前30个热门模型*

---

## 1. 过去7天亮点
通义千问（Qwen）持续主导开源大模型领域，其 Qwen3.8-27B 基座模型及相关量化/微调变体占据了热门榜前30中的6个席位，其中基座模型以14973个点赞和超770万次下载量领跑。视频生成模型势头强劲，Lightricks 的 LTX-2.5 和 MiniMaxAI 的 MiniMax-H3 均跻身点赞量前十，主要受高保真文生视频、图生视频工作流需求的推动。小型高效大模型仍是热门品类，DeepSeek（V4.1-Flash）、openbmb（MiniCPM5-2B）和 XHToken（Spark-X2.5-4B）的新发布模型周点赞量均达到三位数。小众专用模型也获得了关注，包括 Google 的 TimesFM 3.0 时间序列预测模型和通义千问的自动驾驶模型 Qwen-Drive-1.0-4B。

---

## 2. 热门模型

### 🧠 语言模型（大语言模型、对话模型、指令微调模型）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,206 | 244,457 | 一款基于 DeepSeek V4.1 架构构建的轻量级闪存优化多模态大模型，具备图文转文本能力。凭借快速推理速度和在多模态对话任务上的出色表现成为热门，适用于低延迟部署场景。 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,342 | 150,110 | 一款基于 LLaMA 架构的20亿参数紧凑型大模型，针对边缘端和端侧部署优化。其性能体积比出色，仅需极少算力即可提供有竞争力的文本生成质量，因此受到关注。 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 1,045 | 3,552 | 一款基于 Qwen 3.5 MoE 的350亿参数混合专家大模型，针对边缘推理优化，支持 MLX。作为一款高容量、适配边缘场景的模型受到关注，可在消费级硬件上实现接近业内顶尖的性能。 |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 757 | 3,970 | 一款基于 Qwen 3.5 MoE 构建的紧凑型多模态混合专家大模型，支持文本生成和图文转文本生成。凭借小巧的体积和出色的智能体能力成为热门，非常适合轻量级 AI 智能体部署。 |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 623 | 30,289 | Nex-N2.5 混合专家大模型系列的专业级版本，增强了文本和多模态生成性能。凭借出色的智能体工作流支持，以及相较于更大稠密模型的竞争力表现受到关注。 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,154 | 21,336 | 一款基于 Spark 2.5 架构构建的40亿参数通用大模型，针对对话和指令遵循任务优化。其性能与效率均衡，适用于广泛的消费级和企业级用例，因此成为热门。 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 433 | 30,310 | 一款基于 GLM 5.3 DSA 的网络安全专用混合专家大模型，针对安全分析和红队测试用例进行了微调。其采用移除拒答的去对齐设计，可支持无限制的安全研究工作流，因此受到关注。 |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 217 | 99,716 | MiniCPM5-2B 紧凑型大模型的 GGUF 量化版本，针对 CPU 和边缘推理优化。受轻量级、可部署小模型的需求推动，与基座模型一同成为热门。 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,040 | 15,158,496 | 经典的1.24亿参数 GPT-2 基座文本生成模型，被广泛用作大语言模型研究和微调的基线。它仍是 Hugging Face 生态的核心模型，受教育和原型制作场景的需求推动，下载量持续居高不下。 |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,737 | 7,979 | 一款基于 Qwen 3.5 文本架构构建的40亿参数智能体优化大模型，专为工具调用和自主工作流设计。凭借出色的智能体能力成为热门，在任务完成基准测试中表现优于许多更大的模型。 |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 139 | 474 | 一款闪存优化的多模态大模型，具备图文转文本能力，专为快速对话部署构建。作为新上榜模型，凭借低延迟和有竞争力的多模态表现获得初期关注。 |

---

### 🎨 多模态与生成模型（图像、视频、音频、文本转X）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,973 | 7,768,964 | 一款270亿参数的业内顶尖多模态大模型，具备图文转文本和对话能力，基于 Qwen 3.5 架构构建。它是本周热度最高的模型，主要得益于其在多模态基准测试中的行业领先表现，以及广泛的企业采用。 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 408 | 3,707 | 一款30亿参数的文本转音频模型，专注于音乐生成，支持符号化规划和智能体驱动的音频编辑。凭借高质量的音乐输出和独特的智能体驱动编辑能力成为热门，可支持迭代式音乐创作工作流。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,744 | 1,548,442 | 一款业内顶尖的扩散模型视频生成模型，支持文生视频、图生视频和视频转视频工作流。凭借高保真1080p输出和快速生成速度成为热门，是创意视频制作的首选工具之一。 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 374 | 123,491 | 一款基于 MiniMax H3 架构的社区修改版视频生成模型，针对增强创意控制进行了优化。凭借提升的生成质量，以及对基座模型之外的高级视频编辑工作流的支持受到关注。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,239 | 4,819,845 | 一款旗舰级多模态视频生成模型，支持文生视频、图生视频和图文转视频工作流。它是 Hugging Face 上最受欢迎的视频模型之一，凭借电影级输出质量和对长视频生成的支持受到青睐。 |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 193 | 1,202 | 腾讯开发的一款零样本文本转语音模型，具备声音克隆能力。作为新上榜模型，凭借高保真语音合成效果，以及仅需极少参考音频即可实现准确声音克隆的表现获得关注。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,166 | 624,390 | 通义千问4代产品线中的一款闪存优化实验性多模态大模型，具备图文转文本对话能力。凭借极快的推理速度和接近基座模型的性能成为热门，非常适合低延迟生产部署。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,305 | 1,576,209 | 一款基于 GLM 5.3 Next 的闪存优化多模态大模型，具备图文转文本和对话能力。凭借快速推理速度和出色的中英双语表现成为热门，广泛用于对话式 AI 部署。 |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 196 | 4,119 | 一款专为自动驾驶打造的专用多模态大模型，用于运动规划和驾驶场景理解。作为一款新型开源自动驾驶研究模型受到关注，填补了可访问的驾驶专用 AI 模型领域的空白。 |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 216 | 0 | 一款视频转视频生成模型，专注于现有视频中的角色动画和角色替换。作为新发布模型，凭借能够为视频中的静态角色赋予逼真动作且保持一致性的能力，初期就引发了热议。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入模型）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 774 | 797,832 | Google TimesFM 预训练时间序列预测模型的3.0版本，以 PyTorch 格式发布。凭借在金融、物联网等广泛时间序列领域的顶尖零样本预测性能成为热门。 |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,931 | 252,928,721 | 一款轻量级6层句子嵌入模型，是句子相似度和语义搜索任务的事实标准。它仍是本次榜单中下载量最高的模型，被广泛应用于各行业的检索增强生成（RAG）、搜索和分类流程中。 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,303 | 46,513,338 | 经典的 BERT 基座未区分大小写模型，是自然语言处理研究和下游微调的基础掩码语言模型。它仍是 NLP 生态的核心模型，在文本分类、命名实体识别等任务中下载量持续居高不下。 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 532 | 12,880 | Meta 大规模多语言语音（MMS）项目中的一款3亿参数预训练 wav2vec2 模型，支持超过1100种语言。凭借广泛的多语言语音处理能力成为热门，可支持低资源语言的语音识别研究。 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,437 | 7,325,282 | BERT 基座未区分大小写模型的蒸馏版，体积更小、速度更快，保留了原模型97%的性能，但参数量减少了40%。对于优先考虑效率的生产级 NLP 部署，它仍是热门选择。 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,504 | 21,331,361 | OpenAI CLIP 零样本图像分类模型的 ViT-B/32 基座变体，被广泛用于图文检索和多模态嵌入任务。它是一款基础多模态模型，在搜索、分类和创意 AI 工作流中下载量持续居高不下。 |

---

### 📦 微调与量化模型（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 970 | 769,557 | Qwen3.8-27B 的 GSQ-RCO 量化 GGUF 版本，通过混合精度量化优化，实现低比特下的最小质量损失。凭借行业领先的量化质量成为热门，可让这款270亿参数模型在消费级 GPU 上实现接近半精度（fp16）的性能。 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,011 | 11,005,880 | Unsloth 官方推出的 Qwen3.8-27B GGUF 量化版本，针对快速推理和低内存占用优化。它是 Qwen3.8-27B 下载量最高的量化变体，主要得益于 Unsloth 在高质量、快速量化方面的口碑，以及广泛的社区采用。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 637 | 750,591 | Qwen3.8-27B 的深度微调无审查 GGUF 变体，融合了多个代码和创意微调模型，增强了通用性。凭借无审查设计、出色的代码性能，以及超越基座模型的广泛通用能力成为热门。 |

---

## 3. 生态信号
通义千问模型家族是本周当之无愧的热度领跑者，共有6个模型上榜，覆盖基座模型、闪存变体、专用领域模型和量化微调模型——巩固了其作为主流开源大模型生态的地位，堪比巅峰时期 Meta 的 LLaMA 系列。在 Hugging Face 的活跃度上，开源模型持续超过闭源发布的模型：本次30个热门模型全部为开源模型，用例覆盖从边缘部署到企业级多模态 AI，表明生产环境正越来越多地转向开放、可定制的模型栈。

量化和微调活动仍高度集中在顶级基座模型周围，仅 Qwen3.8-27B 就衍生出3个热门衍生变体。GSQ-RCO 和其他先进混合精度量化技术的兴起表明，社区正在不断突破模型压缩的极限，以在消费级硬件上运行200亿+参数的顶尖模型。混合专家（MoE）架构也持续获得关注，多款针对边缘推理的新型 MoE 模型发布，预示着未来高容量、高效率的 MoE 模型将成为云端和边缘部署的默认选择。

---

## 4. 值得探索
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周热度最高的模型，所有从事多模态 AI 工作的人员都务必测试，它提供了行业领先的图文理解和对话性能。其庞大的下载量和丰富的微调、量化生态使其成为从研究原型制作到生产部署的灵活选择，可适配各种硬件配置。
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 在本周的视频生成发布产品中脱颖而出，凭借高保真1080p输出和快速推理速度受到关注。它支持文生视频、图生视频和视频转视频工作流，是创意 AI 从业者的多功能工具，且其超150万的下载量表明它正迅速成为开源视频生成领域的社区标准。
3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 所有对模型压缩感兴趣的人都值得研究这款量化版本，它展示了最新的 GSQ-RCO 混合精度量化技术，能够在低得多的比特率下实现接近半精度的质量。对于希望在消费级 GPU 上运行 Qwen3.8-27B 的用户来说，它比标准 GGUF 量化版本拥有更好的质量体积比，代表了开源模型压缩的前沿水平。

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*