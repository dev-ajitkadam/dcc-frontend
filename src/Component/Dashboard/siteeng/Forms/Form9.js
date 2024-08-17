
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Form9() {
  return (
    
    <div className="flx">
      

    <Form className="bg_color p-6 shadow-inner shadow-lg">


    <Form.Group as={Col} controlId="formGridEmail" className="flex justify-center text-2xl">
          <p>(DLBD) DRY LOOSE BULK DENSITY (IS -2386(Part 3) /383)
          </p>
          
        </Form.Group>
        <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>




      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Client Name</Form.Label>
          <Form.Control type="text" placeholder="" />
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Client ID</Form.Label>
          <Form.Control type="integer" />
        </Form.Group>

        
      </Row>
      <Row className='mb-3'>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Supplier</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="" />
        </Form.Group>
      </Row>
      <Row className='mb-2'>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Source</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label></Form.Label>
       
        </Form.Group>
      </Row>

      
      <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      <p className="flex justify-center">20 MM  
          </p>
          <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        


      <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Test Details </Form.Label>
          
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Sample 1</Form.Label>
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Sample 2</Form.Label>
         
        </Form.Group>
      
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Average</Form.Label>
        </Form.Group>
        
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          WEIGHT OF AGGREGATE (gms)-C  
          </p>
          
       
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group> <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
        
     
      </Row>

      <Row className="mb-8">
        <Form.Group as={Col} controlId="formGridEmail">
          <p> VOLUME OF CYLINDERS - D
          </p>
        
         
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
        <p>DRY LOOSE BULK DENSITY  C/D*100 
            </p>
          
        
          
         
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

      
      <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      <p className="flex justify-center">10 MM  
          </p>
      <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>

      <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Test Details </Form.Label>
          
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Sample 1</Form.Label>
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Sample 2</Form.Label>
         
        </Form.Group>
      
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Average</Form.Label>
        </Form.Group>
        
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          WEIGHT OF AGGREGATE (gms) - C 
          </p>
          
       
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group> <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
        
     
      </Row>

      <Row className="mb-8">
        <Form.Group as={Col} controlId="formGridEmail">
          <p> VOLUME OF CYLINDERS - D
          </p>
        
         
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
        <p>DRY LOOSE BULK DENSITY  C/D*100
            </p>
          
        
          
         
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

      <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      <h1 className="flex justify-center">20 MM </h1>
      <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>

      <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Test Details </Form.Label>
          
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Sample 1</Form.Label>
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Sample 2</Form.Label>
         
        </Form.Group>
      
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Average</Form.Label>
        </Form.Group>
        
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          WEIGHT OF AGGREGATE (gms)- C 
          </p>
          
       
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group> <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
        
     
      </Row>

      <Row className="mb-8">
        <Form.Group as={Col} controlId="formGridEmail">
          <p> VOLUME OF CYLINDERS - D 
          </p>
        
         
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
        <p>DRY LOOSE BULK DENSITY  C/D*100
            </p>
          
        
          
         
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
      
      <Form.Group >
       
      
         
        </Form.Group>
        

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

export default Form9;