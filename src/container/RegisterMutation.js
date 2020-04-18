import React from 'react'
import { Mutation } from 'react-apollo'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const REGISTER = gql`
    mutation signup($input: UserCredentials!) {
        signup(input: $input)
    }
`

export const RegisterMutation = ({ children }) => {
    return <Mutation mutation={REGISTER}>{children}</Mutation>
}

export const useRegisterUser = (email, password) => {
    const [register, { data, loading, error }] = useMutation(REGISTER, { variables: { input: { email, password } } })
    return {
        register,
        data,
        loading,
        error,
    }
}
