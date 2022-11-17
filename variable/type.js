// copier/coller TOUT ce code dans un fichier JS 
// et avoir l'extension Better Comment installé dans Vscode pour voir la coloration des commentaires

//*----------------------------------------------------------------------------------------------------------------------------------
//*============================================================TYPE PRIMITIF========================================================
//*----------------------------------------------------------------------------------------------------------------------------------

//! les types primitifs qu'on peut stocker dans une variable
//TODO pour tester le type d'une variable -> console.log(typeof variableName)

const a = null // chelou, le typeof dit que c'est un object, mais c'est comme ça, c'est JS
const b = undefined // typeof retourne undefined

//! type number
const c1 = 0 // typeof retourn number
const c2 = 1
const c3 = 42
const c4 = -42
const c5 = 5.12
const c6 = -74.8461

//! type string
const e = '' // simple quote
const f = "" // double quote
const g = `` // backtick (ou magic quote), spécifiquement créé pour fonctionner avec ${} pour concaténer.

const h = "double quote si je veux utiliser des apostrophe dans ma string comme c'est le cas dans cet example"
const i = 'simple quote si je veux utiliser des guillemets dans ma string, ex: le héro dit: "Nous avons sauvé le monde !"'
const j = `on peut utiliser des 'simple' ou "quote" dans une string faite avec des backticks sans aucune problème`

//! type boolean
const k = true
const l = false

//TODO bonus : pour tester la valeur booléenne du contenu d'une variable on utilise console.log(!!variableName) // true
//TODO ça peut être utile pour se rapeler si une valeure est Truthy(true) ou Falsy(false)
//TODO console.log(!!j)


//*----------------------------------------------------------------------------------------------------------------------------------
//*============================================================TYPE DE REFERENCE=====================================================
//*----------------------------------------------------------------------------------------------------------------------------------


//! les type de référence qu'on peut stocker dans une variable

//! array
const m = []

//! objet
const n = {}

//! function
function o () {}
const p = function() {}
const q = () => {}



//*----------------------------------------------------------------------------------------------------------------------------------
//*============================================================BONUS=================================================================
//*====================================================PRIMITIF VS REFERENCE=========================================================
//*----------------------------------------------------------------------------------------------------------------------------------


//! Type PRIMITIF
const test1 = 42
let test2 =  test1
test2 = 1
// console.log(`test1 = ${test1} et test2 = ${test2}`)

//*==================================================================================================================================

//! Type de REFERENCE : objet
const test5 = {prop1: 'une string', prop2: 42}
const test6 = test5
test6.prop1 = 'modification'
test5.prop2 = 1
test5.nouvelProp = "I'm New !"
//console.log(`test5 = ${test5} et test6 = ${test6}`) -> pas assez puissant pour console.logger le contenu des objets quand on concatène
// console.log('test 5 : ', test5)
// console.log('test 6 : ', test6)

//? c'est pour ça que si une const contient un objet, tant que ça reste un objet, on peut modifier des choses dedans.

//TODO test5 = 'test' -> ne fonctionnera pas, car 'test' n'est pas un objet mais une string

//*==================================================================================================================================

//! Type de REFERENCE : tableau
const test3 = ['coucou', 1, 'test']
const test4 = test3
test4[0] = 'modification'
// console.log('test 3 : ', test3)
// console.log('test 4 : ', test4)

//? c'est pour ça que si une const contient un tableau, tant que ça reste un tableau, on peut modifier des choses dedans.

//TODO test4 = 1 -> ne fonctionnera pas, car 1 n'est pas un tableau mais un number





//*----------------------------------------------------------------------------------------------------------------------------------
//*============================================================EXERCICES=============================================================
//*----------------------------------------------------------------------------------------------------------------------------------
//                              !!! TOUJOURS VERIFIER LES RESULTATS GRACE A UN CONSOLE.LOG() !!!

//TODO 1. créer 2 variables qui contiennent n'importe quel nombre 
//?    puis créer une 3ème variable qui contient le résultat de l'addition des 2 variables précédente
//?    une 4ème qui contient la soustraction des 2 première variables
//?    une 5ème qui contient la multiplication
//?    une 6ème qui contient la division

//TODO 2. créer 2 variables contiennent n'importe quel string
//?    puis créer une 3ème variable qui contient la concaténation des 2 variables précédente

//TODO 3. créer une variable qui contient un nombre et une variable qui contient une string
//?    puis concaténer ces 2 variables dans une nouvelle variable

//TODO 4. créer une variable qui contient un nombre et une variable qui contient une string qui contient un charactère numérique ("2", '5', etc..)
//?    puis trouver un moyen d'additionner le nombre de type number et le nombre de type string dans une nouvelle variable
//?    puis la soustraction dans une nouvelle variable
//?    puis la multiplication dans une nouvelle variable
//?    puis la division dans une nouvelle variable

