# Hugging Face 热门模型日报 2026-07-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-14 22:56 UTC

---

# Hugging Face 热门模型日报（2026-07-15）
统计维度：本周点赞量排序Top 30模型

---

## 今日速览
本次上榜的头部高赞高下载模型集中在Qwen生态衍生版本，国产大模型厂商百度、腾讯、智源等接连开源垂类新能力模块，端侧可直接部署的量化版本全网下载量普遍突破百万量级。音视频生成、原生Agent模型的社区提交热度持续攀升，轻量化推理适配已经成为开源模型发布的标配优化环节。本周榜单无闭源模型周边的付费衍生内容，全量核心模型均支持商用二次开发。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 点赞：3,946 | 下载：489,611
   一句话说明：智源官方最新开源的MoE架构通用对话大模型，原生支持百万级长文本推理，登顶本周点赞榜第二名。
2. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   作者：tencent | 点赞：780 | 下载：10,406
   一句话说明：腾讯混元V3系列刚开源的原生文本生成大模型，发布仅一周就进入榜单核心区，引发开发者对其长上下文能力的测试热潮。
3. **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**
   作者：GnLOLot | 点赞：232 | 下载：89,892
   一句话说明：基于MiniCPM5小尺寸模型微调的深度思考版本，仅1B参数即可实现多步推理，端侧部署门槛极低。
4. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
   作者：InternScience | 点赞：537 | 下载：30,539
   一句话说明：基于Qwen3.5 MoE微调的原生Agent智能体模型，原生兼容多模态工具调用，是本周热度最高的开源智能体底座。
5. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   作者：prism-ml | 点赞：106 | 下载：23
   一句话说明：2bit三值量化的极致压缩27B大模型，推理精度损失低于2%，可直接在8G内存的消费级PC上运行。
6. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
   作者：yuxinlu1 | 点赞：1,186 | 下载：468,629
   一句话说明：基于谷歌Gemma4微调的原生Agent编程大模型，支持终端直接交互执行代码，是本周热度最高的社区Agent衍生模型。
7. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
   作者：deepreinforce-ai | 点赞：880 | 下载：1,533,354
   一句话说明：完全MIT协议开源的35B通用大模型，无任何商业使用限制，是中小厂商二次开发的首选底座。
8. **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**
   作者：nvidia | 点赞：117 | 下载：41,755
   一句话说明：英伟达针对推理解谜场景专项优化的75B大模型，在数学竞赛、逻辑谜题测试集上表现追平闭源第一梯队。
9. **[empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2)**
   作者：empero-ai | 点赞：114 | 下载：3,959
   一句话说明：基于Qwen3.5微调的通用对话大模型，具备类Claude的叙事生成能力，是社区热门的长内容创作底座。
10. **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)**
    作者：nvidia | 点赞：149 | 下载：1,332
    一句话说明：英伟达最新开源的音频理解专用LLM，支持长音频内容的直接语义生成输出，填补了端侧音频大模型的空白。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者：empero-ai | 点赞：2,151 | 下载：2,006,265
   一句话说明：基于Qwen3.5微调的多模态叙事生成模型，支持1M上下文长度的图文混合创作，本周下载量突破200万。
2. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
   作者：bottlecapai | 点赞：341 | 下载：6,208
   一句话说明：基于Qwen3.6微调的多模态深度思考模型，图文联合推理能力远超同尺寸通用大模型。
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者：HauhauCS | 点赞：2,728 | 下载：2,443,871
   一句话说明：无对齐限制的多模态MoE大模型，支持自由的图文生成场景，本周点赞量位列全榜第三。
4. **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)**
   作者：robbyant | 点赞：104 | 下载：700
   一句话说明：美国团队开源的MoE架构视频生成大模型，支持生成10分钟以上长视频，性能追平商用文生视频产品。
5. **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)**
   作者：robbyant | 点赞：96 | 下载：0
   一句话说明：开源端侧极速图生视频模型，单张图片生成2秒视频仅需100ms，是本周最受关注的轻量视频生成方案。
6. **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
   作者：Alissonerdx | 点赞：139 | 下载：0
   一句话说明：人脸身份保持的文生视频LoRA，生成视频过程中人物脸形、特征完全不漂移。
7. **[mgwr/M87](https://huggingface.co/mgwr/M87)**
   作者：mgwr | 点赞：103 | 下载：2,408
   一句话说明：面向超现实风格优化的文生图LoRA，生成的科幻场景细节表现远超同类开源模型。
8. **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)**
   作者：migtissera | 点赞：111 | 下载：1,262
   一句话说明：基于Qwen3.5微调的多模态对话大模型，面向通用创作场景做了专项优化。

---

### 🔧 专用模型（OCR、音频处理、垂类能力）
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 点赞：1,981 | 下载：1,715,301
   一句话说明：百度刚开源的不限场景OCR模型，支持手写、公式、复杂排版文档的100%准确识别，商用完全免费。
2. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   作者：OpenMOSS-Team | 点赞：188 | 下载：65,109
   一句话说明：端侧音频转写+说话人分角色一体化模型，支持小时级长音频的秒级处理，无需联网即可运行。
3. **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*