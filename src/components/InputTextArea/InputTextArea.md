#### Examples:

##### Default
```jsx padded
<InputTextArea 
    name="textArea-1" 
    id="input-textArea-1" 
    label="Text Area input" 
    placeholder="This is placeholder text" 
    required 
    helperText={<span>This is helper text</span>} 
/>
```

##### Error
```jsx padded
<InputTextArea 
    name="textArea-2" 
    id="input-textArea-2" 
    label="Text Area input" 
    placeholder="This is placeholder text"
    value="This is a short bio..."
    error 
    errorText={<span>This is error text</span>} 
/>
```

##### Disabled
```jsx padded
<InputTextArea 
    name="textArea-3" 
    id="input-textArea-3" 
    label="Text Area input" 
    placeholder="This is placeholder text"
    value="This is a short bio..."
    disabled 
/>
```

##### Read-Only
```jsx padded
<InputTextArea 
    name="textArea-4" 
    id="input-textArea-4" 
    label="Text Area input" 
    placeholder="This is placeholder text"
    value="This is a short bio..."
    readOnly 
/>
```