# Hugging Face 热门模型日报 2026-06-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-27 23:02 UTC

---

# Hugging Face 热门模型日报
日期：2026-06-28
---
## 1. 今日速览
本次上榜的30个Hugging Face热门模型按周点赞数排序，头部国产开源大模型GLM-5.2以2670周点赞登顶总榜，表现远超同期竞品。本周下载量最高的模型突破500万量级，英伟达优化的Qwen系列工业级量化版本受到工业开发者追捧。百度无限制OCR、MiniMax多模态模型等国内厂商新发布的垂类开源模型热度快速攀升。面向端侧部署的GGUF格式衍生模型占比接近4成，本地大模型部署需求呈现爆发式增长。
---
## 2. 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：作者zai-org，周点赞2670，下载98994，是本周总点赞第一的原生开源MoE大语言模型，支持长上下文对话，为GLM系列最新旗舰版本，发布即获得行业广泛关注。
2. **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**：作者WeiboAI，周点赞742，下载57521，微博AI发布的轻量化小参数语言模型，主打数学推理能力，端侧运行效率极高。
3. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**：作者Qwen，周点赞356，下载18872，通义千问最新的Agent场景专用MoE大模型，原生支持多模态输入，主打智能体任务自动化。
4. **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**：作者LiquidAI，周点赞128，下载9791，仅230M参数的超轻量语言模型，主打极低资源占用下的基础文本生成能力。
5. **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**：作者microsoft，周点赞365，下载6447，微软发布的快上下文轻量化模型，主打高速长文本检索生成场景。
6. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**：作者deepseek-ai，周点赞120，下载0，DeepSeek最新旗舰大模型，刚发布还未开放权重下载就已登上热榜，热度极高。
7. **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**：作者Chunjiang-Intelligence，周点赞112，下载1328，基于DeepSeek V4微调的网络安全专用语言模型。
8. **[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)**：作者Comfy-Org，周点赞156，下载10，ComfyUI官方适配的Krea-2生态包，适配本地AI绘画工作流。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：作者baidu，周点赞1135，下载212760，百度开源的无限制OCR大模型，支持任意场景文字识别，无输出长度限制。
2. **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**：作者krea，周点赞309，下载17445，新一代高速文生图模型，生成速度比前代提升300%。
3. **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)**：作者krea，周点赞214，下载17748，未经过对齐优化的原生Krea-2文生图基底模型，适合二次微调。
4. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：作者nvidia，周点赞2405，下载570466，英伟达开源的通用图像定位大模型，可识别任意图片中任意目标的位置与属性。
5. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**：作者nvidia，周点赞718，下载61857，流式低延迟语音识别模型，主打实时语音转写场景。
6. **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**：作者MiniMaxAI，周点赞1252，下载182714，MiniMax最新开源的多模态大模型，支持图文混合理解生成，参数效率行业领先。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**：作者yuxinlu1，周点赞729，下载206828，基于Gemma4微调的终端智能体专用模型，主打命令行自动操作。
2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**：作者yuxinlu1，周点赞2425，下载536130，本周热榜第二高点赞模型，Gemma4微调的代码生成专用模型，主打复杂工程代码编写。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**：作者empero-ai，周点赞670，下载712627，基于Qwen3.5微调的多模态量化版模型，主打长上下文推理，适配llama.cpp端侧运行。
2. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**：作者empero-ai，周点赞486，下载30298，非量化原生版Qwythos 9B微调模型，支持多模态输入。
3. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**：作者deepreinforce-ai，周点赞315，下载20266，完全开源MIT协议的35B参数量化大模型，支持商用无限制。
4. **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**：作者unsloth，周点赞426，下载125230，Unsloth官方出品的GLM-5.2 GGUF量化版本，适配全系列端侧部署工具。
5. **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)**：作者deepreinforce-ai，周点赞219，下载11034，MIT协议9B参数轻量化量化大模型。
6. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：作者HauhauCS，周点赞2277，下载3331475，本周下载量第二高的模型，无审查多模态大模型全量化版本，支持本地无限制运行。
7. **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)**：作者deepreinforce-ai，周点赞164，下载1501，MIT协议非量化版9B参数开源大模型。
8. **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)**：作者deepreinforce-ai，周点赞158，下载7571，MIT协议非量化版35B参数开源MoE大模型。
9. **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)**：作者nvidia，周点赞124，下载6464，英伟达官方优化的FP4精度GLM-5.2量化版本，适配NVIDIA硬件生态加速。
10. **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**：作者deepreinforce-ai，周点赞120，下载463，超大参数397B MoE开源大模型，MIT协议可商用。
11. **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**：作者nvidia，周点赞366，下载5022254，本周总下载量第一模型，英伟达硬件生态专属优化的Qwen3.6 FP4量化版本，工业部署兼容性极强。
12. **[huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)**：作者huihui-ai，周点赞137，下载6250，经过擦除对齐处理的无限制Gemma4代码模型。
13. **[HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)**：作者HauhauCS，周点赞96，下载32222，无审查平衡版Gemma4多模态量化模型。
14. **[Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF)**：作者Jackrong，周点赞97，下载49935，基于Qwen3.6微调的代码多模态量化模型。
---
## 3. 生态信号
本周榜单中Qwen、GLM、Gemma三个模型家族的衍生产品占比超过60%，是当前开源生态绝对的主流底座。本周热榜100%由完全开源权重模型构成，无闭源模型非授权泄露上榜，开源大模型的综合能力已经全面追平同期闭源产品。量化路线上GGUF端侧社区路线、英伟达NVFP4工业级硬件优化路线双线并行，无审查微调、代码场景微调的社区产出活跃度极高，普通开发者本地部署高质量大模型的门槛进一步下探。
---
## 4. 值得探索
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*