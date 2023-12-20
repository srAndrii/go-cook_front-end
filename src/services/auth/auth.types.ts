import { FC, ReactNode } from 'react'

export type TypeRoles = {
    isOnlyAdmin?: boolean
    isOnlyUser?: boolean
}

export type NextPageAuth<P = {}> = FC & TypeRoles

export type TypeComponentAuthFields = {
    Component: TypeRoles
    children?: ReactNode
}
