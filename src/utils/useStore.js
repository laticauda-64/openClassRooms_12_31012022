import create from 'zustand';
import { devtools } from 'zustand/middleware';
import config from '../config/config';
import { users, activities, sessionsList, performances } from '../assets/data/mock';

const store = (set, get) => ({
	user: false,
	activity: {},
	sessionsAverage: {},
	performance: {},
	getUser: async (userId) => {
		if (config.mockedData) {
			const userIndex = users.findIndex((user) => user.id === userId);
			if (userIndex >= 0) {
				set(
					{
						user: users[userIndex],
						activity: activities[userIndex],
						sessionsAverage: sessionsList[userIndex],
						performance: performances[userIndex],
					},
					true,
					'setMockedData'
				);
				return;
			}
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
