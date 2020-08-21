export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4045a63431b900947f5622',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5s9egxp2',
                  apiId: '56bafb0a-6d3e-4650-9648-e2403089afa6'
                },
                {
                  buildHookId: '5f4045a63a524700bdfcf0dd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jj8oa6wn',
                  apiId: '2c2489b2-6e0b-4f59-b66f-a8497fb132e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/halmanza/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jj8oa6wn.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
