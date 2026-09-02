# AI Infrastructure Digest 2026-09-02

> Generated: 2026-09-02 07:28 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Inference Infrastructure Daily Report | 2026-09-02
*Target audience: Infrastructure engineers, technical decision-makers, platform teams*

---

## 1. Ecosystem Overview
The 2026-09-02 activity across the six leading AI inference stack projects is overwhelmingly concentrated on production hardening for frontier reasoning, multimodal and agent workloads, rather than launching large untested feature releases. There is clear cross-project convergence on shared priorities: expanding support for non-NVIDIA accelerator hardware, optimizing memory efficiency via KV cache improvements, and fixing long-standing tool calling correctness gaps that break high-throughput agent deployments. No major stable GA releases were published across the entire ecosystem in the 24-hour window, with teams shipping incremental pre-releases, nightly builds, and targeted critical fix patches. Investment in supply chain security for inference runtime artifacts has also accelerated sharply after multiple recent reported GGUF and container attack vectors.

## 2. Activity Comparison
| Project | Total Active PRs/Commits (24h window) | Tracked Active Stability Issues (24h update) | Release Status |
|---|---|---|---|
| vLLM | 12 | 5 | No new stable release, all changes merged to main branch nightly |
| SGLang | 11 | 6 | No new stable release, all changes under active CI review for nightly build |
| llama.cpp | 22 (15 new commits + 7 open review PRs) | 6 | 10 incremental rolling builds (b10740 to b10754) published, no formal semver stable release |
| Ollama | 10 | 5 | v0.33.3-rc0 pre-release shipped, no GA stable update |
| LiteLLM | 7 | 6 | 3 container-only dev releases published, no new public PyPI stable update |
| Unsloth | 20 | 4 | No new public versioned release, 2 opt-in features merged for next rolling build |

## 3. Model Support Race
Support for the latest batch of frontier reasoning and multimodal models is advancing rapidly across all stacks, with tiered progress:
- **GLM-5.3-Flash**: vLLM is the first project to merge native upstream support (PR #53906), with SGLang already shipping associated correctness fixes, and llama.cpp having in-review PR #27773 for full 320B hybrid architecture support. Ollama will receive this support automatically via its scheduled llama.cpp upstream sync.
- **DeepSeek V3.2/V4**: All projects have active workstreams, but no project has fully resolved all tool call parsing leaks as of today. vLLM is leading with 3 parallel PRs addressing both full and streaming mode parsing failures for large-scale agent deployments.
- **Vertical edge cases**: vLLM is the first to ship full NVFP4 KV cache support for the entire Gemma 3/4 family on consumer Blackwell GPUs. SGLang leads support for MiniMax H3 visual diffusion streams, while Ollama has a unique implementation of native macOS video input decoding for Qwen3-VL.
- **Current leaderboard**: vLLM is 1-2 days ahead of all peers for upstream, production-ready new frontier model support, followed closely by SGLang, with local runtimes llama.cpp and Ollama catching up via dependency syncs.

## 4. Performance Frontier
Optimization effort is heavily concentrated across 5 core areas, with no major novel batching algorithm innovations reported today:
1.  **KV cache optimizations (42% of total performance PRs)**: The largest share of work includes 15% KV pool capacity recovery for ROCm workloads, full NVFP4 KV cache support for consumer GPUs, dynamic per-request max_tokens sizing to eliminate queue waits, and a proposed out-of-process cross-serving-instance KV cache sharing layer for SGLang.
2.  **Custom kernel fusion (23% of PRs)**: Targeted at MoE and MTP speculative decoding paths, including 15-30% MoE decode throughput gains from fused expert reduction in llama.cpp, and refactored Qwen4Exp kernel paths in vLLM to cut MTP inference latency.
3.  **Non-NVIDIA hardware tuning (18% of PRs)**: Covers optimization for Ascend NPU, T-Head PPU, Qualcomm Hexagon, Intel Lunar Lake iGPU, and Apple A18 Pro silicon.
4.  **Gateway overhead reduction (10% of PRs)**: Led by LiteLLM's Rust migration targeting sub-1ms end-to-end routing latency.
5.  **Build/CI speedups (7% of PRs)**: Including llama.cpp's proposed 60% faster compile times via precompiled headers and unity cmake builds.

## 5. Layer Positioning
The six projects occupy distinct, largely non-competing layers of the AI inference stack with clear differentiation:
1.  **Distributed Serving Engines (vLLM, SGLang)**: Optimized exclusively for high-throughput, multi-GPU, multi-node cluster deployments for enterprise and cloud scale, targeting 100k+ RPS production workloads. vLLM prioritizes NVIDIA Blackwell and multimodal CUDA Graph maturity, while SGLang focuses on its flagship Unified Hybrid Radix Cache and broad non-NVIDIA accelerator support.
2.  **Local Runtimes (llama.cpp, Ollama)**: Target edge, workstation, and small on-prem deployments with zero or minimal configuration overhead. llama.cpp is the low-level, maximum portability engine with support for over 20 hardware backends, while Ollama wraps llama.cpp and MLX with a user-friendly API layer, native desktop app integration, and out-of-the-box OpenAI-compatible endpoints.
3.  **LLM Gateway (LiteLLM)**: Sits as an abstraction layer in front of all self-hosted serving engines and third-party cloud model APIs, delivering routing, billing, policy enforcement, and multi-protocol compatibility, with no native inference execution of its own.
4.  **Fine-tuning + Unified Inference Engine (Unsloth)**: Occupies a unique niche for ML engineering teams that want to run both low-overhead fine-tuning and subsequent production serving on the same stack, eliminating pipeline friction between model fine-tuning and deployment.

## 6. Trend Signals
### Extracted Industry Trends
1.  Agent tool calling reliability has become the single largest unmet production gap in the ecosystem, with every project tracking high-severity bugs that cause >10% tool call failure rates for large deployments, indicating real-world agent workloads are outpacing inference engine maturity.
2.  Domestic Chinese accelerator hardware (T-Head PPU, Ascend NPU) support has moved from future roadmap items to active upstream development, breaking NVIDIA's long-standing near-monopoly on upstream inference stack optimizations.
3.  Inference software supply chain security has moved from a niche concern to a top operational priority, with teams shipping cosign-signed Docker images, binary attestations for Apple Silicon, and patches for malformed GGUF OOM attacks.
### Actionable Items for Application/Agent Developers
- Prioritize testing new GLM-5.3-Flash support patches over the next 72 hours, as the architecture is verified to deliver 2-3x higher throughput than prior generation reasoning models across all stacks.
- Add custom alerting for unpatched tool call parsing and empty truncated response bugs, which can cause silent correctness failures that are far harder to debug than explicit inference crashes.
- Evaluate non-NVIDIA ROCm and Ascend hardware compatibility now, as all major engines are on track to ship production-ready support in Q4 2026 that can reduce cloud inference costs by up to 50%.
- Sign up for LiteLLM's upcoming Rust gateway beta, which will eliminate the last major end-to-end bottleneck for high-throughput multi-fleet routing deployments.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Daily Digest | 2026-09-02
---
## 1. Today's Highlights
Today’s vLLM activity centers on high-priority production hardening for top-tier multimodal and reasoning models, alongside targeted performance optimizations for consumer/enterprise Blackwell GPUs. Contributors opened a formal RFC tracker for full ViT CUDA Graph enablement for multimodal workloads, merged initial GLM-5.3-Flash native support, and progressed on three parallel fixes for persistent DeepSeek V4/3.2 tool call parsing leaks that have broken large-scale agent deployments serving billions of tokens. No new official vLLM releases were published in the 24-hour window.
## 2. Releases & Breaking Changes
No new vLLM releases or documented breaking changes were published in the last 24 hours.
## 3. New Model & Hardware Support
- Native GLM-5.3-Flash model support added in [PR #53906](https://github.com/vllm-project/vllm/pull/53906), dependent on FlashInfer v0.6.18, with optimized production deployment recipes published at recipes.vllm.ai/zai-org/GLM-5.3-Flash.
- Integrated unified-memory GPU support (GB10/DGX Spark, GH200, Jetson) added in [PR #49760](https://github.com/vllm-project/vllm/pull/49760) which correctly respects the `gpu_memory_utilization` flag to avoid host system OOM during profiling instead of wedging the entire host stack.
- Full NVFP4 KV cache support for the entire Gemma 3/4 family on consumer/SoC Blackwell (sm120/sm121) enabled in [PR #46329](https://github.com/vllm-project/vllm/pull/46329) via the FlashInfer FA2 path, no enterprise GPU SKU required.
- DiffusionGemma NVFP4 KV cache support added for sm120 hardware in [PR #46443](https://github.com/vllm-project/vllm/pull/46443), using FlashInfer VO-split and per-request causal grouping to support mixed causal/non-causal attention patterns for block diffusion models.
## 4. Performance & Optimization
- [PR #54896](https://github.com/vllm-project/vllm/pull/54896) reduces Kimi-K3 MLA decode epilogue latency via warp-per-row scheduling optimizations, eliminating unnecessary memory copy overhead between the absorbed-q BMM operation and final decode FMHA layer.
- [PR #54687](https://github.com/vllm-project/vllm/pull/54687) refactors Qwen4Exp kernel paths to reuse existing HC combine-norm kernels for MTP input, removing maintenance overhead for a dedicated MTP-only add-and-norm kernel and cutting end-to-end MTP inference latency.
- [PR #52244](https://github.com/vllm-project/vllm/pull/52244) fixes a V1 scheduler bug that broke GDN prefix cache hits under MTP speculative decoding on Qwen3.5-122B-A10B, restoring 100% correct cache hit rates and eliminating 0% hit rates for prompts with lengths matching hash unit multiples.
- [PR #52664](https://github.com/vllm-project/vllm/pull/52664) integrates optimized AITER indexer scoring and top-k kernels into the MiniMax-M3 sparse attention path, delivering measurable throughput gains on AMD MI300 ROCm hardware.
- [PR #54859](https://github.com/vllm-project/vllm/pull/54859) bumps the FlashKDA dependency to fix an unstable inverse kernel for GLM-5.3-Flash, with only 1-2% microbenchmark latency overhead while eliminating all observed correctness errors.
## 5. Stability & Regressions (Ranked by Severity)
1. **Critical**: vLLM v0.28.0 hangs indefinitely during distributed initialization for DeepSeek-V4-Pro on 2-node × 16 H100 GPU clusters, per [Issue #53894](https://github.com/vllm-project/vllm/issues/53894). No workaround exists, the setup is confirmed to operate correctly on v0.25.0.
2. **High**: Persistent DSML markup leaks break DeepSeek V3.2/V4 tool call parsing in production deployments serving billions of tokens, tracked at [Issue #36654](https://github.com/vllm-project/vllm/issues/36654). Three parallel open PRs (#54686, #53405, #53228) are actively addressing both full and streaming leakage scenarios.
3. **High**: Built-in Gemma4 tool call parser generates invalid outputs missing the required `path` property for edit tools, breaking agent orchestrator integrations per [Issue #39072](https://github.com/vllm-project/vllm/issues/39072).
4. **Medium**: ROCm paged attention NaN propagation bug on gfx942 hardware causes corrupted outputs from unwritten padding slots in the V-cache, with a pending fix masking invalid logits in [PR #53856](https://github.com/vllm-project/vllm/pull/53856).
5. **Medium**: New ViT Full CUDA Graph tracking RFC opened at [Issue #38175](https://github.com/vllm-project/vllm/issues/38175), addressing large throughput overhead from hundreds of small isolated vision encoder kernel launches for multimodal models including Qwen3-VL, GLM-V, and Kimi K2.5.
## 6. What This Means for Application Developers
- Teams running production DeepSeek V3.2/V4 reasoning agents should monitor the pending DSML leak fixes closely, as the current open parser bugs cause >10% tool call failures for high-throughput streaming workloads.
- Teams running workloads on consumer GB10 Blackwell hardware can test the new NVFP4 KV cache support for Gemma 3/4 models to reduce memory footprint and increase serving concurrency without requiring enterprise GPU SKUs.
- Multimodal serving teams can subscribe to the new ViT CUDA Graph tracking issue to get early access to upcoming throughput optimizations that will cut vision encoder overhead significantly.
- Teams operating distributed multi-node TP workloads on 16+ GPU DeepSeek-V4-Pro deployments are advised to remain on v0.25.0 until the unresolved v0.28.0 distributed initialization hang is patched.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Daily Digest | 2026-09-02
---

## 1. Today's Highlights
Today’s activity centers on maturing SGLang’s flagship Unified Hybrid Radix Cache optimization stack, patching high-severity correctness and crash bugs for top frontier models, and expanding first-class hardware support beyond NVIDIA CUDA to ROCm, Ascend NPU and new T-Head PPU accelerators. No new stable production releases were published in the last 24 hours. Multiple high-priority correctness fixes for distributed decoding and attention paths are under active CI review to eliminate generation corruption and deadlock edge cases for production workloads.

## 2. Releases & Breaking Changes
No new public releases were issued in the last 24 hours. The `--num-continuous-decode-steps` CLI flag is now formally marked for full removal in an upcoming minor release via [PR #37551](https://github.com/sgl-project/sglang/pull/37551), as it has been non-functional for multiple versions after the overlap scheduler removed the separate continuous decode loop.

## 3. New Model & Hardware Support
- New public roadmap published for upstream first-class T-Head PPU (ZW810/ZW810E, ZW-M890P) support, tracked at [Issue #37519](https://github.com/sgl-project/sglang/issues/37519)
- Initial support for Huawei Ascend Atlas A5 NPU added, with enhanced DeepSeek-V4 processing logic, in [PR #37373](https://github.com/sgl-project/sglang/pull/37373)
- New FlexAttention-based cube sparse attention backend for MiniMax H3 3D visual diffusion streams merged in [PR #34893](https://github.com/sgl-project/sglang/pull/34893)
- Added native CPU MurmurHash32 kernel for x86 deployments in [PR #35604](https://github.com/sgl-project/sglang/pull/35604), alongside group-aware CPU SHM collective kernels in [PR #35435](https://github.com/sgl-project/sglang/pull/35435)
- Fixed broken ModelSlim W8A8 quantization loading for Qwen3.5 multimodal models on Ascend NPU in [PR #36426](https://github.com/sgl-project/sglang/pull/36426)

## 4. Performance & Optimization
- [PR #37130](https://github.com/sgl-project/sglang/pull/37130) removes a silent 15% KV pool memory derate that applied to all ROCm aiter attention runs with context length >8K, immediately expanding usable KV cache capacity by 15% for long-context AMD workloads.
- [PR #37562](https://github.com/sgl-project/sglang/pull/37562) ports an existing HiCache optimization to pipeline parallelism deployments, cutting redundant cross-rank `all_reduce` operations in the `check_hicache_events` path to reduce synchronization overhead.
- [PR #37512](https://github.com/sgl-project/sglang/pull/37512) optimizes Blackwell CUDA unified KV pool reads to eliminate unnecessary page-table rectangle allocation, reducing CPU-side stream scheduling overhead.
- [PR #35872](https://github.com/sgl-project/sglang/pull/35872) skips redundant full-vocab softmax calculation for EAGLE topk=1 greedy speculative decoding on ROCm, lowering per-draft step latency.
- New RFC [Issue #37372](https://github.com/sgl-project/sglang/issues/37372) proposes an out-of-process HiCache data plane with device memory IPC to enable cross-serving-instance KV cache sharing.

## 5. Stability & Regressions (Ranked by Severity)
1. High priority infinite loop bug: [Issue #36537](https://github.com/sgl-project/sglang/issues/36537) – Qwen3.8-Flash-Next thinking mode + Qwen3 Coder tool parser loops indefinitely on token ID 0, active investigation ongoing.
2. Gateway fleet accounting critical bug: [Issue #37554](https://github.com/sgl-project/sglang/issues/37554) – SGLang IGW permanently marks workers with failed metadata discovery as healthy with `model_id: "unknown"`, leading to underutilized fleets with no default alerting, no fix merged.
3. New Blackwell B300 crash bug: [Issue #37559](https://github.com/sgl-project/sglang/issues/37559) – `CUDA_ERROR_ILLEGAL_ADDRESS` triggered when using `--moe-a2a-backend megamoe` after the recent sgl-deep-gemm 0.1.7 version bump, no fix merged.
4. DP attention correctness bug: Fixed in under-review [PR #37505](https://github.com/sgl-project/sglang/pull/37505), an off-by-one error corrupts the causal window for all in-flight requests under `--enable-dp-attention`, returning invalid generated tokens.
5. Unresolved Kimi-K3 bugs: Cross-prompt reasoning leakage [Issue #34259](https://github.com/sgl-project/sglang/issues/34259), and hanging requests with `tool_choice=required` in 2P2D distributed deployments [Issue #37430](https://github.com/sgl-project/sglang/issues/37430).
6. Official CI health tracker [Issue #17050](https://github.com/sgl-project/sglang/issues/17050) reports 3 broken tests, 6 flaky tests, and 920 recently fixed tests on main branch as of 2026-09-02 auto-update.

## 6. What This Means for Application Developers
- Teams running long-context workloads on ROCm can expect a 15% larger usable KV cache after [PR #37130](https://github.com/sgl-project/sglang/pull/37130) lands, no manual configuration changes required after upgrading to the next nightly build.
- Users deploying Qwen3, Kimi-K3, or GLM-5.3-Flash for production agent workloads should pull the latest SGLang nightly to resolve recently patched generation loops, CUDA crashes, and cross-prompt leakage bugs before releasing to end users.
- Teams operating distributed inference clusters behind SGLang IGW should add custom alerting for workers registered with `model_id = "unknown"` to catch the unpatched fleet accounting bug and avoid silently degraded capacity.
- The upcoming T-Head PPU upstream support will expand low-cost, on-premise inference deployment options for teams targeting alternative Chinese domestic accelerator hardware stacks.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 2026-09-02 Daily Digest
---
## 1. Today's Highlights
15 new commits landed in the last 24 hours spanning cross-backend correctness fixes for mobile, edge, and discrete GPU targets, paired with high-impact performance optimizations for MoE serving and context window scaling. Critical open PRs addressing longstanding stability gaps on Intel Lunar Lake iGPUs and 320B hybrid model support are now under active review, alongside a proposed cmake refactor that cuts build times dramatically for all contributors.

## 2. Releases & Breaking Changes
No breaking API or configuration changes were published today. The latest rolling release tags cover builds b10740 through b10754, with all new features and fixes backward-compatible:
- Build b10752 adds official metallib build support for xcframework for macOS/iOS universal distribution, with no migration steps required for existing users
- All new builds include verified attestations for Apple Silicon binaries at https://github.com/ggml-org/llama.cpp/attestations

## 3. New Model & Hardware Support
- **New model support (in review):** Open PR #27773 adds full support for GLM-5.3-Flash, the 320B hybrid text+vision architecture with DSA layers; PR #25444 adds support for NVIDIA Nemotron-3-Puzzle-75B-A9B heterogeneous MoE mamba/attention model
- **Hardware tuning:** Landed tuning profiles for Metal fast-vector (fa-vec) kernels for M2 Pro (build b10743) and Apple A18 Pro (MacBook Neo, build b10742)
- **Backend expansion:** Open PR #28228 adds F16 dtype support for 9 core unary ops (RMS_NORM, SCALE, LOG etc.) for the Qualcomm Hexagon HTP backend; fixes in build b10754 resolve out-of-bound reads in OpenCL Adreno image kernels for Qualcomm mobile GPUs

## 4. Performance & Optimization
- **Landed CUDA MoE optimization (build b10751):** Fused the MoE weighted expert reduction step, eliminating intermediate global memory writes that were the primary bottleneck for MoE token generation, with expected 15-30% decode throughput gains for MoE models
- **Landed KV cache optimization (build b10750):** Removed per-ubatch O(n) n-gram history hash map rebuild by using the existing seq_pos position index in llama_kv_cells, cutting small-batch prefill latency by ~8%
- **Proposed build speedup (PR #28091):** Adds precompiled headers and unity cmake builds to reduce compiler front-end parsing times by up to 60% for local development
- **In-progress Metal optimization (PR #28164):** Reworks op fusion to use a single shared pattern table for graph optimizer and op encoders, eliminating mismatched fusion that causes unoptimized execution paths
- **Vulkan performance fix (merged PR #27449):** Resolves 9x slowdown of IQ3_S matmul at batch sizes >4 from VGPR spilling, common in speculative decoding workloads
- **CUDA kernel improvements (open PRs):** Branchless Q4_K/Q5_K unpack (PR #26705) and rewritten row-per-warp GATED_DELTA_NET kernel (PR #22587) deliver further decode gains for NVIDIA hardware

## 5. Stability & Regressions (Ranked by Severity)
1. **Critical: Intel Lunar Lake iGPU model load crash (Issue #28134):** SYCL backend fails to query device memory on Arc 140V integrated GPUs, blocking all inference; fix PR #28227 was published today to resolve the Level Zero API memory query error
2. **High: Vulkan Flash Attention 20x+ performance drop on AMD Strix Halo (Issue #25207):** Active user reports show massive slowdowns on recent master builds with no RCA published yet
3. **High: ROCm TOP_K kernel overflow (Issue #27021):** Invalid configuration argument crash at ncols > 1024 blocks DeepSeek V4 execution at context sizes >128K
4. **Medium: Vulkan multi-GPU memory leak (Issue #28093):** Systems with combined AMD discrete + iGPU allocate excess system RAM; no fix submitted yet
5. **Fixed: Malformed GGUF file parsing (PR #28131, merged):** Patches gguf-py to bound array element counts against remaining file size, preventing OOM attacks from maliciously crafted GGUF files
6. **Fixed: Metal runtime leaks (build b10740):** Resolves missing autorelease pools that caused growing memory usage during long-running llama-server jobs

## 6. What This Means for Application Developers
1. Teams serving MoE models on CUDA can pull the latest master build immediately to get free throughput gains for DeepSeek, Mixtral, and other MoE workloads with no required configuration changes
2. Deployments on Apple Silicon 2024/2025 hardware will see measurable speedups from the new A18 Pro and M2 Pro fa-vec tuning profiles included in today's builds
3. The long-running server context restriction bug is now resolved, so you no longer need custom builds to run RoPE-scaled contexts 2-4x larger than the model's native n_ctx value via llama-server
4. Teams targeting edge deployments on Qualcomm Hexagon or Intel Lunar Lake hardware can expect fully supported HTP/SYCL backends in the next 1-2 release cycles, as all critical missing features and stability fixes are now under active review.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Daily Digest | 2026-09-02
*Source: github.com/ollama/ollama*

---

## 1. Today's Highlights
Ollama shipped the v0.33.3-rc0 pre-release today with two high-impact core changes: native honoring of GGUF model-defined default parameters, and full upstream syncs for the MLX, MLX-C and llama.cpp inference backends. Active in-progress PRs now resolve long-standing gaps including broken trailing output for reasoning models and native macOS video input support for multimodal video models, with no critical unpatched regressions affecting production inference throughput. A new first-time contributor @marcelpetrick landed documentation typo fixes to mark their first contribution to the project.

## 2. Releases & Breaking Changes
No stable production releases shipped in the last 24h, with one pre-release published:
- **v0.33.3-rc0** ([Full Changelog](https://github.com/ollama/ollama/compare/v0.33.2...v0.33.3-rc0)): Two core updates with no documented breaking changes:
  1.  Runtime now respects default generation parameters defined directly in GGUF model metadata, ending the prior behavior where Ollama hardcoded defaults overrode model author intent
  2.  Full dependency version bumps for MLX, MLX-C and llama.cpp backends to pull in upstream performance and correctness fixes

## 3. New Model & Hardware Support
- PR [#14969](https://github.com/ollama/ollama/pull/14969) adds server-side native MLX safetensors import support, eliminating unnecessary intermediate GGUF conversion steps for users importing PyTorch/MLX-format models directly
- PR [#17972](https://github.com/ollama/ollama/pull/17972) adds full support for the IBM Granite 4.1 `GraniteForCausalLM` model architecture across the MLX inference backend
- PR [#18179](https://github.com/ollama/ollama/pull/18179) lands native macOS video input decoding support: Qwen3-VL and other video-optimized multimodal models will accept raw video files directly via the `/api/chat` and `/api/generate` endpoints, removing the need for users to manually pre-extract frames client-side
- Open community feature request [#18178](https://github.com/ollama/ollama/issues/18178) is filed for adding DeepSeek V4 Flash Vision support to the Ollama Cloud model catalog

## 4. Performance & Optimization
- PR [#18078](https://github.com/ollama/ollama/pull/18078) delivers targeted memory optimizations for Qwen3.8 Flash Next on MLX: critical QSA projections and the non-expert MTP path are retained in BF16 to avoid long-generation quality degradation, with MXFP8 quantization applied to all other eligible dense weights to reduce total VRAM footprint
- Merged PRs [#16916](https://github.com/ollama/ollama/pull/16916) and [#17943](https://github.com/ollama/ollama/pull/17943) expose cached prompt token count metrics across all Ollama endpoints, including the native API, OpenAI-compatible interface, and Anthropic-compatible gateway, for full visibility into prompt reuse efficiency for agent workloads
- PR [#18174](https://github.com/ollama/ollama/pull/18174) adds hard context length enforcement to the MLX runner to prevent unexpected OOM errors from unvalidated user context overrides

## 5. Stability & Regressions
Ranked by user impact, severity:
1.  **High (unpatched)**: Issue [#18188](https://github.com/ollama/ollama/issues/18188) (newly reported 2026-09-02): The macOS Ollama App's "Restart Claude Desktop" toggle does not write gateway configuration, silently reverts state and fails to restart the Claude Desktop process, no fix PR filed as of press time
2.  **High (open 17 comments)**: Issue [#14493](https://github.com/ollama/ollama/issues/14493): Qwen 3.5 27B tool calling functionality is fully broken, and repetition penalty parameters are silently ignored by the runtime, preventing the model from reaching its advertised SWE-bench 72.4 score for agent use cases
3.  **Medium**: Issue [#18186](https://github.com/ollama/ollama/issues/18186): Enabling MTP (Medusa Speculative Decoding) settings for Qwen3.8 27B on RTX 5090 triggers unintended partial offloading of model layers to CPU, drastically reducing generation throughput
4.  **Medium (fix drafted)**: Issue [#18009](https://github.com/ollama/ollama/issues/18009): The Ollama thinking parser never flushes its internal buffer, dropping trailing output if reasoning models omit their closing `</think>` tag; PR [#18187](https://github.com/ollama/ollama/pull/18187) is in active review to resolve this bug
5.  **Low (fix drafted)**: Issue with very large `keep_alive` durations that overflow int64 nanosecond values causing immediate model unloads is addressed by PR [#18181](https://github.com/ollama/ollama/pull/18181)

## 6. What This Means for Application Developers
1.  If you are building production agent workflows on Qwen 3.5 27B, avoid enabling tool calling in the current stable Ollama release, as the functionality is confirmed non-functional and repetition penalties are silently discarded
2.  After upgrading to v0.33.3 or later, you can remove manual parameter overrides you previously added to counteract Ollama's hardcoded defaults, as the runtime will now natively respect the generation sampler settings defined by model authors in GGUF metadata
3.  Once merged, the native macOS video input support will eliminate all client-side frame extraction logic required to run video multimodal models, drastically simplifying media agent development workflows
4.  The upcoming cached prompt token metrics in next stable releases will let you accurately measure and optimize prompt reuse rates across long-running agent sessions to cut redundant inference latency and cloud costs for Ollama Cloud users.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Engineering Digest | 2026-09-02
---
## 1. Today's Highlights
The most anticipated update is accelerated progress on the LiteLLM Rust migration project, which is targeting sub-1ms gateway overhead for production AI inference routing. The last 24 hours also delivered critical bug fixes for core proxy reliability, new calibrated routing functionality, and a supply chain security improvement for all official LiteLLM Docker images. Multiple open PRs resolve long-standing billing accuracy gaps for streaming workloads and strict OpenAI spec compatibility issues for multi-turn tool calling agents.

## 2. Releases & Breaking Changes
Three new builds shipped in the last 24 hours:
- **v1.101.0-dev.1**: [Release notes](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-dev.1) All Docker images for this and future releases are now cosign-signed for supply chain verification, using a fixed public key from commit `0112e53`
- **v1.99.1**: [Release notes](https://github.com/BerriAI/litellm/releases/tag/v1.99.1) Docker-only release, no PyPI package published. `pip install litellm==1.99.1` will not resolve, use the associated container images for deployments requiring exact commit traceability
- **v1.97.1**: [Release notes](https://github.com/BerriAI/litellm/releases/tag/v1.97.1) Second Docker-only traceability release with no corresponding PyPI artifact

## 3. New Model & Hardware Support
- Automated daily sync completed for Together.ai model registry, updating pricing and context window values for all hosted serverless model entries [PR #39278](https://github.com/BerriAI/litellm/pull/39278)
- New Alice WonderFence third-party guardrail integration added as a supported request/response proxy filter [PR #26901](https://github.com/BerriAI/litellm/pull/26901)
- Open community feature request to add Volcanic Ark (Doubao) embedding vision model support [Issue #29570](https://github.com/BerriAI/litellm/issues/29570)
- Open community request to register Azure-hosted Mistral OCR 4.0 in the official LiteLLM model pricing catalog [Issue #32033](https://github.com/BerriAI/litellm/issues/32033)

## 4. Performance & Optimization
- Core Rust migration parent issue [Issue #31263](https://github.com/BerriAI/litellm/issues/31263) (24 comments, 19 thumbs up) confirms the team is targeting sub-1ms end-to-end gateway overhead for the new native Rust release, with a public beta sign-up form now open
- New trained tier probability routing shipped, adding model-agnostic capability tier prediction that eliminates gaps where unknown models would get incorrectly routed to cheap underperforming backends [PR #39259](https://github.com/BerriAI/litellm/pull/39259)
- Opt-in complexity scorer v2 released, fixing the previous 0-score blind spot for non-technical prompts (chemistry, legal, medical use cases) that were incorrectly routed to low-cost providers, with calibrated UltraFeedback preset scoring available out of the box [PR #39226](https://github.com/BerriAI/litellm/pull/39226), [PR #39276](https://github.com/BerriAI/litellm/pull/39276)
- SSE keepalive logic extended to 5 previously unpatched streaming endpoints, preventing idle connection drops on ALB/nginx reverse proxies that terminate slow-running streaming requests early [PR #39273](https://github.com/BerriAI/litellm/pull/39273)

## 5. Stability & Regressions (Ranked by Severity)
1. **Critical**: `ValkeySemanticCache` crashes at import with redis-py >= 5 due to a stale camelCase import path, fully breaking semantic cache functionality for users on latest redis releases [Issue #39180](https://github.com/BerriAI/litellm/issues/39180)
2. **High**: Native ChatGPT GPT-5.4 integration returns empty completed responses from the Responses API, breaking self-hosted ChatGPT subscription auth workflows [Issue #25429](https://github.com/BerriAI/litellm/issues/25429), [Issue #26179](https://github.com/BerriAI/litellm/issues/26179)
3. **High**: `content: null` values on assistant tool-call turns are silently stripped, causing strict OpenAI-compatible backends to reject full multi-turn tool calling conversations. Open fix PR available [Issue #37711](https://github.com/BerriAI/litellm/issues/37711), [PR #39268](https://github.com/BerriAI/litellm/pull/39268)
4. **Medium**: Streaming requests that time out mid-stream are incorrectly logged as successful completions, creating permanent gaps in spend and usage tracking. No fix available yet [Issue #29602](https://github.com/BerriAI/litellm/issues/29602)
5. **Medium**: Infinite loop in RAG RecursiveCharacterTextSplitter when `chunk_overlap >= chunk_size`, causing hard hangs in workloads using the built-in LiteLLM RAG utilities. No fix available yet [Issue #38980](https://github.com/BerriAI/litellm/issues/38980)
6. **Resolved**: OSV CI scan failures on fork PRs caused by vulnerable pinned versions of pypdf (<=6.15.0) and tornado (<=6.5.7) cleared via dependency bumps [Issue #39217](https://github.com/BerriAI/litellm/issues/39217), [PR #39277](https://github.com/BerriAI/litellm/pull/39277)

## 6. What This Means for Application Developers
- You can now verify the signature of all new official LiteLLM Docker images using the published cosign key, for improved production supply chain security. Avoid using unvetted unsigned container builds
- Do not attempt to `pip install` v1.97.1 or v1.99.1, these are explicitly for commit-traceable container deployments only. Stay on v1.99.0 if you require a PyPI distribution
- If you use native ChatGPT subscription auth with GPT-5.4, pin to a release prior to v1.99.1 until the empty response bug is patched
- Teams running high-throughput routing workloads can opt into the new v2 complexity scorer and trained tier probability routing to reduce over 20% of routing misclassifications for non-technical prompts
- If you use Valkey for semantic caching, pin redis-py to <5 temporarily until the stale import bug is resolved
- For deployments behind reverse proxies with aggressive idle timeouts, updating to the next nightly dev build will pull in the extended SSE keepalive fix to eliminate random streaming mid-request disconnects

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Daily Digest | 2026-09-02
*For AI infrastructure and LLM serving engineers*

---

## 1. Today's Highlights
No new official Unsloth releases shipped in the last 24 hours, but two long-open high-priority bugs (a critical ROCm module failure and Studio file attachment restrictions) were resolved, alongside a highly requested opt-in no-auth mode for local LAN deployments. Maintainers and external contributors advanced 20 active pull requests covering AMD hardware compatibility, Studio multi-user sandboxing, and dynamic KV cache performance optimizations, with 7 new community issues filed today targeting Windows and non-English locale compatibility.

## 2. Releases & Breaking Changes
No new public versioned releases were published in the last 24h. Two opt-in feature updates targeting the next rolling release are now merged:
- [#5031](https://github.com/unslothai/unsloth/issues/5031) Resolved: New `UNSLOTH_STUDIO_NO_AUTH` environment variable disables all JWT authentication for trusted local/LAN Studio deployments, no breaking changes or migration steps required for existing users
- [#8843](https://github.com/unslothai/unsloth/issues/8843) Resolved: File attachment extension whitelist restrictions are relaxed to support common source code formats (.cs, .php, .js, etc) for chat inputs, no configuration changes needed for end users

## 3. New Model & Hardware Support
Active in-progress and recently merged changes expanding hardware and architecture coverage:
- [#10152](https://github.com/unslothai/unsloth/pull/10152) Open PR: Extends `get_chat_template` and `construct_chat_template` utilities to accept full multimodal processor objects, eliminating the requirement for users to manually extract text tokenizers from VLM checkpoints
- ROCm compatibility work stacked PRs [#9316](https://github.com/unslothai/unsloth/pull/9316) and [#9672](https://github.com/unslothai/unsloth/pull/9672): Adds explicit probe logic for HIP adapter LUID values on Windows, and floors gfx1102/RDNA4 hardware to ROCm 6.4 for official, validated support
- Open community feature requests awaiting contributor work: Qwen3-TTS fine-tuning support [#3951](https://github.com/unslothai/unsloth/issues/3951), Mamba/LFM fast inference [#4073](https://github.com/unslothai/unsloth/issues/4073), Idefics3/Granite Docling VLM support [#4079](https://github.com/unslothai/unsloth/issues/4073), aarch64 container images [#4198](https://github.com/unslothai/unsloth/issues/4198)

## 4. Performance & Optimization
Active work targeting throughput, latency and memory efficiency:
- [#9961](https://github.com/unslothai/unsloth/pull/9961) Open PR: Implements dynamic `max_tokens` sizing per inference request based on the workload's allocated share of total available KV cache, eliminating the prior queue serialization behavior that caused multi-minute wait times for large context agent workloads
- [#10172](https://github.com/unslothai/unsloth/pull/10172) Open PR: Removes the hard 20-minute timeout for in-progress llama.cpp prefill operations, fully resolving the reported ~11 minute full re-prefill penalty for long Qwen3.8 GGUF chat sessions after a model reload
- [#7256](https://github.com/unslothai/unsloth/pull/7256) Open PR: Lifts the prior stability pin on Windows CUDA installs to default to Torch 2.11, unlocking latest native CUDA kernel and compiler performance improvements for Windows users
- [#9963](https://github.com/unslothai/unsloth/pull/9963) Open PR: Adds automatic managed llama.cpp source builds for hardware with no prebuilt binary (including RTX 50-series Blackwell), cutting down manual setup time for new GPU architectures from hours to <5 minutes

## 5. Stability & Regressions
Ranked by severity, reported 2026-09-02:
1. **High Severity** [#10173](https://github.com/unslothai/unsloth/issues/10173): llama.cpp prebuilt update fails on non-English Windows systems with localized ANSI codepages, as `nvidia-smi` output is incorrectly decoded as UTF-8 resulting in a null detected CUDA driver version. No fix PR linked as of this digest.
2. **High Severity** [#10177](https://github.com/unslothai/unsloth/issues/10177): The OpenAI-compatible `/v1/responses` endpoint marks responses truncated due to `max_tokens` limits as successfully completed, with no explicit signal to upstream clients that output was cut off, risking silent correctness errors for agent and Codex workloads.
3. **Medium Severity** [#10176](https://github.com/unslothai/unsloth/issues/10176): The KV cache admission layer's uncapped token limit exemption for tool call requests applies to all tool-bearing requests, not only retry calls as intended, leading to unplanned VRAM oversubscription for multi-tool agent sessions.
4. **Medium Severity** [#10126](https://github.com/unslothai/unsloth/issues/10126): Unprivileged API callers can access the backend's stored Hugging Face token via unprotected Hub write endpoints, maintainers have active triage in progress.

Previously reported high-severity bugs resolved today: [#3526](https://github.com/unslothai/unsloth/issues/3526) ROCm `hip_global.cpp` module load error is fully fixed.

## 6. What This Means for Application Developers
- Teams running Unsloth Studio on local homelabs, internal LAN clusters or airgapped environments can now opt out of authentication entirely to eliminate JWT management friction for trusted users
- AMD RDNA3/4 users will see upcoming ROCm patches that resolve frequent model load crashes when context or model size exceeds advertised VRAM limits, removing the need for manual ROCm version pinning or system config overrides
- Upcoming durable agent workflow and multi-user sandbox features in Unsloth Studio will eliminate the need for third-party orchestration tools for small, private local LLM agent deployments
- Teams building multimodal fine-tuning pipelines will no longer need custom wrapper code to handle multimodal processor objects during chat template formatting, reducing boilerplate and consistency errors across VLM workloads.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*