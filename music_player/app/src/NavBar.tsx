import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'


export const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        Music Player
                    </Typography>
                    <a className="text-decoration-none text-white p-2" href="/songs" color="inherit"><b>Songs</b></a>
                </Toolbar>
            </AppBar>
        </div>
    )
}

