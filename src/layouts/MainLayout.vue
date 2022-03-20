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

        <filter-component
          :filter-items="['all', 'mediator', 'psionic', 'anchorite']"
          filter-type="Char type"
          :current-selection="currentFilters.characterType"
          @filterItems="filterSpells($event, 'characterType')"
        />

        <filter-component
          :filter-items="['all', 'positive', 'negative']"
          filter-type="Effect type"
          :current-selection="currentFilters.spellType"
          @filterItems="filterSpells($event, 'spellType')"
        />

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
import { ref, reactive, computed } from 'vue';
import FilterComponent from 'src/components/FilterComponent.vue';
import spells from 'src/assets/tables/spells.js';
import { useStore } from 'src/stores/currentSpell';

export default {
  name: 'MainLayout',

  components: {
    FilterComponent,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const currentFilters = reactive({
      characterType: 'all',
      spellType: 'all',
    });
    const currentSpellStore = useStore();

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    function selectSpell(spell) {
      currentSpellStore.$patch(spell);
    }

    function filterSpells(filterValue, selectedFilter) {
      currentFilters[selectedFilter] = filterValue;
    }

    const filteredSpells = computed(() => {
      let spellsArray = spells;

      if (currentFilters.characterType !== 'all') {
        spellsArray = spellsArray
          .filter((item) => item.charClass.includes(currentFilters.characterType));
      }

      if (currentFilters.spellType !== 'all') {
        const positiveModification = currentFilters.spellType === 'positive';
        spellsArray = spellsArray
          .filter((item) => item.positiveModification === positiveModification);
      }

      return spellsArray;
    });

    return {
      currentFilters,
      filterSpells,
      filteredSpells,
      leftDrawerOpen,
      selectSpell,
      toggleLeftDrawer,
    };
  },
};
</script>
