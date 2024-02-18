import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: string,
    email: string
}

export const useCreateUser = () => {

    const CreateUserRequest = async (user: CreateUserRequest) => {

        const response = await fetch(`${API_BASE_URL}/api/user/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        });

        if(!response.ok){
            throw new Error("Failed to create an user");
        }
    }

    const {isError, isLoading, mutateAsync: CreateUser, isSuccess} = useMutation(CreateUserRequest);

    return {
        isError,
        isLoading,
        isSuccess,
        CreateUser
    }
}