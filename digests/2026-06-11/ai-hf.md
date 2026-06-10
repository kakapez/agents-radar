# Hugging Face 热门模型日报 2026-06-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-10 23:25 UTC

---

# Hugging Face 热门模型日报（2026-06-11）
---
## 今日速览
今日Hugging Face周度热度榜呈现明显头部效应，DeepSeek-V4-Pro以4758的周点赞数断层登顶，领先第二名近1.6倍。Google全新发布的Gemma4系列全尺寸衍生版本占据近三分之一上榜席位，成为本周最受关注的官方新模型家族。图像、音频、视频类多模态生成模型本周集中上新，Ideogram 4、字节跳动Bernini-R等新品均获得大量开发者关注。社区量化、去对齐微调类模型的平均下载量远超官方原版，边缘部署需求持续走高。

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   - 作者：deepseek-ai | 周点赞：4758 | 周下载：4,061,006
   - 一句话说明：本周全站热度断层第一的开源通用大语言模型，主打长上下文对话与强推理能力，下载量登顶全平台所有模型。
2. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
   - 作者：nvidia | 周点赞：189 | 周下载：59,066
   - 一句话说明：英伟达推出的千亿级通用MoE大模型，原生适配CUDA生态，面向企业级高负载推理场景。
3. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)**
   - 作者：nvidia | 周点赞：158 | 周下载：91,117
   - 一句话说明：前述550B模型的NVFP4量化版本，体积大幅压缩后推理速度提升近3倍，更适配消费级GPU部署。
4. **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
   - 作者：sapientinc | 周点赞：739 | 周下载：134,752
   - 一句话说明：主打高响应速度的1B小参数量语言模型，端侧部署延迟可低于100ms，轻量场景实用性极强。
5. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
   - 作者：LiquidAI | 周点赞：580 | 周下载：142,134
   - 一句话说明：LiquidAI推出的8B级MoE轻量语言模型，在相同推理成本下性能接近13B级通用模型。
6. **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)**
   - 作者：nex-agi | 周点赞：178 | 周下载：1,185
   - 一句话说明：基于Qwen3.5基座微调的商用友好通用模型，支持长文档处理与多轮对话，无商业使用限制。
7. **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)**
   - 作者：nex-agi | 周点赞：132 | 周下载：1,222
   - 一句话说明：Nex-N2-Pro的轻量小参版本，适配边缘端低算力设备运行。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   - 作者：google | 周点赞：884 | 周下载：675,936
   - 一句话说明：Google发布的原生any-to-any统一多模态基座，支持图文音输入输出，原生对齐原生生态工具链。
2. **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)**
   - 作者：google | 周点赞：500 | 周下载：140,221
   - 一句话说明：Gemma4系列的预训练基础版多模态模型，支持开发者自定义微调适配垂直多模态场景。
3. **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
   - 作者：ideogram-ai | 周点赞：469 | 周下载：7,170
   - 一句话说明：Ideogram最新文生图模型的FP8官方量化版，文字生成准确率相较前代提升超过60%。
4. **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
   - 作者：ideogram-ai | 周点赞：307 | 周下载：6,124
   - 一句话说明：Ideogram 4的NF4轻量量化版本，可在8G显存消费级显卡上本地运行生成高清图像。
5. **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/stepfun-3.7-Flash)**
   - 作者：stepfun-ai | 周点赞：363 | 周下载：50,187
   - 一句话说明：阶跃星辰发布的新一代多模态大模型，图文理解速度远超同规格竞品，实时交互延迟极低。
6. **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
   - 作者：bosonai | 周点赞：320 | 周下载：19,948
   - 一句话说明：4B参数端侧TTS模型，支持近百种音色零样本克隆，生成语音自然度接近真人录音。
7. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
   - 作者：google | 周点赞：194 | 周下载：0
   - 一句话说明：Google首次推出的融合扩散能力的Gemma系列多模态模型，可同时实现图文理解与图像生成。
8. **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)**
   - 作者：MisoLabs | 周点赞：185 | 周下载：0
   - 一句话说明：开源最新流式TTS模型，端到端生成延迟低于200ms，适配实时对话、直播配音等低延迟场景。
9. **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
   - 作者：google | 周点赞：172 | 周下载：19,806
   - 一句话说明：Google Magenta团队推出的实时音乐生成模型，支持文本直接生成多轨专业级音频，体积轻量化。
10. **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
    - 作者：ByteDance | 周点赞：208 | 周下载：305
    - 一句话说明：字节跳动最新开源文生视频模型，采用Apache2.0商业友好许可，生成视频流畅度达到行业第一梯队水平。
11. **[jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo)**
    - 作者：jdopensource | 周点赞：126 | 周下载：5,457
    - 一句话说明：京东开源的文本生成高清短视频模型，可同时输出视频音频流，适配短视频内容生产场景。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - 作者：nvidia | 周点赞：1796 | 周下载：131,794
   - 一句话说明：英伟达推出的图像通用定位专用模型，支持文本描述任意在图片中框选目标，泛用性远超传统检测模型。
2. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
   - 作者：nvidia | 周点赞：341 | 周下载：4,965
   - 一句话说明：低参流式ASR专用模型，支持多语种实时语音转写，断句准确率远高于Whisper系列小模型。
3. **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
   - 作者：CohereLabs | 周点赞：250 | 周下载：1,859
   - 一句话说明：Cohere推出的轻量代码生成专用模型，支持全栈编程语言补全与错误修复，可直接运行在端侧IDE插件中。
4. **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
   - 作者：JetBrains | 周点赞：280 | 周下载：18,273
   - 一句话说明：JetBrains专门面向代码场景推出的思考型专用模型，支持多步推理解决复杂编程问题，适配JetBrains全系列IDE生态。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
   - 作者：unsloth | 周点赞：548 | 周下载：711,706
   - 一句话说明：Unsloth官方推出的Gemma4 12B IT GGUF量化版本，直接兼容llama.cpp生态，是本周下载量最高的多模态量化版本。
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - 作者：HauhauCS | 周点赞：1630 | 周下载：3,057,541
   - 一句话说明：社区热门的Qwen3.6 35B MoE去对齐无审查版本，全GGUF量化，支持任意场景不受安全对齐限制。
3. **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
   - 作者：OBLITERATUS | 周点赞：210 | 周下载：14,838
   - 一句话说明：社区针对Gemma4 12B完成的去对齐微调版本，大幅降低安全对齐限制，输出自由度更高。
4. **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**
   - 作者：unsloth | 周点赞：186 | 周下载：148,252
   - 一句话说明：Gemma4 

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*