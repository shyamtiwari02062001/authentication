import AuthContent from '../components/Auth/AuthContent';
import React, {useState} from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {login} from '../util/auth';
function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const signInHandler = async ({email, password}) => {
    setLoading(true);
    await login(email, password);
    setLoading(false);
  };
  if (loading) {
    return <LoadingOverlay message={'Creatng user ....'} />;
  }
  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
