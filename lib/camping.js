//Cine
const Camping = {
  template: `
    <div>
      <h1> Camping </h1>
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <div class="card-body">
            <div v-for="item in info">
              {{ item.title }}
              <img :src="item.url"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data(){
    return{
      info : []
    }
  },
  created(){
    this.getFotos();
  },
  methods:{
    async getFotos(){
      console.log("Estamos en la función")
      await axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.info = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
