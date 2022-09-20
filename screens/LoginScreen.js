import AuthContent from '../components/Auth/AuthContent';
import React, {useContext, useState} from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {login} from '../util/auth';
import {Alert} from 'react-native';
import {AuthContext} from '../store/auhContext';
function LoginScreen() {
  const authCTX = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const signInHandler = async ({email, password}) => {
    setLoading(true);
    try {
      const token = await login(email, password);
      authCTX.authenticate(token);
    } catch (err) {
      Alert.alert(
        'Authentication Failed !',
        'Could not log you in. Please check your credential',
      );
      setLoading(false);
    }
  };
  if (loading) {
    return <LoadingOverlay message={'Creatng user ....'} />;
  }
  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
