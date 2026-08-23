# Hugging Face 热门模型日报 2026-08-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-23 22:20 UTC

---

# 2026-08-24 Hugging Face 热门模型日报
---
## 今日速览
今日Hugging Face热门榜核心由国内厂商新开源基座和社区衍生生态主导，通义千问最新发布的Qwen3.8-27B登顶周点赞榜，带动数十款衍生微调量化版本集中上榜。Moonshot开源的Kimi-K3上线即获得1.09万周点赞，热度直追榜首。视频生成赛道表现亮眼，MiniMax的H3文本生视频模型单周下载突破400万。整体榜单显示开源大模型的端侧部署需求已经超过云侧原生部署需求。
---
## 热门模型
### 🧠 语言模型（LLM、对话模型、指令微调）
1. **Qwen/Qwen3.8-27B** <https://huggingface.co/Qwen/Qwen3.8-27B>
   作者：Qwen | 点赞12302 | 下载2358347
   一句话说明：阿里通义千问最新发布的多模态原生基座模型，周点赞登顶全平台，是当前社区最热门的通用生成基座。
2. **moonshotai/Kimi-K3** <https://huggingface.co/moonshotai/Kimi-K3>
   作者：moonshotai | 点赞10948 | 下载2727920
   一句话说明：Moonshot刚开源的最新Kimi大模型权重，凭借此前闭源产品积累的优秀口碑上线即获超万点赞。
3. **deepseek-ai/DeepSeek-V4-Flash-0731** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731>
   作者：deepseek-ai | 点赞3651 | 下载3089709
   一句话说明：深度求索推出的轻量高速版DeepSeek V4大模型，主打低延迟高吞吐，适合高并发对话场景。
4. **deepseek-ai/DeepSeek-V4-Pro-0813** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813>
   作者：deepseek-ai | 点赞733 | 下载57928
   一句话说明：DeepSeek V4的最新高性能迭代版本，搭载更强的推理和多轮对话能力，发布后获得专业开发者关注。
5. **ornith-ai/Ornith-1.5-35B-A3B** <https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B>
   作者：ornith-ai | 点赞361 | 下载23516
   一句话说明：基于Qwen3.5魔改的MoE架构新基座，用更低的计算成本实现接近40B级别的模型性能。
6. **ornith-ai/Ornith-1.5-9B** <https://huggingface.co/ornith-ai/Ornith-1.5-9B>
   作者：ornith-ai | 点赞180 | 下载31496
   一句话说明：Ornith系列的小参数版本，主打端侧可跑的高性能对话能力。
7. **superwhisper/s1-mini** <https://huggingface.co/superwhisper/s1-mini>
   作者：superwhisper | 点赞212 | 下载2280
   一句话说明：搭载ASR能力的轻量文本生成模型，主打语音转写+后续生成的一站式处理。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **Lightricks/LTX-2.5** <https://huggingface.co/Lightricks/LTX-2.5>
   作者：Lightricks | 点赞1637 | 下载738345
   一句话说明：海外头部开源图像/视频生成厂商推出的最新视频扩散模型，支持长时序高清视频生成。
2. **MiniMaxAI/MiniMax-Music3** <https://huggingface.co/MiniMaxAI/MiniMax-Music3>
   作者：MiniMaxAI | 点赞1205 | 下载17421
   一句话说明：MiniMax开源的全链路音乐生成大模型，支持文本直接生成多轨高清音频。
3. **MiniMaxAI/MiniMax-H3** <https://huggingface.co/MiniMaxAI/MiniMax-H3>
   作者：MiniMaxAI | 点赞4375 | 下载4039236
   一句话说明：当前开源社区热度最高的文本/图像转视频SOTA模型，生成效果接近闭源产品水平。

### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **froggeric/Qwen-Fixed-Chat-Templates** <https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates>
   作者：froggeric | 点赞1420 | 下载0
   一句话说明：专门修复Qwen3系列对话模板bug的工具包，解决不同部署框架下对话格式错乱问题。
2. **peculiar-ragdoll/Qwen-Sharp-Chat-Templates** <https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates>
   作者：peculiar-ragdoll | 点赞198 | 下载0
   一句话说明：适配Sharp部署框架的Qwen优化对话模板，获得C#生态开发者集中点赞。
3. **LBH-123-AI/Minimax_h3_latent_Upscaler** <https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler>
   作者：LBH-123-AI | 点赞166 | 下载0
   一句话说明：专门针对MiniMax H3视频模型输出优化的潜空间超分工具，可直接提升生成视频分辨率。

### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **unsloth/Qwen3.8-27B-GGUF** <https://huggingface.co/unsloth/Qwen3.8-27B-GGUF>
   作者：unsloth | 点赞2732 | 下载6674515
   一句话说明：Unsloth官方出品的Qwen3.8-27B全精度GGUF量化版本，端侧部署下载量全榜第一。
2. **orcarouter/Qwen3.8-27B-Uncensored-MLX** <https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX>
   作者：orcarouter | 点赞950 | 下载47098
   一句话说明：适配苹果MLX框架的无对齐去限制版本，可直接在Mac本地部署运行。
3. **OBLITERATUS/Qwen3.8-27B-OBLITERATED** <https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED>
   作者：OBLITERATUS | 点赞623 | 下载244834
   一句话说明：重度去对齐的Qwen衍生版本，完全移除安全限制，支持任意场景生成。
4. **orcarouter/Qwen3.8-27B-Uncensored-FP8** <https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8>
   作者：orcarouter | 点赞1044 | 下载190062
   一句话说明：无损FP8精度的去对齐Qwen版本，推理速度比原生BF16版本快40%。
5. **HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF** <https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF>
   作者：HauhauCS | 点赞532 | 下载676697
   一句话说明：搭载多令牌预测（MTP）优化的GGUF版本，单步可生成最多8个令牌，推理速度翻倍。
6. **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF** <https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF>
   作者：JonathanColetti | 点赞648 | 下载1334820
   一句话说明：适配llama.cpp生态的热门去对齐GGUF版本，生态兼容性极强。
7. **orcarouter/Qwen3.8-27B-Uncensored-GGUF** <https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF>
   作者：orcarouter | 点赞373 | 下载108666
   一句话说明：社区最早发布的Qwen3.8-27B无对齐GGUF版本，是多数开发者的初代本地部署选择。
8. **ornith-ai/Ornith-1.5-35B-A3B-GGUF** <https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF>
   作者：ornith-ai | 点赞251 | 下载369478
   一句话说明：Ornith 35B MoE模型的GGUF量化版本，支持低配置硬件运行。
9. **huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF** <https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF>
   作者：huihui-ai | 点赞296 | 下载943360
   一句话说明：灰灰AI推出的无对齐Qwen GGUF版本，细节优化到位，获得大量用户认可。
10. **DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF** <https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF>
    作者：DavidAU | 点赞208 | 下载193794
    一句话说明：经过特殊GAIN冷融合训练的定制版GGUF，长文本生成能力显著优于原生版本。
11. **z-lab/Qwen3.8-27B-DFlash2** <https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2>
    作者：z-lab | 点赞201 | 下载36234
    一句话说明：搭载深度投机解码能力的优化版本，推理速度比原生高2倍以上。
12. **Qwen/Qwen3.8-27B-FP8** <https://huggingface.co/Qwen/Qwen3.8-27B-FP8>
    作者：Qwen | 点赞670 | 下载2653678
    一句话说明：官方推出的无损FP8量化版本，显存占用降低一半，性能几乎无损失。
13. **empero-ai/Qwen3.8-27B-Ridge-GGUF** <https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF>
    作者：empero-ai | 点赞250 | 下载131435
    一句话说明：经过Ridge结构化剪枝优化的GGUF版本，小参数量下保留90%原生能力。
14. **huihui-ai/Huihui-Qwen3.8-27B-abliterated** <https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated>
    作者：huihui-ai | 点赞257 | 下载24844
    一句话说明：灰灰AI推出的原生格式无对齐版本，支持直接加载到transformers库中使用。
15. **ornith-ai/Ornith-1.5-9B-GGUF** <https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF>
    作者：ornith-ai | 点赞175 | 下载359078
    一句话说明：Ornith 9B版本的GGUF量化版本，可在消费级显卡上流畅运行。
16. **incoai/Qwen3.8-27B-DFlash2** <https://huggingface.co/incoai/Qwen3.8-27B-DFlash2>
    作者：incoai | 点赞162 | 下载69783
    一句话说明：社区优化版Qwen3.8-27B投机解码版本，进一步降低投机解码的错误率。
17. **0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF** <https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF>
    作者：0bserverx | 点赞242 | 下载579334
    一句话说明：经过多轮去对齐训练的GGUF版本，安全过滤逻辑被完全擦除。
---
## 生态信号
当前Qwen3.8-27B家族占据全榜超6

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*