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
                    "6160306f1579482315327863",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ajszcpad",
                  apiId: "9e7d1db7-3ccd-4a89-84d4-b7a1cc15ff8a",
                },
                {
                  buildHookId: "6160306f5792012bd65ae5ff",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-c85fx4xo",
                  apiId: "58870de9-b20f-4324-8d0e-94a6a75dd78d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/boemekeld/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-c85fx4xo.netlify.app",
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
