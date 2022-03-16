import React from "react";
import ".//workPopUp.scss";
var cards = [
  {
    title: "Mountain View",
    copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
    button: "View Trips",
  },
  {
    title: "To The Beach",
    copy: "Plan your next beach trip with these fabulous destinations",
    button: "View Trips",
  },
  {
    title: "Desert Destinations",
    copy: "It's the desert you've always dreamed of",
    button: "Book Now",
  },
  {
    title: "Explore The Galaxy",
    copy: "Seriously, straight up, just blast off into outer space today",
    button: "Book Now",
  },
];
export const WorkPopUp = () => {
  return <div class="row">
  <div class="example-1 card">
    <div class="wrapper">
      <div class="date">
        <span class="day">12</span>
        <span class="month">Aug</span>
        <span class="year">2016</span>
      </div>
      <div class="data">
        <div class="content">
          <span class="author">Jane Doe</span>
          <h1 class="title"><a href="#">Boxing icon has the will for a couple more fights</a></h1>
          <p class="text">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
          <label for="show-menu" class="menu-button"><span></span></label>
        </div>
        <input type="checkbox" id="show-menu" />
        <ul class="menu-content">
          <li>
            <a href="#" class="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" class="fa fa-heart-o"><span>47</span></a></li>
          <li><a href="#" class="fa fa-comment-o"><span>8</span></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="example-2 card">
    <div class="wrapper">
      <div class="header">
        <div class="date">
          <span class="day">12</span>
          <span class="month">Aug</span>
          <span class="year">2016</span>
        </div>
        <ul class="menu-content">
          <li>
            <a href="#" class="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
          <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
        </ul>
      </div>
      <div class="data">
        <div class="content">
          <span class="author">Jane Doe</span>
          <h1 class="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
          <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
          <a href="#" class="button">Read more</a>
        </div>
      </div>
    </div>
  </div>
</div>
};
