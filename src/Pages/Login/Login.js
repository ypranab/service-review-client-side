import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import image from '../../assests/login.svg'
import DynamicTitle from '../../hooks/DynamicTitle';

const Login = () => {
    DynamicTitle('Login')
    const { login, googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                //jwt token 
                fetch('https://service-review-server-side-delta.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        //console.log(data.token);
                        localStorage.setItem('review-token', data.token);
                        navigate(from, { replace: true });
                    });
                //navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSign = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                //jwt token 
                fetch('https://service-review-server-side-delta.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('review-token', data.token);
                        navigate(from, { replace: true })
                    });
                //navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }

    const handleGitHubSignIn = () => {
        gitHubSignIn()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                //jwt token 
                fetch('https://service-review-server-side-delta.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('review-token', data.token);
                        navigate(from, { replace: true })
                    });
                //navigate(from, { replace: true });
                //console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                        <p className='text-center'>
                            <button onClick={handleGoogleSign} className='btn btn-error'>Google Sign in </button>
                            <button onClick={handleGitHubSignIn} className='btn btn-accent ml-9'>GitHub Sign in </button>
                        </p>
                        <p className='text-center'>New User <Link className='font-bold' to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;