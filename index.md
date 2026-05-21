---
layout: default
title: Packing Checklist
---

<style>
  :root {
    --bg: #ffffff;
    --text: #111111;
    --muted: #666;
    --track: #f1f1f1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-size: 15px;
    line-height: 1.5;
  }

  .page {
    max-width: 720px;
    margin: 0 auto;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 48px;
    padding-bottom: 80px;
  }

  h1 {
    margin: 0 0 20px;
    font-size: 40px;
    font-weight: 650;
    letter-spacing: 0;
    line-height: 1.1;
  }

  h2 {
    margin: 52px 0 16px;
    color: var(--text);
    font-size: 24px;
    font-weight: 650;
    letter-spacing: 0;
  }

  h3 {
    margin: 30px 0 8px;
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
  .task-list-item {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 32px;
    padding: 4px 0;
    color: var(--text);
    transition: color 120ms ease;
  }

  li.task-list-item:hover,
  .task-list-item:hover {
    color: #000;
  }

  li.task-list-item:has(input:checked),
  .task-list-item:has(input:checked) {
    color: var(--muted);
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    display: grid;
    width: 22px;
    height: 22px;
    place-content: center;
    flex: 0 0 auto;
    margin: 0;
    border-radius: 6px;
    background: #f5f5f5;
    cursor: pointer;
  }

  input[type="checkbox"]::before {
    width: 6px;
    height: 10px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    content: "";
    opacity: 0;
    transform: translateY(-1px) rotate(45deg);
  }

  input[type="checkbox"]:checked {
    background: var(--text);
  }

  input[type="checkbox"]:checked::before {
    opacity: 1;
  }

  .checklist-progress {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    align-items: center;
    margin: 0 0 36px;
    background: rgb(255 255 255 / 86%);
    padding: 10px 0;
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
    background: var(--track);
  }

  .checklist-progress__fill {
    width: 0%;
    height: 100%;
    border-radius: inherit;
    background: var(--text);
    transition: width 180ms ease;
  }

  .checklist-reset {
    border: 0;
    background: #fff;
    color: var(--muted);
    padding: 6px 0 6px 10px;
    font: inherit;
    font-size: 13px;
    cursor: pointer;
  }

  .checklist-reset:hover {
    color: var(--text);
  }

  @media (max-width: 620px) {
    .page {
      padding-top: 32px;
      padding-right: 20px;
      padding-left: 20px;
    }

    h1 {
      font-size: 34px;
    }

    .checklist-progress {
      grid-template-columns: 1fr;
    }

    .checklist-reset {
      width: 100%;
    }
  }
</style>

{% include checklist.md %}

<script src="{{ '/assets/checklist.js' | relative_url }}"></script>
