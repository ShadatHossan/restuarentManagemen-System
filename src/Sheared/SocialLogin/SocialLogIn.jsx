import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider';

const SocialLogIn = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathName || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                //Data base User Information sending Proccess start
                const saveUser = {
                    name: loggedInUser.displayName
                    , email: loggedInUser.email, img: loggedInUser.photoURL
                } //The data Being Sent
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)// saveUser Object Send
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                        //Data base User Information sending Proccess End
                    })

            })
    }
    return (
        <div>
            <div className='divider'></div>
            <div className='w-full text-center my-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FcGoogle></FcGoogle>
                </button>
            </div>

        </div>
    );
};

export default SocialLogIn;