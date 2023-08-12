import React from 'react'
import { Switch } from '@material-ui/core'
import useStyles from './style'

interface IHeatMapSwitch {
  onClick: () => void
  isChecked: boolean
}

const HeatMapSwitch: React.FC<IHeatMapSwitch> = ({ onClick, isChecked }) => {
  const classes = useStyles()

  return (
    <Switch
      disableRipple
      checked={isChecked}
      onClick={onClick}
      classes={classes}
      inputProps={{ 'aria-label': 'Heat map switch' }}
    />
  )
}

export default HeatMapSwitch
