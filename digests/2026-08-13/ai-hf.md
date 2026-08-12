# Hugging Face 热门模型日报 2026-08-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-12 22:40 UTC

---

# Hugging Face 热门模型日报（2026-08-13）
---
## 今日速览
2026年8月13日Hugging Face周榜Top30中，多模态内容生成类模型热度首次全面超越纯文本大模型。本周Moonshot发布的Kimi-K3以10577的周点赞断层登顶，成为首个周点赞破万的多模态基座模型。国产视频生成模型MiniMax-H3带动超过10款衍生微调、适配版本入榜，形成完整的社区生态。百度开源的Unlimited-OCR下载量近300万，登顶本周专用工具类模型热度榜首。社区主导的GGUF量化、ComfyUI适配已成为热门模型快速下沉到端侧用户的标准链路。

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **deepseek-ai/DeepSeek-V4-Flash-0731** https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731  
   作者：deepseek-ai | 点赞：3229 | 下载：1048685  
   一句话说明：深度求索最新发布的高速版文本生成基座，推理速度显著提升，是当前开源社区最主流的商用大模型之一。
2. **Qwen/Qwen3.8-2.4T-A95B** https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B  
   作者：Qwen | 点赞：455 | 下载：978  
   一句话说明：通义千问推出的超大参数混合专家文本基座，主打高效果通用对话能力，刚上线就进入周榜队列。
3. **LiquidAI/LFM2.5-2.6B** https://huggingface.co/LiquidAI/LFM2.5-2.6B  
   作者：LiquidAI | 点赞：579 | 下载：93668  
   一句话说明：主打轻量部署的小尺寸高效大模型，2.6B参数即可实现接近7B模型的效果，深受端侧开发者欢迎。
4. **nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4** https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4  
   作者：nvidia | 点赞：200 | 下载：19250  
   一句话说明：英伟达推出的FP4量化高效大模型，针对NVIDIA硬件做了专属加速优化，推理成本大幅下降。
5. **deepgrove/maple-preview** https://huggingface.co/deepgrove/maple-preview  
   作者：deepgrove | 点赞：343 | 下载：2049  
   一句话说明：新开源的混合专家架构预览版大模型，主打低幻觉长文本生成能力。
6. **inclusionAI/Ling-3.0-flash** https://huggingface.co/inclusionAI/Ling-3.0-flash  
   作者：inclusionAI | 点赞：314 | 下载：6148  
   一句话说明：云从科技开源的高速版大语言模型，主打高并发商用场景部署。
7. **nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16** https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16  
   作者：nvidia | 点赞：111 | 下载：15740  
   一句话说明：英伟达同系列全精度BF16版本基座，适合对效果要求高、硬件资源充足的场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **moonshotai/Kimi-K3** https://huggingface.co/moonshotai/Kimi-K3  
   作者：moonshotai | 点赞：10577 | 下载：1565484  
   一句话说明：月之暗面开源的旗舰级多模态大模型，周点赞断层第一，支持超长图文理解，是当前开源领域性能最强的多模态基座之一。
2. **MiniMaxAI/MiniMax-H3** https://huggingface.co/MiniMaxAI/MiniMax-H3  
   作者：MiniMaxAI | 点赞：3705 | 下载：83484  
   一句话说明：MiniMax开源的旗舰级文生/图生视频基座，生成视频时长、画质、连贯性均达到行业顶级水平，是本周热度最高的生成类模型。
3. **meta-models/Muse-Glimmer-30B** https://huggingface.co/meta-models/Muse-Glimmer-30B  
   作者：meta-models | 点赞：1278 | 下载：0  
   一句话说明：Meta最新开源的多模态对话大模型，主打图文混合交互能力，刚发布就获得超高关注度。
4. **Lightricks/LTX-2.5** https://huggingface.co/Lightricks/LTX-2.5  
   作者：Lightricks | 点赞：553 | 下载：39  
   一句话说明：知名生成AI公司Lightricks推出的视频生成模型，主打极高速短视频生成效果。
5. **lightx2v/Minimax-h3-Turbo** https://huggingface.co/lightx2v/Minimax-h3-Turbo  
   作者：lightx2v | 点赞：406 | 下载：20376  
   一句话说明：社区基于MiniMax-H3微调的Turbo加速版，视频生成速度提升3倍以上，适合实时生成场景。
6. **endless-frontier/BigBang-v1** https://huggingface.co/endless-frontier/BigBang-v1  
   作者：endless-frontier | 点赞：178 | 下载：708  
   一句话说明：基于通义千问多模态基座二次开发的开源多模态模型，主打创意内容生成场景。
7. **ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot** https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot  
   作者：ethanfel | 点赞：474 | 下载：0  
   一句话说明：社区适配ComfyUI的INT8量化版Qwen3-VL多模态大模型，可直接在可视化工作流中调用。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **baidu/Unlimited-OCR** https://huggingface.co/baidu/Unlimited-OCR  
   作者：baidu | 点赞：4039 | 下载：2892191  
   一句话说明：百度开源的通用无限域OCR模型，支持任意语言、任意场景的文本识别，性能远超现有开源OCR方案。
2. **nvidia/NVIDIA-NemotronLabs-VoiceChat-11B** https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B  
   作者：nvidia | 点赞：349 | 下载：653  
   一句话说明：英伟达推出的端到端语音对话专用模型，支持实时语音输入输出的端侧部署。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **Comfy-Org/MiniMax-H3** https://huggingface.co/Comfy-Org/MiniMax-H3  
   作者：Comfy-Org | 点赞：1253 | 下载：6798796  
   一句话说明：官方适配ComfyUI的MiniMax-H3分发版本，累计下载近700万，普通用户无需配置即可搭建可视化视频生成工作流。
2. **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF** https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF  
   作者：DavidAU | 点赞：1951 | 下载：2521093  
   一句话说明：社区知名开发者DavidAU发布的无审查版Qwen3 GGUF量化大模型，主打高自由度创意文本生成。
3. **unsloth/Muse-Glimmer-30B-GGUF** https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF  
   作者：unsloth | 点赞：350 | 下载：0  
   一句话说明：Unsloth团队第一时间推出的Muse-Glimmer 30B GGUF量化版，支持普通PC本地部署运行。
4. **meta-models/Muse-Glimmer-30B-GGUF** https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF  
   作者：meta-models | 点赞：233 | 下载：0  
   一句话说明：官方发布的Muse-Glimmer 30B GGUF量化版，兼容所有主流端侧推理引擎。
5. **unsloth/DeepSeek-V4-Flash-0731-GGUF** https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF  
   作者：unsloth | 点赞：662 | 下载：207990  
   一句话说明：Unsloth出品的DeepSeek-V4 GGUF量化版，体积缩小70%性能损失极小，是端侧部署的首选版本。
6. **larryvrh/MiniMax-H3-Turbo-Lora** https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora  
   作者：larryvrh | 点赞：694 | 下载：0  
   一句话说明：社区开源的MiniMax-H3 Turbo版本LoRA适配器，无需重训练即可给原生基座提速。
7. **drbaph/MiniMax-H3-Turbo-Lora-ComfyUI** https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI  
   作者：drbaph | 点赞：297 | 下载：0  
   一句话说明：适配ComfyUI工作流的MiniMax-H3 Turbo LoRA，可视化界面即可一键切换加速

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*