// import { getQueriesForElement } from '@testing-library/react'
import './Tenzie.css'

function Tenzie(props){
    //console.log(`Tenzies isActive: ${props.isActive}, ${props.num}`)

    const styles = {
        backgroundColor: props.isActive? '#AD81B2' : '#fff'
    }

    return(
        <div className="Tenzie" style={styles} onClick={props.onClick}>
            {props.num}
        </div>
    )
}

export default Tenzie