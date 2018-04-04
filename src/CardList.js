<<<<<<< HEAD
import React from 'react';
import Card from './Card.js';


const CardList = ({ robots }) => {
    
    return(
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key= {robots[i].id} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                            />
                    );    
                })
            }
        </div>
            

    );
}

=======
import React from 'react';
import Card from './Card.js';


const CardList = ({ robots }) => {
    
    return(
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key= {robots[i].id} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                            />
                    );    
                })
            }
        </div>
            

    );
}

>>>>>>> b0ff8bb6dc2e1f93e420b1409cf01abf20cad92b
export default CardList;