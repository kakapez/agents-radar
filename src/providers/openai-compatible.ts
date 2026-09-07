/**
 * Base class for OpenAI-compatible providers.
 *
 * Shared by OpenAI, GitHub Copilot, and OpenRouter providers.
 */

import OpenAI from "openai";
import type { LlmProvider } from "./types.ts";

export abstract class OpenAICompatibleProvider implements LlmProvider {
  abstract readonly name: string;
  protected readonly client: OpenAI;
  protected readonly model: string;

  constructor(opts: { apiKey?: string; baseURL?: string; model: string }) {
    this.model = opts.model;
    this.client = new OpenAI({
      apiKey: opts.apiKey,
      baseURL: opts.baseURL,
    });
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    const isReasoningModel =
      /seed|thinking|deepseek-r1/i.test(this.model) ||
      (this.client.baseURL && this.client.baseURL.includes("volces.com"));

    // Volcano Ark / Doubao Seed models support thinking: { type: "disabled" }
    // to bypass slow and token-heavy CoT reasoning for plain summary tasks.
    const extraParams: Record<string, unknown> = isReasoningModel ? { thinking: { type: "disabled" } } : {};

    const response = await this.client.chat.completions.create({
      model: this.model,
      max_completion_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
      ...extraParams,
    });

    const choice = response.choices[0];
    const message = choice?.message as
      | (OpenAI.Chat.Completions.ChatCompletionMessage & { reasoning_content?: string })
      | undefined;

    // Prefer standard content, fallback to reasoning_content if content is empty
    const text =
      message?.content && message.content.trim().length > 0 ? message.content : message?.reasoning_content;

    if (!text) {
      const reason = choice?.finish_reason ? ` (finish_reason: ${choice.finish_reason})` : "";
      throw new Error(`Unexpected empty response from ${this.name}${reason}`);
    }
    return text;
  }
}
