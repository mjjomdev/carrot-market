import {FieldErrors, useForm} from 'react-hook-form';

// Less code (c)
// Better validation
// Better Erros (set, clear, display)
// Have control over inputs
// Dont deal with events (c)
// Easier Inputs (c)

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
    reset,
  } = useForm<LoginForm>({
    mode: 'onChange',
  });
  // handleSubmit onValid, onInvalid
  const onValid = (data: LoginForm) => {
    console.log('valid');
    reset();
    // setError('username', {message: 'Username taken'});
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input {...register('username', {required: 'username is required'})} type="text" placeholder="Username" />
      {errors.username?.message}
      <input
        {...register('email', {
          required: 'Email is required',
          validate: {
            notGmail: (value) => !value.includes('@gmail.com') || 'Gmail is not allowed',
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email) ? 'border-red-600' : ''}`}
      />
      {errors.email?.message}
      <input {...register('password', {required: 'password is required'})} type="password" placeholder="Password" />
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
