# 原生周报改造设计

## 目标

将 agents-radar 从每日运行、抓取过去 24 小时数据，调整为每周一 07:00（北京时间）运行一次、汇总过去 7 天数据并发布一次。保留现有仓库，不新建项目；保留双语报告、GitHub Issues、GitHub Pages、RSS、Telegram 和飞书通知。

## 调度与入口

- 继续使用 `src/index.ts` 作为唯一生成入口。
- 将现有日报 workflow 改为每周 workflow，cron 使用 `0 23 * * 0`（每周日 23:00 UTC，即每周一 07:00 Asia/Shanghai）。
- 保留 `workflow_dispatch`，允许手动补发。
- 保留并发保护，避免定时运行和手动补发同时生成同一周报告。
- 删除已失效的独立 `weekly-digest.yml` 和 `monthly-digest.yml`，避免调用不存在的 pnpm 脚本。
- 报告目录仍按运行日命名，文件名保持 `ai-cli.md`、`ai-agents.md` 等，避免破坏网页、RSS 和历史链接。

## 数据窗口

- 主入口计算统一的 7 天截止时间，并传给所有支持时间过滤的数据抓取器。
- GitHub Issues、PR、Releases、Discussions 使用过去 7 天窗口。
- Hacker News、DEV.to、Lobsters、Product Hunt、ArXiv 使用各自 API 能力获取过去 7 天数据；保留 ArXiv 发布延迟处理。
- Trending 继续使用其已有的热门快照/7 天搜索逻辑，并在提示词中明确数据口径。
- Web 继续使用 `digests/web-state.json` 去重，只处理新增内容；状态仍在每次运行结束时保存。
- Hugging Face 每次周报运行都生成，不再使用仅某个星期运行的额外门控。
- 若某数据源无法精确提供 7 天历史，保留现有降级行为，并在报告中标明其为当前周期快照，不能虚构完整周趋势。

## 文案与输出

- 固定标题、说明、Issue 标题和状态文案改为周报语义（中文“周报”，英文“Weekly Digest”）。
- 报告正文仍遵循 English-first：英文生成一次，再翻译为中文。
- 报告文件名和历史报告兼容标签保持不变；归档的 `ai-weekly`/`ai-monthly` 入口只用于历史访问，不恢复旧 rollup 生成逻辑。
- 每周只提交一次 digest/manifest/feed 变更并发送一次通知。

## 错误处理

- 单个数据源失败不阻断其他报告。
- 单个 LLM 总结失败使用固定失败文案。
- 翻译失败回退到英文正文。
- 没有数据的可选报告跳过生成。
- 保持现有 LLM 并发限制与重试策略。

## 测试与验收

执行 `pnpm format:check`、`pnpm lint`、`pnpm typecheck` 和 `pnpm test`。补充或调整测试以覆盖：

1. 7 天窗口的起止边界。
2. 周一 07:00 北京时间与 `0 23 * * 0` 的调度对应关系。
3. 周报固定标题和时间范围文案。
4. HF 报告在每次周报运行中生成。
5. 旧 weekly/monthly 脚本和 workflow 不再作为有效运行入口。
6. 其他本地未跟踪文件不被提交。
