import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(Context)
    return (
        <Fragment>
            <RegisterMutation>
                {(register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        register({ variables }).then(({ data }) => {
                            const { signup } = data
                            activateAuth(signup)
                        })
                    }
                    const errorMsg = error && 'El usuario ya existe o hay algún problema'
                    return <UserForm disabled={loading} error={errorMsg} title={'Registrarse'} onSubmit={onSubmit} />
                }}
            </RegisterMutation>
            <LoginMutation>
                {(login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        login({ variables }).then((data) => {
                            const { login } = data
                            activateAuth(login)
                        })
                    }
                    const errorMsg = error && 'Contraseña incorrecta o el usuario no existe'
                    return <UserForm disabled={loading} error={errorMsg} title={'Iniciar Sesión'} onSubmit={onSubmit} />
                }}
            </LoginMutation>
        </Fragment>
    )
}

//Example with react-hooks

/* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';

// import { TiArrowBackOutline } from 'react-icons/ti';
// import { P, Button, Icon } from './styles';

// import UserForm from '../../components/UserForm/index';
// import { useStateValue } from '../../Context';
// import useRegisterMutation from '../../hooks/useRegisterMutation';
// import useLoginMutation from '../../hooks/useLoginMutation';

// const useMutationValue = (action, loading, error, type, errorMsg) => ({
//   action, loading, error, type, errorMsg,
// });

// const UnregisteredUser = () => {
//   const [{ sectionLogin, email, password }, dispatch] = useStateValue();
//   const {
//     register, data, loading, error,
//   } = useRegisterMutation(email, password);

//   const {
//     Login, dataLogin, loadingLogin, errorLogin,
//   } = useLoginMutation(email, password);

//   const REGISTER = useMutationValue(register, loading, error, 'sectionLogin', 'El usuario ya existe o ha ocurrido algún otro problema');
//   const LOGIN = useMutationValue(Login, loadingLogin, errorLogin, 'UpdateUserLogin', 'La contraseña no es correcta o el usuario no existe');
//   const handleOnCLickValue = (boolean) => {
//     dispatch({
//       type: 'sectionLogin',
//       payload: boolean,
//     });
//   };

//   return (
//     <>
//       {sectionLogin
//         ? (
//           <>
//             <UserForm title="Iniciar sesión" {...LOGIN} />
//             <P>
//               ¿ No tienes una cuenta ?
//               <Button type="submit"onClick={() => handleOnCLickValue(false)}>REGISTRARSE</Button>
//             </P>
//           </>
//         )
//         : (
//           <>
//             <UserForm title="Registrarse" {...REGISTER} />
//             <Icon type="submit"onClick={() => handleOnCLickValue(true)}><TiArrowBackOutline size="30px" /></Icon>
//           </>
//         )}
//     </>

//   );
// };

// export default UnregisteredUser;
