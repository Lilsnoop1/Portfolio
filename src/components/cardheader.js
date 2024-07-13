import '../webdev.css'

function HeaderTile(props){
    return <div className="mainHeadertile" style={{backgroundColor:props.color}}>
        <p>{props.text}</p>
    </div>;
}

export default HeaderTile;