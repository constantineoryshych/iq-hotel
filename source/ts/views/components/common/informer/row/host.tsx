import * as React from "react";
import { IHost } from "~/c/data";

interface IProps {
	value: IHost;
}

export class HostRow extends React.Component<IProps> {
	public render(): JSX.Element | null {
		const {descUa, descEn, nameUA, nameEN, postUA, postEN } = this.props.value;
		return (
			<div className="row">
				<div>
					<h1>{nameUA}</h1>
					<h2>{nameEN}</h2>
				</div>
				<div>
					<h3>{postUA}</h3>
					<h4>{postEN}</h4>
				</div>
				<div>
					<h2><span>{descEn ? descEn : null}</span></h2>
				</div>
			</div>
		);
	}
	
}


