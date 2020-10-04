import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
import './index.css';


ReactDOM.render(
    <>
        
        {Sdata.map( (val)=> {
            return(
                <Card  imgsrc={val.imgsrc} title={val.title} seriesname={val.seriesname} link={val.link}/>
            );
        })}
    </>,
    document.getElementById('root')
);