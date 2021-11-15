#### Examples:

##### Default
```jsx padded
<InputPassword 
    name="password-1" 
    id="input-password-1" 
    label="Password input" 
    placeholde="Enter your password" 
    required 
    helperText={<span>This is helper text</span>} 
/>
```

##### Error
```jsx padded
<InputPassword 
    name="password-2" 
    id="input-password-2" 
    label="Password input" 
    placeholde="Enter your password" 
    value="P@ssw0rd!" 
    error 
    errorText={<span>This is an error text</span>} 
/>
```

##### Disabled
```jsx padded
<InputPassword 
    name="password-3" 
    id="input-password-3" 
    label="Password input" 
    placeholde="Enter your password" 
    value="P@ssw0rd!" 
    disabled 
/>
```

##### Read-Only
```jsx padded
  <InputPassword 
    name="password-4" 
    id="input-password-4" 
    label="Password input" 
    placeholde="Enter your password" 
    value="P@ssw0rd!" 
    readOnly 
/>
```