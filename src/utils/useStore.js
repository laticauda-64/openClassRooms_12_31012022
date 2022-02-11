import create from 'zustand';

export const useStore = create((set, get) => ({
	user: {},
	activity: {},
	sessionsAverage: {},
	performance: {},
	getUser: async () => {
		// Fetch user from id, if user returned, fetch the rest of the datas
		fetch('http://localhost:3000/user/12')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ user: resp.data });
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
				set({ activity: resp.data });
			});
	},
	getSessions: async () => {
		fetch('http://localhost:3000/user/12/average-sessions')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ sessionsAverage: resp.data });
			});
	},
	getPerformance: async () => {
		fetch('http://localhost:3000/user/12/performance')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ performance: resp.data });
			});
	},
}));
