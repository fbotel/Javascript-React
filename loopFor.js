/*criar um programa que calcula a média das notas entre os alunos (arrays) e enviar mensagem do cálculo da média*/
//se a média for maior que 6, parabenizar a turma

const class1 = [
    {
        name: "Filipe",
        mark: 9
    },
    {
        name: "Dior",
        mark: 7
    },
    {
        name: "Douglas",
        mark: 8
    },
    {
        name: "Fulano",
        mark: 7
    }
]
const class2 = [
    {
        name: "Kaka",
        mark: 2
    },
    {
        name: "Michel",
        mark: 4
    },
    {
        name: "Tiago",
        mark: 6
    }
]
function mediaCalculate(students){
    let addition = 0
    for (let i = 0; i < students.length; i++){
        addition = addition + students[i].mark
    }

    const media = addition / students.length
    return media
}
//o parametro x será substituído pelo array assim que eu puxar a função.

const media1 = mediaCalculate(class1)
const media2 = mediaCalculate(class2)

function congratulate(media, turma){
    if (media >= 6){
        console.log(`Parabéns! ${turma} aprovada com nota ${media}.`)
    }else{
        console.log(`Infelizmente a ${turma} foi reprovada com nota ${media}.`)
    }
}

congratulate(media1, 'Turma 1')
congratulate(media2, 'Turma 2')