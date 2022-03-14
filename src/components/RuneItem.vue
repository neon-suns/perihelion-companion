<template>
  <div>
    <img
      :src="runeImgPath"
      :alt="`rune-${runeIndex}`"
    >
    <q-tooltip>
      {{ $t(`runesNames.${runeIndex}`) }}
    </q-tooltip>
  </div>
</template>

<script>
import { computed, toRefs } from 'vue';

export default {
  name: 'RuneItem',
  props: {
    runeIndex: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const { runeIndex } = toRefs(props);

    const runeImgPath = computed(() => {
      const convertedIndex = runeIndex.value <= 9 ? `0${runeIndex.value}` : runeIndex.value;

      return `src/assets/runes/${convertedIndex}.png`;
    });

    return {
      runeImgPath,
    };
  },
};
</script>
