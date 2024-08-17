
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Form5() {
  return (
    
    <div className="flx">
      

    <Form className="bg_color p-6 shadow-inner shadow-lg">


    <Form.Group as={Col} controlId="formGridEmail" className="flex justify-center text-2xl">
          <p>INITIAL AND FINAL 
SETTING TIME OF CEMENT 
1S. 4031 (parts 5) 
          </p>
          
        </Form.Group>
        <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>




      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Client ID</Form.Label>
          <Form.Control type="number" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Client Name</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Supplier</Form.Label>
          <Form.Control type="Suplier:" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Date of Testied:</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Row>

      <Row className="mb-5">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Source </Form.Label>
          <Form.Control type="Source:" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Type Of Aggregate:</Form.Label>
          <Form.Control type="Type Of Aggregate:" />
        </Form.Group>
      </Row>
      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        


      <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Description </Form.Label>
          
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
      </Row>

      <Row className="mb-7">
        <Form.Group as={Col} controlId="formGridEmail">
          <p>
            Actual test lemperature 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>gsm</p>
         
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
          <p>Weight of cement(w)
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>gms </p>
         
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
          <p>Consistency(P) 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>%</p>
          
         
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
          <p>Quantity of water to be added = 
           (0.85xPxWt) of cernenty100 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>ml</p>
         
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
          <p>Time of adding water to cement(P) 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>Hours</p>
         
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
          <p>Time at initial setting 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>Hours </p>
         
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
          <p>Total tme taken for initial setting 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>Minutes</p>
         
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
          <p>Time at final setting  
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>Hource</p>
         
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
          <p>Total time taken for final settung 
          </p>
          
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <p>Minutes</p>
         
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control type="" />
         
        </Form.Group>
      </Row>
      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

      <Row className='mb-11'>
      <Form.Group as={Col} controlId="formGridEmail">
          <p>Specified Limits:
          </p>
          
          </Form.Group>
        
        <Form.Group as={Col} controlId="formGridEmail">
          <p>Initial Setting Tirne -30 minutes (Minirnum) 
          </p>
          <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

          <p>Final Seting Time - 600 minutes (Maximum) </p>
          
        </Form.Group>
        

      </Row>
      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

      <a href="#">
        <Button variant="text" className= "flex bg-gray-700 hover:bg-orange-400 text-white " >Submit Record</Button>
      </a>
    </Form>
    </div>
  );
}

export default Form5;