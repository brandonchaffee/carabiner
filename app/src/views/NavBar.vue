<template>
  <div id="navbar" :class="$store.state.switchStatus">
      <h1>Carabiner</h1>

      <div id="side-items">
        <div id="addholder">
          <Adder/>
        </div>
        <div id="lockholder">
          <Lock/>
        </div>
      </div>

    </div>
</template>

<script>
import Lock from '@/components/Lock'
import Adder from '@/components/Adder'

export default {
  name: 'NavBar',
  components: { Lock, Adder }
}
</script>

<style scoped>
#navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .25);
    position: relative;
    transition: background-position 1000ms ease;
    background: linear-gradient(to left, #f85032, #e73827, #8E54E9, #4776E6, #11998e, #21dd68);
    background-size: 500% 500%;
    background-position: 50% 0%;
}

.locking {
  background-position: 100% 0% !important;
}

.unlocking {
  background-position: 0% 0% !important;
}

h1 {
    color: white;
    padding: 7px;
    padding-left: 40px;
    font-size: 35px;
    font-family: 'Hind', sans-serif;
    font-weight: 600;
    margin: 0;
    transform: translate(0px, 3px);
}

#side-items {
  height: 40px;
  display: flex;
}

#addholder {
  height: 40px;
  cursor: pointer;
}
#lockholder {
  height: 40px;
  width: 100px;
  cursor: pointer;
}

</style>
