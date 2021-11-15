import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Icons from '@bit/littlebox.atd.icons'
import Grid from '@bit/littlebox.atd.grid'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  childWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '8px',
    '&:first-child': {
      marginTop: 0,
    },
  },
  glyph: {
    visibility: 'hidden',
  },
  visibleGlyph: {
    visibility: 'visible',
  },
  label: {
    margin: '0 0 0 8px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '17px',
  },
})

type PropsType = {
  /** ClassName */
  className?: string
  /** Array of check list details */
  list: {
    label?: string
    checked?: boolean
  }[]
}

const Checklist = ({ className, list }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <Grid
      className={clsx({
        [classes.root]: true,
        [className || '']: className,
      })}
      container
    >
      {list.map(({ label, checked }, index) => (
        <Grid className={classes.childWrapper} key={index} xs={12} item>
          <Icons
            className={clsx({
              [classes.glyph]: true,
              [classes.visibleGlyph]: checked,
            })}
            glyph="alert"
            size={16}
            color={colors.ctaPrimary}
          />
          <p className={classes.label}>{label}</p>
        </Grid>
      ))}
    </Grid>
  )
}

Checklist.defaultProps = {
  list: [],
}

export default Checklist
