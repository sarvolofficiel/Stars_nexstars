import { layout } from '../layout.js';

export function renderHome() {
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.innerHTML = `
    <p class="eyebrow">Crée · Partage · Inspire</p>
    <h1>Bienvenue sur <span class="logo">STARS</span></h1>
    <p>Découvre des jeux, films, dessins et musiques créés par des artistes indépendants.</p>
    <a class="button-primary" href="/publier" data-link>+ Publier une création</a>
  `;

  const feed = document.createElement('section');
  feed.className = 'feed';
  feed.innerHTML = `
    <h2>Créations récentes</h2>
    <div class="empty">Pas encore de création ici. La prochaine découverte pourrait être la tienne.</div>
  `;

  const content = document.createElement('div');
  content.append(hero, feed);
  return layout(content, '/');
}
