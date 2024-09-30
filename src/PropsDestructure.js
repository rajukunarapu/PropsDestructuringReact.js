import React from "react"
// Props destructuring:
export function Ex1(p) {
    return (
        <>
            <p>Id: {p.id}</p>
            <p>Name: {p.name}</p>
            <p>ActualPrice: {p.aprice}</p>
            <p>OfferPrice: {p.oprice}</p>
        </>
    )
}

//same as above

// let{id,name,aprice,oprice} = p toatal obj1 object is passed to p argument, destructuring the proprties

export function Ex2({ id, name, aprice, oprice }) {    // destructuring the properties
    return (
        <>
            <h1>Using Properties Destructuring</h1>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>ActualPrice: {aprice}</p>
            <p>OfferPrice: {oprice}</p>
        </>
    )
}

export class Ex3 extends React.Component {
    render() {
        return (
            <>
                <h1>Using class component</h1>
                <p>Id: {this.props.id}</p>
                <p>Name: {this.props.name}</p>
                <p>Aprice: {this.props.aprice}</p>
                <p>Oprice: {this.props.oprice}</p>
            </>
        )
    }
}

export class Ex4 extends React.Component {
    render() {
        return (
            <>
                <h1>Using class component object destructuring </h1>
                <p>Id: {this.props.id}</p>
                <p>Name: {this.props.name}</p>
                <p>ActualPrice: {this.props.aprice}</p>
                <p>offerPrice: {this.props.oprice}</p>
            </>
        )
    }
}