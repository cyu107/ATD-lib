#### Examples:

##### Default - Column - Default Label
```jsx padded
<InputCheckboxGroup 
    name="checkbox-group-1" 
    id="input-checkbox-group-1" 
    legend="Checkbox legend"
    layout="column"
    labelPlacement="default"
    required
    options={[
                  { label: 'Female', value: 'female', disabled: false, id: '1212' },
                  { label: 'Male', value: 'male', disabled: false, id: '121222' },
                  { label: 'Other', value: 'other', disabled: false, id: '121221122' },
                  { label: 'Toaster', value: 'toaster', disabled: false, id: '1111' },
                ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Default - Column - Left Label
```jsx padded
<InputCheckboxGroup 
    name="checkbox-group-2" 
    id="input-checkbox-group-2" 
    legend="Checkbox legend"
    layout="column"
    labelPlacement="left"
    required
    options={[
      { label: '8.0', checked: true, disabled: false, id: 'aaa' },
      { label: '8.5', checked: false, disabled: false, id: 'bbb' },
      { label: '9.0', checked: true, disabled: false, id: 'ccc' },
      { label: '9.5', checked: false, disabled: false, id: 'ddd' },
    ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Default - Column - Right Label
```jsx padded
<InputCheckboxGroup 
    name="checkbox-group-3" 
    id="input-checkbox-group-3" 
    legend="Checkbox legend"
    layout="column"
    labelPlacement="right"
    required
    options={[
      { label: '8.0', checked: true, disabled: false, id: 'aaa' },
      { label: '8.5', checked: false, disabled: false, id: 'bbb' },
      { label: '9.0', checked: true, disabled: false, id: 'ccc' },
      { label: '9.5', checked: false, disabled: false, id: 'ddd' },
    ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Default - Row - Default Label
```jsx padded
<InputCheckboxGroup 
    name="checkbox-group-4" 
    id="input-checkbox-group-4" 
    legend="Checkbox legend"
    layout="row"
    labelPlacement="default"
    required
    options={[
      { label: '8.0', checked: true, disabled: false, id: 'aaa' },
      { label: '8.5', checked: false, disabled: false, id: 'bbb' },
      { label: '9.0', checked: true, disabled: false, id: 'ccc' },
      { label: '9.5', checked: false, disabled: false, id: 'ddd' },
    ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Default - Row - Left Label
```jsx padded
<InputCheckboxGroup 
    name="checkbox-group-5" 
    id="input-checkbox-group-5" 
    legend="Checkbox legend"
    layout="row"
    labelPlacement="left"
    required
    options={[
      { label: '8.0', checked: true, disabled: false, id: 'aaa' },
      { label: '8.5', checked: false, disabled: false, id: 'bbb' },
      { label: '9.0', checked: true, disabled: false, id: 'ccc' },
      { label: '9.5', checked: false, disabled: false, id: 'ddd' },
    ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Default - Row - Right Label
```jsx padded
<InputCheckboxGroup 
    name="checkbox-group-6" 
    id="input-checkbox-group-6" 
    legend="Checkbox legend"
    layout="row"
    labelPlacement="right"
    required
    options={[
      { label: '8.0', checked: true, disabled: false, id: 'aaa' },
      { label: '8.5', checked: false, disabled: false, id: 'bbb' },
      { label: '9.0', checked: true, disabled: false, id: 'ccc' },
      { label: '9.5', checked: false, disabled: false, id: 'ddd' },
    ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Error
```jsx padded
<InputCheckboxGroup 
    name="checkbox-group-7" 
    id="input-checkbox-group-7" 
    legend="Checkbox legend"
    layout="row"
    labelPlacement="left"
    options={[
      { label: '8.0', checked: true, disabled: false, id: 'aaa' },
      { label: '8.5', checked: false, disabled: false, id: 'bbb' },
      { label: '9.0', checked: true, disabled: false, id: 'ccc' },
      { label: '9.5', checked: false, disabled: false, id: 'ddd' },
    ]}
    error
    errorText={<span>This is error text</span>}
/>
```

##### Disabled
```jsx padded
<InputCheckboxGroup 
    name="checkbox-group-8" 
    id="input-checkbox-group-8" 
    legend="Checkbox legend"
    layout="row"
    labelPlacement="left"
    options={[
      { label: '8.0', checked: true, disabled: false, id: 'aaa' },
      { label: '8.5', checked: false, disabled: false, id: 'bbb' },
      { label: '9.0', checked: true, disabled: false, id: 'ccc' },
      { label: '9.5', checked: false, disabled: false, id: 'ddd' },
    ]}
    disabled
/>
```