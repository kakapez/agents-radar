# Hugging Face 热门模型日报 2026-06-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-23 23:08 UTC

---

# Hugging Face 热门模型日报
日期：2026-06-24 | 数据维度：周点赞数排序Top30

---

## 今日速览
本周Hugging Face热门榜呈现头部国产大模型断层领跑的态势，DeepSeek-V4 Pro以5030周赞位居全榜第一，拉开其余头部模型近2倍差距。谷歌Gemma4生态爆发，多款基座衍生的代码、Agent微调版集中上榜，社区贡献占比极高。阿里、智源、MiniMax等国内厂商发布的官方基座及衍生版本累计占总榜席位超4成，开源大模型的本土化迭代速度全球领先。端侧可部署的小尺寸专项模型、GGUF量化版本的下载量普遍远高于原版基座，面向个人用户的本地部署需求持续攀升。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   - 作者：zai-org | 周点赞：2190 | 周下载：40127
   - 智源官方发布的开源MoE对话基座，原生支持长上下文多轮交互，是当前国内主流开源通用大模型代表。
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - 作者：HauhauCS | 周点赞：2155 | 周下载：3955016
   - 通义千问3.6的无对齐激进微调多模态版本，支持原生图像理解，超大下载量反映社区对无约束生成能力的强烈需求。
3. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
   - 作者：empero-ai | 周点赞：211 | 周下载：1856
   - 基于1M长 Claude 神话数据集微调的Qwen3.5衍生模型，主打长文本创作与角色扮演场景。
4. **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
   - 作者：microsoft | 周点赞：319 | 周下载：4391
   - 微软发布的轻量化子代理模型，专为快速上下文检索与轻量工具调用场景设计。
5. **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)**
   - 作者：zai-org | 周点赞：148 | 周下载：395290
   - GLM-5.2的官方FP8精度版本，兼顾推理速度与效果损失，适合生产环境部署。
6. **[lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1)**
   - 作者：lordx64 | 周点赞：172 | 周下载：4547
   - 基于Qwen3.5 MoE微调的轻量化多模态模型，主打全场景轻量交互能力。
7. **[poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)**
   - 作者：poolside | 周点赞：93 | 周下载：2787
   - 面向开发者的原生vLLM/SGLang优化代码大模型，专为本地IDE场景设计。
8. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   - 作者：deepseek-ai | 周点赞：5030 | 周下载：2245489
   - 本周全榜热度最高开源大模型，通用推理、代码、多轮交互能力追平一线闭源模型，下载量已突破220万。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - 作者：baidu | 周点赞：462 | 周下载：8396
   - 百度开源的无限制OCR模型，支持全语种、任意版式文档的文字提取能力。
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - 作者：nvidia | 周点赞：2315 | 周下载：274025
   - 英伟达发布的开放世界目标定位3B小模型，可通过文本指令直接框选图像中任意目标，无需提前标注类别。
3. **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
   - 作者：MiniMaxAI | 周点赞：1220 | 周下载：131057
   - MiniMax开源的最新一代多模态基座，支持图文、音视频多类输入输出，原生对齐线上API能力。
4. **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)**
   - 作者：owensong | 周点赞：177 | 周下载：0
   - 仅几MB大小的超小体积TTS模型，可在算力极低的嵌入式设备上运行实时语音合成。
5. **[datalab-to/lift](https://huggingface.co/datalab-to/lift)**
   - 作者：datalab-to | 周点赞：135 | 周下载：3216
   - 专为PDF全内容解析设计的多模态模型，支持扫描件、混合版式文档的结构化提取。
6. **[Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)**
   - 作者：Boogu | 周点赞：112 | 周下载：592
   - 开源中文图像编辑扩散模型，支持中文指令驱动的局部图像修改。
7. **[ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)**
   - 作者：ostris | 周点赞：111 | 周下载：3672
   - Ideogram 4文生图模型的极速渲染LoRA，可在1-2步内生成高质量带文字图像。
8. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
   - 作者：google | 周点赞：1055 | 周下载：948996
   - 谷歌发布的扩散-大模型混合架构多模态基座，同时支持文生图、图文理解两类能力。
9. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   - 作者：google | 周点赞：1153 | 周下载：1991703
   - 谷歌Gemma4系列的原生全模态基座，支持任意输入任意输出的端到端能力，本周大量社区衍生版本均基于该模型微调。
10. **[Comfy-Org/Boogu-Image](https://huggingface.co/Comfy-Org/Boogu-Image)**
    - 作者：Comfy-Org | 周点赞：85 | 周下载：0
    - 适配ComfyUI工作流的Boogu图像模型官方适配版，专为本地图像生成场景优化。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
   - 作者：WeiboAI | 周点赞：662 | 周下载：41170
   - 微博开源的3B小尺寸数学推理模型，效果大幅超越同量级开源数学基座，适合端侧教育场景部署。
2. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
   - 作者：nvidia | 周点赞：656 | 周下载：41050
   - 英伟达开源的流式ASR模型，仅0.6B参数即可实现近实时低延迟语音转写，支持全语种。
3. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
   - 作者：moonshotai | 周点赞：975 | 周下载：447920
   - 月之暗面开源的Kimi系列专用代码大模型，原生支持长代码库检索与全项目重构。
4. **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
   - 作者：LiquidAI | 周点赞：114 | 周下载：10117
   - Liquid AI发布的350M轻量向量嵌入模型，效果追平7B级嵌入模型，适合低资源RAG场景。
5. **[LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)**
   - 作者：LiquidAI | 周点赞：87 | 周下载：2534
   - 同系列ColBERT细粒度向量模型，支持多维度精准检索，大幅降低RAG的召回误差。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
   - 作者：yuxinlu1 | 周点赞：2235 | 周下载：456117
   - 本周热度最高社区衍生模型，基于Gemma4 12B微调的代码专用版本，GGUF格式可直接在本地端侧部署运行。
2. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
   - 作者：yuxinlu1 | 周点赞：444 | 周下载：96459
   - 同作者发布的Gemma4 Agent微调版本，原生支持终端工具调用，专为本地智能体场景设计。
3. **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
   - 作者：unsloth | 周点赞：299 | 周下载：55820
   - Unsloth官方发布的GLM-5.2全精度GGUF量化版本，部署门槛极低。
4. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   - 作者：empero-ai | 周点赞：184 | 周下载：27218
   - Qwythos长文本创作模型的GGUF量化版本，适配本地长文本生成需求。
5. **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)**
   - 作者：bytkim | 周点赞：111 | 周下载：65765
   - 基于多预测头优化的Qwen3.6 27B GGUF版本，推理

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*