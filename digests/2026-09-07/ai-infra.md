# AI 基础设施周报 2026-09-07

> 生成时间: 2026-09-07 01:53 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# 跨项目AI基础设施生态周报 | 2026-09-07
## 1. 生态概览
过去7天，AI基础设施生态呈现两大核心方向：下一代稀疏注意力模型的落地支持，以及生产部署的运维成熟度提升。在推理引擎、本地运行时、网关和微调框架领域，开发工作重点围绕Qwen3.8、DeepSeek-V4和GLM-5.3-Flash等旗舰模型，扩展对NVIDIA Blackwell、AMD RDNA4、Intel XPU及Apple Silicon硬件的支持。生产稳定性工作聚焦解决分布式推理卡顿、工具调用解析正确性和KV缓存效率瓶颈，同时网关与边缘部署层的供应链安全和可观测性功能也在加速推进。Agent工作负载需求成为贯穿全栈的驱动因素，针对长上下文会话、工具调用可靠性和KV缓存回滚的优化已在几乎所有项目中落地。

## 2. 项目活跃度对比
| 项目 | 近7天发布状态 | 未解决的高危/严重问题 | 进行中活跃PR数 | 核心工作方向 |
|---------|-------------------------------|---------------------------|------------------------|---------------------|
| vLLM | 无稳定版本发布；无破坏性变更 | 5个高危 | 10+ | 稀疏模型硬件适配、分布式推理稳定性、多模态ViT CUDA图 |
| SGLang | v0.5.19 稳定版（786个PR，214位贡献者） | 4个严重/高危 | 12+ | KV缓存架构重构、权重缓存守护进程、解耦式服务、AMD ROCm优化 |
| llama.cpp | 10个标签版本（b10819–b10830）；无破坏性变更 | 3个高危 | 8+ | GDN归一化正确性、RDNA4 kernel调优、GGUF转换工具、边缘后端修复 |
| Ollama | v0.34.0-rc1 预发布版 + v0.33.3 稳定版 | 6个严重/高危 | 5+ | Apple Silicon MLX功能扩展、云端模型工具调用可靠性、可观测性端点开发 |
| LiteLLM | 6次发布（v1.100.0 稳定版、预览版、仅Docker补丁） | 2个高危 | 7+ | Rust核心迁移、供应链安全（Docker签名）、MCP/工具使用稳定性、计费准确性 |
| Unsloth | v0.1.806-beta | 1个高危 | 8+ | 稀疏模型MTP训练加速、Studio可靠性、多硬件（iGPU/Windows/ARM）兼容性 |

## 3. 模型支持竞速
### 已上线支持
- **SGLang** 在v0.5.19中正式支持Qwen3.8 (2.4T-A95B)自回归模型，领跑大规模稀疏模型适配，成为首批实现这款最大开源稀疏模型首日兼容的项目。
- **llama.cpp** 实现了Spark2.5模型的端到端全链路支持（GGUF转换+推理），并新增`--fuse-qkv` HF转GGUF转换参数，降低融合QKV架构的内存开销。
- **Unsloth** 在v0.1.806-beta中通过默认开启MTP，实现Qwen3.8-Flash和GLM-5.3-Flash训练速度翻倍，在下一代稀疏模型微调支持方面处于领先地位。
- **Ollama** 扩展了Apple Silicon上的多模态覆盖范围，在v0.33.3的MLX引擎中新增gemma4图像与音频支持。

### 进行中竞速
- vLLM、SGLang和Unsloth均在积极开发DeepSeek-V4和GLM-5.3-Flash在NVIDIA与AMD硬件上的优化；vLLM重点推进DeepSeek-V4-Flash的SM8x（Ampere架构）向后兼容，SGLang则在稀疏模型解耦式服务支持上领跑。
- llama.cpp（投机解码的循环状态回滚）和SGLang（首日DSpark兼容）均在推进Kimi K3支持，体现了行业对循环架构落地的广泛需求。
- LiteLLM扩展了服务商覆盖范围，将Foundry Local列为一级OpenAI兼容服务商，并完善了Bedrock Mantle Responses API的IAM鉴权，适配企业级AWS部署场景。

### 格局定位
SGLang在大规模生产级稀疏模型服务就绪度上领先，llama.cpp则在边缘/消费级硬件模型覆盖方面占据主导。Unsloth是下一代稀疏架构微调性能的明确领跑者，vLLM则凭借社区驱动的模式，在最广泛的硬件平台上维持着全面的模型支持。

## 4. 性能前沿
优化工作集中在五大高影响力领域：
1.  **KV缓存架构重构**：跨项目最活跃的主题。SGLang合入了逻辑页放置功能，作为KV分片重构的第一步；推进了HiCache进程外数据面设计；通过权重缓存守护进程将Qwen3-235B FP8权重加载时间从5分钟以上缩短至1秒以内。Unsloth为并行聊天工作负载开发了KV缓存抢占机制，消除多会话OOM问题；Ollama解决了MLX前缀缓存效率低下的问题，并新增了主机端提示缓存内存边界控制。llama.cpp针对Agent工具调用工作负载优化了KV缓存恢复。
2.  **稀疏模型Kernel与分布式优化**：vLLM推进了AMD GPU上DeepSeek-V4的ROCm稀疏MLA解码融合，以及Blackwell架构的FlashInfer MLA索引缓冲区修复。SGLang优化了AMD MI355X上的EAGLE投机解码，并为DeepSeek-V4 HIP后端启用了可中断CUDA图预填充。Unsloth实现了Qwen3.8-Flash/GLM-5.3-Flash的MTP训练速度翻倍。
3.  **解耦式与并行服务**：SGLang的解码上下文并行与螺旋并行路线图取得进展，其PD解耦模式在DSPARK/EAGLE场景下已趋于成熟（DFLASH仍在开发中）。llama.org启动了`llama-server`的预填充/解码解耦设计，vLLM为DP+EP MoE部署新增了容错EP缩容能力。
4.  **量化与硬件专属调优**：llama.cpp在边缘kernel调优上领跑，实现了RDNA4 MUL_MAT优化、CUDA Q4_K/Q5_K无分支计算，以及OpenCL权重打包修复。vLLM推进了Intel XPU MXFP8序列并行和AMD RDNA4 FP8上游支持。Unsloth针对Strix Halo硬件优化了AMD iGPU Vulkan路由。
5.  **网关与控制面效率**：LiteLLM的Rust核心重写目标是实现网关开销低于1ms，同时其自适应路由器冷启动修复解决了成本路由模式下重启后的崩溃问题。

## 5. 层级定位
| 层级 | 项目 | 核心差异优势 | 主要用户群体 |
|-------|----------|----------------------|-------------------|
| **高性能服务引擎** | vLLM, SGLang | 数据中心级吞吐量、低延迟、分布式推理、广泛的硬件/量化支持 | 云服务商、企业AI平台、大规模推理部署场景 |
| **本地/边缘运行时** | llama.cpp, Ollama | 轻量部署、跨平台消费级硬件支持、GGUF生态、易用性 | 边缘部署、桌面AI、消费级应用、原型开发 |
| **AI网关** | LiteLLM | 服务商抽象、路由、计费/配额管理、安全、标准化API接口 | 多服务商AI应用、企业AI平台、SaaS团队 |
| **微调框架** | Unsloth | 训练速度优化、LoRA/QLoRA效率、端到端微调+服务工作流 | ML工程团队、模型定制流水线、微调服务商 |

值得注意的重叠领域：SGLang与vLLM在数据中心服务场景直接竞争，SGLang更大力推进解耦架构与KV缓存架构创新，vLLM则维持着更广泛的社区驱动模型/硬件覆盖。Ollama基于llama.cpp构建本地运行时功能，同时新增了开发者工具和云端模型代理能力。Unsloth（通过llama.cpp/vLLM后端）集成了推理服务能力，提供端到端的微调+部署工作流。

## 6. 趋势信号
### 行业趋势
1.  **稀疏注意力模型采用加速**：各推理与训练层针对Qwen3.8、DeepSeek-V4和GLM-5.3-Flash的密集适配工作表明，稀疏MoE/MLA架构正成为高性能开源模型的主流。尚未验证稀疏模型部署管线的基础设施团队将面临日益扩大的兼容性差距。
2.  **KV缓存成为新的性能主战场**：几乎所有项目都在投入KV缓存的重构、抢占、解耦或分层优化。对于长上下文和Agent工作负载，KV缓存的内存效率与管理现已成为主要瓶颈，而非原始计算FLOPs。
3.  **边缘硬件多样性正突破NVIDIA单一格局**：针对AMD RDNA4、Intel XPU、Apple Silicon和ARM Windows的积极优化，反映出对高性价比边缘和消费级AI部署的需求增长。本地运行时项目（llama.cpp、Ollama、Unsloth）正在引领这一多元化趋势。
4.  **Agent可靠性是核心痛点**：工具调用解析bug、无限推理循环、KV缓存状态管理问题，以及提前断开连接导致的计费缺口，在各层级普遍存在。当前Agent应用开发者正因基础设施支持不成熟而承担高昂的“可靠性税”。
5.  **供应链安全在网关优先级中提升**：LiteLLM的标准化Docker镜像签名反映出企业对可验证AI基础设施软件的需求增长，这一趋势可能会传导至服务引擎和运行时项目。

### 开发者行动建议
- **推理团队**：优先评估长上下文和Agent工作负载的KV缓存架构；SGLang的重构和vLLM的前缀缓存修复是重点关注方向。
- **Agent应用开发者**：实现防御性循环检测、token限制和工具调用降级解析，因为各引擎和网关层仍存在正确性问题。
- **边缘部署团队**：若计划采用非NVIDIA边缘部署，需验证RDNA4和Intel Arc的支持路线图；llama.cpp和Unsloth正引领这一转型。
- **企业平台团队**：在网关部署中加入Docker签名验证（从LiteLLM v1.100.0+开始），并跟踪基于Rust的网关迁移，以满足超低延迟场景需求。
- **微调从业者**：稀疏模型训练工作负载升级至Unsloth v0.1.806-beta，通过默认开启的MTP实现2倍速度提升。

---

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 每周摘要 | 2026-09-07
*数据来源：github.com/vllm-project/vllm（过去7天的更新）*

---

## 1. 过去7天亮点
本周没有新的稳定版本发布。社区活动主要集中在为下一代稀疏模型（DeepSeek-V4、Qwen3.8-Flash-Next、GLM-5.3-Flash）扩展NVIDIA Blackwell、AMD RDNA4和Intel XPU平台的硬件/量化支持，同时针对分布式推理卡顿和工具调用解析正确性问题进行了定向修复。多个长期推进的特性方向（批不变性、DRY采样、多模态ViT CUDA图）持续有社区讨论。

---

## 2. 版本发布与破坏性变更
过去7天没有发布官方版本，也未公布破坏性的API/配置变更。

---

## 3. 新模型与硬件支持
### 进行中（未关闭的Issue/PR）
- **DeepSeek-V4-Flash的SM8x（Ampere架构）支持**：社区请求在A100/A800/RTX 30xx GPU上启用DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731；目前这些型号在SM8x架构上暂不支持。
  [Issue #50576](https://github.com/vllm-project/vllm/issues/50576)
- **AMD RDNA4（gfx1201）FP8上游合并**：请求将社区提供的gfx1201/RDNA4 FP8补丁合入vllm-rocm，同时确认现有fall-through逻辑无需显式添加gfx1201限制即可正常运行。
  [Issue #28649](https://github.com/vllm-project/vllm/issues/28649)
- **MiniCPM-SALA模型支持请求**：社区请求支持openbmb/MiniCPM-SALA架构。
  [Issue #41641](https://github.com/vllm-project/vllm/issues/41641)
- **Intel XPU MXFP8序列并行**：该PR通过`--compilation-config`在Intel XPU上为MXFP8（W8A8，e8m0块级缩放）量化模型启用序列并行。
  [PR #49303](https://github.com/vllm-project/vllm/pull/49303)
- **Whisper语音模型支持跟踪**：用于整合Whisper相关功能需求和实现协调的汇总Issue。
  [Issue #25750](https://github.com/vllm-project/vllm/issues/25750)

### 多模态支持方向
- 多模态支持双周同步会持续进行，相关工作通过GitHub Projects跟踪。当前推进的重点包括ViT全CUDA图支持（适配Qwen3-VL、GLM-V、Kimi K2.5），以及为更多多模态模型的视觉塔/连接器添加LoRA支持。
  [RFC #4194](https://github.com/vllm-project/vllm/issues/4194) | [ViT CUDA Graph RFC #38175](https://github.com/vllm-project/vllm/issues/38175)

---

## 4. 性能与优化
### 进行中
- **批不变性特性与性能优化**：正在推进消除推理不确定性、优化批不变性路径的工作，通过项目看板跟踪进度。
  [Issue #27433](https://github.com/vllm-project/vllm/issues/27433)
- **DRY采样支持**：添加可缓解重复生成问题的DRY采样器的功能请求，该采样器对长上下文场景下的小模型尤其有用。
  [Issue #8581](https://github.com/vllm-project/vllm/issues/8581)
- **注意力分数输出**：长期存在的功能请求，要求在vLLM推理中对外暴露注意力分数。
  [Issue #3192](https://github.com/vllm-project/vllm/issues/3192)
- **LoRA内核的零切片提前退出**：该PR添加了每个适配器每个切片的激活掩码，在Python层和Triton内核层都能跳过权重为零的LoRA计算，降低部分LoRA激活场景下的开销。
  [PR #48887](https://github.com/vllm-project/vllm/pull/48887)
- **ROCm稀疏MLA解码融合**：两个PR将QK-RoPE、Q拼接、KV拼接、KV缓存写入和fp8查询组装融合为单个AITER内核，用于AMD GPU上的DeepSeek-R1/MLA路径，减少内核启动开销。
  [PR #47757](https://github.com/vllm-project/vllm/pull/47757) | [PR #55230](https://github.com/vllm-project/vllm/pull/55230)
- **SWA/混合层MFU/MBU估算**：该PR修复了分析型性能指标，使其能正确统计滑动窗口注意力和混合层架构的FLOPs。
  [PR #55624](https://github.com/vllm-project/vllm/pull/55624)
- **FlashInfer MLA稀疏SM120索引缓冲区修复**：该PR调整了GLM-5.3-Flash kpool扩宽的top-k缓冲区大小，使其无需手动修改即可在SM120上适配默认的`index_topk=2048`配置。
  [PR #55563](https://github.com/vllm-project/vllm/pull/55563)
- **容错EP缩容**：该PR为DP+EP MoE部署的vLLM容错框架添加了缩容和自动恢复能力，支持GPU瞬时故障时的优雅降级。
  [PR #46370](https://github.com/vllm-project/vllm/pull/46370)

---

## 5. 稳定性与回归问题
### 高严重度
1. **Qwen3.8-Flash-Next贪心解码不确定性（sm121/GB10）**：当提示词长度接近`indexer_budget`时，温度为0的请求会返回不一致的输出，原因是预填充稀疏注意力中的`persistent_topk`行为异常。
   [Issue #54521](https://github.com/vllm-project/vllm/issues/54521)
2. **v0.27.0 4节点TP=4引擎空闲后卡顿**：GB10/aarch64集群空闲约1分钟后会出现永久服务卡顿，由`shm_broadcast`写者饥饿导致；请求无法到达调度器，但健康检查正常通过。
   [Issue #51921](https://github.com/vllm-project/vllm/issues/53960)
3. **v0.28.0 DeepSeek-V4-Pro 2节点分布式挂起**：2x8 H100部署初始化后无限期挂起；在v0.25.0上运行正常，属于版本回归问题。
   [Issue #53894](https://github.com/vllm-project/vllm/issues/53894)
4. **单GPU（GB10）上PLE CPU卸载死锁**：设置`VLLM_PLE_CPU_OFFLOAD=1`且TP=1时，Qwen3.8-Flash-Next在内核预热阶段会永久挂起。
   [Issue #53960](https://github.com/vllm-project/vllm/issues/53960)
5. **解码上下文并行输出漂移/乱码（v0.21.0+）**：v0.21.0及夜间构建版本中，`--decode-context-parallel-size`会导致输出结果错误。
   [Issue #41623](https://github.com/vllm-project/vllm/issues/41623)

### 中严重度
- **工具调用解析失败**：
  - 当XML的`tool_call`标记出现在`<think>`推理区域内，且使用`--reasoning-parser qwen3 --tool-call-parser qwen3_coder`配置时，Qwen3.5-35B-A3B-FP8会丢失工具调用。[Issue #39056](https://github.com/vllm-project/vllm/issues/39056)
  - Gemma 4 31B IT的工具验证在PI编码智能体场景下失败，报错缺少`path`属性。[Issue #39072](https://github.com/vllm-project/vllm/issues/39072)
- **DFlash2 + YaRN前缀缓存零复用**：启用DFlash2时，完全相同的1.04M token提示词没有命中前缀缓存，而仅目标模式下可复用约1.039M token。[Issue #54094](https://github.com/vllm-project/vllm/issues/54094)

### 已合并/进行中的修复PR
- **DeepGEMM SM12x纯FP8回归**：该PR将内置的DeepGEMM锁定为`a6b593d`版本，以修复新版本中损坏的SM12x纯FP8 1d1d内核。[PR #53680](https://github.com/vllm-project/vllm/pull/53680)
- **DeepSeek-V4索引器分页MQA元数据崩溃**：该PR将索引器解码元数据填充的判断条件从导入检查改为`is_deep_gemm_supported()`，修复了DSV4 compress-128页面上的主机断言错误。[PR #53522](https://github.com/vllm-project/vllm/pull/53522)
- **mhc_pre_broadcast DeepGEMM回退**：该PR在DeepGEMM不支持时为`mhc_pre_broadcast`添加TileLang回退方案，修复sm_121上DeepSeek-V4的启动失败问题。[PR #53055](https://github.com/vllm-project/vllm/pull/53055)
- **KV卸载SHM cgroup内存检查**：该PR在为CPU KV卸载分配SHM前添加cgroup内存余量校验，避免无提示的OOM。[PR #54014](https://github.com/vllm-project/vllm/pull/54014)
- **全注意力幽灵块竞争条件**：该PR修复了前缀块哈希在GPU KV写入完成前就提交到BlockPool的竞争问题，该问题会导致缓存命中未初始化的数据。[PR #42359](https://github.com/vllm-project/vllm/pull/42359)

### 已关闭的问题
- **Gemma 4 31B FP8_BLOCK输出乱码**：根因是吸收激活缩放被重复应用导致logit饱和；修复后问题已关闭。[Issue #39407](https://github.com/vllm-project/vllm/issues/39407)
- **Jetson Thor上Qwen3-VL FP8输出感叹号**：Jetson Thor上仅生成`!`token的bug已修复并关闭。[Issue #27364](https://github.com/vllm-project/vllm/issues/27364)
- **Qwen3.5-MoE在transformers 5.x中因类重命名加载失败**：针对重命名后的`Qwen3_5MoeTextConfig`类的支持修复已关闭。[Issue #36236](https://github.com/vllm-project/vllm/issues/36236)

---

## 6. 对应用开发者的影响
- **稀疏注意力模型部署**：如果在Blackwell GPU上运行Qwen3.8-Flash-Next或DeepSeek-V4，在Issue #54521解决前，仅当提示词长度低于`indexer_budget`时才能保证输出确定性；单GB10配置下避免使用`VLLM_PLE_CPU_OFFLOAD=1`，以防启动挂起。
- **工具调用智能体**：同时使用推理解析器和工具调用解析器的Qwen3.5模型，如果工具标记出现在`<think>`块中，可能会遗漏函数调用（Issue #39056）。建议在生产上线前，用有代表性的推理输出测试智能体流程，或使用能处理嵌套工具标签的解析器。
- **多模态部署**：视觉塔/连接器的LoRA支持正在从Qwen-VL/idefics3向更多模型扩展（Issue #31479的初始实现已关闭）；关注RFC #4194了解即将推出的ViT CUDA图优化，该优化将降低视觉编码延迟。
- **分布式推理升级**：多节点DeepSeek-V4-Pro部署暂不要从v0.25.0升级到v0.28.0，因为挂起回归问题仍未解决（Issue #53894）。4节点TP=4的GB10集群也应避免使用v0.27.0，因为存在空闲卡顿问题。
- **小模型/长上下文工作负载**：DRY采样器功能请求（Issue #8581）获得了大量社区支持；如果你运行的小模型存在高重复率问题，可以点赞或贡献代码来加快其优先级排序。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 每周摘要 — 2026-09-07
*(数据来源：github.com/sgl-project/sglang，过去7天的更新)*

---

## 1. 过去7天亮点
SGLang v0.5.19 正式发布，合并了来自214位贡献者的786个PR，新增对全新Qwen3.8（2.4T-A95B）自回归模型的支持。基础设施层面，并行化与解耦路线图推进迅速，CI与测试套件也完成了大规模整合。最活跃的工作方向包括AMD/ROCm内核优化、KV缓存架构重构，以及Apple Silicon服务端重设计。

---

## 2. 版本发布与破坏性变更
- **v0.5.19** 已发布
  - 合并214位贡献者提交的786个PR
  - 新增模型支持：Qwen3.8（2.4T-A95B）自回归模型
  - 完整支持模型列表：[SGLang Cookbook](https://docs.sglang.io/cookbook)
  - 本次发布亮点中未提及明确的破坏性变更

---

## 3. 新模型与硬件支持
### 模型
- **Qwen3.8 (2.4T-A95B)**（自回归）：已在v0.5.19中新增支持（[PR #35758](https://github.com/sgl-project/sglang/pull/35758)）
- **Qwen3.8-Flash-Next 思考模式** 支持正在开发中；工具解析器bug正在排查（[Issue #36537](https://github.com/sgl-project/sglang/issues/36537)）
- **Kimi K3** 路线图正在活跃跟踪，将提供首日支持与DSpark兼容性（[Issue #32607](https://github.com/sgl-project/sglang/issues/32607)）

### 硬件 / 后端
- **英特尔下一代至强CPU**：新增CBB（计算构建块）核心拓扑管理功能（[PR #36850](https://github.com/sgl-project/sglang/pull/36850)）
- **华为Atlas A5 NPU**：DeepSeek-V4初始处理支持正在开发中（[PR #37373](https://github.com/sgl-project/sglang/pull/37373)）
- **Apple Silicon**：提出服务端重设计方案——采用Torch主导的SRT路径，搭配导出的整模型MLX区域（[Issue #32321](https://github.com/sgl-project/sglang/issues/32321)、[PR #36164](https://github.com/sgl-project/sglang/pull/36164)）
- **AMD ROCm**：
  - EAGLE投机解码topk=1优化（跳过全词表softmax计算）（[PR #35872](https://github.com/sgl-project/sglang/pull/35872)）
  - 面向MI355X的gfx950汇编注意力内核，支持EAGLE验证/草稿/解码阶段（[PR #37465](https://github.com/sgl-project/sglang/pull/37465)）
  - DeepSeek-V4 HIP基数后端启用可中断CUDA图预填充（[PR #37810](https://github.com/sgl-project/sglang/pull/37810)）

---

## 4. 性能与优化
- **引擎快速恢复**：权重缓存守护进程（Weight Cache Daemon）第一阶段已落地；Qwen3-235B FP8权重加载时间从约306–327秒降至1秒以内（[Issue #33522](https://github.com/sgl-project/sglang/issues/33522)）
- **HiCache优化**：
  - 减少流水线并行场景下`check_hicache_events`中的`all_reduce`调用次数（[PR #37562](https://github.com/sgl-project/sglang/pull/37562)）
  - 为HiCache函数新增`@rank_consistency`验证器，并已纳入CI覆盖（[PR #37425](https://github.com/sgl-project/sglang/pull/37425)）
  - 提出基于设备内存IPC的进程外HiCache数据平面方案（[Issue #37372](https://github.com/sgl-project/sglang/issues/37372)）
- **KV缓存架构**：
  - 逻辑页放置（KV分片重构系列的首个变更）已合并，仅涉及索引空间层面的改动（[PR #37614](https://github.com/sgl-project/sglang/pull/37614)）
  - 为DeepSeek-V4实现统一的KV SWA按请求环形运行时统计（[PR #31040](https://github.com/sgl-project/sglang/pull/31040)）
- **上下文并行**：
  - 2026年Q3的解码上下文并行（DCP）+ Helix并行路线图正在推进（[Issue #29736](https://github.com/sgl-project/sglang/issues/29736)）
  - 2026年Q3上下文并行路线图活跃跟踪中，支持范围从部分预填充扩展至全场景覆盖（[Issue #21788](https://github.com/sgl-project/sglang/issues/21788)）
- **HiSparse长上下文稀疏服务**：
  - 修复`swap_in_block_size`低于512时换入规划器前缀扫描损坏的问题（[PR #38243](https://github.com/sgl-project/sglang/pull/38243)）
  - HiSparse路线图正在推进，目标是降低长上下文解码的HBM占用（[Issue #28874](https://github.com/sgl-project/sglang/issues/28874)）
- **多模态 / 扩散模型**：
  - Triton变长预填充注意力现已支持滑动窗口和每头sink机制（[PR #38142](https://github.com/sgl-project/sglang/pull/38142)）
  - 降低扩散模型内部预热帧搜索的噪声（[PR #38226](https://github.com/sgl-project/sglang/pull/38226)）
- **网关**：Kubernetes服务发现机制已调整，采用周期性全量LIST来应对不可靠的watch流（[PR #32322](https://github.com/sgl-project/sglang/pull/32322)）
- **测试 / CI**：
  - 测试清理与CI分类整合：涉及201个文件，净减少11.4K行代码（[PR #37436](https://github.com/sgl-project/sglang/pull/37436)）
  - 扩散模型2-GPU CI任务已重新平衡，超时时间从4小时缩短至45分钟（[PR #38239](https://github.com/sgl-project/sglang/pull/38239)）

---

## 5. 稳定性与回归问题
### 严重 / 高优先级
1. **Qwen3.8-Flash-Next 思考模式 + qwen3_coder工具解析器在token ID 0处死循环**（未解决）
   - 官方首日SGLang镜像可复现；暂无修复PR关联
   - [Issue #36537](https://github.com/sgl-project/sglang/issues/36537)
2. **PD解耦模式下DFLASH投机解码崩溃**（未解决）
   - 解码端`spec_info`为None，导致崩溃后看门狗自终止；DSPARK/EAGLE在PD下可正常工作，但DFLASH缺少解耦适配逻辑
   - [Issue #36140](https://github.com/sgl-project/sglang/issues/36140)
3. **PrefillDelayer混合状态反馈回路 + DP注意力 + 分块预填充场景下预填充坍缩**（未解决）
   - 调度器/性能稳定性问题；请求可完成但处理进度下降
   - [Issue #35241](https://github.com/sgl-project/sglang/issues/35241)
4. **CUDA核心转储跟踪器**：293条评论记录了PR测试中自动收集的故障（持续跟踪中）
   - [Issue #26340](https://github.com/sgl-project/sglang/issues/26340)

### 中优先级
- **DeepSeek-V4 FP8调度器在DSV4稀疏预填充中挂起**（已关闭，最新版本已修复）
  - [Issue #34235](https://github.com/sgl-project/sglang/issues/34235)
- **glm-5.2-w4afp8分块预填充大小不生效 + gemm预热慢**（已关闭，无后续进展）
  - [Issue #29358](https://github.com/sgl-project/sglang/issues/29358)
- **bench_serving与引擎日志中的解码吞吐量不一致**（未解决，适合新手贡献）
  - [Issue #3050](https://github.com/sgl-project/sglang/issues/3050)
- **CI不稳定问题跟踪**：截至2026-09-07，1个持续失败、9个偶发失败、957个近期已修复
  - [Issue #17050](https://github.com/sgl-project/sglang/issues/17050)

---

## 6. 对应用开发者的影响
- **Qwen3.8已可在v0.5.19中测试**，但目前请避免同时使用Qwen3.8-Flash-Next与工具调用功能，待token ID 0死循环bug（[#36537](https://github.com/sgl-project/sglang/issues/36537)）修复后再使用。
- **大尺寸FP8模型加载速度大幅提升**：如果你运行Qwen3-235B级别的工作负载，权重缓存守护进程（[#33522](https://github.com/sgl-project/sglang/issues/33522)）将冷启动权重加载时间从5分钟以上缩短至1秒以内——建议在故障切换/恢复流水线中评估使用。
- **长上下文智能体工作负载**：可关注分布式KV缓存系统（[#21846](https://github.com/sgl-project/sglang/issues/21846)）与HiSparse（[#28874](https://github.com/sgl-project/sglang/issues/28874)）路线图——两者均针对多轮智能体会话中遇到的KV缓存内存与吞吐量瓶颈进行优化。
- **PD解耦模式用户**：目前请继续使用DSPARK/EAGLE投机解码；DFLASH暂不支持解耦解码模式（[#36140](https://github.com/sgl-project/sglang/issues/36140)）。
- **Apple Silicon / 边缘部署用户**：Torch+MLX混合服务端设计（[#32321](https://github.com/sgl-project/sglang/issues/32321)）正在推进——如果你计划在Mac设备上部署SGLang，可以持续关注进展。
- **Kubernetes网关用户**：服务发现修复（[#32322](https://github.com/sgl-project/sglang/pull/32322)）解决了watch流不稳定的托管集群上Pod集合漂移的问题——如果你运行在这类平台上，可在该PR合并后升级版本。
- **单元测试覆盖率提升**（[#20865](https://github.com/sgl-project/sglang/issues/20865)，已关闭）意味着后续版本的核心模块行为将更可靠，降低下游集成的回归风险。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 周刊 | 2026-09-07
来源: [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)

---

## 1. 过去7天亮点
本周共发布10个带标签的构建版本（b10819–b10830），核心更新包括官方支持Spark2.5模型、修复门控注意力架构中关键的GDN归一化问题，以及新增HF转GGUF的`--fuse-qkv`转换参数。后端团队针对性修复了CUDA竞态条件、OpenCL q4_K/q5_K权重打包问题和Metal内存泄漏；服务端与工具链新增结构化JSONL日志功能，并简化了CMake的UI资源嵌入流程。当前开发重点集中在RDNA 4优化、循环模型的KV缓存回滚，以及`llama-server`的预填充/解码分离架构。

---

## 2. 版本发布与破坏性变更
过去7天未引入破坏API或配置的变更。近期版本重点更新：
- **b10830** — 转换工具：新增`--fuse-qkv`参数，支持在HF转GGUF过程中将Q/K/V融合为QKV ([#22780](https://github.com/ggml-org/llama.cpp/pull/22780))
- **b10823** — 通用模块：新增`--log-jsonl`参数，输出结构化JSON日志 ([#28437](https://github.com/ggml-org/llama.cpp/pull/28437))
- **b10822** — UI模块：改为通过CMake直接嵌入资源，移除构建阶段的C++辅助工具和外部gzip依赖，简化交叉编译流程 ([#28445](https://github.com/ggml-org/llama.cpp/pull/28445))

---

## 3. 新模型与硬件支持
### 模型
- **Spark2_5ForCausalLM**: 全链路支持已落地，涵盖GGUF转换、架构注册、分词器预分词器和推理计算图 ([#27868](https://github.com/ggml-org/llama.cpp/pull/27868)，已在b10828版本发布)
- **HrmTextForCausalLM (DFM Mimir 1B)**: 双栈交替Transformer架构支持开发中，已实现融合GQKV投影转换 ([#27625](https://github.com/ggml-org/llama.cpp/pull/27625))
- **Kimi-K3**: 循环状态回滚支持开发中，可在不修改现有KDA状态和Q/K/V卷积窗口存储的前提下实现投机解码 ([#28466](https://github.com/ggml-org/llama.cpp/pull/28466))

### 硬件 / 后端
- **Metal**: 为M2 Max补全剩余fa-vec调优项 ([#28458](https://github.com/ggml-org/llama.cpp/pull/28458)，b10821)；修复提前返回路径中的内存泄漏问题 ([#28399](https://github.com/ggml-org/llama.cpp/pull/28399)，b10819)
- **Hexagon**: 批量缓冲区边界和跨步拷贝调度修复开发中 ([#28516](https://github.com/ggml-org/llama.cpp/pull/28516))
- **XDNA后端**: 社区功能需求，正处于活跃讨论阶段（32 👍） ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725))

---

## 4. 性能优化
### 已落地
- **CUDA**: 修复mmid和mmf内核中的竞态条件 ([#28475](https://github.com/ggml-org/llama.cpp/pull/28475)，b10826)
- **OpenCL**: 修正q4_K、q5_K矩阵乘法操作的权重打包选择逻辑 ([#28402](https://github.com/ggml-org/llama.cpp/pull/28402)，b10827)
- **GDN归一化修复**: 将门控Delta网络的Q/K归一化方式从`max`修正为`rsqrt`（epsilon置于根号内），与flash-linear-attention的l2norm定义对齐，修复相关架构的推理正确性问题 ([#28068](https://github.com/ggml-org/llama.cpp/pull/28068)，b10829)
- **语法约束**: 修复最大重复阈值计算错误 ([#28469](https://github.com/ggml-org/llama.cpp/pull/28469)，b10825)

### 开发中
- **Vulkan MoE优化**: 在专家路由后计算所需工作项边界，跳过mul_mm coopmat1路径中的不必要计算 ([#25483](https://github.com/ggml-org/llama.cpp/pull/25483))
- **CUDA Q4_K/Q5_K无分支计算**: 针对Spark模型增加预取，消除按列解包缩放值的重复执行，提升批量大小>1时的性能 ([#26705](https://github.com/ggml-org/llama.cpp/pull/26705))
- **HIP RDNA 4 MUL_MAT优化**: 修复Q6_K和Q2_K相关问题，更新mmq判断条件，已在ROCm 7.15上通过后端算子测试验证 ([#25940](https://github.com/ggml-org/llama.cpp/pull/25940))
- **RDNA4 MMVQ调优**: 调整Q4_K和Q6_K单token解码的warp数量，提升gfx1200平台的吞吐量 ([#24386](https://github.com/ggml-org/llama.cpp/pull/24386))
- **CUDA/HIP Flash Attention调优 (gfx1201)**: 提升R9700 PRO上长上下文预填充性能，同时修复通用CUDA FA代码中HS=256的问题 ([#28102](https://github.com/ggml-org/llama.cpp/pull/28102))
- **KV缓存恢复优化**: 针对频繁调用工具的智能体工作负载，优化非连续缓存单元的恢复流程 ([#27991](https://github.com/ggml-org/llama.cpp/pull/27991))
- **`llama-server`预填充/解码分离**: 路线图功能，正处于活跃设计阶段，目标是将提示词处理和token生成拆分到专用硬件上执行 ([#21266](https://github.com/ggml-org/llama.cpp/issues/21266))

---

## 5. 稳定性与回归问题
按严重程度排序（影响范围+评论活跃度）：
1. **[高] Qwen3.5 9B 工具调用评估bug（ROCm）**: 启用思考模式时，模型频繁在思考块内输出XML格式的工具调用，并停止生成；60条评论，最后更新于2026-09-07，暂无关联修复PR ([#20837](https://github.com/ggml-org/llama.cpp/issues/20837))
2. **[高] SYCL多GPU张量拆分崩溃**: 双Arc Pro B70平台上，尽管P2P功能正常，`--split-mode tensor`仍会触发`dev2dev_memcpy` DEVICE_LOST错误；28条评论 ([#27198](https://github.com/ggml-org/llama.cpp/issues/27198))
3. **[高] DeepSeek V4 输出乱码（ROCm Strix Halo）**: Ryzen AI Max+ 395上使用HIP后端时，IQ3_XXS量化模型输出乱码；29条评论，尚未确认根因 ([#25436](https://github.com/ggml-org/llama.cpp/issues/25436))
4. **[中] MTP Qwen3.6 27B 重复输出`////`**: 长时间会话后，模型输出重复斜杠；32条评论，CUDA后端 ([#23577](https://github.com/ggml-org/llama.cpp/issues/23577))
5. **[中] 投机解码正确性漂移**: 量化目标上draft-mtp/draft-dspark的贪心输出与常规推理结果不一致（bf16下一致）；21条评论 ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618))
6. **[中] gguf-py 宽张量符号丢失**: NumPy 1.x的临时变量省略机制导致≥256K的张量在Q8_0/TQ1_0/TQ2_0量化过程中丢失符号；修复PR [#28523](https://github.com/ggml-org/llama.cpp/pull/28523) 已提交，附带回归测试
7. **[低] JSON枚举处理bug**: 枚举值被输出为布尔值而非整数（b10585引入的回归）；修复PR [#28518](https://github.com/ggml-org/llama.cpp/pull/28518) 已提交，附带测试覆盖
8. **[低] SYCL `--fit` 内存统计偏差**: 加载器未完全统计运行时内存，导致Arc B70平台出现内存溢出；17条评论 ([#27595](https://github.com/ggml-org/llama.cpp/issues/27595))

本周已关闭问题：Mac x86 Vulkan AMD输出乱码 ([#20029](https://github.com/ggml-org/llama.cpp/issues/20029))、SYCL xe2段错误 ([#25808](https://github.com/ggml-org/llama.cpp/issues/25808))、TranslateGemma中的Jinja模板解析错误 ([#20305](https://github.com/ggml-org/llama.cpp/issues/20305))。

---

## 6. 对应用开发者的影响
- **结构化日志已可用**: b10823版本新增的`--log-jsonl`参数简化了llama.cpp与可观测性体系的集成——无需自定义日志解析，即可将token吞吐量、延迟和错误指标接入现有监控管道。
- **Spark2.5集成已达到生产可用**: 完整的GGUF转换和推理支持意味着你现在可以在边缘和服务端部署中直接使用Spark2.5模型，无需维护自定义分支；使用`--fuse-qkv`转换参数可降低内存开销，减少融合QKV架构的内核启动次数。
- **智能体工作负载性能将提升**: 开发中的KV缓存非连续恢复优化 ([#27991](https://github.com/ggml-org/llama.cpp/pull/27991)) 直接针对智能体循环中工具调用的往返延迟瓶颈——如果你正在构建支持工具调用的助手，建议关注该PR。
- **ROCm/SYCL用户需谨慎测试**: 多个未修复的正确性和崩溃问题影响AMD RDNA 3/4和Intel Arc平台，尤其是Qwen3.5/3.6和DeepSeek V4等新模型。建议使用经验证的量化格式（用bf16做验证），并关注`HIP`和`SYCL`标签的修复进展。
- **分离式服务架构即将到来**: `llama-server`的预填充/解码分离路线图项 ([#21266](https://github.com/ggml-org/llama.cpp/issues/21266)) 将支持异构部署，可同时搭配高速预填充硬件和高吞吐量解码硬件——建议开始评估工作负载的预填充/解码比例，提前规划容量。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 每周摘要 | 2026-09-07

---

## 1. 近 7 天亮点
Ollama 发布了 `v0.34.0-rc1`，为 macOS 用户带来了原生 ChatGPT Desktop 集成；同时发布了 `v0.33.3`，新增 MLX 上的 gemma4 多模态支持，并提升了 Apple Silicon 上的结构化输出性能。社区对 Prometheus 兼容的 `/metrics` 端点的需求正在推进，相关实现 PR 已进入活跃开发阶段；同时还报告了多起高严重性 bug，涉及云端模型工具调用正确性以及 MLX 运行器的上下文强制限制问题。

---

## 2. 版本发布与破坏性变更
| 版本 | 状态 | 核心变更 |
|---------|--------|-------------|
| [v0.34.0-rc1](https://github.com/ollama/ollama/releases/tag/v0.34.0-rc1) | 预发布 | macOS 用户现在可以通过应用级设置，直接在 ChatGPT Desktop 中使用本地 Ollama 模型；提升了 Apple Silicon 上的结构化输出性能。 |
| [v0.33.3](https://github.com/ollama/ollama/releases/tag/v0.33.3) | 稳定版 | <ul><li>gemma4 在 MLX 引擎上现已支持图像和音频输入</li><li>输出结果中现在会上报提示词缓存的 token 数量</li><li>运行时现在会遵循 GGUF 模型的默认参数</li><li>同步了上游 MLX、MLX-C 和 llama.cpp 的更新</li></ul> |

过去 7 天内未报告 API 或配置层面的破坏性变更。

---

## 3. 新模型与硬件支持
- **MLX 多模态能力扩展**：通过 MLX 引擎，gemma4 在 Apple Silicon 上获得了图像+音频支持（[v0.33.3 发布说明](https://github.com/ollama/ollama/releases/tag/v0.33.3)）。
- **Spark-X2.5 架构支持请求**：社区 PR 正在开发中，旨在新增对 `spark2_5` 架构（Spark-X2.5-4B / 1.7B 模型）的原生支持（[Issue #18195](https://github.com/ollama/ollama/issues/18195)）。
- **MLX 上的 Qwen 静态 YaRN**：正在进行的 PR 为 MLX 运行器上的 Qwen3.5/3.8 模型添加 YaRN RoPE 缩放支持，可将上下文窗口扩展至 `factor * original_max_position_embeddings`（[PR #18263](https://github.com/ollama/ollama/pull/18263)）。
- **旧版 macOS 支持请求**：有功能请求提出希望兼容 14.0 以下版本的 macOS（据报 Monterey 12.7.2 版本无法使用）（[Issue #17842](https://github.com/ollama/ollama/issues/17842)）。

---

## 4. 性能与优化
- **Apple Silicon 结构化输出加速**：v0.34.0-rc1 提升了 Apple Silicon 上的结构化输出性能（未提供具体基准测试数据）（[v0.34.0-rc1 发布说明](https://github.com/ollama/ollama/releases/tag/v0.34.0-rc1)）。
- **MLX 前缀缓存效率问题**：有 bug 报告称，前缀缓存恢复会被截断到 8192 token 的边界，在 Apple M2 Max 上处理部分前缀匹配的工作负载时，每个智能体轮次需要额外 17–27 秒的重新预填充（[Issue #18267](https://github.com/ollama/ollama/issues/18267)）。
- **llama-server 提示词缓存内存控制**：正在进行的 PR 新增了 `OLLAMA_CACHE_RAM` 环境变量，用于限制 llama-server 主机端提示词缓存的大小，防止被驱逐的 KV 状态导致内存无限制增长（[PR #18265](https://github.com/ollama/ollama/pull/18265)）。
- **VRAM 预测框架**：开发中的 PR 实现了基于模型头部维度和历史加载测量的单 GPU VRAM 用量预测，可支持更优的自动卸载决策（[PR #18198](https://github.com/ollama/ollama/pull/18198)）。
- **缓存提示词 token 上报**：v0.33.3 现在会上报已缓存的提示词 token，方便用户衡量缓存命中效率（[v0.33.3 发布说明](https://github.com/ollama/ollama/releases/tag/v0.33.3)）。

---

## 5. 稳定性与回归问题
按严重性排序（综合用户影响 + 评论/互动量）：

1. **[严重] 模型下载时出现 `digest mismatch`**（[Issue #941](https://github.com/ollama/ollama/issues/941)）：长期存在的 `ollama pull` 间歇性失败问题（162 条评论，45 个 👍）；暂无关联修复 PR。
2. **[高] Laguna 解析器错误地将纯 JSON 识别为工具调用**（[Issue #17602](https://github.com/ollama/ollama/issues/17602)）：Laguna 工具调用解析器会将模型回复中的任意 JSON 对象都识别为工具调用，导致正常响应被损坏或中断；影响 `poolside-v1` 及同类模型。暂无关联修复 PR。
3. **[高] deepseek-v4-flash:cloud 工具调用无限循环**（[Issue #17617](https://github.com/ollama/ollama/issues/17617)）：助手历史记录中泄漏的 `</think>` 字面量会触发连续 193 次相同的工具调用（约 3100 万 token），该问题出现在通过 Anthropic 兼容端点与智能体客户端配合使用时。暂无关联修复 PR。
4. **[高] glm-5.3:cloud 推理无限循环 / 任务中止**（[Issue #18193](https://github.com/ollama/ollama/issues/18193)）：云端部署的 glm-5.3 在 OpenCode/ZCode 中会陷入无限推理循环并中止任务，而官方 Z.AI API 运行正常。暂无关联修复 PR。
5. **[高] MLX 运行器忽略 Modelfile 中的 `num_ctx`**（[Issue #18125](https://github.com/ollama/ollama/issues/18125)）：MLX 上的上下文限制强制功能失效，提示词长度可达架构最大值，长预填充会触发 Metal 看门狗 panic。**修复 PR 已合并**：[PR #18261](https://github.com/ollama/ollama/pull/18261)（已关闭，将调度器选定的 `num_ctx` 传递给 MLX 运行器，并上报生效的上下文大小）。
6. **[高] AMD 核显上 Vulkan 后端回归**（[Issue #18272](https://github.com/ollama/ollama/issues/18272)）：v0.32.12 引入的回归问题导致在 AMD 核显上加载 66GB 模型时出现「命令提交内存不足」错误；v0.32.9 版本运行正常。暂无关联修复 PR。
7. **[中] gemma3:12b 结构化输出截断**（[Issue #18094](https://github.com/ollama/ollama/issues/18094)）：当输入包含需要转义的双引号术语时，JSON Schema 结构化输出（`format` 参数）会提前截断。暂无关联修复 PR。
8. **[中] Windows 上 NVIDIA 1080Ti CUDA 崩溃**（[Issue #16957](https://github.com/ollama/ollama/issues/16957)）：在搭载 GTX 1080Ti 的 Windows 11 系统上，CUDA GPU 识别失败并报 `0xc0000005` 错误，导致无法进行 GPU 卸载。暂无关联修复 PR。
9. **[中] macOS GPU 重置导致运行器状态异常**（[Issue #18213](https://github.com/ollama/ollama/issues/18213)）：Apple Silicon 上解码过程中发生 GPU 重置后，运行器仍处于加载状态，但后续所有 `/api/generate` 调用都会返回空的 200 响应，需重启才能恢复。暂无关联修复 PR。
10. **[低] 下载进度回归**（[Issue #8484](https://github.com/ollama/ollama/issues/8484)）：模型下载进度会随机回退（例如从 60% 降到更低值），总大小也会波动；该问题已在近期版本中修复并关闭。

---

## 6. 对应用开发者的影响
- **生态集成范围扩大**：v0.34.0-rc1 的 ChatGPT Desktop 集成为原生 LLM 客户端互操作树立了先例——预计后续版本中会出现其他桌面 AI 工具的类似集成模式。
- **云端模型工具调用在智能体工作负载中可靠性不足**：多起高严重性 bug（`deepseek-v4-flash:cloud` 无限循环、`glm-5.3:cloud` 推理失控、Laguna 解析器误判）意味着，依赖 Ollama 云端模型端点的智能体应用需要具备防御性错误处理、循环检测和 token 使用限制机制，以避免成本失控和故障。
- **主线已修复 MLX 上下文强制问题**：如果你在 Apple Silicon 上运行自定义 `num_ctx` 值的工作负载，请拉取包含 PR #18261 的构建版本，以消除预填充过大导致的 Metal 看门狗 panic。
- **Prometheus 指标即将推出**：正在开发的 `/metrics` 端点 PR（[#16998](https://github.com/ollama/ollama/pull/16998)）将支持对队列深度、模型加载状态和请求数量的标准化监控——基于 Ollama 构建生产级推理服务的团队可以在该 PR 合并后规划将其集成到可观测性栈中（通过 `OLLAMA_METRICS=1` 启用）。
- **上下文长度优先级已明确文档**：对于在多个层级设置上下文的应用，请遵循官方优先级顺序：服务器默认值 → `OLLAMA_CONTEXT_LENGTH` → Modelfile `num_ctx` → API 请求选项（[Issue #18229](https://github.com/ollama/ollama/issues/18229)）。
- **AMD 用户请注意 Vulkan 回归问题**：如果你在 AMD 核显上通过 Vulkan 部署，请固定使用 v0.32.9 版本，直到 v0.32.12+ 的内存分配回归问题得到解决。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 每周摘要 — 2026-09-07

---

## 1. 近七日亮点
LiteLLM 的 Rust 迁移工作持续推进，目标是打造开销低于 1ms 的 AI 网关；同时通过在新版本中标准化 Docker 镜像签名，持续完善安全性与供应链保障。社区活跃贡献推动了流式传输、供应商转换、预算追踪等核心稳定性问题的修复，也带来了灵活路由与套餐限制相关的功能需求。

---

## 2. 版本发布与破坏性变更
过去 7 天内，LiteLLM 发布了多个版本，所有版本均支持通过 cosign 进行 Docker 镜像签名验证，使用的密钥来自提交 [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)：
- **v1.101.0-rc.1**（预发布版）：[发布页面](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-rc.1)
- **v1.100.0**（稳定版）：[发布页面](https://github.com/BerriAI/litellm/releases/tag/v1.100.0)
- **v1.101.0-dev.2 / v1.101.0-dev.1**（开发预览版）：[v1.101.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-dev.2)、[v1.101.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-dev.1)
- **v1.99.1**（仅 Docker 版）：无 PyPI 包，请使用容器镜像或继续使用 v1.99.0。[发布页面](https://github.com/BerriAI/litellm/releases/tag/v1.99.1)
- **v1.99.0**（稳定版）：[发布页面](https://github.com/BerriAI/litellm/releases/tag/v1.99.0)
- **v1.97.1**（仅 Docker 版）：无 PyPI 包，请使用容器镜像或继续使用 v1.97.0。[发布页面](https://github.com/BerriAI/litellm/releases/tag/v1.97.1)

> **对安全敏感的部署需执行操作**：请使用 cosign 结合已公开的公钥验证 Docker 镜像签名，确认镜像的真实性。

---

## 3. 新模型与硬件支持
- **Foundry Local 提供商**：PR [#29449](https://github.com/BerriAI/litellm/pull/29449) 新增 `foundry_local/` 作为一级 OpenAI 兼容提供商，附带 SDK 1.2 使用指南以及代理/仪表盘集成支持。
- **Bedrock Mantle Responses API IAM 认证**：PR [#29711](https://github.com/BerriAI/litellm/pull/29711)（进行中）为 Bedrock Mantle 的 `/openai/v1/responses` 路由添加 SigV4/IAM 认证，支持在仅启用 IAM 的 AWS 部署中使用（如搭载实例角色的 EKS/ECS）。
- **OpenRouter Qwen 缓存控制**：PR [#29335](https://github.com/BerriAI/litellm/pull/29335)（进行中）修复了 OpenRouter Qwen 模型中 `cache_control` 和 `cache_control_injection_points` 参数被剥离的问题。
- **Gemini Google Maps 响应格式**：PR [#29275](https://github.com/BerriAI/litellm/pull/29275)（已搁置）新增对 Gemini Google Maps 响应格式的支持。

---

## 4. 性能与优化
- **Rust 迁移 — 低于 1ms 开销**：Issue [#31263](https://github.com/BerriAI/litellm/issues/31263) 追踪的核心 Rust 重写工作，目标是实现低于 1ms 的网关开销。PR [#40073](https://github.com/BerriAI/litellm/pull/40073) 正在解决生命周期/GC 测试中的 CI 不稳定问题，该 PR 对保留回调测试进行串行化处理，以避免 `gc.collect` 竞态条件。
- **基于马尔可夫的自适应路由（提案）**：Issue [#31555](https://github.com/BerriAI/litellm/issues/31555) 提出了一种可选的马尔可夫决策过程路由策略，用于跨供应商实时进行 token 成本套利。
- **自适应路由冷启动修复**：PR [#29398](https://github.com/BerriAI/litellm/pull/29398)（已合并/关闭）通过将持久化增量合并到冷启动 Beta 先验分布中，修复了代理重启后出现的 HTTP 500 崩溃问题（`gammavariate: alpha and beta must be > 0.0`）。
- **路由回退深拷贝**：PR [#27462](https://github.com/BerriAI/litellm/pull/27462)（已搁置）在每次回退尝试时对 kwargs 进行深拷贝，以避免因参数突变导致的路由错误。

---

## 5. 稳定性与回归问题
按严重程度排序（从高到低）：

1. **MCP 自动执行劫持客户端工具调用**（高）— Issue [#37031](https://github.com/BerriAI/litellm/issues/37031)：当 MCP 工具设置 `require_approval: "never"` 时，代理的自动执行循环会接管 Claude Code 等智能客户端的请求，导致非 MCP 工具报错 "Error executing tool"。目前暂无相关修复 PR。
2. **流式传输中客户端提前断开连接导致用量数据丢失**（高）— Issue [#14457](https://github.com/BerriAI/litellm/issues/14457)：如果客户端在最终用量块发送前断开连接，token 消耗与支出追踪数据会丢失，导致计费和配额统计出现缺口。目前暂无相关修复 PR。
3. **Bedrock 处理器丢弃提供商响应头**（中）— Issue [#38357](https://github.com/BerriAI/litellm/issues/38357)：在 Converse 和流式传输路径中，`x-amzn-RequestId` 等 Bedrock 响应头未出现在 `_hidden_params.additional_headers` 中。目前暂无相关修复 PR。
4. **回退配置在重新部署后未重新加载**（中）— Issue [#15647](https://github.com/BerriAI/litellm/issues/15647)：更新后的回退配置在重新部署后不会生效，除非通过 API 手动更新。目前暂无相关修复 PR。
5. **预算追踪持久化 Bug**（中）：
   - Issue [#25386](https://github.com/BerriAI/litellm/issues/25386)：`max_end_user_budget_id` 未持久化到数据库，因此自动创建的终端用户永远不会触发预算重置。
   - Issue [#27300](https://github.com/BerriAI/litellm/issues/27300)：`max_budget` 在月度重置后失效。
6. **图片编辑接口流式传输错误**（中）— Issue [#26552](https://github.com/BerriAI/litellm/issues/26552)：带遮罩的 `/v1/images/edits` 请求报错 "Attempted to access streaming request content, without having called read()"。更新于 2026-09-07。
7. **ChatGPT 订阅 / GPT-5.4 转换错误**（中）：
   - Issue [#25429](https://github.com/BerriAI/litellm/issues/25429)：`chatgpt/gpt-5.4` 返回空的最终响应；`completion()` 桥接在处理 Responses API 输出时失败。
   - Issue [#27175](https://github.com/BerriAI/litellm/issues/27175)：ChatGPT 订阅的 OAuth 设备流程请求在 `chatgpt.com` 后端失败。
8. **MCP OAuth 流程 URL 继承 Bug**（低-中）— Issue [#20495](https://github.com/BerriAI/litellm/issues/20495)：临时 MCP OAuth 服务器未继承配置的 OAuth URL。

值得关注的待审核修复 PR：
- PR [#40075](https://github.com/BerriAI/litellm/pull/40075)：修复 CCR 流转换错误丢弃 `stream_options` 导致 DeepSeek 请求被拒的问题。
- PR [#40074](https://github.com/BerriAI/litellm/pull/40074)：MAI 图片生成现在会对无效的 `n>1` 参数和不支持的尺寸返回明确错误，而非静默失败。
- PR [#38045](https://github.com/BerriAI/litellm/pull/38045)（已关闭/合并）：修复了在干净检出环境下 `OCRResponse` Pydantic 模型构建失败的问题。

---

## 6. 对应用开发者的影响
- **供应链安全**：升级到 v1.100.0 或更高版本，并为 Docker 部署启用 cosign 签名验证，以降低篡改风险。请注意 v1.99.1 和 v1.97.1 仅提供 Docker 版本 — 请勿尝试通过 `pip install` 安装这些版本。
- **智能体/工具调用注意事项**：如果你在 LiteLLM 后使用 Claude Code 或类似的智能客户端，并启用了 MCP 自动执行（`require_approval: "never"`），请密切关注 Issue [#37031](https://github.com/BerriAI/litellm/issues/37031) — 在修复发布前，非 MCP 客户端工具可能会出现故障。
- **计费准确性**：对于流式传输密集型工作负载，请注意客户端提前断开连接会导致用量追踪数据丢失（Issue [#14457](https://github.com/BerriAI/litellm/issues/14457)）。如果断开连接情况频繁，请针对部分流验证你的计费/配额统计流程。
- **Rust 网关测试版**：目标为超低延迟推理网关的团队可以跟进 Issue [#31263](https://github.com/BerriAI/litellm/issues/31263) 中的 Rust 迁移进展，并注册该 issue 中链接的早期测试用户组。
- **预算/SSO 套餐需求**：如果你需要更多 SSO 席位，请为 Issue [#25762](https://github.com/BerriAI/litellm/issues/25762)（标准套餐无限 SSO）点赞；如果你依赖通过 `max_end_user_budget_id` 自动创建终端用户预算，请关注 Issue [#25386](https://github.com/BerriAI/litellm/issues/25386)。
- **按模型出口代理**：如果你需要针对特定模型的 SOCKS5/出站代理路由，请关注 Issue [#25563](https://github.com/BerriAI/litellm/issues/25563) — 目前仅支持进程级别的代理环境变量。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 每周动态 | 2026-09-07
---

## 1. 过去7天亮点
Unsloth 发布 `v0.1.806-beta` 版本，通过默认启用的 MTP 实现 Qwen3.8-Flash 和 GLM-5.3-Flash 训练速度翻倍，同时带来了170余项跨技术栈优化。当前开发工作的核心聚焦于 Unsloth Studio 的可靠性、GPU 兼容性和推理服务效率——包括多对话工作负载的 KV 缓存抢占机制，以及 Windows 硬件支持修复。社区反馈的问题主要集中在硬件/操作系统兼容性（Intel Arc、核芯显卡）和 Studio 易用性方面。

## 2. 版本发布与破坏性变更
- **v0.1.806-beta**（此前的 v0.1.805-beta 版本说明与此完全一致）：默认启用 MTP 后，Qwen3.8-Flash-Next / GLM-5.3-Flash 训练速度提升2倍（可通过配置关闭）。包含170余项训练、对话、硬件和性能优化，同时优化了模型加载流程，减少了本地服务器和缓存场景下的加载错误。
  - [发布页面](https://github.com/unslothai/unsloth/releases/tag/v0.1.806-beta)
- 版本说明中未记录 API 破坏性变更。

## 3. 新模型与硬件支持
### 开发中 / 已提议
- **Voxtral 多语言多模态模型支持**（功能请求，获14 👍）：社区投票最高的 Unsloth 集成需求。
  - Issue [#3013](https://github.com/unslothai/unsloth/issues/3013)
- **Qwen3-TTS 微调支持**（功能请求，适合新手贡献）：为热门的 Qwen3-TTS 模型添加与 transformers 兼容的微调支持。
  - Issue [#3951](https://github.com/unslothai/unsloth/issues/3951)
- **LFM / Mamba 快速推理支持**（功能请求）：启用 `fast_inference=True` 时，LFM2.5 模型在状态字典提取阶段会崩溃。
  - Issue [#4073](https://github.com/unslothai/unsloth/issues/4073)
- **AMD 核显 Vulkan 后端路由**（PR 审核中）：将 gfx1150/gfx1151 核显路由至 Vulkan 版 llama.cpp 预编译包，而非 ROCm，实测在 Strix Halo（Radeon 8060S）上性能有所提升。
  - PR [#10381](https://github.com/unslothai/unsloth/pull/10381)
- **ARM 架构 Windows 原生 CUDA 支持**（PR 审核中）：实现 Unsloth 在 NVIDIA ARM 架构 Windows 笔记本（GB10 / N1X RTX Spark 芯片）上的正常安装运行。
  - PR [#10282](https://github.com/unslothai/unsloth/pull/10282)
- **全新 macOS 系统 MLX 栈安装修复**（PR 审核中）：修复了全新 Apple Silicon 设备安装时因 MLX 依赖校验跳过导致的训练/导出功能不可用问题。
  - PR [#10403](https://github.com/unslothai/unsloth/pull/10403)

### 已报告的兼容性缺口
- **Intel Arc B580 导入失败**：该 GPU 不支持 `torch.xpu.memory.mem_get_info()` 调用。
  - Issue [#3533](https://github.com/unslothai/unsloth/issues/3533)

## 4. 性能与优化
- **Qwen3.8-Flash / GLM-5.3-Flash MTP 训练速度翻倍**：v0.1.806-beta 版本中默认启用 MTP。
  - [发布页面](https://github.com/unslothai/unsloth/releases/tag/v0.1.806-beta)
- **并行对话 KV 缓存抢占**（PR 审核中）：支持多个对话共享同一块 KV 缓存，避免相互挤占导致显存不足（OOM）；对兼容的 llama-server 构建版本，还支持将缓存槽位换出到主机内存。
  - PR [#10301](https://github.com/unslothai/unsloth/pull/10301)、PR [#10358](https://github.com/unslothai/unsloth/pull/10358)
- **核显提示词缓存保留**（PR 审核中）：在共享内存的核显设备上保持 llama-server 提示词缓存启用（此前该功能仅对独立显卡禁用，在核显上完全是性能损失，曾导致一位用户浪费44小时运行时间）。
  - PR [#10382](https://github.com/unslothai/unsloth/pull/10382)
- **DGX Spark 双节点服务编排器**（PR 审核中）：为配对部署的 DGX Spark 提供异步副本路由，支持动态拓扑选择，可在符合条件的工作负载中同时利用两个节点。
  - PR [#10323](https://github.com/unslothai/unsloth/pull/10323)
- **吞吐量统计修复**（PR 审核中）：修复了 `engine_stats` 统计在生成阶段显示 0 tok/s，以及在 Strix Halo 硬件上出现异常峰值速率的问题。
  - PR [#10384](https://github.com/unslothai/unsloth/pull/10384)

## 5. 稳定性与回归问题
按严重程度/影响范围排序：
1. **Unsloth Studio 服务死锁**（高严重度）：服务运行数分钟后挂起，所有线程阻塞在 `sqlite3.connect()`/`close()`，停止接受连接。目前暂无对应修复 PR。
   - Issue [#9008](https://github.com/unslothai/unsloth/issues/9008)
2. **Qwen3-VL LoRA 适配器在 vLLM 加载失败**（中严重度）：微调后的 Qwen3-VL-8B LoRA 无法在 vLLM 中加载，适合新手贡献修复。
   - Issue [#3560](https://github.com/unslothai/unsloth/issues/3560)
3. **Studio 视觉模型图片附件错误**（中严重度）：支持视觉功能的 GGUF 模型因缺少 mmproj 校验逻辑，错误地拒绝图片上传。
   - Issue [#6305](https://github.com/unslothai/unsloth/issues/6305)
4. **Studio RAG / 文件工具错误**（中严重度）：模型无法列出会话/项目/知识库中的文件；缺少读取/编辑/写入文件的工具能力。
   - Issue [#8854](https://github.com/unslothai/unsloth/issues/8854)
5. **Gemma3 微调 Triton 错误**（中严重度）：在2张本地 GPU 上微调 Gemma3 27B 时出现 `ConstantVariable` 错误。
   - Issue [#3996](https://github.com/unslothai/unsloth/issues/3996)
6. **Qwen3.5 打包梯度不稳定**（中严重度）：启用打包功能的 Qwen3.5 模型在第一步训练时梯度范数变为 NaN；其他 Qwen3 变体不受影响。
   - Issue [#4160](https://github.com/unslothai/unsloth/issues/4160)
7. **16GB 核显模型加载卸载警告**（低严重度）：最新版本阻止了16GB 内存核显设备的模型加载；可通过 `UNSLOTH_ALLOW_HOST_OFFLOAD=1` 临时解决。
   - Issue [#9482](https://github.com/unslothai/unsloth/issues/9482)
8. **Windows 智能应用控制导致模型加载失败**（修复 PR 已提交）：因 `llama-common.dll` 被代码完整性策略拦截，Studio 无法加载模型；对应 PR 添加了 Windows 环境探测和 CI 包签名审计。
   - Issue 上下文见 PR [#10408](https://github.com/unslothai/unsloth/pull/10408)

## 6. 对应用开发者的影响
- 正在微调 Qwen3.8-Flash 或 GLM-5.3-Flash 的团队应立即升级至 v0.1.806-beta 以获得2倍训练提速；MTP 已默认启用，无需修改配置，如需关闭可自行调整。
- 如果你在 Windows 设备上使用核显、AMD 硬件，或在 ARM 架构 Windows 设备上使用 NVIDIA 显卡运行 Unsloth Studio，可关注相关 PR 的进展，后续版本将解决安装失败问题并大幅提升核显性能。
- 基于 Unsloth Studio 开发多用户或多对话应用的开发者，将受益于即将推出的 KV 缓存抢占功能——该功能可消除并行对话导致的 OOM 崩溃，提升缓存利用率；如果你现在就需要该能力，可测试对应 PR 分支。
- 开发智能体/工具调用类应用的开发者请注意，Studio 当前的 RAG 和文件工具存在已知功能缺口（文件列表、读取/写入/编辑功能）；如果你的业务依赖项目文件操作，可规划自定义工具集成，或等待后续修复版本。
- 如果你在非 NVIDIA 硬件（Intel Arc、AMD 核显）上部署，未来2-4周内会持续推出兼容性优化；在此期间可使用对应 Issue 中记录的临时解决方案。

---

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*