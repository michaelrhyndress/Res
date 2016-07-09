import React from "react";

export default class SidebarFooter extends React.Component {
	render() {
		return (
			<div class="resify__sidebar__footer">
	            <div class="wrapper">
	                <div class="left">
						<span class="copyright">Copyright © Résify 2014-{new Date().getFullYear()}</span>
	                </div>
	                <div class="center">
	                    <ul class="list-inline social-buttons">
	                        <li><a href="#"><i class="fa fa-twitter"></i></a>
	                        </li>
	                        <li><a href="#"><i class="fa fa-facebook"></i></a>
	                        </li>
	                        <li><a href="#"><i class="fa fa-linkedin"></i></a>
	                        </li>
	                    </ul>
	                </div>
					<div class="right"><a href="#">Privacy &amp; Terms</a></div>
				</div>
			</div>
		);
	}
}