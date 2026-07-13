# Hugging Face 热门模型日报 2026-07-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-13 22:55 UTC

---

# Hugging Face 热门模型日报 | 2026-07-14
---
## 今日速览
今日Hugging Face周热度榜头部由国产大模型主导，智谱开源的GLM-5.2以3896周点赞登顶全榜热度，腾讯刚上线的混元Hy3也跻身TOP10席位。基于通义千问Qwen3.5/3.6系列衍生的模型占据近半上榜名额，多款端侧可部署的GGUF格式模型周下载量突破200万。百度、英伟达先后发布垂直领域专用新模型，覆盖全场景OCR、通用图像定位等实用落地赛道。社区定制化微调活跃度走高，无审查、长思考、Agent增强类衍生模型收获大量开发者青睐。

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 点赞3896 | 下载464914
   智谱最新开源的MoE基座大模型，主打高推理效率与多轮对话能力，是本周全平台热度最高的官方基座发布。
2. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   作者：tencent | 点赞754 | 下载9157
   腾讯混元大模型第三代官方开源版本，刚发布就快速登上周榜，主打中文原生性能优化。
3. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
   作者：InternScience | 点赞524 | 下载29801
   面壁智能团队推出的Agent专属大模型，针对工具调用、复杂任务规划做了定向优化。
4. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
   作者：deepreinforce-ai | 点赞867 | 下载1392300
   完全开源MIT协议的35B参数通用大模型，支持端侧部署，下载量破百万适配各类私有化场景。
5. **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)**
   作者：nvidia | 点赞142 | 下载1058
   英伟达最新推出的30B参数高效推理大模型，针对NVIDIA硬件做了全栈加速优化。
6. **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**
   作者：nvidia | 点赞114 | 下载38775
   英伟达75B参数推理增强大模型，主打复杂逻辑题、代码难题求解能力。
7. **[empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2)**
   作者：empero-ai | 点赞96 | 下载2476
   社区基于Qwen3.5微调的9B通用角色扮演基座，原生适配长对话场景。
8. **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**
   作者：SupraLabs | 点赞113 | 下载1573
   超轻量大模型路由模型，可自动分类用户请求分发到最合适的基座模型。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者：empero-ai | 点赞2080 | 下载1985221
   社区热门9B多模态推理模型，支持图文输入，长上下文可达1M，适配端侧部署。
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 点赞1963 | 下载1506937
   百度开源的全场景无限制OCR模型，支持手写、文档、复杂场景文字识别，上线后快速破百万下载。
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者：HauhauCS | 点赞2710 | 下载2512124
   社区无审查多模态大模型，35B参数原生支持图文输入，下载量超250万。
4. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/Locate-Anything-3B)**
   作者：nvidia | 点赞2720 | 下载1503441
   英伟达开源的通用图像定位大模型，支持开放词汇的任意目标检测与定位，是本周热度最高的CV类模型。
5. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   作者：OpenMOSS-Team | 点赞161 | 下载39509
   国内团队开源的一站式音频转写+说话人分角色模型，支持多语种长音频处理。
6. **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)**
   作者：CohereLabs | 点赞102 | 下载11647
   针对阿拉伯语优化的ASR模型，在小语种语音识别上效果优于通用模型。
7. **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
   作者：Alissonerdx | 点赞124 | 下载0
   面向LTX视频生成模型的人脸身份保留LoRA，解决生成视频人脸漂移问题。
8. **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)**
   作者：robbyant | 点赞92 | 下载0
   高效图生视频世界模型，14B参数实现秒级生成高帧率短视频。
9. **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)**
   作者：migtissera | 点赞103 | 下载1105
   社区基于Qwen3.5微调的27B多模态角色扮演模型，对话风格自然度极高。
10. **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)**
    作者：nineninesix | 点赞95 | 下载3940
    基于Qwen3.5微调的端侧TTS模型，支持多音色自然语音生成。
11. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
    作者：bottlecapai | 点赞304 | 下载4909
    基于Qwen3.6微调的27B多模态推理模型，针对视觉类推理题做了定向优化。

### 🔧 专用模型（代码、数学、垂直场景）
1. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
   作者：conradlocke | 点赞251 | 下载0
   面向Krea2文生图模型的人物身份编辑LoRA，无需微调即可实现人物属性修改。
2. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   作者：froggeric | 点赞886 | 下载0
   修复了全系列Qwen模型对话模板的工具包，解决各类部署场景下对话格式错误问题，广受开发者欢迎。
3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   作者：google | 点赞362 | 下载21590
   谷歌开源的表格大模型，支持零样本表格分类、回归任务，无需微调即可适配各类结构化数据场景。
4. **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)**
   作者：open-gigaai | 点赞128 | 下载0
   Apache2.0协议开源的通用生成式世界模型，支持开放域3D场景生成。
5. **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)**
   作者：robbyant | 点赞99 | 下载513
   开源30B参数视频生成MoE模型，大幅降低视频生成算力门槛。

### 📦 微调与量化（社区微调、GGUF、AWQ等）
1. **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**
   作者：GnLOLot | 点赞219 | 下载68714
   1B参数级端侧思考模型，手机等嵌入式设备即可运行完整推理链。
2. **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**
   作者：unsloth | 点赞161 | 下载49423
   Unsloth团队推出的DeepSeek V4 Flash高效GGUF量化版本，推理速度提升300%。
3. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
   作者：yuxinlu1 | 点赞1176 | 下载452627
   社区基于Gemma4微调的Agent专属量化模型，主打代码生成、终端操作能力，适配端侧Agent部署。
4. **[empero-ai/Qw

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*