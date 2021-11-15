### Examples:

#### Primary:
```jsx padded
<TextLink href="#" size="small">Text link</TextLink>
<TextLink href="#" size="medium">Text link</TextLink>
<TextLink href="#" size="large">Text link</TextLink>
```

#### Secondary:
```jsx padded
<TextLink href="#" size="small" variant="secondary">Text link</TextLink>
<TextLink href="#" size="medium" variant="secondary">Text link</TextLink>
<TextLink href="#" size="large" variant="secondary">Text link</TextLink>
```

#### Standalone:
```jsx padded
<TextLink href="#" size="small" variant="standalone">Text link</TextLink>
<TextLink href="#" size="medium" variant="standalone">Text link</TextLink>
<TextLink href="#" size="large" variant="standalone">Text link</TextLink>
```

#### Inline:
```jsx padded
<TextLink href="#" variant="primary" inline>Inline Primary</TextLink>
<TextLink href="#" variant="secondary" inline>Inline Secondary</TextLink>
```

#### With icon:
```jsx padded
<TextLink href="#" variant="primary" inline icon={'download'}>Inline Primary</TextLink>
<TextLink href="#" variant="secondary" inline icon={'external'}>Inline Primary</TextLink>
```

##### Blank target link
```jsx padded
<TextLink href="#" target="_blank" size="large">Blank target</TextLink>
```

##### Click event handler
```jsx padded
<TextLink
  href="#"
  target="_blank"
  size="large"
  onClick={e => {
    e.preventDefault()
    console.log('click')
  }}
>
  Click me
</TextLink>
```
