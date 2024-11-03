// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('toggle');

  if (!toggleSwitch) {
    console.error('Element with ID "toggle" not found');
    return;
  }

  function applyMode(mode) {
    if (mode === 'dark') {
      document.documentElement.style.setProperty("--circle-color", "#ffb100");
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      toggleSwitch.checked = true;
    } else {
      document.documentElement.style.setProperty("--circle-color", "#8570a5");
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      toggleSwitch.checked = false;
    }
  }

  function toggle() {
    if (document.body.classList.contains('dark')) {
      applyMode('light');
      localStorage.setItem('mode', 'light');
    } else {
      applyMode('dark');
      localStorage.setItem('mode', 'dark');
    }
  }

  toggleSwitch.addEventListener('click', toggle);

  const savedMode = localStorage.getItem('mode');
  if (savedMode) {
    applyMode(savedMode);
  } else {
    applyMode('light');
  }
});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(key) {
  const data = localStorage.getItem('blogPosts');
  return data ? JSON.parse(data) : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(newPost) {
  const existingPostsData = localStorage.getItem('blogPosts');
  const existingPosts = existingPostsData ? JSON.parse(existingPostsData) : [];
  existingPosts.push(newPost);
  localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
  

}
// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

