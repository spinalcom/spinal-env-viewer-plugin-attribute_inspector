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
    <h3 v-if="context !== null"
        id="context-name">
      {{this.context.name.get()}}
    </h3>

    <md-steppers id="steppers"
                 md-vertical
                 :md-active-step.sync="activeStep">
      <md-step id="ref"
               md-label="Choose referential">
        <referential-selection :update="update"
                               :config="config" />
      </md-step>

      <md-step id="key-list"
               md-label="Create key list">
        <key-list :keys="config.keys"
                  @keyChanged="saveConfig" />
      </md-step>

      <md-step id="validation"
               md-label="validate the keys">
        <validation :update="update"
                    :context="context"
                    :config="config" />
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
import referentialSelection from "./referentialSelection.vue";
import keyList from "./keyList.vue";
import validation from "./validation.vue";

import { getDefaultConfig, loadConfig, saveConfig } from "../js/panelConfig";

export default {
  name: "dialogCreateGeographicContext",
  components: {
    referentialSelection,
    keyList,
    validation
  },
  data() {
    return {
      showDialog: true,
      update: "",
      context: null,
      config: getDefaultConfig(),
      activeStep: ""
    };
  },
  watch: {
    async context(newValue, oldValue) {
      this.update = new String("changeContext");
      await loadConfig(this.context, this.config);
    },
    config: {
      deep: true,
      handler() {
        this.saveConfig();
      }
    }
  },
  methods: {
    opened(option) {
      // Using String constructor so the updates are not strictly identical and trigger watches
      this.update = new String("opened");
      this.context = option.context;
      this.activeStep = "ref";
    },
    removed() {},
    closed() {
      this.update = new String("closed");
    },
    async saveConfig() {
      await saveConfig(this.context, this.config);
    }
  }
};
</script>

<style>
#steppers * {
  box-sizing: border-box;
}
</style>

<style scoped>
#context-name {
  text-align: center;
}
</style>
