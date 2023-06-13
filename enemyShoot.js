AFRAME.registerComponent("enemy-bullets", {
    init: function () {
        
    },
    shootEnemyBullet: function () {

       //get all enemies using className
            
       for (var i = 0; i < els.length; i++) {    
        //enemyBullet entity


        //set attributes


        //select scene and make enemyBullet its child


        //shooting direction


        //set the velocity and it's direction


        //collide event on enemy bullets

        enemyBullet.addEventListener("collide", function (e) {
            if (e.detail.body.el.id === "weapon") {

                if (playerLife > 0) {
                    
                }
                if (playerLife <= 0) {
                    //show text
                    

                    //remove tanks                        
                    var tankEl = document.querySelectorAll(".enemy")

                    for (var i = 0; i < tankEl.length; i++) {
                        scene.removeChild(tankEl[i])

                    }
                }

            }
        });



       }
            
       }
    },

);