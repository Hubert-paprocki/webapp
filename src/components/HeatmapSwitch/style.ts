import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({

  switchBase: {
    color: colors.white.main,
    transform: 'translateX(8px)'
  },
  thumb: {
    width: 12,
    height: 12,
    transform: 'translate(-5px,3px)'

  },
  checked: {

    '& $thumb': {
      color: colors.white.main
    },
    '& + $track': {
      opacity: '1 !important'
    }
  },
  track: {
    height: 12,
    width: 24,
    backgroundColor: colors.invariant.newDark
  }
}))

export default useStyles
