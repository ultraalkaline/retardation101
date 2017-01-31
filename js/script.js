$(window).load(function(){
    var width = $(document).width();
    var height = $(document).height();

    var audiosPath = new Array('aah1.ogg', 'aah2.ogg', 'aah3.ogg', 'aah4.ogg',
        'aah5.ogg', 'alla_ni_alla_ni.ogg', 'allahu1.ogg', 'allahu2.ogg',
        'bitch.ogg', 'bög1.ogg', 'bög2.ogg', 'calle_är_bög.ogg', 'cough.ogg',
        'cuck1.ogg', 'cum1.ogg', 'cum2.ogg', 'cum3.ogg', 'cum4.ogg', 'cum5.ogg',
        'cum6.ogg', 'cum7.ogg', 'fuckyou.ogg', 'fyfan.ogg', 'gat2sonk.ogg',
        'gay1.ogg', 'gay2.ogg', 'gay3.ogg', 'hölyshit.ogg', 'idubbbztv.ogg',
        'ja(g).ogg', 'laff1.ogg', 'laff2.ogg', 'laff3.ogg', 'laff4.ogg',
        'lol.ogg', 'meme1.ogg', 'meme2.ogg', 'meme3.ogg', 'noor_brinner.ogg',
        'ohno1.ogg', 'ohno2.ogg', 'ohno3.ogg', 'ohno4.ogg', 'ohno5.ogg',
        'ohno6.ogg', 'remove.ogg', 'retardation1.ogg', 'retardation2.ogg',
        'retardation3.ogg', 'retardation4.ogg', 'retardation5.ogg',
        'retardation6.ogg', 'retardation7.ogg', 'retardation8.ogg',
        'retardation9.ogg', 'scat1.ogg', 'theory1.ogg', 'theory2.ogg',
        'waduhek1.ogg', 'waduhek2.ogg', 'walla.ogg', 'what1.ogg',
        'wheezing1.ogg', 'wheezing2.ogg', 'wheezing3.ogg', 'wheezing4.ogg',
        'whitemaleprivilege1.ogg', 'yeah.ogg', 'är.ogg');

    var audiosText = new Array("OOH", "NEEJ", "AAH", "AAH OOH OOOOOH", "O-",
        "ALLA NI, ALLA NI", "ALLAHU AKBAAAR", "ALLAHU AKBAR", "BITCH", "BÖöÖG",
        "BÖöÖGAR", "CALLE. ÄR. BÖG.", "*H3H3&#x2122;*", "JAG TROR PÅ GUD",
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
        "JAG ZZVÄR PÅ GUD", "WHA?", "TEHHH", "HHEEHH", "TEHHH", "TEHHH",
        "GET FUCKED, CUCK", "YEAH", "ÄR");

    var isUnique = false;

    var pathConst = "audio/";
    var audios = audiosPath;

    var isPlaying = false;

    function getRandom(min, max) {
        return Math.floor((Math.random() * max) + min);
    }

    $(".button").click(function() {
        event.preventDefault();
        playFile();
    });

    function playFile() {
        var pos = getRandom(0, audios.length);
        var src = pathConst + audiosPath[pos];
        var audio = new Audio();
        audio.src = src;
        audio.load();
        if (isPlaying != true) {
            audio.play();
            audio.addEventListener('loadedmetadata', function() {
                isPlaying = true;
                var prevText = "Testing testing testing testing";
                $("#file-text").html(audiosText[pos]);
                showText(audiosText[pos], audio.duration);
                scoreUp(audiosPath[pos]);
            });
            audio.addEventListener('playing', function() {
                isPlaying = true;
            });
            audio.addEventListener('ended', function() {
                isPlaying = false;
            }, false);
        }
    }

    function showText(string, animDuration, unique) {
        var outerWidth = $("#file-text").outerWidth();
        $("#file-text").show();
        $("#file-text").offset({top: height/2, left: width + outerWidth});
        $("#file-text").animate({left: -outerWidth}, animDuration * 1000,
            $.bez([0.48, 1, 0.58, 0]), function(){
            $("#file-text").offset({top: height/2, left: width + outerWidth});
        });
    }

    function scoreUp(file) {
        var score;
        switch (file) {
            case 'noor_brinner.ogg':
                score = 10;
                break;
            default:
                score = 1;
                break;
        }
        $("#file-text").before('<h4 class="scoreup" style="display: none;">+'+score+'</h4>');
        var scoreupHeight = $(".scoreup").height();
        $(".scoreup").fadeIn(200).animate({bottom: scoreupHeight},
            {duration: 500, easing: 'swing'});
        $(".scoreup").fadeOut(200, 'linear', function(){
            $(".scoreup").remove();
        });
        var scoreText = $("#score").text();
        var currentScoreStr = scoreText.substring(6, scoreText.length);
        var currentScore = parseInt(currentScoreStr);
        currentScore++;
        console.log(currentScore);
        $("#score").html("Score: " + currentScore);
    }

});
