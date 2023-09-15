import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth-operations";
import css from './Login.module.css';


const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
            return setEmail(value);

            case 'password':
                return setPassword(value);

            default: 
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logIn({ email: email, password: password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div className={css.form__wrap}>
        <form autoComplete="off" className={css.form} onSubmit={handleSubmit}>
          <label className={css.form__label}>
            Email
            <input
              className={css.form__input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            ></input>
          </label>
  
          <label className={css.form__label}>
            Password
            <input
              className={css.form__input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            ></input>
          </label>
          <button type="submit" className={css.form__btn}>
            Log In
          </button>
        </form>
      </div>
    )
};

export default Login;