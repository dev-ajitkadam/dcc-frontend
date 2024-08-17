
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Form7() {
  return (
    
    <div className="flx">
      

    <Form className="bg_color p-6 shadow-inner shadow-lg">


    <Form.Group as={Col} controlId="formGridEmail" className="flex justify-center text-2xl">
          <p>DETERMINATION OF FINENESS OF CEMENT 
IS 4031 (Part 1)  
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
          <Form.Label>Make a Cement</Form.Label>
          <Form.Control type=":" placeholder="" />
        </Form.Group>

        
      </Row>

     
      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        


      <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Determination </Form.Label>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Units</Form.Label>
         
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Sample 1</Form.Label>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Sample 2</Form.Label>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Sample 3</Form.Label>
        </Form.Group>
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
          Wt. of CeTent taken (gms)  
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
          <p>Percentage of Passing
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>B </p>
         
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
        <p>WL. of Cement
            retained on 90-micron seive (gms) 
            </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>C</p>
          
         
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
      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

      <Row className="mb-10">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>Average % of Finess of Cernent
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>C'B/100 </p>
         
          </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <Row className="mb-10">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>Specified imit (10%) 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>%</p>

         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group> 
      </Row>

      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      <h1 className="flex justify-center">OTHER OBSERVATION </h1>


      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
     


      <Row className="mb-10">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>1) VEHICLE  NO:
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <p>4)SOURCE:
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
      <Row className="mb-10">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>2) OPCI PPC 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <p>5)W/M/Y
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
      <Row className="mb-10">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>3) GRADE 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <p>6)REMARK 
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

export default Form7;