/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as azdata from 'azdata';
import { Dashboard } from '../../components/dashboard';
import { ControllerModel } from '../../../models/controllerModel';
import { ControllerDashboardOverviewPage } from './controllerDashboardOverviewPage';
import * as loc from '../../../localizedConstants';

export class ControllerDashboard extends Dashboard {

	constructor(private _controllerModel: ControllerModel) {
		super(loc.arcControllerDashboard);
	}

	protected async registerTabs(modelView: azdata.ModelView): Promise<(azdata.DashboardTab | azdata.DashboardTabGroup)[]> {
		const overviewPage = new ControllerDashboardOverviewPage(modelView, this._controllerModel);
		return [
			overviewPage.tab
		];
	}

}
