<template>
  <main>
    <h1>The Roster</h1>
    <ul>
      <li v-for="cyclist in cyclists" :key="cyclist.id">
        {{ cyclist.name }}, {{ cyclist.age }} years
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cyclists: [],
    };
  },

  mounted() {
    // Url changes depending whether you're in local or heroku

console.info(process.env.NODE_BASE)

    let url =
      process.env.NODE_BASE == "local"
        ? "http://localhost:5000"
        : window.location.href;

    console.log(url);

    //fetch
    fetch(url + "/roster")
      .then((response) => response.json())
      .then((roster) => {
        console.log(roster[0].name);
        this.cyclists = roster;
      });
  },
};
</script>

<style scoped>
li {
    list-style: none;
    line-height: 40px;
}
</style>