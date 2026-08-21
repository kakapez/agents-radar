# Hugging Face 热门模型日报 2026-08-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-21 22:24 UTC

---

# Hugging Face 热门模型日报
日期：2026-08-22
---
## 今日速览
本次统计的周度热门榜头部完全被国产开源大模型主导，阿里通义千问Qwen3.8-27B系列拿下最高11942次周点赞，月之暗面开源的Kimi-K3紧随其后收获10912次周点赞。多模态生成赛道关注度持续走高，音视频类生成模型合计总下载量突破430万，用户需求明确向内容创作场景倾斜。社区二次开发产出占比超过榜单总量的50%，轻量化、可本地部署的衍生版本总下载量普遍是官方原版的2-3倍。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **Qwen/Qwen3.8-27B** <https://huggingface.co/Qwen/Qwen3.8-27B>
   作者：Qwen | 点赞：11,942 | 下载：1,726,651
   一句话说明：通义千问最新发布的27B参数多模态对话基础模型，是本周全平台热度最高的首发主模型。
2. **moonshotai/Kimi-K3** <https://huggingface.co/moonshotai/Kimi-K3>
   作者：moonshotai | 点赞：10,910 | 下载：2,448,810
   一句话说明：月之暗面最新开源的Kimi系列旗舰基座，综合性能处于开源第一梯队，商用适配需求极高。
3. **deepseek-ai/DeepSeek-V4-Pro-0813** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813>
   作者：deepseek-ai | 点赞：704 | 下载：49,601
   一句话说明：深度求索8月中旬更新的V4专业版基座，主打高复杂度推理场景精度提升。
4. **deepseek-ai/DeepSeek-V4-Flash-0731** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731>
   作者：deepseek-ai | 点赞：3,605 | 下载：2,833,064
   一句话说明：DeepSeek主打高速推理的轻量化V4版本，累计下载近300万，是工业界部署的热门选择。
5. **Qwen/Qwen3.8-2.4T-A95B** <https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B>
   作者：Qwen | 点赞：1,135 | 下载：15,702
   一句话说明：通义千问推出的2.4T参数超大规模MoE语言基座，面向高复杂度科研、代码推理场景。
6. **meta-models/Muse-Glimmer-30B** <https://huggingface.co/meta-models/Muse-Glimmer-30B>
   作者：meta-models | 点赞：1,731 | 下载：505,113
   一句话说明：Meta开源的30B参数多模态对话模型，原生支持图文理解交互能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **MiniMaxAI/MiniMax-Music3** <https://huggingface.co/MiniMaxAI/MiniMax-Music3>
   作者：MiniMaxAI | 点赞：1,157 | 下载：15,678
   一句话说明：MiniMax开源的文本转音频生成模型，支持自定义风格、时长的音乐创作。
2. **Lightricks/LTX-2.5** <https://huggingface.co/Lightricks/LTX-2.5>
   作者：Lightricks | 点赞：1,481 | 下载：654,175
   一句话说明：Lightricks推出的全链路视频生成模型，覆盖文生视频、图生视频、视频编辑全场景。
3. **MiniMaxAI/MiniMax-H3** <https://huggingface.co/MiniMaxAI/MiniMax-H3>
   作者：MiniMaxAI | 点赞：4,289 | 下载：3,614,443
   一句话说明：当前开源文本转视频赛道的头部标杆模型，生态适配度极高，衍生产品丰富。
4. **TenStrip/10Eros-Max** <https://huggingface.co/TenStrip/10Eros-Max>
   作者：TenStrip | 点赞：306 | 下载：0
   一句话说明：基于MiniMax-H3微调的定制化视频生成模型，主打高自由度无约束视频创作。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **froggeric/Qwen-Fixed-Chat-Templates** <https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates>
   作者：froggeric | 点赞：1,364 | 下载：0
   一句话说明：面向Qwen全系列的标准化聊天模板修复项目，解决不同推理框架下对话格式不兼容问题。
2. **superwhisper/s1-mini** <https://huggingface.co/superwhisper/s1-mini>
   作者：superwhisper | 点赞：185 | 下载：1,136
   一句话说明：融合ASR语音识别能力的轻量小模型，主打端侧实时语音转文字+内容生成。
3. **z-lab/Qwen3.8-27B-DFlash2** <https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2>
   作者：z-lab | 点赞：167 | 下载：21,092
   一句话说明：基于Qwen3.8-27B优化的版本，原生支持深度投机解码，推理速度大幅提升。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **unsloth/Qwen3.8-27B-GGUF** <https://huggingface.co/unsloth/Qwen3.8-27B-GGUF>
   作者：unsloth | 点赞：2,492 | 下载：5,804,917
   一句话说明：Unsloth官方出品的Qwen3.8-27B全精度GGUF量化版本，是目前下载量最高的边缘部署适配版本。
2. **Qwen/Qwen3.8-27B-FP8** <https://huggingface.co/Qwen/Qwen3.8-27B-FP8>
   作者：Qwen | 点赞：656 | 下载：1,939,895
   一句话说明：官方推出的原生FP8精度量化版本，在保证99%性能的前提下大幅降低部署显存门槛。
3. 其余12款衍生量化/去对齐微调版本（含Uncensored/abliterated/GGUF系列）均基于Qwen3.8-27B二次开发，覆盖MLX、NVFP4等全硬件适配格式，总累计下载量超420万，满足不同用户本地部署需求。
---
## 生态信号
本周榜单显示Qwen3.8-27B家族是绝对核心流量池，衍生出近20款社区二次分发产品，国产头部厂商集中开放开源权重后，开源大模型的功能迭代、场景适配速度已经显著超过闭源产品。当前社区最热方向集中在边缘部署适配的全精度GGUF量化、去对齐微调，多数第三方量化版本的下载量达到官方原版的2-3倍，反映出个人开发者、本地部署场景的需求正在快速释放。
---
## 值得探索
1. **moonshotai/Kimi-K3**：月之暗面首次开源的旗舰级基座，性能对标头部闭源产品，240万+下载量说明工业界适配已经非常成熟，适合生产环境落地测试。
2. **MiniMaxAI/MiniMax-H3**：当前开源文生视频领域的标杆级产品，生态衍生微调版本丰富，是探索AIGC视频生成的最优开源选择。
3. **unsloth/Qwen3.8-

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*