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

    let url = this.getAPIURL() + "/roster";

    //fetch
    fetch(url)
      .then((response) => response.json())
      .then((roster) => {
        console.log(roster[0].name);
        this.cyclists = roster;
      });
  },

  methods: {
    getAPIURL() {
      if (window.location.href.split("://")[1].split(":")[0] === "localhost")
        return "http://localhost:5000";
      else return window.location.href.split("/#")[0];
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  line-height: 40px;
}
</style>