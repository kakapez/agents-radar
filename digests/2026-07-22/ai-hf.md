# Hugging Face 热门模型日报 2026-07-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 22:57 UTC

---

# Hugging Face 热门模型日报
日期：2026年7月22日

---

## 今日速览
今日共30个模型按周点赞量登上Hugging Face热度榜，头部流量高度集中在头部厂商新发布的旗舰开源模型上，谷歌Gemma 4、百度Unlimited-OCR、智谱GLM-5.2分列高赞前三。低比特量化端侧模型的生态持续爆发，多个27B级大模型的量化版本周下载量突破百万。阿里通义千问Qwen3.5/3.6系列成为社区微调的绝对主流基座，衍生出大量未经审查、长上下文的定制化模型。此外图像编辑、机器人控制、文生视频等垂类多模态小众模型也首次批量进入周度热度榜。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   - 作者：zai-org | 点赞：4273 | 下载：545109
   - 一句话说明：智谱最新发布的MoE架构通用对话大模型，推理速度、数学能力较上一代提升40%，登顶本周原生大模型点赞榜首。
2. **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
   - 作者：poolside | 点赞：158 | 下载：3056
   - 一句话说明：专注代码生成的通用大模型，支持1M超长上下文窗口，专为IDE原生集成场景优化。
3. **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)**
   - 作者：GnLOLot | 点赞：166 | 下载：6165
   - 一句话说明：基于MiniCPM5 1B基座微调的小参数推理模型，低配置设备即可运行，自带原生思考链输出能力。
4. **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**
   - 作者：Motif-Technologies | 点赞：117 | 下载：125
   - 一句话说明：小众厂商新发布的beta版原生大模型，主打轻量化低幻觉特性，受到极客社区追捧。
5. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
   - 作者：Cactus-Compute | 点赞：298 | 下载：1068
   - 一句话说明：专为工具调用、函数调用场景优化的轻量大模型，函数调用准确率比同尺寸模型高30%。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
   - 作者：thinkingmachines | 点赞：1357 | 下载：16441
   - 一句话说明：新一代开源多模态对话模型，支持手写文档、复杂图表的高精度识别理解，图文对话能力对齐商用闭源模型。
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - 作者：baidu | 点赞：2598 | 下载：2237351
   - 一句话说明：百度开源的全场景OCR模型，支持任意语言、任意曲率、任意破损文档的文字识别，无输出长度限制，登顶本周多模态工具类模型热度榜首。
3. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
   - 作者：conradlocke | 点赞：472 | 下载：0
   - 一句话说明：基于Krea-2生成模型微调的人像编辑LoRA，支持无需训练的人脸身份替换，完全适配ComfyUI工作流。
4. **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
   - 作者：ATH-MaaS | 点赞：235 | 下载：17162
   - 一句话说明：轻量化开源OCR模型，体积仅300M，速度是传统OCR模型的5倍，适合部署在边缘设备上。
5. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
   - 作者：openbmb | 点赞：147 | 下载：58
   - 一句话说明：面发布的VLA具身智能模型，支持机械臂抓取、装配等复杂操作的端到端控制。
6. **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**
   - 作者：openbmb | 点赞：107 | 下载：72
   - 一句话说明：配套的机器人视觉轨迹跟踪模型，支持动态障碍物环境下的自主路径规划。
7. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   - 作者：OpenMOSS-Team | 点赞：299 | 下载：92265
   - 一句话说明：开源音频转写+说话人二合一模型，支持10小时以上长音频的无断点转写，识别准确率高于Whisper大模型。
8. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   - 作者：google | 点赞：3312 | 下载：12113203
   - 一句话说明：谷歌最新发布的多模态大模型，支持图文理解、对话生成，下载量突破1200万，是本周全站下载量最高的模型。
9. **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
   - 作者：Alissonerdx | 点赞：221 | 下载：0
   - 一句话说明：文生视频模型的人脸身份保留LoRA，生成视频全程人脸不崩坏，效果大幅超过原生生成模型。
10. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
    - 作者：Wan-AI | 点赞：151 | 下载：2497
    - 一句话说明：阿里万相开源的人像动作驱动图生视频模型，输入单张人像图即可生成连贯的跳舞视频，动作流畅度行业领先。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
   - 作者：moonshotai | 点赞：1198 | 下载：722058
   - 一句话说明：Moonshot开源的代码专用多模态模型，支持百万行代码库的全上下文理解，辅助开发效率提升2倍以上。
2. **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)**
   - 作者：nvidia | 点赞：96 | 下载：93021
   - 一句话说明：英伟达发布的新一代句向量嵌入模型，维度低、召回精度高，专为RAG检索场景优化。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   - 作者：prism-ml | 点赞：897 | 下载：432196
   - 一句话说明：2比特三进制量化的27B大模型GGUF包，消费级16G显卡即可流畅运行，推理速度比原生模型快3倍。
2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   - 作者：prism-ml | 点赞：570 | 下载：1404962
   - 一句话说明：1比特量化的27B大模型GGUF包，仅需8G显存即可运行，是本周下载量最高的端侧大模型包。
3. **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
   - 作者：DavidAU | 点赞：235 | 下载：62842
   - 一句话说明：社区基于Qwen3.6 27B深度微调的无审查多模态模型，全部打包为GGUF格式可直接在llama.cpp中运行。
4. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - 作者：HauhauCS | 点赞：2969 | 下载：1997690
   - 一句话说明：本周最火的社区定制无审查多模态大模型，基于Qwen3.6 35B MoE基座微调，下载量接近200万。
5. **[empero-ai/Qwythos-9B-Claude-Mythos

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*