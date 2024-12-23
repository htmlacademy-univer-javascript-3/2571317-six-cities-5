import { ChangeEvent, FormEvent, useState } from 'react';
import { SignInFormState } from './types';
import { useActions, useAppSelector } from '../../store/hooks';
import { selectAuthReducerData } from '../../store/selectors';
import styles from './styles.module.css';

type Props = {
	title: string;
}

export const SignInForm = ({ title }: Props) => {
  const { authorizeStatus: { validationErrors } } = useAppSelector(selectAuthReducerData);
  const { authorize } = useActions();
  const [formData, setFormData] = useState<SignInFormState>({
    email: '',
    password: ''
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.email && formData.password) {
      authorize(formData);
    }
  };

  const isSubmitDisabled = !formData.email || !formData.password;

  return (
    <>
      <h1 className="login__title">{title}</h1>
      <form role='form' className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input className="login__input form__input" type="email" name="email" placeholder="Email" required={false} onChange={handleFieldChange} />
          {validationErrors?.email && <p className={styles.error}>{validationErrors?.email}</p>}
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input className="login__input form__input" type="password" name="password" placeholder="Password" required={false} onChange={handleFieldChange} />
          {validationErrors?.password && <p className={styles.error}>{validationErrors?.password}</p>}
        </div>
        <button className="login__submit form__submit button" type="submit" disabled={isSubmitDisabled}>
            Sign in
        </button>
      </form>
    </>
  );
};
