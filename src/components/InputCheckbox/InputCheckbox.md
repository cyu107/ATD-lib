#### Examples:

##### Default - Size: Medium
```jsx padded
<InputCheckbox
    name="checkbox-1"
    id="input-checkbox-1"
    label="Checkbox label"
    labelPlacement="right"
    size="medium"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Label Placement: Left
```jsx padded
<InputCheckbox
    name="checkbox-1"
    id="input-checkbox-1"
    label="Checkbox label"
    labelPlacement="left"
    size="medium"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Label Placement: Default
```jsx padded
<InputCheckbox
    name="checkbox-1"
    id="input-checkbox-1"
    label="Checkbox label"
    labelPlacement="default"
    size="medium"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default - Size: Small
```jsx padded
<InputCheckbox
    name="checkbox-2"
    id="input-checkbox-2"
    label="Checkbox label"
    labelPlacement="right"
    size="small"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Error
```jsx padded
<InputCheckbox
    name="checkbox-3"
    id="input-checkbox-3"
    label="Checkbox label"
    labelPlacement="left"
    size="medium"
    error
    errorText={<span>This is error text.</span>}
/>
```

##### Disabled
```jsx padded
<InputCheckbox
    name="checkbox-4"
    id="input-checkbox-4"
    label="Checkbox label"
    labelPlacement="left"
    size="medium"
    disabled
/>
```