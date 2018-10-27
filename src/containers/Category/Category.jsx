import React,{Component} from 'react'
import {connect} from 'react-redux'

import {getCategoryData} from '../../redux/actions'


class Category extends Component {
  componentDidMount(){
    this.props.getCategoryData()
  }
  render(){
    return(
      <div>Category</div>
    )
  }
}
export default connect(
  state=>({category_data:state.category_data}),
  {getCategoryData}
)(Category)