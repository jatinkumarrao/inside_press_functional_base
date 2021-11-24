import React from 'react'
import '../index.css';
const NewsItems = (props) => {
    let { author, date, description, title, imageurl, url, source } = props
    return (

        <div className="card my-2 hower " >
            <div style={{ position: 'absolute', justifyContent: "flex-end", right: "0", display: "flex" }}>
                <span className=" badge rounded-pill bg-danger">{source}</span>
            </div >
            <img src={imageurl ? imageurl : "https://image.shutterstock.com/image-vector/good-news-banner-colorful-paper-260nw-1162094869.jpg"} className="card-img-top" alt="..." />
            <div className="card-body ">
                <h5 className="card-title "
                >{title}...</h5>
                <p className="card-text cart-desc ">{description.replace(/\s+/g, ' ').trim()}...</p>
                <p className="card-text date_time"><small className="text-muted">By {author ? author.slice(0, 13) : 'unKnown'} on {new Date(date).toGMTString()}</small></p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">More</a>
            </div>

        </div >
    )

}
export default NewsItems;