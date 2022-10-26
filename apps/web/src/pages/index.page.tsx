import * as React from 'react';
import * as ph from '@plasmicapp/host';

import { useRouter } from 'next/router';
// eslint-disable-next-line max-len
// import { ScreenVariantProvider } from '../components/plasmic/supabase_plasmic_ship/PlasmicGlobalVariant__Screen';
import { PlasmicHomepage } from '../components/plasmic/supabase_plasmic_ship/PlasmicHomepage';
import { supabase } from '../utils/supabaseClient';

const Homepage = () => {
  const router = useRouter();

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicHomepage
        logoutButton={{
          onClick: async () => {
            await supabase.auth.signOut();
            router.replace('/login');
          },
        }}
      />
    </ph.PageParamsProvider>
  );
};

export default Homepage;
