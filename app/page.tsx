import { ArrowUpRight } from 'lucide-react';
import { SocialActions } from '@/components/social-actions';

export const dynamic = 'force-static';

function Star() {
  return <span className="brand-star">*</span>;
}

function SiteName() {
  return <>aoko<Star />の観測所</>;
}

const links = [
  { label: '記事', title: 'ココフォリア技術記事', note: 'Qiita', href: 'https://qiita.com/aoko_2477' },
  { label: 'ツール', title: '閾値CSSジェネレーター', description: 'OBSに表示するCCFOLIAのステータスバーを、好みに合わせて調整できるCSS作成ツール', note: 'Web app', href: 'https://aoko2477.github.io/ccfolia-css/tools/threshold-css-generator/' },
  { label: 'アプリ', title: 'Transition Studio', description: 'CCFOLIAやOBS向けの場面転換素材作成アプリ', note: 'Web app', href: 'https://aoko2477.github.io/transition-studio-web/' },
  { label: 'ショップ', title: <SiteName />, description: 'シナリオ、ツール他の販売', note: 'BOOTH', href: 'https://aoko-shop.booth.pm/' },
];

export default function Home() {
  return (
    <main>
      <header>
        <a className="site-name" href="#top"><SiteName /></a>
        <div className="header-links">
          <a className="small-link" href="https://aoko-shop.booth.pm/" target="_blank" rel="noreferrer">BOOTH <ArrowUpRight /></a>
          <SocialActions />
        </div>
      </header>
      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="天の川が広がる夜空" />
        <div className="hero-text"><h1><SiteName /></h1><p>つくったものと、書いたもの。</p></div>
        <p className="photo-credit">photo by aoko<Star /></p>
      </section>
      <section className="index" aria-labelledby="index-title">
        <div className="index-intro">
          <p className="section-label">INDEX</p><h2 id="index-title">制作物</h2>
          <p>TRPGや配信のまわりで作ったものを、ここにまとめています。</p>
        </div>
        <nav className="link-list" aria-label="制作物へのリンク">
          {links.map((item, index) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={item.href}>
              <span className="number">{String(index + 1).padStart(2, '0')}</span><span className="category">{item.label}</span>
              <span className="link-copy"><strong>{item.title}</strong>{item.description && <small>{item.description}</small>}</span><span className="note">{item.note}</span><ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>
      <footer><span><SiteName /></span><span>© {new Date().getFullYear()} aoko<Star /></span></footer>
    </main>
  );
}
