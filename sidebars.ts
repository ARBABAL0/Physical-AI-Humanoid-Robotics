import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'chapter-1-physical-ai',
        'chapter-2-core-components',
        'chapter-3-sensors-actuators',
        'chapter-4-ai-brain',
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      items: [
        'chapter-5-future-usecases',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'references',
        'glossary',
      ],
    },
  ],
};

export default sidebars;

