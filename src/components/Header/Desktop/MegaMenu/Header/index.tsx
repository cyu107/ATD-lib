import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextLink from '@bit/littlebox.atd.text-link'
import Spacer from '@bit/littlebox.atd.spacer'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  header: {
    display: 'flex',
    marginBottom: '34px',
    paddingBottom: '16px',
    borderBottom: `1px solid ${colors.gray400}`,
    alignItems: 'baseline',
  },
  title: {
    margin: 0,
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '34px',
  },
})

type PropsType = {
  title: string | undefined
  url: string | undefined
  target: string | undefined
}

const Header = ({ title, url, target }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <h2 className={classes.title}>{title}</h2>
      <Spacer size={16} />
      {url && (
        <TextLink variant="standalone" href={url} target={target === 'BLANK' ? '_blank' : ''}>
          Overview
        </TextLink>
      )}
    </header>
  )
}

export default Header
