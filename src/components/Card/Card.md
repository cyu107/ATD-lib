### Example:

#### Vertical (default)
```jsx padded
  <div style={{ display: 'inline-block', width: '300px', padding: '2em', backgroundColor: '#efefef' }}>
    <Card
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
        date: '22/07/2053',
        location: 'Location',
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
        },
        bookmarked: true,
      }}
    />
  </div>

  <div style={{ display: 'inline-block', verticalAlign: 'top', width: '300px', padding: '2em', backgroundColor: '#efefef' }}>
    <Card
      title="Sign up for a free Webinar!"
      subtitle="This week only, we're giving you free access to our most popular webinar. Sign up today!"
      details={{
        date: '22/07/2053',
        location: 'Location',
      }}
      footer={{
        contentType: 'Content',
        tag: {
          text: 'Label',
          color: 'success',
        },
      }}
    />
  </div>
```

#### Horizontal
```jsx padded
  <div style={{ maxWidth: '520px', padding: '2em', backgroundColor: '#efefef' }}>
    <Card
      variant="horizontal"
      thumbnail="https://picsum.photos/600/350?grayscale&blur=2"
      thumbnailIcon="video"
      date="Upcoming date alert"
      title="Title"
      subtitle="Subtitle/Lead-in"
      description="Description/URL"
      byline="Byline/production date"
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
  </div>
```
