var lazyLoad = new Vue({
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
            btn.innerHTML = 'Call us now';
        },
        scrollToView: function (id, offset, addRemove, className) {
            var object = document.getElementById(id),
                objectPos = object.getBoundingClientRect().top,
                y = window.pageYOffset;

            if (addRemove == 'add') {
                if (objectPos < offset) {
                    object.classList.add(className);
                }
            } else if (addRemove == 'remove') {
                if (objectPos < offset) {
                    object.classList.remove(className);
                }
            }
        },
        scrollToViewFunctions: function () {
            this.scrollToView('intro--heading', 550, 'add', 'lazy--opacity');
            this.scrollToView('intro--para', 550, 'add', 'lazy--opacity');
            this.scrollToView('erp__rows', 400, 'remove', 'lazy--rows');
            this.scrollToView('services', 550, 'remove', 'lazy--services');
            this.scrollToView('moreServices', 400, 'remove', 'lazy--more-services');
        }
    },
    created: function () {
        this.mobileCheck();
        if (this.mobile == true) {
            this.changeButton();
        };
        window.addEventListener("scroll", this.scrollToViewFunctions, false);
    }
});
var parallax = new Vue({
    methods: {
        parallaxTranslate: function (id, val, startStop, target, dist) {
            var targetPos = document.getElementById(target).getBoundingClientRect().top;

            if (startStop = 'start') {
                if (targetPos > dist) {
                    id.style.transform = 'translate3d(0, ' + val + 'px, 0)';
                }
            }
        },
        parallaxDraw: function () {
            var heroImg = document.getElementById('heroImg'),
                heroText = document.getElementById('heroText'),
                yPos = (window.pageYOffset / 4000),
                intro = document.getElementById('intro');

            this.parallaxTranslate(heroImg, (yPos * -1000), 'stop', 'intro', 200);
            this.parallaxTranslate(heroText, (yPos * 1000), 'stop', 'intro', 600);

            requestAnimationFrame(this.parallaxDraw);
        }
    },
    created: function () {
        window.addEventListener("DOMContentLoaded", this.parallaxDraw, false);
    },
    destroyed: function () {
        window.removeEventListener("DOMContentLoaded", this.parallaxDraw, false);
    }
})
var services = new Vue({
    el: '#services',
    data: {
        learn: false,
        currElement: 'implement'
    },
    methods: {
        resetActive: function () {
            document.getElementById(this.currElement).classList.remove("active");
        },
        showText: function (e) {
            var id = e.currentTarget.id,
                object = document.getElementById(id);

            this.resetActive();
            this.currElement = id;
            object.classList.add("active");
        }
    }
});
var moreServices = new Vue({
    el: '#moreServices',
    data: {
        active: false,
        currListItem: 0,
        services: [{
            name: 'License',
            description: 'We are official partners with SAP and provide licensing to our clients who do not have one and make the later processes quick and easy.'
        }, {
            name: 'Cloud',
            description: 'PUNIAS is a partner of AWS, Microsoft Azure and Ctrl S. We provide cost effective cloud services on an of these platforms.'
        }, {
            name: 'JIRA',
            description: 'We do JIRA implementation as per your business requirement with custom workflows. We have expert JIRA consultants who can configure everything as per your requirements.'
        }, {
            name: 'GSP/ASP',
            description: 'We have partnered with WEP Technologies to deliver and GST solution which is integrated in SAP for handling all GST related work including preparation of returns, validation and filing on government portal.'
        }, {
            name: 'Business Analysis',
            description: 'We provide services on Business Process Analysis for optimization of processes, resource utilization, Controls, SOD etc.'
        }, {
            name: 'Training',
            description: 'We provide trainings in: 1. SAP User trainings in all modules. 2. MS-Excel Training. 3. MS-Word and Power-point Trainings.'
        }, {
            name: 'MS-Excel Macros',
            description: 'PUNIAS has done projects on MS-Excel Macro tools for companies like KOHLER and Exicom. As of today many users are stuck with performing same complex tasks in Excel every day or week or month. We develop macros for such repetitive and complex excel worksheets thereby reducing time wasted on such manual excel work and saving lot of cost for the Company. We have developed and E-Way Bill tool using excel macros for generation of bulk e-way bills through government portal.'
        }, {
            name: 'Digitization',
            description: 'Digitisation: We help organizations, digitise all their physical documents. For this we implement Document Management System, which has all built-in document features like accessibility controls; document search; document editing controls; document release workflows; document versions etc.'
        }]
    },
    methods: {
        switchServices: function (el, i) {
            this.currListItem = i;
            this.services.push();
        }
    }
});
var team = new Vue({
    el: '#team',
    data: {
        currEmployee: 0,
        employees: [{
            name: 'Baljit S. Punia',
            designation: 'CEO',
            smallImage: 'assets/img/employee1.jpg',
            bigImage: 'assets/img/employee1-large.png',
            quote: 'Being the owner of the organization, I make sure that you as a consumer get, hands down, the best services in the market.'
        }, {
            name: 'Vijay',
            designation: 'COO',
            smallImage: 'assets/img/employee2.jpg',
            bigImage: 'assets/img/employee2-large.png',
            quote: "Techinally i own the company but my father is running it. God damnit!"
        }, {
            name: 'Vipin',
            designation: 'Head Sales and Marketing',
            smallImage: 'assets/img/employee3.jpg',
            bigImage: 'assets/img/employee3-large.png',
            quote: "I'm just a firend of harry wandering in this website trying to figure my way otta here."
        }, {
            name: 'Zohaib',
            designation: 'Head Technology',
            smallImage: 'assets/img/employee4.jpg',
            bigImage: 'assets/img/employee2-large.jpg',
            quote: 'I was born in delhi and literally became a friend of this dude over the internet. Guess 21st century is kicking it hard on us.'
        }, {
            name: 'Naresh',
            designation: 'Head HR & Admin',
            smallImage: 'assets/img/employee4.jpg',
            bigImage: 'assets/img/employee2-large.jpg',
            quote: 'I was born in delhi and literally became a friend of this dude over the internet. Guess 21st century is kicking it hard on us.'
        }]
    },
    methods: {
        switchEmployee: function (el, i) {
            el.currentTarget.classList.add('active');
            this.currEmployee = i;
            this.employees.push();
        }
    }
});
