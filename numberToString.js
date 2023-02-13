function numberToString(tab){
    let result = []
    for(var i = 0; i< tab.length; i++ ) {
        let element = tab[i]
        if(element == 0) {
            result.push('zero')
            } else if(element== 1){
                result.push('un');
            } else if(element == 2){
                result.push('deux');
            } else if(element == 3){
                result.push('trois');
            } else if(element == 4){
                result.push('quatre');
            } else if(element == 5){
                result.push('cinq');
            } else if(element == 6){
                result.push('six');
            }else if(element == 7){
                result.push('sept');
            }else if(element == 8){
                result.push('huit');
            }else if(element == 9){
                result.push('neuf');
            } else if(element == 10){
                result.push('dix')
            }
    }
    console.log(result);

    return result;
}

module.exports=numberToString