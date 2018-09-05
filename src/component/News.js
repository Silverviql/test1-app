import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import news from "../img/news.jpg";


class News extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className="card col-lg-12 mt-3 mb-3">
                        <img className="card-img-top"   src={news} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Новости</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">News link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
