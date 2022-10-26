import * as React from 'react';
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps,
} from '@plasmicapp/react-web';
import {
  PlasmicButton,
  DefaultButtonProps,
} from './plasmic/supabase_plasmic_ship/PlasmicButton';

interface ButtonProps extends DefaultButtonProps {}

const ButtonPlasmic = (props: ButtonProps, ref: ButtonRef) => {
  const { plasmicProps } = PlasmicButton.useBehavior<ButtonProps>(props, ref);
  return <PlasmicButton {...plasmicProps} />;
};

type ButtonComponentType = {
  (
    props: Omit<ButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const Button = React.forwardRef(ButtonPlasmic) as any as ButtonComponentType;

export default Object.assign(Button, {
  __plumeType: 'button',
});
