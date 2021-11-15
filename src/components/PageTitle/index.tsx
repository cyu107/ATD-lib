import React, { ReactNode, ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  wrap: {
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: `3px solid ${colors.gray400}`,
  },
  smallMargin: {
    marginBottom: '24px',
  },
  title: {
    margin: 0,
    lineHeight: '44px',
    fontSize: '32px',
    fontWeight: 600,
    color: colors.black,
  },
  subtitle: {
    marginTop: '8px',
    fontSize: '22px',
    lineHeight: '30px',
    color: colors.textActive,
  },
})

type PropsType = {
  children: string | ReactElement | ReactElement[]
  subtitle?: string | ReactNode
  smallMargin?: boolean
  className?: string
}

const PageTitle = ({ children, subtitle, smallMargin, className }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <div
      className={clsx(
        classes.wrap,
        { [className || '']: className },
        { [classes.smallMargin]: smallMargin },
      )}
    >
      <Typography variant="h1" className={classes.title}>
        {children}
      </Typography>
      {subtitle && (
        <Typography variant="h2" className={classes.subtitle}>
          {subtitle}
        </Typography>
      )}
    </div>
  )
}

export default PageTitle
