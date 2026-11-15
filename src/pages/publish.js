import { layout } from '../layout.js';

const types = [
  { key: 'video', label: 'Vidéo', icon: '▶' },
  { key: 'art', label: 'Art', icon: '✎' },
  { key: 'jeu', label: 'Jeu', icon: '🎮' },
  { key: 'musique', label: 'Musique', icon: '♫' },
];

export function renderPublishChooser() {
  const section = document.createElement('section');
  section.className = 'publish';
  section.innerHTML = `<h1>Publication</h1><p>Choisis le type de création.</p>`;

  const grid = document.createElement('div');
  grid.className = 'type-grid';
  for (const type of types) {
    const card = document.createElement('a');
    card.className = 'type-card';
    card.href = `/publier/${type.key}`;
    card.dataset.link = '';
    card.innerHTML = `<span class="type-icon">${type.icon}</span><strong>${type.label}</strong>`;
    grid.append(card);
  }

  section.append(grid);
  return layout(section, '/publier');
}
