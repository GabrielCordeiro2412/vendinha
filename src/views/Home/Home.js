import React, { useContext, useState, useEffect, useRef, Fragment } from "react";
import { StatusBar, Text } from 'react-native'

import { Container } from '../../styles/global'

export default function Home() {
    return (
        <Fragment>
            <StatusBar barStyle="light-content" backgroundColor="#fff" />
            <Container>
                <Text>Home</Text>
            </Container>
        </Fragment>
    )
}