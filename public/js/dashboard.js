const blogForm = document.querySelector("#new-blog");
const addBlogButton = document.querySelector("#add-blog-button");

const renderForm = () => {
  const blogDisplay = document.querySelector(".blogs-display-dashboard");
  const formDisplay = document.querySelector(".form-display");
  blogDisplay.style.display = "none";
  formDisplay.style.display = "block";
};

const renderBlogs = () => {
  const blogDisplay = document.querySelector(".blogs-display-dashboard");
  const formDisplay = document.querySelector(".form-display");

  blogDisplay.style.display = "block";
  formDisplay.style.display = "none";
};

const blogFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value;
  const content = document.querySelector("#blog-content").value;
  const creation_date = new Date();
  const userId = blogForm.getAttribute("data-userId");

  if (title && content) {
    const response = await fetch("/api/blogs/", {
      method: "POST",
      body: JSON.stringify({ title, content, creation_date }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      renderBlogs();
      document.location.replace(`/api/dashboard/${userId}`);
    } else {
      alert("Failed to post blog.");
    }
  } else {
    alert("Empty input fields!");
  }
};

blogForm.addEventListener("submit", blogFormHandler);
addBlogButton.addEventListener("click", renderForm);
