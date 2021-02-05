export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '601cf7b08bacca8d613314cd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1-studio-v816i21q',
                  apiId: 'ad0b189f-cb0c-41f8-b2b7-73ab6ff6bc69'
                },
                {
                  buildHookId: '601cf7b049428c8bac6009b0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1-web-hsf41fjy',
                  apiId: '209e75a8-adae-404d-ac58-3088d9bf582f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Boxplan/sanity-kitchen-sink1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1-web-hsf41fjy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
