import md5 from 'md5'

export const emailAuth = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' })
            }).catch((err) => {
            dispatch({ type: 'LOGIN_ERR', err})
            });
        }
    }

export const logout = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signOut()
            .then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
            });
        }
    }


    

export const register = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((res) =>{
                return firestore.collection('users')
                .doc(res.user.uid)
                .set({
                    fname: '',
                    lname: '',
                    email: user.email,
                    phone: user.phone,
                    photoURL: `http://gravatar.com/avatar/${md5(user.email)}?d=identicon`,
                    isAdmin: false,
                    builderPremium: null,
                    customerPremium: null,
                    investorPremium: null
                })
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESSS'})
            }).catch((error) => {
                dispatch({type: 'SIGNUP_ERROR', error})
            })
    }
}