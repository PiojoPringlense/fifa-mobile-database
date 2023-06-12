import { useState } from "react";

export default function usePagination(
	nbOfPlayers: number
): [number, number, (page: number) => void, number, number, number, () => number[]] {
	const [currentPage, setCurrentPage] = useState(1);
	const [playersPerPage] = useState(20); // Number of players to display per page

	// Calculate index of the last player on the current page
	const indexOfLastPlayer = currentPage * playersPerPage;
	// Calculate index of the first player on the current page
	const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;

	// Change the current page
	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const totalPages = Math.ceil(nbOfPlayers / playersPerPage);

	const getPageNumbers = () => {
		const pageNumbers = [];
		// Show up to 5 page numbers, centered around the current page
		if (currentPage <= 3) {
			for (let i = 1; i <= 5 && i <= totalPages; i++) {
				pageNumbers.push(i);
			}
		} else if (currentPage >= totalPages - 2) {
			for (let i = totalPages - 4; i <= totalPages; i++) {
				if (i > 0) {
					pageNumbers.push(i);
				}
			}
		} else {
			for (let i = currentPage - 2; i <= currentPage + 2; i++) {
				pageNumbers.push(i);
			}
		}
		return pageNumbers;
	};

	return [
		currentPage,
		totalPages,
		handlePageChange,
		indexOfFirstPlayer,
		indexOfLastPlayer,
		playersPerPage,
		getPageNumbers,
	];
}
