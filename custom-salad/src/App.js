import logo from './logo.svg'
import { Navigation, SaladMaker, UserContext } from './components'

const user = {
  name: 'Kwame',
  favorites: ['avocado', 'carrot'],
}

const App = () => {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  )
}

export default App
