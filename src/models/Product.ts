//  Tipando o tipo de informacao que vamos tratar em produtos
type Product = {
    title: string,
    price: number
};
//  Nessa data teremos um array de produtos             Os dados
const data: Product [] = [
    {title: 'Produto X', price: 10},
    {title: 'Produto Y', price: 15},
    {title: 'Produto W', price: 20},
    {title: 'Produto G', price: 5}
];
//  Criando as funcoes
export const Product ={
    //  Pegando todos os produtos
    getAll: (): Product[] => {
        return data;
    },
    //  filtrando os produtos
    getFromPriceAfter: (price: number): Product[] => {
        //  Condicao de filtragem
        return data.filter(item => item.price >= price);
    }
};