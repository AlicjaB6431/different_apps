import { useForm } from 'react-hook-form'

import { device } from '../../components/device'

import styled from 'styled-components'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

interface FormProps {
  handleAddArticle: () => void
  axiosPostData: () => void
  setAuthorData: (data: string) => void
  setTextData: (data: string) => void
  setTitleData: (data: string) => void
  formMsg: string
  setFormMsg: (formMsg: string) => void
}

const NewArticle: React.FC<FormProps> = ({
  handleAddArticle,
  setAuthorData,
  setTextData,
  setTitleData,
  axiosPostData,
  formMsg,
  setFormMsg,
}) => {
  const { handleSubmit, register } = useForm({})

  const customHandleSUbmit = () => {
    setFormMsg('')
    axiosPostData()
  }

  return (
    <PopupContainer>
      <PopupHeader>
        <PopupText>Twój artykuł</PopupText>
        <Button
          variant='outlined'
          onClick={handleAddArticle}
        >
          Powrót
        </Button>
      </PopupHeader>
      <MainPopupContainer>
        <BoxContainer sx={{ margin: 4 }}>
          <FormWrapper onSubmit={handleSubmit(customHandleSUbmit)}>
            <TextField
              margin='normal'
              label='Autor'
              {...register('userId', { required: true })}
              onChange={(e) => setAuthorData(e.target.value)}
            />
            <TextField
              margin='normal'
              label='Tytuł'
              {...register('title', { required: true })}
              onChange={(e) => setTitleData(e.target.value)}
            />

            <TextField
              margin='normal'
              id='outlined-multiline-static'
              label='Tekst'
              multiline
              rows={10}
              {...register('body', { required: true })}
              onChange={(e) => setTextData(e.target.value)}
            />

            <SubmitButton
              size='large'
              variant='contained'
              type='submit'
            >
              Zatwierdź
            </SubmitButton>
            <p> {formMsg}</p>
          </FormWrapper>
        </BoxContainer>
      </MainPopupContainer>
    </PopupContainer>
  )
}
export default NewArticle
const PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f8f3f3;
  border: 1px solid rgb(66, 69, 71);
  border-radius: 15px;
  z-index: 100;

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

const MainPopupContainer = styled.div``

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
