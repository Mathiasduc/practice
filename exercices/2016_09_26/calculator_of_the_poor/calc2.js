function add (a,b) {
    var result = a + b;
    return result; 
}
function substract (a,b) {}
    return a-b; 
}
function calc(){
	var x = process.argv[2];
	var y = process.argv[3]; 
    var a = parseInt (x,  10);
    var b = parseInt (y,  10);
    var result = add(a, b);
    console.log(result);
}
calc();
multiply
d apres toi que fait console.log?
ecrisn moi ce que ca fait d  apres toi
d apres ce que t as compris
tu sais pas ?
consolelog sert a imprimer sur la ligne de commande la valeur qu on lui passe en parametre
tu as compris les ligne du dessus?
tu as compris?
detend toi lol je veux juste t aider
je veux que tu comprennen
si je m en branle je te file les reponses et basta
sert a rien de copier si tu comprend    eenvoie le dernier paragraphe
mieux que toi

var operation = process.argv[2]; cette ligne creer la variable operation et lui donne la valeur de la chaine process.argv a l index 2
arete de vouloir faire l exo 

if(operation === 'add') {
    console.log (add,(a,b)); 
} else { 
    console.log (substract(a,b)); 
}