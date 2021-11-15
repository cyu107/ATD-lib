#### Examples:

##### Default - Column - Default Label
```jsx padded
<InputRadioGroup 
    name="radio-group-1" 
    id="input-radio-group-1" 
    legend="Radio legend"
    layout="column"
    labelPlacement="default"
    required
    options={[
      { label: 'Option A', value: 'female', disabled: false, id: '1212' },
      { label: 'Option B', value: 'male', disabled: false, id: '121222' },
      { label: 'Option C', value: 'other', disabled: false, id: '121221122' },
      { label: 'Option D', value: 'toaster', disabled: false, id: '1111' },
    ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Default - Column - Left Label
```jsx padded
<InputRadioGroup 
    name="radio-group-2" 
    id="input-radio-group-2" 
    legend="Radio legend"
    layout="column"
    labelPlacement="left"
    required
    options={[
      { label: 'Option A', value: 'female', disabled: false, id: '1212' },
      { label: 'Option B', value: 'male', disabled: false, id: '121222' },
      { label: 'Option C', value: 'other', disabled: false, id: '121221122' },
      { label: 'Option D', value: 'toaster', disabled: false, id: '1111' },
    ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Default - Column - Right Label
```jsx padded
<InputRadioGroup 
    name="radio-group-3" 
    id="input-radio-group-3" 
    legend="Radio legend"
    layout="column"
    labelPlacement="right"
    required
    options={[
      { label: 'Option A', value: 'female', disabled: false, id: '1212' },
      { label: 'Option B', value: 'male', disabled: false, id: '121222' },
      { label: 'Option C', value: 'other', disabled: false, id: '121221122' },
      { label: 'Option D', value: 'toaster', disabled: false, id: '1111' },
    ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Default - Row - Default Label
```jsx padded
<InputRadioGroup 
    name="radio-group-4" 
    id="input-radio-group-4" 
    legend="Radio legend"
    layout="row"
    labelPlacement="default"
    required
    options={[
      { label: 'Option A', value: 'female', disabled: false, id: '1212' },
      { label: 'Option B', value: 'male', disabled: false, id: '121222' },
      { label: 'Option C', value: 'other', disabled: false, id: '121221122' },
      { label: 'Option D', value: 'toaster', disabled: false, id: '1111' },
    ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Default - Row - Left Label
```jsx padded
<InputRadioGroup 
    name="radio-group-5" 
    id="input-radio-group-5" 
    legend="Radio legend"
    layout="row"
    labelPlacement="left"
    required
    options={[
      { label: 'Option A', value: 'female', disabled: false, id: '1212' },
      { label: 'Option B', value: 'male', disabled: false, id: '121222' },
      { label: 'Option C', value: 'other', disabled: false, id: '121221122' },
      { label: 'Option D', value: 'toaster', disabled: false, id: '1111' },
    ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Default - Row - Right Label
```jsx padded
<InputRadioGroup 
    name="radio-group-6" 
    id="input-radio-group-6" 
    legend="Radio legend"
    layout="row"
    labelPlacement="right"
    required
    options={[
      { label: 'Option A', value: 'female', disabled: false, id: '1212' },
      { label: 'Option B', value: 'male', disabled: false, id: '121222' },
      { label: 'Option C', value: 'other', disabled: false, id: '121221122' },
      { label: 'Option D', value: 'toaster', disabled: false, id: '1111' },
    ]}
    helperText={<span>This is helper text</span>} 
/>
```

##### Error
```jsx padded
<InputRadioGroup 
    name="radio-group-7" 
    id="input-radio-group-7" 
    legend="Radio legend"
    layout="row"
    labelPlacement="left"
    options={[
      { label: 'Option A', value: 'female', disabled: false, id: '1212' },
      { label: 'Option B', value: 'male', disabled: false, id: '121222' },
      { label: 'Option C', value: 'other', disabled: false, id: '121221122' },
      { label: 'Option D', value: 'toaster', disabled: false, id: '1111' },
    ]}
    error
    errorText={<span>This is error text</span>}
/>
```

##### Disabled
```jsx padded
<InputRadioGroup 
    name="radio-group-8" 
    id="input-radio-group-8" 
    legend="Radio legend"
    layout="row"
    labelPlacement="left"
    options={[
      { label: 'Option A', value: 'female', disabled: false, id: '1212' },
      { label: 'Option B', value: 'male', disabled: false, id: '121222' },
      { label: 'Option C', value: 'other', disabled: false, id: '121221122' },
      { label: 'Option D', value: 'toaster', disabled: false, id: '1111' },
    ]}
    disabled
/>
```