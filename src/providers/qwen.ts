/**
 * Qwen provider — Alibaba Cloud Model Studio (Bailian) via its
 * OpenAI-compatible endpoint.
 *
 * Env vars:
 *   DASHSCOPE_API_KEY   - API key
 *   DASHSCOPE_BASE_URL  - endpoint override (default: the dedicated
 *                         cn-beijing MaaS endpoint below)
 *   QWEN_MODEL          - model name (default: qwen-flash)
 *
 * qwen-flash is tier-priced by the *input length of a single request*; every
 * prompt this project builds stays well under the 128K first tier, so runs
 * bill at the cheapest rate (¥0.15/M input, ¥1.5/M output).
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const QWEN_BASE_URL = "https://ws-lp67r4thsmcegm03.cn-beijing.maas.aliyuncs.com/compatible-mode/v1";

export class QwenProvider extends OpenAICompatibleProvider {
  readonly name = "qwen";

  constructor(opts?: { apiKey?: string; baseURL?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["DASHSCOPE_API_KEY"],
      baseURL: opts?.baseURL ?? process.env["DASHSCOPE_BASE_URL"] ?? QWEN_BASE_URL,
      model: opts?.model ?? process.env["QWEN_MODEL"] ?? "qwen-flash",
    });
  }
}
