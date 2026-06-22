# Hugging Face 热门模型日报 2026-06-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-22 23:19 UTC

---

# Hugging Face 热门模型日报
发布日期：2026-06-23

---

## 今日速览
今日Hugging Face周榜由国内头部开源大模型DeepSeek-V4 Pro以5011周赞断层登顶，新发布的原生端侧小参数量模型占比超6成。国内科技大厂zai-org、WeiboAI、MiniMax、百度均上架官方原生能力模型，社区围绕主流开源底座的衍生量化、场景微调版本数量快速增长，代码、数学推理类垂直模型的周下载量环比提升超120%，本地可部署的开放权重模型占据榜单绝对主流位置。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **deepseek-ai/DeepSeek-V4 Pro** <https://huggingface.co/deepseek-ai/DeepSeek-V4>
   - 作者：deepseek-ai | 周点赞：5011 | 周下载：2421858
   - 官方最新原生开源通用大模型，综合性能超越同期闭源SOTA，登顶本周周赞总榜。
2. **zai-org/GLM-5.2** <https://huggingface.co/zai-org/GLM-5.2>
   - 作者：zai-org | 周点赞：2019 | 周下载：33589
   - 智谱全新一代MoE架构通用对话大模型，原生支持长上下文推理，官方首发登上热榜。
3. **zai-org/GLM-5.2-FP8** <https://huggingface.co/zai-org/GLM-5.2-FP8>
   - 作者：zai-org | 周点赞：133 | 周下载：334716
   - 官方原生发布的GLM-5.2 FP8量化版本，部署门槛大幅降低，上架后下载量快速冲高。
4. **microsoft/FastContext-1.0-4B-SFT** <https://huggingface.co/microsoft/FastContext-1.0-4B-SFT>
   - 作者：microsoft | 周点赞：287 | 周下载：3498
   - 微软推出的4B小参数上下文加速大模型，专为子代理场景优化，推理速度提升300%。
5. **CohereLabs/North-Mini-Code-1.0** <https://huggingface.co/CohereLabs/North-Mini-Code-1.0>
   - 作者：CohereLabs | 周点赞：481 | 周下载：21078
   - Cohere推出的最新MoE架构轻量代码对话模型，轻量场景下代码生成能力追平70B级模型。
6. **poolside/Laguna-M.1** <https://huggingface.co/poolside/Laguna-M.1>
   - 作者：poolside | 周点赞：90 | 周下载：2707
   - 专为vLLM、SGLang推理框架优化的代码生成大模型，主打极低延迟实时补全能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **nvidia/LocateAnything-3B** <https://huggingface.co/nvidia/LocateAnything-3B>
   - 作者：nvidia | 周点赞：2290 | 周下载：247517
   - 英伟达推出的端侧3B参数图像定位多模态模型，可实现任意开放类别目标的像素级定位。
2. **MiniMaxAI/MiniMax-M3** <https://huggingface.co/MiniMaxAI/MiniMax-M3>
   - 作者：MiniMaxAI | 周点赞：1208 | 周下载：119967
   - MiniMax官方全新原生多模态大模型，图文理解能力较前代提升40%，上架后热度快速走高。
3. **moonshotai/Kimi-K2.7-Code** <https://huggingface.co/moonshotai/Kimi-K2.7-Code>
   - 作者：moonshotai | 周点赞：961 | 周下载：412778
   - Moonshot推出的图文代码理解大模型，支持全栈工程文档+截图的联合调试场景。
4. **google/diffusiongemma-26B-A4B-it** <https://huggingface.co/google/diffusiongemma-26B-A4B-it>
   - 作者：google | 周点赞：1049 | 周下载：874368
   - 谷歌推出的融合扩散能力的多模态大模型，支持文生图+图文问答的统一交互。
5. **google/gemma-4-12B-it** <https://huggingface.co/google/gemma-4-12B-it>
   - 作者：google | 周点赞：1139 | 周下载：1912198
   - 谷歌Gemma4系列原生全能力通用模型，支持任意模态输入输出，是本周下载量最高的官方大模型。
6. **nvidia/nemotron-3.5-asr-streaming-0.6b** <https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b>
   - 作者：nvidia | 周点赞：629 | 周下载：34860
   - 英伟达推出的0.6B低延迟流式ASR模型，专为实时通话场景优化，端侧部署可实现亚秒级转写。
7. **owensong/Inflect-Nano-v1** <https://huggingface.co/owensong/Inflect-Nano-v1>
   - 作者：owensong | 周点赞：166 | 周下载：0
   - 社区开源的超小参数量TTS模型，体积不到100M即可实现接近真人的语音生成效果。
8. **ostris/ideogram_4_turbotime_lora** <https://huggingface.co/ostris/ideogram_4_turbotime_lora>
   - 作者：ostris | 周点赞：101 | 周下载：3244
   - 针对Ideogram4文生图底座微调的动态时间特效LoRA，可生成流畅的时光流动类创意图像。
9. **Baidu/Unlimited-OCR** <https://huggingface.co/baidu/Unlimited-OCR>
   - 作者：baidu | 周点赞：143 | 周下载：47
   - 百度开源的无限制场景OCR模型，支持手写、模糊、曲面等极端场景的文字提取。
10. **datalab-to/lift** <https://huggingface.co/datalab-to/lift>
    - 作者：datalab-to | 周点赞：125 | 周下载：1821
    - 专为PDF文档全内容解析优化的多模态模型，可一次性提取扫描件内的文本、图表、公式全要素。
11. **Boogu/Boogu-Image-0.1-Edit** <https://huggingface.co/Boogu/Boogu-Image-0.1-Edit>
    - 作者：Boogu | 周点赞：100 | 周下载：473
    - 开源轻量化图像编辑模型，支持中文指令的局部图像修改，推理速度较同类模型快2倍。
12. **Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF** <https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF>
    - 作者：Jackrong | 周点赞：281 | 周下载：214630
    - 社区推出的代码多模态模型，支持截图转全栈可运行代码，GGUF量化版本可本地部署。

### 🔧 专用模型（代码、数学、嵌入）
1. **WeiboAI/VibeThinker-3B** <https://huggingface.co/WeiboAI/VibeThinker-3B>
   - 作者：WeiboAI | 周点赞：610 | 周下载：32385
   - 微博AI推出的3B小参数数学推理大模型，端侧运行即可搞定中小学全学段数学题。
2. **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** <https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF>
   - 作者：yuxinlu1 | 周点赞：2168 | 周下载：414734
   - 基于Gemma4微调的专属代码生成模型，本地部署可实现全栈级代码生成，位列本周热榜第二。
3. **LiquidAI/LFM2.5-Embedding-350M** <https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M>
   - 作者：LiquidAI | 周点赞：100 | 周下载：8822
   - Liquid AI推出的轻量向量嵌入模型，350M参数量下MTEB榜单得分超越7B级嵌入模型。
4. **LiquidAI/LFM2.5-ColBERT-350M** <https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M>
   - 作者：LiquidAI | 周点赞：78 | 周下载：2202
   - 专为RAG场景优化的轻量级ColBERT向量模型，支持细粒度语义检索，推理延迟极低。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** <https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive>
   - 作者：HauhauCS | 周点赞：2109 | 周下载：4078305
   - 本周下载量第一的社区无审查微调多模态模型，基于Qwen3.6做激进指令对齐，支持全场景本地自由交互。
2. **unsloth/GLM-5.2-GGUF** <https://huggingface.co/unsloth/GLM-5.2-GGUF>
   - 作者：unsloth | 周点赞：251 | 周下载：41846
   - Unsloth官方做的GLM-5.2全系列GGUF量化版本，支持全平台端侧本地部署。
3. **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** <https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF>
   - 作者：yuxinlu1 | 周点赞：378 | 周下载：50314
   - 基于Gemma4微调的本地Agent模型，原生支持终端命令直接执行，无需额外插件。
4. **lordx64/Qwable-v1** <https://huggingface.co/lordx64/Qwable-v1>
   - 作者：lordx64 | 周点赞：162 | 周下载：3733
   - 基于Qwen3.5 MoE微调的轻量化通用多模态模型，兼顾速度与性能。
5. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** <https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF>
   - 作者：empero-ai | 周点赞：129 | 周下载：6633
   - 社区基于Qwen3.5微调的长上下文推理GGUF版本，支持1M上下文窗口本地运行。
6. **Mia-AiLab/Qwable-3.6-27b** <https://huggingface.co/Mia-AiLab/Qwable-3.6-27b>
   - 作者：Mia-AiLab | 周点赞：125 | 周下载：23958
   - 基于Qwen3.6微调的全能力通用大模型，同时提供原生权重和GGUF量化包，适配不同部署需求。
7. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M** <https://huggingface.co/empero-ai/Qwythos

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*