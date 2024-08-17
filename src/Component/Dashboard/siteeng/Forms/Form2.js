import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import css  from '../form.css'

function Form2() {
  return (
    <div className="flx" id="main-form1">
      <Form className="">
        <h3 className="flex justify-center">
          AGGREGATE IMPACT VALUE IS: 2386 (part 5)/383
        </h3>

        <hr class=""></hr>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="Client ID">
            <Form.Label>Client ID</Form.Label>
            <Form.Control type="number" placeholder="Enter id" />
          </Form.Group>

          <Form.Group as={Col} controlId="ClientName">
            <Form.Label>Client Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter client Name"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} controlId="Suplier">
            <Form.Label>Supplier</Form.Label>
            <Form.Control type="Suplier:" placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="date">
            <Form.Label>Date of Testied:</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Row>

        <Row className="mb-5">
          <Form.Group as={Col} controlId="Source">
            <Form.Label>Source </Form.Label>
            <Form.Control type="Source:" placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="Aggregate">
            <Form.Label>Type Of Aggregate:</Form.Label>
            <Form.Control type="Type Of Aggregate:" />
          </Form.Group>
        </Row>
        <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        <Row className="mb-6">
          <Form.Group as={Col} controlId="Description">
            <Form.Label>Description </Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="Units">
            <Form.Label>Units</Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="Test_1">
            <Form.Label>Test 1</Form.Label>
          </Form.Group>
        </Row>

        <Row className="mb-7">
          <Form.Group as={Col} controlId="formGridEmail">
            <p>Weight of oven dry sample (A)</p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <p>gsm</p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="" />
          </Form.Group>
        </Row>

        <Row className="mb-8">
          <Form.Group as={Col} controlId="formGridEmail">
            <p>
              Weight of fracion retained on 2,36 mm IS sieve after Impact test
              (B)
            </p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <p>gsm</p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="" />
          </Form.Group>
        </Row>

        <Row className="mb-9">
          <Form.Group as={Col} controlId="formGridEmail">
            <p>
              Welght of fracion passing 2.36 mm IS sleve after Impacd test (C)
            </p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <p>gms</p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="" />
          </Form.Group>
        </Row>

        <Row className="mb-10">
          <Form.Group as={Col} controlId="formGridEmail">
            <p>Total weighnt of sample after Impact test (8+C)</p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <p>KN</p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="" />
          </Form.Group>
        </Row>

        <Row className="mb-11">
          <Form.Group as={Col} controlId="formGridEmail">
            <p>Impact Value = (C/A) x100</p>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <p>%</p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="" />
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <p>Specified Limits:30% (Max)</p>
        </Form.Group>
        <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        <div className=" flex justify-center">
          <Button type="submit">Submit Record</Button>
        </div>
      </Form>
    </div>
  );
}

export default Form2;
