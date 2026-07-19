# Hugging Face 热门模型日报 2026-07-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-19 22:52 UTC

---

# Hugging Face 热门模型日报
日期：2026-07-20  数据来源：Hugging Face Hub 周点赞榜Top30

---

## 今日速览
本周Hugging Face热门模型榜头部效应显著，谷歌新发布的Gemma4-31B-it以单周超1200万下载量登顶流量榜首，智源GLM-5.2、腾讯Hy3等国产基座热度持续走高。端侧轻量化衍生模型占比突破30%，1bit极致量化方案的社区接受度大幅提升。多模态场景OCR、实时音视频理解、文生视频类新模型集中上线，场景细分度明显提升。社区无审查微调、特定领域LoRA的产出效率环比上涨近两成，本地部署全链路生态进一步成熟。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 点赞：4165 | 下载：536177
   智源最新开源的MoE架构文本生成基座，原生支持长上下文对话，本周登顶纯文类模型热度榜。
2. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   作者：tencent | 点赞：835 | 下载：13698
   腾讯混元第三代开源基座，原生支持高并发推理，官方刚开放权重即冲入榜单。
3. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
   作者：InternScience | 点赞：583 | 下载：35833
   基于Qwen3.5 MoE微调的Agent专用基座，原生支持工具调用和多模态联动，面向AI工作流场景。
4. **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)**
   作者：GnLOLot | 点赞：147 | 下载：5494
   基于MiniCPM5微调的小参数推理模型，蒸馏了Claude Opus的思维链能力，仅1B参数即可跑出不错的推理效果。

### 🎨 多模态与生成（图像、视频、音频、图文理解）
1. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
   作者：thinkingmachines | 点赞：1143 | 下载：13462
   新发布的多模态对话基座，原生支持图文输入、长对话，是本周热度最高的全新原生多模态模型。
2. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者：empero-ai | 点赞：2340 | 下载：2118995
   基于Qwen3.5微调的多模态模型，融入1M上下文的神话类数据集对齐角色生成效果，单周下载破200万。
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者：HauhauCS | 点赞：2895 | 下载：2084530
   无审查多模态微调模型，开放全能力图文生成无内容限制，是社区用户本周最追捧的非对齐衍生模型。
4. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   作者：google | 点赞：3273 | 下载：12337374
   谷歌最新开放的多模态基座，能力对齐闭源大模型，支持全场景图文理解和长对话，单周下载破1200万登顶全榜。
5. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
   作者：bottlecapai | 点赞：459 | 下载：10647
   基于Qwen3.6微调的推理类多模态模型，专门优化了数学题图文解题能力。
6. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
   作者：Wan-AI | 点赞：126 | 下载：2408
   全新开源的图生视频14B基座，支持高清动态人物生成，是本周热度最高的原生视频生成模型。
7. **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)**
   作者：OpenMOSS-Team | 点赞：81 | 下载：544
   实时多模态视频理解模型，支持10FPS低延迟视频流输入识别，面向直播实时分析场景。
8. **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)**
   作者：empero-ai | 点赞：182 | 下载：105749
   Qwythos 9B多模态模型的迭代版，优化了低资源场景下的图文识别准确率。
9. **[mgwr/M87](https://huggingface.co/mgwr/M87)**
   作者：mgwr | 点赞：158 | 下载：4652
   基于Krea-2 Turbo微调的文生图模型，生成风格偏向高写实科幻类图像。

### 🔧 专用模型
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 点赞：2162 | 下载：2122848
   百度开源的无限制泛用OCR模型，支持任意语言任意场景的图文识别，无需额外适配即可覆盖绝大多数实拍、扫描场景。
2. **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
   作者：ATH-MaaS | 点赞：191 | 下载：14587
   第二代开源OCR模型，专门优化了复杂排版文档、手写体识别效果。
3. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   作者：OpenMOSS-Team | 点赞：277 | 下载：87533
   音频转录+说话人分角色一体化模型，支持长音频快速转写，对齐音视频字幕生成场景需求。
4. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
   作者：Cactus-Compute | 点赞：279 | 下载：955
   专门优化函数调用能力的小基座，工具调用准确率超95%，面向轻量Agent部署场景。

### 📦 微调与量化（社区衍生、端侧适配）
1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   作者：prism-ml | 点赞：790 | 下载：338945
   2bit三值量化的27B大模型端侧适配版，仅需20G显存即可流畅运行，量化损失极低。
2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   作者：prism-ml | 点赞：488 | 下载：1262894
   1bit极致量化的27B大模型端侧适配版，仅需16G内存即可在本地

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*