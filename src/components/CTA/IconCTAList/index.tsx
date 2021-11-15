import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@bit/littlebox.atd.grid'
import Divider from '@bit/littlebox.atd.divider'
import colors from '@bit/littlebox.atd.colors'
import IconCTA, { PropsType as IconCTAProps } from '@bit/littlebox.atd.icon-cta'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  ctaWrapper: {
    width: '100%',
  },
})

type PropsType = {
  ctaList: IconCTAProps[]
}

const IconCTAList = ({ ctaList }: PropsType): ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {ctaList.map((cta, index) => (
        <Grid className={classes.ctaWrapper} key={index}>
          {index > 0 && <Divider width="100%" height="1px" color={colors.gray300} />}
          <IconCTA key={index} {...cta} />
        </Grid>
      ))}
    </div>
  )
}

IconCTAList.defaultProps = {
  ctaList: [],
}

export default IconCTAList
