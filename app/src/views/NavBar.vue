<template>
    <div id="navbar">
      <h1>Carabiner</h1>
      <img class="unlock" src="../assets/padlock-unlock.svg">
    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
#navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #4776E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    text-align: left;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .25);
    position: relative;
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
.unlock {
  /* float: right; */
  height: 30px;
  padding-right: 25px;
  pointer: cursor;
}

</style>
