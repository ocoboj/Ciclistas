/**
* ListadoController
* Controlador de la Lista General de Ciclistas
*/

function ListadoController($scope, $http) {
  $http.get('Datos/ciclistas.json').success(function(ListaCiclistas) {
      $scope.ciclistas = ListaCiclistas;
  });
 
    //En este punto definimos un criterio de ordenaci�n inicial y
    // una opci�n (ascendente)
  $scope.orderField = "Nombre";
  $scope.orderReverse = "false";
}