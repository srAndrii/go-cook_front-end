// import React, { FC, useEffect } from 'react'
//
// const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })
//
// const AuthProvider: FC<TypeComponentAuthFields> = ({
//     children,
//     Component: { isOnlyAdmin, isOnlyUser },
// }) => {
//     const { user } = useAuth()
//     const { logout, checkAuth } = useActions()
//
//     const { pathname } = useRouter()
//     useEffect(() => {
//         const accessToken = Cookies.get('accessToken')
//         if (accessToken) checkAuth()
//     }, [])
//
//     useEffect(() => {
//         const refreshToken = Cookies.get('refreshToken')
//         if (!refreshToken && user) logout()
//     }, [pathname])
//
//     return !isOnlyAdmin && !isOnlyUser ? (
//         <>{children}</>
//     ) : (
//         <DynamicCheckRole Component={{ isOnlyUser, isOnlyAdmin }}>
//             {children}
//         </DynamicCheckRole>
//     )
// }
//
// export default AuthProvider
