# Hugging Face 热门模型日报 2026-07-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-02 23:07 UTC

---

# Hugging Face 热门模型日报
**统计日期：2026-07-03 | 数据来源：Hugging Face Hub 周热度榜**

---

## 今日速览
2026年7月3日Hugging Face周热门模型榜呈现国产基座主导、端侧部署需求爆发的特征，本周最高点赞模型为智源开源的GLM-5.2，单周点赞超3200。本周共有4款模型单周下载量突破百万，全部为轻量化/量化可端侧部署版本，创下近期新高。英伟达公开两款针对主流大模型优化的NVFP4量化版本，凭借硬件原生加速属性快速跻身热度前列。社区开源的无对齐35B级多模态大模型单周下载破300万，成为本周最大黑马。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   作者：zai-org | 点赞：3248 | 下载：176154  
   一句话说明：智源开源的最新MoE架构通用大语言模型，推理与多轮对话表现优异，登顶本周点赞榜榜首。
2. **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**  
   作者：deepreinforce-ai | 点赞：195 | 下载：7358  
   一句话说明：基于Qwen3.5 MoE构建的近400B超大规模开源通用模型，支持多模态输入，引发大模型性能讨论。
3. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**  
   作者：deepseek-ai | 点赞：302 | 下载：8184  
   一句话说明：深度求索推出的DeepSeek-V4优化版本，依托论文提出的DSpark架构大幅提升长文本推理效率。
4. **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**  
   作者：LiquidAI | 点赞：191 | 下载：26357  
   一句话说明：仅230M参数的超轻量语言模型，可部署在低算力嵌入式设备上，资源占用极低。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   作者：nvidia | 点赞：2572 | 下载：1006831  
   一句话说明：英伟达开源的通用开放世界图像定位模型，支持用自然语言定位图像中任意目标，单周下载破百万。
2. **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**  
   作者：krea | 点赞：457 | 下载：69788  
   一句话说明：最新高速文生图模型，生成速度较前代提升3倍，可实现准实时文生图交互。
3. **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**  
   作者：fal | 点赞：143 | 下载：0  
   一句话说明：针对LTX视频生成模型优化的3D写实风格LoRA，可生成高一致性3D质感短视频。

### 🔧 专用模型（代码、数学、安全、垂直领域）
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
   作者：baidu | 点赞：1651 | 下载：758489  
   一句话说明：百度开源的无限制OCR模型，支持任意语言、任意复杂版式的文档识别，无需额外适配场景。
2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
   作者：yuxinlu1 | 点赞：2571 | 下载：614069  
   一句话说明：基于Gemma4微调的12B级代码专用模型，代码补全、排错能力突出，深受开发者欢迎。
3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**  
   作者：google | 点赞：114 | 下载：89  
   一句话说明：谷歌开源的表格专用基础模型，支持零样本完成表格分类、回归任务，适配绝大多数数值场景。
4. **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**  
   作者：BugTraceAI | 点赞：121 | 下载：8037  
   一句话说明：面向网络安全场景的专用大模型，可自动识别代码中的潜在漏洞，适配攻防研究场景。
5. **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**  
   作者：nationaldesignstudio | 点赞：102 | 下载：790  
   一句话说明：面向PII个人信息识别的命名实体分类模型，可精准识别文本中的隐私敏感内容。

### 📦 微调与量化（社区微调、GGUF、格式优化）
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   作者：HauhauCS | 点赞：2397 | 下载：3078904  
   一句话说明：社区基于Qwen3.6 35B MoE微调的无对齐多模态模型，支持端侧GGUF部署，单周下载突破300万。
2. **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**  
   作者：nvidia | 点赞：209 | 下载：27249  
   一句话说明：英伟达推出的NVFP4格式量化版本Qwen3.6，可在N卡上实现几乎无损的原生加速。
3. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
   作者：empero-ai | 点赞：1245 | 下载：1250562  
   一句话说明：社区基于Qwen3.5微调的长上下文推理GGUF模型，支持1M上下文窗口，端侧即可部署。
4. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
   作者：deepreinforce-ai | 点赞：653 | 下载：284585  
   一句话说明：Ornith-1.0 35B大模型的GGUF量化版本，支持MIT协议商用，可在消费级硬件上运行。

---

## 生态信号
本周榜单近60%的模型衍生自Qwen、GLM两大国产基座家族，相关生态活跃度远超其他海外模型系列。所有上榜30个模型全部为完全开源可下载版本，闭源模型本周无入围，开源权重的产业渗透率进一步提升。量化赛道呈现二元格局：兼容llama.cpp的通用GGUF格式仍是社区端侧部署首选，英伟达推出的NVFP4硬件原生量化版本快速普及，大幅降低N卡平台大模型的部署门槛。

---

## 值得探索
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：单周下载破300万的无对齐多模态MoE模型，性能接近头部闭源旗舰，可用于不受内容对齐限制的前沿研究场景。
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：开源无限制OCR模型无需额外场景适配，即可直接集成到文档数字化、工业质检等工作流中，大幅降低相关应用开发成本。
3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：仅3B参数的开放世界目标定位模型，支持自然语言指令检索图像任意内容，可快速搭建低门槛多模态交互应用。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*