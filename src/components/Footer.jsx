import React from "react"

function Footer(){

const year = new Date().getFullYear();

    return(
        <footer>
            <p>Keeper App {year}</p>
        </footer>
    )
}

export default Footer; 