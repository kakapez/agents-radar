# Hugging Face 热门模型日报 2026-08-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-22 22:21 UTC

---

# Hugging Face 热门模型日报（2026-08-23）
统计口径：按周点赞数排序的平台Top30热门模型

---

## 今日速览
今日上榜的30个模型中国产开源项目占比超8成，Qwen、Moonshot两家的旗舰大模型周点赞双双破万，占据榜单前两位。通义千问新发的Qwen3.8-27B多模态基座爆发出极强生态影响力，衍生出近20款社区适配版本覆盖各类部署场景。音视频生成赛道MiniMax旗下两款文生音乐、文生视频模型下载量快速冲高，成为本周下载量最高的生成类项目。整体来看当前海外原生热门大模型已基本缺席Hugging Face头部榜单，国产开源模型已经成为绝对主流。

---

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型信息 | 核心说明 |
|---------|---------|
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) <br> 作者：moonshotai | 点赞10923、下载2612739，Moonshot刚开源的旗舰原生大模型，多任务推理能力对标商用闭源版，是本周仅次于Qwen系列的顶流LLM |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) <br> 作者：deepseek-ai | 点赞718、下载54566，DeepSeek最新迭代的专业版大模型，主打高准确率复杂推理，刚上线即进入热门榜单 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) <br> 作者：deepseek-ai | 点赞3629、下载2976281，DeepSeek主打低延迟的快版大模型，性能损失极小的情况下推理速度提升3倍，是生产环境部署的首选开源模型 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) <br> 作者：Qwen | 点赞1145、下载17386，通义千问推出的2.4T参数级MoE文本大模型，仅开放活跃参数A95B，支持百万级长上下文对话 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) <br> 作者：ornith-ai | 点赞320、下载12611，基于Qwen3.5 MoE改造的轻量化对话模型，端侧部署友好 |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) <br> 作者：superwhisper | 点赞199、下载1913，融合ASR语音识别能力的小参数量级LLM，适合端侧语音交互场景 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) <br> 作者：meta-models | 点赞1753、下载517564，Meta开源的多模态对话大模型，图文理解能力突出，下载量已突破50万 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型信息 | 核心说明 |
|---------|---------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) <br> 作者：Qwen | 点赞12118、下载2090699，本周周点赞榜首的通义千问多模态旗舰，支持图文输入生成，是当前最火的开源多模态基座 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) <br> 作者：Lightricks | 点赞1561、下载694670，Lightricks推出的图生视频开源模型，单文件扩散架构，部署门槛极低 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) <br> 作者：MiniMaxAI | 点赞1180、下载16644，MiniMax开源的文生音乐模型，支持自定义曲风、时长生成专业级音频内容 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) <br> 作者：MiniMaxAI | 点赞4335、下载3899160，本周下载量最高的文生视频大模型，峰值下载接近400万，是当前开源视频生成的标杆产品 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) <br> 作者：TenStrip | 点赞316、下载0，基于MiniMax-H3微调的个性化文生视频模型，专注特定风格的视频生成 |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) <br> 作者：LBH-123-AI | 点赞159、下载0，适配MiniMax-H3的视频潜空间超分辨率工具，专门用来提升生成视频的清晰度 |

---

### 🔧 专用模型
| 模型信息 | 核心说明 |
|---------|---------|
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) <br> 作者：froggeric | 点赞1396、下载0，专门修复Qwen3系列对话模板的公共资源包，解决不同推理框架下的对话对齐错误问题，广受开发者欢迎 |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) <br> 作者：z-lab | 点赞192、下载29705，集成深度投机解码技术的Qwen3.8定制版，推理速度较原版提升2倍以上 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型信息 | 核心说明 |
|---------|---------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) <br> 作者：unsloth | 点赞2616、下载6320542，Unsloth官方出品的Qwen3.8-27B GGUF全量化版本，适合llama.cpp端侧部署，是本周总下载量最高的衍生模型 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) <br> 作者：Qwen | 点赞663、下载2306777，通义千问官方发布的FP8精度量化版本，精度损失极低、显存占用减少40% |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) <br> 作者：unsloth | 点赞334、下载1202168，适配NVIDIA显卡的FP4量化版本，单消费级显卡即可全速运行27B参数模型 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*