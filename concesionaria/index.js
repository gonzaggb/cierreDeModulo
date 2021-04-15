let autos = require('../autos');
let clientes = require('../clientes');

let concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
        let autoEncontrado = {};
        this.autos.forEach(function(autos){ // hacer el forEach equivale a hacer un for, pero dada la forma de funcionar
            if(autos.patente == patente){ //del mismo, que no retorna valores, debemos iterar con este y guardar los valores que querramos en otra variable
                autoEncontrado = autos;
            }
        })
        return autoEncontrado;
    },
//        for(let i = 0; i < autos.length; i++){
//            if(this.autos[i].patente == patente){
//                return autos[i];
//            }
//        }
//   },
    venderAuto: function(patente){ //marca como vendido el auto que se vendio
        if(this.buscarAuto(patente).patente == patente){ //re utilizo la fx buscarAuto, que me devuelve un objeto del array autos (autos[i]) y comparo que su propiedad patente sea igual a la buscada
            return this.buscarAuto(patente).vendido = true; //si se cumple la condición, se cambia el valor de la propiedad vendido a true
        }
    },
    autosParaLaVenta: function(){ // devuelve la lista de autos disponibles para vender
        return autosParaVenta = this.autos.filter(function(autosDisp){
            return autosDisp.vendido == false;
        }) // ARRAY dE AUTOS DISPONIBLES
        /*
                                    ----FORMA RESUMIDA DE HACER LA FUNCION DE AUTOS DISPONIBLE----
        autosDisponible: function(){
            return this.autos.filter(function(autosDisp){
                return autosDisp.vendido == false;
            })*/
    },
    autosNuevos: function(){ // devuelve la lista de autos nuevos
        return this.autosParaLaVenta().filter(function(auto0km){ //el metodo filter de arrays necesita de una funcion
            return auto0km.km <= 100;//a la cual se le pasa un dato como paramentro que va a representar los distintos elemento del array
        });// al ser un array de objetos, le indico que necesito que la propiedad km <= 100, para que me devuelva un nuevo array que incluya solo los elementos que cumplen la condición
        },

    listaDeVentas: function(){ // devuelve la lista de autos vendidos
        let i = 0;
        let precios = [];
        this.autos.forEach(function(autos){ // el forEach no lleva un return, únicamente itera sobre el array
            if(autos.vendido == true){
                precios[i] = autos.precio;
                i++;
            }

        })
        return precios;
    },
    totalDeVentas: function(){ // debe sumar el total de autos que se vendieron
        return this.listaDeVentas().reduce(function(acum,num){
            return acum+num;

        })
    },
    puedeComprar: function(auto,cliente){ //paso por parametro el auto elegido y los datos del cliente
         // declaro una variable inicializada en false
            return ((auto.precio <= cliente.capacidadDePagoTotal &&
             ((auto.precio/auto.cuotas) <= cliente.capacidadDePagoEnCuotas)));
         
    },
    autosQuePuedeComprar: function(clientes){
        let puedeComprar = [];
        this.autosParaLaVenta().forEach(function(autos){
            if(autos.precio <= clientes.capacidadDePagoTotal &&
                 ((autos.precio/autos.cuotas) <= clientes.capacidadDePagoEnCuotas)){
                    puedeComprar.push(autos)
                 }

        })
        return puedeComprar;
    }
}
//concesionaria.autosQuePuedeComprar(clientes);
console.log(concesionaria.puedeComprar('Corolla',clientes))
//console.log(concesionaria.puedeComprar('Corolla',clientes))
console.log(concesionaria.autosQuePuedeComprar(clientes));
//concesionaria.venderAuto('APL123');
//concesionaria.venderAuto('JJK116');
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.buscarAuto('APL123'));
//console.log('el total de ventas fue de :' + concesionaria.totalDeVentas());
//console.log(concesionaria.totalDeVentas());
//console.log(concesionaria.autosNuevos());//para ejecutar la funcion se agregan parentesis.