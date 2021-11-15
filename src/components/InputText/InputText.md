#### Examples:

##### Default
```jsx padded
<InputText
    name="text-1"
    id="input-text-1"
    label="Input text label"
    placeholder="This is placeholder text"
    required
    helperText={<span>This is helper text.</span>}
/>
```

##### Default with Text Masking
```jsx padded
<InputText
    name="text-2"
    id="input-text-2"
    label="Input text label"
    placeholder="This is placeholder text"
    type="tel"
    mask="(999) 999-9999"
/>
```

##### Error
```jsx padded
<InputText
    name="text-3"
    id="input-text-3"
    label="Input text label"
    placeholder="This is placeholder text"
    error
    errorText={<span>This is error text.</span>}
/>
```

##### Disabled
```jsx padded
<InputText
    name="text-4"
    id="input-text-4"
    label="Input text label"
    placeholder="This is placeholder text"
    value="Text"
    disabled
/>
```

##### ReadOnly
```jsx padded
<InputText
    name="text-5"
    id="input-text-5"
    label="Input text label"
    placeholder="This is placeholder text"
    value="Text"
    readOnly
/>
```