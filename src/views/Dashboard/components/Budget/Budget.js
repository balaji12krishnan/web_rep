import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: '#fff',
    color: '#db3236'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 600
  },
  avatar: {
    backgroundColor: '#4285F4',
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: '#4285F4'
  },
  differenceValue: {
    color: '#4285F4',
    marginRight: theme.spacing(1)
  }
}));

const Weather = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [hasError, setErrors] = useState(false);
  const [pollutionLevel, setPollutionLevel] = useState({});
  const [pollutionStatus, setPollutionStatus]= useState({});
  

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://api.airpollutionapi.com/1.0/aqi?lat=10.7905&lon=78.7047&APPID=pmtfr4p3gqvcdh8dcfurh06b36");
      const res1 = await fetch("http://api.airpollutionapi.com/1.0/aqi?lat=10.7905&lon=78.7047&APPID=pmtfr4p3gqvcdh8dcfurh06b36");
      res
        .json()
        .then(res => 
        setPollutionLevel(res.data.value))
        .catch(err => console.log(err));
      res1
        .json()
        .then(res1 => 
        setPollutionStatus(res1.data.text))
        .catch(err => console.log(err));
        
    
    }
    fetchData();
  });

  return (
    <Card  bg="#fff" text="white"
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="#fff"
              gutterBottom
              variant="body2"
            >
              {JSON.stringify(pollutionLevel)}-->POLLUTION LEVEL
            </Typography>
            <Typography variant="h3">{JSON.stringify(pollutionStatus)}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <WbSunnyOutlinedIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            12%
          </Typography>
          <Typography
            className={classes.caption}
            variant="caption"
          >
            Today's Report
          </Typography>
        </div>
      </CardContent>
      

    </Card>
  );
};

Weather.propTypes = {
  className: PropTypes.string
};

export default Weather;
