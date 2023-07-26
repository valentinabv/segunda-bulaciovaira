let productos = [
    {
      id: 1,
      nombre: "Smart TV",
      precio: 184999,
      categoria: "electronica",
      stock: 5,
      img: "https://news.samsung.com/co/wp-content/themes/sw_newsroom/download.php?id=lthaGs0wjnqui6o7bECImA%3D%3D"
    },
    {
      id: 2,
      nombre: "Lavarropas automatico",
      precio: 124999,
      categoria: "electrodomestico",
      stock: 3,
      img: "https://www.tumejorcuota.com.ar/wp-content/uploads/TMC-B36726.jpg"
    },
    {
      id: 3,
      nombre: "Celular",
      precio: 104999,
      categoria: "electronica",
      stock: 15,
      img: "https://pardohogar.vtexassets.com/arquivos/ids/175573/A23-Negro-2.jpg?v=637886469239030000"
    },
    {
      id: 4,
      nombre: "Aire Acondicionado Split",
      precio: 200000,
      categoria: "electrodomestico",
      stock: 4,
      img: "https://images.fravega.com/f1000/1b60014f11f63a1f37c3ca884d3b58fb.jpg"
    },
    {
      id: 5,
      nombre: "Heladera con Freezer",
      precio: 139899,
      categoria: "electrodomestico",
      stock: 2,
      img: "https://yuhmak.vtexassets.com/arquivos/ids/171894-800-auto?v=638055844865570000&width=800&height=auto&aspect=true"
    },
    {
      id: 6,
      nombre: "Licuadora",
      precio: 13000,
      categoria: "electrodomestico",
      stock: 20,
      img: "https://images.fravega.com/f1000/ca07825ecd3d338ff4e54a9b6d7185ec.jpg"
    },
    {
      id: 7,
      nombre: "Notebook 15.6' FHD",
      precio: 270799,
      categoria: "electronica",
      stock: 3,
      img: "https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/d/6/d6dm6_-_foto_1.jpg"
    },
    {
      id: 8,
      nombre: "Parlante potenciado",
      precio: 14000,
      categoria: "electronica",
      stock: 8,
      img: "https://www.soscomputacion.com.ar/21652-thickbox_default/parlante-daewoo-flame-recargable-bluetooth-aux-usb-dw-8r3.jpg"
    }
  ]
  
  let articulos = productos.map(articulo => {
    return new Articulo(articulo.id, articulo.nombre, articulo.precio, articulo.categoria, articulo.stock)
  })
  let carritoProd = []
  
  let menu = "Seleccione:\n0: Para SALIR\n1: Para mostrar todos los productos\n2: Para mostrar ELECTRODOMESTICOS\n3: Para mostrar ELECTRONICA\n4: Para mostrar pruductos con $$ menores a $100.000 pesos\n5: Para mostrar productos con $$ mayores a $100.000 pesos\n6: Para agregar producto al carrito de compra\n7: Para ver compra"
  let opciones
  do{
    opciones = Number(prompt(menu)) 
    if(opciones === 1){
      let listaArticulos= articulos.map(articulo =>"Producto: " + articulo.nombre + ". Categoria: " + articulo.categoria + ". Precio: $" + articulo.precio).join("\n")
      alert(listaArticulos)
    } else if(opciones === 2){
        let FiltroElectrodomesticos = articulos.filter(articulo => articulo.categoria == "electrodomestico")
        let filtros =  "Electrodomesticos:\n" + FiltroElectrodomesticos.map(filtro =>"Producto: " + filtro.nombre + ". Categoria: " + filtro.categoria + ". Precio: $" + filtro.precio).join("\n")
        alert(filtros)
    } else if(opciones === 3){
        let filtroElectronica = articulos.filter(articulo => articulo.categoria == "electronica")
        let filtros =  "Electronica:\n" + filtroElectronica.map(filtro =>"Producto: " + filtro.nombre + ". Categoria: " + filtro.categoria + ". Precio: $" + filtro.precio).join("\n")
        alert(filtros)
    } else if(opciones === 4){
        let filtroPrecioMenos100 = articulos.filter(articulo => articulo.precio >= 0 && articulo.precio <= 100000)
        let filtros = "Precios menores a 100.000,00:\n" + filtroPrecioMenos100.map(filtro =>"Producto: " + filtro.nombre + ". Categoria: " + filtro.categoria + ". Precio: $" + filtro.precio).join("\n")
        alert(filtros)
    } else if(opciones === 5){
        let filtroPrecioMasDe100 = articulos.filter(articulo => articulo.precio >= 100001)
        let filtros = "Precios mayores a 100.000,00:\n" +filtroPrecioMasDe100.map(filtro =>"Producto: " + filtro.nombre + ". Categoria: " + filtro.categoria + ". Precio: $" + filtro.precio).join("\n")
        alert(filtros)
    } else if(opciones === 6){
        let listaArticulos = "Seleccione número de producto a agregar al carrito:\n0: para salir\n" + articulos.map(articulo => articulo.id + ": Producto: " + articulo.nombre + " - " + articulo.categoria + ". Precio: $" + articulo.precio).join("\n")
        let idArticulo        
        do{               
            idArticulo = Number(prompt(listaArticulos))
            let idArticuloIngresado = articulos.find(articulo => articulo.id === idArticulo)
            if(idArticuloIngresado){
              let ubicacionProd = carritoProd.findIndex(articulo => articulo.id === idArticuloIngresado.id)
              if (ubicacionProd != -1){                    
                carritoProd[ubicacionProd].cantidadUnidades++
                carritoProd[ubicacionProd].subtotal = carritoProd[ubicacionProd].precioUnidad * carritoProd[ubicacionProd].cantidadUnidades
                alert("Producto agregado al carrito!")
              }else{                    
                carritoProd.push({                        
                  id: idArticuloIngresado.id,
                  nombre: idArticuloIngresado.nombre,
                  categoria: idArticuloIngresado.categoria,                       
                  cantidadUnidades: 1,
                  precioUnidad: idArticuloIngresado.precio,
                  subtotal: idArticuloIngresado.precio
                })
                alert("Producto agregado al carrito!")                 
              }                
            }                                       
          }while (idArticulo != 0)             
    }else if(opciones === 7){
      let carrito = carritoProd.map(articulo => "Producto: " + articulo.nombre + " - " + articulo.categoria + ". " + "Cantidad: " + articulo.cantidadUnidades + ". " + "Subtotal: $" + articulo.subtotal).join("\n")
      alert(carrito)
    }
  }while (opciones != 0)
  
  