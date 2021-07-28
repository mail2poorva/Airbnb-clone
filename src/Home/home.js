import React from "react";
import "./CSS/home.css";
import Banner from "./Banner";
import Card from "./Card";
function home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Online Experiences"
          description="Unique Activities we can do together,led by a world of hosts"
        />
        <Card
          src="https://images.unsplash.com/photo-1574653340053-2a0b120429a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://images.unsplash.com/photo-1563019880-9b2ea5d89a12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          title="Entire Homes"
          description="Comfortable private places,with rooms for friends or family."
        />
      </div>
      <div className="home_section">
        <Card
          src="https://images.unsplash.com/photo-1606021511779-aae22948af3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="3 Bedroom FLat in Bournemouth"
          description="Superhost with a stunning view of beachside in Sunny Bournemouth"
          price="$130/night"
        />

        <Card
          src="https://images.unsplash.com/photo-1560348113-efa5a5d23820?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHJlc3RhdXJhbnR8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$350/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1532360007308-dae5348c77c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHJlc3RhdXJhbnR8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="1 Bedroom Apartment"
          description="Superhost with great amenties and a fabulous shopping complex nearby"
          price="$70/night"
        />
      </div>
    </div>
  );
}

export default home;
