import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '18px',
    color: colors.textActive,
    marginTop: 0,
    marginBottom: '14px',
    '& b': {
      fontWeight: 'bold',
    },
  },
  track: {
    width: '100%',
    height: '4px',
    background: colors.gray200,
    position: 'relative',
  },
  thumb: ({ total = 100, count = 0 }: Pick<PropsType, 'total' | 'count'>) => ({
    display: 'block',
    width: `${(count * 100) / total}%`,
    height: '100%',
    background: `linear-gradient(90deg, ${colors.brandYellow} 0%, ${colors.brandOrange} 52.98%, ${colors.brandRed} 98.75%)`,
    transition: 'all 0.3s ease-out',
  }),
})

type PropsType = {
  /** ClassName */
  className?: string
  /** Filled length */
  count?: number
  /** Total length */
  total?: number
  /** Item label text */
  label?: string
  /** Show label */
  showLabel?: boolean
}

const ProgressBar = ({ className, count, total, label, showLabel }: PropsType): ReactElement => {
  const classes = useStyles({ total, count })
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [className || '']: className,
      })}
    >
      {showLabel && (
        <p className={classes.label}>
          <b>{count}</b> of <b>{total}</b> {label}
        </p>
      )}
      <div className={classes.track}>
        <span className={classes.thumb} />
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  total: 100,
  count: 0,
  showLabel: true,
}

export default ProgressBar
