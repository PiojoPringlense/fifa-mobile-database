import { ChangeEvent, useState } from "react";

interface DropdownInputProps<T> {
	options: T[];
	onSelectOption: (selectedOption: T) => void;
	label: string;
	selected?: T;
}

const DropdownInput = <T extends string | number>({
	options,
	onSelectOption,
	label,
	selected,
}: DropdownInputProps<T>) => {
	const [selectedOption, setSelectedOption] = useState<string | number>(() => {
		if (selected) return selected;
		return typeof options[0] === "number" ? 0 : "";
	});

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value as T;
		setSelectedOption(selectedValue);
		onSelectOption(selectedValue);
	};

	return (
		<label className="flex gap-2 items-center font-bold">
			{label}
			<select
				className="block py-1 px-4 bg-primary-100 text-secondary-white rounded-md focus:outline-none focus:border-secondary-white"
				value={selectedOption}
				onChange={handleSelectChange}>
				{typeof options[0] === "string" && <option value="">--Select an option--</option>}
				{options.map((option) => (
					<option key={option} value={option} className="py-4 px-4">
						{option}
					</option>
				))}
			</select>
		</label>
	);
};

export default DropdownInput;
