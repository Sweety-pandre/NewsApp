import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title, description, imgurl, newsUrl, author, date, source } = this.props;
        return (
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <div className="card bg-light" style={{ width: '19rem' }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', left: '90%' }}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    {imgurl && <img src={imgurl} className="card-img-top" alt="..." />}
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontFamily: 'droid serif', fontWeight: 'bold' }}>
                            {title?.length > 60 ? `${title.slice(0, 60)}..` : title}
                        </h5>
                        <p className="card-text">{description?.length > 40 ? `${description.slice(0, 40)}...` : description}</p>
                        <p className="card-text ">
                            <small className="text-success">
                                By {!author ? 'unknown' : author} on {date ? new Date(date).toGMTString() : ''}
                            </small>
                        </p>
                        {newsUrl && (
                            <a href={newsUrl} className="btn btn-dark btn-sm">
                                Read more.....
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
