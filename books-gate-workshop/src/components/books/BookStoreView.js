import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SocialIconsAdmin from "./SocialIconsAdmin";
import SocialIconsUser from "./SocialIconsUser";

export default class BookStoreView extends Component {

    render() {
        const isAdmin = sessionStorage.getItem('role') === 'admin';
        const discountBtn = (
            <span className="product-discount-label">
                <Link to={`/books/discount/${this.props._id}`}>
                    <i className="fa fa-bar-chart-o"> Set Discount</i>
                </Link>
            </span>
        );
        // const markAsNewBtn = (
        //     <span className="product-new-label">
        //         <Link to={`/books/edit/${this.props._id}`}>
        //             <i className="fa fa-check-square-o"> Mark as New</i>
        //         </Link>
        //     </span>
        // );

        return (
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <Link to="">
                            <img className="pic-1"
                                 src={this.props.first_img} alt=""/>
                            <img className="pic-2"
                                 src={this.props.second_img} alt=""/>
                        </Link>
                        {isAdmin ? <SocialIconsAdmin {...this.props}/> : <SocialIconsUser {...this.props}/>}
                        {/*{isAdmin ? markAsNewBtn : null}*/}
                        {isAdmin ? discountBtn : null}

                    </div>
                    <ul className="rating">
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star disable"></li>
                    </ul>
                    <div className="product-content">
                        <h3 className="title"><Link to="">{this.props.name}</Link></h3>
                        <div className="price">${(+this.props.price).toFixed(2)}</div>
                        <Link className="add-to-cart" to={`/user/cart/add/${this.props._id}`}>+ Add To Cart</Link>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}