$(window).load(function(){
    $("#background").fadeIn(1000);
    var width = $(document).width();
    var height = $(document).height();

    var audiosPath = new Array('aah1.ogg', 'aah2.ogg', 'aah3.ogg', 'aah4.ogg',
        'aah5.ogg', 'alla_ni_alla_ni.ogg', 'allahu1.ogg', 'allahu2.ogg',
        'bitch.ogg', 'bög1.ogg', 'bög2.ogg', 'cough.ogg', 'cuck1.ogg',
        'cum1.ogg', 'cum2.ogg', 'cum3.ogg', 'cum4.ogg', 'cum5.ogg', 'cum6.ogg',
        'cum7.ogg', 'fuckyou.ogg', 'fyfan.ogg', 'gat2sonk1.ogg',
        'gay1.ogg', 'gay2.ogg', 'gay3.ogg', 'hölyshit.ogg', 'idubbbztv1.ogg',
        'ja(g).ogg', 'laff1.ogg', 'laff2.ogg', 'laff3.ogg', 'laff4.ogg',
        'lol.ogg', 'meme1.ogg', 'meme2.ogg', 'meme3.ogg', 'noor_brinner.ogg',
        'ohno1.ogg', 'ohno2.ogg', 'ohno3.ogg', 'ohno4.ogg', 'ohno5.ogg',
        'ohno6.ogg', 'remove.ogg', 'retardation1.ogg', 'retardation2.ogg',
        'retardation3.ogg', 'retardation4.ogg', 'retardation5.ogg',
        'retardation6.ogg', 'retardation7.ogg', 'retardation8.ogg',
        'retardation9.ogg', 'scat1.ogg', 'theory1.ogg', 'theory2.ogg',
        'waduhek1.ogg', 'waduhek2.ogg', 'walla1.ogg', 'wenn1.ogg', 'what1.ogg',
        'wheezing1.ogg', 'wheezing2.ogg', 'wheezing3.ogg', 'wheezing4.ogg',
        'whitemaleprivilege1.ogg', 'yeah.ogg', 'är.ogg');

    var audiosText = new Array("OOH", "NEEJ", "AAH", "AAH OOH OOOOOH", "O-",
        "ALLA NI, ALLA NI", "ALLAHU AKBAAAR", "ALLAHU AKBAR", "BITCH", "BÖöÖG",
        "BÖöÖGAR", "*H3H3&#x2122;*", "JAG TROR PÅ GUD",
        "ÅÅH- mhh...", "(fucking) AAAHHH", "EAAAHHHH", "OM- OOOH...OOHHH...AJ",
        "UUUUGGHH", "AAAH", "AAH", "FUCK YOU", "FYFAAN", "DRA ÅT HELVETE-",
        "TA HAN, TA PÅ HAN, AWW...", "JAG KOMMER KNULLA SAMIR I ARSLET", "GEY",
        "JÄÄÄÄÄÄÄÄÄÄÄÄÄVLAR", "*idubbbztv&#x2122;*", "JA(G)", "UHUH AHHHHAH",
        "AHHHHHHHHHHHHAHAHAHAHAAHA", "UH-AHHHAHA", "EHEHE", "LOL", "FUCK OOOOFF",
        "FUCK OFF. FU- UUUUUHH", "FUCKING GAY",
        "OOH JÄVLAR. JAG BRINNER, JAG BRINNER... JAG BRINNER... OH SHIT TA MINA GREJOR SNABBT. FAN VA GEY TA MI- GE MIG VATTEN IDIOOOOOTTSSSS",
        "ÅH NEEJ", "ÅHNEJ", "NEJ", "OHMYGUD NENENENEE MARIO, MARIO ANVÄND- ÅWHH GUUUD",
        "ÅH ÅHH NEEEJ", "NEJ", "REMOVE", "VEM ÄR HAN...AHA",
        "GO SHAWTY, IT'S YOUR BIRTHDAY, WE GONNA PARTY LIKE- ÅH GUD",
        "NE MIN MAGNIEEEET", "SLÄPPTES... AV AN- AV UTAN ANLEDNING. UTAN AV ANLEDNING. ANLEDNING? UT.",
        "HEEEEHHH", "UUUEEEHHHHH", "FU- ... *air drifting*", "HAN TEABAGGA MIIIG", "*roflcopterXD*",
        "PFFRRTTRRTT", "MARIO VET DU?... VI FÖRSTÖR VÅRAN OZONE... NÄR VI EEHH... NÄR VI FYSER",
        "HUR MÅNGA OZONES HAR VI? JAG TRODDE DET VAR 7", "VAFAN", "WHAT THE FFFUCK?",
        "JAG ZZVÄR PÅ GUD", "WENN WENN WENN WENN WENN &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;WEEEEEEEEEEEEEEEEEN", "WHA?", "TEHHH", "HHEEHH", "TEHHH", "TEHHH",
        "GET FUCKED, CUCK", "YEAH", "ÄR");


    var isUnique = false;

    var pathConst = "audio/";
    var audios = audiosPath;

    var volumeSlider = document.getElementById("volume-slider");

    var text = new Text();

    var isPlaying = false;

    var hasScrolledDown = false;

    var targetOffset;

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    $("#soundboard-container").css("top", $("#wrapper").height() + "px");


    $("#button-retardation").click(function() {
        event.preventDefault();
        playFile();
    });

    $("#volume-slider").on("input change", function(){
        $("#volume-indicator").css("color", "rgba(245, 20, 96," + this.value/100 + ")");
    });

    $("#button-anchor").click(function() {
        if (!hasScrolledDown) {
            targetOffset = $("#soundboard-container").offset().top;
            $('html, body').animate({scrollTop: targetOffset}, 200);
            $(this).css("transform", "rotate(180deg)");
            hasScrolledDown = true;
        } else {
            $('html, body').animate({scrollTop: 0}, 200);
            $(this).css("transform", "rotate(0)");
            hasScrolledDown = false;
        }

    });

    $("html, body").mousewheel(function(e) {
        if (e.deltaY < 0 && !hasScrolledDown) {
            targetOffset = $("#soundboard-container").offset().top;
            $('html, body').animate({scrollTop: targetOffset}, 200);
            $("#button-anchor").css("transform", "rotate(180deg)");
            hasScrolledDown = true;
        } else if (e.deltaY > 0 && hasScrolledDown) {
            $('html, body').animate({scrollTop: 0}, 200);
            $("#button-anchor").css("transform", "rotate(0)");
            hasScrolledDown = false;
        }
    });


    for (var i = 0; i < audiosPath.length; i++) {
        var fileName = audiosPath[i].replace(/\.[^/.]+$/, "");
        $("#soundboard-container").append('<button class="soundboard-item" value="'
        + audiosPath[i]
        + '">'+ fileName + '</button>');
    }

    $(".soundboard-item").hover(function(){
        $(this).addClass("soundboard-item-hover");

    }, function(){
        $(this).removeClass("soundboard-item-hover");
    });

    $(".soundboard-item").click(function(){

        var audio = new Audio();
        var fileName = $(this).val();
        audio.src = pathConst + fileName;
        audio.volume = volumeSlider.value / 100;
        audio.load();
        audio.play();
        audio.addEventListener('loadedmetadata', function(){
            scoreUp(fileName);
        });
        audio.addEventListener('playing', function() {
            $(this).addClass("soundboard-item-hover");
        });
        audio.addEventListener('ended', function() {
            $(this).removeClass("soundboard-item-hover");
        }, false);
    });

    function playFile() {
        var pos = getRandom(0, audios.length);
        var filename = audiosPath[pos];
        var filetext = audiosText[pos];
        var src = pathConst + filename;
        var audio = new Audio();
        audio.src = src;
        audio.volume = volumeSlider.value / 100;
        audio.load();
        if (!isPlaying) {
            audio.play();
            audio.addEventListener('loadedmetadata', function() {
                isPlaying = true;
                $("#file-text").html(filetext);
                showText(filetext, audio.duration, filename);
                scoreUp(filename);
            });
            audio.addEventListener('playing', function() {
                isPlaying = true;
            });
            audio.addEventListener('ended', function() {
                sleep(400).then(() => {
                    isPlaying = false;
                });
            }, false);
        }
    }

    function showText(string, animDuration, filename) {
        var outerWidth = $("#file-text").outerWidth();
        var wrapperHeight = $("#wrapper").height();
        switch (filename) {
            case 'allahu1.ogg':
                $("#file-text").css("font-family", "noorFont");
                break;
            case 'allahu2.ogg':
                $("#file-text").css("font-family", "noorFont");
                break;
            default:
                $("#file-text").css("font-family", "textBoldFont");
                break;

        }
        $("#file-text").show();
        $("#file-text").offset({top: wrapperHeight/2, left: width});
        $("#file-text").animate({left: -outerWidth - 20},
            animDuration * 1000, $.bez([0.1, 0.76, 0.42, 0.16]), function(){
            $("#file-text").offset({top: wrapperHeight/2, left: width + outerWidth});
        });

    }

    function scoreUp(file) {
        var scoreText = $("#score").text();
        var currentScoreStr = scoreText.substring(6, scoreText.length);
        var currentScore = parseInt(currentScoreStr);
        var score = scoreCalc(file);
        currentScore = currentScore + score;

        $("#score").before('<h4 class="scoreup" style="display: none;">+'+score+'</h4>');
        var scoreupHeight = $(".scoreup").height();
        $(".scoreup").fadeIn(200).animate({bottom: scoreupHeight},
            {duration: 500, easing: 'swing'});
        $(".scoreup").fadeOut(200, 'linear', function(){
            $(".scoreup").remove();
        });
        $("#score").html("Score: " + currentScore);
    }

    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    function scoreCalc(filename) {
        switch (filename) {
            case 'noor_brinner.ogg':
                return 10;
                break;
            case 'walla.ogg':
                return 100;
                break;
            case 'wenn1.ogg':
                return 1000000;
                break;
            default:
                return 1;
                break;
        }
    }

});
