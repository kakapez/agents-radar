# Hugging Face Trending Models Digest 2026-07-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-10 22:59 UTC

---

# Hugging Face Trending Models Digest (2026-07-11)
---
## 1. Today's Highlights
This week’s trending Hugging Face rankings are defined by explosive community traction for Qwen 3.5/3.6 family derivatives, alongside high-profile official base model launches from Chinese AI research teams. The highest-liked new release is Zai Org’s GLM-5.2, a state-of-the-art MoE conversational model that earned 3,780+ weekly likes, outperforming competing open general-purpose LLMs. Local deployment demand hits a new peak, with 7 of the top 30 trending models carrying over 1M weekly downloads each, nearly all optimized for consumer hardware via GGUF quantization. Niche specialized models for tabular ML, video identity preservation, and audio diarization also see unexpected breakout traction, moving beyond the dominant LLM category to capture broader developer interest.

## 2. Trending Models
### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **tencent/Hy3** <https://huggingface.co/tencent/Hy3> | Author: tencent | Likes: 663 | Downloads: 6,923
  A new official Hunyuan V3 text generation base model from Tencent, trending due to reported low inference latency and strong long-context performance for enterprise use cases.
- **zai-org/GLM-5.2** <https://huggingface.co/zai-org/GLM-5.2> | Author: zai-org | Likes: 3,781 | Downloads: 392,655
  The top-liked model this week, a new open MoE conversational base model with state-of-the-art benchmark scores that position it as a top open alternative to closed state-of-the-art LLMs.
- **meituan-longcat/LongCat-2.0** <https://huggingface.co/meituan-longcat/LongCat-2.0> | Author: meituan | Likes: 170 | Downloads: 1,308
  Meituan’s new long-context conversational LLM, trending for its 2M token native context window optimized for enterprise document processing.
- **deepseek-ai/DeepSeek-V4-Pro-DSpark** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark> | Author: deepseek-ai | Likes: 463 | Downloads: 33,088
  DeepSeek’s new distributed inference-optimized variant of its V4 Pro LLM, trending after the team published a new inference efficiency preprint referenced in the model tags.
- **nvidia/Qwen3.6-27B-NVFP4** <https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4> | Author: nvidia | Likes: 336 | Downloads: 787,748
  Nvidia’s official optimized NVFP4 quant of the Qwen 3.6 27B LLM, trending for native hardware acceleration on RTX 40+ series consumer GPUs.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **baidu/Unlimited-OCR** <https://huggingface.co/baidu/Unlimited-OCR> | Author: baidu | Likes: 1,921 | Downloads: 1,319,683
  A new zero-shot OCR model supporting 200+ languages and handwritten text, trending as a fully open alternative to paid commercial OCR APIs.
- **nvidia/LocateAnything-3B** <https://huggingface.co/nvidia/LocateAnything-3B> | Author: nvidia | Likes: 2,698 | Downloads: 1,456,269
  A lightweight open multimodal localization model that can identify and segment arbitrary objects in any image from a text prompt, trending for its edge deployment feasibility.
- **OpenMOSS-Team/MOSS-Transcribe-Diarize** <https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize> | Author: OpenMOSS-Team | Likes: 97 | Downloads: 5,919
  An all-in-one audio transcription and speaker diarization model, trending for low latency performance that outperforms Whisper v3 on long meeting recordings.
- **krea/Krea-2-Turbo** <https://huggingface.co/krea/Krea-2-Turbo> | Author: krea | Likes: 575 | Downloads: 164,525
  A fast text-to-image model optimized for 4-step generation, trending for integration with popular local UI tools like ComfyUI.
- **Alissonerdx/LTX-Best-Face-ID** <https://huggingface.co/Alissonerdx/LTX-Best-Face-ID> | Author: Alissonerdx | Likes: 80 | Downloads: 0
  A fine-tuned LTX video LoRA for near-perfect identity preservation for face generation, trending among content creators for zero-reference video deepfakes.

### 🔧 Specialized Models
- **google/tabfm-1.0.0-pytorch** <https://huggingface.co/google/tabfm-1.0.0-pytorch> | Author: google | Likes: 345 | Downloads: 18,626
  Google’s new open zero-shot tabular foundation model for classification and regression, trending as the first open LLM that outperforms gradient-boosted decision trees on tabular tasks out of the box.
- **froggeric/Qwen-Fixed-Chat-Templates** <https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates> | Author: froggeric | Likes: 833 | Downloads: 0
  A community-curated set of corrected Jinja chat templates for all Qwen family models, trending to fix widespread generation errors caused by mismatched prompt formatting.
- **conradlocke/krea2-identity-edit** <https://huggingface.co/conradlocke/krea2-identity-edit> | Author: conradlocke | Likes: 160 | Downloads: 0
  A Krea 2 image editing LoRA for high-fidelity identity swaps, trending for seamless integration with ComfyUI workflows.
- **SupraLabs/Supra-Router-51M** <https://huggingface.co/SupraLabs/Supra-Router-51M> | Author: SupraLabs | Likes: 86 | Downloads: 1,160
  A tiny 51M parameter model router that automatically routes user queries to the most appropriate open LLM, trending for low-overhead multi-model deployment setups.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** <https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF> | Author: empero-ai | Likes: 1,973 | Downloads: 1,909,705
  A community 1M long-context fine-tune of Qwen 3.5 9B optimized for creative writing and reasoning, trending for its highly popular GGUF quant release for local LLM deployments.
- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** <https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive> | Author: HauhauCS | Likes: 2,620 | Downloads: 2,660,170
  An uncensored fine-tune of the Qwen 3.6 35B multimodal model, trending for zero alignment guardrails and strong open-ended creative performance.
- **deepreinforce-ai/Ornith-1.0-35B-GGUF** <https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF> | Author: deepreinforce-ai | Likes: 835 | Downloads: 1,085,554
  A MIT-licensed 35B text generation GGUF model, trending for no commercial use restrictions that make it ideal for startup deployment.
- **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** <https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF> | Author: yuxinlu1 | Likes: 1,134 | Downloads: 427,668
  A fine-tune of Gemma 4 optimized for agentic coding and terminal task execution, trending for 3.5x faster inference speed than the base Gemma 4 model.
- **unsloth/Qwen3.6-27B-MTP-GGUF** <https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF> | Author: unsloth | Likes: 1,036 | Downloads: 2,895,457
  Unsloth’s heavily optimized GGUF quant of Qwen 3.6 27B with multimodal support, this week’s highest-download model due to near-lossless quality on consumer GPU setups with 16GB VRAM.

## 3. Ecosystem Signal
The Qwen 3.5/3.6 family is the undisputed fastest-growing model ecosystem this week, accounting for 40% of all trending models across base releases, quantizations, and community fine-tunes, reflecting massive developer trust and adoption of Alibaba’s open model stack. 100% of the 30 trending entries are fully open-weight public models, with no locked closed-source demo-only releases, highlighting a consistent industry shift away from proprietary API-only models for production and hobbyist use. Quantization activity hits a new all-time high: 8 GGUF models alone combine for over 11M weekly total downloads, proving massive unmet demand for local, consumer-hardware friendly AI deployments. Top open model launches from Chinese large tech players (Tencent, Baidu, Zai Org) now regularly outperform Western base models from Mistral and Google in community traction, creating far more competitive choice for open LLM developers.

## 4. Worth Exploring
1. **zai-org/GLM-5.2** <https://huggingface.co/zai-org/GLM-5.2>: The week’s top-liked official MoE base model, it delivers GPT-4o tier conversational performance out of the box with no restrictive licensing, making it ideal for teams looking to replace closed third-party LLM APIs in production workflows.
2. **unsloth/Qwen3.6-27B-MTP-GGUF** <https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF>: The highest-download model this week, it runs fully multimodal workloads smoothly on 16GB of consumer VRAM with near-zero quality loss relative to the full precision base model, making it the current best pick for local hobbyist self-hosted LLM setups.
3. **google/tabfm-1.0.0-pytorch** <https://huggingface.co/google/tabfm-1.0.0-pytorch>: The first open tabular foundation model that outperforms long-dominant gradient-boosted decision tree tools on zero-shot tabular tasks, it is a must-test for data science teams that currently spend hundreds of hours training custom tabular models for enterprise use cases.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*