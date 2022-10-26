import * as React from 'react';
import { registerComponent, PlasmicCanvasHost } from '@plasmicapp/host';
import { Button, Select, TextInput } from '@mantine/core';

import { Link } from 'components';

registerComponent(Link, {
  name: 'Link',
  displayName: 'LinkShip',
  props: {
    children: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: 'Add content...',
        },
      ],
    },
    type: {
      type: 'choice',
      options: ['url', 'router'],
      defaultValue: 'url',
    },
    href: {
      type: 'string',
      defaultValue: '#',
    },
    size: {
      type: 'choice',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    align: {
      type: 'choice',
      options: ['left', 'center', 'right', 'justify'],
      defaultValue: 'center',
    },
    icon: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: '',
        },
      ],
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    inNewTab: {
      type: 'boolean',
      defaultValue: true,
    },
    underline: {
      type: 'boolean',
      defaultValue: true,
    },
    inherit: {
      type: 'boolean',
      defaultValue: false,
    },
  },
  importPath: './src/components',
});

registerComponent(TextInput, {
  name: 'TextInput',
  displayName: 'TextInputMantine',
  props: {
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    label: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: 'Enter label...',
        },
      ],
    },
    placeholder: {
      type: 'string',
      defaultValue: 'Enter placeholder...',
    },
    radius: {
      type: 'number',
      defaultValue: 5,
    },
    required: {
      type: 'boolean',
      defaultValue: false,
    },
    size: {
      type: 'choice',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    variant: {
      type: 'choice',
      options: ['unstyled', 'default', 'filled'],
      defaultValue: 'default',
    },
    withAsterisk: {
      type: 'boolean',
      defaultValue: false,
    },
  },
  importPath: '@mantine/core',
});

registerComponent(Button, {
  name: 'Button',
  displayName: 'ButtonMantine',
  props: {
    children: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: 'Mantine Button from Ship project',
        },
      ],
    },
    color: {
      type: 'choice',
      options: [
        'dark',
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'green',
        'lime',
        'yellow',
        'orange',
        'teal',
      ],
      defaultValue: 'dark',
    },
    compact: {
      type: 'boolean',
      defaultValue: false,
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    fullWidth: {
      type: 'boolean',
      defaultValue: false,
    },
    loaderPosition: {
      type: 'choice',
      options: ['left', 'right'],
      defaultValue: 'left',
    },
    loading: {
      type: 'boolean',
      defaultValue: false,
    },
    radius: {
      type: 'number',
      defaultValue: 5,
    },
    size: {
      type: 'choice',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    type: {
      type: 'choice',
      options: ['button', 'reset', 'submit'],
      defaultValue: 'button',
    },
    uppercase: {
      type: 'boolean',
      defaultValue: false,
    },
    variant: {
      type: 'choice',
      options: ['outline', 'white', 'light', 'default', 'filled', 'subtle', 'gradient'],
      defaultValue: 'filled',
    },
  },
  importPath: '@mantine/core',
});

registerComponent(Select, {
  name: 'Select',
  displayName: 'SelectMantine',
  props: {
    data: {
      type: 'object',
      defaultValue: ['Option1', 'Option2', 'Option3', 'Option4'],
    },
    dropdownPosition: {
      type: 'choice',
      options: ['bottom', 'top', 'flip'],
      defaultValue: 'top',
    },
    label: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: 'Enter label...',
        },
      ],
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    placeholder: {
      type: 'string',
      defaultValue: 'Enter placeholder...',
    },
    radius: {
      type: 'number',
      defaultValue: 5,
    },
    size: {
      type: 'choice',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    variant: {
      type: 'choice',
      options: ['unstyled', 'default', 'filled'],
      defaultValue: 'default',
    },
  },
  importPath: '@mantine/core',
});

const PlasmicHost = () => <PlasmicCanvasHost />;

export default PlasmicHost;
