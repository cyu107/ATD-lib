import React, { useEffect, useState, ReactElement } from 'react'
import Slider from 'react-slick'
import clsx from 'clsx'
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@bit/littlebox.atd.grid'
import colors from '@bit/littlebox.atd.colors'

// components
import Arrow from './Arrow'

// slick theme styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingBottom: 0,
    },
    rootPaddingBottom: {
      paddingBottom: '70px',
      [theme.breakpoints.down('xs')]: {
        paddingBottom: '30px',
      },
    },
    dotsWrapper: {
      width: 'auto !important',
      bottom: '-40px !important',
      right: '20px',
      transform: 'translateY(50%)',
      display: 'flex !important',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        right: '10px',
        bottom: '-20px !important',
      },
      '& > li': {
        margin: '0 3px !important',
        [theme.breakpoints.down('xs')]: {
          margin: '0 !important',
        },
      },
      '& .slick-active div': {
        backgroundColor: colors.ctaPrimary,
        borderColor: colors.ctaPrimary,
      },
    },
    dotsRightSpace: {
      right: '170px',
    },
    dot: {
      width: '8px',
      height: '8px',
      border: `2px solid ${colors.gray500}`,
      borderRadius: '50%',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      [theme.breakpoints.down('xs')]: {
        borderWidth: '1px',
        width: '6px',
        height: '6px',
      },
    },
    slideWrapper: {
      width: '100%',
      marginRight: '25px',
    },
  }),
)

type PropsType = {
  /** React Elements array */
  children: ReactElement[]
  /** Show the little orange dot controls, one per item in carousel */
  showDots?: boolean
  /** Show the left and right carousel arrows */
  showArrows?: boolean
  /** Number of items to advance carousel when the arrows are pressed */
  advancedItems?: number
  /** Infinite scroll capability */
  infinite?: boolean
}

const Carousel = ({
  showDots,
  showArrows,
  advancedItems,
  infinite,
  children,
}: PropsType): ReactElement => {
  const theme = useTheme()
  const classes = useStyles()
  const desktop = useMediaQuery(theme.breakpoints.up('sm'))
  const [slidesToShow, setSlidesToShow] = useState<number>(0)

  const sliderSettings = {
    infinite,
    slidesToShow,
    dots: showDots,
    arrows: showArrows && desktop,
    slidesToScroll: advancedItems,
    dotsClass: clsx({
      'slick-dots': true,
      [classes.dotsWrapper]: true,
      [classes.dotsRightSpace]: desktop && showArrows,
    }),
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    customPaging: () => <div className={classes.dot} />,
  }

  const getSlidesToShow = () => {
    const layoutElement = document.getElementsByClassName(classes.root)[0]
    const slideElement = document.querySelector(`.${classes.slideWrapper} > div`)
    if (layoutElement && slideElement) {
      const minSlideMargin = 2
      const maxSlides = Math.floor(
        layoutElement.clientWidth / (slideElement.clientWidth + minSlideMargin),
      )
      setSlidesToShow(maxSlides)
    }
  }

  useEffect(() => {
    // init slides to show
    getSlidesToShow()

    // screen resize handler
    window.addEventListener('resize', getSlidesToShow)
  })

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.rootPaddingBottom]: desktop ? showArrows || showDots : showDots,
      })}
    >
      <Slider {...sliderSettings}>
        {children.map((child, index) => {
          return (
            <Grid className={classes.slideWrapper} key={index}>
              {child}
            </Grid>
          )
        })}
      </Slider>
    </div>
  )
}

Carousel.defaultProps = {
  showDots: true,
  showArrows: true,
  advancedItems: 2,
  infinite: true,
}

export default Carousel
