var Verses = {
    props: {
      bookID: {
        type: Number,
        required: true
      },
    },
    template: `
      <div>
        <p>Book ID: {{bookID}} <br>
        <span v-if="bookData">
          Book Name: {{bookData.name}} <br> Book Author: {{bookData.author}}
        </span>
        </p>
      </div>
    `,
    methods: {}
  };
  