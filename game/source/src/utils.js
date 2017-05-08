
export const ComputeVictory = (player) => {
    
    let elements = player.Movements.sort();

    if(elements.length >= 3){

        debugger;
       
        //check rows
        let line1 = elements.filter((game) => game[0] == 0 && game[1] == 0 || game[0] == 0 && game[1] == 1 || game[0] == 0 && game[1] == 2);
        let line2 = elements.filter((game) => game[0] == 1 && game[1] == 0 || game[0] == 1 && game[1] == 1 || game[0] == 1 && game[1] == 2);
        let line3 = elements.filter((game) => game[0] == 2 && game[1] == 0 || game[0] == 2 && game[1] == 1 || game[0] == 2 && game[1] == 2);

        if(line1.length == 3 || line2.length == 3 || line2.length == 3)
            return true;

        //check columns
        let column1 = elements.filter((game) => game[0] == 0 && game[1] == 0 || game[0] == 1 && game[1] == 0 || game[0] == 2 && game[1] == 0);
        let column2 = elements.filter((game) => game[0] == 0 && game[1] == 1 || game[0] == 1 && game[1] == 1 || game[0] == 2 && game[1] == 1);
        let column3 = elements.filter((game) => game[0] == 0 && game[1] == 2 || game[0] == 1 && game[1] == 2 || game[0] == 2 && game[1] == 2);

        if(column1.length == 3 || column2.length == 3 || column3.length == 3)
            return true;

        //check diagonals
        let diagonal1 = elements.filter((game) => game[0] == 0 && game[1] == 0 || game[0] == 1 && game[1] == 1 || game[0] == 2 && game[1] == 2);
        let diagonal2 = elements.filter((game) => game[0] == 2 && game[1] == 0 || game[0] == 1 && game[1] == 1 || game[0] == 0 && game[1] == 2);

        if(diagonal1.length == 3 || diagonal2.length == 3)
            return true;
        
        return false;
    }else{
        return false;
    }
}