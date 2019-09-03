  
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';
import Footer from './containers/Footer'

class TodoApp extends Component {

  state = {
    todos: [],
    //todos reducer
    visibilityFilter: 'SHOW_ALL_TODOS'
    //visibility filter
  }

  render() {
    return (
      <View style={styles.container}>
        <AddTodo />

        <View>
          <VisibleTodos />
        </View>

        <Footer />
 
      </View>
    );
  }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    }
});