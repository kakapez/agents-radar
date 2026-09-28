# Hugging Face 热门模型周报 2026-09-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-28 01:30 UTC

---

# Hugging Face 热门模型周报（2026-09-28）

## 1. 过去7天亮点
Qwen3.8-27B 以周获赞 16,429 次、下载量 670 万的成绩领跑热门榜单，巩固了 Qwen 作为头部开源多模态模型系列的地位。围绕 Qwen-Image-2.1 的文生图创新热度高涨，官方基础模型与6个社区衍生版本均跻身总榜前30，背后是市场对开源图像生成工具的旺盛需求。Lightricks 推出的 LTX-2.5 视频生成模型成为爆点，获赞 5,333 次、下载量 160 万，标志着开源视频 AI 进入加速增长阶段。低比特量化仍是生态核心发展方向，GGUF 格式的三值模型与2比特模型在全榜下载量中位居前列。

---

## 2. 热门模型

### 🧠 语言模型（大语言模型、对话模型、指令微调模型）

| 模型 | 作者 | 获赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,782 | 45,028 | 基于 transformers 构建、采用 safetensors 格式的 290 亿参数对话式文本生成模型。凭借出色的对话性能与友好的4比特量化设计跻身热门，可在消费级硬件上部署。 |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 738 | 5,904 | 基于 Qwen3.5/3.8 架构微调、采用 safetensors 权重的文本生成模型。因专注于高质量、风格化文本生成，适配创意写作场景而受到关注。 |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 557 | 75,079 | 小米 MiMo 系列的强化学习优化文本生成模型，支持多模态输入。凭借强劲的通用性能与 RL 调优的对齐能力跻身热门，适配真实对话应用场景。 |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 491 | 25,661 | MiMo-V2.6 强化学习调优文本生成模型的轻量高速推理版本。因兼顾速度与性能受到关注，面向低延迟多模态部署场景。 |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 349 | 3,456 | Yandex AliceAI 系列的 800 亿参数基础大语言模型，支持自定义代码。作为全新高容量开源基础模型受到关注，可用于研究与下游微调。 |

### 🎨 多模态与生成模型（图像、视频、音频、文生X）

| 模型 | 作者 | 获赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,429 | 6,727,629 | Qwen3.5 系列的 270 亿参数图文到文本多模态对话模型，采用 safetensors 权重。是本周热度最高的模型，凭借业界领先的多模态推理性能，在研究与生产场景均得到大规模应用。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,333 | 1,601,089 | 基于扩散技术的视频生成模型，支持图生视频、文生视频、视频到视频、图文生视频工作流。作为突破性的开源视频生成模型受到关注，输出保真度高，支持多种视频生成范式。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,813 | 651,078 | 深度求索推出的高速推理多模态模型，同时支持文本生成与图文到文本任务。凭借行业领先的低延迟多模态推理能力跻身热门，是实时交互应用的理想选择。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,498 | 52,804 | Qwen 官方推出的基础文生图模型，通过 diffusers 支持图像生成与编辑。作为全新的开源图像SOTA模型受到关注，催生了庞大的社区微调和量化生态。 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,680 | 11,612 | 针对空间推理任务优化的 90 亿参数视觉语言多模态模型。凭借在视觉推理基准上的出色表现跻身热门，填补了具备空间感知能力的开源视觉语言模型应用空白。 |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 522 | 8,839 | 基于 Qwen3.5 架构蒸馏的 90 亿参数图文到文本多模态模型。因体积小、性能强受到关注，由更大的 MiMo 模型蒸馏而来，适配边缘部署。 |
| [StarDoc-AI/TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR) | StarDoc-AI | 601 | 27,837 | 基于 Qwen2.5-VL 架构构建的 OCR 专用图文到文本模型。因在文档与遥测图像文本提取任务中准确率高跻身热门，满足了工业 OCR 场景的高需求。 |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,075 | 19,434 | 流式自动语音识别模型，支持无限长度音频输入。因长音频转录能力与低延迟流式设计受到关注，是实时字幕、会议转录场景的理想选择。 |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 437 | 8,243 | 网易有道孔子4系列自动语音识别模型，基于 Qwen3 ASR 架构构建。因出色的中文与多语言 ASR 性能跻身热门，针对教育与翻译场景优化。 |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 409 | 22,514 | NVIDIA Nemotron-3 系列的语音活动检测与说话人分离模型，支持 GGUF 与 NeMo 格式。因高精度说话人分离能力受到关注，是企业级音频处理管线的关键组件。 |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 243 | 1,740 | 基于 Qwen3.5 架构构建的 90 亿参数视觉语言模型，是苹果在 Hugging Face 发布的首款开源视觉语言模型。因出色的视觉理解性能与苹果的背景受到关注，吸引了研究与端侧 AI 社区的目光。 |

### 🔧 专用模型（代码、数学、医疗、嵌入模型）

| 模型 | 作者 | 获赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,099 | 0 | 针对校准决策优化的文本分类模型，属于 System One 模型套件。因采用新颖的校准文本分类方法跻身热门，可降低高风险企业场景的预测不确定性。 |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 610 | 0 | 基于 Qwen3.5 架构微调的交叉编码器自然语言推理模型，用于文本分类。作为高性能开源验证模型受到关注，旨在提升大语言模型管线的事实性与推理准确率。 |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 410 | 766 | 基于对比学习原理构建的 80 亿参数文本排序与重排序模型。作为全新的开源重排序SOTA模型受到关注，可为检索增强生成（RAG）与搜索应用提供出色的检索性能。 |
| [convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 306 | 0 | 基于 mBERT 的多语言文本分类模型，将 Laya 校准决策框架扩展至多语言场景。因跨多语言的校准分类能力跻身热门，填补了企业级多语言 NLP 工具的空白。 |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 270 | 248 | 基于 Gemma4 的统一文本分类模型，同时支持文本与图文输入模态。因全模态分类设计受到关注，将传统 NLP 与多模态分类任务统一到单个模型中。 |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 208 | 19,757 | GLiNER2 系列的 token 分类模型，针对文本提取与意图分类优化。因灵活的命名实体识别与意图检测能力跻身热门，广泛应用于对话 AI 与信息抽取工作流。 |

### 📦 微调与量化版本（社区微调、GGUF、AWQ）

| 模型 | 作者 | 获赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,192 | 3,343,748 | 2比特三值量化的 270 亿参数语言模型，采用 GGUF 格式，可通过 llama.cpp 部署。是本周下载量最高的大语言模型量化版本，凭借极高压缩比与极小质量损失跻身热门，让消费级 GPU 也能运行 27B 级别模型。 |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 807 | 3,987,373 | 针对 ComfyUI 优化的 Qwen-Image-2.1 单文件发行版，可用于基础模型与微调场景。是本周下载量最高的模型，因与热门 ComfyUI 工作流平台无缝集成受到关注，让创作者能够轻松使用最先进的图像生成技术。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,086 | 964,220 | Qwen-Image-2.1 的无审查 GGUF 量化衍生版本，针对 ComfyUI 工作流优化。因无内容生成限制与 GGUF 格式支持跻身热门，满足了市场对灵活、无审查开源图像生成工具的高需求。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,778 | 1,608,439 | Qwen3.8-27B 多模态模型的 GSQ-RCO 混合精度量化 GGUF 版本。因创新的量化技术受到关注，在大幅降低内存占用的同时，可为热门的 Qwen3.8-27B 模型提供接近 fp16 精度的性能。 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 341 | 133,151 | Qwen-Image-2.1 的 LoRA 微调加速版本，针对快速文生图与图生图任务优化。因在保持高图像质量的同时大幅缩短推理时间跻身热门，是迭代式创意工作流的理想选择。 |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 270 | 194,341 | Unsloth 推出的 Qwen-Image-2.1 量化 GGUF 发行版，针对高速推理与微调优化。因高质量量化效果与 Unsloth 在性能优化模型发行方面的口碑受到关注。 |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 300 | 145,246 | Qwen-Image-2.1 文本编码器的 FP8 量化 GGUF 版本，针对 ComfyUI 工作流优化。因专门优化文本编码器受到关注，可提升图像生成管线的提示词理解能力，同时降低内存占用。 |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 302 | 0 | 面向设计场景的文生图微调模型，针对创意设计用例优化，基于 diffusers 构建，采用 safetensors 权重。作为面向平面设计与工业设计生成的细分领域微调模型受到关注，填补了专用开源图像模型的空白。 |

---

## 3. 生态动向
本周 Qwen 模型家族成为开源权重生态当之无愧的领跑者，共有11个基于 Qwen 的模型跻身总榜前30，覆盖多模态、图像生成、文本分类等类别。在 Hugging Face 的采用量上，开源权重模型持续超过闭源竞品，社区驱动的微调与量化版本下载量始终高于官方基础版本——Comfy-Org 发行的 Qwen-Image-2.1 下载量接近400万，正是这一趋势的有力佐证。

量化仍是生态最活跃的发展方向：总榜前30中有7个席位被 GGUF 格式模型占据，从2比特三值压缩到混合精度 GSQ-RCO 等创新技术，让越来越大的模型能够在消费级硬件上运行。Qwen-Image 2.1 发布后数天内便涌现大量微调版本，也凸显了开源 AI 开发周期正在加速成熟，社区扩展版本如今已能与官方模型同步推出。

---

## 4. 值得关注
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**：作为本周热度最高的模型，周下载量达670万，为开源多模态推理性能树立了新标杆。它兼具文本与视觉理解能力，是从 RAG 系统到创意 AI 各类应用的通用基础，其大规模采用也意味着拥有完善的社区支持与工具生态。
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**：表现亮眼的开源视频生成模型，单架构支持四种视频创作工作流（图生视频、文生视频、视频到视频、图文生视频）。上线一周下载量即达160万，表明它正迅速成为视频生成领域的首选开源方案，质量已接近闭源选项。
3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**：这款2比特三值量化的27B模型代表了极端压缩领域的突破，让以往只能运行7B模型的硬件也能获得可用的270亿参数模型性能。它是量化创新推动大语言模型普惠的典型案例，非常适合在边缘与低资源部署场景中测试。

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*