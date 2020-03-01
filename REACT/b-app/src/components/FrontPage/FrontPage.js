import React, { Component } from "react";
// import axios from 'axios';
import logo from './Front Icon.png';
import './FrontPage.css';
import GraphLine from '../Graphs/GraphLine';
import HorizontalLine from '../Graphs/HorizontalLine';
import Doughnut from '../Graphs/Doughnut';

export default class HomePage extends Component {
    

    render() {
        return (
            <div>
                <header class="header">
          <nav class="navbar navbar-toggleable-md navbar-light pt-0 pb-0 ">

            {/* <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button> */}

          {/* <div class="float-left"> <a href="#" class="button-left"><span class="fa fa-fw fa-bars "></span></a> </div> */}
            <h3>Welcome Dr. Who</h3>
            <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown messages-menu">
                  <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-bell-o"></i>
                    <span class="label label-success bg-success">10</span>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <ul class="dropdown-menu-over list-unstyled">
                      <li class="header-ul text-center">You have 4 messages</li>
                      <li>
                        {/* <!-- inner menu: contains the actual data --> */}
                        <ul class="menu list-unstyled">
                          <li>
                              {/* <!-- start message --> */}
                          <a href="#">
                            <div class="pull-left">
                              <img src="http://via.placeholder.com/160x160" class="rounded-circle  " alt="User Image"/>
                            </div>
                            <h4>
                            {/* Support Team */}
                            <small><i class="fa fa-clock-o"></i> 5 mins</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                          </a>
                        </li>
                        {/* <!-- end message --> */}
                        <li>
                          <a href="#">
                            <div class="pull-left">
                              <img src="http://via.placeholder.com/160x160" class="rounded-circle " alt="User Image"/>
                            </div>
                            <h4>
                            AdminLTE Design Team
                            <small><i class="fa fa-clock-o"></i> 2 hours</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div class="pull-left">
                              <img src="http://via.placeholder.com/160x160" class="rounded-circle " alt="User Image"/>
                            </div>
                            <h4>
                            Developers
                            <small><i class="fa fa-clock-o"></i> Today</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div class="pull-left">
                              <img src="http://via.placeholder.com/160x160" class="rounded-circle " alt="User Image"/>
                            </div>
                            <h4>
                            Sales Department
                            <small><i class="fa fa-clock-o"></i> Yesterday</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div class="pull-left">
                              <img src="http://via.placeholder.com/160x160" class="rounded-circle " alt="User Image"/>
                            </div>
                            <h4>
                            Reviewers
                            <small><i class="fa fa-clock-o"></i> 2 days</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="footer-ul text-center"><a href="#">See All Messages</a></li>
                  </ul>
                </div>
              </li>

              <li class="nav-item dropdown notifications-menu">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-envelope-o"></i>
                  <span class="label label-warning bg-warning">10</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <ul class="dropdown-menu-over list-unstyled">
                    <li class="header-ul text-center">You have 10 notifications</li>
                    <li>
                      {/* <!-- inner menu: contains the actual data --> */}
                      <ul class="menu list-unstyled">
                        <li>
                          <a href="#">
                            <i class="fa fa-users text-aqua"></i> 5 new members joined today
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                            page and may cause design problems
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-users text-red"></i> 5 new members joined
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-shopping-cart text-green"></i> 25 sales made
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-user text-red"></i> You changed your username
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="footer-ul text-center"><a href="#">View all</a></li>
                  </ul>
                </div>
              </li>
              
              <li class="nav-item dropdown  user-menu">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={logo} class="user-image" alt="User Image" />
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div class="main">
        <aside>
          <div class="sidebar left ">
            {/* <div class="user-panel">
              <div class="pull-left image">
                <img src="http://via.placeholder.com/160x160" class="rounded-circle" alt="User Image"/>
              </div>
              <div class="pull-left info">
                <p>bootstrap develop</p>
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
              </div>
            </div> */}

            <ul class="list-sidebar bg-defoult">

            <li> <a href="/"><i class="fa fa-diamond"></i> 
            <span class="nav-label">Dashboard</span></a> </li>


              <li> <a href="#" data-toggle="collapse" data-target="#patient" class="collapsed active" > <i class="fa fa-user"></i> 
              <span class="nav-label"> Patient </span> <span class="fa fa-chevron-left pull-right"></span> </a>
              <ul class="sub-menu collapse" id="patient">
                <li class="active"><a href="#">Add Patient</a></li>
                <li><a href="#">Search Patient</a></li>
              </ul>
            </li>
            
            <li> <a href="#" data-toggle="collapse" data-target="#Appointments" class="collapsed active" > 
            <i class="fa fa-book"></i> <span class="nav-label">Appointments</span> <span class="fa fa-chevron-left pull-right"></span> </a>
            <ul class="sub-menu collapse" id="appointments">
              <li class="active"><a href="#">Add Appointments</a></li>
              <li><a href="#">Search Appointments</a></li>
            </ul>
          </li>

          <li> <a href="#"><i class="fa fa-laptop"></i> 
          <span class="nav-label">Report</span></a> </li>

          <li> 
          
        </li>

        

      {/* <li> <a href=""><i class="fa fa-pie-chart"></i> <span class="nav-label">Metrics</span> </a></li>
      <li> <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">Other Pages</span></a> </li>
      <li> <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">Other Pages</span></a> </li>
      <li> <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">Other Pages</span></a> </li>
      <li> <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">Other Pages</span></a> </li>
      <li> <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">Other Pages</span></a> </li> */}
    </ul>
    
    </div>
    
    </aside>
    
    </div>
    <GraphLine/>
    <HorizontalLine/>
    <Doughnut/>
                                </div>
                                );
                            }
                        
}