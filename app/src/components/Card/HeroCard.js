import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'
import { useStyles } from '../../hooks/useStyles'
import './HeroCard.css'

function HeroCard({ hero, onAdd, list, onRemove, clearList }) {
  const [toggle, setToggle] = useState(false)
  const classes = useStyles();

  const { card, textWhite, textGrey, bgvert, bgwhite, btn, fullWidth, btnSalmon, btnBlack, scrollDiv } = classes

  useEffect(() => {
    if (list) {
      clearList()
      setToggle(false)
    }
  }, [list])

  const switchMode = () => {
    setToggle(prevToggle => !prevToggle)
    if (!toggle) {
      onAdd(hero)
      // console.log(toggle)
    } else {
      onRemove(hero)
    }
  }

  return (
    <div>
      <Card className={toggle ? `${bgvert} ${card} ${textWhite}` : `${bgwhite} ${card}`} elevation={0}>
        <CardContent className={scrollDiv}>
          <Typography
            variant="h3"
            align="left"
          >
            {hero.title}
          </Typography>
          <Typography
          className={!toggle? textGrey : textWhite }
         paragraph >
          {hero.description}
          </Typography>
         
        </CardContent>
        <CardActions>
          <Button onClick={switchMode} className={toggle ? `${btnBlack} ${btn} ${fullWidth}` : `${btnSalmon} ${btn} ${fullWidth}`} disableRipple >
            {' '}
            {toggle ? 'Unselect' : 'Select'}
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default HeroCard;
