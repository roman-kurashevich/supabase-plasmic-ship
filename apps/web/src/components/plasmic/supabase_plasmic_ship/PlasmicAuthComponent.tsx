// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2Pat3ZDrS4bwt4EoXhj2Qr
// Component: K9__Dle_8j
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { TextInput } from "@mantine/core"; // plasmic-import: b6bMrSAef3/codeComponent
import { Button } from "@mantine/core"; // plasmic-import: FZ9Y8scdwH/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_supabase_plasmic_ship.module.css"; // plasmic-import: 2Pat3ZDrS4bwt4EoXhj2Qr/projectcss
import sty from "./PlasmicAuthComponent.module.css"; // plasmic-import: K9__Dle_8j/css

export type PlasmicAuthComponent__VariantMembers = {
  isSignupFlow: "isSignupFlow";
  isError: "isError";
  isLoading: "isLoading";
};
export type PlasmicAuthComponent__VariantsArgs = {
  isSignupFlow?: SingleBooleanChoiceArg<"isSignupFlow">;
  isError?: SingleBooleanChoiceArg<"isError">;
  isLoading?: SingleBooleanChoiceArg<"isLoading">;
};
type VariantPropType = keyof PlasmicAuthComponent__VariantsArgs;
export const PlasmicAuthComponent__VariantProps = new Array<VariantPropType>(
  "isSignupFlow",
  "isError",
  "isLoading"
);

export type PlasmicAuthComponent__ArgsType = {
  errorMessage?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAuthComponent__ArgsType;
export const PlasmicAuthComponent__ArgProps = new Array<ArgPropType>(
  "errorMessage"
);

export type PlasmicAuthComponent__OverridesType = {
  root?: p.Flex<"div">;
  emailInput?: p.Flex<typeof TextInput>;
  passwordInput?: p.Flex<typeof TextInput>;
  submitButton?: p.Flex<typeof Button>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  buttonMantine?: p.Flex<typeof Button>;
};

export interface DefaultAuthComponentProps {
  errorMessage?: React.ReactNode;
  isSignupFlow?: SingleBooleanChoiceArg<"isSignupFlow">;
  isError?: SingleBooleanChoiceArg<"isError">;
  isLoading?: SingleBooleanChoiceArg<"isLoading">;
  className?: string;
}

function PlasmicAuthComponent__RenderFunc(props: {
  variants: PlasmicAuthComponent__VariantsArgs;
  args: PlasmicAuthComponent__ArgsType;
  overrides: PlasmicAuthComponent__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        {
          [sty.rootisError]: hasVariant(variants, "isError", "isError"),
          [sty.rootisSignupFlow]: hasVariant(
            variants,
            "isSignupFlow",
            "isSignupFlow"
          )
        }
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__uw8Aa,
          {
            [sty.textisError__uw8AaxQoIo]: hasVariant(
              variants,
              "isError",
              "isError"
            ),
            [sty.textisSignupFlow__uw8AaINzvz]: hasVariant(
              variants,
              "isSignupFlow",
              "isSignupFlow"
            )
          }
        )}
      >
        {"Supabase-Plasmic-Ship"}
      </div>

      {(hasVariant(variants, "isError", "isError") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox___3EhVa, {
            [sty.freeBoxisError___3EhVaxQoIo]: hasVariant(
              variants,
              "isError",
              "isError"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__dSqz3, {
              [sty.freeBoxisError__dSqz3XQoIo]: hasVariant(
                variants,
                "isError",
                "isError"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Error text goes here",
              value: args.errorMessage,
              className: classNames(sty.slotTargetErrorMessage, {
                [sty.slotTargetErrorMessageisError]: hasVariant(
                  variants,
                  "isError",
                  "isError"
                )
              })
            })}
          </div>
        </div>
      ) : null}

      <TextInput
        data-plasmic-name={"emailInput"}
        data-plasmic-override={overrides.emailInput}
        className={classNames("__wab_instance", sty.emailInput, {
          [sty.emailInputisError]: hasVariant(variants, "isError", "isError")
        })}
        disabled={false}
        label={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__y0Vjh
            )}
          >
            {"Email"}
          </div>
        }
        placeholder={"Enter email..." as const}
        radius={5 as const}
        required={false}
        size={"md" as const}
        variant={"default" as const}
        withAsterisk={false}
      />

      <TextInput
        data-plasmic-name={"passwordInput"}
        data-plasmic-override={overrides.passwordInput}
        className={classNames("__wab_instance", sty.passwordInput)}
        disabled={false}
        label={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vs2Ja
            )}
          >
            {"Password"}
          </div>
        }
        placeholder={"Enter password..." as const}
        radius={5 as const}
        required={false}
        size={"md" as const}
        variant={"default" as const}
        withAsterisk={false}
      />

      <Button
        data-plasmic-name={"submitButton"}
        data-plasmic-override={overrides.submitButton}
        className={classNames("__wab_instance", sty.submitButton, {
          [sty.submitButtonisError]: hasVariant(variants, "isError", "isError"),
          [sty.submitButtonisSignupFlow]: hasVariant(
            variants,
            "isSignupFlow",
            "isSignupFlow"
          )
        })}
        color={"dark" as const}
        compact={false}
        disabled={false}
        fullWidth={true}
        loaderPosition={"left" as const}
        loading={false}
        radius={5 as const}
        size={"md" as const}
        type={"button" as const}
        uppercase={false}
        variant={"filled" as const}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__cExu,
            {
              [sty.textisSignupFlow__cExuINzvz]: hasVariant(
                variants,
                "isSignupFlow",
                "isSignupFlow"
              )
            }
          )}
        >
          {hasVariant(variants, "isSignupFlow", "isSignupFlow")
            ? "Sign up"
            : "Login"}
        </div>
      </Button>

      {(hasVariant(variants, "isLoading", "isLoading") ? true : true) ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__houhC,
            {
              [sty.textisLoading__houhCYlPCz]: hasVariant(
                variants,
                "isLoading",
                "isLoading"
              )
            }
          )}
        >
          {"Loading..."}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__e2V5G, {
          [sty.freeBoxisError__e2V5GxQoIo]: hasVariant(
            variants,
            "isError",
            "isError"
          ),
          [sty.freeBoxisLoading__e2V5GYlPCz]: hasVariant(
            variants,
            "isLoading",
            "isLoading"
          ),
          [sty.freeBoxisSignupFlow__e2V5GINzvz]: hasVariant(
            variants,
            "isSignupFlow",
            "isSignupFlow"
          )
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___3SwzJ,
            {
              [sty.textisSignupFlow___3SwzJiNzvz]: hasVariant(
                variants,
                "isSignupFlow",
                "isSignupFlow"
              )
            }
          )}
        >
          {hasVariant(variants, "isSignupFlow", "isSignupFlow")
            ? "Already have an account?"
            : "Don't have an account?"}
        </div>

        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link, {
            [sty.linkisError]: hasVariant(variants, "isError", "isError"),
            [sty.linkisLoading]: hasVariant(variants, "isLoading", "isLoading"),
            [sty.linkisSignupFlow]: hasVariant(
              variants,
              "isSignupFlow",
              "isSignupFlow"
            )
          })}
          component={Link}
          href={
            hasVariant(variants, "isError", "isError")
              ? `/signup`
              : hasVariant(variants, "isSignupFlow", "isSignupFlow")
              ? `/login`
              : `/signup`
          }
          platform={"nextjs"}
        >
          <Button
            data-plasmic-name={"buttonMantine"}
            data-plasmic-override={overrides.buttonMantine}
            className={classNames("__wab_instance", sty.buttonMantine, {
              [sty.buttonMantineisSignupFlow]: hasVariant(
                variants,
                "isSignupFlow",
                "isSignupFlow"
              )
            })}
            color={"dark" as const}
            compact={false}
            disabled={false}
            fullWidth={false}
            loaderPosition={"left" as const}
            loading={false}
            radius={5 as const}
            size={"md" as const}
            type={"button" as const}
            uppercase={false}
            variant={"white" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__l0TOp,
                {
                  [sty.textisSignupFlow__l0TOpINzvz]: hasVariant(
                    variants,
                    "isSignupFlow",
                    "isSignupFlow"
                  )
                }
              )}
            >
              {hasVariant(variants, "isSignupFlow", "isSignupFlow")
                ? "Login"
                : "Sign up"}
            </div>
          </Button>
        </p.PlasmicLink>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "emailInput",
    "passwordInput",
    "submitButton",
    "link",
    "buttonMantine"
  ],
  emailInput: ["emailInput"],
  passwordInput: ["passwordInput"],
  submitButton: ["submitButton"],
  link: ["link", "buttonMantine"],
  buttonMantine: ["buttonMantine"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  emailInput: typeof TextInput;
  passwordInput: typeof TextInput;
  submitButton: typeof Button;
  link: "a";
  buttonMantine: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAuthComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAuthComponent__VariantsArgs;
    args?: PlasmicAuthComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAuthComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAuthComponent__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAuthComponent__ArgProps,
          internalVariantPropNames: PlasmicAuthComponent__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAuthComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuthComponent";
  } else {
    func.displayName = `PlasmicAuthComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicAuthComponent = Object.assign(
  // Top-level PlasmicAuthComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    emailInput: makeNodeComponent("emailInput"),
    passwordInput: makeNodeComponent("passwordInput"),
    submitButton: makeNodeComponent("submitButton"),
    link: makeNodeComponent("link"),
    buttonMantine: makeNodeComponent("buttonMantine"),

    // Metadata about props expected for PlasmicAuthComponent
    internalVariantProps: PlasmicAuthComponent__VariantProps,
    internalArgProps: PlasmicAuthComponent__ArgProps
  }
);

export default PlasmicAuthComponent;
/* prettier-ignore-end */
