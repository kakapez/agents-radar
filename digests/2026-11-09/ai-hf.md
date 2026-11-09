# Hugging Face 热门模型周报 2026-11-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-09 02:31 UTC

---

# Hugging Face 热门模型周报
**截止日期：2026-11-09**
## 一、7 天速览
本周 Hugging Face 平台上，Qwen3.5/3.8 生态成为绝对主力，30 个热门模型中共有 8 个基于 Qwen 架构构建，其中下载量最高的模型 Qwen/Qwen3.8-27B 下载量突破 760 万次。生成式多媒体模型热度居高不下，图生视频、文生图工具合计下载量达数百万，背后是大众对易用创意 AI 的旺盛需求。社区活跃方向仍高度集中在无审查微调、面向边缘部署的 GGUF 量化模型，尤其是 Qwen 与 DeepSeek 基座模型的衍生版本。3D 生成工具也首次跻身热门榜单前列，其中 speridlabs/idol 以周度 1397 个点赞成为本周最受欢迎的模型。
## 二、热门模型
### 🧠 语言模型（大语言模型、聊天模型、指令微调模型）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,419 | 7,668,187 | Qwen 团队推出的 270 亿参数多模态对话大语言模型，为本周下载量最高的热门模型。支持图文到文本任务，针对通用聊天与推理场景做了专项优化。 |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,730 | 25,569 | 专为图文生成任务打造的多模态大语言模型，针对压缩张量（compressed-tensors）部署方案做了优化。因在通用推理与视觉理解任务上的均衡表现广受关注。 |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,558 | 73,562 | 轻量级 17 亿参数文本生成大语言模型，面向设备端高效部署设计。凭借在边缘场景下的出色小模型表现登上热门榜单。 |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,411 | 295,747 | DeepSeek 团队推出的高速多模态大语言模型，同时支持文本与图像输入。凭借低延迟文本生成能力和强大的通用推理能力广受欢迎。 |
| [baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) | baidu | 232 | 1,400 | 百度文心（ERNIE）系列的稀疏混合专家（MoE）架构文本生成基座模型。作为可高效微调、适配中英双语任务的基座新晋热门。 |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,638 | 11,628 | 万亿参数规模的大型稀疏混合专家多模态大语言模型，针对 vLLM 与 SGLang 部署做了优化。凭借高性能通用推理能力和企业级部署支持广受关注。 |
### 🎨 多模态生成模型（图像、视频、音频、文本生成各类内容）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,138 | 2,661,026 | 基于扩散模型的视频生成模型，支持图生视频、文生视频、视频转视频任务。是本周点赞数和下载量最高的生成式多媒体模型，支持灵活的视频编辑工作流。 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,762 | 1,167,959 | Flux 3 图像生成模型的 ComfyUI 优化版本，同时支持图像生成与编辑功能。因可便捷接入自定义 ComfyUI 工作流，深受创意从业者喜爱。 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,112 | 1,982,669 | Meta 推出的 Segment Anything Model 第三代版本，支持视频掩码生成与特征提取。凭借在图像、视频自动物体分割领域的顶尖性能登上热门榜单。 |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,728 | 76,804 | Qwen Turbo 图像生成模型的 GGUF 量化版本，针对 ComfyUI 部署优化。在保持高图像生成质量的同时降低了本地运行的硬件要求。 |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 1,397 | 22,854 | 基于高斯泼溅（Gaussian Splatting）技术打造的图生3D模型，采用 Apache 2.0 许可证开源。因可从单张图像生成高质量 3D 资产，成为本周点赞数最高的模型。 |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,108 | 67,230 | 英伟达 Nemotron 系列的 300 亿参数自动语音识别模型。凭借在多语言、多音频场景下领先行业的转录准确率登上热门榜单。 |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 516 | 1,083 | Pika Labs 推出的灵活视频生成模型，支持纯视频生成与音视频联合生成。为新发模型，凭借动态视频输出能力已获得早期关注。 |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 254 | 625,136 | 面向文生图、图生图场景优化的 ComfyUI 适配扩散模型。凭借创意工作流下的高速高质量图像输出获得大量下载。 |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 196 | 76,308 | 针对角色替换、视频编辑优化的视频转视频模型。因可在现有视频中低伪影完成角色替换广受欢迎。 |
### 🔧 专用模型（代码、数学、医疗、嵌入类）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 921 | 254,053 | 基于 Qwen3.5 微调的 40 亿参数代码模型，面向 3D 开发任务优化，原生支持 Three.js。因可根据自然语言提示生成 3D 网页代码获得极高下载量。 |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 275 | 33,641 | Qwen3.5-4B 3D Coder 的专用变体，聚焦 GLB 3D 资产生成场景。因可直接从代码生成可落地的商用级 GLB 模型，受到 3D 开发者群体的广泛关注。 |
### 📦 社区微调与量化版本（社区微调版、GGUF、AWQ）
| 模型 | 作者 | 点赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 861 | 7,088 | 基于 Qwen3.5 的 90 亿参数 DeepSeek V4 Pro 模型的无审查微调版本。因可在研究与创意场景下实现无过滤文本生成，受到相关用户群体欢迎。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,711 | 1,553,252 | Qwen3.8-27B 的 GGUF 量化无审查微调版本，同时针对代码生成与创意小说创作做了优化。是本周下载量最高的社区微调模型之一，支持通过 GGUF 格式实现边缘部署。 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,538 | 1,548,621 | Qwen3.8-Flash-Next 的官方 GGUF 量化版本，针对消费级硬件的快速部署做了优化。凭借边缘场景下速度与性能的均衡表现获得大量下载。 |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 391 | 130,020 | DeepSeek V4.1 Flash 的 GGUF 量化无审查微调版本，采用 GSQ 量化实现高效边缘部署。为希望低资源运行 DeepSeek 最新模型能力的用户提供了新选择。 |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 206 | 258,719 | 面向代码任务优化的 DeepSeek V4.1 Flash 专用 GGUF 量化微调版本。因可为开发者提供高速本地设备端代码辅助能力，获得大量下载。 |
| [Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF) | Scantist | 1,292 | 4,938 | GLM-5.3 的 GGUF 量化轻量变体，采用经神经架构搜索优化的稀疏混合专家架构。凭借在边缘硬件上的高效 MoE 性能获得越来越多关注。 |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 294 | 1,747 | 由 Nous Research 基于 Qwen3.5 开发的 270 亿参数监督微调模型。凭借头部开放 AI 研究实验室打造的优化通用性能登上热门榜单。 |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 187 | 136,706 | 热门无审查微调模型 DeepSeek-V4-Pro-Qwen3.5-9B 的 i1 量化 GGUF 版本。因提供了更小、更高效的本地部署版本，被希望轻量化运行无审查模型的用户大量下载。 |
| [PrunaAI/P-H3-Image](https://huggingface.co/PrunaAI/P-H3-Image) | PrunaAI | 172 | 893 | P-H3-Image 文生图模型的基础 diffusers 版本。与其 ComfyUI 版本同步发布，面向需要搭建自定义图像生成工作流的用户。 |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 406 | 5,087 | 采用 Apache 2.0 许可证发布的 650 亿参数预览版模型，支持自定义代码。是新兴开发者 ricursiveAI 推出的开放权重基座模型，新晋热门。 |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 419 | 1,003 | 由社区贡献者 FusionCow 基于 MiniMax-H3 基座微调的模型。作为新兴 MiniMax-H3 模型家族的专用微调版本新晋热门。 |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 234 | 22,737 | 由 webAI-Official 发布的基于 Granite 架构的 80 亿参数文本生成模型。作为面向专用 web 场景的高效基座模型获得越来越多关注。 |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 391 | 10,197 | 采用 8 位量化的自定义代码模型，经英伟达 modelopt 工具包优化。作为面向专用边缘部署场景的高效低资源模型登上热门榜单。 |
## 三、生态观察
Qwen 模型家族是本周当之无愧的生态领军者，在所有热门模型中占比接近三分之一，在基座模型、微调版本、专用变体的下载量和点赞数上均占据绝对优势。开放权重模型仍是社区活动的主要驱动力，GGUF 量化版本占所有热门模型的 25% 以上，体现出社区对可在消费级硬件上运行、低资源占用的边缘部署模型的强劲需求。无审查微调模型依然是社区长期关注的方向，尤其是 Qwen3.8、DeepSeek-V4 这类热门基座的衍生版本，说明用户对无过滤的模型行为需求长期存在，与官方推出的安全对齐版本形成互补。MiniMax-H3、GLM-5.3 等新兴模型家族也已获得早期关注，基座模型发布短短数天就出现了专属微调版本和量化版本，体现出开放开发生态的迭代速度之快。
## 四、值得尝试
1. **[speridlabs/idol](https://huggingface.co/speridlabs/idol)**：这款基于高斯泼溅技术的图生 3D 模型是本周点赞量最高的项目，完全采用 Apache 2.0 许可证开源，可从单张图像生成高质量 3D 资产，填补了开放 3D 生成领域的关键空白，在游戏开发、AR/VR、3D 内容创作场景下有极高应用潜力。
2. **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)**：这款专用 40 亿参数代码模型将 Qwen 强大的代码能力与 Three.js、3D web 开发专业能力相结合，是开发者构建交互式 3D web 体验的优质低资源工具。其周下载量突破 25 万次，充分体现了前端 3D 开发工作流的实际需求。
3. **[facebook/sam3](https://huggingface.co/facebook/sam3)**：Meta 最新 Segment Anything Model 在行业领先的图像分割能力基础上新增了视频分割支持，周下载量接近 200 万次，是计算机视觉研究者、从事视频分析、物体跟踪、视觉内容编辑管线开发的开发者不可或缺的基础工具。

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*