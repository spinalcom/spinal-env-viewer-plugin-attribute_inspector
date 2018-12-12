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
    <key-compo v-for="(keyName, index) in keys"
               :key="index"
               :keyName="keyName"
               @removeKey="removeKey(index)"
               @keySet="value => keySet(index, value)" />

    <md-button @click="addKey()"
               class="md-raised button-add-key">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
import keyCompo from "./key.vue";

export default {
  name: "keyList",
  props: {
    keys: {
      type: Array,
      required: true
    }
  },
  components: {
    keyCompo
  },
  data() {
    this.constants;
    return {};
  },
  methods: {
    addKey(key) {
      this.keys.push("");
    },
    keySet(index, value) {
      this.keys[index] = value;
    },
    removeKey(index) {
      this.keys.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.button-add-key {
  width: 100%;
}
</style>
