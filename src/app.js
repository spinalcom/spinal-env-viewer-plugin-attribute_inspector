/*
 * Copyright 2018 SpinalCom - www.spinalcom.com
 * 
 * This file is part of SpinalCore.
 * 
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 * 
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 * 
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

import {
  SpinalContextApp
} from "spinal-env-viewer-context-menu-service";
import {
  spinalPanelManagerService
} from "spinal-env-viewer-panel-manager-service";
import validationService from "spinal-env-viewer-service-validation";

class App extends SpinalContextApp {
  constructor() {
    super("Validate attributes", "Validates attributes", {
      icon: "check",
      icon_type: "in",
      backgroundColor: "rgba(0, 0, 0, 0)",
      fontColor: "#FFFFFF"
    });
  }

  isShown(option) {
    const context = option.selectedNode;

    if (
      context.type.get() === validationService.constants.CONTEXT_TYPE
    ) {
      return Promise.resolve(true);
    }

    return Promise.resolve(-1);
  }

  action(option) {
    spinalPanelManagerService.openPanel("attribute_validator", option);
  }
}

export default App;
