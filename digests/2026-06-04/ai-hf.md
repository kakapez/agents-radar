# Hugging Face 热门模型日报 2026-06-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-03 23:44 UTC

---

# Hugging Face 热门模型日报（2026-06-04）
---
## 今日速览
本周Hugging Face周点赞榜单头部被国产开源大模型强势占据，DeepSeek、通义千问系列拿下了最高的点赞与下载量。英伟达集中发布了Cosmos3全系列生成模型、LocateAnything视觉定位工具，补足了其在端侧多模态生成领域的产品矩阵。开源社区针对头部通用大模型的量化、无审查衍生版本同步率达到历史新高，多款新模型发布24小时内就上线了GGUF端侧适配版本。文生视频、统一多模态成为当前生态热度最高的迭代方向，百万级下载量的多模态生成模型占比首次超过纯语言大模型。

---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **deepseek-ai/DeepSeek-V4-Pro**  
   链接：https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro  
   作者：deepseek-ai | 点赞：4597 | 下载：5811046  
   一句话说明：当前全球热度最高的开源通用推理大模型，在数学、代码、多轮对话基准上全面超过闭源GPT-4o同类水平，上线一周即突破500万次下载。
2. **Qwen/Qwen3.6-27B**  
   链接：https://huggingface.co/Qwen/Qwen3.6-27B  
   作者：Qwen | 点赞：1588 | 下载：5377567  
   一句话说明：阿里通义千问最新开源的原生全模态大模型，支持图文理解、长文本推理，是当前生态适配最完善的主流开源基座。
3. **deepseek-ai/DeepSeek-V4-Flash**  
   链接：https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash  
   作者：deepseek-ai | 点赞：1384 | 下载：3542202  
   一句话说明：DeepSeek V4的高速推理优化版本，推理速度提升3倍以上，延迟降低70%，适合高并发生产场景部署。
4. **LiquidAI/LFM2.5-8B-A1B**  
   链接：https://huggingface.co/LiquidAI/LFM2.5-8B-A1B  
   作者：LiquidAI | 点赞：478 | 下载：60171  
   一句话说明：LiquidAI推出的轻量级MoE架构小模型，8B总参数量仅激活1B，端侧运行效率远超同性能级稠密模型。
5. **openbmb/MiniCPM5-1B**  
   链接：https://huggingface.co/openbmb/MiniCPM5-1B  
   作者：openbmb | 点赞：756 | 下载：68494  
   一句话说明：面壁智能推出的1B参数端侧小模型，性能追平前代7B模型，是嵌入式设备部署的最优选择之一。
6. **JetBrains/Mellum2-12B-A2.5B-Thinking**  
   链接：https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking  
   作者：JetBrains | 点赞：180 | 下载：6938  
   一句话说明：JetBrains专为代码场景优化的思考型大模型，支持长步骤代码推导，和IDE工具链深度打通。
7. **sapientinc/HRM-Text-1B**  
   链接：https://huggingface.co/sapientinc/HRM-Text-1B  
   作者：sapientinc | 点赞：542 | 下载：155558  
   一句话说明：轻量化高速推理专用文本模型，主打边缘设备超低延迟响应，适合实时对话类场景。
8. **NemoStation/Marlin-2B**  
   链接：https://huggingface.co/NemoStation/Marlin-2B  
   作者：NemoStation | 点赞：510 | 下载：18315  
   一句话说明：2B参数级视频理解大模型，支持输入长视频直接输出文本摘要与问答结果，端侧即可部署。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **SulphurAI/Sulphur-2-base**  
   链接：https://huggingface.co/SulphurAI/Sulphur-2-base  
   作者：SulphurAI | 点赞：1531 | 下载：1666353  
   一句话说明：当前热度最高的开源文生视频基座，基于LTX-2.3二次优化，生成视频清晰度、连贯性追平商用闭源产品。
2. **bytedance-research/Lance**  
   链接：https://huggingface.co/bytedance-research/Lance  
   作者：bytedance-research | 点赞：1021 | 下载：3309  
   一句话说明：字节跳动开源的统一多模态生成大模型，支持任意模态输入生成图片、视频，生成效率比同类模型高2倍。
3. **stepfun-ai/Step-3.7-Flash**  
   链接：https://huggingface.co/stepfun-ai/Step-3.7-Flash  
   作者：stepfun-ai | 点赞：230 | 下载：17965  
   一句话说明：阶跃星辰开源的高速视觉语言大模型，图文理解速度提升4倍，适合实时多模态交互场景。
4. **meituan-longcat/LongCat-Video-Avatar-1.5**  
   链接：https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5  
   作者：meituan-longcat | 点赞：503 | 下载：282  
   一句话说明：美团开源的音频驱动数字人生成模型，仅输入音频即可生成高保真人物动态视频，生成质量达到商用级别。
5. **google/gemma-4-12B-it**  
   链接：https://huggingface.co/google/gemma-4-12B-it  
   作者：google | 点赞：153 | 下载：463  
   一句话说明：谷歌最新的Gemma4系列指令微调统一多模态大模型，支持任意模态输入输出，开放商用授权友好。
6. **nvidia/PiD**  
   链接：https://huggingface.co/nvidia/PiD  
   作者：nvidia | 点赞：285 | 下载：778  
   一句话说明：英伟达开源的图像超分辨率扩散模型，4倍超分效果远超传统算法，专为AI生成图像画质修复优化。
7. **nvidia/Cosmos3-Nano**  
   链接：https://huggingface.co/nvidia/Cosmos3-Nano  
   作者：nvidia | 点赞：134 | 下载：14722  
   一句话说明：英伟达Cosmos3系列轻量化多模态生成模型，小参数下即可运行文生图、文生视频任务，端侧部署门槛极低。
8. **nvidia/Cosmos3-Super**  
   链接：https://huggingface.co/nvidia/Cosmos3-Super  
   作者：nvidia | 点赞：113 | 下载：3946  
   一句话说明：英伟达旗舰级全模态生成基座，覆盖文生图、图生视频等全生成场景，面向专业创作者场景优化。
9. **nvidia/Cosmos3-Super-Image2Video**  
   链接：https://huggingface.co/nvidia/Cosmos3-Super-Image2Video  
   作者：nvidia | 点赞：95 | 下载：699  
   一句话说明：英伟达Cosmos3系列专属图生视频模型，输入单张图片即可生成10秒以上高清连贯视频。
10. **nvidia/Cosmos3-Super-Text2Image**  
    链接：https://huggingface.co/nvidia/Cosmos3-Super-Text2Image  
    作者：nvidia | 点赞：91 | 下载：829  
    一句话说明：英伟达旗舰级文生图模型，生成精度和文字渲染能力超过当前主流开源SD系列模型。
11. **google/gemma-4-12B**  
    链接：https://huggingface.co/google/gemma-4-12B  
    作者：google | 点赞：98 | 下载：10  
    一句话说明：Gemma4系列原生基座模型，面向二次微调场景开放，提供完整训练权重与官方训练方案。
12. **ByteDance/Bernini-R**  
    链接：https://huggingface.co/ByteDance/Bernini-R  
    作者：ByteDance | 点赞：95 | 下载：89  
    一句话说明：字节开源的图像驱动3D渲染视频生成模型，输入单张2D图像即可生成可交互3D视角视频。
13. **OpenMOSS-Team/MOSS-TTS-v1.5**  
    链接：https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5  
    作者：OpenMOSS-Team | 点赞：137 | 下载：23987  
    一句话说明：国内开源社区推出的中文TTS模型，支持零样本定制音色，语音自然度超过商用付费TTS产品。
14. **ideogram-ai/ideogram-4-fp8**  
    链接：https://huggingface.co/ideogram-ai/ideogram-4-fp8  
    作者：ideogram-ai | 点赞：81 | 下载：19  
    一句话说明：知名文生图厂商Ideogram开源的最新FP8权重模型，文字生成准确率达到99%，是当前文字生成效果最好的开源文生图模型。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **nvidia/LocateAnything-3B**  
   链接：https://huggingface.co/nvidia/LocateAnything-3B  
   作者：nvidia | 点赞：1152 | 下载：78925  
   一句话说明：英伟达推出的通用图像定位专用模型，支持用自然语言描述直接定位图像中任意目标，无需标注训练即可适配任意场景。
2. **PaddlePaddle/PaddleOCR-VL-1.6**  
   链接：https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6  
   作者：PaddlePaddle | 点赞：213 | 下载：4829  
   一句话说明：飞桨最新开源的多模态OCR模型，支持复杂版面手写、艺术字识别，识别准确率领先国内同类开源产品。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
   链接：https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive  
   作者：HauhauCS | 点赞：1345 | 下载：2602333  
   一句话说明：社区基于Qwen3.6 35B MoE制作的无审查激进版多模态模型，移除所有安全对齐限制，面向 unrestricted 研究场景。
2. **LiquidAI/LFM2.5-8B-A1B-GGUF**  
   链接：https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF  
   作者：LiquidAI | 点赞：172 | 下载：87045  
   一句话说明：LiquidAI官方发布的LFM2.5 8B模型GGUF量化版本，支持llama.cpp端侧直接运行，适配绝大多数

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*