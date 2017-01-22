(function() {

    var myApp = angular.module('myApp', []); //require the angular app

    myApp.controller('cursosController', function($scope, $rootScope, $http) {
        $http.get('/getcursos').then(function(resp) {
            $scope.cursos = resp.data.cursos.rows;
        });
        // $scope.getImageId = function() {
        //     $http.get('/admin/image/' + $scope.imageid).then(function(resp, err) {
        //         $scope.image = resp.data.images.rows[0];
        //         $scope.comments = resp.data.comments.rows;
        //     });
        // }
    })

    //     $scope.deleteComment = function(commentId, index) {
    //         $http.post('/delete', {
    //             id: commentId
    //         }).then(function(data) {
    //             $scope.comments.filter(function(element, i) {
    //                 if (element.id != commentId) {
    //                     return element.id
    //                 } else {
    //                     $scope.comments.splice(i, 1);
    //                 }
    //             });
    //             console.log($scope.comments.length);
    //         });
    //     }
    //     $scope.updateImageInfo = function() {
    //         $http.post('/update', {
    //             image: $scope.image
    //         });
    //     }
    // });

    myApp.controller('adminController', function($scope, $http, $rootScope) {

        $scope.addButton = true;
        $scope.updateButton = false;


        $http.get('/getcursos').then(function(resp) {
            $scope.cursos = resp.data.cursos.rows;
        });

        $scope.add = function() {
            var newProgram = {
                title: $scope.title,
                imgurl: $scope.imgurl,
                price: $scope.price,
                description: $scope.description,
                date: $scope.date,
                pagamento: $scope.pagamento
            };
            // make a query
            $http.post('/addcurso', {
                curso: newProgram
            }).then(function(data) {
                $scope.cursos.push(newProgram);
            });
        }

        $scope.delete = function(id) {
            $http.post('/delete', {
                postId: id
            }).then(function(data) {
                $scope.cursos.map((element, index) => {
                    if (element.id === id) {
                        $scope.cursos.splice(index, 1);
                        return
                    }
                })
            })
        }

        $scope.update = function(id) {
            $rootScope.id = id;
            var updateProgram = $scope.cursos.map((element) => {
                if (element.id == id){
                    return element
                } else {
                    alert("Houve algum erro, tente novamente. Caso o erro persista contato o desenvolvedor");
                }
            });
            $scope.addButton = false;
            $scope.updateButton = true;
            $scope.title = updateProgram[0].title;
            $scope.imgurl = updateProgram[0].imgurl;
            $scope.price = updateProgram[0].price;
            $scope.description = updateProgram[0].description;
            $scope.date = updateProgram[0].date;
            $scope.pagamento = updateProgram[0].pagamento
        }

        $scope.sendUpdate = function () {
            var updateProgram = {
                title: $scope.title,
                imgurl: $scope.imgurl,
                price: $scope.price,
                description: $scope.description,
                date: $scope.date,
                pagamento: $scope.pagamento,
                id: $rootScope.id
            };
            $http.post('/update', {
                curso: updateProgram
            }).then(function(resp){
                if (resp.data.success){
                    $scope.cursos.map((element, id) => {
                        if (element.id == updateProgram.id) {
                            element.title = updateProgram.title;
                            element.imgurl = updateProgram.imgurl;
                            element.price = updateProgram.price;
                            element.description = updateProgram.description;
                            element.date = updateProgram.date;
                            element.pagamento = updateProgram.pagamento;
                        }
                        $scope.addButton = true;
                        $scope.updateButton = false;
                        $scope.title = "";
                        $scope.imgurl = "";
                        $scope.price = "";
                        $scope.description = "";
                        $scope.date = "";
                        $scope.pagamento = "";   
                    })
                } else {
                    alert("Houve algum erro, tente novamente. Caso o erro persista contato o desenvolvedor");
                }




            })
        };
    });
})();
