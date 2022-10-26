import React, { forwardRef, useState } from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient';
import {
  PlasmicAuthComponent,
  DefaultAuthComponentProps,
} from './plasmic/supabase_plasmic_ship/PlasmicAuthComponent';

export interface AuthComponentProps extends DefaultAuthComponentProps {}

// eslint-disable-next-line @typescript-eslint/naming-convention
const AuthComponent_ = (
  props: AuthComponentProps,
  ref: HTMLElementRefOf<'div'>,
) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const { isSignupFlow } = props;

  return (
    <PlasmicAuthComponent
      root={{ ref }}
      {...props}
      isError={!!authError}
      errorMessage={authError?.message}
      isLoading={loading}
      emailInput={{
        value: email,
        onChange: (e) => setEmail(e.target.value),
      }}
      passwordInput={{
        value: password,
        onChange: (e) => setPassword(e.target.value),
      }}
      submitButton={{
        // @ts-ignoretsignore
        onClick: async () => {
          setLoading(true);
          setAuthError(null);
          try {
            let authFunction = null;
            if (isSignupFlow) {
              authFunction = await supabase.auth.signUp({ email, password });
            } else {
              authFunction = await supabase.auth.signInWithPassword({ email, password });
            }

            const { error } = authFunction;
            if (error) {
              setAuthError(error);
              return;
            }

            router.replace('/');
          } catch (err) {
            setAuthError(err);
          } finally {
            setLoading(false);
          }
        },
      }}
    />
  );
};

const AuthComponent = forwardRef(AuthComponent_);
export default AuthComponent;
