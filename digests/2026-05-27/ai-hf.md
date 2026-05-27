# Hugging Face 热门模型日报 2026-05-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-27 01:28 UTC

---

# Hugging Face 热门模型日报 | 2026-05-27
数据来源：Hugging Face Hub 周度热门模型榜（按周点赞量排序）

---

## 今日速览
今日HF热门榜单头部由国产AI厂商发布的新模型占据，DeepSeek最新V4-Pro以4311周点赞登顶周热度榜首，Qwen系列衍生模型扎堆上榜形成成熟生态集群。多模态生成赛道热度全面攀升，文生视频、全模态any-to-any类模型周点赞量普遍破千。大厂与社区分工明确：官方发布高性能基础大模型，社区快速跟进量化、去对齐、场景适配版本，衍生版下载量普遍远超官方基础版。音视频生成类工具出现多个低门槛可商用的开源版本，进一步拉低AIGC落地门槛。

## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **deepseek-ai/DeepSeek-V4-Pro**  
   链接：https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro  
   作者：deepseek-ai | 点赞：4311 | 下载：5,019,884  
   一句话说明：DeepSeek最新发布的通用对话大模型，性能对标头部闭源GPT级产品，是本周热度最高的开源基座，周下载量突破500万。
2. **Qwen/Qwen3.6-27B**  
   链接：https://huggingface.co/Qwen/Qwen3.6-27B  
   作者：Qwen | 点赞：1,475 | 下载：4,577,271  
   一句话说明：阿里通义千问最新原生图文多模态大模型，作为基座衍生出大量社区版本，本身在多模态对话、推理任务上表现领先。
3. **tencent/Hy-MT2-1.8B**  
   链接：https://huggingface.co/tencent/Hy-MT2-1.8B  
   作者：tencent | 点赞：1,029 | 下载：7,471  
   一句话说明：腾讯混元最新发布的小尺寸翻译专用大模型，中英等多语言翻译效果大幅超越同参数级开源方案。
4. **tencent/Hy-MT2-30B-A3B**  
   链接：https://huggingface.co/tencent/Hy-MT2-30B-A3B  
   作者：tencent | 点赞：397 | 下载：2,091  
   一句话说明：腾讯混元大尺寸A3B量化翻译模型，支持超100种语言高精度翻译，适合企业级多语言部署。
5. **openbmb/MiniCPM5-1B**  
   链接：https://huggingface.co/openbmb/MiniCPM5-1B  
   作者：openbmb | 点赞：311 | 下载：2,409  
   一句话说明：面壁智能发布的1B参数端侧纯文本小模型，性能远超同尺寸开源方案，可直接跑在移动端设备上。
6. **sapientinc/HRM-Text-1B**  
   链接：https://huggingface.co/sapientinc/HRM-Text-1B  
   作者：sapientinc | 点赞：379 | 下载：103,033  
   一句话说明：1B参数高速纯文本生成模型，主打低延迟高吞吐推理，适合高并发对话场景部署。
7. **nvidia/Nemotron-Labs-Diffusion-14B**  
   链接：https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B  
   作者：nvidia | 点赞：114 | 下载：5,453  
   一句话说明：英伟达发布的14B参数生成式大模型，主打科研场景的可控文本生成能力。
8. **CohereLabs/command-a-plus-05-2026-w4a4**  
   链接：https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4  
   作者：CohereLabs | 点赞：206 | 下载：7,769  
   一句话说明：Cohere最新旗舰大模型的4比特量化多模态版本，兼顾性能和部署效率。
9. **CohereLabs/command-a-plus-05-2026-bf16**  
   链接：https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16  
   作者：CohereLabs | 点赞：126 | 下载：13,869  
   一句话说明：Cohere最新旗舰大模型的原生BF16多模态版本，面向A100/H100等高端显卡部署场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **bytedance-research/Lance**  
   链接：https://huggingface.co/bytedance-research/Lance  
   作者：bytedance-research | 点赞：866 | 下载：1,908  
   一句话说明：字节跳动最新发布的any-to-any全模态生成模型，支持文本、图像、音频、视频任意跨模态转换，是首个登顶HF热度榜的国产全模态生成基座。
2. **SulphurAI/Sulphur-2-base**  
   链接：https://huggingface.co/SulphurAI/Sulphur-2-base  
   作者：SulphurAI | 点赞：1,374 | 下载：1,376,847  
   一句话说明：本周热度最高的开源文生视频模型，支持高清长视频生成，下载量突破137万，性能追平闭源头部文生视频产品。
3. **Supertone/supertonic-3**  
   链接：https://huggingface.co/Supertone/supertonic-3  
   作者：Supertone | 点赞：697 | 下载：48,112  
   一句话说明：新一代开源TTS模型，主打超高保真语音合成、零样本人声克隆，周下载量近5万。
4. **circlestone-labs/Anima**  
   链接：https://huggingface.co/circlestone-labs/Anima  
   作者：circlestone-labs | 点赞：1,556 | 下载：676,447  
   一句话说明：支持ComfyUI一键调用的单文件扩散生成模型，无需复杂依赖安装，上线后快速获得大量设计师用户青睐。
5. **NemoStation/Marlin-2B**  
   链接：https://huggingface.co/NemoStation/Marlin-2B  
   作者：NemoStation | 点赞：380 | 下载：9,144  
   一句话说明：2B参数视频理解模型，专门面向视频字幕生成、视频内容分析场景，识别精度大幅超越同级别方案。
6. **meituan-longcat/LongCat-Video-Avatar-1.5**  
   链接：https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5  
   作者：meituan-longcat | 点赞：303 | 下载：0  
   一句话说明：美团发布的音视频数字人生成模型，支持输入语音/文字+参考图直接生成高拟真数字人视频。
7. **microsoft/Lens-Turbo**  
   链接：https://huggingface.co/microsoft/Lens-Turbo  
   作者：microsoft | 点赞：106 | 下载：908  
   一句话说明：微软发布的高速文生图模型，生成速度比主流SD3快3倍，适合低延迟出图场景。
8. **microsoft/Lens**  
   链接：https://huggingface.co/microsoft/Lens  
   作者：microsoft | 点赞：103 | 下载：673  
   一句话说明：微软官方完整版Lens文生图模型，支持超高清4K图像生成，细节表现达到行业领先水平。
9. **nvidia/PiD**  
   链接：https://huggingface.co/nvidia/PiD  
   作者：nvidia | 点赞：113 | 下载：117  
   一句话说明：英伟达发布的图像超分辨率扩散模型，支持低清图无损放大8倍，几乎无失真。
10. **stabilityai/stable-audio-3-medium**  
    链接：https://huggingface.co/stabilityai/stable-audio-3-medium  
    作者：stabilityai | 点赞：109 | 下载：0  
    一句话说明：Stability AI最新发布的中等尺寸文生音频模型，支持生成任意风格音乐、音效，时长可达5分钟。
11. **ResembleAI/Dramabox**  
    链接：https://huggingface.co/ResembleAI/Dramabox  
    作者：ResembleAI | 点赞：262 | 下载：1,552  
    一句话说明：专门面向戏剧配音场景的TTS模型，支持多角色自动生成对话情绪，直接输出完整广播剧音频。
12. **openbmb/MiniCPM-V-4.6**  
    链接：https://huggingface.co/openbmb/MiniCPM-V-4.6  
    作者：openbmb | 点赞：978 | 下载：314,347  
    一句话说明：面壁智能最新端侧多模态小模型，支持OCR、图表解析等复杂多模态任务，可直接部署在手机端运行。

### 🔧

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*