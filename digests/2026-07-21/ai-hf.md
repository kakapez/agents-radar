# Hugging Face 热门模型日报 2026-07-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-20 23:00 UTC

---

# Hugging Face 热门模型日报（2026-07-21）
---
## 📅 今日速览
本次统计覆盖Hugging Face周点赞榜TOP30模型，榜单合计总下载量突破2200万，国产开源模型表现亮眼，智谱系最新基座GLM-5.2以4220周点赞登顶热度榜首。低比特端侧量化版本占热门模型总量近三分之一，社区针对主流开源基座的二次微调活跃度持续走高。OCR、多模态对话、视频生成、机器人操作等垂直场景模型密集更新，头部开源产品的性能已快速追平同参数级闭源模型。
---
## 🔥 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 周点赞：4220 | 下载：531,947
   智谱开源最新Moe架构大语言模型，主打高推理效率和通用对话能力，是本周全网关注度最高的新基座模型。
2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   作者：prism-ml | 周点赞：848 | 下载：338,945
   2比特三值量化27B级对话大模型，精度损失极低，可在消费级硬件上流畅运行全参数推理。
3. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   作者：prism-ml | 周点赞：540 | 下载：1,262,894
   1比特极端量化27B对话模型，端侧部署门槛几乎拉满，是首个累计下载破百万的1比特大模型。
4. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   作者：tencent | 周点赞：847 | 下载：13,698
   腾讯第三代混元开源大语言基座，原生支持百万级长上下文，官方发布后快速进入全球热门队列。
5. **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)**
   作者：GnLOLot | 周点赞：159 | 下载：5,494
   1B超小参数推理大模型，主打极低资源占用下的强思考输出能力，适配嵌入式设备场景。
---
### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   作者：google | 周点赞：3,295 | 下载：11,987,240
   谷歌最新开源多模态旗舰模型，图文交互能力对标商用闭源产品，下载量断层领跑全榜。
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 周点赞：2,421 | 下载：2,122,848
   百度开源全场景无限制OCR大模型，可识别任意复杂排版、低清晰度文字，开发者需求极高。
3. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者：empero-ai | 周点赞：2,366 | 下载：2,117,323
   基于Qwen3.5微调的多模态推理量化模型，适配llama.cpp全生态，可直接在本地硬件运行。
4. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者：HauhauCS | 周点赞：2,933 | 下载：2,007,025
   基于Qwen3.6 MoE基座的无审查多模态大模型，原生支持视觉输入，社区传播度极高。
5. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
   作者：Wan-AI | 周点赞：144 | 下载：2,408
   最新开源图像生成视频14B模型，输出画面流畅度、动作连贯性达到商用级水准。
---
### 🔧 专用模型（代码、数学、嵌入等垂直场景）
1. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   作者：OpenMOSS-Team | 周点赞：290 | 下载：87,533
   开源语音转写+说话人分群一体化模型，效果优于市面通用音频处理方案。
2. **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)**
   作者：nvidia | 周点赞：85 | 下载：61,708
   英伟达最新开源1B级句向量嵌入模型，句子相似度检索精度刷新同参数最优水平。
3. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
   作者：openbmb | 周点赞：108 | 下载：0
   开源视觉语言动作（VLA）模型，专为机械臂操作场景优化，打通AI与实体机器人控制链路。
4. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
   作者：moonshotai | 周点赞：1,171 | 下载：713,992
   月之暗面开源代码专用多模态模型，支持图文混合代码理解与生成。
---
### 📦 微调与量化（社区衍生、GGUF、MLX等适配）
1. **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**
   作者：prism-ml | 周点赞：154 | 下载：21,690
   适配苹果MLX生态的1比特Bonsai 27B量化版本，可在Mac本地无压力运行。
2. **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**
   作者：AngelSlim | 周点赞：149 | 下载：109,749
   社区出品腾讯Hy3基座的GGUF量化版本，实现混元大模型的端侧部署适配。
3. **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)**
   作者：empero-ai | 周点赞：193 | 下载：105,749
   迭代优化版Qwythos 9B量化模型，大幅降低推理显存占用。
---
## 📡 生态信号
本周Qwen系列、MiniCPM系列基座热度持续领跑，围绕二者的二次微调、量化衍生版本占热门池3成以上。开源大模型性能与闭源产品差距快速收窄，覆盖场景已从通用对话全面下沉到OCR、机器人控制、端侧低比特部署等垂直领域，大量非头部社区衍生版本的下载量甚至远超官方原生权重，1-2比特极端量化、跨生态适配（GGUF/MLX）成为当前开发者最关注的核心方向，端侧本地大模型需求正集中爆发。
---
## ✨ 值得探索
1. **google/gemma-4-31B-it**：全榜下载量超千万的旗舰开源多模态模型，性能对标头部闭源产品，二次开发空间极大，适合搭建商用级多模态应用。
2. **baidu/Unlimited-OCR**：完全开源的无场景限制OCR方案，可直接落地各类纸质文档、屏幕截图、路牌等任意场景的文字识别需求，落地成本极低。
3. **zai-org/GLM-5.2**：本周热度登顶的Moe架构新基座，国产开源大模型的标杆产品，推理效率极高，适合微调搭建私有专属大模型系统。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*