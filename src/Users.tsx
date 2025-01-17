import React, { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import { useMutation } from "@tanstack/react-query";

export function Users() {

    const { users, isLoading, isFetching, refetch } = useUsers()

    /* sobre os estados de consulta do react query
    isPending(bool): true quando não houver nenhum valor no cache
    isFetching(bool): true SEMPRE que a queryFn estiver executando (seja na primeira execução, ou nas subsequentes)
    isLoading(bool): true quando isFetching for true e isPending for true (quando não tem dados no cache e a queryFn está executando)
    */

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const { mutate } = useMutation({
        mutationFn: async () => {
            console.log('mutation fn executada')
        }
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log({ name, email })
        mutate()
    }

    return (
        <div className="p-4">
            <div className="mb-3">
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <input
                        className="outline-none p1 rounded-md text-zinc-950"
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        className="outline-none p1 rounded-md text-zinc-950"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <button className="bg-blue-400 py-2 text-zinc-950 rounded-md">
                        Cadastrar
                    </button>
                </form>
            </div>
            <button
                className="bg-white text-black px-4 py-2 rounded-lg  "
                type="button"
                onClick={() => refetch()}
            >
                Listar usuários
            </button>
            {isLoading && <h1>Carregando..</h1>}
            {!isLoading && isFetching && <small>Fetching..</small>}
            {users.map(user => (
                <div key={user.id}>
                    <strong className='block'>{user.name}</strong>
                    <small>{user.email}</small>
                </div>
            ))}
        </div>
    )
}