document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('theme-toggle');
  const skin = document.getElementById('skin-css');
  const themeKey = 'theme-skin';

  // Get base URL from the current href
  function getBaseUrl() {
    const href = skin.getAttribute('href');
    return href.substring(0, href.lastIndexOf('/'));
  }

  function setSkin(skinName) {
    if (skin) {
      skin.href = getBaseUrl() + '/main-' + skinName + '.css';
      localStorage.setItem(themeKey, skinName);
    }
  }

  // On load, set skin from localStorage
  let saved = localStorage.getItem(themeKey) || 'classic';
  setSkin(saved);
  if (toggle) toggle.checked = (saved === 'dark');

  if (toggle) {
    toggle.addEventListener('change', function() {
      setSkin(this.checked ? 'dark' : 'classic');
    });
  }
});