# Hugging Face 热门模型日报 2026-07-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-30 23:07 UTC

---

# Hugging Face 热门模型日报 2026-07-31
---
## 今日速览
2026年7月31日Hugging Face周热门模型榜头部被多个国产开源大模型占据，Moonshot官方发布的Kimi-K3以8984的周点赞数登顶全榜榜首。阿里通义千问开源的Qwen3.6-35B-A3B累计下载量突破610万次，成为本期全平台下载量最高的模型，其衍生的社区微调版本热度持续走高。端侧部署友好的GGUF格式模型本期占比接近三分之一，本地化大模型相关的开源工具链成熟度进一步提升。OCR、端侧TTS等垂直场景的开源专用模型也获得大量开发者关注，细分场景闭源替代的进程持续加速。

---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **poolside/Laguna-S-2.1**
   链接: https://huggingface.co/poolside/Laguna-S-2.1
   作者poolside，周点赞846，累计下载73246
   一句话说明：Poolside推出的新一代开源代码向通用大模型，主打低幻觉长文本处理能力，本周跻身通用语言模型热度TOP3。
2. **zai-org/GLM-5.2**
   链接: https://huggingface.co/zai-org/GLM-5.2
   作者zai-org，周点赞4678，累计下载1527760
   一句话说明：智谱AI开源的新一代MoE大模型，对话表现追平闭源商用主流模型，是本期热度最高的国产通用语言模型。
3. **upstage/Solar-Open2-250B**
   链接: https://huggingface.co/upstage/Solar-Open2-250B
   作者upstage，周点赞702，累计下载12411
   一句话说明：韩国Upstage开源的250B级超大参数大模型，是当前全球可商用的参数最高的开源LLM之一。
4. **Nanbeige/Nanbeige4.2-3B**
   链接: https://huggingface.co/Nanbeige/Nanbeige4.2-3B
   作者Nanbeige，周点赞582，累计下载24542
   一句话说明：国产端侧小参数LLM标杆，仅3B参数即可覆盖多数轻量对话场景，本周获得大量边缘开发者点赞。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **Qwen/Qwen3.6-35B-A3B**
   链接: https://huggingface.co/Qwen/Qwen3.6-35B-A3B
   作者Qwen，周点赞2595，累计下载6119519
   一句话说明：通义千问开源的多模态MoE大模型，全平台下载量断层第一，是当前社区最主流的多模态基础模型。
2. **thinkingmachines/Inkling**
   链接: https://huggingface.co/thinkingmachines/Inkling
   作者thinkingmachines，周点赞1653，累计下载45658
   一句话说明：主打图文深度理解的新一代多模态模型，支持复杂图表、手写文档解析，本周多模态赛道热度TOP2。
3. **owensong/Inflect-Micro-v2**
   链接: https://huggingface.co/owensong/Inflect-Micro-v2
   作者owensong，周点赞316，累计下载1100
   一句话说明：纯CPU可运行的极小参数本地TTS模型，主打零延迟语音合成，适合边缘场景部署。
4. **microsoft/Mage-VL**
   链接: https://huggingface.co/microsoft/Mage-VL
   作者microsoft，周点赞120，累计下载2951
   一句话说明：微软最新开源的多模态生成模型，可同时支持图文理解与可控图像生成能力。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **baidu/Unlimited-OCR**
   链接: https://huggingface.co/baidu/Unlimited-OCR
   作者baidu，周点赞3578，累计下载2598659
   一句话说明：百度开源的全场景OCR模型，支持任意语言、任意复杂版式文档识别，是本期下载量第二高的专用模型。
2. **Kwaipilot/KAT-Coder-V2.5-Dev**
   链接: https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev
   作者Kwaipilot，周点赞349，累计下载9225
   一句话说明：基于Qwen3.5 MoE微调的代码专用模型，支持全栈编程语言的工程级代码生成与调试。
3. **ATH-MaaS/OvisOCR2**
   链接: https://huggingface.co/ATH-MaaS/OvisOCR2
   作者ATH-MaaS，周点赞350，累计下载57439
   一句话说明：主打离线场景的轻量OCR模型，可直接部署在嵌入式设备上实现无联网文档识别。
4. **microsoft/VibeVoice-ASR-BitNet**
   链接: https://huggingface.co/microsoft/VibeVoice-ASR-BitNet
   作者microsoft，周点赞120，累计下载3864
   一句话说明：微软开源的2bit量化端侧ASR模型，内存占用不足1G即可实现接近商用级的语音识别准确率。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **prism-ml/Ternary-Bonsai-27B-gguf**
   链接: https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf
   作者prism-ml，周点赞1115，累计下载697666
   一句话说明：2bit三重量化的27B级GGUF格式大模型，普通消费级显卡即可流畅运行，本周量化模型热度第一。
2. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
   链接: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
   作者HauhauCS，周点赞3187，累计下载1803090
   一句话说明：社区基于Qwen3.6微调的无限制多模态模型，主打高自由度长文本生成，下载量破180万。
3. **unsloth/Kimi-K3-GGUF**
   链接: https://huggingface.co/unsloth/Kimi-K3-GGUF
   作者unsloth，周点赞206，累计下载12178
   一句话说明：Unsloth官方转译的Kimi-K3全精度GGUF版本，支持在本地硬件上完整运行Kimi的多模态能力。
4. **nota-ai/Solar-Open2-250B-Nota-NVFP4**
   链接: https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4
   作者nota-ai，周点赞147，累计下载7755
   一句话说明：基于NVIDIA NVFP4新型量化方案压缩的250B Solar大模型，推理速度提升3倍同时精度损失小于1%。

---
## 生态信号
当前Qwen3.6全系列、Kimi-K3两大模型家族势头最猛，社区衍生微调版本周下载量普遍突破10万，已经形成覆盖不同场景的完整生态。开源权重模型的体验已经追平同期闭源商用产品，完全可覆盖绝大多数生产场景需求，开源替代闭源的趋势进一步加速。本周低比特量化、GGUF格式的社区微调活动非常密集，2bit、NVFP4等新型量化方案的落地速度远超预期，消费级硬件即可流畅运行27B级以上的大模型。

---
## 值得探索
1. **Qwen/Qwen3.6-35B-A3B**：全平台累计下载超600万的顶流多模态基础模型，社区生态极其完善，配套的微调、量化工具链成熟度极高，是当前落地生产项目的最优开源多模态选择。
2. **prism-ml/Ternary-Bonsai-27B-gguf**：前沿2bit三重量化的代表模型，仅需8G显存即可完整运行27B大模型，对于研究端侧大模型部署、降低推理硬件成本有极高的参考价值。
3. **moonshotai/Kimi-K3**：本周登顶周榜的全新多模态大模型，支持百万级长文本图文理解，官方直接开放权重，是当前体验最接近闭源Kimi商用版的开源多模态模型。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*