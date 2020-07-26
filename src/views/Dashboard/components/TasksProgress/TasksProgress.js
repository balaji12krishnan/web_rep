import React from 'react';
//import{Card} from 'react-elements';
import {StyleSheet,Text, View} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import  { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  LinearProgress
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
//import { data } from './pollutiondatanew';  
  const useStyles = makeStyles(theme => ({
    root: {
      height: '100%',
      backgroundColor: '#fff',
      color: theme.palette.primary.contrastText
    },
    content: {
      alignItems: 'center',
      display: 'flex'
    },
    title: {
      fontWeight: 700
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      height: 56,
      width: 56
    },
    icon: {
      height: 32,
      width: 32
    },
    progress: {
      marginTop: theme.spacing(3)
    }
  }));
  
  
  
  const Pollution = props => {
    const { className, ...rest } = props;
  
   const classes = useStyles();

   const [hasError, setErrors] = useState(false);
  const [pollutionLevel, setPollutionLevel] = useState({});
  

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d86be2cd00f2a4a74c6fa3c72a78d79c");
      res
        .json()
        .then(res => 
        setPollutionLevel(res.main.temp))
        .catch(err => console.log(err));
    
    }
    fetchData();
  });

  
  return (
    <Card
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
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              WEATHER
            </Typography>
            <Typography variant="h3">{JSON.stringify(pollutionLevel)}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <InsertChartIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          className={classes.progress}
          value={75.5}
          variant="determinate"
        />
      </CardContent>
    </Card>
  );
};

Pollution.propTypes = {
  className: PropTypes.string
};

export default Pollution;
 

