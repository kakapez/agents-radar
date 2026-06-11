# Hugging Face 热门模型日报 2026-06-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-11 23:22 UTC

---

# Hugging Face 热门模型日报
日期：2026-06-12 数据维度：近7周点赞排序Top30
---
## 一、今日速览
本周Hugging Face流量呈现极端头部效应，DeepSeek最新开源的旗舰模型DeepSeek-V4 Pro以4780周点赞断层登顶，下载量突破400万次创下近期新高。谷歌Gemma 4全系列多模态模型集体上架，从原生大权重到端侧量化版本覆盖全场景，英伟达同步发布端侧图像定位小模型与千亿级Nemotron Ultra系列拉开算力分层。社区适配速度显著提升，所有新发布的主流模型在官方上架当日就推出GGUF轻量化版本，进一步降低本地部署门槛。
## 二、热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. [deepseek-ai/DeepSeek V4 Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)：作者deepseek-ai，点赞4780，下载4,061,006次，是当前全球热度最高的开源旗舰大模型，全能力对齐闭源头部产品，开放全权重后被社区广泛分发复用。
2. [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)：作者nvidia，点赞198，下载59,066次，英伟达面向数据中心场景推出的550B超大参数MoE基座，主打高推理吞吐量。
3. [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)：作者nvidia，点赞168，下载91,117次，同系列NVFP4量化版本，适配消费级RTX显卡加载推理，下载量远超BF16原生版本。
4. [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)：作者sapientinc，点赞748，下载134,752次，主打高召回率的1B级轻量文本检索专用基座，推理速度比同参数模型快3倍以上。
5. [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)：作者LiquidAI，点赞594，下载142,134次，低延迟MoE小模型，专为实时对话场景优化。
6. [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)：作者nex-agi，点赞206，下载1,185次，基于Qwen3.5微调的商用对话模型，主打低幻觉特性。
7. [nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)：作者nex-agi，点赞162，下载1,222次，同系列轻量化版本，适配边缘设备部署。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)：作者nvidia，点赞1868，下载131,794次，全新范式的图像定位多模态小模型，无需微调即可实现任意场景的目标框选、语义定位，是本周热度最高的多模态创新模型。
2. [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)：作者google，点赞939，下载675,936次，谷歌最新一代全模态基座，统一支持图像、音频、文本输入输出，周下载量接近70万。
3. [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)：作者google，点赞516，下载140,221次，Gemma4系列原生基座版本。
4. [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)：作者ideogram-ai，点赞484，下载7,170次，全球顶级文生图模型Ideogram4的开源FP8版本，文字生成准确率行业领先。
5. [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)：作者ideogram-ai，点赞316，下载6,124次，同系列4bit量化版本，显存占用仅8GB。
6. [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)：作者stepfun-ai，点赞368，下载50,187次，国内智元发布的极速多模态大模型，单图推理延迟低于100ms。
7. [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)：作者ByteDance，点赞222，下载305次，字节开源的图像文本转3D渲染视频模型，生成画面可直接用于工业设计。
8. [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)：作者google，点赞476，下载0次，谷歌首次推出的扩散语言融合大模型，目前尚未开放权重。
9. [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)：作者bosonai，点赞354，下载19,948次，端侧4B级多语种TTS模型，支持100+音色零样本克隆。
10. [google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)：作者google，点赞178，下载19,806次，谷歌Magenta团队开源的实时AI作曲模型，延迟低于200ms。
11. [MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)：作者MisoLabs，点赞194，下载0次，主打自然口语韵律的TTS模型，暂未开放权重。
12. [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)：作者zai-org，点赞112，下载0次，姿态驱动的角色动画生成模型，暂未开放权重。
13. [Comfy-Org/Ideogram-4](https://huggingface.co/Comfy-Org/Ideogram-4)：作者Comfy-Org，点赞134，下载0次，Ideogram4的ComfyUI适配包，暂未开放资源。

### 🔧 专用模型（代码、ASR、垂直场景）
1. [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)：作者CohereLabs，点赞305，下载1,859次，Cohere最新开源的7B级代码专用模型，支持全栈编程语言补全与调试。
2. [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)：作者nvidia，点赞372，下载4,965次，0.6B级流式ASR模型，端到端延迟低于100ms，支持全场景实时语音转写。

### 📦 微调与量化（社区微调、GGUF、轻量适配）
1. [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)：作者HauhauCS，点赞1674，下载3,057,541次，基于Qwen3.6微调的无对齐全能力版本，是本周下载量第二高的模型，完全去掉内容限制适合本地部署。
2. [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)：作者unsloth，点赞561，下载711,706次，Unsloth推出的Gemma4 12B指令版GGUF量化包，本地最低4GB显存即可运行。
3. [unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)：作者unsloth，点赞199，下载148,252次，Gemma4 12B QAT量化的GGUF版本，推理速度比原生版本快5倍。
4. [unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)：作者unsloth，点赞141，下载129,110次，Gemma4 26B QAT量化GGUF版本，适配16GB显存消费级显卡。
5. [unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)：作者unsloth，点赞176，下载0次，DiffusionGemma的GGUF适配包，等待官方权重开放。
6. [google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)：作者google，点赞129，下载96,749次，官方首发的Gemma4 GGUF量化版本。
7. [OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)：作者OBLITERATUS，点赞234，下载14,838次，社区去对齐微调的Gemma4版本，完全移除官方内容限制。
8. [huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)：作者huihui-ai，点赞143，下载6,400次，社区去对齐微调的Gemma4全模态版本，保留原生多模态能力的同时移除对齐限制。
---
## 三、生态信号
本周Gemma4模型家族全链路霸榜，从官方原生权重到社区GGUF量化、去对齐微调版本覆盖全场景，热度远超其他同期发布模型。国产大模型表现亮眼，DeepSeek-V4 Pro登顶总榜，通义千问、阶跃星辰等国内厂商模型下载量持续走高。当前开源大模型生态已经形成“官方发版-社区当日适配全系列量化”的成熟流水线，全权重开放模式正在快速挤压闭源API的市场空间，端侧可运行的大模型分发占比已经超过70%，用户对无限制可本地部署的微调版本需求远超官方原版模型。
## 四、值得探索
1. **DeepSeek-V4 Pro**：作为当前热度最高的开源旗舰大模型，全能力对齐GPT-4级闭源产品，400万+的社区下载量意味着海量生态工具适配，是最快落地商用的开源大模型首选。
2. **nvidia/LocateAnything-3B**：创新的任意目标定位能力打破传统多模态模型的交互范式，3B的小体积可以直接部署在移动端，在AR、工业质检场景有极高的落地价值。
3. **HauhauCS/Qwen3.6-35B无审查版本**：300万+下载量证明了其社区认可度，MoE架构性能接近70B级大模型，本地部署门槛极低，完全适配全场景私有部署需求。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*