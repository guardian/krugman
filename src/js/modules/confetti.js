define([
    'libs/jquery'
], function(
    jQuery
) {
    var canvas, W, H, mp, particles, confettiHandler, ctx,
        angle = 0,
        tiltAngle = 0,
        TiltChangeCountdown = 5;
    return {
        init: function() {
                canvas = document.getElementsByClassName('krugman-header__confetti')[0];
                W = window.innerWidth,
                H = window.innerHeight,
                canvas.width = W,
                canvas.height = H,
                mp = 50,
                particles = [],
                confettiHandler,
                ctx = canvas.getContext('2d');
                
            $(window).resize(function() {
                W = window.innerWidth,
                H = window.innerHeight,
                canvas.width = W,
                canvas.height = H;
            });

            for (var i = 0; i < mp; i++) {
                if (i%2 == 0) {
                    color = "rgba(255, 33, 101, 1)"
                } else {
                    color = "rgba(255, 255, 255, 1"
                }
                particles.push({
                    x: Math.random() * W, //x-coordinate
                    y: Math.random() * H, //y-coordinate
                    r: this.randomFromTo(5, 30), //radius
                    d: (Math.random() * mp) + 10, //density
                    color: color,
                    tilt: Math.floor(Math.random() * 10) - 10,
                    tiltAngleIncremental: (Math.random() * 0.07) + .05,
                    tiltAngle: 0
                });
            }
            this.startConfetti();
        },

        startConfetti: function() {
            W = window.innerWidth,
            H = window.innerHeight,
            canvas.width = W,
            canvas.height = H;
            confettiHandler = setInterval(function() {
                this.draw();
            }.bind(this), 30);
        },

        draw: function() {
            ctx.clearRect(0, 0, W, H);
            for (var i = 0; i < mp; i++) {
                var p = particles[i];
                ctx.beginPath();
                ctx.lineWidth = p.r / 2;
                ctx.strokeStyle = p.color;  // Green path
                ctx.moveTo(p.x + p.tilt + (p.r / 4), p.y);
                ctx.lineTo(p.x + p.tilt, p.y + p.tilt + (p.r / 4));
                ctx.stroke();  // Draw it
            }

            this.update();
        },

        update: function() {
            angle += 0.01;
            tiltAngle += 0.1;
            TiltChangeCountdown--;
            for (var i = 0; i < mp; i++) {
                var p = particles[i];
                p.tiltAngle += p.tiltAngleIncremental;
                //Updating X and Y coordinates
                //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
                //Every particle has its own density which can be used to make the downward movement different for each flake
                //Lets make it more random by adding in the radius
                p.y += (Math.cos(angle + p.d) + 1 + p.r / 2) / 2;
                p.x += Math.sin(angle);
                //p.tilt = (Math.cos(p.tiltAngle - (i / 3))) * 15;
                p.tilt = (Math.sin(p.tiltAngle - (i / 3))) * 15;
        
                //Sending flakes back from the top when it exits
                //Lets make it a bit more organic and let flakes enter from the left and right also.
                if (p.x > W + 5 || p.x < -5 || p.y > H) {
                    if (i % 5 > 0 || i % 2 == 0) //66.67% of the flakes
                    {
                        particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngle: p.tiltAngle, tiltAngleIncremental: p.tiltAngleIncremental };
                    }
                    else {
                        //If the flake is exitting from the right
                        if (Math.sin(angle) > 0) {
                            //Enter from the left
                            particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngleIncremental: p.tiltAngleIncremental };
                        }
                        else {
                            //Enter from the right
                            particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngleIncremental: p.tiltAngleIncremental };
                        }
                    }
                }
            }
        },

        randomFromTo: function(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
        }
    }
});


