import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
    marginLeft: '-7%',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    'margin-top': 20,
    margin: theme.spacing.unit,
  },
  tabs: {
    marginLeft: '2.80%',
    color: 'white',
  },
  div1: {
    marginRight: '25%',
    marginTop: '1.40%',
  },
  div2: {
    marginLeft: '-19%',
    marginRight: '-3%',
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar style={{ color: 'white', backgroundColor: '#6495ED', marginRight: '0%' }}>
        <Toolbar>
          <IconButton className={classes.menuButton} style={{ marginLeft: '-2%' }} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Pedidos
          </Typography>
          <div className={classes.div1}>
            <i className="material-icons">search</i>
          </div>
          <div className={classes.div2}>
            <i className="material-icons">more_vert</i>
          </div>
        </Toolbar>
        <Tabs className={classes.tabs}>
          <Tab label="Importar" className={classes.tabs1} />
          <Tab label="Editar" style={{ marginLeft: '3%' }} />
          <Tab label="Imprimir" style={{ marginLeft: '3%' }} />
        </Tabs>
      </AppBar>
      <List style={{ marginTop: '39%' }}>
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons" style={{ fontSize: 50, marginTop: '-4%', marginLeft: '-7%' }}>stop</i>
          </ListItemIcon>
          <ListItemText style={{ marginLeft: '-3.50%', marginTop: '-2%' }} primary="Nickname" />
        </ListItem>
        <p style={{ color: 'black', fontSize: 14, marginTop: '-3%', marginLeft: '11.50%' }}>Endereço ou nome do destinatário</p>
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons" style={{ fontSize: 50, marginTop: '-4%', marginLeft: '-7%' }}>stop</i>
          </ListItemIcon>
          <ListItemText style={{ marginLeft: '-3.50%', marginTop: '-2%' }} primary="Nickname" />
        </ListItem>
        <p style={{ color: 'black', fontSize: 14, marginTop: '-3%', marginLeft: '11.50%' }}>Endereço ou nome do destinatário</p>
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons" style={{ fontSize: 50, marginTop: '-4%', marginLeft: '-7%' }}>stop</i>
          </ListItemIcon>
          <ListItemText style={{ marginLeft: '-3.50%', marginTop: '-2%' }} primary="Nickname" />
        </ListItem>
        <p style={{ color: 'black', fontSize: 14, marginTop: '-3%', marginLeft: '11.50%' }}>Endereço ou nome do destinatário</p>
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons" style={{ fontSize: 50, marginTop: '-4%', marginLeft: '-7%' }}>stop</i>
          </ListItemIcon>
          <ListItemText style={{ marginLeft: '-3.50%', marginTop: '-2%' }} primary="Nickname" />
        </ListItem>
        <p style={{ color: 'black', fontSize: 14, marginTop: '-3%', marginLeft: '11.50%' }} >Endereço ou nome do destinatário</p>
      </List>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
