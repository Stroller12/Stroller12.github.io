export default {
    title: 'stroller', //站点标题
    description: '彭某人的个人博客',//mate标签description，多用于搜索引擎抓取摘要
    themeConfig: {
        siteTitle: "stroller",
        logo: "/头像.jpg",
        nav: [
            { text: "博客", link: "/articles/大文件上传" },
            { text: "github", link: "https://github.com/Stroller12" },
          ],
          sidebar: {
            "/articles/": [
              {
                text: "博客文档",
           /*      collapsible: true,
                collapsed:true, */
                items: [
                  {
                    text: "大文件上传",
                    link: "/articles/大文件上传",
                  },
                  { text: "面试题总结", link: "/articles/面试题总结" },
                ],
              },
            ],
          },
      },

  }