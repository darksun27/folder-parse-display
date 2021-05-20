import React, { useState, useEffect } from 'react';
import { BASE_URI } from '../API/constants';
import axios from 'axios';

const ListContext = React.createContext();

export const ListProvider = ({ children }) => {
    const [fileDetails, setFileDetails] = useState([]);
    const fetchData = async (path = null) => {
        if(path === '') {
            path = null;
        }
        let formData = new FormData();
        formData.append('path', path);
        let { data } = await new axios({
            method: 'POST',
            url: `${BASE_URI}/getInfo`,
            data: formData
        });
        setFileDetails(data);
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
    <ListContext.Provider
        value={{
            fileDetails,
            setFileDetails,
            fetchData
        }}>
        {children}
    </ListContext.Provider>
    );
};

export const useList = () => React.useContext(ListContext);