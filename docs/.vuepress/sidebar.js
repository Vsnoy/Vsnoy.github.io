module.exports = {
  "/fe-piece/": [
    {
      text: 'CSS',
      link: encodeURI("/fe-piece/css")
    },
    {
      text: 'JS',
      link: encodeURI("/fe-piece/js")
    },
    {
      text: 'React',
      link: encodeURI("/fe-piece/react")
    },
  ],
  "/fe-basic/": [
    {
      text: "CSS",
      collapsible: true,
      children: [
        "/fe-basic/css/盒子模型",
      ]
    },
    {
      text: "JS",
      collapsible: true,
      children: [
        "/fe-basic/js/闭包",
        "/fe-basic/js/原型链",
        "/fe-basic/js/作用域链",
        "/fe-basic/js/执行上下文栈",
        "/fe-basic/js/变量对象",
        "/fe-basic/js/变量、函数提升",
        "/fe-basic/js/内存堆栈",
        "/fe-basic/js/词法作用域",
        "/fe-basic/js/事件循环",
        "/fe-basic/js/节流防抖",
        "/fe-basic/js/this 指向",
        "/fe-basic/js/new 执行过程",
      ]
    }
  ],
  "/fe-frame/": [
    {
      text: "React",
      collapsible: true,
      children: [
        "/fe-frame/react/同步异步 & 批处理",
        "/fe-frame/react/立即计算 & 懒计算",
      ]
    }
  ],
  "/network/": [
    {
      text: "通用头",
      link: "/network/common-header"
    },
    {
      text: "请求头",
      link: "/network/request-header"
    },
    {
      text: "响应头",
      link: "/network/response-header"
    }
  ],
  "/engineer/": [
    {
      text: "Git",
      collapsible: true,
      children: [
        "/engineer/git/git commit 提交规范",
        "/engineer/git/git log 简洁模式",
        "/engineer/git/git 版本回退",
        "/engineer/git/git 设置代理",
        "/engineer/git/git stash 储藏",
        "/engineer/git/git rebase 合并多个 commit",
        "/engineer/git/gitignore 文件配置",
      ]
    },
    {
      text: "Node",
      collapsible: true,
      children: [
        "/engineer/node/n 管理版本",
        "/engineer/node/nvm 管理版本",
        "/engineer/node/nrm 切换镜像源",
      ]
    },
    {
      text: "SSH",
      collapsible: true,
      children: [
        "/engineer/ssh/ssh 连接 github"
      ]
    }
  ],
  "/question/": [
    {
      text: '闭包',
      link: encodeURI("/question/闭包")
    },
    {
      text: '作用域',
      link: encodeURI("/question/作用域")
    },
    {
      text: 'this 指向',
      link: encodeURI("/question/this 指向")
    },
    {
      text: '变量提升',
      link: encodeURI("/question/变量提升")
    },
    {
      text: '循环绑定',
      link: encodeURI("/question/循环绑定")
    },
    {
      text: '数组去重',
      link: encodeURI("/question/数组去重")
    },
    {
      text: '事件循环',
      link: encodeURI("/question/事件循环")
    },
    {
      text: '引用类型地址',
      link: encodeURI("/question/引用类型地址")
    },
    {
      text: '其他',
      link: encodeURI("/question/其他")
    },
  ],
  "/interview/": [
    {
      text: "HTML",
      link: encodeURI("/interview/html")
    },
    {
      text: "CSS",
      link: encodeURI("/interview/css")
    },
    {
      text: "JS",
      link: encodeURI("/interview/js")
    },
    {
      text: "react",
      link: encodeURI("/interview/react")
    },
  ],
  "/resource/": [
    {
      text: "学习资料",
      link: encodeURI("/resource/study")
    },
    {
      text: "工具网站",
      link: encodeURI("/resource/tool")
    },
    {
      text: "博客搭建",
      link: encodeURI("/resource/blog")
    },
  ]
}
