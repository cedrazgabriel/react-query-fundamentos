import { useQuery } from "@tanstack/react-query";
import { IUser } from "./types";
import { sleep } from "./sleep";

export function Posts() {
   const {data} =  useQuery({
        enabled: true,
        queryKey: ['users'],
        queryFn: async (): Promise<IUser[]> => {
            await sleep()
            const response = await fetch("http://localhost:3333/users")
            return response.json()
        },
        staleTime: 5000,
    });
return (
   <pre>
 {JSON.stringify(data, null, 2)}
   </pre>

)
}
