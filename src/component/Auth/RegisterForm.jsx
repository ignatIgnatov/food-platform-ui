import { Button, MenuItem, TextField, Typography } from '@mui/material'
import { Field, Form, Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { registerUser } from '../../state/authentication/Action';
import { useDispatch } from 'react-redux';
import { roles } from '../../util/utils';

const validationSchema = yup.object({
  fullName: yup
    .string("Enter your full name")
    .required("Full name is required"),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required')
});

const RegisterForm = () => {

  const dispatch = useDispatch();

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    role: ''
  }

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      role: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(registerUser({ userData: values, navigate }))
  }

  return (
    <div>

      <Typography variant='h5' className='text-center'>
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name='fullName'
            label='Full Name'
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <Field
            as={TextField}
            name='email'
            label='Email'
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <Field
            as={TextField}
            name='password'
            label='Password'
            type='password'
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <Field
            as={TextField}
            select
            margin='normal'
            variant='outlined'
            fullWidth
            name='role'
            label="Select Role"
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && formik.errors.role}
          >
            {roles.map((role) => <MenuItem key={role.name} value={role.value}>{role.name}</MenuItem>)}
          </Field>
          <Button
            sx={{ mt: 2, padding: "1rem" }}
            fullWidth
            type='submit'
            variant='contained'
          >
            Register</Button>
        </Form>
      </Formik>

      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        You have an account yet?
        <Button sx={{ ml: 1 }} size='small' onClick={() => navigate("/account/login")}>Login here</Button>
      </Typography>
    </div>
  )
}

export default RegisterForm