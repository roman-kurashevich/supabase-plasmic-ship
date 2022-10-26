import * as React from 'react';
import * as ph from '@plasmicapp/host';

// eslint-disable-next-line max-len
// import { ScreenVariantProvider } from "../components/plasmic/supabase_plasmic_ship/PlasmicGlobalVariant__Screen";
import { useRouter } from 'next/router';
import { PlasmicLogin } from '../components/plasmic/supabase_plasmic_ship/PlasmicLogin';

const Login = () => (
  <ph.PageParamsProvider
    params={useRouter()?.query}
    query={useRouter()?.query}
  >
    <PlasmicLogin />
  </ph.PageParamsProvider>
);

export default Login;
