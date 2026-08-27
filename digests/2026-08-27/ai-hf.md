# Hugging Face 热门模型日报 2026-08-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-27 02:57 UTC

---

# Hugging Face 热门模型日报
日期：2026-08-27
数据范围：Hugging Face Hub 周点赞数TOP30模型

---

## 今日速览
本次统计周期内国产大模型占据热榜绝对主流位置，阿里通义千问Qwen 3.8系列作为核心底座衍生出十余个上榜衍生版本，成为本周生态最活跃的模型家族。国产头部厂商智谱、DeepSeek、MiniMax、月之暗面均有新品冲进热榜前20，开源发布节奏完全对齐自家闭源版本迭代速度。视频、音频类生成模型下载量呈现爆发式增长，头部文生视频开源方案下载量接近500万。社区针对主流底座的量化、去对齐微调、周边工具链完善活动密集，端侧部署相关的衍生工具热度持续走高。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **Qwen/Qwen3.8-27B**
   链接: https://huggingface.co/Qwen/Qwen3.8-27B
   作者: Qwen | 点赞: 12,912 | 下载: 3,298,569
   一句话说明：通义千问官方开源的旗舰级大语言模型，是本周热度最高的基础底座，衍生出大量社区二次开发版本。
2. **zai-org/GLM-5.3-Flash**
   链接: https://huggingface.co/zai-org/GLM-5.3-Flash
   作者: zai-org | 点赞: 918 | 下载: 0
   一句话说明：智谱最新发布的轻量化高速大模型，尚未开放下载就进入热榜，是本周关注度最高的待发布新品。
3. **deepseek-ai/DeepSeek-V4-Flash-0731**
   链接: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731
   作者: deepseek-ai | 点赞: 3,740 | 下载: 3,857,140
   一句话说明：深度求索推出的低延迟高吞吐推理专用版本大模型，主打生产环境高并发对话场景。
4. **moonshotai/Kimi-K3**
   链接: https://huggingface.co/moonshotai/Kimi-K3
   作者: moonshotai | 点赞: 11,019 | 下载: 2,921,257
   一句话说明：月之暗面开源的最新旗舰大模型，周点赞量仅次于Qwen3.8-27B，性能对齐自家闭源商用版本。
5. **ornith-ai/Ornith-1.5-35B-A3B**
   链接: https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B
   作者: ornith-ai | 点赞: 455 | 下载: 83,342
   一句话说明：基于Qwen3.5 MoE底座二次开发的开源大模型，主打超长上下文推理能力优化。
6. **ornith-ai/Ornith-1.5-9B**
   链接: https://huggingface.co/ornith-ai/Ornith-1.5-9B
   作者: ornith-ai | 点赞: 229 | 下载: 119,053
   一句话说明：上述系列的9B参数轻量化版本，平衡推理性能和端侧部署门槛。
7. **superwhisper/s1-mini**
   链接: https://huggingface.co/superwhisper/s1-mini
   作者: superwhisper | 点赞: 252 | 下载: 3,921
   一句话说明：集成ASR能力的端侧小参数模型，主打语音、文本一体化处理场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **Qwen/Qwen3.8-Flash-Next**
   链接: https://huggingface.co/Qwen/Qwen3.8-Flash-Next
   作者: Qwen | 点赞: 3,673 | 下载: 2,551
   一句话说明：通义千问最新的轻量化多模态大模型，主打图文理解高速推理场景。
2. **Lightricks/LTX-2.5**
   链接: https://huggingface.co/Lightricks/LTX-2.5
   作者: Lightricks | 点赞: 1,870 | 下载: 894,094
   一句话说明：知名文生图厂商Lightricks推出的新一代视频生成模型，支持图生视频、视频编辑多场景需求。
3. **MiniMaxAI/MiniMax-H3**
   链接: https://huggingface.co/MiniMaxAI/MiniMax-H3
   作者: MiniMaxAI | 点赞: 4,502 | 下载: 4,793,098
   一句话说明：MiniMax开源的文生视频旗舰模型，是本周热度最高的开源视频生成方案。
4. **MiniMaxAI/MiniMax-Music3**
   链接: https://huggingface.co/MiniMaxAI/MiniMax-Music3
   作者: MiniMaxAI | 点赞: 1,263 | 下载: 19,501
   一句话说明：MiniMax推出的音乐生成大模型，支持文本直接生成高质量完整曲目。
5. **sensenova/SenseNova-U1.5-8B-MoT**
   链接: https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT
   作者: sensenova | 点赞: 172 | 下载: 3,264
   一句话说明：商汤开源的全模态生成模型，支持任意输入输出模态转换。
6. **alibaba-pai/MiniMax-H3-Fun-Controlnet-Union**
   链接: https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union
   作者: alibaba-pai | 点赞: 139 | 下载: 3,148
   一句话说明：阿里PAI团队基于MiniMax H3二次开发的视频ControlNet套件，支持更精细的视频生成效果控制。
7. **Audio8/Audio8-TTS-Preview-0.1b**
   链接: https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b
   作者: Audio8 | 点赞: 174 | 下载: 4,257
   一句话说明：新一代端侧TTS预览模型，支持超低资源占用的自然语音生成。

### 🔧 专用模型（代码、数学、医疗、嵌入）
本周TOP30热榜暂无独立的垂直领域专用模型上榜，所有优化方向均围绕通用大模型和多模态生成场景展开。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **unsloth/Qwen3.8-27B-GGUF**
   链接: https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
   作者: unsloth | 点赞: 3,005 | 下载: 7,638,591
   一句话说明：Unsloth官方推出的全量化Qwen3.8-27B版本，是本周下载量最高的衍生模型，全硬件支持llama.cpp端侧部署。
2. **OBLITERATUS/Qwen3.8-27B-OBLITERATED**
   链接: https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED
   作者: OBLITERATUS | 点赞: 814 | 下载: 468,746
   一句话说明：社区热门的去对齐微调版本，提供GGUF、MLX多格式分发。
3. **orcarouter/Qwen3.8-27B-Uncensored-MLX**
   链接: https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX
   作者: orcarouter | 点赞: 1,142 | 下载: 79,395
   一句话说明：适配苹果硅硬件的无对齐微调版本，主打Mac端原生部署。
4. **orcarouter/Qwen3.8-27B-Uncensored-FP8**
   链接: https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8
   作者: orcarouter | 点赞: 1,179 | 下载: 269,805
   一句话说明：FP8精度的无对齐微调版本，消费级显卡即可流畅运行。
5. **unsloth/Qwen3.8-Flash-Next-GGUF**
   链接: https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF
   作者: unsloth | 点赞: 356 | 下载: 0
   一句话说明：Qwen3.8-Flash-Next的量化版本，尚未开放下载就获得数百点赞。
6. **HauhauCS/Qwen3.8-

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*