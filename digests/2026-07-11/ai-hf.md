# Hugging Face 热门模型日报 2026-07-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-10 22:59 UTC

---

# Hugging Face 热门模型日报（2026-07-11）
---
## 今日速览
本周Hugging Face热门模型榜单呈现明显的国产开源基座主导趋势，Qwen系列衍生模型占比超三成，从原生基座到社区优化版本全链路覆盖。端侧可部署的GGUF格式模型下载量普遍突破百万，远超同系列原生全权重模型的传播热度。腾讯、百度、深度求索等国内头部厂商的新发布模型均进入周榜行列，智能体推理、零样本表格建模、多模态定位等垂直方向的创新模型增速显著。本周零闭源商用大模型登榜，完全开源生态的活跃度持续抬升。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   - 作者：tencent | 周点赞：663 | 周下载：6923
   - 腾讯混元系列第三代原生开源文本生成大模型，面向长文本推理场景优化，官方首发即登上热榜头部。
2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   - 作者：zai-org | 周点赞：3781 | 周下载：392655
   - 智源发布的新一代MoS架构开源大模型，主打高推理效率和低部署门槛，是本周点赞量最高的原生基座。
3. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
   - 作者：InternScience | 周点赞：467 | 周下载：25772
   - 基于Qwen3.5 MoE基座微调的原生智能体模型，支持多模态输入，专门面向工具调用场景优化。
4. **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
   - 作者：meituan-longcat | 周点赞：170 | 周下载：1308
   - 美团开源的长上下文对话大模型，主打百万级token窗口的无损推理能力。
5. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
   - 作者：deepseek-ai | 周点赞：463 | 周下载：33088
   - 深度求索V4 Pro系列的分布式推理优化版本，大幅降低高并发场景的部署成本。
6. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
   - 作者：empero-ai | 周点赞：760 | 周下载：184315
   - 基于Qwen3.5微调的角色化剧情生成模型，支持百万级上下文的长内容创作。
7. **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
   - 作者：nvidia | 周点赞：336 | 周下载：787748
   - 英伟达官方优化的Qwen3.6 27B模型NVFP4量化版本，适配全系列NVIDIA显卡原生加速。
---
### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   - 作者：empero-ai | 周点赞：1973 | 周下载：1909705
   - 剧情生成模型的多模态GGUF版本，支持图文混合输入的角色内容创作，端侧部署门槛极低。
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - 作者：baidu | 周点赞：1921 | 周下载：1319683
   - 百度开源的无限分辨率OCR模型，支持任意尺寸、任意排版文档的全内容识别，工业实用性极强。
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - 作者：HauhauCS | 周点赞：2620 | 周下载：2660170
   - 无对齐限制的Qwen3.6多模态量化版本，面向开放场景自由生成需求开发。
4. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - 作者：nvidia | 周点赞：2698 | 周下载：1456269
   - 英伟达开源的万物定位多模态模型，支持输入任意文本描述在图像中精准框定目标物体。
5. **[krea/ Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
   - 作者：krea | 周点赞：575 | 周下载：164525
   - 新一代文生图加速模型，生成速度较主流SD3系列提升300%，主打实时生成场景。
---
### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   - 作者：google | 周点赞：345 | 周下载：18626
   - 谷歌开源的表格建模Foundation Model，支持零样本完成分类、回归等全类型表格任务。
2. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   - 作者：froggeric | 周点赞：833 | 周下载：0
   - 社区贡献的全系列Qwen模型统一对齐对话模板库，解决不同版本Qwen的prompt格式兼容问题。
3. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
   - 作者：conradlocke | 周点赞：160 | 周下载：0
   - 基于Krea2文生图模型微调的人物身份编辑LoRA，支持无参考图的人脸精准修改。
---
### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
   - 作者：deepreinforce-ai | 周点赞：835 | 周下载：1085554
   - 开源推理模型Ornith 1.0的GGUF量化版本，完全开源MIT协议允许商用，端侧即可运行高性能推理。
2. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
   - 作者：yuxinlu1 | 周点赞：1134 | 周下载：427668
   - 基于Gemma4微调的端侧智能体编码模型，主打原生终端交互、自动化脚本生成能力。
3. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
   - 作者：unsloth | 周点赞：1036 | 周下载：2895457
   - Unsloth官方优化的Qwen3.6多模态GGUF版本，是本周下载量最高的端侧大模型。
---
## 生态信号
本周Qwen系列是绝对的核心流量担当，全生态衍生模型覆盖基座、微调、量化、工具链全环节，影响力已经超过Llama、Mistral等海外传统开源基座。榜单完全没有闭源商用大模型上榜，开源权重的性能和场景覆盖能力已经全面追上闭源产品，社区用户的选择明显向开源侧倾斜。GGUF格式的端侧量化模型下载量普遍达到原生模型的3-10倍，本地部署、离线运行的需求爆发，大量面向角色生成、无限制对话的社区微调项目活跃度极高，细分场景的开源优化迭代速度远超官方节奏。
---
## 值得探索
1. **zai-org/GLM-5.2**：本周点赞最高的原生开源基座，MoS架构的效率优势已经被大量开发者验证，性能追平头部闭源大模型且完全免费商用，适合作为新一代业务基座选型测试。
2. **nvidia/LocateAnything-3B**：3B级小体量多模态模型即可实现全场景万物定位能力，部署门槛极低，在工业质检、安防巡检、智能家居等场景有极高的落地价值。
3. **baidu/Unlimited-OCR**：解决了传统OCR对超长、超宽、异形排版文档识别失效的痛点，完全开源无限制，可直接替换现有商用OCR服务降低成本。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*