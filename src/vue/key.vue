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
  <div id="div-key">
    <md-field id="param-field">
      <label>Key</label>

      <md-input v-model="key" />
    </md-field>

    <md-button class="md-icon-button"
               @click="$emit('removeKey')">
      <md-icon>remove</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: "key",
  props: {
    keyName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      key: this.keyName
    };
  },
  watch: {
    key() {
      this.$emit("keySet", this.key);
    }
  }
};
</script>

<style scoped>
#div-key {
  display: flex;
}

#key-field,
#param-field {
  margin-right: 20px;
}
</style>
