// @react
import * as React from 'react'
import { useState } from 'react'
// @common
import { Subtract } from 'utility-types'
import uuid from 'react-uuid'
import SnackbarComponent, { SnackbarTypes } from './component/'
// @types
export interface SnackBarHOCProps {
  setGlobalSnackBar: (...any: any) => void
}

type PropsType = SnackBarHOCProps

/**
 *
 * @param WrappedComponent
 */
const SnackbarHOC = <Props extends SnackBarHOCProps>(
  WrappedComponent: React.ComponentType<Props>,
) => {
  /**
   *
   * @param props
   * @constructor
   */
  const HOC: React.FC<Subtract<Props, SnackBarHOCProps>> = (props) => {
    const snackBarDefaults = {
      message: '',
      icon: null,
      type: SnackbarTypes.SUCCESS,
      show: false,
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    }
    const [snackbarData, setSnackbarData] = useState(snackBarDefaults)

    // useEffect(() => {
    //   setSnackbarData(snackBarDefaults)
    // }, [])

    const snackbarComponent = snackbarData && (
      <SnackbarComponent
        key={uuid()}
        anchorOrigin={{ vertical: 'top' }}
        icon={snackbarData.icon}
        message={snackbarData.message}
        onClose={() => {
          setSnackbarData(snackBarDefaults)
        }}
        open={snackbarData.show}
        type={snackbarData.type}
      />
    )

    const setSnackbarDataWrapper = (args: any) => {
      setSnackbarData(args)
    }

    /**
     *
     */
    return (
      <React.Fragment>
        <WrappedComponent
          setGlobalSnackBar={setSnackbarDataWrapper}
          {...((props as unknown) as Props)}
        />
        {snackbarComponent}
      </React.Fragment>
    )
  }

  return HOC
}

export { SnackbarComponent }
export default SnackbarHOC
