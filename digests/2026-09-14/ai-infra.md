# AI 基础设施周报 2026-09-14

> 生成时间: 2026-09-14 00:53 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI推理基础设施跨项目对比报告 | 2026-09-14
---

## 1. 生态概览
过去一周，AI推理生态围绕三大核心方向加速整合：为下一代稀疏注意力模型（DeepSeek-V4系列、Qwen3.8-Flash、GLM-5.3-Flash）提供生产级加固支持；通过KV缓存与量化技术创新提升成本效率；缩小NVIDIA CUDA、AMD ROCm/Vulkan及消费级硬件之间的跨平台功能差距。
服务器级推理引擎vLLM与SGLang推进执行架构重构与分布式服务特性，而边缘/本地运行时llama.cpp和Ollama则聚焦稳定性、跨平台兼容性与工具使用体验。在技术栈上层，网关与微调层持续优化以降低开销、强化安全性并拓展生态集成度；其中稀疏模型兼容性与输出确定性仍是所有项目面临的两大普遍痛点。

---

## 2. 活跃度对比
| 项目 | 公开高危问题数 | 活跃PR数（已追踪） | 过去7天发布状态 |
|---------|---------------------------|----------------------|-------------------------------|
| vLLM | 4个高危 + 6个中危 | 10+个活跃PR（核心引擎、算子、ROCm） | **v0.29.0 稳定版发布**（594次提交，277位贡献者；MRV2默认全量上线） |
| SGLang | 4个高危 + 3个中危 + CI积压任务 | 15+个活跃PR（KV缓存、上下文并行、硬件支持） | 无新版本发布；Q3路线图迭代中 |
| llama.cpp | 1个公开高危问题 + 2个高危问题已修复 | 8+个活跃PR（后端、MoE流式输出、解析器） | 10次增量构建（b10934 → b10948；无破坏性API变更） |
| Ollama | 1个严重问题（许可证合规） + 3个高危问题 | 3个活跃PR（模型支持、代码清理） | 无新版本发布 |
| LiteLLM | 7个高/中危问题（限流 + 兼容性） | 5+个活跃PR（提供商修复、护栏） | 5个预览版/稳定补丁（v1.100.1、v1.101-rc、v1.102-rc；镜像含cosign签名） |
| Unsloth | 3个公开中危问题 | 8+个活跃PR（扩散模型、量化、Studio） | 2个Beta版本（v0.1.807/808-beta；性能优化 + 跨平台修复） |

---

## 3. 模型支持竞速
DeepSeek、Qwen、GLM的稀疏注意力架构成为全生态新模型适配工作的核心，各项目进展不一：
- **vLLM**：在稀疏模型集成的广度上领先，正推进DeepSeek-V4-Flash（Ampere SM8x）、Qwen3.8-Flash-Next、GLM-5.3-Flash及Gemma4的兼容性修复；v0.29.0已将MRV2架构支持扩展至全品类模型，但稀疏模型的关键边界问题仍待解决。
- **SGLang**：在DeepSeek-V4系列支持上弯道超车，DeepSeek V4.1支持已进入评审阶段，且针对DeepSeek-V4负载做了专属ROCm优化；同时在DSA模型上下文并行启用方面处于领先。
- **llama.cpp**：新增了初步的DeepSeek V4.1转换支持（评审中），并推进Kimi-K3混合注意力模型集成，在生产级稀疏模型调优上落后于服务器端引擎。
- **Ollama**：已在其托管Cloud层上线DeepSeek-V4.1-Flash，本地稀疏模型支持受上游依赖缺口限制；当前重点是修复Gemma 4视觉模型的元数据问题。
- **LiteLLM**：通过新增`aiand`提供商路由与OpenRouter Qwen缓存控制转发，扩展了提供商侧模型接入能力，定位为兼容性抽象层，而非原生模型实现的领跑者。
- **Unsloth**：在多模态/生成式模型支持上形成差异化，新增视频模型（Wan2.2、HunyuanVideo）的NVFP4量化、图像模型的BF16快速路径支持，以及Blender MCP与Hermes模型检测功能。

**排行榜**：vLLM与SGLang在稠密/稀疏大语言模型服务支持上并列第一，其中SGLang在DeepSeek模型的AMD ROCm功能对等方面领先；Unsloth在扩散/视频模型的优化支持上具有显著优势。

---

## 4. 性能前沿
优化工作集中在五大高影响领域，不同层级的项目分工明确：
1. **KV缓存效率**：服务引擎投入力度最大的方向。vLLM新增了级联注意力跳过优化、拆分式确定性前缀缓存，以及增量式MoE专家卸载；SGLang将HiCache扩展至所有统一池形态，集成LMCache作为外部后端，并原型验证了支持跨提示复用的语义模糊匹配基数缓存。
2. **分布式服务**：SGLang在该领域领跑，落地了DSA模型的解码上下文并行、MoE的分布式权重数据并行，以及引擎快速恢复（通过CUDA IPC实现亚秒级权重加载）；vLLM则聚焦于稳定MRV2流水线并行与张量并行投机解码。
3. **量化**：Unsloth为视频/图像模型推出了全模型与逐层NVFP4支持；vLLM在RTX 5090上原型验证了nvfp4 KV缓存（32GB显存下支持245K上下文）；SGLang在AMD gfx950上为DeepSeek-V4启用了FP8统一KV缓存。
4. **算子与底层优化**：vLLM推进Triton Tensor Descriptor的落地，并移除了KDA分块算子中的GPU→CPU同步；llama.cpp优化了语法解析器性能（提速1.2–1.3倍），并新增CUDA确定性top_k；Unsloth通过默认启用Vulkan替代ROCm，实现了AMD平台20%的性能提升。
5. **网关开销**：LiteLLM的Rust重构目标是将网关开销控制在1ms以内，填补Python网关与原生服务引擎之间长期存在的性能差距。

---

## 5. 层级定位
六个项目在AI基础设施栈中占据不同且部分重叠的层级：
| 层级 | 对应项目 | 核心价值主张 |
|-------|----------|------------------------|
| **服务器级推理引擎** | vLLM, SGLang | 为生产级大模型部署提供高吞吐、低延迟的服务能力；针对多GPU、分布式与大模型负载优化。vLLM在社区规模与模型覆盖广度上领先；SGLang的差异化优势在于先进KV缓存、计算/存储解耦（PD disaggregation）与AMD平台功能对等。 |
| **本地/边缘运行时** | llama.cpp, Ollama | 为消费级硬件、边缘设备与小型部署场景提供轻量跨平台推理能力。llama.cpp提供底层GGUF运行时与算子可移植性；Ollama将llama.cpp封装为易用的守护进程，自带模型库管理与API端点。 |
| **AI网关** | LiteLLM | 作为抽象与控制平面，支持跨100+大模型提供商的请求路由；新增限流、费用追踪、护栏功能，以及统一API兼容性，适配闭源与开源后端。 |
| **微调与开发套件** | Unsloth | 提供内存高效的微调方案（QLoRA、GaLore）与本地推理Studio工具；通过优化的模型导出与端到端开发者工作流打通训练与推理环节，且正逐步聚焦扩散/视频模型领域。 |

---

## 6. 趋势信号
### 行业趋势
1. **稀疏注意力成为新的兼容性攻坚方向**：DeepSeek-V4、Qwen-Flash与GLM-Flash模型贡献了所有服务引擎30–40%的活跃问题与PR量，其中算子兼容性、确定性解码与KV缓存设计仍是生产部署中尚未解决的痛点。
2. **AMD正缩小推理场景下的CUDA差距**：两年前AMD支持还只是附加功能；本周SGLang（ROCm MegaMoEv2、FP8 KV）与Unsloth（默认Vulkan、20%提速）都推出了显著的AMD性能优化，DeepSeek-V4负载是推动功能对等的核心动力。
3. **KV缓存创新已超越简单前缀缓存阶段**：语义模糊匹配、进程外缓存数据面、跨引擎缓存标准（LMCache）等方向表明，KV缓存优化正从引擎内部优化，转向跨工作负载、跨部署的KV复用，成为核心成本控制手段。
4. **供应链与合规问题正上升至技术栈顶层**：LiteLLM的cosign签名Docker镜像与Ollama的高危许可证合规缺口表明，随着开源推理成为生产关键环节，法律与安全态势已不再是次要问题。

### 开发者可落地信号
- 若在Ampere硬件上部署稀疏注意力模型（DeepSeek-V4、Qwen3.8-Flash），未来2–4周内所有引擎都可能存在稳定性与正确性问题；生产上线前请验证`indexer_budget`阈值附近的输出确定性。
- 对于对成本敏感的自托管团队，可重点关注三项即将带来30–70%效率提升的特性：nvfp4 KV缓存（vLLM/Unsloth）、增量式MoE专家卸载（vLLM）、语义KV缓存匹配（SGLang）。
- 智能体/工具调用开发者应避免在SGLang上使用Qwen3.8-Flash-Next、在Ollama上使用Qwen 3.x的工具解析功能，二者存在已知的死循环与静默失败bug；修复上线前，可将工具定义嵌入系统提示词作为临时方案。
- 对于有严格可复现性要求的团队，vLLM的`--deterministic-prefix-caching`参数与正在推进的批量不变性工作可解决长期存在的非确定性问题；而Unsloth偶发的多轮对话确定性故障，仍是temperature=0工作流的潜在风险。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 每周摘要 | 2026-09-14
---
## 1. 过去7天亮点
vLLM 项目在 v0.29.0 版本中完成了 Model Runner V2 (MRV2) 的全面推送，将其作为所有模型的默认执行路径，在架构迁移的同时还提供了用于 KV 缓存自动调整的 CUDA 图内存分析功能。社区关注点仍高度集中在稀疏注意力模型兼容性（DeepSeek-V4-Flash、Qwen3.8-Flash-Next、GLM-5.3-Flash）以及 KV 缓存效率上，其中关于 Ampere GPU 对最新稀疏模型的支持、非确定性解码行为的讨论热度最高。本周的活跃开发工作围绕稳定 MRV2 边缘场景（投机解码、流水线并行、混合注意力+Mamba 模型）展开，同时也在扩展针对 ROCm 和下一代 NVIDIA GPU 架构的性能优化。

---
## 2. 版本发布与破坏性变更
### v0.29.0（新版本）
- **核心亮点**：277 位贡献者提交了 594 个提交（其中 91 位为新贡献者）
- **核心变更**：[Model Runner V2 现已成为所有模型的默认执行路径](https://github.com/vllm-project/vllm/pull/53183)，完成了从池化模型启动的推送工作（[#48290](https://github.com/vllm-project/vllm/pull/48290)）
- **新能力**：与 MRV2 集成的 CUDA 图内存分析功能，可用于 KV 缓存自动调整
- 迁移说明：依赖自定义 MRV1 集成或未测试模型架构的团队，应在升级前验证运行行为；MRV1 仍作为边缘场景的备选方案可用。

---
## 3. 新模型与硬件支持
### 进行中 / 需求征集
- **DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731 Ampere (SM8x) 支持**：社区最高需求（108 条评论，16 个 👍）—— 由于缺少内核兼容性，这两个检查点目前在 A100/A800/RTX 30xx GPU 上运行失败。([#50576](https://github.com/vllm-project/vllm/issues/50576))
- **SM120 (RTX 5090) 上的 nvfp4 KV 缓存**：工作原型通过 FlashInfer nvfp4 内核，在 32GB 显存的 RTX 5090 上实现了 245K 上下文长度，但该内核尚未接入 vLLM 的 KV 缓存路径。([#49011](https://github.com/vllm-project/vllm/issues/49011))
- **Turing GPU (SM7.5) 上的 Gemma4**：所有注意力后端都遇到共享内存限制，导致无法在 RTX 20xx/GTX 16xx 硬件上部署。([#38918](https://github.com/vllm-project/vllm/issues/38918))
- **GLM-5.3-Flash**：v0.29.0 版本存在检查点加载错误（TP2/EP2 配置），且 B200 GPU 上缺少对 `Glm5NextTextLinearAttention` 架构的支持。([#56007](https://github.com/vllm-project/vllm/issues/56007) · [#54062](https://github.com/vllm-project/vllm/issues/54062))
- **Qwen3.5 GGUF 本地路径**：即使提供了 `--hf-config-path`，仍会报错 "architecture qwen35 is not supported yet"。([#36456](https://github.com/vllm-project/vllm/issues/36456))

### 活跃 PR
- 面向 ROCm 的 MLA 注意力 LoRA 支持（稠密 + GLM 稀疏 MLA 路由）。([#56718](https://github.com/vllm-project/vllm/pull/56718))
- Qwen4Exp PLE UVA 查找内核修复，以在 Ampere GPU 上启用 FP8 表支持。([#56362](https://github.com/vllm-project/vllm/pull/56362))
- 对齐 Intel XPU 测试要求，使其匹配 CUDA 测试套件的覆盖范围。([#56704](https://github.com/vllm-project/vllm/pull/56704))

---
## 4. 性能与优化
### KV 缓存与调度器
- **级联注意力跳过优化**：当级联注意力禁用时，跳过调度器中的公共前缀块扫描，在 64k 上下文的单请求工作负载下，每步可减少约 4000 次 Python 迭代。([#55652](https://github.com/vllm-project/vllm/pull/55652))
- **拆分前缀缓存（调度器层面）**：可选的 `--deterministic-prefix-caching` 参数会强制缓存未命中的预填充在最后一个块边界处拆分，消除缓存命中和缓存未命中路径之间 bf16 GEMM 分块的差异，实现延迟一致性。([#34046](https://github.com/vllm-project/vllm/pull/34046))
- **增量式 MoE 专家卸载**：结合 LFRU 淘汰 + 跨层预测，搭配 CPU 页锁定内存和 GPU 专家缓存，使超大规模 MoE 模型能在更小的硬件上运行；首个 PR 已开放评审。([#38256](https://github.com/vllm-project/vllm/issues/38256))
- **MTP 投机解码的混合 GDN 前缀缓存修复**：恢复了 Qwen3.5-122B-A10B 搭配 MTP 时的完整前缀缓存命中率，此前该模型在提示长度与 GDN 页大小对齐时命中率为零。([#52244](https://github.com/vllm-project/vllm/pull/52244))

### 投机解码
- **适用于所有投机器类型的自适应验证**：将自适应验证从 DSpark（带置信度头）扩展到所有草稿模型投机器（MTP、EAGLE3、DFlash 1&2、无置信度头的 DSpark），以提升吞吐量。([#52228](https://github.com/vllm-project/vllm/pull/52228))
- **张量并行 Ngram-CPU 解码**：重启了感知 TP 的 n-gram 投机解码，消除了跨 rank 的冗余查找，降低分布式部署的 CPU 开销。([#56732](https://github.com/vllm-project/vllm/pull/56732))

### ROCm 优化
- **MiniMax-M3 解码 top-k 调优**：针对 gfx950 短上下文、topk=16 的解码场景，优化了 CTA 启动策略。([#55235](https://github.com/vllm-project/vllm/pull/55235))
- **DeepSeek-V4.1-Flash DSA 解码掩码步长**：通过将候选掩码网格的大小调整为当前上下文长度而非 `max_model_len`，降低了 logits 工作区开销。([#56628](https://github.com/vllm-project/vllm/pull/56628))

### 内核与底层优化
- **移除 KDA 块内核的 GPU→CPU 同步**：通过使用主机端的 cu_seqlens 计算网格大小，避免了 Kimi K3 模型每步预填充的同步操作。([#51540](https://github.com/vllm-project/vllm/pull/51540))
- **Triton 张量描述符 (TD) 采用策略**：提出 RFC，将 Triton 内核从原始指针运算迁移到上游推荐的 `tl.make_tensor_descriptor` API，以提升可维护性和性能。([#42545](https://github.com/vllm-project/vllm/issues/42545))

---
## 5. 稳定性与回归问题
### 严重级别：高
1. **MRV2 投机解码（DP 模式）中的 KV 缓存损坏**：空闲的 DP rank 虚拟草稿解码步骤通过过期的块表行写入 KV，导致数据损坏。修复 PR 已开放。([#56734](https://github.com/vllm-project/vllm/pull/56734))
2. **vLLM 引擎启动时挂起**：长期存在的问题（43 条评论，10 个 👍），引擎进程启动时挂起，在多个环境中均有报告；目前尚未合入根因修复。([#17676](https://github.com/vllm-project/vllm/issues/17676))
3. **Qwen3.8-Flash-Next 非确定性贪心解码（sm121/GB10）**：当提示长度接近 `indexer_budget` 时，temperature=0 的请求会返回不同输出，原因是预填充稀疏注意力中的 `persistent_topk` 行为。([#54521](https://github.com/vllm-project/vllm/issues/54521))
4. **MRV1 流水线并行 + 结构化输出 FSM 不同步**：由于异步调度不同步，会间歇性出现 500 错误，提示 "Failed to advance FSM"。修复 PR 已开放。([#45015](https://github.com/vllm-project/vllm/pull/45015))

### 严重级别：中
- **DFlash2 + YaRN 前缀缓存零复用**：使用 DFlash2 时，完全相同的 1.04M 提示前缀缓存命中率为零，而仅目标端可复用约 1.039M 个 token。([#54094](https://github.com/vllm-project/vllm/issues/54094))
- **Mamba-2 Triton 内核在 SM121 (DGX Spark) 上出现非法指令**：在异步模式下会崩溃，需要设置 `CUDA_LAUNCH_BLOCKING=1` 作为临时解决方案。([#37431](https://github.com/vllm-project/vllm/issues/37431))
- **混合模型上 MTP 草稿 KV 缓存组不对齐**：Qwen3.5/Qwen3-Next MTP 草稿生成器在混合注意力+Mamba 路径上会触发 "flag-all draft groups" 回退。修复 PR 已开放。([#55390](https://github.com/vllm-project/vllm/pull/55390))
- **流水线并行中空 KV 缓存组导致崩溃**：PP 工作节点在处理空的投影 KV 缓存组时会失败。修复 PR 已开放。([#54793](https://github.com/vllm-project/vllm/pull/54793))
- **权重重拟合后 HPC QK-norm 权重过期**：`HpcRopeNorm` 的 float32 镜像权重在权重重拟合后不会更新，导致正确性下降。修复 PR 已开放。([#56706](https://github.com/vllm-project/vllm/pull/56706))
- **KV 卸载 + HMA 在后续聊天请求中失败**：启用 KV 卸载和异构内存访问时，第二个请求会失败。([#41515](https://github.com/vllm-project/vllm/issues/41515))

---
## 6. 对应用开发者的影响
1. **规划 MRV2 迁移**：随着 v0.29.0 将 MRV2 设为默认，如果你使用自定义模型、投机解码或流水线并行，请立即测试你的部署 —— 边缘场景修复（PP FSM 不同步、混合 Mamba 状态对齐、投机解码 KV 损坏）正在快速推进，但可能尚未全部包含在发布版本中。
2. **稀疏注意力模型部署存在活跃的兼容性缺口**：如果你在 Ampere (A100/A800) 上运行 DeepSeek-V4-Flash，或在任何硬件上运行 GLM-5.3-Flash，预计会遇到稳定性问题，请关注关联 issue 了解修复进展；在生产部署前，请验证 Qwen 稀疏模型在 `indexer_budget` 阈值附近的输出正确性。
3. **成本敏感型工作负载有了新的效率选项**：增量式 MoE 专家卸载使更大的 MoE 模型能在更小的 GPU 集群上运行；而 nvfp4 KV 缓存支持（合入后）将在 Blackwell 消费级 GPU 上带来约 70% 的上下文长度提升 —— 这两项对自托管推理团队都有很高的价值。
4. **确定性改进正在推进中**：批量不变性功能轨道和拆分前缀缓存参数，解决了长期存在的非确定性问题，这些问题会影响依赖一致输出的智能体工作流；有严格可复现性要求的团队应关注批量不变性 issue，并测试 `--deterministic-prefix-caching` 参数。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 每周速递 | 2026-09-14
来源：[github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)

---

## 1. 近7天重点进展
本周 SGLang 推进了2026年第三季度路线图中的核心优先级工作：DSA 模型的解码上下文并行、生产级 HiCache 功能扩展，以及 DeepSeek-V4 负载下 AMD ROCm 的性能对齐。CI 稳定性仍是重点关注方向，主分支目前跟踪到6个失败测试和11个不稳定测试；过去7天未发布新版本。此外，KV 缓存生态集成（LMCache、语义模糊匹配）和可观测性工具相关工作也在推进中。

---

## 2. 版本发布与破坏性变更
过去7天未发布新版本，未跟踪到正式的破坏性变更公告。

---

## 3. 新增模型与硬件支持
| 类别 | 详情 | 链接 |
|----------|---------|------|
| 模型 | 新增 DeepSeek V4.1 支持（评审中） | [PR #38798](https://github.com/sgl-project/sglang/pull/38798) |
| 模型 | SenseNova-U1 / U1.5 功能与性能跟踪进行中 | [Issue #37742](https://github.com/sgl-project/sglang/issues/37742) |
| 模型 | 新增扩散模型启用跟踪器（Omni-Dreams 在线支持待落地） | [Issue #27214](https://github.com/sgl-project/sglang/issues/27214) |
| 硬件（AMD） | ROCm 平台 DeepSeek-V4 的 Aiter MegaMoEv2 后端集成（评审中） | [PR #35619](https://github.com/sgl-project/sglang/pull/35619) |
| 硬件（AMD） | 消费级 Radeon RDNA3/RDNA4（gfx1100/gfx1201）官方启用方案制定中 | [Issue #30599](https://github.com/sgl-project/sglang/issues/30599) |
| 硬件（NVIDIA） | SM100/SM103（B200/B300）平台 Llama 3.1 70B 的 TP8 FlashInfer 真序列并行（可选启用，评审中） | [PR #36766](https://github.com/sgl-project/sglang/pull/36766) |
| 硬件（NPU） | NPU 上 DSA 模型的解码上下文并行支持（评审中） | [PR #37787](https://github.com/sgl-project/sglang/pull/37787) |
| 量化 | AMD gfx950 上 DeepSeek-V4 启用 FP8 双池统一 KV 缓存（评审中） | [PR #37413](https://github.com/sgl-project/sglang/pull/37413) |
| 前端 | Rust 前端新增外部多模态处理器支持，可实现模型包扩展 | [PR #39329](https://github.com/sgl-project/sglang/pull/39329) |

---

## 4. 性能与优化
| 领域 | 详情与基准测试数据 | 链接 |
|------|------------------------------|------|
| 引擎恢复 | 快速引擎恢复第一阶段已落地：通过 CUDA IPC 实现的逐秩权重缓存守护进程，将 Qwen3-235B FP8 权重加载时间从约306–327秒缩短至1秒以内 | [Issue #33522](https://github.com/sgl-project/sglang/issues/33522) |
| KV 缓存 | UnifiedRadixCache 新增 LMCache 集成作为外部后端（支持持久化可复用 KV 块，评审中） | [PR #38652](https://github.com/sgl-project/sglang/pull/38652) |
| KV 缓存 | HiCache 已扩展支持所有统一池形态（MHA+Mamba、MLA+Mamba、SWA、全量/SWA/Mamba 池，评审中） | [PR #37507](https://github.com/sgl-project/sglang/pull/37507) |
| KV 缓存 | 提出基于设备内存 IPC 的进程外 HiCache 数据面方案（RFC 评审中） | [Issue #37372](https://github.com/sgl-project/sglang/issues/37372) |
| KV 缓存 | 语义模糊匹配基数缓存，实现跨提示词 KV 复用（适用于改写 RAG、多用户负载，评审中） | [PR #31057](https://github.com/sgl-project/sglang/pull/31057) |
| 上下文并行 | Hopper 平台上 DSA 注意力系列（GLM-5.3 / DeepSeek-V3.2）的解码上下文并行（DCP）已启用（评审中） | [PR #39330](https://github.com/sgl-project/sglang/pull/39330) |
| 上下文并行 | Q3 上下文并行路线图推进中：目前支持 DSA、MHA/GQA 模型的预填充上下文并行，解码上下文并行仍在积极开发 | [Issue #21788](https://github.com/sgl-project/sglang/issues/21788) |
| AMD 性能 | 修复 gfx95 分块预填充预算填充问题，消除 Aiter MLA 计算资源利用率不足的问题（评审中） | [PR #32888](https://github.com/sgl-project/sglang/pull/32888) |
| 推测解码 | Ngram 推测解码路线图推进中：基于前缀树的草稿 token 树生成功能开发中 | [Issue #21052](https://github.com/sgl-project/sglang/issues/21052) |
| 推测解码 | ROCm 平台新增 EAGLE 温度采样支持，修复 DeepSeek-V4 基准测试精度差距问题（评审中） | [PR #39253](https://github.com/sgl-project/sglang/pull/39253) |
| MoE 并行 | 提出稀疏 MoE 模型的分布式权重数据并行（DWDP）方案（采用异步点对点通信替代集合通信，评审中） | [Issue #22084](https://github.com/sgl-project/sglang/issues/22084) |
| LoRA | LoRA 后端新增 DP 注意力支持（评审中） | [PR #36389](https://github.com/sgl-project/sglang/pull/36389) |
| 延迟 | 修复非流式 TTFT 计算问题：首 token 时间不再因强制流式间隔被延迟（评审中） | [PR #39270](https://github.com/sgl-project/sglang/pull/39270) |
| 可观测性 | 新增 `kv_cache_usage_perc` Prometheus 指标（与 vLLM 指标预期对齐，评审中） | [PR #34714](https://github.com/sgl-project/sglang/pull/34714) |

---

## 5. 稳定性与回归问题
按严重程度排序（综合影响范围与评论活跃度）：

1. **严重：Qwen3.8-Flash-Next 工具解析器死循环**
   - 搭载 qwen3_coder 工具解析器的 Qwen3.8-Flash-Next 会在 token ID 0 处无限循环，影响智能体负载
   - 状态：未解决，暂无关联修复 PR
   - [Issue #36537](https://github.com/sgl-project/sglang/issues/36537)

2. **高优先级：H20 上 DeepSeek-V4 245K 上下文解码挂起**
   - 8×H20 上 TP=8 的 DeepSeek-V4（dsv4 后端 + DSPARK）在上下文长度约245K时无限挂起，GPU 利用率100%但功耗低，最终被看门狗终止服务
   - 状态：未解决，暂无关联修复 PR
   - [Issue #33549](https://github.com/sgl-project/sglang/issues/33549)

3. **高优先级：GLM-5.2 FP4 + EAGLE 非法内存访问**
   - 搭载 EAGLE 推测解码的 `nvidia/GLM-5.2-NVFP4` 在 B200/B300 上的 flashinfer_trtllm 批处理 GEMM 中触发 CUDA 非法内存访问崩溃
   - 状态：未解决，暂无关联修复 PR
   - [Issue #30209](https://github.com/sgl-project/sglang/issues/30209)

4. **高优先级：生成健康检查导致 DP 长预填充吞吐量骤降**
   - 健康检查请求会干扰 DP 用户路由状态，导致长预填充负载的吞吐量下降
   - 状态：未解决，暂无关联修复 PR
   - [Issue #35241](https://github.com/sgl-project/sglang/issues/35241)

5. **高优先级：sgl-router PD 熔断器永久误判预填充实例失效**
   - 熔断器断开后仍会向解码实例分发请求，导致客户端超时激增后预填充端点被永久标记为失效
   - 状态：未解决，暂无关联修复 PR
   - [Issue #31206](https://github.com/sgl-project/sglang/issues/31206)

6. **中优先级：Kimi-K3 上 PP8 解耦预填充 TTFT 最低约30秒**
   - 采用 PP8 预填充、PD 解耦架构的 Kimi-K3 存在与负载无关的30秒首 token 延迟下限
   - 状态：未解决，暂无关联修复 PR
   - [Issue #34815](https://github.com/sgl-project/sglang/issues/34815)

7. **中优先级：统一缓存默认配置切换导致长前缀解码吞吐量回归**
   - PR #34653 中的统一缓存默认配置导致 Spark 和 Thor 平台长前缀负载的吞吐量下降
   - 状态：已关闭（已解决）
   - [Issue #36131](https://github.com/sgl-project/sglang/issues/36131)

8. **中优先级：分割后 Mamba 基数缓存前缀命中率下降**
   - 新预填充请求触发缓存分割后，`MambaRadixCache` 会将有效前缀匹配变为0命中
   - 状态：未解决，暂无关联修复 PR
   - [Issue #22935](https://github.com/sgl-project/sglang/issues/22935)

9. **CI 稳定性**
    - 主分支状态：截至2026-09-13，6个失败测试，11个不稳定测试，近期已修复990个测试
    - [Issue #17050](https://github.com/sgl-project/sglang/issues/17050)
    - 更新 CI 测试时间估算以优化并行作业负载均衡：[PR #39331](https://github.com/sgl-project/sglang/pull/39331)

10. **低优先级：Prometheus `avg_request_queue_latency` 未被采集**
    - 请求队列延迟指标长期缺失
    - 状态：未解决，适合新手贡献
    - [Issue #6357](https://github.com/sgl-project/sglang/issues/6357)

---

## 6. 对应用开发者的影响
- **智能体负载**：由于存在 token 死循环 bug，目前请勿在 SGLang 上搭配工具调用使用 Qwen3.8-Flash-Next；可关注 [Issue #36537](https://github.com/sgl-project/sglang/issues/36537) 获取修复进展。分布式 KV 缓存系统路线图（[Issue #21846](https://github.com/sgl-project/sglang/issues/21846)）旨在解决导致智能体成本上升的 KV 存储瓶颈。
- **大模型部署**：权重缓存守护进程（[Issue #33522](https://github.com/sgl-project/sglang/issues/33522)）将大模型重启时间从分钟级缩短至亚秒级，让超100B 参数模型的动态扩缩容和故障恢复更具可行性。
- **AMD GPU 用户**：随着 MegaMoEv2 集成（[PR #35619](https://github.com/sgl-project/sglang/pull/35619)）和 FP8 统一 KV 支持（[PR #37413](https://github.com/sgl-project/sglang/pull/37413)）落地，DeepSeek-V4 的 ROCm 支持正逐步成熟，与 CUDA 部署的功能和性能差距正在缩小。
- **可观测性**：即将推出的 `kv_cache_usage_perc` Prometheus 指标（[PR #34714](https://github.com/sgl-project/sglang/pull/34714)）将使 SGLang 监控与 vLLM 对齐，简化迁移流程和多引擎仪表盘搭建。
- **PD 解耦部署**：两个高优先级路由/调度 bug（[#31206](https://github.com/sgl-project/sglang/issues/31206)、[#35241](https://github.com/sgl-project/sglang/issues/35241)）会影响大规模 PD 部署；生产上线前请仔细测试健康检查和熔断器行为。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 每周资讯 — 2026-09-14

---

## 1. 过去7天亮点
本周 llama.cpp 的开发重点集中在多后端稳定性修复、核心推理效率提升，以及扩展模型架构覆盖范围上。重要里程碑包括：针对 NVIDIA Vulkan 队列提交驱动缺陷的临时解决方案、内置语法解析器 1.2x–1.3x 的速度提升，以及对 DeepSeek V4.1 的初始转换支持。此外，SYCL 图重放、MoE 专家权重磁盘流式加载、服务端 Responses API 增强等工作也在推进中。

---

## 2. 版本发布与破坏性变更
过去7天共发布10个增量构建版本（b10934 → b10948），未收到 `libllama` 存在 API 破坏性变更的反馈。
- 已合并的核心版本变更：
  - 在 `common/` 中新增 `LOG_JSON` 宏，支持结构化 JSON 日志输出（[#28586](https://github.com/ggml-org/llama.cpp/pull/28586), b10935）
  - 新增 JSON Schema 的内部 `common_schema` 表示形式，重构了 json-schema 转语法规则的流水线（[#28736](https://github.com/ggml-org/llama.cpp/pull/28736), b10934）
- 完整的版本证明文件及 macOS/iOS 构建包可在 [llama.cpp/releases](https://github.com/ggml-org/llama.cpp/releases) 获取。

---

## 3. 新增模型与硬件支持
### 模型
- **Kimi-K3 文本模型**（审核中）：采用 KDA+MLA 混合注意力机制，支持跨层残差注意力、 latent MoE 和 situ 激活函数（[#26185](https://github.com/ggml-org/llama.cpp/pull/26185)）
- **DeepSeek V4.1**（`deepseek41` 架构，审核中）：新增对 `DeepseekV41ForCausalLM` 的转换支持，复用大部分 V4 代码路径，仅调整了文本配置的嵌套结构（[#28696](https://github.com/ggml-org/llama.cpp/pull/28696)）
- **fraunhofer-iis/elmod-2.7b-it** 预分词器（审核中）：新增 `escape_after_split` 词表标志位，以匹配 Metaspace 预分词器的行为（[#28845](https://github.com/ggml-org/llama.cpp/pull/28845)）
- 优化 Qwen3-coder 对话解析器，提升复杂类型和 Schema 支持能力（[#28742](https://github.com/ggml-org/llama.cpp/pull/28742), b10936）

### 硬件 / 后端
- **s390x VXE 防护**：仅用于 VXE 的重打包辅助函数现在已正确添加防护逻辑，避免在非 VXE 构建中触发问题（[#28775](https://github.com/ggml-org/llama.cpp/pull/28775), b10946）；额外的非 VXE CI 测试覆盖正在推进中（[#28776](https://github.com/ggml-org/llama.cpp/pull/28776)）
- **SYCL 内存错误修复**：解决了 ZES API 不支持的问题，调整了 Level Zero SDK 的构建检测逻辑，并更新了 SYCL 相关文档（[#28227](https://github.com/ggml-org/llama.cpp/pull/28227), b10944）
- **SYCL 图录制/重放**（审核中）：将 CUDA 图功能移植到 SYCL，在录制前进行数据重排以避免挂起问题（[#28725](https://github.com/ggml-org/llama.cpp/pull/28725)）
- **CUDA BF16 回退机制**（已合并）：RDNA3 之前 / CDNA 之前的 AMD 老款 GPU 现在会回退到 F32 GEMM 计算，而非使用未经调优的 BF16 存根内核（[#28846](https://github.com/ggml-org/llama.cpp/pull/28846)）
- **XDNA 后端功能需求**：社区对 AMD XDNA 加速器支持的关注度持续上升（32 👍）（[#21725](https://github.com/ggml-org/llama.cpp/issues/21725)）
- **ANE 后端路线图**：通过新 CoreML API 支持 Apple Neural Engine 的追踪议题仍在推进（44 👍）（[#10453](https://github.com/ggml-org/llama.cpp/issues/10453)）

---

## 4. 性能与优化
- **语法解析器提速 1.2x–1.3x**：通过单次查找优化和移除自研语法引擎中的额外拷贝操作实现（[#26885](https://github.com/ggml-org/llama.cpp/pull/26885)）
- **CPU 线程共享缓冲区优化**（审核中）：在 `ggml_compute_forward_mul_mat_id` 中为每个线程分配独立缓冲区，消除伪共享和屏障开销（[#28861](https://github.com/ggml-org/llama.cpp/pull/28861)）
- **后端调度器复用**（审核中）：在重新预留资源时保留 `ggml_backend_sched`，而非每次请求都重建，消除 `llama-server` 采样器挂载/卸载流程中重复的内存分配/释放开销（[#28872](https://github.com/ggml-org/llama.cpp/pull/28872)）
- **CUDA 确定性 top_k 实现**（审核中）：在 `cub::DeviceTopK` 不可用（CCCL <3.2 / CUDA 12.4）时回退到基数选择算法，避免稀疏注意力模型的全量行排序开销（[#28871](https://github.com/ggml-org/llama.cpp/pull/28871)）
- **MoE 专家权重磁盘流式加载**（审核中）：通过设备端槽位缓存实现路由 MoE 专家权重的 SSD 流式加载，支持运行超出内存容量的模型（[#25294](https://github.com/ggml-org/llama.cpp/pull/25294)）
- **OpenCL 行对齐扩展**：noshuffle 行对齐规则从 q6_K 扩展到 q4_K、q5_K 和 q8_0（[#28575](https://github.com/ggml-org/llama.cpp/pull/28575), b10937）
- **Flash-attention 测试集缩减**：缩小 FA 测试集规模以加快 CI 速度（[#28842](https://github.com/ggml-org/llama.cpp/pull/28842), b10941）

---

## 5. 稳定性与回归问题
### 高优先级
1. **NVIDIA Vulkan 队列提交驱动缺陷** — 已修复：在 `vkQueueSubmit` 周围添加互斥锁，作为同一设备上并发队列提交导致同步损坏的临时解决方案（[#28830](https://github.com/ggml-org/llama.cpp/pull/28830), b10938）
2. **Nemotron-H 专家 FFN 大小除零崩溃** — 已修复：当某层未设置 `expert_feed_forward_length` 时，为 `n_ff/n_expert_used` 回退逻辑添加防护（[#28779](https://github.com/ggml-org/llama.cpp/pull/28779), b10947）
3. **Qwen3.5 9B 开启思考模式时工具调用解析失败** — 待解决：模型在 `<think>` 块内输出 XML 格式的工具调用并停止生成（60 条评论，17 👍）（[#20837](https://github.com/ggml-org/llama.cpp/issues/20837)）

### 中优先级
4. **视觉模型 KV 缓存保存失败** — 待解决：`/slots/{id}?action=save` API 对支持视觉的模型无效（38 条评论）（[#19466](https://github.com/ggml-org/llama.cpp/issues/19466)）
5. **量化目标上投机解码结果不一致** — 待解决：draft-MTP/draft-dspark 的贪心输出在量化（如 Q4_K_M）目标上与普通推理结果不符，但在 BF16 下一致（[#25618](https://github.com/ggml-org/llama.cpp/issues/25618)）
6. **SYCL xe2 段错误** — 已关闭：`GGML_SYCL_DEVICE_ARCH=xe2` 导致的段错误问题已通过近期修复解决（[#25808](https://github.com/ggml-org/llama.cpp/issues/25808)）
7. **WebGPU HY_V4 测试失败** — 已修复：将 HY_V4 从 WebGPU `test-llama-archs` CI 中排除（[#28855](https://github.com/ggml-org/llama.cpp/pull/28855), b10948）

### 低优先级
8. **SYCL 连续批处理 GPU 待机功耗问题** — 待解决：`-cb` 标志会使 Intel Battlemage GPU 永久固定在 `gt-c0` 状态，无法进入待机节能状态（[#24946](https://github.com/ggml-org/llama.cpp/issues/24946)）
9. **仅含查询参数的 URL 解析缺陷** — 修复审核中：`common_http_parse_url()` 现在按照 RFC 3986 规范将 `?` 视为 authority 部分的终止符（[#28866](https://github.com/ggml-org/llama.cpp/pull/28866)）
10. **MiMo v2 SWA 模式加载错误** — 修复审核中：修正了 SWA 模式加载时对 `get_key_or_arr` 的误用（[#28865](https://github.com/ggml-org/llama.cpp/pull/28865)）

---

## 6. 对应用开发者的影响
- **在 NVIDIA 上使用 Vulkan 的生产部署** 应至少升级到 b10938，以避免并发队列提交导致的偶发同步崩溃问题。
- **结构化日志用户** 现在可以使用 `common/` 中新的 `LOG_JSON` 宏输出机器可读日志，简化与可观测性流水线的集成。
- 随着 #26885 即将合并，**语法约束生成** 的内置解析器延迟将降低 20–30%；已使用 llguidance 的应用不受影响。
- **面向 Qwen3-coder 的智能体/工具调用应用** 在 b10936 中获得了更完善的复杂类型和 Schema 解析能力，后续还有 PR（[#28869](https://github.com/ggml-org/llama.cpp/pull/28869)）正在推进，用于修复推理预算耗尽时的提示缓存复用问题。
- **服务运维人员** 应关注后端调度器复用 PR（[#28872](https://github.com/ggml-org/llama.cpp/pull/28872)）—— 预计该功能将显著降低高吞吐量服务负载下的单请求开销。
- **Responses API（`/v1/responses`）实现** 即将支持在函数调用输出中包含 `input_image` 内容，支持视觉工具工作流（[#28847](https://github.com/ggml-org/llama.cpp/pull/28847)）。
- **内存有限的 MoE 部署场景** 将受益于正在开发的 MoE 磁盘流式加载功能（[#25294](https://github.com/ggml-org/llama.cpp/pull/25294)），该功能支持运行超出系统内存容量的模型。

---
*来源：[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 每周摘要 | 2026-09-14
来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)

---

## 1. 过去7天亮点
本周未发布新版本，但项目正针对关键平台缺口（Windows 图像生成、Gemma 4 视觉正确性、Windows 卸载清理）开展积极开发，同时 Qwen/Gemma 系列模型的工具调用解析可靠性问题带来的摩擦日益凸显。高优先级许可合规问题（#3185）仍处于开放活跃状态，累计收到 58 条评论和 275 个 👍，社区呼吁在发布二进制文件中为 llama.cpp 等静态链接依赖项提供规范的 MIT 许可声明。

---

## 2. 版本发布与破坏性变更
无。过去7天未发布任何新版本。

---

## 3. 新模型与硬件支持
### 进行中的需求
- **SARVAM-30b / 105b 模型需求**：社区请求将 SARVAM 大模型加入 Ollama 模型库，共 25 条评论。[Issue #14319](https://github.com/ollama/ollama/issues/14319)
- **Gnani Evon-v3.3 30B-A3B 模型需求**：新增 Gnani 30B MoE 模型的接入请求。[Issue #18427](https://github.com/ollama/ollama/issues/18427)
- **DeepSeek-V4.1-Flash 云服务支持**：*已关闭/已解决* — 该模型已加入 Ollama Cloud，获 27 个 👍。[Issue #18360](https://github.com/ollama/ollama/issues/18360)
- **ppc64le (IBM POWER) 架构支持**：长期功能需求有更新；当前安装脚本在 POWER8/POWER9 服务器上运行失败。共 27 条评论。[Issue #796](https://github.com/ollama/ollama/issues/796)
- **Gemma 4 统一视觉支持（PR 进行中）**：修复 GGUF 元数据扫描逻辑，使单 GGUF 文件的 Gemma4 模型可通过 `/api/tags` 正确返回视觉/音频能力信息。[PR #16879](https://github.com/ollama/ollama/pull/16879)

### 格式兼容性
- **Qwen3.8-27B-GSQ-RCO-GGUF 的 IQ3_S 量化**：当前版本运行该量化模型时返回空内容，支持状态尚未确认。[Issue #18297](https://github.com/ollama/ollama/issues/18297)

---

## 4. 性能与优化
### 已报告的回归问题
- **模型加载性能回归（0.23.4 → 0.30.x+）**：所有大模型（如 GPT-OSS:120b）加载速度显著变慢，用户因此推迟升级。[Issue #18373](https://github.com/ollama/ollama/issues/18373)
- **Strix Halo 平台上 Qwen3.5 122B 加载时间翻倍**：从 v0.24 的 61 秒增至 v0.30.4 的 116 秒，但提示词处理速度提升了 40%。[Issue #16501](https://github.com/ollama/ollama/issues/16501)
- **不必要的多 GPU 拆分**：v0.30.6 版本中，即便单张 GPU 显存足够容纳模型（例如在 3090 + 4060 配置下运行 20GB 的 Gemma 4 31b），仍会将模型拆分到多张 GPU 上。[Issue #16599](https://github.com/ollama/ollama/issues/16599)

### 进行中的 PR
- **Vulkan 集成 GPU 直接 I/O 修复**：*已关闭/已合并* — 通过对齐 CUDA/ROCm 的直接 I/O 行为，解决了 Virtio-GPU/Venus 虚拟机上的模型加载超时问题。[PR #18124](https://github.com/ollama/ollama/pull/18124)
- **量化后中间 blob 清理**：`ollama create --quantize` 会遗留孤立 blob 文件（有用户累计产生 830GB 未引用数据，而活跃模型仅占 188GB）。本 PR 会在导入完成后清理 F16 中间文件。[PR #18424](https://github.com/ollama/ollama/pull/18424)
- **安装脚本重试机制增强**：提议在 `install.sh` 中添加 `curl --retry` 选项，以应对不稳定的网络连接。[Issue #12478](https://github.com/ollama/ollama/issues/12478)

---

## 5. 稳定性与回归问题
按严重程度/用户影响排序：
1. **[严重] 许可合规缺口**：发布产物未包含 llama.cpp 等静态链接依赖项的 MIT 版权声明。共 58 条评论、275 个 👍。[Issue #3185](https://github.com/ollama/ollama/issues/3185)
2. **[高] Strix Halo (gfx1151) 平台 ROCm KV 状态泄漏**：连续的无关请求会泄露上文上下文 — 响应内容会描述*上一条*提示词的内容。在 `ollama:0.32.14-rocm` 上可稳定复现。[Issue #17847](https://github.com/ollama/ollama/issues/17847)
3. **[高] Qwen3.8 工具调用循环中出现 500 错误**：多步工具调用超出上下文窗口时会报错 "no user query found in messages"。*修复 PR 已提交*：#17894 会在截断时保留最新的用户消息。[Issue #17778](https://github.com/ollama/ollama/issues/17778) · [PR #17894](https://github.com/ollama/ollama/pull/17894)
4. **[高] 工具调用解析失败会静默丢弃输出**：工具调用解析失败时，尽管已消耗了生成 token，但仅向用户返回空内容，无任何错误提示。[Issue #17274](https://github.com/ollama/ollama/issues/17274)
5. **[中] Windows 平台 Gemma4 图像输入功能失效**：多模态 Gemma4 模型在 Windows 版本中无法处理图像。共 44 条评论。[Issue #16532](https://github.com/ollama/ollama/issues/16532)
6. **[中] Qwen 工具调用解析器不匹配**：Qwen3.6 使用 qwen3.5 解析器，导致合法但格式略有偏差的工具输出间歇性返回 500；Qwen3 在通过 `/api/chat` 传入工具定义时也存在工具定义渲染格式错误的问题（嵌入在系统提示词中则正常）。[Issue #16383](https://github.com/ollama/ollama/issues/16383) · [Issue #14601](https://github.com/ollama/ollama/issues/14601)
7. **[中] 云端模型 JSON 模式被忽略**：`qwen3-coder:480b-cloud` 忽略 `format` 回复模式，返回非结构化 JSON。[Issue #12362](https://github.com/ollama/ollama/issues/12362)
8. **[中] glm-5.3:cloud 推理陷入死循环**：云端部署的 glm-5.3 会进入无限推理并终止任务，而官方 Z.AI API 运行正常。[Issue #18193](https://github.com/ollama/ollama/issues/18193)
9. **[中] AMD RDNA3 (gfx1200) TensileLibrary 错误**：`qwen3.8:27b` 在 RX 9060 XT 上运行崩溃，提示缺少 `TensileLibrary_lazy_gfx1200.dat`。[Issue #17782](https://github.com/ollama/ollama/issues/17782)
10. **[中] Gemma3 带引号输入的结构化输出被截断**：使用 `format` JSON 模式的 `gemma3:12b` 在输入包含双引号内容时会提前停止输出。[Issue #18094](https://github.com/ollama/ollama/issues/18094)

---

## 6. 对应用开发者的影响
- **Qwen 3.x / 3.6 / 3.8 的工具调用可靠性存在已知缺口**：若构建智能体工作流，请将工具定义嵌入系统提示词，而非使用 `/api/chat` 的 `tools` 参数，以规避已知的解析/渲染缺陷；同时需在客户端为多步工具循环中的 500 响应添加重试逻辑。
- **Gemma 4 多模态能力跨平台可靠性尚不足**：在 #16532 和 #16879 落地前，请勿上线 Windows + Gemma4 视觉相关工作流，建议先在 Linux 上测试。
- **使用 `ollama create --quantize` 需监控磁盘占用**：在 #18424 发布前，大规模量化导入会遗留大量孤立 blob 文件 — 请定期清理 `~/.ollama/models/blobs` 目录。
- **Anthropic 兼容端点的工具模式限制较复杂**：若通过 Ollama 的 `/v1/messages` Anthropic 兼容层调用 Claude Code，请简化工具模式，或在复杂工具使用场景下回退到原生的 OpenAI 兼容端点。[Issue #18346](https://github.com/ollama/ollama/issues/18346)
- **上下文静默截断仍是默认行为**：对话超出上下文长度时会丢弃旧消息，且无任何用户可见提示。对于依赖完整历史记录的智能体应用，请在客户端自行跟踪 token 计数。[Issue #14259](https://github.com/ollama/ollama/issues/14259)
- **DeepSeek-V4.1-Flash 现已上线 Ollama Cloud**，托管推理服务的用户可直接使用。[Issue #18360](https://github.com/ollama/ollama/issues/18360)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 每周简报 — 2026-09-14
数据来源：[BerriAI/litellm](https://github.com/BerriAI/litellm)

---

## 1. 过去7天亮点
LiteLLM 推进 Rust 迁移路线图，目标将网关开销降至1ms以下，同时发布了 v1.101.x 和 v1.102.x 系列预览版本，所有版本均附带 cosign 签名的 Docker 镜像以保障供应链完整性。社区与维护团队修复了 Vertex AI、Bedrock、Fireworks AI 和 Anthropic 适配器中多个长期存在的提供商兼容性问题，并针对代理速率限制、消费追踪和团队管理员缓存一致性问题推出了定向修复。

---

## 2. 版本发布与破坏性变更
近期所有版本的 Docker 镜像均通过 [cosign](https://docs.sigstore.dev/cosign/overview/) 签名（签名密钥在 [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 中引入）：

- **v1.102.0-rc.1** — v1.102 系列的发布候选版本。
- **v1.102.0-dev.2 / v1.102.0-dev.1** — 即将推出的 v1.102 功能的开发预览版。
- **v1.100.1** — v1.100 系列的稳定补丁版本。
- **v1.101.0-rc.2** — v1.101 的第二个发布候选版本。

在提供的版本说明中，未记录已发布的破坏性变更。

---

## 3. 新增模型与硬件支持
- **ai& (aiand) 提供商** — 本次 PR 新增了一级 `aiand/<model>` 提供商路由，支持 Chat Completions 和 Responses API，同时集成了 UI 端的添加模型表单。
  [PR #38958](https://github.com/BerriAI/litellm/pull/38958)
- **fal.ai 模型支持申请** — 社区提出请求，希望将视频模型（OpenAI Sora 2、Google Veo 3.1 Fast）及其他 fal.ai 模型接入 LiteLLM。
  [Issue #16073](https://github.com/BerriAI/litellm/issues/16073)
- **OpenRouter Qwen cache_control** — 修复后 `cache_control` 和 `cache_control_injection_points` 会被正确转发给 OpenRouter Qwen 系列模型。
  [PR #29335](https://github.com/BerriAI/litellm/pull/29335)

---

## 4. 性能与优化
- **Rust 迁移（主工单）** — 正在打造最快、最轻量的 AI 网关，目标开销低于1ms；目前已开放早期测试者报名通道。
  [Issue #31263](https://github.com/BerriAI/litellm/issues/31263)
- **vLLM 缓存令牌成本追踪** — 提出需求，要求正确处理 vLLM 后端返回的 `cached_tokens` 使用量，以便令牌成本计算器能准确核算缓存命中的成本。
  [Issue #22984](https://github.com/BerriAI/litellm/issues/22984)
- **故障转移时路由器深拷贝参数** — 修复了故障转移尝试过程中共享 kwargs 被修改的问题，避免故障转移路由中出现隐蔽的正确性和性能缺陷。
  [PR #27462](https://github.com/BerriAI/litellm/pull/27462)

---

## 5. 稳定性与回归问题
按严重程度/用户影响排序：

1. **虚拟密钥缓存后，按客户维度的 RPM 限制未生效** — 密钥被缓存后限制不再生效，绕过了按终端用户的速率限制。目前暂未关联修复 PR。
   [Issue #39713](https://github.com/BerriAI/litellm/issues/39713)
2. **v3 速率限制器对团队按模型的限制重复计数** — `model_per_team` 限制的实际 RPM/TPM 约为配置值的 50%。
   [Issue #34140](https://github.com/BerriAI/litellm/issues/34140)
3. **虚拟密钥的 TPM 限制不准确** — 长期存在的 bug：虚拟密钥的实际速率限制执行结果与配置的 TPM 不匹配。
   [Issue #24677](https://github.com/BerriAI/litellm/issues/24677)
4. **内部参数泄露到提供商请求体中** — 会导致对参数校验严格的提供商（如 Bedrock）返回 400 错误。修复 PR 会在提供商请求边界处移除已登记的内部参数键。
   [Issue #30301](https://github.com/BerriAI/litellm/issues/30301) · [PR #41025](https://github.com/BerriAI/litellm/pull/41025)
5. **Vertex AI 版本化 Claude 的默认 `max_tokens` 错误** — 向 `claude-haiku-4-5@20251001` 这类版本化 ID 发送未携带 `max_tokens` 的请求时，令牌数上限被错误设为 4096。修复 PR 正在审核中。
   [PR #40376](https://github.com/BerriAI/litellm/pull/40376)
6. **Fireworks AI 拒绝 Anthropic 适配器传来的字典格式 `reasoning_effort`** — PR 将字典形态标准化为 Fireworks API 可接受的普通字符串。
   [PR #35650](https://github.com/BerriAI/litellm/pull/35650)
7. **调用前护栏无法识别/拦截 Anthropic `/v1/messages` 接口的 MCP 工具** — `custom_code` 和 `tool_permission` 护栏无法检测 Anthropic 格式请求中的 MCP 工具。
   [Issue #40583](https://github.com/BerriAI/litellm/issues/40583)
8. **团队封禁/解封操作后缓存未更新** — `block_team` / `unblock_team` 操作不会刷新内存缓存，因此变更仅在 TTL 过期后才生效。修复 PR 已合并。
   [PR #28752](https://github.com/BerriAI/litellm/pull/28752)
9. **MCP OAuth 回调返回 404** — OAuth2 回调重定向到不存在的 `/ui/mcp/oauth/callback` 路径。
   [Issue #24771](https://github.com/BerriAI/litellm/issues/24771)
10. **Responses API 流式传输违反规范** — 缺失 `sequence_number`、`text.format` 和用量详情，导致严格客户端（如 Grok Build CLI）拒绝接收流式响应。修复 PR 正在审核中。
    [PR #28899](https://github.com/BerriAI/litellm/pull/28899)

---

## 6. 对应用开发者的影响
- **安全态势升级** — 近期所有 Docker 镜像均已通过 cosign 签名；有供应链合规要求的团队可使用已发布的密钥验证镜像（[commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)）。
- **谨慎使用按团队按模型的速率限制与按客户的 RPM 限制** — 如果你依赖 `model_per_team` 限制，或使用了带缓存虚拟密钥的终端用户 `rpm_limit`，请手动验证限制执行情况；已知当前版本中这两类限制要么执行不足，要么完全未生效。
- **提供商兼容性改进即将上线** — 待对应 PR 进入稳定版本后，使用 Vertex AI Claude（版本化 ID）、发送 Anthropic 格式请求的 Fireworks AI 用户，以及开启缓存的 OpenRouter Qwen 用户，遇到 400 错误的情况将会减少。
- **Rust 版网关即将推出** — 对于对延迟敏感的部署场景，Rust 迁移版本目标将开销控制在 1ms 以下；可关注 [Issue #31263](https://github.com/BerriAI/litellm/issues/31263)，如果你运营高吞吐量网关，也可考虑加入早期测试。
- **消费追踪边缘场景问题** — 提供商响应 ID 为空、以及自动路由器对缓存读取的成本节省计算这两个问题都存在 bug；如果你需要进行精细化成本归因，请留意即将发布的 v1.102 补丁版本中针对这些问题的修复。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 每周动态 | 2026-09-14
---

## 1. 过去 7 天亮点
Unsloth 发布了两个测试版（v0.1.807 和 v0.1.808），实现了跨平台的重大性能提升：最突出的是基于 Vulkan 的 AMD 显卡性能较 ROCm 提升 20%，扩散模型推理速度提升 1.2–1.7 倍。团队还推进了多项 Studio 功能，包括 Agent Skills 支持、视频/图像模型的 NVFP4 量化，以及修复 Windows 内存管理和 AMD GPU 检测问题。

## 2. 版本发布与破坏性变更
### v0.1.808-beta
- 大规模性能、可靠性优化与问题修复版本
- 亮点：扩散模型速度提升 1.2–1.7 倍；基于 Vulkan 的 AMD 性能较 ROCm 提升 20%；更新速度提升 2 倍；移除 Windows 下 SAC + 杀毒软件误报；新增 Blender MCP 支持；新增 Hermes 模型检测；修复 AMD 乱码问题（已向上游 AMD 反馈）
- 来源：[unslothai/unsloth Releases](https://github.com/unslothai/unsloth/releases)

### v0.1.807-beta
- 大规模性能、可靠性优化与问题修复版本
- 亮点：AMD 默认使用 Vulkan（预填充/解码速度较 ROCm 提升 20%）；Windows 版 `llama-server.exe` 现已签名（减少 SAC 误报）；修复 Strix/核显的 AMD 乱码问题（上游修复）
- 来源：[unslothai/unsloth Releases](https://github.com/unslothai/unsloth/releases)

未报告 API/配置层面的破坏性变更。

## 3. 新增模型与硬件支持
- 新增 **Blender MCP** 支持（v0.1.808-beta）
- 新增 **Hermes** 模型检测（v0.1.808-beta）
- **AMD Strix / 核显**：输出乱码问题已由上游 AMD 修复（v0.1.807/808-beta）
- **Intel Arc B580**：因不支持 `torch.xpu.memory.mem_get_info()` 导致导入失败 — [Issue #3533](https://github.com/unslothai/unsloth/issues/3533)（已关闭，bug）
- **Agent Skills**（Studio）：支持从 `~/.agents/skills` 和 `~/.claude/skills` 发现并验证技能 — [PR #10247](https://github.com/unslothai/unsloth/pull/10247)
- **视频模型系列 NVFP4**：Wan2.2-TI2V-5B、Wan2.2-T2V-A14B、HunyuanVideo-1.5 支持整模型 NVFP4，提供托管的预量化降噪器 — [PR #10729](https://github.com/unslothai/unsloth/pull/10729)
- **逐层 NVFP4 图像策略**，搭配 flashinfer FP4 后端与 GPTQ 构建器 — [PR #10730](https://github.com/unslothai/unsloth/pull/10730)
- **官方 BF16 图像模型**现已可在 Studio 的 FP8/INT8 快速路径上运行 — [PR #10697](https://github.com/unslothai/unsloth/pull/10697)

## 4. 性能与优化
- **扩散模型**：推理速度提升 1.2–1.7 倍（v0.1.808-beta）
- **AMD Vulkan 后端**：预填充 + 解码性能较 ROCm 提升 20%；现已设为默认后端（v0.1.807/808-beta）
- **更新速度**：更新过程提速 2 倍（v0.1.808-beta）
- 序列长度变化时**打包注意力缓存失效**（修复了掩码/边界陈旧的问题） — [PR #10879](https://github.com/unslothai/unsloth/pull/10879)
- **Q-GaLore 优化器修复**：按名称向 bitsandbytes 传递选项，且每次更新仅推进一次 Adam 步计数器（兼顾正确性与性能） — [PR #10874](https://github.com/unslothai/unsloth/pull/10874)、[PR #10842](https://github.com/unslothai/unsloth/pull/10842)
- **Docker 镜像体积**：移除内置的 uv 缓存，镜像体积减少约 5.3 GB — [PR #10827](https://github.com/unslothai/unsloth/pull/10827)
- **Windows 无预留加载**：VRAM 卸载后避免保留 GGUF 常驻映射 — [PR #10618](https://github.com/unslothai/unsloth/pull/10618)（已关闭）

## 5. 稳定性与回归问题
按严重程度（影响范围 + 活跃度）排序：

1. **Qwen3-Coder-Next-Base 在 2xA100 上 QLoRA 训练 OOM** — 在 2 张 80GB A100 上训练时内存不足；正在修复。[Issue #4040](https://github.com/unslothai/unsloth/issues/4040)（已关闭，bug）
2. **AMD Strix Halo APU**：模型被错误限制使用系统内存，而非统一 GPU 内存（可用内存从 110 GB 变为 22 GB）。[Issue #6834](https://github.com/unslothai/unsloth/issues/6834)（已关闭，bug/AMD 侧问题）
3. **Studio：Windows 下启用“不预留系统内存”并完全卸载到 VRAM 时，GGUF 内存未释放**。[Issue #9033](https://github.com/unslothai/unsloth/issues/9033)（已关闭，功能请求/bug）
4. **长对话的 Qwen3.8 GGUF 模型**重载后丢失可复用提示状态，导致需要约 11 分钟的完整预填充。[Issue #9037](https://github.com/unslothai/unsloth/issues/9037)（进行中，Studio bug）
5. **`--tensor-split` 参数被忽略** — 多 GPU 张量切分参数未生效。[Issue #10355](https://github.com/unslothai/unsloth/issues/10355)（进行中，功能请求/bug）
6. **Nemotron 注意力处理** bug — 修复中。[Issue #7527](https://github.com/unslothai/unsloth/issues/7527)（进行中，bug）
7. **多轮确定性冒烟测试**在合并基准分支上间歇性失败（不只是 PR 分支）。[Issue #10004](https://github.com/unslothai/unsloth/issues/10004)（已关闭，Studio CI 问题）
8. **Studio 安装程序检测到 AMD GPU 但仅以 CPU 模式运行**，且无面向用户的问题排查说明。[Issue #8473](https://github.com/unslothai/unsloth/issues/8473)（已关闭，Studio 问题）

针对 Windows 内存问题（[#10618](https://github.com/unslothai/unsloth/pull/10618)）与打包注意力缓存正确性问题（[#10879](https://github.com/unslothai/unsloth/pull/10879)）的修复 PR 已存在。

## 6. 对应用开发者的影响
- **AMD 用户开箱即可获得显著提速**：Vulkan 现已设为默认后端，无需修改代码即可获得 20% 的预填充/解码性能提升。
- 最新测试版中**扩散模型流水线推理速度提升 1.2–1.7 倍**，可直接提升基于 Unsloth 构建的图像/视频生成服务的吞吐量。
- **Studio 的 Agent Skills 支持**（[#10247](https://github.com/unslothai/unsloth/pull/10247)）允许你在基于 Unsloth 的应用中直接复用 Claude/agent 技能定义，减少智能体工作流的集成工作量。
- **Windows 部署受益于签名二进制文件**（更少的杀毒软件误报），以及 VRAM 常驻模型的内存泄漏修复，提升了生产环境可靠性。
- **Q-GaLore 优化器修复**（[#10874](https://github.com/unslothai/unsloth/pull/10874)、[#10842](https://github.com/unslothai/unsloth/pull/10842)）解决了正确性回归问题；使用内存高效微调的用户建议升级。
- 如果你的流水线依赖 `temperature=0` 时完全一致的多轮输出，需留意**间歇性确定性问题**（[#10004](https://github.com/unslothai/unsloth/issues/10004)）。

---
*数据来源：[github.com/unslothai/unsloth](https://github.com/unslothai/unsloth)*

---

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*