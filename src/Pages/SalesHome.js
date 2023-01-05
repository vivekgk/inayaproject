import React, { useState } from 'react';
import Menu from './Data';
import Button from 'react-bootstrap/Button';
const SalesHome = () => {
    const [homeDet, setHomeDet] = useState(Menu);

    const filterItem = (categItem) => {
        const updateItems = Menu.filter((curElem, index) => {
            return curElem.category === categItem;
        })
        setHomeDet(updateItems);
    }

    return (
        <React.Fragment>
            <h1>Seach Your Favoutite Place</h1>
            <hr />
            <div className='btngroup'>
                <Button variant="primary" style={{ backgroundColor: "#F94B4B", border: "none" }} onClick={() => filterItem("Chennai")}>Chennai</Button>
                <Button variant="secondary" style={{ backgroundColor: "#F94B4B", border: "none" }} onClick={() => filterItem("Bangalore")}>Bangalore</Button>
                <Button variant="success" style={{ backgroundColor: "#F94B4B", border: "none" }} onClick={() => filterItem("Andhra")}>Andhra</Button>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="service_grid">
                        {
                            homeDet.map((elem) => {
                                const { id, images, baths, bed, price } = elem;
                                return (
                                    <div className="col-md-4  col-sm-12 service_box">
                                        <img src={images} className="img-responsive" alt="" />
                                        <div class="boxed_mini_details clearfix">
                                            <span class="area first"><strong>Garage</strong><i class="fa fa-plane icon1"></i>
                                                2</span>
                                            <span class="status"><strong>Baths</strong><i class="fa fa-retweet icon1"> </i>
                                                2</span>
                                            <span class="bedrooms last"><strong>Beds</strong><i class="fa fa-building-o icon1"></i>
                                                2</span>
                                        </div>
                                    </div>
                                )

                            })
                        }


                        <div className="clearfix"> </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    );
}

export default SalesHome;
