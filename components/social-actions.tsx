'use client';

import { Share2 } from 'lucide-react';
import { useState } from 'react';

const X_PROFILE_URL = 'https://x.com/aoko_works';

export function SocialActions() {
  const [copied, setCopied] = useState(false);

  async function shareSite() {
    const data = { title: 'aoko*の観測所', text: 'aoko*の観測所', url: window.location.href };
    if (navigator.share) {
      try { await navigator.share(data); } catch { /* 共有のキャンセル時は何もしない */ }
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="social-actions">
      <a className="icon-link x-link" href={X_PROFILE_URL} target="_blank" rel="noreferrer" aria-label="Xでaoko*を見る" title="X">
        <img src="/x-logo-black.png" alt="" aria-hidden="true" />
      </a>
      <button className="icon-link" type="button" onClick={shareSite} aria-label="このサイトを共有" title="このサイトを共有">
        <Share2 aria-hidden="true" />
      </button>
      <span className={`copy-notice${copied ? ' is-visible' : ''}`} role="status">URLをコピーしました</span>
    </div>
  );
}
