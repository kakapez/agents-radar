# Hugging Face 热门模型日报 2026-07-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-03 23:04 UTC

---

# Hugging Face 热门模型日报
日期：2026-07-04

---

## 今日速览
本次统计周期内Hugging Face周赞排序前30模型中，有4款单周下载量突破100万，端侧可部署的量化模型成为流量主力。国产开源基座Qwen、GLM的系列衍生版本占比接近半数，生态热度远超海外其他基座。百度发布的全场景无限OCR、英伟达发布的零样本视觉定位模型双双进入高热度榜单，多模态工业级落地工具关注度持续走高。社区面向本地使用需求的去审查、专项微调模型下载增速远超官方原生模型。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 点赞：3338 | 下载：191462
   一句话说明：智谱最新开源的MoE对话大模型，是本周周点赞最高的原生基座，主打流畅多轮对话能力。
2. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
   作者：deepseek-ai | 点赞：340 | 下载：9388
   一句话说明：深度求索最新迭代的大模型版本，配套arxiv论文公开技术细节，主打长上下文推理性能。
3. **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)**
   作者：deepseek-ai | 点赞：142 | 下载：32675
   一句话说明：DeepSeek-V4的轻量高速版本，专门优化低延迟推理场景，适合高并发在线服务部署。
4. **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)**
   作者：deepreinforce-ai | 点赞：363 | 下载：64051
   一句话说明：基于Qwen3.5微调的开源小参基座，支持图文多模态，MIT协议允许全场景商用。
5. **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)**
   作者：deepreinforce-ai | 点赞：321 | 下载：211406
   一句话说明：基于Qwen3.5-MoE微调的35B级多模态基座，性能对标主流闭源中等参数模型。
6. **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**
   作者：deepreinforce-ai | 点赞：200 | 下载：8079
   一句话说明：本周曝光的超大参数开源MoE模型，总参数量近400B，完全开源无商用限制。
7. **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
   作者：nvidia | 点赞：229 | 下载：94465
   一句话说明：英伟达模型优化工具生成的Qwen3.6 27B NVFP4高精度量化版本，在NVIDIA硬件上推理速度提升超2倍。
8. **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)**
   作者：nvidia | 点赞：214 | 下载：189970
   一句话说明：英伟达推出的GLM-5.2硬件友好型量化版本，消费级NVIDIA显卡即可流畅运行。
9. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
   作者：empero-ai | 点赞：659 | 下载：131323
   一句话说明：基于Qwen3.5微调的长上下文9B基座，支持1M超长token上下文窗口，主打深度推理能力。
10. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    作者：InternScience | 点赞：206 | 下载：3530
    一句话说明：专为Agent智能体场景微调的MoE大模型，原生支持工具调用、多步任务规划。
11. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    作者：Qwen | 点赞：524 | 下载：45455
    一句话说明：通义千问官方推出的智能体专项基座，在多Agent协作任务上表现远超通用大模型。
12. **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
    作者：LiquidAI | 点赞：197 | 下载：29645
    一句话说明：仅230M参数的超轻量小语言模型，可在嵌入式设备上本地运行完成基础文本任务。

---

### 🎨 多模态与生成（图像、视频、文本到X）
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   作者：nvidia | 点赞：2587 | 下载：1108586
   一句话说明：3B参数的全场景零样本目标定位模型，不需要微调即可识别任意图像中的指定物体，本周热度第二。
2. **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
   作者：krea | 点赞：479 | 下载：84006
   一句话说明：新一代高速文生图模型，生成一张高清图仅需几百毫秒，主打商用实时生成场景。
3. **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
   作者：fal | 点赞：149 | 下载：0
   一句话说明：视频生成模型LTX的3D写实风格LoRA，生成视频的立体真实感大幅提升，刚上线暂未开放下载。
4. **[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)**
   作者：Comfy-Org | 点赞：242 | 下载：10
   一句话说明：适配ComfyUI工作流的Krea-2原生版本，专为可视化生成流程优化。
5. **[ilkerzgi/fal-Krea-2-Style-LoRAs](https://huggingface.co/ilkerzgi/fal-Krea-2-Style-LoRAs)**
   作者：ilkerzgi | 点赞：115 | 下载：0
   一句话说明：社区出品的Krea-2风格LoRA合集，覆盖数十种艺术创作风格，刚上线暂未开放下载。

---

### 🔧 专用模型（代码、OCR、安全、嵌入）
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 点赞：1689 | 下载：885040
   一句话说明：百度开源的不限场景、不限语种的通用OCR模型，手写体、极端模糊文档识别准确率达到工业级商用标准。
2. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   作者：google | 点赞：149 | 下载：450
   一句话说明：谷歌开源的表格专用基础模型，支持零样本完成表格分类、回归任务，不需要标注数据即可适配业务。
3. **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**
   作者：BugTraceAI | 点赞：124 | 下载：11444
   一句话说明：专为网络安全场景微调的大模型，主打漏洞扫描、攻击路径分析能力。
4. **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**
   作者：nationaldesignstudio | 点赞：113 | 下载：1149
   一句话说明：轻量化PII敏感信息识别模型，可直接在浏览器端运行完成文本隐私信息过滤。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者：empero-ai | 点赞：1366 | 下载：1366360
   一句话说明：Qwythos 9B 1M上下文模型的GGUF量化版本，支持llama.cpp端侧离线部署，本周下载量破130万。
2. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-G

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*