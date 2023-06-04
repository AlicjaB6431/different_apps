import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { spacing } from '@mui/system'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(yup)

interface IForm {
  firstName: string
  lastName: string
  email: string
  password: string
  confirm_password: string
  gender: {}
}

const Form = () => {
  const [gender, setGender] = useState('')

  const validationSchema = useMemo(() => {
    return yup.object({
      firstName: yup.string().required('Imię jest wymagane').min(3, 'Imię powinno mieć min 3 litery'),
      lastName: yup.string().required('Nazwisko jest wymagane'),
      email: yup
        .string()
        .required('E-mail jest wymagany')
        .matches(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'E-mail nie jest prawidłowy'
        ),
      password: yup
        .string()
        .required('Hasło jest wymagane')
        .min(8, 'Hasło musi składać się z min 8 znaków, w tym: min. 1 wielka litera, 1 mała litera, min. 1 cyfra, min. 1 znak specjany')
        .minLowercase(1, 'Hasło musi posiadać min. 1 małą literę')
        .minUppercase(1, 'Hasło musi posiadać min. 1 wielką literę')
        .minNumbers(1, 'Hasło musi posiadać min. 1 cyfrę')
        .minSymbols(1, 'Hasło musi posiadać min. 1 znak specjalny'),
      confirm_password: yup
        .string()
        .required('Potwerdzenie hasła jest wymagane')
        .oneOf([yup.ref('password')], 'Potwierdzone hasło jest błędne'),
    })
  }, [])

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<IForm>({ resolver: yupResolver(validationSchema) })

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string)
  }

  const customHandleSUbmit = (data: IForm) => {
    console.log(data)
  }

  return (
    <BoxContainer sx={{ margin: 5 }}>
      <FormWrapper onSubmit={handleSubmit(customHandleSUbmit)}>
        <TextField
          margin='normal'
          error={!!errors.firstName}
          label='Imię'
          helperText={errors.firstName?.message}
          {...register('firstName')}
        />
        <TextField
          margin='normal'
          error={!!errors.lastName}
          label='Nazwisko'
          helperText={errors.lastName?.message}
          {...register('lastName')}
        />
        <TextField
          margin='normal'
          error={!!errors.email}
          label='E-mail'
          helperText={errors.email?.message}
          {...register('email')}
        />
        <FormControl margin='normal'>
          <InputLabel>Płeć</InputLabel>
          <Select
            margin='dense'
            value={gender}
            label='gender'
            {...register('gender')}
            onChange={handleChange}
          >
            <MenuItem value={'men'}>Mężczyzna</MenuItem>
            <MenuItem value={'women'}>Kobieta</MenuItem>
            <MenuItem value={'nonbinar'}>Osoba niebinarna</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin='normal'
          error={!!errors.password}
          label='Hasło'
          type='password'
          helperText={errors.password?.message}
          {...register('password')}
        />
        <TextField
          margin='normal'
          error={!!errors.confirm_password}
          label='Potwierdź hasło'
          type='password'
          helperText={errors.confirm_password?.message}
          {...register('confirm_password')}
        />

        <Button
          size='large'
          type='submit'
          variant='contained'
        >
          Zatwierdź
        </Button>
      </FormWrapper>
    </BoxContainer>
  )
}

export default Form

const BoxContainer = styled(Box)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`
