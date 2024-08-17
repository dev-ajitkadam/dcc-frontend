
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Form12() {
  return (
    
    <div className="flx">
      

    <Form className="bg_color p-6 shadow-inner shadow-lg">


    <Form.Group as={Col} controlId="formGridEmail" className="flex justify-center text-2xl">
          <p>DETERMINATION OF SPECIFIC 8 WATER ABSORPTION <br></br>
            <p>IS :2386 (part 3) /383 </p> 
          </p>
          
        </Form.Group>
        <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>




      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Client ID</Form.Label>
          <Form.Control type="number" placeholder="" />
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Date of Testied:</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        
      </Row>
      <Row className='mb-3'>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Client Name</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Supplier:</Form.Label>
          <Form.Control type=":" placeholder="" />
        </Form.Group>

        
      </Row>

     
      <hr class="h-px my-3 bg-gray-200 border-1 dark:bg-gray-700"></hr>

      <p className=' flex justify-center'>Coarse Agge 20 mm  SOURCE: </p>
      
      <hr class="h-px my-3 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        


      <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Procedure </Form.Label>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>WT</Form.Label>
         
        </Form.Group>
        

        
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight of sample + basket in water  
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>A1</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight of empty basket in water 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>A2</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          The weight of saturated sample in water (A1-A2)gm
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>A</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight in g of saturated surface-dry sample 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>B</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight in g of oven-dned sample  
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>C</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Specific gravity 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Water absorption % (100*(B-C)/C) 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>

      <hr class="h-px my-3 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      <h1 className="flex justify-center">Coarse Agge 10 mm </h1>


      <hr class="h-px my-3 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Procedure </Form.Label>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>WT</Form.Label>
         
        </Form.Group>
        

        
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight of sample + basket in water 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>A1</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight of empty basket in water 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>A2</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          The weight of saturated sample in water (A1-A2)gm  
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>A</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight in g of saturated surface dry sample 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>B</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight in g of oven dried sample 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>C</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Specific gravity  
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Water absorption % (100*(B-C)/C)
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
     

      
      
      <hr class="h-px my-3 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      <h1 className="flex justify-center">Fine Agge Crush Sand </h1>
      <hr class="h-px my-3 bg-gray-200 border-1 dark:bg-gray-700"></hr>



      <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Procedure </Form.Label>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>WT</Form.Label>
         
        </Form.Group>
        

        
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight of sample + basket in water  
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>A1</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight of empty basket in water  
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>A2</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          The weight of saturated sample in water (A1-A2)gm 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>A</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight in g of saturated surface dry sample
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>B</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Weight in g of oven dried sample  
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>C</p>
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Specific gravity  
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Water absorption % (100*(B-C)/C)  
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label></Form.Label>
          
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
       
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>

      
      
        
        <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
        
      
<div className='flex justify-center'>
<a href="#">
        <Button variant="text" className= "flex bg-gray-700 hover:bg-orange-400 text-white " >Submit Record</Button>
      </a>
</div>
      
    </Form>
    </div>
  );
}

export default Form12;