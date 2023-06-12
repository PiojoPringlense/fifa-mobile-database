export const STATS_SHORT_NAMES = {
	Crossing: "CRO",
	Awareness: "AWR",
	"Short Passing": "SPA",
	"Sprint Speed": "SPD",
	Marking: "MRK",
	Strength: "STR",
	"Long Shot": "LSA",
	"Shot Power": "SHO",
	Acceleration: "ACC",
	Aggression: "AGG",
	"GK Diving": "GKD",
	"GK Kicking": "GKK",
	"Ball Control": "BAC",
	Heading: "HEA",
	Finishing: "FIN",
	"GK Positioning": "GKP",
	Reactions: "REA",
	Reflexes: "REF",
	Handling: "HAN",
	Positioning: "POS",
	Dribbling: "DRI",
	"Long Passing": "LPA",
	"Free Kick": "FRK",
	Penalties: "PEN",
	Vision: "VIS",
	Curve: "CUR",
	Agility: "AGI",
	Balance: "BAL",
	"Standing Tackle": "STT",
	Jumping: "JMP",
	Volleys: "VOL",
	"Sliding Tackle": "SLT",
};

export const STATS_NAMES = {
	CRO: "Crossing",
	AWR: "Awareness",
	SPA: "Short Passing",
	SPD: "Sprint Speed",
	MRK: "Marking",
	STR: "Strength",
	LSA: "Long Shot",
	SHO: "Shot Power",
	ACC: "Acceleration",
	AGG: "Aggression",
	GKD: "GK Diving",
	GKK: "GK Kicking",
	BAC: "Ball Control",
	HEA: "Heading",
	FIN: "Finishing",
	GKP: "GK Positioning",
	REA: "Reactions",
	REF: "Reflexes",
	HAN: "Handling",
	POS: "Positioning",
	DRI: "Dribbling",
	LPA: "Long Passing",
	FRK: "Free Kick",
	PEN: "Penalties",
	VIS: "Vision",
	CUR: "Curve",
	AGI: "Agility",
	BAL: "Balance",
	STT: "Standing Tackle",
	JMP: "Jumping",
	VOL: "Volleys",
	SLT: "Sliding Tackle",
};

export const DETAILED_STATS = {
	regular: [
		"Acceleration",
		"Sprint Speed",
		"Positioning",
		"Finishing",
		"Shot Power",
		"Long Shot",
		"Volleys",
		"Penalties",
		"Vision",
		"Crossing",
		"Free Kick",
		"Short Passing",
		"Long Passing",
		"Curve",
		"Agility",
		"Balance",
		"Reactions",
		"Ball Control",
		"Dribbling",
		"Interceptions",
		"Heading",
		"Marking",
		"Stand Tackle",
		"Sliding Tackle",
		"Jumping",
		"Strength",
		"Aggression",
	],
	GK: [
		"GK Diving",
		"GK Positioning",
		"Handling",
		"Reflexes",
		"Jumping",
		"GK Kicking",
		"Long Passing",
		"Reactions",
		"Agility",
		"Sprint Speed",
		"Strength",
	],
};

export const STATS_HEADERS = {
	regular: {
		Pace: ["ACC", "SPD"],
		Shooting: ["POS", "FIN", "SHO", "LSA", "VOL", "PEN"],
		Passing: ["VIS", "CRO", "FRK", "SPA", "LPA", "CUR"],
		Agility: ["AGI", "BAL", "REA", "BAC", "DRI"],
		Defending: ["AWR", "HEA", "MRK", "STT", "SLT"],
		Physical: ["JMP", "STR", "AGG"],
	},
	GK: {
		Diving: ["GKD"],
		Positioning: ["GKP"],
		Handling: ["HAN"],
		Reflexes: ["REF", "JMP"],
		Kicking: ["GKK", "LPA"],
		Physical: ["REA", "AGI", "SPD", "STR"],
	},
};

export const DETAILED_STATS_HEADERS = {
	regular: {
		Pace: ["Acceleration", "Sprint Speed"],
		Shooting: ["Positioning", "Finishing", "Shot Power", "Long Shot", "Volleys", "Penalties"],
		Passing: ["Vision", "Crossing", "Free Kick", "Short Passing", "Long Passing", "Curve"],
		Agility: ["Agility", "Balance", "Reactions", "Ball Control", "Dribbling"],
		Defending: ["Awareness", "Heading", "Marking", "Standing Tackle", "Sliding Tackle"],
		Physical: ["Jumping", "Strength", "Aggression"],
	},
	GK: {
		Diving: ["GK Diving"],
		Positioning: ["GK Positioning"],
		Handling: ["Handling"],
		Reflexes: ["Reflexes", "Jumping"],
		Kicking: ["GK Kicking", "Long Passing"],
		Physical: ["Reactions", "Agility", "Sprint Speed", "Strength"],
	},
};

export const AVG_STATS_NAME = {
	avg1: "Pace",
	avg2: "Shooting",
	avg3: "Passing",
	avg4: "Agility",
	avg5: "Defending",
	avg6: "Physical",
};

export const AVG_STATS_NAME_GK = {
	avg1: "Diving",
	avg2: "Positioning",
	avg3: "Handling",
	avg4: "Reflexes",
	avg5: "Kicking",
	avg6: "Physical",
};

export const STATS_GROUPS = {
	Pace: ["ACC", "SPD"],
	Shooting: ["POS", "FIN", "SHO", "LSA", "VOL", "PEN"],
	Passing: ["VIS", "CRO", "FRK", "SPA", "LPA", "CUR"],
	Agility: ["AGI", "BAL", "REA", "BAC", "DRI"],
	Defending: ["AWR", "HEA", "MRK", "STT", "SLT"],
	Physical: ["JMP", "STR", "AGG"],
	Diving: ["GKD"],
	Positioning: ["GKP"],
	Handling: ["HAN"],
	Reflexes: ["REF", "JMP"],
	Kicking: ["GKK", "LPA"],
};

export const STATS_GROUPS_GK = {
	Pace: ["ACC", "SPD"],
	Shooting: ["POS", "FIN", "SHO", "LSA", "VOL", "PEN"],
	Passing: ["VIS", "CRO", "FRK", "SPA", "LPA", "CUR"],
	Agility: ["AGI", "BAL", "REA", "BAC", "DRI"],
	Defending: ["AWR", "HEA", "MRK", "STT", "SLT"],
	Physical: ["REA", "AGI", "SPD", "STR"],
	Diving: ["GKD"],
	Positioning: ["GKP"],
	Handling: ["HAN"],
	Reflexes: ["REF", "JMP"],
	Kicking: ["GKK", "LPA"],
};

export const SKILLS_STATS_COEF = {
	Agility: {
		Agility: "Main",
		Acceleration: "Main",
		Curve: "Second",
		Finishing: "Third",
		Reactions: "Third",
	},

	Balanced: {
		Dribbling: "Main",
		"Sprint Speed": "Main",
		Balance: "Second",
		"Stand Tackle": "Third",
		Crossing: "Third",
	},

	Ballcontrol: {
		"Ball Control": "Main",
		Acceleration: "Main",
		"Long Passing": "Second",
		Vision: "Third",
		"Long Shots": "Third",
	},

	Counter: {
		"Long Passing": "Main",
		Agility: "Main",
		"Sprint Speed": "Second",
		Curve: "Third",
		Finishing: "Third",
	},

	Defending: {
		"Stand Tackle": "Main",
		Marking: "Main",
		Awareness: "Second",
		"Long Passing": "Third",
		"Sprint Speed": "Third",
	},

	Dribbling: {
		Dribbling: "Main",
		Crossing: "Main",
		"Sprint Speed": "Second",
		"Long Shots": "Third",
		Agility: "Third",
	},

	Finishing: {
		Finishing: "Main",
		Dribbling: "Main",
		"Shot Power": "Second",
		Acceleration: "Third",
		Balance: "Third",
	},

	Handling: {
		Handling: "Main",
		Reflexes: "Main",
		"GK Positioning": "Second",
		Reactions: "Third",
		Balance: "Third",
	},

	Holding: {
		Aggression: "Main",
		Marking: "Main",
		"Stand Tackle": "Second",
		Acceleration: "Third",
		"Short Passing": "Third",
	},

	Interceptions: {
		Awareness: "Main",
		Balance: "Main",
		Reactions: "Second",
		Acceleration: "Third",
		"Long Passing": "Third",
	},

	Longpassing: {
		"Long Passing": "Main",
		"Ball Control": "Main",
		Vision: "Second",
		"Sprint Speed": "Third",
		"Short Passing": "Third",
	},

	Longshots: {
		"Long Shots": "Main",
		"Ball Control": "Main",
		Acceleration: "Second",
		"Short Passing": "Third",
		"Long Passing": "Third",
	},

	Marking: {
		Marking: "Main",
		Strength: "Main",
		Awareness: "Second",
		Aggression: "Third",
		"Sprint Speed": "Third",
	},

	Number1: {
		"Long Passing": "Main",
		Reflexes: "Main",
		Reactions: "Second",
		Diving: "Third",
		Kicking: "Third",
	},

	Pace: {
		"Sprint Speed": "Main",
		Acceleration: "Main",
		Agility: "Second",
		"Short Passing": "Third",
		Awareness: "Third",
	},

	Reactions: {
		Acceleration: "Main",
		Vision: "Main",
		Reactions: "Second",
		Crossing: "Third",
		"Sliding Tackle": "Third",
	},

	Reflexes: {
		Reflexes: "Main",
		Agility: "Main",
		Diving: "Second",
		"GK Positioning": "Third",
		Handling: "Third",
	},

	Secondstriker: {
		Agility: "Main",
		Finishing: "Main",
		"Shot Power": "Second",
		"Sprint Speed": "Third",
		Positioning: "Third",
	},

	Shooting: {
		"Shot Power": "Main",
		"Ball Control": "Main",
		Finishing: "Second",
		"Sprint Speed": "Third",
		Strength: "Third",
	},

	Shortpassing: {
		"Short Passing": "Main",
		Dribbling: "Main",
		Acceleration: "Second",
		Finishing: "Third",
		Vision: "Third",
	},

	Speed: {
		"Sprint Speed": "Main",
		Dribbling: "Main",
		Crossing: "Second",
		Curve: "Third",
		Finishing: "Third",
	},

	Strength: {
		Strength: "Main",
		Marking: "Main",
		Reactions: "Second",
		Heading: "Third",
		Jumping: "Third",
	},

	Tackling: {
		"Stand Tackle": "Main",
		Marking: "Main",
		Reactions: "Second",
		"Slide Tackle": "Third",
		Acceleration: "Third",
	},

	Targetman: {
		Heading: "Main",
		"Shot Power": "Main",
		Finishing: "Second",
		Acceleration: "Third",
		Positioning: "Third",
	},

	Vision: {
		Vision: "Main",
		Reactions: "Main",
		"Short Passing": "Second",
		"Sprint Speed": "Third",
		"Long Shots": "Third",
	},
};

export const SKILLS_LVL_COEF = [
	{ Main: 0, Second: 0, Third: 0 },
	{ Main: 1, Second: 1, Third: 1 },
	{ Main: 3, Second: 2, Third: 1 },
	{ Main: 4, Second: 3, Third: 2 },
	{ Main: 6, Second: 4, Third: 2 },
	{ Main: 7, Second: 5, Third: 3 },
	{ Main: 9, Second: 6, Third: 3 },
	{ Main: 10, Second: 7, Third: 4 },
	{ Main: 12, Second: 8, Third: 4 },
	{ Main: 13, Second: 9, Third: 5 },
	{ Main: 15, Second: 10, Third: 5 },
	{ Main: 16, Second: 11, Third: 6 },
	{ Main: 17, Second: 12, Third: 7 },
	{ Main: 18, Second: 13, Third: 8 },
	{ Main: 19, Second: 14, Third: 9 },
	{ Main: 20, Second: 15, Third: 10 },
	{ Main: 21, Second: 16, Third: 11 },
	{ Main: 22, Second: 17, Third: 12 },
	{ Main: 23, Second: 18, Third: 13 },
	{ Main: 24, Second: 19, Third: 14 },
	{ Main: 25, Second: 20, Third: 15 },
];

export const TRAINING_LVL_POSITION = {
	GK: {
		Acceleration: 2,
		Aggression: 3,
		Agility: 3,

		Balance: 3,
		"Ball Control": 2,

		Curve: 1,

		"GK Diving": 4,
		"GK Kicking": 3,
		"GK Positioning": 4,
		Handling: 4,

		Jumping: 4,
		"Long Passing": 3,

		Reactions: 4,
		Reflexes: 4,
		"Short Passing": 2,

		"Sliding Tackle": 1,
		"Sprint Speed": 1,

		Strength: 3,
	},
	CB: {
		Acceleration: 2,
		Aggression: 3,
		Agility: 1,
		Awareness: 4,
		Balance: 3,
		"Ball Control": 2,

		Dribbling: 1,

		Heading: 4,
		Jumping: 3,
		"Long Passing": 3,

		Marking: 4,

		Positioning: 1,
		Reactions: 4,

		"Short Passing": 2,
		"Shot Power": 2,
		"Sliding Tackle": 3,
		"Sprint Speed": 3,
		"Standing Tackle": 4,
		Strength: 4,
		Vision: 1,
	},
	RB: {
		Acceleration: 4,
		Aggression: 2,
		Agility: 3,
		Awareness: 3,
		Balance: 2,
		"Ball Control": 3,
		Crossing: 4,
		Curve: 2,
		Dribbling: 4,

		Jumping: 1,
		"Long Passing": 3,
		"Long Shot": 1,
		Marking: 3,

		Reactions: 4,

		"Short Passing": 1,

		"Sliding Tackle": 3,
		"Sprint Speed": 4,
		"Standing Tackle": 4,
		Strength: 1,
		Vision: 2,
	},
	LB: {
		Acceleration: 4,
		Aggression: 2,
		Agility: 3,
		Awareness: 3,
		Balance: 2,
		"Ball Control": 3,
		Crossing: 4,
		Curve: 2,
		Dribbling: 4,

		Jumping: 1,
		"Long Passing": 3,
		"Long Shot": 1,
		Marking: 3,

		Reactions: 4,

		"Short Passing": 1,

		"Sliding Tackle": 3,
		"Sprint Speed": 4,
		"Standing Tackle": 4,
		Strength: 1,
		Vision: 2,
	},
	RWB: {
		Acceleration: 4,
		Aggression: 2,
		Agility: 3,
		Awareness: 3,
		Balance: 3,
		"Ball Control": 4,
		Crossing: 4,
		Curve: 3,
		Dribbling: 4,

		"Long Passing": 3,
		"Long Shot": 1,
		Marking: 1,

		Reactions: 4,

		"Short Passing": 2,
		"Shot Power": 1,
		"Sliding Tackle": 2,
		"Sprint Speed": 4,
		"Standing Tackle": 2,
		Strength: 1,
		Vision: 3,
	},
	LWB: {
		Acceleration: 4,
		Aggression: 2,
		Agility: 3,
		Awareness: 3,
		Balance: 3,
		"Ball Control": 4,
		Crossing: 4,
		Curve: 3,
		Dribbling: 4,

		"Long Passing": 3,
		"Long Shot": 1,
		Marking: 1,

		Reactions: 4,

		"Short Passing": 2,
		"Shot Power": 1,
		"Sliding Tackle": 2,
		"Sprint Speed": 4,
		"Standing Tackle": 2,
		Strength: 1,
		Vision: 3,
	},
	CDM: {
		Acceleration: 3,
		Aggression: 3,
		Agility: 1,
		Awareness: 4,
		Balance: 3,
		"Ball Control": 3,

		Curve: 1,
		Dribbling: 2,
		Finishing: 1,

		"Long Passing": 4,
		"Long Shot": 1,
		Marking: 4,

		Reactions: 4,

		"Short Passing": 4,
		"Shot Power": 2,
		"Sliding Tackle": 3,
		"Sprint Speed": 2,
		"Standing Tackle": 4,
		Strength: 2,
		Vision: 3,
	},
	CM: {
		Acceleration: 3,

		Agility: 2,
		Awareness: 4,
		Balance: 2,
		"Ball Control": 4,
		Crossing: 2,
		Curve: 3,
		Dribbling: 3,
		Finishing: 1,

		"Long Passing": 4,
		"Long Shot": 4,
		Marking: 1,

		Reactions: 3,

		"Short Passing": 4,
		"Shot Power": 3,
		"Sliding Tackle": 1,
		"Sprint Speed": 2,
		"Standing Tackle": 3,
		Strength: 1,
		Vision: 4,
	},
	RM: {
		Acceleration: 4,

		Agility: 4,
		Awareness: 1,
		Balance: 2,
		"Ball Control": 4,
		Crossing: 3,
		Curve: 3,
		Dribbling: 4,
		Finishing: 2,

		"Long Passing": 3,
		"Long Shot": 4,

		Positioning: 1,
		Reactions: 3,

		"Short Passing": 2,
		"Shot Power": 3,
		"Sliding Tackle": 1,
		"Sprint Speed": 4,
		"Standing Tackle": 2,
		Strength: 1,
		Vision: 3,
	},
	LM: {
		Acceleration: 4,

		Agility: 4,
		Awareness: 1,
		Balance: 2,
		"Ball Control": 4,
		Crossing: 3,
		Curve: 3,
		Dribbling: 4,
		Finishing: 2,

		"Long Passing": 3,
		"Long Shot": 4,

		Positioning: 1,
		Reactions: 3,

		"Short Passing": 2,
		"Shot Power": 3,
		"Sliding Tackle": 1,
		"Sprint Speed": 4,
		"Standing Tackle": 2,
		Strength: 1,
		Vision: 3,
	},
	CAM: {
		Acceleration: 3,

		Agility: 3,
		Awareness: 1,
		Balance: 2,
		"Ball Control": 4,
		Crossing: 1,
		Curve: 2,
		Dribbling: 4,
		Finishing: 4,

		"Long Passing": 3,
		"Long Shot": 4,

		Positioning: 3,
		Reactions: 3,

		"Short Passing": 4,
		"Shot Power": 4,

		"Sprint Speed": 2,
		"Standing Tackle": 1,
		Strength: 1,
		Vision: 3,
		Volleys: 2,
	},
	CF: {
		Acceleration: 3,
		Aggression: 1,
		Agility: 4,

		Balance: 2,
		"Ball Control": 4,

		Curve: 1,
		Dribbling: 4,
		Finishing: 4,

		Heading: 2,
		Jumping: 1,
		"Long Passing": 2,
		"Long Shot": 3,

		Positioning: 4,
		Reactions: 3,

		"Short Passing": 3,
		"Shot Power": 4,

		"Sprint Speed": 3,

		Strength: 1,
		Vision: 2,
		Volleys: 3,
	},
	ST: {
		Acceleration: 3,
		Aggression: 1,
		Agility: 4,

		Balance: 2,
		"Ball Control": 4,

		Curve: 1,
		Dribbling: 4,
		Finishing: 4,

		Heading: 3,
		Jumping: 2,
		"Long Passing": 1,
		"Long Shot": 2,

		Positioning: 4,
		Reactions: 2,

		"Short Passing": 2,
		"Shot Power": 4,

		"Sprint Speed": 3,

		Strength: 3,
		Vision: 1,
		Volleys: 3,
	},
	RW: {
		Acceleration: 4,

		Agility: 4,

		Balance: 2,
		"Ball Control": 4,
		Crossing: 3,
		Curve: 2,
		Dribbling: 4,
		Finishing: 4,

		Heading: 1,
		Jumping: 1,
		"Long Passing": 3,
		"Long Shot": 3,

		Positioning: 2,
		Reactions: 3,

		"Short Passing": 2,
		"Shot Power": 3,

		"Sprint Speed": 4,

		Strength: 1,
		Vision: 3,
		Volleys: 1,
	},
	LW: {
		Acceleration: 4,

		Agility: 4,

		Balance: 2,
		"Ball Control": 4,
		Crossing: 3,
		Curve: 2,
		Dribbling: 4,
		Finishing: 4,

		Heading: 1,
		Jumping: 1,
		"Long Passing": 3,
		"Long Shot": 3,

		Positioning: 2,
		Reactions: 3,

		"Short Passing": 2,
		"Shot Power": 3,

		"Sprint Speed": 4,

		Strength: 1,
		Vision: 3,
		Volleys: 1,
	},
};

export const TRAINING_COEF_LVL = [
	[0, 0, 0, 0, 0, 0],
	[0, 1, 2, 3, 5, 7],
	[0, 2, 4, 6, 10, 14],
	[0, 3, 6, 9, 15, 21],
	[0, 4, 8, 12, 20, 28],
];

export const PROGRAMS = [
	"Icons",
	"UCL",
	"UCL 23",
	"Lantern 2023",
	"UEL 23",
	"UECL 23",
	"TOTW",
	"Heroes Journey",
	"TOTY 2023",
	"World Cup",
	"National Heroes",
	"Lunar New Year",
	"Star Pass",
	"League Tour",
	"UEL",
	"EOE",
	"Scream Team",
	"Rivalries: Kickoff",
	"Neon Nights",
	"SV: Europe",
	"TOTS",
];

export const POSITIONS = [
	"GK",
	"RB",
	"CB",
	"LB",
	"RWB",
	"CDM",
	"LWB",
	"RM",
	"CM",
	"LM",
	"CAM",
	"RW",
	"CF",
	"LW",
	"ST",
];

export function addPlayerStatsAverage(player) {
	const statsGroups = player.Position === "GK" ? STATS_GROUPS_GK : STATS_GROUPS;
	const totalStats = {};
	const countStats = {};
	const averageStats = {};

	Object.keys(statsGroups).forEach((group) => {
		statsGroups[group].forEach((stat) => {
			const value = player[STATS_NAMES[stat]];
			if (value) {
				totalStats[group] = (totalStats[group] || 0) + value;
				countStats[group] = (countStats[group] || 0) + 1;
			}
		});
	});

	Object.keys(totalStats).forEach((group) => {
		averageStats[group] = Math.round(totalStats[group] / countStats[group]);
	});

	let total = 0;

	const statsNames = Object.keys(STATS_SHORT_NAMES);

	statsNames.forEach((statName) => {
		total += player[statName] || 0;
	});

	averageStats.Total = total;

	return {
		...player,
		AverageStats: averageStats,
	};
}

export function sortPlayersOnStat(players, stat, sortDown) {
	const sortedPlayers = structuredClone(players);
	if (Object.keys(STATS_GROUPS).includes(stat) || stat === "Total") {
		sortDown
			? sortedPlayers.sort((a, b) => b.AverageStats[stat] - a.AverageStats[stat])
			: sortedPlayers.sort((a, b) => a.AverageStats[stat] - b.AverageStats[stat]);
	}
	return sortedPlayers;
}

export function sortPlayersOnDetailedStat(players, stat, sortDown) {
	const sortedPlayers = structuredClone(players);
	if (stat === "Total") {
		sortDown
			? sortedPlayers.sort((a, b) => b.AverageStats[stat] - a.AverageStats[stat])
			: sortedPlayers.sort((a, b) => a.AverageStats[stat] - b.AverageStats[stat]);
	} else {
		sortDown
			? sortedPlayers.sort((a, b) => b[stat] - a[stat])
			: sortedPlayers.sort((a, b) => a[stat] - b[stat]);
	}
	return sortedPlayers;
}

export function updatePlayersSkillsLvl(players, skillLvl) {
	const updatedPlayers = structuredClone(players);

	updatedPlayers.forEach((player) => {
		const skill = player["Skill Boost"];
		const statsToUpdate = SKILLS_STATS_COEF[skill];

		Object.keys(statsToUpdate).forEach((stat) => {
			const coefLvl = statsToUpdate[stat];
			const valueToAdd = SKILLS_LVL_COEF[skillLvl][coefLvl];
			player[stat] += valueToAdd;
		});
	});
	return updatedPlayers.map(addPlayerStatsAverage);
}

export function updatePlayersTrainingLvl(players, trainingLvl) {
	const updatedPlayers = structuredClone(players);

	updatedPlayers.forEach((player) => {
		const trainingCoefs = TRAINING_LVL_POSITION[player.Position];

		Object.keys(trainingCoefs).forEach((stat) => {
			const trainingCoef = trainingCoefs[stat];
			const valueToAdd = TRAINING_COEF_LVL[trainingCoef][trainingLvl];
			player[stat] += valueToAdd;
		});
	});
	return updatedPlayers.map(addPlayerStatsAverage);
}
