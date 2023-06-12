interface TogleSwitchProps {
	setEnabled: (val: boolean) => void;
	enabled: boolean;
}

const TogleSwitch = ({ setEnabled, enabled }: TogleSwitchProps) => {
	return (
		<div className="flex items-center">
			{/* <span className="mr-1">OFF</span> */}
			<label className="inline-flex relative items-center cursor-pointer">
				<input type="checkbox" className="sr-only peer" checked={enabled} readOnly />
				<div
					onClick={() => {
						setEnabled(!enabled);
					}}
					className="w-11 h-6 bg-primary-100 rounded-full peer peer-checked:after:translate-x-full after:border-secondary-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-2 after:bg-secondary-red peer-checked:after:bg-secondary-green after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
			</label>
			{/* <span className="ml-1">ON</span> */}
		</div>
	);
};
export default TogleSwitch;
