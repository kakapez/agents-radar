# Hugging Face 热门模型日报 2026-08-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-20 22:27 UTC

---

# Hugging Face 热门模型日报（2026-08-21）
---
## 今日速览
本期覆盖本周按周点赞数排序的TOP30热门模型，集中反映全球开源AI社区的最新动向。头部两款万赞级模型均为国产厂商推出，通义千问Qwen系列、月之暗面Kimi系列热度领跑全球开源社区。音视频生成赛道迎来爆发，MiniMax、Lightricks推出的多款文生视频、文生音乐模型下载量均突破数十万。社区针对热门基座的二次微调、量化衍生活动十分活跃，大量低门槛可本地部署的衍生模型占据榜单过半席位。

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **Qwen/Qwen3.8-2.4T-A95B** <https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B>
   - 作者：Qwen | 点赞：1120 | 下载：14592
   - 一句话说明：阿里通义千问推出的2.4T参数MoE大语言模型，主打高并发对话推理，发布后快速冲上榜单。
2. **deepseek-ai/DeepSeek-V4-Pro-0813** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813>
   - 作者：deepseek-ai | 点赞：677 | 下载：43287
   - 一句话说明：DeepSeek最新迭代的V4 Pro版本通用对话大模型，周度热度快速爬升。
3. **deepseek-ai/DeepSeek-V4-Flash-0731** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731>
   - 作者：deepseek-ai | 点赞：3575 | 下载：2547549
   - 一句话说明：DeepSeek V4轻量化高速推理版本，主打低延迟通用对话场景，累计下载近260万次。
4. **moonshotai/Kimi-K3** <https://huggingface.co/moonshotai/Kimi-K3>
   - 作者：moonshotai | 点赞：10883 | 下载：2349853
   - 一句话说明：月之暗面开源的最新Kimi大模型，全榜点赞量第二，性能对标头部闭源对话产品。
5. **ornith-ai/Ornith-1.5-35B-A3B** <https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B>
   - 作者：ornith-ai | 点赞：209 | 下载：1713
   - 一句话说明：基于Qwen3.5 MoE架构训练的自研大模型，主打多任务均衡处理能力。
6. **dots-studio/dots3-note-prev** <https://huggingface.co/dots-studio/dots3-note-prev>
   - 作者：dots-studio | 点赞：242 | 下载：1373
   - 一句话说明：面向笔记场景优化的文本生成模型，适配长文本整理、信息提炼需求。
7. **z-lab/Qwen3.8-27B-DFlash2** <https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2>
   - 作者：z-lab | 点赞：151 | 下载：12235
   - 一句话说明：基于Qwen3.8-27B优化的推测解码版本，原生推理速度提升超2倍。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **Qwen/Qwen3.8-27B** <https://huggingface.co/Qwen/Qwen3.8-27B>
   - 作者：Qwen | 点赞：11728 | 下载：1373584
   - 一句话说明：全榜周点赞第一的多模态对话基座，支持图文输入交互，是当前开源多模态SOTA产品之一。
2. **MiniMaxAI/MiniMax-Music3** <https://huggingface.co/MiniMaxAI/MiniMax-Music3>
   - 作者：MiniMaxAI | 点赞：1099 | 下载：14471
   - 一句话说明：MiniMax推出的文生音乐大模型，生成音质、时长均达到商用级标准。
3. **Qwen/Qwen3.8-27B-FP8** <https://huggingface.co/Qwen/Qwen3.8-27B-FP8>
   - 作者：Qwen | 点赞：633 | 下载：1517643
   - 一句话说明：官方推出的Qwen3.8-27B无损FP8量化版，大幅降低多模态大模型部署门槛。
4. **Lightricks/LTX-2.5** <https://huggingface.co/Lightricks/LTX-2.5>
   - 作者：Lightricks | 点赞：1410 | 下载：611825
   - 一句话说明：开源图像转视频大模型，生成视频清晰度、连贯性达到消费级可用水平。
5. **MiniMaxAI/MiniMax-H3** <https://huggingface.co/MiniMaxAI/MiniMax-H3>
   - 作者：MiniMaxAI | 点赞：4236 | 下载：3308673
   - 一句话说明：全榜下载量前三的文生视频大模型，生成效果媲美头部闭源视频生成服务。
6. **meta-models/Muse-Glimmer-30B** <https://huggingface.co/meta-models/Muse-Glimmer-30B>
   - 作者：meta-models | 点赞：1718 | 下载：478622
   - 一句话说明：30B参数多模态图文对话模型，在视觉问答任务上表现突出。
7. **TenStrip/10Eros-Max** <https://huggingface.co/TenStrip/10Eros-Max>
   - 作者：TenStrip | 点赞：297 | 下载：0
   - 一句话说明：基于MiniMax-H3微调的定向风格视频生成模型，暂未开放权重已积累大量用户关注。
8. **lightx2v/Minimax-h3-Turbo** <https://huggingface.co/lightx2v/Minimax-h3-Turbo>
   - 作者：lightx2v | 点赞：649 | 下载：380072
   - 一句话说明：基于MiniMax-H3优化的高速推理版本，视频生成速度提升3倍以上。

### 🔧 专用模型（工具类、场景专属模型）
1. **froggeric/Qwen-Fixed-Chat-Templates** <https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates>
   - 作者：froggeric | 点赞：1334 | 下载：0
   - 一句话说明：专门修复Qwen全系聊天模板格式错误的工具仓库，解决大量开发者部署时的兼容bug。

### 📦 微调与量化（社区微调、GGUF、AWQ等衍生版本）
1. **unsloth/Qwen3.8-27B-GGUF** <https://huggingface.co/unsloth/Qwen3.8-27B-GGUF>
   - 作者：unsloth | 点赞：2349 | 下载：5126652
   - 一句话说明：Unsloth推出的Qwen3.8-27B GGUF全量化版本，支持llama.cpp本地部署，全榜下载量第一。
2. **orcarouter/Qwen3.8-27B-Uncensored-MLX** <https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX>
   - 作者：orcarouter | 点赞：705 | 下载：2628
   - 一句话说明：针对苹果硅设备优化的去对齐Qwen3.8-27B版本，适配MLX推理框架。
3. **orcarouter/Qwen3.8-27B-Uncensored-FP8** <https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8>
   - 作者：orcarouter | 点赞：675 | 下载：76109
   - 一句话说明：去对齐的FP8量化Qwen3.8-27B版本，移除原生模型的内容安全限制。
4. **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF** <https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF>
   - 作者：JonathanColetti | 点赞：510 | 下载：979768
   - 一句话说明：支持MTP加速推理的去对齐GGUF版本，本地运行速度大幅提升。
5. **HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF** <https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF>
   - 作者：HauhauCS | 点赞：360 | 下载

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*