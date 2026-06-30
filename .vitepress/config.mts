import { defineConfig } from 'vitepress'

const FIGMA_BASE = 'https://www.figma.com/design/K1wVYyJIGwPKzPbBYmdffz'

export default defineConfig({
  title: 'QuadX HRIS Design System',
  description: 'UI foundations, components, and patterns for the QuadX HRIS application',
  base: '/',

  themeConfig: {
    nav: [
      { text: 'Foundations', link: '/foundations/' },
      { text: 'Components', link: '/components/' },
      { text: 'Patterns', link: '/patterns/' },
      { text: 'Resources', link: '/resources/traceability' },
      { text: 'Figma ↗', link: FIGMA_BASE },
    ],

    sidebar: [
      {
        text: 'Foundations',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/foundations/' },
          { text: 'Colors', link: '/foundations/colors' },
          { text: 'Typography', link: '/foundations/typography' },
          { text: 'Spacing', link: '/foundations/spacing' },
          { text: 'Radius', link: '/foundations/radius' },
          { text: 'Shadows', link: '/foundations/shadows' },
        ],
      },
      {
        text: 'Components — Shared (@xhr/ui)',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/components/' },
          { text: 'Banner', link: '/components/Banner' },
          { text: 'Button', link: '/components/Button' },
          { text: 'Card', link: '/components/Card' },
          { text: 'Chip', link: '/components/Chip' },
          { text: 'DataTable', link: '/components/DataTable' },
          { text: 'FormField', link: '/components/FormField' },
          { text: 'Input', link: '/components/Input' },
          { text: 'ListRow', link: '/components/ListRow' },
          { text: 'Modal', link: '/components/Modal' },
          { text: 'PageHeader', link: '/components/PageHeader' },
          { text: 'Select', link: '/components/Select' },
          { text: 'StatTile', link: '/components/StatTile' },
          { text: 'Textarea', link: '/components/Textarea' },
        ],
      },
      {
        text: 'Components — Custom',
        collapsed: false,
        items: [
          { text: 'AppShell', link: '/components/AppShell' },
          { text: 'ClockCard', link: '/components/ClockCard' },
          { text: 'CorrectionModal', link: '/components/CorrectionModal' },
          { text: 'EmpPhoto', link: '/components/EmpPhoto' },
          { text: 'LeaveModal', link: '/components/LeaveModal' },
        ],
      },
      {
        text: 'Patterns',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/patterns/' },
          { text: 'ApprovalsInbox', link: '/patterns/ApprovalsInbox' },
          { text: 'FilteredTable', link: '/patterns/FilteredTable' },
          { text: 'FormModal', link: '/patterns/FormModal' },
          { text: 'OrgChart', link: '/patterns/OrgChart' },
          { text: 'RtoCard', link: '/patterns/RtoCard' },
          { text: 'WeekGrid', link: '/patterns/WeekGrid' },
        ],
      },
      {
        text: 'Resources',
        collapsed: false,
        items: [
          { text: 'Traceability', link: '/resources/traceability' },
          { text: 'Changelog', link: '/resources/changelog' },
          { text: 'Contributing', link: '/resources/contributing' },
        ],
      },
    ],

    editLink: {
      pattern: ({ filePath }) =>
        `https://github.com/quadx/hris-design-system/edit/main/design-system/${filePath}`,
      text: 'Edit this page',
    },

    footer: {
      message: 'QuadX HRIS Design System',
      copyright: 'Internal documentation — not for public distribution',
    },

    search: {
      provider: 'local',
    },
  },
})
