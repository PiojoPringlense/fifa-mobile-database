// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { PlayerType } from "@/types/playerType";

import _players from "@/data/playersDataMini.json";
// import _players from "@/data/playersData.json";

const players = _players as Data;

interface Data extends Array<PlayerType> {}

interface ExtendedNextApiRequest extends NextApiRequest {
	query: { position: string };
}

export default async function handler(
	req: ExtendedNextApiRequest,
	res: NextApiResponse<Data | undefined>
) {
	const position = req.query.position;
	const filteredPlayers = players.filter((player) => player.Position === position);

	res.status(200).json(filteredPlayers);
}
