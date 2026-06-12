# Hugging Face 热门模型日报 2026-06-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-12 23:17 UTC

---

# Hugging Face 热门模型日报
统计日期：2026-06-13  数据维度：近7天点赞排序Top30模型

---

## 今日速览
本次统计覆盖Hugging Face平台全品类热门开源模型，国产大模型DeepSeek-V4-Pro以4796周点赞数断层登顶全榜，累计下载量突破330万。Google新发布的Gemma 4全系列连同衍生生态占据近1/4热门席位，是当日表现最突出的模型家族。英伟达密集发布了覆盖3B多模态定位、0.6B流式ASR、550B超大规模生成的多场景模型矩阵，全栈布局落地速度远超行业预期。社区侧对轻量化部署、去对齐开源模型的需求持续暴涨，相关衍生版本下载量普遍高于官方原生基座。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **deepseek-ai/DeepSeek-V4-Pro**
   链接：https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro
   作者：deepseek-ai | 点赞：4796 | 下载：3,384,418
   说明：国产头部大模型厂商推出的最新旗舰纯文本生成模型，综合性能跻身全球第一梯队，是当前全球开发者最关注的开源通用大模型。
2. **nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16**
   链接：https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16
   作者：nvidia | 点赞：203 | 下载：67,203
   说明：英伟达推出的550B参数超大规模工业级通用文本生成旗舰，主打高可靠商用推理能力。
3. **nex-agi/Nex-N2-Pro**
   链接：https://huggingface.co/nex-agi/Nex-N2-Pro
   作者：nex-agi | 点赞：223 | 下载：2,551
   说明：基于Qwen3.5 MoE基座微调的开源大模型，主打高性价比轻量化推理。
4. **nex-agi/Nex-N2-mini**
   链接：https://huggingface.co/nex-agi/Nex-N2-mini
   作者：nex-agi | 点赞：180 | 下载：2,839
   说明：同系列小参数版本，适配端侧低资源部署场景。
5. **XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash**
   链接：https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash
   作者：XiaomiMiMo | 点赞：97 | 下载：2,607
   说明：小米开源的最新大模型，原生支持Agent任务，FP4格式极致优化推理速度。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **nvidia/LocateAnything-3B**
   链接：https://huggingface.co/nvidia/LocateAnything-3B
   作者：nvidia | 点赞：1,925 | 下载：149,206
   说明：英伟达推出的轻量多模态定位模型，可实现图像任意目标检索与定位，适配端侧视觉交互场景。
2. **google/diffusiongemma-26B-A4B-it**
   链接：https://huggingface.co/google/diffusiongemma-26B-A4B-it
   作者：google | 点赞：612 | 下载：20,669
   说明：Google推出的融合扩散能力的多模态交互大模型，支持图文混合理解与生成。
3. **google/gemma-4-12B-it**
   链接：https://huggingface.co/google/gemma-4-12B-it
   作者：google | 点赞：965 | 下载：911,544
   说明：Google新一代统一大模型，支持any-to-any全模态输入输出，是当前主流开源多模态基座。
4. **google/gemma-4-12B**
   链接：https://huggingface.co/google/gemma-4-12B
   作者：google | 点赞：526 | 下载：198,271
   说明：Gemma4系列原生基座版本，支持全模态任务微调。
5. **bosonai/higgs-audio-v3-tts-4b**
   链接：https://huggingface.co/bosonai/higgs-audio-v3-tts-4b
   作者：bosonai | 点赞：386 | 下载：29,347
   说明：玻色智能推出的4B参数多模态TTS模型，支持高自然度语音生成。
6. **nvidia/nemotron-3.5-asr-streaming-0.6b**
   链接：https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b
   作者：nvidia | 点赞：392 | 下载：3,551
   说明：英伟达推出的0.6B参数流式ASR模型，主打低延迟实时语音识别。
7. **ideogram-ai/ideogram-4-fp8**
   链接：https://huggingface.co/ideogram-ai/ideogram-4-fp8
   作者：ideogram-ai | 点赞：502 | 下载：4,987
   说明：文生图头部厂商Ideogram的最新旗舰图像生成模型，FP8精度兼顾效果与部署效率。
8. **ideogram-ai/ideogram-4-nf4**
   链接：https://huggingface.co/ideogram-ai/ideogram-4-nf4
   作者：ideogram-ai | 点赞：327 | 下载：2,910
   说明：同系列NF4量化版本，进一步降低部署硬件门槛。
9. **zai-org/SCAIL-2**
   链接：https://huggingface.co/zai-org/SCAIL-2
   作者：zai-org | 点赞：132 | 下载：0
   说明：支持姿态驱动的图像人物动画生成模型，主打可控角色视频生成。
10. **google/magenta-realtime-2**
    链接：https://huggingface.co/google/magenta-realtime-2
    作者：google | 点赞：184 | 下载：6,491
    说明：Google Magenta团队推出的实时文生音频模型，支持端侧低延迟音频生成。
11. **ByteDance/Bernini-R**
    链接：https://huggingface.co/ByteDance/Bernini-R
    作者：ByteDance | 点赞：229 | 下载：373
    说明：字节跳动开源的图文转视频渲染模型，支持高质量3D视角迁移生成。
12. **MisoLabs/MisoTTS**
    链接：https://huggingface.co/MisoLabs/MisoTTS
    作者：MisoLabs | 点赞：195 | 下载：0
    说明：主打超自然音色的开源TTS模型，支持多语种个性化语音生成。

---

### 🔧 专用模型（代码、垂直领域）
1. **CohereLabs/North-Mini-Code-1.0**
   链接：https://huggingface.co/CohereLabs/North-Mini-Code-1.0
   作者：CohereLabs | 点赞：334 | 下载：4,054
   说明：Cohere推出的轻量化代码生成大模型，主打低资源场景下的补全与调试能力。
2. **moonshotai/Kimi-K2.7-Code**
   链接：https://huggingface.co/moonshotai/Kimi-K2.7-Code
   作者：moonshotai | 点赞：327 | 下载：0
   说明：月之暗面开源的代码专用大模型，原生支持超长代码库上下文理解。
3. **Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF**
   链接：https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF
   作者：Jackrong | 点赞：114 | 下载：0
   说明：基于Qwen3.6微调的开源代码大模型，GGUF格式支持本地离线运行。

---

### 📦 微调与量化（社区微调、GGUF、衍生版本）
1. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
   链接：https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
   作者：HauhauCS | 点赞：1,722 | 下载：2,393,894
   说明：社区基于Qwen3.6 35B微调的无对齐限制版本，主打完全开放的生成能力，下载量高居全榜第二。
2. **OBLITERATUS/Gemma-4-12B-OBLITERATED**
   链接：https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED
   作者：OBLITERATUS | 点赞：254 | 下载：43,578
   说明：社区基于Gemma4 12B基座做的去对齐微调版本，取消原生内容过滤限制。
3. **unsloth/diffusiongemma-26B-A4B-it-GGUF**
   链接：https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF
   作者：unsloth | 点赞：212 | 下载：17,6

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*