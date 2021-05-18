var places = ["World", "America", "Europe", "Asia"];
var info = {
  message: "Hello world!",
  counter: 0
};

new Vue({
  el: "#app",
  data() {
    return {
      info: null
    };
  },
  methods: {
    dosomething: function (event) {
      this.counter += 1;
      this.message = "Hello " + places[this.counter % 4] + "!";
    }
  },
  mounted() {
    // const [books, setBooks] = useState(null);
    // const fetchData = async () => {
    //   const response = await axios.get(
    //     "https://www.abibliadigital.com.br/api/verses/nvi/sl/23",
    //     {
    //       headers: {
    //         Authorization: "apiKey"
    //       }
    //     }
    //   );

    //   setBooks(response.data);
    // };
    axios
      .get("https://www.abibliadigital.com.br/api/verses/nvi/sl/23", {
        headers: {
          Authorization: "apiKey"
        }
      })
      .then((response) => (this.info = response.data));
  },
  methods: {
    greet: function (event) {
      alert("The Book Name called " + this.info.book.name + "!");
      console.log(this.info);
    }
  }
});
