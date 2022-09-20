import AuthContent from '../components/Auth/AuthContent';
import React, {useState} from 'react';
import {createUser} from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
function SignupScreen() {
  const [loading, setLoading] = useState(false);
  const signUpHandler = async ({email, password}) => {
    setLoading(true);
    await createUser(email, password);
    setLoading(false);
  };
  if (loading) {
    return <LoadingOverlay message={'Creatng user ....'} />;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
