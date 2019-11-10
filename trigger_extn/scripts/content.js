var abuseWords = ['sexual', 'victims', 'assault', 'violence', 'sexually', 'abused', 'offences', 'harassment',
    'sex', 'abuse', 'gender', 'violence', 'crime', 'assaulted', 'aggression',
    'indecent', 'attacks', 'rape', 'exploitation', 'misconduct',
    'offenders', 'offense', 'molestation', 'molestation', 'offence',
    'attack', 'carnal', 'offender', 'offense', 'abusing',
    'violation', 'offending', 'assaults', 'trauma', 'sextortion', 'death', 'stabs',
    'forcible', 'indecency', 'exploited', 'exploitation', 'victimization', 'violence', 'crimes',
    'intercourse', 'grope', 'unlawful', 'death', 'dead', 'kill', 'murder', 'killing', 'murders', 'die', 'burn alive', 'road accident', 'casualties', 'killed', 'injured',
    'disaster', 'disasters', 'catastrophic', 'grave', 'accident', 'road kill', 'tortured', 'torture', 'tortured', 'assaulted'
];

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "getSource") {
            // var newsTitles = $(".lLrAF");
            // var titleCollection = [];
            // for (var i = 0; i < newsTitles.length; i++) {
            //     titleCollection.push(newsTitles[i].text);
            // }

            storedTriggers = []
            if (request.message){
                var storedTriggers = Object.keys(request.message);

            }

            abuseWords = abuseWords.concat(storedTriggers);

            $(".lLrAF").each(function() {

                var wordInTitle = $(this)[0].text.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split(" ");
                const newWordInTitle = wordInTitle.map(string => string.trim());

                // var wordInTitle = $(this)[0].text.toLowerCase().split(" ");

                const intersection = abuseWords.filter(element => newWordInTitle.includes(element));
                if (intersection.length > 0) {
                    // console.log(intersection);
                    $(this).parent().parent().parent().addClass("overlay");
                    $(this).parent().parent().parent().before($('<span/>').text("TW: Assault "));
                    $(this).parent().parent().parent().before($('<button class="block-btn">').text("Click to unhide"));
                }
            });

            $(".block-btn").click(function() {
                $(this).next().removeClass("overlay");
                $(this).remove();
            });
        }
    }
);