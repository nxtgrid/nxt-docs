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
            'repositories/nxt-backend/api',
            'repositories/nxt-backend/worker',
            'repositories/nxt-backend/shared-libs',
            'repositories/nxt-backend/data-layer',
            {
              type: 'category',
              label: 'Legacy stack',
              items: [
                'repositories/nxt-backend/tiamat',
                'repositories/nxt-backend/talos',
                'repositories/nxt-backend/loch',
                'repositories/nxt-backend/yeti',
                'repositories/nxt-backend/diagrams',
              ],
            },
          ],
        },
        'repositories/nxt-control-room',
        'repositories/nxt-crm',
        {
          type: 'category',
          label: 'nxt-device-messaging',
          link: {
            type: 'doc',
            id: 'repositories/nxt-device-messaging',
          },
          items: ['repositories/nxt-device-messaging/digital-ocean'],
        },
        'repositories/nxt-field-ops',
        'repositories/nxt-gis',
        {
          type: 'category',
          label: 'nxt-sts',
          link: {
            type: 'doc',
            id: 'repositories/nxt-sts',
          },
          items: ['repositories/nxt-sts/digital-ocean'],
        },
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
