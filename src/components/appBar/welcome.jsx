import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const GifBackground = styled.div`
  height: 246px;
  width: auto;
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: 12px;
`;
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      top: '57%'
    }
  },
  h5: {
    textAlign: 'center',
    color: theme.palette.secondary.dark,
    padding: 10,
    borderRadius: 8,
    fontStyle: 'italic',
    fontWeight: 'lighter',
    textTransform: 'initial'
  }
});

function Welcome(props) {
    const { classes, url, routeName } = props;
  
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography className={classes.h5} variant="h5" component="h3">
            {`Welcome to ${routeName === 'home' ? 'Giphy Hub' : `${routeName} section`}`}
          </Typography>
          <GifBackground url={url} />
        </Paper>
      </div>
    );
  }
  
  Welcome.propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    url: PropTypes.string.isRequired,
    routeName: PropTypes.string.isRequired
  };
  
  export default withStyles(styles)(Welcome);
  