import React, { ReactNode, ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MuiBox from '@material-ui/core/Box'
import MuiPaper from '@material-ui/core/Paper'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    '& ~ .MuiBox-root': {
      marginTop: '24px',
    },
  },
  topBorder: ({ topBorderWidth = 0 }: Pick<PropsType, 'topBorderWidth'>) => ({
    width: '100%',
    height: `${topBorderWidth}px`,
    background: `linear-gradient(90deg, ${colors.brandYellow} 0%, ${colors.brandOrange} 52.98%, ${colors.brandRed} 98.75%)`,
  }),
  navLink: {
    marginLeft: '24px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    margin: '-24px -24px 24px',
    padding: '24px',
    borderBottom: `1px solid ${colors.gray400}`,
  },
  title: {
    margin: 0,
    paddingRight: '15px',
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: 600,
    color: colors.black,
  },
  subtitle: {
    margin: '0.5em 0 0',
    fontSize: '16px',
    lineHeight: '22px',
    color: colors.textActive,
    '&:first-child:last-child': {
      margin: 0,
    },
  },
  body: {
    padding: '24px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '24px',
    borderTop: `1px solid ${colors.gray400}`,
  },
  /**
   * variants
   */
  subModuleVariant: {
    borderRadius: '4px',
    backgroundColor: `${colors.gray400}`,
    '& $header': {
      margin: '-24px -24px 0px',
      borderBottom: 'none',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    '& $title': {
      fontSize: '20px',
    },
    '& $body': {
      border: `1px solid ${colors.gray400}`,
      borderRadius: '4px',
      backgroundColor: colors.white,
    },
    '& $footer': {
      padding: '20px 24px',
      borderRadius: '4px',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
      borderTop: 'none',
      backgroundColor: colors.gray200,
    },
  },
  transparentVariant: {
    background: 'none',
    boxShadow: 'none',
    padding: 0,
    margin: 0,
    border: 'none',
    '& $header': {
      border: 'none',
      padding: 0,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      justifyContent: 'space-between',
    },
    '& $body': {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      background: 'none',
      border: 'none',
    },
    '& $footer': {
      border: 'none',
    },
  },
  simpleVariant: {
    padding: 0,
    margin: 0,
    '& $header': {
      border: 'none',
      padding: 0,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      justifyContent: 'space-between',
    },
    '& $body': {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      background: 'none',
      border: 'none',
    },
    '& $footer': {
      border: 'none',
    },
  },
})

type PropsType = {
  /** React Node */
  children?: ReactNode
  /** ClassName */
  className?: string
  /** Header config */
  header?: {
    title?: string | ReactNode
    subtitle?: string | ReactNode
    actions?: ReactNode
    actionsAlignment?: 'left' | 'right'
  }
  /** Background color */
  bgColor?: string
  /** Footer component */
  footer?: ReactNode
  /** Top border width */
  topBorderWidth?: number
  /** One of the following: 'default' | 'subModule' | 'transparent' | 'simple */
  variant?: 'default' | 'subModule' | 'transparent' | 'simple'
}

const Box = ({
  header,
  footer,
  children,
  className,
  topBorderWidth,
  variant,
}: PropsType): ReactElement => {
  const classes = useStyles({ topBorderWidth })
  return (
    <MuiBox
      component={MuiPaper}
      className={clsx({
        [classes.root]: true,
        [classes.subModuleVariant]: variant === 'subModule',
        [classes.transparentVariant]: variant === 'transparent',
        [classes.simpleVariant]: variant === 'simple',
        [classes.simpleVariant]: variant === 'simple',
        [className || '']: className,
      })}
    >
      <div className={classes.topBorder} />
      <div className={classes.body}>
        {header && (
          <header className={classes.header}>
            <div>
              {header.title && (
                <Typography variant="h4" className={classes.title}>
                  {header.title}
                </Typography>
              )}
              {header.subtitle && (
                <Typography variant="h5" className={classes.subtitle}>
                  {header.subtitle}
                </Typography>
              )}
            </div>
            {header.actions}
          </header>
        )}
        {children}
      </div>
      {footer && <footer className={classes.footer}>{footer}</footer>}
    </MuiBox>
  )
}
Box.defaultProps = {
  bgColor: colors.white,
  variant: 'default',
  topBorderWidth: 0,
}
export default Box
