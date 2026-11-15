const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/publier', label: 'Publier' },
];

export function layout(content, activePath) {
  const shell = document.createElement('div');
  shell.className = 'shell';

  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.innerHTML = `
    <a class="brand" href="/" data-link><span class="brand-mark">★</span><strong>Stars</strong></a>
    <nav>
      ${nav
        .map((item) => `<a class="nav-link${item.href === activePath ? ' active' : ''}" href="${item.href}" data-link>${item.label}</a>`)
        .join('')}
    </nav>
  `;

  const main = document.createElement('main');
  main.className = 'main';
  main.append(content);

  shell.append(sidebar, main);
  return shell;
}
