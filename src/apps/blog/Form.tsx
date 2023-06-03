import { useForm, SubmitHandler, Controller, PathString } from 'react-hook-form'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import { useState } from 'react'
import { ErrorMessage } from '@hookform/error-message'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  firstName: string
  lastName: string
  gender: GenderEnum
  age: number
  exampleRequired: PathString
  MyCheckbox: string
  test: string
  email: string
  password: string
}
const Form = () => {
  const [gender, setGender] = useState('')
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const formData = { ...data, gender: gender }
    console.log(formData)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value)
  }

  const errorMsg = <T extends keyof IFormInput>(item: T) => {
    return (
      <ErrorMessage
        errors={errors}
        name={item}
        render={({ message }) => <p>{message}</p>}
      />
    )
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputLabel> Imię</InputLabel>
        <Controller
          name='firstName'
          control={control}
          rules={{ required: 'Pole wymagane.' }}
          render={({ field }) => (
            <>
              <TextField {...field} />
              {errorMsg('firstName')}
            </>
          )}
        />
      </div>
      <div>
        <InputLabel> Nazwisko</InputLabel>
        <Controller
          name='lastName'
          control={control}
          rules={{ required: 'Pole wymagane.' }}
          render={({ field }) => (
            <>
              <TextField {...field} />
              {errorMsg('lastName')}
            </>
          )}
        />
      </div>
      <div>
        <InputLabel> E-mail</InputLabel>
        <Controller
          name='email'
          control={control}
          rules={{ required: `E-mail wymagany` }}
          render={({ field }) => (
            <>
              <TextField {...field} />
              {errorMsg('email')}
            </>
          )}
        />
      </div>
      <div>
        <InputLabel> Hasło</InputLabel>
        <Controller
          name='password'
    
          control={control}
          rules={{
            required: 'Pole wymagane',
          }}
          render={({ field }) => (
            <>
              <TextField {...field} />
              {errorMsg('password')}
            </>
          )}
        />
      </div>
      <div>
        <InputLabel>Płeć</InputLabel>

        <Select
          value={gender}
          onChange={handleChange}
        >
          <MenuItem value={''}>
            <em>Wybierz</em>
          </MenuItem>
          <MenuItem value={'female'}>kobieta</MenuItem>
          <MenuItem value={'male'}>mężczyzna</MenuItem>
          <MenuItem value={'other'}>inne</MenuItem>
        </Select>
      </div>
      <div>
        <InputLabel>Mam skończone 18 lat</InputLabel>
        <Controller
          name='age'
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        />
      </div>

      <Button
        type='submit'
        variant='outlined'
      >
        Zatwierdź
      </Button>
    </FormWrapper>
  )
}

export default Form

const FormWrapper = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const GenderContainer = styled.div`
  display: flex;
`
