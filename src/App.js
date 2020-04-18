import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Router } from '@reach/router'
import Context from './Context'

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Logo />
            <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' />
            </Router>
            <Context.Consumer>
                {({ isAuth }) =>
                    isAuth ? (
                        <Router>
                            <Favs path='/favs' />
                            <User path='/user' />
                        </Router>
                    ) : (
                        <Router>
                            <NotRegisteredUser path='/favs' />
                            <NotRegisteredUser path='/user' />
                        </Router>
                    )
                }
            </Context.Consumer>
            <NavBar />
        </>
    )
}

export default App

//Using apollo with documentation
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { ApolloClient } from 'apollo-boost'
// import { ApolloProvider } from '@apollo/react-hooks'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { createHttpLink } from 'apollo-link-http'
// import { setContext } from 'apollo-link-context'
// import { App } from './App'
// import * as serviceWorker from './serviceWorker'
// import Context from '../src/Context'

// const httpLink = createHttpLink({
//   uri: 'https://petgram-server-dfarcos.dariofelipearcos.now.sh/graphql'
// })

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = sessionStorage.getItem('token')
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   }
// })

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// })

// ReactDOM.render(
//   <Context.Provider>
//     <ApolloProviderclient={client}>
//       <App />
//     </ApolloProvider>
//   </Context.Provider>,
//   document.getElementById('app')
// )
