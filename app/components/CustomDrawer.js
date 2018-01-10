import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';

import img from './foto.png';

const style = {
  marginTop: '-43%',
  height: 270,
  width: 270,
  backgroundImage: '-webkit-radial-gradient(2em,circle, rgb(255, 255, 255), rgb(0, 0, 0))',
  display: 'flex',
};

class CustomDrawer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = { open: true };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <Drawer open={this.state.open} onClose={this.handleClose}>
          <div tabIndex={0} role="button" onClick={this.handleClose} onKeyDown={this.handleClose}>
            <Paper style={style}>
              <Avatar
                src={img}
                style={{
                  display: 'flex', backgroundColor: 'blue', marginLeft: '5%', marginTop: '50%', width: 80, height: 80,
                }}
              />
            </Paper>
            <p
              style={{
                fontFamily: 'monospace', marginLeft: '37%', marginTop: '-10%', color: 'white',
              }}
            >
                jessica@uproc.com.br
            </p>
            <List style={{ marginTop: '-0%', marginLeft: '-10%', display: 'block' }}>
              <ListItem button>
                <i className="material-icons" style={{ fontSize: '200%', marginTop: '10%', marginLeft: '10%' }}>system_update_alt</i>
                <ListItemText
                  style={{
                  marginLeft: '-1%',
                  marginTop: '10%',
                  }}
                  primary="Importar do ML"
                />
              </ListItem>
              <ListItem button>
                <i className="material-icons" style={{ fontSize: '200%', marginTop: '10%', marginLeft: '10%' }}>list</i>
                <ListItemText
                  style={{
                  marginLeft: '-1%',
                  marginTop: '10%',
                  }}
                  primary="Lista de pacotes"
                />
              </ListItem>
              <ListItem button>
                <i className="material-icons" style={{ fontSize: '200%', marginTop: '10%', marginLeft: '10%' }}>supervisor_account</i>
                <ListItemText
                  style={{
                  marginLeft: '-1%',
                  marginTop: '10%',
                  }}
                  primary="Configuração de contas"
                />
              </ListItem>
              <ListItem button>
                <i className="material-icons" style={{ fontSize: '200%', marginTop: '10%', marginLeft: '10%' }}>help</i>
                <ListItemText
                  style={{
                  marginLeft: '-1%',
                  marginTop: '10%',
                  }}
                  primary="Ajuda"
                />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default CustomDrawer;
