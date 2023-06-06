import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SideBarData } from './SideBarData'
import { IconContext } from 'react-icons'

const SideBar = () => {
  const [sideBar, setSideBar] = useState(false)

  const handleSelect = () => {
    if (sideBar) return 'active'
    else return 'not-active'
  }

  const showSideBar = () => {
    setSideBar(!sideBar)
    handleSelect()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <NavBar>
          <MenuBars to='#'>
            <FaIcons.FaBars onClick={showSideBar} />
          </MenuBars>
        </NavBar>

        <NavMenu isActive={handleSelect()} onMouseLeave={showSideBar}>
          <NavMenuItems>
            <NavBarToggle>
              <MenuBars to='#'>
                <AiIcons.AiOutlineClose onClick={showSideBar} />
              </MenuBars>
            </NavBarToggle>
            {SideBarData.map((item, index) => {
              return (
                <TextName key={index} >
                  <StyledLink to={item.path}>
                    {item.icon}
                    <StyledSpan>{item.name}</StyledSpan>
                  </StyledLink>
                </TextName>
              )
            })}
          </NavMenuItems>
        </NavMenu>
      </IconContext.Provider>
    </>
  )
}

export default SideBar

const NavBar = styled.div`
  background-color: #060b26;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;

`

const MenuBars = styled(Link)`
  margin-left: 2em;
  font-size: 2em;
  background: none;

`

const NavMenu = styled.nav<{ isActive?: string }>`
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
  z-index: 1000;
  ${({ isActive }) =>
    isActive === 'active' &&
    css`
      left: 0;
      transition: 350ms;
    `}
`

const NavMenuItems = styled.ul``
const TextName = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
  &:hover {
    background-color: #1a83ff;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
`
const NavBarToggle = styled.li`
  background-color: #060b26;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`

const StyledSpan = styled.span`
  margin-left: 16px;
`
