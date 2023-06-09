import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Loader from '../Loader';
import AppBar from '../AppBar';
import SideBar from '../SideBar'

const Layout = () => {
  return (
    <>
    <AppBar />
    <Container sx={{display: 'flex'}}>
    <SideBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
    </>
  );
};

export default Layout;