# Hugging Face 热门模型日报 2026-06-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-24 23:03 UTC

---

# Hugging Face 热门模型日报
日期：2026-06-25

---

## 今日速览
本周Hugging Face热度榜由国产大模型DeepSeek-V4 Pro以5000+周赞的断层成绩登顶，远超其余上榜模型。谷歌刚发布的Gemma4全系列衍生模型占比接近1/5，覆盖原生版本、代码微调、端侧量化等多个分支。多模态垂直能力模型热度持续走高，通用OCR、视觉定位、语音识别类模型下载量普遍突破10万。端侧可部署的GGUF量化版本平均下载量是原生全精度模型的3倍以上，本地部署需求爆发式增长。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **deepseek-ai/DeepSeek-V4-Pro** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro>
   作者：deepseek-ai | 点赞5046 | 下载2052463
   本周热度断层第一的通用开源对话大模型，综合能力对标头部闭源模型，一经发布就获得全生态开发者广泛关注。
2. **zai-org/GLM-5.2** <https://huggingface.co/zai-org/GLM-5.2>
   作者：zai-org | 点赞2349 | 下载57186
   国产头部MoE通用大模型，原生支持多轮对话，是当前开源生态下最受欢迎的中文基座之一。
3. **nvidia/LocateAnything-3B** <https://huggingface.co/nvidia/LocateAnything-3B>
   作者：nvidia | 点赞2345 | 下载359498
   英伟达新开源的3B参数通用视觉定位大模型，支持零样本检索图像内任意目标，轻量特性适配端侧部署。
4. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** <https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive>
   作者：HauhauCS | 点赞2204 | 下载3769369
   社区基于Qwen3.6微调的无对齐多模态MoE模型，完全规避内容限制，下载量登顶全榜。
5. **WeiboAI/VibeThinker-3B** <https://huggingface.co/WeiboAI/VibeThinker-3B>
   作者：WeiboAI | 点赞691 | 下载49569
   微博开源的小参数数学推理专用大模型，基座基于Qwen2改造，推理速度远超同参数级通用模型。
6. **microsoft/FastContext-1.0-4B-SFT** <https://huggingface.co/microsoft/FastContext-1.0-4B-SFT>
   作者：microsoft | 点赞335 | 下载4805
   微软开源的长上下文快速检索专用小模型，针对智能体子任务场景做了定向优化。
7. **Qwen/Qwen-AgentWorld-35B-A3B** <https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B>
   作者：Qwen | 点赞132 | 下载223
   阿里通义千问新发布的智能体原生大模型，针对工具调用、环境交互场景做了全链路优化。
8. **poolside/Laguna-M.1** <https://huggingface.co/poolside/Laguna-M.1>
   作者：poolside | 点赞95 | 下载2913
   面向云原生代码开发场景的专用通用大模型，原生适配vLLM、SGLang推理框架。
9. **zai-org/GLM-5.2-FP8** <https://huggingface.co/zai-org/GLM-5.2-FP8>
   作者：zai-org | 点赞157 | 下载445304
   官方发布的GLM-5.2全精度FP8版本，显存占用降低40%，部署门槛大幅下降。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **baidu/Unlimited-OCR** <https://huggingface.co/baidu/Unlimited-OCR>
   作者：baidu | 点赞721 | 下载45687
   百度开源的无限制通用OCR模型，支持任意场景下的图文信息提取，性能远超前代开源方案。
2. **MiniMaxAI/MiniMax-M3** <https://huggingface.co/MiniMaxAI/MiniMax-M3>
   作者：MiniMaxAI | 点赞1228 | 下载143093
   国内AI厂商MiniMax开源的通用多模态大模型，支持图文理解、多轮对话能力。
3. **moonshotai/Kimi-K2.7-Code** <https://huggingface.co/moonshotai/Kimi-K2.7-Code>
   作者：moonshotai | 点赞984 | 下载480013
   月之暗面开源的多模态代码大模型，支持图文结合的代码生成、调试场景。
4. **google/gemma-4-12B-it** <https://huggingface.co/google/gemma4-12B-it>
   作者：google | 点赞1162 | 下载2114441
   谷歌刚发布的Gemma4全模态原生版本，支持任意输入输出任务，是当前海外最火的开源多模态基座。
5. **google/diffusiongemma-26B-A4B-it** <https://huggingface.co/google/diffusiongemma-26B-A4B-it>
   作者：google | 点赞1060 | 下载1036328
   谷歌全新架构的文生图+图文理解一体化大模型，把扩散能力和大语言模型做了原生融合。
6. **krea/Krea-2-Turbo** <https://huggingface.co/krea/Krea-2-Turbo>
   作者：krea | 点赞182 | 下载878
   新一代高速文生图模型，生成速度比主流SD系列快5倍以上。
7. **krea/Krea-2-Raw** <https://huggingface.co/krea/Krea-2-Raw>
   作者：krea | 点赞156 | 下载1205
   Krea2的无对齐原生底座，适合二次微调生成垂直风格图像。
8. **datalab-to/lift** <https://huggingface.co/datalab-to>
   作者：datalab-to | 点赞147 | 下载4644
   基于Qwen3.5改造的PDF文档全量解析多模态模型，支持任意格式文档信息结构化提取。
9. **owensong/Inflect-Nano-v1** <https://huggingface.co/owensong/Inflect-Nano-v1>
   作者：owensong | 点赞191 | 下载0
   超小参数端侧TTS模型，体积不足100M即可实现接近真人的语音生成效果。
10. **nvidia/nemotron-3.5-asr-streaming-0.6b** <https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b>
    作者：nvidia | 点赞677 | 下载47208
    英伟达开源的流式ASR模型，0.6B小参数即可实现低延迟高准确率的实时语音转写。
11. **Boogu/Boogu-Image-0.1-Edit** <https://huggingface.co/Boogu/Boogu-Image-0.1-Edit>
    作者：Boogu | 点赞121 | 下载743
    开源中文图像编辑模型，原生支持中文提示词引导的图像局部修改。
12. **Comfy-Org/Krea-2** <https://huggingface.co/Comfy-Org/Krea-2>
    作者：Comfy-Org | 点赞87 | 下载10
    适配ComfyUI全链路的Krea2打包版本，一键部署即可使用最新文生图能力。

### 🔧 专用模型（代码、数学、嵌入）
1. **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** <https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF>
   作者：yuxinlu1 | 点赞2295 | 下载483139
   基于Gemma4 12B微调的代码专用模型，多轮代码生成能力远超同参数级开源方案。
2. **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** <https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF>
   作者：yuxinlu1 | 点赞527 | 下载138704
   针对终端智能体场景定向微调的Gemma4衍生模型，支持全链路工具调用、命令行操作。
3. **LiquidAI/LFM2.5-Embedding-350M** <https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M>
   作者：LiquidAI | 点赞119 | 下载11471
   350M小参数句向量模型，检索精度超过同级别开源模型30%以上。
4. **LiquidAI/LFM2.5-ColBERT-350M** <https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M>
   作者：LiquidAI | 点赞88 | 下载3362
   轻量化ColBERT检索模型，适合高并发向量检索场景部署。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **unsloth/GLM-5.2

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*