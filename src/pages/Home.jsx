import {useState, useEffect} from 'react';
import Loader from '../components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactsTable from '../components/ContactsTable';

const Home = () => {;

  return (
    <>
      <ContactsTable />
    </>
  );
};

export default Home;