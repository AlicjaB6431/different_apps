import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { device } from '../../components/device'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
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

interface FormProps {
  handleShowPopup: () => void
}

const Form: React.FC<FormProps> = ({ handleShowPopup }) => {
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
    <PopupContainer>
      <PopupHeader>
        <PopupText>Załóż konto</PopupText>
        <Button
          onClick={handleShowPopup}
          size='large'
          variant='outlined'
        >
          Powrót
        </Button>
      </PopupHeader>
      <MainPopupContainer>
        <BoxContainer sx={{ margin: 5 }}>
          <FormWrapper onSubmit={handleSubmit(customHandleSUbmit)}>
            <TextField
              margin='dense'
              error={!!errors.firstName}
              label='Imię'
              helperText={errors.firstName?.message}
              {...register('firstName')}
            />
            <TextField
              margin='dense'
              error={!!errors.lastName}
              label='Nazwisko'
              helperText={errors.lastName?.message}
              {...register('lastName')}
            />
            <TextField
              margin='dense'
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
              margin='dense'
              error={!!errors.password}
              label='Hasło'
              type='password'
              helperText={errors.password?.message}
              {...register('password')}
            />
            <TextField
              margin='dense'
              error={!!errors.confirm_password}
              label='Potwierdź hasło'
              type='password'
              helperText={errors.confirm_password?.message}
              {...register('confirm_password')}
            />
            <SubmitButton
              size='large'
              variant='contained'
              type='submit'
            >
              Zatwierdź
            </SubmitButton>
          </FormWrapper>
        </BoxContainer>
      </MainPopupContainer>
    </PopupContainer>
  )
}
export default Form
const PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f8f3f3;
  border: 1px solid rgb(66, 69, 71);
  border-radius: 15px;

  @media ${device.mobileM} {
    height: 90%;
    width: 90%;
  }
  @media (min-width: 400px) {
   height: 70%;
   
  }
  @media ${device.tablet} {
    width: 60%;
    max-width: 700px;
    height: 70%;
  }
`
const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 0 15px 0 15px;


`
const PopupText = styled.h1`
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
`

const MainPopupContainer = styled.div`


`

const BoxContainer = styled(Box)``
const FormWrapper = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`
const SubmitButton = styled(Button)`
  margin-top: 20px;
`
