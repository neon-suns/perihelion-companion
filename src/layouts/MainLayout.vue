<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Perihelion Companion
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          {{ $t('spellList') }}
        </q-item-label>

        <q-btn-dropdown
          class="q-ma-md"
          color="primary"
          :label="`Filter Effect (${currentSelection})`"
        >
          <q-list>
            <q-item
              clickable
              v-close-popup
              @click="filterSpells('all')"
            >
              <q-item-section>
                <q-item-label>{{ $t('all') }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-close-popup
              @click="filterSpells('positive')"
            >
              <q-item-section>
                <q-item-label>{{ $t('positiveEffect') }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-close-popup
              @click="filterSpells('negative')"
            >
              <q-item-section>
                <q-item-label>{{ $t('negativeEffect') }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-expansion-item
          label="All Spells"
          :default-opened="true"
        >
          <q-list>
            <q-item
              v-for="(spell, index) in filteredSpells"
              :key="index"
              clickable
              @click="selectSpell(spell)"
            >
              {{ spell.name }}
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed } from 'vue';
import spells from 'src/assets/tables/spells.js';
import { useStore } from 'src/stores/currentSpell';

export default {
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);
    const currentSelection = ref('all');
    const currentSpellStore = useStore();

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    function selectSpell(spell) {
      currentSpellStore.$patch(spell);
    }

    function filterSpells(filter) {
      currentSelection.value = filter;
    }

    const filteredSpells = computed(() => {
      if (currentSelection.value === 'positive') {
        return spells.filter((item) => item.positiveModification === true);
      }

      if (currentSelection.value === 'negative') {
        return spells.filter((item) => item.positiveModification === false);
      }

      return spells;
    });

    return {
      currentSelection,
      filterSpells,
      filteredSpells,
      leftDrawerOpen,
      selectSpell,
      toggleLeftDrawer,
    };
  },
};
</script>
