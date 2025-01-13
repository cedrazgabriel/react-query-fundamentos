// O hook use query do react-query é utilizado para fazer requisições a uma API
import {useQuery, QueryClient} from '@tanstack/react-query'

const queryClient = new QueryClient()

interface IUser {
    id: number;
    name: string;
    email: string;
}

export function App () {
    const {data} = useQuery({
        queryKey: ['users'],
        queryFn: async (): Promise<IUser[]> => {
            const response = await fetch("http://localhost:3333/users")
            return response.json()
        }
    }, queryClient);
  return (
    <div>
        {data?.map(user => (
            <div key={user.id}>
                <strong className='block'>{user.name}</strong>
                <small>{user.email}</small>
            </div>
        ))}
    </div>
  )
}