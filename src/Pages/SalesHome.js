import React, { useState } from 'react';
import Menu from './Data';
import Button from 'react-bootstrap/Button';
import Forms from "../components/Forms";
import Popup from "../components/Popup"
const SalesHome = () => {
    const [homeDet, setHomeDet] = useState(Menu);

    const filterItem = (categItem) => {
        const updateItems = Menu.filter((curElem, index) => {
            return curElem.category === categItem;
        })
        setHomeDet(updateItems);
    }

    function ModelOpen(){
        document.getElementById('isVisible').style.display='block';
    
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
            <div className='container'>
                <div className='row'>
                    <div className="service_grid">
                        {
                            homeDet.map((elem) => {
                                const { id, images, type, bed, Place } = elem;
                                return (  
                                    <div className='col-md-3 col-lg-4 col-sm-12 '>
                                    <div className="card" style={{width:"20rem", border:"3px solid #00000014", marginTop:15 }}>
                                      <img src={images} className="card-img-top" alt="..." style={{height:"10rem" }}/>
                                      <div className="card-body">
                                        <h5 className="card-title">{type}</h5>
                                        <p className="card-text">{bed}</p>
                                        <p className="card-text">{Place}</p>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                        <button type="button" class="btn btn-danger">Ready to Occupy</button>
                                        {/* <button type="button" class="btn btn-warning" onClick={ModelOpen}>Click Price</button> */}
                                        <Popup />
                                       
                                        </div>
                                      </div>
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
