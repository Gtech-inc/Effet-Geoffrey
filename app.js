actions = ["marcher", "lire", "parler", "ecrire", "reviser", "faire un exercice en nsi", "être attentif", "recharger son ordi"]
effectGeoffrey = ["Faire l'equilibre", "Apprendre le braille et lire en braille", "Parler en langue des signes", "Ecrire en morse", "Ne pas reviser et se reposer sur son talent", "Créer un proifil github puis créer un repo github et le partager pour ensuite finir par créer un repplit", "S'en foutre et parler h36", "Construire une centrale nucléaire"]

function load() {
    for (action in actions) {
        document.getElementById("listActions").innerHTML += "<li>"+ actions[action] +"</li>"
    }
}

function applyEffect() {
    answer = (document.getElementById("answerInput").value).toLowerCase();

    for (action in actions) {
        if (actions[action] === answer){
            indexAction = action
            document.getElementById("answer").innerText = "Complication de la chose en cours ."
            setTimeout(() => {
                document.getElementById("answer").innerText = "Complication de la chose en cours .."
            }, 500);
            setTimeout(() => {
                document.getElementById("answer").innerText = "Complication de la chose en cours ..."
            }, 1000);
            setTimeout(() => {
                document.getElementById("answer").innerText = "Complication de la chose en cours ."
            }, 1500);
            setTimeout(() => {
                document.getElementById("answer").innerText = "Complication de la chose en cours .."
            }, 2000);

            setTimeout(() => {
                document.getElementById("answer").innerText = effectGeoffrey[indexAction]
            }, 2500);
        }
    }
}