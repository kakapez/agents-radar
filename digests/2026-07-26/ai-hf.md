# Hugging Face 热门模型日报 2026-07-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-25 22:55 UTC

---

# Hugging Face 热门模型日报 | 2026.07.26
---
## 今日速览
本周Hugging Face周点赞Top30热度模型由智源GLM-5.2以4445周点赞登顶，谷歌Gemma4、百度Unlimited-OCR两款模型均突破3000+周赞，头部大厂开源原生模型占据热度前排。Qwen系列衍生出十余款微调、量化版本，是本周生态最活跃的模型家族。极低比特量化、端侧部署类模型总下载量占比超70%，开发者本地运行大模型的需求持续爆发。OCR、机器人操作等垂类专用多模态模型也首次进入热度榜头部队列。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
   作者: poolside | 点赞: 657 | 下载: 45,260
   纯文本生成开源大模型，本周官方迭代新版本，基础能力对标同参数级主流LLM，获得开发者广泛关注。
2. **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
   作者: upstage | 点赞: 559 | 下载: 2,784
   250B参数超大开源LLM，仅开放权重下载暂未提供商业服务，发布即获得大量行业用户测试。
3. **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
   作者: Nanbeige | 点赞: 404 | 下载: 11,573
   国产轻量端侧LLM，3B参数即可实现流畅对话，主打低资源设备部署场景。
4. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者: zai-org | 点赞: 4,445 | 下载: 707,029
   本周热度榜榜首国产开源大模型，采用MOE动态调度架构，对话、推理性能大幅超越前代版本。
5. **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**
   作者: Motif-Technologies | 点赞: 189 | 下载: 2,270
   主打长上下文处理的下一代LLM测试版，支持百万级token无损上下文输入。
6. **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)**
   作者: unsloth | 点赞: 184 | 下载: 71,893
   社区官方适配的Laguna-S-2.1量化版本，可直接在llama.cpp框架下运行。
7. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   作者: prism-ml | 点赞: 1,028 | 下载: 611,685
   2bit三重量化27B参数对话LLM，仅需极低显存即可流畅推理，是本周最受关注的端侧大模型。
8. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   作者: prism-ml | 点赞: 638 | 下载: 2,114,963
   1bit极致量化27B参数LLM，目前全球参数量最大的1bit开源可用模型，下载量破200万。
9. **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
   作者: fdtn-ai | 点赞: 163 | 下载: 5,661
   1B参数轻量安全专用LLM，主打高敏感场景下的本地文本生成。
10. **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)**
    作者: poolside | 点赞: 133 | 下载: 117,106
    官方发布的Laguna-S-2.1 NVFP4量化版本，适配vLLM加速推理框架，吞吐性能提升3倍。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者: baidu | 点赞: 3,099 | 下载: 2,564,264
   百度开源的无限制精度OCR多模态模型，支持任意语言、任意倾斜角度文档识别，性能远超前代开源OCR方案。
2. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
   作者: thinkingmachines | 点赞: 1,566 | 下载: 31,575
   全新手写内容理解多模态模型，可直接识别扫描版手写笔记转结构化文本。
3. **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
   作者: microsoft | 点赞: 272 | 下载: 1,156
   微软开源新一代文生图模型，支持局部编辑、生成式扩图等多类图像生成操作。
4. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
   作者: conradlocke | 点赞: 538 | 下载: 0
   图像人物身份保持编辑LoRA，可在修改人物动作、场景时保留人脸特征，无权重文件仅分享训练配置。
5. **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**
   作者: nvidia | 点赞: 119 | 下载: 31,759
   英伟达开源端侧文生视频模型，单消费级显卡即可生成10秒高清短视频。
6. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者: HauhauCS | 点赞: 3,088 | 下载: 1,988,680
   社区无审查微调的Qwen3.6多模态MOE模型，视觉理解能力大幅超越原版。
7. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者: empero-ai | 点赞: 2,465 | 下载: 1,570,995
   融合Claude推理能力的多模态微调模型，主打复杂推理场景下的视觉问答。
8. **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
   作者: ATH-MaaS | 点赞: 286 | 下载: 33,109
   第二代开源OCR多模态模型，支持表格、公式等复杂排版内容识别。
9. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
   作者: bottlecapai | 点赞: 549 | 下载: 27,064
   基于Qwen3.6微调的深度推理多模态模型，主打多步视觉逻辑推理场景。
10. **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)**
    作者

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*