const { createStore, combineReducers } = require('redux')

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
})

const store = createStore(rootReducer)

export default store
