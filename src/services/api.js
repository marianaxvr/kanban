export function loadLists() {
  return [
    { 
      title: 'Solicitar', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Tarefa 01',
          labels: ['#ff4500'],
          user: 'https://scontent.fdiq1-1.fna.fbcdn.net/v/t1.0-9/151546101_105030471632188_86720107934144629_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=GYa3_tQ4za4AX9AgPIl&_nc_ht=scontent.fdiq1-1.fna&oh=1927d96502c1fe04eca3baeb6843f0c1&oe=6053D1ED'
        },
        {
          id: 2,
          content: 'Tarefa 02',
          labels: ['#adff2f'],
          user: 'https://scontent.fdiq1-1.fna.fbcdn.net/v/t1.0-9/151546101_105030471632188_86720107934144629_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=GYa3_tQ4za4AX9AgPIl&_nc_ht=scontent.fdiq1-1.fna&oh=1927d96502c1fe04eca3baeb6843f0c1&oe=6053D1ED'
        },
        {
          id: 3,
          content: 'Tarefa 03',
          labels: ['#0aecec'],
          user: 'https://scontent.fdiq1-1.fna.fbcdn.net/v/t1.0-9/151546101_105030471632188_86720107934144629_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=GYa3_tQ4za4AX9AgPIl&_nc_ht=scontent.fdiq1-1.fna&oh=1927d96502c1fe04eca3baeb6843f0c1&oe=6053D1ED'
        },
      ]
    },
    { 
      title: 'Programar', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Tarefa 01',
          labels: [],
          user: 'https://scontent.fdiq1-1.fna.fbcdn.net/v/t1.0-9/152061862_105039164964652_3203536452661355568_o.jpg?_nc_cat=105&ccb=3&_nc_sid=730e14&_nc_ohc=cV9zUfbP0FYAX-bRuED&_nc_ht=scontent.fdiq1-1.fna&oh=793c2fc8c23aa2c17f69c7ffedb52397&oe=60554C78'
        }
      ]
    },
    { 
      title: 'Executar', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Tarefa 01',
          labels: ['#0aecec'],
          user: 'https://scontent.fdiq1-1.fna.fbcdn.net/v/t1.0-9/152061862_105039164964652_3203536452661355568_o.jpg?_nc_cat=105&ccb=3&_nc_sid=730e14&_nc_ohc=cV9zUfbP0FYAX-bRuED&_nc_ht=scontent.fdiq1-1.fna&oh=793c2fc8c23aa2c17f69c7ffedb52397&oe=60554C78'
        },
        {
          id: 8,
          content: 'Tarefa 02',
          labels: ['#0aecec'],
          user: 'https://scontent.fdiq1-1.fna.fbcdn.net/v/t1.0-9/152034976_105040508297851_3570651033705696116_o.jpg?_nc_cat=107&ccb=3&_nc_sid=730e14&_nc_ohc=oaxkGq2C460AX9pAtmY&_nc_ht=scontent.fdiq1-1.fna&oh=78f43f38d5747301d278c46c3711a183&oe=60534E27'
        },
        {
          id: 9,
          content: 'Outras tarefas',
          labels: [],
        }
      ]
    },
    { 
      title: 'Auditar', 
      creatable: false,
      cards: [
        {
          id: 10,
          content: 'Tarefa 01',
          labels: ['#0aecec'],
          user: 'https://scontent.fdiq1-1.fna.fbcdn.net/v/t1.0-9/151546101_105030471632188_86720107934144629_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=GYa3_tQ4za4AX9AgPIl&_nc_ht=scontent.fdiq1-1.fna&oh=1927d96502c1fe04eca3baeb6843f0c1&oe=6053D1ED'
        },
        {
          id: 11,
          content: 'Tarefa 02',
          labels: ['#0aecec'],
          user: 'https://scontent.fdiq1-1.fna.fbcdn.net/v/t1.0-9/151546101_105030471632188_86720107934144629_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=GYa3_tQ4za4AX9AgPIl&_nc_ht=scontent.fdiq1-1.fna&oh=1927d96502c1fe04eca3baeb6843f0c1&oe=6053D1ED'
        },
        {
          id: 12,
          content: 'Tarefa 03',
          labels: ['#ff4500'],
          user: 'https://scontent.fdiq1-1.fna.fbcdn.net/v/t1.0-9/151546101_105030471632188_86720107934144629_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=GYa3_tQ4za4AX9AgPIl&_nc_ht=scontent.fdiq1-1.fna&oh=1927d96502c1fe04eca3baeb6843f0c1&oe=6053D1ED'
        },
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 13,
          content: 'Tarefa 01',
          labels: [],
        },
        {
          id: 14,
          content: 'Tarefa 02',
          labels: ['#0aecec'],
        },
      ]
    },
  ];
}