# Hugging Face 热门模型日报 2026-07-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-12 22:49 UTC

---

# Hugging Face 热门模型日报（2026.07.13）
---
## 今日速览
本周Hugging Face热门模型榜头部由国产开源大模型主导，智源开源的GLM-5.2以3854周点赞领跑全榜，腾讯混元Hy3等国内厂商新品也进入上游梯队。基于阿里通义千问Qwen3.5/3.6底座的社区衍生模型占比超过30%，成为本周生态最活跃的模型家族。大量端侧可部署的GGUF量化模型下载量突破百万，普通用户本地化运行大模型的门槛进一步降低。垂直领域的OCR、表格建模、多模态定位新品集中发布，落地类工具模型热度持续走高。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   作者：tencent | 点赞：717 | 下载：8,655
   腾讯开源的新一代混元文本生成大模型，原生支持长上下文推理，发布后快速获得国内开发者关注进入榜单上游。
2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 点赞：3,854 | 下载：441,413
   智源开源的新一代MoE架构开源大模型，原生支持多轮对话与复杂推理，性能对标一线闭源大模型，是本周周点赞最高的基座类模型。
3. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   作者：froggeric | 点赞：861 | 下载：0
   社区开发者维护的Qwen系列统一对话模板工具包，解决了不同Qwen衍生模型的对话格式兼容问题，被大量开发者高频引用。
4. **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**
   作者：GnLOLot | 点赞：200 | 下载：49,268
   基于MiniCPM5 1B小参数基座微调的端侧推理模型，专门优化了思维链输出效果，适配极低配置硬件运行。
5. **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**
   作者：unsloth | 点赞：152 | 下载：44,614
   Unsloth团队推出的DeepSeek V4闪电版GGUF量化模型，大幅降低了大参数量级推理基座的硬件门槛。
6. **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)**
   作者：nvidia | 点赞：131 | 下载：901
   英伟达开源的新一代Nemotron系列30B参数文本生成基座，专门针对工业级落地场景做了稳定性优化。
7. **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
   作者：meituan-longcat | 点赞：182 | 下载：1,767
   美团开源的长上下文大模型，在超长文档理解、代码全库检索场景表现突出，本周正式发布新版本获得大量关注。
8. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
   作者：yuxinlu1 | 点赞：1,159 | 下载：445,368
   基于Gemma4微调的端侧智能体模型，支持本地直接调用终端执行命令，下载量突破40万成为热门端侧Agent模型。
9. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
   作者：deepreinforce-ai | 点赞：855 | 下载：1,347,036
   开源社区全新推出的35B参数全场景通用大模型，开源协议宽松支持商用，下载量破百万。
10. **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**
    作者：nvidia | 点赞：112 | 下载：34,796
    英伟达开源的75B参数高难度推理专属基座，在奥数、代码解谜场景表现远超同参数级模型。
11. **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**
    作者：SupraLabs | 点赞：106 | 下载：1,434
    仅51M参数的小模型路由工具，可自动把用户请求分配给最合适的大模型，大幅降低多模型部署成本。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者：empero-ai | 点赞：2,043 | 下载：1,967,677
   基于Qwen3.5微调的9B参数多模态推理模型，原生支持百万级上下文，全量下载量近200万。
2. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
   作者：bottlecapai | 点赞：260 | 下载：4,463
   社区基于Qwen3.6微调的多模态深度思考模型，专门优化了图文结合场景下的推理输出能力。
3. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
   作者：conradlocke | 点赞：208 | 下载：0
   Krea2文生图模型的人像编辑LoRA，可实现零损失修改人像特征，是本周热门的图像微调工具。
4. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 点赞：1,942 | 下载：1,430,656
   百度开源的无限制OCR模型，支持任意语言、任意排版的文档识别，下载量突破140万。
5. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者：HauhauCS | 点赞：2,673 | 下载：2,596,384
   社区推出的无审查Qwen3.6 35B多模态模型，完全移除内容对齐限制，是本周下载量最高的无限制大模型。
6. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   作者：OpenMOSS-Team | 点赞：126 | 下载：14,491
   复旦大学MOSS团队开源的音频转录+说话人分治一体化模型，支持长音频一键输出带角色标识的转写结果。
7. **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
   作者：Alissonerdx | 点赞：107 | 下载：0
   LTX文生视频模型的人脸身份保持LoRA，解决了视频生成过程中人脸漂移的痛点，受到内容创作者欢迎。
8. **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)**
   作者：migtissera | 点赞：91 | 下载：971
   社区微调的多模态角色扮演模型，在图文结合的叙事场景表现突出。
9. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/NVIDIA-LocateAnything-3B)**
   作者：nvidia | 点赞：2,714 | 下载：1,501,653
   英伟达开源的3B参数零样本图像定位模型，无需微调即可定位任意文本描述的目标，下载量突破150万。
10. **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)**
    作者：CohereLabs | 点赞：95 | 下载：9,860
    Cohere开源的阿拉伯语专属语音识别模型，支持各类方言的高精度转写，填补了小语种ASR的开源空白。
11. **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)**
    作者：nineninesix | 点赞：85 | 下载：2,263
    基于Qwen3.5微调的文本转语音模型，生成语音的自然度远超当前主流开源TTS模型。
12. **[robbyant/lingbot-video-moe-30b-a3b](

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*