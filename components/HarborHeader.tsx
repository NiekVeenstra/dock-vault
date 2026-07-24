'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const links = [
  ['Harbor', '#harbor'],
  ['The Lighthouse', '#lighthouse'],
  ["Founder's Collection", '#collection'],
  ['The Market Hall', '#market'],
  ['The Logbook', '#logbook'],
  ['Our Philosophy', '#philosophy'],
];

export function HarborHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="harbor-header">
        <a href="#harbor" className="harbor-header__brand" aria-label="Dock Vault home">
          <Image src="/images/dock-vault-logo.png" alt="Dock Vault — The Harbor Is Yours" width={1024} height={1024} priority />
        </a>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-menu" aria-label="Open navigation" onClick={() => setOpen(true)}>
          <span /><span /><span />
        </button>
      </header>
      <div className={`menu-backdrop${open ? ' is-open' : ''}`} onClick={() => setOpen(false)} />
      <aside id="main-menu" className={`menu-drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <button className="menu-drawer__close" type="button" onClick={() => setOpen(false)} aria-label="Close navigation">×</button>
        <p className="menu-drawer__eyebrow">Navigate the Harbor</p>
        <nav>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<span>→</span></a>)}</nav>
        <p className="menu-drawer__motto">The Harbor is yours.</p>
      </aside>
    </>
  );
}
