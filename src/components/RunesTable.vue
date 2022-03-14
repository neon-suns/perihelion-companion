<template>
  <div class="table">
    <div
      v-for="index in 40"
      :key="index"
      class="table__item"
      :class="returnClass(index)"
    >
      <rune-item
        :runeIndex="index"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import RuneItem from 'src/components/RuneItem.vue';
import { useStore } from 'src/stores/currentSpell';

export default {
  name: 'RunesTable',
  components: {
    RuneItem,
  },

  setup() {
    const store = useStore();

    function returnClass(index) {
      const currentlySelectedRunes = computed(() => store.recipe);
      const currentItemIndex = currentlySelectedRunes.value.indexOf(index);

      if (currentItemIndex === -1) {
        return '';
      }

      return `table__item--active table__item--active-${currentItemIndex}`;
    }

    return {
      returnClass,
    };
  },
};
</script>

<style lang="scss">
$item-width: 66px !default;
$item-height: 61px !default;
$items-count-y: 5 !default;
$items-count-x: 8 !default;
$item-border-width: 2px !default;

.table {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: calc(#{$item-height} * #{$items-count-x});
  width: calc(#{$item-width} * #{$items-count-y});

  &__item {
    width: $item-width;
    height: $item-height;
    flex: 1 1 calc(#{$item-height} - (#{$item-border-width} * 2));
    border: $item-border-width solid black;

    &--active {
      z-index: 99;

      &-0 {
        border-color: greenyellow;
      }

      &-1 {
        border-color: violet;
      }

      &-2 {
        border-color: yellowgreen;
      }

      &-3 {
        border-color: coral;
      }
    }
  }
}
</style>
