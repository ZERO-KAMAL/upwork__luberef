$(document).ready(function () {
    "use strict";
    let is_rtl = $("html").attr("dir") === "rtl" ? true : false;
    //let jobInpts = $(".job-register input, .job-register textarea, .job-register select");
    let jobInpts = $("form input, form textarea, form select");
    let breakTitle = $(".break-title");
    let upBtn = $(".up");
    function readFileURL(input, output, textcolor, bgcolor) {
        if (input[0].files[0]) {
            var f = input[0].files[0];
            output.html("");
            output.append('<div class="uploadingFile w-full flex mt-3 items-center group text-' + textcolor + ' text-normal relative before:absolute before:w-full bg-' + bgcolor + ' pr-3 pl-3 pt-2 pb-2 delete-file" > <div class="fileTi flex-1 group-hover:text-second"><span>' + f.name + '</span></div> <div data-parent="#upload-area" class="delete-file w-max "><span class="w-[17px] ltr:float-right rtl:float-left h-max"> <svg class="!w-full rotate-45" xmlns="http://www.w3.org/2000/svg" width="32.511" height="32.511" viewBox="0 0 32.511 32.511"> <g data-name="Group 43192" transform="translate(-1748.989 -2332.245)"> <path class="group-hover:stroke-second" data-name="Path 38080" d="M2990.834,2156.519h29.511" transform="translate(-1240.345 191.981)" fill="none" stroke="#099bd6" stroke-linecap="round" stroke-width="3"/> <path class="group-hover:stroke-second" data-name="Path 77627" d="M2990.834,2156.519h29.511" transform="translate(3921.764 -657.09) rotate(90)" fill="none" stroke="#099bd6" stroke-linecap="round" stroke-width="3"/> </g> </svg> </span> </div> </div>');
        }
    }
    function checkInputEmpty(input) {
        let state = false;
        if (input.val().trim() == '') {
            input.parent().addClass("has-error");
            state = true;
        }
        else {
            input.parent().removeClass("has-error");
            state = false;
        }
        return state;
    }


    function validateEmail(emailInput) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailInput);
    }


    function checkValidEmail(emailInputID) {

        let state = false;
        var email = $(emailInputID).val().trim();
        if (validateEmail(email)) {
            emailInputID.parent().removeClass("has-error");
            state = false;

        }
        else {
            emailInputID.parent().addClass("has-error");
            state = true;
        }

        return state;

    }
    function showUpBtn() {
        if ($(window).scrollTop() > $(window).height()) {
          upBtn.addClass("opacity-100").removeClass("opacity-0");
        } else {
          upBtn.removeClass("opacity-100").addClass("opacity-0");
        }
      }
      
    function responsiveImg() {
        let imgs = $(".responsive-img");
        imgs.each(function () {
            let p = $(this).parent();
            if (p.height() > p.width()) {
                $(this).css("height", "100%");
            } else {
                $(this).css("width", "100%");

            }
        });
    }
    function rectSize() {
        let elms = $(".rect-size");
        elms.each(function () {
            //  $(this).height($(this).width() / 1.77777778)
            $(this).height($(this).width() / 2.22841226)
        });
    }
    function videoSize() {
        let elms = $(".video-size");
        elms.each(function () {
            //  $(this).height($(this).width() / 1.77777778)
            $(this).height($(this).width() / 1.42857142857)
        });
    }
    function squareSize() {
        let elms = $(".sqaure-size");
        elms.each(function () {
            $(this).height($(this).width())
        });
    }
    function initSliders(sliderEl, args) {
        let nv = sliderEl.attr("data-nav");
        if (nv != undefined) {
            args.asNavFor = nv;
        }
        args.rtl = is_rtl;
        sliderEl.slick(args);
    };

    if ($(".productsSlider")) {
        initSliders($(".productsSlider"), {
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            loop: true,

            arrows: false,
            dots: false

        });
    }
    $(".proMum").each(function(){
        initSliders($(this), {
            slidesToShow: 2,
            loop: false,
            autoplay: false,
            centerMode: false,
            arrows: false,
            dots: false

        });
    })
    if ($(".newsSlider")) {
        initSliders($(".newsSlider"), {
            slidesToShow: 3,
            loop: true,

            arrows: false,
            dots: false

        });
    }
    if ($(".prosValueSlider")) {
        initSliders($(".prosValueSlider"), {
            slidesToShow: 2, loop: true,

            arrows: false,
            dots: false

        });
    }
    if ($(".resourcesSlider")) {
        initSliders($(".resourcesSlider"), {
            slidesToShow: 4,
            loop: true,
            arrows: false,
            dots: false,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]

        });

    }
    if ($(".InvestmentSlider")) {
        let slids = [".InvestmentSlider", ".Investment1Slider", ".Investment2Slider", ".Investment3Slider"];
        for (var o = 0; o < slids.length; o++) {
            initSliders($(slids[o]), {
                slidesToShow: 3,
                loop: true,
                    
            centerMode: true,
                arrows: false,
                dots: false

            });
        }
    }
    if ($(".quotesSlider")) {
        initSliders($(".quotesSlider"), {
            slidesToShow: 1,
            loop: true,
            fade: true,
            arrows: false,
            dots: false

        });
    }
    $('.productsSlider').on('afterChange', function (event, slick, currentSlide, nextSlide) {

        videoSize();
        responsiveImg();
        rectSize();
    });
    $('.proMum').on(' afterChange', function (event, slick, currentSlide) {

        if (slick.$slides.length - 1 == currentSlide) {

            $('.arrows .next').addClass('disabled');
        }
        else {
            $('.arrows .next').removeClass('disabled');
        }

        if (currentSlide === 0) {
            $('.arrows .prev').addClass('disabled');
        }
        else {
            $('.arrows .prev').removeClass('disabled');
        }
    });
    $(".arrows .next").on("click", function () {
        let p = $(this).attr("data-parent");
        $(this).parents(p).find(".slick-slider").slick('slickNext');
    });
    $(".arrows .prev").on("click", function () {
        let p = $(this).attr("data-parent");
        $(this).parents(p).find(".slick-slider").slick('slickPrev');
    });

    if (breakTitle) {
        breakTitle.each(function () {
            let cont, frstCont, cnt = "", finlCont, nums;
            nums = $(this).attr("data-break-after");
            cont = $(this).text().trim();
            frstCont = cont.split(' ', parseInt(nums));
            for (var i = 0; i < frstCont.length; i++) {
                cnt += frstCont[i] + " ";
            }
            //finlCont = cont.replace(frstCont[0] + " " + frstCont[1] + " " + frstCont[2], frstCont[0] + " " + frstCont[1] + " " + frstCont[2] + "<br/>");
            finlCont = cont.replace(cnt, cnt + "<br/>");
            $(this).html(finlCont);
        })
    }
    $(".nav-tabs .nav-link").on("click", function () {
        let tp = $(this).attr("data-tab-target");
        let p = $(this).attr("data-tab-parent");
        $(p + " .tab-pane").removeClass("active")
        $(tp).addClass("active")
        videoSize();
        squareSize();
        $(this).parent().children(".nav-link").removeClass("active");
        $(this).addClass("active")


    });
    $(".open-popup").on("click", function () {
        let tp = $(this).attr("data-popup");
        $(tp).toggleClass("show");
    });
    $(".close-popup").on("click", function () {
        let tp = $(this).attr("data-popup");
        $(tp).removeClass("show");
    });
    $(".collapse-head").on("click", function () {
        let tp = $(this).parent(".collapse");
        let p = $(this).attr("data-parent");
        $(p + " .collapse").not(tp).removeClass("show");
        $(this).parent(".collapse").toggleClass("show");
    });
    AOS.init({
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true,
    });
    $("select").on("focus", function () {
        let ar = $(this).prev(".arrow");
        ar.css("transform", "rotate(180deg)")
    });
    $("select").on("change", function () {
        let ar = $(this).prev(".arrow");
        ar.css("transform", "none")
    });
    $("body").on("click", function (event) {
        if (!$(event.target).closest('select').length) {
            let ar = $("select").prev(".arrow");
            ar.css("transform", "none")
        }
    });
    jobInpts.on("blur keyup change", function () {
        var c = $(this).val();
        if (c === "" || c == " ") {
            $(this).siblings("label").show();
        } else {
            $(this).siblings("label").hide();
        }
    });
    
    $(".clear-btn").on("click", function () {
        let p = $(this).attr("data-parent");
        $(p).find("input, textarea, select").each(function(){
            $(this).val("");
            $(this).next("label").show();
        });
    })
    $("form").on("submit", function (e) {

        e.preventDefault();
        let txts = $(this).find("input[type=text], input[type=tel], input[type=date], input[type=number], select");
        let emils = $(this).find("input[type=email]");
        let errs = []
        txts.each(function () {
            errs.push(checkInputEmpty($(this)));
        });
        emils.each(function () {
            errs.push(checkValidEmail($(this)));
        });
        if (errs.indexOf(true) == -1) {
            //ajax here
        }
    });

    var fls = $('.files'),
        frm = $('.upload-area'),
        frmInp = $('.upload-area input[type=file]'),
        validFs = ['image/gif', 'image/jpeg', 'image/png',
            'pplication/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];

    frmInp.on('dragover dragenter', function () {
        frm.addClass('is_dragging');
    })
        .on('dragleave dragend drop', function () {
            frm.removeClass('is_dragging');
        })
        .on('change', function () {
            var fs = $(this).prop('files');
            var ftc = $(this).parents(".upload-area").attr('data-file-textcolor');
            var fbc = $(this).parents(".upload-area").attr('data-file-bgcolor');
            for (var f = 0; f < fs.length; f++) {
                //validate files
                var tp = fs[f]['type'];
                if (validFs.includes(tp)) {
                    frm.removeClass('is_invalid');
                    readFileURL($(this), fls, ftc, fbc);

                } else {
                    frm.addClass('is_invalid');
                }

            }
        }
        );
    $(document).on("click", ".uploadingFile .delete-file", function () {
        var inp = $(this).attr("data-parent"),
            fl = $(inp).find("input[type=file]");
        fl.val("");
        $(this).parents(".uploadingFile").remove();
    });
    if($(".styled-select")){

       var plh =  $(".styled-select").attr("data-placeholder");
        $(".styled-select").select2({
            minimumResultsForSearch: -1,
            placeholder : plh
        })
    }
    videoSize();
    responsiveImg();
    squareSize();
    rectSize();
    $(window).on("load resize", function () {
        videoSize();
        responsiveImg();
        squareSize();
        rectSize();
    });
    $(window).on("scroll load", function () {
        
        showUpBtn();
    });
    const jobs = [...document.querySelectorAll(".jobItem")];
    const btnSearch = document.querySelector(".jobSearch");
    const searchLabel = document.querySelector(".searchLabel");
    
    searchLabel.addEventListener("keyup", () => {
      jobs.forEach((job) => {
        if (
          !job.children[0].children[0].innerHTML
            .toLowerCase()
            .includes(searchLabel.value.toLowerCase())
        ) {
          job.classList.add("hidden");
        } else {
          job.classList.remove("hidden");
        }
      });
    });
    btnSearch.addEventListener("click", () => {
      jobs.forEach((job) => {
        if (
          !job.children[0].children[0].innerHTML
            .toLowerCase()
            .includes(searchLabel.value.toLowerCase())
        ) {
          job.classList.add("hidden");
        } else {
          job.classList.remove("hidden");
        }
      });
    });
});