document.querySelector('#calcular').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#cant').value);
    const n2 = n1*200;
    const dto = document.querySelector('#descuento').value;
    let r;
    if(dto == '80'){
        r = n2-(n2*0.80);
    }else if( dto == '50'){
     r = n2-(n2*0.50);
   
    }else if(dto == '15'){
     r = n2-(n2*0.15);
   
    }
    document.querySelector('#total').innerHTML = r;
   });
   
   let refresh = document.querySelector('#borrar');
   refresh.addEventListener('click', _ => {
               location.reload();
   })