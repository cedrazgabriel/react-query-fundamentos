import { useUsers } from "./hooks/useUsers"

export function Posts() {
    const { users } = useUsers()
    return (
        <pre>
            {JSON.stringify(users, null, 2)}
        </pre>

    )
}
