import { createStore } from 'vuex'
import moduleUser from "./user.js";

export default createStore({
    state: {},
	mutations: {},
	actions: {},
	modules: {
		m_user: moduleUser,		
	},
})
