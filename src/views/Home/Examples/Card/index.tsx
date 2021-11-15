import React, { ReactElement } from 'react'
import Grid from 'components/Grid'
import Card from 'components/Card'

const Example = (): ReactElement => (
  <Grid container style={{ padding: '2em', backgroundColor: '#efefef' }}>
    <Grid item style={{ minWidth: '300px', marginRight: '2em' }}>
      <Card
        thumbnailFull
        thumbnail="https://picsum.photos/600/350?grayscale&blur=2"
        thumbnailIcon="video"
        date="Upcoming date alert"
        title="Title"
        subtitle="Subtitle/Lead-in"
        description="Description/URL"
        byline="Byline/production date"
        publicationCover="https://picsum.photos/300/500"
        author={{
          avatar: 'https://picsum.photos/200/200',
          name: 'Author Name',
        }}
        details={{
          date: 'Date line',
          location: 'Location line',
          extra: 'Extra line',
        }}
        footer={{
          button: {
            text: 'Button text',
            href: '#',
          },
          responses: '2 Responses',
          redemptionDate: 'Redemption Date',
          contentType: 'Content',
          tag: {
            text: 'Label',
            variant: 'subtle',
            color: 'in-progress',
          },
          bookmarked: true,
        }}
      />
    </Grid>
    <Grid item style={{ minWidth: '500px' }}>
      <Card
        variant="horizontal"
        publicationCover="https://picsum.photos/300/500"
        date="Upcoming date alert"
        title="Title"
        subtitle="Subtitle/Lead-in"
        description="Description/URL"
        byline="Byline/production date"
        author={{
          avatar: 'https://picsum.photos/200/200',
          name: 'Author Name',
        }}
        footer={{
          button: {
            text: 'Button text',
            href: '#',
          },
          responses: '2 Responses',
          redemptionDate: 'Redemption Date',
          contentType: 'Content',
          tag: {
            text: 'Label',
            variant: 'subtle',
            color: 'in-progress',
          },
          bookmarked: false,
        }}
      />
    </Grid>
  </Grid>
)

export default Example
