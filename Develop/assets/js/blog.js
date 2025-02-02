// TODO: Create a variable that selects the main element, and a variable that selects the back button element

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function handleNoPosts(postsContainer) {
    postsContainer.innerHTML = '<p>No Blog posts yet...</p>';
}

function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <h3>By ${post.username}</h3>
        <p>${post.content}</p>
    `;
    
    return postElement;
}


function renderBlogList() {
    const postsContainer = document.getElementById('blog-posts-container');
    if (!postsContainer) {
        console.error('Element with id "blog-posts-container" not found.');
        return;
    }

    const postsData = localStorage.getItem('blogPosts');
    console.log('Posts Data:', postsData);

    if (postsData) {
      try {
        const posts = JSON.parse(postsData);
        console.log('Parsed Posts', posts);

        if (Array.isArray(posts) && posts.length > 0) {
            posts.forEach(post => {

               const postElement = createPostElement(post);
               postsContainer.appendChild(postElement);
            });
        } else {
           handleNoPosts(postsContainer);
        }
    } catch (error) {
        console.error('Error parsing posts data:', error);
        handleNoPosts(postsContainer);
    }
} else {
    handleNoPosts(postsContainer);
}
}           
            



 
  



// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

document.addEventListener('DOMContentLoaded', () => {
    renderBlogList();

    const backButton = document.getElementById('back');
  if (backButton){
    backButton.addEventListener('click', () => {
      redirectPage('index.html'); 
    });
} else {
    console.error('Element with id "back" not found.');
}
  });


