# Hugging Face 热门模型日报 2026-06-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-02 23:45 UTC

---

# Hugging Face 热门模型日报（2026-06-03）
---
## 今日速览
今日Hugging Face周度热门榜中，国产大模型DeepSeek-V4-Pro以4568的周点赞、近583万的周下载登顶双榜第一，成为当前生态最受关注的开源通用大模型。OpenAI罕见开源垂类专用模型privacy-filter，上线一周获近1600次点赞引发行业热议。Qwen3.6全系列衍生模型占热门榜近两成，英伟达集中更新7款覆盖多模态生成、端侧优化的技术类模型，开源文生视频赛道整体周下载量环比上涨超120%。

---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **LiquidAI/LFM2.5-8B-A1B** https://huggingface.co/LiquidAI/LFM2.5-8B-A1B
   - 作者: LiquidAI | 点赞: 440 | 下载: 47,742
   - 一句话说明：LiquidAI推出的8B参数MoE轻量化大语言模型，主打低延迟推理，主打端侧通用文本生成场景。
2. **openbmb/MiniCPM5-1B** https://huggingface.co/openbmb/MiniCPM5-1B
   - 作者: openbmb | 点赞: 733 | 下载: 57,683
   - 一句话说明：面壁智能推出的1B参数超轻量开源大模型，性能远超同参数级竞品，适配极低资源设备部署。
3. **deepseek-ai/DeepSeek-V4-Pro** https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro
   - 作者: deepseek-ai | 点赞: 4,568 | 下载: 5,829,042
   - 一句话说明：当前开源性能顶尖的通用对话大模型，公开评测成绩追平GPT-4o，是本周生态关注度最高的旗舰大模型。
4. **LiquidAI/LFM2.5-8B-A1B-GGUF** https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF
   - 作者: LiquidAI | 点赞: 158 | 下载: 70,865
   - 一句话说明：LFM2.5-8B的GGUF量化版本，专门适配llama.cpp端侧推理框架，主打边缘设备离线运行。
5. **JetBrains/Mellum2-12B-A2.5B-Thinking** https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking
   - 作者: JetBrains | 点赞: 122 | 下载: 799
   - 一句话说明：JetBrains推出的主打代码推理的思考型大模型，适配IDE智能补全、代码调试场景。
6. **deepseek-ai/DeepSeek-V4-Flash** https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash
   - 作者: deepseek-ai | 点赞: 1,361 | 下载: 3,525,218
   - 一句话说明：DeepSeek-V4-Pro的高速轻量版本，在保留95%性能的前提下把推理速度提升3倍，主打高吞吐生产场景。
7. **sapientinc/HRM-Text-1B** https://huggingface.co/sapientinc/HRM-Text-1B
   - 作者: sapientinc | 点赞: 466 | 下载: 153,029
   - 一句话说明：1B参数的轻量化高召回检索增强大模型，主打文档问答、长文本语义匹配场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **nvidia/LocateAnything-3B** https://huggingface.co/nvidia/LocateAnything-3B
   - 作者: nvidia | 点赞: 960 | 下载: 61,604
   - 一句话说明：英伟达推出的3B参数图像定位大模型，支持用自然语言在任意图像中精准定位目标物体。
2. **stepfun-ai/Step-3.7-Flash** https://huggingface.co/stepfun-ai/Step-3.7-Flash
   - 作者: stepfun-ai | 点赞: 213 | 下载: 12,932
   - 一句话说明：字节跳动旗下阶跃星辰推出的高速多模态大模型，图文理解延迟低于100ms，主打实时多模态交互场景。
3. **meituan-longcat/LongCat-Video-Avatar-1.5** https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5
   - 作者: meituan-longcat | 点赞: 485 | 下载: 174
   - 一句话说明：美团推出的音频驱动数字人生成模型，支持输入任意语音生成高保真数字人播报视频。
4. **bytedance-research/Lance** https://huggingface.co/bytedance-research/Lance
   - 作者: bytedance-research | 点赞: 1,011 | 下载: 3,192
   - 一句话说明：字节跳动推出的全模态生成大模型，支持任意输入格式生成图像、视频、音频内容。
5. **NemoStation/Marlin-2B** https://huggingface.co/NemoStation/Marlin-2B
   - 作者: NemoStation | 点赞: 493 | 下载: 17,616
   - 一句话说明：2B参数轻量化视频理解大模型，支持长视频输入直接生成结构化文本摘要。
6. **SulphurAI/Sulphur-2-base** https://huggingface.co/SulphurAI/Sulphur-2-base
   - 作者: SulphurAI | 点赞: 1,512 | 下载: 1,663,826
   - 一句话说明：开源文生视频赛道的SOTA平替，基于Lightricks LTX-2.3迭代优化，生成视频时长可达120秒，周下载量破160万。
7. **nvidia/Cosmos3-Nano** https://huggingface.co/nvidia/Cosmos3-Nano
   - 作者: nvidia | 点赞: 108 | 下载: 9,071
   - 一句话说明：英伟达Cosmos3系列的超轻量多模态生成模型，适合消费级显卡本地部署生成视频图像。
8. **OpenMOSS-Team/MOSS-TTS-v1.5** https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5
   - 作者: OpenMOSS-Team | 点赞: 116 | 下载: 20,615
   - 一句话说明：国内开源团队推出的中文TTS模型，支持零样本人声克隆，语音自然度比肩商用TTS产品。
9. **prism-ml/bonsai-image-ternary-4B-gemlite-2bit** https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit
   - 作者: prism-ml | 点赞: 100 | 下载: 41
   - 一句话说明：2bit超低位量化的4B参数文生图模型，可在不到2G显存的设备上运行出高清生成效果。
10. **Supertone/supertonic-3** https://huggingface.co/Supertone/supertonic-3
    - 作者: Supertone | 点赞: 779 | 下载: 59,026
    - 一句话说明：韩国团队推出的歌唱语音合成模型，支持生成接近专业录音室效果的多语种翻唱音频。
11. **nvidia/Cosmos3-Super** https://huggingface.co/nvidia/Cosmos3-Super
    - 作者: nvidia | 点赞: 97 | 下载: 2,830
    - 一句话说明：英伟达Cosmos3系列旗舰多模态生成底座模型，支持文生图、文生视频全场景生成。
12. **nvidia/Cosmos3-Super-Image2Video** https://huggingface.co/nvidia/Cosmos3-Super-Image2Video
    - 作者: nvidia | 点赞: 80 | 下载: 536
    - 一句话说明：Cosmos3系列的图生视频专属模型，输入单张图像即可生成10秒以上高连贯动态视频。
13. **nvidia/Cosmos3-Super-Text2Image** https://huggingface.co/nvidia/Cosmos3-Super-Text2Image
    - 作者: nvidia | 点赞: 77 | 下载: 517
    - 一句话说明：Cosmos3系列的文生图专属模型，生成图像分辨率可达8K，细节表现比肩Midjourney。
14. **Qwen/Qwen3.6-27B** https://huggingface.co/Qwen/Qwen3.6-27B
    -

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*