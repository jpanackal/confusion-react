import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dishComments) {

        console.log(dishComments)

        const dishComment = dishComments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{comment.author}</p>
                </div>
            );
        });

        if (dishComments != null)
            return(
                <div>
                    {dishComment}
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        return (
            this.renderDish(this.props.dish)
        )
    }

}

export default DishDetail;