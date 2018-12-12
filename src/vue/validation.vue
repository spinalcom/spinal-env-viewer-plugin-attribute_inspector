<template>
  <div id="validation">
    <md-button class="md-raised md-primary"
               @click="loadProps">
      VERIFY ATTRIBUTES
    </md-button>

    <div v-if="showProps">
      <md-button @click="selectValid">
        {{valid.length}} VALID OBJECTS
      </md-button><br />

      <md-button @click="selectInvalid">
        {{invalid.length}} INVALID OBJECTS
      </md-button><br />
    </div>
  </div>
</template>

<script>
import hasProperties from "../js/hasProperties";

export default {
  name: "validation",
  props: {
    update: {
      type: String,
      required: true
    },
    context: {
      // Allows for null value
      validator: value => typeof value === "object"
    },
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    this.viewer = window.spinal.ForgeViewer.viewer;
    return {
      valid: [],
      invalid: [],
      showProps: false
    };
  },
  watch: {
    update() {
      if (this.update === "changeContext") {
        this.showProps = false;
      }
    }
  },
  methods: {
    async getProps() {
      const keys = this.config.keys.filter(key => key !== "");
      const res = await hasProperties(this.config.referential, keys);

      this.valid = res.valid;
      this.invalid = res.invalid;
    },
    async loadProps() {
      await this.getProps();
      this.showProps = true;
    },
    selectValid() {
      const dbIds = [];

      for (let prop of this.valid) {
        dbIds.push(prop.dbId);
      }

      this.viewer.select(dbIds);
    },
    selectInvalid() {
      this.viewer.select(this.invalid);
    }
  }
};
</script>

<style scoped>
#validation {
  text-align: center;
}
</style>
