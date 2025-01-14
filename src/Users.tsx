import { useQuery } from "@tanstack/react-query";
import { IUser } from "./types";
import { sleep } from "./sleep";

export function Users() {

    const {data, isLoading, isFetching, refetch} = useQuery({
        enabled: true,
        queryKey: ['users'],
        queryFn: async (): Promise<IUser[]> => {
            await sleep()
            const response = await fetch("http://localhost:3333/users")
            return response.json()
        },
        
    });

    /* sobre os estados de consulta do react query
    isPending(bool): true quando não houver nenhum valor no cache
    isFetching(bool): true SEMPRE que a queryFn estiver executando (seja na primeira execução, ou nas subsequentes)
    isLoading(bool): true quando isFetching for true e isPending for true (quando não tem dados no cache e a queryFn está executando)
    */

    return (
        <div className="p-4">
        <button
        className="bg-white text-black px-4 py-2 rounded-lg  "
         type="button"
         onClick={() => refetch()}
         >
            Listar usuários
        </button>
        {isLoading && <h1>Carregando..</h1>}
        {!isLoading && isFetching && <small>Fetching..</small>}
        {data?.map(user => (
            <div key={user.id}>
                <strong className='block'>{user.name}</strong>
                <small>{user.email}</small>
            </div>
        ))}
    </div>
    )
}