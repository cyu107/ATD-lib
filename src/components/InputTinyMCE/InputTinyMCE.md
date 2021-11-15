#### Examples:

##### Default
```jsx padded
<InputTinyMCE 
    name="tinyMCE-1" 
    id="input-tinyMCE-1" 
    label="Rich Text Editor label"
    placeholder="This is placeholder text" 
    required 
    helperText={<span>This is helper text</span>} 
/>
```

##### Default with Max Character limit
```jsx padded
<InputTinyMCE 
    name="tinyMCE-1" 
    id="input-tinyMCE-1" 
    label="Rich Text Editor label"
    placeholder="This is placeholder text"
    maxChar={1500}
    required 
    helperText={<span>This is helper text</span>} 
/>
```

##### Error
```jsx padded
<InputTinyMCE 
    name="tinyMCE-2" 
    id="input-tinyMCE-2" 
    label="Rich Text Editor label"
    placeholder="This is placeholder text"
    initialValue="This is a short bio..."
    error 
    errorText={<span>This is error text</span>} 
/>
```

##### Disabled
```jsx padded
<InputTinyMCE 
    name="tinyMCE-3" 
    id="input-tinyMCE-3" 
    label="Rich Text Editor label"
    placeholder="This is placeholder text"
    initialValue="This is a short bio..."
    disabled 
/>
```

##### Read-Only
```jsx padded
<InputTinyMCE 
    name="tinyMCE-4" 
    id="input-tinyMCE-4" 
    label="Rich Text Editor label"
    placeholder="This is placeholder text"
    initialValue="This is a short bio..."
    readOnly 
/>
```