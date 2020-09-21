import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Route } from 'react-router-dom';

import PhotosPage from '../PhotosPage/PhotosPage';
import { FilesPage } from '../FilesPage/FilesPage';
import { SharingPage } from '../SharingPage/SharingPage';
import { LinksPage } from '../LinksPage/LinksPage';
import { EventsPage } from '../EventsPage/EventsPage';
import { GetStartedPage } from '../GetStartedPage/GetStartedPage';

export const Routes: React.FC = observer(() => (
	<Switch>
		<Route exact={true} path="/" component={PhotosPage} />
		<Route path="/files" component={FilesPage} />
		<Route path="/sharing" component={SharingPage} />
		<Route path="/links" component={LinksPage} />
		<Route path="/events" component={EventsPage} />
		<Route path="/get-started" component={GetStartedPage} />
	</Switch>
));
