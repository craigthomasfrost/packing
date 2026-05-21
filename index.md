---
title: Packing Checklist
---

<style>
  :root {
    --bg: #fafafa;
    --panel: #ffffff;
    --text: #111111;
    --muted: #666666;
    --line: #eaeaea;
    --line-strong: #d4d4d4;
    --accent: #0070f3;
    --accent-soft: #e8f2ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  html {
    background: var(--bg);
  }

  body {
    background:
      linear-gradient(var(--line) 1px, transparent 1px),
      linear-gradient(90deg, var(--line) 1px, transparent 1px),
      var(--bg);
    background-size: 44px 44px;
    color: var(--text);
    font-size: 15px;
    line-height: 1.5;
  }

  .markdown-body {
    color: var(--text);
    font-family: inherit;
  }

  .container-lg {
    max-width: 920px;
  }

  .px-3 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }

  .my-5 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding-top: 48px;
    padding-bottom: 80px;
  }

  h1 {
    max-width: 680px;
    margin: 0 0 12px;
    border: 0;
    font-size: clamp(40px, 8vw, 76px);
    font-weight: 750;
    letter-spacing: 0;
    line-height: 0.94;
  }

  h2 {
    margin: 56px 0 18px;
    border: 0;
    color: var(--text);
    font-size: 13px;
    font-weight: 650;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    margin: 28px 0 10px;
    color: var(--text);
    font-size: 18px;
    font-weight: 650;
    letter-spacing: 0;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 8px;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }

  li.task-list-item,
  .markdown-body .task-list-item {
    display: flex;
    min-height: 44px;
    align-items: center;
    gap: 10px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: color-mix(in srgb, var(--panel) 92%, transparent);
    padding: 10px 12px;
    color: var(--text);
    transition:
      border-color 140ms ease,
      background 140ms ease,
      color 140ms ease,
      transform 140ms ease;
  }

  li.task-list-item:hover,
  .markdown-body .task-list-item:hover {
    border-color: var(--line-strong);
    background: var(--panel);
  }

  li.task-list-item:has(input:checked),
  .markdown-body .task-list-item:has(input:checked) {
    border-color: color-mix(in srgb, var(--accent) 38%, var(--line));
    background: var(--accent-soft);
    color: var(--muted);
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
    margin: 0;
    accent-color: var(--text);
    cursor: pointer;
  }

  .checklist-progress {
    position: sticky;
    top: 12px;
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    align-items: center;
    margin: 24px 0 44px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: color-mix(in srgb, var(--panel) 88%, transparent);
    padding: 12px;
    box-shadow: 0 12px 40px rgb(0 0 0 / 6%);
    backdrop-filter: blur(12px);
  }

  .checklist-progress__meta {
    display: flex;
    gap: 10px;
    align-items: baseline;
    min-width: 0;
  }

  .checklist-progress__count {
    font-size: 14px;
    font-weight: 650;
  }

  .checklist-progress__label {
    overflow: hidden;
    color: var(--muted);
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .checklist-progress__bar {
    grid-column: 1 / -1;
    height: 6px;
    overflow: hidden;
    border-radius: 999px;
    background: var(--line);
  }

  .checklist-progress__fill {
    width: 0%;
    height: 100%;
    border-radius: inherit;
    background: var(--text);
    transition: width 180ms ease;
  }

  .checklist-reset {
    border: 1px solid var(--line-strong);
    border-radius: 6px;
    background: var(--panel);
    color: var(--text);
    padding: 6px 10px;
    font: inherit;
    font-size: 13px;
    cursor: pointer;
  }

  .checklist-reset:hover {
    border-color: var(--text);
  }

  @media (max-width: 620px) {
    .my-5 {
      padding-top: 32px;
    }

    ul {
      grid-template-columns: 1fr;
    }

    .checklist-progress {
      top: 8px;
      grid-template-columns: 1fr;
    }

    .checklist-reset {
      width: 100%;
    }
  }
</style>

{% include checklist.md %}

<script src="{{ '/assets/checklist.js' | relative_url }}"></script>
