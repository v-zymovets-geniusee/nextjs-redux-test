import { Theme } from 'styled-components';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export enum Colors {
  gray = '#fff',
  red = '#ff0000',
  redLigthen = '#fc6565',
  orange = '#ffa200',
  greenLighten = '#24b307',
  green = '#06a128'
}

export type Breakpoints = { [name in Breakpoint]: number };
export interface ITheme {
  theme: Theme;
}

export type ColProps = {
  size?: number;
  collapse?: { from: Breakpoint; to: Breakpoint };
  relative?: boolean;
};

export type RowProps = {
  maxHeight?: boolean;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'baseline';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
};

export type FormProps = ITheme & {
  width?: string;
};

export type LinkProps = ITheme & {
  size?: number;
  color?: string;
};

export type FieldType = 'text' | 'password';

export type FieldProp = {
  headingText?: string;
  props?: any;
  name: string;
  tooltipText?: string;
  placeholder?: string;
  noShadow?: boolean;
  hasLine?: boolean;
  optionalText?: string;
  maxLenght?: number;
  className?: any;
  limiterText?: string;
  showHeadingText?: boolean,
  showError?: boolean,
};

export type TextFieldProp = FieldProp & {
  type: FieldType;
  password?: boolean;
  strangeMeter?: boolean;
};

export type RadioFieldProp = FieldProp & {
  label?: string;
  id?: string;
  disabled?: boolean;
  labelClass?: string;
};

export type InputBoxProp = ITheme & {
  error?: boolean;
  focused?: boolean;
  noShadow?: boolean;
};

export type StrangeMeterProps = {
  level: number;
  color: Colors;
};

export type EntryType = 'signup' | 'login';

export type EntryContent = {
  title: string;
  subtitle: string;
  helpText: string;
  linkText: string;
  linkTo: string;
  buttonText: string;
  typeText: string;
  socialsText: string;
  backgroundImage: EntryType;
};

export type ToggleProps = ITheme & {
  selected?: boolean;
  backgroundColor?: string;
};

export type CommissionType = {
  label: string;
  value: string;
};
