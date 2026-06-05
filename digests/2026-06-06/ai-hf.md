# Hugging Face 热门模型日报 2026-06-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-05 23:09 UTC

---

# Hugging Face 热门模型日报
日期：2026-06-06  数据范围：近7周公开发布/更新的周点赞前30模型

---

## 今日速览
本周开源大模型榜单由国内厂商推出的新一代旗舰产品领跑，DeepSeek-V4-Pro以周点赞4657、下载556万的成绩断层登顶全榜。英伟达一次性集中上线9款覆盖语言、多模态、语音的全品类模型，Cosmos3全系列生成矩阵完整亮相。谷歌Gemma4系列全权重开放后迅速获得社区跟进量化适配，端侧小模型、视频生成两类赛道的新品占比首次突破40%。带无审查属性的开源微调模型下载量普遍破百万，开发者对于高自由度可商用模型的需求持续走高。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**：作者google，周点赞543，下载142851，是谷歌最新发布的any-to-any架构指令微调大模型，原生支持跨模态任务对齐，发布后迅速进入热门榜前列。
2. **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)**：作者google，周点赞333，下载53525，为Gemma4系列基础预训练版本，开放全权重供二次微调使用。
3. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**：作者LiquidAI，周点赞526，下载82709，是轻量MOE架构语言模型，仅激活1.8B参数即可实现同量级SOTA推理性能。
4. **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**：作者sapientinc，周点赞702，下载159014，是主打高推理效率的1B级端侧小语言模型，适配低算力边缘设备部署。
5. **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**：作者JetBrains，周点赞223，下载14709，是专为代码场景优化的带显式思考链的大模型，获得开发者群体高关注度。
6. **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**：作者openbmb，周点赞770，下载91235，是面壁智能推出的新一代端侧小参数LLM，性能远超同尺寸开源模型基准线。
7. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：作者deepseek-ai，周点赞4657，下载5562821，为当前开源大模型的性能天花板，综合能力追平闭源顶级模型，是全榜热度最高的产品。
8. **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**：作者deepseek-ai，周点赞1412，下载3473265，是DeepSeek-V4系列的低延迟轻量化版本，主打高吞吐在线部署场景。
9. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**：作者nvidia，周点赞115，下载9125，是英伟达推出的550B总参数量级的旗舰大模型，开放原生BF16权重。
10. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)**：作者nvidia，周点赞106，下载7419，为上述旗舰大模型的NVFP4量化版本，显存占用仅为原生版的1/4。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：作者nvidia，周点赞1372，下载101823，是通用图像目标定位模型，可实现任意文本描述的图像区域检索定位，泛化能力极强。
2. **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**：作者stepfun-ai，周点赞331，下载27948，是阶跃星辰推出的高速多模态大模型，支持图文快速理解。
3. **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**：作者ideogram-ai，周点赞269，下载1246，是最新一代文生图模型的FP8版本，文字生成准确率达到行业SOTA。
4. **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**：作者ideogram-ai，周点赞191，下载1594，是ideogram-4的4bit量化版本，大幅降低文生图部署门槛。
5. **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)**：作者nvidia，周点赞176，下载21625，是Cosmos3生成系列的最小参数端侧版本。
6. **[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)**：作者nvidia，周点赞142，下载19227，是英伟达全模态生成系列的旗舰底座模型。
7. **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**：作者ByteDance，周点赞139，下载175，是字节跳动发布的图像转视频渲染模型，输出画面拟真度达到影视级。
8. **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**：作者nvidia，周点赞310，下载901，是专业级图像超分模型，可将低清图无损放大至8K分辨率。
9. **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**：作者meituan-longcat，周点赞519，下载1675，是美团发布的数字人视频生成模型，支持音频驱动实时生成虚拟人直播画面。
10. **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**：作者bosonai，周点赞116，下载408，是支持多语种多音色的4B参数量TTS大模型。
11. **[nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)**：作者nvidia，周点赞116，下载1194，是Cosmos3系列的文生图专用分支。
12. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**：作者SulphurAI，周点赞1565，下载1691633，是当前最热门的开源文生视频大模型，基于LTX-2.3二次开发，输出效果远超同类产品。
13. **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)**：作者MisoLabs，周点赞109，下载0，是刚发布的零样本定制语音合成模型，支持10秒语音克隆生成完全一致音色。
14. **[nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)**：作者nvidia，周点赞106，下载1076，是Cosmos3系列的图生视频专用分支。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**：作者PaddlePaddle，周点赞245，下载6881，是百度飞桨推出的新一代多模态OCR模型，支持手写体、复杂排版文档的精准识别。
2. **[nvidia/nem

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*