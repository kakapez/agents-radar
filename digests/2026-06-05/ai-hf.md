# Hugging Face 热门模型日报 2026-06-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-04 23:09 UTC

---

# Hugging Face 热门模型日报（2026-06-05）
---
## 今日速览
本报告基于Hugging Face Hub本周点赞Top30模型生成，覆盖通用语言、多模态生成、专用工具等全品类开源AI资产。头部大模型热度断层领先，DeepSeek、Qwen两个国产开源模型跻身全站热度前三，单模型周下载量均突破500万大关。英伟达本周集中发布7款覆盖空间定位、文生图/视频、超分辨率的全栈多模态生成模型，成为发新数量最多的厂商。社区侧基于官方基座的低比特量化、去对齐微调模型占比显著提升，端侧部署相关资产的下载占比超过4成。

---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   作者：google | 点赞：405 | 下载：14866
   一句话说明：谷歌发布的最新统一多模态基座指令微调版，支持任意模态输入输出，是本周官方发布的标杆级大模型之一。
2. **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)**
   作者：google | 点赞：264 | 下载：1978
   一句话说明：Gemma4系列原生基座版本，面向二次微调开发者开放，刚发布就获得大量基座改造需求。
3. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
   作者：LiquidAI | 点赞：507 | 下载：72114
   一句话说明：LiquidAI推出的低激活MoE轻量大模型，推理速度远超同参数稠密模型，广受边缘场景开发者欢迎。
4. **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
   作者：openbmb | 点赞：768 | 下载：79427
   一句话说明：面壁智能推出的1B极小参数大模型，推理成本极低，性能远超同参数级通用模型，是端侧部署热门选择。
5. **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
   作者：sapientinc | 点赞：612 | 下载：157457
   一句话说明：全新架构的1B参数纯文本生成模型，主打低延迟长文本生成能力，落地场景适配性极强。
6. **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
   作者：JetBrains | 点赞：199 | 下载：12157
   一句话说明：JetBrains推出的主打深度推理能力的大模型，专门优化代码逻辑推导、数学解题场景。
7. **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
   作者：nvidia | 点赞：176 | 下载：629244
   一句话说明：英伟达针对自家GPU优化的NVFP4格式Qwen3.6 35B量化版，消费级显卡即可流畅运行35B参数大模型。
8. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   作者：deepseek-ai | 点赞：4628 | 下载：5687031
   一句话说明：本周全站热度第一的开源大模型，通用能力、推理能力全面追平闭源GPT-4级产品，下载量断层领先。
9. **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
   作者：deepseek-ai | 点赞：1401 | 下载：3503796
   一句话说明：DeepSeek专为高并发场景优化的快速推理版本，延迟降低70%，适合ToB商业化部署。
10. **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)**
    作者：NemoStation | 点赞：518 | 下载：18942
    一句话说明：主打视频理解的轻量多模态语言模型，支持直接输入长视频生成文本摘要和问答结果。
11. **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
    作者：Qwen | 点赞：1612 | 下载：5440074
    一句话说明：通义千问最新开源的27B多模态大模型，均衡的多模态理解和文本生成能力使其成为社区二次开发的首选基座。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   作者：nvidia | 点赞：1273 | 下载：91834
   一句话说明：英伟达推出的全场景图像细粒度空间定位模型，可直接识别图像中任意目标的坐标区域，填补了开源模型能力空白。
2. **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
   作者：stepfun-ai | 点赞：249 | 下载：22715
   一句话说明：阶跃星辰推出的快速推理多模态大模型，主打低延迟图文理解场景。
3. **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
   作者：ideogram-ai | 点赞：199 | 下载：310
   一句话说明：头部文生图厂商Ideogram最新的开源FP8权重，文字生成准确率远超普通DALL-E级产品。
4. **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
   作者：ideogram-ai | 点赞：155 | 下载：398
   一句话说明：NF4低比特量化版Ideogram4文生图模型，可在消费级显卡上运行出媲美旗舰级的生成效果。
5. **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
   作者：meituan-longcat | 点赞：516 | 下载：381
   一句话说明：美团开源的数字人视频生成模型，支持音频直接驱动生成高保真虚拟人说话视频。
6. **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)**
   作者：nvidia | 点赞：160 | 下载：17903
   一句话说明：英伟达Cosmos3全栈生成模型的极小参数版本，主打端侧低延迟多模态生成场景。
7. **[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)**
   作者：nvidia | 点赞：133 | 下载：16767
   一句话说明：英伟达开源的旗舰级全栈多模态生成基座，支持文生图、图生视频等全模态生成任务。
8. **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
   作者：ByteDance | 点赞：118 | 下载：129
   一句话说明：字节开源的高质量图像到视频渲染模型，生成画面质感媲美商用电影级渲染效果。
9. **[nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)**
   作者：nvidia | 点赞：107 | 下载：961
   一句话说明：Cosmos3系列独立文生图分支，原生支持4K高分辨率图像生成。
10. **[nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)**
    作者：n

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*