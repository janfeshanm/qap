<template>
  <nav class="navbar">
    <a href="/" class="logo">
      <img src="assets/logo1.png" alt="Logo" style="height: 30px" />
    </a>

    <div class="menu-toggle">☰</div>

    <ul>
      <li class="dropdown">
        <a href="/" class="dropbtn">Products</a>
        <ul class="dropdown-content">
          <li><a href="#/products/container">Aluminium Containers</a></li>
          <li><a href="#/products/foil">Aluminium Foil</a></li>
          <li><a href="#/products/lids">Aluminium Container Lids</a></li>
          <li><a href="#/products/pizza">Cardboard Pizza Box</a></li>
          <li><a href="#/products/tablecover">Plastic Table Cover Rolls</a></li>
          <li><a href="#/products/papercup">Disposable Paper Cup</a></li>
        </ul>
      </li>
      <li><a href="#/catalog">Catalog</a></li>
      <li><a href="#/about">About Us</a></li>
      <li><a href="#/blog">Blog</a></li>
      <li><a href="#/contact">Contact Us</a></li>
    </ul>
  </nav>
</template>

<style lang="scss">
$fontColor: white;
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar a img {
  margin-right: 40px;
}

.navbar > ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
}

.navbar ul li a {
  color: $fontColor;
  text-decoration: none;
  padding: 4px 10px;
}

.navbar ul li a:hover {
  color: #11304c;
  border-radius: 5px;
  padding: 4px 10px;
}

.dropbtn {
  color: rgb(175, 175, 175);
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #dadada;
  min-width: 220px;
}

.dropdown-content li {
  display: block;
  padding: 4px 10px;
}

.dropdown-content li a {
  color: #11304c;
  padding: 4px 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content li a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.menu-toggle {
  display: none;
  font-size: 26px;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .navbar {
    justify-content: space-between;
  }

  .navbar > ul {
    display: none;
    flex-direction: column;
    background: #ffffff;
    position: absolute;
    top: 60px;
    width: 200px;
    padding: 20px 0;
    gap: 15px;
    text-align: center;
    right: 0px;
  }

  .navbar > ul li a {
    color: #11304c;
    font-size: 14px;
  }

  .menu-toggle {
    display: block;
  }

  .navbar.active > ul {
    display: flex;
  }

  .dropdown-content {
    position: static;
    background: #dadada;
  }
}
</style>
