import { Button, MenuItem, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

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
    .required('Password is required'),
  role: yup
    .string('Enter your role')
    .required("Role is required")
});

const RegisterForm = () => {

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

  // const handleSubmit = () => {}

  return (
    <div>

      <Typography variant='h5' className='text-center'>
        Register
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          margin='normal'
          variant='outlined'
          fullWidth
          id="fullName"
          name="fullName"
          label="Full Name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          margin='normal'
          variant='outlined'
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          margin='normal'
          variant='outlined'
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          select
          margin='normal'
          variant='outlined'
          fullWidth
          id="role"
          name='role'
          labelId="role"
          label="Role"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.role && Boolean(formik.errors.role)}
          helperText={formik.touched.role && formik.errors.role}
        >
          <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
          <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
        </TextField>

        <Button
          sx={{ mt: 2, padding: "1rem" }}
          fullWidth
          type='submit'
          variant='contained'
        >
          Register</Button>
      </form>

      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        You have an account yet?
        <Button sx={{ ml: 1 }} size='small' onClick={() => navigate("/account/login")}>Login here</Button>
      </Typography>
    </div>
  )
}

export default RegisterForm