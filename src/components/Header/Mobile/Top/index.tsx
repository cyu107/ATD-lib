import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@bit/littlebox.atd.grid'
import Icon from '@bit/littlebox.atd.icons'
import colors from '@bit/littlebox.atd.colors'
import Spacer from '@bit/littlebox.atd.spacer'
import Container from '@bit/littlebox.atd.container'
import atdLogo from '../../assets/logo-small.svg'

const useStyles = makeStyles({
  wrap: {
    position: 'relative',
    color: colors.ctaSecondary,
    transition: 'all 0.3s ease',
  },
  top: {
    paddingTop: '23px',
    paddingBottom: '23px',
    '& img': {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: 'auto',
      maxHeight: '28px',
    },
  },
  border: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: `linear-gradient(90deg, ${colors.brandYellow} 0%, ${colors.brandOrange} 52.98%, ${colors.brandRed} 98.75%)`,
  },
  offcanvas: {
    opacity: 0,
    visibility: 'hidden',
  },
})

type PropsType = {
  children?: ReactElement | ReactElement[]
  showOffcanvas?: boolean
  insideOffcanvas?: boolean
  onHamburgerClick: () => void
}

const Top = ({
  insideOffcanvas,
  showOffcanvas,
  onHamburgerClick,
  children,
}: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <div
      className={clsx({
        [classes.wrap]: true,
        [classes.offcanvas]: showOffcanvas,
      })}
    >
      <Container>
        <Grid container justify="space-between" alignItems="center" className={classes.top}>
          <Grid item>
            <img src={atdLogo} alt="ATD" />
          </Grid>
          <Grid item>
            <Icon glyph="cart" size={24} />
            <Spacer size={20} noHeight />
            <Icon glyph="account" size={24} />
            <Spacer size={20} noHeight />
            <span onClick={onHamburgerClick}>
              {insideOffcanvas && <Icon glyph="close" size={24} color={colors.ctaPrimary} />}
              {!insideOffcanvas && <Icon glyph="hamburger-nav" size={24} />}
            </span>
          </Grid>
        </Grid>
        <span className={classes.border} />
        <React.Fragment>{children}</React.Fragment>
      </Container>
    </div>
  )
}

export default Top
