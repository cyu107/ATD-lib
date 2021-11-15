import React, { ReactElement } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@bit/littlebox.atd.container'
import colors from '@bit/littlebox.atd.colors'
import Carousel from '@bit/littlebox.atd.carousel'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '150px',
      height: '200px',
      [theme.breakpoints.down('xs')]: {
        width: '120px',
        height: '160px',
      },
    },
    thumbnailWrapper: {
      width: '100%',
      height: '150px',
      border: `1px dashed ${colors.ctaPrimary}`,
      borderRadius: '10px',
      [theme.breakpoints.down('xs')]: {
        height: '120px',
        borderRadius: '8px',
      },
    },
    thumbnailImage: {
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      [theme.breakpoints.down('xs')]: {
        borderRadius: '8px',
      },
    },
    textWrapper: {
      marginTop: '8px',
      [theme.breakpoints.down('xs')]: {
        marginTop: '5px',
      },
    },
    text: {
      color: colors.ctaPrimary,
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '18px',
      margin: 0,
      [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
        lineHeight: '15px',
      },
    },
  }),
)

const CarouselExample = (): ReactElement => {
  const classes = useStyles()
  const iterateArray = Array(10).fill({})

  return (
    <Container>
      <Carousel>
        {iterateArray.map((_, index) => {
          console.log('iterator')
          return (
            <div className={classes.root} key={index}>
              <div className={classes.thumbnailWrapper}>
                <img
                  className={classes.thumbnailImage}
                  src={'https://placeimg.com/640/480/any'}
                  alt="thumbnail"
                />
              </div>
              <div className={classes.textWrapper}>
                <p className={classes.text}>
                  Compelling virtual
                  <br />
                  Presentations II
                </p>
              </div>
            </div>
          )
        })}
      </Carousel>
    </Container>
  )
}

export default CarouselExample
