<!--
Copyright 2018 SpinalCom - www.spinalcom.com
This file is part of SpinalCore.
Please read all of the following terms and conditions
of the Free Software license Agreement ("Agreement")
carefully.
This Agreement is a legally binding contract between
the Licensee (as defined below) and SpinalCom that
sets forth the terms and conditions that govern your
use of the Program. By installing and/or using the
Program, you agree to abide by all the terms and
conditions stated or referenced herein.
If you do not agree to abide by these terms and
conditions, do not demonstrate your acceptance and do
not install or use the Program.
You should have received a copy of the license along
with this file. If not, see
<http://resources.spinalcom.com/licenses.pdf>.
-->

<template>
  <div>
    <md-dialog :md-active.sync="show"
               @md-closed="closeDialog">
      <md-dialog-title>Create a Validation Context</md-dialog-title>

      <md-dialog-content>
        <md-field>
          <label>Context Name</label>

          <md-input v-model="contextName"></md-input>
        </md-field>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary"
                   @click="closeDialog">
          Close
        </md-button>

        <md-button class="md-primary"
                   @click="createContext">
          Save
        </md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog-alert :md-active.sync="error"
                     md-content="Invalid name" />
  </div>
</template>

<script>
import { createValidationContext } from "spinal-env-viewer-service-validation";

export default {
  name: "create_validation_context_dialog",
  props: ["onFinised"],
  data() {
    return {
      show: true,
      contextName: "",
      error: false
    };
  },
  methods: {
    opened() {},
    removed() {
      this.show = false;
    },
    async createContext() {
      this.contextName = this.contextName.trim();

      try {
        await createValidationContext(this.contextName);
        this.closeDialog();
      } catch (e) {
        console.error(e);
        this.error = true;
      }
    },
    closeDialog() {
      this.onFinised({ inputValue: this.inputValue });
    }
  }
};
</script>
