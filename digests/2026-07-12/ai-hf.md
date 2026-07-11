# Hugging Face 热门模型日报 2026-07-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-11 22:48 UTC

---

# Hugging Face 热门模型日报 2026-07-12
---
## 今日速览
今日Hugging Face周度热门榜中，国产AI厂商发布的开源基础模型占据头部高赞席位，阿里通义千问Qwen系列的衍生模型覆盖全品类热门榜。本周共有7款模型周下载量突破100万，全部为面向端侧部署的量化版本与实用工具类模型。腾讯、百度、英伟达、谷歌等多家头部科技企业本周集中开源了各自的新能力模型，覆盖文本生成、OCR、表格推理等多个赛道。围绕基础模型的社区二次微调、适配衍生生态活跃度远超官方原生模型的发布节奏。

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. [tencent/Hy3](https://huggingface.co/tencent/Hy3)
- 作者：tencent，周点赞：697，周下载：8210
- 腾讯开源的混元系列第三代原生文本生成大模型，凭借原生长上下文与强推理能力本周首次登榜，获得大量开发者测试关注。
2. [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)
- 作者：zai-org，周点赞：3829，周下载：421270
- 智谱团队新开源的MoE架构文本生成对话模型，是本周全榜点赞最高的原生基础模型，大量从业者跟进测试其低延迟推理能力。
3. [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)
- 作者：deepreinforce-ai，周点赞：849，周下载：1216495
- 开源协议完全开放的35B文本生成大模型，支持MIT商用授权，周下载破百万适配全场景部署。
4. [nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)
- 作者：nvidia，周点赞：343，周下载：841109
- 英伟达针对自家硬件做格式优化的Qwen3.6定制版大模型，在英伟达GPU上推理速度提升40%。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)
- 作者：empero-ai，周点赞：2008，周下载：1944961
- 基于Qwen3.5微调的9B多模态推理模型，支持1M超长上下文，端侧部署兼容性极强。
2. [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)
- 作者：baidu，周点赞：1929，周下载：1380690
- 百度开源的无限长度OCR模型，支持任意尺寸图片的全文字提取，周下载破130万。
3. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
- 作者：nvidia，周点赞：2707，周下载：1472194
- 英伟达开源的3B参数量开放域多模态定位模型，可实现任意图像中目标的快速检索定位，适配端侧场景。
4. [CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)
- 作者：CohereLabs，周点赞：89，周下载：7687
- Cohere最新开源的阿拉伯语专属语音识别模型，支持方言口音适配。

### 🔧 专用模型（代码、数学、嵌入）
1. [google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)
- 作者：google，周点赞：348，周下载：20110
- 谷歌开源的表格专用基础模型，零样本下即可完成表格分类、回归任务，效果超越多数通用大模型。
2. [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)
- 作者：froggeric，周点赞：851，周下载：0
- 社区开发者整理的Qwen全系列统一对话模板资源包，解决不同版本Qwen模型部署时的格式适配问题。
3. [SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)
- 作者：SupraLabs，周点赞：98，周下载：1275
- 仅51M参数量的大模型路由专用模型，可自动将用户请求分发到最合适的大模型实例上。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
- 作者：HauhauCS，周点赞：2649，周下载：2641936
- 社区微调的无审查Qwen3.6多模态35B量化版，完全移除内容限制，支持本地运行。
2. [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)
- 作者：unsloth，周点赞：1047，周下载：2904169
- Unsloth优化的Qwen3.6 27B多模态GGUF量化版，是本周全榜周下载最高的模型，适配全端侧设备部署。
3. [unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)
- 作者：unsloth，周点赞：140，周下载：38922
- DeepSeek V4大模型的Flash优化GGUF量化版，推理速度提升超2倍。

## 生态信号
本周Qwen 3.5/3.6系列成为绝对主流模型基座，超过12款热门衍生模型均基于该系列微调，生态热度远超其他模型家族。当前开源权重主导的社区生态已经形成飞轮效应：官方发布原生基础模型后，社区在极短时间内产出GGUF量化、无审查、特定场景微调版本，适配全端侧部署需求，甚至英伟达等硬件厂商也主动为开源主流模型推出定制化格式优化版本，闭源模型的生态适配占比持续走低。

## 值得探索
1. **zai-org/GLM-5.2**：本周全榜点赞最高的原生开源基础模型，MoE架构带来极低的推理成本，原生支持长对话，是近期国产开源大模型的标杆级新品，适合作为二次微调的基座。
2. **nvidia/LocateAnything-3B**：仅3B参数量即可实现全场景图像的目标检索与定位，周下载突破147万，非常适合集成到端侧多模态应用里做能力增强。
3. **unsloth/Qwen3.6-27B-MTP-GGUF**：全榜周下载最高的端侧量化模型，在27B参数量下兼顾多模态能力和推理速度，支持llama.cpp本地运行，是本地部署大模型的首选新品。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*