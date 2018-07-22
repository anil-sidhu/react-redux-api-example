import { connect } from 'react-redux'
import { addTodo } from './action'
import App from './App'
const mapStateToProps = state => ({
  todos: state.id
})
const mapDispatchToProps = dispatch => ({
  addTodo: () => dispatch(addTodo())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)