
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Form15() {
  return (
    
    <div className="flx">
      

    <Form className="bg_color p-6 shadow-inner shadow-lg">


    <Form.Group as={Col} controlId="formGridEmail" className="flex justify-center text-2xl">
          <p>DETERMINATION OF SILT CONTENT 
IS: 2386(part 2) /383 
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
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Type Of Aggregate</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Supplier</Form.Label>
          <Form.Control type=":" placeholder="" />
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Source</Form.Label>
          <Form.Control type=":" placeholder="" />
        </Form.Group>

        
      </Row>

     
      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      <h1 className="flex justify-center">By Volumetric Method </h1>


      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        


      <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Sample </Form.Label>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label></Form.Label>
         
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>1</Form.Label>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>2</Form.Label>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>3</Form.Label>
        </Form.Group>
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Volume of total material in ml  
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>A</p>
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>

      <Row className="mb-8">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>Volume of silt in ml 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>v</p>
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group> 

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>

      <Row className="mb-9">
        <Form.Group as={Col} controlId="formGridEmail">
        <p>Silt content in %
            </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>D=V/A*100</p>
          
         
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-9">
        <Form.Group as={Col} controlId="formGridEmail">
        <p>Average Silt content %
            </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>Avg</p>
          
         
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
       
         
        </Form.Group>
      </Row>
      <Row className="mb-9">
        <Form.Group as={Col} controlId="formGridEmail">
        <p>Specified Limit 0%
            </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p></p>
          
         
        </Form.Group>
        

        
         
        
      </Row>

      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      <h1 className="flex justify-center">By Weight Method By Washing 75 mic seive </h1>


      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        


      <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Sample </Form.Label>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label></Form.Label>
         
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>1</Form.Label>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>2</Form.Label>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>3</Form.Label>
        </Form.Group>
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Initial wt.of material in ml   
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>A</p>
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>

      <Row className="mb-8">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>Final wt.of material in ml 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>v</p>
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group> 

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>

      <Row className="mb-9">
        <Form.Group as={Col} controlId="formGridEmail">
        <p>Silt content in %
            </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>D=V/A*100</p>
          
         
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-9">
        <Form.Group as={Col} controlId="formGridEmail">
        <p>Average Silt content %
            </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>Avg</p>
          
         
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
       
         
        </Form.Group>
      </Row>
      <Row className="mb-9">
        <Form.Group as={Col} controlId="formGridEmail">
        <p>Specified Limit 0%
            </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p></p>
          
         
        </Form.Group>
        

        
         
        
      </Row>
      
      

      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
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

export default Form15;