import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://media.nationalgeographic.org/assets/photos/120/983/091a0e2f-b93d-481b-9a60-db520c87ec33.jpg"
                width="100%"
                height="500px"
                alt="crop"
              />
              <div class="container">
                <div class="carousel-caption text-left">
                  <h1>FARMING</h1>
                  <p>
                  <b>Farming is growing crops or keeping animals by people for food and raw materials.</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.jeffersoncountyhealthcenter.org/filesimages/whole-grains-1170x480.jpg"
                width="100%"
                height="500px"
                alt="crop"
              />
              <div class="container">
                <div class="carousel-caption">
                  <h1 >CROPS</h1>
                  <p >
                  <b>Crops are plants, or products made from plants, that are grown and harvested for subsistence or for profit.
                  </b></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://farmbasket.co/wp-content/uploads/2018/12/Carrot-and-Beetroot-1.jpg"
                width="100%"
                height="500px"
                alt="crop"
              />
              <div class="container">
                <div class="carousel-caption">
                <h1>ORGANIC FARMING</h1>
                  <p>
                  <b>Organic farming is a technique, which involves the cultivation of plants and rearing of animals in natural ways.
                  </b></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/02/04/786535-msp-istock-020419.jpg"
                width="100%"
                height="500px"
                alt="crop"
              />
              <div class="container">
                <div class="carousel-caption text-right">
                <h1 style={{color:"black"}}>BID</h1>
                  <p style={{color:"black"}} >
                  <b> Bid by a individual buyer to the farmer, He accept and sells the crop.
                  </b></p>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>


        <hr class="featurette-divider"></hr>
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">
                Farming.{" "}
                <span class="text-muted">Grow naturally, Live natural.</span>
              </h2>
              <p class="lead">
              Farming is growing crops or keeping animals by people for food and raw materials. 
              Farming is a part of agriculture.
              People may have started farming because the weather and soil began to change. 
              Farming can feed many more people than hunter-gatherers can feed on the same amount of land.
              Farming are three types:-
              <ul>
              <li>Subsistence farming</li>
              <li>Commercial Farming</li>
              <li>Home Farming</li>
              </ul>
              </p>
            </div>
            <div class="col-md-5">
            <img src="https://m.economictimes.com/thumb/msid-73323235,width-1200,height-900,resizemode-4,imgsize-1334288/farmers-scheme-istock.jpg"
                    class="figure-img img-fluid rounded" alt="crop"/>
            </div>
          </div>

        <hr class="featurette-divider"></hr>
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">
                Crops.{" "}
                <span class="text-muted">Crop From Land, The Only Source!.</span>
              </h2>
              <p class="lead">
              Crop is a group of cultivated plant or agricultural produce used for eating and feeding livestock mainly like grains, fruits, vegetables etc.
              The major crops can all be divided into four main categories depending on their usage.
              <ul>
              <li>Food Crops (Wheat, Maize, Rice, Millets and Pulses etc.)</li>
              <li>Cash Crops (Sugarcane, Tobacco, Cotton, Jute and Oilseeds etc.)</li>
              <li>Plantation Crops (Coffee, Coconut, Tea, and Rubber etc.)</li>
              <li>Horticulture crops (Fruits and Vegetables)</li></ul>
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img src="http://setopati.net/wp-content/uploads/2018/07/Food-Grains.jpg" class="figure-img img-fluid rounded" alt="crop"/>
            </div>
          </div>

        <hr class="featurette-divider"></hr>
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">
                Organic Farming. <span class="text-muted">Don't Panic, It's Organic.</span>
              </h2>
              <p class="lead">
              Organic farming can be defined as an agricultural process that uses biological fertilisers and pest control acquired from animal or plant waste. 
              Organic farming was actually initiated as an answer to the environmental sufferings caused by the use of chemical pesticides and synthetic fertilisers. 
              In other words, organic farming is a new system of farming or agriculture that repairs, maintains, and improves the ecological balance.
              Organic Farming types:-
              <ul>
                  <li>Pure organic farming</li>
                  <li>Integrated organic farming</li>
              </ul>
              </p>
            </div>
            <div class="col-md-5">
              <img src="https://cdn.shopify.com/s/files/1/2598/1404/articles/photo-1530836369250-ef72a3f5cda8_1100x.jpeg?v=1599297512"
              class="figure-img img-fluid rounded" alt="crop"/>
            </div>
          </div>
        <hr class="featurette-divider"></hr>
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">
                Bid.{" "}
                <span class="text-muted">The correct bidder wins it all.</span>
              </h2>
              <p class="lead">
              Bidding is used to determine the cost or value of something.
              Bidding can be performed by a person under influence of a product or service based on the context of the situation.
              The crop bidding for farmers to sell their crops at a good price.
              The farmer will sell the crop to the person with the highest bid amount.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img src="https://www.thehindubusinessline.com/portfolio/commodity-analysis/qtqw5b/article25027854.ece/ALTERNATES/LANDSCAPE_355/PO24Rupeeplantgrowing" class="figure-img img-fluid rounded" alt="crop"/>
            </div>
          </div>
          <hr class="featurette-divider"></hr>
      </div>
    );
  }
}
export default Home;
