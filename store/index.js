import axios from 'axios'

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
  },

  add (state, todo) {
    state.todos = [...state.todos, todo]
  }
}

export const actions = {
  async add ({commit}, task) {
    const res = await axios.post('https://todos-btofexncpe.now.sh/todos', {task, complete: false})
    commit('add', res.data)
  }
}
