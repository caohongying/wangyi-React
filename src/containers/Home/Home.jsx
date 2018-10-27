import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getHomeData} from '../../redux/actions'
class Home extends Component {
  componentDidMount(){
    this.props.getHomeData()
  }
  render(){
    return(
      <div>Home</div>
    )
  }
}
export default connect(
  state=>({home_data:state.home_data}),
  {getHomeData}
)(Home)