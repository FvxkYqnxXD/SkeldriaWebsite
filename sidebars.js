// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Wiki',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'intro', // Debe existir en docs/intro.md
          label: 'Introducción',
        },
      ],
    },
  ],
};

export default sidebars;
