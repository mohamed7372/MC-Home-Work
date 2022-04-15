# Homework 3 :

Develop an algorithm where u have to calculate the sum of each column in the matrix and then find the maximal and the minimal sum of and then do a permutation between the two columns of the maximal sum and the minimal sum.

(ecrire un algorithm dont vous devez calculer la somme de chaque colonne de la matrice et trouver la somme maximale et la somme minimale , et a la fin vous devez permuter les 2 colonnes des sommes maximale et minimale).

U can do it with C or JS or PYTHON .

## E.G :

Matrix=[[1,-3,4, 0 ,9],
               [0,-9,7, 10,11],
                [2, 5,8,-11,45],
                [7, 4,12,-6,-5]]
Here the minimal sum in the columns is : 0 + 10 + (-11) + (-6) = -7 in the 4th column

and the maximal sum in the columns is : 9 + 11 + 45 + (-5) = 60 in the 5th column

So we have to do a permuation between the 4th and the 5th column , and Matrix becomes like :

        Matrix=[[1,-3,4, 9 ,0],
                [0,-9,7, 11,10],
                [2, 5,8, 45,-11],
                [7, 4,12,-5,-6]]
