// Common JavaScript for Jan Buscop Attorneys website
// Handles mobile navigation toggling on small screens.

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const views = document.querySelectorAll('.page-view');
  const routeLinks = document.querySelectorAll('[data-route]');
  const validRoutes = Array.from(views).map((view) => view.dataset.page);

  const showRoute = () => {
    const requestedRoute = window.location.hash.replace('#', '') || 'home';
    const route = validRoutes.includes(requestedRoute) ? requestedRoute : 'home';

    views.forEach((view) => {
      view.classList.toggle('active', view.dataset.page === route);
    });

    routeLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.route === route);
    });

    if (requestedRoute !== route) {
      window.location.hash = route;
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const displayStyle = getComputedStyle(navLinks).display;
      if (displayStyle !== 'none' && displayStyle !== '') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
      }
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  }

  window.addEventListener('hashchange', showRoute);
  showRoute();
});
