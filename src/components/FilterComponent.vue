<template>
  <q-btn-dropdown
    class="q-ma-md"
    color="primary"
    :label="`${filterType} (${currentFilterSelection})`"
  >
    <q-list>
      <q-item
        v-for="(item, index) in filterItems"
        :key="`${item}-${index}`"
        clickable
        v-close-popup
        @click="filterItem(item)"
      >
        <q-item-section>
          <q-item-label>{{ $t(`filterItems.${item}`) }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'FilterComponent',
  props: {
    filterItems: {
      type: Array,
      required: true,
    },
    filterType: {
      type: String,
      required: true,
    },
    currentSelection: {
      type: String,
      required: true,
    },
  },

  emits: [
    'filterItems',
  ],

  setup(props, { emit }) {
    const currentFilterSelection = computed(() => props.currentSelection);

    function filterItem(item) {
      emit('filterItems', item);
    }

    return {
      currentFilterSelection,
      filterItem,
    };
  },
};
</script>
