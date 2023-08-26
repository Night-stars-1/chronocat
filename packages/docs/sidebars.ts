import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  guide: [
    {
      type: 'category',
      label: '安装',
      link: {
        type: 'doc',
        id: 'install/index',
      },
      items: [
        'install/llqqnt',
        'install/llqqnt-airgap',
        'install/qqntim',
        'install/qqntim-airgap',
        'install/launcher',
      ],
    },
    {
      type: 'category',
      label: '接入',
      link: {
        type: 'doc',
        id: 'connect/index',
      },
      items: ['connect/koishi'],
    },
  ],
  developJavaScript: [
    {
      type: 'autogenerated',
      dirName: 'develop/js',
    },
  ],
  developProtocol: [
    {
      type: 'autogenerated',
      dirName: 'develop/protocol',
    },
  ],
  community: [
    {
      type: 'autogenerated',
      dirName: 'community',
    },
  ],
}

export = sidebars
