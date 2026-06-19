# Hugging Face 热门模型日报 2026-06-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-19 22:58 UTC

---

# Hugging Face 热门模型日报
日期：2026-06-20 | 基于周点赞排序Top30榜单汇总
---
## 今日速览
今日Hugging Face周点赞榜首为DeepSeek开源的DeepSeek-V4-Pro，周赞达4968显著拉开头部梯队差距，英伟达开源的空间定位模型LocateAnything-3B以2194周赞紧随第二。多模态、语音生成、视频生成赛道本周集中上新，覆盖从端侧小模型到千亿级MoE大模型的全尺寸区间。社区产出的GGUF量化版本合计总下载量突破900万，用户侧本地部署需求出现爆发式增长。中文背景厂商发布的基座模型生态活跃度全面超越海外传统厂商，成为开源社区的核心创新载体。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **zai-org/GLM-5.2** https://huggingface.co/zai-org/GLM-5.2
   作者：zai-org | 点赞：1529 | 下载：11871
   一句话说明：智谱最新开源的MoE架构通用对话LLM，性能追平商用闭源基座，发布首周就冲进热度榜头部梯队。
2. **microsoft/FastContext-1.0-4B-SFT** https://huggingface.co/microsoft/FastContext-1.0-4B-SFT
   作者：microsoft | 点赞：228 | 下载：1437
   一句话说明：微软推出的端侧小尺寸上下文加速大模型，专为智能体子任务场景优化，延迟表现远超同参数基线模型。
3. **deepseek-ai/DeepSeek-V4-Pro** https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro
   作者：deepseek-ai | 点赞：4968 | 下载：3015772
   一句话说明：本周热度最高的通用开源大模型，推理、对话、多任务能力全部对标头部闭源模型，上线一周下载量破300万。
4. **lordx64/Qwable-v1** https://huggingface.co/lordx64/Qwable-v1
   作者：lordx64 | 点赞：130 | 下载：1865
   一句话说明：基于Qwen3.5-MoE微调的轻量实验性LLM，主打超低资源占用下的流畅对话效果。
5. **zai-org/GLM-5.2-FP8** https://huggingface.co/zai-org/GLM-5.2-FP8
   作者：zai-org | 点赞：103 | 下载：93927
   一句话说明：官方推出的GLM-5.2 FP8精度量化版本，兼容主流推理框架，工业部署友好度极高。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **MiniMaxAI/MiniMax-M3** https://huggingface.co/MiniMaxAI/MiniMax-M3
   作者：MiniMaxAI | 点赞：1132 | 下载：67836
   一句话说明：MiniMax开源的新一代多模态理解模型，图文跨模态对齐精度跻身开源第一梯队。
2. **google/diffusiongemma-26B-A4B-it** https://huggingface.co/google/diffusiongemma-26B-A4B-it
   作者：google | 点赞：1009 | 下载：601208
   一句话说明：谷歌发布的融合扩散能力的多模态生成模型，同时支持图文理解、文生图双能力，下载量突破60万。
3. **nvidia/LocateAnything-3B** https://huggingface.co/nvidia/LocateAnything-3B
   作者：nvidia | 点赞：2194 | 下载：228669
   一句话说明：英伟达开源的通用图像定位模型，支持任意文本描述检索图像中的对应目标，是CV领域少有的现象级爆款项目。
4. **google/gemma-4-12B-it** https://huggingface.co/google/gemma-4-12B-it
   作者：google | 点赞：1095 | 下载：1590882
   一句话说明：谷歌发布的Any-to-Any全模态基座，支持文本、图像、音频任意组合输入输出，上线以来下载量近160万。
5. **bosonai/higgs-audio-v3-tts-4b** https://huggingface.co/bosonai/higgs-audio-v3-tts-4b
   作者：bosonai | 点赞：492 | 下载：69143
   一句话说明：玻恩智能开源的4B参数TTS模型，音色还原度、生成速度均达到商用级水准。
6. **Zyphra/ZONOS2** https://huggingface.co/Zyphra/ZONOS2
   作者：Zyphra | 点赞：116 | 下载：719
   一句话说明：开源Apache 2.0协议的新一代文本转语音模型，支持零样本音色克隆，商用无版权风险。
7. **zai-org/SCAIL-2** https://huggingface.co/zai-org/SCAIL-2
   作者：zai-org | 点赞：233 | 下载：0
   一句话说明：智谱开源的姿态驱动角色动画生成模型，支持单图+动作序列生成流畅二次元人物动画。
8. **owensong/Inflect-Nano-v1** https://huggingface.co/owensong/Inflect-Nano-v1
   作者：owensong | 点赞：121 | 下载：0
   一句话说明：仅几M参数的超轻量端侧TTS模型，专门面向嵌入式设备语音生成场景设计。

### 🔧 专用模型（代码、数学、ASR、嵌入）
1. **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF
   作者：yuxinlu1 | 点赞：1837 | 下载：268102
   一句话说明：基于Gemma4微调的开源代码大模型，代码生成、调试能力远超同参数GPT-4衍生基座，周点赞位列全榜第三。
2. **moonshotai/Kimi-K2.7-Code** https://huggingface.co/moonshotai/Kimi-K2.7-Code
   作者：moonshotai | 点赞：907 | 下载：274865
   一句话说明：月之暗面开源的多模态代码大模型，支持图文混合输入下的代码补全、Bug排查、需求转代码。
3. **WeiboAI/VibeThinker-3B** https://huggingface.co/WeiboAI/VibeThinker-3B
   作者：WeiboAI | 点赞：457 | 下载：12148
   一句话说明：微博AI开源的3B参数数学推理小模型，在小学到高中数学题集上准确率达到78%，远超同参数其他模型。
4. **nvidia/nemotron-3.5-asr-streaming-0.6b** https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b
   作者：nvidia | 点赞：561 | 下载：18809
   一句话说明：英伟达开源的流式ASR模型，0.6B小参数实现实时语音转文字，端到端延迟低于100ms。
5. **CohereLabs/North-Mini-Code-1.

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*