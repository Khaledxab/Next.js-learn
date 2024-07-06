export default function ReviewDetails( {
    params ,
    }: { params: { productsId:string, reviews: string }}) {
    return (
        <h1>the number of review for product &quot;{ params.productsId }&quot;  is : { params.reviews }</h1>
    );
}
