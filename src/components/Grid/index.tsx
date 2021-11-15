import React from 'react'
import MuiGrid, { GridProps } from '@material-ui/core/Grid'

const Grid = (props: GridProps) => <MuiGrid {...props}>{props.children}</MuiGrid>

export default Grid
