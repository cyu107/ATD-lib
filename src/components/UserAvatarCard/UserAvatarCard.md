```jsx padded
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  avatarCard: {
    width: '230px'
  },
});

const classes = useStyles();

<UserAvatarCard
  className={classes.avatarCard}
  userFirstname="John"
  userLastname="Smith"
  href="#"
  avatarSrc="https://material-ui.com/static/images/avatar/1.jpg"
/>
```