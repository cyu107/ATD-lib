```jsx padded
import { Box, Typography, makeStyles, createStyles } from '@material-ui/core'
import Container from '@bit/littlebox.atd.container'
import Grid from '@bit/littlebox.atd.grid'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    width: '320px',
    padding: '15px 16px',
    border: `1px solid ${colors.gray300}`
  },
  title: {
    color: '#2E2D31',
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '28px'
  },
  subTitle: {
   fontSize: '16px',
   lineHeight: '22px'
  }
});

const classes = useStyles();

<Grid className={classes.root} container>
  <Grid xs={12}>
    <Typography className={classes.title} variant="h4" gutterBottom>Standard Benefits</Typography>
    <Typography className={classes.subTitle} variant="subtitle1" gutterBottom>
      Enjoy access to all of these<br />
      members-only resources:
    </Typography>
  </Grid>
  <Grid xs={12}>
    <Box>
      <IconCTAList
        ctaList={[
          {
            glyph: "account",
            href: "#",
            label: "Templates & Tools",
            count: 82
          }, {
            glyph: "calendar",
            href: "#",
            label: "Webinars",
            count: 721
          }, {
            glyph: "globe",
            href: "#",
            label: "Conference Recordings",
            count: 98
          }, {
            glyph: "email",
            href: "#",
            label: "TD Magazine Editions",
            count: 91
          },
          {
            glyph: "cart",
            href: "#",
            label: "State of the Industry Reports",
            count: 59
          }, {
            glyph: "star",
            href: "#",
            label: "Case Studies",
            count: 324
          }, {
            glyph: "video",
            href: "#",
            label: "Whitepapers",
            count: 200
          }, {
            glyph: "courses",
            href: "#",
            label: "Newsletters",
            count: 89
          }
        ]}
      />
    </Box>
  </Grid>
</Grid>
```
