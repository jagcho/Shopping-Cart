const CURRENCT_FORMATTER= new Intl.NumberFormat(undefined,{
    currency:"INR",style:"currency"
})


export function formatCurrency(number){
    return CURRENCT_FORMATTER.format(number)
}