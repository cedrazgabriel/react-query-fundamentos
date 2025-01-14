// O hook use query do react-query é utilizado para fazer requisições a uma API
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Users } from './Users'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Posts } from './Posts'

const queryClient = new QueryClient()

export function App () {
   
  return (
   <QueryClientProvider client={queryClient}>
    <BrowserRouter >
    <ul>
        <li>
            <Link to='/'>Usuários</Link>
        </li>
        <li>
            <Link to='/posts'>Posts</Link>
        </li>
    </ul>
    <Routes>
        <Route path='/' element= {<Users />}/>
        <Route path='/posts' element= {<Posts />}/>
    </Routes>
    <ReactQueryDevtools />
    </BrowserRouter>
    </QueryClientProvider>
  )
}