import React from "react";
import { Container } from 'reactstrap';
import { IAsyncData } from "../models";
import { Header } from "./header/Header";

type Props = {
    children?: React.ReactNode
}

export const CommonPageContainer: React.FC<Props> = ({children})=>{
    return (
        <>
            <Header/>
            <Container>
                {children}
            </Container>
        </>
    )
}