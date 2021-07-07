export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60e5220d9fa39248a7770405",
                  title: "Sanity Studio",
                  name: "financial-blog-studio",
                  apiId: "68422dd9-4fb9-4836-8be2-bf57d2ffbf07",
                },
                {
                  buildHookId: "60e5220d1604564a43639757",
                  title: "Blog Website",
                  name: "financial-blog",
                  apiId: "f0f888ed-3328-4abf-9052-e17a38d3eb83",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Jared-James/financial-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://financial-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
