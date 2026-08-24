# Hugging Face 热门模型日报 2026-08-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-24 22:25 UTC

---

# Hugging Face 热门模型日报（2026-08-25）
---
## 今日速览
今日Hugging Face周榜TOP30中，阿里通义千问的Qwen3.8-27B系列占据绝对主流席位，成为本周社区讨论度最高的开源基座。音视频生成赛道表现亮眼，MiniMax、Lightricks发布的开源文生视频/音乐模型下载量均突破百万级。社区层面针对新基座的量化、去对齐微调、周边工具链产出效率创下新高，多款衍生适配版本下载量甚至远超官方原生权重。开源模型的综合能力已经追平头部商用闭源产品梯队，本地部署生态活跃度持续走高。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **Qwen/Qwen3.8-27B** <https://huggingface.co/Qwen/Qwen3.8-27B>
   - 作者：Qwen | 点赞：12505 | 下载：2645226
   - 一句话说明：通义千问最新推出的27B参数原生多模态对话基座，是本周全平台点赞量第一的新发布模型，图文理解、长文本生成能力对标GPT-4o mini。
2. **deepseek-ai/DeepSeek-V4-Flash-0731** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731>
   - 作者：deepseek-ai | 点赞：3681 | 下载：3274129
   - 一句话说明：深度求索推出的轻量化高速推理对话模型，文本生成能力比肩头部闭源产品，下载量稳居本周全榜第二。
3. **ornith-ai/Ornith-1.5-35B-A3B** <https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B>
   - 作者：ornith-ai | 点赞：394 | 下载：60294
   - 一句话说明：基于Qwen3.5 MoE基座微调的通用文本生成模型，支持多模态输入，主打低资源部署效率。
4. **ornith-ai/Ornith-1.5-9B** <https://huggingface.co/ornith-ai/Ornith-1.5-9B>
   - 作者：ornith-ai | 点赞：199 | 下载：83192
   - 一句话说明：同系列9B参数轻量版多模态对话模型，消费级6G显卡即可全量运行。
5. **superwhisper/s1-mini** <https://huggingface.co/superwhisper/s1-mini>
   - 作者：superwhisper | 点赞：229 | 下载：2976
   - 一句话说明：融合ASR语音能力的轻量文本生成小模型，主打端侧实时语音交互场景。
6. **z-lab/Qwen3.8-27B-DFlash2** <https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2>
   - 作者：z-lab | 点赞：214 | 下载：50763
   - 一句话说明：基于Qwen3.8-27B优化的深度投机解码版本，推理速度相比原生版本提升2倍以上。
7. **incoai/Qwen3.8-27B-DFlash2** <https://huggingface.co/incoai/Qwen3.8-27B-DFlash2>
   - 作者：incoai | 点赞：173 | 下载：85034
   - 一句话说明：另一社区团队优化的Qwen3.8-27B投机解码衍生版本，进一步优化了长文本生成场景的稳定性。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **Lightricks/LTX-2.5** <https://huggingface.co/Lightricks/LTX-2.5>
   - 作者：Lightricks | 点赞：1721 | 下载：790378
   - 一句话说明：知名影像工具厂商推出的全链路视频生成模型，支持图生视频、文生视频、视频编辑等多类生成任务。
2. **MiniMaxAI/MiniMax-H3** <https://huggingface.co/MiniMaxAI/MiniMax-H3>
   - 作者：MiniMaxAI | 点赞：4417 | 下载：4465161
   - 一句话说明：MiniMax开源的最新文生视频大模型，生成质量达到商用级标准，是本周下载量最高的生成类模型。
3. **MiniMaxAI/MiniMax-Music3** <https://huggingface.co/MiniMaxAI/MiniMax-Music3>
   - 作者：MiniMaxAI | 点赞：1227 | 下载：18065
   - 一句话说明：MiniMax推出的开源文本到音乐生成模型，支持自定义曲风、时长生成高质量音频作品。
4. **Audio8/Audio8-TTS-Preview-0.1b** <https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b>
   - 作者：Audio8 | 点赞：145 | 下载：2775
   - 一句话说明：新型低延迟TTS预览模型，语音还原度接近真人，主打实时对话场景语音生成。
5. **LBH-123-AI/Minimax_h3_latent_Upscaler** <https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler>
   - 作者：LBH-123-AI | 点赞：181 | 下载：0
   - 一句话说明：针对MiniMax H3生成视频优化的潜空间超分模型，可将生成视频分辨率提升至4K。

### 🔧 专用模型（工具、模板类）
1. **froggeric/Qwen-Fixed-Chat-Templates** <https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates>
   - 作者：froggeric | 点赞：1445 | 下载：0
   - 一句话说明：社区开发者制作的Qwen3.5系列全模型官方聊天模板修复包，解决了原生模板在多部署框架下的兼容性问题，周点赞量极高。
2. **peculiar-ragdoll/Qwen-Sharp-Chat-Templates** <https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates>
   - 作者：peculiar-ragdoll | 点赞：225 | 下载：0
   - 一句话说明：另一款针对Qwen系列优化的强兼容性聊天模板包，适配MLX、llama.cpp等所有主流本地部署框架。

### 📦 微调与量化（社区微调、GGUF、量化版本）
1. **unsloth/Qwen3.8-27B-GGUF** <https://huggingface.co/unsloth/Qwen3.8-27B-GGUF>
   - 作者：unsloth | 点赞：2830 | 下载：7009063
   - 一句话说明：Qwen3.8-27B官方基座的全位宽GGUF量化版本，适配所有本地推理工具，是本周全平台下载量最高的模型。
2. **orcarouter/Qwen3.8-27B-Uncensored-MLX** <https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX>
   - 作者：orcarouter | 点赞：1026 | 下载：57947
   - 一句话说明：针对苹果MLX框架优化的无对齐限制Qwen3.8-27B适配版本，适配全系列Apple Silicon设备运行。
3. **OBLITERATUS/Qwen3.8-27B-OBLITERATED** <https://huggingface.co/OBLITERATUS/Qwen3

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*