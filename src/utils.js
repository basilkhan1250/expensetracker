
export const getincome = (transaPramp) => {
    if(!transaPramp) return
    let income = 0
    for (var i = 0; i < transaPramp.length; i++) {
        console.log(typeof(transaPramp[i]))
        if (transaPramp[i].amount > 0) {
            income += transaPramp[i].amount
        }
    }
    return income;
}

export const getexpense = (transaPramp) => {
    if(!transaPramp) return
    let expense = 0
    for (var i = 0; i < transaPramp.length; i++) {
        if (transaPramp[i].amount < 0) {
            expense += transaPramp[i].amount
        }
    }
    return expense;
}

