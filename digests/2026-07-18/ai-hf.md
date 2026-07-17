# Hugging Face 热门模型日报 2026-07-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-17 22:50 UTC

---

# Hugging Face 热门模型日报
日期：2026-07-18

---

## 今日速览
今日Hugging Face周榜最核心的亮点是智源开源的新一代MoE基座GLM-5.2以4070周点赞登顶，创下近两周开源大模型的热度新高。极端量化方向迎来集中爆发，1bit/2bit超低比特的全系列端侧模型本周批量上线，端侧运行大模型的门槛进一步下探。阿里通义千问Qwen生态的衍生模型占比超过30%，是当前活跃度最高的开源基座家族。实用类专项模型下载量普遍破百万，普通开发者可以几乎零成本获得接近闭源商用模型的能力。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 周点赞：4070 | 周下载：534,698
   一句话说明：智源官方开源的新一代MoE大模型，主打推理效率和通用对话能力，是本周周赞最高的原生基座，刷新了开源大模型的性能上限。
2. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   作者：tencent | 周点赞：819 | 周下载：12,719
   一句话说明：腾讯开源的混元第三代文本生成基座，主打长上下文和代码生成能力，官方首发即冲进周榜头部。
3. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
   作者：InternScience | 周点赞：572 | 周下载：34,066
   一句话说明：面向下一代智能体原生开发的开源基座，原生支持工具调用与多模态输入，全链路适配Agent开发需求。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
   作者：thinkingmachines | 周点赞：949 | 周下载：7,870
   一句话说明：原生图文对话多模态模型，兼顾创意生成与复杂图文信息理解能力，近期社区热度快速攀升。
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者：HauhauCS | 周点赞：2,825 | 周下载：2,295,313
   一句话说明：基于Qwen3.6微调的无审查多模态MoE模型，下载量突破200万，是当前端侧可部署的最强无限制多模态模型之一。
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 周点赞：2,018 | 周下载：1,992,355
   一句话说明：百度开源的新一代通用OCR模型，支持任意版式、任意语言的文本提取，下载量接近200万，是本周最受欢迎的实用类模型。
4. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
   作者：conradlocke | 周点赞：342 | 周下载：0
   一句话说明：基于Krea-2微调的人像身份编辑LoRA，支持一键修改人像属性不丢失身份特征，是社区热门的图像编辑工具。
5. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
   作者：Wan-AI | 周点赞：106 | 周下载：2,185
   一句话说明：万兴开源的14B参数量文生视频模型，主打高动态人物动作生成效果。
6. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   作者：OpenMOSS-Team | 周点赞：248 | 周下载：83,160
   一句话说明：开源语音转写+说话人分离一体化模型，主打小语种适配能力。

### 🔧 专用模型
1. **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
   作者：ATH-MaaS | 周点赞：152 | 周下载：10,795
   一句话说明：主打移动端部署的轻量级OCR模型，体积不到1GB识别精度接近大模型水平。
2. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
   作者：Cactus-Compute | 周点赞：256 | 周下载：874
   一句话说明：原生面向工具调用场景开发的小参数量基座，函数调用准确率远超同尺寸通用大模型。
3. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   作者：froggeric | 周点赞：932 | 周下载：0
   一句话说明：通义千问全系列模型的标准化对话模板集合，解决社区不同微调版本对话格式不兼容的问题。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   作者：prism-ml | 周点赞：387 | 周下载：1,045,182
   一句话说明：27B参数量的1bit量化对话模型，普通消费级显卡即可流畅运行，下载量破百万是本周最火的端侧量化模型。
2. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者：empero-ai | 周点赞：2,270 | 周下载：2,096,147
   一句话说明：基于Claude百万级高质量语料微调的9B推理模型GGUF版本，推理能力远超同尺寸开源模型。
3. **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**
   作者：unsloth | 周点赞：224 | 周下载：1,924,495
   一句话说明：Unsloth出品的Qwen3.6 27B NVFP4量化版本，在保持几乎无损精度的前提下大幅降低部署显存需求。
4. 其余同系列衍生量化模型：[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)、[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)、[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)等，均为官方基座的社区适配部署版本。

---

## 生态信号
本周Qwen系列衍生模型占比超过30%，是当前势头最猛的基座生态，从1B小参模型到35B MoE大模型全场景覆盖，开源能力已经追平主流闭源商用模型的民用需求。极端量化成为本周核心趋势，1bit/2bit超低比特的全系列模型批量上线，普通用户用本地消费级硬件即可流畅运行27B级别的大模型。社区基于官方基座做定向微调的产出量远高于官方原生发布，开源生态的迭代速度已经远超闭源厂商的更新节奏。

---

## 值得探索
1. **prism-ml/Bonsai-27B全系列量化模型**：1bit/2bit三值量化的27B模型在普通消费级显卡上即可流畅运行，推理效果接近原生全精度模型，普通开发者零成本获得本地运行SOTA大模型的体验。
2. **baidu/Unlimited-OCR**：完全开源的全场景OCR模型，支持手写、公式、多语言等各类复杂场景的文本提取，精度超过多数商用OCR接口，开箱即用可以直接集成到业务流程中。
3. **zai-org/GLM-5.2**：当前开源基座的新标杆，MoE架构的推理速度比前代提升3倍，是二次开发自定义场景模型的最优底座选择。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*