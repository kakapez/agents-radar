# AI 基础设施周报 2026-11-09

> 生成时间: 2026-11-09 02:31 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# 跨项目 AI 基础设施生态报告（2026-11-09）
## 1. 生态概览
过去 7 天，AI 推理与服务生态进入以 MoE 模型支持、异构硬件适配和解耦式服务成熟为核心的高速优化周期。vLLM 和 SGLang 以大规模合并 PR 数（分别为 927 和 1007）引领核心服务引擎迭代，重点聚焦 KV 缓存池化、PD 解耦、Blackwell/ROCm 硬件支持。本地运行时（llama.cpp、Ollama）优先支持边缘/NPU 及智能体工作负载的采样确定性，网关层（LiteLLM）和微调层（Unsloth）则分别聚焦计费准确性和扩散模型训练/推理集成。行业共同趋势是非 NVIDIA 硬件栈走向成熟，本周期 ROCm、Ascend NPU、Intel XPU、Apple Silicon 及边缘 NPU 均获得实质性功能升级。

## 2. 活跃度对比
| 项目 | 议题数（简报跟踪） | PR 数（已合并/进行中重点标注） | 发布状态 |
|---------|-----------------------------------|------------------------------------------|----------------|
| vLLM | 13+ 个跟踪活跃议题（7 个高严重性） | 10+ 个关键 PR 已合并 | v0.33.0rc3 已发布（927 次提交，389 位贡献者） |
| SGLang | 12+ 个跟踪活跃议题（2 个高严重性） | 15+ 个关键 PR 已合并 | v0.5.23 已发布（1007 个 PR，257 位贡献者） |
| llama.cpp | 7+ 个跟踪活跃议题（2 个高严重性） | 10+ 个关键 PR 已合并 | 发布 10 个 nightly 版本（b12199–b12211） |
| Ollama | 5+ 个跟踪活跃议题（2 个高严重性） | 6+ 个关键 PR 进行中 | 发布 v0.40.14、v0.40.15 补丁版本 |
| LiteLLM | 8+ 个跟踪活跃议题（1 个高严重性） | 8+ 个关键 PR 已合并 | LTS v1.108.3 稳定版；v1.109/1.110 预发布版持续迭代 |
| Unsloth | 10+ 个跟踪活跃议题（2 个高严重性） | 15+ 个维护者提交的 PR 进行中 | 发布 3 个 beta 版本（v0.1.914–v0.1.916） |

## 3. 模型支持竞赛
| 项目 | 新发布支持的模型/架构 |
|---------|-----------------------------------|
| vLLM | Reflection Beam-1.0（501B MoE）、Yandex AliceAI-Foundation-80B-A3B、Recursive Flint（40B MoE）、Muse Spark；DeepSeek-V4.1 GC-MoE 后端 |
| SGLang | Muse Spark Open、Beam-1.0（LLM/VLM）；Longcat2.0（Ascend）、Qwen3-Next/3.5 MTP GDN 层 |
| Ollama | Xiaomi MiMo V2.6 9B（代码/智能体）、AutoTrust 决策模型 |
| Unsloth | Qwen3.8-Flash-Next Dynamic V3.1；FLUX.3、Qwen-Image-2.1、LTX-2.5、Wan 扩散模型 |
| llama.cpp | SpacemiT IME2 MXFP4、Granite NVFP4 修复；PTQ1_0 三值量化开发中 |
| LiteLLM | Prism 提供方（DeepSeek V4/V4.1 Flash）、DeepSeek Fetch 工具；xAI Grok 分词修复 |

**领先者**：vLLM 和 SGLang 在前沿大型 MoE 模型支持上持平，均实现 Muse Spark 和 Beam-1.0 的重叠支持，并扩展 DeepSeek-V4 系列优化。Unsloth 领先扩散模型训练/集成支持，Ollama 则聚焦轻量级边缘代码/智能体模型。

## 4. 性能前沿
各项目优化重点分布如下：
- **KV 缓存与解耦式服务**：SGLang 统一内存池重构（5 个 PR 组成的窗口子池技术栈）、面向 ROCm/Ascend 的 HiCache；vLLM 针对 Mooncake P/D 解耦的 KV 连接器正确性加固。
- **异构硬件算子**：vLLM ROCm MI355X DeepSeek-V4-Pro 预填充性能提升（+12–14%）、SGLang SM120 FlashInfer warp-MMA 后端、llama.cpp Intel Arc SYCL 解码延迟降低（单查询 -28%）、Ollama Rockchip NPU 卸载。
- **量化**：vLLM Muse Spark FP8 在线逐通道量化、DeepSeek-V4.1 MXFP4/FP8 融合 MoE；Ollama 无损 FP8 逐张量导入；llama.cpp PTQ1_0 1.75bit 三值量化开发。
- **权重加载效率**：SGLang 权重缓存守护进程（Qwen3-235B FP8 加载时间从约 300 秒降至 <1 秒）、Unsloth 预构建 FlashInfer 算子以消除 vLLM 冷启动。
- **批处理与采样**：llama.cpp 确定性 Top-K 基数内核重写、Ollama VRAM 预测修复消除虚假调度器驱逐。

## 5. 层级定位
| 层级 | 项目 | 核心差异化 |
|-------|----------|---------------------|
| **生产服务引擎** | vLLM、SGLang | 面向云数据中心部署；优先支持解耦式服务、多后端硬件、高吞吐 MoE 优化。vLLM 领先 ROCm/Ampere/Blackwell 稳定性跟踪；SGLang 领先统一内存池和非 NPU 后端广度。 |
| **本地/边缘运行时** | llama.cpp、Ollama | 面向消费级桌面、边缘设备和 Apple Silicon；优先轻量量化、NPU 卸载和简单模型管理。llama.cpp 领先广泛硬件后端支持（SYCL/Vulkan/OpenCL）；Ollama 领先一键本地智能体工作流集成。 |
| **LLM 网关** | LiteLLM | 应用与模型提供方之间的抽象层；聚焦计费准确性、密钥管理、多提供方路由，以及面向 <1ms 开销的低开销 Rust 网关重写。 |
| **微调/训练** | Unsloth | 端到端微调与后训练层；聚焦扩散模型训练、上下文并行、内存降低，以及深度集成 vLLM 以部署微调模型。 |

## 6. 趋势信号与开发者指引
需关注的核心行业趋势：
1. **MoE 模型服务已成为主要优化前沿**：所有主流服务引擎均在为 DeepSeek-V4 系列算子融合、FP8/MXFP4 专家路由和 MoE 缓存调度分配工程资源。部署大型 MoE 模型的开发者应优先选用 Hopper/ROCm MI300+ 硬件，因为 Ampere（SM8x）对下一代 DeepSeek 模型的支持仍不完善。
2. **解耦式预填充/解码（PD）正成为生产部署的默认形态**：SGLang 和 vLLM 均在加固 P/D 连接器正确性和子池内存管理。构建长上下文智能体工作负载的团队，应在升级前验证其解耦栈上的 KV 缓存复用行为。
3. **非 NVIDIA 硬件正达到生产成熟度**：本周期 ROCm、Ascend NPU 和 Intel XPU 均获得实质性功能升级（ROCm 上的 HiCache、Ascend 上的 Mooncake L3）。多后端团队不再需要仅依赖 CUDA 进行生产推理。
4. **智能体工作负载暴露出新的稳定性缺口**：各项目的高严重性漏洞（GLM-5.3-Flash 工具调用退化、RTX 5090 运行器断连、Qwen 混合提示重处理）均影响工具调用和多轮智能体流程。开发者应锁定稳定版本，在这些回归问题解决前，避免在智能体生产部署中使用最新版本。
5. **网关计费准确性正成为关键运维问题**：LiteLLM 的流式少计和双缓存计费漏洞凸显了代理部署的成本可见性风险。运行多提供方网关的团队在信任配额仪表盘之前，应审计支出日志。

---
Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 每周技术简报 — 2026-11-09

## 1. 近 7 天重点动态
vLLM 已发布 v0.33.0rc3 版本，支持 Reflection Beam-1.0、Yandex AliceAI-Foundation-80B-A3B 等多款大型 MoE 模型。本周工程工作重点集中在 KV cache 分离架构的正确性保障、MI355X 硬件上的 ROCm 性能优化，以及针对 DeepSeek-V4.1 的 MoE 算子改进。Rust 前端持续迭代，向与 Python 服务器功能对齐的目标稳步推进。

## 2. 版本发布与破坏性变更
- **v0.33.0rc3** 已发布，包含来自 389 位贡献者的 927 次提交（其中 122 位为新贡献者）——详见[发布说明](https://github.com/vllm-project/vllm/releases/tag/v0.33.0rc3)
- 本轮迭代未记录明确的破坏性变更，但使用 v0.32.0 的用户需注意：block-size 相关问题（[#59203](https://github.com/vllm-project/vllm/issues/59203)）已关闭，修复方案已在 [#60762](https://github.com/vllm-project/vllm/issues/60762) 中跟踪。

## 3. 新增模型与硬件支持
- **v0.33.0 新增模型**：Reflection Beam-1.0（501B MoE，23B 激活参数），搭配 DFlash2 草稿模型；Yandex AliceAI-Foundation-80B-A3B；Recursive Flint（40B MoE，2.5B 激活参数）；以及 Muse Spark。
- **Hopper 架构上的 Muse Spark FP8 在线量化**：PR [#66139](https://github.com/vllm-project/vllm/pull/66139) 在加载时将专家权重按通道路由至 FP8，使 BF16 检查点可在 Hopper 硬件上运行。
- **Hopper 架构上 DeepSeek-V4.1 的 GC-MoE 后端**：PR [#66076](https://github.com/vllm-project/vllm/pull/66076) 中提供实验性 `--moe-backend gc_moe` 选项，将 MXFP4 路由专家与 FP8 共享专家进行算子融合。
- **MoE Oracle 类统一 RFC**：Issue [#37753](https://github.com/vllm-project/vllm/issues/37753) 跟踪将 fp8 / nvfp4 / mxfp8 / mxfp4 算子选择器整合为统一类结构的工作。
- **专用（MonoKernel）解码 RFC**：Issue [#60904](https://github.com/vllm-project/vllm/issues/60904) 提出面向专用硬件的手工融合解码前向传播标准。

## 4. 性能与优化
- **ROCm DeepSeek-V4-Pro 双批次重叠优化**：基于 8× MI355X 平台实测，MoRI EPv2 + DBO 使原生预填充性能提升 12–14%，PR [#65128](https://github.com/vllm-project/vllm/pull/65128) 中还实现了基于 SDMA 的 AsyncLL。
- **ROCm 上 GLM-5.3-Flash 优化**：PR [#66219](https://github.com/vllm-project/vllm/pull/66219) 将 KDA o_norm 的门控 RMSNorm 进行算子融合，避免回退到未融合的 eager 分解实现。
- **RDNA INT4 重打包优化**：PR [#52637](https://github.com/vllm-project/vllm/pull/52637) 降低了 RDNA 硬件上对称 GPTQ 的权重预处理开销。
- **MI355X 上 Qwen3.8-2.4T-A95B 与 Qwen3.8-Flash-Next 优化**：活跃优化跟踪项为 [#57149](https://github.com/vllm-project/vllm/issues/57149) 和 [#59575](https://github.com/vllm-project/vllm/issues/59575)。
- **Batch Invariant 特性优化**持续在 [#27433](https://github.com/vllm-project/vllm/issues/27433) 中推进（105 条评论，24 个 👍）。

## 5. 稳定性与回归问题
按严重程度排序（高 → 低）：

1. **[#50576](https://github.com/vllm-project/vllm/issues/50576)** — DeepSeek-V4-Flash / DSpark 不支持 SM8x（A100/A800）架构。128 条评论，16 个 👍，对 Ampere 用户影响较大。
2. **[#56892](https://github.com/vllm-project/vllm/issues/56892)** — SM120（RTX PRO 6000 Blackwell）架构上运行 DeepSeek-V4.1-Flash 时，启用 `--enforce-eager` 模式解码吞吐量极低，CUDA 图不可用，需修复 SM120 架构的图捕获问题。
3. **[#41530](https://github.com/vllm-project/vllm/issues/41530)** — DeepSeek-V4-Pro 启用 MTP 投机解码（TP=8）时，TP worker 挂起并触发 `EngineDeadError`。20 条评论，8 个 👍。
4. **[#49497](https://github.com/vllm-project/vllm/issues/49497)** — 当 nvcc 不可用时，FlashInfer 采样器 JIT 编译会导致引擎启动崩溃，且无回退到原生采样器的机制。
5. **[#66448](https://github.com/vllm-project/vllm/pull/66448)** — 当 `enable_thinking=False` 时，Gemma 4 聊天模板在 `tool_response` 后会泄漏思考通道标记，修复 PR 已提交。
6. **[#52244](https://github.com/vllm-project/vllm/pull/52244)** — Qwen3.5-122B-A10B 启用 MTP 投机解码时，混合 GDN 前缀缓存出现未命中问题，修复 PR 已提交。
7. **[#66447](https://github.com/vllm-project/vllm/pull/66447)** — `BatchedTritonExperts` 忽略专家偏置（`w1_bias`/`w2_bias`），导致使用该后端的 MoE 模型输出静默错误。

## 6. 对应用开发者的影响
- **Ampere（A100/A800）用户**：暂勿在 SM8x 架构上部署 DeepSeek-V4-Flash，官方支持仍处于特性请求阶段。DeepSeek-V4 系列请使用 SM90（Hopper）或更新架构。
- **Blackwell 工作站用户（RTX PRO 6000）**：DeepSeek-V4.1-Flash 当前解码吞吐量表现较差，在 SM120 CUDA 图捕获问题修复前，不建议投入生产环境。
- **采用预填充/解码分离架构的用户**：MooncakeConnector 正在积极优化（[#60523](https://github.com/vllm-project/vllm/issues/60523)，8 个 👍），混合/投机解码路径的 KV 连接器正确性正通过 PR [#66132](https://github.com/vllm-project/vllm/pull/66132) 和 [#65448](https://github.com/vllm-project/vllm/pull/65448) 逐步加固。升级前请对照这些修复验证你的分离部署配置。
- **Rust 前端**：仍处于实验阶段（[#44280](https://github.com/vllm-project/vllm/issues/44280)）。GRPC 多模态对接支持正在落地（[#66094](https://github.com/vllm-project/vllm/pull/66094)），但尚未实现与 Python 服务器的功能完全对齐——如果你依赖完整的 OpenAI 兼容 API 覆盖，建议暂时继续使用 Python 版本。
- **强化学习/在线权重更新用户**：PR [#57854](https://github.com/vllm-project/vllm/pull/57854) 使权重更新失败时仅终止对应请求而非整个引擎，对生产环境 RL 服务的稳定性值得关注。
- **Whisper / 语音识别用户**：时长超过 30 秒音频的时间戳偏移问题 [#32588](https://github.com/vllm-project/vllm/issues/32588) 现已关闭；若你曾受该问题影响，请向上游提交你的音频时间戳校验逻辑。

---

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 技术速递 — 2026-11-09

## 1. 近 7 天要闻
SGLang 发布了迄今规模最大的版本 **v0.5.23**，共包含 **257 位贡献者提交的 1007 个 PR**，不仅将模型支持范围扩展至 Muse Spark Open 与 Beam-1.0，还在统一内存池化、PD 分离工具链、多后端硬件（NVIDIA、AMD ROCm、Intel XPU、Ascend NPU、Apple Silicon）方向持续深耕。当前核心研发工作聚焦**统一内存缓存重构**（5 个 PR 组成的提交栈已落地窗口子池支持）、**跨 DSA/DCP 与混合 GDN 模型的 HiCache 优化**，以及**CI/不稳定测试稳定性加固**——随着 SGLang 在智能体工作负载场景的落地规模不断扩大，这些已成为当前的优先级方向。

## 2. 版本发布与破坏性变更
- **v0.5.23** 正式发布 —— 合并 1007 个 PR，257 位贡献者参与。新增 Muse Spark Open（LLM/VLM）与 Beam-1.0（LLM/VLM）的 cookbook 示例。[发布说明](https://github.com/sgl-project/sglang/releases/tag/v0.5.23)
- 过去一周未公告明确的破坏性 API/配置迁移，但多个 RFC 已释放即将开展 API 整合的信号：RFC #45816 提议全量迁移至共享的 `api.v1.Generate` 后端 API，统一覆盖处理器与路由组件。[Issue #45816](https://github.com/sgl-project/sglang/issues/45816)

## 3. 新模型与硬件支持
- **新模型**：Muse Spark Open、Beam-1.0（LLM + VLM），均配套自回归 cookbook 文档。[发布说明](https://github.com/sgl-project/sglang/releases/tag/v0.5.23)
- **NVIDIA / SM120 (Blackwell)**：PR #45262 为 block-FP8-as-MXFP8 线性层启用 FlashInfer b12x warp-MMA 后端，在 SM120/SM121 平台上任意 M 维度下的性能均优于 CUTLASS。[PR #45262](https://github.com/sgl-project/sglang/pull/45262)
- **AMD ROCm**：PR #48118 为 GDN 层（Qwen3-Next / Qwen3.5 MTP）的线性链目标验证新增 AITER 后端，替代原仅支持 Triton 的路径；[PR #48118](https://github.com/sgl-project/sglang/pull/48118)；PR #45205 在 ROCm 平台为 DSA DCP 启用 HiCache，支持打包式 MTP 草稿推理。[PR #45205](https://github.com/sgl-project/sglang/pull/45205)
- **Ascend NPU**：通过 PR #47917 支持 Longcat2.0（arch22），PR #48389 在 Ascend 平台实现 GLM DSA 缓存分层拆分，PR #49054 为 DeepSeek-V4/GLM-5.2 引入 Mooncake L3，PR #48031 为 MLA/DeepSeek-V4 实现 AIV 数据传输加速。[PR #47917](https://github.com/sgl-project/sglang/pull/47917) · [PR #48389](https://github.com/sgl-project/sglang/pull/48389) · [PR #49054](https://github.com/sgl-project/sglang/pull/49054) · [PR #48031](https://github.com/sgl-project/sglang/pull/48031)
- **Intel XPU / 扩散模型**：PR #48646 修复了 z-image 扩散模型中 B=1 场景下缺失 QK Norm + RoPE 融合路径的问题。[PR #48646](https://github.com/sgl-project/sglang/pull/48646)
- **Apple Silicon**：RFC #32321 跟踪 SRT 路径重构，方案为采用 Torch 主导的 SRT 路径 + 导出全模型 MLX 区域。[Issue #32321](https://github.com/sgl-project/sglang/issues/32321)

## 4. 性能与优化
- **权重缓存守护进程（路线图 #33522）**：第一阶段已落地（PR #27139）—— 每个 rank 通过守护进程持有量化后权重，基于 CUDA IPC 将 Qwen3-235B FP8 的权重加载时间从约 306–327 秒降至 1 秒以内，当前正推进后续阶段的规划。[Issue #33522](https://github.com/sgl-project/sglang/issues/33522)
- **统一内存池重构（PR 提交栈 #48009–#48014）**：用单次布局搜索替代了约 1400 行的临时分配策略，覆盖规划、准入、回收全流程；为每个注意力窗口子池分配独立的主机内存池、PD 入口与指标。同时移除了启用 `--enable-unified-memory` 时“多目标窗口需声明命名模型”的启动限制。[PR #48014](https://github.com/sgl-project/sglang/pull/48014) · [PR #48013](https://github.com/sgl-project/sglang/pull/48013) · [PR #48012](https://github.com/sgl-project/sglang/pull/48012)
- **SM120 上的 DeepSeek-V4 性能**：存在可优化的性能差距 —— 预填充阶段仅约 2–7K tok/s，而 4× RTX PRO 6000（TP=4）平台上 vLLM/marlin 实现可达约 12.5K tok/s，调优指引讨论正在进行中。[Issue #33422](https://github.com/sgl-project/sglang/issues/33422)
- **Hopper (SM90) 上的 GLM-5.3-Flash**：跟踪 Issue #45373 汇总了 Q4 内核优化工作。[Issue #45373](https://github.com/sgl-project/sglang/issues/45373)
- **QSA 缓存分片（PR #43527）**：为 Qwen3.8 混合模型分片序列长度相关的 QSA 状态（原始 K/V 历史 + 压缩缓存），复用页交织分配器基础设施。[PR #43527](https://github.com/sgl-project/sglang/pull/43527)
- **DSA DCP 上的 HiCache（ROCm 平台）**：为智能体工作负载实现共享前缀复用，解决了此前 c48 并发下驱逐导致重复预填充的问题。[PR #45205](https://github.com/sgl-project/sglang/pull/45205)

## 5. 稳定性与回归问题
- **高危 — GLM-5.3-Flash 思维退化（#36669）**：在 `tool_choice=auto` 的多工具智能体提示场景下，推理输出退化为重复的 `!` 字符，目前尚无修复 PR。[Issue #36669](https://github.com/sgl-project/sglang/issues/36669)
- **高危 — GB10 长预填充时 worker 被静默杀死（#36941）**：在 2× DGX Spark（GB10，TP=2）平台上，GLM-5.3-Flash 预填充超过 4 万 token 时会耗尽统一内存，且无回溯/OOM 记录；rank 在 5.4 万~6.2 万 token 之间退出。[Issue #36941](https://github.com/sgl-project/sglang/issues/36941)
- **中危 — Qwen3-VL 大图内存暴涨（#49132，修复 PR #49215）**：双线性位置嵌入融合会为每张 1670 万像素图像生成 576 MiB 张量，修复 PR 已提交。[PR #49215](https://github.com/sgl-project/sglang/pull/49215)
- **中危 — 混合 GDN 上 HiCache 主机层零命中（#45400）**：一旦被驱逐的工作集超过约 3 个长前缀，主机 mamba 池就会耗尽，主机层命中率降至零。[Issue #45400](https://github.com/sgl-project/sglang/issues/45400)
- **中危 — DSA 索引器 GPU 卸载崩溃（#48316，修复已提交）**：启用 V1 CPU 权重卸载 + 可中断预填充 CUDA 图时，DSA 索引器被捕获为 eager 中断点，导致首个请求触发崩溃。[PR #48316](https://github.com/sgl-project/sglang/pull/48316)
- **中危 — 解密配置下 Muse Spark 探针失败（#49216，修复已提交）**：早期架构探针会忽略 `--decrypted-config-file`，在正常模型加载前抛出异常。[PR #49216](https://github.com/sgl-project/sglang/pull/49216)
- **低危 — InternlmDetector 流式多工具调用中断（#46714，修复已提交）**：首个工具调用完成后，后续工具调用分块会被丢弃。[PR #46714](https://github.com/sgl-project/sglang/pull/46714)
- **低危 — 多模态 SSRF / 本地文件泄露（#45558，修复已提交）**：`file://` URI 与裸路径可绕过 `--allowed-media-domains` 限制。[PR #45558](https://github.com/sgl-project/sglang/pull/45558)
- **CI 状态**：两个高热度跟踪 Issue —— #26340（CUDA 核心转储，360 条评论）与 #42752（不稳定测试，187 条评论）—— 表明当前 PR 吞吐量下 CI 负载承压严重。[Issue #26340](https://github.com/sgl-project/sglang/issues/26340) · [Issue #42752](https://github.com/sgl-project/sglang/issues/42752)

## 6. 对应用开发者的影响
- **若运行智能体/工具调用工作负载**：请仔细测试 GLM-5.3-Flash —— 多工具退化问题（#36669）是已知风险；在修复落地前，建议固定 `tool_choice` 参数或模型版本。
- **若部署 VLM 处理大尺寸图像**：即将合并的 PR #49215 将大幅降低高分辨率输入下视觉路径的峰值内存占用，可关注后续版本升级。
- **PD 分离架构用户**：请关注 Q4 路线图（#43699）—— 分离部署已成为默认部署形态，路线图覆盖了所有并行策略 + HiCache + 投机解码的组合方案。[Issue #43699](https://github.com/sgl-project/sglang/issues/43699)
- **多后端团队**：本周 AMD、NPU、XPU 平台均落地了重要功能（ROCm 上的 HiCache、NPU 上的 Mooncake L3、XPU 上的扩散模型修复）—— 非 CUDA 部署生态正快速成熟。
- **运维建议**：PR #45551 新增了可配置的 Prometheus 指标命名 —— 若你使用 Google Cloud Managed Prometheus、Datadog 或 OpenTelemetry 采集 SGLang 指标，该 PR 将消除标签校验错误；PR #45558 强化了媒体输入安全性，若你接受用户提交的 URL，建议拉取该修复。[PR #45551](https://github.com/sgl-project/sglang/pull/45551)

---

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 每周摘要 — 2026-11-09

## 1. 本周重点
本周 llama.cpp 连续发布了 10 个 nightly 版本（b12199 至 b12211），重点集中在后端优化、内核确定性、MoE 推理效率以及投机解码稳定性。活跃贡献的关键优先级包括扩展 SYCL/CUDA/OpenCL 硬件支持、改进 MoE 缓存调度，以及修复量化投机解码中的正确性 bug。该项目正持续成熟，面向多样化的边缘与数据中心硬件目标，逐步成为生产级推理引擎。

## 2. 版本发布与破坏性变更
- **Nightly 发布序列**：2026-11-02 至 2026-11-09 期间共发布 10 个带标签的版本，包含增量修复与优化（例如 [b12211](https://github.com/ggml-org/llama.cpp/releases/tag/b12211)、[b12210](https://github.com/ggml-org/llama.cpp/releases/tag/b12210)）。本轮未列出任何破坏性 API 变更；对于标准推理工作流，更新完全向后兼容。
- **Top-K 确定性修复**：[b12208](https://github.com/ggml-org/llama.cpp/releases/tag/b12208) 重写了 CUDA/Metal 基数 Top-K 内核，消除了不确定的平局选择问题，这对可复现的智能体输出至关重要。
- **精度对齐**：[b12202](https://github.com/ggml-org/llama.cpp/releases/tag/b12202) 调整了 GLM4 与输出投影层的 BF16 累加逻辑，使其与参考实现精度对齐。

## 3. 新模型与硬件支持
- **硬件后端**：
  - SpacemiT IME2 MXFP4 稠密 CPU 重打包支持已在 [b12210](https://github.com/ggml-org/llama.cpp/releases/tag/b12210) 中合入。
  - llamafile 新增 bf16 与 q8_0 vxe 执行支持（[b12209](https://github.com/ggml-org/llama.cpp/releases/tag/b12209)）。
  - 针对高通 Adreno 硬件改进了 OpenCL 的 q8_0 与小维度 MoE GEMV 内核（[b12200](https://github.com/ggml-org/llama.cpp/releases/tag/b12200)）。
- **开发中贡献**：
  - XDNA 后端支持仍是一个开放的增强请求，已有 37 条社区评论（[#21725](https://github.com/ggml-org/llama.cpp/issues/21725)）。
  - PTQ1_0 三值量化（每权重 1.75 bit）正在面向 CPU/GPU 后端积极开发中（[#29672](https://github.com/ggml-org/llama.cpp/pull/29672)）。
  - Granite NVFP4 权重缩放加载修复已提交，用于解决 NVFP4 检查点输出乱码的问题（[#31449](https://github.com/ggml-org/llama.cpp/pull/31449)）。

## 4. 性能与优化
- **内核级性能提升**：
  - CUDA SSM_SCAN 内核为类 Zamba2 架构新增了 d_state=64 快速路径，消除了循环扫描步骤的 CPU 回退瓶颈（[b12207](https://github.com/ggml-org/llama.cpp/releases/tag/b12207)）。
  - Battlemage（Intel Arc）SYCL 后端将 D=256 单查询解码路由到 FA 向量内核，在 65k KV 缓存下将单次调用延迟从 1150 µs 降至 832 µs（[#30606](https://github.com/ggml-org/llama.cpp/pull/30606)）。
  - Hopper H100 Q6_K prefill 优化使用 TMA/WGMMA，正在评审中，用于加速稠密量化预填充（[#31916](https://github.com/ggml-org/llama.cpp/pull/31916)）。
- **MoE 与调度**：
  - MoE 缓存得到改进，避免 CPU 等待已缓存的专家权重（[b12206](https://github.com/ggml-org/llama.cpp/releases/tag/b12206)）。
  - 投机解码现在将 draft 模型排除在 MoE 缓存之外，以降低开销（[b12201](https://github.com/ggml-org/llama.cpp/releases/tag/b12201)）。
  - SYCL 设备端 MoE 调度正在实现中，以保持 GPU 计算图连续不中断（[#30156](https://github.com/ggml-org/llama.cpp/pull/30156)）。

## 5. 稳定性与回归问题
- **高严重度**：
  - 量化目标投机解码（贪心模式）与普通推理输出存在差异；已有 39 条社区评论，尚未合入修复（[#25618](https://github.com/ggml-org/llama.cpp/issues/25618)）。
  - Qwen 3.8 Flash + MTP 启动时崩溃；正在积极调查（[#29811](https://github.com/ggml-org/llama.cpp/issues/29811)）。
- **中严重度**：
  - SYCL 后端 `--fit` 模式低估内存占用，导致 Intel Arc B70 运行时 OOM（[#27595](https://github.com/ggml-org/llama.cpp/issues/27595)）。
  - Vulkan Flash Attention 回退到 SCALAR 路径，导致 Intel Arc B580 上 prompt 处理出现 O(N²) 级性能退化（[#27638](https://github.com/ggml-org/llama.cpp/issues/27638)）。
- **低严重度**：
  - 循环状态 “sticky NaN” bug 已在开放 PR 中修复（[#31913](https://github.com/ggml-org/llama.cpp/pull/31913)）。
  - 工具调用参数中的非法 UTF-8 现在会在公共代码中进行清洗处理（[b12199](https://github.com/ggml-org/llama.cpp/releases/tag/b12199)）。

## 6. 对应用开发者的意义
- **可复现性**：Top-K 确定性修复对依赖可复现采样的智能体工作流至关重要；请升级至 b12208 或更高版本。
- **投机解码注意事项**：在 [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) 修复之前，生产环境中请避免对量化目标模型使用 draft 模型投机解码，尤其是确定性贪心流水线场景。
- **硬件适配**：如果部署在 Intel Arc GPU 上，可关注 SYCL 后端的优化（FA 向量内核、设备端 MoE 调度器），以获取近期吞吐提升。
- **MoE 效率**：MoE 缓存与流上传改进将降低大型 MoE 模型（如 Qwen3.8-MoE）在 CUDA 和 SYCL 上的延迟；CPU-GPU 混合部署可测试 b12206 及以上版本。

---

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 技术简报 — 2026-11-09

## 1. 近 7 日要闻
Ollama 发布了两个补丁版本（v0.40.14 与 v0.40.15），重点围绕 Claude Code 集成、云端响应解码，以及对小米 MiMo V2.6 代码/智能体模型的支持。当前未解决的 issue 主要集中在 NVIDIA RTX 50 系列与 AMD Vulkan 配置下的 GPU/后端回归问题，以及长期以来对模型管理和 UI 体验优化的功能请求。活跃的 pull request 包括显存预测、KV cache 尺寸计算的重要基础设施工作，以及对 Rockchip NPU 的新后端支持。

## 2. 版本发布与破坏性变更
- **[v0.40.14](https://github.com/ollama/ollama/releases/tag/v0.40.14)**：`ollama launch claude` 现在会遵循模型自身的输出 token 上限，移除了此前对云端模型默认的 128k 输出限制；`/api/chat` 接口上的云端网页搜索响应现在可以正确解码，包括压缩负载。
- **[v0.40.15](https://github.com/ollama/ollama/releases/tag/v0.40.15)**：新增对小米 MiMo V2.6（9B 代码/智能体模型）以及 AutoTrust 决策模型的初始支持。没有报告 API 层面的破坏性变更。

## 3. 新模型与硬件支持
- **新模型**：[MiMo V2.6 9B](https://ollama.com/library/mimo-v2.6) — 为代码生成和智能体工作流优化，可通过 `ollama run mimo-v2.6` 运行。
- **开发中的后端支持**：PR [#19480](https://github.com/ollama/ollama/pull/19480) 为 RK3588/RK3576 芯片组新增原生 Rockchip NPU（`rknpu`）后端，在 Linux 平台上将 prefill、MoE 算子和 flash attention 卸载到 NPU 硬件执行。
- **开发中的模型兼容性支持**：PR [#17965](https://github.com/ollama/ollama/pull/17965) 会自动检测 `ornith` 和 `qwen35` 渲染器/解析器，修复未显式配置时的工具调用失败问题。

## 4. 性能与优化
- **显存预测精度**：PR [#19327](https://github.com/ollama/ollama/pull/19327) 重构了 KV cache 尺寸计算逻辑，使用真实的 `head_count_kv` 和 head 维度逐层计算，消除了针对异构层配置模型因显存估算过高导致的调度器驱逐问题。
- **GPU 显存管理**：PR [#19284](https://github.com/ollama/ollama/pull/19284) 在独显上加载新模型时，防止对纯 CPU 运行器（如 `num_gpu=0` 的嵌入模型）的误驱逐，避免不必要的模型重载。
- **模型加载效率**：PR [#19614](https://github.com/ollama/ollama/pull/19614) 统一了所有来源类型下的 MoE 专家堆叠逻辑，并新增无损的逐 tensor FP8 导入支持，降低 FP8 量化模型的内存开销。

## 5. 稳定性与回归问题
按严重程度（对生产推理的影响）排序：
1. **高**：[Issue #19558](https://github.com/ollama/ollama/issues/19558) — 在 v0.40.14 与 v0.40.15-rc2 版本中，AMD Renoir 核显（gfx90c）上的 Vulkan 后端崩溃（`NTSTATUS 0xe06d7363`），所有模型（包括 ~380MB 的小模型）都无法加载。暂无关联的修复 PR。
2. **高**：[Issue #19439](https://github.com/ollama/ollama/issues/19439) — Windows 平台上 RTX 5090 的运行器在工具调用时断开连接，导致 `/tokenize` 接口返回 HTTP 500 错误，影响多轮智能体工作流。暂无关联的修复 PR。
3. **中**：[Issue #17748](https://github.com/ollama/ollama/issues/17748) — AMD Radeon 780M 的 Vulkan 回归问题（v0.32.10+ 版本出现），运行较大模型时报错“Not enough memory for command submission”和 `ErrorDeviceLost`。暂无关联的修复 PR。
4. **中**：[Issue #19577](https://github.com/ollama/ollama/issues/19577) — 空闲的 `llama-server` 运行器在 `keep_alive` 超时后未被终止，造成显存泄漏，导致后续模型加载失败。暂无关联的修复 PR。
5. **低**：[Issue #19596](https://github.com/ollama/ollama/issues/19596) — `gemma4:12b-it-qat` 的 Modelfile 存在拼写错误（配置键误写为 `toos` 而非 `tools`），导致该模型的原生工具调用功能失效。暂无关联的修复 PR。

## 6. 对应用开发者的影响
- 如果你在 Claude Code 中使用 Ollama 云端模型，v0.40.14 移除了 128k 输出 token 的上限，现在可以充分利用完整的上下文窗口进行超长代码生成。
- 在 AMD Vulkan 或 NVIDIA RTX 50 系列硬件上运行工具调用工作流的智能体开发者，应暂时锁定到 v0.40.14 之前的版本，直至运行器断开连接和崩溃的回归问题得到解决。
- 正在开发中的逐模型 `OLLAMA_NUM_PARALLEL` 功能（Issue [#11977](https://github.com/ollama/ollama/issues/11977)）以及 Modelfile 中 `PARAMETER env` 的支持（PR [#16711](https://github.com/ollama/ollama/pull/16711)），很快就能让你按模型粒度优化并发数和环境配置，减少嵌入模型和非并行工作流的显存过度分配。
- 新增的 MiMo V2.6 模型专为代码/智能体任务打造，是在代码助手和工具调用工作流中替代通用大模型的优质选择。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 每周技术摘要 — 2026-11-09

## 1. 近 7 天重点动态
LiteLLM 发布了稳定的 LTS 补丁线（v1.108.x），同时为即将推出的 v1.109 和 v1.110 版本发布了开发版与候选发布版构建。社区当前的核心工作聚焦于成本与计费准确性、提供商转换 bug 的修复，以及两个高优先级路线图项目：基于 Rust 的网关重写（目标是实现亚毫秒级开销），以及全新的 LiteFlow 工作流执行层。

## 2. 版本发布与兼容性变更
- **LTS 线 v1.108.3**（最新 LTS 补丁版本）：`lts` 镜像标签现已同步最新的 LTS 发布版本——拉取镜像请使用 `ghcr.io/berriai/litellm:lts`。所有镜像均已通过 cosign 签名；可使用提交 `e82a3c6` 中固定的公钥（`ghcr.io/berriai/litellm:v1.108.3`）进行验证。
- **开发/预发布版本迭代**：已发布 v1.110.0-dev.2、v1.110.0-dev.1、v1.107.0-rc.3 和 v1.109.0-rc.1；rc.3 版本基于已审核的 #50129 合并提交（`f9778e9`）构建。
- **本周期内无破坏性 API/配置变更**；LTS 补丁版本均向后兼容。

## 3. 新增模型与硬件支持
- **DeepSeek Fetch 工具与代理路由**（PR #50618）：在现有搜索能力之外新增 `litellm.fetch`/`litellm.afetch` 接口及对应代理路由——解决了 #48681 中提出的需求。
- **Prism 提供商**（PR #40914）：将 Prism 注册为原生提供商，内置 DeepSeek V4 / V4.1 Flash 模型元数据；支持 Chat Completions、Responses 和 Messages 三类路由接口。
- **xAI Grok 令牌计数**（PR #50647）：将 Grok 的令牌计数切换为 xAI 官方分词器——计数结果与实际可计费用量的误差控制在约 3% 以内（此前使用 OpenAI 分词器时，计数偏低最多可达 99%、偏高最多可达 84%）。
- **外部类 OpenAI 提供商加载**（PR #50623）：启动时执行 `litellm --providers /path/to/providers.json` 可合并外部提供商配置文件（重复的 slug 以外部文件为准；配置文件错误会导致启动失败）。
- **OpenSearch 透传**（PR #50573）：管理员可注册索引，并按密钥/团队粒度配置读写权限；LiteLLM 使用自身的 AWS 凭证进行签名（与 Azure AI Search 透传机制一致）。

## 4. 性能与优化
- **Rust 迁移主工单**（#31263）：正在招募 beta 测试人员；目标是将网关开销控制在亚毫秒级。安装相关问题跟踪在 #31261（暂未更新），计划通过兼容的 wheels 将 Rust 扩展打包进默认的 `pip install litellm` 安装包。
- **限流器跳过 Redis 写入**（#31880）：提出修复方案，针对未配置限制的密钥/用户/团队，跳过调用后的 Redis 计数器写入——在高吞吐量场景下减少无效的 Redis I/O；该工单暂未更新。
- **Helm 迁移 Job 选择器 bug**（PR #40393）：当前迁移 Job 的 Pod 会匹配 LiteLLM Service 的选择器，原因是继承了 `litellm.selectorLabels`；修复方案是从 Job 的 Pod 模板中移除这些标签。

## 5. 稳定性与回归问题
按严重程度排序（数据/正确性问题 > 流式传输 > 身份验证）：
1. **流式传输用量计数偏低**（#36114）：与提供商无关；根本原因在于流聚合层（Front-Proxy → Upstream-Proxy → Bedrock），即使已修复 `chunk_parser()` 仍存在问题——工单开放中，已有 7 条评论。相关问题：客户端提前断开连接会丢失用量/计费数据（#14457，已关闭），以及最终分片的 `choices` 非空时会丢弃 cached_tokens 计数（#36168，已关闭）。
2. **`/key/update` 操作导致预算窗口消费额异常下降**（#49179）：进行中的请求成本不会计入 `LiteLLM_BudgetWindowSpend`（SpendLogs 与密钥消费额统计均正确）——已关闭。关联 bug：`/key/update` 接口未对 `budget_duration` 字段做管理员权限校验（#39993，对应 PR 开放中）。
3. **Anthropic 缓存令牌重复计费**（#40006，修复见 PR #40016）：配置 `custom_cost_per_token` 并启用 `cache_read_input_token_cost` 时，缓存读取令牌会被重复计费（按常规输入费率 + 自定义缓存费率双重收取）——修复 PR 开放中。
4. **Gemini 流式工具调用数据损坏**（#25869）：`stream_chunk_builder` 会损坏 `server_side_tool_invocations` 与 `thought_signatures`——导致后续轮次出现「工具调用上下文损坏」错误——已关闭。
5. **Qwen3-TTS 音频/语音生成失败**（#20078）：`/v1/audio/speech` 接口强制要求 `voice` 参数，且通过 vLLM 提供服务时会剥离自定义参数——工单开放中，已有 8 条评论。
6. **MCP 工具错误未正确透传**（#49359）：MCP 执行失败时，Anthropic `tool_result` 的 `is_error` 标记会被丢弃——工单开放中。
7. **JSON 定义的类 OpenAI 提供商丢失工具参数**（#48145）：v1.106 版本中，当模型未在目录中注册时，工具定义不会传递给模型（1.81 版本中可正常工作）——工单开放中，已有 9 条评论。

## 6. 对应用开发者的影响
- **计费与量化准确性是本周期核心主题**：如果你使用 Grok、带缓存的 Anthropic 服务或流式代理，在信任配额仪表盘之前请先审计你的消费日志——缓存重复计费与流式用量计数偏低的问题可能会导致成本统计出现显著偏差。可关注 PR #50647（Grok 分词器）与 #40016（缓存令牌计费）的后续发布。
- **管理员需强化密钥配置安全**：合并 PR #39993，将 `/key/update` 接口的 `budget_duration` 字段操作限制为管理员权限；PR #50622 现已支持在设置 `turn_off_message_logging` 时，从调试日志中脱敏提示词与补全文本（消息内容不会再通过 `--detailed_debug` 泄漏）。
- **新增提供商与集成能力**：你现在无需修改核心代码即可接入 Prism（DeepSeek V4）、DeepSeek Fetch 工具、OpenSearch 索引透传，以及使用外部 JSON 文件定义提供商配置——适合不想改动核心配置的团队使用。
- **Rust 网关进展值得关注**：如果你正在评估 LiteLLM 用于低延迟的智能体路由场景，#31263 中亚毫秒级延迟的 Rust 版本即将进入公开 beta 阶段；建议现在就加入测试组，无需等到正式版发布。
- **升级路径**：生产环境建议固定使用 `lts` 标签；当前稳定的版本线为 v1.108.3。开发版/候选发布版（v1.109-rc.1、v1.110-dev）属于预发布版本——请勿部署到生产环境。

---

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 周报 — 2026-11-09

## 1. 近7天要闻
Unsloth 发布了 **三个测试版本**，重点优化性能、定制 UI、改进桌面工作台。最近24小时的工程投入主要集中在 **扩散模型/图像生成性能**、上下文并行训练正确性、以及 vLLM/FlashInfer 集成；仅 11月9日当天，维护者 `danielhanchen` 就提交了约 15 个待合并 PR。

## 2. 版本发布与破坏性变更
过去一周发布了三个测试版本：
- [**v0.1.916-beta**](https://github.com/unslothai/unsloth/releases)：优化长对话下的输入/搜索性能，提升图像/视频加载速度，支持双 GPU 图像/视频生成，支持每个聊天独立浏览器、浮动浏览器窗口。
- [**v0.1.915-beta**](https://github.com/unslothai/unsloth/releases)：支持 Qwen3.8-Flash-Next Dynamic V3.1，新增 Glass 测试主题，提供 Composer 位置滑块，支持模型在浏览器内交互文件，降低闲置内存占用，切换 GGUF 模型时保留聊天上下文，加快 MLX 加载。
- [**v0.1.914-beta**](https://github.com/unslothai/unsloth/releases)：新增 Glass 主题，支持自定义背景/欢迎语/聊天样式，生成速度更快，扩展多 GPU 训练选项，支持 CPU 训练。

发布说明中未标记破坏性 API 变更。Issue [#16520](https://github.com/unslothai/unsloth/issues/16520) 要求将 torch 2.13.0/2.14.0 extras 发布到 PyPI —— 最新 wheel 中目前缺失该组件。

## 3. 新模型与硬件支持
- **新模型**：Qwen3.8-Flash-Next Dynamic V3.1（[v0.1.915](https://github.com/unslothai/unsloth/releases)）；LFM3-1.7B 的功能请求 [#15588](https://github.com/unslothai/unsloth/issues/15588) 已关闭（已实现）。
- **上下文并行 / Ulysses**：PR [#12052](https://github.com/unslothai/unsloth/pull/12052)（为 Qwen3.5 GatedDeltaNet 提供 FSDP2 + Ulysses）、PR [#15883](https://github.com/unslothai/unsloth/pull/15883)（为 Gemma 4 文本模型提供 Ulysses）、PR [#17183](https://github.com/unslothai/unsloth/pull/17183)（提供 gpt-oss 的 Ulysses 证据 —— attention sinks、MoE、aux off）。
- **近期 PR 针对的扩散模型**：FLUX.3、Qwen-Image-2.1、LTX-2.5、Wan、MiniMax-H3 Sol VAE。
- **硬件/后端**：Intel XPU float64 处理（[#17070](https://github.com/unslothai/unsloth/pull/17070)）、CPU int8 降噪器支持（[#17178](https://github.com/unslothai/unsloth/pull/17178)）、Apple MPS/CPU VAE 分块尺寸（[#17186](https://github.com/unslothai/unsloth/pull/17186)）。RX 5700 XT（Win10）上的 Vulkan 仍在未关闭的 Issue [#16395](https://github.com/unslothai/unsloth/issues/16395) 中被报告存在问题。

## 4. 性能与优化
已合并或正在推进的可落地优化工作：
- **vLLM 启动**：PR [#17063](https://github.com/unslothai/unsloth/pull/17063) 将预编译 FlashInfer 内核安装到 vLLM 引擎环境中 —— 消除每次新建引擎环境时首次启动的 nvcc JIT 编译耗时。
- **CPU VAE 解码**：PR [#17186](https://github.com/unslothai/unsloth/pull/17186) 报告通过根据 CPU/MPS 主机空闲内存调整 VAE 分块尺寸，实现 **2.1 倍更快的 512px CPU 解码**。
- **RAG 数据摄入**：Issue [#16715](https://github.com/unslothai/unsloth/issues/16715) 记录逐文档嵌入约为 99 ms/分块，而批量嵌入仅为 2.07 ms/分块 —— 已标记为已知性能差距。
- **内存优化**：[#17179](https://github.com/unslothai/unsloth/pull/17179) 将 LTX-2.5 文本编码器从 23.9 GB bf16 切换为 13.0 GB INT8 ConvRot 托管模式；[#17184](https://github.com/unslothai/unsloth/pull/17184) 避免将已发布的文本编码器重复写入磁盘；[#17178](https://github.com/unslothai/unsloth/pull/17178) 在 CPU 上保持降噪器权重为 int8（相比 float32 展开降低 4 倍权重体积）。
- **内核/注意力效率**：[#17180](https://github.com/unslothai/unsloth/pull/17180) 将 strided Q/K/V 直接传入 cuDNN 注意力，而非进行连续拷贝；[#17101](https://github.com/unslothai/unsloth/pull/17101) 为每个 Wan 融合内核编译单个 Triton 二进制文件，而非按序列长度生成多个变体；[#17182](https://github.com/unslothai/unsloth/pull/17182) 在 FLUX.3 / Qwen-Image-2.1 提示词编码中仅保留实际读取的隐藏状态。

## 5. 稳定性与回归问题
按严重程度排序：
1. **高 — 正确性/推理循环**：[#17015](https://github.com/unslothai/unsloth/issues/17015)（未关闭，11月7日）：在 Unsloth Studio 0.1.916 中，Qwen 混合模型在使用 MCP 工具后，每一轮都会重新处理完整提示词 —— 严重降低智能体工作流吞吐量。
2. **高 — 崩溃/挂起**：[#17166](https://github.com/unslothai/unsloth/pull/17166)（已关闭，修复已合并）：sm_89（如 L4）上的 fp8 降噪器在 torch < 2.12 时，由于 CUDA graph 重放，首次渲染会挂起。
3. **中 — UI 回归**：[#16603](https://github.com/unslothai/unsloth/issues/16603) — 长对话导致 UI 卡顿（Web + 桌面端）；[#15999](https://github.com/unslothai/unsloth/issues/15999) — AppImage Studio UI 极度卡顿；[#16706](https://github.com/unslothai/unsloth/issues/16706) — `search_conversation` 工具消失（第3次复发）。
4. **中 — 内存**：[#14487](https://github.com/unslothai/unsloth/issues/14487)（未关闭） — 疑似磁盘/内存泄漏，每个会话流失 200–400 MB 且无清理路径。
5. **中 — 模型正确性**：[#16699](https://github.com/unslothai/unsloth/issues/16699) — Gemma-4-thinking 聊天模板会剥离推理内容；[#15285](https://github.com/unslothai/unsloth/issues/15285) — DeepSeek V4.1 Flash GGUF 模板破坏图像标记讨论。
6. **低 — 主题/UX**：Glass 主题一致性问题（[#16770](https://github.com/unslothai/unsloth/issues/16770)、[#16820](https://github.com/unslothai/unsloth/issues/16820)），模型中心渲染故障（[#17004](https://github.com/unslothai/unsloth/issues/17004)、[#16962](https://github.com/unslothai/unsloth/issues/16962)）。

## 6. 对应用开发者的意义
- **如果你在全新环境中提供基于 vLLM 的端点**：待 [#17063](https://github.com/unslothai/unsloth/pull/17063) 合并到正式版本后，冷启动速度会更快 —— 预编译 FlashInfer 内核可消除首次运行的 nvcc 编译。
- **如果你在 Qwen 混合模型上运行带 MCP 工具的智能体循环**：请关注 Issue [#17015](https://github.com/unslothai/unsloth/issues/17015) —— 每轮重新处理完整提示词将占用大量 token 预算；在修复前，可降级到旧版 Studio 构建或禁用大型工具目录。
- **如果你在 Apple Silicon 或 CPU 上部署图像/视频生成**：正在推进的扩散模型相关 PR（[#17186](https://github.com/unslothai/unsloth/pull/17186)、[#17184](https://github.com/unslothai/unsloth/pull/17184)、[#17178](https://github.com/unslothai/unsloth/pull/17178)）将显著降低内存占用与解码延迟；预计下一版本会有明显提升。
- **如果你依赖长对话体验或滑动上下文**：[#16603](https://github.com/unslothai/unsloth/issues/16603) 以及未关闭的功能请求 [#10345](https://github.com/unslothai/unsloth/issues/10345)（以人为中心的上下文管理）表明，上下文窗口处理仍在积极重构中 —— 上线前请验证你的摘要/检索假设。
- **如果你需要更新版本的 torch 构建**：在生产环境 wheel 中采用 torch 2.13/2.14 extras 前，请确认 [#16520](https://github.com/unslothai/unsloth/issues/16520) 已解决。

---

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*