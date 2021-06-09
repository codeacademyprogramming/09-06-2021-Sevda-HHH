import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';


export const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

