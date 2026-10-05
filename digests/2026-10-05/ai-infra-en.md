# AI Infrastructure Weekly Digest 2026-10-05

> Generated: 2026-10-05 01:47 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Weekly Comparison Report | 2026-10-05
## 1. Ecosystem Overview
This week’s AI infrastructure landscape shows concentrated momentum across the full inference stack, with mature serving engines prioritizing hardware enablement and production stability, while end-user runtimes expand into specialized workloads like decision models and multimodal generation. vLLM and SGLang continue to compete head-to-head on large-scale cloud serving, with both investing heavily in Blackwell GPU support, Flash-series model optimization, and disaggregated KV serving reliability. Local/edge runtimes (llama.cpp, Ollama) are iterating rapidly on mixed modality support and hardware breadth, with 10 and 2 releases respectively shipped in 7 days. Gateway and fine-tuning layers are focused on security hardening and vertical workload optimization: LiteLLM rolled out standardized supply-chain signing, while Unsloth advanced diffusion and TTS fine-tuning capabilities for consumer and workstation hardware.

## 2. Activity Comparison
| Project | Release Status (Last 7 Days) | Key Issue Activity | Key PR Activity |
|---------|-------------------------------|--------------------|-----------------|
| vLLM | No new releases; high dev velocity | 10+ tracked issues, top severity: MTP speculative decoding crash (45 comments, 9 👍) | 12+ merged/open PRs across stability, hardware, and optimization |
| SGLang | v0.5.21 (major release, 779 PRs, 227 contributors) | 10 tracked issues, top severity: CUDA illegal memory access in QSA extend forward | 8+ merged PRs for performance and model support |
| llama.cpp | 10 releases (b11390–b11401), all backward-compatible | 8 tracked issues, top severity: SYCL backend widespread breakage | 10+ merged/open PRs across backends and features |
| Ollama | 2 releases (v0.35.0, v0.35.1) introducing `/v1/systemone` endpoint | 7 tracked issues, top severity: Ollama Cloud Pro 95% failure rate (54 comments, 22 👍) | 8+ open PRs for fixes and optimizations |
| LiteLLM | 10 releases (v1.101.4 through v1.105.0-rc.1), all signed with Cosign | 12 tracked issues, top severity: budget enforcement bypass | 8+ merged PRs for security, observability, and compatibility |
| Unsloth | 1 beta release (v0.1.902-beta) | 6 tracked issues, top severity: multi-GPU tensor split decode 2.9x regression | 7+ merged/open PRs across models and optimizations |

## 3. Model Support Race
### Shipped Support This Week
| Project | New Model/Architecture Support |
|---------|--------------------------------|
| SGLang | DeepSeek-V4.1 Flash (LLM/VLM, production-ready with TRT-LLM sparse MLA backend + MXFP4 KV cache on Hopper), GigaChat 3.5 (LLM/VLM) |
| Ollama | Cloudflare Clef (27B) and Clef Flash (9B) multimodal decision models via `/v1/systemone` endpoint |
| Unsloth | 4-bit end-to-end LoRA training for NVFP4/INT4/MXFP4 checkpoints; 4x faster Laya decision model inference |
| vLLM | Qwen4Exp PLE embedding quantization (INC W4A16 checkpoint fixes, BF16 PLE support), GLM5Next indexer key norm refactor |
| llama.cpp | Mixed embedding + raw token batch support (unblocks non-causal multimodal workflows like Paligemma) |
| LiteLLM | Azure GPT-5 `reasoning_effort='none'` compatibility, OpenAI `input_audio` token counting, OpenRouter DeepSeek V4 Flash cost map sync |

### Competitive Position
SGLang holds the lead in production-grade large model support for high-performance serving, with end-to-end optimized DeepSeek-V4.1 Flash stacks that outpace vLLM’s still-stabilizing Flash-series support. Ollama is first to market with a standardized decision model endpoint for end users, aligning with emerging Jev API specifications. llama.cpp maintains its breadth lead for local/edge multimodal and quantization formats, with the new PTQ1_0 1.75-bit ternary format in active review.

## 4. Performance Frontier
Optimization effort is concentrated across five high-impact areas:
1. **KV Cache Innovation**: SGLang shipped MXFP4 KV cache for DeepSeek V4 on Hopper, delivering 37% higher KV capacity vs FP8; vLLM advanced FP8 QSA KV cache support for older compute capabilities; llama.org developed hybrid cache reuse for recurrent/attention hybrid models.
2. **Quantization Efficiency**: vLLM stabilized W4A16 and BF16 PLE embedding quantization; Unsloth delivered 4-bit end-to-end LoRA training for NVFP4/INT4/MXFP4; llama.cpp advanced PTQ1_0 1.75-bit ternary quantization across backends.
3. **Distributed & Disaggregated Serving**: vLLM fixed KV connector sleep mode correctness for RDMA-based disaggregated deployments; SGLang neared completion of prefill context parallelism and advanced decode-side Helix parallelism; Unsloth addressed multi-GPU tensor split decode regressions.
4. **Kernel & Batching Optimizations**: SGLang delivered specialized MiMo local audio attention kernels (44x speedup on H200) and Kimi-K3 MLA decode load balancing; llama.cpp vectorized x86 tinyBLAS K-tail operations; vLLM added opt-in FlashInfer MoE search strategy for shorter kernel search paths.
5. **Cold Start & Resource Efficiency**: SGLang’s Weight Cache Daemon reduced Qwen3-235B FP8 weight load time from 5+ minutes to <1s; Ollama optimized embedding endpoint latency by removing JSON round-trips; Unsloth reduced VRAM footprint for diffusion models via CUDA graph offloading.

## 5. Layer Positioning
| Layer | Projects | Core Value Proposition | Primary Use Case |
|-------|----------|------------------------|------------------|
| **High-Performance Serving Engine** | vLLM, SGLang | Maximum throughput and latency for large-scale cloud LLM/VLM deployments, with advanced scheduling, disaggregated serving, and hardware-specific kernel optimization | Cloud-native inference endpoints, high-traffic agent serving, large model production deployments |
| **Local/Edge Runtime** | llama.cpp, Ollama | Broad hardware compatibility, lightweight deployment, and ease of use for on-device or small-scale self-hosted inference | Desktop AI apps, edge deployments, consumer/ workstation local model serving |
| **LLM Gateway** | LiteLLM | Unified API abstraction across 100+ providers, with built-in access control, budget enforcement, observability, and supply-chain security | Multi-provider LLM orchestration, cost governance, centralized observability for agent stacks |
| **Fine-Tuning & Inference Optimization Framework** | Unsloth | Memory-efficient fast fine-tuning and inference for LLMs, diffusion, and audio models, with consumer hardware focus | Custom model adaptation, low-VRAM fine-tuning, desktop AI development workflows |

## 6. Trend Signals
### Industry Trends Derived from This Week’s Activity
1. **Decision models are emerging as a discrete workload category**: Ollama’s new `/v1/systemone` endpoint, Unsloth’s 4x Laya decision model speedup, and Cloudflare’s Clef model ecosystem indicate a shift away from repurposing general LLMs for classification/routing tasks, with purpose-built APIs and models gaining traction.
2. **Blackwell GPU enablement is the top hardware priority for serving engines**: Both vLLM and SGLang are actively fixing compatibility, throughput, and quantization issues on SM100/SM120/SM121 hardware, signaling that enterprise Blackwell deployments are ramping but still maturing.
3. **Disaggregated KV serving is moving from experimental to production-ready**: vLLM’s RDMA KV connector sleep mode fixes and SGLang’s DSA-compatible decode-side radix cache show that prefill/decode disaggregation is becoming a standard reliability feature for high-scale serving.
4. **Supply-chain security is table stakes for gateway layers**: LiteLLM’s standardized Cosign image signing across all releases, following earlier PyPI compromise incidents, reflects growing enterprise demand for attestable AI infrastructure software.
5. **Multimodal batch convergence is accelerating**: llama.cpp’s mixed embedding + token batch support and vLLM’s ASR model requests indicate that serving stacks are evolving to natively handle heterogeneous modality inputs in unified batches, rather than siloed vision/audio/text pipelines.

### Action Items for Application/Agent Developers
- For production large-model serving on NVIDIA hardware, prioritize SGLang for DeepSeek-V4.1 Flash workloads to access optimized MXFP4 KV cache and TRT-LLM sparse attention; monitor vLLM’s Blackwell and Flash-series stability fixes before migrating to SM120 hardware.
- For agent workflows relying on decision models, evaluate Ollama’s `/v1/systemone` endpoint with Clef 27B (avoid Clef Flash on v0.35.1 due to stability issues) to reduce unstructured output parsing overhead.
- For multi-provider deployments, verify LiteLLM Docker image signatures with Cosign and validate virtual key budget enforcement with external alerting, as critical budget bypass fixes are still in progress.
- For local/desktop fine-tuning of diffusion and audio models, track Unsloth’s Qwen3-TTS fine-tuning PR and low-VRAM diffusion optimizations to enable custom voice and image workflows on consumer hardware.
- Hold off on upgrading Intel SYCL deployments to the latest llama.cpp builds, and avoid Ollama Cloud Pro for mission-critical workloads, due to widespread active regressions with no confirmed fix timelines.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Weekly Digest | 2026-10-05
---
## 1. Last 7 Days' Highlights
No new vLLM releases shipped this week, but development activity remains high across core stability, hardware enablement, and disaggregated serving features. Key focus areas include fixes for Blackwell GPU compatibility, correctness improvements for Qwen/GLM/DeepSeek Flash-series models, and KV connector sleep mode fixes for RDMA-based disaggregated deployments.

---
## 2. Releases & Breaking Changes
No new releases in the last 7 days. No breaking API/config changes reported.

---
## 3. New Model & Hardware Support
### Model Support Updates
- **Parakeet TDT 0.6B v3 ASR model** (feature request, high community demand: 46 👍): Community request for NVIDIA's faster, more accurate ASR model, which outperforms Whisper Large v3 Distill on the Open ASR leaderboard. No implementation PR linked yet.
  [Issue #23943](https://github.com/vllm-project/vllm/issues/23943)
- **ZAYA1-8B** (new model request): Upstream support request for Zyphra's ZAYA1-8B, with a working third-party fork already available.
  [Issue #42286](https://github.com/vllm-project/vllm/issues/42286)
- **Qwen4Exp PLE embedding quantization support**:
  - Fixed support for INC (AutoRound) W4A16 checkpoints. [PR #59990](https://github.com/vllm-project/vllm/pull/59990)
  - Added BF16 INC PLE embedding support. [PR #58977](https://github.com/vllm-project/vllm/pull/58977)
  - Added FP8 QSA KV cache support for compute capability < 8.9 (closed PR). [PR #59943](https://github.com/vllm-project/vllm/pull/59943)
- **GLM indexer key norm refactor**: Replaced rank-local compiled GLM5Next indexer key normalization with the standard `LayerNorm` module for consistency.
  [PR #58979](https://github.com/vllm-project/vllm/pull/58979)

### Hardware & Backend Updates
- **Blackwell (SM100/SM120/SM121) enablement**:
  - Fixed 4 kernel test failures on GB300 (SM 10.3) — test-only change, no product code impact. [PR #59910](https://github.com/vllm-project/vllm/pull/59910)
  - Known issue: FP4 quantization not leveraged on RTX 6000 Pro (Blackwell). [Issue #23497](https://github.com/vllm-project/vllm/issues/23497)
  - DeepSeek-V4.1-Flash has extremely low decode throughput on SM120 (RTX PRO 6000 Blackwell) with `--enforce-eager`; CUDA graphs are unusable. [Issue #56892](https://github.com/vllm-project/vllm/issues/56892)
- **Cross-hardware compatibility (RFC)**: Proposal to replace hardcoded `torch.cuda` APIs with `torch.accelerator` to improve support for non-CUDA devices.
  [Issue #30679](https://github.com/vllm-project/vllm/issues/30679)
- **GB10 (DGX Spark) weight loading performance issue**: Per-tensor H2D copies from safetensors mmap views are slow on GB10, similar to previously reported ROCm/Ascend issues.
  [Issue #58726](https://github.com/vllm-project/vllm/issues/58726)

---
## 4. Performance & Optimization
### Active Optimization Tracks
- **Batch Invariant Feature (99 comments, 23 👍)**: Tracking issue for full batch invariant (deterministic inference) support and associated performance optimizations, built on the existing partial implementation.
  [Issue #27433](https://github.com/vllm-project/vllm/issues/27433)
- **Incremental MoE Expert Offloading (RFC)**: Dynamic MoE expert weight offloading with CPU pinned memory, GPU LFRU cache, and cross-layer prediction to run oversized MoE models on smaller GPUs. PR #37190 is open for the first implementation phase.
  [Issue #38256](https://github.com/vllm-project/vllm/issues/38256)
- **DRY Sampling (feature request, 22 👍)**: Request for the DRY sampler to completely eliminate repetition, especially impactful for small models in long context settings.
  [Issue #8581](https://github.com/vllm-project/vllm/issues/8581)
- **Priority scheduling preemption (feature request)**: Proposal to allow high-priority waiting requests to preempt running low-priority requests, instead of only evicting when resources are exhausted.
  [Issue #40004](https://github.com/vllm-project/vllm/issues/40004)
- **Opt-in FlashInfer MoE search strategy**: New optional shorter ordinary-MoE kernel search path (exhaustive search remains default), dependent on upstream FlashInfer PR #6032.
  [PR #59995](https://github.com/vllm-project/vllm/pull/59995)
- **torch.compile config hashing refactor**: Follow-up work to the recent opt-in → opt-out config hashing change, reducing risk of missing compilation-relevant fields in cache keys.
  [Issue #39479](https://github.com/vllm-project/vllm/issues/39479)

---
## 5. Stability & Regressions
Ranked by severity (impact + comment activity):
1. **MTP speculative decoding crash on long sequences (Qwen3.6-27B-FP8, v0.19.1)** — Illegal memory access error with `num_spec_tokens=5` on long sequences. 45 comments, 9 👍. No fix PR linked yet.
   [Issue #40756](https://github.com/vllm-project/vllm/issues/40756)
2. **Qwen3.8-Flash-Next greedy decoding non-determinism** — Non-deterministic outputs at `temperature=0` when prompt length nears `indexer_budget` (QSA sparse attention threshold) on SM121/GB10. 49 comments.
   [Issue #54521](https://github.com/vllm-project/vllm/issues/54521)
3. **Prefix caching + MTP output corruption on hybrid Mamba/GDN models (v0.28.0)** — Previously closed issue #43559 is confirmed unfixed. 23 comments.
   [Issue #53912](https://github.com/vllm-project/vllm/issues/53912)
4. **GLM-5.3-Flash long-decode degeneration** — Output quality degradation after accumulated reasoning decode on W4A16 quantized GLM-5.3-Flash with B300. 35 comments.
   [Issue #56868](https://github.com/vllm-project/vllm/issues/56868)
5. **PLE CPU offload deadlock on single GPU** — `VLLM_PLE_CPU_OFFLOAD=1` hangs permanently during kernel warmup for Qwen3.8-Flash-Next on GB10/sm_121 with TP=1. 19 comments.
   [Issue #53960](https://github.com/vllm-project/vllm/issues/53960)
6. **KV offload + HMA failure on subsequent chat requests** — 16 comments, 2 👍.
   [Issue #41515](https://github.com/vllm-project/vllm/issues/41515)
7. **Sleep/wake stability fixes (in progress)**:
   - Fixed: KV connector sleep mode correctness for Mooncake RDMA and NIXL pull connectors (stale RDMA memory registration after wake). [PR #59625](https://github.com/vllm-project/vllm/pull/59625), [PR #59635](https://github.com/vllm-project/vllm/pull/59635)
   - Fixed: Offload model runner construction buffers on sleep to avoid leftover GPU memory. [PR #59994](https://github.com/vllm-project/vllm/pull/59994)
   - Fixed: Drain async KV loads in `pause(mode="wait")`/`sleep(mode="wait")` to prevent HTTP 500 errors. [PR #59993](https://github.com/vllm-project/vllm/pull/59993)
8. **Tool parser truncation fix**: `HYV3ToolParser`/`HYV4ToolParser` now close unterminated tool-call argument JSON when generation is truncated (max_tokens/stop/preemption), avoiding invalid partial tool calls.
   [PR #59620](https://github.com/vllm-project/vllm/pull/59620)
9. **Admission control burst fix**: Preflight check for `--max-num-queued-reqs` now reserves slots at preflight, preventing burst traffic from exceeding the queue limit after render.
   [PR #58478](https://github.com/vllm-project/vllm/issues/58478)
10. **DeepSeek-V4.1 compressor ring null block fix**: Warmup/CUDA graph capture no longer writes compressor state into block 0 (the null block), preventing memory corruption.
    [PR #58560](https://github.com/vllm-project/vllm/pull/58560)

---
## 6. What This Means for Application Developers
- **Deterministic inference is progressing**: The batch invariant tracking issue (#27433) is highly active — if you rely on reproducible outputs (e.g., for testing/regulated workloads), monitor this issue for completion.
- **Blackwell GPU users expect rough edges**: FP4 quantization, CUDA graphs for Flash-series models, and some kernel paths are still being stabilized on Blackwell hardware. Stick to validated configurations for production workloads.
- **Disaggregated serving (KV connector) stability improving**: Sleep mode correctness fixes for RDMA connectors are landing, making disaggregated prefill/decode deployments more reliable for production.
- **Tool calling reliability improved**: Truncated streaming tool calls now produce valid JSON, reducing error handling overhead for agent applications that use stream + tool use.
- **Admission control more robust**: Burst traffic will no longer bypass queue limits, making capacity planning more predictable for high-traffic serving endpoints.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Weekly Digest | 2026-10-05
---

## 1. Last 7 Days' Highlights
This week saw the release of SGLang v0.5.21, bringing 779 merged PRs from 227 contributors with formal support for DeepSeek-V4.1 Flash and GigaChat 3.5. The project advanced multiple high-impact roadmap items—including MXFP4 KV cache for DeepSeek V4 on Hopper and decode-side radix cache for DSA-compressed models—while closing critical bugs in speculative decoding prefix reuse and GLM streaming tool-call filtering. CI remained stable, with 1 broken test and 4 flaky tests tracked as of the latest auto-update.

---

## 2. Releases & Breaking Changes
- **v0.5.21** — major milestone release delivering 779 PRs from 227 contributors; adds new model support and incremental feature/performance gains across the serving stack. No breaking API changes are called out in release notes.
  - Release: [sgl-project/sglang v0.5.21](https://github.com/sgl-project/sglang/releases/tag/v0.5.21)

---

## 3. New Model & Hardware Support
| Category | Item | Details | Link |
|---|---|---|---|
| **New models** | DeepSeek-V4.1 Flash | LLM/VLM; cookbook available | [docs](https://docs.sglang.io/cookbook/autoregressive/DeepSeek/DeepSeek-V4_1) |
| | GigaChat 3.5 | LLM/VLM; cookbook available | [docs](https://docs.sglang.io/cookbook/au) |
| **Model backends** | TRT-LLM sparse MLA for DeepSeek-V4.1 | Opt-in (`--dsv4-attn-backend trtllm`); default backend unchanged | [PR #41603](https://github.com/sgl-project/sglang/pull/41603) |
| **Hardware enablement** | T-Head PPU (ZW810/ZW810E/ZW-M890P) | Roadmap for first-class upstream support | [Issue #37519](https://github.com/sgl-project/sglang/issues/37519) |
| **Quantization** | MXFP4 KV cache (DeepSeek V4, Hopper SM90) | ~37% higher KV capacity vs FP8 (584 → 368 B/token per K entry); end-to-end codec + kernel + serving stack | [PR #32741](https://github.com/sgl-project/sglang/pull/32741) |

---

## 4. Performance & Optimization
- **Prefill context parallelism (Q3 roadmap, 90% complete)** — remaining work: extend to flashinfer/trtllm-mha MHA/GQA backends.
  - [Issue #21788](https://github.com/sgl-project/sglang/issues/21788)
- **Decode context parallelism & Helix parallelism (Q3 roadmap)** — `fi_a2a`/`a2a` now default DCP comm backend; fused fi_a2a with LSE combine in progress.
  - [Issue #29736](https://github.com/sgl-project/sglang/issues/29736)
- **Fast engine recovery via Weight Cache Daemon** — Phase 1 landed; Qwen3-235B FP8 weight load reduced from ~306–327 s to <1 s.
  - [Issue #33522](https://github.com/sgl-project/sglang/issues/33522)
- **MiMo local audio attention kernel (Hopper)** — specialized Triton kernel drops per-layer latency from 1.915 ms (cuDNN SDPA) to 43.25 µs on H200 for 4-token, head-dim-16 layers.
  - [PR #42101](https://github.com/sgl-project/sglang/pull/42101)
- **Kimi-K3 tokenspeed_mla decode** — splits KV across more CTAs at large batch, eliminating load imbalance on the M128 path (DCP 8, 96 heads).
  - [PR #42538](https://github.com/sgl-project/sglang/pull/42538)
- **AMD gfx950 small-batch MoE optimization** — expert-count gate for small sort + FP8 block-scale small-M kernel improves low-concurrency perf on MI355X.
  - [PR #41982](https://github.com/sgl-project/sglang/pull/41982)
- **HiSparse long-context sparse serving** — roadmap active; reduces decode HBM usage by keeping only a hot KV working set on device.
  - [Issue #28874](https://github.com/sgl-project/sglang/issues/28874)
- **Unified MoE router GEMM gate layer** — refactor to centralize router precision and dispatch.
  - [Issue #38695](https://github.com/sgl-project/sglang/issues/38695)
- **Decode-side radix cache for DeepSeek-V4 (DSA compressed KV)** — removes startup rejection for DSA/SWA-compress models on CUDA; P/D disaggregation compatible.
  - [PR #35837](https://github.com/sgl-project/sglang/pull/35837)
- **SGLang renderer** — `/chat` and `/completions` endpoints landed; CI image publishing and remaining gaps tracked.
  - [Issue #40920](https://github.com/sgl-project/sglang/issues/40920)

---

## 5. Stability & Regressions
*Ranked by severity; indicates whether a fix PR exists.*

| Severity | Issue | Summary | Fix Status |
|---|---|---|---|
| **Critical** | CUDA illegal memory access in QSA extend forward (Qwen3.8-Flash-Next-FP8, H20 TP8) — triggered at 8 concurrent requests; suppressed by `CUDA_LAUNCH_BLOCKING=1` / `--disable-overlap-schedule` | Root cause unconfirmed as of 2026-09-15; prefill-score patch proposed but not verified | [Issue #37633](https://github.com/sgl-project/sglang/issues/37633) — no merged fix |
| **High** | EAGLE speculative decoding collapses radix prefix reuse for multi-turn traffic (GLM-DSA NVFP4, v0.5.16) — reuse drops from 97% → 40–53%, no crash | **Closed (inactive)** — root cause not resolved in-tree | [Issue #32459](https://github.com/sgl-project/sglang/issues/32459) — no fix |
| **High** | `--enable-eplb + --speculative-algorithm DSPARK` crashes during draft CUDA graph capture: `scatter_add_` dimension mismatch | Open; no fix PR linked | [Issue #34974](https://github.com/sgl-project/sglang/issues/34974) — open |
| **Medium** | sgl-deep-gemm 0.2.0 SM90 weight-scale transform returns non-owning alias (follow-up to #32188) | Open; affects a library API path | [Issue #39684](https://github.com/sgl-project/sglang/issues/39684) — open |
| **Medium** | Hybrid GDN radix-cache selected-logprob drift on repeated branch scoring | Open; reproduction pinned to 2026-09-25 main | [Issue #41351](https://github.com/sgl-project/sglang/issues/41351) — open |
| **Medium** | GLM streaming emits undeclared tool names when `SGLANG_FORWARD_UNKNOWN_TOOLS` is disabled | **Fixed** — centralized unknown-tool filtering across streaming/non-streaming paths | [PR #34090](https://github.com/sgl-project/sglang/pull/34090) |
| **Low** | `--enable-deterministic-inference` startup crash on L40S (Triton shared-memory OutOfResources) | **Closed (inactive)** | [Issue #29149](https://github.com/sgl-project/sglang/issues/29149) |
| **Low** | MLX overlap-chained decode skips token accounting; decode-KV pool sync writes to unallocated slots | **Closed (inactive)** | [Issue #30093](https://github.com/sgl-project/sglang/issues/30093) |
| **Low** | HiCache `_check_vocab_boundary_finish` TypeError when `new_accepted_tokens` is None | **Fixed** — explicit None guard added | [PR #23806](https://github.com/sgl-project/sglang/pull/23806) |
| **Infra** | CI flaky tests — 1 broken, 4 flaky, 1143 recently fixed (last auto-update 2026-10-05) | Tracking issue active; CI maintenance mode currently **off** | [Issue #17050](https://github.com/sgl-project/sglang/issues/17050), [Issue #21065](https://github.com/sgl-project/sglang/issues/21065) |

---

## 6. What This Means for Application Developers
- **DeepSeek-V4.1 Flash is production-ready on SGLang** — including a new TRT-LLM sparse attention opt-in path and MXFP4 KV cache on Hopper that dramatically increases per-GPU context capacity. Expect better throughput for long-context agent workloads.
- **Multi-turn agents using EAGLE speculative decoding on GLM-DSA should test prefix cache hit rate** — a reported ~50% reuse collapse (no crash, silent) was closed as inactive; validate your own traffic before relying on EAGLE for latency-sensitive agent flows.
- **GLM tool-calling users should upgrade** — the streaming unknown-tool filter bug is fixed, so `SGLANG_FORWARD_UNKNOWN_TOOLS=0` now behaves consistently between streaming and non-streaming modes.
- **Weight cache daemon cuts cold-start times for large models** — if you restart engines frequently (e.g., for multi-tenant scheduling or model rotation), this feature reduces load times for quantized large models from minutes to sub-second.
- **SGLang renderer adds OpenAI-compatible `/chat` and `/completions`** — useful if you need a drop-in OpenAI-style frontend or gRPC parity via the Rust frontend (in progress).
- **CI is healthy** — no maintenance mode active; PRs should merge with normal CI latency.

---
*Data sourced from [sgl-project/sglang](https://github.com/sgl-project/sglang) as of 2026-10-05.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Weekly Digest | 2026-10-05
Source: [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)

---

## 1. Last 7 Days' Highlights
This week delivered 10 tagged releases (b11390–b11401) focused on core backend stability, server observability, and batch processing flexibility. Key merged work includes support for mixed embedding + raw token batches (unblocking non-causal multimodal workflows), router-mode log color isolation, and CUDA MMQ crash fixes for MoE models. In-progress PRs target MoE expert GPU caching, SYCL memory correctness, and Vulkan performance regressions on Intel hardware.

---

## 2. Releases & Breaking Changes
10 releases shipped in the last 7 days (b11390 → b11401). No API-breaking changes were reported; all changes are backward-compatible fixes and feature additions:
- **b11401**: Server/router log isolation — child process logs now carry self-contained ANSI colors, eliminating cross-line color bleed on shared pipes. [#29895](https://github.com/ggml-org/llama.cpp/pull/29895)
- **b11400**: Mixed batch support — `llama_batch_ext` now accepts both embedding inputs and raw token IDs in a single inference batch. [#29622](https://github.com/ggml-org/llama.cpp/pull/29622)
- **b11399**: CUDA swizzling code refactor for maintainability. [#29612](https://github.com/ggml-org/llama.cpp/pull/29612)
- **b11398**: x86 tinyBLAS now vectorizes BF16/FP16/FP32 K-tail operations. [#29806](https://github.com/ggml-org/llama.cpp/pull/29806)
- **b11397/b11391**: CUDA code hygiene — moved `neu_padded` and `blocks_per_col` to their usage sites. [#29940](https://github.com/ggml-org/llama.cpp/pull/29940) [#29939](https://github.com/ggml-org/llama.cpp/pull/29939)
- **b11396/b11392**: CI fixes — Windows LLVM build requires ninja multi-config; default CI permissions set for security. [#29959](https://github.com/ggml-org/llama.cpp/pull/29959) [#29945](https://github.com/ggml-org/llama.cpp/pull/29945)
- **b11393**: chat-peg-parser use-after-free fix — `current_tool` is cleared when `pending_tool_call` is reset. [#29942](https://github.com/ggml-org/llama.cpp/pull/29942)
- **b11390**: CUDA MMQ memory fault fix for MoE models when `n_expert >> n_ubatch`. [#29941](https://github.com/ggml-org/llama.cpp/pull/29941)

---

## 3. New Model & Hardware Support
### In Progress (Open PRs)
- **Clef vision model server support**: Extends mixed-batch work to enable non-causal multimodal input for Clef in `llama-server`. [#29969](https://github.com/ggml-org/llama.cpp/pull/29969)
- **K2 Horizon model family request**: Feature request for 0.9B/3.7B/7B/32B/36B MoVA architecture support. [#29424](https://github.com/ggml-org/llama.cpp/issues/29424)
- **PTQ1_0 ternary quantization**: New 1.75-bit-per-weight ternary format (128-element group) under review, with backend implementations for CUDA/Metal/SYCL/Vulkan. [#29672](https://github.com/ggml-org/llama.cpp/pull/29672)
- **Hexagon SSM-conv updates**: Qualcomm HVX kernel improvements for state-space model convolutions. [#29971](https://github.com/ggml-org/llama.cpp/pull/29971)
- **Audio output in mtmd (planning)**: Design discussion for integrating audio generation/detokenization into the multimodal pipeline. [#21956](https://github.com/ggml-org/llama.cpp/issues/21956)

---

## 4. Performance & Optimization
### Landed
- **x86 tinyBLAS vectorized K-tails**: BF16/FP16/FP32 tail operations in tinyBLAS are now vectorized on x86, improving CPU inference efficiency for small batch sizes. [#29806](https://github.com/ggml-org/llama.cpp/pull/29806)

### In Progress
- **MoE expert GPU LRU cache**: Host-resident MoE experts are uploaded to GPU on demand with an LRU cache (≤32 token batches only), reducing host-GPU transfer overhead for partially offloaded MoE models. [#29887](https://github.com/ggml-org/llama.cpp/pull/29887)
- **Vulkan FWHT wider block support**: Extends Fast Walsh-Hadamard Transform kernels from 512 to 8192 block width, eliminating fallback to dense f32 matmul for large quantized blocks. [#29772](https://github.com/ggml-org/llama.cpp/pull/29772)
- **Vulkan Intel MoE prefill fix**: Bisected and fixed a regression from PR #29182 that reduced Intel Arc MoE prefill performance. [#29936](https://github.com/ggml-org/llama.cpp/pull/29936)
- **CUDA unary op arbitrary striding**: Adds support for 4D strided/non-contiguous tensors in CUDA unary ops (F16/F32/BF16), reducing copy overhead for view/broadcast tensors. [#29781](https://github.com/ggml-org/llama.cpp/pull/29781)
- **BF16/FP16→FP32 conversion chunking**: Chunks precision conversion into 512MB blocks to lower peak VRAM usage during context growth with flash attention disabled. [#29442](https://github.com/ggml-org/llama.cpp/pull/29442)
- **Hybrid cache reuse for recurrent models**: New `--cache-reuse-hybrid N` server flag reuses KV cache across mid-prompt edits for recurrent/attention hybrid models (re-shifts M-RoPE and forks recurrent state). [#29918](https://github.com/ggml-org/llama.cpp/pull/29918)

---

## 5. Stability & Regressions
Ranked by severity (highest first):
1. **[Critical] SYCL backend widespread breakage**: Multiple reports of crashes/garbled output on Intel hardware:
   - Empty/gibberish output + `ggml_sycl_op_mul_mat` crash on Arc Pro B60 (regression pinpointed between b9128–b9159). [#24168](https://github.com/ggml-org/llama.cpp/issues/24168)
   - Complete failure on Arc A770. [#27063](https://github.com/ggml-org/llama.cpp/issues/27063)
   - Device memory query failure on Lunar Lake iGPU (Arc 140V). [#28134](https://github.com/ggml-org/llama.cpp/issues/28134)
   - **Fix PR in progress**: SYCL mul_mat/split buffer/host pool memory error fixes. [#29889](https://github.com/ggml-org/llama.cpp/pull/29889)
2. **[High] CUDA MoE MMQ out-of-bounds crash**: First vision request dies with illegal memory access in SWIGLU_CLAMP on multi-GPU MoE setups. [#28383](https://github.com/ggml-org/llama.cpp/pull/28383) (fix PR open; partial fix landed in b11390 for `n_expert >> n_ubatch` case [#29941](https://github.com/ggml-org/llama.cpp/pull/29941))
3. **[High] draft-mtp multi-GPU prompt processing regression**: Draft-MTP roughly halves prompt throughput on multi-GPU layer split configurations (single GPU works fine). [#27428](https://github.com/ggml-org/llama.cpp/issues/27428)
4. **[High] draft-mtp parallel slot race condition**: Acceptance rate collapses to 0.0 under `-np N` with multi-ubatch batches due to async `t_h_nextn` device→host copy race. [#27572](https://github.com/ggml-org/llama.cpp/issues/27572)
5. **[Medium] Qwen3.6 27B MTP repeated output bug**: Long sessions produce repeated `////` tokens under MTP speculative decoding. [#23577](https://github.com/ggml-org/llama.cpp/issues/23577)
6. **[Medium] Quantized target speculative decoding divergence**: Greedy draft-model speculative output differs from vanilla inference on quantized targets (matches on BF16). [#25618](https://github.com/ggml-org/llama.cpp/issues/25618)
7. **[Medium] ROCm gfx1151 (Strix Halo) corrupted output**: HIP backend produces garbled text while Vulkan is byte-correct on the same hardware/weights. [#27579](https://github.com/ggml-org/llama.cpp/issues/27579)
8. **[Low] Server stops processing during /metrics scraping**: VictoriaMetrics scraping of the metrics endpoint causes silent inference halt on Windows CUDA setups. [#29104](https://github.com/ggml-org/llama.cpp/issues/29104)

---

## 6. What This Means for Application Developers
- **Multimodal batch workflows unblocked**: The mixed embedding + raw token batch support (b11400) simplifies deployment of non-causal vision models like Paligemma — you no longer need to split vision and text inputs into separate batches, reducing latency for vision+text prompts.
- **Router mode observability improved**: If you run `llama-server` in router mode, child process logs now have consistent, self-contained colors, making debugging of multi-instance deployments much easier.
- **MoE deployments: upgrade to b11390+ immediately**: The MMQ memory fault fix resolves crashes for large MoE models with high expert counts relative to micro-batch size.
- **SYCL/Intel deployments: hold off on latest builds**: Multiple active regressions affect Arc and Lunar Lake hardware; stick to builds before b9128 if you rely on SYCL backend stability, and track PR #29889 for fixes.
- **Recurrent model serving efficiency boost incoming**: The upcoming `--cache-reuse-hybrid` flag will drastically reduce re-processing cost for mid-prompt edits on hybrid recurrent/attention models (e.g., DeepSeek V4 Flash-style architectures) when deployed behind chat/agent workloads.
- **Security: fuzzing coverage added**: The new GGUF parser libFuzzer target [#29972](https://github.com/ggml-org/llama.cpp/pull/29972) will reduce risk of parsing vulnerabilities in untrusted GGUF files — relevant if you accept user-uploaded models.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Weekly Digest | 2026-10-05
---

## 1. Last 7 Days' Highlights
Ollama launched native support for decision models via the new `/v1/systemone` endpoint across v0.35.0 and v0.35.1, adding compatibility with TypeSafe’s Jev API spec and Cloudflare’s Clef/Clef Flash multimodal decision models. Critical stability issues emerged for paid users, including a 95% failure rate on Ollama Cloud Pro and multiple regressions for Qwen3.8, AMD Vulkan, and Mac MLX runtimes, alongside active PR work to fix proxy pull failures, Qwen3.8 reasoning effort mapping, and update workflow gaps.

---

## 2. Releases & Breaking Changes
| Release | Key Changes |
|---------|-------------|
| [v0.35.1](https://github.com/ollama/ollama/releases/tag/v0.35.1) | Added support for Cloudflare’s Clef (27B) and Clef Flash (9B) multimodal decision models via `/v1/systemone`; supports image + text inputs for decision tasks. |
| [v0.35.0](https://github.com/ollama/ollama/releases/tag/v0.35.0) | Introduced the `/v1/systemone` endpoint for decision models (aligned with TypeSafe Jev API), returning choices, probabilities, and scores for use cases like ticket triage, model routing, and content classification. |

**Breaking/Behavioral Notes**:
- The `/v1/systemone` endpoint is net-new and does not break existing chat/completions APIs, but clients building decision workflows must migrate to the new endpoint schema.
- Reported regression: [Issue #18542](https://github.com/ollama/ollama/issues/18542) — `typical_p` parameter support was removed in v0.34.x, breaking clients that cannot omit the parameter. No revert PR merged as of this digest.

---

## 3. New Model & Hardware Support
### New Model Support
- **Clef / Clef Flash Decision Models**: Officially supported via `/v1/systemone` ([v0.35.1 release](https://github.com/ollama/ollama/releases/tag/v0.35.1))
- **K2 Horizon family**: Feature request open for MBZUAI IFM’s Apache 2.0 K2 Horizon models (0.9B–36B MoE) with official GGUF artifacts available ([Issue #18698](https://github.com/ollama/ollama/issues/18698))
- **Kolibri 1 (MLX)**: PR in progress to add MLX backend support for Kolibri 1 ([PR #18780](https://github.com/ollama/ollama/pull/18780))

### New Hardware/Backend Support
- **Intel SYCL (oneAPI)**: Native Intel discrete GPU (e.g., Arc B70 32GB) support for Linux merged; includes full llama.cpp backend pipeline and device discovery ([PR #18333](https://github.com/ollama/ollama/pull/18333))
- **Dual GPU (CUDA + ROCm)**: Feature request open for installers to download both runtimes for systems with mixed NVIDIA/AMD GPUs ([Issue #18545](https://github.com/ollama/ollama/issues/18545))

---

## 4. Performance & Optimization
### Reported Regressions
- **Mac M4 Max CPU usage**: ~560% CPU consumption during token generation in latest main builds, up materially from prior versions ([Issue #18038](https://github.com/ollama/ollama/issues/18038))
- **MLX GPU underutilization (M4 Pro)**: Qwen3.8 27B MXFP8 shows reduced GPU usage and slower inference on Ollama 0.40.0 vs 0.35.1-rc2 ([Issue #18754](https://github.com/ollama/ollama/issues/18754))
- **mistral-medium-3.5:128b (M4 128GB)**: ~1 token per minute generation speed with 127GB RAM / >100GB wired memory usage, despite model size of 80GB ([Issue #18770](https://github.com/ollama/ollama/issues/18770))

### In-Progress Optimizations
- **Embedding endpoint JSON round-trip removal**: Eliminates redundant serialize/deserialize for `/v1/embeddings` to reduce latency for large batches ([PR #18610](https://github.com/ollama/ollama/pull/18610))
- **Qwen35 parallel request support**: Re-enables parallel requests for qwen35/qwen35moe architectures after upstream llama.cpp crash fix ([PR #17144](https://github.com/ollama/ollama/pull/17144))
- **MLX tokenizer parity**: Fixes token-ID mismatches from pretokenizer stage drops and BPE merge bypasses for more accurate (and consistent-speed) MLX inference ([PR #18779](https://github.com/ollama/ollama/pull/18779))
- **Pull retry bounds**: Caps direct URL resolution attempts (10s per try) and authentication retries to prevent stalled pulls from exhausting retry budgets ([PR #18437](https://github.com/ollama/ollama/pull/18437), [PR #18452](https://github.com/ollama/ollama/pull/18452))

---

## 5. Stability & Regressions
Ranked by user impact (comment count + severity):
1. **[CRITICAL] Ollama Cloud Pro 95% failure rate** ([Issue #15453](https://github.com/ollama/ollama/issues/15453)): Paid $20/month Pro users report near-total unavailability across all cloud models (glm-5.1, kimi-k2.5, qwen3.5, deepseek-v3.2, etc.), with stable internet and 0% packet loss to ollama.com. 54 comments, 22 👍. No fix PR linked.
2. **[HIGH] Qwen3.8 500 error during streaming** ([Issue #17778](https://github.com/ollama/ollama/issues/17778)): `ResponseError: no user query found in messages` during tool-calling loops with 205k context. 48 comments, 27 👍. Partial fix in progress via Qwen3.8 renderer detection ([PR #18786](https://github.com/ollama/ollama/pull/18786)).
3. **[HIGH] clef-flash decision model fails on /v1/systemone** ([Issue #18769](https://github.com/ollama/ollama/issues/18769)): Clef Flash 9B Q8_0 returns "non-finite logit" (CUDA) / "cannot open model" (CPU) on the decision endpoint, but works on `/v1/chat/completions`; full 27B Clef works on the same hardware. 8 comments. No fix PR linked.
4. **[MEDIUM] AMD Radeon 780M Vulkan regression** ([Issue #17748](https://github.com/ollama/ollama/issues/17748)): Ollama ≥0.32.10 crashes with `ErrorDeviceLost` on larger models; works on ≤0.32.9. 3 comments, 3 👍. No fix PR linked.
5. **[MEDIUM] Qwen3.8 reasoning effort ignored** ([Issue #18766](https://github.com/ollama/ollama/issues/18766)): `think: low/medium/high` maps to default `xhigh` for Qwen3.8 GGUFs; only `think: false` works. Fix PR open: [PR #18786](https://github.com/ollama/ollama/pull/18786).
6. **[LOW] Mac "Restart to update" fails for non-admin users** ([Issue #11972](https://github.com/ollama/ollama/issues/11972)): Update workflow fails even after entering admin credentials. 27 comments. Related fix PR open for update CLI: [PR #18793](https://github.com/ollama/ollama/pull/18793).
7. **[LOW] Model pull fails behind firewalls / redirect blocks** ([Issue #18716](https://github.com/ollama/ollama/issues/18716)): `redirect target not allowed` error on Ubuntu pulls. Fix PRs open for environment proxy support: [PR #18730](https://github.com/ollama/ollama/pull/18730), [PR #18731](https://github.com/ollama/ollama/pull/18731), [PR #18733](https://github.com/ollama/ollama/pull/18733).

---

## 6. What This Means for Application Developers
- **Decision model workflows are now production-ready (with caveats)**: Use `/v1/systemone` for classification, routing, and triage tasks to avoid parsing unstructured text outputs. Test with Clef 27B first; Clef Flash has known stability issues on the decision endpoint as of v0.35.1.
- **Avoid upgrading to v0.34.x+ if you depend on `typical_p`**: The parameter is no longer supported, and no compatibility shim exists. Pin to v0.33.x if your client stack relies on this sampler.
- **Qwen3.8 tool-calling and reasoning effort are unreliable on v0.35.x**: If you build agents with Qwen3.8, stay on v0.34.3 or earlier, or track PR #18786 for a fix to renderer detection and reasoning effort mapping.
- **Ollama Cloud Pro is not recommended for production workloads**: With 95% reported failure rates and no official fix timeline, use self-hosted Ollama or alternative managed serving for mission-critical applications.
- **Mac MLX users should hold off on v0.40.0**: CPU and GPU utilization regressions cause severe slowdowns for large models; stick with v0.35.1-rc2 or earlier for best MLX performance.
- **Intel Arc GPU users can now run Ollama natively on Linux**: The merged SYCL backend unlocks native hardware acceleration for Intel discrete GPUs without Vulkan workarounds.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Weekly Digest | 2026-10-05

---

## 1. Last 7 Days' Highlights
This week, LiteLLM advanced supply-chain security with standardized Cosign image signing across 10 recent releases (v1.101.4 through v1.105.0-rc.1). Core proxy fixes addressed critical budget enforcement inconsistencies and auth registry hang risks, while new feature work focused on Lens tracing observability and access control hardening. The community also closed out long-standing gaps in provider compatibility, including Anthropic OIDC federation and Azure GPT-5 reasoning parameter support.

---

## 2. Releases & Breaking Changes
All releases in the past 7 days include signed Docker images via [Cosign](https://docs.sigstore.dev/cosign/overview/), using the key from commit [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0). No API-breaking changes were announced.
- v1.105.0-rc.1 (pre-release)
- v1.104.0 (stable)
- v1.103.3 / v1.103.2 / v1.103.1 (patch)
- v1.102.2 (patch)
- v1.101.4 (patch)
- v1.105.0-dev.2 / v1.105.0-dev.1 (development)
- v1.104.0-rc.2 (pre-release)

---

## 3. New Model & Hardware Support
| Update | Details | Link |
|--------|---------|------|
| Azure GPT-5 `reasoning_effort='none'` fix | Resolved capability gate that incorrectly rejected custom Azure deployment names for GPT-5 models | [#31243](https://github.com/BerriAI/litellm/issues/31243) |
| OpenAI `input_audio` token counting | Token counter now handles audio content blocks instead of raising errors | [#40188](https://github.com/BerriAI/litellm/pull/40188) |
| Cost map sync: OpenRouter DeepSeek V4 Flash | Updated pricing for `openrouter/deepseek/deepseek-v4-flash` (input 2.24e-08/token, output 1.28e-06/token) | [#44533](https://github.com/BerriAI/litellm/pull/44533) |
| Azure GPT Realtime retirement date update | Moved deprecation date to 2027-06-25 per official schedule | [#44526](https://github.com/BerriAI/litellm/pull/44526) |
| Azure cost + Clarifai model ID fixes | Corrected 1000x overstatement of Azure computer-use costs; fixed duplicate Clarifai model entries | [#25189](https://github.com/BerriAI/litellm/pull/25189) |

---

## 4. Performance & Optimization
| Area | Update | Link |
|------|--------|------|
| Auth registry latency | Added timeouts to bounded registry loads to prevent hung DB scans from stalling proxy requests | [#44530](https://github.com/BerriAI/litellm/pull/44530) |
| Spend writer reliability | Kept proxy spend writer running on no-log requests to avoid pipeline stalls | [#44514](https://github.com/BerriAI/litellm/pull/44514) |
| Lens server-side search | Moved agent run search and plotting from browser to server to eliminate client-side trace fetch limits | [#44532](https://github.com/BerriAI/litellm/pull/44532) |
| Live trace viewing | Added live investigation trace streaming for Lens, with worker status visibility | [#44472](https://github.com/BerriAI/litellm/pull/44472) |

---

## 5. Stability & Regressions
Ranked by severity:

### Critical
| Issue | Status | Fix PR |
|-------|--------|--------|
| **PyPI supply chain compromise (v1.82.7/8)** — Contained; all affected packages removed. See [security townhall](https://docs.litellm.ai/blog/security-townhall-updates) for details | Open (status update) | N/A |
| [#26672](https://github.com/BerriAI/litellm/issues/26672) Budget enforcement bypass in v1.82.3 — `max_budget` not enforced for keys/users on new deployments | Open | In progress |
| [#27735](https://github.com/BerriAI/litellm/issues/27735) Stale spend triggers false `BudgetExceededError` for virtual keys — `/key/info` shows spend below limit | Open | In progress |
| [#42172](https://github.com/BerriAI/litellm/issues/42172) Anthropic third-party `api_base` leaks client OAuth token instead of using deployment API key | Open | Not yet |

### High
| Issue | Status | Fix PR |
|-------|--------|--------|
| [#32357](https://github.com/BerriAI/litellm/issues/32357) `/v1/messages` adapter mis-encodes reasoning model streams — `thinking_delta` inside text block causes empty content in Anthropic SDK | Open | Not yet |
| [#18801](https://github.com/BerriAI/litellm/issues/18801) vLLM streaming + logprobs crashes with Pydantic v2 serialization error | Open (stale) | Not yet |
| [#43487](https://github.com/BerriAI/litellm/issues/43487) Generic streaming chunk validator accepts partial chunks, raises `KeyError` on missing `text` | Open | Not yet |
| [#34614](https://github.com/BerriAI/litellm/issues/34614) Redis cache fails in v1.93.0 with unexpected `ssl_check_hostname` argument | Open (stale) | Not yet |

### Medium
| Issue | Status | Fix PR |
|-------|--------|--------|
| [#39057](https://github.com/BerriAI/litellm/issues/39057) Cache hit token accounting semantics — spend zeroed but token columns replay original usage; report aggregation basis under discussion | Open | In design |
| [#20499](https://github.com/BerriAI/litellm/issues/20499) No invite emails sent on user creation | Closed | N/A |
| [#13048](https://github.com/BerriAI/litellm/issues/13048) `provider_specific_fields` (e.g. Anthropic citations) not stored in cache | Closed | N/A |
| [#15560](https://github.com/BerriAI/litellm/issues/15560) Stdio MCP services not showing available tools (SSE/HTTP work fine) | Closed | N/A |

---

## 6. What This Means for Application Developers
1. **Security hardening**: Verify Docker image signatures with Cosign for production deployments — all recent releases are signed, enabling supply-chain attestation. If you were impacted by the March Trivy compromise, confirm you are on v1.82.9+ and review the official security update.
2. **Budget control reliability**: If you rely on virtual key budget enforcement, monitor [#26672](https://github.com/BerriAI/litellm/issues/26672) and [#27735](https://github.com/BerriAI/litellm/issues/27735) — validate spend limits with `/key/info` and add external alerting for high-volume keys until fixes land.
3. **Access control defaults**: Empty `models` lists grant full access while empty `mcp_servers` lists deny access ([#21540](https://github.com/BerriAI/litellm/issues/21540)) — explicitly define both fields in key/team configs to avoid unintended permissions. A new `search_tool_deny_by_default` flag ([#44490](https://github.com/BerriAI/litellm/pull/44490)) is coming to align search tool behavior with vector store defaults.
4. **Provider compatibility**: GPT-5 `reasoning_effort` and Anthropic Workload Identity Federation ([#28607](https://github.com/BerriAI/litellm/issues/28607)) are now supported — teams using Azure OpenAI custom deployments or Anthropic OIDC can upgrade to take advantage.
5. **Observability**: Lens now supports server-side trace search and live investigation streaming — agent teams can scale tracing beyond client-side data limits and debug in-progress runs faster.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Weekly Digest | 2026-10-05
---

## 1. Last 7 Days' Highlights
Unsloth shipped v0.1.902-beta with a desktop command palette, shareable run settings, and 4x faster Laya decision model inference, plus full LoRA training support for 4-bit NVFP4/INT4/MXFP4 checkpoints. The team advanced Qwen3-TTS fine-tuning support, rolled out memory and speed optimizations for diffusion models on low-VRAM hardware, and addressed high-priority regressions in multi-GPU tensor split decode and desktop offline model loading.

## 2. Releases & Breaking Changes
### v0.1.902-beta: Command Palette + Desktop UI/UX
- New Cmd-triggered command palette for faster desktop navigation
- Shareable run settings and improved error messaging in Unsloth Desktop
- 4x speedup for Laya decision model inference, expanded hosted Decision API support
- **Non-breaking change**: LoRA training now preserves NVFP4, INT4, and MXFP4 checkpoints in 4-bit end-to-end
- Release: [unslothai/unsloth v0.1.902-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.902-beta)

### Pending API Renames
- PR #12705 renames `block_swap_layers` to `offload_layers` for clearer semantics; existing `block_swap_layers` usage will require migration after merge
- PR: [unslothai/unsloth#12705](https://github.com/unslothai/unsloth/pull/12705)

## 3. New Model & Hardware Support
### Qwen3-TTS Fast Fine-Tuning (in progress)
- Implements full fine-tuning support for Qwen3-TTS (autoregressive Talker + code predictor modules), addressing feature request #3951
- PR: [unslothai/unsloth#12646](https://github.com/unslothai/unsloth/pull/12646)
- Issue: [unslothai/unsloth#3951](https://github.com/unslothai/unsloth/issues/3951)

### ROCm Diffusion Optimizations
- Fused RoPE kernel for FLUX on ROCm delivers 8% faster image generation on Ryzen AI Max (gfx1151) with pixel-identical output
- PR: [unslothai/unsloth#12701](https://github.com/unslothai/unsloth/pull/12701)

### In-Progress Architecture Support Requests
- LFM/Mamba fast inference compatibility (Issue: [#4073](https://github.com/unslothai/unsloth/issues/4073))
- Qwen3-VL LoRA adapter loading on vLLM (Issue: [#3560](https://github.com/unslothai/unsloth/issues/3560))

## 4. Performance & Optimization
### Diffusion Model Speed & Memory Improvements
- Whole-step CUDA graphs under layer offload: 10% faster FLUX.1 inference on 16GB L4 GPUs, 1GiB lower memory footprint for HunyuanVideo-1.5
  - PR: [unslothai/unsloth#12707](https://github.com/unslothai/unsloth/pull/12707)
- Seam-free VAE tiling for Qwen-Image-2.1 on 12GB/16GB cards eliminates horizontal/vertical artifact lines in generated images
  - PR: [unslothai/unsloth#12696](https://github.com/unslothai/unsloth/pull/12696)
- AMD Windows fix for Qwen-Image-2.1: resolves 16GB text encoder re-download caused by torchao loading failures
  - Issue (closed): [unslothai/unsloth#11638](https://github.com/unslothai/unsloth/issues/11638)

### Decision Model Speedups
- 4x faster Laya decision model inference in v0.1.902-beta, with expanded hosted Decision API coverage
- Release: [unslothai/unsloth v0.1.902-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.902-beta)

## 5. Stability & Regressions
### High Severity
1. **Multi-GPU tensor split decode regression**: 2.9x slower generation on dual RTX 5070 Ti (Windows/WSL2/Linux) since build b10715-mix-86bd2d3, linked to `max_cuda_graphs = 64` changes; fix in progress
   - Issue: [unslothai/unsloth#12468](https://github.com/unslothai/unsloth/issues/12468)
2. **Fine-tuning VRAM overusage & OOMs**: Persistent report of higher-than-advertised memory usage during fine-tuning, preventing large model training; under investigation
   - Issue: [unslothai/unsloth#4504](https://github.com/unslothai/unsloth/issues/4504)
3. **Offline model loading failure**: Desktop v0.1.815-beta (macOS) blocks loading of already-downloaded models when offline by querying Hugging Face for quant variants; fix PR merged
   - Issue (closed): [unslothai/unsloth#12415](https://github.com/unslothai/unsloth/issues/12415)

### Medium Severity
- **WSL CUDA OOM with unused VRAM**: 24GB VRAM WSL systems crash with OOM while 2/3 of memory remains unused
  - Issue: [unslothai/unsloth#1797](https://github.com/unslothai/unsloth/issues/1797)
- **Studio mmproj disk paging regression**: Recent update causes severe t/s drops from mmproj-F16.gguf disk paging, plus rejected `--mlock` flag and stripped extra args
  - Issue: [unslothai/unsloth#12372](https://github.com/unslothai/unsloth/issues/12372)
- **Qwen-Image-2.1 duplicate download**: GGUF download shows as complete, then Run triggers an unexpected 19GB "Required assets" download; confusing UX
  - Issue: [unslothai/unsloth#11637](https://github.com/unslothai/unsloth/issues/11637)

### Recently Fixed
- Desktop installation failure, project/tool call random failures, Bitdefender false positive on Windows installer, and constant idle CPU usage have all been resolved in the past week

## 6. What This Means for Application Developers
1. **Production decision model deployments**: The 4x Laya inference speedup and expanded hosted Decision API support in v0.1.902-beta lower latency and cost for agentic workflows relying on lightweight decision models; upgrade to the latest beta to access the gains.
2. **Audio generation pipelines**: Qwen3-TTS fine-tuning support (PR #12646) will enable custom voice adaptation workflows directly on Unsloth’s optimized stack — track the PR to plan integration.
3. **Multi-GPU inference users**: Hold off on upgrading past build b10687-mix-67dfc8b if you rely on tensor split mode, until the 2.9x regression in #12468 is patched.
4. **Desktop/Studio deployments**: The new command palette and shareable run settings reduce onboarding friction for internal teams; upcoming API concurrency limits (PR #5482) will enable safer multi-user shared deployments with configurable queue policies.
5. **Low-VRAM diffusion workloads**: The VAE tiling fix and offloaded CUDA graph optimizations make Qwen-Image-2.1 and FLUX viable on 12–16GB consumer GPUs without quality tradeoffs.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*