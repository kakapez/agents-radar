# AI 基础设施周报 2026-10-05

> 生成时间: 2026-10-05 01:47 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# 跨项目AI基础设施周度对比报告 | 2026-10-05
## 1. 生态概览
本周AI基础设施领域的发展动能集中在全推理栈层面：成熟的服务引擎优先推进硬件适配与生产稳定性，而终端用户运行时则向决策模型、多模态生成等专用工作负载拓展。vLLM与SGLang在大规模云端服务领域持续正面竞争，双方均大力投入Blackwell GPU支持、Flash系列模型优化以及解耦式KV服务的可靠性建设。本地/边缘运行时（llama.cpp、Ollama）正快速迭代多模态支持与硬件覆盖范围，7天内分别发布10个和2个版本。网关层与微调层则聚焦安全加固与垂直工作负载优化：LiteLLM推出标准化供应链签名机制，Unsloth则针对消费级与工作站硬件升级了扩散模型与TTS微调能力。

## 2. 活跃度对比
| 项目 | 近7天发布状态 | 核心Issue动态 | 核心PR动态 |
|---------|-------------------------------|--------------------|-----------------|
| vLLM | 无新版本发布；开发活跃度高 | 10+个跟进Issue，最高严重级：MTP投机解码崩溃（45条评论，9 👍） | 12+个已合并/待处理PR，覆盖稳定性、硬件适配与优化方向 |
| SGLang | v0.5.21（重大版本，含779个PR，227位贡献者） | 10个跟进Issue，最高严重级：QSA前向扩展中出现CUDA非法内存访问 | 8+个已合并PR，聚焦性能与模型支持 |
| llama.cpp | 10个版本（b11390–b11401），全部向下兼容 | 8个跟进Issue，最高严重级：SYCL后端大规模故障 | 10+个已合并/待处理PR，覆盖后端与功能模块 |
| Ollama | 2个版本（v0.35.0、v0.35.1），新增 `/v1/systemone` 接口 | 7个跟进Issue，最高严重级：Ollama Cloud Pro 故障率达95%（54条评论，22 👍） | 8+个待处理PR，聚焦问题修复与优化 |
| LiteLLM | 10个版本（v1.101.4 至 v1.105.0-rc.1），全部通过Cosign签名 | 12个跟进Issue，最高严重级：预算管控绕过漏洞 | 8+个已合并PR，覆盖安全、可观测性与兼容性 |
| Unsloth | 1个Beta版本（v0.1.902-beta） | 6个跟进Issue，最高严重级：多GPU张量拆分解码性能回退2.9倍 | 7+个已合并/待处理PR，覆盖模型与优化方向 |

## 3. 模型支持竞速
### 本周新增支持
| 项目 | 新增模型/架构支持 |
|---------|--------------------------------|
| SGLang | DeepSeek-V4.1 Flash（LLM/VLM，生产就绪，搭载TRT-LLM稀疏MLA后端 + Hopper架构下MXFP4 KV缓存）、GigaChat 3.5（LLM/VLM） |
| Ollama | 通过 `/v1/systemone` 接口支持Cloudflare Clef（27B）与Clef Flash（9B）多模态决策模型 |
| Unsloth | 支持NVFP4/INT4/MXFP4检查点的4比特端到端LoRA训练；Laya决策模型推理速度提升4倍 |
| vLLM | Qwen4Exp PLE嵌入量化（修复INC W4A16检查点问题，新增BF16 PLE支持）、GLM5Next索引器键归一化重构 |
| llama.cpp | 支持混合嵌入+原始token批量处理（解锁Paligemma等非因果多模态工作流） |
| LiteLLM | 兼容Azure GPT-5 `reasoning_effort='none'` 参数、支持OpenAI `input_audio` token计数、同步OpenRouter DeepSeek V4 Flash计费映射 |

### 竞争格局
SGLang在生产级大模型高性能服务领域处于领先地位，其端到端优化的DeepSeek-V4.1 Flash技术栈表现优于vLLM仍在稳定中的Flash系列支持。Ollama率先面向终端用户推出标准化决策模型接口，与新兴的Jev API规范对齐。llama.cpp在本地/边缘多模态与量化格式的覆盖广度上保持领先，全新PTQ1_0 1.75比特三值格式正处于审核阶段。

## 4. 性能前沿
优化工作集中在五大高影响力领域：
1. **KV缓存创新**：SGLang为Hopper架构上的DeepSeek V4推出MXFP4 KV缓存，KV容量较FP8提升37%；vLLM推进针对旧算力架构的FP8 QSA KV缓存支持；llama.org为循环/注意力混合模型开发了混合缓存复用机制。
2. **量化效率**：vLLM稳定了W4A16与BF16 PLE嵌入量化；Unsloth实现了NVFP4/INT4/MXFP4的4比特端到端LoRA训练；llama.cpp推进跨后端的PTQ1_0 1.75比特三值量化落地。
3. **分布式与解耦式服务**：vLLM修复了基于RDMA的解耦部署中KV连接器休眠模式的正确性问题；SGLang的预填充上下文并行开发接近完成，同时推进解码侧Helix并行；Unsloth解决了多GPU张量拆分解码的性能回退问题。
4. **内核与批处理优化**：SGLang推出专用MiMo本地音频注意力内核（H200上速度提升44倍），并实现Kimi-K3 MLA解码负载均衡；llama.cpp对x86 tinyBLAS K尾运算进行向量化优化；vLLM新增可选FlashInfer MoE搜索策略，缩短内核搜索路径。
5. **冷启动与资源效率**：SGLang的权重缓存守护进程将Qwen3-235B FP8权重加载时间从5分钟以上缩短至1秒以内；Ollama通过移除JSON往返流程优化嵌入接口延迟；Unsloth通过CUDA图卸载降低扩散模型的显存占用。

## 5. 层级定位
| 层级 | 项目 | 核心价值主张 | 主要使用场景 |
|-------|----------|------------------------|------------------|
| **高性能服务引擎** | vLLM, SGLang | 为大规模云端LLM/VLM部署提供极致吞吐量与低延迟，搭载先进调度、解耦式服务与硬件专属内核优化 | 云原生推理端点、高流量Agent服务、大模型生产部署 |
| **本地/边缘运行时** | llama.cpp, Ollama | 广泛的硬件兼容性、轻量部署、易用性强，适用于端侧或小规模自托管推理 | 桌面AI应用、边缘部署、消费级/工作站本地模型服务 |
| **LLM网关** | LiteLLM | 统一100+服务商的API抽象，内置访问控制、预算管控、可观测性与供应链安全能力 | 多服务商LLM编排、成本治理、Agent技术栈的集中可观测性 |
| **微调与推理优化框架** | Unsloth | 为LLM、扩散模型与音频模型提供内存高效的快速微调与推理，聚焦消费级硬件 | 自定义模型适配、低显存微调、桌面AI开发工作流 |

## 6. 趋势信号
### 从本周动态提炼的行业趋势
1. **决策模型正成为独立的工作负载类别**：Ollama全新的 `/v1/systemone` 接口、Unsloth实现的Laya决策模型4倍提速，以及Cloudflare的Clef模型生态，表明行业正从“复用通用LLM处理分类/路由任务”转向专用API与模型，且后者的接受度持续提升。
2. **Blackwell GPU适配是服务引擎的首要硬件优先级**：vLLM与SGLang都在积极修复SM100/SM120/SM121硬件上的兼容性、吞吐量与量化问题，表明企业级Blackwell部署正在加速，但仍处于成熟阶段。
3. **解耦式KV服务正从实验阶段迈向生产就绪**：vLLM对RDMA KV连接器休眠模式的修复，以及SGLang兼容DSA的解码侧基数缓存，表明预填充/解码解耦正成为大规模服务的标准可靠性功能。
4. **供应链安全已成网关层的必备基础能力**：继此前PyPI遭入侵事件后，LiteLLM所有版本均采用标准化Cosign镜像签名，反映出企业对可认证AI基础设施软件的需求日益增长。
5. **多模态批处理融合正在加速**：llama.cpp支持混合嵌入+token批量处理，vLLM收到ASR模型相关需求，表明服务技术栈正演进为可在统一批处理中原生处理异构模态输入，而非采用独立的视觉/音频/文本管道。

### 给应用/Agent开发者的行动建议
- 针对NVIDIA硬件上的生产级大模型服务，DeepSeek-V4.1 Flash工作负载优先选择SGLang，以获取优化的MXFP4 KV缓存与TRT-LLM稀疏注意力；迁移至SM120硬件前，需关注vLLM的Blackwell与Flash系列稳定性修复进展。
- 对于依赖决策模型的Agent工作流，可评估搭配Clef 27B使用Ollama的 `/v1/systemone` 接口（v0.35.1版本中避免使用Clef Flash，存在稳定性问题），以降低非结构化输出的解析开销。
- 对于多服务商部署，需使用Cosign验证LiteLLM Docker镜像签名，并通过外部告警验证虚拟密钥预算管控能力——目前关键的预算绕过漏洞修复仍在进行中。
- 针对扩散模型与音频模型的本地/桌面微调需求，可关注Unsloth的Qwen3-TTS微调PR与低显存扩散优化进展，以在消费级硬件上实现自定义语音与图像工作流。
- 暂勿将Intel SYCL部署升级至最新llama.cpp版本，同时避免在关键任务工作负载中使用Ollama Cloud Pro——目前存在大面积活跃回退问题，且暂无明确修复时间。

---

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 周报 | 2026-10-05
---
## 1. 过去7天亮点
本周没有发布新的vLLM版本，但核心稳定性、硬件适配和解耦式服务功能方面的开发活跃度仍然很高。重点工作包括Blackwell GPU兼容性修复、Qwen/GLM/DeepSeek Flash系列模型的正确性改进，以及基于RDMA的解耦部署中KV连接器睡眠模式的修复。

---
## 2. 版本发布与破坏性变更
过去7天无新版本发布，未报告有破坏性的API或配置变更。

---
## 3. 新增模型与硬件支持
### 模型支持更新
- **Parakeet TDT 0.6B v3 ASR模型**（功能请求，社区高需求：46 👍）：社区提出支持NVIDIA这款更快、更准确的ASR模型的需求，该模型在Open ASR排行榜上表现优于Whisper Large v3 Distill。目前暂无关联的实现PR。
  [Issue #23943](https://github.com/vllm-project/vllm/issues/23943)
- **ZAYA1-8B**（新模型请求）：提出上游支持Zyphra的ZAYA1-8B的需求，目前已有可用的第三方fork版本。
  [Issue #42286](https://github.com/vllm-project/vllm/issues/42286)
- **Qwen4Exp PLE嵌入量化支持**：
  - 修复了INC (AutoRound) W4A16检查点的支持问题。[PR #59990](https://github.com/vllm-project/vllm/pull/59990)
  - 新增BF16 INC PLE嵌入支持。[PR #58977](https://github.com/vllm-project/vllm/pull/58977)
  - 为计算能力<8.9的设备新增FP8 QSA KV缓存支持（已关闭PR）。[PR #59943](https://github.com/vllm-project/vllm/pull/59943)
- **GLM索引器键归一化重构**：将秩本地编译的GLM5Next索引器键归一化逻辑替换为标准的`LayerNorm`模块，以保持一致性。
  [PR #58979](https://github.com/vllm-project/vllm/pull/58979)

### 硬件与后端更新
- **Blackwell (SM100/SM120/SM121)适配**：
  - 修复了GB300 (SM 10.3)上的4个内核测试失败问题——仅为测试层面变更，不影响生产代码。[PR #59910](https://github.com/vllm-project/vllm/pull/59910)
  - 已知问题：RTX 6000 Pro (Blackwell)上未启用FP4量化。[Issue #23497](https://github.com/vllm-project/vllm/issues/23497)
  - 在SM120 (RTX PRO 6000 Blackwell)上使用`--enforce-eager`时，DeepSeek-V4.1-Flash的解码吞吐量极低，且CUDA graphs无法使用。[Issue #56892](https://github.com/vllm-project/vllm/issues/56892)
- **跨硬件兼容性（RFC）**：提议用`torch.accelerator`替换硬编码的`torch.cuda` API，以提升对非CUDA设备的支持。
  [Issue #30679](https://github.com/vllm-project/vllm/issues/30679)
- **GB10 (DGX Spark)权重加载性能问题**：在GB10上，从safetensors内存映射视图进行逐张量H2D拷贝的速度很慢，与之前报告的ROCm/Ascend问题类似。
  [Issue #58726](https://github.com/vllm-project/vllm/issues/58726)

---
## 4. 性能与优化
### 进行中的优化方向
- **批量不变性特性（99条评论，23 👍）**：基于现有部分实现，跟踪全批量不变性（确定性推理）支持及相关性能优化的进展。
  [Issue #27433](https://github.com/vllm-project/vllm/issues/27433)
- **增量式MoE专家卸载（RFC）**：通过CPU钉选内存、GPU LFRU缓存和跨层预测实现动态MoE专家权重卸载，支持在更小的GPU上运行超大规模MoE模型。PR #37190已开放，对应第一阶段实现。
  [Issue #38256](https://github.com/vllm-project/vllm/issues/38256)
- **DRY采样（功能请求，22 👍）**：请求新增DRY采样器以彻底消除重复生成，这对长上下文场景下的小模型效果尤为显著。
  [Issue #8581](https://github.com/vllm-project/vllm/issues/8581)
- **优先级调度抢占（功能请求）**：提议允许高优先级的等待请求抢占正在运行的低优先级请求，而非仅在资源耗尽时才进行驱逐。
  [Issue #40004](https://github.com/vllm-project/vllm/issues/40004)
- **可选启用的FlashInfer MoE搜索策略**：新增可选的更短普通MoE内核搜索路径（默认仍为穷举搜索），依赖上游FlashInfer PR #6032。
  [PR #59995](https://github.com/vllm-project/vllm/pull/59995)
- **torch.compile配置哈希重构**：针对近期“默认启用→默认关闭”配置哈希变更的后续工作，降低缓存键中遗漏编译相关字段的风险。
  [Issue #39479](https://github.com/vllm-project/vllm/issues/39479)

---
## 5. 稳定性与回归问题
按严重程度（影响范围+评论活跃度）排序：
1. **长序列上MTP投机解码崩溃（Qwen3.6-27B-FP8，v0.19.1）** — 长序列下`num_spec_tokens=5`时出现非法内存访问错误。45条评论，9 👍。目前暂无修复PR。
   [Issue #40756](https://github.com/vllm-project/vllm/issues/40756)
2. **Qwen3.8-Flash-Next贪婪解码非确定性** — 在SM121/GB10上，当提示长度接近`indexer_budget`（QSA稀疏注意力阈值）时，`temperature=0`下输出结果不固定。49条评论。
   [Issue #54521](https://github.com/vllm-project/vllm/issues/54521)
3. **混合Mamba/GDN模型上前缀缓存+MTP输出损坏（v0.28.0）** — 此前已关闭的Issue #43559被确认未修复。23条评论。
   [Issue #53912](https://github.com/vllm-project/vllm/issues/53912)
4. **GLM-5.3-Flash长解码质量退化** — 在B300上运行W4A16量化的GLM-5.3-Flash时，经过累积推理解码后输出质量下降。35条评论。
   [Issue #56868](https://github.com/vllm-project/vllm/issues/56868)
5. **单GPU上PLE CPU卸载死锁** — 在GB10/sm_121上TP=1运行Qwen3.8-Flash-Next时，设置`VLLM_PLE_CPU_OFFLOAD=1`会导致内核预热阶段永久挂起。19条评论。
   [Issue #53960](https://github.com/vllm-project/vllm/issues/53960)
6. **后续聊天请求中KV卸载+HMA失败** — 16条评论，2 👍。
   [Issue #41515](https://github.com/vllm-project/vllm/issues/41515)
7. **睡眠/唤醒稳定性修复（进行中）**：
   - 已修复：Mooncake RDMA和NIXL拉取连接器的KV连接器睡眠模式正确性问题（唤醒后RDMA内存注册过期）。[PR #59625](https://github.com/vllm-project/vllm/pull/59625)、[PR #59635](https://github.com/vllm-project/vllm/pull/59635)
   - 已修复：睡眠时卸载模型运行器构建缓冲区，避免GPU内存残留。[PR #59994](https://github.com/vllm-project/vllm/pull/59994)
   - 已修复：在`pause(mode="wait")`/`sleep(mode="wait")`中排空异步KV加载，防止HTTP 500错误。[PR #59993](https://github.com/vllm-project/vllm/pull/59993)
8. **工具解析器截断修复**：`HYV3ToolParser`/`HYV4ToolParser`现在会在生成被截断时（因max_tokens/stop/抢占）补全未终止的工具调用参数JSON，避免产生无效的部分工具调用。
   [PR #59620](https://github.com/vllm-project/vllm/pull/59620)
9. **准入控制突发流量修复**：`--max-num-queued-reqs`的预检检查现在会在预检阶段预留槽位，防止渲染后突发流量超出队列限制。
   [PR #58478](https://github.com/vllm-project/vllm/issues/58478)
10. **DeepSeek-V4.1压缩器环空块修复**：预热/CUDA图捕获阶段不再将压缩器状态写入块0（空块），避免内存损坏。
    [PR #58560](https://github.com/vllm-project/vllm/pull/58560)

---
## 6. 对应用开发者的影响
- **确定性推理正在推进**：批量不变性跟踪Issue（#27433）活跃度很高——如果你依赖可复现的输出（例如用于测试/受监管的工作负载），可以关注该Issue的完成进展。
- **Blackwell GPU用户需注意仍有不完善之处**：Blackwell硬件上的FP4量化、Flash系列模型的CUDA graphs以及部分内核路径仍在稳定中。生产工作负载请使用经过验证的配置。
- **解耦式服务（KV连接器）稳定性正在提升**：RDMA连接器的睡眠模式正确性修复正在落地，让解耦式预填充/解码部署的生产可靠性更高。
- **工具调用可靠性提升**：被截断的流式工具调用现在会生成有效的JSON，减少了使用流式输出+工具调用的Agent应用的错误处理开销。
- **准入控制更健壮**：突发流量不再能绕过队列限制，让高流量服务端点的容量规划更可预测。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 每周摘要 | 2026-10-05
---

## 1. 过去一周亮点
本周 SGLang 发布 v0.5.21 版本，合并了来自 227 位贡献者的 779 个 PR，正式支持 DeepSeek-V4.1 Flash 和 GigaChat 3.5。项目推进了多项高优先级路线图任务——包括面向 Hopper 架构上 DeepSeek V4 的 MXFP4 KV 缓存、以及 DSA 压缩模型的解码侧基数缓存，同时修复了推测解码前缀复用、GLM 流式工具调用过滤中的关键 Bug。CI 状态保持稳定，截至最新自动更新，共追踪到 1 个失败测试、4 个偶发失败测试。

---

## 2. 版本发布与破坏性变更
- **v0.5.21** — 重要里程碑版本，合并 227 位贡献者提交的 779 个 PR；新增模型支持，同时在服务栈全链路带来渐进式的功能与性能提升。发布说明中未提及破坏性 API 变更。
  - 发布地址：[sgl-project/sglang v0.5.21](https://github.com/sgl-project/sglang/releases/tag/v0.5.21)

---

## 3. 新模型与硬件支持
| 分类 | 项目 | 详情 | 链接 |
|---|---|---|---|
| **新模型** | DeepSeek-V4.1 Flash | LLM/VLM；已提供使用指南 | [文档](https://docs.sglang.io/cookbook/autoregressive/DeepSeek/DeepSeek-V4_1) |
| | GigaChat 3.5 | LLM/VLM；已提供使用指南 | [文档](https://docs.sglang.io/cookbook/au) |
| **模型后端** | 面向 DeepSeek-V4.1 的 TRT-LLM 稀疏 MLA | 需手动启用（`--dsv4-attn-backend trtllm`）；默认后端保持不变 | [PR #41603](https://github.com/sgl-project/sglang/pull/41603) |
| **硬件适配** | 平头哥 PPU（ZW810/ZW810E/ZW-M890P） | 已纳入上游原生支持路线图 | [Issue #37519](https://github.com/sgl-project/sglang/issues/37519) |
| **量化** | MXFP4 KV 缓存（DeepSeek V4，Hopper SM90） | 相比 FP8，KV 容量提升约 37%（单 K entry 从 584 → 368 B/token）；包含端到端编解码、内核与服务栈实现 | [PR #32741](https://github.com/sgl-project/sglang/pull/32741) |

---

## 4. 性能与优化
- **预填充上下文并行（Q3 路线图，完成度 90%）** — 剩余工作：扩展支持 flashinfer/trtllm-mha 等 MHA/GQA 后端。
  - [Issue #21788](https://github.com/sgl-project/sglang/issues/21788)
- **解码上下文并行与 Helix 并行（Q3 路线图）** — `fi_a2a`/`a2a` 现已成为 DCP 默认通信后端；带 LSE 合并的融合 fi_a2a 正在开发中。
  - [Issue #29736](https://github.com/sgl-project/sglang/issues/29736)
- **通过权重缓存守护进程实现引擎快速恢复** — 第一阶段已落地；Qwen3-235B FP8 权重加载时间从约 306–327 秒缩短至 1 秒以内。
  - [Issue #33522](https://github.com/sgl-project/sglang/issues/33522)
- **MiMo 本地音频注意力内核（Hopper）** — 专用 Triton 内核在 H200 上针对 4 token、头维度 16 的层，将每层延迟从 1.915 ms（cuDNN SDPA）降至 43.25 µs。
  - [PR #42101](https://github.com/sgl-project/sglang/pull/42101)
- **Kimi-K3 tokenspeed_mla 解码** — 在大 batch 下将 KV 拆分到更多 CTA 上，消除了 M128 路径（DCP 8，96 头）上的负载不均衡问题。
  - [PR #42538](https://github.com/sgl-project/sglang/pull/42538)
- **AMD gfx950 小批量 MoE 优化** — 针对小规模排序的专家数门控 + FP8 块缩放小 M 内核，提升了 MI355X 上低并发场景的性能。
  - [PR #41982](https://github.com/sgl-project/sglang/pull/41982)
- **HiSparse 长上下文稀疏服务** — 路线图推进中；通过在设备上仅保留热 KV 工作集，降低解码阶段的 HBM 占用。
  - [Issue #28874](https://github.com/sgl-project/sglang/issues/28874)
- **统一 MoE 路由 GEMM 门控层** — 重构以集中管理路由精度与调度逻辑。
  - [Issue #38695](https://github.com/sgl-project/sglang/issues/38695)
- **DeepSeek-V4 解码侧基数缓存（DSA 压缩 KV）** — 解决了 CUDA 上 DSA/SWA 压缩模型的启动拒绝问题；兼容 P/D 分离架构。
  - [PR #35837](https://github.com/sgl-project/sglang/pull/35837)
- **SGLang 渲染器** — `/chat` 和 `/completions` 端点已落地；CI 镜像发布与剩余缺口正在追踪。
  - [Issue #40920](https://github.com/sgl-project/sglang/issues/40920)

---

## 5. 稳定性与回归问题
*按严重程度排序；标注是否已有修复 PR。*

| 严重程度 | 问题 | 摘要 | 修复状态 |
|---|---|---|---|
| **严重** | QSA 前向扩展中出现 CUDA 非法内存访问（Qwen3.8-Flash-Next-FP8，H20 TP8）—— 8 个并发请求时触发；设置 `CUDA_LAUNCH_BLOCKING=1` / `--disable-overlap-schedule` 可抑制 | 截至 2026-09-15 根本原因尚未确认；已提出预填充得分补丁但未验证 | [Issue #37633](https://github.com/sgl-project/sglang/issues/37633) — 无已合并修复 |
| **高** | EAGLE 推测解码导致多轮流量的基数前缀复用率下降（GLM-DSA NVFP4，v0.5.16）—— 复用率从 97% 降至 40–53%，无崩溃 | **已关闭（无活跃跟进）** — 上游未解决根本原因 | [Issue #32459](https://github.com/sgl-project/sglang/issues/32459) — 无修复 |
| **高** | 同时启用 `--enable-eplb + --speculative-algorithm DSPARK` 时，草稿 CUDA 图捕获阶段崩溃：`scatter_add_` 维度不匹配 | 处理中；无关联修复 PR | [Issue #34974](https://github.com/sgl-project/sglang/issues/34974) — 开放 |
| **中** | sgl-deep-gemm 0.2.0 SM90 权重缩放变换返回非持有别名（#32188 后续问题） | 处理中；影响某个库 API 路径 | [Issue #39684](https://github.com/sgl-project/sglang/issues/39684) — 开放 |
| **中** | 混合 GDN 基数缓存在重复分支打分时出现选中 logprob 漂移 | 处理中；复现版本已锁定 2026-09-25 main 分支 | [Issue #41351](https://github.com/sgl-project/sglang/issues/41351) — 开放 |
| **中** | 禁用 `SGLANG_FORWARD_UNKNOWN_TOOLS` 时，GLM 流式输出会发出未声明的工具名称 | **已修复** — 在流式/非流式路径中统一了未知工具过滤逻辑 | [PR #34090](https://github.com/sgl-project/sglang/pull/34090) |
| **低** | L40S 上启用 `--enable-deterministic-inference` 启动崩溃（Triton 共享内存 OutOfResources） | **已关闭（无活跃跟进）** | [Issue #29149](https://github.com/sgl-project/sglang/issues/29149) |
| **低** | MLX 重叠链式解码跳过 token 计数；解码 KV 池同步写入未分配槽位 | **已关闭（无活跃跟进）** | [Issue #30093](https://github.com/sgl-project/sglang/issues/30093) |
| **低** | HiCache 的 `_check_vocab_boundary_finish` 在 `new_accepted_tokens` 为 None 时报 TypeError | **已修复** — 增加了显式 None 防护 | [PR #23806](https://github.com/sgl-project/sglang/pull/23806) |
| **基础设施** | CI 偶发测试 — 1 个失败、4 个偶发、1143 个近期修复（最后自动更新：2026-10-05） | 追踪问题活跃中；CI 维护模式当前为 **关闭** | [Issue #17050](https://github.com/sgl-project/sglang/issues/17050), [Issue #21065](https://github.com/sgl-project/sglang/issues/21065) |

---

## 6. 对应用开发者的影响
- **DeepSeek-V4.1 Flash 已在 SGLang 上达到生产可用** — 包括新增的 TRT-LLM 稀疏注意力可选路径，以及 Hopper 架构上的 MXFP4 KV 缓存，大幅提升单 GPU 上下文容量。长上下文 Agent 工作负载的吞吐量将得到改善。
- **在 GLM-DSA 上使用 EAGLE 推测解码的多轮 Agent 请测试前缀缓存命中率** — 有报告称复用率下降约 50%（无崩溃，静默发生），该问题因无活跃跟进已关闭；在对延迟敏感的 Agent 流程中依赖 EAGLE 前，请结合自身业务流量验证效果。
- **GLM 工具调用用户建议升级** — 流式未知工具过滤 Bug 已修复，`SGLANG_FORWARD_UNKNOWN_TOOLS=0` 在流式和非流式模式下行为现在保持一致。
- **权重缓存守护进程大幅缩短大模型冷启动时间** — 如果你需要频繁重启引擎（例如多租户调度或模型轮转），该功能可将量化大模型的加载时间从分钟级缩短至亚秒级。
- **SGLang 渲染器新增兼容 OpenAI 的 `/chat` 和 `/completions` 接口** — 如果你需要可直接替换的 OpenAI 风格前端，或通过 Rust 前端实现 gRPC 对等能力（开发中），该功能会很有用。
- **CI 状态健康** — 未开启维护模式；PR 合入将遵循正常 CI 时效。

---
*数据来源于 [sgl-project/sglang](https://github.com/sgl-project/sglang)，截至 2026-10-05。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 每周速递 | 2026-10-05
来源：[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)

---

## 1. 过去7天亮点
本周共发布10个标签版本（b11390–b11401），重点聚焦核心后端稳定性、服务端可观测性以及批处理灵活性。已合并的核心工作包括：支持嵌入向量与原始token混合批次（解除了非因果多模态工作流的限制）、路由模式日志颜色隔离，以及修复MoE模型的CUDA MMQ崩溃问题。进行中的PR主要针对MoE专家GPU缓存、SYCL内存正确性，以及Intel硬件上的Vulkan性能回归问题。

---

## 2. 版本发布与破坏性变更
过去7天共发布10个版本（b11390 → b11401）。无API破坏性变更，所有更新均为向后兼容的修复和功能新增：
- **b11401**：服务端/路由日志隔离 —— 子进程日志现在自带独立的ANSI颜色，消除了共享管道中跨行的颜色串色问题。[#29895](https://github.com/ggml-org/llama.cpp/pull/29895)
- **b11400**：混合批次支持 —— `llama_batch_ext` 现在支持在单个推理批次中同时接收嵌入输入和原始token ID。[#29622](https://github.com/ggml-org/llama.cpp/pull/29622)
- **b11399**：重构CUDA重排（swizzling）代码，提升可维护性。[#29612](https://github.com/ggml-org/llama.cpp/pull/29612)
- **b11398**：x86平台tinyBLAS现已支持BF16/FP16/FP32 K-tail运算的向量化。[#29806](https://github.com/ggml-org/llama.cpp/pull/29806)
- **b11397/b11391**：CUDA代码规整 —— 将`neu_padded`和`blocks_per_col`移动到其使用位置。[#29940](https://github.com/ggml-org/llama.cpp/pull/29940) [#29939](https://github.com/ggml-org/llama.cpp/pull/29939)
- **b11396/b11392**：CI修复 —— Windows LLVM构建需要ninja多配置；为安全起见设置了默认CI权限。[#29959](https://github.com/ggml-org/llama.cpp/pull/29959) [#29945](https://github.com/ggml-org/llama.cpp/pull/29945)
- **b11393**：修复chat-peg-parser的释放后使用（use-after-free）问题 —— 重置`pending_tool_call`时会清空`current_tool`。[#29942](https://github.com/ggml-org/llama.cpp/pull/29942)
- **b11390**：修复当`n_expert >> n_ubatch`时，MoE模型的CUDA MMQ内存错误问题。[#29941](https://github.com/ggml-org/llama.cpp/pull/29941)

---

## 3. 新模型与硬件支持
### 进行中（开放PR）
- **Clef视觉模型服务端支持**：扩展混合批次工作，为`llama-server`中的Clef模型启用非因果多模态输入。[#29969](https://github.com/ggml-org/llama.cpp/pull/29969)
- **K2 Horizon模型家族需求**：申请支持0.9B/3.7B/7B/32B/36B规模的MoVA架构。[#29424](https://github.com/ggml-org/llama.cpp/issues/29424)
- **PTQ1_0 三值量化**：全新的1.75-bit/权重三值格式（128元素分组）正在审核中，已完成CUDA/Metal/SYCL/Vulkan后端实现。[#29672](https://github.com/ggml-org/llama.cpp/pull/29672)
- **Hexagon SSM-conv更新**：针对状态空间模型卷积的高通HVX内核优化。[#29971](https://github.com/ggml-org/llama.cpp/pull/29971)
- **mtmd音频输出（规划中）**：关于将音频生成/去token化集成到多模态流水线的设计讨论。[#21956](https://github.com/ggml-org/llama.cpp/issues/21956)

---

## 4. 性能与优化
### 已落地
- **x86 tinyBLAS K-tail向量化**：x86平台上tinyBLAS的BF16/FP16/FP32尾部运算现已实现向量化，提升了小批量场景下的CPU推理效率。[#29806](https://github.com/ggml-org/llama.cpp/pull/29806)

### 进行中
- **MoE专家GPU LRU缓存**：常驻主机端的MoE专家将按需上传到GPU，并采用LRU缓存机制（仅适用于≤32 token的批次），降低部分卸载的MoE模型的主机-GPU传输开销。[#29887](https://github.com/ggml-org/llama.cpp/pull/29887)
- **Vulkan FWHT更宽块支持**：将快速沃尔什-哈达玛变换（Fast Walsh-Hadamard Transform）内核的块宽度从512扩展到8192，避免了大量化块回退到密集f32矩阵乘法。[#29772](https://github.com/ggml-org/llama.cpp/pull/29772)
- **Vulkan Intel MoE预填充修复**：定位并修复了PR #29182引入的导致Intel Arc MoE预填充性能下降的回归问题。[#29936](https://github.com/ggml-org/llama.cpp/pull/29936)
- **CUDA一元运算任意步长支持**：为CUDA一元运算（F16/F32/BF16）添加4D步长/非连续张量支持，减少视图/广播张量的拷贝开销。[#29781](https://github.com/ggml-org/llama.cpp/pull/29781)
- **BF16/FP16→FP32转换分块**：将精度转换拆分为512MB的块，在禁用flash attention的上下文增长过程中降低峰值显存占用。[#29442](https://github.com/ggml-org/llama.cpp/pull/29442)
- **循环模型的混合缓存复用**：新增服务端参数`--cache-reuse-hybrid N`，支持循环/注意力混合模型在提示词中间编辑时复用KV缓存（重新偏移M-RoPE并分叉循环状态）。[#29918](https://github.com/ggml-org/llama.cpp/pull/29918)

---

## 5. 稳定性与回归问题
按严重程度排序（从高到低）：
1. **[严重] SYCL后端大面积故障**：多份报告显示Intel硬件上出现崩溃/输出乱码：
   - Arc Pro B60上输出为空/乱码 + `ggml_sycl_op_mul_mat` 崩溃（回归定位在b9128–b9159之间）。[#24168](https://github.com/ggml-org/llama.cpp/issues/24168)
   - Arc A770上完全无法运行。[#27063](https://github.com/ggml-org/llama.cpp/issues/27063)
   - Lunar Lake核显（Arc 140V）上设备内存查询失败。[#28134](https://github.com/ggml-org/llama.cpp/issues/28134)
   - **修复PR进行中**：SYCL mul_mat/分块缓冲区/主机池内存错误修复。[#29889](https://github.com/ggml-org/llama.cpp/pull/29889)
2. **[高] CUDA MoE MMQ越界崩溃**：多GPU MoE配置下，首个视觉请求会在SWIGLU_CLAMP中触发非法内存访问而崩溃。[#28383](https://github.com/ggml-org/llama.cpp/pull/28383)（修复PR已开放；b11390已落地针对`n_expert >> n_ubatch`场景的部分修复 [#29941](https://github.com/ggml-org/llama.cpp/pull/29941)）
3. **[高] draft-mtp 多GPU提示词处理回归**：在多GPU层拆分配置下，Draft-MTP的提示词吞吐量大约减半（单GPU正常）。[#27428](https://github.com/ggml-org/llama.cpp/issues/27428)
4. **[高] draft-mtp 并行槽位竞态条件**：在`-np N`参数和多微批次（multi-ubatch）场景下，由于异步`t_h_nextn`设备到主机拷贝的竞态问题，接受率会骤降至0.0。[#27572](https://github.com/ggml-org/llama.cpp/issues/27572)
5. **[中] Qwen3.6 27B MTP 重复输出bug**：长会话下MTP投机解码会产生重复的`////` token。[#23577](https://github.com/ggml-org/llama.cpp/issues/23577)
6. **[中] 量化目标投机解码分歧**：在量化目标上，贪婪草稿模型的投机输出与普通推理结果不一致（BF16上一致）。[#25618](https://github.com/ggml-org/llama.cpp/issues/25618)
7. **[中] ROCm gfx1151（Strix Halo）输出损坏**：相同硬件和权重下，HIP后端输出乱码，而Vulkan后端输出完全正确。[#27579](https://github.com/ggml-org/llama.cpp/issues/27579)
8. **[低] /metrics 抓取期间服务停止处理**：在Windows CUDA配置下，VictoriaMetrics抓取指标端点会导致推理静默停止。[#29104](https://github.com/ggml-org/llama.cpp/issues/29104)

---

## 6. 对应用开发者的影响
- **多模态批次工作流限制解除**：嵌入向量与原始token的混合批次支持（b11400）简化了Paligemma等非因果视觉模型的部署——你不再需要将视觉和文本输入拆分为不同批次，降低了视觉+文本提示的延迟。
- **路由模式可观测性提升**：如果你以路由模式运行`llama-server`，子进程日志现在拥有一致且独立的颜色，大幅降低了多实例部署的调试难度。
- **MoE部署：请立即升级到b11390及以上版本**：MMQ内存错误修复解决了专家数量远大于微批次大小的大型MoE模型的崩溃问题。
- **SYCL/Intel部署：暂时不要升级到最新版本**：Arc和Lunar Lake硬件存在多个活跃回归问题；如果你依赖SYCL后端的稳定性，请使用b9128之前的版本，并关注PR #29889的修复进展。
- **循环模型服务效率即将提升**：即将推出的`--cache-reuse-hybrid`参数将大幅降低混合循环/注意力模型（例如DeepSeek V4 Flash类架构）在聊天/智能体工作负载中，提示词中间编辑带来的重复处理成本。
- **安全：新增模糊测试覆盖**：全新的GGUF解析器libFuzzer测试目标 [#29972](https://github.com/ggml-org/llama.cpp/pull/29972) 将降低不受信任的GGUF文件解析漏洞风险——如果你接受用户上传模型，此更新非常重要。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 每周摘要 | 2026-10-05
---

## 1. 过去 7 天重点
Ollama 在 v0.35.0 和 v0.35.1 中通过新增的 `/v1/systemone` 端点推出了对决策模型的原生支持，新增了对 TypeSafe Jev API 规范以及 Cloudflare Clef/Clef Flash 多模态决策模型的兼容性。付费用户出现了严重的稳定性问题，包括 Ollama Cloud Pro 95% 的失败率，以及 Qwen3.8、AMD Vulkan 和 Mac MLX 运行时的多项性能退化。同时，针对代理拉取失败、Qwen3.8 推理强度映射以及更新工作流漏洞的修复 PR 正在推进中。

---

## 2. 版本发布与破坏性变更
| 版本 | 核心变更 |
|---------|-------------|
| [v0.35.1](https://github.com/ollama/ollama/releases/tag/v0.35.1) | 通过 `/v1/systemone` 新增对 Cloudflare Clef（27B）和 Clef Flash（9B）多模态决策模型的支持；支持图像+文本输入的决策任务。 |
| [v0.35.0](https://github.com/ollama/ollama/releases/tag/v0.35.0) | 推出用于决策模型的 `/v1/systemone` 端点（与 TypeSafe Jev API 对齐），返回选项、概率和评分，适用于工单分诊、模型路由和内容分类等场景。 |

**破坏性/行为变更说明**：
- `/v1/systemone` 端点为全新功能，不会破坏现有 chat/completions API，但构建决策工作流的客户端必须迁移到新的端点架构。
- 已报告的性能退化：[Issue #18542](https://github.com/ollama/ollama/issues/18542) — v0.34.x 版本移除了 `typical_p` 参数支持，导致无法省略该参数的客户端出现故障。截至本期摘要发布，尚无回滚 PR 被合并。

---

## 3. 新模型与硬件支持
### 新模型支持
- **Clef / Clef Flash 决策模型**：通过 `/v1/systemone` 正式支持（[v0.35.1 版本](https://github.com/ollama/ollama/releases/tag/v0.35.1)）
- **K2 Horizon 系列**：MBZUAI IFM 推出的 Apache 2.0 许可 K2 Horizon 模型（0.9B–36B MoE）的功能需求已开启，官方 GGUF 产物已可用（[Issue #18698](https://github.com/ollama/ollama/issues/18698)）
- **Kolibri 1 (MLX)**：为 Kolibri 1 添加 MLX 后端支持的 PR 正在进行中（[PR #18780](https://github.com/ollama/ollama/pull/18780)）

### 新硬件/后端支持
- **Intel SYCL (oneAPI)**：Linux 平台的 Intel 独立显卡（如 Arc B70 32GB）原生支持已合并；包含完整的 llama.cpp 后端管线和设备发现功能（[PR #18333](https://github.com/ollama/ollama/pull/18333)）
- **双 GPU (CUDA + ROCm)**：针对安装程序为混合 NVIDIA/AMD GPU 系统同时下载两种运行时的功能需求已开启（[Issue #18545](https://github.com/ollama/ollama/issues/18545)）

---

## 4. 性能与优化
### 已报告的性能退化
- **Mac M4 Max CPU 使用率**：最新 main 分支构建版本在令牌生成期间 CPU 占用约 560%，较之前版本显著上升（[Issue #18038](https://github.com/ollama/ollama/issues/18038)）
- **MLX GPU 利用率不足（M4 Pro）**：与 0.35.1-rc2 版本相比，Ollama 0.40.0 上 Qwen3.8 27B MXFP8 的 GPU 使用率降低，推理速度变慢（[Issue #18754](https://github.com/ollama/ollama/issues/18754)）
- **mistral-medium-3.5:128b（M4 128GB）**：生成速度约为每分钟 1 个令牌，内存占用 127GB，有线内存使用超过 100GB，而模型大小仅为 80GB（[Issue #18770](https://github.com/ollama/ollama/issues/18770)）

### 进行中的优化
- **移除嵌入端点 JSON 往返开销**：消除 `/v1/embeddings` 中冗余的序列化/反序列化操作，降低大批量请求的延迟（[PR #18610](https://github.com/ollama/ollama/pull/18610)）
- **Qwen35 并行请求支持**：在上游 llama.cpp 修复崩溃问题后，重新启用 qwen35/qwen35moe 架构的并行请求功能（[PR #17144](https://github.com/ollama/ollama/pull/17144)）
- **MLX 分词器一致性修复**：修复预分词阶段丢弃和 BPE 合并绕过导致的令牌 ID 不匹配问题，提升 MLX 推理的准确性和速度一致性（[PR #18779](https://github.com/ollama/ollama/pull/18779)）
- **拉取重试限制**：限制直接 URL 解析尝试（每次 10 秒）和身份验证重试次数，防止拉取停滞耗尽重试预算（[PR #18437](https://github.com/ollama/ollama/pull/18437)、[PR #18452](https://github.com/ollama/ollama/pull/18452)）

---

## 5. 稳定性与性能退化
按用户影响程度排序（评论数+严重程度）：
1. **[严重] Ollama Cloud Pro 95% 失败率**（[Issue #15453](https://github.com/ollama/ollama/issues/15453)）：付费 20 美元/月的 Pro 用户报告所有云端模型（glm-5.1、kimi-k2.5、qwen3.5、deepseek-v3.2 等）几乎完全不可用，而用户网络稳定，与 ollama.com 的连接丢包率为 0%。54 条评论，22 个 👍。暂无关联的修复 PR。
2. **[高] Qwen3.8 流式传输期间 500 错误**（[Issue #17778](https://github.com/ollama/ollama/issues/17778)）：在 205k 上下文的工具调用循环中出现 `ResponseError: no user query found in messages` 错误。48 条评论，27 个 👍。通过 Qwen3.8 渲染器检测的部分修复正在进行中（[PR #18786](https://github.com/ollama/ollama/pull/18786)）。
3. **[高] clef-flash 决策模型在 /v1/systemone 上失败**（[Issue #18769](https://github.com/ollama/ollama/issues/18769)）：Clef Flash 9B Q8_0 在决策端点返回“non-finite logit”（CUDA）/“cannot open model”（CPU），但在 `/v1/chat/completions` 上可正常运行；完整的 27B Clef 在相同硬件上可正常运行。8 条评论。暂无关联的修复 PR。
4. **[中] AMD Radeon 780M Vulkan 性能退化**（[Issue #17748](https://github.com/ollama/ollama/issues/17748)）：Ollama ≥0.32.10 版本在运行较大模型时因 `ErrorDeviceLost` 崩溃；≤0.32.9 版本可正常运行。3 条评论，3 个 👍。暂无关联的修复 PR。
5. **[中] Qwen3.8 推理强度设置被忽略**（[Issue #18766](https://github.com/ollama/ollama/issues/18766)）：Qwen3.8 GGUF 模型的 `think: low/medium/high` 均映射为默认的 `xhigh`；仅 `think: false` 有效。修复 PR 已开启：[PR #18786](https://github.com/ollama/ollama/pull/18786)。
6. **[低] Mac 非管理员用户“重启以更新”失败**（[Issue #11972](https://github.com/ollama/ollama/issues/11972)）：即使输入管理员凭据，更新工作流仍会失败。27 条评论。相关的更新 CLI 修复 PR 已开启：[PR #18793](https://github.com/ollama/ollama/pull/18793)。
7. **[低] 防火墙/重定向拦截下模型拉取失败**（[Issue #18716](https://github.com/ollama/ollama/issues/18716)）：Ubuntu 上拉取时出现 `redirect target not allowed` 错误。支持环境代理的修复 PR 已开启：[PR #18730](https://github.com/ollama/ollama/pull/18730)、[PR #18731](https://github.com/ollama/ollama/pull/18731)、[PR #18733](https://github.com/ollama/ollama/pull/18733)。

---

## 6. 对应用开发者的影响
- **决策模型工作流现已可用于生产（但需注意限制）**：使用 `/v1/systemone` 执行分类、路由和分诊任务，可避免解析非结构化文本输出。建议先使用 Clef 27B 进行测试；截至 v0.35.1，Clef Flash 在决策端点存在已知稳定性问题。
- **如果依赖 `typical_p`，请避免升级到 v0.34.x+**：该参数已不再受支持，且暂无兼容垫片。如果你的客户端栈依赖此采样器，请固定使用 v0.33.x 版本。
- **Qwen3.8 的工具调用和推理强度在 v0.35.x 上不可靠**：如果你使用 Qwen3.8 构建智能体，请继续使用 v0.34.3 或更早版本，或关注 PR #18786 以获取渲染器检测和推理强度映射的修复。
- **不建议将 Ollama Cloud Pro 用于生产工作负载**：由于报告的失败率达 95% 且暂无官方修复时间表，对于关键任务应用，请使用自托管 Ollama 或其他托管服务。
- **Mac MLX 用户应暂缓升级到 v0.40.0**：CPU 和 GPU 利用率退化会导致大模型运行速度严重下降；为获得最佳 MLX 性能，请坚持使用 v0.35.1-rc2 或更早版本。
- **Intel Arc GPU 用户现在可在 Linux 上原生运行 Ollama**：已合并的 SYCL 后端为 Intel 独立显卡提供了原生硬件加速，无需 Vulkan 变通方案。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 每周简报 | 2026-10-05

---

## 1. 过去 7 天核心动态
本周，LiteLLM 为 10 个近期版本（v1.101.4 至 v1.105.0-rc.1）统一启用了 Cosign 镜像签名，进一步强化供应链安全。核心代理修复了预算执行不一致、认证注册挂起等关键问题，新功能研发则聚焦于 Lens 链路追踪可观测性和访问控制加固。社区还补齐了长期存在的提供商兼容性缺口，包括 Anthropic OIDC 联邦身份支持和 Azure GPT-5 推理参数支持。

---

## 2. 版本发布与破坏性变更
过去 7 天发布的所有版本均通过 [Cosign](https://docs.sigstore.dev/cosign/overview/) 完成 Docker 镜像签名，签名密钥对应提交 [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)。未发布任何 API 破坏性变更。
- v1.105.0-rc.1（预发布版）
- v1.104.0（稳定版）
- v1.103.3 / v1.103.2 / v1.103.1（补丁版）
- v1.102.2（补丁版）
- v1.101.4（补丁版）
- v1.105.0-dev.2 / v1.105.0-dev.1（开发版）
- v1.104.0-rc.2（预发布版）

---

## 3. 新模型与硬件支持
| 更新内容 | 详情 | 链接 |
|--------|---------|------|
| Azure GPT-5 `reasoning_effort='none'` 修复 | 解决了功能门槛错误拒绝 GPT-5 模型自定义 Azure 部署名称的问题 | [#31243](https://github.com/BerriAI/litellm/issues/31243) |
| OpenAI `input_audio` token 计数 | Token 计数器现已支持处理音频内容块，不再抛出错误 | [#40188](https://github.com/BerriAI/litellm/pull/40188) |
| 成本表同步：OpenRouter DeepSeek V4 Flash | 更新 `openrouter/deepseek/deepseek-v4-flash` 定价（输入 2.24e-08/token，输出 1.28e-06/token） | [#44533](https://github.com/BerriAI/litellm/pull/44533) |
| Azure GPT Realtime 停用日期更新 | 根据官方时间表，弃用日期调整为 2027-06-25 | [#44526](https://github.com/BerriAI/litellm/pull/44526) |
| Azure 成本与 Clarifai 模型 ID 修复 | 修正了 Azure computer-use 成本被高估 1000 倍的问题；修复了 Clarifai 模型条目重复的问题 | [#25189](https://github.com/BerriAI/litellm/pull/25189) |

---

## 4. 性能与优化
| 领域 | 更新内容 | 链接 |
|------|--------|------|
| 认证注册延迟 | 为有界注册加载添加超时机制，避免数据库扫描挂起导致代理请求停滞 | [#44530](https://github.com/BerriAI/litellm/pull/44530) |
| 消费写入可靠性 | 无日志请求时保持代理消费写入器运行，避免管道停滞 | [#44514](https://github.com/BerriAI/litellm/pull/44514) |
| Lens 服务端搜索 | 将智能体运行搜索和图表绘制从浏览器迁移至服务端，消除客户端链路获取限制 | [#44532](https://github.com/BerriAI/litellm/pull/44532) |
| 实时链路查看 | 为 Lens 新增实时排查链路流功能，支持查看工作器状态 | [#44472](https://github.com/BerriAI/litellm/pull/44472) |

---

## 5. 稳定性与回归问题
按严重程度排序：

### 严重
| 问题 | 状态 | 修复 PR |
|-------|--------|--------|
| **PyPI 供应链攻陷（v1.82.7/8）** — 已得到控制；所有受影响包均已移除。详情见[安全市政厅会议](https://docs.litellm.ai/blog/security-townhall-updates) | 进行中（状态更新） | 无 |
| [#26672](https://github.com/BerriAI/litellm/issues/26672) v1.82.3 版本预算执行绕过 — 新部署中密钥/用户的 `max_budget` 未生效 | 进行中 | 修复中 |
| [#27735](https://github.com/BerriAI/litellm/issues/27735) 过期消费数据导致虚拟密钥误报 `BudgetExceededError` — `/key/info` 显示消费低于限额 | 进行中 | 修复中 |
| [#42172](https://github.com/BerriAI/litellm/issues/42172) Anthropic 第三方 `api_base` 泄露客户端 OAuth 令牌，未使用部署 API 密钥 | 进行中 | 尚未开始 |

### 高危
| 问题 | 状态 | 修复 PR |
|-------|--------|--------|
| [#32357](https://github.com/BerriAI/litellm/issues/32357) `/v1/messages` 适配器对推理模型流编码错误 — 文本块内的 `thinking_delta` 导致 Anthropic SDK 内容为空 | 进行中 | 尚未开始 |
| [#18801](https://github.com/BerriAI/litellm/issues/18801) vLLM 流式传输 + logprobs 因 Pydantic v2 序列化错误崩溃 | 进行中（长期未更新） | 尚未开始 |
| [#43487](https://github.com/BerriAI/litellm/issues/43487) 通用流式传输块校验器接受部分块，在缺少 `text` 时抛出 `KeyError` | 进行中 | 尚未开始 |
| [#34614](https://github.com/BerriAI/litellm/issues/34614) v1.93.0 中 Redis 缓存因意外的 `ssl_check_hostname` 参数失效 | 进行中（长期未更新） | 尚未开始 |

### 中危
| 问题 | 状态 | 修复 PR |
|-------|--------|--------|
| [#39057](https://github.com/BerriAI/litellm/issues/39057) 缓存命中时 token 统计语义问题 — 消费清零但 token 列仍显示原始用量；报告聚合基准尚在讨论中 | 进行中 | 设计阶段 |
| [#20499](https://github.com/BerriAI/litellm/issues/20499) 创建用户时未发送邀请邮件 | 已关闭 | 无 |
| [#13048](https://github.com/BerriAI/litellm/issues/13048) `provider_specific_fields`（如 Anthropic 引用）未存入缓存 | 已关闭 | 无 |
| [#15560](https://github.com/BerriAI/litellm/issues/15560) 标准输入输出 MCP 服务未显示可用工具（SSE/HTTP 模式正常） | 已关闭 | 无 |

---

## 6. 对应用开发者的影响
1. **安全加固**：生产部署请使用 Cosign 验证 Docker 镜像签名 — 所有近期版本均已签名，可实现供应链溯源。若你受 3 月 Trivy 攻陷事件影响，请确认已升级至 v1.82.9+ 并查阅官方安全更新。
2. **预算控制可靠性**：若你依赖虚拟密钥预算执行功能，请关注 [#26672](https://github.com/BerriAI/litellm/issues/26672) 和 [#27735](https://github.com/BerriAI/litellm/issues/27735) — 在修复上线前，请通过 `/key/info` 验证消费限额，并为高用量密钥添加外部告警。
3. **访问控制默认规则**：空 `models` 列表会授予完全访问权限，而空 `mcp_servers` 列表会拒绝访问（[#21540](https://github.com/BerriAI/litellm/issues/21540)） — 请在密钥/团队配置中显式定义这两个字段，避免非预期权限。新增的 `search_tool_deny_by_default` 标志（[#44490](https://github.com/BerriAI/litellm/pull/44490)）即将上线，将使搜索工具行为与向量存储默认规则对齐。
4. **提供商兼容性**：现已支持 GPT-5 `reasoning_effort` 和 Anthropic 工作负载身份联邦（[#28607](https://github.com/BerriAI/litellm/issues/28607)） — 使用 Azure OpenAI 自定义部署或 Anthropic OIDC 的团队可升级使用。
5. **可观测性**：Lens 现已支持服务端链路搜索和实时排查流 — 智能体团队可突破客户端数据限制扩展追踪规模，更快调试运行中的任务。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 每周速递 | 2026-10-05
---

## 1. 过去7天亮点
Unsloth 发布 v0.1.902-beta 版本，新增桌面命令面板、可分享的运行设置，Laya 决策模型推理速度提升4倍，同时全面支持 4-bit NVFP4/INT4/MXFP4 检查点的 LoRA 训练。团队推进了 Qwen3-TTS 的微调支持，针对低显存硬件优化了扩散模型的内存占用与运行速度，并修复了多卡张量切分解码、桌面端离线模型加载中的高优先级回归问题。

## 2. 版本发布与破坏性变更
### v0.1.902-beta：命令面板 + 桌面端 UI/UX 优化
- 新增通过 Cmd 唤起的命令面板，提升桌面端导航效率
- Unsloth Desktop 新增可分享的运行设置，优化错误提示信息
- Laya 决策模型推理速度提升4倍，扩展了托管 Decision API 的支持范围
- **非破坏性变更**：LoRA 训练现支持端到端保留 4-bit 的 NVFP4、INT4 和 MXFP4 检查点
- 发布链接：[unslothai/unsloth v0.1.902-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.902-beta)

### 待上线的 API 重命名
- PR #12705 将 `block_swap_layers` 重命名为 `offload_layers`，语义更清晰；合并后原有 `block_swap_layers` 的用法需要迁移适配
- PR 链接：[unslothai/unsloth#12705](https://github.com/unslothai/unsloth/pull/12705)

## 3. 新模型与硬件支持
### Qwen3-TTS 快速微调（进行中）
- 实现 Qwen3-TTS（自回归 Talker + 代码预测器模块）的完整微调支持，响应功能需求 #3951
- PR 链接：[unslothai/unsloth#12646](https://github.com/unslothai/unsloth/pull/12646)
- Issue 链接：[unslothai/unsloth#3951](https://github.com/unslothai/unsloth/issues/3951)

### ROCm 扩散模型优化
- ROCm 平台上 FLUX 的融合 RoPE 内核，在 Ryzen AI Max（gfx1151）上图像生成速度提升8%，输出结果像素级一致
- PR 链接：[unslothai/unsloth#12701](https://github.com/unslothai/unsloth/pull/12701)

### 进行中的架构支持需求
- LFM/Mamba 快速推理适配（Issue：[#4073](https://github.com/unslothai/unsloth/issues/4073)）
- vLLM 上 Qwen3-VL LoRA 适配器加载（Issue：[#3560](https://github.com/unslothai/unsloth/issues/3560)）

## 4. 性能优化
### 扩散模型速度与内存优化
- 层卸载下的整步 CUDA 图优化：16GB L4 GPU 上 FLUX.1 推理速度提升10%，HunyuanVideo-1.5 内存占用降低 1GiB
  - PR 链接：[unslothai/unsloth#12707](https://github.com/unslothai/unsloth/pull/12707)
- 12GB/16GB 显卡上 Qwen-Image-2.1 的无接缝 VAE 分块生成，消除了生成图像中的水平/垂直伪影线
  - PR 链接：[unslothai/unsloth#12696](https://github.com/unslothai/unsloth/pull/12696)
- Windows 平台 AMD 显卡 Qwen-Image-2.1 修复：解决了 torchao 加载失败导致 16GB 文本编码器重复下载的问题
  - Issue（已关闭）：[unslothai/unsloth#11638](https://github.com/unslothai/unsloth/issues/11638)

### 决策模型加速
- v0.1.902-beta 中 Laya 决策模型推理速度提升4倍，同时扩大了托管 Decision API 的覆盖范围
- 发布链接：[unslothai/unsloth v0.1.902-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.902-beta)

## 5. 稳定性与回归问题
### 严重级别
1. **多卡张量切分解码回归**：自 b10715-mix-86bd2d3 版本起，双 RTX 5070 Ti（Windows/WSL2/Linux）上生成速度降低2.9倍，与 `max_cuda_graphs = 64` 的变更相关；修复进行中
   - Issue 链接：[unslothai/unsloth#12468](https://github.com/unslothai/unsloth/issues/12468)
2. **微调显存超用与 OOM**：持续收到反馈称微调时内存使用量高于标称值，导致大模型训练无法进行；正在调查中
   - Issue 链接：[unslothai/unsloth#4504](https://github.com/unslothai/unsloth/issues/4504)
3. **离线模型加载失败**：桌面端 v0.1.815-beta（macOS）离线时会向 Hugging Face 查询量化变体，导致已下载的模型无法加载；修复 PR 已合并
   - Issue（已关闭）：[unslothai/unsloth#12415](https://github.com/unslothai/unsloth/issues/12415)

### 中等严重级别
- **WSL CUDA 显存未用尽却 OOM**：24GB 显存的 WSL 系统在剩余2/3显存未使用时就触发 OOM 崩溃
  - Issue 链接：[unslothai/unsloth#1797](https://github.com/unslothai/unsloth/issues/1797)
- **Studio mmproj 磁盘分页回归**：近期更新导致 mmproj-F16.gguf 磁盘分页引发 t/s 大幅下降，同时 `--mlock` 参数被拒绝、额外参数被移除
  - Issue 链接：[unslothai/unsloth#12372](https://github.com/unslothai/unsloth/issues/12372)
- **Qwen-Image-2.1 重复下载**：GGUF 下载显示完成后，运行时又意外触发 19GB 的“必需资源”下载；用户体验混乱
  - Issue 链接：[unslothai/unsloth#11637](https://github.com/unslothai/unsloth/issues/11637)

### 近期已修复
- 过去一周内已解决：桌面端安装失败、项目/工具调用随机失败、Windows 安装包被 Bitdefender 误报、空闲时 CPU 持续占用等问题

## 6. 对应用开发者的影响
1. **生产级决策模型部署**：v0.1.902-beta 中 Laya 推理速度提升4倍、托管 Decision API 支持扩展，降低了依赖轻量决策模型的智能体工作流的延迟与成本；升级到最新测试版即可获得性能提升。
2. **音频生成流水线**：Qwen3-TTS 微调支持（PR #12646）将支持直接在 Unsloth 优化栈上实现自定义音色适配工作流——可关注该 PR 以规划集成。
3. **多卡推理用户**：如果你依赖张量切分模式，暂不要升级到 b10687-mix-67dfc8b 之后的版本，等 #12468 中的2.9倍速度回归问题修复后再升级。
4. **桌面端/Studio 部署**：新增的命令面板和可分享的运行设置降低了内部团队的上手成本；即将推出的 API 并发限制（PR #5482）将支持可配置队列策略，让多用户共享部署更安全。
5. **低显存扩散模型工作负载**：VAE 分块修复与卸载式 CUDA 图优化，让 Qwen-Image-2.1 和 FLUX 在 12–16GB 消费级 GPU 上也能正常运行，且无质量损失。

---

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*