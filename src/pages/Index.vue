<template>
  <q-page class="flex flex-center">
    <div class="row flex-center">
      <div class="col q-ma-md">
        <spell-item />
      </div>
      <div class="col q-ma-md">
        <runes-table />
      </div>
    </div>
  </q-page>
  <q-footer class="footer">
    Made by Neon Suns 2022
  </q-footer>
</template>

<script>
import RunesTable from 'src/components/RunesTable.vue';
import SpellItem from 'src/components/SpellItem.vue';

export default {
  name: 'PageIndex',
  components: {
    RunesTable,
    SpellItem,
  },
};
</script>

<style lang="scss">
.footer {
  padding: 15px 20px;
  text-align: center;
}
</style>
