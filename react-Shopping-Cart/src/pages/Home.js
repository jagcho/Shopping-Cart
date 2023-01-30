import { Button,Figure } from "react-bootstrap";
import { Link } from "react-router-dom";




export function Home(){

  
    return (
        <>
 <div className="flex-container">
    
<Figure className="mx-3">
  <Figure.Image
    width={600}
    height={600}
    alt="171x180"
    src="/imgs/customer.jpg"
  />
  <Figure.Caption  className=" d-flex justify-content-center align-items-center">
    <Link to='/Registration'>
   <Button >Customer</Button>
   </Link>
  </Figure.Caption>
</Figure >


 <Figure className="mx-3">
  <Figure.Image
    width={600}
   
    alt="171x100"
    src="/imgs/seller.jpg"
  />
  <Figure.Caption className=" d-flex justify-content-center align-items-center">
  <Link to='/'>
   <Button >Seller</Button>
   </Link>
  </Figure.Caption>
</Figure>
</div>
<h4 className=" d-flex justify-content-center align-items-center" >Welcomme to E-cart ! Select the category</h4>


  
        </>
    )
}