#### Examples:

##### Default - Size: Medium
```jsx padded
<InputRadio
    name="checkbox-1"
    id="input-checkbox-1"
    label="Radio label"
    labelPlacement="right"
    size="medium"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Label Placement: Left
```jsx padded
<InputRadio
    name="checkbox-2"
    id="input-checkbox-2"
    label="Radio label"
    labelPlacement="left"
    size="medium"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Label Placement: Default
```jsx padded
<InputRadio
    name="checkbox-3"
    id="input-checkbox-3"
    label="Radio label"
    labelPlacement="default"
    size="medium"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Size: Small
```jsx padded
<InputRadio
    name="checkbox-4"
    id="input-checkbox-4"
    label="Radio label"
    labelPlacement="right"
    size="small"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Error
```jsx padded
<InputRadio
    name="checkbox-5"
    id="input-checkbox-5"
    label="Radio label"
    labelPlacement="left"
    size="medium"
    error
    errorText={<span>This is error text.</span>}
/>
```

##### Disabled
```jsx padded
<InputRadio
    name="checkbox-6"
    id="input-checkbox-6"
    label="Radio label"
    labelPlacement="left"
    size="medium"
    disabled
/>
```