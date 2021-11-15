const path = require('path')

module.exports = {
  title: 'ATD Styleguide',
  // usageMode: 'expand',
  ignore: [
    '**/components/Icons/getIcons.ts',
    '**/components/Icons/svg/*',
    '**/components/Theme/*',
    '**/components/Card/Parts/**/*',
    '**/components/Carousel/Arrow/**/*',
    '**/components/ContextMenu/context.tsx',
    '**/components/Header/context.tsx',
    '**/components/Header/types.ts',
    '**/components/Header/Desktop/**/*',
    '**/components/Header/Mobile/**/*',
    '**/components/Footer/DesktopLinks/**/*',
    '**/components/Footer/MobileLinks/**/*',
  ],
  styles: function (theme) {
    return {
      Table: {
        cell: {
          paddingBottom: 0,
          '& p': {
            marginBottom: `0.125em !important`,
          },
          '& div[class*="para"]': {
            marginBottom: `0.125em !important`,
          },
        },
      },
    }
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguidist/StyleguidistMuiWrapper'),
  },
  sections: [
    {
      sections: [
        {
          name: 'Theme',
          components: [
            'src/components/Theme/index.ts',
            'src/components/ColorDeck/index.tsx',
            'src/components/Grid/index.tsx',
            'src/components/Spacer/index.tsx',
          ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'UI Parts',
          components: [
            'src/components/PageTitle/index.tsx',
            'src/components/Lozenge/index.tsx',
            'src/components/Icons/index.tsx',
            'src/components/Divider/index.tsx',
            'src/components/Avatar/index.tsx',
            'src/components/Thumbnail/index.tsx',
            'src/components/Banner/index.tsx',
            'src/components/Stat/index.tsx',
            'src/components/Stats/index.tsx',
          ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'CTAs',
          components: [
            'src/components/TextLink/index.tsx',
            'src/components/Button/index.tsx',
            'src/components/ButtonDropdown/index.tsx',
            'src/components/ButtonFilter/index.tsx',
            'src/components/ButtonNav/index.tsx',
            'src/components/Checklist/index.tsx',
            'src/components/ProgressBar/index.tsx',
            'src/components/Tag/index.tsx',
            'src/components/HeaderNavLink/index.tsx',
            'src/components/HeaderLink/index.tsx',
            'src/components/CTA/IconCTA/index.tsx',
            'src/components/CTA/IconCTAList/index.tsx',
          ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Form',
          components: [
            'src/components/InputHelperText/index.tsx',
            'src/components/InputHelperText/index.tsx',
            'src/components/InputLabel/index.tsx',
            'src/components/InputPassword/index.tsx',
            'src/components/InputText/index.tsx',
            'src/components/InputTextArea/index.tsx',
            'src/components/InputTinyMCE/index.tsx',
            'src/components/InputWrapper/index.tsx',
          ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Content Containers',
          components: [
            'src/components/Box/index.tsx',
            'src/components/Card/index.tsx',
            'src/components/UserAvatarCard/index.tsx',
            'src/components/Table/index.tsx',
            'src/components/Accordion/index.tsx',
          ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Navigation',
          components: [
            'src/components/ContextMenu/index.tsx',
            'src/components/SectionMenu/index.tsx',
            'src/components/Pagination/index.tsx',
          ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },

        {
          name: 'Utility',
          components: [
            'src/components/Loaders/SuspenseLoader.tsx',
            'src/components/Modal/index.tsx',
            'src/components/Snackbar/index.tsx',
          ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Composed Sections',
          components: ['src/components/Header/index.tsx', 'src/components/Footer/index.tsx'],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Carousel',
          components: ['src/components/Carousel/index.tsx'],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
      ],
    },
  ],
}
