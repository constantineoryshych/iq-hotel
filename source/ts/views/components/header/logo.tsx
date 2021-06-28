import React, { Component } from "react";

export default class LogoView extends Component<{}, {}> {
	public render(): JSX.Element {
		return (
			<div className="logo-wrap">
				<img src="./build/style/img/logo.svg" />
			</div>
		);
	}
}
