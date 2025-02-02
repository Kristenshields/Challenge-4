// TODO: Create a variable that selects the form element
const form = document.getElementById('blog-form');
const errorMessage = document.getElementById('error');


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmission(event) {
    event.preventDefault();

console.log("blog posts");
    // Grab form data
    const formData = new FormData(form);
    const username = formData.get('username');
    const title = formData.get('title');
    const content = formData.get('content');

    // Check for missing data
    if (!username || !title || !content) {
        errorMessage.textContent = 'Please complete the form.';
        return;
    }

    errorMessage.textContent = '';
     let blogPosts= readLocalStorage()
    blogPosts.push({ username, title, content })
        // Store form data in local storage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    redirectPage('blog.html');
}    

function readLocalStorage(key)
 {
    const data = localStorage.getItem('blogPosts');
    return data ? JSON.parse(data) : [];
  }
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
//document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', handleFormSubmission);
//});
  