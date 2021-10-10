import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';


const darkTheme = {
    color: 'red',
    background: 'yellow'
}

const lightTheme = {
    color: 'blue',
    background: 'green'
}

export default class DemoTheme extends Component {

    state = {
        currentTheme: darkTheme
    }
    handelChange = (event) => {
        this.setState({
            currentTheme: event.target.value === '1' ? darkTheme : lightTheme
        })
    }

    render() {
        const DivStyled = styled.div `
            color: ${props => props.theme.color};
            background: ${props => props.theme.background};
            padding: 5%;
        `
        return (
            <ThemeProvider theme = {this.state.currentTheme}>
                <DivStyled>
                    hello Chau
                </DivStyled>
                <select onChange = {this.handelChange}>
                    <option value="1">Dark theme</option>
                    <option value="2">Light theme</option>
                </select>
            </ThemeProvider>
        )
    }
}
