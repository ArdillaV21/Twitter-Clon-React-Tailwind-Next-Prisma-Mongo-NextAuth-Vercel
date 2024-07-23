import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useUser = (userId: string) => {
    const {data, error, mutate} = useSWR(userId ? `/api/users/${userId}` : null , fetcher)

    return {
        data,
        error,
        isLoading: !error && !data,
        mutate
    }
}

export default useUser