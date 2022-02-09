import create from 'zustand';

export const useStore = create((set) => ({
	user: {},
	activity: {},
	sessionsAverage: {},
	performance: {},
	getData: async () => {
		// Fetch user here
		fetch('http://localhost:3000/user/12')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ user: resp.data });
			});
		// Fetch activity
		fetch('http://localhost:3000/user/12/activity')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ activity: resp.data });
			});
		// Fetch sessions average data
		fetch('http://localhost:3000/user/12/average-sessions')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ sessionsAverage: resp.data });
			});
		// Fetch performance
		fetch('http://localhost:3000/user/12/performance')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp.data);
				set({ performance: resp.data });
			});
	},
}));
