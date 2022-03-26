<template>
  <q-page>
    <div class="row flex-center">
      <div class="col-12 col-sm-5 col-md-6">
        <spell-item class="q-ma-md" />
      </div>
      <div class="col-12 col-sm-7 col-md-6">
        <runes-table class="q-ma-md" />
      </div>
    </div>
  </q-page>
  <q-footer class="footer">
    Made by <a href="https://neonsuns.cz" target="_blank">Neon Suns</a> @ 2022, powered by Vue and Quasar framework
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
