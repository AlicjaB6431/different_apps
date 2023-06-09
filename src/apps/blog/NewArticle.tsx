import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { renderToString } from 'react-dom/server'

import { device } from '../../components/device'

import axios from 'axios'
import styled from 'styled-components'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

interface IForm {
  text: string
  author: string
  title: string
}

interface FormProps {
  handleAddArticle: () => void
}

const NewArticle: React.FC<FormProps> = ({ handleAddArticle }) => {
  const {
    formState: {},
    handleSubmit,
    register,
  } = useForm<IForm>({})

  const [authorData, setAuthorData] = useState('')
  const [textData, setTextData] = useState('')
  const [titleData, setTitleData] = useState('')
  const [formMsg, setFormMsg] = useState('')

  const axiosPostData = async () => {
    const postData = {
      title: titleData,
      body: textData,
      userId: authorData,
    }

    await axios.post('http://localhost:5000/posts', postData).then((res) => setFormMsg(res.data))
  }

  const customHandleSUbmit = (data: IForm) => {
    setAuthorData(data.author)
    setTextData(data.text)
    setTitleData(data.title)

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
              {...register('author')}
            />
            <TextField
              margin='normal'
              label='Tytuł'
              {...register('title')}
            />

            <TextField
              margin='normal'
              id='outlined-multiline-static'
              label='Tekst'
              multiline
              rows={10}
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
  z-index: 1;

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
