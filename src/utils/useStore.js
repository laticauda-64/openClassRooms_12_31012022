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
		// If we are in offline mode, search user in Mocked Data
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
		// If not, so fetch the api
		fetch(`http://localhost:3000/user/${userId}`)
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ user: resp.data }, false, 'setUser (Api)');
				get().getActivity(userId);
				get().getSessions(userId);
				get().getPerformance(userId);
			})
			.catch((error) => console.error(error));
	},
	getActivity: async (userId) => {
		fetch(`http://localhost:3000/user/${userId}/activity`)
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ activity: resp.data }, false, 'setActivity (Api)');
			});
	},
	getSessions: async (userId) => {
		fetch(`http://localhost:3000/user/${userId}/average-sessions`)
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ sessionsAverage: resp.data }, false, 'setSessionsAverage  (Api)');
			});
	},
	getPerformance: async (userId) => {
		fetch(`http://localhost:3000/user/${userId}/performance`)
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ performance: resp.data }, false, 'setPeformance  (Api)');
			});
	},
});

export const useStore = create(devtools(store));
