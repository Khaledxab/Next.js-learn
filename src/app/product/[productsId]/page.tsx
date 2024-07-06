export default function ProductDetails( {
     params ,
    }: { params: { productsId: string }}) {
    return (
        <h1>the number of product is : { params.productsId }</h1>
    );
}



