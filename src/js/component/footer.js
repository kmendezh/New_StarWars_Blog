import React, { Component } from "react";
import "/workspace/New_StarWars_Blog/src/styles/footer.css";

export const Footer = () => (
	<footer className="footerPage row">
		<div className="col-2 flc">
			<div className="row"> Fan Art from Daniel Ocock </div>
			<div className="row"> TM © Lucasfilm Ltd. All Rights Reserved </div>
		</div>
		<div className="col-10">
			<img
				className="footerImage"
				src="https://nerdist.com/wp-content/uploads/2017/03/Boba-Fett-Fan-Art-Daniel-Ocock-Featured-03102017.jpg"
			/>
		</div>
	</footer>
);
