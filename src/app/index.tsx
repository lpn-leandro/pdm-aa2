import { Alert, Text, TextInput, View } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import useAuth from '../../firebase/hooks/useAuth';
import Loading from './components/Loading';
import StyledButton from './components/StyledButton';

export default function loginScreen() {
  const { user, login, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //teste@teste.teste
  //teste123

  useEffect(() => {
    if (user) {
      router.replace('/home/');
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.main}>
        <Text style={globalStyles.title}>MyPets</Text>
        <Text style={globalStyles.subtitle}>The best pets in the world!</Text>
      </View>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 13}}>E-mail:</Text>
      <TextInput
        style={globalStyles.input}
        value={email}
        onChangeText={setEmail}
        testID='email-input'
      />
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 13, marginTop: 10}}>Senha:</Text>
      <TextInput
        style={globalStyles.input}
        value={password}
        onChangeText={setPassword}
        testID='password-input'
      />
      <StyledButton
        title='Login'
        onPress={async () => {
          try {
            await login(email, password);
            router.push('/home/');
          } catch (error: any) {
            Alert.alert('Login error', error.toString());
          }
        }}
        style={{ marginTop: 12 }}
        testID='login-button'
      />
    </View>
  );
}
