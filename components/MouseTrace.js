import React, { Component } from 'react';

class MouseTrace extends Component {

    constructor(props) {
        super(props);
        this.points = [];
        this.state = {plPoints: ""};
    }
    mouseMove(e) {
        this.pushCoord(e.clientX, e.clientY)
    }
    pushCoord(x, y) {
        this.points.push([x, y]);
        if (this.points.length > this.props.n) {
            this.points.shift();
        }
        this.setState({
            plPoints: this.points.reduce((s, pair) => s+=(','+pair.join(',')))
        });
    }

    render() {
        return (
            <svg width="100%" height="100%"  style={{position:"absolute", zIndex:5000, top:0, left:0, height:"100%", width:"100%"}}
                onMouseMove={this.mouseMove.bind(this)}>
                <polyline fill="none" stroke="red" points={this.state.plPoints}/>
            </svg>
        );
    }
}

export default MouseTrace;
