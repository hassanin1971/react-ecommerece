import {
    Box,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from "@emotion/react";
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Close } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from "./Links";


const Header3 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme();


    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };




    return (
        <Container sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 5,
        }}>

            <Box>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        width: 222,
                        bgcolor: theme.palette.myColor.main,
                        color: theme.palette.text.secondary,
                    }}
                >
                    <WindowIcon />

                    <Typography sx={{
                        padding: "0",
                        textTransform: "capitalize",
                        mx: 1,
                    }}>
                        Categories
                    </Typography>

                    <Box flexGrow={1} />

                    <KeyboardArrowRightIcon />

                </Button>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    sx={{
                        ".MuiPaper-root":
                        {
                            width: 222,
                            bgcolor: theme.palette.myColor.main,
                        }
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <ElectricBikeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Bikies
                        </ListItemText>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <MonitorOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Electronics
                        </ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <MenuBookOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Books
                        </ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <ElectricBikeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Games
                        </ListItemText>
                    </MenuItem>
                </Menu>

            </Box>

           {useMediaQuery('(min-width:1000px)') && (
            <>
            <Links title={"Home"} />
            <Links title={"Mega Menu"} />
            <Links title={"Full Screen Menu"} />
            <Links title={"Pages"} />
            <Links title={"User Account"} />
            <Links title={"Vendor Account"} />   
            </>
           )}

                     


            {useMediaQuery('(max-width:1000px)') && (
                <IconButton onClick={toggleDrawer("top", true)}>
                    <MenuIcon />
                </IconButton>)
            }





            <Drawer
                anchor={"top"}
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
                sx={{
                    ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
                        height: "100%",
                    },
                }}
            >


                <Box sx={{
                    position: "relative",
                    my: 6,
                    mx: "auto",
                    width: 444,
                    paddingTop: 10
                }}>
                    <IconButton sx={{
                        ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
                        position: "absolute",
                        top: 0,
                        right: 10,

                    }} onClick={toggleDrawer("top", false)}>
                        <Close />
                    </IconButton>



                    {[
                        { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
                        { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
                        {
                            mainLink: "full screen menu",
                            subLinks: ["Link 1", "Link 2", "Link 3"],
                        },
                        { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
                        {
                            mainLink: "user account",
                            subLinks: ["Link 1", "Link 2", "Link 3"],
                        },
                        {
                            mainLink: "vendor account",
                            subLinks: ["Link 1", "Link 2", "Link 3"],
                        },
                    ]
                        .map((item) => {
                            return (
                                <Accordion key={item.mainLink}
                                    elevation={0}
                                    sx={{ bgcolor: "initial" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>
                                            {item.mainLink}
                                        </Typography>
                                    </AccordionSummary>
                                    <List sx={{ py: 0, my: 0 }}>
                                        {item.subLinks.map((link) => {
                                            return (
                                                <ListItem key={link} sx={{ py: 0, my: 0 }}>
                                                    <ListItemButton>
                                                        <ListItemText primary={link} />
                                                    </ListItemButton>
                                                </ListItem>
                                            );
                                        })}
                                    </List>



                                </Accordion>
                            )
                        })}


                </Box>

            </Drawer>


        </Container>
    );
}

export default Header3;
