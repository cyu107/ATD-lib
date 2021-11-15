export type menu = MenuItem[]

export enum MenuItemType {
  PARENT = 'PARENT',
  GROUP = 'GROUP',
  DEFAULT = 'DEFAULT',
  BUTTON = 'BUTTON',
}

export enum TargetType {
  SELF = 'SELF',
  BLANK = 'BLANK',
}

export type MenuItem = {
  type: MenuItemType
  title: string
  description?: string
  url?: string
  target?: TargetType
  children?: MenuItem[]
}
