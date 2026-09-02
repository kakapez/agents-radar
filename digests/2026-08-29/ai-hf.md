# Hugging Face 热门模型日报 2026-08-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-29 03:31 UTC

---

# Hugging Face 热门模型日报（2026-08-29）
---
## 今日速览
本周Hugging Face周点赞榜呈现国产大模型霸榜态势，Qwen、DeepSeek、Kimi等头部中文厂商发布的新基座包揽点赞前6席位。Qwen3.8全系列衍生生态活跃度远超同期其他模型，社区二次开发版本下载量普遍高于官方原版。视频、音频生成赛道的开源新模型下载量破百万级门槛，端侧部署友好的量化格式成为社区分发主流选择。多个尚未正式发布的厂商预览版刚上架就跻身热门序列，开源大模型的迭代速度进一步加快。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
   作者：Qwen | 点赞：13,157 | 下载：3,457,687
   说明：通义千问3.8系列旗舰级图文多模态基座，是本次周榜总下载量最高的通用大模型，支持长文本上下文、多轮对话能力。
2. **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)**
   作者：zai-org | 点赞：1,519 | 下载：34
   说明：智谱AI最新GLM-5系列的低延迟快推理版本，刚上架就冲上周榜前列，主打端侧实时对话场景。
3. **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)**
   作者：zai-org | 点赞：1,141 | 下载：0
   说明：GLM-5系列全参数完整版基座，官方刚公开权重即获得大量社区关注，暂未开放公开下载。
4. **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)**
   作者：tencent | 点赞：247 | 下载：0
   说明：腾讯混元V4的预览版本，未开放下载仅作技术展示，上线即获得大量开发者围观。
5. **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)**
   作者：ornith-ai | 点赞：485 | 下载：88,102
   说明：基于Qwen3.5 MoE基座微调的开源社区长文本模型，主打300万token超长上下文能力。
6. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
   作者：deepseek-ai | 点赞：3,790 | 下载：3,959,575
   说明：深度求索V4大模型的Flash快推理版本，低延迟表现突出，累计下载量近400万次。
7. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
   作者：moonshotai | 点赞：11,066 | 下载：2,675,145
   说明：月之暗面Kimi系列最新开源图文大模型，长文档处理能力广受开发者认可。
8. **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)**
   作者：pipecat-ai | 点赞：116 | 下载：64
   说明：面向语音对话场景优化的轻量语言模型，主打低延迟实时语音交互。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
   作者：Qwen | 点赞：4,175 | 下载：4,810
   说明：通义千问最新多模态快拍版本，支持图像秒级解析、图文混合实时对话，周点赞排名第一。
2. **[Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8)**
   作者：Qwen | 点赞：147 | 下载：2,219
   说明：官方发布的Qwen3.8-Flash-Next FP8量化版本，进一步降低部署门槛。
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
   作者：Lightricks | 点赞：2,026 | 下载：912,729
   说明：海外头部文生视频厂商Lightricks的最新版本模型，支持任意时长高清视频生成。
4. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
   作者：MiniMaxAI | 点赞：4,587 | 下载：4,848,404
   说明：MiniMax开源的文生视频旗舰模型，出片质量追平主流商用闭源产品，下载量近500万次。
5. **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)**
   作者：BreezeBlue | 点赞：161 | 下载：240
   说明：新一代自然语音生成模型，支持多语种、多风格零样本语音克隆。
6. **[alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)**
   作者：alibaba-pai | 点赞：159 | 下载：3,344
   说明：阿里PAI团队基于MiniMax-H3开发的统一视频ControlNet工具，支持视频姿态、轨迹等精细化控制。
7. **[alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)**
   作者：alibaba-pai | 点赞：136 | 下载：609
   说明：阿里PAI团队开源的MiniMax-H3加速LoRA套件，可将视频生成速度提升3倍以上。
8. **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**
   作者：MiniMaxAI | 点赞：1,289 | 下载：19,726
   说明：支持文本生成完整全时长流行音乐的开源音频大模型，可直接输出带人声、伴奏的商用级音频。

### 🔧 专用模型
1. **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)**
   作者：thomsonreuters | 点赞：145 | 下载：349
   说明：路透集团面向财经场景训练的专用图文大模型，主打金融资讯解析、财报自动生成能力。
2. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   作者：froggeric | 点赞：1,510 | 下载：0
   说明：社区开发者发布的Qwen全系列聊天模板修复工具，解决不同部署框架下的格式不兼容问题，获得大量开发者点赞。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
   作者：unsloth | 点赞：3,150 | 下载：7,758,790
   说明：Unsloth团队出品的Qwen3.8-27B GGUF量化版本，支持Llama.cpp端侧部署，是本次榜单下载量最高的模型。
2. **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)**
   作者：unsloth | 点赞：529 | 下载：4,354
   说明：Qwen3.8-Flash-Next的GGUF端侧量化版本，让多模态快推理大模型可以在消费级显卡上运行。
3. **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)**
   作者：OBLITERATUS | 点赞：882 | 下载：509,270
   说明：社区知名去对齐版本，完全移除模型的安全对齐限制，输出自由度更高。
4. **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)**
   作者：orcarouter | 点赞：1,233 | 下载：273,577
   说明：Qwen3.8-27B无对齐FP8版本，保留全精度性能的同时进一步压缩体积。
5. **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)**
   作者：orcarouter | 点赞：1,190 | 下载：83,352
   说明：适配苹果MLX框架的无对齐版本，可直接在Apple Silicon芯片上本地运行。
6. **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)**
   作者：HauhauCS | 点赞：727 | 下载：938,219
   说明：带MTP多令牌预测优化的激进版无对齐GGUF模型，生成速度比原生版本快2倍。
7. **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)**
   作者：unsl

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*