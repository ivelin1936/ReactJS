import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Image from 'react-image-resizer';

export default class ProductComponent extends Component {

    render() {
        return (
            <tr>
                <td data-th="Product">
                    <div className="row">
                        <div className="col-sm-2 hidden-xs">
                            <Link to={`/books/details/${this.props._id}`} title="Details">
                                <Image width={80} height={120} src={this.props.first_img} alt="..." className="img-responsive"/>
                            </Link>
                        </div>
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-9">
                            <h5 className="nomargin">{this.props.name}</h5>
                            <p>
                                <strong><i>Author: </i></strong> {this.props.author}
                                <br/>
                                <strong><i>Cover </i></strong> {this.props.cover}
                            </p>
                        </div>
                    </div>
                </td>
                <td data-th="Price">${(+this.props.price).toFixed(2)}</td>
                <td data-th="Quantity">
                    <input type="number" className="form-control text-center" value="1"/>
                </td>
                <td data-th="Subtotal" className="text-center">${(+this.props.price).toFixed(2)}</td>
                <td className="actions" data-th="">
                    <Link to="#" className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></Link>
                    <Link to={`/user/cart/delete/${this.props._id}`} className="btn btn-danger btn-sm" title="Remove"><i className="fa fa-trash-o"></i></Link>
                </td>
            </tr>
        )
    }

}