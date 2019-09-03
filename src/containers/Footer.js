import React, {Component} from 'react';
import { 
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from 'react-redux';
import { VisibilityFilters } from '../actions';
import {setVisibilityFilter} from '../actions';

class Footer extends Component {

  filterTodos= (actionType) => {
    this.props.dispatch(setVisibilityFilter(actionType))
  }
  
  render() {
    return(
      <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={()=> {this.filterTodos(VisibilityFilters.SHOW_ALL)}}>
          <Text style={{fontSize: 24}}>All</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={()=> {this.filterTodos(VisibilityFilters.SHOW_ACTIVE)}}>
          <Text style={{fontSize: 24}}>Active</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={()=> {this.filterTodos(VisibilityFilters.SHOW_COMPLETED)}}>
          <Text style={{fontSize: 24}}>Completed</Text>
        </TouchableOpacity>
      </View>
    )
  } 
}

export default connect()(Footer);


