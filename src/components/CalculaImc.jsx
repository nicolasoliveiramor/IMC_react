const IMCCalculado = ({ altura, peso }) => {
    const verificaCampos = () => {
        if (!altura || !peso) {
            return `Adicione valores aos dois campos!`
        } else if (altura === '' || peso === '') {
            return `Adicione valores aos dois campos!`
        }
        return null
    }

    const calculaIMC = () => {
        const alturaEmMetros = parseFloat(altura)
        const pesoEmKg = parseFloat(peso)

        if (isNaN(alturaEmMetros) || isNaN(pesoEmKg) || alturaEmMetros <= 0) {
            return null
        }

        const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros)
        return imc.toFixed(2)
    }
        
    const getClassificacaoDePeso = (imc) => {
        if (imc <= 18.5) return `Você esta abaixo do peso. Aqui, pegue um hot dog meu amigo!`
        
        if (imc >= 18.5 && imc <= 24.9) return `Você esta com o peso normal, continue assim!`
        
        if (imc >= 24.9 && imc <= 29) return `Você esta com sobrepeso, vamos fazer alguns exercícios?`
        
        if (imc >= 29) return `Você sera o próximo participante do kilos mortais!`
    }
    
    const erro = verificaCampos()
    const imc = calculaIMC()
    const classificacao = getClassificacaoDePeso(imc) 

    return (
        <>
            {erro && 
                <h2>{erro}</h2>
            } 
            
            { imc && (
                <>
                    <h2>Seu IMC é: {imc}</h2>
                    <p>Sua classificação é: {classificacao}</p>
                </>
            )}
        </>
    )
}


export default IMCCalculado