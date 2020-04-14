import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

const App = () => (
    <>
        <Logo />
        <GlobalStyles />
        <ListOfCategories />
        <ListOfPhotoCards />
    </>
)

export default App
