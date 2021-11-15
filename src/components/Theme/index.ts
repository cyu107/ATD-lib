import { createMuiTheme } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'

import WhitneyBookTtf from './fonts/whitneyhtf-book-webfont.ttf'
import WhitneyBookWoff from './fonts/whitneyhtf-book-webfont.woff'
import WhitneyBookWoff2 from './fonts/whitneyhtf-book-webfont.woff2'

import WhitneyMediumTtf from './fonts/whitneyhtf-medium-webfont.ttf'
import WhitneyMediumWoff from './fonts/whitneyhtf-medium-webfont.woff'
import WhitneyMediumWoff2 from './fonts/whitneyhtf-medium-webfont.woff2'

import WhitneySemiboldTtf from './fonts/whitneyhtf-semibold-webfont.ttf'
import WhitneySemiboldWoff from './fonts/whitneyhtf-semibold-webfont.woff'
import WhitneySemiboldWoff2 from './fonts/whitneyhtf-semibold-webfont.woff2'

const whitney = {
  fontFamily: 'Whitney',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    url(${WhitneyBookWoff2}) format('woff2'),
    url(${WhitneyBookWoff}) format('woff'),
    url(${WhitneyBookTtf}) format('ttf')
  `,
}

const whitneyMedium = {
  fontFamily: 'Whitney',
  fontStyle: 'normal',
  fontWeight: 500,
  src: `
    url(${WhitneyMediumWoff2}) format('woff2'),
    url(${WhitneyMediumWoff}) format('woff'),
    url(${WhitneyMediumTtf}) format('ttf')
  `,
}

const whitneySemibold = {
  fontFamily: 'Whitney',
  fontStyle: 'normal',
  fontWeight: 600,
  src: `
    url(${WhitneySemiboldWoff2}) format('woff2'),
    url(${WhitneySemiboldWoff}) format('woff'),
    url(${WhitneySemiboldTtf}) format('ttf')
  `,
}

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Whitney, Arial',
  },
  palette: {
    text: {
      primary: colors.ctaSecondary,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [whitney, whitneyMedium, whitneySemibold],
      },
    },
    MuiTableCell: {
      root: {
        padding: '28px 24px 24px',
      },
      head: {
        padding: '15px 24px',
        textTransform: 'uppercase',
        fontWeight: 600,
      },
    },
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: colors.inputBorder,
          transition: 'border-color 0.3s ease',
        },
        '&:hover $notchedOutline': {
          borderColor: colors.textActive,
        },
        '&$focused $notchedOutline': {
          borderColor: colors.textActive,
          borderWidth: '1px',
        },
        '& legend': {
          maxWidth: 0,
        },
      },
      multiline: {
        padding: '12.5px 16px',
      },
      input: {
        padding: '12.5px 16px',
        color: colors.textActive,
      },
    },
    MuiSelect: {
      root: {
        '&$disabled ~ .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.inputBorderDisabled,
        },
      },
      select: {
        '&$disabled': {
          backgroundColor: colors.inputBorderDisabled,
        },
      },
    },
    MuiInputLabel: {
      outlined: {
        color: colors.textPlaceholder,
        top: '50%',
        transform: 'translate(16px, -50%)',
        '&$shrink': {
          opacity: 0,
          transform: 'translate(16px, -50%)',
        },
        '&$focused': {
          opacity: 0,
          transform: 'translate(16px, -50%)',
        },
      },
    },
    MuiCheckbox: {
      root: {
        color: colors.ctaPrimary,
      },
      checked: {},
      disabled: {
        backgroundColor: 'rgb(235, 235, 235)',
        color: 'rgb(179, 179, 179)',
      },
      indeterminate: {},
      colorSecondary: {
        '&$checked': {
          color: colors.ctaPrimary,
        },
      },
    },
    MuiRadio: {
      root: {
        color: colors.ctaPrimary,
      },
      checked: {},
      disabled: {
        backgroundColor: 'rgb(235, 235, 235)',
        color: 'rgb(179, 179, 179)',
      },
      colorSecondary: {
        '&$checked': {
          color: colors.ctaPrimary,
        },
      },
    },
    MuiTabs: {
      indicator: {
        height: '4px',
        backgroundColor: colors.ctaPrimary,
      },
    },
    MuiTab: {
      root: {
        padding: '8px 16px',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '20px',
        textTransform: 'none',
      },
      wrapper: {
        paddingBottom: '10px',
      },
      textColorInherit: {
        minWidth: '0',
        marginRight: '8px',
        color: colors.ctaSecondary,
        opacity: 1,
        '&$selected': {
          fontWeight: 600,
          color: colors.ctaPrimary,
        },
      },
    },
  },
})

export default theme
