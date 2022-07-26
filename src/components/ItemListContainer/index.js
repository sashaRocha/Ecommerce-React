
function ListContainer(props) {
    return(
        
    <div className="box">
     
     {props.texto}
     <div>
        <img src="/img/imgplaceholder.png" alt="img placeholder" className="placeholder" ></img>
     </div>
    </div>
        
    )
}

export default ListContainer;