import React from 'react';
import ReactDOM from 'react-dom';
import Leaderboard from './components/leaderboard';



class Index extends React.Component{
    
    render(){
              return(
                <Leaderboard />
            );
    };
}

ReactDOM.render(
<Index />
 , document.querySelector('#root'))