const articles = [
  {
    source: {
      id: null,
      name: 'CNET',
    },
    author: 'Sarah Lord',
    title: 'Formula 1 Racing 2023: How to Watch and Livestream the Italian GP Today - CNET',
    description: 'Max Verstappen can clinch his record-setting 10th straight victory today.',
    url: 'https://www.cnet.com/tech/services-and-software/formula-1-racing-2023-how-to-watch-and-livestream-the-italian-gp-today/',
    urlToImage:
      'https://www.cnet.com/a/img/resize/ce6f5151f68c7fdbeda3196e6ceeb274fb425e98/hub/2022/06/17/43ee687d-ae78-4299-b68d-829a60914212/gettyimages-1403515237.jpg?auto=webp&fit=crop&height=675&width=1200',
    publishedAt: '2023-09-03T10:00:07Z',
    content:
      "Red Bull's Max Verstappen won his ninth consecutive race last week, tying Sebastian Vettel's 2013 record. He can make history this week by winning the Italian Grand Prix. Verstappen's Red Bull team h… [+8438 chars]",
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Brendan Griffiths',
    title: 'Free Italian Monza F1 live stream: Where to watch Formula 1 GP online from anywhere',
    description:
      "Looking to watch the Italian Monza Formula 1 GP today? You're in luck, as there are multiple free F1 live stream options. And we can help you watch one from anywhere in the world.",
    url: 'https://www.businessinsider.com/guides/streaming/where-to-watch-italian-monza-f1-live-stream-free-2023',
    urlToImage: 'https://i.insider.com/64f45cb31b7ced0019c77da0?width=1200&format=jpeg',
    publishedAt: '2023-09-03T10:39:43Z',
    content:
      "When you buy through our links, Insider may earn an affiliate commission. Learn more\r\nWe can help you find everything you need to watch a free F1 live stream of the Italian Monza GP today. We've test… [+7093 chars]",
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Brendan Griffiths',
    title: 'Free Singapore F1 live stream: Where to watch Formula 1 GP online from anywhere',
    description:
      "Looking to watch the Singapore Formula 1 GP today? You're in luck, as there are multiple free F1 live stream options. And we can help you watch one from anywhere in the world.",
    url: 'https://www.businessinsider.com/guides/streaming/where-to-watch-singapore-f1-live-stream-free-2023',
    urlToImage: 'https://i.insider.com/6506c6b6cd637c0019c66914?width=1200&format=jpeg',
    publishedAt: '2023-09-17T09:33:02Z',
    content:
      'When you buy through our links, Insider may earn an affiliate commission. Learn more\r\nThe season might have said its goodbyes to Europe for the year, but we can help you say hello to a free F1 live s… [+7083 chars]',
  },
  {
    source: {
      id: null,
      name: 'Demofox.org',
    },
    author: 'demofox2',
    title: 'Inverting Gauss’ Formula',
    description:
      'There’s a famous story where Gauss was asked to sum the integers from 1 to 100 in elementary school. He noticed a pattern and came up with a formula to sum 1 to N in constant time (source: Th…',
    url: 'https://blog.demofox.org/2023/08/21/inverting-gauss-formula/',
    urlToImage: 'https://demofox2.files.wordpress.com/2023/08/image-8.png',
    publishedAt: '2023-08-22T05:50:12Z',
    content:
      'There’s a famous story where Gauss was asked to sum the integers from 1 to 100 in elementary school. He noticed a pattern and came up with a formula to sum 1 to N in constant time (source: https://ww… [+9060 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Grace Dean',
    title:
      "Elon Musk sent a picture of Grimes having a C-section to her father and brothers, leaving her 'horrified,' and him 'clueless' about why she was upset",
    description:
      '"It was Elon\'s Asperger\'s coming out in full," Grimes told Elon Musk\'s biographer. "He was just clueless about why I\'d be upset."',
    url: 'https://www.businessinsider.com/elon-musk-grimes-c-section-photo-father-brothers-x-birth-2023-9',
    urlToImage: 'https://i.insider.com/650052014717fd0019fc9995?width=1200&format=jpeg',
    publishedAt: '2023-09-12T15:18:22Z',
    content:
      'nullGilbert Carrasquillo/Getty Images\r\n<ul><li>Elon Musk sent a picture of Grimes having a C-section to their friends and family, a new book details.</li><li>"He was just clueless about why I\'d be up… [+2362 chars]',
  },
  {
    source: {
      id: 'abc-news',
      name: 'ABC News',
    },
    author: 'Sasha Pezenik, Sony Salzman',
    title: 'FDA sends warning letter to 3 major formula makers over quality control concerns',
    description:
      'The FDA has just sent new warning letters to three formula companies, red-flagging quality control concerns.',
    url: 'https://abcnews.go.com/US/fda-sends-warning-letter-3-major-formula-makers/story?id=102821276',
    urlToImage:
      'https://s.abcnews.com/images/Health/baby-formula-shortage-gty-rc-220725_1658785893697_hpMain_16x9_992.jpg',
    publishedAt: '2023-08-31T18:32:21Z',
    content:
      'The FDA has sent warning letters to three formula companies, red-flagging concerns about serious quality control issues at some manufacturing facilities.\r\nThe warning letters were all sent Wednesday … [+7519 chars]',
  },
  {
    source: {
      id: null,
      name: 'Demofox.org',
    },
    author: 'demofox2',
    title: 'Permutation Iteration and Random Access',
    description:
      'This post has an interesting link to the last one (Inverting Gauss’ Formula). The last post was focused on adding all the numbers from 1 to N, this post will feature multiplying all the numbe…',
    url: 'https://blog.demofox.org/2023/08/22/permutation-iteration-and-random-access/',
    urlToImage: 'https://demofox2.files.wordpress.com/2023/08/image-9.png',
    publishedAt: '2023-08-23T06:23:36Z',
    content:
      'This post has an interesting link to the last one (Inverting Gauss’ Formula). The last post was focused on adding all the numbers from 1 to N, this post will feature multiplying all the numbers from … [+10837 chars]',
  },
  {
    source: {
      id: null,
      name: 'CNET',
    },
    author: 'Sarah Lord',
    title: 'Formula 1 Racing 2023: How to Watch and Livestream the Singapore GP Today - CNET',
    description:
      'Max Verstappen is looking to extend his win streak to an unprecedented 11 in a row.',
    url: 'https://www.cnet.com/tech/services-and-software/formula-1-racing-2023-how-to-watch-and-livestream-the-singapore-gp-today/',
    urlToImage:
      'https://www.cnet.com/a/img/resize/ce6f5151f68c7fdbeda3196e6ceeb274fb425e98/hub/2022/06/17/43ee687d-ae78-4299-b68d-829a60914212/gettyimages-1403515237.jpg?auto=webp&fit=crop&height=675&width=1200',
    publishedAt: '2023-09-17T06:00:03Z',
    content:
      "Red Bull's Max Verstappen won his 10th consecutive race last week, beating Sebastian Vettel's 2013 record. He will be looking to extend his record-breaking streak to 11 this week in the Singapore Gra… [+8557 chars]",
  },
  {
    source: {
      id: null,
      name: 'CNET',
    },
    author: 'Sarah Lord',
    title: 'Formula 1 Racing 2023: How to Watch and Livestream the Dutch GP Today - CNET',
    description: 'The second half of the F1 season starts today.',
    url: 'https://www.cnet.com/tech/services-and-software/formula-1-racing-2023-how-to-watch-and-livestream-the-dutch-gp-today/',
    urlToImage:
      'https://www.cnet.com/a/img/resize/ce6f5151f68c7fdbeda3196e6ceeb274fb425e98/hub/2022/06/17/43ee687d-ae78-4299-b68d-829a60914212/gettyimages-1403515237.jpg?auto=webp&fit=crop&height=675&width=1200',
    publishedAt: '2023-08-27T10:00:03Z',
    content:
      'F1 racing is back from summer break with Red Bull leading the charge. The team has yet to lose a race in 2023, while lead driver Max Verstappen is on a seven race win streak. He has a comfortable lea… [+8669 chars]',
  },
  {
    source: {
      id: 'the-verge',
      name: 'The Verge',
    },
    author: 'Kevin Nguyen',
    title: 'Time to revisit the original ‘Battle Royale’',
    description:
      'Twenty years later, you can still see the bloody fingerprints of one violent Japanese film on pop culture today. Kinji Fukasaku cult hit streams this month on the Criterion Channel.',
    url: 'https://www.theverge.com/23851408/battle-royale-revisited-hunger-games-fortnite-squid-game-criterion',
    urlToImage:
      'https://cdn.vox-cdn.com/thumbor/spUrTxlOBYsHVSk1V82qKW22cAc=/0x0:1920x1080/1200x628/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/24882647/BATTLE_ROYALE_fg_33839_0067_Layer_98.jpg',
    publishedAt: '2023-09-01T13:00:00Z',
    content:
      'Chiaki Kuriyama plays one of the students forced to fight to the death in Battle Royale. | Image: The Criterion Channel\r\n\n \n\n\n Twenty years later, you can still see the bloody fingerprints of one vio… [+5510 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Grace Kay',
    title:
      'Elon Musk pictured for the first time with Neuralink director and the twins they quietly had together',
    description:
      "Author Walter Isaacson shared a rare peek into Elon Musk's relationship with one of the mothers of his children, Shivon Zilis, who works at Neuralink.",
    url: 'https://www.businessinsider.com/elon-musk-photo-twins-with-neuralink-shivon-zilis-2023-9',
    urlToImage: 'https://i.insider.com/64f8928204e14000196cda4a?width=1200&format=jpeg',
    publishedAt: '2023-09-06T17:39:55Z',
    content:
      "Walter Isaacson shared a new picture of Elon Musk with Shivon Zilis and their two children.Clive Mason - Formula 1/Formula 1 via Getty Image\r\n<ul>\n<li>Walter Isaacson shared a peek into Elon Musk's r… [+3213 chars]",
  },
  {
    source: {
      id: null,
      name: 'Jalopnik',
    },
    author: 'Elizabeth Blackstock',
    title: 'RACEWKND Magazine Remains One Of The Finest Formula 1 Publications Around',
    description:
      'The world of motorsport media can get a little boring. So many publications have spent decades telling the same story in different ways, when they should be taking advantage of the fact that this high-adrenaline sport warrants experimentation and innovation. …',
    url: 'https://jalopnik.com/racewknd-one-of-the-finest-formula-1-magazines-1850796450',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3fe213bcc38aa08c6de452658e468224.jpg',
    publishedAt: '2023-09-04T14:30:00Z',
    content:
      'The world of motorsport media can get a little boring. So many publications have spent decades telling the same story in different ways, when they should be taking advantage of the fact that this hig… [+2452 chars]',
  },
  {
    source: {
      id: null,
      name: 'Jalopnik',
    },
    author: 'Elizabeth Blackstock',
    title: 'Formula 1 Owners Are Stuck Marketing A Sport After They Sold Us Entertainment',
    description:
      'At the 2023 Italian Grand Prix, Max Verstappen of Red Bull Racing became the Formula 1 driver with the most consecutive wins in history. Of the 14 races run so far this year, Verstappen has won 12 of them; his teammate Sergio Perez has won the remaining two. …',
    url: 'https://jalopnik.com/formula-1-liberty-media-marketing-sport-entertainment-1850812398',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8abc1939d17d01e7652162ad49130322.jpg',
    publishedAt: '2023-09-07T14:00:00Z',
    content:
      'At the 2023 Italian Grand Prix, Max Verstappen of Red Bull Racing became the Formula 1 driver with the most consecutive wins in history. Of the 14 races run so far this year, Verstappen has won 12 of… [+5768 chars]',
  },
  {
    source: {
      id: null,
      name: 'Jalopnik',
    },
    author: 'Owen Bellwood',
    title: 'Ferrari Formula 1 Driver Chases Down Thieves For Stealing His $540,000 Watch',
    description:
      'For once, Ferrari formula 1 driver Carlos Sainz seemed to have a pretty good weekend at the Italian Grand Prix in Monza. He put his car on pole in qualifying and came in third after holding off a late challenge from teammate Charles LecLerc. But his weekend t…',
    url: 'https://jalopnik.com/ferrari-formula-1-driver-chases-down-thieves-for-steali-1850807808',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d5bb785e6f9878253e9a342440273a1c.jpg',
    publishedAt: '2023-09-06T16:00:00Z',
    content:
      'For once, Ferrari formula 1 driver Carlos Sainz seemed to have a pretty good weekend at the Italian Grand Prix in Monza. He put his car on pole in qualifying and came in third after holding off a lat… [+1524 chars]',
  },
  {
    source: {
      id: null,
      name: 'Deadspin',
    },
    author: 'Field Level Media',
    title: 'Playoff hopefuls meet as Jewell Loyd, Storm face Sky',
    description:
      'The winning formula for the Seattle Storm is easy to figure out: Get Jewell Loyd cooking and find ways to get stops defensively.Read more...',
    url: 'https://deadspin.com/playoff-hopefuls-meet-as-jewell-loyd-storm-face-sky-1850760137',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7639f6c196ceeebd460af87f21cfd89e.jpg',
    publishedAt: '2023-08-21T23:11:43Z',
    content:
      'The winning formula for the Seattle Storm is easy to figure out: Get Jewell Loyd cooking and find ways to get stops defensively.\r\nThat worked out Sunday night in Minneapolis, where Loyd went off for … [+1702 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Pete Syme',
    title:
      'FTX is hoping to claw back the millions of dollars spent on celebrity promotions including Shaq and Naomi Osaka',
    description:
      'FTX is looking into whether it can recover millions paid to celebrities like Naomi Osaka and Shaq as part of Chapter 11 bankruptcy.',
    url: 'https://www.businessinsider.com/ftx-wants-to-reclaim-millions-from-celebrity-sponsorships-shaq-osaka-2023-9',
    urlToImage: 'https://i.insider.com/6500392e4717fd0019fc8bd0?width=1200&format=jpeg',
    publishedAt: '2023-09-12T11:24:21Z',
    content:
      "Sam Bankman-Fried and Shaquille O'Neal.Michael M. Santiago/Getty Images; Megan Briggs/Getty Images\r\n<ul><li>FTX is hoping to recover the millions it paid in sponsorships.</li><li>Shaquille O'Neal and… [+2076 chars]",
  },
  {
    source: {
      id: 'espn',
      name: 'ESPN',
    },
    author: 'Mike Coppinger',
    title: 'Sources: De Los Santos steps in as Stevenson foe',
    description:
      'Shakur Stevenson and Edwin De Los Santos have agreed to a deal for a Nov. 16 fight in Las Vegas after undefeated contender Frank Martin decided not to proceed with a bout against Stevenson, sources told ESPN.',
    url: 'https://www.espn.com/boxing/story/_/id/38393043/shakur-stevenson-gets-edwin-de-los-santos-new-matchup-sources-say',
    urlToImage:
      'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0409%2Fr1156415_1296x729_16%2D9.jpg',
    publishedAt: '2023-09-13T18:20:38Z',
    content:
      'Shakur Stevenson and Edwin De Los Santos have agreed to a deal for a Nov. 16 fight in Las Vegas for the vacant WBC lightweight title, sources told ESPN.\r\nThe 135-pound title bout will headline a Top … [+1678 chars]',
  },
  {
    source: {
      id: null,
      name: 'IndieWire',
    },
    author: 'Samantha Bergeson',
    title:
      'Keanu Reeves Buckles Up for Racing Hulu Series ‘Brawn: The Impossible Formula 1 Story’ — See the First Look',
    description:
      'Reeves hosts a four-part docuseries about the 2009 Formula 1 World Championship that saw an underdog team win.',
    url: 'https://www.indiewire.com/news/general-news/keanu-reeves-brawn-the-impossible-formula-1-story-first-look-1234899081/',
    urlToImage: 'https://www.indiewire.com/wp-content/uploads/2023/08/Keanu_Jensen_00982.jpg',
    publishedAt: '2023-08-24T23:00:00Z',
    content:
      'Keanu Reeves is steering into a new direction with upcoming Hulu series “Brawn: The Impossible Formula One Story.” \r\nA U.K. Original series, “Brawn” will debut on Disney+ globally outside of the U.S.… [+1948 chars]',
  },
  {
    source: {
      id: 'bleacher-report',
      name: 'Bleacher Report',
    },
    author: 'Scott Polacek',
    title: 'Daniel Ricciardo out of F1 Dutch Grand Prix with Hand Injury After Crash in Practice',
    description:
      "Daniel Ricciardo will not participate in Sunday's Dutch Grand Prix. Formula 1 announced Friday that the Alpha Tauri driver suffered an injury during practice…",
    url: 'https://bleacherreport.com/articles/10087270-daniel-ricciardo-out-of-f1-dutch-grand-prix-with-hand-injury-after-crash-in-practice',
    urlToImage:
      'https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1692985453/ccszhc4ntqrhttybhsph.jpg',
    publishedAt: '2023-08-25T17:45:03Z',
    content:
      "Peter Fox/Getty Images\r\nDaniel Ricciardo will not participate in Sunday's Dutch Grand Prix.\r\nFormula 1 announced Friday that the Alpha Tauri driver suffered an injury during practice and will be repl… [+380 chars]",
  },
  {
    source: {
      id: null,
      name: 'MakeUseOf',
    },
    author: 'Ifeanyi Iheagwara',
    title: 'How to Use the RANDARRAY Function to Randomly Sort Data in Excel',
    description:
      'Want to add a little excitement to your data analysis? Learn how to use the RANDARRAY function to randomly sort your data in Excel.',
    url: 'https://www.makeuseof.com/use-randarray-function-excel/',
    urlToImage:
      'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/untitled-design-2.jpg',
    publishedAt: '2023-08-31T16:46:25Z',
    content:
      'There are many different functions available in Excel that make data transformation and organization easy. One of these functions is the RANDARRAY Function, which allows you to randomize your data ef… [+6209 chars]',
  },
  {
    source: {
      id: null,
      name: 'Autoblog',
    },
    author: 'Bloomberg',
    title: "Max Verstappen loves the Netflix boost to F1, but not the added 'spice'",
    description:
      "Filed under:\n Motorsports,TV/Movies\n Continue reading Max Verstappen loves the Netflix boost to F1, but not the added 'spice'\nMax Verstappen loves the Netflix boost to F1, but not the added 'spice' originally appeared on Autoblog on Sat, 2 Sep 2023 08:00:00 E…",
    url: 'https://www.autoblog.com/2023/09/02/max-verstappen-loves-the-netflix-boost-to-f1-but-not-the-added-spice/',
    urlToImage:
      'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.yimg.com/os/creatr-uploaded-images/2023-08/44fc8580-4844-11ee-ba5f-838f8c6b71e8',
    publishedAt: '2023-09-02T12:00:00Z',
    content:
      'Netflixs "Drive to Survive" documentary series has elevated Formula 1 drivers and officials to global super-stardom, bringing in a whole new demographic of fans. Yet Max Verstappen isnt its biggest f… [+1861 chars]',
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News',
    },
    author: null,
    title: 'Every team met spending rules last season - FIA',
    description:
      "Governing body the FIA confirms all 10 Formula 1 teams complied with the sport's cost cap in 2022.",
    url: 'https://www.bbc.co.uk/sport/formula1/66717932',
    urlToImage:
      'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16D30/production/_130988439_gettyimages-1564790294.jpg',
    publishedAt: '2023-09-05T11:10:10Z',
    content:
      "The FIA introduced the cost cap in 2021 as part of a bid to level the playing field in the sport\r\nAll Formula 1 teams complied with the sport's cost cap in 2022, governing body the FIA has said.\r\nThe… [+2364 chars]",
  },
  {
    source: {
      id: 'the-next-web',
      name: 'The Next Web',
    },
    author: 'Linnea Ahlgren',
    title: 'Bankrupt ebike startup VanMoof finds buyer in F1’s McLaren Applied',
    description:
      'VanMoofers, rejoice — the ebike gods have not abandoned you. Yesterday, McLaren Applied and its escooter department Lavoie announced they had agreed to purchase the bankrupt ebike startup.  The details of the deal have not been made public. However, the F1 en…',
    url: 'https://thenextweb.com/news/bankrupt-ebike-startup-vanmoof-f1-mclaren-applied',
    urlToImage:
      'https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F09%2Fvanmoof-yellow.jpg&signature=5f705bc51dddea12591f46b77a141155',
    publishedAt: '2023-09-01T10:50:51Z',
    content:
      'VanMoofers, rejoice the ebike gods have not abandoned you. Yesterday, McLaren Applied and its escooter department Lavoie announced they had agreed to purchase the bankrupt ebike startup. \r\nThe detail… [+3193 chars]',
  },
  {
    source: {
      id: null,
      name: 'MakeUseOf',
    },
    author: 'Ifeanyi Iheagwara',
    title: 'How to Use the TAKE and DROP Functions in Excel',
    description:
      'Learn how to precisely extract and manipulate your data, making Excel work smarter for you.',
    url: 'https://www.makeuseof.com/how-to-use-take-and-drop-functions-in-excel/',
    urlToImage:
      'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/08/untitled-design-1-3.jpg',
    publishedAt: '2023-09-14T13:01:26Z',
    content:
      'When working with your dataset in Microsoft Excel, there are occasions when you need to analyze only a portion of the data. Thankfully, Excel provides the TAKE and DROP functions for situations like … [+5000 chars]',
  },
  {
    source: {
      id: null,
      name: 'PetaPixel',
    },
    author: 'Matt Growcoot',
    title: 'F1 Posts Old Footage of Camera Flying off Car and Destroying the Car Behind',
    description:
      'Formula 1 has shared an old video showing the astonishing moment a camera attached to the rear wing of a Ferrari came loose and struck the other Ferrari following behind.\n[Read More]',
    url: 'https://petapixel.com/2023/09/11/f1-posts-old-footage-of-camera-flying-off-car-and-destroying-the-car-behind/',
    urlToImage: 'https://petapixel.com/assets/uploads/2023/09/Camera-Hits-F1-Car.jpg',
    publishedAt: '2023-09-11T12:51:42Z',
    content:
      'Ferrari driver Gerhard Berger was lucky the camera hit his car and not his head in 1995. | Formula 1\r\nFormula 1 has shared an old video showing the astonishing moment a camera attached to the rear wi… [+1920 chars]',
  },
  {
    source: {
      id: null,
      name: 'Impulsetrain.com',
    },
    author: null,
    title: 'Porter/Duff Compositing and Blend Modes (2013)',
    description: 'Comments',
    url: 'http://ssp.impulsetrain.com/porterduff.html',
    urlToImage: null,
    publishedAt: '2023-09-04T22:04:41Z',
    content:
      'In the Porter/Duff compositing algebra, images are equipped with an\r\nalpha channel that determines on a per-pixel basis whether the image\r\nis there or not. When the alpha channel is 1, the image is f… [+6797 chars]',
  },
  {
    source: {
      id: null,
      name: 'The A.V. Club',
    },
    author: 'Mary Kate Carr',
    title: 'Adam Driver goes full speed ahead in Michael Mann’s Ferrari trailer',
    description:
      'Adam Driver lives up to the prophecy of his name in Ferrari, the new historical drama from Michael Mann. The actor, who has clearly never met an old, nearly washed-up Italian character he didn’t like, stars as the former Formula 1 racer and automobile entrepr…',
    url: 'https://www.avclub.com/adam-driver-goes-full-speed-ahead-in-michael-mann-s-fer-1850787395',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/32e5bde3d6baaccef39c516376f355fd.png',
    publishedAt: '2023-08-30T15:52:15Z',
    content:
      'Adam Driver lives up to the prophecy of his name in Ferrari, the new historical drama from Michael Mann. The actor, who has clearly never met an old, nearly washed-up Italian character he didnt like,… [+2340 chars]',
  },
  {
    source: {
      id: null,
      name: 'Jalopnik',
    },
    author: 'Ryan Erik King',
    title: 'Lewis Hamilton Staying In F1 With Mercedes Through 2025',
    description:
      'The Mercedes-AMG Petronas F1 Team has announced that Lewis Hamilton and George Russell will remain with the team through the 2025 Formula 1 season. The pair of agreements keep the driver duo locked in at Mercedes until the end of the current rules cycle. Merc…',
    url: 'https://jalopnik.com/lewis-hamilton-staying-in-f1-with-mercedes-through-2025-1850791776',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4196e37e960be5d5f1e0e6f27fa25877.jpg',
    publishedAt: '2023-08-31T14:40:00Z',
    content:
      'The Mercedes-AMG Petronas F1 Team has announced that Lewis Hamilton and George Russell will remain with the team through the 2025 Formula 1 season. The pair of agreements keep the driver duo locked i… [+1321 chars]',
  },
  {
    source: {
      id: null,
      name: 'Jalopnik',
    },
    author: 'Elizabeth Blackstock',
    title: 'Las Vegas Is More Of A Motorsport City Than You’d Expect',
    description:
      'I’ll be the first to admit that I’ve been skeptical about Formula 1’s upcoming Las Vegas Grand Prix, but as the race itself approaches and after a high-energy 30-hour trip to Vegas to check out all things F1, I have to say: I’ve changed my mind. About some th…',
    url: 'https://jalopnik.com/las-vegas-is-the-perfect-city-for-formula-1-1850796413',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8108e703054ea279772b770f025a1cb8.jpg',
    publishedAt: '2023-09-04T13:00:00Z',
    content:
      'Ill be the first to admit that Ive been skeptical about Formula 1s upcoming Las Vegas Grand Prix, but as the race itself approaches and after a high-energy 30-hour trip to Vegas to check out all thin… [+2650 chars]',
  },
  {
    source: {
      id: null,
      name: 'Jalopnik',
    },
    author: 'Bradley Brownell',
    title:
      'NASCAR Truck Racer Who Works As A Server At Outback Steakhouse Gets Outback Steakhouse Sponsorship',
    description:
      'Racing driver Stephen Mallozzi has recently come on the media scene as one of the most interesting stories in racing. While he started racing in karts as a nine-year-old, and at one point was racing— albeit on a much smaller budget — against the likes of Form…',
    url: 'https://jalopnik.com/nascar-racer-works-outback-steakhouse-gets-sponsorship-1850840161',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/aeebc52a7edfea96094d2d60df45bab9.jpg',
    publishedAt: '2023-09-14T20:35:00Z',
    content:
      'Racing driver Stephen Mallozzi has recently come on the media scene as one of the most interesting stories in racing. While he started racing in karts as a nine-year-old, and at one point was racing … [+2035 chars]',
  },
  {
    source: {
      id: 'bleacher-report',
      name: 'Bleacher Report',
    },
    author: 'Joseph Zucker',
    title: "Italian F1 GP 2023 Results: Max Verstappen Wins, Breaks Sebastian Vettel's Streak",
    description:
      "Maybe it's time to start leading with who finished second in each Formula 1 race. Max Verstappen made it 10 wins in a row Sunday in the Italian Grand Prix in…",
    url: 'https://bleacherreport.com/articles/10088159-italian-f1-gp-2023-results-max-verstappen-wins-breaks-sebastian-vettels-streak',
    urlToImage:
      'https://media.bleacherreport.com/image/upload/x_129,y_0,w_1514,h_1009,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1693750460/kdcjfspxq7comdn30ijo.jpg',
    publishedAt: '2023-09-03T14:47:18Z',
    content:
      "Mario Renzi - Formula 1/Formula 1 via Getty Images\r\nMaybe it's time to start leading with who finished second in each Formula 1 race.\r\nMax Verstappen made it 10 wins in a row Sunday in the Italian Gr… [+5794 chars]",
  },
  {
    source: {
      id: 'bleacher-report',
      name: 'Bleacher Report',
    },
    author: 'Scott Polacek',
    title: "Singapore F1 GP 2023 Results: Max Verstappen's Win Streak Snapped by Carlos Sainz Jr.",
    description:
      'It turns out someone besides Max Verstappen is allowed to win a Formula 1 race. And so is another team besides Red Bull. For the first time in 2023, a non-Red…',
    url: 'https://bleacherreport.com/articles/10089765-singapore-f1-gp-2023-results-max-verstappens-win-streak-snapped-by-carlos-sainz-jr',
    urlToImage:
      'https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1694958697/y8chhrvludz5o7rve69c.jpg',
    publishedAt: '2023-09-17T13:58:48Z',
    content:
      'LILLIAN SUWANRUMPHA/AFP via Getty Images\r\nIt turns out someone besides Max Verstappen is allowed to win a Formula 1 race.\r\nAnd so is another team besides Red Bull.\r\nFor the first time in 2023, a non-… [+4287 chars]',
  },
  {
    source: {
      id: null,
      name: 'Uncrate.com',
    },
    author: 'Uncrate',
    title: 'Atari 2600+',
    description:
      'Vintage gamers can now play all their favorite titles on one system. While the exterior looks the same, the Atari 2600+ reimagines the classic console to support modern use. It comes with a 10-in-1 game cartridge featuring iconic titles like...',
    url: 'https://uncrate.com/atari-2600/',
    urlToImage: 'https://uncrate.com/p/2023/08/atari-2600-plus.jpg',
    publishedAt: '2023-08-28T18:18:47Z',
    content:
      "Skincare doesn't have to be complicated. The Protagonist packs a whole routine in one little jar. The all-in-one serum contains 14 active ingredients to do the work of multiple products, streamlining… [+408 chars]",
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News',
    },
    author: null,
    title: 'Haas team to retain Hulkenberg and Magnussen',
    description:
      'The Haas team will keep Nico Hulkenberg and Kevin Magnussen as their drivers for a second Formula 1 season in 2024.',
    url: 'https://www.bbc.co.uk/sport/formula1/66600477',
    urlToImage:
      'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/06C0/production/_130882710_gettyimages-1486504067.jpg',
    publishedAt: '2023-08-24T08:01:46Z',
    content:
      'Kevin Magnussen (left) and Nico Hulkenberg (right) will remain with the Haas team in 2024\r\nThe Haas team will keep Nico Hulkenberg and Kevin Magnussen as their drivers for a second Formula 1 season i… [+2781 chars]',
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News',
    },
    author: null,
    title: "Red Bull 'very difficult' to catch before 2026 - Leclerc",
    description:
      'Ferrari\'s Charles Leclerc says it will be "very, very difficult" to catch Red Bull before the end of the current set of Formula 1 regulations in 2025.',
    url: 'https://www.bbc.co.uk/sport/formula1/66607917',
    urlToImage:
      'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/2F6B/production/_130893121_maxcharles.jpg',
    publishedAt: '2023-08-24T16:24:55Z',
    content:
      "Charles Leclerc (left) finished third behind Red Bull's Sergio Perez (right) and race winner Max Verstappen (centre, right) at the Belgium Grand Prix before the summer break\r\nFerrari's Charles Lecler… [+4106 chars]",
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News',
    },
    author: null,
    title: 'Hamilton has ‘unfinished business’ in F1',
    description:
      'Lewis Hamilton says his decision to sign a new contract with Mercedes was motivated by the fact he and the team have "unfinished business" in Formula 1.',
    url: 'https://www.bbc.co.uk/sport/formula1/66674434',
    urlToImage:
      'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/8A61/production/_130952453_lewis_hamilton_monza_getty.jpg',
    publishedAt: '2023-08-31T16:22:27Z',
    content:
      "Lewis Hamilton lost the 2021 drivers' championship on the final lap of the season when he was passed by Max Verstappen\r\nLewis Hamilton says his decision to sign a new contract with Mercedes was motiv… [+5996 chars]",
  },
  {
    source: {
      id: 'bleacher-report',
      name: 'Bleacher Report',
    },
    author: 'Mike Chiari',
    title: "Lewis Hamilton, Mercedes Agree to New Contract Until 2025 amid F1's 2023 Season",
    description:
      "Formula One announced Thursday that superstar driver Lewis Hamilton agreed to a new contract that will keep him with Mercedes until 2025. Hamilton's contract…",
    url: 'https://bleacherreport.com/articles/10087859-lewis-hamilton-mercedes-agree-to-new-contract-until-2025-amid-f1s-2023-season',
    urlToImage:
      'https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1693484146/y79zfbobdfmmzworv8su.jpg',
    publishedAt: '2023-08-31T12:16:35Z',
    content:
      'Dursun Aydemir/Anadolu Agency via Getty Images\r\nFormula One announced Thursday that superstar driver Lewis Hamilton agreed to a new contract that will keep him with Mercedes until 2025.\r\nFormula 1@F1… [+856 chars]',
  },
  {
    source: {
      id: null,
      name: 'The A.V. Club',
    },
    author: 'Mary Kate Carr',
    title: '"Rich Men North Of Richmond" is #1 again amid country chart domination',
    description:
      'Popular music has never been completely separate from politics, but the Billboard charts have rarely felt so directly tied to reactionary conservative emotion than it has this summer. Oliver Anthony’s “Rich Men North Of Richmond” just took the number one spot…',
    url: 'https://www.avclub.com/rich-men-north-of-richmond-1-second-week-1850781609',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5488a287f48e15d447ebc3955f2b41be.png',
    publishedAt: '2023-08-28T20:25:49Z',
    content:
      'Popular music has never been completely separate from politics, but the Billboard charts have rarely felt so directly tied to reactionary conservative emotion than it has this summer. Oliver Anthonys… [+2544 chars]',
  },
  {
    source: {
      id: 'espn',
      name: 'ESPN',
    },
    author: null,
    title: 'Pound-for-pound rankings: Which fighter made the biggest move? Marshall? Mayer?',
    description:
      "Lots of fights, lots of movement and new faces in the top 10. Here's the latest women's pound-for-pound rankings.",
    url: 'https://www.espn.com/boxing/story/_/id/38333562/women-boxing-pound-pound-rankings-which-fighter-made-biggest-move-savannah-marshall-mikaela-mayer',
    urlToImage:
      'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0905%2Fr1220496_1296x729_16%2D9.jpg',
    publishedAt: '2023-09-06T12:05:36Z',
    content:
      'Mikaela Mayer moved up one division for a second consecutive fight, this time to face Silvia Bortot at junior welterweight (catchweight of 142 pounds) in a fight she dominated, winning all 10 rounds.… [+5447 chars]',
  },
  {
    source: {
      id: null,
      name: 'Slickdeals.net',
    },
    author: 'Addax',
    title:
      '12-Quart Mobil 1 Full Synthetic Motor Oil: FS European Car Formula 0W-40 $49 & More + Free S/H',
    description:
      'Update: This popular deal is still available \n \nWalmart has *Select 12-Quart Mobil 1 Full Synthetic Motor Oil* for $59 - $10 Off w/ promo code WOWFRESH = *$49*. *Shipping is free*. \n \nThanks...',
    url: 'https://slickdeals.net/f/16811927-12-quart-mobil-1-full-synthetic-motor-oil-fs-european-car-formula-0w-40-49-more-free-s-h',
    urlToImage: 'https://static.slickdealscdn.com/attachment/4/5/4/3/2/5/14096867.attach',
    publishedAt: '2023-08-21T20:31:39Z',
    content:
      'HOLY SNAP! this is a good deal!i bought the 3pack for $71 and submitted the rebate and got my refund in maybe within a week.\\this was the best $/qt ratio combined with rebate.i saw this big tank deal… [+220 chars]',
  },
  {
    source: {
      id: 'espn',
      name: 'ESPN',
    },
    author: 'ESPN staff',
    title: 'College football Week 1 Power Rankings: Where did Coach Prime and Colorado debut?',
    description:
      'ESPN writers rank the best teams in college football after Week 1 of the 2023 season.',
    url: 'https://www.espn.com/college-football/story/_/id/38314862/espn-2023-college-football-power-rankings-week-1-colorado-deion-sanders',
    urlToImage:
      'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0902%2Fr1219288_1296x729_16%2D9.jpg',
    publishedAt: '2023-09-05T04:26:06Z',
    content:
      "Coach Deion Sanders said his Colorado Buffaloes were coming in 2023, and now they've arrived in our Power Rankings.\r\nThe Buffaloes' 45-42 victory in Week 1 at No. 17 TCU, the national runner-up in th… [+21111 chars]",
  },
  {
    source: {
      id: 'espn',
      name: 'ESPN',
    },
    author: 'Mike Coppinger',
    title: 'Sources: Stevenson, Martin agree to fall title tilt',
    description:
      'Lightweight star Shakur Stevenson and contender Frank Martin have reached a deal for a fall title title bout for the vacant WBC belt, sources tell ESPN.',
    url: 'https://www.espn.com/boxing/story/_/id/38333260/sources-shakur-stevenson-frank-martin-reach-title-fight-deal',
    urlToImage:
      'https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1030%2Fr1083686_1296x729_16%2D9.jpg',
    publishedAt: '2023-09-05T17:52:18Z',
    content:
      'Shakur Stevenson and Frank Martin have agreed to a deal for a lightweight fight that will likely take place on Nov. 16 in Las Vegas or Dec. 9 in New York, sources told ESPN.\r\nThe deal came hours befo… [+1661 chars]',
  },
  {
    source: {
      id: null,
      name: 'MakeUseOf',
    },
    author: 'Bolanle Abiodun',
    title: '9 Excel DATE Functions You Should Know',
    description:
      "Want to master Excel's date functions? Here are some essential ones you need to know.",
    url: 'https://www.makeuseof.com/excel-date-functions/',
    urlToImage:
      'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/05/excel-sum-sigma.jpg',
    publishedAt: '2023-08-20T12:30:24Z',
    content:
      "Excel is more than a tool for basic calculations and data organization; it's also an effective tool for handling and analyzing date-related calculations. You can use Excel's date functions to calcula… [+5990 chars]",
  },
  {
    source: {
      id: null,
      name: '/FILM',
    },
    author: 'staff@slashfilm.com (Rafael Motamayor)',
    title: 'Loki Season 1 Took Unexpected Inspiration From Teletubbies',
    description:
      'Believe it or not, the world of everyone&amp;#39;s favorite little colorful goons, The Teletubbies, played an unlikely inspiration for Loki season 1. It&amp;#39;s true!',
    url: 'https://www.slashfilm.com/1374326/loki-season-1-teletubbies-inspiration/',
    urlToImage:
      'https://www.slashfilm.com/img/gallery/loki-season-1-took-unexpected-inspiration-from-teletubbies/l-intro-1693236084.jpg',
    publishedAt: '2023-09-12T00:00:13Z',
    content:
      '"Loki" remains the best TV show in the Marvel Cinematic Universe a show with a clear vision, great visuals that stood out from the formula of the franchise, and a fantastic and self-contained story t… [+1337 chars]',
  },
  {
    source: {
      id: null,
      name: 'Autoblog',
    },
    author: 'Chris Teague',
    title: 'Swiss students just set a mind-bending EV acceleration record',
    description:
      'Filed under:\n Green,Weird Car News,Electric,Performance\n Continue reading Swiss students just set a mind-bending EV acceleration record\nSwiss students just set a mind-bending EV acceleration record originally appeared on Autoblog on Wed, 13 Sep 2023 11:59:00 …',
    url: 'https://www.autoblog.com/2023/09/13/swiss-students-just-set-a-mind-bending-ev-acceleration-record/',
    urlToImage:
      'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/09/13075113/Screen-Shot-2023-09-13-at-7.47.47-AM.jpg',
    publishedAt: '2023-09-13T15:59:00Z',
    content:
      'Last year, a team of German students set a world record for the fastest-accelerating electric car, pulling 2.5Gs while reaching 62 mph (100km/h) in a staggering 1.461 seconds. Now, that record has be… [+1623 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Dan DeFrancesco',
    title: "Insider Today: IPOs' make-or-break moment",
    description:
      "Chip design firm Arm's upcoming IPO comes at a critical time for the public markets. Meanwhile, Apple's iPhone 15 will require a new charger.",
    url: 'https://www.businessinsider.com/arm-ipo-finance-markets-iphone-new-charger-2023-9',
    urlToImage: 'https://i.insider.com/64f7a9e11b7ced0019c8a11c?width=1200&format=jpeg',
    publishedAt: '2023-09-06T13:20:08Z',
    content:
      "The IPO market has reached a critical juncture.Drew Angerer / Getty\r\n<ul>\n<li>This post originally appeared in the Insider Today newsletter. Sign up here.</li>\n</ul>Halfway to the weekend! Here's a v… [+7545 chars]",
  },
  {
    source: {
      id: 'la-repubblica',
      name: 'La Repubblica',
    },
    author: 'repubblicawww@repubblica.it (Redazione Repubblica.it)',
    title: 'Gp Monza 2023: orari e dove vederlo in tv',
    description: 'La Formula 1 in Italia. Sainz in pole position davanti a Verstappen e Leclerc',
    url: 'https://www.repubblica.it/sport/formulauno/2023/09/03/news/gp_monza_2023_orari_dove_vedere_f1-413129856/',
    urlToImage:
      'https://www.repstatic.it/content/nazionale/img/2023/09/03/102753233-128ca169-183f-4e91-9a26-27f378e9c58d.jpg',
    publishedAt: '2023-09-03T08:29:11Z',
    content:
      'Diretta tv e streaming del Gran Premio dItalia\r\nEvento: Gp dItaliaData: Domenica 3 settembre 2023Dove: Monza, ItaliaOrario: 15:00Canale TV: Sky Sport F1 (207), Sky Sport Summer (201), Sky Sport 4K (2… [+1158 chars]',
  },
  {
    source: {
      id: null,
      name: 'Food52.com',
    },
    author: 'Paul Hagopian',
    title: 'The Only Margarita Recipe That You Need',
    description:
      'Of our 52 most popular cocktails of all time, eight are margaritas. This should surprise no one: Margaritas—when executed well—are perfect. And while all eight of those very popular recipes are fantastic, in practice, you only need one of them. Enter: Erica K…',
    url: 'https://food52.com/drinks/cocktails/28261-best-margarita-recipe',
    urlToImage:
      'https://images.food52.com/PFAtpw8Bsitlvqo64OtdDf97SRw=/fit-in/1200x1200/4504808a-abf7-4117-92e9-87aa22c2b5d7--2021-0603_margarita_3x2_julia-gartland_212.jpg',
    publishedAt: '2023-09-13T18:05:19Z',
    content:
      'Of our 52 most popular cocktails of all time, eight are margaritas. This should surprise no one: Margaritaswhen executed wellare perfect. And while all eight of those very popular recipes are fantast… [+2607 chars]',
  },
  {
    source: {
      id: null,
      name: 'Digital Trends',
    },
    author: 'Giovanni Colantonio',
    title: 'Super Mario Wonder is more of a transformation than you’re expecting',
    description:
      'Based on a transformative hands-on demo, Super Mario Wonder has a lot of surprises in store for longtime Nintendo fans.',
    url: 'https://www.digitaltrends.com/gaming/super-mario-wonder-hands-on-preview/',
    urlToImage:
      'https://www.digitaltrends.com/wp-content/uploads/2023/08/super-mario-wonder-bowser.png?resize=1200%2C630&p=1',
    publishedAt: '2023-08-31T18:00:12Z',
    content:
      'It’s been an unexpected year of change for Mario. The Super Mario Bros. Movie reversed the series’ big-screen fortunes, delivering a blockbuster hit led by (non-Italian) Chris Pratt. More shockingly,… [+8193 chars]',
  },
  {
    source: {
      id: null,
      name: 'Autoblog',
    },
    author: 'Reuters',
    title: 'Daniel Ricciardo breaks hand in crash, is out for Dutch Grand Prix',
    description:
      'Filed under:\n Motorsports,Racing Vehicles\n Continue reading Daniel Ricciardo breaks hand in crash, is out for Dutch Grand Prix\nDaniel Ricciardo breaks hand in crash, is out for Dutch Grand Prix originally appeared on Autoblog on Fri, 25 Aug 2023 21:00:00 EDT.…',
    url: 'https://www.autoblog.com/2023/08/25/daniel-ricciardo-breaks-hand-in-crash-is-out-for-dutch-grand-prix/',
    urlToImage:
      'https://o.aolcdn.com/images/dims3/GLOB/crop/1814x1020+0+141/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2023-08/c1a15b30-43ab-11ee-bf27-0f28d4756e77',
    publishedAt: '2023-08-26T01:00:00Z',
    content:
      "AlphaTauri driver Daniel Ricciardo sustained a broken hand in Friday's practice and will miss this weekend's Dutch Grand Prix, Red Bull advisor Helmut Marko confirmed to Motorsport.com.\r\nMarko said R… [+2942 chars]",
  },
  {
    source: {
      id: null,
      name: 'Corriere.it',
    },
    author: 'Corriere TV',
    title:
      'Max Verstappen sfreccia oltre il limite di velocità in Francia: il video che lo mette nei guai',
    description: 'Il campione di Formula 1 ripreso al volante di una Aston Martin Valkyrie',
    url: 'https://video.corriere.it/sport/max-verstappen-sfreccia-oltre-limite-velocita-francia-video-che-mette-guai/b30055d6-41d0-11ee-a028-2032db658f2e',
    urlToImage:
      'https://images2.corriereobjects.it/methode_image/Video/2023/08/23/Sport/Foto%20Sport%20-%20Trattate/verstappen_vdg-kU9E--656x369@Corriere-Web-Nazionale.jpg',
    publishedAt: '2023-08-23T16:42:05Z',
    content:
      'Max Verstappen rischia una pesante sanzione in Francia, dopo essere stato ripreso alla guida di un’auto di grossa cilindrata oltre il limite di velocità su un’autostrada francese. Il pilota della Red… [+537 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Brendan Griffiths',
    title: "Free England vs. Spain live stream: How to watch Women's World Cup final 2023",
    description:
      "Don't miss out on a free live stream of England vs. Spain today. Wherever you are in the world, we can help you watch the final featuring two teams hoping to win their first World Cup.",
    url: 'https://www.businessinsider.com/guides/streaming/free-england-vs-spain-live-stream-womens-world-cup-final-2023',
    urlToImage: 'https://i.insider.com/64df2ff5bd98a6001978dbc2?width=1200&format=jpeg',
    publishedAt: '2023-08-20T07:30:01Z',
    content:
      "When you buy through our links, Insider may earn an affiliate commission. Learn more\r\nGreat news, if you want a free England vs. Spain live stream today, there is a rich range of options. We'll show … [+6288 chars]",
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Brendan Griffiths',
    title: "Free Women's World Cup Final live stream: How to watch England vs. Spain from anywhere",
    description:
      "Wherever you are in the world, there are plenty of options to watch the Women's World Cup Final for free with our guide. England and Spain will go head-to-head on Sunday.",
    url: 'https://www.businessinsider.com/guides/streaming/free-womens-world-cup-final-live-stream-how-to-watch-england-vs-spain',
    urlToImage: 'https://i.insider.com/64df4b9cbd98a6001978ea2c?width=1200&format=jpeg',
    publishedAt: '2023-08-18T10:50:32Z',
    content:
      "When you buy through our links, Insider may earn an affiliate commission. Learn more.\r\nThere are plenty of great options for a free Women's World Cup Final live stream on Sunday. That's right; we can… [+6688 chars]",
  },
  {
    source: {
      id: 'vice-news',
      name: 'Vice News',
    },
    author: 'Becca Blasdel, Gregory Babcock',
    title: 'The Best Sunscreen Sticks for Lazy People Who Don’t Want Wrinkles',
    description:
      'Remember when you had to fight the urge to run gluesticks all over your face? Now you can—and your skin will thank you for it.',
    url: 'https://www.vice.com/en/article/ak3j45/best-sunscreen-sticks',
    urlToImage:
      'https://video-images.vice.com/articles/64e65074033559ba3849843b/lede/1692823198255-sunscreensticks.jpeg?image-resize-opts=Y3JvcD0xeHc6MXhoO2NlbnRlcixjZW50ZXImcmVzaXplPTEyMDA6KiZyZXNpemU9MTIwMDoq',
    publishedAt: '2023-08-23T20:50:29Z',
    content:
      'Have you been listening? Or are you choosing to ignore us, dermatologists, and plenty of crazed TikTok sunscreen enthusiasts about the merits of wearing SPF every damn day? You can ignore all the cal… [+4283 chars]',
  },
  {
    source: {
      id: null,
      name: 'Autoblog',
    },
    author: 'Joel Stocksdale',
    title: 'Lotus Type 66 is the Can-Am race car that never was',
    description:
      'Filed under:\n Motorsports,Lotus,Automotive History,Racing Vehicles,Classics\n Continue reading Lotus Type 66 is the Can-Am race car that never was\nLotus Type 66 is the Can-Am race car that never was originally appeared on Autoblog on Fri, 18 Aug 2023 20:16:00 …',
    url: 'https://www.autoblog.com/2023/08/18/lotus-type-66-can-am-race-car-recreation/',
    urlToImage:
      'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/08/18193507/Lotus-Type-66_6-copy.jpg',
    publishedAt: '2023-08-19T00:16:00Z',
    content:
      "Most car reveals for Pebble Beach are all-new luxury and supercars, faithful recreations of classics, or some unique restomods. What Lotus has revealed isn't really any of those. The Type 66, while l… [+1856 chars]",
  },
  {
    source: {
      id: null,
      name: 'Autoblog',
    },
    author: 'Jonathon Ramsey',
    title: 'Watch F1 drivers Lewis Hamilton and George Russell toy around at the AMG Playground',
    description:
      'Filed under:\n Video,Motorsports,Mercedes-Benz,Coupe,Luxury,Racing Vehicles,Performance,Sedan\n Continue reading Watch F1 drivers Lewis Hamilton and George Russell toy around at the AMG Playground\nWatch F1 drivers Lewis Hamilton and George Russell toy around at…',
    url: 'https://www.autoblog.com/2023/09/12/f1-drivers-lewis-hamilton-and-george-russell-toy-around-at-the-amg-playground/',
    urlToImage:
      'https://o.aolcdn.com/images/dims3/GLOB/crop/2343x1318+442+284/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2023/09/12091022/hamilton_russell_amg_playground.jpg',
    publishedAt: '2023-09-12T14:58:00Z',
    content:
      "There are 23 Formula 1 races scheduled for the 2023 season, this weekend's tilt is the 16th and takes place in Singapore. No need to wait until the weekend for warm-ups, though, as drivers new and ol… [+1901 chars]",
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News',
    },
    author: null,
    title: 'George Russell on Lewis Hamilton, chasing Red Bull and finding peace off the track',
    description:
      "George Russell tells BBC Sport about his new contract with Mercedes, chasing Red Bull, and Formula 1's sustainability push.",
    url: 'https://www.bbc.co.uk/sport/formula1/66806812',
    urlToImage:
      'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/185B8/production/_131086799_georgerussell.jpg',
    publishedAt: '2023-09-15T07:46:14Z',
    content:
      "Russell (right) and his Mercedes team-mate Lewis Hamilton recently signed new contracts with Mercedes\r\nFor someone who straps himself into a car and hurtles around a track for a living, you'd imagine… [+5258 chars]",
  },
  {
    source: {
      id: 'la-repubblica',
      name: 'La Repubblica',
    },
    author: 'repubblicawww@repubblica.it (Redazione Repubblica.it)',
    title: 'Gp di Monza, ecco che cosa mangiano i piloti',
    description:
      'Circondati dagli uomini della sicurezza per proteggere la privacy, i campioni della Formula 1 cenano al "De La Ville": le curiosità sulle loro abitudini',
    url: 'https://www.repubblica.it/il-gusto/2023/09/02/news/gp_di_monza_ecco_che_cosa_mangiano_i_piloti-413040622/',
    urlToImage:
      'https://www.repstatic.it/content/contenthub/img/2023/09/02/112632666-32479405-8e03-48f7-924f-b48073ba9df4.jpg',
    publishedAt: '2023-09-02T09:29:29Z',
    content:
      'Il clima è hollywoodiano con la security a filtrare gli ingressi. Chi riesce a passare, magari con una quattro ruote ruggente, ma pur sempre da strade canoniche, è un sospetto pilota, e bombardato di… [+335 chars]',
  },
  {
    source: {
      id: null,
      name: 'Corriere.it',
    },
    author: 'Gian Luca Bauzano',
    title: 'Brad Pitt a Monza: atteso al Gran Premio di Formula 1, il circuito diventa set',
    description:
      'L’annuncio in occasione dell’evento più atteso dell’anno al circuito lombardo il 3 settembre. Una nuova sfida per la star di Hollywood anche per l’assalto (previsto) dei fan',
    url: 'https://www.corriere.it/moda/23_agosto_29/brad-pitt-monza-atteso-monza-gran-premio-circuito-diventa-set-53037f56-465c-11ee-94cf-76f12b5af0d1.shtml',
    urlToImage:
      'https://images2.corriereobjects.it/methode_image/socialshare/2023/08/29/a675fed4-465c-11ee-94cf-76f12b5af0d1.jpg',
    publishedAt: '2023-08-29T11:30:33Z',
    content:
      'di Gian Luca BauzanoL’annuncio in occasione dell’evento più atteso dell’anno al circuito lombardo il 3 settembre. Una nuova sfida per la star di Hollywood anche per l’assalto (previsto) dei fan \r\nSi … [+2101 chars]',
  },
  {
    source: {
      id: null,
      name: 'Corriere.it',
    },
    author: 'Federica Bandirali',
    title: 'Monza, Formula 1: piloti, feste e incontri con il pubblico: tutti gli eventi a Milano',
    description:
      'Da Charles Leclerc e Carlos Sainz in San Babila a Lewis Hamilton in Piazza Oberdan. Gli appuntamenti per incontrare e vedere gli assi del volante immergono il capoluogo lombardo nell’atmosfera del Gran Premio di Monza',
    url: 'https://www.corriere.it/moda/23_agosto_29/monza-formula-1-piloti-feste-incontri-il-pubblico-tutti-eventi-milano-17446eac-45db-11ee-af8a-d4a1657857d8.shtml',
    urlToImage:
      'https://images2.corriereobjects.it/methode_image/socialshare/2023/08/28/d00e5776-4645-11ee-94cf-76f12b5af0d1.jpg',
    publishedAt: '2023-08-29T08:47:22Z',
    content:
      'di Federica Bandirali Da Charles Leclerc e Carlos Sainz in San Babila a Lewis Hamilton in Piazza Oberdan. Gli appuntamenti per incontrare e vedere gli assi del volante immergono il capoluogo lombardo… [+1979 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Grace Dean,Grace Kay',
    title:
      "8 major takeaways from the explosive new book about Elon Musk that lifts the lid on the world's richest person",
    description:
      'The book had some eye-popping details — from details on Elon Musk\'s relationship with his father to his "hard core" work ethic and "demon mode."',
    url: 'https://www.businessinsider.com/new-book-about-elon-musk-walter-isaacson-biography-takeaways-2023-9',
    urlToImage: 'https://i.insider.com/65034aea992da60019ec9c1b?width=1200&format=jpeg',
    publishedAt: '2023-09-17T09:24:06Z',
    content:
      "Elon Musk (left) allowed Walter Isaacson (right) to shadow him for three years for the biography.Michael Kovac/Getty Images for Vanity Fair\r\n<ul>\n<li>Walter Isaacson's biography on Elon Musk hit shel… [+13843 chars]",
  },
  {
    source: {
      id: 'polygon',
      name: 'Polygon',
    },
    author: 'Diego Nicolás Argüello',
    title: 'The 18 most exciting video game releases of fall 2023',
    description:
      'After Starfield comes major AAA releases like Mortal Kombat 1 and Assassin’s Creed Mirage as well as other new first-person and third-person games, plus a few must-play indies.',
    url: 'https://www.polygon.com/2023/9/1/23850620/new-video-games-fall-2023-release-date-schedule',
    urlToImage:
      'https://cdn.vox-cdn.com/thumbor/1lSTaiWO4NgngRZB7llgzaAmZek=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24882305/fall_2023_games_preview.jpg',
    publishedAt: '2023-09-01T13:05:07Z',
    content:
      '2023 has been full of the unexpected. The first half of the year was led by a charge of remasters and remakes, like Metroid Prime Remastered and Dead Space, that actually understood the assignment an… [+17196 chars]',
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News',
    },
    author: null,
    title:
      "Jennie Gow: BBC Sport presenter says 'supportive' F1 paddock will help her return at Dutch Grand Prix",
    description:
      'BBC Sport presenter Jennie Gow says the "supportive" atmosphere of Formula 1 will help her as she returns to the paddock at the Dutch Grand Prix.',
    url: 'https://www.bbc.co.uk/sport/formula1/66607913',
    urlToImage:
      'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/B5C1/production/_130892564_jennie.jpg',
    publishedAt: '2023-08-24T17:57:51Z',
    content:
      'Jennie Gow (interviewing Mercedes boss Toto Wolff in 2016) has worked in Formula 1 for many years and is a well-known presenter in the paddock\r\nBBC Sport presenter Jennie Gow says the "supportive" Fo… [+2187 chars]',
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News',
    },
    author: null,
    title: 'Singapore Grand Prix: Lewis Hamilton says F1 needs to do more to fight discrimination',
    description:
      'Lewis Hamilton says Formula 1 needs to do more to fight discrimination in the wake of offensive comments by Red Bull boss Helmut Marko.',
    url: 'https://www.bbc.co.uk/sport/formula1/66813114',
    urlToImage:
      'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/184BF/production/_131091599_ham2.jpg',
    publishedAt: '2023-09-14T15:44:20Z',
    content:
      'Red Bull motorsport adviser Helmut Marko (left) apologised for his remarks about Sergio Perez (right) last week\r\nLewis Hamilton says Formula 1 needs to do more to fight discrimination in the wake of … [+4841 chars]',
  },
  {
    source: {
      id: null,
      name: 'Yanko Design',
    },
    author: 'Gaurav Sood',
    title:
      'Bugatti Bolide minus its exoskeleton is still desirable and the safest hypercar on the planet',
    description:
      'Bugatti Bolide minus its exoskeleton is still desirable and the safest hypercar on the planetWhat’s the fastest car on the planet right now? Well, Chiron Super Sport most definitely. That’s about to change with the new Bugatti Bolide track...',
    url: 'https://www.yankodesign.com/2023/09/14/bugatti-bolide-minus-its-exoskeleton-is-still-desirable-and-safest-hypercar-on-the-planet/',
    urlToImage:
      'https://www.yankodesign.com/images/design_news/2023/09/bugatti-boldie-minus-the-exoskeleton-is-still-desirable-and-the-fastest-hypercar-on-the-planet/Bugatti-Bolide-Hypercar-8.jpg',
    publishedAt: '2023-09-14T20:45:46Z',
    content:
      'Whats the fastest car on the planet right now? Well, Chiron Super Sport most definitely. Thats about to change with the new Bugatti Bolide track hypercar clocking over 310 mph. Just reading that make… [+1634 chars]',
  },
  {
    source: {
      id: null,
      name: 'Digital Trends',
    },
    author: 'Andy Boxall',
    title: 'The Apple Watch Ultra 2 is (almost) exactly what I wanted',
    description:
      "The Apple Watch Ultra 2 doesn't seem like a big update, does it? You're right, it's not. But it's what I expected — and that's a good thing.",
    url: 'https://www.digitaltrends.com/mobile/apple-watch-ultra-2-is-almost-exactly-what-i-wanted/',
    urlToImage:
      'https://www.digitaltrends.com/wp-content/uploads/2023/09/apple-watch-ultra-2-face.jpg?resize=1200%2C630&p=1',
    publishedAt: '2023-09-14T12:00:10Z',
    content:
      'Apple\r\nThe Apple Watch Ultra 2 announcement from Apple’s iPhone 15 event needs some thinking about before it makes sense. Why? At first, it looked like a product barely deserving of the name due to a… [+5335 chars]',
  },
  {
    source: {
      id: null,
      name: 'Autoblog',
    },
    author: 'Jonathon Ramsey',
    title: 'Ferrari 250 GTO engine blows its V12 in Goodwood race, small fireball ensues',
    description:
      'Filed under:\n Video,Motorsports,Ferrari,Coupe,Racing Vehicles,Special and Limited Editions,Performance,Classics\n Continue reading Ferrari 250 GTO engine blows its V12 in Goodwood race, small fireball ensues\nFerrari 250 GTO engine blows its V12 in Goodwood rac…',
    url: 'https://www.autoblog.com/2023/09/11/ferrari-250-gto-engine-blows-its-v12-in-goodwood-race-small-fireball-ensues/',
    urlToImage:
      'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/09/10163331/ferrari_250_gto_chandhok_goodwood.png',
    publishedAt: '2023-09-11T12:18:00Z',
    content:
      'If an engine works, it can blow. Right now, there are various owners and mechanics in various parts of the world sorting and identifying the mangled shards of what was recently a model of of internal… [+1899 chars]',
  },
  {
    source: {
      id: 'polygon',
      name: 'Polygon',
    },
    author: 'Ian Walker',
    title: 'Immortals of Aveum fades into the AAA scenery',
    description:
      'AAA gaming’s MCU era gets its own Eternals as Ascendant Studios’ debut game doesn’t make its “Call of Duty with magic” concept sing.',
    url: 'https://www.polygon.com/reviews/23840401/immortals-of-aveum-review-call-of-duty-magic',
    urlToImage:
      'https://cdn.vox-cdn.com/thumbor/rDy1nSQq_aFNlwHp08QDqBFYwsc=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24864345/IOA_USP1_Battlemage.jpg',
    publishedAt: '2023-08-22T04:00:00Z',
    content:
      'When Immortals of Aveum was revealed last year, director Bret Robbins described Ascendant Studios first project as a fantasy version of Call of Duty, swapping helicopters for dragons and rocket-prope… [+5275 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Brendan Griffiths',
    title: 'How to watch US Open final for free from anywhere: Djokovic vs. Medvedev live stream',
    description:
      "There's a way you can watch a free US Open final live stream from anywhere in the world. Let us show you how for Djokovic vs. Medvedev tonight.",
    url: 'https://www.businessinsider.com/guides/streaming/how-to-watch-us-open-final-free-djokovic-vs-medvedev-live-stream-2023',
    urlToImage: 'https://i.insider.com/64fdca25a39a1b00190cb657?width=1200&format=jpeg',
    publishedAt: '2023-09-10T17:00:01Z',
    content:
      'When you buy through our links, Insider may earn an affiliate commission. Learn more\r\nWant to know how to watch the US Open final today? Want to watch it for free? We can help you on both counts and … [+6333 chars]',
  },
  {
    source: {
      id: 'la-repubblica',
      name: 'La Repubblica',
    },
    author: 'repubblicawww@repubblica.it (Redazione Repubblica.it)',
    title:
      'F1, Gp d’Olanda: Verstappen a caccia del record di Vettel nel circuito di casa. “Mi rilassa vincere comodamente”',
    description:
      'Dopo 36 anni la Formula 1 torna a Zandvoort, fortino del campione del mondo che insegue la nona vittoria di fila. Impresa riuscita solo al tedesco, nel 2013, sempre al volante della Red Bull',
    url: 'https://www.repubblica.it/sport/formulauno/2023/08/25/news/f1_gp_olanda_circuito_verstappen-412211164/',
    urlToImage:
      'https://www.repstatic.it/content/nazionale/img/2023/08/25/091950997-1f42c01e-d033-40ec-b8f9-82b863907cf5.jpg',
    publishedAt: '2023-08-25T08:59:36Z',
    content:
      'ZANDVOORT (OLANDA)  Dive into the Sea of Orange (Tuffatevi in un mare darancio) è lo slogan scritto sui cartelloni attorno al circuito di Zandvoort. Ed è un tuffo nellarancione, letteralmente: cè una… [+3624 chars]',
  },
  {
    source: {
      id: null,
      name: 'Corriere.it',
    },
    author: 'Redazione Cook',
    title:
      'Gp di Monza, quanto devono pesare i piloti di Formula 1? La speciale dieta dei sei pasti',
    description:
      'Sottoposti a limiti di peso e grandi sollecitazioni in gara, i piloti di Formula 1 seguono una dieta rigida e particolare. Ne abbiamo parlato con Iader Fabbri, biologo, nutrizionista e divulgatore scientifico',
    url: 'https://www.corriere.it/cook/news/23_settembre_02/gp-monza-quanto-devono-pesare-piloti-formula-1-speciale-dieta-sei-pasti-4ebae0f8-4911-11ee-859b-50c2b0b05e77.shtml',
    urlToImage:
      'https://images2.corriereobjects.it/methode_image/2023/09/01/Cucina/Foto-Cucina-Trattate/1653007641[1]-kBHE-U34301941852162DIG-526x284@Corriere-Web-Sezioni.jpg',
    publishedAt: '2023-09-02T14:54:51Z',
    content:
      'Per gli appassionati italiani di alta velocità questo è il weekend dell’anno: c’è il Gran Premio di Monza. Per i piloti, invece, ogni gara è il punto d’arrivo di un’intensa preparazione atletica, che… [+4563 chars]',
  },
  {
    source: {
      id: null,
      name: 'F1news.ru',
    },
    author: 'Андрей Лось',
    title: 'Лиам Лоусон: Моя цель – Формула 1',
    description:
      'Лиам Лоусон уверяет, что его целью по-прежнему остаётся Формула 1, хотя понимает, что развитие карьеры во многом зависит от результатов, которые он добьётся в японской серии Super Formula...',
    url: 'https://www.f1news.ru/news/autosport-169504.html',
    urlToImage: 'https://cdn.f1ne.ws/userfiles/lawson/169504.jpg',
    publishedAt: '2023-08-21T12:06:00Z',
    content:
      ', - 1, , , Super Formula.\r\n« , , – Speedcafe . – , , , . – 1.\r\n Super Formula , , , .\r\n, 2 3 , 1 , , . , , Super Formula .\r\n , Super GT, . Super Formula – , , ».\r\n , , , .\r\n : « ( ) . , , , , ».\r\n , … [+60 chars]',
  },
  {
    source: {
      id: null,
      name: 'NPR',
    },
    author: 'Jackie Fortiér',
    title: "Hollywood union health insurance is particularly good. And it's jeopardized by strike",
    description:
      'Hollywood actors and writers who qualify for their union health plans get a very good deal compared to other Americans. But not working during the strike threatens their eligibility in the system.',
    url: 'https://www.npr.org/sections/health-shots/2023/08/30/1196652142/hollywood-union-health-insurance-sag-aftra-wga',
    urlToImage:
      'https://media.npr.org/assets/img/2023/08/29/gettyimages-1532787027_wide-df452b600aaa6595bdae4c41e33c9e9a71fabf94-s1400-c100.jpg',
    publishedAt: '2023-08-30T13:00:18Z',
    content:
      'America Ferrera joins the SAG-AFTRA picket line in front of Netflix in New York City. Actors who qualify get a very good deal on health insurance from their union.\r\nRob Kim/Getty Images\r\nThe issues d… [+9795 chars]',
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News',
    },
    author: null,
    title: 'Dutch Grand Prix first practice: F1 season returns after summer break',
    description:
      'Follow live text and BBC Radio 5 Sports Extra commentary from first and second practice at the Dutch Grand Prix.',
    url: 'https://www.bbc.co.uk/sport/live/formula1/63208370',
    urlToImage:
      'https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png',
    publishedAt: '2023-08-23T13:15:56Z',
    content:
      "The summer holidays are over!\r\nWell, they are if you are working in Formula 1, and the season resumes right on the championship leader's home patch.\r\nMax Verstappen begins the second part of the seas… [+211 chars]",
  },
  {
    source: {
      id: null,
      name: 'Deadline',
    },
    author: 'Jesse Whittock',
    title:
      'Disney+ Sets Cast For UK Thriller ‘Playdate’ & Unveils First Look At Keanu Reeves In Formula 1 Series ‘Brawn’ — Edinburgh TV Festival',
    description:
      'Disney+ has set cast for UK psychological drama  Playdate, adapted from Alex Dahl’s best-selling novel of the same name. The series, directed by Eva Husson (Mothering Sunday), will star Denise Gough (Andor),  Holliday Grainger  (Strike),  Ambika Mod (I Hate S…',
    url: 'https://deadline.com/2023/08/disney-plus-keanu-reeves-uk-originals-edinburgh-tv-festival-1235524767/',
    urlToImage: 'https://deadline.com/wp-content/uploads/2023/08/Keanu_Jensen_00982.jpg?w=1024',
    publishedAt: '2023-08-23T13:27:00Z',
    content:
      'Disney+ has set cast for UK psychological drama  Playdate, adapted from Alex Dahl’s best-selling novel of the same name.\r\nThe series, directed by Eva Husson (Mothering Sunday), will star Denise Gough… [+3428 chars]',
  },
  {
    source: {
      id: 'polygon',
      name: 'Polygon',
    },
    author: 'Joshua Rivera',
    title: 'The big games, announcements, and trailers from Gamescom Opening Night Live 2023',
    description:
      'Diablo 4’s new season, Alan Wake 2, the Cyberpunk 2077 DLC, and Little Nightmares 3 are the highlights of this year’s showcase',
    url: 'https://www.polygon.com/2023/8/22/23841795/gamescom-announcements-trailers-onl-2023',
    urlToImage:
      'https://cdn.vox-cdn.com/thumbor/UYYkAJpuwCx_hwPUfIan8K7MrHc=/0x0:3274x1714/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24866887/cyberpunk_cybernetics.jpg',
    publishedAt: '2023-08-22T20:58:10Z',
    content:
      'In whats become an end-of-summer bookend on the game release calendar, Gamescoms Opening Night Live showcase is once again here to highlight games coming your way in the near future. Hosted by Geoff … [+7185 chars]',
  },
  {
    source: {
      id: null,
      name: 'Biztoc.com',
    },
    author: 'reuters.com',
    title: 'Vettel texted Verstappen his support in record bid',
    description:
      "[1/2] Formula One F1 - Abu Dhabi Grand Prix - Yas Marina Circuit, Abu Dhabi, United Arab Emirates - November 20, 2022 Aston Martin's Sebastian Vettel performs a donut in his car after his last Formula One race REUTERS/Leonhard Foeger Acquire Licensing Rights …",
    url: 'https://biztoc.com/x/276b4d117e804425',
    urlToImage: 'https://c.biztoc.com/p/276b4d117e804425/s.webp',
    publishedAt: '2023-08-26T21:04:03Z',
    content:
      "[1/2] Formula One F1 - Abu Dhabi Grand Prix - Yas Marina Circuit, Abu Dhabi, United Arab Emirates - November 20, 2022 Aston Martin's Sebastian Vettel performs a donut in his car after his last Formul… [+319 chars]",
  },
  {
    source: {
      id: null,
      name: 'Forbes',
    },
    author:
      'Michael Goldstein, Contributor, \n Michael Goldstein, Contributor\n https://www.forbes.com/sites/michaelgoldstein/',
    title: 'Vroom Vroom In Vegas As Formula One Brings Out The Big Spenders',
    description:
      'Las Vegas hotels like Resorts World, Bellagio, Palms, and Wynn are offering the utmost in luxury for the upcoming Las Vegas Formula One Grand Prix.',
    url: 'https://www.forbes.com/sites/michaelgoldstein/2023/08/25/vroom-vroom-in-vegas-as--formula-one-brings-out-the-big-spenders/',
    urlToImage:
      'https://imageio.forbes.com/specials-images/imageserve/64e9653b432f9646b74af6bf/0x0.jpg?format=jpg&width=1200',
    publishedAt: '2023-08-26T03:01:09Z',
    content:
      'LAS VEGAS, NEVADA - NOVEMBER 05: Sergio Perez of Mexico and Red Bull looks on during the Formula 1 ... [+] Las Vegas Grand Prix 2023 launch party on November 05, 2022 in Las Vegas, Nevada. (Photo by … [+10028 chars]',
  },
  {
    source: {
      id: null,
      name: 'Psychology Today',
    },
    author: 'Thomas Rutledge Ph.D.',
    title: 'Why Training, Not Therapy, May Be a Ticket to Your Best Life',
    description:
      'If your goal is to enjoy the best life possible, there is a simple and scientifically proven formula: get fit, get strong, and get started.',
    url: 'https://www.psychologytoday.com/intl/blog/the-healthy-journey/202309/why-training-not-therapy-may-be-a-ticket-to-your-best-life',
    urlToImage:
      'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/teaser_image/blog_entry/2023-09/dumbbells-2465478_1920.jpg?itok=-uOkk258',
    publishedAt: '2023-09-08T19:04:42Z',
    content:
      'If your goal is to enjoy the highest quality of life possiblethe ability to consistently feel, look, and function at an amazing levelthen I have a suggestion that may sound unconventional coming from… [+5995 chars]',
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News',
    },
    author: null,
    title: 'Italian Grand Prix third practice - radio and text',
    description:
      'Follow live text and BBC Radio 5 Sports Extra commentary from third practice before qualifying at the Italian Grand Prix.',
    url: 'https://www.bbc.co.uk/sport/live/formula1/63208378',
    urlToImage:
      'https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png',
    publishedAt: '2023-09-01T14:07:31Z',
    content:
      'Hello, folks. The Italian fans are settling in the grandstands for a day of high-class Formula 1 action, so get yourselves comfortable with a tea/coffee, some breakfast. \r\nThird practice goes green a… [+263 chars]',
  },
  {
    source: {
      id: 'bleacher-report',
      name: 'Bleacher Report',
    },
    author: 'Chris Roling',
    title: 'Mortal Kombat 1: Gameplay Review, Story Mode Impressions and Esports Impact',
    description:
      'Mortal Kombat 1 from developer NetherRealm Studios faces what feels like an insurmountable task—delivering on high expectations to the point of becoming the…',
    url: 'https://bleacherreport.com/articles/10089322-mortal-kombat-1-gameplay-review-story-mode-impressions-and-esports-impact',
    urlToImage:
      'https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1694831230/wn51euijwd8gwbi2fwoz.jpg',
    publishedAt: '2023-09-16T03:01:43Z',
    content:
      'INA FASSBENDER/AFP via Getty Images\r\nMortal Kombat 1 from developer NetherRealm Studios faces what feels like an insurmountable taskdelivering on high expectations to the point of becoming the best g… [+10124 chars]',
  },
  {
    source: {
      id: 'espn',
      name: 'ESPN',
    },
    author: 'Turron Davenport',
    title: "Vrabel: Henry still 'huge part' despite lighter load",
    description:
      "The Titans have traditionally used running back Derrick Henry as a hammer to wear down defenses and go for the knockout blow in the fourth quarter, but deviated from that formula in Sunday's loss to the Saints.",
    url: 'https://www.espn.com/nfl/story/_/id/38380617/mike-vrabel-says-rb-derrick-henry-huge-part-offense',
    urlToImage:
      'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0911%2Fr1223188_1296x729_16%2D9.jpg',
    publishedAt: '2023-09-11T21:05:50Z',
    content:
      'NASHVILLE, Tenn. -- The Tennessee Titans broke away from what has been their winning formula in their 16-15 loss to the New Orleans Saints last Sunday.\r\nThe Titans had traditionally used running back… [+2484 chars]',
  },
  {
    source: {
      id: null,
      name: 'Jalopnik',
    },
    author: 'Ryan Erik King',
    title: "What's Your Most Out-Of-Depth Driving Experience?",
    description:
      'Have you ever overestimated the winter capabilities of your car after a huge snowstorm? Did you take your typical grocery-getter to get battered on a forest trail? Did you take your brand new Ford Mustang to a Cars and Coffee? We’ve all been there. We’ve gott…',
    url: 'https://jalopnik.com/whats-your-most-out-of-depth-driving-experience-1850816980',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ab369d8757757e2e0014f190ae83dd51.jpg',
    publishedAt: '2023-09-11T12:37:00Z',
    content:
      'Have you ever overestimated the winter capabilities of your car after a huge snowstorm? Did you take your typical grocery-getter to get battered on a forest trail? Did you take your brand new Ford Mu… [+1203 chars]',
  },
  {
    source: {
      id: null,
      name: 'Gazzetta.it',
    },
    author: 'Alberto Dalla Palma',
    title: "Formula 1, si riparte: Verstappen favorito nel Gp d'Olanda, quote e pronostici",
    description:
      "Formula 1, riparte il Mondiale e Verstappen è il grande favorito per la vittoria nel Gp d'Olanda che si correrà domenica 27 agosto alle ore 16",
    url: 'https://www.gazzetta.it/scommesse/pronostici/24-08-2023/formula-1-verstappen-gp-olanda-quote-pronostico-17163.shtml',
    urlToImage:
      'https://static-scommesse.gazzettaobjects.it/wp-content/uploads/2023/03/09/52/GettyImages-1431884559.jpg',
    publishedAt: '2023-08-24T15:06:24Z',
    content:
      "Alberto Dalla Palma\r\n24 agosto\r\nMax Verstappen è il grande favorito del Gran Premio d'Olanda con cui ripartirà il mondiale di Formula 1 domenica 27 agosto alle ore 15. Dopo un mese di sosta, cioè dop… [+1744 chars]",
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'tparadis@insider.com (Tim Paradis)',
    title:
      "If a single farm produced all the food wasted in the US, it would be the size of California and New York combined. We're the culprits.",
    description:
      'The average US family wastes up to $1,500 a year on uneaten food. The land used to produce it is the size of California and New York combined.',
    url: 'https://www.businessinsider.com/average-american-wastes-thousands-uneaten-food-yearly-2023-9',
    urlToImage: 'https://i.insider.com/64f242c37819260019103804?width=1200&format=jpeg',
    publishedAt: '2023-09-10T11:15:01Z',
    content:
      'Danielle Melgar is working with the caterer for her wedding to make sure that between the "I do\'s" and the last dance, food won\'t be going to waste.\r\nThe October ceremony, at a botanical garden in Mi… [+8487 chars]',
  },
  {
    source: {
      id: null,
      name: 'Android Authority',
    },
    author: 'Robert Triggs',
    title: 'Sony Xperia 1 VI: Release date, specs, rumors, price, and feature wishlist',
    description:
      "The Sony Xperia 1 VI isn't due until 2024, but we're already eagerly anticipating Sony's next flagship smartphone. Here's what to expect.",
    url: 'https://www.androidauthority.com/sony-xperia-1-vi-3361570/',
    urlToImage:
      'https://www.androidauthority.com/wp-content/uploads/2023/05/Sony-Xperia-1-V-front-with-props-black-magenta-background-scaled.jpg',
    publishedAt: '2023-09-07T16:57:35Z',
    content:
      'The Sony Xperia 1 V may have only recently landed on store shelves, but were already thinking about Sonys next flagship smartphone, tentatively known as the Xperia 1 VI. Heres what we know about the … [+8927 chars]',
  },
  {
    source: {
      id: null,
      name: 'Nerdist',
    },
    author: 'Tai Gooden',
    title: 'FERRARI Trailer Features an Unrecognizable Adam Driver as the Racing Legend',
    description:
      'Adam Driver is nearly unrecognizable in the first teaser trailer for Ferrari, where he stars as the legend who launched Formula 1 racing.\nThe post FERRARI Trailer Features an Unrecognizable Adam Driver as the Racing Legend appeared first on Nerdist.',
    url: 'https://nerdist.com/article/ferrari-trailer-stars-adam-driver-as-enzo-ferrari-film-based-on-book-by-brock-yates-michael-mann-as-director/',
    urlToImage:
      'https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2023/08/30100830/Adam-Driver-Ferarri-1.jpg',
    publishedAt: '2023-08-30T17:31:45Z',
    content:
      'You know what I really love? When a teaser trailer is exactly what it says it is. The “go girl, give us nothing” energy of a few clips woven together in 90 seconds or less is great. I want just enoug… [+1576 chars]',
  },
  {
    source: {
      id: null,
      name: 'autosport.com',
    },
    author: 'Matt Somerfield',
    title: 'Dutch GP: F1 technical images from the pitlane',
    description:
      'Join us as we delve into the Formula 1 technical features on display in the pitlane as teams prepare for the Dutch Grand Prix, courtesy of Giorgio Piola and Sutton Images.',
    url: 'https://www.autosport.com/f1/news/dutch-gp-f1-technical-images-from-the-pitlane-explained/10511090/',
    urlToImage:
      'https://cdn-1.motorsport.com/images/amp/6n98mlmY/s6/alphatauri-at04-nose-and-front.jpg',
    publishedAt: '2023-08-24T20:24:40Z',
    content:
      'Ferrari SF-23 front wing detail\r\nPhoto by: Roberto Chinchero\r\nA couple of front wing and nose assemblies are being worked on outside the Ferrari garage, with the lower one not yet having the vanity p… [+4847 chars]',
  },
  {
    source: {
      id: null,
      name: 'autosport.com',
    },
    author: 'Matt Somerfield',
    title: 'Singapore GP: F1 technical images from the pitlane explained',
    description:
      'Join us as we delve into the Formula 1 technical features on display in the pitlane as teams prepare for the Singapore Grand Prix, courtesy of Giorgio Piola and Sutton Images',
    url: 'https://www.autosport.com/f1/news/singapore-gp-f1-technical-images-from-the-pitlane-explained/10520268/',
    urlToImage:
      'https://cdn-6.motorsport.com/images/amp/6xEVo810/s6/williams-fw45-technicaldetail-.jpg',
    publishedAt: '2023-09-14T19:12:26Z',
    content:
      'Red Bull Racing RB19 technical detail\r\nPhoto by: Uncredited\r\nRed Bull has a new rear wing design at the Singapore Grand Prix, as the team follows in the footsteps of its rivals. This style of semi-de… [+3971 chars]',
  },
  {
    source: {
      id: null,
      name: 'Jalopnik',
    },
    author: 'Andy Kalmowitz',
    title: 'Strike Looms For UAW And The Big Three On Contract Deadline Day',
    description:
      'Good morning! It’s Thursday, September 14, 2023, and this is The Morning Shift, your daily roundup of the top automotive headlines from around the world, in one place. Here are the important stories you need to know.Read more...',
    url: 'https://jalopnik.com/strike-looms-for-uaw-and-the-big-three-on-contract-dead-1850837632',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9c4c505b111cce5e31993009a3d38c5b.png',
    publishedAt: '2023-09-14T14:25:00Z',
    content:
      'Good morning! Its Thursday, September 14, 2023, and this is The Morning Shift, your daily roundup of the top automotive headlines from around the world, in one place. Here are the important stories y… [+9631 chars]',
  },
  {
    source: {
      id: null,
      name: 'Xatakamovil.com',
    },
    author: 'Alejandro Alcolea',
    title:
      'Buenas noticias para DAZN: mantiene dos de sus principales canales de deporte hasta 2026',
    description:
      'Buenas noticias para los amantes de deporte que, además, estén suscritos a DAZN. Y es que, aparte de los contenidos de Formula 1, MotoGP y, sobre todo, los partidos de LaLiga y la Premier inglesa, si hay un punto fuerte de la plataforma es el multideporte.\n<!…',
    url: 'https://www.xatakamovil.com/streaming/buenas-noticias-para-dazn-mantiene-dos-sus-principales-canales-deporte-2026',
    urlToImage: 'https://i.blogs.es/69341f/analisis-galaxy-watch-6-classic-27/840_560.jpeg',
    publishedAt: '2023-08-24T12:31:31Z',
    content:
      'Buenas noticias para los amantes de deporte que, además, estén suscritos a DAZN. Y es que, aparte de los contenidos de Formula 1, MotoGP y, sobre todo, los partidos de LaLiga y la Premier inglesa, si… [+1418 chars]',
  },
  {
    source: {
      id: null,
      name: 'Ilfattoquotidiano.it',
    },
    author: 'Lorenzo Pastuglia',
    title:
      'Formula 1, nelle prove libere del gp di Monza la Ferrari torna brillante e si avvicina alla Red Bull',
    description:
      'La Red Bull davanti, ma una Ferrari finalmente brillante e competitiva, almeno per il secondo posto. Le libere del venerdì di Monza dicono che la Rossa è molto più vicina ai rivali anglo-austriaci, dopo le tante difficoltà viste negli ultimi gran premi. Un ot…',
    url: 'https://www.ilfattoquotidiano.it/2023/09/01/formula-1-nelle-prove-libere-del-gp-di-monza-la-ferrari-torna-brillante-e-si-avvicina-alla-red-bull/7278984/',
    urlToImage: 'https://st.ilfattoquotidiano.it/wp-content/uploads/2023/09/01/ferrari.jpg',
    publishedAt: '2023-09-01T17:06:56Z',
    content:
      'La Red Bull davanti, ma una Ferrari finalmente brillante e competitiva, almeno per il secondo posto. Le libere del venerdì di Monza dicono che la Rossa è molto più vicina ai rivali anglo-austriaci, d… [+3152 chars]',
  },
  {
    source: {
      id: null,
      name: 'Jalopnik',
    },
    author: 'Ryan Erik King',
    title: 'Lotus Unveils The Type 66, A Never-Raced 1970s Can-Am Prototype',
    description:
      'Lotus founder Colin Chapman aspired to compete against the dominant McLaren cars in Can-Am but never progressed further than the design stage. However, the Lotus Type 66 will finally see the track 53 years later as a limited-edition track-day special.Read mor…',
    url: 'https://jalopnik.com/lotus-unveils-the-type-66-a-never-raced-1970s-can-am-p-1850767149',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bd404024dfe4179e9ec43d84526d9383.jpg',
    publishedAt: '2023-08-23T19:15:00Z',
    content:
      'Lotus founder Colin Chapman aspired to compete against the dominant McLaren cars in Can-Am but never progressed further than the design stage. However, the Lotus Type 66 will finally see the track 53… [+2250 chars]',
  },
  {
    source: {
      id: null,
      name: 'Gazzetta.it',
    },
    author: 'Davide Amato',
    title: 'Dal Legia Varsavia alla Formula 1: il coinvolgimento dei tifosi con i fan token',
    description:
      "In Polonia, i tifosi del club hanno scelto la bandierina del calcio d'angolo ed il gagliardetto della squadra, mentre un supporter di Alonso ha potuto assistere dal vivo al GP di Monza",
    url: 'https://www.gazzetta.it/fan-tokens/14-09-2023/fan-token-tifosi-sempre-piu-coinvolti-i-casi-di-legia-varsavia-e-formula-1.shtml',
    urlToImage:
      'https://dimages2.gazzettaobjects.it/files/og_thumbnail/uploads/2023/09/14/65035dd926db8.jpeg',
    publishedAt: '2023-09-14T19:35:27Z',
    content:
      "Davide Amato\r\n14 settembre - MILANO\r\nDalla bandierina del calcio d'angolo al gagliardetto ufficiale. In Polonia la fantasia dei tifosi è la protagonista grazie alla magia dei gettoni digitali. Il mer… [+2371 chars]",
  },
  {
    source: {
      id: null,
      name: 'Themarginalian.org',
    },
    author: 'Maria Popova',
    title:
      'Milan Kundera on the Power of Coincidences and the Musicality of How Chance Composes Our Lives',
    description:
      '"Human lives... are composed like music. Guided by his sense of beauty, an individual transforms a fortuitous occurrence... into a motif, which then assumes a permanent place in the composition of the individual\'s life."',
    url: 'https://www.themarginalian.org/2023/09/11/milan-kundera-coincidenes/',
    urlToImage:
      'https://www.themarginalian.org/wp-content/uploads/2023/09/chance.jpg?fit=518%2C272&ssl=1',
    publishedAt: '2023-09-11T16:29:15Z',
    content:
      'There is a model of reality in which every action you take, from falling in love with a particular person to reading this essay right now, is dictated by a Rube Goldberg machine of events set into mo… [+5462 chars]',
  },
  {
    source: {
      id: null,
      name: 'F1news.ru',
    },
    author: 'Михаил Смирнов',
    title: 'Витантонио Лиуцци – третий стюард Гран При Сингапура',
    description:
      'Бывший гонщик Формулы 1, FIA WEC, Super Formula, Super GT и стюард Формулы Е Витантонио Лиуцци приглашён FIA на роль стюарда Гран При Сингапура.',
    url: 'https://www.f1news.ru/news/f1-169976.html',
    urlToImage: 'https://cdn.f1ne.ws/userfiles/liuzzi/169976.jpg',
    publishedAt: '2023-09-13T14:12:00Z',
    content:
      '1, FIA WEC, Super Formula, Super GT FIA .\r\n FIA FIA .\r\n 2023- : , , , , , , , , , , .',
  },
  {
    source: {
      id: null,
      name: 'F1news.ru',
    },
    author: 'Михаил Смирнов',
    title: 'Витантонио Лиуцци – третий стюард Гран При Италии',
    description:
      'Бывший гонщик Формулы 1, FIA WEC, Super Formula, Super GT и стюард Формулы Е Витантонио Лиуцци приглашён FIA на роль стюарда Гран При Италии.',
    url: 'https://www.f1news.ru/news/f1-169730.html',
    urlToImage: 'https://cdn.f1ne.ws/userfiles/liuzzi/169730.jpg',
    publishedAt: '2023-08-30T16:58:00Z',
    content:
      '1, FIA WEC, Super Formula, Super GT FIA .\r\n IMSA, McLaren 3 .\r\n 2023- : , , , , , , , , , , .',
  },
  {
    source: {
      id: null,
      name: 'Les Numériques',
    },
    author: 'Thibaud Gomès-Léal',
    title: "Actualité : Grand Prix F1 d'Italie 2023 : chaînes, programme TV complet et horaires",
    description:
      "Après la reprise la semaine dernière, la Formule 1 garde le rythme ce week-end avec le Grand Prix d'Italie sur le circuit mythique de Monza. Découvrez le programme complet et les horaires de diffusion pour la France sur Canal+, Canal+ Sport et Canal+ Sport360.",
    url: 'https://www.lesnumeriques.com/evenement-sportif/grand-prix-f1-d-italie-2023-chaines-programme-tv-complet-et-horaires-n212768.html',
    urlToImage:
      'https://cdn.lesnumeriques.com/optim/news/21/212768/bd996570-grand-prix-f1-d-italie-2023-programme-tv-complet-et-horaires_png__1200_630__0-505-1816-1458.jpg',
    publishedAt: '2023-09-01T09:00:00Z',
    content:
      "Le Grand Prix d'Italie se déroule à Monza le 3 septembre 2023.\r\n© Shutterstock\r\nÇa y est, la Formule 1 a fait sa rentrée... et Max Verstappen s'accroche encore et toujours solidement à sa place de le… [+2028 chars]",
  },
  {
    source: {
      id: null,
      name: 'Github.io',
    },
    author: null,
    title: 'Linear Algebra for Programmers',
    description: 'From notation to meaning.',
    url: 'https://coffeemug.github.io/spakhm.com/posts/01-lingalg-p1/linalg-p1.html',
    urlToImage: 'https://spakhm.com/posts/01-lingalg-p1/xkcd-matrix.jpg',
    publishedAt: '2023-09-01T17:59:30Z',
    content:
      'From notation to meaning.\r\nThe most important thing about reading this blog post is to not get scared off by the formulas. The post may look like all the crap you normally skim over, so you may be te… [+13731 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Taylor Rains',
    title:
      "A new all-business class airline is launching flights between the US and Bermuda — see what it'll be like aboard",
    description:
      'BermudAir will have a "phased introduction" of its all-business class model, starting with 88-seater Embraer E175s but only booked at half capacity.',
    url: 'https://www.businessinsider.com/bermudair-all-business-class-airline-launching-flights-bermuda-2023-8',
    urlToImage: 'https://i.insider.com/64e68b72912f290019aa24ed?width=1200&format=jpeg',
    publishedAt: '2023-08-24T15:21:17Z',
    content:
      'Startup all-business class airline BermudAir is launching nonstop flights between Bermuda and the US on August 31.BermudAir\r\n<ul>\n<li>A new all-business class airline called BermudAir is launching fl… [+8114 chars]',
  },
];

export default articles;
