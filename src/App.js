<<<<<<< HEAD
import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
 


const App = () => {
    return(
        <div>
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>    
    );
}

=======
import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
 


const App = () => {
    return(
        <div>
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>    
    );
}

>>>>>>> b0ff8bb6dc2e1f93e420b1409cf01abf20cad92b
export default App;