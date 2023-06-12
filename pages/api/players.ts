// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { PlayerType, PlayerTypeNoStats } from "@/types/playerType";

import { addPlayerStatsAverage } from "@/utilities/outils";

// import _players from "@/data/playersDataMini.json";
import _players from "@/data/playersData.json";

const players = _players as Data;

interface Data extends Array<PlayerTypeNoStats> {}
interface PlayerArrayType extends Array<PlayerType> {}

export default async function handler(req: NextApiRequest, res: NextApiResponse<PlayerArrayType>) {
	res.status(200).json(players.map(addPlayerStatsAverage));
}
