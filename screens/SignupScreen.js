import AuthContent from '../components/Auth/AuthContent';
import React, {useContext, useState} from 'react';
import {createUser} from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {Alert} from 'react-native';
import {AuthContext} from '../store/auhContext';
function SignupScreen() {
  const authCTX = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const signUpHandler = async ({email, password}) => {
    setLoading(true);
    try {
      const token = await createUser(email, password);
      authCTX.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication Failed !',
        'Could not log you in. Please check your credential and try agin later !',
      );
      setLoading(false);
    }
  };
  if (loading) {
    return <LoadingOverlay message={'Creatng user ....'} />;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
