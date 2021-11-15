import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'
import Spacer from '@bit/littlebox.atd.spacer/dist'
import TextLink from '@bit/littlebox.atd.text-link'

/**
 * 5.0.0.1 Profile - Navigation
 * https://www.figma.com/file/jCo0D2EYkVbuBX1TjR1enA/ATD-MyATD-Desktop-2020?node-id=2258%3A4687
 *
 */

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    borderRadius: '4px',
    border: `1px solid ${colors.gray400}`,
    boxShadow: `0px 2px 0px ${colors.gray400}`,
    backgroundColor: colors.white,
  },
  linkWrap: {
    '&:last-child a > span': {
      borderBottomColor: colors.white,
    },
  },
  link: {
    display: 'block',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '18px',
    textDecoration: 'none',
    color: colors.ctaSecondary,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    paddingLeft: '16px',
    borderLeft: '4px solid transparent',
    '&:hover': {
      borderLeftColor: colors.ctaPrimary,
    },
    '&.active': {
      color: colors.black,
      fontWeight: 600,
      borderLeftColor: colors.ctaPrimary,
    },
  },
  linkText: {
    padding: '16px 8px 16px 0',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${colors.gray400}`,
  },
})
type Link = {
  label: string
  value: string
  state: boolean
}
type PropsType = {
  routeGroup: Link[]
}
const SectionMenu = (props: PropsType): ReactElement => {
  /**
   * PROPS
   */
  const classes = useStyles()
  const { routeGroup } = props
  /**********************
   * RENDER
   **********************/
  return (
    <ul className={classes.root}>
      {routeGroup.map((item, index) => {
        return (
          <li key={index} className={classes.linkWrap}>
            <NavLink to={item.value} className={classes.link}>
              <TextLink href={item.value}>{item.label}</TextLink>
              <Spacer size={10} />
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SectionMenu
