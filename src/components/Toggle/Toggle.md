#### Examples:

##### Default - Medium - Default Label
```jsx padded
<Toggle
    name="toggle-1"
    id="toggle-1"
    label="Toggle label"
    labelPlacement="default"
    size="medium"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Medium - Left Label
```jsx padded
<Toggle
    name="toggle-2"
    id="toggle-2"
    label="Toggle label"
    labelPlacement="left"
    size="medium"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Medium - Right Label
```jsx padded
<Toggle
    name="toggle-3"
    id="toggle-3"
    label="Toggle label"
    labelPlacement="right"
    size="medium"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Small - Default Label
```jsx padded
<Toggle
    name="toggle-4"
    id="toggle-4"
    label="Toggle label"
    labelPlacement="default"
    size="small"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Small - Left Label
```jsx padded
<Toggle
    name="toggle-5"
    id="toggle-5"
    label="Toggle label"
    labelPlacement="left"
    size="small"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Small - Right Label
```jsx padded
<Toggle
    name="toggle-6"
    id="toggle-6"
    label="Toggle label"
    labelPlacement="right"
    size="small"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Medium - Default - On/Off Label
```jsx padded
<Toggle
    name="toggle-6"
    id="toggle-6"
    label="Toggle label"
    labelPlacement="right"
    size="small"
    onOff
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Error
```jsx padded
<Toggle
    name="toggle-6"
    id="toggle-6"
    label="Toggle label"
    labelPlacement="right"
    size="small"
    required
    error
    errorText={<span>This is error text.</span>}
/>
```

##### Disabled
```jsx padded
<Toggle
    name="toggle-6"
    id="toggle-6"
    label="Toggle label"
    labelPlacement="right"
    size="small"
    required
    disabled
/>
```