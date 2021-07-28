import React from "react";
import "./CSS/SearchPage.css";
import Button from "@material-ui/core/Button";
import SearchResult from "./SearchResult";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage-info">
        <p>62 stays &#8231; 26 august to 30 august &#8231; 2guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        location="Private room in the center of London"
        title="Stay at this spacious Edwardian House"
        description="1guest &#8231; 1 bedroom &#8231; 1 bed &#8231; 1.5 shared bathrooms &#8231; Wifi &#8231; Kitchen &#8231; Free Parking &#8231; Washing Machine "
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Private room incenter of London"
        title="Stay at this spaciousEdwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 sharedbthrooms Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="£30 / night"
        total="$117 total"
      />

      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room incenter of London"
        title="Stay at this spaciousEdwardian House"
        description="1 guest 1bedroom 1 bed 1.5 sharedbthrooms Wifi Kitchen .Free parking Washing Machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />

      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Private room incenter of London"
        title="Independant luxurystudio apartment"
        description="2_guestbedroom1 bed.31.5 sharedbthrooms Wifi Kitchen"
        star={4.3}
        price="£40/ night"
        total="£157 total"
      />

      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Private roomcenter of London"
        title="London StudioApartments"
        description="4 guest 4bedroom 4 bed 2 bathrooms. Free parking. WashingMachine"
        star={3.8}
        price="£35 / night"
        total="£207 total"
      />

      <SearchResult
        img="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Private room incenter of London"
        title="30 mins to OxfordStreet, Excel London"
        description="1 guest . 1bedroom 1 bed 1.5 sharedbthrooms • Wifi Kitchen.Free parking Washing Machine"
        star={4.1}
        price="£55 / night"
        total="£320 total"
      />

      <SearchResult
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250, h_1500, c_limit/airbnb-plus-london.jpg"
        location="Private room incenter of London"
        title="Spacious PeacefulModern Bedroom"
        description="3 guest 1 bedroom 1 bed 1.5 sharedbthrooms Wifi Free parkingDry Cleaning"
        star={5.0}
        price="£60/ night"
        total="£450 total"
      />

      <SearchResult
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest 1 bedroom 1 bed 1.5 sharedbthrooms Wifi. WashingMachine"
        star={4.23}
        price="£65 / night"
        total="£480 total"
      />

      <SearchResult
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Private room incenter of London"
        title="5 Star Luxury Apartment"
        description="3 guest  1bedroom 1 bed 1.5 sharedbthrooms Wifi Kitchen.Free parking Washing Machine"
        star={3.85}
        price="£90/ night"
        total="£650 total"
      />
    </div>
  );
}

export default SearchPage;
