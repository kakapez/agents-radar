# Hugging Face 热门模型日报 2026-07-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-15 22:58 UTC

---

# Hugging Face 热门模型日报（2026-07-16）
数据范围：当日周点赞数Top30热门模型榜单

---

## 1. 今日速览
本周Hugging Face热门模型榜单头部被高流量开源衍生量化大模型、端侧部署优化LLM、工业级实用多模态工具三类产品主导，共5款模型周下载量突破百万级。超低比特量化技术路线密集落地，1-bit、2-bit三进制大模型首次大规模进入公众视野，端侧本地运行大模型的门槛进一步下探。国产开源模型Qwen、GLM系列的生态活跃度大幅提升，衍生作品覆盖从原生大模型到量化适配、场景微调全链路。音频转录、OCR、智能体工具调用类垂直专用模型的用户需求增速远超通用大模型。

---

## 2. 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **prism-ml/Ternary-Bonsai-27B-gguf**  
链接：https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf  
作者：prism-ml | 点赞：453 | 下载：23  
一句话说明：主打2-bit三进制量化的27B参数对话大模型GGUF版本，将大模型端侧运行资源要求压到新低，是极低比特量化方向的代表性新作。
2. **zai-org/GLM-5.2**  
链接：https://huggingface.co/zai-org/GLM-5.2  
作者：zai-org | 点赞：3991 | 下载：489611  
一句话说明：GLM系列最新原生开源MoE大模型，主打高推理效率的通用对话能力，是本周点赞量最高的原生开源基座。
3. **prism-ml/Bonsai-27B-gguf**  
链接：https://huggingface.co/prism-ml/Bonsai-27B-gguf  
作者：prism-ml | 点赞：260 | 下载：513  
一句话说明：1-bit量化的27B参数对话大模型GGUF版本，和同系列三进制版本形成高低比特技术矩阵，验证极限压缩下的可用性。
4. **tencent/Hy3**  
链接：https://huggingface.co/tencent/Hy3  
作者：tencent | 点赞：799 | 下载：10406  
一句话说明：腾讯混元系列第三代开源文本生成大模型，主打长上下文推理能力，本周首次登榜获得大量开发者关注。
5. **GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF**  
链接：https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF  
作者：GnLOLot | 点赞：247 | 下载：89892  
一句话说明：基于MiniCPM5 1B小模型微调的类Claude Opus思维链版本，GGUF格式适配全端侧设备，主打小参数推理潜力。
6. **InternScience/Agents-A1**  
链接：https://huggingface.co/InternScience/Agents-A1  
作者：InternScience | 点赞：552 | 下载：30539  
一句话说明：基于Qwen3.5 MoE微调的智能体专属大模型，原生支持多模态输入和工具调用，是智能体赛道的热门新作。
7. **GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking**  
链接：https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking  
作者：GnLOLot | 点赞：129 | 下载：3483  
一句话说明：上述GGUF版本对应的全精度原生版本，提供完整推理框架适配能力。
8. **AngelSlim/Hy3-GGUF**  
链接：https://huggingface.co/AngelSlim/Hy3-GGUF  
作者：AngelSlim | 点赞：107 | 下载：0  
一句话说明：社区自发制作的腾讯Hy3大模型GGUF量化版本，适配llama.cpp生态，推出后迅速获得开发者关注。
9. **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**  
链接：https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF  
作者：yuxinlu1 | 点赞：1198 | 下载：468629  
一句话说明：基于Gemma4 12B微调的Agent专属大模型，主打端侧可运行的代码生成、工具调用能力，是本周热度TOP3的量化LLM。
10. **deepreinforce-ai/Ornith-1.0-35B-GGUF**  
链接：https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF  
作者：deepreinforce-ai | 点赞：892 | 下载：1533354  
一句话说明：全新开源的35B参数通用推理大模型全量GGUF发布，下载量破150万，是本周爆款端侧大模型之一。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**  
链接：https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF  
作者：empero-ai | 点赞：2211 | 下载：2006265  
一句话说明：基于Qwen3.5微调的9B多模态推理大模型，训练数据量达1M，是本周下载量破200万的爆款视觉语言模型。
2. **thinkingmachines/Inkling**  
链接：https://huggingface.co/thinkingmachines/Inkling  
作者：thinkingmachines | 点赞：297 | 下载：0  
一句话说明：支持图文、音文多模态输入的全新原生多模态基座，首次公开即获得大量开发者点赞。
3. **bottlecapai/ThinkingCap-Qwen3.6-27B**  
链接：https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B  
作者：bottlecapai | 点赞：364 | 下载：6208  
一句话说明：基于Qwen3.6微调的多模态推理大模型，主打复杂视觉任务的思维链输出能力。
4. **OpenMOSS-Team/MOSS-Transcribe-Diarize**  
链接：https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize  
作者：OpenMOSS-Team | 点赞：212 | 下载：65109  
一句话说明：开源全链路音频转录+说话人 diarize 一体化工具，性能媲美商用闭源产品。
5. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
链接：https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive  
作者：HauhauCS | 点赞：2757 | 下载：2443871  
一句话说明：本周下载量最高的爆款开源多模态大模型，基于Qwen3.6 35B MoE微调，无内容限制且原生支持视觉输入。
6. **empero-ai/Qwythos-9B-v2-GGUF**  
链接：https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF  
作者：empero-ai | 点赞：143 | 下载：70260  
一句话说明：Qwythos 9B第二代版本的GGUF量化版，面向端侧多模态推理场景优化。
7. **baidu/Unlimited-OCR**  
链接：https://huggingface.co/baidu/Unlimited-OCR  
作者：baidu | 点赞：2001 | 下载：1715301  
一句话说明：百度开源的无限制通用OCR大模型，支持任意复杂场景文字识别，下载量破170万，是本周最受欢迎的工业级工具模型。
8. **empero-ai/Qwythos-9B-v2**  
链接：https://huggingface.co/empero-ai/Qwythos-9B-v2  
作者：empero-ai | 点赞：121 | 下载：3959  
一句话说明：Qwythos 9B第二代的全精度原生版本，提供完整训练框架适配。
9. **ATH-MaaS/OvisOCR2**  
链接：https://huggingface.co/ATH-MaaS/OvisOCR2  
作者：ATH-MaaS | 点赞：116 | 下载：745  
一句话说明：基于Qwen3.5微调的第二代OCR大模型，主打高精度手写体识别场景。
10. **unsloth/Qwen3.6-27B-NVFP4**  
链接：https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4  
作者：unsloth | 点赞：206 | 下载：1599150  
一句话说明：Unsloth出品的Qwen3.6 27B NVFP4量化多模态版本，推理速度提升300%，是本周爆款量化多模态模型。
11. **robbyant/lingbot-world-v2-14b-causal-fast**  
链接：https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast  
作者：robbyant | 点赞：99 | 下载：0  
一句话说明：14B参数快速图生视频世界模型，主打低延迟实时视频生成。
12. **Alissonerdx/LTX-Best-Face-ID**  
链接：https://huggingface.co/Alissonerdx/LTX-Best-Face-ID  
作者：Alissonerdx | 点赞：154 | 下载：0  
一句话说明：LTX视频生成模型的人脸保留Lora，大幅提升生成视频中人物身份一致性。
13. **robbyant/lingbot-video-moe-30b-a3b**  
链接：https://huggingface.co/robby

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*