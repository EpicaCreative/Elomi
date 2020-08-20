import React from 'react';

export default class Logo extends React.Component{

    render(){
        return(
            <div className="logo">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/logomarcaS.png"/>
                    <source media="(max-width: 768px)" srcSet="/img/logomarcaL.png"/>
                    <img src="/img/logomarcaL.png" alt="Logo da Elomi Cosméticos"/>
                </picture>
            </div>
        );
    }
}