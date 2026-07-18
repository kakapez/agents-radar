# Hugging Face 热门模型日报 2026-07-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-18 22:49 UTC

---

# Hugging Face 热门模型日报（2026.07.19）
---
## 今日速览
本次统计基于Hugging Face Hub本周点赞量排序的Top30热门模型，头部资产由大厂新发布基座与社区高实用性衍生模型共同占据。Google新发布的Gemma4 31B多模态版本以超1200万周下载量断层领先全榜，智谱开源GLM-5.2基座周点赞突破4千，登顶文本生成类模型热度榜首。全榜超40%的模型为GGUF/MLX端侧量化版本，端侧部署友好的轻量推理资产正在成为社区贡献的主流方向。OCR、音视频转写、视频生成类垂直实用模型下载量普遍破百万，产业侧落地需求持续拉动相关资产热度。

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者：zai-org | 点赞：4125 | 下载：541662
   智谱最新开源的MoE架构大语言基座，凭借原生超长上下文、高对话推理性能，登顶本周文本生成类模型热度榜首。
2. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   作者：tencent | 点赞：829 | 下载：13571
   腾讯开源的第三代混元文本大模型，主打轻量化部署下的高任务完成度，本周迎来社区集中二次开发适配。
3. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
   作者：InternScience | 点赞：578 | 下载：35575
   面向Agent场景的专用大模型，基于Qwen3.5 MoE基座微调，原生支持工具调用与多轮自主任务规划。
4. **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)**
   作者：GnLOLot | 点赞：142 | 下载：5271
   基于MiniCPM5 1B超小基座做的深度思考微调版本，体积极小但推理表现接近大模型的完整思考链效果。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
   作者：thinkingmachines | 点赞：1058 | 下载：12456
   主打多模态对话的全新原生视觉语言模型，图文理解表现优于同参数级通用基座，上线即获大量开发者试用。
2. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者：empero-ai | 点赞：2314 | 下载：2112869
   基于Qwen3.5微调的9B多模态推理模型，主打超长对话下的故事创作、逻辑推理能力，适配端侧部署。
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者：baidu | 点赞：2025 | 下载：2088470
   百度开源的全场景OCR多模态模型，支持任意语种、任意复杂版式的文字识别，上线即获得产业侧大规模下载。
4. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
   作者：Wan-AI | 点赞：113 | 下载：2328
   字节跳动开源的图像生成视频14B模型，主打人体动作序列生成的连贯性，支持生成高清人物舞蹈视频。
5. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   作者：OpenMOSS-Team | 点赞：258 | 下载：86385
   开源的音频转写+说话人分离一体化模型，支持长音频无断点实时处理，大幅降低语音转写落地成本。
6. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   作者：google | 点赞：3263 | 下载：12608008
   谷歌最新发布的多模态旗舰开源模型，图文理解、对话性能比肩闭源GPT-4V级产品，是本周下载量最高的资产。

### 🔧 专用模型（代码、工具、垂直场景）
1. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
   作者：conradlocke | 点赞：392 | 下载：0
   基于Krea-2的图像身份编辑LoRA，支持ComfyUI一键调用，可在保持人物特征不变的前提下编辑图像风格、场景。
2. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
   作者：Cactus-Compute | 点赞：266 | 下载：935
   面向Agent场景的专用工具调用小模型，用JAX实现全链路推理优化，函数调用准确率远高于通用基座。
3. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   作者：froggeric | 点赞：941 | 下载：0
   修复版Qwen全系列对话模板Jinja资源，解决了不同推理框架下Qwen系列输出异常的痛点，被社区大量收藏。

### 📦 微调与量化（社区微调、GGUF、量化版本）
1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   作者：prism-ml | 点赞：730 | 下载：301893
   2bit三进制量化的27B对话大模型，可在消费级16G显存显卡上流畅运行，是本周最受关注的超低位量化资产。
2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   作者：prism-ml | 点赞：441 | 下载：1218815
   1bit量化的27B通用对话模型，体积压缩到3.5GB即可完整运行全能力，下载量突破120万。
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者：HauhauCS | 点赞：2863 | 下载：2190398
   无对齐限制的Qwen3.6 35B MoE多模态GGUF版本，支持全场景自由调用，受到大量开发者追捧。
4. **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**
   作者：jlnsrk | 点赞：131 | 下载：3869
   针对CPU场景优化的int4量化GLM-5.2版本，通过专家流调度技术大幅降低MoE模型的内存占用，可在普通办公电脑运行。
5. **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**
   作者：AngelSlim | 点赞：126 | 下载：100768
   腾讯Hy3大模型的官方适配GGUF版本，Apache2.0协议支持商用，本周面向llama.cpp生态完成全兼容适配。

## 生态信号
本周榜单中Qwen、GLM、MiniCPM等国产开源模型家族的衍生资产占比接近3成，热度已经反超海外同级别开源基座。当前TOP30热门资产全部为完全开源权重，闭源模型相关衍生资源几乎没有进入主流扩散榜，开源社区的迭代速度、场景适配灵活性已经远超闭源竞品。本周端侧量化活动爆发，1bit/2bit超低位量化的27B级模型已经可以在消费级硬件流畅运行，社区贡献重点已经从基座预训练转向部署适配和场景化微调。

## 值得探索
1. **baidu/Unlimited-OCR**：百度最新开源的全场景OCR模型，支持任意复杂版式识别，下载量突破200万，没有使用限制，可直接集成到各类办公、工业识别场景中，商用价值极高。
2. **prism-ml/Bonsai-27B-gguf**：仅3.5GB大小的1bit量化27B大模型，消费级硬件即可流畅运行，性能接近半精度原生版本，是目前端侧部署性价比最高的大模型资产。
3. **google/gemma-4-31B-it**：谷歌最新开源的旗舰多模态模型，性能比肩闭源第一梯队产品，协议友好允许商用，适合直接搭建私有多模态对话服务。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*