import React, { ReactElement, useState, ChangeEvent, SyntheticEvent } from 'react'
import clsx from 'clsx'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { usePagination, UsePaginationProps } from '@material-ui/lab/Pagination'
import colors from '@bit/littlebox.atd.colors'
import Icons from '@bit/littlebox.atd.icons'

const useStyles = makeStyles({
  pages: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  page: {
    width: 36,
    height: 36,
    fontSize: '16px',
    lineHeight: '20px',
    color: colors.ctaSecondary,
    borderRadius: '50%',
    background: 'transparent',
    border: '2px solid transparent',
    fontWeight: 600,
    '&:hover': {
      background: colors.textLinkStandaloneHover,
      color: colors.ctaSecondaryDarker,
    },
    '&:focus': {
      outline: 'none',
      border: '4px solid rgba(225, 48, 0, 0.12)',
    },
    '&:disabled': {
      color: colors.textDisabled,
    },
    '&.active': {
      borderWidth: 2,
      borderColor: colors.ctaPrimary,
      color: colors.ctaSecondaryDarker,
    },
  },
  ellipsis: {
    width: 36,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 36,
    color: colors.ctaSecondaryDarker,
    background: 'transparent',
    padding: '0 12px',
    width: 79,
    height: 36,
    border: 'none',
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      background: colors.textLinkStandaloneHover,
      color: colors.ctaSecondaryDarker,
    },
    '&:focus': {
      outline: 'none',
      border: '4px solid rgba(225, 48, 0, 0.12)',
    },
    '&:disabled': {
      color: colors.textDisabled,
      '& > svg': {
        color: colors.textDisabled,
      },
    },
  },
  nextButton: {
    marginLeft: 8,
    '& > span': {
      marginRight: 8,
    },
  },
  prevButton: {
    marginRight: 8,
    '& > span': {
      marginLeft: 8,
    },
  },
  pageSelect: {
    border: `1px solid ${colors.ctaSecondary}`,
    borderRadius: 36,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '20px',
    padding: '8px 16px',
    '&:hover': {
      '& > .MuiOutlinedInput-notchedOutline': {
        borderColor: colors.ctaSecondary,
      },
    },
    '&:focus': {
      outline: 'none',
    },
    '&.Mui-disabled': {
      color: colors.textDisabled,
      '& svg': {
        color: colors.textDisabled,
      },
    },
    '& > .MuiSelect-select': {
      padding: '0 16px 0 0',
      '&:focus': {
        background: 'none',
      },
      '&.Mui-disabled': {
        backgroundColor: 'transparent',
      },
    },
  },
  selectIcon: {
    cursor: 'pointer',
  },
})

type PropsType = {
  /**
   * The name of the component where this hook is used.
   */
  componentName?: string
  /**
   * The total number of pages.
   * @default 1
   */
  count?: number
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage?: number
  /**
   * If `true`, the pagination component will be disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void
}

const Pagination = ({
  componentName,
  count,
  defaultPage,
  disabled,
  onChange,
}: PropsType): ReactElement => {
  const [currentPage, setCurrentPage] = useState(defaultPage ? defaultPage : 1)
  const [open, setOpen] = useState(false)

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const classes = useStyles()

  const paginationProps: UsePaginationProps = {
    componentName,
    count,
    defaultPage,
    disabled,
    onChange,
  }
  !isDesktop && (paginationProps.siblingCount = count)

  const { items } = usePagination(paginationProps)

  const prevButton = items[0]
  const nextButton = items[items.length - 1]
  const pageButtons = items.filter((item) => item.type !== 'previous' && item.type !== 'next')

  const onPageChange = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    setCurrentPage(event.target.value as number)
  }

  const onPrev = (event: SyntheticEvent) => {
    prevButton.onClick(event)
    setCurrentPage(currentPage - 1)
  }

  const onNext = (event: SyntheticEvent) => {
    nextButton.onClick(event)
    setCurrentPage(currentPage + 1)
  }

  return (
    <nav>
      <ul className={classes.pages}>
        <li key={0}>
          <button
            className={clsx(classes.button, classes.prevButton)}
            type="button"
            disabled={prevButton.disabled}
            onClick={onPrev}
          >
            <Icons glyph="caret-left" size={16} color={colors.ctaPrimary} />
            <span>Prev</span>
          </button>
        </li>

        {isDesktop ? (
          pageButtons.map(({ page, type, selected, ...item }, index) => {
            let children = null

            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = <span className={classes.ellipsis}>...</span>
            } else if (type === 'page') {
              children = (
                <button
                  className={clsx(classes.page, selected ? 'active' : '')}
                  type="button"
                  {...item}
                >
                  {page}
                </button>
              )
            }

            return <li key={index}>{children}</li>
          })
        ) : (
          <>
            <FormControl variant="outlined" disabled={disabled}>
              <Select
                className={classes.pageSelect}
                value={currentPage}
                onChange={onPageChange}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                renderValue={(value) => `Page ${value} of ${count}`}
                IconComponent={() => (
                  <span className={classes.selectIcon} onClick={() => setOpen(!disabled)}>
                    <Icons glyph="caret-down" size={16} color={colors.ctaPrimary} />
                  </span>
                )}
              >
                {pageButtons.map(({ page, type, selected, ...item }, index) => (
                  <MenuItem value={page} onClick={item.onClick} key={index}>
                    {page}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )}

        <li key={items.length - 1}>
          <button
            className={clsx(classes.button, classes.nextButton)}
            type="button"
            disabled={nextButton.disabled}
            onClick={onNext}
          >
            <span>Next</span>
            <Icons glyph="caret-right" size={16} color={colors.ctaPrimary} />
          </button>
        </li>
      </ul>
    </nav>
  )
}

Pagination.defaultProps = {
  count: 1,
  defaultPage: 1,
  disabled: false,
}

export default Pagination
