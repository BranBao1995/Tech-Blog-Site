const deleteComment = document.querySelector("#delete-comment-button");

const deleteCommentHandler = async (event) => {
  event.preventDefault();

  const comment_id = deleteComment.getAttribute("data-commentId");
  const blog_id = deleteComment.getAttribute("data-blogId");

  if (comment_id) {
    const response = await fetch(`/api/comments/${comment_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/api/blogs/${blog_id}`);
    } else {
      alert("Failed to delete comment.");
    }
  }
};

deleteComment.addEventListener("click", deleteCommentHandler);
