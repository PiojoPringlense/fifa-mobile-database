// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { PlayerType } from "@/types/playerType";

import _players from "@/data/playersDataMini.json";
// import _players from "@/data/playersData.json";

const players = _players as Data;

interface Data extends Array<PlayerType> {}

interface ExtendedNextApiRequest extends NextApiRequest {
	query: { id: string };
}

export default async function handler(
	req: ExtendedNextApiRequest,
	res: NextApiResponse<PlayerType | undefined>
) {
	const id = req.query.id;
	const player = players.find((player) => player.Id === id);

	res.status(200).json(player);
}
