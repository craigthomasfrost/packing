---
title: Packing Checklist
---

<style>
  :root {
    --bg: #ffffff;
    --text: #111111;
    --muted: #666;
    --line: #eaeaea;
    --line-strong: #dcdcdc;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-size: 15px;
    line-height: 1.5;
  }

  .markdown-body {
    color: var(--text);
    font-family: inherit;
  }

  .container-lg {
    max-width: 720px;
  }

  .px-3 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }

  .my-5 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding-top: 48px;
    padding-bottom: 80px;
  }

  h1 {
    margin: 0 0 20px;
    border: 0;
    font-size: 40px;
    font-weight: 650;
    letter-spacing: 0;
    line-height: 1.1;
  }

  h2 {
    margin: 48px 0 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--line);
    color: var(--text);
    font-size: 24px;
    font-weight: 650;
    letter-spacing: 0;
  }

  h3 {
    margin: 28px 0 8px;
    color: var(--text);
    font-size: 16px;
    font-weight: 650;
    letter-spacing: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0;
  }

  li.task-list-item,
  .markdown-body .task-list-item {
    display: flex;
    align-items: center;
    gap: 9px;
    min-height: 36px;
    border-bottom: 1px solid var(--line);
    padding: 8px 0;
    color: var(--text);
    transition: color 120ms ease;
  }

  li.task-list-item:hover,
  .markdown-body .task-list-item:hover {
    color: #000;
  }

  li.task-list-item:has(input:checked),
  .markdown-body .task-list-item:has(input:checked) {
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
    gap: 10px;
    align-items: center;
    margin: 0 0 36px;
    border: 1px solid var(--line);
    border-radius: 6px;
    background: rgb(255 255 255 / 86%);
    padding: 12px;
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
    height: 4px;
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
    background: #fff;
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

    h1 {
      font-size: 34px;
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
