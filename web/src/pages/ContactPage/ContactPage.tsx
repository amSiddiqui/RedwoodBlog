import { Box, Button, Stack, Typography, TextField, Alert } from '@mui/material'
import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

import { Form, Controller, SubmitHandler, useForm } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/dist/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const formMethods = useForm()

  const [create, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
    formMethods.reset()
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Stack spacing={2}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Toaster />
        <Form
          formMethods={formMethods}
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          error={error}
        >
          <Stack spacing={2} maxWidth={'sm'}>
            {error && <Alert severity="error">{error?.message}</Alert>}
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Controller
                name="name"
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter your name',
                  },
                }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value ? value : ''}
                    ref={ref}
                    label="Name"
                    name={name}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
            <Box>
              <Controller
                name="email"
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter your email address',
                  },
                }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value ? value : ''}
                    ref={ref}
                    label="Email"
                    name={name}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
            <Box>
              <Controller
                name="message"
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter a message',
                  },
                }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value ? value : ''}
                    multiline
                    minRows={4}
                    ref={ref}
                    label="Message"
                    name={name}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
            <Box>
              <Button disabled={loading} type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </Stack>
        </Form>
      </Stack>
    </>
  )
}

export default ContactPage
