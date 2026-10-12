# AI Infrastructure Weekly Digest 2026-10-12

> Generated: 2026-10-12 02:13 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Ecosystem Report — 2026-10-12
*Sources: vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth public GitHub activity*

---

## 1. Ecosystem Overview
The 7-day window shows concentrated progress across four core layers of AI infrastructure: inference engine optimization for frontier flash models, LLM gateway Rust migration for low-latency deployments, edge runtime expansion for multimodal and MoE workloads, and fine-tuning framework integration of decision model and diffusion LM workflows. Stability regressions remain a top pain point across inference engines, particularly for Blackwell (SM120) GPUs paired with speculative decoding and prefix caching on DeepSeek-V4.1-Flash and GLM-5.3-Flash. Edge and local runtimes are prioritizing cross-platform compatibility and memory efficiency for large MoE models, while gateways and fine-tuning tools are racing to add native support for agent-specific workloads like tool calling, decision models, and MCP integrations. Supply chain and security hardening also moved up the priority stack, with LiteLLM resolving a Trivy compromise and Unsloth fixing API key leaks in diagnostic reports.

---

## 2. Activity Comparison
| Project | Release Status (Last 7 Days) | Open Issues Tracked | Open PRs Tracked | Primary Activity Focus |
|---------|-------------------------------|---------------------|------------------|------------------------|
| vLLM | v0.31.0 (major release, 717 commits) | ~14 high/critical + feature requests | ~12 | Blackwell compatibility, KV cache correctness, MoE optimizations |
| SGLang | No official releases | ~6 tracked issues | ~10 | DeepSeek-V4.1 sparse prefill, DCP for DSA/MTP models, CI reliability |
| llama.cpp | 10 incremental builds (b11550–b11559) | ~6 tracked regressions | ~8 | OpenCL/Vulkan kernel optimization, server stability, MoE memory efficiency |
| Ollama | 3 patch versions (v0.40.1–v0.40.3) | ~10 tracked bugs | ~8 | Tool-calling parser fixes, Windows GPU regression fixes, llama.cpp dependency upgrade |
| LiteLLM | 5 stable + 2 pre-release + 3 dev builds | ~15 tracked bugs | ~12 | Rust gateway migration, provider translation fixes, budget enforcement |
| Unsloth | 2 beta releases (v0.1.904/905-beta) | ~6 tracked issues | ~10 | Decision model training, KV cache preemption, cross-platform sandboxing |

---

## 3. Model Support Race
New model support is distributed across layers, with no single project leading across all categories:
- **Frontier flash/MLA models**: vLLM and SGLang are the most active, with vLLM shipping default DeepSeek-V4.1-Flash SM100 optimizations in v0.31.0, and SGLang publishing a working Blackwell SM120 production field report for DeepSeek-V4.1-Flash. Both are actively fixing GLM-5.3-Flash compatibility gaps.
- **Multimodal models**: llama.cpp shipped MiniCPM-V 4.7 support and has SenseNova U1 in progress; Ollama is adding EmbeddingGemma 2 via its llama.cpp upgrade; Unsloth expanded text-diffusion LM family support (LLaDA, Dream, DiffusionGemma, etc.) and fixed Qwen-Image-2.1 GGUF classification.
- **Specialized architectures**:
  - Llama.cpp added Prism Bonsai 2 27B support and has ByteDance Ouro looped LM and H2O-Lightning-4B decision models in progress.
  - Unsloth launched end-to-end Jev-style decision model training/serving workflows.
  - Ollama is adding hybrid/recurrent model parallel slot support.
- **Provider integration (gateway layer)**: LiteLLM added ai& provider support and is fixing compatibility with Xiaomi MiMo, Qwen3-TTS, and ElevenLabs audio models.

**Leadership by segment**: vLLM/SGLang lead for data center frontier model inference; llama.cpp leads for edge/multimodal/alternative architecture support; Unsloth leads for fine-tuning of emerging model types (decision, diffusion LM).

---

## 4. Performance Frontier
Optimization effort is concentrated in six high-impact areas:
1. **KV cache innovation**: vLLM is developing context-aware prioritized eviction for agent workloads and exposing prefix cache metadata for external routers; SGLang is refactoring its unified radix cache; Unsloth is building KV cache preemption with host RAM slot parking for multi-chat workloads.
2. **Frontier model kernel optimization**: Both vLLM and SGLang are prioritizing Blackwell SM120 flash model kernels (FlashMLA, sparse MLA, DeepGEMM MoE routing) with vLLM targeting FlashInfer sparse-MLA decode kernels and SGLang working on sparse prefill group sharing for 1M-token contexts.
3. **MoE efficiency**: llama.cpp is exploring GPU-resident expert LRU caches and host RAM DMA for large MoE models; vLLM has multiple in-progress MoE kernel fusions and Humming MoE refactors; SGLang is integrating DeepGEMM MegaGate routing.
4. **Speculative decoding**: All inference engines are addressing correctness and efficiency gaps: vLLM is fixing prefix caching + MTP corruption; SGLang resolved DSpark CUDA Graph bugs and is fixing NGRAM over-sampling; llama.cpp is addressing quantized target output divergence.
5. **Gateway latency reduction**: LiteLLM’s Rust migration is targeting sub-1ms overhead, with native support for hooks, streaming, short-circuit logic, and cache consistency now landing.
6. **Cross-platform backend optimization**: llama.cpp shipped OpenCL/Vulkan kernel speedups for MoE and Gemma-4; Unsloth added Apple Silicon performance core optimization and PyTorch 2.13 batched gradient copy for distributed training.

---

## 5. Layer Positioning
| Layer | Project | Core Value Proposition | Primary User |
|-------|---------|------------------------|--------------|
| **Data center inference engine** | vLLM | High-throughput, low-latency serving for frontier models with broad hardware/backend support | Cloud providers, large-scale inference teams |
| **Data center inference engine** | SGLang | Optimized serving for flash/MLA models, decode context parallelism, and speculative decoding | Teams deploying DeepSeek/GLM frontier models at scale |
| **Edge/local runtime** | llama.cpp | Lightweight, cross-platform inference for GGUF models with minimal dependencies | Edge deployments, local development, on-prem small workloads |
| **Edge/local runtime (management layer)** | Ollama | User-friendly wrapper for llama.cpp with model management, cloud proxying, and UX tools | Developers, hobbyists, small teams running local models |
| **LLM gateway** | LiteLLM | Unified API across 100+ providers, with spend tracking, routing, and policy enforcement | Multi-tenant platforms, teams using mixed model providers |
| **Fine-tuning framework** | Unsloth | Fast, memory-efficient fine-tuning with integrated Studio for training, serving, and workflow management | ML teams fine-tuning custom models, agent developers |

---

## 6. Trend Signals
### Industry Trends
1. **Frontier flash model maturity lag**: Both leading inference engines have multiple open critical/correctness bugs for Blackwell + DeepSeek/GLM flash models, indicating that hardware-software co-design for MLA/flash architectures is still in early stages for production deployments.
2. **Agent workloads driving infrastructure evolution**: Across all layers, projects are prioritizing agent-specific features: decision model training/serving (Unsloth), tool-calling parser fixes (Ollama, LiteLLM), KV cache prefix optimization for multi-turn workflows (vLLM, SGLang), and MCP integrations (Unsloth, LiteLLM).
3. **Memory efficiency as the next MoE bottleneck**: As MoE models scale to 200B+ parameters, edge and data center runtimes are shifting from raw throughput optimization to memory hierarchy innovation (GPU expert caches, host RAM DMA, KV preemption) to enable larger models on lower-memory hardware.
4. **Low-level language migration for performance-critical paths**: LiteLLM’s Rust gateway migration and Unsloth’s Rust-based redaction logic follow vLLM’s earlier Rust frontend work, signaling a broader shift to native code for latency-sensitive infrastructure layers.

### Actionable Takeaways for Application/Agent Developers
- **Blackwell deployments**: Delay production rollout of DeepSeek-V4.1-Flash/GLM-5.3-Flash on SM120 GPUs; stay on Hopper/SM100 with vLLM v0.29.x or validated SGLang configurations until correctness and throughput bugs are resolved.
- **Agent tool calling**: Avoid relying on native `/api/chat` tool parameters for Qwen series models across Ollama and vLLM; embed tool definitions in system prompts as a temporary workaround until parser stabilizes.
- **Multi-tenant gateway deployments**: Enable `require_auth_for_metrics_endpoint` immediately on LiteLLM, and validate budget enforcement logic on fresh v1.82.3+ deployments before using it for cost control. Schedule periodic proxy restarts to mitigate the open memory leak.
- **Edge MoE deployments**: Track llama.cpp’s GPU-resident expert LRU cache and host RAM DMA work to enable 200B+ MoE models on consumer GPUs in the near term.
- **Fine-tuning for agents**: Unsloth’s end-to-end decision model workflow eliminates the need for external decision middleware; evaluate it for agent routing and tool-use classification use cases.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Weekly Digest — 2026-10-12

---

## 1. Last 7 Days' Highlights
vLLM shipped v0.31.0 with 717 commits from 307 contributors (96 new), headlined by DeepSeek-V4.1-Flash SM100 default optimizations including FlashMLA mega attention with NVFP4 compressed KV cache and DeepGEMM sparse MQA logits. Active community focus remains on Blackwell (SM120) compatibility for frontier flash models, KV cache correctness with prefix caching + speculative decoding, and multi-modal ViT CUDA Graph support.

---

## 2. Releases & Breaking Changes
- **v0.31.0** released:
  - FlashMLA mega attention with V4.1 NVFP4 compressed KV cache is now the SM100 default for DeepSeek-V4.1-Flash ([#56935](https://github.com/vllm-project/vllm/issues/56935))
  - DeepGEMM sparse MQA logits support for the indexer ([#56254](https://github.com/vllm-project/vllm/issues/56254))
  *Note: Release notes are truncated in the source data; verify full changelog before upgrading.*

---

## 3. New Model & Hardware Support
| Category | Item | Status | Link |
|----------|------|--------|------|
| Quantization | INT8 KV cache quantization support request (currently FP8-only) | Feature request (12 👍) | [#33480](https://github.com/vllm-project/vllm/issues/33480) |
| Hardware | AMD MI355X (gfx950) performance optimization plan for Qwen3.8-2.4T-A95B Quark-MXFP4 | In progress | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| Hardware/Model | GLM-5.3-Flash SM120 (Blackwell) rope-free sparse-MLA path gap | Open bug (3 failure modes) | [#53963](https://github.com/vllm-project/vllm/issues/53963) |
| Hardware/Model | DeepSeek-V4.1-Flash SM120 missing page_block_size=32 FlashInfer sparse-MLA decode kernel | Open bug | [#59203](https://github.com/vllm-project/vllm/issues/59203) |
| Multi-modality | ViT Full CUDA Graph support tracker (Qwen3-VL, GLM-V, Kimi K2.5) | RFC / help wanted | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| Backend | Attention backend no-output path for custom/plugin backends | Open PR | [#42581](https://github.com/vllm-project/vllm/pull/42581) |
| CPU | Hierarchical all-reduce with RDMA for multi-node CPU tensor parallelism (Arm Grace) | Open PR | [#46447](https://github.com/vllm-project/vllm/pull/46447) |
| Frontend | Rust frontend fix for Qwen2.5-Omni / Qwen3-Omni / Qwen3-ASR `thinker_config` loading | Open PR | [#61128](https://github.com/vllm-project/vllm/pull/61128) |

---

## 4. Performance & Optimization
- **Batch Invariant feature + performance optimization** tracker: high community engagement (101 comments, 23 👍), following up on deterministic inference work | [#27433](https://github.com/vllm-project/vllm/issues/27433)
- **DeepSeek-V4.1-Flash SM120 (RTX PRO 6000) throughput bottleneck**: extremely low decode throughput with `--enforce-eager`, CUDA graphs unusable; requests priority fix for SM120 graph capture | [#56892](https://github.com/vllm-project/vllm/issues/56892)
- **AMD RDNA4 (gfx1201) regression**: RowWiseTorchFP8ScaledMMLinearKernel selected from v0.28, causing 5-24% decode throughput loss | [#57838](https://github.com/vllm-project/vllm/issues/57838)
- **Manual compiler fusion porting**: RFC to move fusions from `torch.compile` passes to manual model-level fusion; tracking concrete porting work | [#43224](https://github.com/vllm-project/vllm/issues/43224)
- **Triton Tensor Descriptor (TD) adoption strategy**: RFC to replace raw pointer arithmetic with upstream-recommended `tl.make_tensor_descriptor` API | [#42545](https://github.com/vllm-project/vllm/issues/42545)
- **MoE optimizations in progress**:
  - Humming MoE setup refactor into oracle | [#57538](https://github.com/vllm-project/vllm/pull/57538)
  - DSv4 Pro pack_bitmatrix Triton kernel optimization for CDNA GPUs | [#43159](https://github.com/vllm-project/vllm/pull/43159)
  - Fused CUDA kernels for MoE non-gated activations | [#43386](https://github.com/vllm-project/vllm/pull/43386)
- **KV cache observability**: PR exposes `prefix_cacheable` and `prefix_replay_tokens` in KV cache group metadata for external prefix-aware routers | [#61130](https://github.com/vllm-project/vllm/pull/61130)
- **Context-Aware KV-Cache Retention API (prioritized evictions)**: RFC for agentic workload prefix caching under concurrent load (8 👍) | [#37003](https://github.com/vllm-project/vllm/issues/37003)
- **Fast-Track Merging for Model Optimization PRs**: RFC to accelerate review of high-volume AI-generated optimization PRs (6 👍) | [#59665](https://github.com/vllm-project/vllm/issues/59665)

---

## 5. Stability & Regressions
*Ranked by severity (correctness / crash > functional > minor)*

| Severity | Issue | Details | Fix PR? | Link |
|----------|-------|---------|---------|------|
| Critical | Prefix caching output corruption on Qwen3.8-27B (TP=1) | DFlash2/DSpark + prefix caching corrupts output after cache hit on v0.30/v0.31; v0.29 and MTP work fine. Reproduced on RTX PRO 5000 (sm_120). | Not yet | [#60174](https://github.com/vllm-project/vllm/issues/60174) |
| Critical | Prefix caching + MTP output corruption on hybrid Mamba/GDN models | Persists from earlier report (#43559 closed but unfixed) in v0.28.0 | Not yet | [#53912](https://github.com/vllm-project/vllm/issues/53912) |
| Critical | GLM-5.3-Flash long-decode degeneration | W4A16 quantized model produces degraded output after accumulated reasoning decode on B300 (v0.28.1rc1) | Not yet | [#56868](https://github.com/vllm-project/vllm/issues/56868) |
| Critical | GLM-5.3-Flash repeated-token "word salad" in multi-turn agentic use | Degradation in agent workflows | Not yet | [#56605](https://github.com/vllm-project/vllm/issues/56605) |
| High | GLM-5.3-Flash CUDA illegal memory access on 4xB200 | Surfaces in 3 unrelated kernels (KDA linear-attention, MHC TileLang, TRT-LLM fused MoE) | Not yet | [#54317](https://github.com/vllm-project/vllm/issues/54317) |
| High | TP Worker hang → EngineDeadError | RPC `sample_tokens` timeout with DeepSeek-V4-Pro, TP=8, MTP speculative decoding (6 👍) | Not yet | [#41530](https://github.com/vllm-project/vllm/issues/41530) |
| High | Silent CUDA IMA (exit 0) with hybrid GDN + MTP k=3 + async scheduling | Persists through multiple prior fix classes on RTX 3090 | Not yet | [#53726](https://github.com/vllm-project/vllm/issues/53726) |
| High | Scheduler stops admitting requests under load | Deferred backlog grows while engine reports healthy | Not yet | [#53130](https://github.com/vllm-project/vllm/issues/53130) |
| High | FP8 KV cache auto-selects FlashInfer without usable JIT → crash | Should fall back to TRITON_ATTN instead of crashing | Not yet | [#60262](https://github.com/vllm-project/vllm/issues/60262) |
| Medium | Adaptive block verification out-of-bounds lookahead | Speculative decoding bug | Open PR: [#60945](https://github.com/vllm-project/vllm/pull/60945) | [#60945](https://github.com/vllm-project/vllm/pull/60945) |
| Medium | RecoverSSM aligned state indices wrong at exact block boundaries | Mamba / SSM bug | Closed (merged): [#59962](https://github.com/vllm-project/vllm/pull/59962) | [#59962](https://github.com/vllm-project/vllm/pull/59962) |
| Medium | Qwen3.8-flash-next 0% MTP acceptance rate in disaggregated PD serving | Closed (fixed) | Closed (merged) | [#59642](https://github.com/vllm-project/vllm/issues/59642) |
| Medium | Full attention ghost block race condition | `cache_blocks()` commits hashes before GPU write → false cache hits | Closed (stale, needs rebase): [#42359](https://github.com/vllm-project/vllm/pull/42359) | [#42359](https://github.com/vllm-project/vllm/pull/42359) |
| Medium | Encoder cache miss crash with MTP + multimodal under high concurrency | Closed (fixed) | Closed | [#38551](https://github.com/vllm-project/vllm/issues/38551) |
| Minor | Structured output allows stop tokens before grammar termination | Stop tokens masked only after grammar end | Closed (stale, needs rebase): [#42416](https://github.com/vllm-project/vllm/pull/42416) | [#42416](https://github.com/vllm-project/vllm/pull/42416) |
| Minor | qwen3_xml tool parser consumes `</think>`, merging reasoning into content | Workaround: use `--reasoning-parser qwen3` | Not yet | [#51679](https://github.com/vllm-project/vllm/issues/51679) |

---

## 6. What This Means for Application Developers
- **Blackwell (SM120) + frontier flash models caution**: DeepSeek-V4.1-Flash and GLM-5.3-Flash have multiple open correctness, crash, and throughput bugs on Blackwell GPUs. Stay on v0.29.x / SM100 hardware for production, or test rigorously with `--enforce-eager` if on SM120.
- **Prefix caching + speculative decoding not yet safe for all models**: Avoid combining prefix caching with MTP/DSpark/DFlash2 on Qwen3.8-27B and hybrid Mamba/GDN models until [#60174](https://github.com/vllm-project/vllm/issues/60174) and [#53912](https://github.com/vllm-project/vllm/issues/53912) are resolved.
- **Agentic / multi-turn workflows**: Watch GLM-5.3-Flash degeneration issues (#56868, #56605) if using this model for agents; the qwen3_xml tool parser also has a reasoning/content merge bug with a documented workaround in [#51679](https://github.com/vllm-project/vllm/issues/51679).
- **KV cache observability for custom routers**: If you operate a disaggregated serving topology with an external prefix-aware router, track PR [#61130](https://github.com/vllm-project/vllm/pull/61130) — it exposes prefix reuse policy metadata to enable smarter routing.
- **v0.31.0 upgrade note**: Validate end-to-end output correctness for your workload before rolling out, especially with KV cache quantization and speculative decoding enabled, given the number of open v0.30/v0.31 regression bugs.
- **RL + LoRA workflows**: The LoRA adapter sleep/wake crash and lifecycle issues tracked in [#48297](https://github.com/vllm-project/vllm/issues/48297) remain open — validate adapter reload paths carefully for online fine-tuning setups.

---
*Source: github.com/vllm-project/vllm — data as of 2026-10-12*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Weekly Digest | 2026-10-12
*Data source: github.com/sgl-project/sglang (updates from the last 7 days)*

---

## 1. Last 7 Days' Highlights
No new official SGLang releases were published this week. Development activity centered on deep optimization for DeepSeek-V4.1 (Blackwell/Hopper acceleration, sparse prefill improvements), expansion of decode context parallelism (DCP) to DSA/MTP models like GLM-5.x, and targeted fixes for stability regressions in speculative decoding and client connection handling. CI reliability remained a focus, with dedicated tracking for flaky tests and infrastructure failures.

---

## 2. Releases & Breaking Changes
No new releases or official breaking changes were announced in the last 7 days.

---

## 3. New Model & Hardware Support
- **Decode Context Parallelism for DSA/MTP Models**: In-progress PR adds `--dcp-size > 1` support for RoPE DSA architectures (GLM-5.2, GLM-5.3, DeepSeek-V3.2), resolving LSE, index-K cache, and TRT-LLM buffer sizing mismatches.
  [PR #43735](https://github.com/sgl-project/sglang/pull/43735)
- **Blackwell SM120 Production Field Report**: Community-reported working configuration for DeepSeek-V4.1-Flash on 8× RTX PRO 6000 (PCIe, no NVLink), including measured throughput, valid topology, and speculative decoding A/B test results.
  [Issue #40877](https://github.com/sgl-project/sglang/issues/40877)
- **DeepSeek-V4.1 SM90 Candidate Indexers**: In-progress PR adds candidate-only indexer scoring on Hopper (SM90) for DeepSeek-V4.1, unifying prefill/decode protocols and compact candidate block IDs.
  [PR #40860](https://github.com/sgl-project/sglang/pull/40860)
- **Ascend NPU W4A8 MoE Fix**: In-progress PR corrects down-projection compensation for INT4-weight/INT8-activation MoE path when `moe_tp_size > 1` on Ascend NPUs.
  [PR #40880](https://github.com/sgl-project/sglang/pull/40880)
- **CPU Collective Kernel Optimization**: In-progress PR routes CPU `all_gather_into_tensor` and `reduce_scatter_tensor` to optimized shared-memory kernels from sgl-kernel.
  [PR #41521](https://github.com/sgl-project/sglang/pull/41521)
- **Apple Silicon Serving Redesign**: Roadmap issue tracks a Torch-owned SRT path with an exported whole-model MLX region, with an implementation PR in progress.
  [Issue #32321](https://github.com/sgl-project/sglang/issues/32321) | [PR #36164](https://github.com/sgl-project/sglang/pull/36164)

---

## 4. Performance & Optimization
- **DeepSeek-V4.1 Sparse Prefill Group Sharing**: In-progress PR reduces O(context²) per-layer redundant work (ratio-2 indexer re-scoring, top-K gate recomputation) for 1M-token prefills on TP4+EP4 B200 deployments.
  [PR #42929](https://github.com/sgl-project/sglang/pull/42929)
- **DeepGEMM MegaGate Routing Integration**: In-progress PR (2/N) integrates DeepGEMM MegaGate routing for DeepSeek-V4.1 to improve MoE efficiency.
  [PR #43262](https://github.com/sgl-project/sglang/pull/43262)
- **SM120 Performance Optimization Plan**: Tracking issue updated 2026-10-12; completed items include DeepSeek V4 support and DeepGEMM MQA Indexer, with ongoing work on DeepSeek v4 Flash acceleration.
  [Issue #19637](https://github.com/sgl-project/sglang/issues/19637)
- **Adaptive Speculative Decoding Roadmap**: Ongoing work to dynamically adjust speculation depth for agent/mixed workloads with variable acceptance rates.
  [Issue #23705](https://github.com/sgl-project/sglang/issues/23705)
- **Diffusion Warmup Configurability**: In-progress PR makes diffusion warmup preload components and memory margin configurable, allowing users to disable preload or adjust reserved space.
  [PR #43414](https://github.com/sgl-project/sglang/pull/43414)
- **Unified Radix Cache Refactoring**: Two in-progress PRs extend tree core component APIs and split SWA mapping recovery into a dedicated `RecoverEvictedSWA` handler for cleaner cache management.
  [PR #43722](https://github.com/sgl-project/sglang/pull/43722) | [PR #43721](https://github.com/sgl-project/sglang/pull/43721)
- **SGLang Auto Tuner Roadmap**: Good-first-issue tracking for a unified command-line tool to tune kernel backends (MoE, attention, allreduce) and dispatch heuristics.
  [Issue #13363](https://github.com/sgl-project/sglang/issues/13363)

---

## 5. Stability & Regressions
Ranked by estimated severity:
1. **Gemma-4 MM Non-RGB Image Crash**: Critical — A single grayscale/RGBA image crashes the entire vision tower and scheduler, dropping all in-flight requests; no fix PR linked yet.
   [Issue #26751](https://github.com/sgl-project/sglang/issues/26751)
2. **GLM-5.3 DFLASH Speculative Decoding Correctness Bug**: High — Severe repetition and degenerate output loops when serving GLM-5.3 with DFLASH speculative decoding; fix not yet linked.
   [Issue #40843](https://github.com/sgl-project/sglang/issues/40843)
3. **Disconnected Streaming Client Zombie Request**: Medium — Regression from a prior revert; disconnected clients leave zombie requests that decode to `max_tokens` and flood tokenizer manager logs; no fix PR linked yet.
   [Issue #36333](https://github.com/sgl-project/sglang/issues/36333)
4. **NGRAM Speculative Decoding Over-Sampling**: Medium — NGRAM draft tree padding causes over-sampling of token 0 from padded root siblings; fix PR opened 2026-10-12.
   [Issue #43725](https://github.com/sgl-project/sglang/issues/43725) | [PR #43742](https://github.com/sgl-project/sglang/pull/43742)
5. **GLM-4.7/5 Tool Call Streaming JSON Bug**: Low — Streaming path returns non-strict JSON for array/object/boolean tool arguments; fix PR in progress.
   [Issue #43273](https://github.com/sgl-project/sglang/issues/43273) | [PR #43275](https://github.com/sgl-project/sglang/pull/43275)
6. **CI Flakiness Tracking**: Dedicated issue tracks flaky tests and recurring CI infrastructure failures in NVIDIA PR test runs, complementing the main CI tracker.
   [Issue #42752](https://github.com/sgl-project/sglang/issues/42752) | [Issue #17050](https://github.com/sgl-project/sglang/issues/17050)

*Resolved this week: DSpark CUDA Graph timing bugs [Issue #31023](https://github.com/sgl-project/sglang/issues/31023), [Issue #33356](https://github.com/sgl-project/sglang/issues/33356); generation health check DP routing perturbation [Issue #35241](https://github.com/sgl-project/sglang/issues/35241); Qwen2.5 tool calling empty content [Issue #3797](https://github.com/sgl-project/sglang/issues/3797).*

---

## 6. What This Means for Application Developers
- **DeepSeek-V4.1 deployments**: Hopper/Blackwell optimizations in progress will deliver meaningful prefill throughput gains for long-context workloads; monitor the SM120 plan and sparse prefill PRs for upcoming merges.
- **GLM-5.x serving**: Avoid DFLASH speculative decoding for GLM-5.3 until the repetition bug is fixed; use standard decoding for production workloads targeting this model.
- **Gemma-4 multimodal deployments**: Add upstream input validation to reject non-RGB images for now, to prevent full scheduler crashes and request drops.
- **Tool calling integrations**: If streaming GLM-4.7/5 tool calls, expect a fix soon for non-strict JSON argument values; non-streaming paths are unaffected.
- **Speculative decoding users**: NGRAM speculation has a known token-0 padding bug that may reduce efficiency; track the fix PR if you rely on NGRAM draft models.
- **Diffusion serving**: Upcoming configurable warmup preload will let you fine-tune GPU memory usage between warmup overhead and first-request latency.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Weekly Digest | 2026-10-12
Source: [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)

---

## 1. Last 7 Days' Highlights
The llama.cpp project rolled out 10 new builds (b11550–b11559) focused on OpenCL/Vulkan backend optimizations, server stability, and expanded model support including Prism Bonsai 2 27B and MiniCPM-V 4.7. The community is actively prioritizing speculative decoding correctness, MoE memory efficiency, and backend portability, with high engagement on feature requests for AMD XDNA acceleration and GPU-resident MoE expert caching.

---

## 2. Releases & Breaking Changes
All releases this week are incremental builds (b11550–b11559) with no reported breaking API or configuration changes.
- Full release list: [ggml-org/llama.cpp releases](https://github.com/ggml-org/llama.cpp/releases)

### Notable server-side operational changes
- **Server slot pinning fix (b11552)**: Requests targeting a busy slot no longer overwrite the slot’s prompt cache before deferral, preventing cache corruption for in-flight generations. [#30295](https://github.com/ggml-org/llama.cpp/pull/30295)
- **Server component tests added (b11553)**: Formal test infrastructure for server endpoints improves regression detection for future API changes. [#30312](https://github.com/ggml-org/llama.cpp/pull/30312)
- **RPC debug verbosity refactor (b11557)**: `GGML_RPC_DEBUG` is now a numeric verbosity level (0–3) instead of a boolean flag, offering granular control over RPC logging. [#29544](https://github.com/ggml-org/llama.cpp/pull/29544)

---

## 3. New Model & Hardware Support
### Landed in releases
- **Prism Bonsai 2 27B**: Full runtime support including hadamard tensor handling and folded weight optimizations. [#29600](https://github.com/ggml-org/llama.cpp/pull/29600)
- **MiniCPM-V 4.7**: Multimodal support with mrope position encoding extensions for vision inputs. [#29416](https://github.com/ggml-org/llama.cpp/pull/29416)
- **s390x build compatibility**: Disabled z17 target for unsupported compilers to fix mainframe builds. [#30297](https://github.com/ggml-org/llama.cpp/pull/30297)

### In progress (open PRs)
- **SenseNova U1**: Text-to-text and image-to-text generation support for the open multimodal model. [#28919](https://github.com/ggml-org/llama.cpp/pull/28919)
- **Ouro (ByteDance looped LM)**: Support for 1.4B/2.6B looped decoder architectures, reusing existing looped-model machinery. [#29823](https://github.com/ggml-org/llama.cpp/pull/29823)
- **H2O-Lightning-4B**: Decision model support for calibrated probability outputs via a dedicated server endpoint. [#30361](https://github.com/ggml-org/llama.cpp/pull/30361)
- **Qwen4Exp & multimodal MTP**: Expert projection padding, 64-bit GGUF array metadata, and multimodal speculative decoding support. [#30316](https://github.com/ggml-org/llama.cpp/pull/30316)
- **XDNA backend feature request**: Highly requested (35 👍) support for AMD XDNA accelerators, in community discussion. [#21725](https://github.com/ggml-org/llama.cpp/issues/21725)

---

## 4. Performance & Optimization
### Landed in releases
- **OpenCL improvements (b11559)**: Enabled Gemma-4 E4B/E2B GPU decode, added dk512 support, and optimized dk64 kernels for faster inference on OpenCL devices. [#30266](https://github.com/ggml-org/llama.cpp/pull/30266)
- **OpenCL stability & performance fixes (b11558)**: Added fallback logic for Q4_K weight images exceeding device limits, fixed incomplete subgroup issues in rms_norm kernels. [#30310](https://github.com/ggml-org/llama.cpp/pull/30310)
- **CPU AVX2/F16C fix (b11555)**: Resolved a bug where AVX2 CPUs with F16C support were not using F16C instructions, restoring expected decode throughput. [#30270](https://github.com/ggml-org/llama.cpp/pull/30270)
- **Vulkan MoE prepass optimization (b11554)**: Eliminated redundant looping for duplicate `mul_mat_id` entries by handling them in the prepass, improving MoE inference efficiency on Vulkan backends. [#29998](https://github.com/ggml-org/llama.cpp/pull/29998)

### In progress
- **OpenCL GDN recurrent cache optimization**: Pair of PRs to read/write gated_delta_net state directly from/to the recurrent cache, eliminating per-token copy overhead for recurrent layers. [#30359](https://github.com/ggml-org/llama.cpp/pull/30359) [#30360](https://github.com/ggml-org/llama.cpp/pull/30360)
- **SYCL tensor split loading speedup**: Added `set_tensor_2d` implementation to reduce per-row upload overhead when loading models in tensor-split mode. [#30358](https://github.com/ggml-org/llama.cpp/pull/30358)
- **GPU-resident MoE expert LRU cache**: Proposed in-GPU compute-graph managed expert cache to reduce PCIe transfer overhead for large MoE models. [#29949](https://github.com/ggml-org/llama.cpp/issues/29949)
- **MoE host RAM expert DMA**: Proposed approach to keep MoE expert weights in pinned host memory and access them via PCIe DMA, enabling 81GB Qwen3-235B to run on 8GB VRAM cards (measured on RTX 4090). [#26448](https://github.com/ggml-org/llama.cpp/issues/26448)

---

## 5. Stability & Regressions
Ranked by severity (impact + comment activity):
1. **Qwen 3.8 flash + MTP startup assertion failure**: Crash at launch when using MTP speculative decoding with Qwen3.8-Flash models, 20 comments, active investigation. [#29811](https://github.com/ggml-org/llama.cpp/issues/29811)
2. **Speculative decoding output divergence on quantized targets**: Greedy sampling with draft-model speculative decoding produces different outputs than vanilla inference on quantized (e.g. Q4_K_M) targets; matches on bf16. 30 comments, no fix PR yet. [#25618](https://github.com/ggml-org/llama.cpp/issues/25618)
3. **CUDA SM_60 (P100) quality loss**: FP32 math silently runs in FP16 on sm_60 architectures, causing output degradation; fix already merged in two community forks, pending upstream. 21 comments. [#25593](https://github.com/ggml-org/llama.cpp/issues/25593)
4. **Long conversation "bad allocation" crash on HIP**: `llama-server` crashes with bad allocation errors during extended conversations on RDNA3 HIP setups. 10 comments, new report. [#30091](https://github.com/ggml-org/llama.cpp/issues/30091)
5. **SYCL performance regression on Intel B70**: Throughput drop after PR #29622 for Qwen3.8-Flash-Next UD-IQ3_XXS models on dual Intel B70 systems. 10 comments, active triage. [#30033](https://github.com/ggml-org/llama.cpp/issues/30033)
6. **Memory leak report**: Persistent memory growth during long runs on ARM + CUDA setups. 11 comments, under investigation. [#27725](https://github.com/ggml-org/llama.cpp/issues/27725)

### Fix PRs in review
- **MTP masked mode row selection fix**: Resolves incorrect hidden state selection for Qwen models in masked MTP mode. [#30345](https://github.com/ggml-org/llama.cpp/pull/30345)
- **Embedding model memory over-allocation fix**: Reduces memory usage for embedding models by skipping next-token buffer reservation. [#30339](https://github.com/ggml-org/llama.cpp/pull/30339)

---

## 6. What This Means for Application Developers
- **Server reliability improvements**: The slot pinning fix and new component test suite reduce risk of cache corruption and unexpected behavior for multi-tenant deployments using slot management APIs.
- **Expanded multimodal options**: MiniCPM-V 4.7 and upcoming SenseNova U1 support add more lightweight vision-language model choices for edge and on-prem deployments.
- **Speculative decoding caution**: If you rely on deterministic greedy output with quantized models and draft-model speculative decoding, validate output consistency before deploying to production, as divergence bugs are still active.
- **OpenCL/Vulkan performance gains**: Users running inference on integrated GPUs, ARM Mali, or other OpenCL/Vulkan devices will see meaningful speedups for Gemma-4 and MoE workloads from this week’s kernel optimizations.
- **Upcoming server API additions**: The proposed `logit_gate` endpoint will enable single-pass token probability checks for tool use cases, reducing latency for tool-gating workflows. [#30265](https://github.com/ggml-org/llama.cpp/pull/30265)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Weekly Digest | 2026-10-12
---
## 1. Last 7 Days' Highlights
Ollama released three patch versions (v0.40.1–v0.40.3) focused on model compatibility, UX polish, and cloud API proxying, alongside active work to stabilize Qwen series tool-calling behavior and fix Windows/GPU backend regressions. A llama.cpp upgrade to b11521 is in progress to add native support for decision models and EmbeddingGemma 2, while multiple PRs target edge cases in streaming parsers for agent workloads.
---
## 2. Releases & Breaking Changes
- **v0.40.3**: Removed unnecessary warnings for `ollama launch claude` (Claude connectors) and `ollama launch codex` (service tiers); also introduced paused background model functionality.
  - [PR #18878](https://github.com/ollama/ollama/pull/18878), [PR #18879](https://github.com/ollama/ollama/pull/18879)
- **v0.40.2**: Added background model upgrade pipeline for llama.cpp compatibility, with automatic original model backups to support safe downgrades.
- **v0.40.1**: Added proxy support for cloud usage/balance APIs, fixed >2GiB Clef head reads on Windows, and removed the account step from CLI onboarding.
  - [PR #18829](https://github.com/ollama/ollama/pull/18829), [PR #18777](https://github.com/ollama/ollama/pull/18777)
---
## 3. New Model & Hardware Support
- **In progress**: llama.cpp b11521 upgrade adds native support for decision models (`/v1/systemone`) and EmbeddingGemma 2, removing Ollama's custom scorer and Clef patch.
  - [PR #18917](https://github.com/ollama/ollama/pull/18917)
- **Feature request**: Support for MBZUAI IFM K2 Horizon model family (0.9B–36B MoE, Apache 2.0, official GGUFs available).
  - [Issue #18698](https://github.com/ollama/ollama/issues/18698)
- **Bug**: `embeddinggemma-2:740m` fails to pull on Linux with "MLX runtime not available" error (Intel CPU/GPU environment).
  - [Issue #18825](https://github.com/ollama/ollama/issues/18825)
- **In progress**: Windows junction/volume mount point support for model directories (fixes empty `ollama list` when `OLLAMA_MODELS` uses NTFS volume mounts).
  - [PR #18949](https://github.com/ollama/ollama/pull/18949)
- **In progress**: `OLLAMA_PARALLEL_HYBRID` env var to enable multiple parallel slots for hybrid/recurrent model architectures (previously pinned to 1 slot).
  - [PR #18939](https://github.com/ollama/ollama/pull/18939)
---
## 4. Performance & Optimization
- **In progress**: Optimized inference route manifest/runner lookup with single verified cold lookup and reuse of loaded models across generate/chat/embed endpoints.
  - [PR #18947](https://github.com/ollama/ollama/pull/18947)
- **In progress**: Per-request/per-model thinking token budget to prevent reasoning loops from burning full context windows and returning empty responses.
  - [PR #17566](https://github.com/ollama/ollama/pull/17566)
- **Reported**: mistral-medium-3.5:128b runs at ~1 token/minute on M4 Max (128GB RAM), with 127GB RAM + >100GB wired memory usage for an 80GB model (0.35.1/0.34.4).
  - [Issue #18770](https://github.com/ollama/ollama/issues/18770)
- **Bug fixed**: Vulkan ~1GB buffer allocation failure with free VRAM (root cause: user environment `HIP_VISIBLE_DEVICES=-1` forcing Vulkan backend).
  - [Issue #18117](https://github.com/ollama/ollama/issues/18117)
---
## 5. Stability & Regressions
### Critical
- Qwen 3.8 returns 500 "no user query found in messages" during streaming tool call loops (52 comments, 30 👍).
  - [Issue #17778](https://github.com/ollama/ollama/issues/17778)
- `ollama run` hangs on second execution on Raspberry Pi 5 / Debian 13 (systemd setup).
  - [Issue #18796](https://github.com/ollama/ollama/issues/18796)
- MLX runner panic with qwen3.6:35b-mlx on Ollama 0.40.x (regression from 0.35.0).
  - [Issue #18856](https://github.com/ollama/ollama/issues/18856)
- Vulkan 0xc0000005 access violation loading any model on AMD RX 6800 XT (Windows).
  - [Issue #18557](https://github.com/ollama/ollama/issues/18557)
### High (with fix PRs in progress)
- Qwen3/Qwen3.5 tool-calling parser defects: truncated thinking tags, dropped closing tags, partial tool call leakage in streaming.
  - [Issue #13093](https://github.com/ollama/ollama/issues/13093), [Issue #14601](https://github.com/ollama/ollama/issues/14601), [PR #18624](https://github.com/ollama/ollama/pull/18624), [PR #17914](https://github.com/ollama/ollama/pull/17914)
- Duplicate model entries and bogus `llamacpp:<sha>` tags after local GGUF migration (0.40.0).
  - [Issue #18830](https://github.com/ollama/ollama/issues/18830)
- `keep_alive` values that overflow int64 nanoseconds cause immediate model unloading instead of extended lifetime.
  - [Issue #18181](https://github.com/ollama/ollama/issues/18181), [PR #18946](https://github.com/ollama/ollama/pull/18946)
### Medium
- Tool calls fail when `format: json` is set in `/api/chat` requests.
  - [Issue #18944](https://github.com/ollama/ollama/issues/18944)
- Windows auto-update leaves `ggml-cuda.dll` as `.tmp`, causing CPU fallback and 0B VRAM detection.
  - [Issue #18712](https://github.com/ollama/ollama/issues/18712)
- Qwen3.5 4B returns thinking-only responses for long conversations (65536 ctx, 0.40.2).
  - [Issue #18916](https://github.com/ollama/ollama/issues/18916)
---
## 6. What This Means for Application Developers
1. **Agent/tool-calling workloads on Qwen models**: Expect continued parser stability improvements in upcoming releases; for production use, prefer embedding tool definitions directly in system prompts instead of the `/api/chat` `tools` parameter to avoid current parsing edge cases.
2. **Model lifecycle management**: The v0.40.2 background upgrade pipeline modifies local models for llama.cpp compatibility, with automatic backups — validate downgrade workflows if you maintain pinned model versions across environments.
3. **Cloud API integrations**: v0.40.1 adds proxied cloud usage/balance APIs, so you can now query billing/quota data through the local Ollama server endpoint instead of calling cloud APIs directly.
4. **`ollama launch` UX**: The new Codex model picker (in progress [PR #18887](https://github.com/ollama/ollama/pull/18887)) will surface all locally installed tool-capable models, eliminating the need to manually specify alternative models for agent workflows.
5. **Windows GPU users**: If you experience sudden CPU fallback after auto-updates, verify `cuda_v12\ggml-cuda.dll` is not stuck as a `.tmp` file (see [Issue #18712](https://github.com/ollama/ollama/issues/18712)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Weekly Digest | 2026-10-12

---

## 1. Last 7 Days' Highlights
The LiteLLM project accelerated its Rust migration push to deliver sub-1ms gateway overhead, with a wave of PRs landing native support for Messages/Responses hooks, streaming, short-circuit logic, and cache key consistency. On the user-facing side, per-team cumulative token budgets (independent of dollar-based spend) entered development, and critical fixes landed for provider translation bugs across Mistral, Databricks, GigaChat, Google GenAI, and Bedrock. Security and stability remained top of mind: the Trivy supply-chain compromise is fully contained, while high-severity bugs around budget enforcement, RAM leaks, and unauthenticated metrics endpoints remain open for prioritization.

---

## 2. Releases & Breaking Changes
Multiple release channels published updates in the last 7 days, all carrying **Docker image signature verification** via cosign (consistent signing key from commit [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)):
- **Stable**: v1.105.0, v1.104.3, v1.104.2, v1.102.4, v1.101.6
- **Pre-release**: v1.106.0-rc.1, v1.105.0-rc.3
- **Dev**: v1.106.0-dev.1/2/3

No breaking API/config changes are documented in the release snippets provided.

---

## 3. New Model & Hardware Support
- **New provider**: ai& (`aiand/<model>`) provider route added with Chat Completions and Responses API support, plus Add Model form integration. [PR #38958](https://github.com/BerriAI/litellm/pull/38958)
- **Xiaomi MiMo models** (`MiMo-V2-Pro`, `MiMo-V2-Omni`): active bug where `output_config` parameter causes `AsyncCompletions.create()` to fail with Claude Code translation. [Issue #24549](https://github.com/BerriAI/litellm/issues/24549)
- **Qwen3-TTS via vLLM**: `/v1/audio/speech` fails because `voice` is treated as mandatory and custom parameters are stripped. [Issue #20078](https://github.com/BerriAI/litellm/issues/20078)
- **ElevenLabs audio models**: cost calculation in proxy is non-functional. [Issue #18058](https://github.com/BerriAI/litellm/issues/18058)

---

## 4. Performance & Optimization
- **Rust migration (sub-1ms overhead target)**: major progress across the native gateway path:
  - Remove native decline exceptions; catalog owns feature gaps, raise `NotImplementedError` instead of `RustBridgeDeclined`. [PR #45986](https://github.com/BerriAI/litellm/pull/45986)
  - Messages short-circuit at request stage (e.g. web-search-only Claude Code requests, unsupported tools) to avoid unnecessary provider round trips. [PR #45982](https://github.com/BerriAI/litellm/pull/45982)
  - Run Messages and Responses body hooks / `CustomLogger` hooks natively on sync, async, and streaming calls. [PR #45968](https://github.com/BerriAI/litellm/pull/45968) | [PR #45977](https://github.com/BerriAI/litellm/pull/45977) | [PR #45979](https://github.com/BerriAI/litellm/pull/45979)
  - Native Responses streaming through Python bridge. [PR #45985](https://github.com/BerriAI/litellm/pull/45985)
  - Preserve Python cache key semantics in native inference to avoid cache split between runtimes. [PR #45956](https://github.com/BerriAI/litellm/pull/45956)
  - Refactor Python driver to async fn model on caller's task, eliminating hand-rolled continuation machine. [PR #45962](https://github.com/BerriAI/litellm/pull/45962)
  - Host call continuations owned by Python driver via `HostStep<E>` / `HostResume<E>`. [PR #45957](https://github.com/BerriAI/litellm/pull/45957)
- **Spend tracking performance**: proposed `disable_entity_spend_updates` flag to suppress entity counter UPDATEs while retaining raw spend logs, targeting high-throughput deployments. [Issue #31866](https://github.com/BerriAI/litellm/issues/31866)

---

## 5. Stability & Regressions
Ranked by severity:

1. **Critical — Supply chain (resolved)**: Trivy compromise in PyPI packages v1.82.7/8 fully contained; all affected packages removed, current releases clean. [Issue #24518](https://github.com/BerriAI/litellm/issues/24518)
2. **High — Unauthenticated metrics PII leak**: `/metrics` endpoint defaults to no auth and exposes multi-tenant data in production; `require_auth_for_metrics_endpoint: true` is opt-in only. No fix PR linked. [Issue #24530](https://github.com/BerriAI/litellm/issues/24530)
3. **High — Budget enforcement bypass**: `max_budget` for keys/users not enforced in v1.82.3 on new deployments; virtual key RPM limits stop applying after key caching. No fix PR linked. [Issue #26672](https://github.com/BerriAI/litellm/issues/26672) | [Issue #39713](https://github.com/BerriAI/litellm/issues/39713) | [Issue #27735](https://github.com/BerriAI/litellm/issues/27735)
   - Related fix PR: budget reservation reconciliation when no database logger is configured (prevents stuck reservations). [PR #45907](https://github.com/BerriAI/litellm/pull/45907)
4. **High — Memory leak**: Progressive RAM growth over days in proxy/pass-through deployments, leading to OOM kills on Kubernetes. No fix PR linked. [Issue #12685](https://github.com/BerriAI/litellm/issues/12685) | [Issue #27954](https://github.com/BerriAI/litellm/issues/27954)
5. **Medium — Provider translation bugs (fixes in PR)**:
   - Mistral: content-list chunks truncated to last text block, citations lost. [PR #45818](https://github.com/BerriAI/litellm/pull/45818) (fixes [#45378](https://github.com/BerriAI/litellm/issues/45378))
   - Databricks: tool-only replies without `content` field crash with `APIConnectionError`. [PR #42894](https://github.com/BerriAI/litellm/pull/42894)
   - GigaChat: `stop` and `json_object` response_format silently dropped instead of surfacing unsupported error. [PR #43607](https://github.com/BerriAI/litellm/pull/43607) (fixes [#43606](https://github.com/BerriAI/litellm/issues/43606))
   - Google GenAI: streams that drop before first SSE event are not retried. [PR #45750](https://github.com/BerriAI/litellm/pull/45750)
   - Bedrock: malformed batch JSONL lines return 500 instead of 400. [PR #45992](https://github.com/BerriAI/litellm/pull/45992) (fixes [#45060](https://github.com/BerriAI/litellm/issues/45060))
   - HuggingFace TEI rerank: registered `model_cost` ignored, always billed $0. [PR #45990](https://github.com/BerriAI/litellm/pull/45990)
   - Vertex AI: per-model cache token minimums not enforced, no 400 fallback handling. [PR #44110](https://github.com/BerriAI/litellm/pull/44110) (fixes [#17696](https://github.com/BerriAI/litellm/issues/17696))
6. **Medium — Functional correctness**:
   - Router async completion doesn't trigger `CustomLogger` callbacks. [Issue #8842](https://github.com/BerriAI/litellm/issues/8842)
   - Background health check results attributed to all deployments sharing the same `litellm_params.model` **(fixed)**. [Issue #44154](https://github.com/BerriAI/litellm/issues/44154)
   - Team ID not verified on JWT **(fixed)**. [Issue #44182](https://github.com/BerriAI/litellm/issues/44182)
   - `/ui/chat` returns 404 due to missing Next.js static export index.html **(fixed)**. [Issue #24037](https://github.com/BerriAI/litellm/issues/24037)
   - OTel: tool-call parts missing from streamed output, finish reason incorrect — fix in PR. [PR #45920](https://github.com/BerriAI/litellm/pull/45920) (fixes [#45796](https://github.com/BerriAI/litellm/issues/45796))
   - MCP tool conversion drops `function` wrapper key, causing 400 with `hosted_vllm`. [Issue #32281](https://github.com/BerriAI/litellm/issues/32281)
   - Claude Code auto classifier fails for GPT 5.6: `stop_sequences` not translated to `stop` for OpenAI-format providers. [Issue #33075](https://github.com/BerriAI/litellm/issues/33075)
   - Responses API namespace tools silently stripped when converting to Gemini format. [Issue #29854](https://github.com/BerriAI/litellm/issues/29854)
   - Generic streaming: partial chunk accepted then raises `KeyError`. [Issue #43487](https://github.com/BerriAI/litellm/issues/43487)
   - vLLM streaming + logprobs fails with PydanticSerializationError **(closed/resolved)**. [Issue #18801](https://github.com/BerriAI/litellm/issues/18801)

---

## 6. What This Means for Application Developers
- **Security**: All current LiteLLM releases are cleared of the earlier Trivy supply-chain compromise; validate Docker images via cosign using the documented public key for production deployments, and enable `require_auth_for_metrics_endpoint: true` immediately to avoid leaking multi-tenant data.
- **Budget & quota**: If you run multi-tenant workloads, watch for per-team token budgets (PR in review) to enforce hard token limits independent of model pricing — a major improvement over dollar-based budgets for mixed-model fleets. Budget enforcement bugs in v1.82.3 mean you should validate spend limits on fresh deployments before relying on them for cost control.
- **Provider compatibility**: Teams using Mistral (citations), Databricks (tool calls), GigaChat (stop/JSON mode), or Bedrock batch APIs should track the linked fix PRs — they resolve silent data corruption or incorrect error codes that can break agent workflows.
- **Rust migration early adopter note**: The native gateway is rapidly gaining feature parity with Python (hooks, streaming, caching, short-circuits). If you need sub-1ms overhead, join the beta tracker to test, but expect ongoing refactors to the bridge layer.
- **Memory leak heads-up**: Long-running proxy deployments should schedule periodic restarts as a mitigation while the RAM growth issue remains open.
- **UI**: Dark mode for the admin panel is now closed/complete, reducing eye strain for operators monitoring the gateway. [Issue #10177](https://github.com/BerriAI/litellm/issues/10177)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Weekly Digest | 2026-10-12
---

## 1. Last 7 Days' Highlights
Unsloth rolled out cross-platform sandboxing (Windows/Mac/Linux) and end-to-end Jev-style decision model training workflows across two beta releases, boosting decision accuracy from 30% to 80% for text and vision LLMs. On the Studio front, the team advanced KV cache preemption for shared multi-chat workloads, expanded text-diffusion LM family support, and added granular GPU resource monitoring. Core library fixes addressed attention mask correctness, Q-GaLore checkpoint integrity, and LoRA-GA adapter reload compatibility.

---

## 2. Releases & Breaking Changes
| Version | Key Changes | Migration Notes |
|---------|-------------|-----------------|
| [v0.1.905-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.905-beta) | Cross-platform (Windows/Mac/Linux) sandboxing launch; end-to-end Jev-style decision model training, testing, export, and serving | Follow the [official sandboxing guide](https://unsloth.ai/docs/new/studio/sandboxing-in-unsloth) for setup; no breaking API changes for existing fine-tuning workflows |
| [v0.1.904-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.904-beta) | Native ComfyUI model support; diffusion pipeline improvements; upgraded Desktop browser experience | Existing diffusion workflows may require minor config adjustments to use native ComfyUI integration |

---

## 3. New Model & Hardware Support
### New Model Support
- **Text-diffusion LM families**: Studio now supports training and chat for LLaDA, LLaDA-MoE, Dream, Nemotron-Labs-Diffusion, LLaDA2, SDAR, and DiffusionGemma via `DiffusionTrainer` ([PR #13342](https://github.com/unslothai/unsloth/pull/13342))
- **Qwen-Image-2.1 GGUF**: Fixed classification of `qwen_image21` architecture GGUF models as text-to-image (previously mislabeled as text-generation) ([PR #13333](https://github.com/unslothai/unsloth/pull/13333))
- **Feature request**: Community request for Qwen3-TTS fine-tuning support (11 comments, 2 👍) ([Issue #3951](https://github.com/unslothai/unsloth/issues/3951))
- **Feature request**: Multi-GPU support for `FastVisionModel` and `FastModel` (aligned with `FastLanguageModel` capabilities) ([Issue #3495](https://github.com/unslothai/unsloth/issues/3495))

### Hardware & Backend Updates
- **macOS performance core optimization**: Studio now runs `sd.cpp` on all performance cores on Apple Silicon (fixes underutilization from default thread halving for non-SMT architectures) ([PR #13349](https://github.com/unslothai/unsloth/pull/13349))
- **DDP batched gradient copy**: Opt-in support for PyTorch 2.13's `batched_grad_copy` via `UNSLOTH_DDP_BATCHED_GRAD_COPY=1` for distributed training speedups ([PR #13350](https://github.com/unslothai/unsloth/pull/13350))

---

## 4. Performance & Optimization
- **KV cache preemption for shared chats**: In-progress rework lets a single llama-server instance manage KV cache slot parking in host RAM, eliminating parallel chat OOM kills from unmanaged cache competition ([PR #10301](https://github.com/unslothai/unsloth/pull/10301), follow-up [PR #10358](https://github.com/unslothai/unsloth/pull/10358))
- **Diffusion LM training compilation**: Zero graph break compiled chunked loss for text-diffusion models, plus per-model-family samplers for faster training ([PR #13341](https://github.com/unslothai/unsloth/pull/13341))
- **Pre-quant checkpoint pre-validation**: Studio now validates hosted pre-quantized diffusion checkpoints *before* download, avoiding wasted bandwidth on incompatible/stale models; int8 fingerprinting made torchao-version-neutral ([PR #13339](https://github.com/unslothai/unsloth/pull/13339))
- **Detailed GPU live monitor**: Optional real-time GPU load, temperature, and power metrics in Studio's resource monitor (off by default) ([PR #13351](https://github.com/unslothai/unsloth/pull/13351))
- **Context compaction visibility**: Automatic compaction count added to Studio's context length meter for better cache performance transparency ([PR #12759](https://github.com/unslothai/unsloth/pull/12759))

---

## 5. Stability & Regressions
Ranked by severity (impact + comment engagement):

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| Critical | Cached Llama/Qwen3 attention ignores left padding masks, causing inconsistent generation outputs for single padded prompts ([Issue #13256](https://github.com/unslothai/unsloth/pull/13256)) | In progress | [PR #13256](https://github.com/unslothai/unsloth/pull/13256) (applies mask before softmax, shares mask conversion logic) |
| Critical | Q-GaLore full finetuning saves corrupted checkpoint weights when `weight_quant=True` (placeholders written instead of quantized params); stacked MoE grouping failures ([Issue #13276](https://github.com/unslothai/unsloth/pull/13276)) | In progress | [PR #13276](https://github.com/unslothai/unsloth/pull/13276) |
| High | `UNSLOTH_RETURN_LOGITS=1` environment variable resets to `0` during training, breaking custom validation metrics for Gemma 3 fine-tuning (21 comments, 2 👍) ([Issue #3071](https://github.com/unslothai/unsloth/issues/3071)) | Open, pending confirmation | None |
| High | Fine-tuning VRAM usage far exceeds advertised values, causing OOM for large models in Studio and core library (25 comments) ([Issue #4504](https://github.com/unslothai/unsloth/issues/4504)) | Closed | N/A |
| High | 7B QLoRA GRPO training OOM on H100 80GB (batch_size=1, num_generations=8) (14 comments) ([Issue #3603](https://github.com/unslothai/unsloth/issues/3603)) | Closed | N/A |
| Medium | Long-context chat lag in Unsloth Studio on Windows 10 (10 comments) ([Issue #12552](https://github.com/unslothai/unsloth/issues/12552)) | Closed | N/A |
| Medium | Training speed drops sharply after ~15 iterations (from 2s/it to 45s/it) across model types (13 comments) ([Issue #3943](https://github.com/unslothai/unsloth/issues/3943)) | Closed | N/A |
| Security | Desktop diagnostic reports leak API keys (dashed/underscored `sk-`), JWTs, and JSON credentials (10 comments) | In progress | [PR #13260](https://github.com/unslothai/unsloth/pull/13260) (expands redaction logic in `redaction.rs`) |

---

## 6. What This Means for Application Developers
1. **Decision model workflows are production-ready**: You can now build, train, and deploy Jev-style decision models entirely within the Unsloth ecosystem, with cross-platform sandboxing for safe local testing. This eliminates the need for external decision-making middleware for agent use cases.
2. **KV cache sharing improves multi-user serving efficiency**: The upcoming KV preemption feature will let you run more parallel chat sessions on a single GPU without OOM crashes, reducing serving costs for agent and chat applications.
3. **Diffusion LM support expands use cases**: Text-diffusion model training and serving are now integrated into Studio, making it easier to experiment with generative diffusion workflows alongside standard LLM fine-tuning.
4. **MCP integration unlocks agent tooling**: The new MCP (Model Context Protocol) support lets coding agents like Claude Code and Codex control Unsloth Studio via API keys, enabling automated fine-tuning and deployment pipelines in agent workflows ([PR #13118](https://github.com/unslothai/unsloth/pull/13118)).
5. **LoRA workflow flexibility improves**: You can now continue LoRA training from saved adapter checkpoints (no full merge required), and LoRA-GA adapters reload correctly relative to their original base model, streamlining iterative fine-tuning cycles ([PR #13158](https://github.com/unslothai/unsloth/pull/13158), [PR #13322](https://github.com/unslothai/unsloth/pull/13322)).
6. **LAN access security upgrades**: For self-hosted Studio deployments, you can now bind LAN access to specific network addresses (e.g., private Tailscale IPs only), reducing exposure on public VPS instances ([PR #12839](https://github.com/unslothai/unsloth/pull/12839)).

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*