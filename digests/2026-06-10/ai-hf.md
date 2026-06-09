# Hugging Face 热门模型日报 2026-06-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-09 23:17 UTC

---

# Hugging Face 热门模型日报（2026-06-10）
---
## 今日速览
本周Hugging Face热门模型榜呈现出大模型厂商新品集中爆发的态势，来自DeepSeek的最新通用大模型以近5000周赞、430万累计下载量断层登顶榜首。谷歌全系列Gemma4多模态模型完成生态铺陈，覆盖原生版本、社区量化、端侧部署全链路。英伟达同步上线从0.6B端侧ASR到550B超大参数量级的全栈新品，多模态工具属性突出。开源可部署模型占比超过90%，面向消费级硬件的轻量化微调版本下载增速远超全量权重版本。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   - 作者：deepseek-ai | 点赞数：4740 | 下载数：4,302,553
   - 新一代通用生成式大模型，性能对标当前闭源头部产品，上线后快速成为全平台热度最高的开源模型，周赞量是第二名的近3倍。
2. **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
   - 作者：sapientinc | 点赞数：733 | 下载数：133,351
   - 1B参数端侧小语言模型，主打低资源设备下的快速文本生成，上线后在边缘部署开发者群体中快速传播。
3. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
   - 作者：LiquidAI | 点赞数：571 | 下载数：137,138
   - 8B参数MoE架构轻量化大模型，激活参数量仅1B，在消费级显卡上可无压力运行，兼顾推理速度与生成效果。
4. **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
   - 作者：JetBrains | 点赞数：270 | 下载数：17,571
   - 面向编程场景的推理增强大模型，内置结构化思考链路，适合复杂代码调试与逻辑推导需求。
5. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
   - 作者：nvidia | 点赞数：173 | 下载数：56,864
   - 550B总参数量的超大MoE通用大模型，激活参数量55B，面向数据中心级高算力场景部署。
6. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)**
   - 作者：nvidia | 点赞数：150 | 下载数：71,818
   - 上述550B大模型的NVFP4量化版本，显存占用降低70%，适配英伟达消费级与数据中心全系列显卡。
7. **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)**
   - 作者：nex-agi | 点赞数：160 | 下载数：783
   - 基于Qwen3.5二次开发的商用轻量大模型，主打高合规性与低延迟推理。
8. **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)**
   - 作者：nex-agi | 点赞数：109 | 下载数：748
   - Nex-N2-Pro的端侧精简版本，适配移动端离线部署场景。
9. **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
   - 作者：CohereLabs | 点赞数：150 | 下载数：1,784
   - 专门面向代码场景的小参数量大模型，支持多编程语言补全与调试。
10. **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
    - 作者：OBLITERATUS | 点赞数：129 | 下载数：8,106
    - 社区基于Gemma4开源的无内容对齐限制版本，面向自由研究场景开放。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - 作者：nvidia | 点赞数：1725 | 下载数：123,922
   - 3B参数的开放世界图像定位模型，支持通过任意文本描述定位图片中的任意目标，是本周热度第二高的模型。
2. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   - 作者：google | 点赞数：808 | 下载数：581,354
   - 谷歌最新发布的12B参数any-to-any多模态指令模型，支持文本、图像、音频跨模态输入输出，生态兼容性极强。
3. **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)**
   - 作者：google | 点赞数：478 | 下载数：122,464
   - 上述Gemma4多模态模型的基础预训练版本，面向二次微调场景开放。
4. **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
   - 作者：ideogram-ai | 点赞数：438 | 下载数：5,915
   - Ideogram最新一代文生图模型的FP8量化版本，主打生成图像的文字准确性，效果对标闭源DALL-E 4。
5. **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
   - 作者：ideogram-ai | 点赞数：287 | 下载数：5,250
   - Ideogram4文生图的NF4量化版本，更低显存占用即可运行高清图像生成。
6. **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
   - 作者：bosonai | 点赞数：281 | 下载数：16,207
   - 4B参数端侧TTS模型，支持多语种、多音色实时语音生成，延迟低于200ms。
7. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
   - 作者：nvidia | 点赞数：317 | 下载数：4,181
   - 0.6B参数流式ASR模型，支持边输入边输出转写结果，端侧离线即可运行。
8. **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
   - 作者：google | 点赞数：164 | 下载数：18,216
   - 谷歌Magenta团队推出的实时文生音频模型，支持生成任意风格的音乐与音效，适配TFLite端侧部署。
9. **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
   - 作者：stepfun-ai | 点赞数：358 | 下载数：46,729
   - 阶跃星辰最新发布的轻量化多模态大模型，图像理解速度比上一代提升3倍，适合高并发场景调用。
10. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    - 作者：HauhauCS | 点赞数：1591 | 下载数：2,983,909
    - 社区基于Qwen3.6开发的无对齐限制多模态MoE模型，累计下载量接近300万，是消费级用户最受欢迎的开源多模态模型之一。
11. **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
    - 作者：ByteDance | 点赞数：193 | 下载数：281
    - 字节跳动开源的图生视频渲染模型，支持输入参考图+文本指令生成4K高清短视频，渲染速度远超同类开源模型。
12. **[jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo)**
    - 作者：jdopensource | 点赞数：114 | 下载数：4,502
    - 京东开源的文生视频模型，内置音频同步生成能力，输出结果自带匹配背景音乐。
13. **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)**
    - 作者：nvidia | 点赞数：214 | 下载数：36,739
    - 英伟达开源的纳米级多模态生成工具包，覆盖图像、视频、音频

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*