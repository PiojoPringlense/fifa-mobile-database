export interface PlayerTypeNoStats {
	Id: string;
	Name: string;
	OVR: number;
	Position: string;
	Program: string;
	Stamina: number;
	"Price (lowest)": string;
	"Price (highest)": string;
	Club?: null;
	Nationality: string;
	Traits: string;
	Foot: string;
	"Weak Foot": string;
	Size: string;
	Weight: string;
	"Rate (ATT)": string;
	"Rate (DEF)": string;
	"Skill Boost": string;
	Acceleration: number;
	Finishing: number;
	"Long Shot": number;
	Penalties: number;
	"Short Passing": number;
	Vision: number;
	Curve: number;
	Dribbling: number;
	Agility: number;
	Balance: number;
	"Standing Tackle": number;
	Awareness: number;
	Strength: number;
	Jumping: number;
	"Sprint Speed": number;
	"Shot Power": number;
	Positioning: number;
	Volleys: number;
	"Long Passing": number;
	Crossing: number;
	"Free Kick": number;
	"Ball Control": number;
	Reactions: number;
	Marking: number;
	"Sliding Tackle": number;
	Heading: number;
	Aggression: number;
	badge: Badge;
}
export interface Badge {
	Background: string;
	Render: string;
	Badge: string;
	"Nation Flag": string;
}
export interface PlayerType {
	AverageStats: {
		Pace: number;
		Shooting: number;
		Passing: number;
		Agility: number;
		Defending: number;
		Diving: number;
		Positioning: number;
		Handling: number;
		Reflexes: number;
		Kicking: number;
		Physical: number;
		Total: number;
	};
	Id: string;
	Name: string;
	OVR: number;
	Position: string;
	Program: string;
	Stamina: number;
	"Price (lowest)": string;
	"Price (highest)": string;
	Club?: null;
	Nationality: string;
	Traits: string;
	Foot: string;
	"Weak Foot": string;
	Size: string;
	Weight: string;
	"Rate (ATT)": string;
	"Rate (DEF)": string;
	"Skill Boost": string;

	badge: Badge;
	Acceleration?: number;
	Positioning?: number;
	Finishing?: number;
	"Shot Power"?: number;
	"Long Shot"?: number;
	Volleys?: number;
	Penalties?: number;
	Vision?: number;
	Crossing?: number;
	"Free Kick"?: number;
	"Short Passing"?: number;
	Curve?: number;
	Balance?: number;
	"Ball Control"?: number;
	Dribbling?: number;
	Interceptions?: number;
	Heading?: number;
	Marking?: number;
	"Standing Tackle"?: number;
	"Stand Tackle"?: number;
	"Sliding Tackle"?: number;
	Aggression?: number;
	"GK Diving"?: number;
	"GK Positioning"?: number;
	Handling?: number;
	Reflexes?: number;
	Jumping?: number;
	"GK Kicking"?: number;
	"Long Passing"?: number;
	Reactions?: number;
	Agility?: number;
	"Sprint Speed"?: number;
	Strength?: number;
}

export interface PlayersProps {
	players: Array<PlayerType>;
}

export interface PlayerProps {
	player: PlayerType;
}

export interface PlayersType extends Array<PlayerType> {}
