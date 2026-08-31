# Hugging Face 热门模型日报 2026-08-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-31 00:13 UTC

---

# Hugging Face 热门模型日报（2026-08-31）
数据来源：当日Hugging Face Hub按周点赞数排序的Top30热门模型榜单

---

## 今日速览
本次统计覆盖的本周高热度模型中，国产厂商自研大模型占据榜单头部绝大多数席位，周点赞破万的两款头部产品均为国内团队发布。通义千问Qwen3.8相关衍生模型覆盖从官方原版到社区量化、微调的全链路产品，成为本周热度最高的模型家族。视频生成赛道迎来密集开源，除头部厂商推出原生开源文生视频大模型外，社区也快速产出了配套加速、可控生成的衍生工具链。端侧部署适配生态高度成熟，GGUF格式量化模型的下载量普遍远超官方原版全精度模型。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)**
   作者：zai-org | 点赞：1711 | 下载：346516
   一句话说明：智谱最新的轻量高速版GLM大模型，兼顾生成效率与效果，本周下载量增长迅猛。
2. **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)**
   作者：zai-org | 点赞：1337 | 下载：50116
   一句话说明：GLM-5系列原生全参数基座模型，面向需要完整能力的部署场景发布。
3. **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)**
   作者：tencent | 点赞：319 | 下载：2123
   一句话说明：腾讯混元4代大模型预览版首次开源权重，受开发者高度关注。
4. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
   作者：deepseek-ai | 点赞：3824 | 下载：4575518
   一句话说明：深度求索最新高速版大模型，兼顾对话、代码等多场景能力，下载量突破450万次。
5. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
   作者：moonshotai | 点赞：11100 | 下载：2794721
   一句话说明：月之暗面Kimi系列首次开源大模型权重，登顶本周周点赞第二高位。
6. **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)**
   作者：ornith-ai | 点赞：505 | 下载：147038
   一句话说明：基于Qwen3.5 MoE基座微调的35B参数混合专家语言模型，兼顾效果与部署成本。
7. **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)**
   作者：pipecat-ai | 点赞：150 | 下载：3982
   一句话说明：面向语音交互场景优化的LLM原型，专门适配语音流实时生成需求。
8. **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)**
   作者：thomsonreuters | 点赞：158 | 下载：1009
   一句话说明：路透发布的面向新闻、财经垂直场景优化的小参数多模态大模型。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
   作者：Qwen | 点赞：4384 | 下载：121976
   一句话说明：阿里通义千问最新轻量高速多模态模型，支持图文理解对话，周点赞位列前三。
2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
   作者：Qwen | 点赞：13346 | 下载：4511348
   一句话说明：本周热度最高模型，通义千问27B参数多模态基座，周点赞量登顶全榜第一。
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
   作者：Lightricks | 点赞：2264 | 下载：1137181
   一句话说明：海外知名文生视频SOTA模型最新版本，支持图像/文本/视频多输入生成视频。
4. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
   作者：MiniMaxAI | 点赞：4657 | 下载：5263381
   一句话说明：MiniMax开源的最新文生视频大模型，下载量突破520万次，是当前国产开源视频生成天花板。
5. **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)**
   作者：BreezeBlue | 点赞：211 | 下载：1838
   一句话说明：国产开源新一代文本转语音模型，支持多音色、长文本低延迟生成。
6. **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)**
   作者：FastVideo | 点赞：193 | 下载：0
   一句话说明：面向MiniMax H3优化的4步超快速视频生成衍生模型，零样本加速无需额外训练数据。
7. **[alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)**
   作者：alibaba-pai | 点赞：163 | 下载：5538
   一句话说明：阿里PAI团队推出的适配MiniMax H3的统一ControlNet套件，支持视频生成可控性调节。
8. **[alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)**
   作者：alibaba-pai | 点赞：152 | 下载：23734
   一句话说明：面向MiniMax H3的精度无损加速LoRA套件，可大幅降低视频生成推理延迟。
9. **[Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8)**
   作者：Qwen | 点赞：159 | 下载：76935
   一句话说明：官方原生FP8量化版Qwen3.8-Flash-Next，在保留几乎全部效果的前提下大幅降低显存占用。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)**
   作者：peculiar-ragdoll | 点赞：140 | 下载：87848
   一句话说明：基于Qwen3.5 MoE基座微调的35B参数代码专用模型，量化后可在消费级显卡本地运行。
2. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   作者：froggeric | 点赞：1526 | 下载：0
   一句话说明：社区维护的全版本Qwen系列统一修正聊天模板资源包，解决多版本对话格式错乱问题。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)**
   作者：unsloth | 点赞：603 | 下载：328195
   一句话说明：Unsloth官方发布的Qwen3.8-Flash-Next全量化等级GGUF版本，适配llama.cpp全平台部署。
2. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
   作者：unsloth | 点赞：3239 | 下载：8839153
   一句话说明：Unsloth出品的Qwen3.8-27B全量化GGUF包，本周下载量接近900万次，为全榜最高。
3. **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)**
   作者：unsloth | 点赞：288 | 下载：45936
   一句话说明：GLM-5.3-Flash的GGUF格式量化包，适配端侧本地部署场景。
4. **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)**
   作者：OBLITERATUS | 点赞：946 | 下载：725757
   一句话说明：社区去对齐微调版Qwen3.8-27B，移除原生安全限制，支持所有生成场景。
5. **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)**
   作者：orcarouter | 点赞：1235 | 下载：109121
   一句话说明：适配苹果MLX框架的去对齐版Qwen3.8-27B，可在Apple Silicon设备原生全速运行。
6. **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)**
   作者：HauhauCS | 点赞：785 | 下载：1158065
   一句话说明：引入多令牌预测（MTP）优化的激进去对齐Qwen3.8-27B GGUF版，生成速度提升超过30%。
7. **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)**
   作者：orcarouter | 点赞：1286 | 下载：301964
   一句话说明：全精度去对齐版Qwen3.8-27B的FP8量化版本，可单卡消费级GPU运行。
8. **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)**
   作者：JonathanColetti | 点赞：850 | 下载：1991437
   一句话说明：社区热度最高的去对齐版Qwen3.8-27B GGUF包，生态适配最为完善。
9. **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)**
   作者：orcarouter | 点赞

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*