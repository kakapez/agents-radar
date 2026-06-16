# Hugging Face 热门模型日报 2026-06-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-16 23:24 UTC

---

# Hugging Face 热门模型日报（2026-06-17）
---
## 今日速览
今日Hugging Face周点赞榜呈现头部国产开源模型领跑态势，DeepSeek-V4-Pro以4895点赞断层登顶，成为本期最大黑马。Google全系列Gemma4基座集中进入热度榜单，覆盖原生通用模型、多模态扩散版本及社区量化全链路。Qwen3.5/3.6家族的相关衍生版本累计下载量突破700万，端侧部署需求持续爆发。英伟达、MiniMax等厂商也集中发布了视觉、音频赛道的新开源SOTA模型，细分垂类开放权重生态进一步完善。

---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   作者：deepseek-ai | 点赞：4895 | 下载：2,829,747
   一句话说明：当前开源文本生成赛道的SOTA级通用大模型，推理、对话能力对齐闭源顶尖产品，是本期热度最高的模型。
2. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
   作者：Qwen | 点赞：2135 | 下载：3,360,615
   一句话说明：通义千问最新开源35B多模态基座，支持A3B低比特部署，下载量位列全榜第一，是社区部署量最高的多模态通用模型。
3. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   作者：google | 点赞：1052 | 下载：1,223,383
   一句话说明：Google官方发布的Gemma4系列通用统一基座，支持any-to-any全模态输入输出，性能表现远超上一代Gemma3。
4. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 点赞：263 | 下载：0
   一句话说明：智谱全新开源MoE架构大模型，采用DSA稀疏注意力设计，暂未开放权重就已经获得大量社区关注。
5. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者：HauhauCS | 点赞：1887 | 下载：2,716,651
   一句话说明：社区针对Qwen3.6做的无对齐激进微调版本，完全移除安全对齐限制，受到追求原生推理能力的用户热捧。
6. 其余上榜语言模型还包括OBLITERATUS/Gemma-4-12B-OBLITERATED、microsoft/FastContext-1.0-4B-SFT、nex-agi/Nex-N2-Pro、nex-agi/Nex-N2-mini、WeiboAI/VibeThinker-3B、prefeitura-rio/Rio-3.5-Open-397B。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   作者：nvidia | 点赞：2101 | 下载：98,698
   一句话说明：英伟达最新开源的开放世界视觉定位3B模型，支持任意图像的目标检索定位，性能超出同期同类产品30%以上。
2. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
   作者：google | 点赞：944 | 下载：375,974
   一句话说明：Google推出的扩散类多模态Gemma模型，支持图文混合交互与生成，是全球首款端侧可部署的26B级文生图大语言基座。
3. **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
   作者：MiniMaxAI | 点赞：1009 | 下载：25,064
   一句话说明：MiniMax开源的全新多模态基座，支持超长图文上下文理解，上线后快速获得社区关注。
4. 其余上榜多模态模型包括ideogram-ai/ideogram-4-fp8、zai-org/SCAIL-2、bosonai/higgs-audio-v3-tts-4b、nvidia/nemotron-3.5-asr-streaming-0.6b、Zyphra/ZONOS2、RazzzHF/Realism_Engine_Ideogram_4。

### 🔧 专用模型（代码、数学、垂类）
1. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
   作者：moonshotai | 点赞：798 | 下载：102,206
   一句话说明：月之暗面开源的代码专项大模型，长代码理解能力突出，是开发者群体的热门选型。
2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
   作者：yuxinlu1 | 点赞：1144 | 下载：60,921
   一句话说明：社区针对Gemma4做的专项代码微调版本，代码生成、推理能力大幅超越原生基座。
3. **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
   作者：CohereLabs | 点赞：412 | 下载：12,129
   一句话说明：Cohere推出的轻量代码小模型，推理速度极快，适合低资源场景的代码补全需求。

### 📦 微调与量化（社区微调、GGUF量化）
1. **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
   作者：unsloth | 点赞：631 | 下载：1,009,602
   一句话说明：Unsloth官方推出的Gemma4-12B-it GGUF量化版本，适配全平台llama.cpp端侧部署，下载量破百万。
2. **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
   作者：DavidAU | 点赞：369 | 下载：366,279
   一句话说明：社区知名作者DavidAU推出的重度微调无对齐代码专项GGUF版本，长思维链能力极强。
3. 其余上榜量化模型包括unsloth/diffusiongemma-26B-A4B-it-GGUF、unsloth/Kimi-K2.7-Code-GGUF、unsloth/MiniMax-M3-GGUF、unsloth/North-Mini-Code-1.0-GGUF。

---
## 生态信号
当前Gemma4、Qwen3.5/3.6两大模型家族势头最猛，覆盖官方基座、社区二次微调、全比特量化全链路，已经成为开源生态的绝对主流。头部厂商的核心旗舰模型全部选择开放权重，开源模型的推理、多模态表现已经追平同期闭源SOTA产品。Unsloth生态活跃度极高，所有热门新基座上线后一周内就会完成全系列GGUF量化适配，端侧本地部署已经成为当前社区最核心的需求方向，无对齐微调、代码专项微调的社区贡献占比持续提升。

---
## 值得探索
1. **DeepSeek-V4-Pro**：当前开源能力天花板级别的通用大模型，4895周点赞断层第一，280万+下载量验证了其社区认可度，非常适合做生产环境的核心推理基座测试。
2. **nvidia/LocateAnything-3B**：英伟达全新开源的开放世界视觉定位小模型，3B参数量级即可实现媲美大模型的任意目标检索能力，是视觉方向开发者值得重点研究的新SOTA。
3. **unsloth/gemma-4-12b-it-GGUF**：下载量破百万的端侧标杆模型，12B参数量级支持全模态能力，可直接在消费级硬件上运行，是本地部署多模态大模型的首选选型。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*