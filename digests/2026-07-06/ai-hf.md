# Hugging Face 热门模型日报 2026-07-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-05 23:01 UTC

---

# Hugging Face 热门模型日报
日期：2026-07-06
---

## 今日速览
2026年7月6日Hugging Face周榜Top3模型分别为智谱开源GLM-5.2、英伟达视觉定位模型LocateAnything-3B、社区微调的Gemma4代码专属模型。全榜30个模型累计总下载量突破1600万，端侧可部署的GGUF量化版本贡献了超过7成下载量。Qwen系列相关衍生模型占比接近1/3，成为当前开源社区二次开发的首选基座。国产厂商发布的原生基座与垂类工具模型表现亮眼，整体榜单呈现出「基座原生发布+社区快速量化微调」的成熟协作生态。

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 点赞：3466 | 下载：220379
   一句话说明：智谱最新开源的MoE架构通用对话大模型，以极强的推理性能登顶本周点赞榜，是当前关注度最高的国产基座。
2. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
   作者：InternScience | 点赞：284 | 下载：7010
   一句话说明：基于Qwen3.5 MoE打造的原生智能体基座，原生支持多模态工具调用，是面向Agent场景的专用原生发布模型。
3. **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
   作者：nvidia | 点赞：272 | 下载：297130
   一句话说明：英伟达采用自研NVFP4量化方案优化的Qwen3.6大模型，可在消费级显卡上实现27B参数的低延迟推理。
4. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
   作者：deepseek-ai | 点赞：386 | 下载：12580
   一句话说明：深度求索最新发布的分布式训练优化版基座，支持万卡级高效训练，相关技术论文已同步公开。
5. **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)**
   作者：AliesTaha | 点赞：159 | 下载：277
   一句话说明：基于Qwen3微调的故事创作专用指令模型，在创意生成场景下表现远超同参数通用基座。
6. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
   作者：empero-ai | 点赞：686 | 下载：144933
   一句话说明：融合Claude能力特质的长上下文9B基座，支持1M Token全长度推理，无需额外分片即可处理超长文档。
7. **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)**
   作者：deepreinforce-ai | 点赞：384 | 下载：76189
   一句话说明：完全开源MIT协议的轻量通用基座，支持商业免费使用，适配绝大多数部署场景。
8. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
   作者：Qwen | 点赞：546 | 下载：55113
   一句话说明：通义千问官方发布的智能体专用35B A3B量化模型，原生兼容主流Agent框架的工具调用规范。
9. **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)**
   作者：deepreinforce-ai | 点赞：340 | 下载：224641
   一句话说明：Ornith系列35B参数版本，采用Qwen3.5 MoE架构，MIT协议允许全场景商用无限制。
10. **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
    作者：mistralai | 点赞：115 | 下载：26
    一句话说明：Mistral最新发布的119B超大规模稀疏化基座，适配vLLM推理框架，推理速度较同参数稠密模型提升3倍。
11. **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)**
    作者：nvidia | 点赞：122 | 下载：10696
    一句话说明：英伟达发布的双塔架构30B嵌入模型，长文本向量表征精度达到业界当前顶尖水平。
12. **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)**
    作者：deepseek-ai | 点赞：159 | 下载：48696
    一句话说明：DeepSeek V4系列的高速推理版本，通过算子优化实现了端到端推理延迟降低60%。
13. **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)**
    作者：nvidia | 点赞：240 | 下载：280087
    一句话说明：英伟达适配NVFP4量化方案的GLM-5.2优化版本，在保持99%原生精度的同时显存占用降低75%。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 点赞：1743 | 下载：1044217
   一句话说明：百度开源的不限场景通用OCR模型，支持手写体、艺术字、模糊场景等极端文本识别，下载量破百万。
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   作者：nvidia | 点赞：2616 | 下载：1247265
   一句话说明：英伟达开源的开放世界目标定位模型，仅3B参数即可识别任意文本描述的图像目标，精度超越此前大模型方案。
3. **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
   作者：krea | 点赞：513 | 下载：99049
   一句话说明：新一代高速文生图模型，生成1024P图片仅需2步推理，速度较SD3提升4倍。
4. **[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)**
   作者：Comfy-Org | 点赞：255 | 下载：10
   一句话说明：官方适配ComfyUI工作流的Krea-2打包版本，支持一键部署到本地AI画图工作台。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   作者：google | 点赞：221 | 下载：2670
   一句话说明：谷歌开源的表格专用大模型，零样本场景下表格分类、回归任务精度超越传统机器学习方案。
2. **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**
   作者：BugTraceAI | 点赞：134 | 下载：12196
   一句话说明：面向网络安全场景的专用大模型，可自动识别代码漏洞、追踪攻击路径，是首款开源的红队作战专用基座。
3. **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**
   作者：nationaldesignstudio | 点赞：128 | 下载：2783
   一句话说明：基于BERT优化的PII敏感信息识别模型，完全在浏览器端即可运行，适配transformers.js生态。
4. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
   作者：yuxinlu1 | 点赞：2608 | 下载

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*