import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@bit/littlebox.atd.grid'
import TextLink from '@bit/littlebox.atd.text-link'
import Icons, { PropsType as IconsProps } from '@bit/littlebox.atd.icons'
import Lozenge from '@bit/littlebox.atd.lozenge'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '10px 0',
  },
  leftPanel: {
    display: 'flex',
    alignItems: 'center',
  },
  rightPanel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  glyphIconWrapper: {
    minWidth: '36px',
    minHeight: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: colors.ctaPrimary,
  },
  textLinkWrapper: {
    marginLeft: '10px',
  },
  textLink: {
    lineHeight: '18px',
    fontWeight: 600,
  },
})

export type PropsType = {
  /** Icon name, e.g. cart, instagram, etc */
  glyph: IconsProps['glyph']
  /** Link URL */
  href: string
  /** Link text */
  label: string
  /** Lozenge count text */
  count: number
}

const IconCTA = ({ glyph, href, label, count }: PropsType): ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid className={classes.leftPanel} item xs={8}>
          <div className={classes.glyphIconWrapper}>
            <Icons glyph={glyph} color={colors.white} size={20} />
          </div>
          <div className={classes.textLinkWrapper}>
            <TextLink className={classes.textLink} href={href} size="large" variant="secondary">
              {label}
            </TextLink>
          </div>
        </Grid>
        <Grid className={classes.rightPanel} item xs={4}>
          <Lozenge color="default" size="normal">
            {count.toString()}
          </Lozenge>
          <Icons glyph="caret-right-small" color={colors.ctaPrimary} />
        </Grid>
      </Grid>
    </div>
  )
}

export default IconCTA
