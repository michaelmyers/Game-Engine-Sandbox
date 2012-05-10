ig.module(
    'game.entities.player'
)

.requires(
    'impact.entity'
)
    .defines(function(){

EntityPlayer = ig.Entity.extend({

    size: {x: 40, y: 40},

    type: ig.Entity.TYPE.A,
    checkAgainst: ig.Entity.TYPE.ACTIVE,
    collides: ig.Entity.COLLIDES.PASSIVE,

    speed:100,

    //Load sprite sheet
    animSheet: new ig.AnimationSheet( 'media/dog_sprite_horizontal.png',40,40),

    init: function(x, y, settings) {
        //Add animations
        this.addAnim( 'down', 0.1, [0,1,2]);
        this.addAnim( 'idledown', 1, [1]);

        this.addAnim( 'left', 0.1, [3,4,5]);
        this.addAnim( 'idleleft', 1, [4]);

        this.addAnim( 'right', 0.1, [6,7,8]);
        this.addAnim( 'idleright', 1, [7]);

        this.addAnim( 'up', 0.1, [9,10,11]);
        this.addAnim( 'idleup', 1, [10]);

        //set initial direction
        this.currentAnim = this.anims.idledown;

        //call the parent constructor
        this.parent(x,y,settings);
    },

    update: function() {

        if( ig.input.state('left') && ismove != 1 && ismove != 2 && ismove != 4) {
            this.vel.x = -this.speed;
            ismove = 3;
            this.direction = 3;
            this.currentAnim = this.anims.left;
        }
        else if( ig.input.state('right')  && ismove != 1 && ismove != 3 && ismove != 4) {
            this.vel.x = +this.speed;
            ismove = 2;
            this.direction = 2;
            this.currentAnim = this.anims.right;
        }
        else if( ig.input.state('up')  && ismove != 3 && ismove != 2 && ismove != 4) {
            this.vel.y = -this.speed;
            ismove = 1;
            this.direction = 1;
            this.currentAnim = this.anims.up;
        }
        else if( ig.input.state('down')  && ismove != 1 && ismove != 2 && ismove != 3) {
            this.vel.y = +this.speed;
            ismove = 4;
            this.direction = 4;
            this.currentAnim = this.anims.down;
        }
        else {
            this.vel.x = 0;
            this.vel.y = 0;
            ismove = 0;

            if( this.direction == 4 )
            {
                this.currentAnim = this.anims.idledown;
            }
            if( this.direction == 3 )
            {
                this.currentAnim = this.anims.idleleft;
            }
            if( this.direction == 2 )
            {
                this.currentAnim = this.anims.idleright;
            }
            if( this.direction == 1 )
            {
                this.currentAnim = this.anims.idleup;
            }}


        this.parent();
    }

});

    });