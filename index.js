console.log("World of DIO: The function Game")
const heroName = prompt("What is your Hero name?")
    console.log("Hello " + heroName + ", welcome to the world of DIO")
seasonManager()
function gameRanking(wins){//Função para determinar o nível do herói
    if (wins <= 10) return "Iron"
    if (wins <= 30) return "Bronze"
    if (wins <= 40) return "Silver"
    if (wins <= 70) return "Gold"
    if (wins <= 80) return "Diamond"
    if (wins <= 100) return "Legendary"
    return "Divine"
}
function seasonManager(){//Temporadas jogadas //substituição de partidas por temporadas
    let seasons = [
        {wins: 8, loses: 1},
        {wins: 75, loses: 20},
        {wins: 140, loses: 39}
    ]
    let i = 0
    let totalWins = 0//variável para total de vitórias
    let totalLoses = 0//variável para total de derrotas
    let startseason = confirm("Do you want to check your Seasons history?")//Pergunta se quer jogar ou não
    if (startseason){
        console.log("Loading player history, please wait...")
        while (i < seasons.length){//
            console.log(`Loading Season ${i + 1} stats for ${heroName}`)
            let wins = seasons[i].wins
            let loses = seasons[i].loses
            let winTotal = wins - loses  
            totalWins += wins //Soma o total de vitórias
            totalLoses += loses //Soma o total de derrotas
            console.log(`The Hero ${heroName} had a balance of ${winTotal} victories in Season ${i + 1} and finished at level ${gameRanking(wins)}`)
            i++
        }
        let winRate = totalWins - totalLoses
        let ranking = gameRanking(totalWins)
        console.log("Global Career Stats (All Seasons)")
        console.log(`The Hero ${heroName} has a global career balance of ${winRate} (Total Wins: ${totalWins}) and achieved the lifetime level of ${ranking}`)
        console.log("Congrats!")
    } else{
        console.log("returning to the main menu")//Se recusar jogar, volta ao menu principal
    }
}
//matchManager
//queue