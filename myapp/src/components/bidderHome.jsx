import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setcrops } from "../action/crop_action";

const { useEffect } = React;

const axios = require("axios");

function BidderHome() {
  const crops = useSelector((state) => state.crop.crops);
  const dispatch = useDispatch();

  const getCropList = async () => {
    const { data } = await axios.get("http://localhost:8081/api/crop/view");
    console.log(data)

    dispatch(setcrops(data));
  };

  useEffect(() => {
    getCropList();
  }, []);
  console.log(crops);

  return (
    <Container style={{ marginTop: "51px" }}>
      <Row xs={1} md={3} className="g-4">
        {crops.length &&
          crops.map((crop) => (
            <Col key={crop.cropId}>
              <Card>
                <Card.Body>
                  <Card.Title>{crop.cropName}</Card.Title>
                  <Card.Text>Rs.{crop.basePricePerQuintal}</Card.Text>
                  <Card.Text>Quantity:{crop.quantity}</Card.Text>
                  <Button variant="primary">BID</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
    
  );
}

export default BidderHome;

