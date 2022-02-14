import create from 'zustand';
import { devtools } from 'zustand/middleware';
import config from '../config/config';
import { users, activities, sessionsList, performances } from '../assets/data/mock';

/**
 * @constant {boolean}
 */
const { mockedData } = config;

/**
 *	This state manager is called 'Zustand', it shares the 'Redux' philosophy
 *	but it's a little more straightforward i think. Less verbose syntax.
 *	I'm also using a middleware for this store called 'devtools', this allows me to use
 *  the ReduxDevtools extension to debug my app. And this is realllly convenient.
 */
const store = (set, get) => ({
	/* Here we find the initial app states */
	user: false,
	activity: {},
	sessionsAverage: {},
	performance: {},
	/**
	 * This first method sets the user infos
	 */
	getUser: async (userId) => {
		// If we are in offline mode, search user in Mocked Data
		if (mockedData) {
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
	/**
	 * Sets the activity here
	 */
	getActivity: async (userId) => {
		fetch(`http://localhost:3000/user/${userId}/activity`)
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ activity: resp.data }, false, 'setActivity (Api)');
			});
	},
	/**
	 * Sets the sessions here
	 */
	getSessions: async (userId) => {
		fetch(`http://localhost:3000/user/${userId}/average-sessions`)
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ sessionsAverage: resp.data }, false, 'setSessionsAverage  (Api)');
			});
	},
	/**
	 * Sets the perfomance infos here
	 */
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
