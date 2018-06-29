var mobileTest = new Vue({
    el: '#loader',
    data: {
        mobile: false,
    },
    methods: {
        mobileCheck: function () {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.mobile = true;
            } else {
                this.mobile = false;
            }
        },
        changeButton: function () {
            document.getElementById('getInTouch').setAttribute('href', "tel: +19311119814");
        }
    },
    created: function () {
        //Code for mobile users.
        this.mobileCheck();
        if (this.mobile == true) {
            //Code for mobile users.
            this.changeButton();
        }
    }
});

var hero = new Vue({
    el: '#hero',
    methods: {
        parallaxValues: function () {
            var heroImg = document.getElementById('heroImg'),
                yPos = (window.pageYOffset / 5000)

            this.parallaxDim(heroImg, yPos);
            requestAnimationFrame(this.parallaxValues);
        },
        parallaxDim: function (id, val) {
            id.style.filter = 'brightness(' + (1 - 5 * val) + ')';
        },
    },
    created: function () {
        //Start parallax.
        window.addEventListener("DOMContentLoaded", this.parallaxValues, false);
    },
});
