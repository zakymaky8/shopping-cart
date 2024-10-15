import { Fragment } from 'react'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import route from './route'

// const router = createBrowserRouter(route)

function App() {

  return (
    <Fragment>
      <div>
        <Header />
        {/* <RouterProvider router={router}/> */}
      </div>
    </Fragment>
  )
}

export default App
