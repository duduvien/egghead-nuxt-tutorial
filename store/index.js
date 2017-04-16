export const state = {
  todos: []
}

export const mutations = {
  init (state, todos) {
    state.todos = todos
  },

  increment (state) {
    state.counter++
  },

  decrement (state) {
    state.counter--
  }
}
