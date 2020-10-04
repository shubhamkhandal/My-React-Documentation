import React from 'react';

function Card(props){
    // console.log(props);
    return(
        <React.Fragment>
       
            <div className="card">
            <img src={props.imgsrc} alt="banner" className="card_img"/>
 
            <div className="card_info">
                <span className="card_category">{props.title}</span>
                <h3 className="card_title">{props.seriesname}</h3>
 
                <a href={props.link} target="_blank" className="watch_btn">Watch Now</a>
            </div>
        </div>

    </React.Fragment>
    );
}

export default Card;