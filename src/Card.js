<<<<<<< HEAD
import React from 'react';


const Card = (props) =>{
    return(
        
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow'>
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>        
        
            <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            </div>
        </div>
    );
}

=======
import React from 'react';


const Card = (props) =>{
    return(
        
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow'>
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>        
        
            <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            </div>
        </div>
    );
}

>>>>>>> b0ff8bb6dc2e1f93e420b1409cf01abf20cad92b
export default Card;