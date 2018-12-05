window.onload = function() {

    const routes = [
      {path: '/cine', component: Cine},
      {path: '/camping', component: Camping} //Indica a que url va a acceder.
    ]

    const router = new VueRouter({
      routes
    })




  var app = new Vue({
    router,
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },

    created(){
      this.methods = "Informatica"
    },

    methods:{
      changebutton: function(){
        console.log("adios")
        this.message = "adios"
      }
    }
  })
}
