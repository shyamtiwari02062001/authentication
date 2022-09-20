import AuthContent from '../components/Auth/AuthContent';
import React, {useState} from 'react';
import {createUser} from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {Alert} from 'react-native';
function SignupScreen() {
  const [loading, setLoading] = useState(false);
  const signUpHandler = async ({email, password}) => {
    setLoading(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        'Authentication Failed !',
        'Could not log you in. Please check your credential and try agin later !',
      );
    }
    setLoading(false);
  };
  if (loading) {
    return <LoadingOverlay message={'Creatng user ....'} />;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
