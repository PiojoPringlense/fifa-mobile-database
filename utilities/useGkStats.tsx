import { useEffect, useState } from "react";
import { AVG_STATS_NAME, AVG_STATS_NAME_GK } from "./outils";

export default function useGkStats(): [boolean, string[], (val: boolean) => void] {
	const [gkStats, setGkStats] = useState(false);
	const [statsNames, setStatsNames] = useState(Object.values(AVG_STATS_NAME));

	useEffect(() => {
		gkStats
			? setStatsNames(Object.values(AVG_STATS_NAME_GK))
			: setStatsNames(Object.values(AVG_STATS_NAME));
	}, [gkStats]);

	return [gkStats, statsNames, setGkStats];
}
