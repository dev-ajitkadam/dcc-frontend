


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Form4
() {
  return (

    <div className="flx">

      <Form className="bg_color p-6  shadow-2xl">
      <h1 className="flex justify-center">DETERMINATION OF FINENESS OF GGBFS</h1>
                 <h1 className='flex justify-center'>IS 3812 :2013 (PART 1)</h1>
                 <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
                 <h2 className='flex justify-center mt-2'>DATE</h2>

    <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Client ID</Form.Label>
            <Form.Control type="number" placeholder="Enter id" />
          </Form.Group>
        </Row>
        <Row className='mb-4'>
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Client Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Sr.No</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Determination</Form.Label>
           
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label></Form.Label>
          
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Sample 1</Form.Label>
            
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Sample 2</Form.Label>
            
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" className=' display flex'>
            <Form.Label >Sample 3</Form.Label> 
          </Form.Group>
        </Row>
        <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
        
        <Row className="mb-5">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>1</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Wt. of GGBFS taken (gms)</Form.Label>
           
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>A</Form.Label>
          
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" />
            
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" />
            
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" />
          </Form.Group>
        </Row>

        <Row className="mb-6">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>2</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Wt. of GGBFS retained on 45 -micron seive (gms)</Form.Label>
           
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>B</Form.Label>
          
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" /> 
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" />    
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" />
          </Form.Group>
        </Row>

        <Row className="mb-7">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>3</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Percentage of retained</Form.Label>
           
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>C</Form.Label>
          
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" /> 
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" />    
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" />
          </Form.Group>
        </Row>

        <Row className="mb-8">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>4</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Average % offineness of GGBFS</Form.Label>
           
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>C*8/100</Form.Label>
          
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Control type="" placeholder="" /> 
          </Form.Group>

          
        </Row>

        <Row className="mb-9">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>5</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Specifed limit (34%)</Form.Label>
           
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>%</Form.Label>
          
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Control type="" placeholder="" /> 
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Control type="" placeholder="" /> 
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Control type="" placeholder="" /> 
          </Form.Group> 
        </Row>
        <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        <Row className="mb-10">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>1</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>VEHICLE NO</Form.Label>
           
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>4</Form.Label>
          
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>REMARK</Form.Label>
            
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" /> 
            
          </Form.Group>

          
        </Row>

        <Row className="mb-11">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>2</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>GGBFS MAKE</Form.Label>
           
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>5</Form.Label>
          
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" /> 
            
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" /> 
            
          </Form.Group>

          
        </Row>

        <Row className="mb-12">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>3</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>SOURCE</Form.Label>
           
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>6</Form.Label>
          
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" /> 
            
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="" placeholder="" /> 
            
          </Form.Group>
         
        </Row>
        <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        <div className="flex justify-center">
          <Button type="submit" className="btn_primary">
             Submit Record
           </Button>
         </div>

      </Form>
    </div>
  );
  
}

export default Form4;




