import styles from './CalculaImc.module.css'

const IMCCalculado = ({ altura, peso }) => {
    const verificaCampos = () => {
        if (!altura || !peso || altura === '' || peso === '') {
            return `Adicione valores aos dois campos!`
        }
        return null
    }

    const calculaIMC = () => {
        const alturaEmCm = parseInt(altura)
        const pesoEmKg = parseInt(peso)

        if (isNaN(alturaEmCm) || isNaN(pesoEmKg) || alturaEmCm <= 0 || pesoEmKg <= 0) {
            return null
        }

        const alturaEmMetros = alturaEmCm / 100
        const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros)
        return imc.toFixed(2)
    }

    const tabelaImc = [
        { limite: 18.5, classificacao: `Você está abaixo do peso. Aqui, pegue um hot dog meu amigo!`, cor: styles.baixoPeso },
        { limite: 24.9, classificacao: `Você está com peso normal, continue assim!`, cor: styles.pesoNormal },
        { limite: 29.9, classificacao: `Você está com sobrepeso, vamos fazer alguns exercícios?`, cor: styles.sobrepeso },
        { limite: 34.9, classificacao: `Você está com obesidade grau I.`, cor: styles.obesidadeI },
        { limite: 39.9, classificacao: `Você está com obesidade grau II.`, cor: styles.obesidadeII },
        { limite: 40, classificacao: `Você está com obesidade grau III.`, cor: styles.obesidadeIII },
    ]

    const erro = verificaCampos()
    const imc = calculaIMC()

    return (
        <>
            {erro &&
                <h2>{erro}</h2>
            }

            {imc && (
                <>
                    <h2>Seu IMC é: {imc}</h2>
                    <ul>
                        {tabelaImc.map(({ classificacao, cor, limite }) => (
                            <>
                                <li key={limite} className={cor}>
                                    <p>
                                        Se seu IMC é ≥ {limite}
                                    </p>
                                    <p>
                                        {classificacao}
                                    </p>
                                </li>
                            </>
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}


export default IMCCalculado