<template>
  <button @click="load">
    <slot/>
  </button>
</template>

<script>
import { makeFactory, makeGuard } from '../utils/sfc-factory';

// Because in JavaScript objects are passed by reference, we can reuse this
// options object for creating new components with the factory function.
// And because we also use this options object as the default export, the Vue
// Loader extends it with a render function which is generated out of the
// markup in the <template> section.
const options = {};

export const loadEntitiesFactory = makeFactory(options, ({ loadEntities }) => ({
  name: `LoadEntities`,
  methods: {
    async load() {
      const entities = await loadEntities();
      this.$emit(`new-entities`, entities);
    },
  },
}));

// It is important to export the (guarded) options
// object as the default export of the component.
export default makeGuard(options);
</script>
