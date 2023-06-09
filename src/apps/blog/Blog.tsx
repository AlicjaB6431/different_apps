import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { useQuery } from '@tanstack/react-query'

import Form from './Form'
import NewArticle from './NewArticle'
import { device } from '../../components/device'

import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const Blog = () => {
  const [popup, setPopup] = useState(false)

  const [showAddArticle, setShowAddArticle] = useState(false)

  const [searchArt, setSearchArt] = useState('')

  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:5000/posts')
      const data = await response.data
      return data
    },
  })

  if (postQuery.isLoading) return <h1>Loading....</h1>
  if (postQuery.isError) return <h1>Error loading data!!!</h1>

  const handleShowPopup = () => {
    setPopup(!popup)
  }

  const searchSingleItem = (e) => {
    setSearchArt(e.target.value)
  }

  const handleAddArticle = () => {
    setShowAddArticle(!showAddArticle)
  }

  return (
    <MainWrapper>
      <MainHeaderContainer>
        <HeaderContainer>
          <LaptopChromebookIcon fontSize='large'></LaptopChromebookIcon>
          <MainTextContainer>Blog</MainTextContainer>
        </HeaderContainer>

        <LogBtn
          variant='outlined'
          size='small'
          onClick={handleShowPopup}
          style={{ minWidth: '30px', fontSize: '10px' }}
        >
          Załóż konto
        </LogBtn>

        {popup && <Form handleShowPopup={handleShowPopup} />}
      </MainHeaderContainer>
      <MainArticlesContainer>
        <AddArticleBtn
          variant='outlined'
          size='small'
          onClick={handleAddArticle}
          style={{ minWidth: '30px', fontSize: '10px' }}
        >
          Dodaj artykuł
        </AddArticleBtn>
        {showAddArticle && <NewArticle handleAddArticle={handleAddArticle} />}
        <SearchContainer>
          <TextField
            id='outlined-basic'
            label='Wyszukaj...'
            variant='outlined'
            onChange={searchSingleItem}
          />
        </SearchContainer>

        {postQuery.data
          .filter((item) => {
            return searchArt.toLowerCase() === '' ? item : item.title.toLowerCase().includes(searchArt)
          })
          .map((item) => (
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

  @media ${device.tablet} {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    max-width: 1000px;
  }
`
const MainHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
`
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`
const MainTextContainer = styled.h2`
  font-size: 50px;
  font-family: 'Playfair', serif;
  margin-left: 10px;
`

const LogBtn = styled(Button)`
  height: 30px;
`

const MainArticlesContainer = styled.div``

const AddArticleBtn = styled(Button)``
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 40px;
`
const ArticleContainer = styled.div`
  border-bottom: 1px solid black;
  margin: 40px 20px 0px;
`
const ArticleHeader = styled.h3`
  font-size: 25px;
  margin-bottom: 15px;
`
const ArticleText = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
`
const ArtiicleAuthor = styled.p`
  font-size: 14px;
`
