# Hugging Face 热门模型日报 2026-06-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-31 23:00 UTC

---

# Hugging Face 热门模型日报（2026-06-01）
---
## 今日速览
今日Hugging Face周度热门模型榜呈现开源大模型全面领跑的态势，国产基座DeepSeek-V4-Pro以4496周点赞、近590万次下载的成绩断层登顶。Qwen3.6系列相关模型占据近三分之一的席位，从官方基座到社区量化衍生版本全线爆发。多模态生成赛道的任意生成、音视频驱动模型新品密集发布，大厂与开源社区形成分工明确的生态协作。大量面向边缘部署的GGUF格式模型进入榜单，普通开发者本地运行大模型的需求持续走高。

---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **openbmb/MiniCPM5-1B** <https://huggingface.co/openbmb/MiniCPM5-1B>
   作者：openbmb | 点赞657 | 下载36730
   国产端侧小参数文本生成基座，在同参数量级下兼顾推理速度与下游任务性能，是端侧部署的热门选择。
2. **LiquidAI/LFM2.5-8B-A1B** <https://huggingface.co/LiquidAI/LFM2.5-8B-A1B>
   作者：LiquidAI | 点赞318 | 下载27677
   LiquidAI推出的轻量MoE语言基座，激活参数仅1B即可达到8B全权重模型的效果，主打低资源环境运行。
3. **deepseek-ai/DeepSeek-V4-Pro** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro>
   作者：deepseek-ai | 点赞4496 | 下载5886599
   新一代国产通用对话大模型，性能对标GPT-4级闭源SOTA，发布后快速获得全球开发者追捧，是本周热度最高的开源模型。
4. **deepseek-ai/DeepSeek-V4-Flash** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash>
   作者：deepseek-ai | 点赞1319 | 下载3483641
   DeepSeek推出的高速推理轻量化版本，MIT开源协议允许全场景商用，主打高吞吐在线服务场景。
5. **sapientinc/HRM-Text-1B** <https://huggingface.co/sapientinc/HRM-Text-1B>
   作者：sapientinc | 点赞427 | 下载143904
   面向高风险场景定制的小参数文本生成模型，优化了输出准确性，在合规类文本生成场景渗透率极高。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **nvidia/LocateAnything-3B** <https://huggingface.co/nvidia/LocateAnything-3B>
   作者：nvidia | 点赞591 | 下载24586
   英伟达推出的通用视觉定位多模态模型，支持通过文本指令任意框选图像中的目标，适配工业检测、内容标注等场景。
2. **meituan-longcat/LongCat-Video-Avatar-1.5** <https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5>
   作者：meituan-longcat | 点赞439 | 下载0
   美团推出的音视频驱动数字人模型，本次刚发布尚未开放下载，仅产品预览就获得大量开发者关注。
3. **bytedance-research/Lance** <https://huggingface.co/bytedance-research/Lance>
   作者：bytedance-research | 点赞992 | 下载2948
   字节跳动发布的Any-to-Any多模态生成模型，统一框架支持图像、视频跨模态生成，是近期通用性最强的多模态生成模型之一。
4. **nvidia/PiD** <https://huggingface.co/nvidia/PiD>
   作者：nvidia | 点赞217 | 下载498
   英伟达推出的图像超分辨率扩散模型，主打工业级高精度图像修复效果。
5. **SulphurAI/Sulphur-2-base** <https://huggingface.co/SulphurAI/Sulphur-2-base>
   作者：SulphurAI | 点赞1469 | 下载1590236
   海外厂商推出的原生开源文本生成视频基座，视频生成时长、清晰度均达到商用SOTA水平。
6. **Qwen/Qwen3.6-27B** <https://huggingface.co/Qwen/Qwen3.6-27B>
   作者：Qwen | 点赞1552 | 下载5064096
   阿里通义千问推出的新一代27B多模态基座，兼顾图文理解与对话能力，是当前传播度最高的开源多模态大模型。
7. **openbmb/MiniCPM-V-4.6** <https://huggingface.co/openbmb/MiniCPM-V-4.6>
   作者：openbmb | 点赞1082 | 下载444679
   国产端侧多模态小模型，支持手机级设备运行的图文理解能力，在消费端应用场景非常热门。
8. **Supertone/supertonic-3** <https://huggingface.co/Supertone/supertonic-3>
   作者：Supertone | 点赞754 | 下载56472
   高性能文本转语音模型，支持多音色、多语种定制化语音生成，工业级商用成熟度极高。
9. **microsoft/Lens** <https://huggingface.co/microsoft/Lens>
   作者：microsoft | 点赞149 | 下载1959
   微软推出的开源文生图基座，生成精度、审美水平媲美Midjourney同类闭源产品。
10. **circlestone-labs/Anima** <https://huggingface.co/circlestone-labs/Anima>
    作者：circlestone-labs | 点赞1610 | 下载756861
    单文件整合的全功能扩散模型，原生适配ComfyUI工作流，降低了创意开发者的使用门槛。

### 🔧 专用模型
1. **tencent/Hy-MT2-30B-A3B** <https://huggingface.co/tencent/Hy-MT2-30B-A3B>
   作者：tencent | 点赞440 | 下载4226
   腾讯混元推出的专业翻译大模型，支持上百种小语种互译，翻译精度超过传统商用翻译工具。
2. **tencent/Hy-MT2-1.8B** <https://huggingface.co/tencent/Hy-MT2-1.8B>
   作者：tencent | 点赞1094 | 下载17471
   小参数端侧翻译模型，可离线运行无需联网，是本地化翻译场景的首选方案。
3. **PaddlePaddle/PaddleOCR-VL-1.6** <https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6>
   作者：PaddlePaddle | 点赞116 | 下载2731
   百度飞桨推出的新一代多模态OCR模型，支持复杂手写体、变形文字高精度识别。
4. **numind/NuExtract3** <https://huggingface.co/numind/NuExtract3>
   作者：numind | 点赞208 | 下载57248
   开源文档信息抽取模型，可直接从扫描件中结构化提取指定字段，大幅降低文档处理成本。
5. **openai/privacy-filter** <https://huggingface.co/openai/privacy-filter>
   作者：openai | 点赞1573 | 下载306344
   OpenAI开源的隐私信息过滤模型，可自动识别文本中的身份证、手机号等敏感信息，是合规部署大模型的必备工具。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** <https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive>
   作者：HauhauCS | 点赞1155 | 下载2439402
   社区基于Qwen3.6 MoE基座微调的无内容限制版本，GGUF格式全权重开放，在爱好者群体中传播度极高。
2. **LiquidAI/LFM2.5-8B-A1B-GGUF** <https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF>
   作者：LiquidAI | 点赞133 | 下载41828
   LFM2.5-8B-A1B的官方GGUF量化版本，支持llama.cpp在普通个人电脑本地部署运行。
3. **unsloth/Qwen3.6-27B-MTP-GGUF** <https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF>
   作者：unsloth | 点赞577 | 下载926440
   Unsloth团队优化的Qwen3.6 27B多模态量化版本，推理速度比原生版本提升3倍以上。
4. **Jackrong/Qwopus3.6-27B-v2-MTP-GGUF** <https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF>
   作者：Jackrong | 点赞178 | 下载124807
   社区二次微调的Qwen3.6多模态GGUF版本，优化了长图文理解的输出准确性。
5. **froggeric/Qwen-Fixed-Chat-Templates** <https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates>
   作者：froggeric | 点赞467 | 下载0
   社区整理的全版本Qwen系列统一聊天模板资源包，解决不同衍生版本对话格式不兼容的常见问题。

---
## 生态信号
当前Qwen3.x家族是本周势头最猛的模型序列，从官方基座、多模态版本到社区衍生量化、微调产品覆盖全场景，占热门榜近三分之一席位。开源权重已经完全成为产业侧应用的主流选择，头部开源模型单周下载量普遍突破百万，热度远超闭源API的生态传播。GGUF量化、边缘部署相关的社区产出占比持续提升，甚至配套聊天模板这类工具类资源都能进入热门榜单，证明普通开发者本地部署大模型的需求已经进入爆发期。

---
## 值得探索
1. **deepseek-ai/DeepSeek-V4-Pro**：当前热度最高的开源通用大模型，性能对标GPT-4级闭源产品，全开源权重支持二次微调，是2026年最具落地潜力的通用基座之一。
2. **bytedance-research/Lance**：统一Any-to-Any多模态生成框架，同时支持图像、视频跨模态生成，仅2.9k次下载就拿到992点赞，是潜力最高的新一代多模态生成模型。
3. **circlestone-labs/Anima**：单文件封装的全功能扩散模型，原生适配ComfyUI工作流，不需要复杂环境配置即可运行，非常适合创意类开发者快速搭建生成工作流。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*