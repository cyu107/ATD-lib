Spacer is used to add some whitespace between adjacent components.

```jsx
<span>This is 50px</span>
<Spacer size={50} />
<span>between the text</span>
```

Full Width:

```jsx
<span>This is 50px</span>
<Spacer size={50} fullWidth />
<span>between the text</span>
```

If you don't want to add vertical space, add the `noHeight` prop which will add 1px height, but width will still apply.

```jsx
<span>This is 50px</span>
<Spacer size={50} noHeight />
<span>between the text without any height spacing</span>
```

If you want the spacer `size` to match the text, add `matchText` prop:

```jsx
<span>This is 1.3em</span>
<Spacer size={1.3} matchText debug />
<span>between the text without any height spacing</span>
```

For visual debugging, the `debug` prop would be useful since it adds background color to the spacer.

```jsx
<span>This is 16px</span>
<Spacer size={16} debug />
<span>between the text with a nice orange color to help with the visualization.</span>
```
