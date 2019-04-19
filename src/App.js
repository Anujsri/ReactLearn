import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            slideIndex: 0
        }
        // var slideIndex = 0;
        this.showSlides = this.showSlides.bind(this);
    };
    showNews() {
        var d = document.getElementById('education');
        var d1 = document.getElementById('home');
        var d2 = document.getElementById('contact');
        var d3 = document.getElementById('about');
        d.style.display = 'block';
        d1.style.display = 'none';
        d2.style.display = 'none';
        d3.style.display = 'none';
    }
    showHome() {
        var d = document.getElementById('education');
        var d1 = document.getElementById('home');
        var d2 = document.getElementById('contact');
        var d3 = document.getElementById('about');
        d.style.display = 'none';
        d2.style.display = 'none';
        d3.style.display = 'none';
        d1.style.display = 'block';
    }
    showContact() {
        var d = document.getElementById('education');
        var d1 = document.getElementById('home');
        var d2 = document.getElementById('contact');
        var d3 = document.getElementById('about');
        d.style.display = 'none';
        d2.style.display = 'block';
        d3.style.display = 'none';
        d1.style.display = 'none';
    }
    showAbout() {
        var d = document.getElementById('education');
        var d1 = document.getElementById('home');
        var d2 = document.getElementById('contact');
        var d3 = document.getElementById('about');
        d.style.display = 'none';
        d2.style.display = 'none';
        d3.style.display = 'block';
        d1.style.display = 'none';
    }
    componentDidMount() {
        window.addEventListener('load', this.showSlides);
    }
    showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        this.state.slideIndex++;
        if (this.state.slideIndex > slides.length) { this.state.slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activea", "");
        }
        slides[this.state.slideIndex - 1].style.display = "block";
        dots[this.state.slideIndex - 1].className += " activea";
        setTimeout(this.showSlides, 2500); // Change image every 2 seconds
    };
    render() {
        var abc = {
            textAlign: 'center'
        }
        var cd = {
            width: '100%',
        }

        return (
            <div>
                <ul className="sidenav">
                    <li><a className="activea"  href="#home" onClick={this.showHome}><i className="fas fa-home"></i> Home</a></li>
                    <li><a href="#about" onClick={this.showAbout}><i className="fas fa-id-card-alt"></i> About</a></li>
                    <li><a href="#education" onClick={this.showNews}><i class="fas fa-user-graduate"></i> Education</a></li>
                    <li><a href="#contact" onClick={this.showContact}><span className= "glyphicon glyphicon-phone-alt"></span> Contact</a></li>
                    
                </ul>
                <div className="content">
                    <div className="slideshow-container" id="home">
                        <div className="mySlides fadea">
                          <div className="numbertext">1 / 3</div>
                          <img src={require('./second.jpg')} style={cd}/>
                          <div className="text">Caption Text</div>
                        </div>
                        <div className="mySlides fadea">
                            <div className="numbertext">2 / 3</div>
                            <img src={require('./third.jpg')} style={cd}/>
                            <div className="text">Caption Two</div>
                        </div>
                        <div className="mySlides fadea">
                            <div className="numbertext">3 / 3</div>
                            <img src={require('./fourth.jpg')} style={cd}/>
                            <div className="text">Caption Three</div>
                        </div>
                    </div>
                    <div style={abc}>
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                    </div>
                    <div id="education">
                        <div className="row">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title"><center><i class="fas fa-user-graduate"></i> Education & Skills</center></h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-xs-6 col-md-4">
                                        <div className="thumbnail">
                                            <img src={require('./edu.svg')} className="img-circle"/>
                                        </div>
                                        <hr/>
                                        <div className="chip">NodeJs</div> <div className="chip">Express.js</div><hr/>
                                        <div className="chip">MongoDB</div> <div className="chip">JavaScript</div> <hr/>
                                        <div className="chip">Meteor.js</div> <div className="chip">MySql</div> <hr/>
                                    </div>
                                    <div className="col-xs-6 col-md-8">
                                        <h3 ><u>I. UnderGraduate</u></h3>
                                        <div className = "well">
                                        <h4 >Indian Institute Of Information Technology Design & Manufacturing Jabalpur 
                                        Dumna Road Jabalpur M.P. India 482005.</h4>
                                        <h5><code>Computer Science & Engineering</code></h5>
                                        </div>
                                        
                                         <h3><u>II. Intermediate</u></h3>
                                         <div className = "well">
                                        <h4 >Seth Motilal Kheria Snatan Dharma Inter College Kanpur 
                                         U.P. India 208002.</h4>
                                        <h5><i>Physics, Chemistry, Mathematics</i></h5>
                                        </div>
                                        <h3><u>III. High School</u></h3>
                                        <div className = "well">
                                        <h4>Zila Panchayat Inter College Aurangabad Lakhimpur Kheri U.P. India 261505.</h4>
                                        <h5><i>Science, Mathematics, English, Social Science, Art & Hindi</i></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                            <div className="row">
                              <div className = "col-md-10 col-md-offset-1">
                                <div className="col-md-4 col-sm-4">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-info"><center><i class="fas fa-laptop-code"></i> Front End</center></a>
                                        <a href="#" class="list-group-item">BootStrap</a>
                                        <a href="#" class="list-group-item">JavaScript</a>
                                        <a href="#" class="list-group-item">ReactJs</a>
                                        <a href="#" class="list-group-item">ChartJs</a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-danger"><center><i class="fas fa-database"></i> BackEnd</center></a>
                                        <a href="#" class="list-group-item">NodeJs</a>
                                        <a href="#" class="list-group-item">Machine Learning</a>
                                        <a href="#" class="list-group-item">REST API</a>
                                        <a href="#" class="list-group-item">MongoDB</a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-success"><center><i class="fas fa-code"></i> Programming Language</center></a>
                                        <a href="#" class="list-group-item">C</a>
                                        <a href="#" class="list-group-item">Java</a>
                                        <a href="#" class="list-group-item">JavaScript</a>
                                        <a href="#" class="list-group-item">NodeJs</a>
                                    </div>
                                </div>
                              </div> 
                          </div>
                      </div>
                    <div id="contact">
                        <div className="row">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title"><center><i className="fas fa-home"></i> Address</center></h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-xs-6 col-md-4">
                                        <div className="thumbnail">
                                            <img src={require('./home.jpg')} className="img-circle"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-8">
                                        <h3><u>I. Current Address</u></h3>
                                        <h5 className = "well">Room No. F-320 Hall-01 ,Indian Institute Of Information Technology Design & Manufacturing Jabalpur 
                                        Dumna Road Jabalpur M.P. India 482005.</h5>
                                        <hr/>
                                         <h3 ><u>II. Paramanent Address</u></h3>
                                        <h5 className = "well">Village and Post Aurangabad Lakhimpur Kheri U.P. India 261505.</h5>
                                        <hr/>
                                        <h3><u>III. Web Address</u></h3>
                                        <h5 className = "well"><p><i class="fas fa-envelope"></i> anuj96sri@gmail.com</p>
                                          <p><i class="fas fa-envelope"></i> anujsrivastava@iiitdmj.ac.in</p>
                                          <p><i class="fas fa-phone-volume"></i> 8827263684</p>
                                          <p><i class="fas fa-phone-volume"></i> 6386272001</p>
                                          <p><i class="fab fa-skype"></i> anuj96sri@gmail.com</p>
                                        </h5>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="about">
                        <div className="row">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title"><center><i className="fas fa-id-card-alt"></i> About Me</center></h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-xs-6 col-md-4">
                                        <div className="thumbnail">
                                            <img src={require('./an.jpg')} className="img-circle"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-8">
                                        <h4>Final Year CSE Student at Indian Institute Of Information Technology Design & Manufacturing Jabalpur 
                                        Dumna Road Jabalpur M.P. India 482005.</h4>
                                        <h5>Awarded By <i>"Institute of National Importance" </i>  by MHRD India.</h5>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="list-group">
                                                    <a href="#" className="list-group-item active"><center>Parents</center></a>
                                                    <a href="#" className="list-group-item">
                                                        <div className="row"><div className="col-sm-6">Mr. Rakesh Kumar</div><div className="col-sm-6">Guddi Devi</div></div>
                                                    </a>
                                                    <a href="#" className="list-group-item list-group-item-info"><center>Siblings</center></a>
                                                    <a href="#" className="list-group-item">
                                                        <div className="row"><div className="col-sm-6">Mr. Ankit Srivastava</div><div className="col-sm-6"><i class="fas fa-user-graduate"></i> MAster In Arts</div></div>
                                                    </a>
                                                    <a href="#" className="list-group-item">
                                                        <div className="row"><div className="col-sm-6">Mr. DeepChandra Srivastava</div><div className="col-sm-6"><i class="fas fa-user-graduate"></i> B.Tech(ME)</div></div>
                                                    </a>
                                                    <a href="#" className="list-group-item">
                                                        <div className="row"><div className="col-sm-6">Mr. Somendra Srivastava</div><div className="col-sm-6"><i class="fas fa-user-graduate"></i> Bacholar Of Science</div></div>
                                                    </a>
                                                    <a href="#" className="list-group-item">
                                                        <div className="row"><div className="col-sm-6">Mr. Rajan Srivastava</div><div className="col-sm-6"><i class="fas fa-user-graduate"></i> Bacholar Of Science</div></div>
                                                    </a>
                                                    <a href="#" className="list-group-item">
                                                        <div className="row"><div className="col-sm-6">Ms. Laxmi Srivastava</div><div className="col-sm-6"><i class="fas fa-user-graduate"></i> Bacholar Of Arts</div></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <img src={require('./users.png')}/>
                                                <hr/>
                                                <h4>Family BackGround</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="contain">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col">
                            <h1><a href="https://www.linkedin.com/in/anuj-srivastava-5ba457137/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></h1>
                        </div>
                        <div className="col">
                            <h1><a href="https://github.com/Anujsri" target="_blank"><i class="fab fa-github"></i> GitHub</a></h1>
                        </div>
                        <div className="col social">
                            <h1><a href="https://www.facebook.com/anuj.srivastava.71404" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></h1>
                        </div>
                        <div className="clearfixa"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;