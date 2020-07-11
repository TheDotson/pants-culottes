# pants-coulottes

# About
This was a group project that tasked us with creating a site about pants.

## Screenshots
![Main View]()

## Dev Notes
Below is an HTML skeleton we developed as a group to make sure all pages followed a uniform structure for CSS/design purposes.

## HTML Skeleton Example with Navbar and Footer

Below is our skeleton page that should be used for the initial HTML pages. This skeleton includes the navbar and footer elements, along with a starting `h1` tag for content on the page.

You should not need to modify nither the navbar nor the footer. Instead, place all of your content in the section under 'YOUR CONTENT GOES HERE'.

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet">

  <!-- FONT AWESOME ICONS -->
  <script src="https://kit.fontawesome.com/97364dc1e8.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./main.css">
</head>

<body>
  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-md navbar-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="container justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item border-right px-2">
            <a href="index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item border-right px-2">
            <a class="nav-link" href="shopping.html">Shopping</a>
          </li>
          <li class="nav-item border-right px-2">
            <a class="nav-link" href="history.html">History</a>
          </li>
          <li class="nav-item border-right px-2">
            <a class="nav-link" href="aboutUs.html">About Us</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="currentEvents.html">Celebrations</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="main-container">
    <h1>Landing Page</h1> <!-- CUSTOMIZE THIS FOR YOUR PAGE -->

    <!-- YOUR CONTENT GOES HERE-->
  </div>


  <!-- FOOTER -->
  <footer class="pt-3 my-md-5 border-top">
    <div class="row text-center">
      <div class="col-6 col-md">
        <h5 class="text-align-center">Features</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Privacy Policy</a></li>
          <li><a class="text-muted" href="#">Legal Info</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Location</h5>
        <ul class="list-unstyled text-small">
          <li class="text-muted">Piña Culotte-a, LLC</li>
          <li class="text-muted">123 Any Street</li>
          <li class="text-muted">Nashville, TN 37203</li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Connect with Us!</h5>
        <div class="row d-flex justify-content-center">
          <div class="col-2 justify-content-center d-flex">
            <a href="https://www.facebook.com" class="btn"><i class="fab fa-facebook-square fa-3x"></i></a>
          </div>
          <div class="col-2 justify-content-center d-flex">
            <a href="https://www.instagram.com" class="btn"><i class="fab fa-instagram-square fa-3x"></i></a>
          </div>
          <div class="col-2 justify-content-center d-flex">
            <a href="https://www.twitter.com" class="btn"><i class="fab fa-twitter-square fa-3x"></i></a>
          </div>
          <div class="col-2 justify-content-center d-flex">
            <a href="https://www.linkedin.com" class="btn"><i class="fab fa-linkedin fa-3x"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center footer-copyright">
      <small class="mb-3 text-muted">Piña Culotte-a &copy; 2017-2018</small>
    </div>
  </footer>

  <!-- BOOTSTRAP - JS, Popper.js, and jQuery -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous">
  </script>

  <!-- OUR CUSTOM Javascript-->
  <script src="./main.js"></script>
</body>

</html>

```
