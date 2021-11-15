/**
 *  https://rmolinamir.github.io/typescript-cheatsheet
 */

import React, { Context, ReactElement, useEffect, useState } from 'react'
import { useTheme } from '@material-ui/core'
/******************************************************/
/**
 * React Element
 * declare react element directly
 */
export const element: ReactElement = <div>test</div>

/******************************************************/

/**
 * Functional component, returns ReactElement
 * @param props
 * @constructor
 */

type PropsType = {
  data: string
}

export const Home: React.FC<PropsType> = (props: PropsType): ReactElement => {
  const { data } = props
  console.log(data)

  return <div>test</div>
}
/******************************************************/
/**
 *
 */
type PropsType2 = {
  data: string
}
const Home2: React.FC<PropsType> = (props: PropsType2): ReactElement => {
  const { data } = props
  console.log(data)

  return <div>test</div>
}

/******************************************************/

/**
 * implicit children
 * @param children
 * @param data
 * @constructor
 */
type PropsType3 = {
  data: string
}
const Home3: React.FC<PropsType3> = (children, { data }: PropsType3) => {
  console.log(children)
  console.log(data)
  /**
   * props
   */
  return <div>text</div>
}

/******************************************************/
/**
 * context
 */
const defaultTheme = 'white'
const ThemeContext: Context<string> = React.createContext(defaultTheme)

type Props = {
  children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }: Props): ReactElement => {
  const [theme, setTheme] = React.useState(defaultTheme)

  React.useEffect(() => {
    // We'd get the theme from a web API / local storage in a real app
    // We've hardcoded the theme in our example
    const currentTheme = 'lightblue'
    setTheme(currentTheme)
  }, [])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
/**
 * context consumer
 */
const App = () => (
  <ThemeProvider>
    <Home2 data={'hello'} />
  </ThemeProvider>
)
/******************************************************/

/**
 *
 * @param Component
 * @return {(props: Props) => (any | any)}
 */
interface ComponentProps {
  children: React.ReactNode | React.ReactNode[]
}

type ProviderValue = {
  user: string
}
type DefaultValue = undefined

type MyUserContextValue = DefaultValue | ProviderValue

export const MyUserContext = React.createContext<MyUserContextValue | undefined>(undefined)

function test<T extends ComponentProps>(Component: React.FC) {
  return function UserData(props: Pick<T, Exclude<keyof T, keyof ComponentProps>>): ReactElement {
    /**
     * state
     */
    const [contextValue, setContextValue] = useState<MyUserContextValue>()

    /**
     *
     */
    useEffect(() => {
      setContextValue({ user: 'test' })
    }, [])

    /**
     *
     */
    return (
      <MyUserContext.Provider value={contextValue}>
        <Component {...(props as T)} />
      </MyUserContext.Provider>
    )
  }
}
/******************************************************/

/**
 * HOC
 */
interface WithThemeProps {
  primaryColor: string
}
export function withTheme<T extends WithThemeProps = WithThemeProps>(
  WrappedComponent: React.ComponentType<T>,
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithTheme = (props: Omit<T, keyof WithThemeProps>) => {
    // Fetch the props you want to inject. This could be done with context instead.
    const themeProps = useTheme()

    // props comes afterwards so the can override the default ones.
    return <WrappedComponent {...themeProps} {...(props as T)} />
  }

  ComponentWithTheme.displayName = `withTheme(${displayName})`

  return ComponentWithTheme
}

interface PropsHOC extends WithThemeProps {
  children: React.ReactNode
}

class MyButton extends React.Component<Props, any> {
  public render() {
    // Render an the element using the theme and other props.
    return <div>hello</div>
  }

  private someInternalMethod() {
    // The theme values are also available as props here.
  }
}
