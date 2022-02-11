import create from 'zustand';
import { devtools } from 'zustand/middleware';
import config from '../config/config';
import { users, activities, sessionsList, performances } from '../assets/data/mock';

const store = (set, get) => ({
	user: {},
	activity: {},
	sessionsAverage: {},
	performance: {},
	getUser: async () => {
		if (config.mockedData) {
			set({ user: users[0], activity: activities[0], sessionsAverage: sessionsList[0], performance: performances[0] }, true, 'setMockedData');
			return;
		}
		// Should we use mocked Data or fetch api ?
		fetch('http://localhost:3000/user/12')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ user: resp.data }, false, 'setUser');
				get().getActivity();
				get().getSessions();
				get().getPerformance();
			})
			.catch((error) => console.error(error));
	},
	getActivity: async () => {
		fetch('http://localhost:3000/user/12/activity')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ activity: resp.data }, false, 'setActivity');
			});
	},
	getSessions: async () => {
		fetch('http://localhost:3000/user/12/average-sessions')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ sessionsAverage: resp.data }, false, 'setSessionsAverage');
			});
	},
	getPerformance: async () => {
		fetch('http://localhost:3000/user/12/performance')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ performance: resp.data }, false, 'setPeformance');
			});
	},
});

export const useStore = create(devtools(store));
