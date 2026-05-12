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
        'repositories/nxt-ai-assistant',
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
            'repositories/nxt-backend/diagrams',
          ],
        },
        'repositories/nxt-control-room',
        'repositories/nxt-crm',
        'repositories/nxt-field-ops',
        'repositories/nxt-gis',
        'repositories/nxt-sts',
        'repositories/nxt-topup',
        'repositories/nxt-ui-components',
        'repositories/lorawan-cert-renewer',
        'repositories/lorawan-cups-server',
      ],
    },
    'authors',
    'contributing',
    {
      type: 'category',
      label: 'Documentation Toolkit',
      items: [
        'templates/repository-template',
        'templates/monorepo-doc-checklist',
        'templates/single-repo-doc-checklist',
        'ops/doc-sync-workflow',
      ],
    },
  ],
};

export default sidebars;
