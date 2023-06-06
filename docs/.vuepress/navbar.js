module.exports = [
  {
    text: "数学",
    link: encodeURI("/math/higher-math/函数、极限和连续"),
  },
  {
    text: "碎片",
    link: encodeURI("/fe-piece/css"),
  },
  {
    text: "基础",
    link: encodeURI("/fe-basic/js/闭包"),
  },
  {
    text: "框架",
    link: encodeURI("/fe-frame/react/重渲染"),
  },
  {
    text: "工程",
    link: encodeURI("/engineer/git/git commit 提交规范"),
  },
  {
    text: "题库",
    link: encodeURI("/question/闭包"),
  },
  {
    text: "踩坑",
    link: encodeURI("/debug/js"),
  },
  process.env.NODE_ENV === "development" && {
    text: "面试",
    link: encodeURI("/interview/html"),
  },
  {
    text: "资源",
    link: encodeURI("/resource/study"),
  },
].filter(Boolean);
