import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@bit/littlebox.atd.grid'
import Lozenge from '@bit/littlebox.atd.lozenge'
import Icon from '@bit/littlebox.atd.icons'
import Button from '@bit/littlebox.atd.button'
import colors from '@bit/littlebox.atd.colors'
import { PropsType as CardProps } from '../..'

const useStyles = makeStyles({
  footer: {
    margin: '1em -16px -16px',
    padding: '16px',
  },
  footerBtn: {
    marginTop: '1em',
    textAlign: 'center',
  },
  footerBar: {
    margin: '0 -16px -16px',
    padding: '16px',
    backgroundColor: colors.gray200,
  },
  footerContentType: {
    display: 'inline-block',
    marginRight: '4px',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '12px',
    textTransform: 'uppercase',
  },
  footerResponses: {
    marginTop: '8px',
    textAlign: 'right',
  },
  footerRedemption: {},
  horizontal: {
    marginTop: 0,
    '& $footerBtn': {
      marginTop: 0,
      textAlign: 'right',
    },
    '& $footerRedemption': {
      display: 'inline-block',
      '&:not(:last-child)': {
        marginRight: '8px',
        marginBottom: 0,
      },
    },
  },
})

type PropsType = {
  footer?: CardProps['footer']
  baseTextStyle?: string
  className?: string
  horizontal?: boolean
}

const FooterBar = ({
  horizontal,
  footer,
  baseTextStyle,
  className,
}: PropsType): ReactElement | null => {
  const classes = useStyles()
  if (!footer) {
    return null
  }

  return (
    <footer
      className={clsx({
        [classes.footer]: true,
        [classes.horizontal]: horizontal,
        [className || '']: className,
      })}
    >
      {footer.button && (
        <div className={classes.footerBtn}>
          <Button variant="secondary" size="small" href={footer.button.href}>
            {footer.button.text}
          </Button>
        </div>
      )}
      {footer.responses && (
        <div className={clsx(baseTextStyle, classes.footerResponses)}>{footer.responses}</div>
      )}
      {footer.redemptionDate && !horizontal && (
        <div className={clsx(baseTextStyle, classes.footerRedemption)}>{footer.redemptionDate}</div>
      )}
      <div className={classes.footerBar}>
        <Grid container justify="space-between">
          <Grid item>
            <span className={classes.footerContentType}>{footer.contentType}</span>
            {footer.tag && (
              <Lozenge variant={footer.tag.variant} size="small" color={footer.tag.color}>
                {footer.tag.text}
              </Lozenge>
            )}
          </Grid>
          <Grid item>
            {footer.redemptionDate && horizontal && (
              <div className={clsx(baseTextStyle, classes.footerRedemption)}>
                {footer.redemptionDate}
              </div>
            )}
            {!footer.bookmarked && <Icon glyph="bookmark" size={16} color={colors.ctaPrimary} />}
            {footer.bookmarked && (
              <Icon glyph="bookmark-fill" size={16} color={colors.ctaPrimary} />
            )}
          </Grid>
        </Grid>
      </div>
    </footer>
  )
}

export default FooterBar
