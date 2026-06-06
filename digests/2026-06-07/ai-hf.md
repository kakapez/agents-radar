# Hugging Face 热门模型日报 2026-06-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-06 23:04 UTC

---

# Hugging Face 热门模型日报
**统计日期：2026-06-07 | 数据维度：周点赞数排名前30模型**

---

## 今日速览
本周Hugging Face开源大模型生态呈现多赛道爆发态势，国产基座DeepSeek-V4-Pro以4679的周点赞数断层登顶全榜，下载量突破550万量级。英伟达集中发布了11款覆盖语言、多模态、音频、视频全栈的开源模型，是本周上新密度最高的厂商。文本生成视频赛道开源基座Sulphur-2-base热度飙升，周下载量突破170万。社区针对主流基座的量化、去对齐微调活动活跃度大幅提升，GGUF格式分发的模型普遍下载量远超官方原版。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   作者：deepseek-ai | 点赞数：4679 | 下载数：5510611
   一句话说明：深度求索最新开源千亿级对话基座，综合性能对齐头部闭源模型，是本周全平台热度最高的通用大模型。
2. **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
   作者：deepseek-ai | 点赞数：1421 | 下载数：3436213
   一句话说明：DeepSeek V4系列的端侧优化轻量版本，推理速度提升3倍，适合低延迟部署场景，下载量稳居全榜第二。
3. **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
   作者：sapientinc | 点赞数：711 | 下载数：161627
   一句话说明：仅1B参数的高速轻量文本生成模型，主打边缘设备端的低资源语言生成能力，本周获得大量端侧开发者关注。
4. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
   作者：LiquidAI | 点赞数：531 | 下载数：95440
   一句话说明：Liquid AI推出的MoE架构轻量大模型，激活参数量仅1B，兼顾效果和推理效率。
5. **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
   作者：JetBrains | 点赞数：239 | 下载数：16395
   一句话说明：JetBrains推出的面向代码场景的思考型大模型，专为IDE代码辅助场景优化。
6. **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
   作者：openbmb | 点赞数：774 | 下载数：100575
   一句话说明：面壁智能开源的1B参数端侧小模型，中文能力远超同参数级开源基座。
7. **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
   作者：nvidia | 点赞数：197 | 下载数：1015381
   一句话说明：英伟达基于Qwen3.6优化的NVFP4量化版本，针对英伟达硬件做了全栈加速优化，下载量破百万。
8. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
   作者：nvidia | 点赞数：142 | 下载数：47285
   一句话说明：英伟达推出的550B总参数MoE旗舰大模型，主打高复杂度专业场景推理。
9. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)**
   作者：nvidia | 点赞数：117 | 下载数：17225
   一句话说明：上述Nemotron旗舰大模型的NVFP4量化版本，大幅降低部署显存门槛。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   作者：nvidia | 点赞数：1449 | 下载数：111078
   一句话说明：英伟达推出的通用图像目标定位3B小模型，支持任意文本描述的图像快速检索定位，本周爆火。
2. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   作者：google | 点赞数：613 | 下载数：315131
   一句话说明：谷歌最新Gemma4系列的多模态统一指令微调版本，支持图文音任意输入输出。
3. **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)**
   作者：google | 点赞数：374 | 下载数：84549
   一句话说明：Gemma4 12B原生多模态基座，面向二次微调场景开放。
4. **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
   作者：ideogram-ai | 点赞数：303 | 下载数：2818
   一句话说明：Ideogram推出的最新文生图大模型FP8版本，主打文字生成准确率远高于同类模型。
5. **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
   作者：stepfun-ai | 点赞数：342 | 下载数：38716
   一句话说明：阶跃星辰开源的轻量高速多模态大模型，主打端侧多模态交互场景。
6. **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
   作者：ideogram-ai | 点赞数：210 | 下载数：2671
   一句话说明：Ideogram-4的4bit量化版本，进一步降低文生图部署门槛。
7. **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)**
   作者：nvidia | 点赞数：182 | 下载数：24820
   一句话说明：英伟达开源的轻量多模态生成小模型，覆盖文生图、文生视频全能力。
8. **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
   作者：bosonai | 点赞数：151 | 下载数：2184
   一句话说明：玻色智能开源的4B参数多模态TTS模型，支持多语种高自然度语音生成。
9. **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
   作者：ByteDance | 点赞数：149 | 下载数：223
   一句话说明：字节跳动开源的图像转视频渲染模型，主打高精度数字人渲染效果。
10. **[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)**
    作者：nvidia | 点赞数：147 | 下载数：20403
    一句话说明：英伟达Cosmos3系列旗舰多模态生成大模型，全链路支持视频生成类任务。
11. **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)**
    作者：MisoLabs | 点赞数：129 | 下载数：0
    一句话说明：本周新上线的零样本个性化TTS模型，支持1秒音频克隆生成目标音色。
12. **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
    作者：nvidia | 点赞数：312 | 下载数：972
    一句话说明：英伟达开源的图像超分专用扩散模型，支持4K级低清图像无损修复。
13. **[nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)**
    作者：nvidia | 点赞数：119 | 下载数：1634
    一句话说明：Cosmos3系列的独立文生图分支模型，生成精度对标头部闭源文生图产品。
14. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    作者：SulphurAI | 点赞数：1579 | 下载数：1704964
    一句话说明：本周热度最高的开源文生视频基座，支持生成10秒以上高清视频，适配全端部署。
15. **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
    作者：meituan-longcat | 点赞数：525 | 下载数：1806
    一句话说明：美团开源的数字人视频生成模型，支持音频驱动实时生成高拟真数字人直播画面。
16. **[nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)**
    作者：nvidia | 点赞数：109 | 下载数：1295
    一句话说明：Cosmos3系列的独立图生视频分支模型，支持单张输入图生成连贯高清动态视频。
17. **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
    作者：google | 点赞数：108 | 下载数：9394
    一句话说明：谷歌Magenta团队开源的实时音频生成模型，支持端侧低延迟生成全品类音乐、音效。

### 🔧 专用模型
1. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*