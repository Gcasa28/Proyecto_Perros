import React from "react"
import { styles } from "../utils"

function LandingPage(props) {

    return (
        <div style={styles.fondoPantalla}>
            <div style={styles.stylesLandingPage}>
                <button style={styles.buttomLandingPage} onClick={props.goHome}>
                    Bienvenidos al mundo Dogs
                </button>
            </div>
        </div>
    )
}

export default LandingPage