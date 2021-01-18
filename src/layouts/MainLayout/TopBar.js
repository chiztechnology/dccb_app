import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  }
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/" style={{ display: 'flex' }}>
          {/* <Logo /> */}
          <img src="/logo.png" style={{ height: 50, width: 50 }} />
          <div style={{ alignSelf: 'center', marginLeft: 10 }}>
            <h3 style={{ color: 'white', fontSize: 14, fontFamily: 'arial', fontWeight: 'normal', textTransform: 'uppercase' }}>Republique Islamique de  mauritainie</h3>
            <h4 style={{ color: 'white', fontSize: 12, fontFamily: 'arial', fontWeight: 'normal' }}>Ministére de l’Interieur et de la Decentralisation </h4>
          </div>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
