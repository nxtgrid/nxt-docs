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
      items: ['repositories/nxt-backend'],
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
