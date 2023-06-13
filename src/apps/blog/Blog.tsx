import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { useQuery } from '@tanstack/react-query'

import Form from './Form'
import NewArticle from './NewArticle'
import { device } from '../../components/device'

import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

interface Item {
  id: number
  title: string
  body: string
  userId: number
}

const Blog = () => {
  const [popup, setPopup] = useState(false)
  const [showAddArticle, setShowAddArticle] = useState(false)
  const [searchArt, setSearchArt] = useState('')

  const [authorData, setAuthorData] = useState('')
  const [textData, setTextData] = useState('')
  const [titleData, setTitleData] = useState('')
  const [formMsg, setFormMsg] = useState('')

  const axiosFetchData = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:5000/posts')
      const data = await response.data
      return data
    },
  })

  if (axiosFetchData.isLoading) return <h1>Loading....</h1>
  if (axiosFetchData.isError) return <h1>Error loading data!!!</h1>

  const axiosPostData = async () => {
    const postData = {
      title: titleData,
      body: textData,
      userId: authorData,
    }

    await axios.post('http://localhost:5000/posts', postData).then((res) => setFormMsg(res.data))
  }

  const handleShowPopup = () => {
    setPopup(!popup)
  }

  const searchSingleItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchArt(e.target.value)
  }

  const handleAddArticle = () => {
    setShowAddArticle(!showAddArticle)
  }

  return (
    <MainWrapper>
      <HeaderContainer>
        <HeaderOverlay>
          <MainTextContainer>Mój Blog</MainTextContainer>
        </HeaderOverlay>
      </HeaderContainer>

      <MainArticlesContainer>
        <BtnsContainer>
          <LogBtn
            variant='outlined'
            size='small'
            onClick={handleShowPopup}
      
          >
            Załóż konto
          </LogBtn>
          {popup && <Form handleShowPopup={handleShowPopup} />}
          <AddArticleBtn
            variant='outlined'
            size='small'
            onClick={handleAddArticle}
          
          >
            Dodaj artykuł
          </AddArticleBtn>

          {showAddArticle && (
            <NewArticle
              handleAddArticle={handleAddArticle}
              setAuthorData={setAuthorData}
              setTextData={setTextData}
              setTitleData={setTitleData}
              axiosPostData={axiosPostData}
              formMsg={formMsg}
              setFormMsg={setFormMsg}
            />
          )}
        </BtnsContainer>
        <SearchContainer>
          <TextField
            id='outlined-basic'
            label='Wyszukaj...'
            variant='outlined'
            onChange={searchSingleItem}
          />
        </SearchContainer>

        {axiosFetchData.data
          .filter((item: Item) => {
            return searchArt.toLowerCase() === '' ? item : item.title.toLowerCase().includes(searchArt)
          })
          .map((item: Item) => (
            <ArticleContainer key={item.id}>
              <ArticleHeader>{item.title}</ArticleHeader>
              <ArticleText>{item.body}</ArticleText>
              <ArtiicleAuthor>Autor: {item.userId}</ArtiicleAuthor>
            </ArticleContainer>
          ))}
      </MainArticlesContainer>
    </MainWrapper>
  )
}

export default Blog
const MainWrapper = styled.div`
  height: 100%;
  font-size: 3em;
  margin: 10px;

  @media ${device.tablet} {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    max-width: 1000px;
  }
`

const HeaderContainer = styled.header`
  text-align: center;
  width: 100%;
  height: auto;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 85% 85% / 30%;
  background: rgb(65, 62, 122);
  @media ${device.tablet} {
    height: 100px;
  }
`

const HeaderOverlay = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  color: #fff;
  text-shadow: 1px 1px 1px #333;
  background: linear-gradient(
    90deg,
    rgba(65, 62, 122, 1) 0%,
    rgba(16, 16, 65, 0.8223234624145785) 37%,
    rgba(128, 71, 131, 0.8405466970387243) 100%
  );
`
const MainTextContainer = styled.h2`
  font-size: 50px;
  font-family: 'Playfair', serif;
  margin-left: 10px;
`
const BtnsContainer = styled.div`
  padding: 10px;
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
`
const LogBtn = styled(Button)`

`

const AddArticleBtn = styled(Button)`

`

const MainArticlesContainer = styled.div``
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ArticleContainer = styled.div`
  border: 1px solid rgba(121, 121, 122, 0.452);
  margin: 30px 0px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgb(88, 88, 88);
`
const ArticleHeader = styled.h3`
  font-size: 25px;
  margin-bottom: 15px;
  text-align: center;
`
const ArticleText = styled.p`
  font-size: 16px;
  padding-bottom: 10px;
  text-align: center;
`
const ArtiicleAuthor = styled.p`
  font-size: 14px;
  text-align: end;
`
