import { useDispatch } from 'react-redux';
import css from './Register.module.css';
import { useState } from 'react';
import { logIn } from 'redux/auth/auth-operations';

const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
            return setName(value);

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
        dispatch(logIn({ name: name, email: email, password: password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className={css.form__wrap}>
        <form autoComplete="off" className={css.form} onSubmit={handleSubmit}>

        <label className={css.form__label}>
            Name
            <input
              className={css.form__input}
              type="name"
              name="name"
              value={name}
              onChange={handleChange}
            ></input>
          </label>

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
            Register
          </button>
        </form>
      </div>
    )
};

export default Register;