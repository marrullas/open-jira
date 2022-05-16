import {useContext} from 'react';
import { Box, Divider, Drawer, ListItem, ListItemIcon, ListItemText, Typography, List } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { UIContext } from '../../context/ui';

const menuItems: string[] = ["Bandeja", "Propios", "Send", "Borradores"];

export const SideBar = () => {

  const {sideMenuOpen, closeSideMenu} = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => (
           
            <ListItem button key={text}>
              <ListItemIcon>
                
                { index % 2 ? <EmailOutlinedIcon/>:<InboxOutlinedIcon/> }
 
               
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((text, index) => (
           
            <ListItem button key={text}>
              <ListItemIcon>
                
                { index % 2 ? <EmailOutlinedIcon/>:<InboxOutlinedIcon/> }
 
               
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
