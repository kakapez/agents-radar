# Hugging Face 热门模型日报 2026-07-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-23 22:56 UTC

---

# Hugging Face 热门模型日报
日期：2026-07-24

---

## 今日速览
今日Hugging Face周点赞TOP30榜单头部由头部厂商开源新发布产品主导，智源开源GLM-5.2以4364次周点赞登顶热度榜。谷歌刚发布的gemma-4-31B-it拿下1266万+累计下载，是本次榜单下载量断层第一的爆款模型。OCR、机器人操作、流式语音识别等垂直领域开源模型集中上新，国内AI厂商的开源模型占比接近4成，东亚开源大模型生态活跃度远超往期。社区针对开源基座的无审查微调、极低比特量化衍生模型占比超过3成，本地端侧部署需求持续走高。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 点赞：4364 | 下载：596442
   一句话说明：智源最新开源的MoE架构对话大模型，性能追平头部闭源产品，是本周热度最高的原生开源大模型。
2. **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
   作者：upstage | 点赞：402 | 下载：362
   一句话说明：韩国AI厂商Upstage开放的250B参数旗舰大模型，刚发布就获得大量开发者关注。
3. **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
   作者：Nanbeige | 点赞：312 | 下载：4532
   一句话说明：北鼻开源的轻量3B中文大模型，低资源场景表现优异，适合边缘端中文原生部署。
4. **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
   作者：poolside | 点赞：509 | 下载：13285
   一句话说明：代码垂直大模型厂商Poolside推出的通用生成基座，主打代码场景推理优化。
5. **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**
   作者：Motif-Technologies | 点赞：172 | 下载：1856
   一句话说明：主打本地隐私部署的开源大模型新版本，支持离线全场景特征提取。
6. **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
   作者：fdtn-ai | 点赞：119 | 下载：2747
   一句话说明：面向安全场景优化的1B参数轻量大模型，主打敏感数据检测、合规内容识别能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   作者：google | 点赞：3347 | 下载：12666488
   一句话说明：谷歌最新开源多模态对话大模型，支持图文理解、多轮对话，是本周下载量最高的爆款产品。
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 点赞：2875 | 下载：2414259
   一句话说明：百度开源的不限场景通用OCR大模型，支持任意语言任意排版文字识别，是近期开发者需求量最高的多模态工具。
3. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
   作者：thinkingmachines | 点赞：1503 | 下载：24669
   一句话说明：主打手写手稿识别理解的多模态对话模型，支持直接解析手写笔记生成结构化内容。
4. **[Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice)**
   作者：Qwen | 点赞：1795 | 下载：2497020
   一句话说明：阿里通义千问开源的1.7B参数语音生成模型，支持自定义音色、低延迟实时生成。
5. **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
   作者：microsoft | 点赞：181 | 下载：411
   一句话说明：微软开源的文生图+图像编辑一体化生成模型，支持连续生成、局部修改的全流程创作。
6. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
   作者：conradlocke | 点赞：515 | 下载：0
   一句话说明：社区开源的人脸身份编辑LoRA插件，适配ComfyUI工作流，可在生成时固定人物特征。
7. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
   作者：openbmb | 点赞：163 | 下载：408
   一句话说明：面壁智能开源的机器人操作VLA模型，支持直接通过自然语言指令控制机械臂完成抓取等动作。
8. **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**
   作者：openbmb | 点赞：117 | 下载：306
   一句话说明：开源机器人视觉追踪模型，可实时识别动态目标轨迹，适配各类移动机器人场景。
9. **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**
   作者：nvidia | 点赞：98 | 下载：28493
   一句话说明：英伟达开源的端侧文生视频小模型，可在消费级显卡上实现1080P短视频实时生成。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
   作者：moonshotai | 点赞：1245 | 下载：766522
   一句话说明：月之暗面开源的代码专属多模态模型，支持截图转代码、长代码库上下文理解能力。
2. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   作者：OpenMOSS-Team | 点赞：319 | 下载：111598
   一句话说明：开源音频转录+说话人分角色一体化模型，支持长会议录音一键生成结构化会议纪要。
3. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
   作者：nvidia | 点赞：924 | 下载：750118
   一句话说明：英伟达开源的流式ASR模型，0.6B轻量参数可实现亚秒级延迟实时语音转写。
4. **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
   作者：ATH-MaaS | 点赞：257 | 下载：26919
   一句话说明：开源轻量OCR模型，主打低算力设备下的离线识别优化。
5. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
   作者：bottlecapai | 点赞：528 | 下载：25231
   一句话说明：Qwen3.6基座微调的推理专用模型，数学、逻辑题表现远超同参数基线。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者：HauhauCS | 点赞：3032 | 下载：2027080
   一句话说明：社区基于Qwen3.6 35B多模态基座微调的无审查模型，支持全场景本地部署。
2. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者：empero-ai | 点赞：2438 | 下载：2126755
   一句话说明：基于Qwen3.5微调的推理量化多模态模型，支持1M长上下文，适合本地知识库场景。
3. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   作者：prism-ml | 点赞：980 | 下载：576083
   一句话说明：2比特三进制量化的27B大模型，推理精度损失极低，可在普通消费级显卡上流畅运行。
4. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   作者：prism-ml | 点赞：619 | 下载：1910116
   一句话说明：1比特量化的27B大模型，是目前下载量最高的极低比特大模型产品。
5. **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
   作者：DavidAU | 点赞：392 | 下载：334847
   一句话说明：社区融合多套无审查数据集微调的Qwen3.6多模态量化模型，主打创意内容生成场景。
6. **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)**
   作者：unsloth | 点赞：148 | 下载：28542
   一句话说明：Unsloth团队针对Laguna-S-2.1基座生成的优化量化版本，适配llama.cpp全平台。
7. **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)**
   作者：poolside | 点赞：115 | 下载：52235
   一句话说明：官方发布的Laguna-S-2.1 

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*