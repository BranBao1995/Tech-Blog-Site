const { Comment } = require("../models");

const commentdata = [
  {
    content: "Aliquam sit amet arcu sed justo cursus aliquam.",
    creation_date: "April 20, 2021 07:00:00",
    blog_id: 1,
    user_id: 1,
  },
  {
    content: "Integer rhoncus porttitor purus, vitae luctus sem iaculis id.",
    creation_date: "April 21, 2021 07:00:00",
    blog_id: 2,
    user_id: 1,
  },
  {
    content: "Integer ullamcorper sapien in commodo congue.",
    creation_date: "April 22, 2021 07:00:00",
    blog_id: 3,
    user_id: 1,
  },
  {
    content:
      "Maecenas augue leo, rutrum varius fringilla gravida, tempus vitae est.",
    creation_date: "April 23, 2021 07:00:00",
    blog_id: 4,
    user_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
