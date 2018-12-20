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
import {
  SpinalMountExtention
} from "spinal-env-viewer-panel-manager-service";

import extention from "./extention";

SpinalMountExtention.mount(extention);

class App extends SpinalContextApp {
  constructor() {
    super("Create Validation Context", "This button creates a validation context", {
      icon: "check",
      icon_type: "in",
      backgroundColor: "#FF0000",
      fontColor: "#FFFFFF"
    });
  }

  isShown() {
    return Promise.resolve(true);
  }

  action() {
    spinalPanelManagerService.openPanel("create_validation_context_dialog", {});
  }
}

export default App;
