import Link from "next/link"
import React from "react";
import styles from '../styles/A.module.css'
import A from "../components/A";
import Head from "next/head"
import MainContainer from "../components/MainContainer";


const Index = () => {
    return (
        <MainContainer keywords={"main page"}>
            <h1>Главная страница</h1>
        </MainContainer>
    );
};
export default Index;


