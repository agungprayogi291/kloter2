<?php
include("conn.php");

$sql = "SELECT * FROM cycle";
$query = mysqli_query($conn,$sql);

?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body class="bg-dark">
  <nav >
    <h2 class="text-white">DW BIKE</h2>
    <a href="" class="bg-danger text-white p-2 " style="float:right; margin-right:5%;">My Order</a>
  </nav class="mb-4">
<div
 class="row m-auto ">
 <?php  while($data = mysqli_fetch_array($query)){;?>
    <div class="col-md-3 m p-2 m-2 mt-5">

        <div class="card">
            <div class="card-header">
                <img src="img/<?php echo $data['image'];?>" alt="" width="200px">
            </div>
            <card class="body bg-secondary">
                <form action="">
                    <table class="table bg-secondary">
                   
                        <tr>
                            <td><?php echo $data['nama'];?></td>
                            <td><?php echo $data['nama'];?></td>
                        </tr>
                        <tr>
                            <td class="text-danger"><?php echo $data['price'];?></td>
                            <td ><p>Stock:<?php echo $data['stock'];?></p></td>
                        </tr>
                       
                        
                  
                    </table>
                    <button class="btn btn-danger form-control">Buy</button>
                </form>
            </card>
        </div>
    </div>
    <?php };?>
</div>

    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
  </body>
</html>