let mesNacimiento = prompt('Por favor ingrese su mes de nacimiento')
if(mesNacimiento === 'enero'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 31')
    if(dia > 0 && dia <= 31){
        if(dia > 0 && dia <= 19){
            alert('Tu signo es Capricornio')
        }else if(dia >= 20 && dia <= 31){
            alert('Tu signo es Acuario')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else if(mesNacimiento === 'febrero'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 29')
    if(dia > 0 && dia <= 29){
        if(dia > 0 && dia <= 18){
            alert('Tu signo es Acuario')
        }else if(dia >= 19 && dia <= 29){
            alert('Tu signo es Piscis')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else if(mesNacimiento === 'marzo'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 31')
    if(dia > 0 && dia <= 31){
        if(dia > 0 && dia <= 20){
            alert('Tu signo es Piscis')
        }else if(dia >= 21 && dia <= 31){
            alert('Tu signo es Aries')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else if(mesNacimiento === 'abril'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 30')
    if(dia > 0 && dia <= 30){
        if(dia > 0 && dia <= 19){
            alert('Tu signo es Aries')
        }else if(dia >= 20 && dia <= 30){
            alert('Tu signo es Tauro')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else if(mesNacimiento === 'mayo'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 31')
    if(dia > 0 && dia <= 31){
        if(dia > 0 && dia <= 20){
            alert('Tu signo es Tauro')
        }else if(dia >= 21 && dia <= 31){
            alert('Tu signo es Géminis')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else if(mesNacimiento === 'junio'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 30')
    if(dia > 0 && dia <= 30){
        if(dia > 0 && dia <= 20){
            alert('Tu signo es Géminis')
        }else if(dia >= 21 && dia <= 30){
            alert('Tu signo es Cáncer')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else if(mesNacimiento === 'julio'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 31')
    if(dia > 0 && dia <= 31){
        if(dia > 0 && dia <= 22){
            alert('Tu signo es Cáncer')
        }else if(dia >= 23 && dia <= 31){
            alert('Tu signo es Leo')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else if(mesNacimiento === 'agosto'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 31')
    if(dia > 0 && dia <= 31){
        if(dia > 0 && dia <= 22){
            alert('Tu signo es Leo')
        }else if(dia >= 23 && dia <= 31){
            alert('Tu signo es Virgo')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else if(mesNacimiento === 'septiembre'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 30')
    if(dia > 0 && dia <= 30){
        if(dia > 0 && dia <= 22){
            alert('Tu signo es Virgo')
        }else if(dia >= 23 && dia <= 30){
            alert('Tu signo es Libra')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else if(mesNacimiento === 'octubre'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 31')
    if(dia > 0 && dia <= 31){
        if(dia > 0 && dia <= 22){
            alert('Tu signo es Libra')
        }else if(dia >= 23 && dia <= 31){
            alert('Tu signo es Escorpio')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else if(mesNacimiento === 'noviembre'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 31')
    if(dia > 0 && dia <= 31){
        if(dia > 0 && dia <= 23){
            alert('Tu signo es Escorpio')
        }else if(dia >= 24 && dia <= 31){
            alert('Tu signo es Sagitario')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else if(mesNacimiento === 'diciembre'){
    let dia = prompt('Ingrese su día de nacimiento, debe ser un número entre 1 y 31')
    if(dia > 0 && dia <= 31){
        if(dia > 0 && dia <= 21){
            alert('Tu signo es Sagitario')
        }else if(dia >= 22 && dia <= 31){
            alert('Tu signo es Capricornio')
        }
    }else{
        alert('ingrese por favor un día válido')
    }
}else{
    alert('Por favor ingrese un mes válido')
}