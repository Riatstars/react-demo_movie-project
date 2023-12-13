import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Movies", "TV Shows", "More"];
const settings = ["My Watchlist", "Account", "Logout"];

function ResponsiveAppBar({ setShowSearchBar }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [searchActive, setSearchAticve] = React.useState(true);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      style={{ backgroundColor: "rgb(3,37,65)" }}
      maxwidth="xl"
      position="static"
    >
      <Container maxwidth="xl">
        <Toolbar style={{ height: "64px" }} disableGutters>
          <Link to="/movie">
            <img
              style={{ paddingRight: "1rem" }}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="The Movie Database (TMDB)"
              width="154"
              height="20"
            />
          </Link>

          <Box
            style={{ height: "64px" }}
            sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                style={{ margin: "0 1rem" }}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            style={{ display: "flex", alignItems: "center" }}
            sx={{ flexGrow: 0 }}
          >
            <Tooltip title="Add Movies">
              <img
                style={{ padddingLeft: "20px" }}
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
                alt="The Movie Database (TMDB)"
                width="40"
                height="25"
              />
            </Tooltip>

            <Tooltip title="Open Notification">
              <img
                style={{ paddingLeft: "20px", filter: "invert(1)" }}
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-441-bell-9cd2af257b98c4af3460078777d8e38a5e12bca89704eeac2f39273afcbd06ff.svg"
                alt="The Movie Database (TMDB)"
                width="40"
                height="25"
              />
            </Tooltip>
            <Tooltip title="Open Account">
              <IconButton
                style={{ paddingLeft: "20px" }}
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Tooltip title="Search">
              <img
                onClick={() => setShowSearchBar((prevState) => !prevState)}
                style={{ paddingLeft: "20px", filter: "invert(1)" }}
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-3992eb97b2b749f09793f9653407c499aa896d99535cb35cc66682d26a49df13.svg"
                alt="The Movie Database (TMDB)"
                width="40"
                height="30"
              />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
