# Hugging Face 热门模型日报 2026-07-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-08 23:08 UTC

---

# Hugging Face 热门模型日报
日期：2026-07-09 数据来源：Hugging Face Hub 周热度榜

---

## 今日速览
今日Hugging Face热门榜头部出现国产大模型新标杆，智源开源的GLM-5.2以3662的周点赞量登顶全榜第一。阿里通义千问Qwen系列衍生模型覆盖基础版、多模态、量化版本全赛道，成为本周分布最广的模型家族。本地端部署需求持续走高，多款GGUF格式量化模型下载量突破200万。多模态生成赛道围绕Krea-2 Turbo的第三方衍生微调模型本周集中上线，覆盖LoRA、ControlNet等插件生态。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   - 作者：zai-org | 周点赞：3662 | 周下载：281584
   - 一句话说明：全榜热度第一的国产开源MoE大模型，原生支持长对话、强推理能力，基座性能对标头部商用闭源模型，上线即获得社区大量关注。
2. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   - 作者：tencent | 周点赞：559 | 周下载：121
   - 一句话说明：腾讯混元系列第三代原生大模型，官方刚首发的基座版本，尚未开放大规模下载，核心参数还未完全公开。
3. **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
   - 作者：mistralai | 周点赞：164 | 周下载：157
   - 一句话说明：Mistral最新发布的超大规模稀疏基座模型，支持vLLM高并发部署，为后续系列微调版本铺路。
4. **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
   - 作者：meituan-longcat | 周点赞：151 | 周下载：385
   - 一句话说明：美团开源的长上下文大模型，主打百万级token长文档处理能力，新版本做了性能优化。
5. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
   - 作者：deepseek-ai | 周点赞：438 | 周下载：15538
   - 一句话说明：深度求索最新开源的分布式训练优化版本大模型，配套顶会论文发布，主打超大规模集群训练效率提升。
6. **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)**
   - 作者：AliesTaha | 周点赞：187 | 周下载：3886
   - 一句话说明：社区基于Qwen3微调的叙事类大模型，主打故事创作、剧本生成能力，创意生成效果远超通用基座。
7. **[poolside/Laguna-XS-2.1](https://huggingface.co/poolside/Laguna-XS-2.1)**
   - 作者：poolside | 周点赞：76 | 周下载：3385
   - 一句话说明：主打代码场景的轻量小模型，体积仅7B参数级，本地运行即可支持全栈开发辅助。
8. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
   - 作者：empero-ai | 周点赞：736 | 周下载：152516
   - 一句话说明：社区对齐Claude推理能力微调的Qwen3.5 9B版本，支持1M超长上下文，推理效果接近商用大模型表现。
9. **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)**
   - 作者：deepreinforce-ai | 周点赞：365 | 周下载：280236
   - 一句话说明：社区基于Qwen3.5 MoE微调的35B大模型，支持图文理解能力，原生MIT协议可免费商用。
10. **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)**
    - 作者：deepreinforce-ai | 周点赞：410 | 周下载：136037
    - 一句话说明：Ornith系列的9B轻量版本，兼顾推理性能和运行速度，适合中低端硬件部署。
11. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
    - 作者：bottlecapai | 周点赞：139 | 周下载：46
    - 一句话说明：社区刚发布的Qwen3.6 27B深度思考微调版本，主打长链条多步推理能力，还在早期测试阶段。
12. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    - 作者：InternScience | 周点赞：398 | 周下载：14723
    - 一句话说明：专为Agent场景训练的MoE大模型，原生支持工具调用、多步任务规划，面向智能体开发场景优化。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - 作者：baidu | 周点赞：1870 | 周下载：1084945
   - 一句话说明：百度开源的新一代不限场景OCR模型，支持任意倾斜、模糊、低分辨率文档的精准识别，下载量破百万。
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - 作者：nvidia | 周点赞：2667 | 周下载：1424958
   - 一句话说明：英伟达开源的通用视觉定位小模型，支持零样本定位图像中任意文本描述的目标，多模态能力远超同类小模型。
3. **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
   - 作者：krea | 周点赞：553 | 周下载：123729
   - 一句话说明：当前表现最好的开源文生图大模型之一，Turbo版本生成速度相比初代提升3倍，效果逼近商用SOTA。
4. **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)**
   - 作者：eric-venti-seeds | 周点赞：107 | 周下载：0
   - 一句话说明：面向Flux2 Klein模型的光影控制LoRA，可精准控制图像中太阳的照射角度和光照效果。
5. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
   - 作者：conradlocke | 周点赞：97 | 周下载：0
   - 一句话说明：基于Krea-2的身份编辑LoRA，支持局部修改图像中人物特征同时保持其余画面一致性。
6. **[Patil/Krea-2-depth-controlnet](https://huggingface.co/Patil/Krea-2-depth-controlnet)**
   - 作者：Patil | 周点赞：71 | 周下载：0
   - 一句话说明：适配Krea-2的深度ControlNet插件，可精准控制生成图像的空间透视结构。
7. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   - 作者：empero-ai | 周点赞：1844 | 周下载：1683711
   - 一句话说明：支持图文理解的Qwythos 9B量化版本，原生多模态能力，本地部署即可运行图文问答。

### 🔧 专用模型
1. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   - 作者：google | 周点赞：311 | 周下载：9458
   - 一句话说明：谷歌开源的通用表格基础模型，零样本场景下即可完成表格分类、回归任务，效果远超传统机器学习方案。
2. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   - 作者：froggeric | 周点赞：781 | 周下载：0
   - 一句话说明：社区整理的全版本Qwen系列修复版对话模板，解决了原生模板不兼容部分推理框架的bug，被大量开发者引用。
3. **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
   - 作者：nvidia | 周点赞：324 | 周下载：538687
   - 一句话说明：英伟达针对NVIDIA硬件优化的NVFP4格式量化Qwen3.6 27B模型，在消费级英伟达显卡上即可实现满速运行。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - 作者：HauhauCS | 周点赞：2574 | 周下载：2823988
   - 一句话说明：社区发布的无审查多模态Qwen3.6 35B量化版本，原生支持视觉理解，无内容对齐限制，下载量接近300万。
2. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
   - 作者：

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*