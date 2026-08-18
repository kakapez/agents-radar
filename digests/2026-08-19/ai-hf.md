# Hugging Face 热门模型日报 2026-08-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-18 22:22 UTC

---

# Hugging Face 热门模型日报 2026-08-19
统计维度：近7天点赞数排序，覆盖全站30个头部热度模型

---

## 今日速览
本次上榜的热门模型中国产大模型包揽周点赞前两名，阿里通义千问、Moonshot Kimi的头部多模态权重模型单周点赞破万，关注度远超同期海外厂商新品。音视频生成赛道迎来流量高峰，MiniMax旗下视频、音频生成模型的社区适配版本总下载量突破1700万，成为全平台下载量最高的品类。社区衍生生态高度繁荣，头部开源基础模型的量化版、去限制微调版占热门榜比例超4成，端侧部署友好的GGUF、NVFP4格式分发热度持续攀升。AIGC落地端向生产工作流适配的趋势明确，大量ComfyUI专属优化模型入围榜单。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **Qwen/Qwen3.8-2.4T-A95B**
   链接：https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B
   作者：Qwen | 点赞数：1064 | 下载数：11212
   说明：通义千问最新推出的2.4万亿参数级MoE纯文本对话大模型，是当前开源参数规模最大的通用语言模型之一，主打超长上下文与代码生成能力。
2. **deepseek-ai/DeepSeek-V4-Pro-0813**
   链接：https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813
   作者：deepseek-ai | 点赞数：601 | 下载数：30985
   说明：深度求索最新迭代的V4 Pro正式版通用语言模型，优化了数学推理与多工具调用能力，是近期代码开发场景最热门的开源大模型。
3. **deepseek-ai/DeepSeek-V4-Flash-0731**
   链接：https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731
   作者：deepseek-ai | 点赞数：3522 | 下载数：2123462
   说明：DeepSeek V4的轻量高速版本，在保留95%推理效果的前提下将推理速度提升3倍，端侧部署友好，单周下载量突破200万。
4. **nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4**
   链接：https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4
   作者：nvidia | 点赞数：321 | 下载数：269372
   说明：英伟达官方推出的NVFP4原生量化通用对话模型，适配英伟达全系消费级显卡，无需额外转换即可实现硬件加速。
5. **inclusionAI/Ling-3.0-tiny**
   链接：https://huggingface.co/inclusionAI/Ling-3.0-tiny
   作者：inclusionAI | 点赞数：318 | 下载数：9990
   说明：零一万物推出的小体积端侧对话模型，仅3B参数即可实现接近70B大模型的指令跟随效果，主打离线场景低延迟交互。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **Qwen/Qwen3.8-27B**
   链接：https://huggingface.co/Qwen/Qwen3.8-27B
   作者：Qwen | 点赞数：11100 | 下载数：665513
   说明：通义千问最新开源的27B参数多模态理解大模型，支持图文混合输入，兼顾复杂推理能力和落地成本，登顶本周周点赞榜首。
2. **moonshotai/Kimi-K3**
   链接：https://huggingface.co/moonshotai/Kimi-K3
   作者：moonshotai | 点赞数：10825 | 下载数：2226898
   说明：月之暗面首款开源多模态大模型，支持百万级token图文长上下文处理，性能对标自家闭源主力产品，周点赞量仅次于Qwen同系列模型。
3. **MiniMaxAI/MiniMax-H3**
   链接：https://huggingface.co/MiniMaxAI/MiniMax-H3
   作者：MiniMaxAI | 点赞数：4143 | 下载数：2855539
   说明：MiniMax开源的第三代文生视频大模型，支持1080P高清10秒以上视频生成，是当前开源效果最好的通用视频生成模型之一。
4. **meta-models/Muse-Glimmer-30B**
   链接：https://huggingface.co/meta-models/Muse-Glimmer-30B
   作者：meta-models | 点赞数：1679 | 下载数：384097
   说明：Meta全新发布的30B参数多模态大模型，在复杂图文推理任务上性能超越Llama 3系列，近期刚开源就快速冲上热门榜单。
5. **Lightricks/LTX-2.5**
   链接：https://huggingface.co/Lightricks/LTX-2.5
   作者：Lightricks | 点赞数：1216 | 下载数：503632
   说明：知名AI视频厂商Lightricks推出的新一代视频生成模型，支持图生视频、视频编辑等多种任务，生成画面流畅度处于行业第一梯队。
6. **MiniMaxAI/MiniMax-Music3**
   链接：https://huggingface.co/MiniMaxAI/MiniMax-Music3
   作者：MiniMaxAI | 点赞数：953 | 下载数：11745
   说明：MiniMax开源的第三代文生音乐大模型，支持带人声的完整流行歌曲生成，风格覆盖全品类音乐类型。
7. **lightx2v/Minimax-h3-Turbo**
   链接：https://huggingface.co/lightx2v/Minimax-h3-Turbo
   作者：lightx2v | 点赞数：606 | 下载数：300279
   说明：社区基于MiniMax-H3微调的高速版本，视频生成速度提升4倍，单帧生成耗时低于100ms，实时视频生成场景适配性极强。
8. **Gazingstars123/Anima-2.9B**
   链接：https://huggingface.co/Gazingstars123/Anima-2.9B
   作者：Gazingstars123 | 点赞数：246 | 下载数：24893
   说明：社区开源的轻量化二次元文生图模型，仅2.9B参数即可生成符合主流二次元审美风格的高清图片，适配ComfyUI直接调用。
9. **LiquidAI/LFM2.5-VL-3B**
   链接：https://huggingface.co/LiquidAI/LFM2.5-VL-3B
   作者：LiquidAI | 点赞数：173 | 下载数：9101
   说明：LiquidAI推出的3B参数超轻量多模态理解模型，可在边缘嵌入式设备上运行，主打实时视觉问答场景。
10. **TenStrip/10Eros-Max**
    链接：https://huggingface.co/TenStrip/10Eros-Max
    作者：TenStrip | 点赞数：262 | 下载数：0
    说明：社区基于MiniMax-H3微调的成人向视频生成模型，绕过内容对齐限制，近期刚发布就收获大量关注。
11. **Comfy-Org/MiniMax-Music-3**
    链接：https://huggingface.co/Comfy-Org/MiniMax-Music-3
    作者：Comfy-Org | 点赞数：177 | 下载数：285444
    说明：ComfyUI官方适配优化的MiniMax-Music3版本，直接支持ComfyUI工作流拖拽调用，无需额外部署适配。
12. **Comfy-Org/MiniMax-H3**
    链接：https://huggingface.co/Comfy-Org/MiniMax-H3
    作者：Comfy-Org | 点赞数：1423 | 下载数：14641908
    说明：ComfyUI官方适配优化的MiniMax-H3版本，做了显存优化，16G显存即可运行生成高清视频，是本周全平台下载量最高的模型。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **dots-studio/dots3-note-prev**
   链接：https://huggingface.co/dots-studio/dots3-note-prev
   作者：dots-studio | 点赞数：219 | 下载数：1120
   说明：专门面向手写笔记识别、图文笔记整理场景优化的垂直多模态模型，可自动识别扫描版手写文档生成结构化笔记。
2. **froggeric/Qwen-Fixed-Chat-Templates**
   链接：https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates
   作者：froggeric | 点赞数：1251 | 下载数：0
   说明：社区发布的Qwen3全系列通用修复版聊天模板，解决了原生模板在部分推理框架下调用异常的问题，是近期开发者高频使用的工具类模型资源。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **unsloth/Qwen3.8-27B-GGUF**
   链接：https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
   作者：unsloth | 点赞数：1810 | 下载数：3561466
   说明：Unsloth官方出品的Qwen3.8-27B原生多模态GGUF量化版，支持llama.cpp框架本地运行，8G显存即可调用全功能。
2. **Qwen/Qwen3.8-27B-FP8**
   链接：https://huggingface.co/Qwen/Qwen3.8-27B-FP8
   作者：Qwen | 点赞数：561 | 下载数：741011
   说明：通义千问官方发布的Qwen3.8-27B原生FP8量化版本，精度损失不到1%，显存占用降低一半，适配主流推理框架。
3. **orcarouter/Qwen3.8-27B-Uncensored-FP8**
   链接：https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8
   作者：orcarouter | 点赞数：524 | 下载数：45465
   说明：社区基于Qwen3.8-27B去对齐的无限制FP8量化版本，移除所有内容安全限制，支持各类未对齐场景的自由生成。
4. **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**
   链接：https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
   作者：JonathanColetti | 点赞数：407 | 下载数：558767
   说明：社区制作的Qwen3.8-27B无限制GGUF量化版，新增MTP多令牌预测功能，推理速度提升2倍。
5. **unsloth/Qwen3.8-27B-NVFP4**
   链接：https://huggingface.co/unsloth/Qwen3.8-27B-N

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*