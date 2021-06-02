document.addEventListener('DOMContentLoaded', () => {
  let theme = localStorage.getItem('theme');

  if (!theme) {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(matches);
    theme = matches ? 'dark' : 'light';

    localStorage.setItem('theme', theme);
  }
  
  document.body.classList.toggle('dark', theme === 'dark');

  setTimeout(() => {
    document.body.style.visibility = 'visible';
  }, 300);
});

document.querySelector('.toggle-button').onclick = e => {
  const theme = localStorage.getItem('theme');

  localStorage.setItem('theme', `${theme === 'dark' ? 'light' : 'dark'}`);

  document.body.classList.toggle('dark');
};