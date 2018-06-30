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
            var btn = document.getElementById('getInTouch');
            btn.setAttribute('href', "tel: +19311119814");
            btn.innerHTML('Call');
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
var parallax = new Vue({
    el: '#hero',
    methods: {
        parallaxDim: function (id, val) {
            id.style.filter = 'brightness(' + (1 - 5 * val) + ')';
        },
        parallaxTranslate: function (id, val) {
            id.style.transform = 'translate3d(0, ' + val + 'px, 0)';
        },
        parallaxDraw: function () {
            var heroImg = document.getElementById('heroImg'),
                heroText = document.getElementById('heroText'),
                yPos = (window.pageYOffset / 4000),
                mouseX = event

//            this.parallaxDim(heroImg, yPos);
            this.parallaxTranslate(heroImg, (yPos * -1000));
            this.parallaxTranslate(heroText, (yPos * 1000));
            requestAnimationFrame(this.parallaxDraw);
        }
    },
    created: function () {
        window.addEventListener("DOMContentLoaded", this.parallaxDraw, false);
    }
});