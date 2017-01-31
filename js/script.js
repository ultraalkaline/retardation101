$(window).load(function(){
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
    var pathConst = "audio/";
    var audios = audiosPath;

    function getRandom(min, max) {
        return Math.floor((Math.random() * max) + min);
    }

    $(".button").click(function() {
        event.preventDefault();
        $("audio").click();
    });

    $("audio").click(function(){
        var src = pathConst + audiosPath[getRandom(0, audios.length)];
        $(this).attr("src", src);
        this.play();
    });
});
