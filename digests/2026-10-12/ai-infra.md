# AI 基础设施周报 2026-10-12

> 生成时间: 2026-10-12 02:13 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# 跨项目AI基础设施生态报告 — 2026-10-12
*数据来源：vLLM、SGLang、llama.cpp、Ollama、LiteLLM、Unsloth的GitHub公开活动记录*

---

## 1. 生态概览
过去7天内，AI基础设施的四大核心层均呈现密集进展：前沿闪存模型的推理引擎优化、面向低延迟部署的LLM网关Rust迁移、支持多模态与MoE工作负载的边缘运行时扩展，以及决策模型与扩散语言模型工作流的微调框架集成。稳定性回归仍是各推理引擎的首要痛点，尤其是在Blackwell（SM120）GPU上搭配推测解码与前缀缓存运行DeepSeek-V4.1-Flash和GLM-5.3-Flash时问题突出。边缘与本地运行时正优先提升大型MoE模型的跨平台兼容性与内存效率，网关与微调工具则在竞相原生支持工具调用、决策模型、MCP集成等智能体专属工作负载。供应链与安全加固的优先级也有所提升：LiteLLM修复了一起Trivy入侵问题，Unsloth解决了诊断报告中的API密钥泄漏漏洞。

---

## 2. 活跃度对比
| 项目 | 发布状态（过去7天） | 跟踪的未解决Issue数 | 跟踪的未合并PR数 | 核心活动方向 |
|---------|-------------------------------|---------------------|------------------|------------------------|
| vLLM | v0.31.0（重大版本，717次提交） | 约14个高/严重优先级问题 + 功能请求 | 约12个 | Blackwell兼容性、KV缓存正确性、MoE优化 |
| SGLang | 无正式版本发布 | 约6个跟踪问题 | 约10个 | DeepSeek-V4.1稀疏预填充、DSA/MTP模型的DCP支持、CI稳定性 |
| llama.cpp | 10个增量构建版本（b11550–b11559） | 约6个跟踪回归问题 | 约8个 | OpenCL/Vulkan内核优化、服务端稳定性、MoE内存效率 |
| Ollama | 3个补丁版本（v0.40.1–v0.40.3） | 约10个跟踪Bug | 约8个 | 工具调用解析器修复、Windows GPU回归问题修复、llama.cpp依赖升级 |
| LiteLLM | 5个稳定版 + 2个预发布版 + 3个开发构建版 | 约15个跟踪Bug | 约12个 | Rust网关迁移、服务商适配修复、预算管控 |
| Unsloth | 2个Beta版本（v0.1.904/905-beta） | 约6个跟踪问题 | 约10个 | 决策模型训练、KV缓存抢占、跨平台沙箱 |

---

## 3. 模型支持竞速
新模型支持能力分散在各层级，没有单一项目在所有类别中保持领先：
- **前沿闪存/MLA模型**：vLLM与SGLang最为活跃，vLLM在v0.31.0中上线了DeepSeek-V4.1-Flash SM100的默认优化，SGLang发布了DeepSeek-V4.1-Flash在Blackwell SM120上的生产环境实测报告。两者都在积极修复GLM-5.3-Flash的兼容性缺口。
- **多模态模型**：llama.cpp上线了MiniCPM-V 4.7支持，SenseNova U1适配正在开发中；Ollama通过升级llama.cpp新增EmbeddingGemma 2支持；Unsloth扩展了文本扩散语言模型家族（LLaDA、Dream、DiffusionGemma等）的支持，并修复了Qwen-Image-2.1 GGUF的分类问题。
- **专用架构模型**：
  - Llama.cpp新增Prism Bonsai 2 27B支持，字节跳动Ouro循环语言模型与H2O-Lightning-4B决策模型的适配正在进行中。
  - Unsloth推出了端到端的Jev风格决策模型训练/部署工作流。
  - Ollama正在新增混合/循环模型并行槽位支持。
- **服务商集成（网关层）**：LiteLLM新增ai&服务商支持，正在修复与小米MiMo、Qwen3-TTS、ElevenLabs音频模型的兼容性问题。

**细分领域领先情况**：vLLM/SGLang领跑数据中心前沿模型推理；llama.cpp领跑边缘/多模态/另类架构支持；Unsloth领跑新兴模型类型（决策模型、扩散语言模型）的微调。

---

## 4. 性能前沿
优化工作集中在六大高影响领域：
1. **KV缓存创新**：vLLM正在开发面向智能体工作负载的上下文感知优先驱逐机制，并向外层路由开放前缀缓存元数据；SGLang正在重构其统一基数缓存；Unsloth正在构建带主机内存槽位暂存的KV缓存抢占能力，用于多轮对话工作负载。
2. **前沿模型内核优化**：vLLM与SGLang都在优先推进Blackwell SM120闪存模型内核（FlashMLA、稀疏MLA、DeepGEMM MoE路由）的优化，vLLM主攻FlashInfer稀疏MLA解码内核，SGLang则在研发支持1M token上下文的稀疏预填充组共享技术。
3. **MoE效率提升**：llama.cpp正在探索大型MoE模型的GPU端专家LRU缓存与主机内存DMA技术；vLLM有多项MoE内核融合与Humming MoE重构工作正在推进；SGLang正在集成DeepGEMM MegaGate路由。
4. **推测解码**：所有推理引擎都在解决正确性与效率缺口：vLLM正在修复前缀缓存+MTP的损坏问题；SGLang已解决DSpark CUDA Graph Bug，正在修复NGRAM过采样问题；llama.cpp正在处理量化目标输出发散问题。
5. **网关延迟降低**：LiteLLM的Rust迁移目标是将开销控制在1ms以内，目前已落地钩子、流式传输、短路逻辑、缓存一致性的原生支持。
6. **跨平台后端优化**：llama.cpp上线了MoE与Gemma-4的OpenCL/Vulkan内核加速；Unsloth新增Apple Silicon性能核优化，以及PyTorch 2.13分布式训练的批量梯度拷贝功能。

---

## 5. 各层定位
| 层级 | 项目 | 核心价值主张 | 核心用户 |
|-------|---------|------------------------|--------------|
| **数据中心推理引擎** | vLLM | 面向前沿模型的高吞吐、低延迟服务，支持广泛的硬件与后端 | 云服务商、大规模推理团队 |
| **数据中心推理引擎** | SGLang | 针对闪存/MLA模型的优化服务，支持解码上下文并行与推测解码 | 大规模部署DeepSeek/GLM前沿模型的团队 |
| **边缘/本地运行时** | llama.cpp | 轻量、跨平台的GGUF模型推理引擎，依赖极少 | 边缘部署、本地开发、本地小型工作负载 |
| **边缘/本地运行时（管理层）** | Ollama | llama.cpp的易用封装，提供模型管理、云代理与用户体验工具 | 开发者、技术爱好者、运行本地模型的小型团队 |
| **LLM网关** | LiteLLM | 100+服务商的统一API，支持支出跟踪、路由与策略管控 | 多租户平台、使用混合模型服务商的团队 |
| **微调框架** | Unsloth | 快速、内存高效的微调方案，集成训练、部署与工作流管理的Studio | 微调自定义模型的机器学习团队、智能体开发者 |

---

## 6. 趋势信号
### 行业趋势
1. **前沿闪存模型成熟度滞后**：两家头部推理引擎都存在多个Blackwell + DeepSeek/GLM闪存模型的严重/正确性Bug，表明MLA/闪存架构的软硬件协同设计在生产部署层面仍处于早期阶段。
2. **智能体工作负载推动基础设施演进**：各层项目都在优先开发智能体专属功能：决策模型训练/部署（Unsloth）、工具调用解析器修复（Ollama、LiteLLM）、面向多轮工作流的KV缓存前缀优化（vLLM、SGLang），以及MCP集成（Unsloth、LiteLLM）。
3. **内存效率成为MoE下一个瓶颈**：随着MoE模型参数规模扩展到200B+，边缘与数据中心运行时正从原始吞吐优化转向内存层级创新（GPU专家缓存、主机内存DMA、KV抢占），以在低内存硬件上运行更大的模型。
4. **性能关键路径向底层语言迁移**：LiteLLM的Rust网关迁移、Unsloth基于Rust的脱敏逻辑，都延续了vLLM此前的Rust前端开发趋势，标志着延迟敏感的基础设施层正更广泛地转向原生代码实现。

### 给应用/智能体开发者的可落地建议
- **Blackwell部署**：暂缓在SM120 GPU上生产部署DeepSeek-V4.1-Flash/GLM-5.3-Flash；继续在Hopper/SM100上使用vLLM v0.29.x或经过验证的SGLang配置，直到正确性与吞吐Bug修复完成。
- **智能体工具调用**：在Ollama与vLLM中，不要依赖Qwen系列模型原生`/api/chat`的工具参数；在解析器稳定前，临时将工具定义嵌入系统提示词作为替代方案。
- **多租户网关部署**：立即在LiteLLM上启用`require_auth_for_metrics_endpoint`，在将新的v1.82.3+版本用于成本管控前，先验证预算管控逻辑。定期重启代理以缓解当前存在的内存泄漏问题。
- **边缘MoE部署**：关注llama.cpp的GPU端专家LRU缓存与主机内存DMA研发进展，近期即可在消费级GPU上运行200B+参数的MoE模型。
- **智能体微调**：Unsloth的端到端决策模型工作流无需额外的外部决策中间件；可在智能体路由、工具使用分类场景中评估该方案。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 每周摘要 — 2026-10-12

---

## 1. 过去一周亮点
vLLM 发布了 v0.31.0 版本，包含来自 307 位贡献者（其中 96 位为新贡献者）的 717 次提交，核心更新为 DeepSeek-V4.1-Flash 的 SM100 默认优化，包括支持 NVFP4 压缩 KV 缓存的 FlashMLA mega attention，以及 DeepGEMM 稀疏 MQA logits 支持。社区当前的重点方向仍包括：前沿 flash 模型的 Blackwell (SM120) 兼容性、前缀缓存 + 投机解码场景下的 KV 缓存正确性，以及多模态 ViT CUDA Graph 支持。

---

## 2. 版本发布与破坏性变更
- **v0.31.0 已发布**：
  - 支持 V4.1 NVFP4 压缩 KV 缓存的 FlashMLA mega attention，现已成为 DeepSeek-V4.1-Flash 在 SM100 架构上的默认实现 ([#56935](https://github.com/vllm-project/vllm/issues/56935))
  - 为索引器新增 DeepGEMM 稀疏 MQA logits 支持 ([#56254](https://github.com/vllm-project/vllm/issues/56254))
  *注意：源数据中的发布说明有截断；升级前请查阅完整变更日志。*

---

## 3. 新增模型与硬件支持
| 类别 | 内容 | 状态 | 链接 |
|----------|------|--------|------|
| 量化 | INT8 KV 缓存量化支持需求（当前仅支持 FP8） | 功能需求 (12 👍) | [#33480](https://github.com/vllm-project/vllm/issues/33480) |
| 硬件 | 针对 Qwen3.8-2.4T-A95B Quark-MXFP4 的 AMD MI355X (gfx950) 性能优化计划 | 进行中 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| 硬件/模型 | GLM-5.3-Flash SM120 (Blackwell) 无 rope 稀疏-MLA 路径功能缺失 | 未解决 bug（3 种故障模式） | [#53963](https://github.com/vllm-project/vllm/issues/53963) |
| 硬件/模型 | DeepSeek-V4.1-Flash SM120 缺少 page_block_size=32 的 FlashInfer 稀疏-MLA 解码内核 | 未解决 bug | [#59203](https://github.com/vllm-project/vllm/issues/59203) |
| 多模态 | ViT 全量 CUDA Graph 支持追踪（涉及 Qwen3-VL、GLM-V、Kimi K2.5） | RFC / 寻求贡献 | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| 后端 | 为自定义/插件后端新增 attention 后端无输出路径 | 未合并 PR | [#42581](https://github.com/vllm-project/vllm/pull/42581) |
| CPU | 面向多节点 CPU 张量并行（Arm Grace）的带 RDMA 分层 all-reduce | 未合并 PR | [#46447](https://github.com/vllm-project/vllm/pull/46447) |
| 前端 | 修复 Qwen2.5-Omni / Qwen3-Omni / Qwen3-ASR `thinker_config` 加载的 Rust 前端问题 | 未合并 PR | [#61128](https://github.com/vllm-project/vllm/pull/61128) |

---

## 4. 性能与优化
- **Batch Invariant 功能与性能优化**追踪帖：社区参与度高（101 条评论，23 👍），是确定性推理工作的后续跟进 | [#27433](https://github.com/vllm-project/vllm/issues/27433)
- **DeepSeek-V4.1-Flash SM120 (RTX PRO 6000) 吞吐量瓶颈**：开启 `--enforce-eager` 时解码吞吐量极低，CUDA graphs 无法使用；请求优先修复 SM120 的 graph 捕获问题 | [#56892](https://github.com/vllm-project/vllm/issues/56892)
- **AMD RDNA4 (gfx1201) 性能回归**：v0.28 起选用 RowWiseTorchFP8ScaledMMLinearKernel，导致解码吞吐量下降 5-24% | [#57838](https://github.com/vllm-project/vllm/issues/57838)
- **手动编译融合移植**：RFC 提议将融合操作从 `torch.compile` 流程迁移到手动模型层融合；正在跟踪具体移植工作 | [#43224](https://github.com/vllm-project/vllm/issues/43224)
- **Triton Tensor Descriptor (TD) 采用策略**：RFC 提议使用上游推荐的 `tl.make_tensor_descriptor` API 替代原始指针运算 | [#42545](https://github.com/vllm-project/vllm/issues/42545)
- **MoE 优化进行中**：
  - Humming MoE 配置重构为 oracle 模式 | [#57538](https://github.com/vllm-project/vllm/pull/57538)
  - 面向 CDNA GPU 的 DSv4 Pro pack_bitmatrix Triton 内核优化 | [#43159](https://github.com/vllm-project/vllm/pull/43159)
  - 为 MoE 非门控激活实现融合 CUDA 内核 | [#43386](https://github.com/vllm-project/vllm/pull/43386)
- **KV 缓存可观测性**：PR 在 KV 缓存组元数据中暴露 `prefix_cacheable` 和 `prefix_replay_tokens` 字段，供外部前缀感知路由器使用 | [#61130](https://github.com/vllm-project/vllm/pull/61130)
- **上下文感知 KV 缓存保留 API（优先驱逐）**：针对并发负载下智能体工作负载前缀缓存的 RFC（8 👍） | [#37003](https://github.com/vllm-project/vllm/issues/37003)
- **模型优化 PR 快速合并通道**：RFC 提议加快对大量 AI 生成的优化 PR 的审核速度（6 👍） | [#59665](https://github.com/vllm-project/vllm/issues/59665)

---

## 5. 稳定性与回归问题
*按严重程度排序（正确性/崩溃 > 功能问题 > 次要问题）*

| 严重程度 | 问题 | 详情 | 修复 PR？ | 链接 |
|----------|-------|---------|---------|------|
| 严重 | Qwen3.8-27B（TP=1）前缀缓存输出损坏 | DFlash2/DSpark + 前缀缓存场景下，v0.30/v0.31 版本缓存命中后输出损坏；v0.29 和 MTP 模式正常。已在 RTX PRO 5000 (sm_120) 上复现。 | 暂无 | [#60174](https://github.com/vllm-project/vllm/issues/60174) |
| 严重 | 混合 Mamba/GDN 模型上前缀缓存 + MTP 输出损坏 | 此为早期报告的遗留问题（#43559 已关闭但未修复），v0.28.0 中仍存在 | 暂无 | [#53912](https://github.com/vllm-project/vllm/issues/53912) |
| 严重 | GLM-5.3-Flash 长序列解码效果退化 | W4A16 量化模型在 B300 上（v0.28.1rc1）经过累积推理解码后输出质量下降 | 暂无 | [#56868](https://github.com/vllm-project/vllm/issues/56868) |
| 严重 | GLM-5.3-Flash 在多轮智能体场景下出现重复 token “语义混乱” | 智能体工作流中出现性能退化 | 暂无 | [#56605](https://github.com/vllm-project/vllm/issues/56605) |
| 高 | GLM-5.3-Flash 在 4xB200 上出现 CUDA 非法内存访问 | 在 3 个不相关的内核中出现（KDA 线性注意力、MHC TileLang、TRT-LLM 融合 MoE） | 暂无 | [#54317](https://github.com/vllm-project/vllm/issues/54317) |
| 高 | TP 工作进程挂起 → EngineDeadError | DeepSeek-V4-Pro、TP=8、MTP 投机解码场景下 RPC `sample_tokens` 超时（6 👍） | 暂无 | [#41530](https://github.com/vllm-project/vllm/issues/41530) |
| 高 | 混合 GDN + MTP k=3 + 异步调度场景下无提示 CUDA IMA（退出码 0） | 在 RTX 3090 上经过多轮修复后仍存在 | 暂无 | [#53726](https://github.com/vllm-project/vllm/issues/53726) |
| 高 | 负载下调度器停止接收请求 | 待处理队列持续增长，但引擎报告状态正常 | 暂无 | [#53130](https://github.com/vllm-project/vllm/issues/53130) |
| 高 | FP8 KV 缓存自动选择无可用 JIT 的 FlashInfer → 崩溃 | 应回退到 TRITON_ATTN 而非直接崩溃 | 暂无 | [#60262](https://github.com/vllm-project/vllm/issues/60262) |
| 中 | 自适应块验证的前向查看越界 | 投机解码 bug | 未合并 PR：[#60945](https://github.com/vllm-project/vllm/pull/60945) | [#60945](https://github.com/vllm-project/vllm/pull/60945) |
| 中 | RecoverSSM 在精确块边界处的对齐状态索引错误 | Mamba / SSM bug | 已关闭（已合并）：[#59962](https://github.com/vllm-project/vllm/pull/59962) | [#59962](https://github.com/vllm-project/vllm/pull/59962) |
| 中 | Qwen3.8-flash-next 在解耦 PD 服务中 MTP 接受率为 0% | 已关闭（已修复） | 已关闭（已合并） | [#59642](https://github.com/vllm-project/vllm/issues/59642) |
| 中 | 全注意力幽灵块竞争条件 | `cache_blocks()` 在 GPU 写入完成前提交哈希 → 出现虚假缓存命中 | 已关闭（过时，需变基）：[#42359](https://github.com/vllm-project/vllm/pull/42359) | [#42359](https://github.com/vllm-project/vllm/pull/42359) |
| 中 | 高并发下 MTP + 多模态场景编码器缓存未命中崩溃 | 已关闭（已修复） | 已关闭 | [#38551](https://github.com/vllm-project/vllm/issues/38551) |
| 次要 | 结构化输出允许在语法终止前出现停止 token | 停止 token 仅在语法结束后才被掩码 | 已关闭（过时，需变基）：[#42416](https://github.com/vllm-project/vllm/pull/42416) | [#42416](https://github.com/vllm-project/vllm/pull/42416) |
| 次要 | qwen3_xml 工具解析器消耗 `</think>` 标签，将推理内容合并到输出内容中 | 临时方案：使用 `--reasoning-parser qwen3` | 暂无 | [#51679](https://github.com/vllm-project/vllm/issues/51679) |

---

## 6. 对应用开发者的影响
- **Blackwell (SM120) + 前沿 flash 模型使用警示**：DeepSeek-V4.1-Flash 和 GLM-5.3-Flash 在 Blackwell GPU 上存在多个未解决的正确性、崩溃和吞吐量 bug。生产环境建议继续使用 v0.29.x / SM100 硬件；若使用 SM120，请配合 `--enforce-eager` 进行充分测试。
- **前缀缓存 + 投机解码暂未适配所有模型**：在 [#60174](https://github.com/vllm-project/vllm/issues/60174) 和 [#53912](https://github.com/vllm-project/vllm/issues/53912) 解决前，避免在 Qwen3.8-27B 和混合 Mamba/GDN 模型上组合使用前缀缓存与 MTP/DSpark/DFlash2。
- **智能体 / 多轮工作流**：若使用 GLM-5.3-Flash 构建智能体，需关注其效果退化问题（#56868、#56605）；此外 qwen3_xml 工具解析器存在推理内容与输出内容合并的 bug，可参考 [#51679](https://github.com/vllm-project/vllm/issues/51679) 中的临时方案处理。
- **自定义路由器的 KV 缓存可观测性**：若你部署了带外部前缀感知路由器的解耦服务架构，可关注 PR [#61130](https://github.com/vllm-project/vllm/pull/61130)——该 PR 暴露了前缀复用策略元数据，可实现更智能的路由。
- **v0.31.0 升级注意事项**：鉴于 v0.30/v0.31 存在较多未解决的回归 bug，上线前请验证工作负载的端到端输出正确性，尤其是开启 KV 缓存量化和投机解码的场景。
- **RL + LoRA 工作流**：[#48297](https://github.com/vllm-project/vllm/issues/48297) 中跟踪的 LoRA 适配器睡眠/唤醒崩溃和生命周期问题仍未解决——在线微调部署中请仔细验证适配器重载路径。

---
*来源：github.com/vllm-project/vllm — 数据截至 2026-10-12*

---

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 每周摘要 | 2026-10-12
*数据来源：github.com/sgl-project/sglang（过去7天的更新）*

---

## 1. 过去7天要点
本周SGLang未发布新的官方版本。开发工作主要围绕DeepSeek-V4.1的深度优化（Blackwell/Hopper加速、稀疏预填充改进）、将解码上下文并行（DCP）扩展到GLM-5.x等DSA/MTP模型，以及针对投机解码和客户端连接处理中的稳定性回归问题进行定向修复。CI可靠性仍是重点，针对不稳定测试和基础设施故障设有专门跟踪。

---

## 2. 版本发布与破坏性变更
过去7天未宣布新的版本或官方破坏性变更。

---

## 3. 新模型与硬件支持
- **DSA/MTP模型的解码上下文并行**：进行中的PR为RoPE DSA架构（GLM-5.2、GLM-5.3、DeepSeek-V3.2）添加了`--dcp-size > 1`支持，解决了LSE、index-K缓存和TRT-LLM缓冲区大小不匹配的问题。
  [PR #43735](https://github.com/sgl-project/sglang/pull/43735)
- **Blackwell SM120生产环境现场报告**：社区反馈了DeepSeek-V4.1-Flash在8× RTX PRO 6000（PCIe，无NVLink）上的可用配置，包括实测吞吐量、有效拓扑和投机解码的A/B测试结果。
  [Issue #40877](https://github.com/sgl-project/sglang/issues/40877)
- **DeepSeek-V4.1 SM90候选索引器**：进行中的PR为DeepSeek-V4.1在Hopper（SM90）上添加了仅候选索引器评分功能，统一了预填充/解码协议并压缩了候选块ID。
  [PR #40860](https://github.com/sgl-project/sglang/pull/40860)
- **昇腾NPU W4A8 MoE修复**：进行中的PR修正了昇腾NPU上`moe_tp_size > 1`时，INT4权重/INT8激活MoE路径的下投影补偿问题。
  [PR #40880](https://github.com/sgl-project/sglang/pull/40880)
- **CPU集合通信内核优化**：进行中的PR将CPU的`all_gather_into_tensor`和`reduce_scatter_tensor`路由到sgl-kernel中优化后的共享内存内核。
  [PR #41521](https://github.com/sgl-project/sglang/pull/41521)
- **Apple Silicon服务架构重设计**：路线图issue跟踪了一条由Torch主导的SRT路径，带有导出的整模型MLX区域，相关实现PR正在进行中。
  [Issue #32321](https://github.com/sgl-project/sglang/issues/32321) | [PR #36164](https://github.com/sgl-project/sglang/pull/36164)

---

## 4. 性能与优化
- **DeepSeek-V4.1稀疏预填充组共享**：进行中的PR减少了TP4+EP4 B200部署上1M token预填充时的O(context²)逐层冗余工作（比率2索引器重评分、top-K门控重计算）。
  [PR #42929](https://github.com/sgl-project/sglang/pull/42929)
- **DeepGEMM MegaGate路由集成**：进行中的PR（2/N）为DeepSeek-V4.1集成了DeepGEMM MegaGate路由，以提高MoE效率。
  [PR #43262](https://github.com/sgl-project/sglang/pull/43262)
- **SM120性能优化计划**：跟踪issue于2026-10-12更新；已完成项包括DeepSeek V4支持和DeepGEMM MQA索引器，DeepSeek v4 Flash加速工作正在进行中。
  [Issue #19637](https://github.com/sgl-project/sglang/issues/19637)
- **自适应投机解码路线图**：正在推进针对接受率可变的智能体/混合工作负载动态调整投机深度的工作。
  [Issue #23705](https://github.com/sgl-project/sglang/issues/23705)
- **扩散模型预热可配置性**：进行中的PR使扩散模型预热预加载组件和内存余量可配置，允许用户禁用预加载或调整预留空间。
  [PR #43414](https://github.com/sgl-project/sglang/pull/43414)
- **统一基数缓存重构**：两个进行中的PR扩展了树核心组件API，并将SWA映射恢复拆分为专用的`RecoverEvictedSWA`处理程序，以实现更清晰的缓存管理。
  [PR #43722](https://github.com/sgl-project/sglang/pull/43722) | [PR #43721](https://github.com/sgl-project/sglang/pull/43721)
- **SGLang自动调优器路线图**：入门级issue跟踪一个统一的命令行工具，用于调优内核后端（MoE、注意力、allreduce）和调度启发式算法。
  [Issue #13363](https://github.com/sgl-project/sglang/issues/13363)

---

## 5. 稳定性与回归问题
按估计严重程度排序：
1. **Gemma-4 MM 非RGB图像崩溃**：严重 — 单张灰度/RGBA图像会导致整个视觉塔和调度器崩溃，丢弃所有进行中的请求；暂无修复PR关联。
   [Issue #26751](https://github.com/sgl-project/sglang/issues/26751)
2. **GLM-5.3 DFLASH投机解码正确性Bug**：高 — 使用DFLASH投机解码服务GLM-5.3时会出现严重重复和输出循环退化；暂无修复方案关联。
   [Issue #40843](https://github.com/sgl-project/sglang/issues/40843)
3. **断开连接的流式客户端僵尸请求**：中 — 由之前的回退导致的回归；断开连接的客户端会留下僵尸请求，一直解码到`max_tokens`并充斥分词器管理器日志；暂无修复PR关联。
   [Issue #36333](https://github.com/sgl-project/sglang/issues/36333)
4. **NGRAM投机解码过采样**：中 — NGRAM草稿树填充导致来自填充根兄弟节点的token 0被过采样；修复PR于2026-10-12提交。
   [Issue #43725](https://github.com/sgl-project/sglang/issues/43725) | [PR #43742](https://github.com/sgl-project/sglang/pull/43742)
5. **GLM-4.7/5 工具调用流式JSON Bug**：低 — 流式路径返回的数组/对象/布尔工具参数不符合严格JSON格式；修复PR正在进行中。
   [Issue #43273](https://github.com/sgl-project/sglang/issues/43273) | [PR #43275](https://github.com/sgl-project/sglang/pull/43275)
6. **CI不稳定性跟踪**：专门的issue跟踪NVIDIA PR测试运行中的不稳定测试和反复出现的CI基础设施故障，作为主CI跟踪器的补充。
   [Issue #42752](https://github.com/sgl-project/sglang/issues/42752) | [Issue #17050](https://github.com/sgl-project/sglang/issues/17050)

*本周已解决：DSpark CUDA Graph时序Bug [Issue #31023](https://github.com/sgl-project/sglang/issues/31023)、[Issue #33356](https://github.com/sgl-project/sglang/issues/33356)；生成健康检查DP路由扰动 [Issue #35241](https://github.com/sgl-project/sglang/issues/35241)；Qwen2.5工具调用空内容问题 [Issue #3797](https://github.com/sgl-project/sglang/issues/3797)。*

---

## 6. 对应用开发者的意义
- **DeepSeek-V4.1部署**：正在进行的Hopper/Blackwell优化将为长上下文工作负载带来显著的预填充吞吐量提升；可关注SM120计划和稀疏预填充PR的合并进展。
- **GLM-5.x服务**：在重复Bug修复前，避免对GLM-5.3使用DFLASH投机解码；针对该模型的生产工作负载请使用标准解码。
- **Gemma-4多模态部署**：目前请添加上游输入验证，拒绝非RGB图像，以防止调度器完全崩溃和请求丢弃。
- **工具调用集成**：如果使用流式GLM-4.7/5工具调用，非严格JSON参数值的修复即将推出；非流式路径不受影响。
- **投机解码用户**：NGRAM投机存在已知的token 0填充Bug，可能会降低效率；如果依赖NGRAM草稿模型，请跟踪修复PR。
- **扩散模型服务**：即将推出的可配置预热预加载功能，将让你在预热开销和首请求延迟之间精细调整GPU内存使用。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 每周快讯 | 2026-10-12
来源：[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)

---

## 1. 过去7天亮点
llama.cpp 项目发布了10个新版本（b11550–b11559），重点优化了 OpenCL/Vulkan 后端、提升了服务端稳定性，并新增了 Prism Bonsai 2 27B、MiniCPM-V 4.7 等模型的支持。社区当前的工作重点集中在推测解码的正确性、MoE 模型的内存效率以及后端可移植性上；AMD XDNA 加速支持、GPU 端 MoE 专家缓存等功能需求的社区参与度很高。

---

## 2. 版本发布与破坏性变更
本周所有版本均为增量构建（b11550–b11559），未报告任何 API 或配置层面的破坏性变更。
- 完整版本列表：[ggml-org/llama.cpp releases](https://github.com/ggml-org/llama.cpp/releases)

### 值得关注的服务端运维变更
- **服务端槽位固定修复（b11552）**：指向繁忙槽位的请求在延迟处理前不再覆盖槽位的 prompt 缓存，避免了正在进行的生成任务出现缓存损坏问题。[#30295](https://github.com/ggml-org/llama.cpp/pull/30295)
- **新增服务端组件测试（b11553）**：为服务端接口搭建了正式的测试基础设施，提升了后续 API 变更的回归问题检测能力。[#30312](https://github.com/ggml-org/llama.cpp/pull/30312)
- **RPC 调试详细程度重构（b11557）**：`GGML_RPC_DEBUG` 现在是数值型的详细级别（0–3），不再是布尔标志，可对 RPC 日志进行更细粒度的控制。[#29544](https://github.com/ggml-org/llama.cpp/pull/29544)

---

## 3. 新模型与硬件支持
### 已在版本中落地
- **Prism Bonsai 2 27B**：提供完整运行时支持，包括哈达玛张量处理与折叠权重优化。[#29600](https://github.com/ggml-org/llama.cpp/pull/29600)
- **MiniCPM-V 4.7**：新增多模态支持，为视觉输入扩展了 mrope 位置编码。[#29416](https://github.com/ggml-org/llama.cpp/pull/29416)
- **s390x 构建兼容性**：对不支持的编译器禁用了 z17 目标，修复了大型机上的构建问题。[#30297](https://github.com/ggml-org/llama.cpp/pull/30297)

### 进行中（开放 PR）
- **SenseNova U1**：为这款开源多模态模型提供文本生成、图文生成支持。[#28919](https://github.com/ggml-org/llama.cpp/pull/28919)
- **Ouro（字节跳动循环语言模型）**：支持 1.4B/2.6B 循环解码器架构，复用现有循环模型机制。[#29823](https://github.com/ggml-org/llama.cpp/pull/29823)
- **H2O-Lightning-4B**：支持决策模型，通过专用服务端接口输出校准后的概率结果。[#30361](https://github.com/ggml-org/llama.cpp/pull/30361)
- **Qwen4Exp 与多模态 MTP**：新增专家投影填充、64 位 GGUF 数组元数据，以及多模态推测解码支持。[#30316](https://github.com/ggml-org/llama.cpp/pull/30316)
- **XDNA 后端功能需求**：AMD XDNA 加速器支持的需求呼声很高（35 👍），目前正处于社区讨论阶段。[#21725](https://github.com/ggml-org/llama.cpp/issues/21725)

---

## 4. 性能与优化
### 已在版本中落地
- **OpenCL 改进（b11559）**：启用了 Gemma-4 E4B/E2B 的 GPU 解码，新增 dk512 支持，并优化了 dk64 内核，提升了 OpenCL 设备上的推理速度。[#30266](https://github.com/ggml-org/llama.cpp/pull/30266)
- **OpenCL 稳定性与性能修复（b11558）**：为超出设备限制的 Q4_K 权重镜像新增了回退逻辑，修复了 rms_norm 内核中子组不完整的问题。[#30310](https://github.com/ggml-org/llama.cpp/pull/30310)
- **CPU AVX2/F16C 修复（b11555）**：解决了支持 F16C 的 AVX2 CPU 未使用 F16C 指令的 bug，恢复了预期的解码吞吐量。[#30270](https://github.com/ggml-org/llama.cpp/pull/30270)
- **Vulkan MoE 预扫描优化（b11554）**：在预扫描阶段处理重复的 `mul_mat_id` 条目，消除了冗余循环，提升了 Vulkan 后端上 MoE 模型的推理效率。[#29998](https://github.com/ggml-org/llama.cpp/pull/29998)

### 进行中
- **OpenCL GDN 循环缓存优化**：通过两个 PR 实现 gated_delta_net 状态直接在循环缓存中读写，消除了循环层每 token 的拷贝开销。[#30359](https://github.com/ggml-org/llama.cpp/pull/30359) [#30360](https://github.com/ggml-org/llama.cpp/pull/30360)
- **SYCL 张量拆分加载加速**：新增 `set_tensor_2d` 实现，降低了张量拆分模式下加载模型时的逐行上传开销。[#30358](https://github.com/ggml-org/llama.cpp/pull/30358)
- **GPU 端 MoE 专家 LRU 缓存**：提出了由 GPU 内计算图管理的专家缓存方案，以减少大尺寸 MoE 模型的 PCIe 传输开销。[#29949](https://github.com/ggml-org/llama.cpp/issues/29949)
- **MoE 主机内存专家 DMA**：提出将 MoE 专家权重保存在页锁定主机内存中、通过 PCIe DMA 访问的方案，可让 81GB 的 Qwen3-235B 在 8GB 显存的显卡上运行（已在 RTX 4090 上实测）。[#26448](https://github.com/ggml-org/llama.cpp/issues/26448)

---

## 5. 稳定性与回归问题
按严重程度（影响范围 + 评论活跃度）排序：
1. **Qwen 3.8 flash + MTP 启动断言失败**：Qwen3.8-Flash 模型搭配 MTP 推测解码使用时，启动会崩溃，共20条评论，正在积极调查。[#29811](https://github.com/ggml-org/llama.cpp/issues/29811)
2. **量化目标上推测解码输出不一致**：在量化目标（如 Q4_K_M）上，使用草稿模型推测解码的贪心采样输出与普通推理结果不同；bf16 精度下则一致。共30条评论，暂无修复 PR。[#25618](https://github.com/ggml-org/llama.cpp/issues/25618)
3. **CUDA SM_60（P100）输出质量下降**：sm_60 架构上 FP32 运算会静默以 FP16 运行，导致输出质量下降；修复已在两个社区 fork 中合并，等待合入上游。共21条评论。[#25593](https://github.com/ggml-org/llama.cpp/issues/25593)
4. **HIP 上长对话出现“bad allocation”崩溃**：在 RDNA3 HIP 环境下，`llama-server` 长时间对话时会因内存分配错误崩溃。共10条评论，为新报告的问题。[#30091](https://github.com/ggml-org/llama.cpp/issues/30091)
5. **Intel B70 上 SYCL 性能回归**：PR #29622 合入后，双 Intel B70 系统上 Qwen3.8-Flash-Next UD-IQ3_XXS 模型的吞吐量下降。共10条评论，正在 actively triage。[#30033](https://github.com/ggml-org/llama.cpp/issues/30033)
6. **内存泄漏报告**：ARM + CUDA 环境下长时间运行时内存持续增长。共11条评论，正在调查中。[#27725](https://github.com/ggml-org/llama.cpp/issues/27725)

### 正在审核的修复 PR
- **MTP 掩码模式行选择修复**：解决了 Qwen 模型在掩码 MTP 模式下隐藏状态选择错误的问题。[#30345](https://github.com/ggml-org/llama.cpp/pull/30345)
- **嵌入模型内存超额分配修复**：通过跳过下一词元缓冲区预留，降低了嵌入模型的内存使用。[#30339](https://github.com/ggml-org/llama.cpp/pull/30339)

---

## 6. 对应用开发者的影响
- **服务端可靠性提升**：槽位固定修复与新增的组件测试套件，降低了使用槽位管理 API 的多租户部署出现缓存损坏和异常行为的风险。
- **多模态选项更丰富**：MiniCPM-V 4.7 以及即将支持的 SenseNova U1，为边缘和本地部署提供了更多轻量级视觉语言模型选择。
- **推测解码使用需谨慎**：如果你依赖量化模型搭配草稿模型推测解码的确定性贪心输出，在部署到生产环境前请务必验证输出一致性，因为目前相关的不一致 bug 仍未解决。
- **OpenCL/Vulkan 性能提升**：在核显、ARM Mali 或其他 OpenCL/Vulkan 设备上运行推理的用户，本周的内核优化将为 Gemma-4 和 MoE 工作负载带来显著的速度提升。
- **即将新增的服务端 API**：拟议的 `logit_gate` 接口将支持工具调用场景下的单轮词元概率检查，降低工具门控工作流的延迟。[#30265](https://github.com/ggml-org/llama.cpp/pull/30265)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 每周摘要 | 2026-10-12
---
## 1. 过去7天亮点
Ollama 发布了三个补丁版本（v0.40.1–v0.40.3），重点聚焦模型兼容性、用户体验优化以及云端 API 代理功能，同时团队正积极推进 Qwen 系列工具调用行为的稳定性修复，以及 Windows/GPU 后端回归问题的解决。llama.cpp 升级到 b11521 的工作正在进行中，升级后将原生支持决策模型和 EmbeddingGemma 2，此外还有多个 PR 针对智能体工作流中流式解析器的边缘场景进行优化。
---
## 2. 版本发布与破坏性变更
- **v0.40.3**：移除了 `ollama launch claude`（Claude 连接器）和 `ollama launch codex`（服务等级）的不必要警告；同时新增了后台模型暂停功能。
  - [PR #18878](https://github.com/ollama/ollama/pull/18878)、[PR #18879](https://github.com/ollama/ollama/pull/18879)
- **v0.40.2**：新增适配 llama.cpp 兼容性的后台模型升级流水线，升级时会自动备份原始模型，支持安全回退。
- **v0.40.1**：新增云端使用量/余额 API 的代理支持，修复了 Windows 上大于 2GiB 的 Clef head 读取问题，并移除了 CLI 新手引导中的账号步骤。
  - [PR #18829](https://github.com/ollama/ollama/pull/18829)、[PR #18777](https://github.com/ollama/ollama/pull/18777)
---
## 3. 新模型与硬件支持
- **进行中**：升级 llama.cpp 至 b11521，原生支持决策模型（`/v1/systemone`）和 EmbeddingGemma 2，移除 Ollama 自定义的评分器和 Clef 补丁。
  - [PR #18917](https://github.com/ollama/ollama/pull/18917)
- **功能需求**：支持 MBZUAI IFM K2 Horizon 模型系列（0.9B–36B MoE，Apache 2.0 协议，提供官方 GGUF 格式）。
  - [Issue #18698](https://github.com/ollama/ollama/issues/18698)
- **Bug**：`embeddinggemma-2:740m` 在 Linux 上拉取失败，报错「MLX runtime not available」（Intel CPU/GPU 环境）。
  - [Issue #18825](https://github.com/ollama/ollama/issues/18825)
- **进行中**：模型目录支持 Windows 联接点/卷挂载点（修复当 `OLLAMA_MODELS` 使用 NTFS 卷挂载时，`ollama list` 显示为空的问题）。
  - [PR #18949](https://github.com/ollama/ollama/pull/18949)
- **进行中**：新增 `OLLAMA_PARALLEL_HYBRID` 环境变量，为混合/循环模型架构启用多个并行槽位（此前固定为1个槽位）。
  - [PR #18939](https://github.com/ollama/ollama/pull/18939)
---
## 4. 性能与优化
- **进行中**：优化推理路由的清单/运行器查找逻辑，采用单次验证冷启动查找，并在 generate/chat/embed 接口间复用已加载的模型。
  - [PR #18947](https://github.com/ollama/ollama/pull/18947)
- **进行中**：新增按请求/按模型的思考 token 预算机制，防止推理循环耗尽全部上下文窗口并返回空响应。
  - [PR #17566](https://github.com/ollama/ollama/pull/17566)
- **已反馈**：mistral-medium-3.5:128b 在 M4 Max（128GB 内存）上运行速度约为 1 token/分钟，80GB 的模型占用了 127GB 内存 + 超过 100GB 的联动内存（版本 0.35.1/0.34.4）。
  - [Issue #18770](https://github.com/ollama/ollama/issues/18770)
- **Bug 已修复**：Vulkan 在显存充足的情况下出现约 1GB 缓冲区分配失败（根本原因：用户环境中 `HIP_VISIBLE_DEVICES=-1` 强制使用 Vulkan 后端）。
  - [Issue #18117](https://github.com/ollama/ollama/issues/18117)
---
## 5. 稳定性与回归问题
### 严重
- Qwen 3.8 在流式工具调用循环中返回 500 错误「no user query found in messages」（52 条评论，30 👍）。
  - [Issue #17778](https://github.com/ollama/ollama/issues/17778)
- 在树莓派 5 / Debian 13 上（systemd 部署方式），`ollama run` 第二次执行时会挂起。
  - [Issue #18796](https://github.com/ollama/ollama/issues/18796)
- 在 Ollama 0.40.x 版本中，运行 qwen3.6:35b-mlx 时 MLX 运行器出现 panic（相较于 0.35.0 版本的回归问题）。
  - [Issue #18856](https://github.com/ollama/ollama/issues/18856)
- Windows 平台上，AMD RX 6800 XT 加载任意模型时 Vulkan 出现 0xc0000005 访问违规错误。
  - [Issue #18557](https://github.com/ollama/ollama/issues/18557)
### 高优先级（修复 PR 正在进行中）
- Qwen3/Qwen3.5 工具调用解析器缺陷：流式输出中思考标签被截断、闭合标签丢失、部分工具调用内容泄露。
  - [Issue #13093](https://github.com/ollama/ollama/issues/13093)、[Issue #14601](https://github.com/ollama/ollama/issues/14601)、[PR #18624](https://github.com/ollama/ollama/pull/18624)、[PR #17914](https://github.com/ollama/ollama/pull/17914)
- 本地 GGUF 迁移后出现重复模型条目和无效的 `llamacpp:<sha>` 标签（0.40.0 版本）。
  - [Issue #18830](https://github.com/ollama/ollama/issues/18830)
- `keep_alive` 值超出 int64 纳秒范围时，会导致模型立即卸载，而非延长存活时间。
  - [Issue #18181](https://github.com/ollama/ollama/issues/18181)、[PR #18946](https://github.com/ollama/ollama/pull/18946)
### 中优先级
- `/api/chat` 请求中设置 `format: json` 时，工具调用失败。
  - [Issue #18944](https://github.com/ollama/ollama/issues/18944)
- Windows 自动更新后，`ggml-cuda.dll` 保留为 `.tmp` 后缀，导致 fallback 到 CPU 运行且显存检测为 0B。
  - [Issue #18712](https://github.com/ollama/ollama/issues/18712)
- Qwen3.5 4B 在长对话中仅返回思考内容（上下文长度 65536，版本 0.40.2）。
  - [Issue #18916](https://github.com/ollama/ollama/issues/18916)
---
## 6. 对应用开发者的影响
1. **Qwen 模型的智能体/工具调用工作流**：后续版本会持续优化解析器的稳定性；若用于生产环境，建议将工具定义直接嵌入系统提示词中，而非使用 `/api/chat` 的 `tools` 参数，以规避当前的解析边缘问题。
2. **模型生命周期管理**：v0.40.2 的后台升级流水线会修改本地模型以适配 llama.cpp，同时会自动备份——如果你在多环境中维护固定版本的模型，请验证回退流程是否正常。
3. **云端 API 集成**：v0.40.1 新增了云端使用量/余额 API 的代理功能，你现在可以通过本地 Ollama 服务器端点查询账单/配额数据，无需直接调用云端 API。
4. **`ollama launch` 用户体验**：新的 Codex 模型选择器（开发中，见 [PR #18887](https://github.com/ollama/ollama/pull/18887)）将展示所有本地安装的支持工具调用的模型，无需在智能体工作流中手动指定其他模型。
5. **Windows GPU 用户**：如果你在自动更新后突然出现 fallback 到 CPU 运行的情况，请检查 `cuda_v12\ggml-cuda.dll` 是否仍为 `.tmp` 文件（参见 [Issue #18712](https://github.com/ollama/ollama/issues/18712)）。

---

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 每周动态 | 2026-10-12

---

## 1. 过去 7 天核心动态
LiteLLM 项目加速推进 Rust 迁移工作，目标实现网关开销低于 1ms，目前已合并一批 PR，原生支持 Messages/Responses 钩子、流式响应、短路逻辑和缓存键一致性。
用户侧功能方面，**按团队累计 Token 预算**（独立于按美元计费的消耗统计）已进入开发阶段；同时针对 Mistral、Databricks、GigaChat、Google GenAI、Bedrock 的提供商转换 Bug 已完成关键修复。
安全与稳定性仍是首要关注点：Trivy 供应链入侵事件已完全管控；预算执行、内存泄漏、指标端点未授权访问相关的高严重度 Bug 仍处于待优先修复状态。

---

## 2. 版本发布与破坏性变更
过去 7 天多个发布渠道均推出了更新，所有版本均通过 cosign 实现 **Docker 镜像签名验证**（签名密钥与提交 [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 一致）：
- **稳定版**：v1.105.0、v1.104.3、v1.104.2、v1.102.4、v1.101.6
- **预发布版**：v1.106.0-rc.1、v1.105.0-rc.3
- **开发版**：v1.106.0-dev.1/2/3

根据已提供的版本发布摘要，本次无 API/配置层面的破坏性变更。

---

## 3. 新模型与硬件支持
- **新增提供商**：新增 ai& (`aiand/<model>`) 提供商路由，支持 Chat Completions 和 Responses API，同时已接入「添加模型」表单。[PR #38958](https://github.com/BerriAI/litellm/pull/38958)
- **小米 MiMo 模型** (`MiMo-V2-Pro`、`MiMo-V2-Omni`)：存在活跃 Bug——`output_config` 参数会导致 `AsyncCompletions.create()` 在 Claude Code 转换时失败。[Issue #24549](https://github.com/BerriAI/litellm/issues/24549)
- **通过 vLLM 调用 Qwen3-TTS**：`/v1/audio/speech` 接口调用失败，原因是 `voice` 被设为必填参数且自定义参数被剥离。[Issue #20078](https://github.com/BerriAI/litellm/issues/20078)
- **ElevenLabs 音频模型**：代理中的成本计算功能失效。[Issue #18058](https://github.com/BerriAI/litellm/issues/18058)

---

## 4. 性能与优化
- **Rust 迁移（目标：网关开销低于 1ms）**：原生网关路径取得重大进展：
  - 移除原生拒绝异常逻辑；功能缺口由统一目录管理，改为抛出 `NotImplementedError` 而非 `RustBridgeDeclined`。[PR #45986](https://github.com/BerriAI/litellm/pull/45986)
  - 在请求阶段实现 Messages 短路逻辑（例如仅含网页搜索的 Claude Code 请求、不支持的工具调用等场景），避免不必要的提供商往返交互。[PR #45982](https://github.com/BerriAI/litellm/pull/45982)
  - Messages 和 Responses 体钩子 / `CustomLogger` 钩子已原生支持同步、异步和流式调用。[PR #45968](https://github.com/BerriAI/litellm/pull/45968) | [PR #45977](https://github.com/BerriAI/litellm/pull/45977) | [PR #45979](https://github.com/BerriAI/litellm/pull/45979)
  - 原生 Responses 流式响应可通过 Python 桥接层传输。[PR #45985](https://github.com/BerriAI/litellm/pull/45985)
  - 原生推理逻辑保留 Python 缓存键语义，避免不同运行时之间出现缓存分裂。[PR #45956](https://github.com/BerriAI/litellm/pull/45956)
  - 重构 Python 驱动层，改为基于调用方任务的异步函数模型，移除了手动实现的续延机制。[PR #45962](https://github.com/BerriAI/litellm/pull/45962)
  - 主机调用续延逻辑由 Python 驱动层通过 `HostStep<E>` / `HostResume<E>` 统一管理。[PR #45957](https://github.com/BerriAI/litellm/pull/45957)
- **消耗追踪性能**：提出新增 `disable_entity_spend_updates` 开关，可在保留原始消耗日志的同时抑制实体计数更新，面向高吞吐部署场景优化。[Issue #31866](https://github.com/BerriAI/litellm/issues/31866)

---

## 5. 稳定性与回归问题
按严重程度排序：

1. **严重 — 供应链问题（已解决）**：PyPI 包 v1.82.7/8 中的 Trivy 入侵事件已完全管控；所有受影响包均已下架，当前发布版本均安全。[Issue #24518](https://github.com/BerriAI/litellm/issues/24518)
2. **高 — 指标端点未授权访问导致 PII 泄露**：`/metrics` 端点默认无认证，生产环境下会暴露多租户数据；`require_auth_for_metrics_endpoint: true` 仅为可选开启项。暂无关联修复 PR。[Issue #24530](https://github.com/BerriAI/litellm/issues/24530)
3. **高 — 预算执行被绕过**：v1.82.3 新建部署中，密钥/用户的 `max_budget` 未生效；虚拟密钥的 RPM 限制在密钥缓存后失效。暂无关联修复 PR。[Issue #26672](https://github.com/BerriAI/litellm/issues/26672) | [Issue #39713](https://github.com/BerriAI/litellm/issues/39713) | [Issue #27735](https://github.com/BerriAI/litellm/issues/27735)
   - 相关修复 PR：无数据库日志器配置时的预算预留对账逻辑（避免预留卡死）。[PR #45907](https://github.com/BerriAI/litellm/pull/45907)
4. **高 — 内存泄漏**：代理/透传部署场景下，内存持续数天增长，最终导致 Kubernetes 中 OOM 终止。暂无关联修复 PR。[Issue #12685](https://github.com/BerriAI/litellm/issues/12685) | [Issue #27954](https://github.com/BerriAI/litellm/issues/27954)
5. **中 — 提供商转换 Bug（修复 PR 已提交）**：
   - Mistral：内容列表块被截断为最后一个文本块，引用信息丢失。[PR #45818](https://github.com/BerriAI/litellm/pull/45818)（修复 [#45378](https://github.com/BerriAI/litellm/issues/45378)）
   - Databricks：不含 `content` 字段的纯工具回复会触发 `APIConnectionError` 崩溃。[PR #42894](https://github.com/BerriAI/litellm/pull/42894)
   - GigaChat：`stop` 和 `json_object` 响应格式被静默丢弃，未抛出不支持的错误提示。[PR #43607](https://github.com/BerriAI/litellm/pull/43607)（修复 [#43606](https://github.com/BerriAI/litellm/issues/43606)）
   - Google GenAI：在首个 SSE 事件前断开的流式请求不会被重试。[PR #45750](https://github.com/BerriAI/litellm/pull/45750)
   - Bedrock：格式错误的批量 JSONL 行返回 500 而非 400。[PR #45992](https://github.com/BerriAI/litellm/pull/45992)（修复 [#45060](https://github.com/BerriAI/litellm/issues/45060)）
   - HuggingFace TEI 重排序：已注册的 `model_cost` 被忽略，始终按 0 美元计费。[PR #45990](https://github.com/BerriAI/litellm/pull/45990)
   - Vertex AI：未执行按模型的缓存 Token 最低要求，也无 400 降级处理逻辑。[PR #44110](https://github.com/BerriAI/litellm/pull/44110)（修复 [#17696](https://github.com/BerriAI/litellm/issues/17696)）
6. **中 — 功能正确性问题**：
   - 路由器异步补全不会触发 `CustomLogger` 回调。[Issue #8842](https://github.com/BerriAI/litellm/issues/8842)
   - 后台健康检查结果被错误归因到所有共享同一 `litellm_params.model` 的部署 **（已修复）**。[Issue #44154](https://github.com/BerriAI/litellm/issues/44154)
   - JWT 未验证团队 ID **（已修复）**。[Issue #44182](https://github.com/BerriAI/litellm/issues/44182)
   - `/ui/chat` 因缺少 Next.js 静态导出的 index.html 返回 404 **（已修复）**。[Issue #24037](https://github.com/BerriAI/litellm/issues/24037)
   - OTel：流式输出缺少工具调用片段，结束原因不正确 —— 修复 PR 已提交。[PR #45920](https://github.com/BerriAI/litellm/pull/45920)（修复 [#45796](https://github.com/BerriAI/litellm/issues/45796)）
   - MCP 工具转换丢失 `function` 包装键，导致 `hosted_vllm` 场景下返回 400。[Issue #32281](https://github.com/BerriAI/litellm/issues/32281)
   - Claude Code 自动分类器对 GPT 5.6 失效：`stop_sequences` 未转换为 OpenAI 格式提供商所需的 `stop` 参数。[Issue #33075](https://github.com/BerriAI/litellm/issues/33075)
   - Responses API 命名空间工具在转换为 Gemini 格式时被静默移除。[Issue #29854](https://github.com/BerriAI/litellm/issues/29854)
   - 通用流式场景：接收部分分块后抛出 `KeyError`。[Issue #43487](https://github.com/BerriAI/litellm/issues/43487)
   - vLLM 流式 + logprobs 场景触发 PydanticSerializationError **（已关闭/解决）**。[Issue #18801](https://github.com/BerriAI/litellm/issues/18801)

---

## 6. 对应用开发者的影响
- **安全方面**：当前所有 LiteLLM 版本均已排除此前 Trivy 供应链入侵的影响；生产部署请使用文档中公开的密钥，通过 cosign 验证 Docker 镜像，并立即开启 `require_auth_for_metrics_endpoint: true`，避免多租户数据泄露。
- **预算与配额方面**：如果你运行多租户工作负载，可关注按团队 Token 预算功能（PR 正在审核中）——该功能可独立于模型定价强制执行硬性 Token 限制，对混合模型集群场景来说，相比按美元计费的预算是重大改进。v1.82.3 存在预算执行 Bug，新建部署在依赖其进行成本控制前，请先验证消耗限制功能是否正常。
- **提供商兼容性方面**：使用 Mistral（引用功能）、Databricks（工具调用）、GigaChat（stop/JSON 模式）或 Bedrock 批量 API 的团队请跟进对应修复 PR——这些 Bug 会导致静默数据损坏或错误码不正确，可能破坏 Agent 工作流。
- **Rust 迁移早期使用者提示**：原生网关正快速追赶 Python 版本的功能 parity（钩子、流式、缓存、短路逻辑）。如果你需要低于 1ms 的开销，可加入 Beta 跟踪计划参与测试，但需注意桥接层仍会持续重构。
- **内存泄漏提醒**：在内存增长问题修复前，长期运行的代理部署建议定期重启作为缓解措施。
- **UI 方面**：管理面板的深色模式已开发完成，可减轻运维人员监控网关时的视觉疲劳。[Issue #10177](https://github.com/BerriAI/litellm/issues/10177)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 每周精选 | 2026-10-12
---

## 1. 过去7天亮点
Unsloth 在两次 Beta 版本中推出了跨平台沙箱（Windows/Mac/Linux）和端到端 Jev 风格决策模型训练工作流，将文本与视觉大语言模型的决策准确率从30%提升至80%。在 Studio 方面，团队推进了共享多对话工作负载的 KV 缓存抢占机制，扩展了 text-diffusion LM 系列支持，并新增了精细化的 GPU 资源监控。核心库修复解决了注意力掩码正确性、Q-GaLore 检查点完整性以及 LoRA-GA 适配器重载兼容性问题。

---

## 2. 版本发布与破坏性变更
| 版本 | 核心变更 | 迁移说明 |
|---------|-------------|-----------------|
| [v0.1.905-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.905-beta) | 跨平台（Windows/Mac/Linux）沙箱上线；端到端 Jev 风格决策模型的训练、测试、导出与部署 | 参照[官方沙箱指南](https://unsloth.ai/docs/new/studio/sandboxing-in-unsloth)完成配置；现有微调工作流无 API 破坏性变更 |
| [v0.1.904-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.904-beta) | 原生 ComfyUI 模型支持；扩散流水线优化；桌面端浏览器体验升级 | 现有扩散工作流可能需要小幅调整配置，以使用原生 ComfyUI 集成功能 |

---

## 3. 新增模型与硬件支持
### 新增模型支持
- **Text-diffusion LM 系列**：Studio 现已支持通过 `DiffusionTrainer` 对 LLaDA、LLaDA-MoE、Dream、Nemotron-Labs-Diffusion、LLaDA2、SDAR 和 DiffusionGemma 进行训练和对话交互（[PR #13342](https://github.com/unslothai/unsloth/pull/13342)）
- **Qwen-Image-2.1 GGUF**：修复了 `qwen_image21` 架构 GGUF 模型被归类为文生图（此前被错误标记为文本生成）的问题（[PR #13333](https://github.com/unslothai/unsloth/pull/13333)）
- **功能请求**：社区请求支持 Qwen3-TTS 微调（11 条评论，2 👍）（[Issue #3951](https://github.com/unslothai/unsloth/issues/3951)）
- **功能请求**：为 `FastVisionModel` 和 `FastModel` 增加多 GPU 支持（与 `FastLanguageModel` 能力对齐）（[Issue #3495](https://github.com/unslothai/unsloth/issues/3495)）

### 硬件与后端更新
- **macOS 性能核心优化**：Studio 现在可在 Apple Silicon 芯片的所有性能核心上运行 `sd.cpp`（修复了非 SMT 架构下默认线程减半导致的算力利用不足问题）（[PR #13349](https://github.com/unslothai/unsloth/pull/13349)）
- **DDP 批量梯度拷贝**：通过设置环境变量 `UNSLOTH_DDP_BATCHED_GRAD_COPY=1`，可选择启用 PyTorch 2.13 的 `batched_grad_copy` 功能，提升分布式训练速度（[PR #13350](https://github.com/unslothai/unsloth/pull/13350)）

---

## 4. 性能与优化
- **共享对话的 KV 缓存抢占**：正在进行的重构允许单个 llama-server 实例将 KV 缓存槽位暂存到主机内存中，消除了因缓存无序竞争导致的并行对话 OOM 崩溃问题（[PR #10301](https://github.com/unslothai/unsloth/pull/10301)，后续迭代 [PR #10358](https://github.com/unslothai/unsloth/pull/10358)）
- **Diffusion LM 训练编译**：为文本扩散模型实现了零计算图中断的分块损失编译，并为每个模型系列配备了专属采样器，加快训练速度（[PR #13341](https://github.com/unslothai/unsloth/pull/13341)）
- **预量化检查点预校验**：Studio 现在会在下载托管的预量化扩散检查点*之前*进行校验，避免因模型不兼容或已过期浪费带宽；int8 指纹识别已实现与 torchao 版本无关（[PR #13339](https://github.com/unslothai/unsloth/pull/13339)）
- **详细 GPU 实时监控**：Studio 资源监控中新增可选的 GPU 负载、温度和功耗实时指标（默认关闭）（[PR #13351](https://github.com/unslothai/unsloth/pull/13351)）
- **上下文压缩可视化**：Studio 上下文长度指示器中新增自动压缩次数统计，提升缓存性能透明度（[PR #12759](https://github.com/unslothai/unsloth/pull/12759)）

---

## 5. 稳定性与回归问题
按严重程度排序（影响范围 + 评论互动量）：

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| 严重 | 缓存的 Llama/Qwen3 注意力忽略左侧填充掩码，导致单条带填充提示词的生成输出不一致（[Issue #13256](https://github.com/unslothai/unsloth/pull/13256)） | 进行中 | [PR #13256](https://github.com/unslothai/unsloth/pull/13256)（在 softmax 前应用掩码，统一掩码转换逻辑） |
| 严重 | Q-GaLore 全量微调在 `weight_quant=True` 时保存的检查点权重损坏（写入的是占位符而非量化参数）；叠加 MoE 分组失败问题（[Issue #13276](https://github.com/unslothai/unsloth/pull/13276)） | 进行中 | [PR #13276](https://github.com/unslothai/unsloth/pull/13276) |
| 高 | `UNSLOTH_RETURN_LOGITS=1` 环境变量在训练过程中被重置为 `0`，导致 Gemma 3 微调的自定义验证指标失效（21 条评论，2 👍）（[Issue #3071](https://github.com/unslothai/unsloth/issues/3071)） | 待确认，开放中 | 无 |
| 高 | 微调显存占用远超宣传数值，导致 Studio 和核心库中大模型出现 OOM（25 条评论）（[Issue #4504](https://github.com/unslothai/unsloth/issues/4504)） | 已关闭 | 不适用 |
| 高 | 7B QLoRA GRPO 训练在 H100 80GB 上 OOM（batch_size=1，num_generations=8）（14 条评论）（[Issue #3603](https://github.com/unslothai/unsloth/issues/3603)） | 已关闭 | 不适用 |
| 中 | Windows 10 上 Unsloth Studio 长上下文对话卡顿（10 条评论）（[Issue #12552](https://github.com/unslothai/unsloth/issues/12552)） | 已关闭 | 不适用 |
| 中 | 约15次迭代后训练速度骤降（从 2s/it 降至 45s/it），跨模型类型均存在该问题（13 条评论）（[Issue #3943](https://github.com/unslothai/unsloth/issues/3943)） | 已关闭 | 不适用 |
| 安全 | 桌面端诊断报告泄露 API 密钥（带短横线/下划线的 `sk-` 格式）、JWT 和 JSON 凭证（10 条评论） | 进行中 | [PR #13260](https://github.com/unslothai/unsloth/pull/13260)（扩展 `redaction.rs` 中的脱敏逻辑） |

---

## 6. 对应用开发者的影响
1. **决策模型工作流已可用于生产**：现在你可以完全在 Unsloth 生态内构建、训练和部署 Jev 风格决策模型，配合跨平台沙箱实现安全的本地测试，无需为智能体场景引入外部决策中间件。
2. **KV 缓存共享提升多用户部署效率**：即将推出的 KV 抢占功能将让你在单张 GPU 上运行更多并行对话会话且不会出现 OOM 崩溃，降低智能体和对话应用的部署成本。
3. **Diffusion LM 支持拓展应用场景**：文本扩散模型的训练和部署现已集成到 Studio 中，让你可以更轻松地在标准大语言模型微调之外，探索生成式扩散工作流。
4. **MCP 集成解锁智能体工具能力**：新增的 MCP（Model Context Protocol）支持让 Claude Code、Codex 等编码智能体可以通过 API 密钥控制 Unsloth Studio，实现智能体工作流中的自动化微调和部署流水线（[PR #13118](https://github.com/unslothai/unsloth/pull/13118)）。
5. **LoRA 工作流灵活性提升**：现在你可以从已保存的适配器检查点继续 LoRA 训练（无需全量合并），且 LoRA-GA 适配器可基于原始基础模型正确重载，简化了迭代式微调周期（[PR #13158](https://github.com/unslothai/unsloth/pull/13158)、[PR #13322](https://github.com/unslothai/unsloth/pull/13322)）。
6. **局域网访问安全升级**：对于自托管的 Studio 部署，你现在可以将局域网访问绑定到特定网络地址（例如仅私有 Tailscale IP），降低在公网 VPS 实例上的暴露风险（[PR #12839](https://github.com/unslothai/unsloth/pull/12839)）。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*