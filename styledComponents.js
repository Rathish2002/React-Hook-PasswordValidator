// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
    background-color: #24263c;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
`

export const BoxContainer = styled.div`
    height: 550px;
    width: 600px;
    background-color: #475569;
    box-shadow: 1px 1px 10px 1px #475569;
    outline: none;
    border: none;
    border-radius: 15px;
    border-width: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
`

export const Heading = styled.h1`
    color: #ffffff;
    font-family: 'Roboto';
    font-weight: normal;
    font-size: 55px;
    padding-top: 20px;
`

export const Paragraph = styled.p`
    color: #f8fafc;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: normal;
`

export const InputText = styled.input`
    height: 60px;
    width: 500px;
    background-color: #edeeff;
    border-width: 0px;
`

export const ErrPara = styled.p`
    color: #ef4444;
    font-size: 15px;
    font-family: 'Roboto';
`
