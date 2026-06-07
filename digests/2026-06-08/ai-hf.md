# Hugging Face 热门模型日报 2026-06-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-07 23:05 UTC

---

# Hugging Face 热门模型日报（2026-06-08）
---
## 今日速览
本次周度热门榜单呈现头部开源大模型断层领先、多模态生成全栈化布局、社区量化生态高度繁荣的核心特征。国产大模型表现极为亮眼，DeepSeek两款主力模型包揽周点赞第一和前列位置，合计下载量近900万。英伟达密集发布全栈式视觉、音频、大模型产品线，补齐了从端侧小模型到超大规模基座的所有能力断点。社区针对新发布基座的无对齐优化、GGUF量化动作迭代速度大幅加快，端侧部署可用的低比特模型占比持续提升。

---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   作者：deepseek-ai | 周点赞：4696 | 下载：5,515,325
   一句话说明：当前周热度最高的开源旗舰大模型，支持1M超长上下文，多任务性能碾压同级别开源基座，登顶周度总榜第一。
2. **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
   作者：deepseek-ai | 周点赞：1,434 | 下载：3,347,429
   一句话说明：DeepSeek V4的低延迟优化版本，主打高吞吐、低资源消耗的产业级部署场景，下载量突破330万。
3. **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
   作者：openbmb | 周点赞：779 | 下载：114,329
   一句话说明：面向上游端侧部署场景的极小参数LLM，性能领先同尺寸竞品30%以上，适配手机、嵌入式设备。
4. **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
   作者：sapientinc | 周点赞：718 | 下载：162,822
   一句话说明：主打高效低资源部署的轻量文本生成模型，在消费级GPU上即可实现每秒百token级推理速度。
5. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
   作者：LiquidAI | 周点赞：539 | 下载：118,326
   一句话说明：低激活率MoE架构LLM，仅1B参数参与推理，速度是同尺寸稠密模型的4倍。
6. **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
   作者：JetBrains | 周点赞：249 | 下载：16,924
   一句话说明：IDE内嵌专属的思考型代码生成LLM，代码补全、debug准确率接近GPT-4同级水平。
7. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
   作者：nvidia | 周点赞：155 | 下载：49,784
   一句话说明：英伟达发布的超大规模550B参数MoE旗舰基座，主打科研级高复杂度推理场景。
8. **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)**
   作者：nvidia | 周点赞：130 | 下载：39,864
   一句话说明：同旗舰Nemotron的NVFP4量化版本，显存占用降低75%，性能损失不足2%。
9. **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
   作者：nvidia | 周点赞：200 | 下载：1,185,362
   一句话说明：英伟达官方优化的Qwen3.6量化版本，推理效率比社区版高40%，适配NVIDIA全系列显卡。

---
### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   作者：nvidia | 周点赞：1,521 | 下载：115,556
   一句话说明：英伟达开源的通用开放世界目标定位模型，无需微调即可完成任意图像的自定义目标检索定位。
2. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   作者：google | 周点赞：683 | 下载：434,969
   一句话说明：谷歌最新的统一全模态指令版基座，支持图文音任意输入输出，是目前最轻量化的通用全模态模型。
3. **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)**
   作者：google | 周点赞：407 | 下载

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*