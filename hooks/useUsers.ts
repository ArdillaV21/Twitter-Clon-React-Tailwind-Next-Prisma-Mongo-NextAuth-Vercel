import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useUsers = () => {
    const {data, error, mutate} = useSWR('/api/users', fetcher)

    return {
        data,
        error,
        isLoading: !error && !data,
        mutate
    }
}

export default useUsers