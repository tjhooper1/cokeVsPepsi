import { createContext, useContext, useReducer } from 'react';

export type Action = 'pepsi' | 'coke';

export type VoteContextType = {
	pepsiVotes: number;
	cokeVotes: number;
	totalVotes: number;
};

const voteContextInitialState: VoteContextType = {
	pepsiVotes: 1,
	cokeVotes: 7,
	totalVotes: 8,
};
export type State = typeof voteContextInitialState;
export type Dispatch = (action: Action) => void;
const VoteContext = createContext<
	{ state: State; dispatch: Dispatch } | undefined
>(undefined);

function voteReducer(state: State, action: Action) {
	switch (action) {
		case 'pepsi':
			return {
				...state,
				pepsiVotes: state.pepsiVotes + 1,
				totalVotes: state.totalVotes + 1,
			};
		case 'coke':
			return {
				...state,
				cokeVotes: state.cokeVotes + 1,
				totalVotes: state.totalVotes + 1,
			};
		default:
			throw new Error();
	}
}

export function VoteProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(voteReducer, voteContextInitialState);

	return (
		<VoteContext.Provider value={{ state, dispatch }}>
			{children}
		</VoteContext.Provider>
	);
}

export function useVotes() {
	const context = useContext(VoteContext);
	if (context === undefined) {
		throw new Error('useVotes must be used within a VoteProvider');
	}
	return context;
}
