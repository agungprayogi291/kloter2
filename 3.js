/*
n = 6


     *******  n-1 = 5
    *     *    n-2 = 4
   *     *  n-3 = 3
  *     *   n-4 = 2 
 *     *   n-5 = 1
*******   n-n= 0
1.baris 12 colom ,11,10, -1
2. spaci = n-baris 


    
    *******
     *     *
      *     *
       *     *
        *     *
         *******
*/

function cetakPola(n){
var n = n;

for(let i = 1 ; i <= n ; i++){
    for(let s = 1 ; s <= n- i ;s++ ){
       document.write('-')
     
    }
     
    for(let j = 1 ; j <= n; j++) {
        if(i==1 || 1 == n + 1 ){
            document.write("*");
        }else if( j == 1 || j == n){
            document.write("+");
        }else{
            
            document.write(`-`);
        }
        
    }
    
  document.write("<br>")
    
    

}
for(let g =1 ; g<= n; g++ ){
    document.write("*")
}

document.write("<br>")


for(let i = 1 ; i <= n ; i++){
    for(let s = n - 2; s >= n - i ;s-- ){
        document.write('-')
      
     }
     
    for(let j = 1 ; j <= n; j++) {
        if(i==1 || 1 ==n + 1 ){
            document.write("*");
        }else if( j == 1 || j == n){
            document.write("+");
        }else{
            
            document.write(`-`);
        }
        
    }
    
  document.write("<br>")
    
  

}
for(let g =1 ; g<= n; g++ ){
    document.write("-")
}
for(let g =1 ; g<= n; g++ ){
    document.write("*")
}
}
cetakPola(6)