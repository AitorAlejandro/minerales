var IMG_URL_PREFFIX = 'img/';
var mineralesModel = [
  {
    nombre: 'Celestina',
    procedencia: 'Madagascar',
    imgSrc: `${IMG_URL_PREFFIX}IMG_20190310_150522.jpg`
  },
  {
    nombre: 'Copal',
    procedencia: 'Marruecos',
    imgSrc: `${IMG_URL_PREFFIX}IMG_20190310_150635.jpg`
  },
  {
    nombre: 'Pirita Chispa',
    procedencia: 'Perú',
    imgSrc: `${IMG_URL_PREFFIX}IMG_20190310_150603.jpg`
  },
  {
    nombre: 'Cuarzo Citrino Cristal',
    procedencia: 'Brasil',
    imgSrc: `${IMG_URL_PREFFIX}IMG_20190310_150708.jpg`
  },
  {
    nombre: 'Fluorita Cristal',
    procedencia: 'Asturias (España)',
    imgSrc: `${IMG_URL_PREFFIX}IMG_20190310_150723.jpg`
  },
  {
    nombre: 'Amazonita',
    procedencia: 'Namibia',
    imgSrc: `${IMG_URL_PREFFIX}IMG_20190310_150617.jpg`
  },
  {
    nombre: 'Amatista Cristal',
    procedencia: 'Brasil',
    imgSrc: `${IMG_URL_PREFFIX}IMG_20190310_150649.jpg`
  },
  {
    nombre: 'Amatista (fragmento)',
    procedencia: 'Brasil',
    imgSrc: `${IMG_URL_PREFFIX}IMG_20190310_150458.jpg`
  },
  {
    nombre: 'Azulita',
    procedencia: '',
    imgSrc: `${IMG_URL_PREFFIX}IMG_20190310_172440.jpg`
  },
];

const app = new Vue({
  el:'#app',
  data: {
    minerales: mineralesModel,
    filtro: ''
  },
  computed: {
    mineralesFiltrados: function() {
      if (!this.filtro) {
        return this.minerales.sort( (a, b) => {
          const nameA = a.nombre.toUpperCase();
          const nameB = b.nombre.toUpperCase();
          return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
      } else {
        return this.minerales.filter( (mineral) => 
          mineral.nombre.toUpperCase().includes(this.filtro.toUpperCase()) || mineral.procedencia.toUpperCase().includes(this.filtro.toUpperCase()))
            .sort( (a, b) => {
              const nameA =  a.nombre.toUpperCase();
              const nameB = b.nombre.toUpperCase();
              return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
          });
      }
    }
  }
});

    