const commentForm = document.querySelector(".comment-submit");
// const deleteCommentSpan = document.querySelectorAll(".delete-comment");

// const renderDeleteCommentButon = () => {
//   for (let i = 0; i < deleteCommentSpan.length; i++) {
//     console.log(deleteCommentSpan[i].getAttribute("data-commentUserId"));
//     console.log(deleteCommentSpan[i].getAttribute("data-loggedInUserId"));
//     if (
//       deleteCommentSpan[i].getAttribute("data-commentUserId") ===
//       deleteCommentSpan[i].getAttribute("data-loggedInUserId")
//     ) {
//       deleteCommentSpan[i].style.display = "inline-block";
//     } else {
//       deleteCommentSpan[i].style.display = "none";
//     }
//   }
// };

const commentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#comment-field").value;
  const creation_date = new Date();
  const blog_id = commentForm.getAttribute("data-blogId");
  console.log(blog_id);

  if (content) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ content, creation_date, blog_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/api/blogs/${blog_id}`);
    } else {
      alert("Failed to post comment.");
    }
  }
};

commentForm.addEventListener("submit", commentFormHandler);

// renderDeleteCommentButon();
