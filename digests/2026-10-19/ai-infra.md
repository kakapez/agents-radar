# AI 基础设施周报 2026-10-19

> 生成时间: 2026-10-19 01:00 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# 跨项目AI基础设施生态报告 | 2026-10-19
## 1. 生态概览
过去7天，AI推理与工具生态在各层级均取得进展，投入重点集中在生产级MoE服务优化、跨平台硬件兼容性（尤其是AMD ROCm、NVIDIA Blackwell及边缘NPU目标）以及高吞吐工作负载的正确性加固方面。推测解码（Speculative decoding）和KV缓存效率仍是各推理引擎的一致焦点，而上层项目则优先关注供应链安全、API兼容性以及智能体工作流的鲁棒性。多个大参数MoE模型（500B+级别）获得了首日或近首日服务支持，反映出稠密-MoE混合架构正持续成为主流部署目标。稳定性工作高度聚焦于正确性（批次不变性、流式翻译一致性）和平台特定的回归问题，各项目正在加固对下一代GPU和加速器的支持。

## 2. 活跃度对比
| 项目 | 问题活跃度（已跟踪的高/严重级别） | PR活跃度（已合并/进行中的重要项） | 发布状态（过去7天） |
|---------|----------------------------------------|------------------------------------------|-------------------------------|
| vLLM | 10+（3个严重、5个高级，含批次不变性跟踪项） | 15+（新模型支持、ROCm启用、内核融合） | v0.32.0（进行中，来自363位贡献者的814次提交） |
| SGLang | 6（3个严重、3个高级，含CI基础设施跟踪项） | 10+（LoRA栈第13–19部分、引擎恢复、上下文并行） | 无新版本；Q4路线图相关开发活跃 |
| llama.cpp | 7（4个高级、3个中/低级，平台特定回归问题） | 20+（量化移植、Hexagon NPU、Vulkan FA优化） | 无版本化发布；滚动构建（b11712 – b11721） |
| Ollama | 10+（1个严重云服务中断、3个高级、6+个中/低级） | 10+（解析器修复、分布式推理PR、4个补丁发布） | 4次发布：v0.40.4、v0.40.5、v0.40.6、v0.40.7-rc0 |
| LiteLLM | 10+（1个严重、6个高级、3+个中级） | 10+（Rust重构、安全加固、供应商更新） | 6次发布：v1.105.1、v1.103.5、v1.106.0、v1.107.0-rc.1 + 预发布版 |
| Unsloth | 7（2个高级、3个中级、2个低级/UI问题） | 20+（模型支持、训练优化、UI升级） | 3次beta发布：v0.1.906-beta、v0.1.907-beta、v0.1.908-beta |

## 3. 模型支持竞赛
### 已上线的新模型支持（过去7天）
| 项目 | 新模型/架构 |
|---------|---------------------------|
| vLLM | Reflection Beam-1.0 501B MoE（首日支持，搭载DFlash2推测解码） |
| SGLang | DeepSeek-V4.1多模态（CUDA）；GLM-5.3-Flash AMD FP8支持 |
| llama.cpp | GigaChat 3.5 432B MoE（进行中）；IQ系列低比特量化家族（进行中） |
| Ollama | NVIDIA Nemotron 3.5 Super VLM；PPLX Decider v1.2（MLX）；决策模型家族CLI支持 |
| LiteLLM | OceanToken供应商集成（进行中）；CoralBricks GLM 5.3变体已移除（供应商停用） |
| Unsloth | NVIDIA Nemotron 3.5 Bolt；Meta Muse Spark Open（文本扩散LLM）；Qwen-Image-2.1-Turbo |

### 竞争定位
vLLM在前沿大型MoE模型的首日支持方面保持领先，率先落地501B参数Reflection Beam架构的支持。Unsloth是扩展多模态和创意模型支持最快的项目，上线了三类新模型，包括文本扩散和图像生成模型。SGLang的差异化在于其对顶级MoE模型（DeepSeek-V4.1、GLM-5.3）在NVIDIA和AMD硬件上的深度优化。Ollama在新模型的终端用户易用性方面领先，将Nemotron 3.5等高需求模型封装到其一键部署流程中。

## 4. 性能前沿
优化工作集中在五大核心领域：
1. **KV缓存效率**：所有推理引擎都提升了KV缓存的灵活性和性能。vLLM推进了面向异构部署的TP无关KV卸载以及KV缓存后端统一工作。SGLang实现了智能体工作负载95%以上的缓存命中率，以及针对重复前缀的Ngram推测解码。llama.cpp优化了共享提示批次的槽位调度。
2. **内核融合与底层优化**：vLLM推进了手动内核融合移植（从`torch.compile`迁移到手调内核）以及GLM-5 MoE + RMSNorm融合。llama.cpp专注于跨后端低比特量化内核调优（CUDA、HIP、Vulkan、SYCL）以及MoE专家GPU LRU缓存。SGLang优化了SM120 FP8 GEMM性能，并深化了其面向LoRA的Triton/CuTeDSL分组GEMM栈。
3. **分布式与并行服务**：vLLM落地了其即时执行模式序列并行 + 异步TP系列的首个PR。SGLang扩展了跨后端的预填充上下文并行，并推出了快速引擎恢复（权重缓存守护进程）第一阶段，235B模型的权重加载时间不到1秒。Ollama推进了基于llama.cpp RPC的分布式多机推理。
4. **推测解码**：vLLM集成了针对Reflection Beam的DFlash2起草器支持。SGLang开发了面向提示前缀复用的按请求Ngram推测解码。Ollama新增了草稿推测解码类型的自动检测功能，以减少配置开销。
5. **批处理与吞吐量**：vLLM的批次不变性修复（top-p采样、FP8 MoE、GPTQ线性层）消除了由批次构成导致的吞吐波动。llama.cpp的MoE专家LRU缓存减少了小批量MoE工作负载的主机-GPU传输开销。SGLang的打包MoE调度提升了LoRA工作负载的SM利用率。

## 5. 层级定位
| 层级 | 项目 | 核心价值主张 | 主要用例 |
|-------|---------|------------------------|-------------------|
| **高性能服务引擎（数据中心）** | vLLM | 大规模LLM/MoE服务的最大吞吐量，广泛的模型/硬件支持，原生兼容OpenAI的API | 云端推理、多租户服务、大型MoE部署 |
| | SGLang | 具备高级可编程KV缓存控制、LoRA运行时和PD解耦的优化服务 | 高吞吐智能体/RAG工作负载、细粒度缓存管理、LoRA服务 |
| **本地/边缘运行时** | llama.cpp | 轻量级、跨平台推理，依赖极少，后端支持广泛（CPU、GPU、NPU） | 边缘部署、桌面推理、低资源环境 |
| | Ollama | 用户友好的本地模型管理与服务，一键部署，生态集成广泛 | 桌面AI、本地开发、小团队自托管部署 |
| **LLM网关** | LiteLLM | 跨100+ LLM供应商的统一API抽象，成本追踪、限流、故障转移 | 多供应商部署、成本管理、供应商间迁移 |
| **训练与微调 + 集成工作室** | Unsloth | 快速、内存高效的微调 + 带终端用户UI的集成推理工作室 | 自定义模型微调、本地AI工作室工作流、训练到部署流水线 |

## 6. 趋势信号
1. **MoE服务正走向生产成熟**：每个服务引擎都推出了MoE特定优化（专家缓存、融合、LoRA支持），并新增了对400B–500B+参数MoE模型的支持。智能体/应用开发者应将MoE架构作为高容量模型的默认选项进行规划，并评估激活参数量与总参数量的性价比权衡。
2. **硬件多样性正在加速**：在vLLM、SGLang和llama.cpp中，AMD ROCm支持已从“尽力而为”升级为一等公民地位，配备了专用CI、优化内核和功能对齐工作。边缘NPU支持（高通Hexagon、瑞芯微）也取得了实质性进展。基础设施团队应将硬件路线图从仅NVIDIA的模式向多元化拓展，以实现成本节约。
3. **正确性和确定性现已成为关键差异化因素**：vLLM的批次不变性工作、LiteLLM中的跨项目流式翻译修复，以及llama.cpp中的推测解码一致性问题，都表明随着推理系统走向成熟，输出正确性和可复现性正成为受监管和重测试工作负载的关键选择标准。
4. **智能体工作负载正在驱动优化路线图**：针对重复提示的Ngram推测解码、工具调用解析修复、浏览器控制能力以及前缀缓存优化，都直接瞄准智能体/工具使用工作流。构建智能体系统的应用开发者应优先选择明确针对多轮、重复前缀和工具调用模式进行优化的引擎。
5. **供应链安全向上游转移**：LiteLLM采用Cosign镜像签名，反映出AI基础设施领域对可验证软件供应链的需求日益增长。在受监管环境中运营的团队应开始优先考虑具备签名制品和SBOM支持的项目。

---

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 每周摘要 | 2026-10-19
数据来源：[github.com/vllm-project/vllm](https://github.com/vllm-project/vllm)

---

## 1. 过去7天亮点
vLLM 项目在多种量化与采样后端中推进了批次不变性（batch invariance）的正确性，为 Reflection 的 501B 参数 Beam MoE 模型提供了首发日支持，并搭配 DFlash2 推测解码；同时在 ROCm 平台优化与 CI 扩展方面取得进展。关键基础设施工作也有所推进：包括手动内核融合移植（与模型开发 RFC 对齐）以及异构 TP 部署下 KV 连接器的可靠性提升。

---

## 2. 版本发布与破坏性变更
### v0.32.0（进行中）
- **新接口**：新增 `POST /v1/systemone` 端点，用于在结构化状态下执行结构化的 `choice`、`noul` 和 `score` 问答，默认启用。
- 规模：来自 363 位贡献者的 814 次提交（含 121 位新贡献者）——完整发布说明待完成。
- 链接：[v0.32.0 发布草稿](https://github.com/vllm-project/vllm/releases/tag/v0.32.0)

---

## 3. 新模型与硬件支持
### 新模型
- **Reflection Beam-1.0**：首发日支持 501B 参数 MoE（激活参数 23B）的 `BeamForCausalLM` 架构，以及其用于推测解码的 `DFlash2BeamDraftModel` DFlash2 草稿模型。
  - PR：[#62074](https://github.com/vllm-project/vllm/pull/62074)

### 硬件与后端启用
- **ROCm**：为 AMD GPU 上的 Qwen3-Next/Qwen3.5 启用了融合的 QK-norm+RoPE+gate Triton 内核（此前仅支持 CUDA）。
  - PR：[#51406](https://github.com/vllm-project/vllm/pull/51406)
- **ROCm CI**：按 CDNA 代际（cdna3/cdna4）拆分了扩展测试矩阵，同时 ROCm 10 镜像已升级至 PyTorch 2.13。
  - PR：[#62363](https://github.com/vllm-project/vllm/pull/62363)、[#62276](https://github.com/vllm-project/vllm/pull/62276)
- **CUDA 架构测试**：在 CMake 构建中新增了对普通和带后缀 CUDA 架构标识符的回归测试覆盖。
  - PR：[#56582](https://github.com/vllm-project/vllm/pull/56582)

### 进行中的启用跟踪
- DeepSeek-V4-Flash / V4-Flash-0731 SM8x（Ampere A100/A800、RTX 30xx）支持请求。
  - Issue：[#50576](https://github.com/vllm-project/vllm/issues/50576)
- Kimi-K3 ROCm 功能/性能路线图跟踪。
  - Issue：[#50682](https://github.com/vllm-project/vllm/issues/50682)
- Qwen3.8-2.4T-A95B MI355X（gfx950）性能优化计划。
  - Issue：[#57149](https://github.com/vllm-project/vllm/issues/57149)

---

## 4. 性能与优化
### 内核与计算图优化
- **GLM-5.x MoE + RMSNorm 融合**：通过延迟终态化（deferred-finalization）模式，使用单个 FlashInfer 内核将 MoE top-k 终态化操作融合到下一个 RMSNorm 的 all-reduce 中。
  - PR：[#62174](https://github.com/vllm-project/vllm/pull/62174)
- **工具解析器流式性能**：对所需工具的 JSON 增量进行增量扫描，而非每个 token 都重新扫描完整的累积数组。
  - PR：[#60882](https://github.com/vllm-project/vllm/pull/60882)
- **手动融合移植**：跟踪将基于 `torch.compile` 的融合迁移至手动内核实现的工作（与模型开发 RFC #42770 对齐）。
  - Issue：[#43224](https://github.com/vllm-project/vllm/issues/43224)
  - RFC：[#42770](https://github.com/vllm-project/vllm/issues/42770)

### 注意力与 KV 缓存
- **KVCache 后端统一**：跟踪提取所有注意力后端（FlashAttention、FlashInfer、AiterFlashAttention 已完成）中 KV 缓存更新逻辑的工作。
  - Issue：[#32335](https://github.com/vllm-project/vllm/issues/32335)
- **TP 无关 KV 卸载**：跟踪跨 TP 大小兼容的卸载 KV 缓存共享问题；欢迎参与评审和测试。
  - Issue：[#61886](https://github.com/vllm-project/vllm/issues/61886)
- **NVFP4 KV 缓存预填充回归**：在 SM120（消费级 Blackwell）上，FlashInfer NVFP4 因果预填充速度比 FP8 慢约 1.7–1.8 倍。
  - Issue：[#50416](https://github.com/vllm-project/vllm/issues/50416)

### 并行性
- **Eager 模式序列并行（SP）+ 异步 TP**：该系列实现 SP + 异步 TP 机制的首个 PR。
  - PR：[#61644](https://github.com/vllm-project/vllm/pull/61644)
  - RFC：[#61626](https://github.com/vllm-project/vllm/issues/61626)

---

## 5. 稳定性与回归问题
### 严重
1. **AMD R9700（gfx1201/RDNA4）上 TP=2 死锁**：双 GPU 占用率达 100% 且推理被阻塞；在多个 vLLM + ROCm 版本上均可复现。暂无修复 PR。
   - Issue：[#40980](https://github.com/vllm-project/vllm/issues/40980)
2. **DeepSeek-V4-Pro TP 工作器挂起**：在 TP=8 + MTP 推测解码下，`sample_tokens` RPC 超时导致 `EngineDeadError`。暂无修复 PR。
   - Issue：[#41530](https://github.com/vllm-project/vllm/issues/41530)
3. **共享内存广播块超时**：在编译/量化权重加载过程中出现“60 秒内未找到可用共享内存广播块”。暂无修复 PR。
   - Issue：[#35465](https://github.com/vllm-project/vllm/issues/35465)

### 高优先级
1. **Qwen3.8-Flash-Next 贪婪解码非确定性**：在 SM121/GB10 上，当提示词长度接近 `indexer_budget`（稀疏注意力 top-k 切换点）时，`temperature=0` 下相同请求的输出会变化。暂无修复 PR。
   - Issue：[#54521](https://github.com/vllm-project/vllm/issues/54521)
2. **混合 Mamba/GDN 前缀缓存在 MTP 下损坏**：混合 Mamba/GDN 模型（v0.28.0）上的前缀缓存 + MTP 会导致输出损坏；此前的 issue #43559 已关闭但未修复。修复进行中：
   - Issue：[#53912](https://github.com/vllm-project/vllm/issues/53912)
   - 修复 PR：[#52244](https://github.com/vllm-project/vllm/pull/52244)
3. **MI355 上 Triton MLA 解码 int32 溢出**：Kimi-Linear-48B、LongCat-Flash-Lite-FP8、DeepSeek-V2-Lite-Chat 在 CUDA 图捕获期间崩溃。**修复已合并。**
   - PR：[#61938](https://github.com/vllm-project/vllm/pull/61938)
4. **NIXL KV 连接器对端断开持久化**：拉取连接失败会导致 UCX 端点永久损坏，需重启才能恢复。修复进行中：
   - PR：[#61500](https://github.com/vllm-project/vllm/pull/61500)
5. **异构 TP 下 NIXL Mamba2 卷积状态传输错误**：当 TP 不能整除 `n_groups` 时，解码输出会静默出错。修复进行中：
   - PR：[#61531](https://github.com/vllm-project/vllm/pull/61531)

### 批次不变性正确性（多个活跃修复）
- top-p 过滤内核路径在分行实现与整体实现之间不一致。
  - 修复 PR：[#62370](https://github.com/vllm-project/vllm/pull/62370)
- 批次不变性下 FP8 MoE 激活缩放未按 token 计算（专家输出取决于批次组成）。
  - 修复 PR：[#62369](https://github.com/vllm-project/vllm/pull/62369)
- GPTQ（Marlin）线性层由于分块/K 拆分依赖 token 数量，不具备批次不变性。
  - 修复 PR：[#60479](https://github.com/vllm-project/vllm/pull/60479)
- ShortConv（LFM2）模型在批次不变模式下不受支持。
  - 修复 PR：[#62367](https://github.com/vllm-project/vllm/pull/62367)
- 批次不变性功能整体完成度跟踪 issue。
  - Issue：[#27433](https://github.com/vllm-project/vllm/issues/27433)

---

## 6. 对应用开发者的意义
1. **确定性推理改进**：如果你的工作负载需要可复现的输出（例如测试、受监管的工作流），针对 top-p 采样、FP8 MoE、GPTQ 和 LFM2 模型的批次不变性修复将消除由批次组成导致的输出差异——可关注 #27433 跟踪 issue 了解整体完成进度。
2. **新的大参数 MoE 选项**：Reflection Beam-1.0（总参数 501B / 激活参数 23B）现已开箱即用地支持 DFlash2 推测解码，为你提供了另一个低延迟服务的高参数 MoE 选项。
3. **工具调用可靠性修复**：不带 `<tool_call>` 包装器的 Qwen3 XML 格式工具调用此前会被错误解析——如果你使用 Qwen3 做智能体/工具相关场景，约束解析器的修复将减少格式错误的工具调用错误。
4. **硬件部署说明**：
   - 等待 DeepSeek-V4-Flash 支持的 Ampere（A100/A800）用户可关注 #50576 了解进展。
   - 运行 DeepSeek-V4.1-Flash 的 Blackwell SM120 用户在使用 `--enforce-eager` 时解码吞吐量极低，且 CUDA 图损坏——可关注 #56892 了解修复情况。
   - ROCm 用户获得了更广泛的模型支持（Qwen 融合注意力内核），以及跨 CDNA 代际更完善的 CI 覆盖。
5. **KV 缓存卸载灵活性提升**：TP 无关 KV 卸载（#61886）即将支持在混合 TP 大小的集群间共享缓存前缀，适用于多租户或解耦式服务部署场景。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 每周速递 | 2026-10-19
数据来源：[github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)

---

## 1. 过去一周亮点
过去一周未发布新版本，开发工作重点围绕推进21部分LoRA运行时栈、扩展AMD与CUDA Blackwell（SM120）模型支持，以及修复MoE后端和GLM-5.3-Flash服务中的关键正确性/稳定性漏洞。多个高优先级路线图项（预填充上下文并行、引擎快速恢复、Q4 PD分解）均取得阶段性进展，其中DeepSeek V4.1优化与Ngram投机解码改进已接近完成。

---

## 2. 版本发布与破坏性变更
过去7天无相关内容。

---

## 3. 新增模型与硬件支持
| 类别 | 详情 | GitHub链接 |
|----------|---------|-------------|
| AMD + DeepSeek | 为AMD硬件上的DeepSeek-V4.1新增预填充上下文并行支持，扩展了PD分解与并行策略的兼容性。 | [PR #43465](https://github.com/sgl-project/sglang/pull/43465) |
| AMD + GLM-5.3-Flash | 为gfx950上的GLM-5.3 Flash提供可选PTPC FP8 KDA投影，降低内存占用并提升AMD MI系列GPU的吞吐量。 | [PR #38764](https://github.com/sgl-project/sglang/pull/38764) |
| CUDA + LoRA | LoRA运行时栈（共21部分，当前推进至第13–19部分）持续迭代：新增Triton/CuTeDSL FP8/BF16分组GEMM内核、MoE LoRA运行器集成，以及面向SM90/SM100的打包MoE调度。 | [PR #42880](https://github.com/sgl-project/sglang/pull/42880) <br> [PR #42885](https://github.com/sgl-project/sglang/pull/42885) |
| CPU服务 | 修复了无`sgl_kernel`时纯CPU `torch_native`后端启动失败的问题，通过延迟可选AOT导入实现CPU推理回退。 | [PR #44064](https://github.com/sgl-project/sglang/pull/44064) |
| DeepSeek-V4.1多模态 | 新增对带编码器有界重放的CUDA图像请求的支持，解锁了支持可中断CUDA图的MMMU-Pro评测。 | [PR #45048](https://github.com/sgl-project/sglang/pull/45048) |

---

## 4. 性能与优化
| 项目 | 详情 | GitHub链接 |
|------------|---------|-------------|
| 引擎快速恢复（权重缓存守护进程） | 第一阶段已落地：各rank守护进程持有后量化权重，通过CUDA IPC提供服务，将Qwen3-235B FP8权重加载时间从约306–327秒缩短至1秒以内。第二阶段工作正在进行中。 | [Issue #33522](https://github.com/sgl-project/sglang/issues/33522) |
| 预填充上下文并行（Q4路线图） | 已完成对Trtllm MHA后端、Qwen3.8-Flash-Next与GLM5.3-Flash的支持；Flashinfer后端与Kimi-K3支持正在开发中。 | [Issue #21788](https://github.com/sgl-project/sglang/issues/21788) |
| DeepSeek V4.1优化 | 已完成mHC代码清理、将`q_rope_store`融合到`fused_q_norm_rope`，以及更快的FP8 GEMM；预填充优化（包括mHC SP + engram融合）正在进行中。 | [Issue #42170](https://github.com/sgl-project/sglang/issues/42170) |
| Ngram投机解码 | 新特性开发中：支持基于提示文本的逐请求草稿生成（而非仅基于索引后的解码token），预计将提升含重复提示前缀工作负载（代码编辑、文档问答）的接受率。 | [Issue #21052](https://github.com/sgl-project/sglang/issues/21052) <br> [PR #45054](https://github.com/sgl-project/sglang/pull/45054) |
| 单内核框架RFC | 提出了供应商无关的单内核框架，支持AMD/其他硬件厂商的插件，可通过`--monokernel-backend`标志启用。 | [Issue #43949](https://github.com/sgl-project/sglang/issues/43949) |
| SM120 FP8 GEMM优化 | 已完成Blackwell（SM120）GPU上逐张量FP8 GEMM的性能优化工作。 | [Issue #33632](https://github.com/sgl-project/sglang/issues/33632) |

---

## 5. 稳定性与回归问题
### 严重级别
| 漏洞 | 详情 | 修复状态 |
|-----|---------|------------|
| MoRI后端静默输出损坏 | `SGLANG_MORI_NUM_MAX_DISPATCH_TOKENS_PER_RANK`值较小时，低并发下会导致解码输出语义错误（gsm8k得分降至0.00），且无可见报错。 | **已关闭（已解决）** <br> [Issue #27194](https://github.com/sgl-project/sglang/issues/27194) |
| GLM-5.3-Flash + DFLASH投机解码重复 | 使用DFLASH投机解码服务GLM-5.3时，出现严重的token重复与推理循环退化问题。 | 待处理，无关联修复PR <br> [Issue #40843](https://github.com/sgl-project/sglang/issues/40843) |
| GLM-5.3-Flash SM120 fa4后端崩溃 | 在RTX PRO 6000上，FlashAttention 4后端在CUDA图捕获（混合扩展重塑）期间崩溃；该配置下Triton是唯一可用的注意力后端。 | 待处理，无关联修复PR <br> [Issue #42012](https://github.com/sgl-project/sglang/issues/42012) |

### 高优先级
| 漏洞 | 详情 | 修复状态 |
|-----|---------|------------|
| GLM-5.3-Flash智能体提示退化 | 使用原生FP8检查点的多工具智能体提示，推理输出会无休止生成`!`字符。 | 待处理，无关联修复PR <br> [Issue #36669](https://github.com/sgl-project/sglang/issues/36669) |
| 僵尸流式客户端请求 | 断开连接的流式客户端会留下孤立请求，一直解码到`max_tokens`，并大量输出"state was deleted in TokenizerManager"日志（由#34160回滚导致的回归问题）。 | **已关闭（已解决）** <br> [Issue #36333](https://github.com/sgl-project/sglang/issues/36333) |
| DeepSeek-V4.1编码器重放边缘情况 | 当各rank分块小于`128 + page_size`时，编码器SWA重放返回零长度扩展，导致预填充准入失败。 | **修复已合并** <br> [PR #45051](https://github.com/sgl-project/sglang/pull/45051) |

### CI/基础设施
- 不稳定测试与CI基础设施故障已在活跃的跟踪看板中记录，作为对长期CI故障跟踪器的补充。 <br> [Issue #42752](https://github.com/sgl-project/sglang/issues/42752) <br> [Issue #17050](https://github.com/sgl-project/sglang/issues/17050)
- 新增测试工具：当服务器在`CustomTestCase`方法中崩溃时，会立即终止运行，减少CI资源浪费。 <br> [PR #45053](https://github.com/sgl-project/sglang/pull/45053)

---

## 6. 对应用开发者的影响
1. **Blackwell（SM120）生产部署**：在RTX PRO 6000上运行GLM-5.3-Flash的团队，目前请使用Triton注意力后端——FlashAttention 4在混合扩展工作负载下尚不稳定。DeepSeek-V4.1-Flash的现场报告中已验证了纯PCIe（无NVLink）8卡拓扑的生产配置，可为部署拓扑选择提供参考。
2. **MoE LoRA支持即将正式发布**：21部分的LoRA运行时栈已完成约90%，面向Triton与CuTeDSL后端的FP8/BF16 MoE LoRA支持正处于最终审核阶段。等待大型MoE模型上生产级LoRA支持的团队，可关注这些PR即将合并到主分支的动态。
3. **智能体工作负载优化即将上线**：程序化KV缓存与位置无关KV复用特性已完成，Ngram投机解码也将很快支持基于提示的草稿生成——这两项都将显著改善含重复前缀的多轮智能体/RAG工作负载的延迟。
4. **CPU服务回退功能已可用**：如果你在纯CPU硬件上运行边缘或开发部署，`torch_native`后端现在无需安装`sgl_kernel`即可开箱即用，降低了测试的依赖开销。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 每周动态 | 2026-10-19
数据来源：[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)

---

## 1. 过去 7 天重点进展
本周 llama.cpp 的更新主要聚焦于低比特量化的跨后端性能调优、Hexagon NPU 加速以及 Vulkan 闪注意优化，同时 MoE 专家 GPU 缓存相关工作也在推进，以降低主机与 GPU 间的传输开销。Vulkan、SYCL 以及 CUDA Blackwell（sm_120）平台上报了多项回归问题，目前已有多个修复 PR 处于审核阶段。面向用户的改进包括 UI 端新增 Hugging Face Hub 模型发现功能，以及服务端模型管理 API 的研发进展。

---

## 2. 版本发布与破坏性变更
过去 7 天无官方版本发布，仅合并了滚动构建提交（b11712 – b11721）。
- 无 API/ABI 破坏性变更上报。
- 官方构建产物与认证信息可通过项目[发布页面](https://github.com/ggml-org/llama.cpp/releases)和 [llama.app](https://llama.app) 获取。

---

## 3. 新增模型与硬件支持
### 量化格式
- **IQ 系列量化（CPU）（进行中）：** PR 新增了从 ik_llama.cpp 移植的 `IQ2_K`、`IQ3_K`、`IQ4_K`、`IQ5_K` 和 `IQ6_K` 量化类型，为内存受限的部署场景提供了更多低比特选项。[PR #30715](https://github.com/ggml-org/llama.cpp/pull/30715)
- **Hexagon Q1_0/Q2_0 支持：** 高通 Hexagon NPU 现已完整支持扁平化/分块的 Q1_0 和 Q2_0 量化格式，包括 Hadamard MUL_MAT 和 GET_ROW 运算。[PR #30627](https://github.com/ggml-org/llama.cpp/pull/30627) / [PR #30122](https://github.com/ggml-org/llama.cpp/pull/30122)

### 模型架构
- **GigaChat 3.5（进行中）：** 初步支持 GigaChat-3.5-432B-A28B，这是一款采用 MLA 注意力的 DeepSeek-V3 风格 MoE 模型。[PR #25342](https://github.com/ggml-org/llama.cpp/pull/25342)

### 后端与硬件
- **Hexagon NPU：** 为无 KV 统一的多序列工作负载新增了多流闪注意支持，同时针对 SWA 模型和更长上下文优化了 FLASH_ATTN_EXT。[PR #30218](https://github.com/ggml-org/llama.cpp/pull/30218) / [PR #30731](https://github.com/ggml-org/llama.cpp/pull/30731)
- **OpenCL：** 新增了 i32 类型的 `get_rows` 操作以及 i32/f32 类型的 `cpy` 操作，扩大了 OpenCL 后端的算子覆盖范围。[PR #30756](https://github.com/ggml-org/llama.cpp/pull/30756)

---

## 4. 性能与优化
### CUDA / ROCm（HIP）
- **Qwen4Exp HC_POST 门控融合：** 从 Vulkan 后端移植了 CUDA 端的 SCALE → SIGMOID → SCALE → hc_post 链融合，降低了 Qwen4 系列模型的内核启动开销。[PR #30602](https://github.com/ggml-org/llama.cpp/pull/30602)
- **低比特 MMVQ 加速：** 优化了 CUDA 上低比特类型的矩阵-向量量化内核，同时针对 GCN 架构修复了 Q3_K/Q6_K 下的 HIP 相关问题。[PR #30517](https://github.com/ggml-org/llama.cpp/pull/30517)
- **HIP q1_0 解包优化：** 使用 `__builtin_amdgcn_perm` 加快了 AMD GPU 上 q1_0 权重的解包速度。[PR #29927](https://github.com/ggml-org/llama.cpp/pull/29927)
- **GCN MMQ 调优（进行中）：** 针对 AMD GCN 架构，对所有量化格式的 MMQ 配置进行全面重新调优。[PR #30021](https://github.com/ggml-org/llama.cpp/pull/30021)
- **Stream-K MMQ 网格上限控制（进行中）：** 通过将 Stream-K 块数限制为可用工作单元数量，减少 CUDA 块启动开销，缩短修正内核的扫描时间。[PR #30553](https://github.com/ggml-org/llama.cpp/pull/30553)

### Vulkan
- **非连续 SUM 支持：** Vulkan 端新增非连续 SUM 运算支持（与 CPU/CUDA/WebGPU 对齐），提升了张量视图操作的效率。[PR #28851](https://github.com/ggml-org/llama.cpp/pull/28851)
- **Q4_0 KV 缓存快速路径（进行中）：** 为 Vulkan 闪注意中的 Q4_0 KV 缓存新增反量化+转置快速路径，解决了 FirePro D700 等老旧 GCN1 GPU 上性能不佳的问题。[PR #30738](https://github.com/ggml-org/llama.cpp/pull/30738)
- **协作矩阵闪注意分块尺寸适配（进行中）：** 根据设备能力推导 coopmat1 闪注意的分块形状，修复了配备 8x16x16 DPAS 计算单元的 Intel BMG GPU 上静默回退到标量路径的问题。[PR #30351](https://github.com/ggml-org/llama.cpp/pull/30351)

### SYCL / 英特尔 GPU
- **Q8 快速反量化：** 英特尔 Arc Pro B70 上的提示词评估速度提升 2.11–5.5%，原始内核带宽从 437.4 GB/s 提升至 636.9 GB/s，且无 PPL 损失。[PR #30752](https://github.com/ggml-org/llama.cpp/pull/30752) / [PR #30775](https://github.com/ggml-org/llama.cpp/pull/30775)
- **ESIMD FFN 路径恢复：** 重新启用了 FFN 路径上的 ESIMD 内核，并扩展了英特尔 GPU 上 Q8_0 量化的融合支持。[PR #30239](https://github.com/ggml-org/llama.cpp/pull/30239)

### MoE 与服务端
- **MoE 专家 GPU LRU 缓存（进行中）：** 移植了 qvac-fabric 的 MoE 缓存实现，针对小批次（≤32 token）场景将驻留在主机的专家缓存到 GPU LRU 中，仅上传未命中的专家，降低大型 MoE 模型的主机-GPU 传输开销。[PR #29887](https://github.com/ggml-org/llama.cpp/pull/29887)
- **槽位调度优化（进行中）：** 在处理共享前缀时优先访问父槽位，再访问子槽位，提升了具有公共提示词前缀的请求的批处理效率。[PR #30779](https://github.com/ggml-org/llama.cpp/pull/30779)

### 用户体验 / 工具
- **HF Hub 模型发现：** UI 现在支持直接从 Hugging Face Hub 发现和下载模型，并能解析 `Q4_0-mtp` 等量化标签的附属文件。[PR #29584](https://github.com/ggml-org/llama.cpp/pull/29584)
- **目标大小量化（进行中）：** 自动为每个张量选择最优量化类型，以最小误差达到用户指定的文件大小或每比特权重目标。[PR #15550](https://github.com/ggml-org/llama.cpp/pull/15550)

---

## 5. 稳定性与回归问题
按严重程度排序（影响范围 + 评论活跃度）：
1. **高危：RTX 5090 笔记本（sm_120）CUDA 图挂起** — Blackwell 移动端 GPU 上，CUDA 图会触发 GPU 通道挂起（RC 看门狗 + Xid 8）；临时解决方案：设置 `GGML_CUDA_DISABLE_GRAPHS=1`。目前尚无修复 PR 合并。[Issue #27330](https://github.com/ggml-org/llama.cpp/issues/27330)
2. **高危：Vulkan ANV 闪注意 O(N²) 预填充性能退化** — 英特尔 Arc B580 + ANV 驱动上，闪注意回退到标量路径，导致长上下文下预填充速度严重下降并出现设备丢失。目前尚无修复 PR 合并。[Issue #27638](https://github.com/ggml-org/llama.cpp/issues/27638)
3. **高危：多 GPU 下 draft-MTP 预填充变慢** — 当层拆分到多个 CUDA GPU 时，draft-mtp 的提示词处理速度约降低一半；单 GPU 运行不受影响。目前尚无修复 PR 合并。[Issue #27428](https://github.com/ggml-org/llama.cpp/issues/27428)
4. **中危：量化目标上推测解码输出不一致** — 当目标模型经过量化时，贪心式草稿模型推测解码的输出与普通运行结果不同（bf16 目标一致；ngram 推测正常）。目前尚无修复 PR 合并。[Issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618)
5. **中危：近期构建中 Vulkan 性能回归** — RX 6600 + Vulkan 在近期构建中出现可观测的性能下降；根本原因正在调查中。目前尚无修复 PR 合并。[Issue #24066](https://github.com/ggml-org/llama.cpp/issues/24066)
6. **中危：SM_60（Tesla P100）质量下降** — sm_60 GPU 上 FP32 数学运算被静默改为 FP16 执行，导致推理质量下降；下游分支已有修复，但上游尚未合并。[Issue #25593](https://github.com/ggml-org/llama.cpp/issues/25593)
7. **低危：/metrics 端点导致服务停止处理请求** — Windows + CUDA 构建中，VictoriaMetrics 抓取 /metrics 端点时会导致请求处理静默中断。目前尚无修复 PR 合并。[Issue #29104](https://github.com/ggml-org/llama.cpp/issues/29104)

---

## 6. 对应用开发者的影响
- **MoE 部署成本降低：** 即将推出的 GPU 驻留 MoE 专家 LRU 缓存，支持通过部分 GPU 卸载运行更大的 MoE 模型，且无需为每个 token 承担完整的主机-GPU 传输延迟，尤其适用于代理部署等小批量、低并发的工作负载。
- **平台部署注意事项：**
  - 目前在 RTX 5090 笔记本 / sm_120 硬件上请避免使用 CUDA 图；设置 `GGML_CUDA_DISABLE_GRAPHS=1` 以防止挂起。
  - 使用英特尔 Arc GPU + Vulkan 的用户，如果闪注意性能异常偏低，可等待协作矩阵分块尺寸适配 PR 合并。
  - 本周 Hexagon NPU 部署获得了实用的低比特量化支持（Q1_0/Q2_0），提升了边缘推理的部署密度。
- **推测解码注意事项：** 如果你依赖草稿模型推测解码的确定性贪心输出，请针对目标量化模型测试输出一致性；如果需要完全一致，请使用 bf16 目标或 ngram 推测。
- **服务端效率提升：** 即将推出的共享前缀槽位调度优化，将提升使用 llama-server 槽位 API、带有公共系统提示词的工作负载（如代理框架、企业聊天机器人）的批处理效率。
- **用户体验改进：** 内置的 HF Hub 模型下载功能简化了桌面应用的终端用户上手流程，无需手动管理模型文件。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 每周精选 — 2026-10-19
*数据来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)*

---

## 1. 过去 7 天亮点
Ollama 发布了 4 个版本（v0.40.4 至 v0.40.7-rc0），核心更新包括 CLI 原生决策模型支持、NVIDIA Nemotron 3.5 Super 视觉语言模型集成、推测解码优化，以及更广泛的 OpenAI API 兼容性。基于 llama.cpp RPC 实现的分布式推理正在积极开发推进中；与此同时，AMD Vulkan/ROCm 功能退化和 Windows 自启动异常成为用户反馈最多的问题。项目还收到了一波来自生态的集成 PR，覆盖 IDE 智能体、RAG 工具和跨平台智能体框架等领域。

---

## 2. 版本发布与破坏性变更
- **v0.40.7-rc0**（预发布版本）：
  - 兼容 OpenAI 的 Responses API 现已支持非思考模型的 `effort` 参数。[PR #19010](https://github.com/ollama/ollama/pull/19010)
  - `llama-server` 现在可自动推断草稿推测解码类型。[PR #19064](https://github.com/ollama/ollama/pull/19064)
  - MLX 后端新增 PPLX Decider v1.2 支持（源数据中发布说明有截断）。
- **v0.40.6**：
  - Windows：修复了孤立运行器进程的问题。[PR #18500](https://github.com/ollama/ollama/pull/18500)
  - GGUF 新增 `q2_0` 张量和文件类型支持。[PR #18967](https://github.com/ollama/ollama/pull/18967)
  - 为 Ollama Cloud 新增了 Clef 启动集成（发布说明有截断）。
- **v0.40.5**：新增 [NVIDIA Nemotron 3.5 Super](https://ollama.com/library/nemotron-3.5-super) —— 这是一个 120B 参数的混合 Mamba-2/Transformer MoE 视觉语言模型（每个 token 的激活参数为 12B）。
- **v0.40.4**：通过 `ollama run --ask` 引入 CLI 决策模型支持（可用于是/否问题、分类、评分标准打分等场景，例如 `ollama run nimble --ask "Is a refund being requested?" < ticket.txt`）。发布说明中提及了 Kev 决策模型支持（内容有截断）。
- **未报告破坏性 API 变更**；所有版本均保持向后兼容。

---

## 3. 新增模型与硬件支持
### 模型
- NVIDIA Nemotron 3.5 Super（支持视觉语言、编码、推理、工具调用、文档理解）：[发布页面](https://ollama.com/library/nemotron-3.5-super)
- PPLX Decider v1.2（MLX 后端，v0.40.7-rc0 版本支持）
- CLI 端扩展了对决策模型系列的支持（v0.40.4 版本）
- 社区请求提供可下载的 `deepseek-v4.1-flash` 模型文件：[Issue #18379](https://github.com/ollama/ollama/issues/18379)

### 硬件/后端
- **瑞芯微 NPU**（RK3588/RK3576）：有两个公开的功能需求 issue，提及了社区 `rkllama` 参考实现。[Issue #15393](https://github.com/ollama/ollama/issues/15393) · [Issue #9268](https://github.com/ollama/ollama/issues/9268)
- **分布式多机推理**：基于 llama.cpp RPC 机制的 PR 正在开发中（已在 macOS 上测试，并修复了竞态条件）。[PR #10844](https://github.com/ollama/ollama/pull/10844)（对应功能需求追踪：[Issue #4643](https://github.com/ollama/ollama/issues/4643)，61 个赞，49 条评论）
- 新增量化格式：`q2_0` GGUF 张量/文件类型。[PR #18967](https://github.com/ollama/ollama/pull/18967)

---

## 4. 性能与优化
- **推测解码**：`llama-server` 可自动推断草稿推测类型，降低配置开销。[PR #19064](https://github.com/ollama/ollama/pull/19064)
- **MLX 内存**：修复了 8 GiB 前缀缓存预算导致 32 GB Apple Silicon 设备在运行智能体工作负载时出现严重交换的问题（已确认缓存增长属于预期行为，并非内存泄漏；硬编码限制是问题根源）。[Issue #18131](https://github.com/ollama/ollama/issues/18131) · 相关已关闭的内存增长报告：[Issue #17924](https://github.com/ollama/ollama/issues/17924)
- **MLX 决策模型性能**：在 M5 Pro 上，量化后的决策模型预填充阶段运行速度比 bf16 版本慢。[Issue #18833](https://github.com/ollama/ollama/issues/18833)（已关闭，未合并修复方案）
- **多 GPU 负载均衡**：在 2 卡配置中，层分配不均会导致首张 GPU 的显存占用更高。[Issue #7047](https://github.com/ollama/ollama/issues/7047)
- **工具调用流式输出**：已关闭的 PR 为工具调用相邻的文本添加了选择性流式输出（此前工具调用会禁用所有流式输出）。[PR #9973](https://github.com/ollama/ollama/pull/9973)

---

## 5. 稳定性与功能退化
按严重程度排序（影响范围 × 用户量）：
1. **[严重] 云服务降级（Pro 套餐）** — `/v1/chat/completions` 接口无 HTTP 响应，排队请求 5 分钟后超时，随后返回 429 并发槽位错误；问题始于 2026-10-16。[Issue #19111](https://github.com/ollama/ollama/issues/19111) · *未找到对应修复 PR*
2. **[高] `glm-5.3-flash:cloud` 生成内容损坏** — 失败率 5-8%，输出大幅退化，已确认是服务端问题（集群 829 数据区全零）；问题始于 2026-10-12。[Issue #18980](https://github.com/ollama/ollama/issues/18980) · *未找到对应修复 PR*
3. **[高] AMD ROCm 功能退化（gfx1010）** — Ollama 0.35.1 在 Radeon Pro W5700 上推理时崩溃，报错 `GGML_ASSERT(max_blocks_per_sm > 0)`。[Issue #19075](https://github.com/ollama/ollama/issues/19075) · *未找到对应修复 PR*
4. **[中] AMD Vulkan 返回空响应** — 通过 Vulkan 在 Radeon Pro 5700 XT（16 GB）上运行 `gpt-oss:20b` 时输出为空；CPU 推理正常。[Issue #19060](https://github.com/ollama/ollama/issues/19060) · *未找到对应修复 PR*
5. **[中] Windows 未经授权自动启动** — 反复出现的问题：尽管禁用了自动更新且已从启动列表中移除，Ollama 仍会在开机时启动。历史已关闭 issue：[Issue #8783](https://github.com/ollama/ollama/issues/8783)；新的未关闭报告：[Issue #19067](https://github.com/ollama/ollama/issues/19067) · *v0.40.6 的孤立运行器补丁部分解决了该问题，但自启动行为仍未完全修复*
6. **[中] 种子值精度丢失** — 大于 2^53 的整数 `seed` 值在以 float64 解码时会丢失精度，导致不同的种子值生成相同的输出。[Issue #19078](https://github.com/ollama/ollama/issues/19078) · *未找到对应修复 PR*
7. **[中] GSQ-RCO 量化模型导入失败** — 导入 GSQ-RCO 量化的 Qwen3.8-Flash-Next GGUF 文件时报错 `unsupported tensor size overflows`（该文件在其他推理引擎中可正常使用）。[Issue #18817](https://github.com/ollama/ollama/issues/18817)（已关闭）
8. **[低] 上下文长度报告不一致** — `OLLAMA_CONTEXT_LENGTH` 限制未在 `/api/show` 或 `/api/tags` 响应中体现。[Issue #18995](https://github.com/ollama/ollama/issues/18995)
9. **[低] Windows 控制台窗口闪烁** — 在后台运行 `ollama serve` 时，GPU 检测子进程会弹出可见的黑色控制台窗口。[Issue #18954](https://github.com/ollama/ollama/issues/18954)
10. **[低] `ollama ps` 显存报告不准确** — 在 ROCm 上使用 mtp-accelerator 模型时，报告的显存使用量与实际值存在显著差异。[Issue #17251](https://github.com/ollama/ollama/issues/17251)

### 进行中的解析器/API 修复 PR（减少正确性相关 bug）：
- 从尾部噪声中恢复 Gemma4 工具调用：[PR #19112](https://github.com/ollama/ollama/pull/19112) · 重复的已关闭 PR：[Issue #18664](https://github.com/ollama/ollama/issues/18664)
- Qwen3 `<think>` 标签空白字符修剪：[PR #19108](https://github.com/ollama/ollama/pull/19108)
- OLMo3 `</think>` 尾部空白字符修剪：[PR #19104](https://github.com/ollama/ollama/pull/19104)
- OpenAI Responses API 流事件中 `created_at` 字段保持一致：[PR #19106](https://github.com/ollama/ollama/pull/19106)
- 针对复用调用 ID 的 OpenAI 工具名称解析：[PR #19114](https://github.com/ollama/ollama/pull/19114)
- Anthropic 流式输出中文本/工具调用后的思考块处理：[PR #19110](https://github.com/ollama/ollama/pull/19110)

---

## 6. 对应用开发者的影响
- **决策模型工作流**：你现在可以直接基于 Ollama CLI 构建轻量级分类/提取流水线，无需编写自定义封装代码，适用于支持工单分类、内容审核和基于评分标准的打分等场景。批量处理可使用 `ollama run --ask`。
- **OpenAI 兼容性提升**：Responses API 的 `effort` 参数和流式输出一致性修复（进行中）降低了应用从 OpenAI 迁移到 Ollama 的成本；如果你依赖 Responses API 流式输出，可基于 v0.40.7-rc0 进行测试。
- **云服务可靠性提醒**：截至 2026-10-16，Ollama Cloud Pro 用户遭遇了持续多日的服务降级 —— 生产工作负载请实现客户端重试机制，并备用本地推理或其他服务商方案。
- **AMD GPU 使用注意**：近期版本中，使用 RDNA1（gfx1010）架构 ROCm 和 Vulkan 的用户会遇到崩溃或空输出问题；如果你依赖这些配置，建议暂缓升级，或改用 v0.40.4 及更早版本测试。
- **分布式推理即将到来**：正在开发的 RPC PR 意味着多机推理对于自托管部署而言已接近可用状态 —— 如果你需要突破单节点 GPU 限制，可关注 [PR #10844](https://github.com/ollama/ollama/pull/10844)。
- **工具调用稳定性提升**：针对 Gemma 4、Qwen3 和 OLMo3 的多项解析器修复将减少智能体工作流中工具调用丢失的问题 —— 这些修复预计将在下一个版本周期中上线。
- **生态扩展**：JetBrains IDE（Refio）、波斯语/英语 RAG（ParsRAG）、Kotlin 多平台智能体（Telar）和 Talos 智能体启动器等新的集成方案，为你将 Ollama 集成到自身技术栈提供了更多现成选项。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 每周摘要 | 2026-10-19
---

## 1. 过去 7 天亮点
本周 LiteLLM 在供应链安全方面取得进展：所有新版本均采用标准化的 Cosign 镜像签名；推进了基于 Rust 的推理路径重构，以提升功能一致性和可维护性；同时修复了一系列高优先级稳定性问题，覆盖预算管控、流式传输正确性以及跨提供商翻译等方面。新的提供商集成（OceanToken）以及提供商模型目录更新的相关 PR 也已进入活跃开发阶段。

## 2. 版本发布与破坏性变更
过去 7 天发布的所有版本均包含可验证的 Cosign 签名 Docker 镜像，所使用的密钥在 [提交 `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 中引入。新版本如下：
- **v1.107.0-rc.1**（候选发布版）
- **v1.106.0**（稳定版）
- **v1.105.1**、**v1.103.5**（稳定补丁版）
- v1.107.0-dev.1/2/3 和 v1.106.0-rc.2/3/4（预发布构建版）

已发布的版本说明中未公布明确的 API 破坏性变更。

## 3. 新模型与硬件支持
- **新提供商开发中：** OceanToken 已作为支持 JSON 配置、兼容 OpenAI 的提供商接入，支持通过 `OCEANTOKEN_API_KEY` 认证调用 `oceantoken/<publisher>/<model>` 格式的接口。
  PR: [BerriAI/litellm#47287](https://github.com/BerriAI/litellm/pull/47287)
- **提供商目录更新：** 鉴于 CoralBricks 已于 2026-10-18 停止运营，已从成本映射和模型占位符中移除其 GLM 5.3 系列变体（`glm-5.3`、`glm-5.3-fast`、`glm-5.3-fp4`）。
  PR: [BerriAI/litellm#47286](https://github.com/BerriAI/litellm/pull/47286)
- **Gemini 2.5 惩罚参数修复：** 禁用 Gemini 2.5 模型不支持的惩罚参数，以避免上游返回 400 错误。
  PR: [BerriAI/litellm#32273](https://github.com/BerriAI/litellm/pull/32273)

## 4. 性能优化
- **Rust 推理重构：** 共 5 个重构 PR 将 Rust `prepare.rs` 中的各个阶段整合到对应处理器中（`inference-chat`、`inference-messages`、`inference-ocr`、`inference-responses`、`inference-transcription`），减少了代码重复，修复了顺序错误（例如环境变量验证先于请求转换执行的问题），并使 Rust 路径与 Python 处理器的语义保持一致。
  PRs: [#47218](https://github.com/BerriAI/litellm/pull/47218)、[#47217](https://github.com/BerriAI/litellm/pull/47217)、[#47216](https://github.com/BerriAI/litellm/pull/47216)、[#47215](https://github.com/BerriAI/litellm/pull/47215)、[#47214](https://github.com/BerriAI/litellm/pull/47214)
- **Rust 提示缓存支持：** 已将原生 `cache_control` 断点注入功能移植到 Rust 的类型化 Messages 请求中，因此 Anthropic `/v1/messages` 接口可遵循网关的提示缓存设置。
  PR: [BerriAI/litellm#47284](https://github.com/BerriAI/litellm/pull/47284)
- **vLLM 缓存令牌成本可视化：** 将 `prompt_tokens_details.cached_tokens` 映射到 `cache_read_input_tokens`，使成本计算器和代理 UI 能够正确显示 vLLM 后端的缓存读取令牌使用量。
  PR: [BerriAI/litellm#22986](https://github.com/BerriAI/litellm/pull/22986)
- **Responses API TPM 估算修复：** 在估算 Responses API 的 TPM 时跳过 base64 编码的图片字节，避免图片令牌被严重多计入速率限制。
  PR: [BerriAI/litellm#32891](https://github.com/BerriAI/litellm/pull/32891)（已关闭 / 过时）

## 5. 稳定性与回归问题
按推断的严重程度排序：

1. **[严重] v1.82.3 版本预算管控失效** — 密钥和用户的 `max_budget` 均未生效，导致无限制消费。目前暂无关联的修复 PR。
   Issue: [BerriAI/litellm#26672](https://github.com/BerriAI/litellm/issues/26672)
2. **[高] 预算限制拦截零成本模型** — 未配置成本的免费/本地部署模型，在用户预算耗尽时仍会抛出 `ExceededBudget` 错误。Issue 已关闭，但未说明修复状态。
   Issue: [BerriAI/litellm#14004](https://github.com/BerriAI/litellm/issues/14004)
3. **[高] 内存泄漏 / 内存持续增长** — Kubernetes 上的 LiteLLM Pod 内存持续增长，直至 OOM 崩溃。根本原因仍在调查中。
   Issue: [BerriAI/litellm#27954](https://github.com/BerriAI/litellm/issues/27954)
4. **[高] 流式推理/工具调用翻译 Bug** — Anthropic `/v1/messages` 流式传输存在多个翻译问题：
   - 推理模型将 `thinking_delta` 放在文本块中流式传输，并重复发送 `message_start`，导致 Anthropic SDK / Claude Code 中内容为空。
     Issue: [BerriAI/litellm#32357](https://github.com/BerriAI/litellm/issues/32357)
   - 通过 Anthropic 适配层对接 OpenAI 格式提供商时，`stop_sequences` 未转换为 `stop`（返回 400 错误）。
     Issue: [BerriAI/litellm#33075](https://github.com/BerriAI/litellm/issues/33075)（已关闭）
   - 经 Gemini 提供商调用 Gemma 4 31B 时，流式传输中的工具调用输入丢失。
     Issue: [BerriAI/litellm#25390](https://github.com/BerriAI/litellm/issues/25390)
   无签名思维块保留功能的修复 PR: [BerriAI/litellm#33035](https://github.com/BerriAI/litellm/pull/33035)（已关闭 / 过时）
5. **[高] 上游无响应时 `request_timeout` 未触发** — 若上游接受 TCP 连接但始终不返回数据，流式请求的配置超时机制不会触发。
   Issue: [BerriAI/litellm#38358](https://github.com/BerriAI/litellm/issues/38358)
6. **[中] 虚拟密钥编辑错误要求企业版权限** — 向现有虚拟密钥添加模型时，即使功能不涉及企业版特性，也会抛出仅企业版可用的错误。已关闭。
   Issue: [BerriAI/litellm#15230](https://github.com/BerriAI/litellm/issues/15230)
7. **[中] MCP 正确性缺陷** — 多个与 MCP 相关的问题：
   - 固定的 MCP 工具忽略 `annotations` 和 `outputSchema`，导致无法检测 `readOnlyHint` 偏移。
     Issue: [BerriAI/litellm#44093](https://github.com/BerriAI/litellm/issues/44093)
   - 对接托管 vLLM 后端时，MCP 工具转换丢失 `function` 包装键（返回 400 错误）。
     Issue: [BerriAI/litellm#32281](https://github.com/BerriAI/litellm/issues/32281)（已关闭）
   - Responses 路径中缺少 `mcp` 模块导入错误。
     Issue: [BerriAI/litellm#46045](https://github.com/BerriAI/litellm/issues/46045)
   MCP 资源列表的用户身份透传 PR: [BerriAI/litellm#33078](https://github.com/BerriAI/litellm/pull/33078)（已关闭 / 过时）
8. **[中] UI / 身份认证回归** —
   - 反向代理后升级到 v1.88.x 版本后，管理 UI 会重定向到内部 Docker IP。
     Issue: [BerriAI/litellm#30118](https://github.com/BerriAI/litellm/issues/30118)
   - OAuth2-proxy 单点登录绕过 `custom_ui_sso_sign_in_handler`，直接重定向到 `/ui/login`。
     Issue: [BerriAI/litellm#19856](https://github.com/BerriAI/litellm/issues/19856)（已关闭）
   - 代理不再向非管理员用户显示模型列表。
     Issue: [BerriAI/litellm#17475](https://github.com/BerriAI/litellm/issues/17475)
9. **[中] 消费日志 ID 冲突** — 提供商响应 ID 重复使用，导致不同的代理调用在消费日志中发生冲突（主键相同）。
   Issue: [BerriAI/litellm#35563](https://github.com/BerriAI/litellm/issues/35563)
10. **[低-中] Langfuse 请求头未转发** — `langfuse_trace_user_id` 等请求头未传递到 Langfuse API。
    Issue: [BerriAI/litellm#13901](https://github.com/BerriAI/litellm/issues/13901)

## 6. 对应用开发者的影响
- **安全态势升级：** 若在受监管或安全敏感环境中运行 LiteLLM，现在可使用已发布的密钥通过 Cosign 验证 Docker 镜像签名，以保障供应链完整性。
- **预算功能用户：升级前请审计** — 若依赖 `max_budget` 管控功能，请避开 v1.82.3 版本，并在所选版本上线生产前验证预算行为；零成本模型和 `budget_duration` 持久化的相关修复正在进行中，但尚未全部完成。
- **兼容 Anthropic 的端点：请仔细测试流式功能** — 对接非 Anthropic 后端（OpenAI 格式、Gemini）时，推理模型和工具调用存在多个流式传输翻译 Bug。若向 Claude Code 或 Anthropic SDK 客户端提供 `/v1/messages` 接口，请在升级前对流式传输 + 工具调用进行端到端测试。
- **MCP 集成：请验证固定功能与后端兼容性** — MCP 固定工具的偏移检测功能不完善（缺少注解/模式校验），且部分 vLLM / Responses 路径的 MCP 流程存在问题；在 #44093 问题解决前，建议安全敏感的工具目录暂不启用 MCP 固定功能。
- **Rust 性能路径日趋成熟：** Rust 推理处理器正在整合，并逐步与 Python 语义对齐；早期采用 Rust 代理路径的用户可关注这些重构，以获得更好的正确性和未来的性能提升。

---

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 每周动态 | 2026-10-19
来源：[github.com/unslothai/unsloth](https://github.com/unslothai/unsloth)

---

## 1. 过去7天亮点
Unsloth 上周发布了3个 beta 版本，核心更新包括对 NVIDIA Nemotron 3.5 和 Meta Muse Spark Open 的原生支持，以及本地模型完整的浏览器控制能力。团队还大幅优化了 UI 与推理性能（多对话用户体验提速最高达10倍，推理提速最高达5倍），并合并了20余个 PR，覆盖训练优化、Studio 体验升级和边缘场景问题修复。

---

## 2. 版本发布与破坏性变更
| 版本 | 核心变更 |
|---------|-------------|
| [v0.1.908-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.908-beta) | 新增对 NVIDIA Nemotron 3.5 和 Meta Muse Spark Open 的支持；推出文本扩散 LLM 训练、DeepSpeed 训练集成，并优化了编码智能体的提示词缓存。 |
| [v0.1.907-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.907-beta) | 带来重大性能升级：多对话工作流的 UI/UX 提速最高达10倍，推理速度提升最高达5倍（缓存命中率95%、MoE Strata 问题修复），并优化了全量 API 的内存紧凑性。 |
| [v0.1.906-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.906-beta) | 上线浏览器使用能力（模型可对网页执行打开、读取、点击、输入和滚动操作）；新增对 Qwen-Image-2.1-Turbo 的支持（8步图像生成）、文本扩散 LLM 训练、更快的 MoE GGUF，以及 Metal 上的推测解码。 |

版本说明中未提及破坏性 API 变更。

---

## 3. 新增模型与硬件支持
- **新模型**：
  - NVIDIA Nemotron 3.5 Bolt（24 GB 显存即可运行）[指南](https://unsloth.ai/docs/models/nemotron)
  - Meta Muse Spark Open（文本扩散 LLM）
  - Qwen-Image-2.1-Turbo（8步图像生成）
- **高关注度待支持模型（按互动量排序）**：
  - Voxtral 多语言多模态模型 ([#3013](https://github.com/unslothai/unsloth/issues/3013), 14 👍)
  - Ling 3.0 ([#8532](https://github.com/unslothai/unsloth/issues/8532), 5 👍)
- **硬件/量化**：
  - AWQ 支持功能请求已关闭 ([#464](https://github.com/unslothai/unsloth/issues/464))
  - AMD GPU 兼容性修复正在进行中（RX 5700XT 识别问题 [#8529](https://github.com/unslothai/unsloth/issues/8529)、RDNA 2 PyTorch 绑定问题 [#14057](https://github.com/unslothai/unsloth/issues/14057)、Strix Halo Docker GPU 透传问题 [#5405](https://github.com/unslothai/unsloth/issues/5405)）
- **基础设施**：
  - DeepInfra 已作为原生 API 提供商接入 Studio，并支持服务等级配置 ([PR #14149](https://github.com/unslothai/unsloth/pull/14149))

---

## 4. 性能与优化
- **推理**：
  - 通过95%的缓存命中率、MoE Strata 风格修复及性能下降问题解决，推理速度最高提升5倍（v0.1.907-beta）
  - 修复 Qwen3 解码 RoPE 缓存问题，避免显式位置上的越界索引 ([PR #14156](https://github.com/unslothai/unsloth/pull/14156))
- **训练**：
  - 上下文并行优化：仅在启用上下文并行时封装训练器方法，降低非上下文并行工作负载的开销 ([PR #14152](https://github.com/unslothai/unsloth/pull/14152))
  - 修复 DTensor/FSDP2 检查点恢复时的优化器状态卸载问题 ([PR #14155](https://github.com/unslothai/unsloth/pull/14155))
  - FSDP2 QLoRA 修复：避免加载器 dtype 传递过程中4位权重损坏，并修复 merged_4bit 保存问题 ([PR #14165](https://github.com/unslothai/unsloth/pull/14165))
  - 混合打包 + 块编译修复，解决守卫崩溃、可变长度跳过和跨文档泄漏问题 ([PR #13956](https://github.com/unslothai/unsloth/pull/13956))
  - 预构建 wheel 包体积缩减：移除 -lineinfo、不可达 SASS 和 flash-attn PTX；新增无扩展依赖的 mamba-ssm ([PR #14142](https://github.com/unslothai/unsloth/pull/14142))
- **UI/UX**：
  - 多对话 UI/UX 提速最高达10倍（v0.1.907-beta）
  - 优化全量 API 和 UI 的内存紧凑性（v0.1.907-beta）

---

## 5. 稳定性与回归问题
### 高优先级
1. **长上下文对话延迟** ([#12552](https://github.com/unslothai/unsloth/issues/12552))：在 Windows 10 + RTX GPU 环境下上报，桌面端应用和网页 UI 均受影响。2026-10-17 关闭（通过 v0.1.907-beta 的性能升级解决）。
2. **模型重载时 KV 缓存丢失** ([#9037](https://github.com/unslothai/unsloth/issues/9037))：开放中。由于槽位 KV 仅在空闲自动卸载时保存，模型重载后长对话会重新执行完整预填充。暂未关联修复 PR。
3. **Qwen2.5 72B 4位量化在32k上下文下显存不足** ([#2937](https://github.com/unslothai/unsloth/issues/2937))：已关闭。在 A800 上上报；24k上下文可正常运行。

### 中优先级
1. **UNSLOTH_RETURN_LOGITS 环境变量被重置** ([#3071](https://github.com/unslothai/unsloth/issues/3071))：已关闭（修复待确认）。在 Gemma 3 上训练开始时变量会被重置为 "0"。
2. **Mistral 3.1/3.2 SFT 损失异常偏高** ([#2786](https://github.com/unslothai/unsloth/issues/2786))：已关闭。
3. **Windows 上 Gemma4 e2b 生成失败** ([#13696](https://github.com/unslothai/unsloth/issues/13696))：已关闭。训练成功但推理无输出。
4. **Windows MXC Sandbox 启用失败** ([#13656](https://github.com/unslothai/unsloth/issues/13656))：已关闭。Windows 11 上说明不清晰且启用报错。

### 低优先级 / UI 问题
1. **Linux AppImage 窗口调整大小异常** ([#12845](https://github.com/unslothai/unsloth/issues/12845))：开放中。影响 Arch/GNOME/Wayland 环境，伴随帧率问题。
2. **多用户模型同步问题** ([#12365](https://github.com/unslothai/unsloth/issues/12365))：已关闭。同一服务器的多个局域网账号显示的模型加载状态不正确。

---

## 6. 对应用开发者的影响
- **生产推理升级**：v0.1.907-beta 中5倍的推理速度提升和95%的缓存命中率可直接降低对话/智能体工作负载的延迟和成本——如果运行多轮对话应用，建议优先升级。
- **新模型选择**：Nemotron 3.5（24GB 显存占用）和 Muse Spark Open 拓展了企业与创意场景下的本地部署选项，无需依赖云服务。
- **智能体能力**：原生浏览器控制（v0.1.906-beta）让网页导航智能体无需依赖外部工具栈，降低了集成复杂度。
- **训练可扩展性**：上下文并行和 FSDP2 QLoRA 的优化为多 GPU 环境下的更大规模微调工作负载扫清了障碍，同时提升了70B+ 参数模型的内存效率。
- **Studio 体验优化**：图像编辑、拖拽式资源复用、按模型保存采样预设记忆，以及优化的音频错误处理，简化了在 Unsloth 平台上构建多媒体工作流的流程。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*