import React from 'react';

export default class Slide extends React.Component{

    render(){


        return(
            <picture>
            <source media="(max-width: 768px)" srcSet="https://justa.com.vc/_images/credito_justo_BTG-mobile.jpg"/>
            <source media="(min-width: 768px)" srcSet="https://justa.com.vc/_images/credito_justo_btg.jpg"/>
            <img className=""src="https://justa.com.vc/_images/credito_justo_btg.jpg" alt="Logo da Elomi Cosméticos"/>
        </picture>
        );
    }
}