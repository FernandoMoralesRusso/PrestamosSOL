const formulario = document.getElementById("form");

const nombre = document.getElementById("firstName");
const apellido = document.getElementById("lastName");
const email = document.getElementById("email");
const monto = document.getElementById("amount");
const cuotas = document.getElementById("fees");

const montoFinal = document.getElementById("finalAmount");
const cuotasFinales = document.getElementById("finalFees");
const intereses = document.getElementById("interests");
const totalADevolver = document.getElementById("totalAmount");

const tasa = 0.89; // 89%

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    
    obtenerCuotaPrestamo()

})

//Obtener cuota del prestamo FUNCION
const obtenerCuotaPrestamo = () => {
    const cuotaPrestamo = tasa * monto.value / (1 - (1 + tasa)**-cuotas.value)
    obtenerTotal(cuotaPrestamo)
};
//Obtener el total a devolver FUNCION
const obtenerTotal = (cuotaPrestamo) => {
    const total = Math.ceil(cuotaPrestamo) * cuotas.value
    pintarPrestamo(total)
};
//Pintar los datos en el DOM
const pintarPrestamo = (total) => {
    montoFinal.innerText = monto.value
    cuotasFinales.innerText = cuotas.value
    intereses.innerText = total - monto.value
    totalADevolver.innerText = total
}
