import React from 'react'
import { printBN } from '@consts/utils'
import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { BN } from '@project-serum/anchor'
import { colors, theme } from '@static/theme'
import { useStyles } from './style'

interface IBondItem {
  icon: string
  secondIcon: string
  symbol: string
  secondSymbol: string
  decimals: number
  price: number
  roiPercent: string
  purchased: string
  vesting: string
}

const BondItem: React.FC<IBondItem> = ({
  icon,
  secondIcon,
  symbol,
  secondSymbol,
  decimals,
  price,
  roiPercent,
  purchased,
  vesting
}) => {
  const classes = useStyles()
  const isExSmall = useMediaQuery(theme.breakpoints.down('xs'))
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container style={{ color: colors.white.main }} className={classes.container}>
      <Grid className={classes.itemList}>
        <Grid className={classes.iconItems}>
          {isExSmall ? null : (
            <>
              <Grid item>
                <img src={icon} />
              </Grid>
              <Grid className={classes.icon} item>
                <img src={secondIcon} />
              </Grid>
            </>
          )}
          <Grid className={classes.symbol}>
            <Typography className={classes.secondSymbol}>
              {symbol}/{secondSymbol}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.price}>
        {printBN(new BN(price), decimals)} {symbol}/{secondSymbol}
      </Grid>
      {!isExSmall ? <Grid className={classes.roi}>+{roiPercent}%</Grid> : null}
      {!isExSmall ? <Typography className={classes.purchased}>${purchased}</Typography> : null}

      {!isSmall ? (
        <Grid className={classes.days}>{!isSmall && <span>{vesting} days</span>}</Grid>
      ) : null}

      <Button className={classes.bondButton}>Bond</Button>
    </Grid>
  )
}
export default BondItem
