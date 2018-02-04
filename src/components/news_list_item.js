import React from "react";
import { css } from 'glamor'

const NewsItem = (props) => {
    let news_item = css({
        padding : "20px",
        boxSizing : "border-box",
        borderBottom : "1px solid grey",
        ':hover': {
            color: 'red'
          },
          '@media(min-width: 300px)': {
            color: 'blue'
          }
    });

    let item_grey = css({
        background : "lightgrey"
    });

    return(
        <div className ={`${news_item} ${item_grey}`}>
            <h3>{props.item.title}</h3>
            <div>
                {props.item.feed}
            </div>
        </div>
    );
};

export default NewsItem;
