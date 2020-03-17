import styled from "styled-components"
import "./fonts.css"

const font = "Neucha"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: ${font}
`

export const HeaderWrapper = styled.div`
    text-align: center;
    font-family: ${font};
    font-size: 1.5rem;
`

export const SidebarWrapper = styled.div`
    width: 350px;
    text-align: center;
    margin: 30px auto;

    #search-box {
        width: 100%;
    }

    input {
        width: 80%;
        margin: auto;
        height: 25px;
        font-size: 1.25rem;
        margin-bottom: 10px;
    }

    hr {
        width: 80%;
    }

    #search-button, #favorites-button {
        width: 50%;
        background: gold;
        border: 2px grey solid;
        font-size: 1.25rem;
        border-radius: 12px;
        margin-bottom: 10px;

        :hover {
            color: white;
        }

        :active {
            opacity: .3;
        }
    }

    #favorites-button {
        background: sandybrown;
    }

    #clear-button {
        width: 45%;
    }

    button {
        width: 80%;
    }

`

export const Button = styled.button`
    height: 30px;
    margin: 5px 10px;
    font-size: 1.25rem;
    border: 2px grey solid;
    background: powderblue;
    border-radius: 12px;

    :hover {
        color: white;
    }

    :active {
        opacity: .3;
    }
`

export const ClearButton = styled.button`
    height: 30px;
    margin: 5px 10px;
    font-size: 1rem;
    border: 2px grey solid;
    background: yellowgreen;
    border-radius: 12px;

    :hover {
        color: white;
    }

    :active {
        opacity: .3;
    }
`

export const CurrentWrapper = styled.div`
    display: flex;

    img {
        width: 120px;
        height: auto;
    }
`

export const WeekWrapper = styled.div`
    display: flex;
    flex-wrap: wrap
`

export const CardWrapper = styled.div`
    text-align: center;
    border: 3px grey solid;
    width: 165px;
    padding: 10px;
    margin: 10px;
`