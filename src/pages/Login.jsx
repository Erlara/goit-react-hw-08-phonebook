import { LoginForm } from 'components/LoginForm/LoginForm';

const styles = {
  container: {
    minHeight: 'calc(100vh - 70px)',
    display: 'flex',
    justifyContent: 'center',
  },
};

export default function Login() {
  return (
    <div style={styles.container}>
      <LoginForm />
    </div>
  );
}
