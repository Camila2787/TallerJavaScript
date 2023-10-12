const buscarDocumento=async(dato)=>{
    const documentos1 =[1010,1011,10130,1957,5550]
    const documentos2=[1120,2345,,1039,3456,2345]
    const documentos3 =[1126,2565,,4539,3456,2395]
    const documentos4=[1124,2565,,6539,3656,5395]

    let encontrar=false;
    for (let i = 0; i < documentos1.length; i++) {
        if (dato==documentos1[i]) {
            encontrar=true
            var message= 'Pertence a la lista 1'
        }    
    }
    for (let i = 0; i < documentos2.length; i++) {
        if (dato==documentos2[i]) {
            encontrar=true
            var message= 'Pertence a la lista 2'
            
        }    
    }
    for (let i = 0; i < documentos3.length; i++) {
        if (dato==documentos3[i]) {
            encontrado=true
            var message= 'Pertence a la lista 3'
        }    
    }
    for (let i = 0; i < documentos4.length; i++) {
        if (dato==documentos4[i]) {
            encontrar=true
            var message= 'Pertence a la lista 4'
        }    
    }
  return new Promise((resolve, reject)=>{
    if (encontrar) {
        resolve('Dato encontrado en la lista : '+message)
        
    }
    else{
        reject('Dato no encontrado')
    }

  })
}
document.querySelector('#btnBuscar')
.addEventListener('click', ()=>buscarDocumento(document.getElementById('dato').value)
.then(message =>console.log(message))
.catch(error=>console.log(error))


)