<template>
  <q-card class="spell-item">
    <q-card-section class="bg-primary text-white q-mb-md">
      <div class="text-h6">{{ store.name }}</div>
    </q-card-section>

    <q-separator
      class="q-mb-md"
    />

    <div class="spell-item__recipe">
      <div
        v-for="(runeIndex, index) in store.recipe"
        :key="index"
        class="q-mr-sm q-my-md"
      >
        <rune-item
          :runeIndex="runeIndex"
        />
      </div>
    </div>

    <q-separator />

    <q-card-actions
      class="spell-item__card"
    >
      <div class="spell-item__classes">
        <h6 class="q-ma-none q-my-sm">{{ $t('availableClasses') }}</h6>
        <div
          v-for="(runeClass, index) in store.classes"
          :key="`rune-class-${index}`"
          class="spell-item__class"
        >
          {{ $t(`runeClasses.${runeClass}`) }}
        </div>
      </div>

      <h6 class="q-ma-none q-my-sm">{{ $t('characterClass') }}</h6>

      <div
        v-for="(characterClass, index) in store.charClass"
        :key="`${characterClass}-${index}`"
        class="spell-item__class"
      >
        {{ $t(`characterClasses.${characterClass}`) }}
      </div>

      <h6 class="q-ma-none q-my-sm">{{ $t('skillDepends') }}</h6>

      {{ $t(`attrs.${[store.depends]}`) }}

      <h6 class="q-ma-none q-my-sm">{{ $t('spellPositivity') }}</h6>

      {{ $t(`positive.${store.positiveModification}`) }}

      <div class="spell-item__affected-values">
        <h6 class="q-ma-none q-my-sm">{{ $t('affectedAttrs') }}</h6>
        <div
          v-for="(affectedValue, index) in store.affectedValues"
          :key="`affected-value-${index}`"
          class="spell-item__affected-value"
        >
          {{ $t(`attrs.${[affectedValue]}`) }}
        </div>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script>
import { useStore } from 'src/stores/currentSpell';
import RuneItem from 'src/components/RuneItem.vue';

export default {
  name: 'SpellItem',
  components: {
    RuneItem,
  },

  setup() {
    const store = useStore();

    return {
      store,
    };
  },
};
</script>

<style lang="scss">
.spell-item {
  &__recipe {
    display: flex;
    justify-content: center;
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
