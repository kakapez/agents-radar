# Hugging Face 热门模型日报 2026-06-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-28 23:02 UTC

---

# Hugging Face 热门模型日报（2026-06-29）
---
## 今日速览
本周Hugging Face周点赞榜榜首为智源开源的GLM-5.2大模型，拿下2807次周赞表现突出。头部梯队中百度Unlimited-OCR、MiniMax M3多模态模型、英伟达LocateAnything等厂商官方新模型全部进入千赞区间，用户关注度极高。端侧可部署的量化版本下载量爆发，多个GGUF格式模型单周下载量突破百万。国内头部AI厂商贡献了近半数上榜项目，在全球开源生态的参与度持续提升。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   作者：zai-org | 周点赞：2807 | 周下载：118651  
   智源开源的原生MoE架构大模型，主打对话与通用推理能力，登上本周周赞榜第一，生态热度全面提升。
2. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**  
   作者：Qwen | 周点赞：398 | 周下载：23697  
   通义千问团队开源的Agent专属大模型，支持复杂世界模拟，是智能体开发的热门基座。
3. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**  
   作者：deepseek-ai | 周点赞：174 | 周下载：373  
   DeepSeek最新开源的分布式训练优化版大模型，主打推理效率提升，附带顶会论文技术说明。
4. **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)**  
   作者：nvidia | 周点赞：154 | 周下载：45762  
   英伟达官方做硬件适配优化的GLM-5.2低精度版本，可在NVIDIA硬件上实现极致推理速度。
5. **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**  
   作者：microsoft | 周点赞：369 | 周下载：6779  
   微软开源的4B小上下文增强模型，主打长文本快速检索能力，适合嵌入轻量子智能体。
6. **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**  
   作者：LiquidAI | 周点赞：141 | 周下载：12384  
   仅230M参数的超小大模型，主打极低资源占用下的基础文本生成能力，适配嵌入式场景。
7. **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**  
   作者：Chunjiang-Intelligence | 周点赞：123 | 周下载：1409  
   基于DeepSeek V4微调的专属网安方向大模型，主打网络安全场景专项能力。
8. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**  
   作者：empero-ai | 周点赞：523 | 周下载：52492  
   基于Qwen3.5微调的非量化全精度大模型，主打长上下文叙事能力。
9. **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)**  
   作者：deepreinforce-ai | 周点赞：227 | 周下载：5814  
   基于Qwen3.5的9B开源大模型，支持多模态输入，采用MIT宽松协议。
10. **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)**  
    作者：deepreinforce-ai | 周点赞：200 | 周下载：19635  
    基于Qwen3.5 MoE的35B参数大模型，全开源可商用，适配绝大多数推理场景。
11. **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**  
    作者：deepreinforce-ai | 周点赞：144 | 周下载：1116  
    超大规模397B参数开源MoE模型，是当前参数量级最高的全开源大模型之一。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
   作者：baidu | 周点赞：1226 | 周下载：295064  
   百度开源的全场景通用OCR模型，支持任意场景文字提取，无识别范围限制，实用性极强。
2. **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**  
   作者：MiniMaxAI | 周点赞：1260 | 周下载：188314  
   MiniMax最新开源的多模态大模型，图像理解能力对标闭源头部产品，本周新发布流量极高。
3. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**  
   作者：nvidia | 周点赞：734 | 周下载：67419  
   英伟达开源的流式语音识别模型，仅0.6B参数，支持低延迟实时转写，适配语音交互场景。
4. **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**  
   作者：krea | 周点赞：351 | 周下载：27631  
   极速版文生图大模型，生成速度较传统SD系列提升5倍以上，是当前实时出图的热门选择。
5. **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)**  
   作者：krea | 周点赞：229 | 周下载：22622  
   Krea 2文生图的原生裸模型，无对齐限制，支持开发者二次微调自定义能力。
6. **[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)**  
   作者：Comfy-Org | 周点赞：175 | 周下载：10  
   ComfyUI官方适配的Krea2工作流包，一键导入即可在Comfy生态中调用新文生图能力。
7. **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**  
   作者：fal | 周点赞：92 | 周下载：0  
   开源视频生成模型LTX的3D写实风格LoRA，专门优化真实感3D内容生成效果。

### 🔧 专用模型（代码、数学、定位等垂直领域）
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   作者：nvidia | 周点赞：2432 | 周下载：646451  
   英伟达最新开源的通用图像定位小模型，仅3B参数即可支持任意目标框定位，是计算机视觉领域的新标杆。
2. **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**  
   作者：WeiboAI | 周点赞：743 | 周下载：59337  
   微博AI开源的3B数学推理小模型，主打轻量级场景下的

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*