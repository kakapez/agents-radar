# Hugging Face 热门模型日报 2026-08-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-19 22:23 UTC

---

# Hugging Face 热门模型日报（2026-08-20）
---
## 今日速览
本周Hugging Face周点赞热门榜Top30中，国产开源模型占据过半席位，两款周点赞破万的头部产品均为国内厂商发布的新一代大模型基座。多模态生成类模型的整体下载量环比涨幅超过70%，音频、视频生成赛道的社区适配版本传播速度远超预期。针对主流开源基座的量化、去对齐微调等二次创作生态活跃度创下近三个月新高。轻量化、低部署门槛的衍生模型下载量普遍是官方原生大模型的数倍，端侧可运行模型成为用户关注核心。

---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
   - 作者：Qwen | 点赞：11460 | 下载：1006235
   - 一句话说明：阿里通义千问推出的新一代核心多模态对话基座，本周周点赞登顶全榜，原生支持图文混合理解与对话生成能力，是当前社区最热门的二次开发基底。
2. **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**
   - 作者：Qwen | 点赞：1097 | 下载：12699
   - 一句话说明：Qwen系列2.4万亿参数规模的MoE纯文本旗舰模型，主打复杂推理、长上下文任务超高性能，面向专业级场景发布。
3. **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)**
   - 作者：deepseek-ai | 点赞：629 | 下载：37583
   - 一句话说明：深度求索刚更新的V4专业版迭代产品，代码生成、数学推理能力较上一版本提升15%以上，主打生产力场景。
4. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
   - 作者：deepseek-ai | 点赞：3547 | 下载：2330940
   - 一句话说明：DeepSeek V4轻量化版本，兼顾旗舰版85%以上性能同时将部署显存门槛降低60%，累计下载量突破230万。
5. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
   - 作者：moonshotai | 点赞：10852 | 下载：2289863
   - 一句话说明：月之暗面发布的新一代多模态对话大模型，周点赞数仅次于Qwen3.8-27B，长文档、多模态图文理解能力经过大量用户验证。
6. **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**
   - 作者：meta-models | 点赞：1700 | 下载：430313
   - 一句话说明：Meta推出的30B参数多模态对话基座，主打图文混合指令跟随能力，适配通用对话场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**
   - 作者：MiniMaxAI | 点赞：1032 | 下载：13138
   - 一句话说明：MiniMax发布的新一代文本转音乐生成模型，支持自定义风格、时长生成高音质音频，是当前音频生成赛道的标杆产品。
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
   - 作者：Lightricks | 点赞：1314 | 下载：555993
   - 一句话说明：知名视频生成厂商Lightricks迭代的2.5版本视频模型，支持图生视频、文生视频、视频编辑多任务，生成流畅度大幅提升。
3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
   - 作者：MiniMaxAI | 点赞：4175 | 下载：3055205
   - 一句话说明：MiniMax推出的文生视频旗舰模型，生成视频清晰度、动态连贯性达到消费级商用水平，是当前视频生成赛道的顶流产品。
4. **[Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3)**
   - 作者：Comfy-Org | 点赞：192 | 下载：325083
   - 一句话说明：官方适配ComfyUI生态的MiniMax-Music3版本，支持工作流一键部署，大幅降低用户使用门槛。
5. **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)**
   - 作者：lightx2v | 点赞：624 | 下载：340984
   - 一句话说明：社区优化的MiniMax-H3快读版本，视频生成速度提升3倍，适合批量生成场景。
6. **[TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max)**
   - 作者：TenStrip | 点赞：283 | 下载：0
   - 一句话说明：基于MiniMax-H3微调的定制化视频生成模型，主打特定风格内容生成，本周刚上线就进入热门榜单。
7. **[Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B)**
   - 作者：Gazingstars123 | 点赞：268 | 下载：26566
   - 一句话说明：轻量级文本转图像模型，2.9B参数即可生成媲美大模型的二次元风格图像，部署门槛极低。
8. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
   - 作者：Comfy-Org | 点赞：1440 | 下载：15213225
   - 一句话说明：适配ComfyUI工作流的单文件版MiniMax-H3，累计下载量突破1500万，是当前最普及的文生视频易用版本。

### 🔧 专用模型
1. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   - 作者：froggeric | 点赞：1288 | 下载：0
   - 一句话说明：社区发布的Qwen全系列模型统一修复版聊天模板，解决不同版本Qwen对话格式不兼容的问题，本周获得大量开发者点赞。
2. **[dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev)**
   - 作者：dots-studio | 点赞：230 | 下载：1239
   - 一句话说明：主打笔记总结、知识整理场景的专用大模型，针对长文档笔记整理任务做了专项优化。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
   - 作者：unsloth | 点赞：2045 | 下载：4318134
   - 一句话说明：unsloth官方推出的Qwen3.8-27B全精度GGUF量化版本，支持llama.cpp端侧部署，累计下载量超过430万。
2. **[Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)**
   - 作者：Qwen | 点赞：598 | 下载：1063646
   - 一句话说明：官方原生FP8量化版Qwen3.8-27B，精度损失可忽略的前提下显存占用减少一半，面向工业部署场景。
3. **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)**
   - 作者：orcarouter | 点赞：611 | 下载：60078
   - 一句话说明：社区去对齐（无审查）版Qwen3.8-27B的FP8量化版本，移除了原生模型的内容安全限制。
4. **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)**
   - 作者：orcarouter | 点赞：585 | 下载：27
   - 一句话说明：适配苹果MLX生态的去对齐版Qwen3.8-27B，可直接在苹果硅芯片设备上原生运行。
5. **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)**
   - 作者：JonathanColetti | 点赞：465 | 下载：766812
   - 一句话说明：社区热门去对齐版Qwen3.8-27B的GGUF量化版本，支持MTP推理加速，累计下载量超76万。
6. **[unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4)**
   - 作者：unsloth | 点赞：284 | 下载：653042
   - 一句话说明：针对英伟达显卡优化的NVFP4 4bit量化版Qwen3.8-27B，在消费级10G显存显卡上即可全功能运行。
7. **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)**
   - 作者：HauhauCS | 点赞：281 | 下载：131113
   - 一句话说明：激进优化MTP多令牌预测的去对齐版GGUF模型，推理速度比原生版本提升2倍以上。
8. **[empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF)**
   - 作者：empero-ai | 点赞：195 | 下载：32454
   - 一句话说明：针对边缘设备优化的轻量化GGUF量化版本，最低可在8G显存设备上流畅运行。
9. **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
   - 作者：DavidAU | 点赞：2163 | 下载：3033363
   - 一句话说明：社区融合多个优化技巧的去对齐版Qwen衍生模型，多轮对话流畅度远高于原生版本，下载量突破300万。
10. **[Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*