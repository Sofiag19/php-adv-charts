<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style3.css">
    <title>Advanced Dashboard Charts3</title>
  </head>
  <body>
    <header>
      <div>
        Scegli il livello a cui appartieni
      </div>
      <button type="button" id="guest">guest</button>
      <button type="button" id="employee">employee</button>
      <button type="button" id="clevel">clevel</button>
    </header>
    <div id="container">
      <div class="wrapper">
        <canvas id="fatturato"></canvas>
      </div>
      <div class="wrapper">
        <canvas id="fatturatoByAgent"></canvas>
      </div>
      <div class="wrapper">
        <canvas id="teamEff"></canvas>
      </div>
    </div>

    <!-- CDN Chart -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
    <!-- -CDN 3.3.1 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- -CDN GENERALE -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <!-- -CDN LINGUA ITALIANA -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/it.js"></script>
    <!-- script -->
    <script src="script3.js" charset="utf-8"></script>
  </body>
</html>
