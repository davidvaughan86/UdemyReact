import './Card.css'



// the special value of the children prop will always be the value between the opening and closing custom component tag
function Card (props) {
    const classes = 'card ' + props.className
    return <div className={classes}>
        
        {props.children}

    </div>
}

export default Card