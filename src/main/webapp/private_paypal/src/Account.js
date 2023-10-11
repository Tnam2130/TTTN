import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const [account, setAccount] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
    fetch("/rest/account/get").then(Response => Response.json()).then(data => {
        setAccount(data);
        setLoading(false);
    })
}, []);

if(loading) {
    return <h1>loading...</h1>
}

