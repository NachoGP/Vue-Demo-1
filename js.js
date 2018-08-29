const app = new Vue({
 
   el: '#app',
   template:'#ejemplo',
   data:{
     cursos:[
       {name: "Curso de Creatividad Computacional", url:'http://www.google.es'},
       {name: "Curso de Desarrollo Reactivo", url:'http://www.google.es'},
       {name: "Curso de Vue", url:'http://www.google.es'
       
     }],
     mostrar:true,
     mensaje: "Bicheando con Vue.js",
     imagen: "http://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png"
   }, 
   methods:{
   toggleMostrar: function(){
     this.mostrar = !this.mostrar
   }
 }
 })