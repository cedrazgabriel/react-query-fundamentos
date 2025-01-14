// O hook use query do react-query é utilizado para fazer requisições a uma API
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Users } from './Users'

const queryClient = new QueryClient()

export function App () {
   
  return (
   <QueryClientProvider client={queryClient}>
    <Users />
    <ReactQueryDevtools />
    </QueryClientProvider>
  )
}