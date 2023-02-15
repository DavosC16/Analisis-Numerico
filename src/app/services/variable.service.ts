
var num: any;

var coef = new Array();

var cons = new Array();

var adj = new Array();

var copia = new Array();

var inverse = new Array();

var variables = new Array();

var pivAnt: any;

 var indexPivAct: any;

export function setNum(numVar:any){
    num=numVar;
}

export function getNumber(){
    return num;
}


export function setMatrix(constantes: any, ec: any){
    coef=ec;
    cons=constantes;
}


export function montante(){
    copia=coef;
    pivAnt=1;

    for (let i=0; i<num; i++){
        adj[i]=new Array();
        for (let j=0; j<num; j++){
            if(i==j){
                adj[i][j]=1;
            }
            else {
                adj[i][j]=0;
            }
        }
    }
    
    for(let x=0; x<num; x++){
        indexPivAct=x;

        for (let i=0; i<num; i++){
            for (let j=0; j<num; j++){
                if(indexPivAct!=i && indexPivAct!=j){
                    copia[i][j] = (((copia[indexPivAct][indexPivAct]*copia[i][j]) - (copia[i][indexPivAct]*copia[indexPivAct][j]))/pivAnt);
                    
                }
                if(indexPivAct!=i){
                    adj[i][j] = (((copia[indexPivAct][indexPivAct]*adj[i][j]) - (copia[i][indexPivAct]*adj[indexPivAct][j]))/pivAnt);
                }
            }

            if(indexPivAct!=i){
                copia[i][indexPivAct] = 0;
            }
        }

        pivAnt=copia[indexPivAct][indexPivAct];
    }

    for(let i=0; i<num; i++){
        inverse[i]=new Array();
        for(let j=0; j<num;j++){
            inverse[i][j]=adj[i][j]/pivAnt;
        }
    }

    for(let i=0; i<num; i++){
        variables[i]=0;
        for(let j=0; j<num; j++){
            variables[i]=variables[i] + (cons[j]*inverse[i][j]);
        }
    }

    console.log(adj);
    console.log(pivAnt);
    console.log(inverse);
    console.log(variables);

}

export function getAdjunta(){
    return adj;
}

export function getDeterminant(){
    return pivAnt;
}

export function getInverseMatrix(){
    return inverse;
}

export function getValuesOfX(){
    return variables;
}
