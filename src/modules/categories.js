const state = {
  category: '',
  details: '',
  edit: ''
}

const getters = {
  category: ({ category }) => category,

  details: ({ details }) => details,

  edit: ({ edit }) => edit
}

const mutations = {
  ADD_CATEGORY: (state, category) => {
    state.category = category
  },

  ADD_DETAILS: (state, details) => {
    state.details = details
  },

  ADD_EDIT: (state, edit) => {
    state.edit = edit
  }
}

const actions = {
  CATEGORY_ADD: ({ commit }, category) => {
    commit('ADD_CATEGORY', category)
  },

  DETAILS_ADD: ({ commit }, details) => {
    commit('ADD_DETAILS', details)
  },

  EDIT_ADD: ({ commit }, edit) => {
    commit('ADD_EDIT', edit)
  }
}

export default { state, getters, mutations, actions }
