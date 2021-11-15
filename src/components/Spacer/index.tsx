import React, { ReactElement } from 'react'

type PropsType = {
  /** Spacer size in pixels */
  size: number
  /** If present, `size` unit becomes `em` so that it inherits font size of the wrapper text */
  matchText?: boolean
  /** If present, height becomes 1px */
  noHeight?: boolean
  /** Spans full container width */
  fullWidth?: boolean
  /** Useful for visual grepping and seeing how the spacer applies to the layout */
  debug?: boolean
}

const Spacer = ({ size, noHeight, fullWidth, matchText, debug }: PropsType): ReactElement => (
  <span
    style={{
      display: fullWidth ? 'block' : 'inline-block',
      width: matchText ? `${size}em` : `${size}px`,
      height: noHeight ? '1px' : matchText ? `${size}em` : `${size}px`,
      backgroundColor: debug ? 'orange' : '',
    }}
  />
)

Spacer.defaultProps = {
  debug: false,
  noHeight: false,
  matchText: false,
  fullWidth: false,
}

export default Spacer
