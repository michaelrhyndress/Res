import React from "react";
import ReactDOM from "react-dom";
import css from "../../scss/resify/main.scss"

class Layout extends React.Component {
	render() {
		return (
			<h1>It works!</h1>
		);
	}
}

const app = document.getElementById('main');

ReactDOM.render(<Layout />, app);