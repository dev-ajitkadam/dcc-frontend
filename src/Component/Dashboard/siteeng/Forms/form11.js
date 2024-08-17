
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Form11() {
  return (
    
    <div className="flx">
      

    <Form className=" p-6 shadow-2xl">


    <Form.Group as={Col} controlId="formGridEmail" className="flex justify-center text-2xl">
          <p>Cube Test Witness Form 
          </p>
          
        </Form.Group>
        <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>




      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Plant Name</Form.Label>
          <Form.Control type="text" placeholder="" />
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>No</Form.Label>
          <Form.Control type="integer" />
        </Form.Group>

        
      </Row>
      <Row className='mb-3'>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Party Name</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date Of Casting</Form.Label>
          <Form.Control type="date" placeholder="" />
        </Form.Group>
        
      </Row>
      
      <Row className='mb-2'>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Grade Of Concrete</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>DCC Sr.No.</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date Of Testing</Form.Label>
          <Form.Control type="date" placeholder="" />
        </Form.Group>
        
        
      </Row>
     

        <Row>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Days:</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Remark:</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        </Row>

      
      <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      
          <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        


      <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Sr.No. </Form.Label>
          
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Weight (gm)</Form.Label>
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Size (mm)</Form.Label>
         
        </Form.Group>
      
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Compressive Load (kn)</Form.Label>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Compressive Strength (N/mm^2)</Form.Label>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Average Strength (N/mm^2)</Form.Label>
        </Form.Group>
        
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
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
      <h1 className="flex justify-center">Witnessed By </h1>
      <hr class="h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>
       
      

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
         Name:
          </p>
          
       
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
        </Form.Group>
         
     
      </Row>

      <Row className="mb-8">
        <Form.Group as={Col} controlId="formGridEmail">
          <p> Designation:
          </p>
        
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         </Form.Group>
        
      </Row>

      <Row className="mb-9">
        <Form.Group as={Col} controlId="formGridEmail">
        <p>Contact No:
            </p>
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
        </Form.Group>
          </Row>

          <Row className="mb-9">
        <Form.Group as={Col} controlId="formGridEmail">
        <p>Email ID:
            </p>
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
        </Form.Group>

          </Row>

            <div>
          <Row className="mb-9">
        <Form.Group as={Col} controlId="formGridEmail">
        <p>Date:
            </p>
             
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="date" />
        
        </Form.Group>
       
          </Row>
          </div>



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

export default Form11;