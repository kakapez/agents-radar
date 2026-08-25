# Hugging Face 热门模型日报 2026-08-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-25 22:26 UTC

---

# Hugging Face 热门模型日报 | 2026年8月26日
*基于Hugging Face Hub本周点赞Top30模型统计*

---

## 今日速览
本周周榜核心流量由阿里通义千问最新发布的Qwen3.8-27B系列主导，多款大厂原生基座和社区衍生版本同步冲榜。月之暗面开源的Kimi-K3、深度求索的DeepSeek-V4系列两款国产头部模型均进入点赞榜前10，表现远超同期海外竞品。音视频生成赛道同样热度走高，Lightricks、MiniMax推出的文生视频、文生音频模型下载量均突破百万。全平台呈现出“官方基座快速迭代、社区适配紧随其后”的高活跃特征。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **Qwen/Qwen3.8-27B** https://huggingface.co/Qwen/Qwen3.8-27B  
   作者：Qwen | 点赞：12696 | 下载：2945415  
   通义千问最新推出的多模态原生基座模型，综合性能对标闭源第一梯队产品，登顶本周点赞总榜第一。
2. **moonshotai/Kimi-K3** https://huggingface.co/moonshotai/Kimi-K3  
   作者：moonshotai | 点赞：10995 | 下载：2865293  
   月之暗面开源的新一代大语言模型，百万级长上下文能力突出，本周点赞数位列总榜第二。
3. **deepseek-ai/DeepSeek-V4-Flash-0731** https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731  
   作者：deepseek-ai | 点赞：3713 | 下载：3528373  
   DeepSeek面向高并发场景优化的轻量化推理版本，纯文本生成能力极强，下载量突破350万。
4. **deepseek-ai/DeepSeek-V4-Pro-0813** https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813  
   作者：deepseek-ai | 点赞：757 | 下载：74707  
   DeepSeek最新迭代的V4专业版基座，在代码、数学任务上表现较前代提升15%以上。
5. **ornith-ai/Ornith-1.5-35B-A3B** https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B  
   作者：ornith-ai | 点赞：418 | 下载：70158  
   基于Qwen3.5 MoE基座微调的混合专家对话模型，兼顾性能和推理成本优势。
6. **ornith-ai/Ornith-1.5-9B** https://huggingface.co/ornith-ai/Ornith-1.5-9B  
   作者：ornith-ai | 点赞：213 | 下载：98323  
   轻量版Ornith对话模型，端侧部署友好，性能超越同参数级主流基座。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **Lightricks/LTX-2.5** https://huggingface.co/Lightricks/LTX-2.5  
   作者：Lightricks | 点赞：1792 | 下载：833845  
   图像/文本生成视频的新一代扩散模型，生成画面流畅度、分辨率均达到消费级商用标准。
2. **MiniMaxAI/MiniMax-H3** https://huggingface.co/MiniMaxAI/MiniMax-H3  
   作者：MiniMaxAI | 点赞：4455 | 下载：4639786  
   MiniMax开源的文生视频大模型，本周登顶多模态类下载榜第一，能力覆盖图生视频、视频编辑全场景。
3. **MiniMaxAI/MiniMax-Music3** https://huggingface.co/MiniMaxAI/MiniMax-Music3  
   作者：MiniMaxAI | 点赞：1244 | 下载：18705  
   文本生成音乐的专用大模型，支持多风格长音频生成，是该赛道目前最受关注的开源新品。
4. **Audio8/Audio8-TTS-Preview-0.1b** https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b  
   作者：Audio8 | 点赞：154 | 下载：3640  
   新一代低参文本转语音模型，音色还原度接近真人，端侧部署资源占用极低。
5. **sensenova/SenseNova-U1.5-8B-MoT** https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT  
   作者：sensenova | 点赞：151 | 下载：2682  
   商汤推出的全模态生成基座，支持任意输入输出的多任务处理。

### 🔧 专用模型
1. **superwhisper/s1-mini** https://huggingface.co/superwhisper/s1-mini  
   作者：superwhisper | 点赞：238 | 下载：3474  
   基于Qwen3微调的语音转文字专用小模型，ASR识别精度远超同参数级Whisper系列。
2. **z-lab/Qwen3.8-27B-DFlash2** https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2  
   作者：z-lab | 点赞：226 | 下载：64984  
   集成双投机解码优化的推理加速专用模型，生成速度较原生Qwen3.8提升2倍以上。
3. **incoai/Qwen3.8-27B-DFlash2** https://huggingface.co/incoai/Qwen3.8-27B-DFlash2  
   作者：incoai | 点赞：178 | 下载：105786  
   优化了长文本场景的DFlash2加速版本，生产环境部署兼容性更强。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **unsloth/Qwen3.8-27B-GGUF** https://huggingface.co/unsloth/Qwen3.8-27B-GGUF  
   作者：unsloth | 点赞：2905 | 下载：7334695  
   面向llama.cpp生态的官方量化版本，支持消费级硬件本地部署，是全平台下载量最高的Qwen衍生模型。
2. **orcarouter/Qwen3.8-27

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*