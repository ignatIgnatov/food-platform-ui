import { Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

const LoginForm = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const navigate = useNavigate();

  // const handleSubmit = () => { }

  return (
    <div>

      <Typography variant='h5' className='text-center'>
        Login
      </Typography>

      <form onSubmit={formik.handleSubmit}>
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
        <Button
          sx={{ mt: 2, padding: "1rem" }}
          fullWidth
          type='submit'
          variant='contained'
        >
          Login</Button>
      </form>

      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        Don't have an account?
        <Button sx={{ ml: 1 }} size='small' onClick={() => navigate("/account/register")}>Register here</Button>
      </Typography>

      {/* <Formik onSubmit={handleSubmit} initialValue={initialValue}>
        <Form>
          <Field
            as={TextField}
            name='email'
            label='Email'
            value={Formik.}
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <Field
            as={TextField}
            name='password'
            label='Password'
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <Button
            sx={{ mt: 2, padding: "1rem" }}
            fullWidth
            type='submit'
            variant='contained'
          >
            Login</Button>
        </Form>
      </Formik>

      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        Don't have an account?
        <Button sx={{ ml: 1 }} size='small' onClick={() => navigate("/account/register")}>Register here</Button>
      </Typography> */}

    </div>
  )
}

export default LoginForm