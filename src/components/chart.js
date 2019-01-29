import React, { Component } from 'react';
import c3 from 'c3';
import { connect } from 'react-redux';

class Chart extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
        }
}
componentDidUpdate = ()=> {
    this.generateChart(this.props.posts.items)
}
generateChart(items=[['0',10]])
{
    const chart = c3.generate({
        bindto: '#chart',
        data: {
            // iris data from R
            columns:items,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
      });}


    componentDidMount() {
        this.generateChart();
    }
      ComponentWillUpdate(){

        //this.updateChart();
      }
  render() {

     // this._generateChart();
        return (<div id="chart"></div>);     
    }

}
function mapStateToProps(state){
    return {
        posts: state.posts
    }
}



export default connect(mapStateToProps)(Chart);
