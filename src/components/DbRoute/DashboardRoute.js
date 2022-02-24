import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateIcon from "@mui/icons-material/Create";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { NavLink } from "react-router-dom";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const DashboardRoute = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const icons = [
    <HomeIcon />,
    <AccountCircleIcon />,
    <ContactPageIcon />,
    <CreateIcon />,
    <LogoutIcon />,
  ];
  const route = ["Dashboard", "Profile", "My Info", "Blog Write", "Log Out"];
  const adminicons = [
    <SupervisorAccountIcon />,
    <EventNoteIcon />,
    <GroupAddIcon />,
  ];

  return (
    <div>
      {/* for all user  */}

      <List>
        {["", "profile", "MyInfo", "BlogWrite", "Logout"].map((text, index) => (
          <Box key={index}>
            <NavLink to={text}>
              <ListItem button>
                {" "}
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={route[index]} />
              </ListItem>
            </NavLink>
          </Box>
        ))}
      </List>
    </div>
  );
};

export default DashboardRoute;
