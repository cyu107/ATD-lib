### Examples:

#### Default
```jsx padded
import Button from '@bit/littlebox.atd.button';
import Icon from '@bit/littlebox.atd.icons';
import Spacer from '@bit/littlebox.atd.spacer';

<Box
  topBorderWidth={5}
  header={{
    title: 'Box title',
    subtitle: 'Box subtitle',
    actions: (
      <Button variant="tertiary" href={''}>
        <Icon glyph="edit" size={16} color={colors.ctaPrimary} />
        <Spacer size={8} />
        <span>Edit topics</span>
      </Button>
    ),
  }}
  footer={<div> i am the footer</div>}
>
  <>
    <div>Content</div>
  </>
</Box>
```

#### Variant 'SubModule'
```jsx padded
import Button from '@bit/littlebox.atd.button';
import Icon from '@bit/littlebox.atd.icons';
import Spacer from '@bit/littlebox.atd.spacer';

<Box
  variant={'subModule'}
  header={{
    title: 'Box submodule title',
    subtitle: 'Box submodule subtitle',
    actions: (
      <Button variant="tertiary" href={''}>
        <Icon glyph="edit" size={16} color={colors.ctaPrimary} />
        <Spacer size={8} />
        <span>Edit topics</span>
      </Button>
    ),
    actionsAlignment: 'right'
  }}
  footer={<div> i am the footer</div>}
>
  <>
    <div>Content</div>
  </>
</Box>
```

#### Variant 'transparent'
```jsx padded
import Button from '@bit/littlebox.atd.button';
import Icon from '@bit/littlebox.atd.icons';
import Spacer from '@bit/littlebox.atd.spacer';

const divStyle = {
  backgroundColor: '#ccffff',
  // margin: '20px',
  border: '1px dashed red', 
};
<div style={divStyle}>
<Box
  variant={'transparent'}
  header={{
    title: 'Box submodule title',
    subtitle: 'Box submodule subtitle',
    actions: (
      <Button variant="tertiary" href={''}>
        <Icon glyph="edit" size={16} color={colors.ctaPrimary} />
        <Spacer size={8} />
        <span>Edit topics</span>
      </Button>
    ),
  actionsAlignment: 'right'
  }}
  footer={<div> i am the footer</div>}
>
  <>
    <div>Content</div>
  </>
</Box>
</div>
```

#### Variant 'simple'
```jsx padded
import Button from '@bit/littlebox.atd.button';
import Icon from '@bit/littlebox.atd.icons';
import Spacer from '@bit/littlebox.atd.spacer';

const divStyle = {
  border: '1px dashed red', 
};
<div style={divStyle}>
<Box
  variant={'simple'}
  header={{
    title: 'Box submodule title',
    subtitle: 'Box submodule subtitle',
    actions: (
      <Button variant="tertiary" href={''}>
        <Icon glyph="edit" size={16} color={colors.ctaPrimary} />
        <Spacer size={8} />
        <span>Edit topics</span>
      </Button>
    ),
  actionsAlignment: 'right'
  }}
  footer={<div> i am the footer</div>}
>
  <>
    <div>Content</div>
  </>
</Box>
</div>
```

#### Variant 'simple'
##### content only

```jsx padded
import Button from '@bit/littlebox.atd.button';
import Icon from '@bit/littlebox.atd.icons';
import Spacer from '@bit/littlebox.atd.spacer';

<Box variant={'simple'}>
  <>
    <div>Content</div>
  </>
</Box>
```