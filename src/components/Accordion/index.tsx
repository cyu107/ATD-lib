import React, { ReactNode, ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'
import Icon from '@bit/littlebox.atd.icons'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'

const useStyles = makeStyles({
  root: {},
  accordion: {
    borderTop: `2px solid ${colors.gray400}`,
    borderBottom: `2px solid ${colors.gray400}`,
    border: 0,
    boxShadow: 'none',
    background: 'transparent',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  header: {
    background: 'transparent',
    borderBottom: 0,
    marginBottom: 0,
    minHeight: 52,
    '& .MuiAccordionSummary-content': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 'auto',
      '& .icon--caret-down': {
        transition: 'transform 0.3s ease',
        flexShrink: 0,
      },
    },
    '&$expanded': {
      minHeight: 52,
      '& .MuiAccordionSummary-content .icon--caret-down': {
        transform: 'rotateZ(-180deg)',
      },
    },
  },
  title: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '18px',
  },
  content: {
    paddingTop: 0,
  },
  expanded: {},
})

type PropsType = {
  /** className */
  className?: string
  /** Icon size */
  iconSize?: number
  /** Array panel data */
  panels: {
    title: string | ReactNode
    content: ReactNode
  }[]
}

const Accordion = ({ className, panels, iconSize }: PropsType): ReactElement => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<string | false>()

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<unknown>,
    newExpanded: boolean,
  ) => {
    setExpanded(newExpanded ? panel : false)
  }

  const blocks = panels.map((panel, idx) => (
    <MuiAccordion
      key={idx}
      square
      expanded={expanded === `panel${idx}`}
      onChange={handleChange(`panel${idx}`)}
      className={clsx({
        [classes.accordion]: true,
        [classes.expanded]: expanded === `panel${idx}`,
      })}
    >
      <MuiAccordionSummary
        aria-controls={`panel${idx}d-content`}
        id={`panel${idx}d-header`}
        className={clsx({
          [classes.header]: true,
          [classes.expanded]: expanded === `panel${idx}`,
        })}
      >
        {typeof panel.title === 'string' && <span className={classes.title}>{panel.title}</span>}
        {typeof panel.title !== 'string' && panel.title}
        <Icon glyph="caret-down" size={iconSize} color={colors.ctaPrimary} />
      </MuiAccordionSummary>
      <MuiAccordionDetails
        className={clsx({
          [classes.content]: true,
          [classes.expanded]: expanded,
        })}
      >
        {panel.content}
      </MuiAccordionDetails>
    </MuiAccordion>
  ))

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [className || '']: className,
      })}
    >
      {blocks}
    </div>
  )
}

Accordion.defaultProps = {
  iconSize: 24,
}

export default Accordion
