import React from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import { getPerson } from '../actions/people';

const Person = ({personid, dispatch}) => {
    const person = dispatch(getPerson(personid));
    if (!person.id) {
        return (
            <div>No person found.</div>
        );
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src={person.img} role="presentation"/>
                        <div className="">
                            <h3>{person.name}</h3>
                            <Rating full="fa fa-star fa-2x" empty="fa fa-star-o fa-2x" scale={1} initialRate={person.rating} readonly={true}/>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-8">
                    <div className="row">
                        <div className="page-header">
                            <h1>Description</h1>
                            <p className="lead">{person.Description}</p>
                        </div>


                        <div className="col-sm-6">
                            <div className="likes">
                                <h2>Likes</h2>
                                {person.Likes.map((like, key) => (
                                    <span key={key} className="label label-default">{like}</span>
                                ))}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="Dislikes">
                                <h2>Dislikes</h2>
                                {person.Dislikes.map((dislike, key) => (
                                    <span key={key} className="label label-default">{dislike}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Person);
