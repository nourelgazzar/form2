// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import { useHistory } from "react-router-dom";

// // import { withRouter } from "react-router-dom";
// // import { useHistory } from "react-router-dom";
// // import { Link } from "react-router-dom";
// const drawerWidth = 240;
// const navItems = ["Home", "View Employees", "Create Employees"];
// const useStyles = makeStyles((theme) => ({
//   text: {
//     color: "black",
//     "&:hover": {
//       color: "#a58cff",
//     },
//   },
// }));

// export default function NavBar(props) {
//   const history = useHistory();

//   const classes = useStyles();
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleClick = () => {
//     // 👇️ replace set to true
//     navigate("/create", { replace: true });
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         DAYRA
//       </Typography>
//       <Divider />
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <AppBar component="nav">
//         <Toolbar sx={{ background: "#f5f5f5", boxShadow: "none" }}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{
//               color: "#a58cff",
//               flexGrow: 1,
//               display: { xs: "none", sm: "block" },
//             }}
//           >
//             DAYRA
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             <Button sx={{ color: "black" }} className={classes.text}>
//               Home
//             </Button>
//             <Button sx={{ color: "black" }} className={classes.text}>
//               View Employees
//             </Button>
//             <Button
//               sx={{ color: "black" }}
//               className={classes.text}
//               onClick={() => {
//                 console.log("innn");
//                 history.push({
//                   pathname: "/create",
//                 });
//               }}
//             >
//               Create Employees
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
