import AuthContent from '../components/Auth/AuthContent';
import React, {useState} from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {login} from '../util/auth';
import {Alert} from 'react-native';
function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const signInHandler = async ({email, password}) => {
    setLoading(true);
    try {
      await login(email, password);
    } catch (err) {
      Alert.alert(
        'Authentication Failed !',
        'Could not log you in. Please check your credential',
      );
    }
    setLoading(false);
  };
  if (loading) {
    return <LoadingOverlay message={'Creatng user ....'} />;
  }
  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
