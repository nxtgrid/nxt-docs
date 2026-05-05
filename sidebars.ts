import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Repositories',
      link: {
        type: 'doc',
        id: 'repositories/index',
      },
      items: [
        {
          type: 'category',
          label: 'nxt-backend',
          link: {
            type: 'doc',
            id: 'repositories/nxt-backend',
          },
          items: [
            'repositories/nxt-backend/tiamat',
            'repositories/nxt-backend/talos',
            'repositories/nxt-backend/loch',
            'repositories/nxt-backend/yeti',
            'repositories/nxt-backend/shared-libs',
            'repositories/nxt-backend/data-layer',
          ],
        },
      ],
    },
    'contributing',
    {
      type: 'category',
      label: 'Templates',
      items: ['templates/repository-template'],
    },
  ],
};

export default sidebars;
