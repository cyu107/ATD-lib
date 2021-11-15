import React, { ReactElement } from 'react'
import { Formik, FormikProps, Form } from 'formik'
import * as Yup from 'yup'

import Container from '@bit/littlebox.atd.container'
import InputText from '@bit/littlebox.atd.forms.input-text'
import InputTextArea from '@bit/littlebox.atd.forms.input-text-area'
import InputPassword from '@bit/littlebox.atd.forms.input-password'
import InputTinyMCE from '@bit/littlebox.atd.forms.input-tiny-mce'
import InputCheckbox from '@bit/littlebox.atd.forms.input-checkbox'
import InputCheckboxGroup from '@bit/littlebox.atd.forms.input-checkbox-group'
import InputRadio from '@bit/littlebox.atd.forms.input-radio'
import InputRadioGroup from '@bit/littlebox.atd.forms.input-radio-group'
import Select from 'components/Select'
import Toggle from '@bit/littlebox.atd.toggle'

interface Values {
  firstName: string
  phoneNumber: string
  password: string
  message: string
  bio: string
  age: number | string | null
  unsubscribe: boolean | undefined
  sizes: object[]
  radio: boolean
  gender: string
  cool: boolean
}

const DisplayFormikState = (props: FormikProps<Values>) => (
  <div style={{ margin: '1rem 0' }}>
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
)

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  password: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(10, 'Must be 15 characters or less')
    .required('Required'),
  message: Yup.string().min(4, 'Must be 4 characters or more').required('Required'),
  bio: Yup.string()
    .max(1500, "You've reached the max limit of characters allowed")
    .required('Required'),
  age: Yup.string().required('Required'),
  gender: Yup.string().oneOf(['toaster']).required('Required'),
  unsubscribe: Yup.boolean().oneOf([true]),
  sizes: Yup.array().min(2).max(4).required('Required'),
  radio: Yup.boolean().oneOf([true]),
  cool: Yup.boolean().oneOf([true]),
})

const Inputs = (): ReactElement => (
  <Container>
    <Formik
      initialValues={{
        firstName: '',
        phoneNumber: '',
        password: '',
        message: '',
        bio: '',
        age: '',
        unsubscribe: false,
        sizes: [],
        radio: false,
        gender: '',
        cool: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props: FormikProps<Values>) => (
        <Form>
          <InputText
            name="firstName"
            id="inputOne"
            label="First Name"
            placeholder="This is placeholder text"
            type="text"
            required
            // disabled
            // readOnly
            onBlur={() => {
              props.setFieldTouched('firstName', true, true)
            }}
            onChange={(event) => {
              props.setFieldValue('firstName', event.target.value)
            }}
            value={props.values.firstName}
            helperText={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate error minima
                necessitatibus rerum.
              </span>
            }
            error={!!(props.touched.firstName && props.errors.firstName)}
            errorText={props.errors.firstName}
          />

          <br />

          <InputText
            name="phoneNumber"
            id="inputMask"
            label="Primary Number"
            placeholder="This is placeholder text"
            type="tel"
            mask="(999) 999-9999"
            // required
            // disabled
            // readOnly
            onBlur={() => {
              props.setFieldTouched('phoneNumber', true, true)
            }}
            onChange={(event) => {
              props.setFieldValue('phoneNumber', event.target.value)
            }}
            value={props.values.phoneNumber}
            error={!!(props.touched.phoneNumber && props.errors.phoneNumber)}
            errorText={props.errors.phoneNumber}
          />

          <br />

          <InputPassword
            name="password"
            id="inputTwo"
            label="Password"
            placeholder="Enter your password"
            required
            // disabled
            // readOnly
            onBlur={() => {
              props.setFieldTouched('password', true, true)
            }}
            onChange={(event) => {
              props.setFieldValue('password', event.target.value)
            }}
            value={props.values.password}
            helperText={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate error minima
                necessitatibus rerum.
              </span>
            }
            error={!!(props.touched.password && props.errors.password)}
            errorText={props.errors.password}
          />

          <br />

          <InputTextArea
            name="message"
            id="inputThree"
            label="Message"
            placeholder="This is placeholder text"
            required
            // disabled
            // readOnly
            onBlur={() => {
              props.setFieldTouched('message', true, true)
            }}
            onChange={(event) => {
              props.setFieldValue('message', event.target.value)
            }}
            value={props.values.message}
            helperText={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate error minima
                necessitatibus rerum.
              </span>
            }
            error={!!(props.touched.message && props.errors.message)}
            errorText={props.errors.message}
          />

          <br />

          <InputTinyMCE
            name="bio"
            id="inputFour"
            label="Biography"
            placeholder="This is placeholder text"
            maxChar={1500}
            required
            // disabled
            // readOnly
            onBlur={() => {
              props.setFieldTouched('bio', true, true)
            }}
            onChange={(content: string) => {
              props.setFieldValue('bio', content)
            }}
            initialValue={props.initialValues.bio}
            value={props.values.bio}
            helperText={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate error minima
                necessitatibus rerum.
              </span>
            }
            error={!!(props.touched.bio && props.errors.bio)}
            errorText={props.errors.bio}
          />

          <br />

          <Select
            name="age"
            label="How old are you?"
            placeholder="Select your age"
            id="inputFive"
            required
            // disabled
            // readOnly
            onBlur={() => {
              props.setFieldTouched('age', true, true)
            }}
            onChange={(event) => {
              props.setFieldValue('age', event.target.value)
            }}
            value={props.values.age}
            options={[
              {
                value: 1,
                label: 'one',
              },
              {
                value: 20,
                label: 'twenty',
              },
              {
                value: 30,
                label: 'thirty',
              },
            ]}
            helperText={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate error minima
                necessitatibus rerum.
              </span>
            }
            error={!!(props.touched.age && props.errors.age)}
            errorText={props.errors.age}
          />

          <br />

          <InputCheckbox
            name="unsubscribe"
            label="Do you want to Unsubscribe?"
            labelPlacement="right"
            placeholder="Select your age"
            id="inputSix"
            size="medium"
            // required
            // disabled
            // readOnly
            checked={props.values.unsubscribe}
            onBlur={() => {
              props.setFieldTouched('unsubscribe', true, true)
            }}
            onChange={() => props.setFieldValue('unsubscribe', !props.values.unsubscribe)}
            helperText={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate error minima
                necessitatibus rerum.
              </span>
            }
            error={!!(props.touched.unsubscribe && props.errors.unsubscribe)}
            errorText={props.errors.unsubscribe}
          />

          <br />
          <br />

          <InputCheckboxGroup
            name="sizes"
            legend="What size shoe do you wear?"
            layout="column"
            labelPlacement="left"
            size="small"
            // required
            // disabled
            // readOnly
            value={props.values.sizes}
            onBlur={() => {
              props.setFieldTouched('sizes', true, true)
            }}
            onChange={(event) => {
              if (props.values.sizes.includes(event.target.value)) {
                const nextValues = props.values.sizes.filter(
                  (value): boolean => value !== event.target.value,
                )
                props.setFieldValue('sizes', nextValues)
              } else {
                const nextValues = [...props.values.sizes, event.target.value]
                props.setFieldValue('sizes', nextValues)
              }
            }}
            options={[
              { label: '8.0', checked: true, disabled: false, id: 'aaa' },
              { label: '8.5', checked: false, disabled: false, id: 'bbb' },
              { label: '9.0', checked: true, disabled: false, id: 'ccc' },
              { label: '9.5', checked: false, disabled: false, id: 'ddd' },
            ]}
            helperText={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate error minima
                necessitatibus rerum.
              </span>
            }
            error={!!(props.touched.sizes && props.errors.sizes)}
            errorText={props.errors.sizes}
          />

          <br />
          <br />

          <InputRadio
            name="radio"
            label="Radio label"
            labelPlacement="right"
            id="inputSeven"
            size="medium"
            // required
            // disabled
            // readOnly
            checked={props.values.radio}
            onBlur={() => {
              props.setFieldTouched('radio', true, true)
            }}
            onChange={() => props.setFieldValue('radio', !props.values.radio)}
            helperText={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate error minima
                necessitatibus rerum.
              </span>
            }
            error={!!(props.touched.radio && props.errors.radio)}
            errorText={props.errors.radio}
          />

          <br />
          <br />

          <InputRadioGroup
            name="gender"
            legend="What is your gender?"
            layout="column"
            labelPlacement="right"
            size="small"
            // required
            // disabled
            // readOnly
            value={props.values.gender}
            onBlur={() => {
              props.setFieldTouched('gender', true, true)
            }}
            onChange={(event) => props.setFieldValue('gender', event.target.value)}
            options={[
              { label: 'Female', value: 'female', disabled: false, id: '1212' },
              { label: 'Male', value: 'male', disabled: false, id: '121222' },
              { label: 'Other', value: 'other', disabled: false, id: '121221122' },
              { label: 'Toaster', value: 'toaster', disabled: false, id: '1111' },
            ]}
            helperText={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate error minima
                necessitatibus rerum.
              </span>
            }
            error={!!(props.touched.gender && props.errors.gender)}
            errorText={props.errors.gender}
          />

          <br />
          <br />

          <Toggle
            name="cool"
            label="Are you cool?"
            labelPlacement="default"
            id="inputEight"
            size="medium"
            // onOff
            // required
            // disabled
            // readOnly
            checked={props.values.cool}
            onBlur={() => props.setFieldTouched('cool', true, true)}
            onChange={() => props.setFieldValue('cool', !props.values.cool)}
            helperText={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate error minima
                necessitatibus rerum.
              </span>
            }
            error={!!(props.touched.cool && props.errors.cool)}
            errorText={props.errors.cool}
          />

          <br />

          <DisplayFormikState {...props} />

          <button type="submit">Submit</button>
          <button onClick={props.handleReset}>Reset</button>
        </Form>
      )}
    </Formik>
  </Container>
)

export default Inputs
