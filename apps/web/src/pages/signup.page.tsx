import * as React from 'react';
import * as ph from '@plasmicapp/host';

// eslint-disable-next-line max-len
// import { ScreenVariantProvider } from "../components/plasmic/supabase_plasmic_ship/PlasmicGlobalVariant__Screen";
import { useRouter } from 'next/router';
import { PlasmicSignup } from '../components/plasmic/supabase_plasmic_ship/PlasmicSignup';

const Signup = () => (
  <ph.PageParamsProvider
    params={useRouter()?.query}
    query={useRouter()?.query}
  >
    <PlasmicSignup />
  </ph.PageParamsProvider>
);

export default Signup;
