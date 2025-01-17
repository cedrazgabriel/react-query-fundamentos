import { useQuery } from "@tanstack/react-query";
import { sleep } from "../sleep";
import { IUser } from "../types";

export function useUsers() {
    const { data, isLoading, isFetching, refetch } = useQuery({
        enabled: true,
        queryKey: ['users'],
        queryFn: async (): Promise<IUser[]> => {
            await sleep()
            const response = await fetch("http://localhost:3333/users")
            return response.json()
        },

    });

    return {
        users: data ?? [],
        isLoading,
        isFetching,
        refetch
    }
}