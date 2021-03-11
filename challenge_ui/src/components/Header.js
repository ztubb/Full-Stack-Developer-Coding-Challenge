import api from '../api/api';
import Button from '@material-ui/core/Button';
import ENDPOINTS from '../config/endpoints';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { React, useState } from 'react';

function Header(props) {

    const [alert, setAlert] = useState('');

    const callback = (data) => {
        console.log('got data');
        console.log(data);
        setAlert(data.data.status);
    };

    const errorCb = (e) => {
        console.error(e);
    };

    const CustomButton = withStyles((theme) => ({
        root: {
            color: 'white'
        }
    }))(Button); 

    return (
        <div className='row' style={styles.banner}>
            <h1 style={styles.header}>Apollo UI
                <div style={styles.user}>{props.username}</div>
            </h1>
            {props.children}
            <div className='row' style={{ backgroundColor: '#282c34', display: 'inline-flex' }}>
                <CustomButton
                    color='primary'
                    id='register'
                    onClick={(e) => props.action(e)}
                >
                    Register
                </CustomButton>
                <CustomButton 
                    color='primary'
                    id='login'
                    onClick={(e) => props.action(e)}
                >
                    Login
                </CustomButton>
            </div>
        </div>
    );
};

const styles = {
    banner: {
        backgroundColor: '#282c34',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight: '20px'
    },
    header: {
        backgrounColor: '#282c34',
        color: 'white',
        float: 'right'
    },
    user: {
        color: '#61dafb',
        display: 'inline',
        fontSize: 11,
        paddingLeft: '10px'
    }
}

export default Header;