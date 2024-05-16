import { useEffect, useReducer } from 'react'
import GlobalStyles from './core/GlobalStyle'
import { AffectationContext } from './Contexts/AffectationContexts'
import { initialState, reducer } from './Store'
import { Container } from './styles'
import SideBarLayout from './Layouts/SideBarLayout'
import SolutionLayout from './Layouts/SolutionLayout'

const App = () => {
  const [affectationData, dispatch] = useReducer(reducer, initialState);

  useEffect(() =>{
    console.log("Evolution des données: ", affectationData);
  }, [affectationData]);

  return (
    <>
      <AffectationContext.Provider value={{affectationData, dispatch}}>
        <GlobalStyles/>
        <Container>
          <SolutionLayout/>
          <SideBarLayout/>
        </Container>
      </AffectationContext.Provider>
    </>
  )
}

export default App;