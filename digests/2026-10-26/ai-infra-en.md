# AI Infrastructure Weekly Digest 2026-10-26

> Generated: 2026-10-26 01:05 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Weekly Report (2026-10-26)

---

## 1. Ecosystem Overview
The past 7 days saw concentrated development across the full LLM infrastructure stack, with production-grade serving engines, local runtimes, gateways, and fine-tuning frameworks all advancing support for 2026’s frontier model lineup. A critical supply chain compromise in LiteLLM dominated security headlines, while teams converged on optimizations for Blackwel GPUs, MoE architectures, and disaggregated prefill-decode workflows. Local-focused projects expanded hardware support for Apple Silicon and custom accelerators, and almost all frameworks are racing to add day-0 support for newly released LLMs and VLMs. Stability remediation remains a top priority for production deployments, with high-severity crash and deadlock bugs logged across every major serving engine.

---

## 2. Activity Comparison
| Project       | Open Bugs/Issues Tracked | Open PRs (In Review) | Release Status |
|---------------|---------------------------|-----------------------|----------------|
| vLLM          | 12+ (3 high-severity core stability bugs) | 10+ | No new stable release; active PRs targeting next minor launch |
| SGLang        | 10+ (2 high-severity crash regressions) | 5+ | v0.5.22 major release shipped (950 merged PRs, 245 contributors) |
| llama.cpp     | 7+ (2 high-severity multi-GPU MTP bugs) | 8+ | 11 consecutive stable patch releases (b11879–b11889) shipped |
| Ollama       | 11+ (1 critical cloud outage, 3 high-severity runtime bugs) | 6+ | 4 minor releases (v0.40.8–v0.40.11) shipped |
| LiteLLM       | 15+ (1 critical supply chain compromise, 7 high-severity billing/governance bugs) | 7+ | 12 patch releases shipped (v1.103.8–v1.106.4) to remediate security issues |
| Unsloth       | 9+ (2 open stability regressions) | 8+ | 2 beta releases (v0.1.909-beta, v0.1.910-beta) shipped |

---

## 3. Model Support Race
**New shipped support:**
- SGLang leads with Day-0 production-ready support for Clef / Clef Flash (LLM/VLM), PPLX-Decider v1/v1.1 (LLM/VLM), plus preliminary CPU inference for Grok-2.
- Unsloth follows with beta support for Recursive Flint, MOSS-Image, NVIDIA Nemotron Bolt 4B, DeepSeek-V4.1-Flash-1017, and FLUX-3 Image Klein.
- Ollama shipped library support for Nemotron 3.5 Bolt E4B and Recursive Flint (multi-platform macOS/Linux/Windows).
- vLLM has open PRs for Kimi K2.5/K2.6 quantization, DeepSeek-V4.1-Flash deployment presets, and MOSS-Audio multimodal fixes.

**In-progress upcoming support:**
- llama.cpp is working on ByteDance looped LM (Ouro) family and GigaChat 3.5 432B MoE conversion pipelines.
- LiteLLM is adding OpenAI-compatible Sideren and Decision Models as custom provider integrations.

**Front runner:** SGLang has the broadest Day-0 production model support for new frontier releases, while vLLM and llama.cpp focus on quantization and hardware-specific tuning for existing models.

---

## 4. Performance Frontier
Optimization efforts are concentrated in four high-impact areas:
1. **MoE kernel tuning**: vLLM landed a 48% decode throughput gain for batch-invariant fused MoE workloads on Blackwell GPUs; SGLang is optimizing DeepSeek V4.1 prefill buffers; llama.cpp added fused FFN/GLU matmul kernels for Hopper.
2. **KV cache & disaggregated serving**: vLLM improved Mooncake KV transfer bandwidth; SGLang’s weight cache daemon cut quantized model load time from 300s+ to <1s; Unsloth added KV-cache preemption for shared multi-tenant chat workloads.
3. **Speculative decoding**: SGLang is optimizing beam search overhead and adaptive speculative decoding; vLLM updated its benchmarking suite to include MTP/EAGLE drafters.
4. **Memory offload**: Unsloth added MLX MoE offloading beyond Mac system RAM; Ollama improved multi-GPU scheduling to prevent spurious VRAM evictions; llama.cpp optimized Vulkan/SYCL memory allocation for MoE workloads.

Quantization work is secondary this cycle, with most projects focused on kernel and scheduling efficiency rather than new quantization formats.

---

## 5. Layer Positioning
| Layer Category       | Projects | Core Differentiator |
|----------------------|----------|----------------------|
| **Production Serving Engines** | vLLM, SGLang | Optimized for multi-GPU, multi-tenant data center deployments; vLLM leads custom hardware (GB10, ROCm, RDMA) support, SGLang leads Day-0 model cookbook releases |
| **Local User Runtimes** | llama.cpp, Ollama | Target edge/consumer hardware (Apple Silicon, integrated GPUs, Windows/macOS desktops); llama.cpp prioritizes broad backend compatibility, Ollama prioritizes user-friendly one-click model deployment |
| **LLM Gateway/Proxy** | LiteLLM | Abstraction layer for cost governance, budget enforcement, and multi-provider routing; no kernel-level performance optimizations this cycle |
| **Fine-Tuning/Training Frameworks** | Unsloth | End-to-end optimized for parameter-efficient fine-tuning, with beta support for FSDP2 multi-GPU training and OpenAI-compatible fine-tuning APIs |

---

## 6. Trend Signals & Developer Guidance
1. **Supply chain risk is now a top-tier concern**: The LiteLLM v1.107.0 credential-stealing incident means teams must pin digest-signed images, avoid floating `latest` tags, and rotate credentials immediately if vulnerable versions are detected.
2. **Blackwell GPU optimization is table stakes**: Every major serving engine is now prioritizing Blackwell (B200/GB300) kernel tuning; teams running on next-gen NVIDIA hardware should track vLLM’s MoE tuning PR #63627 for 48% decode throughput gains.
3. **PD disaggregation is approaching production default**: SGLang and vLLM are both advancing prefill-decode split serving as the recommended deployment pattern for large MoE models; multi-tenant scale teams should monitor these roadmaps for Q4 2026 launch timelines.
4. **Local model capabilities are expanding rapidly**: macOS-native speech generation (Ollama) and MoE models larger than system RAM (Unsloth/llama.cpp) are unlocking local agentic and voice use cases, but cloud runtime reliability issues mean production teams should prioritize local deployments for now.
5. **GLM-5.3-Flash has widespread stability issues**: Crashes, memory access errors, and output degeneration are logged across vLLM, SGLang, and Ollama; teams relying on this model should apply workarounds (triton-only backends, limited parallel tools) until upstream fixes land.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Weekly Digest (2026-10-26)

## Last 7 Days' Highlights
The core team landed targeted performance tuning for Blackwell GPUs, delivering a 48% decode throughput gain for batch-invariant fused MoE workloads, alongside deepening support for disaggregated serving workflows across AMD ROCm, NVIDIA, and emerging custom hardware like GB10. On the stability front, multiple frontend and KV connector edge-case fixes are in review, addressing silent rank discarding, multimodal prefix warmup failures, and P2P offload resource leaks. A major ongoing roadmap track is advancing Rust frontend feature parity to match the production Python API server, plus continued work to unlock DeepSeek V4 and Kimi latest model support across legacy and next-gen GPU architectures.

## Releases & Breaking Changes
No new stable vLLM releases have shipped in the last 7 days.

## New Model & Hardware Support
- **Kimi K2.5/K2.6 quantization support**: Open PR #63097 adds q/k/v scale loading for quantized Kimi-K2.6 checkpoints, mapping nested MLA attention scale names for compressed-tensors KV cache quantization without altering generic scale mapper logic.
- **DeepSeek-V4.1-Flash deployment presets**: Open PR #63560 moves InferenceX AgentX lane configurations into official tuned vLLM recipe presets, standardizing concurrency, builder, and container image selections for production deployments.
- **MoRI EP V2 expert parallel backend**: Open PR #61361 adds a new `--all2all-backend mori` option, supporting MoRI EPv2 symmetric-memory window dispatch for RDMA-aligned GPU clusters (falling back to EPv1 where unsupported).
- **MOSS-Audio multimodal fix**: Open PR #63629 fixes meta-device initialization failures for MOSS-Audio model runners on non-first pipeline stages, eliminating `.item()` calls during mel dimension calculation on virtual devices.

## Performance & Optimization
- **Blackwell fused MoE tuning (+48% decode throughput)**: Open PR #63627 fixes hardcoded Triton kernel configs for batch-invariant MoE execution, delivering a measured 48% decode throughput gain on Blackwell when `VLLM_BATCH_INVARIANT=1` is enabled.
- **Mooncake KV transfer bandwidth improvement**: Open PR #63142 coalesces descending block IDs to reduce descriptor count for Mooncake transfer engine, reducing per-transfer overhead for disaggregated KV cache offload workloads.
- **GB10 weight loading optimization**: Open issue #58726 tracks performance work to eliminate slow per-tensor H2D copies from safetensors mmap views on NVIDIA GB10 (DGX Spark) hardware, following similar prior optimizations for ROCm and Ascend NPU platforms.
- **Speculative decoding benchmarking**: Open PR #63622 updates `vllm bench forward` to include configured MTP, EAGLE, DSpark, and DFlash drafters in timing runs, with an opt-out `--exclude-drafter` flag for target-only performance testing.
- **AMD ROCm MI355X optimizations**: Open issues #57149 and #59575 track ongoing performance work for Qwen3.8 2.4T and Qwen3.8-Flash-Next models on gfx950/MI355X hardware, with stacked PRs planned for MXFP4 MoE and GatedDeltaNet kernel tuning.

## Stability & Regressions
1. **High severity**:
   - **V1 engine core deadlock under concurrent load**: Open bug #37729 reports consistent deadlocks when running Qwen3.5 with FP8 quantization + prefix caching enabled under production load, with 37 comments confirming reproductions across multi-GPU deployments.
   - **GLM-5.3-Flash CUDA illegal memory access**: Open bug #54317 reports recurring crashes across 3 unrelated kernels (KDA linear attention, MHC TileLang, TRT-LLM fused MoE) on 4x B200 setups running the official glm53-flash container image.
   - **TP worker hang with DeepSeek-V4-Pro**: Open bug #41530 reports RPC timeouts for sample_tokens when running DeepSeek-V4-Pro with TP=8 and MTP speculative decoding, leading to full engine deadlock.
2. **Medium severity (fixes in review)**:
   - **Frontend silent DP rank discarding**: Open PR #62450 fixes Responses API requests not forwarding the `X-data-parallel-rank` header, causing gateways to lose their selected DP replica for streaming/non-streaming requests.
   - **Multimodal prefix warmup failure**: Open PR #63543 fixes shared-prefix warmup on `/v1/systemone` endpoints, which previously discarded multimodal metadata (e.g. image inputs) on hybrid models and broke prefix cache reuse.
   - **KV offload P2P resource leak**: Open PR #63628 rolls back half-registered NIXL agents when descriptor preparation fails during P2P KV offload, preventing stale registration state from causing future transfer failures.
   - **Fused MoE shared memory crashes**: Open PR #61931 caps Triton tile sizes and pipeline stages for float32 MoE execution, eliminating `OutOfResources` crashes on Ada/SM80 hardware.
3. **Low severity (fixes in review)**:
   - **DSML tool calling parser bugs**: Open PR #62259 fixes truncated/unclosed DSML parameter handling for DeepSeek V4.1 tool calls, adding incremental DSML argument streaming to match production chat behavior.

## What This Means for Application Developers
- Production teams running Blackwell GPUs with MoE models can expect a significant decode throughput lift from the upcoming batch-invariant MoE tuning, making it worth tracking PR #63627 for immediate performance gains once merged.
- Users running disaggregated serving deployments on Mooncake will see reduced KV transfer overhead from PR #63142, while developers building on custom API gateways should monitor DP rank forwarding fixes (PR #62450) to avoid silent replica misrouting.
- Multimodal application builders using image-bearing requests should test the prefix warmup fix (PR #63543) to restore prefix cache reuse, which previously broke performance for hybrid vision-language model deployments.
- Teams relying on DeepSeek-V4 or Kimi latest models should watch the open hardware support issues (#50576 for Ampere, #59203 for Blackwell SM120) to track timeline for native checkpoint support on their target hardware, rather than relying on custom patches.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest: 2026-10-26

## 1. Last 7 Days' Highlights
SGLang released v0.5.22, a major milestone shipped in collaboration with 245 contributors across 950 merged PRs, with expanded support for newly released LLMs and VLMs.
Active development has converged on three core engineering directions: Prefill-Decode (PD) disaggregation roadmapping, speculative decoding optimization, and stability remediation for flaky CI pipelines and production crash regressions.
A set of high-priority fixes are in flight for multimodal HTTP payload limits, DeepSeek V4.1 AMD kernel compatibility, and sampling consistency across speculative decoding paths.

## 2. Releases & Breaking Changes
- **v0.5.22 release**: Landed a week-over-week major version update covering 950 PRs and 245 contributors, with new model cookbook references for Clef and PPLX model families. [Link](https://github.com/sgl-project/sglang/releases)
- **HTTP payload configuration**: PR #46482 introduces a new `--max-payload-size` server flag to configure Uvicorn/Granian HTTP body limits, resolving default request failures for large base64-encoded multimodal inputs. This is a non-breaking optional configuration addition. [Link](https://github.com/sgl-project/sglang/pull/46482)

## 3. New Model & Hardware Support
- **New model support shipped in v0.5.22**: Added Day-0 support for Clef / Clef Flash (LLM/VLM) and PPLX-Decider v1/v1.1 (LLM/VLM), with published cookbook deployment guides. [Link](https://github.com/sgl-project/sglang/releases)
- **CPU inference**: PR #43341 adds preliminary support for running Grok-2 models on Intel Xeon CPU backends. [Link](https://github.com/sgl-project/sglang/pull/43341)
- **AMD ROCm hardware**: PR #46236 fixes V4.1 k-norm-rope kernel build compatibility for ROCm 10 on AMD datacenter GPUs; PR #43465 adds prefill context parallel support for DeepSeek-V4.1 on AMD hardware. [Link](https://github.com/sgl-project/sglang/pull/46236) [Link](https://github.com/sgl-project/sglang/pull/43465)
- **Hardware roadmap progress**: Active tracking for Apple Silicon support (Issue #19137), AMD consumer RDNA3/RDNA4 Radeon support (Issue #30599), and T-Head PPU/SAIL accelerator support (Issue #37519). [Link](https://github.com/sgl-project/sglang/issues/19137) [Link](https://github.com/sgl-project/sglang/issues/30599) [Link](https://github.com/sgl-project/sglang/issues/37519)

## 4. Performance & Optimization
- **Weight cache daemon for fast engine recovery**: Roadmap Issue #33522 reports landed Phase 1 work reducing post-quantized weight load time from 306-327s to <1s for Qwen3-235B FP8 via per-rank CUDA IPC serving. [Link](https://github.com/sgl-project/sglang/issues/33522)
- **Speculative decoding optimizations**: Two parallel roadmaps are active for Ngram speculative decoding (Issue #21052) and adaptive speculative decoding for mixed agentic workloads (Issue #23705); PR #46480 optimizes beam search by deferring token materialization only to final top-k beams, cutting unnecessary tokenization overhead. [Link](https://github.com/sgl-project/sglang/issues/21052) [Link](https://github.com/sgl-project/sglang/issues/23705) [Link](https://github.com/sgl-project/sglang/pull/46480)
- **Diffusion serving performance**: PR #46439 optimizes diffusion video inference by quantizing output frames to uint8 before host copy, reducing host transfer bandwidth overhead for video generation workloads. [Link](https://github.com/sgl-project/sglang/pull/46439)
- **DeepSeek V4 kernel optimizations**: PR #46399 refactors DeepSeek V4.1 prefill graph buffers to eliminate unnecessary table copy overhead during prefill candidate generation. [Link](https://github.com/sgl-project/sglang/pull/46399)

## 5. Stability & Regressions
- **Speculative decoding server crash (High severity)**: Issue #43412 reports servers SIGKILL on first non-greedy request when speculative decoding is enabled, caused by flashinfer verify-sampling op JIT compilation conflicts between bundled cccl and pip CUDA 13 toolkit. Greedy traffic remains unaffected. [Link](https://github.com/sgl-project/sglang/issues/43412)
- **Multi-node GB300 startup OOM (High severity)**: Issue #45345 reports startup OOM failures on two-node GB300 deployments of Kimi-K3 with 32 tokenizer workers and auto-selected CUDA VMM multimodal transport, before any client requests are processed. [Link](https://github.com/sgl-project/sglang/issues/45345)
- **GLM-5.3-Flash production regressions**: Two open bugs reported: Issue #42012 documents fa4 attention backend crashes at CUDA-graph capture on SM120 hardware (triton is the only working backend); Issue #36669 reports thinking output degeneration into repeated '!' characters for multi-tool agentic prompts. [Link](https://github.com/sgl-project/sglang/issues/42012) [Link](https://github.com/sgl-project/sglang/issues/36669)
- **Sampling consistency bug**: Issue #41916 documents inconsistent top-k/top-p filtering across different sampling paths; fix is in progress via PR #41916. [Link](https://github.com/sgl-project/sglang/pull/41916)
- **CI and crash tracking**: Issue #42752 tracks flaky CI test runs with 128 comments, and Issue #26340 remains the central tracker for CUDA coredump events with 350 comments. [Link](https://github.com/sgl-project/sglang/issues/42752) [Link](https://github.com/sgl-project/sglang/issues/26340)

## 6. What This Means for Application Developers
1. **Multimodal payload relief**: Deployments serving large base64-encoded image/audio inputs can now set `--max-payload-size` in v0.5.23+ to avoid arbitrary Uvicorn/Granian request rejections, eliminating silent failed requests for large multimodal calls.
2. **Speculative decoding caution**: If running speculative decoding with non-greedy sampling (temperature > 0) on pip-installed SGLang without a system CUDA toolkit, expect server crashes on the first non-greedy request; either stick to greedy traffic until the fix lands, or use a container image with matched CUDA/cccl versions.
3. **Agentic workload adjustments**: If serving GLM-5.3-Flash for tool-calling agent workflows, be aware of the known thinking output degeneration bug for multi-tool prompts; a workaround is to limit the number of parallel tools per request until the bug fix is released.
4. **PD disaggregation for scale**: Teams running SGLang at multi-tenant scale should monitor the Q4 2026 PD disaggregation roadmap, as PD serving will become the default recommended deployment pattern for production LLM services, with unified protocol support across parallelism strategies and HiCache.
5. **Deployment prerequisites**: v0.5.22 adds new documented installation prerequisites for CUDA Toolkit, compilers, and Rust; from-source builds will fail on fresh Linux machines without these dependencies.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Weekly Digest — 2026-10-26

## 1. Last 7 Days' Highlights
This week, llama.cpp shipped 11 consecutive stable releases (b11879-b11889) focused on hardening grammar parsing, fixing memory leaks, and optimizing Qwen model inference. The most notable performance win lands in the CUDA backend with fused FFN/GLU matmul operations, while major stability bugs affecting multi-GPU MTP and Vulkan devices remain open for active troubleshooting.

## 2. Releases & Breaking Changes
All releases this week are backward-compatible patch updates:
- Latest stable release: [b11889](https://github.com/ggml-org/llama.cpp/releases/tag/b11889)
- No API or CLI breaking changes were merged in the reporting period.
- Closed hardening PRs ([#30463](https://github.com/ggml-org/llama.cpp/pull/30463), [#31153](https://github.com/ggml-org/llama.cpp/pull/31153)) enforce recursive depth limits for grammar parsers and eliminate C-style VLA warnings for CUDA code, improving code robustness without changing user-facing behavior.

## 3. New Model & Hardware Support
- **In Progress Model Support**: 
  - [PR #29823](https://github.com/ggml-org/llama.cpp/pull/29823) adds architecture support for ByteDance's looped LM family (Ouro 1.4B/2.6B and Thinking variants)
  - [PR #25342](https://github.com/ggml-org/llama.cpp/pull/25342) lands conversion pipeline for GigaChat 3.5 (432B MoE, MLA attention)
- **Hardware Optimization Work**:
  - [PR #31139](https://github.com/ggml-org/llama.cpp/pull/31139) adds per-device max allocation size reporting to resolve MoE cache creation failures on Vulkan, SYCL, and other hardware backends
  - New CPU quantization types JQ2_K/JQ3_K/JQ4_K/JQ5_K/JQ6_K are in active review ([PR #30715](https://github.com/ggml-org/llama.cpp/pull/30715))
- **Released Improvements**: Qwen tensor merge optimization for model conversion ([b11886](https://github.com/ggml-org/llama.cpp/releases/tag/b11886))

## 4. Performance & Optimization
- **Released CUDA Win**: [b11879](https://github.com/ggml-org/llama.cpp/releases/tag/b11879) fuses FFN gate/up matmuls + GLU activation in a single MMQ kernel launch for dense FFNs, reducing prompt processing overhead for Hopper-class GPUs.
- **In-Progress Backend Optimizations**:
  - RDNA4 KV cache optimization that reduces redundant memory reads per query head ([PR #30803](https://github.com/ggml-org/llama.cpp/pull/30803))
  - SYCL DPAS flash attention kernel for quantized KV caches (targeting Intel Xe2 iGPUs/discrete Arc cards) ([PR #31125](https://github.com/ggml-org/llama.cpp/pull/31125))
  - Metal GQA decode optimization that cuts KV cache read overhead for grouped-query attention models ([PR #30728](https://github.com/ggml-org/llama.cpp/pull/30728))
- **Released Memory Fix**: [b11881](https://github.com/ggml-org/llama.cpp/releases/tag/b11881) now properly respects `no_alloc` flags across all memory cache modules, reducing unnecessary memory footprint for deployments with fixed memory budgets.

## 5. Stability & Regressions
No critical crashes block production deployments, but the following open issues require attention:
1. **High Severity**: Multi-GPU MTP (Multi-Token Prediction) halves prompt processing throughput on CUDA multi-GPU setups ([#27428](https://github.com/ggml-org/llama.cpp/issues/27428)); MTP Qwen models also produce repeated gibberish after long sessions on Windows ([#23577](https://github.com/ggml-org/llama.cpp/issues/23577)).
2. **Medium Severity**: Vulkan backend `vk::DeviceLostError` on Linux 7.x kernels with Strix Halo iGPUs ([#25664](https://github.com/ggml-org/llama.cpp/issues/25664)); Qwen3.8 27B decode throughput collapses 25x after 80K context positions ([#27623](https://github.com/ggml-org/llama.cpp/issues/27623)).
3. **Low Severity**: Released fixes this week resolve a CPU/memory leak caused by dry sequence breakers ([b11884](https://github.com/ggml-org/llama.cpp/releases/tag/b11884)), truncated GGUF tensor rejection during model merging ([b11880](https://github.com/ggml-org/llama.cpp/releases/tag/b11880)), and 4D tensor quantization row-dropping bugs ([b11883](https://github.com/ggml-org/llama.cpp/releases/tag/b11883)).

## 6. What This Means for Application Developers
- **Immediate Action**: Upgrade to the latest b11889 release to eliminate memory leaks and grammar parser stack overflow risks for production deployments.
- **CUDA Deployments**: Expect improved prompt processing throughput for dense FFN models; avoid multi-GPU MTP configurations until throughput regressions are resolved.
- **Long-Context Workloads**: Current Qwen hybrid architectures face severe decode slowdowns above 80K context positions — limit context length below this threshold for latency-sensitive use cases.
- **Roadmap Watch**: Disk-based context offloading ([#20697](https://github.com/ggml-org/llama.cpp/issues/20697)) and GPU-resident MoE expert caching ([#29949](https://github.com/ggml-org/llama.cpp/issues/29949)) are high-priority feature requests that will enable larger model deployments on consumer hardware in upcoming releases.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Weekly Digest (2026-10-26)

## 1. Last 7 Days' Highlights
Over the past week, Ollama rolled out a new macOS-native speech generation feature, expanded multi-platform support for the Flint coding model, and added the NVIDIA Nemotron 3.5 Bolt E4B vision-language model to its library. Meanwhile, the cloud service experienced widespread reliability issues, and a batch of open PRs addressed long-standing feature requests and runtime stability bugs across GPU scheduling, MLX backend, and tool calling parsing.

## 2. Releases & Breaking Changes
Four new releases launched in the past 7 days with no documented breaking changes:
- v0.40.11: Added native speech generation on macOS, supporting audio playback for `ollama run` and an OpenAI-compatible `/v1/audio/speech` endpoint for streaming audio. [Release link](https://github.com/ollama/ollama/releases/tag/v0.40.11)
- v0.40.10: Added support for the NVIDIA Nemotron 3.5 Bolt E4B model. [Release link](https://github.com/ollama/ollama/releases/tag/v0.40.10)
- v0.40.9: Expanded Flint model support to Linux and Windows, and improved error reporting for streaming OpenAI/Anthropic-compatible requests. [Release link](https://github.com/ollama/ollama/releases/tag/v0.40.9)
- v0.40.8: Launched initial support for the Recursive Flint coding model. [Release link](https://github.com/ollama/ollama/releases/tag/v0.40.8)

## 3. New Model & Hardware Support
- **New models**:
  - Nemotron 3.5 Bolt E4B: NVIDIA's lightweight Gemma 4-based vision-language model with 128K-token context window, optimized for local conversation, image understanding, and tool use. [Model link](https://ollama.com/library/nemotron-3.5-bolt)
  - Flint: Recursive's coding model, now available on macOS, Linux, and Windows. [Model link](https://ollama.com/library/flint)
- **Hardware support updates**:
  - Ongoing feature requests for Intel Mac AMD GPU support ([Issue #1016](https://github.com/ollama/ollama/issues/1016)) and Snapdragon X Elite NPU/GPU support on Windows ([Issue #5360](https://github.com/ollama/ollama/issues/5360)) remain open with no merged implementation this week.

## 4. Performance & Optimization
- Open PR #19291 bumps MLX and MLX-C versions to leverage the new `window_size` feature, delivering prompt processing speedups for Gemma, Flint, and Laguna models on Apple Silicon. [PR link](https://github.com/ollama/ollama/pull/19291)
- Open PR #19284 improves GPU scheduling on multi-GPU hosts to prevent spurious eviction of CPU-only runners when VRAM predictions are miscalculated. [PR link](https://github.com/ollama/ollama/pull/19284)
- Open PR #19280 reduces prefill chunk size for long prompts on macOS to avoid Metal GPU watchdog kills. [PR link](https://github.com/ollama/ollama/pull/19280)
- Open PR #19288 adds `--limit-rate` and `--limit-streams` flags to `ollama pull`, implementing long-requested download speed rate limiting. [PR link](https://github.com/ollama/ollama/pull/19288)
- Open issue #11772 requests MoE weight offloading to CPU to reduce VRAM usage, building on upstream llama.cpp support. [Issue link](https://github.com/ollama/ollama/issues/11772)

## 5. Stability & Regressions
Ranked by severity:
1. **Critical cloud service outages**: Ollama Cloud Pro reports a 95% failure rate across all cloud models ([Issue #15453](https://github.com/ollama/ollama/issues/15453)) and frequent 503 Service Unavailable errors ([Issue #15419](https://github.com/ollama/ollama/issues/15419)), making production use of cloud models unreliable. No merged fix exists yet.
2. **High-severity runtime bugs**:
   - Massive generation degeneration (5-8% failure rate) for `glm-5.3-flash:cloud` since 2026-10-12, linked to host-side cluster storage corruption ([Issue #18980](https://github.com/ollama/ollama/issues/18980)).
   - Fresh installs failing to run models entirely after recent updates ([Issue #19276](https://github.com/ollama/ollama/issues/19276)).
   - JSON reply schema being ignored by cloud models when using structured output ([Issue #12362](https://github.com/ollama/ollama/issues/12362)).
3. **Medium-severity bugs**:
   - `OLLAMA_NUM_PARALLEL=1` not enforcing sequential request processing ([Issue #19262](https://github.com/ollama/ollama/issues/19262)).
   - `OLLAMA_CONTEXT_LENGTH` not being reflected in `/api/show` or `/api/tags` responses ([Issue #18995](https://github.com/ollama/ollama/issues/18995)).
   - Open PR #19267 fixes MLX runner ignoring stop sequences, causing generation to run past intended stopping points ([PR link](https://github.com/ollama/ollama/pull/19267)).
   - Open PRs #19274, #18288, #17626, and #18624 fix tool call and thinking tag parsing bugs for Gemma 4 and Qwen 3.5 models, preventing malformed tool outputs. [PR #19274 link](https://github.com/ollama/ollama/pull/19274), [PR #18288 link](https://github.com/ollama/ollama/pull/18288), [PR #17626 link](https://github.com/ollama/ollama/pull/17626), [PR #18624 link](https://github.com/ollama/ollama/pull/18624)

## 6. What This Means for Application Developers
- **Cloud reliability caution**: If your application relies on Ollama Cloud for production workloads, expect intermittent failures and degraded output quality this week; prioritizing local model deployments is recommended until stability issues are resolved.
- **New capabilities to test**: The macOS-native speech generation endpoint opens new use cases for voice-first local applications, and the Nemotron 3.5 Bolt E4B model is well-suited for lightweight vision-language agent workflows.
- **Feature preview work**: The upcoming download rate limiting flag will help manage bandwidth usage for large model pulls in constrained environments, while the GPU scheduling and MLX fixes will improve stability for long-running agent sessions with large context windows.
- **Tool calling caveat**: Developers using Gemma 4 or Qwen 3.5 models for tool calling should watch for malformed tool outputs until the open parsing fix PRs are merged; workarounds include validating tool call JSON schemas client-side.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Weekly Digest — 2026-10-26

## 1. Last 7 Days' Highlights
The week's top priority is a critical security response: LiteLLM v1.107.0 was found to be compromised with a credential-stealing payload and has been yanked from PyPI and Docker registries, requiring immediate user action to purge vulnerable deployments. A rapid cadence of patch releases across v1.103.x to v1.106.4 accompanied a coordinated image-signing key rotation to restore supply chain trust. Parallel work focused on governance gaps: budget enforcement drift, incomplete spend tracking, and configuration robustness for custom providers.

## 2. Releases & Breaking Changes
- **New releases (last 7 days):** v1.106.4, v1.105.5, v1.104.7, v1.103.9, plus patch iterations v1.106.3, v1.105.4, v1.104.6, v1.103.8, v1.106.2, v1.105.3.
- **Breaking change — image signing key rotation:** Starting in v1.106.3 / v1.105.4 / v1.104.6 / v1.103.8, all Docker images and Helm charts are signed with a new cosign key from commit [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065). Users verifying signatures must update their pinned public key; the old key (from `0112e53`) no longer validates new images.
- **Migration note:** Run the new verification command, e.g.:
  ```bash
  cosign verify \
    --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub \
    ghcr.io/berriai/litellm:v1.106.4
  ```
  Apply the same to `litellm-database`, `litellm-non_root`, and `docker.io/litellm/*` images.

## 3. New Model & Hardware Support
- **Bedrock metadata refresh (in progress):** PR #48358 updates AWS Bedrock model rows for Claude Sonnet 4.5 — adding the April 2027 EOL date and 64K output limit for GovCloud and legacy entries, sourced from the official Bedrock model card, with no price changes.
- **New provider (in progress):** PR #48356 adds **Sideren** as a JSON-configured OpenAI-compatible provider, enabling `sideren/<model>` across chat completions, responses, and messages with only a `SIDEREN_API_KEY`.
- **New provider integration (in progress):** PR #46901 adds **Decision Models** as a provider in the shared Jev decision flow.
- **No new GPU/quantization/backend support** reported this week.

## 4. Performance & Optimization
- No new throughput, latency, memory, or kernel optimizations with concrete benchmark numbers were merged in the last 7 days.
- Related engineering work in progress: PR #40326 (Rust pipeline for Ollama chat completions, with Python fallback and E2E parity tests) remains under review, plus ongoing Rust core expansion.

## 5. Stability & Regressions
Ranked by severity:

1. **CRITICAL — Supply chain compromise (v1.107.0):** Issue #47826 reports v1.107.0 (removed from PyPI; `latest`/`main-latest`/`main-stable` Docker images yanked) contained a `cook.pth` credential stealer and sitecustomize RCE loader built from a lookalike repo. Users on any v1.107.0 image must immediately purge deployments, rotate credentials, and move to a verified patched release.
2. **HIGH — Budget enforcement bypass/stale spend drift:**
   - Issue #26672: In v1.82.3, key/user `max_budget` enforcement fails even when spend exceeds the limit (status: open).
   - Issue #27735: Virtual keys throw `BudgetExceededError` using stale spend while `/key/info` shows spend below budget (open).
   - Related in-progress fixes: PR #48355 (virtual key soft-budget alerts now use current cross-proxy spend), PR #48354 (clear per-model budget limits on explicit null without server error).
3. **HIGH — Spend/tracking gaps:**
   - Issue #39057: Cache-hit token reporting semantics (spend zeroed but original tokens replayed) unresolved for billing aggregation.
   - Issue #14457: Client disconnect mid-stream loses usage/token tracking, creating billing gaps (open).
   - Issue #13245: Bedrock non-streaming calls under-track cost on client disconnect (open).
   - Issue #42161: Slug-model-name streamed calls log `spend = 0` when missing from price map (open).
   - In-progress fix: PR #48357 stops unknown/malformed virtual keys from creating spend records.
4. **MEDIUM — Correctness bugs:**
   - Issue #8842 (closed): Router `.acompletion` does not trigger `CustomLogger` callbacks.
   - Issue #48145: JSON-defined OpenAI-compatible providers drop tool params for uncatalogued models; fix in PR #48191.
   - Issue #14052: `x-litellm-tags` routing/fallback failure (open).
   - Issue #26444: Claude Opus 4.7 still lists `temperature` as supported though Anthropic rejects it (open).
   - Issue #26413: `think: false` ignored; reasoning content still returned (open).
   - PR #48334 fixes Presidio PII placeholder collision (#48029); PR #48329 handles non-object JSON bodies in auth failure handler (#48304); PR #48324 normalizes Ollama string stop sequences to arrays.
5. **LOW — Compatibility / ecosystem:**
   - PR #48359 (in progress): Python 3.15 support while retaining 3.10 compatibility.
   - Issue #46045 (closed): `ModuleNotFoundError: No module named 'mcp'`.
   - PR #29878 (in progress): MCP list-operation empty-response tolerance.

## 6. What This Means for Application Developers
- **Immediate security action:** If you pulled any LiteLLM image tagged `latest`, `main-latest`, or `main-stable` since 2026-10-21, or installed v1.107.0 from PyPI, treat deployments as compromised: rotate all API keys, credentials, and tokens; rebuild from a verified release (v1.103.8+ / v1.104.6+ / v1.105.4+ / v1.106.3+); and re-baseline your cosign verification key to commit `e82a3c6`.
- **Version pinning:** Avoid floating `latest` tags; pin to a specific digest-signed release and update your image-verification scripts accordingly.
- **Billing/cost accounting:** Audit your spend logs if you rely on streaming, cache hits, or client-disconnect scenarios — known gaps may have under- or over-stated usage; plan to validate against provider invoices until the in-progress spend fixes land.
- **Budget governance:** If you use `max_budget` for virtual keys/teams, add an independent reconciliation check via `/key/info` or `/team/info` rather than trusting gateway rejection behavior alone, given the open enforcement bugs.
- **Custom providers/tool calling:** If you run OpenAI-compatible providers defined via JSON config (not in the model catalog), test tool-call passing on v1.106.x; expect the fix in PR #48191 to restore previous behavior once merged.
- **Upgrading:** Wait for the next stable release train after v1.106.4 if you need Python 3.15, Sideren/Decision Models support, or the improved Ollama stop-sequence handling.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Weekly Digest — 2026-10-26

## 1. Last 7 Days' Highlights
Unsloth shipped two beta releases in the past week, adding support for new frontier models (Recursive Flint, MOSS-Image, NVIDIA Nemotron Bolt 4B, DeepSeek-V4.1-Flash-1017, FLUX-3 Image Klein) alongside macOS MLX MoE offloading beyond system memory, alpha FSDP2 multi-GPU training, a chat-only Desktop install path, and an OpenAI-compatible fine-tuning API. The roadmap on the PR side is dominated by Studio-side engineering: KV-cache preemption for parallel chats, offload-planner work, tensor-split multi-GPU GGUF loading, and an in-app node-based "Flows" pipeline editor. A number of Desktop/Studio regressions from the v0.1.909-beta → v0.1.910-beta bump are being triaged.

## 2. Releases & Breaking Changes
- **v0.1.910-beta** (latest): https://github.com/unslothai/unsloth/releases — adds chat-only Unsloth Desktop install, MLX MoE models larger than Mac RAM, OpenAI-compatible fine-tuning API.
- **v0.1.909-beta**: adds images/videos in chat, FSDP2 multi-GPU training (alpha), one-command MCP setup for coding agents.
- No explicit breaking-change migration notes in the release body, but issue #14519 and #15022 point at regressions introduced in v0.1.909/v0.1.910 on Windows Desktop — treat those betas as not yet stable on that platform.

## 3. New Model & Hardware Support
- **LLMs / VLMs / Image**: Recursive Flint, MOSS-Image, NVIDIA Nemotron Bolt 4B (E4B), DeepSeek-V4.1-Flash-1017 (552B total / 16B active, ~125 GB), FLUX.3 Image Klein (now editable via Edit workflow — PR #15263).
- **MoE / Mac**: MLX MoE models larger than Mac memory (offload beyond RAM).
- **Backends**: Vulkan sampling path for speculative decoding (PR #15258, fixes MiniCPM-V-4.7-1B), Metal OOM recovery for DSpark/DFlash sidecar on `--fit-target` (PR #14431), tensor-split GGUF across idle GPU pairs for dense and MTP-MoE models (PR #14446).
- **Training**: FSDP2 multi-GPU training (alpha, v0.1.909-beta).

## 4. Performance & Optimization
- **KV preemption across parallel chats** (PR #10301): one llama-server, one KV cache; `--preempt-ram` lets llama-server own parking so multiple Studio chats share the same cache.
- **Offload planner rework** (PR #9872, opt-in via `UNSLOTH_SMART_OFFLOAD`): spill cost gate, sub-FFN spill ladder, context-aware device reserve, launch ordering — weighs against llama.cpp's native fitter.
- **Per-layer embedding / Engram lookup tables** (PR #14465): priced and placed in host or disk memory rather than VRAM/pinned RAM — directly lowers VRAM reservation for DeepSeek-V4.1 Engram, Qwen3.8-Flash-Next, Gemma 4, gemma-3n PLE.
- **MiniMax-H3 int8 denoiser block pinning** (PR #15297): replaces single-threaded slab copy (~10.9 s per load on A100 VM for 19.45 GB) with queued background pinner.
- **GGUF admission counting** (PR #15294): counts prepared prompts + tools + rendered output before admission to avoid KV-pool overcommit from character-based estimates.
- **GGUF fit/tool-result sizing** (PR #15014): vision image tokens (~20 k for ten screenshots) are now counted in compaction and tool-result sizing.

## 5. Stability & Regressions
Ranked by user impact:
1. **#15022 (Closed)** Windows Studio — every GGUF load killed by false "child not listening" port-ownership check after 2026-10-23 update. https://github.com/unslothai/unsloth/issues/15022
2. **#14411 (Open)** Core dumps on model eject / after a few chat turns, no KV correlation. https://github.com/unslothai/unsloth/issues/14411
3. **#14519 (Closed)** Long tool-heavy chats stall for minutes in CPU conversation-archive embedding before llama.cpp gets the inference request; Stop button does not cancel archiving. https://github.com/unslothai/unsloth/issues/14519
4. **#12365 (Closed)** Multi-LAN-account use of same local model → loaded-model state does not sync across accounts (2× RTX PRO 6000 Blackwell). https://github.com/unslothai/unsloth/issues/12365
5. **#14987 (Open)** MiniCPM-V-4.7-1B on Vulkan dies after one token under speculative decoding — fix in PR #15258. https://github.com/unslothai/unsloth/issues/14987
6. **#12845 (Closed)** Arch/GNOME/Wayland AppImage window cannot be resized, framerate issues. https://github.com/unslothai/unsloth/issues/12845
7. **#14439 (Closed)** FastDecisionModel / Clef head on Gemma-3 trains with flat loss. https://github.com/unslothai/unsloth/issues/14439
8. **#14052 / #7371** AMD audio runtime / Strix-Halo ROCm prebuilt performance regressions — both closed.
9. **#14174 (Closed)** Repo pre-commit stress (`scripts/enforce_kwargs_spacing.py` unoptimized). https://github.com/unslothai/unsloth/issues/14174

## 6. What This Means for Application Developers
- **New OpenAI-compatible fine-tuning API** (v0.1.910-beta) means you can drive Unsloth from existing OpenAI-SDK-based training orchestration without a separate client.
- **KV preemption + shared cache** (PR #10301) is the relevant change if you run multi-tenant Studio backends: parallel chats no longer each need their own KV pool — but opt in carefully, since it changes cache-eviction semantics.
- **PR #15294** changes admission behavior for `/v1/chat/completions`, Responses, and Anthropic-passthrough paths — requests that previously slipped through on under-counted prompts will now be rejected or queued when KV is saturated.
- **FSDP2 alpha** plus tensor-split GGUF (PR #14446) makes 2-GPU Studio setups more useful for decode throughput, but both are moving pieces — pin a beta tag if you depend on stable layer-split behavior.
- **Windows Desktop on v0.1.909/v0.1.910** is currently the riskiest surface (issues #15022, #14519); avoid rolling these betas to Windows end-users until the port-check and archiving stall fixes land in the next release.
- **Flows node editor** (PR #14730, stacked with #15251) is the new Studio-native way to wire chat/MCP calls into pipelines — relevant if you previously built external orchestration on top of Studio's MCP surface.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*