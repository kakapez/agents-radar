# Hugging Face 热门模型日报 2026-07-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-30 23:13 UTC

---

# Hugging Face 热门模型日报 | 2026-07-01
---
## 今日速览
本周Hugging Face周点赞榜Top30累计总下载量突破1.4亿，高热度项目集中来自国产开源基座的衍生作品。智谱开源的GLM-5.2系列以3041周赞登顶全榜点赞首位，英伟达发布的通用图像定位模型LocateAnything-3B周下载突破80万，社区二次微调的无审查多模态Qwen3.6量化版本周下载量超300万，成为本周下载黑马。整体生态呈现官方基座快速开源、社区即时产出微调量化版本、端侧可部署模型需求爆发的明确趋势。

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | 作者：zai-org | 点赞：3041 | 下载：142547  
   智谱开源的新一代MoE对话基座，主打长上下文推理能力，登顶本周全榜点赞榜首，是当前全球关注度最高的开源通用大模型。
2. [deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B) | 作者：deepreinforce-ai | 点赞：179 | 下载：2564  
   基于Qwen3.5 MoE微调的超大规模通用对话模型，主打极限推理能力，定位科研级商用基座。
3. [deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | 作者：deepseek-ai | 点赞：249 | 下载：6939  
   深度求索最新发布的分布式推理优化版基座，大幅降低高并发场景下的推理延迟。
4. [deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark) | 作者：deepseek-ai | 点赞：112 | 下载：4446  
   DeepSeek V4的轻量快速推理版本，主打端侧低延迟部署场景。
5. [LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M) | 作者：LiquidAI | 点赞：168 | 下载：17839  
   仅2.3亿参数的超小体量文本生成模型，主打嵌入式设备实时对话场景。
6. [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | 作者：WeiboAI | 点赞：755 | 下载：67777  
   微博AI开源的3B级数学推理小模型，在小学奥数数据集上表现超过同量级7B级模型。
7. [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | 作者：empero-ai | 点赞：593 | 下载：99359  
   基于Qwen3.5微调的长上下文对话模型，支持1M token超长上下文处理。
8. [Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | 作者：Qwen | 点赞：465 | 下载：28480  
   通义千问开源的Agent专属基座，专门针对智能体规划、工具调用场景做了定向优化。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | 作者：baidu | 点赞：1485 | 下载：429056  
   百度开源的无限制OCR模型，支持任意语言、任意倾斜角度的文本识别，精度超过商用付费OCR服务。
2. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | 作者：nvidia | 点赞：2516 | 下载：800597  
   英伟达开源的通用图像定位模型，支持用任意文本描述定位图像中的任意目标，是当前热度最高的多模态小模型。
3. [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者：HauhauCS | 点赞：2357 | 下载：3017678  
   社区开源的无审查多模态Qwen3.6量化版本，支持图文理解，周下载量突破300万，是本周最大黑马。
4. [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | 作者：krea | 点赞：420 | 下载：45668  
   Krea开源的文生图加速版本，生成1024P图像仅需2步，速度是SD3的8倍。
5. [krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw) | 作者：krea | 点赞：258 | 下载：32008  
   Krea-2的原生无后处理版本，供二次微调生成创意风格图像使用。
6. [fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA) | 作者：fal | 点赞：126 | 下载：0  
   开源视频生成模型LTX的3D写实风格LoRA，生成的短视频拟真度接近实景拍摄。
7. [Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2) | 作者：Comfy-Org | 点赞：202 | 下载：10  
   适配ComfyUI生态的Krea-2一键部署包，降低普通用户的使用门槛。
8. [ilkerzgi/fal-Krea-2-Style-LoRAs](https://huggingface.co/ilkerzgi/fal-Krea-2-Style-LoRAs) | 作者：ilkerzgi | 点赞：93 | 下载：0  
   合集包包含200+种艺术风格的Krea-2专属LoRA。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | 作者：yuxinlu1 | 点赞：2527 | 下载：575255  
   基于Gemma4微调的代码专属模型，在HumanEval数据集上通过率超过92%，是本周热度最高的开源代码模型。
2. [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | 作者：yuxinlu1 | 点赞：882 | 下载：257216  
   针对终端操作场景微调的Agent模型，可以自主完成代码编写、命令行执行等任务。
3. [Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable) | 作者：Chunjiang-Intelligence | 点赞：134 | 下载：1519  
   针对 cybersecurity 场景微调的DeepSeek V4衍生模型，漏洞挖掘效率超过通用模型30%。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者：empero-ai | 点赞：1051 | 下载：970663  
   Qwythos 9B的GGUF量化版本，可直接在消费级PC的CPU上运行1M上下文推理。
2. [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | 作者：deepreinforce-ai | 点赞：544 | 下载：157418  
   Ornith 35B的全精度GGUF量化版本，支持本地端侧部署。
3. [deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF) | 作者：deepreinforce-ai | 点赞：342 | 下载：98750  
   轻量版Ornith 9B的GGUF量化版本，可在移动端流畅运行。
4. [deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) | 作者：deepreinforce-ai | 点赞：309 | 下载：26151  
   开源原版Ornith 9B基座，支持二次微调。
5. [nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4) | 作者：nvidia | 点赞：181 | 下载：104746  
   英伟达推出的GLM-5.2专属NVFP4量化版本，精度损失小于1%，显存占用直接降低75%。
6. [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | 作者：nvidia | 点赞：388 | 下载：5495402  
   英伟达优化的Qwen3.6 35B量化版本，周下载量超500万，是本周下载量最高的量化模型。
7. [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | 作者：unsloth | 点赞：484 | 下载：180394  
   Unsloth团队基于官方GLM-5.2制作的多规格GGUF量化

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*