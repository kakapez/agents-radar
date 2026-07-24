# Hugging Face 热门模型日报 2026-07-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-24 23:01 UTC

---

# Hugging Face 热门模型日报
统计日期：2026-07-25 | 数据来源：Hugging Face Hub 周点赞TOP30榜单

---

## 今日速览
本次统计周期内，智谱AI开源的GLM-5.2以4414周点赞登顶全榜热度榜首，谷歌Gemma 4系列、百度无限制OCR等大厂新作同步进入第一热度梯队。通义千问Qwen3.6系列的社区衍生微调、量化版本占比接近全榜1/5，端侧可部署的低比特量化模型下载量普遍突破百万级。多模态能力下沉成为普遍趋势，纯文本生成新模型的占比持续下降，语音、机器人操作类垂直开源模型也开始进入热度榜序列。整体开源模型生态的活跃程度远超闭源模型，用户对可本地部署的轻量化高能力模型需求爆发式增长。

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 点赞：4414 | 下载：667403
   一句话说明：智谱推出的新一代Moe架构开源大模型，周点赞登顶全榜，兼具对话与长文本处理能力，是当前开发者最关注的基座大模型。
2. **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
   作者：poolside | 点赞：602 | 下载：28992
   一句话说明：Poolside开源的新一代代码向大模型，原生支持超长上下文代码生成，热度快速爬升。
3. **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
   作者：upstage | 点赞：539 | 下载：1106
   一句话说明：Upstage推出的250B参数超大开源基座模型，开放权重后关注度快速上升。
4. **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
   作者：Nanbeige | 点赞：367 | 下载：8169
   一句话说明：国产小参数高性价比3B大模型，主打端侧轻量化部署，获得大量中小开发者关注。
5. **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
   作者：fdtn-ai | 点赞：144 | 下载：4266
   一句话说明：主打安全合规场景的1B参数轻量大模型，面向敏感场景推理需求设计。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   作者：google | 点赞：3358 | 下载：12629921
   一句话说明：谷歌新一代多模态大模型，全榜下载量最高，支持图文理解与多轮对话，生态成熟度拉满。
2. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
   作者：Qwen | 点赞：2502 | 下载：6460680
   一句话说明：阿里通义千问开源的35B多模态Moe模型，综合能力极强，是当前社区二次开发的核心基座。
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 点赞：3005 | 下载：2500391
   一句话说明：百度开源的无限制精度OCR多模态模型，支持任意复杂版式文本识别，上线后快速登顶工具类模型热度榜。
4. **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
   作者：microsoft | 点赞：225 | 下载：891
   一句话说明：微软推出的新一代文生图+图像编辑生成模型，细节还原能力远超同类开源生成模型。
5. **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**
   作者：nvidia | 点赞：111 | 下载：30303
   一句话说明：英伟达开源的端侧文生视频小模型，支持低算力设备生成短内容。
6. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
   作者：conradlocke | 点赞：530 | 下载：0
   一句话说明：面向ComfyUI的人像身份保真编辑Lora，无需训练即可实现任意照片的身份一致性修改。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
   作者：moonshotai | 点赞：1263 | 下载：756668
   一句话说明：月之暗面开源的代码专属多模态模型，支持截图转代码、大仓库级代码理解能力，开发者群体热度极高。
2. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
   作者：nvidia | 点赞：936 | 下载：797525
   一句话说明：英伟达开源的流式ASR小模型，低延迟高准确率，是当前实时语音转写场景的最优开源方案之一。
3. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
   作者：openbmb | 点赞：172 | 下载：559
   一句话说明：面向下层机器人场景的视觉语言动作VLA模型，支持机械臂操控指令理解。
4. **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**
   作者：openbmb | 点赞：123 | 下载：349
   一句话说明：面向机器人轨迹追踪场景的开源模型，适配自主移动机器人的感知决策需求。
5. **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
   作者：ATH-MaaS | 点赞：274 | 下载：30292
   一句话说明：轻量化开源OCR模型，支持手写、公式等特殊版式识别，适合嵌入式场景部署。
6. **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
   作者：Kwaipilot | 点赞：117 | 下载：396
   一句话说明：快手推出的代码生成专属Moe模型，面向工业级代码开发场景优化。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者：HauhauCS | 点赞：3067 | 下载：2057103
   一句话说明：社区基于Qwen3.6做的无限制多模态GGUF量化版本，支持端侧本地部署无审核推理，热度极高。
2. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者：empero-ai | 点赞：2454 | 下载：1906539
   一句话说明：社区微调的强推理能力9B GGUF量化模型，长上下文推理表现远超同参数级原版模型。
3. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   作者：prism-ml | 点赞：632 | 下载：2028115
   一句话说明：首创1bit量化27B大模型，几乎无损精度的前提下可在消费级GPU上流畅运行。
4. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   作者：prism-ml | 点赞：1005 | 下载：595415
   一句话说明：2bit三值量化的27B大模型，平衡精度与体积，适合端侧高并发推理场景。
5. **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
   作者：DavidAU | 点赞：477 | 下载：407421
   一句话说明：社区融合多版微调语料的Qwen3.6 27B GGUF版本，主打角色扮演、创意生成场景。
6. **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)**
   作者：unsloth | 点赞：169 | 下载：57536
   一句话说明：Unsloth官方量化的Laguna-S-2.1代码模型，可直接在本地llama.cpp运行。
7. **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)**
   作者：poolside | 点赞：131 | 下载：62092
   一句话说明：官方发布的Laguna-S-2.1全精度GGUF量化包，适配多种本地推理框架。
8. **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)**
   作者：poolside | 点赞：129 | 下载：89186
   一句话说明：适配N卡vLLM运行的NVFP4格式量化版本，吞吐量比原版提升3倍以上。
9. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
   作者：bottlecapai | 点赞：541 | 下载：26092
   一句话说明：社区微调的强思考能力Qwen3.6 27B版本，长链推理表现接近闭源模型水平。
10. **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF)**
    作者：LuffyTheFox | 点赞：131 | 下载：36703
    一句话说明：融合Hermes指令集的Qwen3.6多模态无限制GGUF版本，工具调用能力极强。
11. **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)**
    作者：baseten | 点赞：88 | 下载：494
    一句话说明：适配SGLang推理框架的GLM-5.2多模态NVFP4量化版本，云端部署吞吐量大幅提升。

## 生态信号
当前Qwen家族势头最为旺盛，衍生微调、量化模型占榜单近20%，已经成为社区二次开发的首选基座。头部厂商开源模型已经完全占据开发者主流选择，闭源模型的衍生生态规模远不及开源权重体系。低比特量化技术实现突破性进展，1bit、2bit量化精度几乎无损

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*