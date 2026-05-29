# Hugging Face 热门模型日报 2026-05-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-29 23:13 UTC

---

# Hugging Face 热门模型日报
日期：2026-05-30 统计维度：周点赞数排名

---

## 今日速览
今日Hugging Face周度热度榜头部被国产大模型包揽，DeepSeek-V4-Pro以4431周点赞登顶全榜，成为本周最受开发者关注的旗舰模型。通义千问Qwen3.6系列的官方版、社区微调版、量化衍生版共计7款模型集中上榜，形成本周最大的模型家族集群。字节跳动发布的any-to-any全模态生成模型Lance首次亮相就冲入热度前10，视频生成、数字人、文生图类生成模型占比接近4成，多模态生成赛道持续高速迭代。本周头部模型周下载量最高突破580万，开源模型的商用落地需求仍在快速释放。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
   作者：openbmb | 点赞：549 | 下载：23,629
   一句话说明：面壁智能推出的1B参数端侧小语言模型，性能远超同量级开源模型，适配手机、嵌入式设备部署需求。
2. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
   作者：LiquidAI | 点赞：211 | 下载：8,854
   一句话说明：LiquidAI推出的混合密度8B参数MoE语言模型，主打低延迟高吞吐的推理优化，适合高并发对话场景。
3. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   作者：deepseek-ai | 点赞：4,431 | 下载：5,836,444
   一句话说明：深度求索最新旗舰对话大模型，支持百万级长上下文和复杂数学推理，性能对标GPT-4o，是本周全平台热度最高的模型。
4. **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
   作者：sapientinc | 点赞：405 | 下载：131,828
   一句话说明：1B参数垂直领域轻量化语言模型，主打高速结构化文本处理能力，主打低资源场景下的内容分类任务。
5. **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
   作者：tencent | 点赞：425 | 下载：3,084
   一句话说明：腾讯混元推出的30B参数多语言翻译大模型，支持上百种小语种互译，翻译精度超过商用闭源翻译服务。
6. **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
   作者：tencent | 点赞：1,088 | 下载：15,753
   一句话说明：混元翻译系列的1.8B轻量化版本，主打端侧离线翻译能力，性能是同量级翻译模型的头部水平。
7. **[OBLITERATUS/Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED)**
   作者：OBLITERATUS | 点赞：117 | 下载：16,849
   一句话说明：社区基于Qwen3.6做的无对齐限制微调版本，支持无限制内容生成，受到小众开发者群体欢迎。
8. **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)**
   作者：LiquidAI | 点赞：103 | 下载：5,293
   一句话说明：LFM2.5-8B的GGUF量化版本，适配llama.cpp生态，可在消费级硬件上实现本地离线运行。
9. **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
   作者：deepseek-ai | 点赞：1,291 | 下载：3,382,438
   一句话说明：DeepSeek-V4-Pro的高速版本，砍掉冗余计算将推理速度提升3倍，主打高并发商用落地场景。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   作者：nvidia | 点赞：381 | 下载：7,861
   一句话说明：英伟达推出的多模态定位大模型，可在任意图片、视频中精准定位目标物体的坐标和语义信息，主打自动驾驶和工业质检场景。
2. **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
   作者：meituan-longcat | 点赞：393 | 下载：0
   一句话说明：美团开源的音频驱动数字人生成模型，输入语音即可生成高保真口型匹配的数字人视频，支持本地部署。
3. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
   作者：bytedance-research | 点赞：974 | 下载：2,738
   一句话说明：字节跳动最新开源的全模态生成大模型，支持任意输入模态生成任意输出模态，可同时实现文生图、文生视频、图生视频等能力。
4. **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)**
   作者：NemoStation | 点赞：444 | 下载：14,727
   一句话说明：2B参数视频理解大模型，主打长视频自动字幕生成和内容摘要能力，是视频内容运营场景的热门工具模型。
5. **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
   作者：nvidia | 点赞：175 | 下载：389
   一句话说明：英伟达开源的AI超分辨率扩散模型，可将低清图片实时提升至8K分辨率，细节还原度显著优于传统超分算法。
6. **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
   作者：Supertone | 点赞：738 | 下载：53,824
   一句话说明：最新一代开源TTS模型，支持上百种音色定制，生成语音的自然度接近真人，是语音合成赛道的热门新模型。
7. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
   作者：SulphurAI | 点赞：1,440 | 下载：1,528,838
   一句话说明：海外头部开源文生视频大模型，支持生成1分钟以上高清视频，性能接近商用级文生视频产品，下载量已突破150万。
8. **[microsoft/Lens](https://huggingface.co/microsoft/Lens)**
   作者：microsoft | 点赞：144 | 下载：1,255
   一句话说明：微软最新开源的文生图扩散模型，生成图片的文字精准度显著高于MidJourney等闭源产品，主打海报、文案类图文生成场景。
9. **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
   作者：circlestone-labs | 点赞：1,592 | 下载：723,317
   一句话说明：单文件封装的端到端文生图大模型，直接适配ComfyUI工作流，无需复杂环境配置即可运行，受到设计师群体热捧。
10. **[microsoft/Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo)**
    作者：microsoft | 点赞：128 | 下载：1,685
    一句话说明：微软Lens文生图模型的加速版本，生成速度提升5倍，可在1秒内生成高清图片，主打实时生成场景。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
   作者：numind | 点赞：196 | 下载：49,014
   一句话说明：专门面向结构化信息抽取的轻量多模态模型，可从扫描文档、图片中精准提取表单、身份证等结构化信息，是RAG场景的热门工具。
2. **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
   作者：stepfun-ai | 点赞：113 | 下载：1,421
   一句话说明：阶跃星辰推出的轻量化高速多模态模型，主打边缘设备上的实时图文理解能力。
3. **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
   作者：PaddlePaddle | 点赞：99 | 下载：1,171
   一句话说明：百度飞桨开源的新一代OCR多模态模型，支持复杂手写体、多语言混排场景的文字识别，精度较上一代提升30%。
4. **[froggeric/Qwen-Fixed-Chat-Templates](https

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*