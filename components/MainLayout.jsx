import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../styles/Home.module.css'


const MainLayout = ({children}) => {
    return (
        <div className={styles.container}>
            <Header></Header>
            {
                children
            }
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;