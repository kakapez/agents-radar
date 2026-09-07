# AI Infrastructure Weekly Digest 2026-09-07

> Generated: 2026-09-07 01:53 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Ecosystem Weekly Report | 2026-09-07
## 1. Ecosystem Overview
The past 7 days reflected the AI infrastructure ecosystem’s dual focus on next-generation sparse attention model enablement and operational maturity for production deployments. Across inference engines, local runtimes, gateways, and fine-tuning frameworks, development prioritized expanding support for flagship Qwen3.8, DeepSeek-V4, and GLM-5.3-Flash models across NVIDIA Blackwell, AMD RDNA4, Intel XPU, and Apple Silicon hardware. Production stability work centered on resolving distributed inference stalls, tool-call parsing correctness, and KV cache efficiency bottlenecks, while supply-chain security and observability features gained traction in gateway and edge deployment layers. Agent workload requirements emerged as a cross-cutting driver, with optimizations for long-context sessions, tool-call reliability, and KV cache rollback landing across nearly all projects.

## 2. Activity Comparison
| Project | Release Status (Past 7 Days) | High/Critical Open Issues | Active In-Progress PRs | Core Activity Focus |
|---------|-------------------------------|---------------------------|------------------------|---------------------|
| vLLM | No stable release; no breaking changes | 5 high-severity | 10+ | Sparse model hardware enablement, distributed inference stability, multi-modal ViT CUDA graphs |
| SGLang | v0.5.19 stable (786 PRs, 214 contributors) | 4 critical/high | 12+ | KV cache architecture refactor, weight cache daemon, disaggregated serving, AMD ROCm optimization |
| llama.cpp | 10 tagged builds (b10819–b10830); no breaking changes | 3 high-severity | 8+ | GDN normalization correctness, RDNA4 kernel tuning, GGUF conversion tooling, edge backend fixes |
| Ollama | v0.34.0-rc1 pre-release + v0.33.3 stable | 6 critical/high | 5+ | Apple Silicon MLX feature expansion, cloud model tool-call reliability, observability endpoint development |
| LiteLLM | 6 releases (v1.100.0 stable, previews, Docker-only patches) | 2 high-severity | 7+ | Rust core migration, supply-chain security (Docker signing), MCP/tool-use stability, billing accuracy |
| Unsloth | v0.1.806-beta | 1 high-severity | 8+ | Sparse model MTP training speedup, Studio reliability, multi-hardware (iGPU/Windows/ARM) compatibility |

## 3. Model Support Race
### Shipped Support
- **SGLang** led large-scale sparse model enablement with official Qwen3.8 (2.4T-A95B) autoregressive model support in v0.5.19, marking day-0 compatibility for one of the largest open sparse models.
- **llama.cpp** delivered full end-to-end Spark2.5 model support (GGUF conversion + inference) and introduced a `--fuse-qkv` HF-to-GGUF conversion flag to reduce memory overhead for fused QKV architectures.
- **Unsloth** shipped 2x faster training for Qwen3.8-Flash and GLM-5.3-Flash via default-enabled MTP in v0.1.806-beta, leading fine-tuning support for next-gen sparse models.
- **Ollama** expanded multi-modal coverage on Apple Silicon, adding gemma4 image + audio support on the MLX engine in v0.33.3.

### In-Progress Race
- vLLM, SGLang, and Unsloth all have active development for DeepSeek-V4 and GLM-5.3-Flash optimization across NVIDIA and AMD hardware; vLLM is focused on SM8x (Ampere) backward compatibility for DeepSeek-V4-Flash, while SGLang leads on disaggregated serving support for sparse models.
- Kimi K3 support is tracked across llama.cpp (recurrent state rollback for speculative decoding) and SGLang (day-0 DSpark compatibility), indicating broad industry demand for recurrent architecture enablement.
- LiteLLM expanded provider coverage with Foundry Local as a first-class OpenAI-compatible provider, and advanced Bedrock Mantle Responses API IAM auth for enterprise AWS deployments.

### Positioning
SGLang holds the lead for large-scale production sparse model serving readiness, while llama.cpp dominates edge/consumer hardware model coverage. Unsloth is the clear front-runner for fine-tuning performance on next-gen sparse architectures, and vLLM maintains broad community-driven model support across the widest range of hardware platforms.

## 4. Performance Frontier
Optimization effort is concentrated in five high-impact areas:
1.  **KV Cache Architecture Refactoring**: The most active cross-project theme. SGLang merged logical-page placement as the first step in its KV-shard refactor, advanced HiCache out-of-process data plane design, and cut Qwen3-235B FP8 weight load time from 5+ minutes to <1s via its Weight Cache Daemon. Unsloth developed KV cache preemption for parallel chat workloads to eliminate multi-session OOMs, while Ollama addressed MLX prefix cache inefficiency and added host-side prompt cache memory bounds control. llama.cpp optimized KV cache restore for agentic tool-call workloads.
2.  **Sparse Model Kernel & Distributed Optimization**: vLLM advanced ROCm sparse MLA decode fusion for DeepSeek-V4 on AMD GPUs and FlashInfer MLA index buffer fixes for Blackwell. SGLang optimized EAGLE speculative decoding for AMD MI355X and enabled breakable CUDA graph prefill for DeepSeek-V4 HIP backends. Unsloth delivered MTP-enabled 2x training speedups for Qwen3.8-Flash/GLM-5.3-Flash.
3.  **Disaggregated & Parallel Serving**: SGLang’s decode context parallelism and helix parallelism roadmaps progressed, while its PD disaggregation mode matured for DSPARK/EAGLE (with DFLASH still pending). llama.org initiated disaggregated prefill/decode design for `llama-server`, and vLLM added fault-tolerant EP scale-down for DP+EP MoE deployments.
4.  **Quantization & Hardware-Specific Tuning**: llama.cpp led edge kernel tuning with RDNA4 MUL_MAT optimizations, CUDA Q4_K/Q5_K branchless computation, and OpenCL weight pack fixes. vLLM advanced Intel XPU MXFP8 sequence parallelism and AMD RDNA4 FP8 upstream support. Unsloth optimized AMD iGPU Vulkan routing for Strix Halo hardware.
5.  **Gateway & Control Plane Efficiency**: LiteLLM’s Rust core rewrite targeted sub-1ms gateway overhead, while its adaptive router cold-start fix eliminated post-restart crashes for cost-based routing.

## 5. Layer Positioning
| Layer | Projects | Core Differentiation | Primary User Base |
|-------|----------|----------------------|-------------------|
| **High-Performance Serving Engine** | vLLM, SGLang | Data center-scale throughput, low latency, distributed inference, broad hardware/quantization support | Cloud providers, enterprise AI platforms, large-scale inference deployments |
| **Local/Edge Runtime** | llama.cpp, Ollama | Lightweight deployment, cross-platform consumer hardware support, GGUF ecosystem, ease of use | Edge deployments, desktop AI, consumer applications, prototyping |
| **AI Gateway** | LiteLLM | Provider abstraction, routing, billing/quota management, security, standardized API interfaces | Multi-provider AI applications, enterprise AI platforms, SaaS teams |
| **Fine-Tuning Framework** | Unsloth | Training speed optimization, LoRA/QLoRA efficiency, end-to-end fine-tuning + serving workflows | ML engineering teams, model customization pipelines, fine-tuning service providers |

Notable overlap: SGLang and vLLM compete directly in data center serving, with SGLang pushing harder on disaggregation and KV cache architecture innovation, while vLLM maintains broader community-driven model/hardware coverage. Ollama builds on top of llama.cpp for local runtime functionality while adding developer tooling and cloud model proxying. Unsloth integrates inference serving capabilities (via llama.cpp/vLLM backends) to deliver end-to-end fine-tuning + deployment workflows.

## 6. Trend Signals
### Industry Trends
1.  **Sparse attention model adoption is accelerating**: The flurry of enablement work for Qwen3.8, DeepSeek-V4, and GLM-5.3-Flash across every inference and training layer indicates that sparse MoE/MLA architectures are becoming the default for high-performance open models. Infrastructure teams that have not yet validated sparse model deployment pipelines will face a growing compatibility gap.
2.  **KV cache is the new performance battleground**: Nearly every project is investing in KV cache refactoring, preemption, disaggregation, or tiering. For long-context and agent workloads, KV cache memory efficiency and management are now the primary bottleneck, not raw compute FLOPs.
3.  **Edge hardware diversity is expanding beyond NVIDIA**: Active optimization for AMD RDNA4, Intel XPU, Apple Silicon, and ARM Windows reflects a growing demand for cost-effective edge and consumer-grade AI deployment. Local runtime projects (llama.cpp, Ollama, Unsloth) are leading this diversification.
4.  **Agent reliability is a top pain point**: Tool-call parsing bugs, infinite reasoning loops, KV cache state management issues, and billing gaps for early disconnects are pervasive across all layers. Agent application developers are currently paying a significant "reliability tax" from immature infrastructure support.
5.  **Supply-chain security moves up the gateway priority list**: LiteLLM’s standardized Docker image signing reflects growing enterprise demand for verifiable AI infrastructure software, a trend that will likely propagate to serving engine and runtime projects.

### Action Items for Developers
- **Inference teams**: Prioritize KV cache architecture evaluation for long-context and agent workloads; SGLang’s refactor and vLLM’s prefix cache fixes are key tracks to monitor.
- **Agent application builders**: Implement defensive loop detection, token limits, and fallback parsing for tool calls, as correctness issues persist across all engine and gateway layers.
- **Edge deployment teams**: Validate RDNA4 and Intel Arc support roadmaps if planning non-NVIDIA edge deployments; llama.cpp and Unsloth are leading this transition.
- **Enterprise platform teams**: Add Docker signature verification to gateway deployments (starting with LiteLLM v1.100.0+) and track Rust-based gateway migrations for ultra-low-latency use cases.
- **Fine-tuning practitioners**: Upgrade to Unsloth v0.1.806-beta for sparse model training workloads to capture 2x speedups with default MTP enabled.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Weekly Digest | 2026-09-07
*Data source: github.com/vllm-project/vllm (updates from the last 7 days)*

---

## 1. Last 7 Days' Highlights
No new stable releases landed this week. Community activity focused on expanding hardware/quantization support for next-gen sparse models (DeepSeek-V4, Qwen3.8-Flash-Next, GLM-5.3-Flash) across NVIDIA Blackwell, AMD RDNA4, and Intel XPU platforms, plus targeted fixes for distributed inference stalls and tool-call parsing correctness. Several long-running feature tracks (batch invariance, DRY sampling, multi-modal ViT CUDA graphs) saw continued community discussion.

---

## 2. Releases & Breaking Changes
No official releases published in the last 7 days. No breaking API/config changes were announced.

---

## 3. New Model & Hardware Support
### In Progress (Open Issues/PRs)
- **SM8x (Ampere) support for DeepSeek-V4-Flash**: Community request to enable DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731 on A100/A800/RTX 30xx GPUs; currently unsupported on SM8x architectures.
  [Issue #50576](https://github.com/vllm-project/vllm/issues/50576)
- **AMD RDNA4 (gfx1201) FP8 upstream**: Request to merge community gfx1201/RDNA4 FP8 patches into vllm-rocm, with confirmation that existing fall-through logic works without explicit gfx1201 restrictions.
  [Issue #28649](https://github.com/vllm-project/vllm/issues/28649)
- **MiniCPM-SALA model support request**: Community ask for support for the openbmb/MiniCPM-SALA architecture.
  [Issue #41641](https://github.com/vllm-project/vllm/issues/41641)
- **Intel XPU MXFP8 sequence parallelism**: PR to enable sequence parallelism for MXFP8 (W8A8, e8m0 block-scale) quantized models on Intel XPU via `--compilation-config`.
  [PR #49303](https://github.com/vllm-project/vllm/pull/49303)
- **Whisper speech model support tracking**: Consolidated issue for ongoing Whisper feature requests and implementation coordination.
  [Issue #25750](https://github.com/vllm-project/vllm/issues/25750)

### Multi-Modal Support Track
- Multi-modality support biweekly syncs continue; work tracked via GitHub Projects. Active efforts include ViT full CUDA graph support (for Qwen3-VL, GLM-V, Kimi K2.5) and LoRA support for more MM model towers/connectors.
  [RFC #4194](https://github.com/vllm-project/vllm/issues/4194) | [ViT CUDA Graph RFC #38175](https://github.com/vllm-project/vllm/issues/38175)

---

## 4. Performance & Optimization
### In Progress
- **Batch Invariant Feature & Performance Optimization**: Ongoing work to eliminate inference nondeterminism and optimize batch-invariant paths, tracked via project board.
  [Issue #27433](https://github.com/vllm-project/vllm/issues/27433)
- **DRY Sampling support**: Feature request to add the repetition-mitigating DRY sampler, particularly useful for small models in long-context settings.
  [Issue #8581](https://github.com/vllm-project/vllm/issues/8581)
- **Attention score output**: Long-standing feature request to expose attention scores from vLLM inference.
  [Issue #3192](https://github.com/vllm-project/vllm/issues/3192)
- **Zero-slice early-exit for LoRA kernels**: PR adding per-adapter per-slice active masks to skip zero-weight LoRA computations at both Python layer level and Triton kernel level, reducing overhead for partially active LoRA sets.
  [PR #48887](https://github.com/vllm-project/vllm/pull/48887)
- **ROCm sparse MLA decode fusion**: Two PRs fusing QK-RoPE, Q-concat, KV-concat, KV-cache write, and fp8 query assembly into single AITER kernels for DeepSeek-R1/MLA paths on AMD GPUs, reducing kernel launch overhead.
  [PR #47757](https://github.com/vllm-project/vllm/pull/47757) | [PR #55230](https://github.com/vllm-project/vllm/pull/55230)
- **SWA/hybrid layer MFU/MBU estimation**: PR fixing analytic performance metrics to correctly count FLOPs for sliding window attention and hybrid layer architectures.
  [PR #55624](https://github.com/vllm-project/vllm/pull/55624)
- **FlashInfer MLA sparse SM120 index buffer fix**: PR adjusting GLM-5.3-Flash kpool-widened top-k buffer sizing to work with stock `index_topk=2048` configs on SM120 without manual edits.
  [PR #55563](https://github.com/vllm-project/vllm/pull/55563)
- **Fault-tolerant EP scale-down**: PR adding scale-down and auto-recovery to the vLLM fault tolerance framework for DP+EP MoE deployments, enabling graceful degradation on transient GPU failures.
  [PR #46370](https://github.com/vllm-project/vllm/pull/46370)

---

## 5. Stability & Regressions
### High Severity
1. **Qwen3.8-Flash-Next greedy decoding nondeterminism (sm121/GB10)**: Temperature-0 requests return inconsistent outputs when prompt length nears `indexer_budget`, caused by `persistent_topk` behavior in prefill sparse attention.
   [Issue #54521](https://github.com/vllm-project/vllm/issues/54521)
2. **v0.27.0 4-node TP=4 engine stall after idle**: Permanent serving stall on GB10/aarch64 clusters after ~1 minute of idleness, caused by `shm_broadcast` writer starvation; requests never reach scheduler but health checks pass.
   [Issue #51921](https://github.com/vllm-project/vllm/issues/53960)
3. **v0.28.0 DeepSeek-V4-Pro 2-node distributed hang**: 2x8 H100 deployment hangs indefinitely after initialization; works correctly on v0.25.0, indicating a regression.
   [Issue #53894](https://github.com/vllm-project/vllm/issues/53894)
4. **PLE CPU offload deadlock on single GPU (GB10)**: `VLLM_PLE_CPU_OFFLOAD=1` with TP=1 hangs permanently during kernel warmup for Qwen3.8-Flash-Next.
   [Issue #53960](https://github.com/vllm-project/vllm/issues/53960)
5. **Decode Context Parallelism output drift/gibberish (v0.21.0+)**: `--decode-context-parallel-size` produces incorrect output in v0.21.0 and nightly builds.
   [Issue #41623](https://github.com/vllm-project/vllm/issues/41623)

### Medium Severity
- **Tool-call parsing failures**:
  - Qwen3.5-35B-A3B-FP8 loses tool calls when XML `tool_call` markup appears inside `<think>` reasoning regions with `--reasoning-parser qwen3 --tool-call-parser qwen3_coder`. [Issue #39056](https://github.com/vllm-project/vllm/issues/39056)
  - Gemma 4 31B IT tool validation fails for PI coding agent, with missing `path` property errors. [Issue #39072](https://github.com/vllm-project/vllm/issues/39072)
- **DFlash2 + YaRN zero prefix-cache reuse**: Identical 1.04M prompts get no prefix cache hit with DFlash2 enabled, while target-only mode reuses ~1.039M tokens. [Issue #54094](https://github.com/vllm-project/vllm/issues/54094)

### Fix PRs Merged/In Progress
- **DeepGEMM SM12x pure-fp8 regression**: PR pins vendored DeepGEMM to `a6b593d` to restore SM12x pure-fp8 1d1d kernels broken in newer versions. [PR #53680](https://github.com/vllm-project/vllm/pull/53680)
- **DeepSeek-V4 indexer paged MQA metadata crash**: PR gates indexer decode metadata filling on `is_deep_gemm_supported()` instead of import check, fixing host assert on DSV4 compress-128 pages. [PR #53522](https://github.com/vllm-project/vllm/pull/53522)
- **mhc_pre_broadcast DeepGEMM fallback**: PR adds TileLang fallback for `mhc_pre_broadcast` when DeepGEMM is unsupported, fixing DeepSeek-V4 startup failures on sm_121. [PR #53055](https://github.com/vllm-project/vllm/pull/53055)
- **KV offload SHM cgroup memory check**: PR adds cgroup memory headroom validation before SHM allocation for CPU KV offload, preventing silent OOMs. [PR #54014](https://github.com/vllm-project/vllm/pull/54014)
- **Full attention ghost block race condition**: PR fixes race where prefix block hashes are committed to BlockPool before GPU KV writes complete, causing cache hits on uninitialized data. [PR #42359](https://github.com/vllm-project/vllm/pull/42359)

### Closed Resolutions
- **Gemma 4 31B FP8_BLOCK garbage output**: Root-caused to double-applied absorbed activation scales leading to logit saturation; issue closed after fix. [Issue #39407](https://github.com/vllm-project/vllm/issues/39407)
- **Qwen3-VL FP8 exclamation-mark output on Jetson Thor**: Bug producing only `!` tokens on Jetson Thor resolved and closed. [Issue #27364](https://github.com/vllm-project/vllm/issues/27364)
- **Qwen3.5-MoE transformers 5.x class rename load failure**: Fix for `Qwen3_5MoeTextConfig` renamed class support closed. [Issue #36236](https://github.com/vllm-project/vllm/issues/36236)

---

## 6. What This Means for Application Developers
- **Sparse attention model deployments**: If running Qwen3.8-Flash-Next or DeepSeek-V4 on Blackwell GPUs, expect deterministic output only when prompt length stays below `indexer_budget` until Issue #54521 is resolved; avoid `VLLM_PLE_CPU_OFFLOAD=1` on single-GB10 setups to prevent startup hangs.
- **Tool-calling agents**: Qwen3.5 models with combined reasoning + tool-call parsers may miss function calls if tool markup appears in `<think>` blocks (Issue #39056). Test agent flows with representative reasoning outputs before production rollout, or use a parser that handles nested tool tags.
- **Multi-modal deployments**: LoRA support for vision towers/connectors is expanding beyond Qwen-VL/idefics3 (Issue #31479 closed for initial implementation); track RFC #4194 for upcoming ViT CUDA graph optimizations that will reduce visual encoding latency.
- **Distributed inference upgrades**: Hold off upgrading v0.25.0 → v0.28.0 for multi-node DeepSeek-V4-Pro deployments, as a hang regression is still open (Issue #53894). 4-node TP=4 GB10 clusters should also avoid v0.27.0 due to idle-stall issues.
- **Small model / long-context workloads**: The DRY sampler feature request (Issue #8581) has significant community support; if you run small models with high repetition rates, upvote or contribute to accelerate prioritization.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Weekly Digest — 2026-09-07
*(Data source: github.com/sgl-project/sglang, updates from the last 7 days)*

---

## 1. Last 7 Days' Highlights
SGLang v0.5.19 shipped with 786 PRs from 214 contributors, adding support for the new Qwen3.8 (2.4T-A95B) autoregressive model. On the infrastructure side, parallelism and disaggregation roadmaps advanced rapidly, while CI and test suites saw major consolidation. The most active work streams spanned AMD/ROCm kernel optimizations, KV cache architecture refactors, and Apple Silicon serving redesign.

---

## 2. Releases & Breaking Changes
- **v0.5.19** released
  - 786 PRs merged from 214 contributors
  - New model addition: Qwen3.8 (2.4T-A95B) autoregressive model
  - Full supported model list: [SGLang Cookbook](https://docs.sglang.io/cookbook)
  - No explicit breaking changes noted in provided release highlights

---

## 3. New Model & Hardware Support
### Models
- **Qwen3.8 (2.4T-A95B)** (autoregressive): Added in v0.5.19 ([PR #35758](https://github.com/sgl-project/sglang/pull/35758))
- **Qwen3.8-Flash-Next thinking** support in progress; tool parser bug under investigation ([Issue #36537](https://github.com/sgl-project/sglang/issues/36537))
- **Kimi K3** roadmap tracking active, with day-0 support and DSpark compatibility ([Issue #32607](https://github.com/sgl-project/sglang/issues/32607))

### Hardware / Backends
- **Intel next-gen Xeon CPU**: CBB (Compute Building Block) core topology management added ([PR #36850](https://github.com/sgl-project/sglang/pull/36850))
- **Huawei Atlas A5 NPU**: Initial DeepSeek-V4 processing support in progress ([PR #37373](https://github.com/sgl-project/sglang/pull/37373))
- **Apple Silicon**: Serving redesign proposed — Torch-owned SRT path with exported whole-model MLX region ([Issue #32321](https://github.com/sgl-project/sglang/issues/32321), [PR #36164](https://github.com/sgl-project/sglang/pull/36164))
- **AMD ROCm**:
  - EAGLE speculative decoding topk=1 optimization (skip full-vocab softmax) ([PR #35872](https://github.com/sgl-project/sglang/pull/35872))
  - gfx950 assembly attention kernels for EAGLE verify/draft/decode on MI355X ([PR #37465](https://github.com/sgl-project/sglang/pull/37465))
  - Breakable CUDA graph prefill enabled for DeepSeek-V4 HIP radix backend ([PR #37810](https://github.com/sgl-project/sglang/pull/37810))

---

## 4. Performance & Optimization
- **Fast engine recovery**: Weight Cache Daemon Phase 1 landed; Qwen3-235B FP8 weight load time reduced from ~306–327s to <1s ([Issue #33522](https://github.com/sgl-project/sglang/issues/33522))
- **HiCache optimizations**:
  - Reduced `all_reduce` count in `check_hicache_events` for pipeline parallelism ([PR #37562](https://github.com/sgl-project/sglang/pull/37562))
  - Added `@rank_consensus` validator to HiCache functions, with CI coverage enabled ([PR #37425](https://github.com/sgl-project/sglang/pull/37425))
  - Out-of-process HiCache data plane with device-memory IPC proposed ([Issue #37372](https://github.com/sgl-project/sglang/issues/37372))
- **KV cache architecture**:
  - Logical-page placement (first in KV-shard refactor series) merged as index-space-only change ([PR #37614](https://github.com/sgl-project/sglang/pull/37614))
  - Unified KV SWA per-request ring runtime accounting for DeepSeek-V4 ([PR #31040](https://github.com/sgl-project/sglang/pull/31040))
- **Context parallelism**:
  - Decode Context Parallelism (DCP) + Helix Parallelism roadmap for Q3 2026 in progress ([Issue #29736](https://github.com/sgl-project/sglang/issues/29736))
  - Q3 2026 Context Parallelism roadmap tracking active, expanding from partial prefill support to full coverage ([Issue #21788](https://github.com/sgl-project/sglang/issues/21788))
- **HiSparse long-context sparse serving**:
  - Fix for swap-in planner prefix-scan corruption below `swap_in_block_size` 512 ([PR #38243](https://github.com/sgl-project/sglang/pull/38243))
  - HiSparse roadmap active, targeting lower HBM usage for long-context decode ([Issue #28874](https://github.com/sgl-project/sglang/issues/28874))
- **Multimodal / diffusion**:
  - Triton varlen prefill attention now supports sliding window and per-head sinks ([PR #38142](https://github.com/sgl-project/sglang/pull/38142))
  - Diffusion internal warmup frame search noise reduced ([PR #38226](https://github.com/sgl-project/sglang/pull/38226))
- **Gateway**: Kubernetes service discovery reconciled with periodic full LIST to handle unreliable watch streams ([PR #32322](https://github.com/sgl-project/sglang/pull/32322))
- **Test / CI**:
  - Test cleanup and CI taxonomy consolidation: net -11.4K lines across 201 files ([PR #37436](https://github.com/sgl-project/sglang/pull/37436))
  - Diffusion 2-GPU CI rebalanced, timeout cut from 4h to 45m ([PR #38239](https://github.com/sgl-project/sglang/pull/38239))

---

## 5. Stability & Regressions
### Critical / High Severity
1. **Qwen3.8-Flash-Next thinking + qwen3_coder tool parser infinite loop on token ID 0** (open)
   - Reproducible on official day-0 SGLang image; no fix PR linked yet
   - [Issue #36537](https://github.com/sgl-project/sglang/issues/36537)
2. **DFLASH speculative decoding crash under PD disaggregation** (open)
   - `spec_info` is None on decode side, leading to crash then watchdog self-kill; DSPARK/EAGLE work under PD but DFLASH missing disagg wiring
   - [Issue #36140](https://github.com/sgl-project/sglang/issues/36140)
3. **PrefillDelayer mixed-state feedback loop + prefill collapse under DP Attention + chunked prefill** (open)
   - Scheduler/performance stability issue; requests complete but progress degrades
   - [Issue #35241](https://github.com/sgl-project/sglang/issues/35241)
4. **CUDA coredump tracker**: 293 comments of auto-collected failures from PR tests (active tracking)
   - [Issue #26340](https://github.com/sgl-project/sglang/issues/26340)

### Medium Severity
- **DeepSeek-V4 FP8 scheduler hang in DSV4 sparse prefill** (closed, fixed in recent versions)
  - [Issue #34235](https://github.com/sgl-project/sglang/issues/34235)
- **glm-5.2-w4afp8 chunked prefill size ineffective + gemm warmup slow** (closed, inactive)
  - [Issue #29358](https://github.com/sgl-project/sglang/issues/29358)
- **Decode throughput inconsistency between bench_serving and engine logs** (open, good first issue)
  - [Issue #3050](https://github.com/sgl-project/sglang/issues/3050)
- **CI flakiness tracking**: 1 broken, 9 flaky, 957 recently fixed as of 2026-09-07
  - [Issue #17050](https://github.com/sgl-project/sglang/issues/17050)

---

## 6. What This Means for Application Developers
- **Qwen3.8 is ready for testing** in v0.5.19, but avoid the Qwen3.8-Flash-Next + tool calling combination for now until the token ID 0 loop bug ([#36537](https://github.com/sgl-project/sglang/issues/36537)) is resolved.
- **Massive model load speedup** for large FP8 models: if you run Qwen3-235B class workloads, the Weight Cache Daemon ([#33522](https://github.com/sgl-project/sglang/issues/33522)) cuts cold start weight load from 5+ minutes to under 1 second — evaluate it for failover/recovery pipelines.
- **Agentic workloads with long context**: follow the Distributed KVCache System ([#21846](https://github.com/sgl-project/sglang/issues/21846)) and HiSparse ([#28874](https://github.com/sgl-project/sglang/issues/28874)) roadmaps — both target the KV cache memory and throughput bottlenecks that hit multi-turn agent sessions.
- **PD disaggregation users**: stick to DSPARK/EAGLE speculative decoding for now; DFLASH is not yet compatible with disaggregated decode mode ([#36140](https://github.com/sgl-project/sglang/issues/36140)).
- **Apple Silicon / edge deployments**: the Torch+MLX hybrid serving design ([#32321](https://github.com/sgl-project/sglang/issues/32321)) is progressing — track it if you plan to deploy SGLang on Mac devices.
- **Kubernetes gateway users**: the service discovery fix ([#32322](https://github.com/sgl-project/sglang/pull/32322)) addresses pod set drift on managed clusters with flaky watch streams — upgrade once merged if you run on such platforms.
- **Unit test coverage improvement** ([#20865](https://github.com/sgl-project/sglang/issues/20865), closed) means more reliable core module behavior in upcoming releases, reducing regression risk for downstream integrations.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Weekly Digest | 2026-09-07
Source: [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)

---

## 1. Last 7 Days' Highlights
This week delivered 10 tagged builds (b10819–b10830) headlined by official Spark2.5 model support, a critical GDN normalization fix for gated attention architectures, and a new `--fuse-qkv` HF-to-GGUF conversion flag. Backend teams shipped targeted fixes for CUDA race conditions, OpenCL q4_K/q5_K weight packing, and Metal memory leaks, while the server and tooling stack gained structured JSONL logging and simplified CMake UI asset embedding. Active development is focused on RDNA 4 optimizations, KV cache rollback for recurrent models, and disaggregated prefill/decode for `llama-server`.

---

## 2. Releases & Breaking Changes
No breaking API or config changes were landed in the past 7 days. Recent release highlights:
- **b10830** — Convert: add `--fuse-qkv` flag to fuse Q/K/V into QKV during HF-to-GGUF conversion ([#22780](https://github.com/ggml-org/llama.cpp/pull/22780))
- **b10823** — Common: add `--log-jsonl` flag for structured JSON log output ([#28437](https://github.com/ggml-org/llama.cpp/pull/28437))
- **b10822** — UI: embed assets directly via CMake, removing the build-time C++ helper and external gzip dependency, simplifying cross-compilation ([#28445](https://github.com/ggml-org/llama.cpp/pull/28445))

---

## 3. New Model & Hardware Support
### Models
- **Spark2_5ForCausalLM**: full end-to-end support including GGUF conversion, architecture registration, tokenizer pre-tokenizer, and inference graph ([#27868](https://github.com/ggml-org/llama.cpp/pull/27868), released in b10828)
- **HrmTextForCausalLM (DFM Mimir 1B)**: in-progress support for dual-stack alternating transformer architecture with fused GQKV projection conversion ([#27625](https://github.com/ggml-org/llama.cpp/pull/27625))
- **Kimi-K3**: in-progress recurrent-state rollback support for speculative decoding without changing existing KDA state and Q/K/V convolution window storage ([#28466](https://github.com/ggml-org/llama.cpp/pull/28466))

### Hardware / Backends
- **Metal**: remaining fa-vec tunings added for M2 Max ([#28458](https://github.com/ggml-org/llama.cpp/pull/28458), b10821); fixed memory leak in early return path ([#28399](https://github.com/ggml-org/llama.cpp/pull/28399), b10819)
- **Hexagon**: in-progress fixes for batch buffer bounds and strided copy dispatch ([#28516](https://github.com/ggml-org/llama.cpp/pull/28516))
- **XDNA backend**: community feature request under active discussion (32 👍) ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725))

---

## 4. Performance & Optimization
### Landed
- **CUDA**: fixed race conditions in mmid and mmf kernels ([#28475](https://github.com/ggml-org/llama.cpp/pull/28475), b10826)
- **OpenCL**: correct weight pack selection for q4_K, q5_K mul_mat operations ([#28402](https://github.com/ggml-org/llama.cpp/pull/28402), b10827)
- **GDN normalization fix**: corrected Gated Delta Net Q/K normalization from `max` to `rsqrt` (eps inside root), matching flash-linear-attention's l2norm definition and fixing correctness on relevant architectures ([#28068](https://github.com/ggml-org/llama.cpp/pull/28068), b10829)
- **Grammar**: fixed max repetition threshold calculation ([#28469](https://github.com/ggml-org/llama.cpp/pull/28469), b10825)

### In Progress
- **Vulkan MoE optimization**: skip unneeded work in mul_mm coopmat1 path by computing required work item bounds after expert routing ([#25483](https://github.com/ggml-org/llama.cpp/pull/25483))
- **CUDA Q4_K/Q5_K branchless computation**: prefetch for Spark models and eliminate per-column scale unpack re-execution, improving performance at batch sizes > 1 ([#26705](https://github.com/ggml-org/llama.cpp/pull/26705))
- **HIP RDNA 4 MUL_MAT optimizations**: fixes for Q6_K and Q2_K, plus updated mmq conditions, validated with backend ops tests on ROCm 7.15 ([#25940](https://github.com/ggml-org/llama.cpp/pull/25940))
- **RDNA4 MMVQ tuning**: tuned warp counts for Q4_K and Q6_K single-token decode, improving throughput on gfx1200 ([#24386](https://github.com/ggml-org/llama.cpp/pull/24386))
- **CUDA/HIP Flash Attention tuning (gfx1201)**: improved long-context prefill performance on R9700 PRO, plus a fix for HS=256 in general CUDA FA code ([#28102](https://github.com/ggml-org/llama.cpp/pull/28102))
- **KV cache restore optimization**: optimized restoring non-contiguous cells for agentic workloads with frequent tool calls ([#27991](https://github.com/ggml-org/llama.cpp/pull/27991))
- **Disaggregated prefill/decode for `llama-server`**: roadmap feature under active design to split prompt processing and token generation across dedicated devices ([#21266](https://github.com/ggml-org/llama.cpp/issues/21266))

---

## 5. Stability & Regressions
Ranked by severity (impact + comment activity):
1. **[HIGH] Qwen3.5 9B tool call eval bug (ROCm)**: model frequently prints XML tool calls inside thinking blocks and stops generation when thinking is enabled; 60 comments, last updated 2026-09-07, no fix PR linked ([#20837](https://github.com/ggml-org/llama.cpp/issues/20837))
2. **[HIGH] SYCL multi-GPU tensor split crash**: `--split-mode tensor` triggers `dev2dev_memcpy` DEVICE_LOST on dual Arc Pro B70 despite working P2P; 28 comments ([#27198](https://github.com/ggml-org/llama.cpp/issues/27198))
3. **[HIGH] DeepSeek V4 garbled output (ROCm Strix Halo)**: IQ3_XXS quant produces garbage on Ryzen AI Max+ 395 with HIP backend; 29 comments, no confirmed root cause ([#25436](https://github.com/ggml-org/llama.cpp/issues/25436))
4. **[MEDIUM] MTP Qwen3.6 27B repeated `////` output**: after long sessions, model outputs repeated slashes; 32 comments, CUDA backend ([#23577](https://github.com/ggml-org/llama.cpp/issues/23577))
5. **[MEDIUM] Speculative decoding correctness drift**: draft-mtp/draft-dspark greedy output diverges from vanilla inference on quantized targets (matches on bf16); 21 comments ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618))
6. **[MEDIUM] gguf-py wide tensor sign loss**: NumPy 1.x temporary elision causes sign loss for tensors ≥256K during Q8_0/TQ1_0/TQ2_0 quantization; fix PR [#28523](https://github.com/ggml-org/llama.cpp/pull/28523) open with regression test
7. **[LOW] JSON enum handling bug**: enum values emit as booleans instead of integers (regression from b10585); fix PR [#28518](https://github.com/ggml-org/llama.cpp/pull/28518) open with test coverage
8. **[LOW] SYCL `--fit` memory accounting gap**: loader does not fully account for runtime memory, leading to overflow on Arc B70; 17 comments ([#27595](https://github.com/ggml-org/llama.cpp/issues/27595))

Closed this week: Mac x86 Vulkan AMD garbage output ([#20029](https://github.com/ggml-org/llama.cpp/issues/20029)), SYCL xe2 segfault ([#25808](https://github.com/ggml-org/llama.cpp/issues/25808)), Jinja template parsing error in TranslateGemma ([#20305](https://github.com/ggml-org/llama.cpp/issues/20305)).

---

## 6. What This Means for Application Developers
- **Structured logging is ready**: the new `--log-jsonl` flag in b10823 simplifies integrating llama.cpp into observability stacks — use it to pipe token throughput, latency, and error metrics into your existing monitoring pipelines without custom log parsing.
- **Spark2.5 integration is production-ready**: full GGUF conversion and inference support means you can now deploy Spark2.5 models on edge and server deployments without custom forks; use the `--fuse-qkv` conversion flag to reduce memory overhead and kernel launch count for fused QKV architectures.
- **Agent workloads will get faster**: the in-progress KV cache non-contiguous restore optimization ([#27991](https://github.com/ggml-org/llama.cpp/pull/27991)) directly targets the tool-call round-trip latency bottleneck in agent loops — track this PR if you're building tool-using assistants.
- **ROCm/SYCL users should test carefully**: multiple open correctness and crash bugs affect AMD RDNA 3/4 and Intel Arc platforms, especially for newer models like Qwen3.5/3.6 and DeepSeek V4. Stick to validated quant formats (bf16 for verification) and monitor the `HIP` and `SYCL` tags for fixes.
- **Disaggregated serving is coming**: the `llama-server` disaggregated prefill/decode roadmap item ([#21266](https://github.com/ggml-org/llama.cpp/issues/21266)) will enable heterogeneous deployments that mix fast prefill hardware with high-throughput decode hardware — start evaluating your workload's prefill/decode ratio to plan capacity.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Weekly Digest | 2026-09-07

---

## 1. Last 7 Days' Highlights
Ollama released `v0.34.0-rc1` with native ChatGPT Desktop integration for macOS users and `v0.33.3` with gemma4 multimodal support on MLX and improved structured output performance on Apple Silicon. Community demand for a Prometheus-compatible `/metrics` endpoint advanced with an active implementation PR, while multiple high-severity bugs were reported around cloud model tool-calling correctness and MLX runner context enforcement.

---

## 2. Releases & Breaking Changes
| Version | Status | Key Changes |
|---------|--------|-------------|
| [v0.34.0-rc1](https://github.com/ollama/ollama/releases/tag/v0.34.0-rc1) | Pre-release | macOS users can now use local Ollama models directly in ChatGPT Desktop via app-level setup; improved structured output performance on Apple Silicon. |
| [v0.33.3](https://github.com/ollama/ollama/releases/tag/v0.33.3) | Stable | <ul><li>gemma4 now supports images and audio on the MLX engine</li><li>Prompt token caching is now reported in outputs</li><li>GGUF model default parameters are now honored by the runtime</li><li>Upstream MLX, MLX-C, and llama.cpp updates</li></ul> |

No breaking API or config changes were reported in the 7-day window.

---

## 3. New Model & Hardware Support
- **MLX multimodal expansion**: gemma4 gains image + audio support on Apple Silicon via the MLX engine ([v0.33.3 release notes](https://github.com/ollama/ollama/releases/tag/v0.33.3)).
- **Spark-X2.5 architecture request**: Community PR in progress to add native support for `spark2_5` architecture (Spark-X2.5-4B / 1.7B models) ([Issue #18195](https://github.com/ollama/ollama/issues/18195)).
- **Qwen static YaRN on MLX**: In-progress PR adds YaRN RoPE scaling support for Qwen3.5/3.8 models on the MLX runner, enabling extended context windows up to `factor * original_max_position_embeddings` ([PR #18263](https://github.com/ollama/ollama/pull/18263)).
- **Legacy macOS support request**: Feature request for compatibility with macOS versions older than 14.0 (Monterey 12.7.2 reported as broken) ([Issue #17842](https://github.com/ollama/ollama/issues/17842)).

---

## 4. Performance & Optimization
- **Structured output speedup on Apple Silicon**: v0.34.0-rc1 delivers improved structured output performance on Apple Silicon (exact benchmarks not provided) ([v0.34.0-rc1 release notes](https://github.com/ollama/ollama/releases/tag/v0.34.0-rc1)).
- **MLX prefix cache inefficiency**: Reported bug where prefix-cache restore is truncated to 8192-token boundaries, forcing 17–27 seconds of re-prefill per agent turn on Apple M2 Max for workloads with partial prefix matches ([Issue #18267](https://github.com/ollama/ollama/issues/18267)).
- **llama-server prompt cache memory control**: In-progress PR adds `OLLAMA_CACHE_RAM` environment variable to bound llama-server's host-side prompt cache, preventing unconstrained memory growth from evicted KV states ([PR #18265](https://github.com/ollama/ollama/pull/18265)).
- **VRAM prediction framework**: WIP PR implements single-GPU VRAM usage prediction from model head dimensions and historical load measurements, enabling better automatic offloading decisions ([PR #18198](https://github.com/ollama/ollama/pull/18198)).
- **Cached prompt token reporting**: v0.33.3 now reports cached prompt tokens, enabling users to measure cache hit efficiency ([v0.33.3 release notes](https://github.com/ollama/ollama/releases/tag/v0.33.3)).

---

## 5. Stability & Regressions
Ranked by severity (user impact + comment/engagement volume):

1. **[Critical] `digest mismatch` on model download** ([Issue #941](https://github.com/ollama/ollama/issues/941)): Long-standing intermittent failure of `ollama pull` (162 comments, 45 👍); no fix PR linked.
2. **[High] Laguna parser incorrectly classifies plain JSON as tool calls** ([Issue #17602](https://github.com/ollama/ollama/issues/17602)): The Laguna tool-call parser accepts any JSON object in model replies as a tool call, corrupting or aborting normal responses; affects `poolside-v1` and similar models. No fix PR linked.
3. **[High] deepseek-v4-flash:cloud infinite tool-call loop** ([Issue #17617](https://github.com/ollama/ollama/issues/17617)): Leaked `</think>` literal in assistant history triggers 193 consecutive identical tool calls (~31M tokens) when used via Anthropic-compatible endpoint with agentic clients. No fix PR linked.
4. **[High] glm-5.3:cloud endless reasoning / task abortion** ([Issue #18193](https://github.com/ollama/ollama/issues/18193)): Cloud-hosted glm-5.3 enters infinite reasoning loops and aborts tasks in OpenCode/ZCode, while the official Z.AI API works normally. No fix PR linked.
5. **[High] MLX runner ignores Modelfile `num_ctx`** ([Issue #18125](https://github.com/ollama/ollama/issues/18125)): Context limit enforcement is broken on MLX, allowing prompts up to architecture maximum and triggering Metal watchdog panics on long prefill. **Fix PR merged**: [PR #18261](https://github.com/ollama/ollama/pull/18261) (closed, passes scheduler-selected `num_ctx` to MLX runner and reports effective context).
6. **[High] Vulkan backend regression on AMD iGPU** ([Issue #18272](https://github.com/ollama/ollama/issues/18272)): Regression introduced in v0.32.12 causes "Not enough memory for command submission" error loading 66GB models on AMD iGPU; v0.32.9 works correctly. No fix PR linked.
7. **[Medium] gemma3:12b structured output truncation** ([Issue #18094](https://github.com/ollama/ollama/issues/18094)): JSON schema structured output (`format` parameter) truncates prematurely when input contains double-quoted terms requiring escaping. No fix PR linked.
8. **[Medium] NVIDIA 1080Ti CUDA crash on Windows** ([Issue #16957](https://github.com/ollama/ollama/issues/16957)): CUDA GPU discovery fails with `0xc0000005` error on Windows 11 with GTX 1080Ti, preventing GPU offload. No fix PR linked.
9. **[Medium] macOS GPU reset leaves runner in broken state** ([Issue #18213](https://github.com/ollama/ollama/issues/18213)): Mid-decode GPU reset on Apple Silicon leaves the runner loaded but returning empty 200 responses for all subsequent `/api/generate` calls until restart. No fix PR linked.
10. **[Low] Download progress regression** ([Issue #8484](https://github.com/ollama/ollama/issues/8484)): Model download progress reverts randomly (e.g., drops from 60% to lower values) with total size fluctuating; closed as resolved in recent builds.

---

## 6. What This Means for Application Developers
- **Ecosystem integration expands**: The v0.34.0-rc1 ChatGPT Desktop integration sets a precedent for native LLM client interoperability — expect similar patterns for other desktop AI tools to land in upcoming releases.
- **Cloud model tool-calling is unreliable for agent workloads**: Multiple high-severity bugs (`deepseek-v4-flash:cloud` infinite loops, `glm-5.3:cloud` runaway reasoning, Laguna parser false positives) mean agentic applications relying on Ollama's cloud model endpoints need defensive error handling, loop detection, and token usage limits to avoid unbounded cost and failures.
- **MLX context enforcement is fixed in main**: If you run Apple Silicon workloads with custom `num_ctx` values, pull builds containing PR #18261 to eliminate Metal watchdog panics from oversize prefills.
- **Prometheus metrics coming soon**: The active `/metrics` endpoint PR ([#16998](https://github.com/ollama/ollama/pull/16998)) will enable standard monitoring of queue depth, model load status, and request counts — teams building production serving on Ollama can plan to integrate it into their observability stacks once merged (enable via `OLLAMA_METRICS=1`).
- **Context length precedence is documented**: For applications setting context at multiple levels, follow the official precedence order: server default → `OLLAMA_CONTEXT_LENGTH` → Modelfile `num_ctx` → API request options ([Issue #18229](https://github.com/ollama/ollama/issues/18229)).
- **Vulkan regression note for AMD users**: If you deploy on AMD iGPU with Vulkan, pin to v0.32.9 until the v0.32.12+ memory allocation regression is resolved.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Weekly Digest — 2026-09-07

---

## 1. Last 7 Days' Highlights
LiteLLM advanced its Rust migration toward a sub-1ms overhead AI gateway, while security and supply-chain improvements continued via standardized Docker image signing across new releases. Active community engagement drove progress on critical stability fixes for streaming, provider translation, and budget tracking, plus feature requests for flexible routing and plan limits.

---

## 2. Releases & Breaking Changes
Over the past 7 days, LiteLLM published multiple releases, all featuring Docker image signature verification via cosign, using the key introduced in commit [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0):
- **v1.101.0-rc.1** (pre-release): [Release page](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-rc.1)
- **v1.100.0** (stable): [Release page](https://github.com/BerriAI/litellm/releases/tag/v1.100.0)
- **v1.101.0-dev.2 / v1.101.0-dev.1** (development previews): [v1.101.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-dev.2), [v1.101.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-dev.1)
- **v1.99.1** (Docker-only): No PyPI package; use container images or stay on v1.99.0. [Release page](https://github.com/BerriAI/litellm/releases/tag/v1.99.1)
- **v1.99.0** (stable): [Release page](https://github.com/BerriAI/litellm/releases/tag/v1.99.0)
- **v1.97.1** (Docker-only): No PyPI package; use container images or stay on v1.97.0. [Release page](https://github.com/BerriAI/litellm/releases/tag/v1.97.1)

> **Action required for security-conscious deployments**: Verify Docker image signatures using cosign against the published public key to confirm image authenticity.

---

## 3. New Model & Hardware Support
- **Foundry Local provider**: PR [#29449](https://github.com/BerriAI/litellm/pull/29449) adds `foundry_local/` as a first-class OpenAI-compatible provider, with SDK 1.2 guidance and proxy/dashboard integration.
- **Bedrock Mantle Responses API IAM auth**: PR [#29711](https://github.com/BerriAI/litellm/pull/29711) (in progress) adds SigV4/IAM authentication to the Bedrock Mantle `/openai/v1/responses` route, enabling use in IAM-only AWS deployments (EKS/ECS with instance roles).
- **OpenRouter Qwen cache control**: PR [#29335](https://github.com/BerriAI/litellm/pull/29335) (in progress) fixes `cache_control` and `cache_control_injection_points` parameter stripping for OpenRouter Qwen models.
- **Gemini Google Maps response format**: PR [#29275](https://github.com/BerriAI/litellm/pull/29275) (stale) adds support for Gemini Google Maps response formatting.

---

## 4. Performance & Optimization
- **Rust migration — sub-1ms overhead**: The core Rust rewrite tracked in Issue [#31263](https://github.com/BerriAI/litellm/issues/31263) targets sub-1ms gateway overhead. CI flakiness in lifecycle/GC tests is being addressed in PR [#40073](https://github.com/BerriAI/litellm/pull/40073), which serializes retained callback tests to avoid `gc.collect` race conditions.
- **Markov-based adaptive routing (proposal)**: Issue [#31555](https://github.com/BerriAI/litellm/issues/31555) proposes an optional Markov decision process routing strategy for real-time token cost arbitrage across providers.
- **Adaptive router cold-start fix**: PR [#29398](https://github.com/BerriAI/litellm/pull/29398) (merged/closed) fixes an HTTP 500 crash (`gammavariate: alpha and beta must be > 0.0`) after proxy restart by merging persisted deltas onto the cold-start Beta prior.
- **Router fallback deep-copy**: PR [#27462](https://github.com/BerriAI/litellm/pull/27462) (stale) deep-copies kwargs per fallback attempt to prevent mutation-related routing errors.

---

## 5. Stability & Regressions
Ranked by severity (highest first):

1. **MCP auto-execute hijacks client-side tool use** (High) — Issue [#37031](https://github.com/BerriAI/litellm/issues/37031): When `require_approval: "never"` is set for MCP tools, the proxy auto-execute loop takes over agentic client requests (e.g., Claude Code), breaking non-MCP tools with "Error executing tool". No fix PR linked yet.
2. **Usage data lost on early client disconnect during streaming** (High) — Issue [#14457](https://github.com/BerriAI/litellm/issues/14457): If a client disconnects before the final usage chunk, token/spend tracking is lost, causing billing and quota gaps. No fix PR linked yet.
3. **Bedrock handler drops provider response headers** (Medium) — Issue [#38357](https://github.com/BerriAI/litellm/issues/38357): `x-amzn-RequestId` and other Bedrock headers are missing from `_hidden_params.additional_headers` for both Converse and streaming paths. No fix PR linked yet.
4. **Fallback config not reloaded on redeploy** (Medium) — Issue [#15647](https://github.com/BerriAI/litellm/issues/15647): Updated fallback configurations are not applied after redeployment unless manually updated via API. No fix PR linked yet.
5. **Budget tracking persistence bugs** (Medium):
   - Issue [#25386](https://github.com/BerriAI/litellm/issues/25386): `max_end_user_budget_id` does not persist to the database, so budget resets never run for auto-created end users.
   - Issue [#27300](https://github.com/BerriAI/litellm/issues/27300): `max_budget` is ignored after monthly reset.
6. **Image edit endpoint streaming error** (Medium) — Issue [#26552](https://github.com/BerriAI/litellm/issues/26552): `/v1/images/edits` with mask fails with "Attempted to access streaming request content, without having called read()". Updated 2026-09-07.
7. **ChatGPT subscription / GPT-5.4 translation errors** (Medium):
   - Issue [#25429](https://github.com/BerriAI/litellm/issues/25429): `chatgpt/gpt-5.4` returns empty final responses; `completion()` bridge fails on Responses API output.
   - Issue [#27175](https://github.com/BerriAI/litellm/issues/27175): ChatGPT subscription OAuth device flow requests fail against `chatgpt.com` backend.
8. **MCP OAuth flow URL inheritance bug** (Low-Medium) — Issue [#20495](https://github.com/BerriAI/litellm/issues/20495): Temporary MCP OAuth servers do not inherit configured OAuth URLs.

Fix PRs of note in review:
- PR [#40075](https://github.com/BerriAI/litellm/pull/40075): Fixes CCR stream conversion dropping `stream_options` incorrectly, causing DeepSeek rejections.
- PR [#40074](https://github.com/BerriAI/litellm/pull/40074): MAI image generation now rejects invalid `n>1` and unsupported sizes with clear errors instead of silent failures.
- PR [#38045](https://github.com/BerriAI/litellm/pull/38045) (closed/merged): Fixes `OCRResponse` Pydantic model construction failure on clean checkouts.

---

## 6. What This Means for Application Developers
- **Supply chain security**: Upgrade to v1.100.0 or newer and enable cosign signature verification for Docker deployments to mitigate tampering risks. Note that v1.99.1 and v1.97.1 are Docker-only — do not attempt `pip install` for those versions.
- **Agent / tool-use caution**: If you use Claude Code or similar agentic clients behind LiteLLM with MCP auto-execute (`require_approval: "never"`), monitor Issue [#37031](https://github.com/BerriAI/litellm/issues/37031) closely — non-MCP client tools may break until a fix lands.
- **Billing accuracy**: For streaming-heavy workloads, be aware that early client disconnects cause usage tracking loss (Issue [#14457](https://github.com/BerriAI/litellm/issues/14457)). Validate your billing/quota pipelines against partial streams if disconnects are common.
- **Rust gateway beta**: Teams targeting ultra-low-latency inference gateways can follow the Rust migration in Issue [#31263](https://github.com/BerriAI/litellm/issues/31263) and sign up for the early beta tester group linked there.
- **Budget / SSO plan requests**: Upvote Issue [#25762](https://github.com/BerriAI/litellm/issues/25762) (unlimited SSO on Standard Plan) if you need more SSO seats, and track Issue [#25386](https://github.com/BerriAI/litellm/issues/25386) if you rely on end-user budget auto-creation via `max_end_user_budget_id`.
- **Per-model egress proxying**: If you need model-specific SOCKS5/outbound proxy routing, follow Issue [#25563](https://github.com/BerriAI/litellm/issues/25563) — currently only process-level proxy env vars are supported.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Weekly Digest | 2026-09-07
---

## 1. Last 7 Days' Highlights
Unsloth shipped `v0.1.806-beta` with 2x faster training for Qwen3.8-Flash and GLM-5.3-Flash via default-enabled MTP, plus 170+ cross-stack improvements. The bulk of active development focused on Unsloth Studio reliability, GPU compatibility, and serving efficiency — including KV cache preemption for multi-chat workloads and Windows hardware support fixes. Community-reported issues centered on hardware/OS compatibility (Intel Arc, integrated GPUs) and Studio usability.

## 2. Releases & Breaking Changes
- **v0.1.806-beta** (and prior v0.1.805-beta, identical release notes): 2x faster Qwen3.8-Flash-Next / GLM-5.3-Flash training with MTP enabled by default (disable via config). Includes 170+ training, chat, hardware, and performance improvements, plus smoother model loading with fewer errors across local servers and caches.
  - [Release page](https://github.com/unslothai/unsloth/releases/tag/v0.1.806-beta)
- No breaking API changes documented in the release notes.

## 3. New Model & Hardware Support
### In Progress / Proposed
- **Voxtral multilingual multimodal model support** (feature request, 14 👍): Top-voted community request for Unsloth integration.
  - Issue [#3013](https://github.com/unslothai/unsloth/issues/3013)
- **Qwen3-TTS fine-tuning support** (feature request, good first issue): Add FT support for the popular Qwen3-TTS model compatible with transformers.
  - Issue [#3951](https://github.com/unslothai/unsloth/issues/3951)
- **LFM / Mamba fast inference support** (feature request): `fast_inference=True` currently crashes during state dict extraction for LFM2.5 models.
  - Issue [#4073](https://github.com/unslothai/unsloth/issues/4073)
- **AMD integrated GPU Vulkan backend routing** (PR in review): Routes gfx1150/gfx1151 iGPUs to Vulkan llama.cpp prebuilts instead of ROCm, with measured performance gains on Strix Halo (Radeon 8060S).
  - PR [#10381](https://github.com/unslothai/unsloth/pull/10381)
- **Windows on ARM native CUDA support** (PR in review): Enables working Unsloth installs on NVIDIA Windows-on-ARM laptops (GB10 / N1X RTX Spark parts).
  - PR [#10282](https://github.com/unslothai/unsloth/pull/10282)
- **MLX stack install fix for fresh macOS** (PR in review): Fixes disabled Train/Export features on fresh Apple Silicon installs caused by skipped MLX dependency passes.
  - PR [#10403](https://github.com/unslothai/unsloth/pull/10403)

### Reported Compatibility Gaps
- **Intel Arc B580 import failure**: `torch.xpu.memory.mem_get_info()` call unsupported on this GPU.
  - Issue [#3533](https://github.com/unslothai/unsloth/issues/3533)

## 4. Performance & Optimization
- **2x faster Qwen3.8-Flash / GLM-5.3-Flash MTP training**: MTP enabled by default in v0.1.806-beta.
  - [Release page](https://github.com/unslothai/unsloth/releases/tag/v0.1.806-beta)
- **KV cache preemption for parallel chats** (PRs in review): Enables multiple chats to share a single KV cache instead of OOM-ing each other, with slot parking to host RAM for supported llama-server builds.
  - PR [#10301](https://github.com/unslothai/unsloth/pull/10301), PR [#10358](https://github.com/unslothai/unsloth/pull/10358)
- **Integrated GPU prompt cache retention** (PR in review): Keeps llama-server prompt cache enabled on shared-memory iGPUs (was previously disabled for discrete GPUs only, a pure loss on iGPUs that cost one user 44 hours of runtime).
  - PR [#10382](https://github.com/unslothai/unsloth/pull/10382)
- **DGX Spark two-node serving orchestrator** (PR in review): Async replica router for paired DGX Spark deployments, with dynamic topology selection to utilize both nodes for eligible workloads.
  - PR [#10323](https://github.com/unslothai/unsloth/pull/10323)
- **Throughput reporting fix** (PR in review): Fixes `engine_stats` reporting that showed 0 tok/s during generation and impossible peak rates on Strix Halo hardware.
  - PR [#10384](https://github.com/unslothai/unsloth/pull/10384)

## 5. Stability & Regressions
Ranked by severity/impact:
1. **Unsloth Studio server deadlock** (high severity): Server hangs after minutes of operation, all threads blocked in `sqlite3.connect()`/`close()`, stops accepting connections. No fix PR linked yet.
   - Issue [#9008](https://github.com/unslothai/unsloth/issues/9008)
2. **Qwen3-VL LoRA adapter load failure on vLLM** (medium): Fine-tuned Qwen3-VL-8B LoRAs fail to load in vLLM. Good first issue.
   - Issue [#3560](https://github.com/unslothai/unsloth/issues/3560)
3. **Studio vision model image attachment error** (medium): Vision-capable GGUF models incorrectly reject image uploads due to missing mmproj validation logic.
   - Issue [#6305](https://github.com/unslothai/unsloth/issues/6305)
4. **Studio RAG / file tool error** (medium): Models cannot list files in threads/projects/knowledge bases; missing read/edit/write file tool capabilities.
   - Issue [#8854](https://github.com/unslothai/unsloth/issues/8854)
5. **Gemma3 fine-tuning Triton error** (medium): `ConstantVariable` error during Gemma3 27B fine-tuning on 2x local GPUs.
   - Issue [#3996](https://github.com/unslothai/unsloth/issues/3996)
6. **Qwen3.5 packing gradient instability** (medium): Step 1 grad norm becomes NaN for Qwen3.5 models with packing enabled; other Qwen3 variants unaffected.
   - Issue [#4160](https://github.com/unslothai/unsloth/issues/4160)
7. **16GB iGPU model load offload warning** (low): Latest update blocks model loading on 16GB RAM integrated GPUs; workaround via `UNSLOTH_ALLOW_HOST_OFFLOAD=1`.
   - Issue [#9482](https://github.com/unslothai/unsloth/issues/9482)
8. **Windows Smart App Control model load failure** (fix PR open): Studio fails to load models due to code integrity blocks on `llama-common.dll`; PR adds Windows probe and CI bundle signature auditing.
   - Issue context in PR [#10408](https://github.com/unslothai/unsloth/pull/10408)

## 6. What This Means for Application Developers
- Teams fine-tuning Qwen3.8-Flash or GLM-5.3-Flash should upgrade to v0.1.806-beta immediately for a 2x training speedup; MTP is enabled by default so no config changes are required unless you need to disable it.
- If you run Unsloth Studio on Windows with integrated GPUs, AMD hardware, or Windows on ARM NVIDIA devices, monitor the linked PRs for upcoming releases that will resolve install failures and significantly improve iGPU performance.
- Developers building multi-user or multi-chat applications on Unsloth Studio will benefit from the upcoming KV preemption feature, which eliminates OOM crashes from parallel conversations and improves cache utilization — test the PR branches if you need this capability today.
- For agent/tool-use applications, note that Studio’s current RAG and file tooling has known gaps (file listing, read/write/edit); plan for custom tool integration or wait for upcoming fixes if you depend on project file operations.
- If you deploy on non-NVIDIA hardware (Intel Arc, AMD iGPUs), expect ongoing compatibility improvements in the next 2–4 weeks; use the documented workarounds in the linked issues in the interim.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*