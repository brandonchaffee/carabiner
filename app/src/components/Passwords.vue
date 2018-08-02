<template>
  <div id="passwords">
    <div v-for="item in passwordSet" v-bind:key="item.id" class="passwordSet"></div>
  </div>
</template>

<script>
export default {
  name: 'Passwords',
  data () {
    return {
      passwordSet: [
        { 'site': 'Google', 'username': 'bobby', 'password': 'gopher' },
        { 'site': 'Yahoo', 'username': 'buzz', 'password': 'gopherboy' },
        { 'site': 'Github', 'username': 'buzz', 'password': 'gopherboy' },
        { 'site': 'Gmail', 'username': 'buzz', 'password': 'gopherboy' },
        { 'site': 'Edx', 'username': 'buzz', 'password': 'gopherboy' },
        { 'site': 'Jello', 'username': 'buzz', 'password': 'gopherboy' },
        { 'site': 'Yello', 'username': 'andy', 'password': 'gophertoy' }
      ]
    }
  }
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
  transition: background 300ms ease;
  cursor: pointer;
  justify-content: center;
  text-align: center;
}
.passwordSet:hover {
  background: rgba(71, 118, 230, 0.95);
  color: white;
}

.site {
  padding-top: 30%;
  font-size: 1.25em;
}
</style>
