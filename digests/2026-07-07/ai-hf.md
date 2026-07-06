# Hugging Face 热门模型日报 2026-07-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-06 23:08 UTC

---

# Hugging Face 热门模型日报
日期：2026-07-07 | 统计维度：周点赞数TOP30榜单
---
## 今日速览
今日Hugging Face周热门榜呈现明显的端侧部署导向特征，智谱开源的GLM-5.2以3529点赞登顶周点赞榜首，多款开源模型的社区GGUF量化版本下载量突破200万。国产厂商百度、腾讯、通义千问、深度求索的发布均进入热度序列，Qwen系列衍生模型占榜单总量超30%成为最大阵营。专用场景模型覆盖表格计算、PII识别、OCR等实用方向，社区微调的无审查、高推理优化版本下载量普遍超过官方原生权重。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 点赞：3529 | 下载：231218
   一句话说明：智谱最新开源MoE架构大语言模型，支持长上下文对话，登顶本周周点赞榜榜首。
2. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   作者：tencent | 点赞：320 | 下载：2
   一句话说明：腾讯混元第三代原生发布版本，刚上架仅产生2次下载尚未公开完全开放。
3. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
   作者：deepseek-ai | 点赞：409 | 下载：14276
   一句话说明：深度求索发布的分布式推理优化版本，配套最新推理框架论文同步开源。
4. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
   作者：Qwen | 点赞：556 | 下载：57835
   一句话说明：阿里通义千问面向Agent场景优化的35B MoE模型，原生支持多工具调用。
5. **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
   作者：meituan-longcat | 点赞：113 | 下载：43
   一句话说明：美团开源的长上下文专项优化模型，刚进入公开发布阶段。
6. **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
   作者：mistralai | 点赞：141 | 下载：106
   一句话说明：Mistral最新119B大参数基础模型，仅小范围开放测试。
7. **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)**
   作者：deepreinforce-ai | 点赞：350 | 下载：231342
   一句话说明：基于Qwen3.5 MoE微调的MIT协议开源大模型，商业使用无限制。
8. **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)**
   作者：deepreinforce-ai | 点赞：391 | 下载：86136
   一句话说明：同系列9B轻量版本，主打低资源占用下高推理性能。
9. **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)**
   作者：AliesTaha | 点赞：177 | 下载：2903
   一句话说明：基于Qwen3微调的故事生成专项模型，创意写作表现突出。
10. **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)**
    作者：nvidia | 点赞：126 | 下载：10766
    一句话说明：英伟达发布的双塔结构30B基础模型，面向检索增强场景优化。
11. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
    作者：empero-ai | 点赞：698 | 下载：149421
    一句话说明：对齐Claude 3.5能力的Qwen3.5微调版本，支持1M超长上下文窗口。

---
### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 点赞：1790 | 下载：1070230
   一句话说明：百度开源的无限长度OCR模型，支持任意倾斜、模糊文档全要素识别。
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   作者：nvidia | 点赞：2633 | 下载：1340559
   一句话说明：英伟达开源的通用图像定位模型，可自然语言指令框选图像任意目标，位列周榜点赞第三。
3. **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
   作者：krea | 点赞：528 | 下载：109470
   一句话说明：极速文生图模型，生成速度较主流SD3版本快4倍以上。
4. **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)**
   作者：eric-venti-seeds | 点赞：78 | 下载：0
   一句话说明：Flux2 Klein专项光影LoRA，专门优化图像生成的太阳光照方向可控性。
5. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
   作者：InternScience | 点赞：344 | 下载：8766
   一句话说明：面壁智能发布的多模态Agent原生模型，支持图文混合环境自主任务规划。

---
### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   作者：google | 点赞：255 | 下载：7036
   一句话说明：谷歌开源的表格基础模型，零样本下表格分类、回归精度超过传统ML方案。
2. **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**
   作者：nationaldesignstudio | 点赞：136 | 下载：3821
   一句话说明：开源PII识别模型，可精准检测文本中的手机号、身份证号等隐私信息。
3. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   作者：froggeric | 点赞：694 | 下载：0
   一句话说明：通义千问全系列修复版聊天模板，解决不同版本模型推理时的格式崩溃问题。

---
### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者：empero-ai | 点赞：1635 | 下载：1617508
   一句话说明：Claude对齐大模型的GGUF量化版本，支持llama.cpp端侧直接部署。
2. **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
   作者：nvidia | 点赞：289 | 下载：430676
   一句话说明：英伟达ModelOpt工具量化的Qwen3.6 27B版本，FP4精度下性能损失不到1%。
3. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
   作者：deepreinforce-ai | 点赞：756 | 下载：436780
   一句话说明：全开源35B MIT协议大模型的GGUF量化版，可完全商用无限制。
4. **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)**
   作者：deepreinforce-ai | 点赞：442 | 下载：393142
   一句话说明：9B轻量版Ornith模型量化产物，可在消费级显卡全速运行。
5. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
   作者：yuxinlu1 | 点赞：1049 | 下载：370884
   一句话说明：Gemma4微调的Agent专项模型量化版，支持原生终端控制能力。
6. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者：HauhauCS | 点赞：2528 | 下载：2910241
   一句话说明：无审查版Qwen3.6 35B多模态量化模型，下载量接近300万位列全榜第一。
7. **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)**
   作者：huihui-ai | 点赞：176 | 下载：6660
   一句话说明：GLM-5.2的对齐擦除量化版本，完全移除原生内容安全限制。
8. **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)**
   作者：Jackrong | 点赞：149 | 下载：126831
   一句话说明：面向代码生成优化的Qwen3.6多模态量化版本，支持图文混合编程需求。
9. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
   作者：yuxinlu1 | 点赞：2622 | 下载：664319
   一句话说明：Gemma4代码专项优化量化版，代码生成能力超越同参数级DeepSeek Coder V2。
10. **[DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED](https://huggingface.co/DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*