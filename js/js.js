const nodoFormulario = document.querySelector("#myForm");
    nodoFormulario.addEventListener("submit", (event)=>{

        event.preventDefault();

        const nombre = document.querySelector("#nombre");
        const apellido = document.querySelector("#nombre");
        document.querySelector("#enviar").value="Enviando...";
        if(nombre.value.trim()!=="" && apellido.value.trim()!=="")
        {
            alert("Campos completados, su pedido ira a la direccion que tipeo, recibira un whatsapp cuando el delivery este cerca.");
        }
        else 
        {
            alert("Por favor escriba su direccion y numero de contacto");
        }

    })



