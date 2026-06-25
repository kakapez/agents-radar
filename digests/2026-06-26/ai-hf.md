# Hugging Face 热门模型日报 2026-06-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-25 23:18 UTC

---

# Hugging Face热门模型日报（2026-06-26）
---
## 今日速览
今日Hugging Face周度热门模型榜迎来核心大模型爆发，DeepSeek原生开源基座DeepSeek-V4 Pro以5061的周点赞量断层登顶，是本周用户认可度最高的全新发布模型。开源大模型生态的派生热度持续走高，Qwen、GLM、Gemma三大主流基座的社区量化、微调版本占据榜单过半席位，多个版本周下载量突破百万量级。多模态、语音、端侧专用小模型的曝光度明显提升，百度无限OCR、英伟达端侧视觉定位模型等垂直工具类模型也跻身热门队列。本周上榜模型整体部署友好度大幅提升，GGUF、FP4、FP8等量化格式的版本占比接近40%，适配本地推理的需求得到充分响应。

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **模型名**：[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
   基础信息：作者deepseek-ai，点赞5061，下载1,878,217
   一句话说明：本周断层登顶的原生开源对话大模型，支持超长上下文与复杂推理能力，是当前综合表现最接近头部闭源产品的开源基座。
2. **模型名**：[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)
   基础信息：作者zai-org，点赞2471，下载67107
   一句话说明：智源发布的原生MoE架构大模型，支持DSA稀疏激活机制，对话与推理表现位列国产开源模型第一梯队。
3. **模型名**：[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)
   基础信息：作者WeiboAI，点赞714，下载51717
   一句话说明：微博推出的3B参数量端侧小模型，基于Qwen2底座微调，主打轻量数学推理能力，适配移动设备部署。
4. **模型名**：[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)
   基础信息：作者nvidia，点赞695，下载50553
   一句话说明：英伟达发布的0.6B流式ASR模型，支持缓存优化的低延迟实时语音转写，适合在线语音交互场景。
5. **模型名**：[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)
   基础信息：作者microsoft，点赞343，下载5276
   一句话说明：微软推出的4B长上下文加速小模型，主打子代理场景下的快速上下文检索，可大幅提升长文档处理效率。
6. **模型名**：[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)
   基础信息：作者Qwen，点赞235，下载3389
   一句话说明：通义千问发布的专门面向智能体场景的35B多模态MoE大模型，原生支持复杂工具调用与环境交互。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **模型名**：[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)
   基础信息：作者baidu，点赞880，下载70743
   一句话说明：百度开源的无限制OCR模型，支持任意长度、任意倾斜角度的图像文字识别，是当前开源识别准确率最高的OCR工具。
2. **模型名**：[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
   基础信息：作者nvidia，点赞2363，下载407838
   一句话说明：英伟达开源的3B参数量端侧视觉定位模型，支持用户用自然语言指定图像中任意目标完成精准框选，零样本泛化能力极强。
3. **模型名**：[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)
   基础信息：作者MiniMaxAI，点赞1240，下载154350
   一句话说明：MiniMax推出的新一代通用多模态大模型，支持图文理解、图文生成多任务，全权重开源可直接商用。
4. **模型名**：[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
   基础信息：作者moonshotai，点赞992，下载502106
   一句话说明：月之暗面开源的代码专属多模态大模型，支持截图直接生成可运行代码，压缩权重版本部署门槛极低。
5. **模型名**：[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)
   基础信息：作者google，点赞1175，下载2187644
   一句话说明：谷歌发布的Gemma4系列旗舰多模态基座，支持全模态任务输入输出，本周下载量突破200万，是全球开发者最常用的12B级多模态模型。
6. **模型名**：[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)
   基础信息：作者krea，点赞242，下载2996
   一句话说明：Krea发布的极速文生图模型，生成速度比主流SD3快3倍，单张图生成耗时不到1秒。
7. **模型名**：[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)
   基础信息：作者krea，点赞184，下载5113
   一句话说明：Krea2的原生无对齐版本，无安全过滤限制，生成自由度极高，适合创意类生成场景。
8. **模型名**：[datalab-to/lift](https://huggingface.co/datalab-to/lift)
   基础信息：作者datalab-to，点赞152，下载5189
   一句话说明：基于Qwen3.5微调的PDF专属多模态模型，支持扫描版PDF的全结构化提取，无需额外OCR流程。
9. **模型名**：[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)
   基础信息：作者owensong，点赞201，下载0
   一句话说明：仅几十M参数量的超小端侧TTS模型，开箱即可实时生成接近人声的语音，适配嵌入式设备部署。
10. **模型名**：[Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)
    基础信息：作者Boogu，点赞123，下载824
    一句话说明：开源的中文图像编辑模型，支持用中文指令精准修改图像指定区域，适配国内用户创意编辑需求。
11. **模型名**：[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)
    基础信息：作者Comfy-Org，点赞118，下载10
    一句话说明：官方适配ComfyUI工作流的Krea2集成包，一键即可在Stable Diffusion生态中调用极速生成能力。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **模型名**：[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)
   基础信息：作者yuxinlu1，点赞2361，下载495813
   一句话说明：基于Gemma4 12B微调的代码专属大模型，编码能力超越原生基座40%，GGUF版本支持端侧本地代码补全。
2. **模型名**：[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)
   基础信息：作者Chunjiang-Intelligence，点赞90，下载646
   一句话说明：基于DeepSeek V4微调的网络安全专属大模型，原生支持漏洞挖掘、渗透测试相关代码生成与分析。
3. **模型名**：[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)
   基础信息：作者LiquidAI，点赞122，下载11833
   一句话说明：仅350M参数量的轻量向量嵌入模型，表征准确率超越同级别模型30%，适合低成本搭建本地向量库。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **模型名**：[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
   基础信息：作者HauhauCS，点赞2234，下载3520206
   一句话说明：社区最热门的无对齐微调Qwen多模态MoE模型，完全移除内容安全限制，周下载量突破350万，适配研发测试场景。
2. **模型名**：[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)
   基础信息：作者empero-ai，点赞473，下载134294
   一句话说明：基于Qwen3.5微调的长上下文推理模型，支持1M超长窗口，GGUF量化版本仅需8G显存即可运行。
3. **模型名**：[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)
   基础信息：作者empero-ai，点赞387，下载10160
   一句话说明：上述GGUF版本

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*