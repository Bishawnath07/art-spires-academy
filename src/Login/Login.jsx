import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../Shared/NavBer/SocialLogIn/SocialLogIn';
import img from '../assets/login/login.svg'


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const handleToggleVisibility = () => {
      setShowPassword(!showPassword);
    };

    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }



    return (
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col gap-28 md:flex-row-reverse">

                    <div className="text-center md:w-1/2 lg:text-left">
                        <h2 className='text-4xl font-bold mb-8'>Please Login</h2>
                        <img src={img} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} name="password"  value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} className="input input-bordered" />
                                <label className="label">
                                    <button onClick={handleToggleVisibility}>
                                        {showPassword ? 'Hide Password' : 'Show Password'}
                                    </button>
                                </label>
                            </div>

                            {/* todo btn disable for captcha */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center text-blue-600'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;