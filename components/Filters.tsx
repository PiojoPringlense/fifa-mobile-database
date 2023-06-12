import { POSITIONS } from "@/utilities/outils";
import DropdownInput from "./DropdownInput";
import { useMemo } from "react";

interface FiltersProps {
	setPosition: (position: string) => void;
	setMinOvl: (lvl: number) => void;
	setMaxOvl: (lvl: number) => void;
	setTrainingLvl: (training: number) => void;
	setSkillsLvl: (skill: number) => void;
}

const Filters = ({
	setPosition,
	setMinOvl,
	setMaxOvl,
	setTrainingLvl,
	setSkillsLvl,
}: FiltersProps) => {
	const skills = useMemo(() => createArrayOfNumbers(0, 20), []);
	const trainings = useMemo(() => createArrayOfNumbers(0, 5), []);
	const levels = useMemo(() => createArrayOfNumbers(100, 120), []);

	return (
		<div className=" flex justify-center gap-10 my-7">
			<DropdownInput label="Position: " options={POSITIONS} onSelectOption={setPosition} />
			<DropdownInput label="Min: " options={levels} onSelectOption={setMinOvl} selected={100} />
			<DropdownInput label="Max: " options={levels} onSelectOption={setMaxOvl} selected={120} />
			<DropdownInput
				label="Training level: "
				options={trainings}
				onSelectOption={setTrainingLvl}
			/>
			<DropdownInput label="Skills level: " options={skills} onSelectOption={setSkillsLvl} />
		</div>
	);
};
export default Filters;

function createArrayOfNumbers(first: number, last: number, step: number = 1): number[] {
	const result = [] as number[];

	for (let i = first; i <= last; i += step) {
		result.push(i);
	}

	return result;
}
