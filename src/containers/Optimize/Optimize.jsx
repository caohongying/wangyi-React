import React,{Component} from 'react'
import {connect} from 'react-redux'

import {getOptimizeData} from '../../redux/actions'
class Optimize extends Component {
  componentDidMount(){
    this.props.getOptimizeData()
  }
  render(){
    return(
      <div>Optimize</div>
    )
  }
}
export default connect(
  state=>({optimize_data:state.optimize_data}),
  {getOptimizeData}
)(Optimize)