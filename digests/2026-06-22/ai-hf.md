# Hugging Face 热门模型日报 2026-06-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-21 23:13 UTC

---

# Hugging Face 热门模型日报 | 2026-06-22
---
## 今日速览
本周榜单周点赞榜首为DeepSeek-V4 Pro，单周点赞接近5000，大幅领先其他模型登顶热度第一。Qwen系列多款模型拿下全榜最高下载量，头部官方开源模型的社区复用热度持续走高。英伟达、谷歌、国内头部AI厂商本周集中释放多模态、端侧专用权重，覆盖图像定位、流式ASR、超小TTS等细分场景。社区GGUF量化产能持续饱和，本周所有头部热门大模型均已推出对应端侧适配版本，端侧落地进度超预期。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   - 作者: deepseek-ai | 点赞: 4,998 | 下载: 2,611,991
   - 一句话说明：本周热度榜首的通用大模型，推理、对话能力均达到第一梯队，是当前开源生态的标杆产品。
2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   - 作者: zai-org | 点赞: 1,805 | 下载: 27,413
   - 一句话说明：智谱最新发布的Moe架构通用对话大模型，原生支持长上下文能力，面向全场景通用部署。
3. **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)**
   - 作者: zai-org | 点赞: 119 | 下载: 217,361
   - 一句话说明：GLM-5.2官方FP8量化版本，体积大幅缩小的同时保留99%的原生精度，部署门槛显著降低。
4. **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
   - 作者: microsoft | 点赞: 261 | 下载: 2,593
   - 一句话说明：微软发布的4B小参数上下文优化模型，专为Agent子任务调度场景设计，响应速度远超同尺寸模型。
5. **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)**
   - 作者: nex-agi | 点赞: 342 | 下载: 7,872
   - 一句话说明：基于Qwen3.5 MoE微调的高性价比通用对话模型，主打低显存消费级显卡流畅运行。
6. **[lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1)**
   - 作者: lordx64 | 点赞: 145 | 下载: 3,351
   - 一句话说明：社区基于Qwen3.5 MoE微调的轻量化对话模型，适配低端硬件设备的离线部署需求。
7. **[poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)**
   - 作者: poolside | 点赞: 81 | 下载: 2,580
   - 一句话说明：面向代码开发场景优化的通用大模型，原生适配vLLM、SGLang推理框架，吞吐性能领先。

---
### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
   - 作者: MiniMaxAI | 点赞: 1,176 | 下载: 104,076
   - 一句话说明：MiniMax最新发布的图文理解大模型，支持超高分辨率图像输入，OCR和图像推理能力突出。
2. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
   - 作者: moonshotai | 点赞: 944 | 下载: 363,308
   - 一句话说明：Moonshot发布的多模态代码专用模型，支持直接识别截图中的代码并一键生成可运行实现。
3. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
   - 作者: google | 点赞: 1,034 | 下载: 762,861
   - 一句话说明：谷歌融合扩散能力的图文大模型，同时支持文本生成和图像编辑任务，精度领先同尺寸模型。
4. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - 作者: nvidia | 点赞: 2,240 | 下载: 241,845
   - 一句话说明：英伟达新发布的图像定位小模型，仅3B参数即可实现任意开放场景下的物体精准定位。
5. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   - 作者: google | 点赞: 1,125 | 下载: 1,815,370
   - 一句话说明：谷歌发布的全模态通用模型，支持文本、图像、音频任意输入输出，是"any-to-any"能力的标杆开源实现。
6. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
   - 作者: Qwen | 点赞: 2,195 | 下载: 5,148,673
   - 一句话说明：通义千问最新发布的多模态大模型，全榜下载量最高，生态适配覆盖从云侧到端侧的全硬件栈。
7. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - 作者: HauhauCS | 点赞: 2,077 | 下载: 3,966,691
   - 一句话说明：社区基于Qwen3.6 35B微调的无限制多模态模型，支持全场景无过滤内容生成。
8. **[datalab-to/lift](https://huggingface.co/datalab-to/lift)**
   - 作者: datalab-to | 点赞: 107 | 下载: 516
   - 一句话说明：专为PDF文档解析优化的多模态小模型，可直接提取复杂格式PDF中的全部结构化信息。
9. **[ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)**
   - 作者: ostris | 点赞: 89 | 下载: 2,452
   - 一句话说明：针对Ideogram 4文生图模型

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*