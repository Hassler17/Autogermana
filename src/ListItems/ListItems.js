import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Paper,
} from '@material-ui/core';
import  ItemCard  from './../components/ItemCard';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

}));

const ListItems = (props) => {

  const {mode, data} =  props

  const classes = useStyles();
  
  return (
    <Paper className={classes.root}>
    <Grid container md={8}>
        <Typography
          className={classes.title}
          variant="h5"
        >
        {data?.length} Items Found
        </Typography>
        <br />
        <br />
        <br />
      <Grid
        container
        spacing={3}
      >
        {data.length > 0 ? data?.map(project => (
          <Grid
            item
            key={project.id}
            md={mode}
            sm={mode}
            xs={12}
          >
            <ItemCard project={project} />
          </Grid>
        ))
        : 
        <Grid
        item
        md={12}
        sm={12}
        xs={12}>
                 <Typography
          className={classes.title}
          variant="h5"
        >
          No results were found for this search...
          </Typography>
        </Grid>
      }
      </Grid>
    </Grid>
    </Paper>

    
  );
};

ListItems.propTypes = {
  className: PropTypes.string
};

export default ListItems;
