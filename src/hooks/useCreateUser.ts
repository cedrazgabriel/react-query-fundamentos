import { useMutation } from "@tanstack/react-query"
import { sleep } from "../sleep"
import { IUser } from "../types"

export function useCreateUser() {
     const { mutateAsync, isPending } =  useMutation({
        mutationFn: async ({name, email}: { name: string, email: string }) : Promise<IUser> => {
            await sleep(2000)
            const response = await fetch('http://localhost:3333/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            })
           })

           return  response.json()
        },
        onError: (error, variables) => {
            console.log({error, variables})
        },
        onSuccess: (data, variables) => {
            console.log('on success',{data, variables})
        },
        //Executa sempre ao final do onSuccess, ou onError (mesma coisa que o finally)
        onSettled: (data, error, variables) => {
            console.log('on settled', {data, error, variables})
        }
    })
    
    return { createUser: mutateAsync, isLoading: isPending }
}