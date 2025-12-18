/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Español',
      items: [
        'es/intro',
        'es/overview',
        {
          type: 'category',
          label: 'Arquitectura',
          items: [
            'es/arquitectura/monorepo',
            'es/arquitectura/estructura-carpetas',
          ],
        },
        {
          type: 'category',
          label: 'Aplicaciones',
          items: [
            'es/apps/posicionamiento',
            'es/apps/segmentor',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'English',
      items: [
        'en/intro',
        'en/overview',
        {
          type: 'category',
          label: 'Architecture',
          items: [
            'en/architecture/monorepo',
            'en/architecture/folder-structure',
          ],
        },
        {
          type: 'category',
          label: 'Applications',
          items: [
            'en/apps/posicionamiento',
            'en/apps/segmentor',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
