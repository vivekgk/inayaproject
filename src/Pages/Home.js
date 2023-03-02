import React,{useEffect} from 'react';
import SalesHome from './SalesHome';
import Forms from '../components/Forms';
import { FaCar } from 'react-icons/fa';
import Popup from '../components/Popup';
const Home = () => {
  // useEffect(()=>{
  //   document.getElementById('isVisible').style.display='block'
  // },[])   
    return (
            <React.Fragment>
               
            {
    !localStorage.getItem('mail') &&  
    <Forms />
            } 
           
            
  <div className="slider">
    <div className="callbacks_container">
      <ul className="rslides" id="slider">
        <li><img src="images/banner.jpg" className="img-responsive" alt />
          <div className="banner_desc">
            <div className="container">
              <h1>FIND YOUR DREAM HOME AT LOW PRICE.</h1>
              <h2>At wisi enim ad minim veniam, quis nostrud.</h2>
            </div>
            <div className="details">
              <div className="container">
                <div className="col-xs-10 dropdown-buttons">
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select id="country" onchange="change_country(this.value)" className="frm-field required">
                        <option value="null">All Locations</option>
                        <option value="null">Chennai</option>
                        <option value="AX">Bangalore</option>
                        <option value="AX">Andhra</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select id="country" onchange="change_country(this.value)" className="frm-field required">
                        <option value="null">All Property types</option>
                        <option value="null">House</option>
                        <option value="AX">Apartment</option>
                        <option value="AX">Premium Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select id="country" onchange="change_country(this.value)" className="frm-field required">
                        <option value="null">All contracts</option>
                        <option value="null">Sale</option>
                        <option value="AX">Rent</option>
                        <option value="AX">Sold</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-xs-2 submit_button">
                  <form>
                    <input type="submit" defaultValue="Search" />
                  </form>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </li>
        <li><img src="images/banner1.jpg" className="img-responsive" alt />
          <div className="banner_desc">
            <div className="container">
              <h1>Est notare quam littera gothica, quam nunc.</h1>
              <h2>At wisi enim ad minim veniam, quis nostrud.</h2>
            </div>
            <div className="details">
              <div className="container">
                <div className="col-xs-10 dropdown-buttons">
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select id="country" onchange="change_country(this.value)" className="frm-field required">
                        <option value="null">All Locations</option>
                        <option value="null">Business</option>
                        <option value="AX">First Class</option>
                        <option value="AX">Premium Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select id="country" onchange="change_country(this.value)" className="frm-field required">
                        <option value="null">All Property types</option>
                        <option value="null">House</option>
                        <option value="AX">Apartment</option>
                        <option value="AX">Premium Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select id="country" onchange="change_country(this.value)" className="frm-field required">
                        <option value="null">All contracts</option>
                        <option value="null">Sale</option>
                        <option value="AX">Rent</option>
                        <option value="AX">Sold</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-xs-2 submit_button">
                  <form>
                    <input type="submit" defaultValue="Search" />
                  </form>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </li>
        <li><img src="images/banner2.jpg" className="img-responsive" alt />
          <div className="banner_desc">
            <div className="container">
              <h1>FIND YOUR DREAM HOME AT LOW PRICE</h1>
              <h2>At wisi enim ad minim veniam, quis nostrud.</h2>
            </div>
            <div className="details">
              <div className="container">
                <div className="col-xs-10 dropdown-buttons">
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select id="country" onchange="change_country(this.value)" className="frm-field required">
                        <option value="null">All Locations</option>
                        <option value="null">Business</option>
                        <option value="AX">First Class</option>
                        <option value="AX">Premium Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select id="country" onchange="change_country(this.value)" className="frm-field required">
                        <option value="null">All Property types</option>
                        <option value="null">House</option>
                        <option value="AX">Apartment</option>
                        <option value="AX">Premium Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select id="country" onchange="change_country(this.value)" className="frm-field required">
                        <option value="null">All contracts</option>
                        <option value="null">Sale</option>
                        <option value="AX">Rent</option>
                        <option value="AX">Sold</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-xs-2 submit_button">
                  <form>
                    <input type="submit" defaultValue="Search" />
                  </form>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  {/* <div className='slider1'>
  <img src="images/banner.jpg" className="img-responsive" alt />
  <div className="container">
              <h1>FIND YOUR DREAM HOME AT LOW PRICE.</h1>
              <h2>At wisi enim ad minim veniam, quis nostrud.</h2>
            </div>
  </div> */}
  <div className="smart_details">
    <div className="container">
      <div className="col-md-10 dropdown-buttons">
        <div className="col-md-4 dropdown-button">
          <div className="section_room">
            <select id="country" onchange="change_country(this.value)" className="frm-field required">
              <option value="null">All Locations</option>
              <option value="null">Business</option>
              <option value="AX">First Class</option>
              <option value="AX">Premium Economy</option>
            </select>
          </div>
        </div>
        <div className="col-md-4 dropdown-button">
          <div className="section_room">
            <select id="country" onchange="change_country(this.value)" className="frm-field required">
              <option value="null">All Property types</option>
              <option value="null">House</option>
              <option value="AX">Apartment</option>
              <option value="AX">Premium Economy</option>
            </select>
          </div>
        </div>
        <div className="col-md-4 dropdown-button">
          <div className="section_room">
            <select id="country" onchange="change_country(this.value)" className="frm-field required">
              <option value="null">All contracts</option>
              <option value="null">Sale</option>
              <option value="AX">Rent</option>
              <option value="AX">Sold</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-md-2 submit_button">
        <form>
          <input type="submit" defaultValue="Search" />
        </form>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
  <div className="content_top">
    <div className="container">
      <h4 className="m_3">Most Popular</h4>
      <div className="grid_1">
        <div className="col-md-3 box_1">
          <a href="single.html"><img src="images/vgn_fairmont_1.jpg" className="img-responsive" alt  style={{height:"8rem" }}/></a>
          <div className="box_2">
            <div className="special-wrap">
              {/* <div className="hot_offer"><span className="m_11">Hot Offer</span></div> */}
              <div className="forclosure"><span className="m_12">Special Offer</span></div>
            </div>
          </div>
          <div className="box_3">
            <h3><a href="single.html">VGN FAIRMOUNT - GUNIDY</a></h3>
            <div className="boxed_mini_details clearfix">
              <span className="area first"><strong>Parking</strong>  <FaCar size="16px" color="#999" />
                Yes</span>
              <span className="status"><strong>Baths</strong><i className="fa fa-retweet icon1"> </i>
                2</span>
                <span className="bedrooms last"><strong>Beds</strong><i className="fa fa-building-o icon1"> </i>
                2</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 box_1">
          <a href="single.html"><img src="images/eterna2_1_optimized.jpg" className="img-responsive" alt style={{height:"8rem" }} /></a>
          <div className="box_2">
            <div className="special-wrap">
              {/* <div className="hot_offer"><span className="m_11">Hot Offer</span></div> */}
              <div className="forclosure"><span className="m_12">Special Offer</span></div>
            </div>
          </div>
          <div className="box_3">
            <h3><a href="single.html">ETERNA - KARAPAKKAM</a></h3>
            <div className="boxed_mini_details clearfix">
            <span className="area first"><strong>Parking</strong>  <FaCar size="16px" color="#999" />
                Yes</span>
              <span className="status"><strong>Baths</strong><i className="fa fa-retweet icon1"> </i>
                2</span>
              <span className="bedrooms last"><strong>Beds</strong><i className="fa fa-building-o icon1"> </i>
                2</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 box_1">
          <a href="single.html"><img src="images/Impressions_optimized.jpg" className="img-responsive" alt style={{height:"8rem" }} /></a>
          <div className="box_2">
            <div className="special-wrap">
              {/* <div className="hot_offer"><span className="m_11">Hot Offer</span></div> */}
              <div className="forclosure"><span className="m_12">Special Offer</span></div>
            </div>
          </div>
          <div className="box_3">
            <h3><a href="single.html">KG Impression</a></h3>
            <div className="boxed_mini_details clearfix">
            <span className="area first"><strong>Parking</strong>  <FaCar size="16px" color="#999" />
                Yes</span>
              <span className="status"><strong>Baths</strong><i className="fa fa-retweet icon1"> </i>
                2</span>
              <span className="bedrooms last"><strong>Beds</strong><i className="fa fa-building-o icon1"> </i>
                2</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 box_1">
          <a href="single.html"><img src="images/doshi3.jpg" className="img-responsive" alt style={{height:"8rem" }} /></a>
          <div className="box_2">
            <div className="special-wrap">
              {/* <div className="hot_offer"><span className="m_11">Hot Offer</span></div> */}
              <div className="forclosure"><span className="m_12">Special Offer</span></div>
            </div>
          </div>
          <div className="box_3">
            <h3><a href="single.html">Doshi</a></h3>
            <div className="boxed_mini_details clearfix">
            <span className="area first"><strong>Parking</strong>  <FaCar size="16px" color="#999" />
                Yes</span>
              <span className="status"><strong>Baths</strong><i className="fa fa-retweet icon1"> </i>
                2</span>
              <span className="bedrooms last"><strong>Beds</strong><i className="fa fa-building-o icon1"> </i>
                2</span>
            </div>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      
 <SalesHome />

    </div></div>
    

  </React.Fragment>

    );
}

export default Home;
