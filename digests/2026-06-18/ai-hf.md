# Hugging Face 热门模型日报 2026-06-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-17 23:24 UTC

---

# Hugging Face 热门模型日报 | 2026-06-18
---
## 今日速览
本周热度断层第一的是DeepSeek开源的DeepSeek-V4-Pro，以4922次周点赞登顶总榜，全品类模型覆盖通用语言、多模态、语音生成赛道。国内厂商输出的基座模型占据榜单下载量TOP3席位，端侧可部署的轻量化版本分发量增速远超原生官方版本。本周首次出现零下载的图像生成研究模型，代表厂商逐步将非商用、仅作学术验证的能力同步开源到Hub。社区基于主流基座的自定义微调、无审查版本迭代速度明显加快，端侧推理相关的GGUF格式生态渗透率进一步提升。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **zai-org/GLM-5.2** https://huggingface.co/zai-org/GLM-5.2
   - 作者: zai-org | 点赞: 994 | 下载: 666
   - 一句话说明：智源开源的最新MoE大语言模型，主打通用对话能力，刚发布不久即获得行业大量关注。
2. **deepseek-ai/DeepSeek-V4-Pro** https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro
   - 作者: deepseek-ai | 点赞: 4922 | 下载: 2,804,646
   - 一句话说明：DeepSeek最新开源的通用大模型，登顶本周热度榜首，代码、推理、对话能力全维度领先。
3. **google/gemma-4-12B-it** https://huggingface.co/google/gemma-4-12B-it
   - 作者: google | 点赞: 1,068 | 下载: 922,952
   - 一句话说明：谷歌最新的统一基座模型，原生支持多模态能力，是Gemma系列的新一代主力版本。
4. **Qwen/Qwen3.6-35B-A3B** https://huggingface.co/Qwen/Qwen3.6-35B-A3B
   - 作者: Qwen | 点赞: 2,154 | 下载: 3,683,883
   - 一句话说明：通义千问开源的原生35B MoE基座，本周下载量全榜第一，生态适配极度完善。
5. **prefeitura-rio/Rio-3.5-Open-397B** https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B
   - 作者: prefeitura-rio | 点赞: 318 | 下载: 189,986
   - 一句话说明：巴西里约政府开源的397B超大多模态MoE模型，基于Qwen3.5基座二次开发，主打本地政务场景适配。
6. **microsoft/FastContext-1.0-4B-SFT** https://huggingface.co/microsoft/FastContext-1.0-4B-SFT
   - 作者: microsoft | 点赞: 185 | 下载: 537
   - 一句话说明：微软开源的4B上下文优化小模型，主打智能体场景下的长上下文快速检索能力。
7. **nex-agi/Nex-N2-Pro** https://huggingface.co/nex-agi/Nex-N2-Pro
   - 作者: nex-agi | 点赞: 315 | 下载: 5,579
   - 一句话说明：基于Qwen3.5基座开发的商用级大模型，主打推理效率优化。
8. **nex-agi/Nex-N2-mini** https://huggingface.co/nex-agi/Nex-N2-mini
   - 作者: nex-agi | 点赞: 236 | 下载: 9,804
   - 一句话说明：N2系列的轻量化版本，资源占用极低适合端侧快速部署。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **MiniMaxAI/MiniMax-M3** https://huggingface.co/MiniMaxAI/MiniMax-M3
   - 作者: MiniMaxAI | 点赞: 1,060 | 下载: 42,198
   - 一句话说明：MiniMax开源的新一代原生多模态基座，图文理解能力达到行业第一梯队水平。
2. **google/diffusiongemma-26B-A4B-it** https://huggingface.co/google/diffusiongemma-26B-A4B-it
   - 作者: google | 点赞: 974 | 下载: 460,173
   - 一句话说明：谷歌融合扩散能力的多模态大模型，同时支持图文理解和可控生成。
3. **bosonai/higgs-audio-v3-tts-4b** https://huggingface.co/bosonai/higgs-audio-v3-tts-4b
   - 作者: bosonai | 点赞: 478 | 下载: 40,812
   - 一句话说明：玻色AI开源的4B多模态音频模型，主打高自然度语音生成能力。
4. **zai-org/SCAIL-2** https://huggingface.co/zai-org/SCAIL-2
   - 作者: zai-org | 点赞: 222 | 下载: 0
   - 一句话说明：智源开源的姿态驱动人物动画生成模型，仅开放学术下载权限尚未对外分发权重。
5. **Zyphra/ZONOS2** https://huggingface.co/Zyphra/ZONOS2
   - 作者: Zyphra | 点赞: 106 | 下载: 629
   - 一句话说明：海外团队开源的Apache2.0协议TTS模型，支持零样本克隆任意音色。
6. **ideogram-ai/ideogram-4-fp8** https://huggingface.co/ideogram-ai/ideogram-4-fp8
   - 作者: ideogram-ai | 点赞: 568 | 下载: 15,477
   - 一句话说明：知名文生图厂商Ideogram开源的最新一代图像生成模型，主打文字生成准确率优化。

### 🔧 专用模型（代码、数学、定位、语音）
1. **moonshotai/Kimi-K2.7-Code** https://huggingface.co/moonshotai/Kimi-K2.7-Code
   - 作者: moonshotai | 点赞: 844 | 下载: 172,727
   - 一句话说明：月之暗面开源的代码专属多模态模型，支持截图直接生成可运行代码。
2. **nvidia/LocateAnything-3B** https://huggingface.co/nvidia/LocateAnything-3B
   - 作者: nvidia | 点赞: 2,137 | 下载: 130,389
   - 一句话说明：英伟达开源的通用图像定位小模型，支持任意目标的框选、追踪能力，落地场景极广。
3. **WeiboAI/VibeThinker-3B** https://huggingface.co/WeiboAI/VibeThinker-3B
   - 作者: WeiboAI | 点赞: 306 | 下载: 1,950
   - 一句话说明：微博AI开源的3B参数数学推理小模型，低资源下数学题准确率远超同尺寸模型。
4. **nvidia/nemotron-3.5-asr-streaming-0.6b** https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b
   - 作者: nvidia | 点赞: 519 | 下载: 7,195
   - 一句话说明：英伟达开源的流式ASR模型，仅0.6B参数就能实现近实时的高精度语音转写。
5. **CohereLabs/North-Mini-Code-1.0** https://huggingface.co/CohereLabs/North-Mini-Code-1.0
   - 作者: CohereLabs | 点赞: 420 | 下载: 13,449
   - 一句话说明：Cohere开源的轻量化代码小模型，主打低代码场景下的补全、调试能力。

### 📦 微调与量化（社区微调、GGUF、非官方版本）
1. **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF
   - 作者: yuxinlu1 | 点赞: 1,456 | 下载: 146,784
   - 一句话说明：社区开发者基于Gemma4做的

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*