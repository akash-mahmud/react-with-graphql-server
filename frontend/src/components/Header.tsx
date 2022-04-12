import React from 'react'

function Header() {
  return (
      <>
          <div className="bgded overlay" style={{"backgroundImage":"url('./images/backgrounds/01.jpg')"}}> 
 
  <header id="header" className="hoc clear"> 
   
    <div id="logo" className="one_quarter first">
      <h1><a href="index.html">Foxclore</a></h1>
      <p>Placerat sem hendrerit</p>
    </div>
    <div className="three_quarter">
      <ul className="nospace clear">
        <li className="one_third first">
          <div className="block clear"><a href="#"><i className="fas fa-phone"></i></a> <span><strong>Give us a call:</strong> +00 (123) 456 7890</span></div>
        </li>
        <li className="one_third">
          <div className="block clear"><a href="#"><i className="fas fa-envelope"></i></a> <span><strong>Send us a mail:</strong> support@domain.com</span></div>
        </li>
        <li className="one_third">
          <div className="block clear"><a href="#"><i className="fas fa-clock"></i></a> <span><strong> Mon. - Sat.:</strong> 08.00am - 18.00pm</span></div>
        </li>
      </ul>
    </div>
   
  </header>
 
  <section id="navwrapper" className="hoc clear"> 
   
    <nav id="mainav">
      <ul className="clear">
        <li className="active"><a href="index.html">Home</a></li>
        <li><a className="drop" href="#">Pages</a>
          <ul>
            <li><a href="pages/gallery.html">Gallery</a></li>
            <li><a href="pages/full-width.html">Full Width</a></li>
            <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
            <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
            <li><a href="pages/basic-grid.html">Basic Grid</a></li>
            <li><a href="pages/font-icons.html">Font Icons</a></li>
          </ul>
        </li>
        <li><a className="drop" href="#">Dropdown</a>
          <ul>
            <li><a href="#">Level 2</a></li>
            <li><a className="drop" href="#">Level 2 + Drop</a>
              <ul>
                <li><a href="#">Level 3</a></li>
                <li><a href="#">Level 3</a></li>
                <li><a href="#">Level 3</a></li>
              </ul>
            </li>
            <li><a href="#">Level 2</a></li>
          </ul>
        </li>
        <li><a href="#">Link Text</a></li>
        <li><a href="#">Link Text</a></li>
        <li><a href="#">Link Text</a></li>
        <li><a href="#">Long Link Text</a></li>
      </ul>
    </nav>
    
    <div id="searchform">
      <div>
        <form action="#" method="post">
          <fieldset>
            <legend>Quick Search:</legend>
            <input type="text" placeholder="Enter search term&hellip;"/>
            <button type="submit"><i className="fas fa-search"></i></button>
          </fieldset>
        </form>
      </div>
    </div>
  
  </section>
  
  <div id="pageintro" className="hoc clear"> 
  
    <article>
      <p>Aliquam sapien</p>
      <h3 className="heading">Magna feugiat pulvinar</h3>
      <p>At dapibus ac velit cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus maecenas ut</p>
      <footer><a className="btn" href="#">Laoreet pharetra</a></footer>
    </article>
  
  </div>
  
</div>
    </>
  )
}

export default Header