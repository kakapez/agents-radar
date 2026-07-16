# Hugging Face 热门模型日报 2026-07-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-16 22:56 UTC

---

# Hugging Face 热门模型日报
日期：2026-07-17

---

## 今日速览
今日Hugging Face周度点赞榜单呈现明显的国产开源模型领跑态势，头部大模型下载量普遍突破百万级。端侧适配的极致低比特量化衍生包占比接近半数，用户本地部署需求持续走高。多模态垂直场景工具类模型新增多款高人气作品，覆盖OCR、视频生成、身份编辑等细分方向。社区基于Qwen基座的二次创作热度远超其他海外大模型，生态活跃度位居同期首位。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **zai-org/GLM-5.2** <https://huggingface.co/zai-org/GLM-5.2>
   - 作者：zai-org | 点赞：4028 | 下载：513061
   - 新一代国产旗舰开源MoE大模型，性能对标头部闭源产品，本周冲至榜单头部成为最受关注的原生基座。
2. **tencent/Hy3** <https://huggingface.co/tencent/Hy3>
   - 作者：tencent | 点赞：812 | 下载：11849
   - 腾讯混元系列第三代开源基础大模型，主打长上下文窗口与高推理效率。
3. **InternScience/Agents-A1** <https://huggingface.co/InternScience/Agents-A1>
   - 作者：InternScience | 点赞：562 | 下载：33400
   - 面向Agent场景优化的MoE大模型，原生支持多工具调用能力。
4. **GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking** <https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking>
   - 作者：GnLOLot | 点赞：131 | 下载：4117
   - 仅1B参数的小体积推理增强模型，低配置设备即可运行逻辑推理任务。
5. **empero-ai/Qwythos-9B-v2** <https://huggingface.co/empero-ai/Qwythos-9B-v2>
   - 作者：empero-ai | 点赞：128 | 下载：6220
   - 基于Qwen3.5微调的高流畅度对话大模型，适配日常创作场景。
6. **froggeric/Qwen-Fixed-Chat-Templates** <https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates>
   - 作者：froggeric | 点赞：924 | 下载：0
   - 社区贡献的Qwen全系列固定对话模板包，解决不同版本模型对话格式不兼容的痛点。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **thinkingmachines/Inkling** <https://huggingface.co/thinkingmachines/Inkling>
   - 作者：thinkingmachines | 点赞：791 | 下载：4
   - 主打图文理解的多模态模型，支持手绘图识别与创意生成。
2. **bottlecapai/ThinkingCap-Qwen3.6-27B** <https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B>
   - 作者：bottlecapai | 点赞：389 | 下载：8238
   - 基于Qwen3.6微调的多模态推理模型，支持复杂图文结合的推理任务。
3. **conradlocke/krea2-identity-edit** <https://huggingface.co/conradlocke/krea2-identity-edit>
   - 作者：conradlocke | 点赞：320 | 下载：0
   - 面向ComfyUI推出的图像身份编辑Lora，可无损耗修改人像属性。
4. **Alissonerdx/LTX-Best-Face-ID** <https://huggingface.co/Alissonerdx/LTX-Best-Face-ID>
   - 作者：Alissonerdx | 点赞：165 | 下载：0
   - LTX视频生成模型专用的人脸一致性Lora，生成视频过程中可全程保留指定人物特征。
5. **Wan-AI/Wan-Dancer-14B** <https://huggingface.co/Wan-AI/Wan-Dancer-14B>
   - 作者：Wan-AI | 点赞：89 | 下载：1884
   - 万兴推出的图像到视频生成模型，主打人物舞蹈动作迁移效果。
6. **Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt** <https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt>
   - 作者：Cseti | 点赞：76 | 下载：0
   - 视频生成专用的新视角合成Lora，支持从单张参考图生成任意视角的连贯视频。

### 🔧 专用模型（垂直场景工具）
1. **OpenMOSS-Team/MOSS-Transcribe-Diarize** <https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize>
   - 作者：OpenMOSS-Team | 点赞：231 | 下载：75105
   - 集成语音转写、说话人分角色能力的音频专用模型，适配会议记录场景。
2. **ATH-MaaS/OvisOCR2** <https://huggingface.co/ATH-MaaS/OvisOCR2>
   - 作者：ATH-MaaS | 点赞：135 | 下载：3678
   - 开源高精度OCR模型，支持倾斜文档、手写体识别。
3. **baidu/Unlimited-OCR** <https://huggingface.co/baidu/Unlimited-OCR>
   - 作者：baidu | 点赞：2009 | 下载：1852722
   - 百度开源的新一代全场景OCR模型，支持任意复杂版面识别，下载量破180万成为本周最热门垂直工具。
4. **Cactus-Compute/needle** <https://huggingface.co/Cactus-Compute/needle>
   - 作者：Cactus-Compute | 点赞：248 | 下载：733
   - 面向Agent场景优化的函数调用专用小模型，工具调用准确率远超通用大模型。

### 📦 微调与量化（社区衍生版本）
1. **prism-ml/Ternary-Bonsai-27B-gguf** <https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf>
   - 作者：prism-ml | 点赞：592 | 下载：74007
   - 2bit三进制量化的27B大模型GGUF版本，极低比特下几乎无性能损失。
2. **prism-ml/Bonsai-27B-gguf** <https://huggingface.co/prism-ml/Bonsai-27B-gguf>
   - 作者：prism-ml | 点赞：335 | 下载：559267
   - 1bit极致量化的27B大模型GGUF版本，仅需3GB显存即可流畅运行。
3. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** <https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF>
   - 作者：empero-ai | 点赞：2233 | 下载：2042670
   - 长上下文优化的9B多模态GGUF版本，支持1M超长窗口推理。
4. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** <https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive>
   - 作者：HauhauCS | 点赞：2785 | 下载：2328315
   - 无审查优化的35B多模态Qwen衍生GGUF版本，总下载量位居本周第一。
5. **empero-ai/Qwythos-9B-v2-GGUF** <https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF>
   - 作者：empero-ai | 点赞：148 | 下载：89107
   - Qwythos 9B v2的量化GGUF版本，适配本地端侧部署。
6. **AngelSlim/Hy3-GGUF** <https://huggingface.co/AngelSlim/Hy3-GGUF>
   - 作者：AngelSlim | 点赞：114 | 下载：80796
   - 腾讯Hy3大模型的社区量化GGUF版本，支持低配置设备本地运行。
7. **jlnsrk/GLM-5.2-colibri-int4**

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*