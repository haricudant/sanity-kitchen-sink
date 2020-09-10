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
                  buildHookId: '5f5a23536492ce20f4165e8b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9d7br2e4',
                  apiId: '76d327ff-04f5-4878-b164-354bff35a948'
                },
                {
                  buildHookId: '5f5a235468744d1b233c05fa',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-udajn957',
                  apiId: '523051d6-572f-4842-aec1-b9df40d6cc44'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/haricudant/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-udajn957.netlify.app', category: 'apps'}
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
