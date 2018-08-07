<template>
  <div id="passwords">
    <div
      v-for="(item, index) in $store.state.decryptedSet"
      v-bind:key="item.id"
      class="passwordSet"
      :class="{inactive:index != activeItem && activeItem != null, active:index == activeItem}"
      @click="setPassSetStatus(index)"
    >
      {{item._url}}
    </div>
    <PasswordModal v-if="activeItem != null"/>
  </div>
</template>

<script>
import PasswordModal from '@/components/PasswordModal'
import { mapActions } from 'vuex'

export default {
  name: 'Passwords',
  components: { PasswordModal },
  data () {
    return {
      passwordSets: []
    }
  },
  computed: {
    activeItem: function () {
      return this.$store.state.passSetStatus
    }
  },
  methods: mapActions([
    'setPassSetStatus'
  ])
}
</script>

<style scoped>
#passwords {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.passwordSet {
  background: rgba(71, 118, 230, 0.25);
  padding: 70px 150px 70px 150px;
  margin: 25px;
  border-radius: 7px;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  transition: background 300ms ease;
}
.passwordSet:hover {
  background: rgba(71, 118, 230, 0.95);
  color: white;
}

.inactive {
  opacity: 0.35;
}

.active {
  background: rgba(71, 118, 230, 0.95);
  color: white;
}

.site {
  padding-top: 30%;
  font-size: 1.25em;
}
</style>
