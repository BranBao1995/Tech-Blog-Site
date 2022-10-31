const deleteBlog = document.querySelector("#delete-blog-button");

const deleteBlogHandler = async (event) => {
  event.preventDefault();

  const blog_id = deleteBlog.getAttribute("data-blogId");
  console.log(deleteBlog);
  console.log(blog_id);

  if (blog_id) {
    const response = await fetch(`/api/blogs/${blog_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/`);
    } else {
      alert("Failed to delete blog.");
    }
  }
};

deleteBlog.addEventListener("click", deleteBlogHandler);
