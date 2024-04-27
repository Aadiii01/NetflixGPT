import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Default from './Components/SignUp/Default.jsx'
import Body from './Components/SignIn/Body.jsx'
import { Provider } from "react-redux";
import appStore from "./Components/toolkit/appStore.js"
import MoviePage from './Components/Movie/MoviePage.jsx'
import About,{githubinfoloader} from './Components/Github/About.jsx'
import ProjectDeatils from './Components/Project/ProjectDeatils.jsx'
import GptPage from './Components/Chat/GptPage.jsx'

const Home = lazy(() => import("./Components/Home/Browse.jsx"))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Default/>}/>
      <Route path='login' element={<Body/>}/>
      <Route path='browse' element={<Suspense><Home/></Suspense>}/>
      <Route path='info' element={<ProjectDeatils/>}/>
      <Route path='gptsearch' element={<GptPage/>}/>
      <Route path='movie/:id' element={<MoviePage/>}/>
      <Route loader={githubinfoloader} path="about" element={<About/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
