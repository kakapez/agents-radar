# Hugging Face 热门模型周报 2026-10-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-05 01:47 UTC

---

# Hugging Face 热门模型周报（2026-10-05）

---

## 1. 过去7天亮点
Qwen 本周继续领跑热门榜单，其中 **Qwen3.8-27B** 多模态模型以周获赞 16,939 次、下载量超 680 万的成绩高居榜首。视频生成模型同样势头强劲：Lightricks 推出的 **LTX-2.5** 获赞 6,316 次位列第二，下载量突破 160 万，反映出用户对高性能开源视频工具的需求持续增长。
热门基座模型的量化版本与社区微调变体——尤其是针对本地部署优化的 GGUF 格式——主导了下载量，多款 Qwen3.8 系列变体与三元 2 位量化变体的周下载量均达数百万级。Cloudflare 的 **clef** 多模态系列、**DeepSeek-V4.1-Flash** 等新入榜模型也快速蹿红，表明轻量级多模态赛道竞争正不断加剧。

---

## 2. 热门模型

### 🧠 语言模型（大语言模型、对话模型、指令微调模型）
| 模型 | 作者 | 获赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 400 | 1,135 | 一款聚焦推理能力的混合专家（MoE）文本生成模型，针对 vLLM 部署做了优化。凭借出色的推理性能与适配企业推理负载的高效 MoE 架构登上热门榜单。 |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 287 | 14,361 | 一款 29B 参数的文本生成模型，以 GGUF 格式发布，适配本地与边缘部署。凭借均衡的参数量与性能比、对 llama.cpp 运行时的广泛兼容性，受到开源大语言模型爱好者追捧。 |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 361 | 14,195 | 一款基于 Qwen3.8 微调的无审查 27B 参数文本生成模型，以 GGUF 格式分发。因专注网络安全领域、输出无对齐限制，适配专业场景需求而登上热门。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,416 | 4,045,810 | 一款 2 位三元量化的 27B 参数大语言模型，针对通过 llama.cpp 实现极低资源部署做了优化。凭借极小模型体积下接近全精度的性能表现登上热门，周下载量超 400 万。 |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 215 | 946 | 一款无审查的 GLM-5.3 MoE 模型，采用 EXL3 量化将每权重压缩至 3.0 位。因在消费级 GPU 上推理速度快、生成能力无限制，受到高阶用户青睐。 |

### 🎨 多模态与生成模型（图像、视频、音频、文本转X）
| 模型 | 作者 | 获赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,217 | 4,214 | 一款基于 Qwen3.5 架构构建的图文转文本多模态模型，针对边缘与云端部署优化。作为 Cloudflare 首款开源多模态发布产品登上热门，在生产级视觉理解任务上表现出色。 |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 429 | 6,372 | clef 多模态模型的轻量高速变体，专为低延迟推理场景设计。凭借优化的延迟表现登上热门，适用于内容审核、视觉查询等实时边缘应用。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,939 | 6,821,761 | Qwen 系列旗下的旗舰级 27B 参数图文转文本多模态对话模型。凭借强大的视觉语言推理能力与广泛的对话功能，成为本周获赞与下载量双冠的最热门模型。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,948 | 90,003 | 一款高性能文本生成图像模型，内置图像编辑能力，隶属于 Qwen 图像生成产品矩阵。凭借出色的写实效果与兼容 Diffusers 流水线的灵活编辑工作流登上热门。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,316 | 1,626,951 | 一款基于扩散模型的视频生成模型，单文件支持图生视频、文生视频、视频转视频全工作流。凭借高视频质量与易用的单文件部署格式，成为本周获赞第二高的模型。 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 588 | 272,896 | Qwen-Image-2.1 的加速版文生图变体，针对快速生成做了优化。凭借生成速度与输出质量的均衡表现登上热门，是创意工作流快速迭代的热门选择。 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,859 | 12,638 | 一款 9B 参数视觉语言模型，专攻空间推理与多模态理解任务。凭借出色的空间推理性能登上热门，在几何与视觉布局基准测试中表现优于诸多更大参数量的模型。 |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,181 | 203,086 | 一款基于 Qwen-Image-2.1 的 LoRA 模型，用于高保真图像换脸。凭借自然的换脸效果与 Qwen 图像编辑流水线的无缝集成登上热门，周下载量超 20 万。 |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 291 | 15,800 | 一款适配 MiniMax-H3 视频模型的 LoRA 适配器，可实现视频序列中的稳定角色替换。因能在长视频片段中保持角色身份一致性而登上热门，解决了视频编辑工作流中的核心痛点。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,094 | 798,422 | DeepSeek 推出的高速轻量多模态图文转文本模型，针对低延迟对话场景优化。凭借出色的性能速度比登上热门，是 Qwen 极速多模态系列的顶级替代方案。 |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 186 | 5,742 | 一款适配 MiniMax-H3 的 LoRA 适配器，支持通过图像与文本输入生成 360 度环绕视频。凭借独特的首尾帧引导环绕生成能力登上热门，为 3D 风格内容创作开辟了新场景。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,897 | 1,480,842 | Qwen Qwen4 预览线旗下的实验性高速多模态模型，针对图文对话任务优化。作为 Qwen 最新发布的高速多模态产品登上热门，在视觉推理基准测试中早期表现出色。 |
| [lilylilith/QI_2.1_AnyAngle](https://huggingface.co/lilylilith/QI_2.1_AnyAngle) | lilylilith | 126 | 0 | 一款基于 Qwen-Image-2.1 微调的 LoRA 模型，支持从任意相机角度生成和编辑角色。是面向角色设计工作流的新热门发布，已获得数字艺术家的早期高度关注。 |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 202 | 2,635 | 一款自动语音识别（ASR）模型，基于 Parakeet TDT 五值架构构建，针对 Apple Silicon 通过 MLX 做了优化。凭借出色的端侧语音转文字速度与低内存占用，受到苹果生态用户追捧。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,145 | 1,553,744 | Qwen-Image-2.1 的无审查 GGUF 量化变体，针对 ComfyUI 工作流优化。凭借无限制的图像生成能力与对本地图像生成流水线的广泛兼容性登上热门，周下载量超 150 万。 |

### 🔧 专项模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 获赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,164 | 3,752 | 一款基于 Laya System-One 架构构建的文本分类模型，针对校准决策任务优化。是本周获赞第三高的模型，在企业级校准分类基准测试中准确率达行业领先水平。 |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 715 | 3,445 | 一款 8B 参数的对比学习文本排序与重排序验证模型。凭借在检索增强生成（RAG）工作流中的出色表现登上热门，在长上下文排序任务中表现优于诸多专用重排序模型。 |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 673 | 53,014 | 一款用于说话人分离的语音活动检测与音频帧分类模型，隶属于 NVIDIA Nemotron 3 系列。凭借高分离准确率与生产级音频流水线的优化推理登上热门，周下载量超 5.3 万。 |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 415 | 3,657 | 一款多语言文本分类决策模型，基于 PyTorch 构建，采用 Safetensors 权重格式。凭借出色的跨语言分类性能与轻量体积登上热门，适用于全球决策支持系统部署。 |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 402 | 1,516 | 一款计算机视觉图像分类模型，出自最新 arXiv 论文（2609.33325），基于 VisionHOPE 架构构建。作为新一代开源图像分类 SOTA 模型登上热门，引发了视觉骨干网络优化方向的研究兴趣。 |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 366 | 53,625 | 一款基于 GLiNER 2.5 的 token 分类模型，针对文本抽取、意图分类与文本分类任务优化。凭借灵活的零样本抽取能力与高吞吐量登上热门，周下载量超 5.3 万，可集成至 NLP 流水线中。 |

### 📦 微调与量化模型（社区微调、GGUF、AWQ）
| 模型 | 作者 | 获赞数 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 556 | 1,886,975 | Qwen3.8-Flash-Next 的 GSQ-RCO 混合精度量化 GGUF 变体，针对低资源多模态推理优化。凭借高量化程度下极小的质量损失登上热门，用于本地多模态部署的周下载量近 190 万。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 260 | 351,230 | Qwen3.8-Flash-Next 的代码专项量化 GGUF 变体，采用 GSQ-RCO 剪枝与量化技术。凭借紧凑可本地部署的格式下依然出色的编码性能登上热门，周下载量超 35 万。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,960 | 1,636,747 | Qwen3.8-27B 的 GSQ-RCO 混合精度量化 GGUF 版本，针对高性能本地多模态推理优化。凭借仅占基座模型小部分内存占用却接近基座的性能表现登上热门，周下载量超 160 万。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,423 | 2,164,143 | 一款社区微调并量化的 Qwen3.8-27B GGUF 变体，通过 Unsloth 针对编码、创意写作与无审查生成做了优化。凭借覆盖编码、创意与对话任务的全能能力登上热门，周下载量超 210 万。 |

---

## 3. 生态信号
Qwen 模型家族继续主导开源权重生态，在本周 30 个热门模型中占据 14 席，覆盖基座模型、图像生成、社区微调全品类。其 Qwen3.8 多模态产品线已成为社区创新的事实基础，ISTA-DASLab 等量化团队与独立微调开发者基于其构建了多款高下载量、适配本地部署的变体。
相较于闭源方案，开源权重模型保持着明确的增长势头——Qwen3.8-27B、LTX-2.5 等头部模型周下载量均达数百万级，背后是市场对可定制、可本地部署、可边缘部署的 AI 工具的旺盛需求。
量化技术正突破传统 4 位格式的局限：三元 2 位模型（Ternary-Bonsai-2）与混合精度 GSQ-RCO 方法正获得主流认可，证明了极致压缩在消费级硬件场景下依然能保留可用性能。

---

## 4. 值得探索
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**：作为获赞与下载量双料冠军的模型，它代表了当前开源多模态模型的最高水平。其强大的视觉语言推理与对话能力，使其成为评估新型多模态系统的基准；而围绕它构建的丰富微调与量化生态，也能为各类场景提供灵活的部署选择。
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**：这款 2 位三元量化的 27B 大语言模型是极致模型压缩领域的突破成果，周下载量超 400 万的同时仍能保持接近全精度的性能。它非常适合用于研究低位量化的性能边界，以及在内存受限的消费级与边缘硬件上部署大语言模型。
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**：作为本周热度最高的视频生成模型，LTX-2.5 展现了开源视频扩散工具的快速成熟。其单文件格式与对图生视频、文生视频、视频转视频全工作流的支持，让它成为创作者与研究者探索生成式视频应用的多功能工具。

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*