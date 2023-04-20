import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const styles = {
  container: {
    minHeight: 'calc(100vh - 70px)',
    display: 'flex',
    justifyContent: 'center',
  },
};

export default function Register() {
  return (
    <div style={styles.container}>
      <RegisterForm />
    </div>
  );
}
