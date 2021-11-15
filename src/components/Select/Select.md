#### Examples:

##### Default
```jsx padded
<Select
    name="select-1"
    id="select-1"
    label="Select label"
    placeholder="Select placeholder"
    required
    options={[
        {
            value: 1,
            label: 'Option A',
        },
        {
            value: 20,
            label: 'Option B',
        },
        {
            value: 30,
            label: 'Option C',
        },
    ]}
    helperText={<span>This is helper text.</span>}
/>
```

##### Error
```jsx padded
<Select
    name="select-2"
    id="select-2"
    label="Select label"
    placeholder="Select placeholder"
    required
    error
    options={[
        {
            value: 1,
            label: 'Option A',
        },
        {
            value: 20,
            label: 'Option B',
        },
        {
            value: 30,
            label: 'Option C',
        },
    ]}
    errorText={<span>This is error text.</span>}
/>
```

##### Disabled
```jsx padded
<Select
    name="select-3"
    id="select-3"
    label="Select label"
    placeholder="Select placeholder"
    required
    disabled
    options={[
        {
            value: 1,
            label: 'Option A',
        },
        {
            value: 20,
            label: 'Option B',
        },
        {
            value: 30,
            label: 'Option C',
        },
    ]}
    helperText={<span>This is helper text.</span>}
/>
```

##### Read-Only
```jsx padded
<Select
    name="select-4"
    id="select-4"
    label="Select label"
    placeholder="Select placeholder"
    required
    readOnly
    options={[
        {
            value: 1,
            label: 'Option A',
        },
        {
            value: 20,
            label: 'Option B',
        },
        {
            value: 30,
            label: 'Option C',
        },
    ]}
    helperText={<span>This is helper text.</span>}
/>
```