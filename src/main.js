import { renderHome } from './pages/home.js';
import { renderPublishChooser } from './pages/publish.js';

const routes = {
  '/': renderHome,
  '/publier': renderPublishChooser,
};

function render() {
  const view = routes[window.location.pathname] ?? renderHome;
  document.getElementById('app').replaceChildren(view());
}

window.addEventListener('popstate', render);
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[data-link]');
  if (!link) return;
  event.preventDefault();
  window.history.pushState({}, '', link.getAttribute('href'));
  render();
});

render();
