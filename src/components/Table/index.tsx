import React, { ReactElement } from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import MuiTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell, { TableCellProps } from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Typography from '@material-ui/core/Typography'
import Button from '@bit/littlebox.atd.button'
import colors from '@bit/littlebox.atd.colors'
import ContextMenu from '@bit/littlebox.atd.context-menu'
import ContextMenuItem from '@bit/littlebox.atd.context-menu/dist/Item'
import Icon from '@bit/littlebox.atd.icons'
import Spacer from '@bit/littlebox.atd.spacer'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header: {
    borderTop: `1px solid ${colors.gray300}`,
  },
  grayCell: {
    color: 'rgb(179, 179, 179)',
  },
  actionToggle: {
    display: 'inline-block',
    padding: '0.5em',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: colors.textLinkStandaloneHover,
    },
  },
  actionItem: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: colors.ctaSecondary,
  },
  icon: {
    display: 'flex',
    flexDirection: 'column',
  },
  upIcon: {
    display: 'inline-flex',
  },
  downIcon: {
    display: 'inline-flex',
    marginTop: '-8px',
  },
  placeholder: {
    padding: 24,
  },
  placeholderTitle: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '26px',
    color: '#2E2D31',
    margin: 0,
    marginBottom: 8,
  },
  placeholderDescription: {
    fontSize: 16,
    lineHeight: '22px',
    color: colors.textActive,
    marginBottom: 24,
  },
})

type TableSortIconProps = {
  active?: boolean
  direction?: 'asc' | 'desc'
  className?: string
}

const TableSortIcon = ({ active, direction }: TableSortIconProps): ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.icon}>
      <div className={classes.upIcon}>
        <Icon
          glyph="caret-up"
          size={16}
          color={active && direction === 'asc' ? colors.ctaPrimary : colors.black}
        />
      </div>
      <div className={classes.downIcon}>
        <Icon
          glyph="caret-down"
          size={16}
          color={active && direction === 'desc' ? colors.ctaPrimary : colors.black}
        />
      </div>
    </div>
  )
}

export interface ITableRows {
  originalRows: any[]
  elementRows: ReactElement[][]
}

interface ITableActionItem {
  title: string
  property: string
}

export interface ITableActions {
  label: string
  items: ITableActionItem[]
}

interface ITablePlaceholder {
  title: string
  description: string
  action: string
  actionUrl: string
}

type TableProps = {
  ariaLabel?: string
  header: (
    | string
    | {
        label: string | ReactElement
        sort?: (label: string) => void
        options?: TableCellProps
      }
  )[]
  rows: ITableRows
  actions?: ITableActions
  order?: 'asc' | 'desc'
  orderBy?: string
  placeholder?: ITablePlaceholder
}

const Table = ({
  ariaLabel,
  header,
  rows,
  actions,
  order,
  orderBy,
  placeholder,
}: TableProps): ReactElement => {
  const classes = useStyles()

  const onHeaderClick = (cell: any) => {
    cell.sort && cell.sort(cell.label)
  }

  const actionAvailable = (rowIndex: number): boolean => {
    if (!actions || !actions.items || !rows.originalRows[rowIndex]) {
      return false
    }
    for (let i = 0; i < actions.items.length; i++) {
      if (rows.originalRows[rowIndex][actions.items[i].property]) {
        return true
      }
    }
    return false
  }

  return (
    <>
      {rows.elementRows && rows.elementRows.length ? (
        <TableContainer component={Paper}>
          <MuiTable className={classes.table} aria-label={ariaLabel || 'ATD table'}>
            <TableHead className={classes.header}>
              <TableRow>
                {header.map((cell, idx) => {
                  if (typeof cell === 'string') {
                    return (
                      <TableCell key={idx} className={classes.grayCell}>
                        {cell}
                      </TableCell>
                    )
                  } else {
                    return (
                      <TableCell
                        key={idx}
                        {...cell.options}
                        className={!cell.sort ? classes.grayCell : ''}
                      >
                        {cell.sort ? (
                          <TableSortLabel
                            active={orderBy === cell.label}
                            direction={orderBy === cell.label ? order : 'asc'}
                            onClick={() => onHeaderClick(cell)}
                            IconComponent={(props) => (
                              <TableSortIcon
                                className={props.className}
                                direction={order}
                                active={cell.label === orderBy}
                              />
                            )}
                          >
                            {cell.label}
                          </TableSortLabel>
                        ) : (
                          cell.label
                        )}
                      </TableCell>
                    )
                  }
                })}
                {actions && actions.label && (
                  <TableCell className={classes.grayCell}>{actions.label}</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.elementRows.map((row, idx) => (
                <TableRow key={idx}>
                  {row.map((cell, idy) => (
                    <TableCell key={idy}>{cell}</TableCell>
                  ))}
                  {actions && actions.items && (
                    <TableCell>
                      {actionAvailable(idx) && (
                        <ContextMenu
                          toggle={
                            <span className={classes.actionToggle}>
                              <Icon size={24} color={colors.ctaPrimary} glyph="ellipsis" />
                            </span>
                          }
                          menuAnchor="right"
                          menu={
                            <>
                              {actions.items.map((action, index) => {
                                if (action.property && rows.originalRows[idx][action.property]) {
                                  return (
                                    <ContextMenuItem key={index} small>
                                      <a
                                        target="blank"
                                        href={rows.originalRows[idx][action.property]}
                                        className={classes.actionItem}
                                      >
                                        <Icon
                                          color={colors.ctaPrimary}
                                          size={16}
                                          glyph="external"
                                        />
                                        <Spacer size={8} />
                                        {action.title}
                                      </a>
                                    </ContextMenuItem>
                                  )
                                }
                                return null
                              })}
                            </>
                          }
                        />
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      ) : (
        <Box className={classes.placeholder}>
          <Typography className={classes.placeholderTitle}>{placeholder?.title}</Typography>
          <Typography className={classes.placeholderDescription}>
            {placeholder?.description}
          </Typography>
          <Button href={placeholder?.actionUrl}>{placeholder?.action as string}</Button>
        </Box>
      )}
    </>
  )
}

export default Table
