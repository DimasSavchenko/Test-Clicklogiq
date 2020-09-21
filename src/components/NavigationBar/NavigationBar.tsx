import React from 'react';
import { NavLink } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';

import { default as NavigationModuleCss } from './Navigation.module.css';

const block = bemCssModules(NavigationModuleCss);

export const NavigationBar = () => (
	<div className={block()}>
		<nav>
			<ul className={block('list')}>
				<li className={block('item')}>
					<NavLink
						activeClassName={block('link', { active: true })}
						className={block('link')}
						to="/files"
					>
						Files
					</NavLink>
				</li>
				<li className={block('item')}>
					<NavLink
						exact
						activeClassName={block('link', { active: true })}
						className={block('link')}
						to="/"
					>
						Photos
					</NavLink>
				</li>
				<li className={block('item')}>
					<NavLink
						activeClassName={block('link', { active: true })}
						className={block('link')}
						to="/sharing"
					>
						Sharing
					</NavLink>
				</li>
				<li className={block('item')}>
					<NavLink
						activeClassName={block('link', { active: true })}
						className={block('link')}
						to="/links"
					>
						Links
					</NavLink>
				</li>
				<li className={block('item')}>
					<NavLink
						activeClassName={block('link', { active: true })}
						className={block('link')}
						to="/events"
					>
						Events
					</NavLink>
				</li>
				<li className={block('item')}>
					<NavLink
						activeClassName={block('link', { active: true })}
						className={block('link')}
						to="/get-started"
					>
						Get Started
					</NavLink>
				</li>
			</ul>
		</nav>
	</div>
);
