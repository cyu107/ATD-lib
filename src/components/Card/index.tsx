import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@bit/littlebox.atd.grid'
import Thumbnail from '@bit/littlebox.atd.thumbnail'
import { PropsType as LozengeProps } from '@bit/littlebox.atd.lozenge'
import { PropsType as IconProps } from '@bit/littlebox.atd.icons'

// Parts
import Wrap from './Parts/Wrap'
import Inner from './Parts/WrapInner'
import Date from './Parts/Date'
import Title from './Parts/Title'
import Subtitle from './Parts/Subtitle'
import Description from './Parts/Description'
import Byline from './Parts/Byline'
import PublicationCover from './Parts/PublicationCover'
import Author from './Parts/Author'
import Details from './Parts/Details'
import FooterBar from './Parts/FooterBar'

const useStyles = makeStyles({
  baseText: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '12px',
    lineHeight: '15px',
  },
  horizontal: {
    '& $thumbnail': {
      minWidth: '100px',
    },
  },
  thumbnail: {},
})

export type PropsType = {
  /** Card variant, one of 'vertical' | 'horizontal' */
  variant: 'vertical' | 'horizontal'
  /** Thumbnail image */
  thumbnail?: string
  /** True if thumbnail should be full width and above the card. False if it should be contained within the card */
  thumbnailFull?: boolean
  /** Thumbnail icon */
  thumbnailIcon?: IconProps['glyph']
  /** Date / timing status */
  date?: string
  /** Title */
  title?: string
  /** Subtitle */
  subtitle?: string
  /** Description */
  description?: string
  /** Byline / date */
  byline?: string
  /** Publication cover */
  publicationCover?: string
  /** Author avatar / name line */
  author?: {
    avatar: string
    name: string
  }
  /** Details - location/date/extra */
  details?: {
    location?: string
    date?: string
    extra?: string
  }
  /** Footer section */
  footer: {
    /** CTA Button */
    button?: {
      text: string
      href: string
    }
    responses?: string
    redemptionDate?: string
    contentType: string
    tag?: {
      text: string
      variant?: LozengeProps['variant']
      color?: LozengeProps['color']
    }
    bookmarked: boolean
  }
}

const Card = ({
  variant,
  thumbnail,
  thumbnailFull,
  thumbnailIcon,
  date,
  title,
  subtitle,
  description,
  byline,
  publicationCover,
  author,
  details,
  footer,
}: PropsType): ReactElement => {
  const classes = useStyles()

  switch (variant) {
    case 'horizontal':
      return (
        <Wrap className={classes.horizontal}>
          <Inner>
            <Grid container spacing={2}>
              {(thumbnail || publicationCover) && (
                <Grid item>
                  {thumbnail && (
                    <Thumbnail src={thumbnail} icon={thumbnailIcon} className={classes.thumbnail} />
                  )}
                  {publicationCover && <PublicationCover alt={title} src={publicationCover} />}
                </Grid>
              )}
              <Grid item style={{ flexGrow: 1 }}>
                <Grid container>
                  <Grid item xs={details ? 6 : 12}>
                    <Date className={classes.baseText}>{date}</Date>
                    <Title className={classes.baseText}>{title}</Title>
                    <Subtitle className={classes.baseText}>{subtitle}</Subtitle>
                    <Description className={classes.baseText}>{description}</Description>
                    <Byline className={classes.baseText}>{byline}</Byline>
                    <Author author={author} className={classes.baseText} />
                  </Grid>
                  {details && (
                    <Grid item xs={6}>
                      <Details details={details} baseTextStyle={classes.baseText} />
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <FooterBar horizontal footer={footer} baseTextStyle={classes.baseText} />
          </Inner>
        </Wrap>
      )
    default:
      // 'vertical' variant
      return (
        <Wrap>
          {thumbnail && thumbnailFull && <Thumbnail src={thumbnail} icon={thumbnailIcon} />}
          <Inner>
            {thumbnail && !thumbnailFull && <Thumbnail src={thumbnail} icon={thumbnailIcon} />}
            <Date className={classes.baseText}>{date}</Date>
            <Title className={classes.baseText}>{title}</Title>
            <Subtitle className={classes.baseText}>{subtitle}</Subtitle>
            <Description className={classes.baseText}>{description}</Description>
            <Byline className={classes.baseText}>{byline}</Byline>
            <PublicationCover alt={title} src={publicationCover} />
            <Author author={author} className={classes.baseText} />
            <Details details={details} baseTextStyle={classes.baseText} />
            <FooterBar footer={footer} baseTextStyle={classes.baseText} />
          </Inner>
        </Wrap>
      )
  }
}

Card.defaultProps = {
  variant: 'vertical',
  thumbnailFull: false,
}

export default Card
