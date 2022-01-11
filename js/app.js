const boton = document.getElementById('btnEntrar');
boton.addEventListener('click',fnValidar)

function fnValidar()
{
    const user =  document.getElementById('usuario');
    const pass =  document.getElementById('password');

  
    if(user.value == "Admin" && pass.value == "123")
    {
        alert("Datos Correctos");
    }
    else
    {
        alert("Datos Incorrectos");
    }


}