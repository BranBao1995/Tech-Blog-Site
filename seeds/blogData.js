const { Blog } = require("../models");

const blogdata = [
  {
    title: "Lorem ipsum 1",
    content: "Aliquam sit amet arcu sed justo cursus aliquam.",
    creation_date: "April 20, 2021 07:00:00",
    user_id: 1,
  },
  {
    title: "Lorem ipsum 2",
    content: "Integer rhoncus porttitor purus, vitae luctus sem iaculis id.",
    creation_date: "April 21, 2021 07:00:00",
    user_id: 2,
  },
  {
    title: "Lorem ipsum 3",
    content: "Integer ullamcorper sapien in commodo congue.",
    creation_date: "April 22, 2021 07:00:00",
    user_id: 3,
  },
  {
    title: "Lorem ipsum 4",
    content:
      "Maecenas augue leo, rutrum varius fringilla gravida, tempus vitae est.",
    creation_date: "April 23, 2021 07:00:00",
    user_id: 4,
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
