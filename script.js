function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
class CardProfile extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      index: 0,
      currentTime: '0:00',
      musicList: [{ name: '1.Lift Up The Trumpet', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/1.JPG', audio: 'Songs/Song_01.mp3', duration: '02:48' },
{ name: '2.Praise The Lord Together', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.jpg', audio: 'Songs/Song_02.mp3', duration: '00:45' },
{ name: '3.Praise Him In The Morning', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/3.JPG', audio: 'Songs/Song_03.mp3', duration: '01:28' },
{ name: '4.Hallelu Hallelu', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/4.JPG', audio: 'Songs/Song_04.mp3', duration: '01:22' },
{ name: '5.Praise Him All Ye', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/5.JPG', audio: 'Songs/Song_05.mp3', duration: '01:29' },
{ name: '6.Rejoice In The Lord', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/6.JPG', audio: 'Songs/Song_06.mp3', duration: '00:49' },
{ name: '7.Who Made The Beautiful', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/7.JPG', audio: 'Songs/Song_07.mp3', duration: '01:02' },
{ name: '8.Heaven Is A Wonderful ', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/8.JPG', audio: 'Songs/Song_08.mp3', duration: '01:07' },
{ name: '9.Wide As The Ocean', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/9.JPG', audio: 'Songs/Song_09.mp3', duration: '00:58' },
{ name: '10.God Is So Good ', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/10.JPG', audio: 'Songs/Song_10.mp3', duration: '01:24' }, 
{ name: '11.In My Heart There', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/11.JPG', audio: 'Songs/Song_11.mp3', duration: '01:32' },
{ name: '12.Jesus Is The Rock', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/12.JPG', audio: 'Songs/Song_12.mp3', duration: '01:55' },
{ name: '13.One Two Three', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/13.JPG', audio: 'Songs/Song_13.mp3', duration: '00:54' },
{ name: '14.I May Never', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/14.JPG', audio: 'Songs/Song_14.mp3', duration: '00:47' },
{ name: '15.Heavenly Sunshine', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/15.JPG', audio: 'Songs/Song_15.mp3', duration: '01:02' },
{ name: '16.Over The Sunset', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/16.JPG', audio: 'Songs/Song_16.mp3', duration: ' 01:33' },
{ name: '17.Over And Over', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/17.JPG', audio: 'Songs/Song_17.mp3', duration: ' 01:28' },
{ name: '18.Is Anything Hard', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/18.JPG', audio: 'Songs/Song_18.mp3', duration: '00:51' },
{ name: '19.We Give All The Glory', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/19.JPG', audio: 'Songs/Song_19.mp3', duration: '01:16' },
{ name: '20.Whisper A Prayer', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/20.JPG', audio: 'Songs/Song_20.mp3', duration: '02:01' },
{ name: '21.Lord In The Morning', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/21.JPG', audio: 'Songs/Song_21.mp3', duration: '02:17' },
{ name: '22.Jesus Never Fails', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/22.JPG', audio: 'Songs/Song_22.mp3', duration: '02:00' },
{ name: '23.Oh Be Careful', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/23.JPG', audio: 'Songs/Song_23.mp3', duration: '01:48' },
{ name: '24.I Have Decided', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/24.JPG', audio: 'Songs/Song_24.mp3', duration: '01:38' },
{ name: '25.Great Change', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/25.JPG', audio: 'Songs/Song_25.mp3', duration: '02:01' },
{ name: '26.My God Is So Big', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/26.JPG', audio: 'Songs/Song_26.mp3', duration: '01:44' },
{ name: '27.Peter James', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/27.JPG', audio: 'Songs/Song_27.mp3', duration: '01.06' },
{ name: '28.The Wise Man', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/28.JPG', audio: 'Songs/Song_28.mp3', duration: '02:44' },
{ name: '29.Yes Jesus Loves Me', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/29.JPG', audio: 'Songs/Song_29.mp3', duration: '02:30' },
{ name: '30.This World Is Full Of', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/30.JPG', audio: 'Songs/Song_30.mp3', duration: '02:10' },
{ name: '31.I Am Happy Today', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/31.JPG', audio: 'Songs/Song_31.mp3', duration: '01:57' },
{ name: '32.The Trees Are', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/32.JPG', audio: 'Songs/Song_32.mp3', duration: '01:48' },
{ name: '33.Zaccheus', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/33.JPG', audio: 'Songs/Song_33.mp3', duration: '00:43' },
{ name: '34.Jesus Loves The Little', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/34.JPG', audio: 'Songs/Song_34.mp3', duration: '00:56' },
{ name: '35.Who Is The King', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/35.JPG', audio: 'Songs/Song_35.mp3', duration: '00:54' },
{ name: '36.Walking With Jesus', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/36.JPG', audio: 'Songs/Song_36.mp3', duration: '00:55' },
{ name: '37.Who Can Make', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/37.JPG', audio: 'Songs/Song_37.mp3', duration: '01:40' },
{ name: '38.Jesus Bids', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/38.JPG', audio: 'Songs/Song_38.mp3', duration: '01:59' },
{ name: '39.Jesus Love The Little Children', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/39.JPG', audio: 'Songs/Song_39.mp3', duration: '00:52' },
{ name: '40.When I Remember', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/40.JPG', audio: 'Songs/Song_40.mp3', duration: '02:09' },
{ name: '41.If I Have', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/41.JPG', audio: 'Songs/Song_41.mp3', duration: '00:45' },     
{ name: '42.You Can Smile', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/42.JPG', audio: 'Songs/Song_42.mp3', duration: '01:06' },
{ name: '43.The Joy Of My Lord', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/43.JPG', audio: 'Songs/Song_43.mp3', duration: '01:25' },     
{ name: '44.We Shall Overcome', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/44.JPG', audio: 'Songs/Song_44.mp3', duration: '02:31' },
{ name: '45.Oh Glory To God', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/45.JPG', audio: 'Songs/Song_45.mp3', duration: '01:39' },
{ name: '46.He Is My Everything', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/46.JPG', audio: 'Songs/Song_46.mp3', duration: '01:32' },
{ name: '47.Lord Make Me', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/47.JPG', audio: 'Songs/Song_47.mp3', duration: '02:39' },
{ name: '48.God\'s Love To Me', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/48.JPG', audio: 'Songs/Song_48.mp3', duration: '01:30' },
{ name: '49.Head And Shoulder', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/49.JPG', audio: 'Songs/Song_49.mp3', duration: '01:21' },
{ name: '50.Everyday', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/50.JPG', audio: 'Songs/Song_50.mp3', duration: '01:51' },
{ name: '51. Bible', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/51.JPG', audio: 'Songs/Song_51.mp3', duration: '01:06' },
{ name: '52.With Jesus In The Family', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_52.mp3', duration: '02:28' },
{ name: '53.We Are Little Children', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_53.mp3', duration: '01:15' },
{ name: '54.Jesus Wants Me A Sunbeam', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_54.mp3', duration: '02:33' },
{ name: '55.We Climbing', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_55.mp3', duration: '01:43' },
{ name: '56.In The Eyes Of God ', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_56.mp3', duration: '01:26' },
{ name: '57.Let The Words', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_57.mp3', duration: '01:38' },
{ name: '58.Get Ready', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_58.mp3', duration: '01:11' },
{ name: '59.Majesty', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_59.mp3', duration: '02:05' },
{ name: '60.Building Up The Temple', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_60.mp3', duration: '00:54' }, 
{ name: '61.I Am In Right', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_61.mp3', duration: '01:23' },
{ name: '62.What Seekest', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_62.mp3', duration: '01:05' },
{ name: '63.With Christ In The Vessel', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_63.mp3', duration: '01:45' },
{ name: '64.Father I Adore', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_64.mp3', duration: '01:35' },
{ name: '65.I Will Make You Fishers', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_65.mp3', duration: '01:29' },
{ name: '66.Soon And Very Soon', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_66.mp3', duration: '01:49' },
{ name: '67.His Name Is Wonderful', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_67.mp3', duration: '01:07' },
{ name: '68.I\'Ve Got A Home', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_68.mp3', duration: '02:54' },
{ name: '69.Its Bubbling', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_69.mp3', duration: '01:48' },
{ name: '70.Everybody Ought To Know', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_70.mp3', duration: '02:01' },
{ name: '71. Into My Heart', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_71.mp3', duration: '01:29' },
{ name: '72.Roll Roll', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_72.mp3', duration: '01:26' },
{ name: '73. Following Jesus', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_73.mp3', duration: '01:17' },
{ name: '74.Wear A Great Big', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_74.mp3', duration: '01:01' },
{ name: '75.I Want To Be A Lighthouse', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_75.mp3', duration: '02:57' },
{ name: '76.I Love To Walk', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_76.mp3', duration: '01:52' },
{ name: '77.I\'ve Got Hands', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_77.mp3', duration: '01:21' },
{ name: '78.Who Is In The Middle', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_78.mp3', duration: '01:48' },
{ name: '79.My Father Is Rich', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_79.mp3', duration: '02:38' },
{ name: '80.One Door ', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_80.mp3', duration: '01:14' },
{ name: '81.Qut Of My Bondage', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_81.mp3', duration: '02:42' },
{ name: '82.S M I L E', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_82.mp3', duration: '01:21' },
{ name: '83.I\'ve Got A Joy', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_83.mp3', duration: '01:59' },
{ name: '84.A Time To Be Happy', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_84.mp3', duration: '00:47' },
{ name: '85.Have You Seen A Tree', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_85.mp3', duration: '00:59' },
{ name: '86.Yesterday Today', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_86.mp3', duration: '01:08' },
{ name: '87.Brighten The Corner ', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_87.mp3', duration: '02:42' },
{ name: '88.Trust In The Lord', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_88.mp3', duration: '00:54' },
{ name: '89.Father Leads Me', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_89.mp3', duration: '02:26' },
{ name: '90.Are You Washed', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_90.mp3', duration: '01:53' },
{ name: '91.Father Abraham', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_91.mp3', duration: '02:51' },     
{ name: '92.Ti\'s Love That', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_92.mp3', duration: '02:15' },
{ name: '93.God Sees The Little ', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_93.mp3', duration: '01:58' },     
{ name: '94.Earthly Friends', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_94.mp3', duration: '02:11' },
{ name: '95.I Am Jesus Little Lamb ', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_95.mp3', duration: '01:09' },
{ name: '96.I Am Going To Calp', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_96.mp3', duration: '01:53' },
{ name: '97.We Have This Hope', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_97.mp3', duration: '02:13' },
{ name: '98.Oh Friend Do You Love Jesus', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_98.mp3', duration: '00:57' },
{ name: '99.Only A Boy Named David', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_99.mp3', duration: '00:53' },
{ name: '100.Turn Your Eyes Upon Jesus', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_100.mp3', duration: '01:21' },
{ name: '101.Holy Holy', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_101.mp3', duration: '03:20' },
{ name: '102.To God Be The Glory', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_102.mp3', duration: '03:17' },
{ name: '103.I Sing The Mighty', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_103.mp3', duration: '02:12' },
{ name: '104.Sing The Wondrous', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_104.mp3', duration: '03:52' },
{ name: '105.Praise To The Lord', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_105.mp3', duration: '02:11' },
{ name: '106.Face To Face', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_106.mp3', duration: '04:01' },
{ name: '107.The Golden Morning', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_107.mp3', duration: '03:05' },
{ name: '108.Take The Name Of Jesus', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_108.mp3', duration: '04:02' },
{ name: '109.This Is My Father\'s', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_109.mp3', duration: '03:12' },
{ name: '110.Be Not Dismayed', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_110.mp3', duration: '03:55' }, 
{ name: '111.Lord I Want To', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_111.mp3', duration: '02:37' },
{ name: '112.For The Beauty', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_112.mp3', duration: '02:28' },
{ name: '113.Tell It To Every', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_113.mp3', duration: '02:21' },
{ name: '114.What A Friend', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_114.mp3', duration: '03:39' },
{ name: '115.Come We That', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_115.mp3', duration: '03:58' },
{ name: '116.Because He Lives', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_116.mp3', duration: '04:03' },
{ name: '117.Anywhere', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_117.mp3', duration: '02:25' },
{ name: '118.My Maker And My King', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_118.mp3', duration: '02:29' },
{ name: '119.I Serve A', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_119.mp3', duration: '03:09' },
{ name: '120.I Gave My Life', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_120.mp3', duration: '02:43' },
{ name: '121.Would You Be Free', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_121.mp3', duration: '02:56' },
{ name: '122.Look Upon Jesus', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_122.mp3', duration: '03:51' },
{ name: '123.There Is Sunshine', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_123.mp3', duration: '03:52' },
{ name: '124.Give Me The Bible', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_124.mp3', duration: '02:40' },
{ name: '125.Great Is Thy Faithfulness', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_125.mp3', duration: '03:03' },
{ name: '126.When He Cometh', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_126.mp3', duration: '01:44' },
{ name: '127.I Want My Friends To Pray', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_127.mp3', duration: '02:33' },
{ name: '128.Oh Brother Be Faithful', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_128.mp3', duration: '02:25' },
{ name: '129.Tell It To Jesus', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_129.mp3', duration: '03:25' },
{ name: '130.When The Trumpet', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_130.mp3', duration: '02:29' },
{ name: '131.Count Your Blessings', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_131.mp3', duration: '03:00' },
{ name: '132.If Any Little Word', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_132.mp3', duration: '02:28' },
{ name: '133.Marvellous Grace', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_133.mp3', duration: '02:46' },
{ name: '134.Thou Didst Leave', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_134.mp3', duration: '01:59' },
{ name: '135.Sweet Hour Of Prayer', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_135.mp3', duration: '02:42' },
{ name: '136.There Shall Be Showers', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_136.mp3', duration: '02:23' },
{ name: '137.Tis So Sweetto Trust ', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_137.mp3', duration: '02:29' },
{ name: '138.What A Fellowship', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_138.mp3', duration: '02:23' },
{ name: '139.Like The Woman', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_139.mp3', duration: '02:28' },
{ name: '140.I\'D Rather Have Jesus ', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_140.mp3', duration: '03:16' },
{ name: '141.Standing On The Promises', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_141.mp3', duration: '02:27' },     
{ name: '142.In A Little While', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_142.mp3', duration: '02:27' },
{ name: '143.Stand Up Stand Up', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_143.mp3', duration: '02:14' },     
{ name: '144.The Lord Is My Light', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_144.mp3', duration: '03:20' },
{ name: '145.There\'s A Call Comes', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_145.mp3', duration: '02:22' },
{ name: '146.Away Ina Manger', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_146.mp3', duration: '02:27' },
{ name: '147.Hark The Herald', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_147.mp3', duration: '03:25' },
{ name: '148.Go Tell It On The Mountain', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_148.mp3', duration: '02:25' },
{ name: '149.Joy To The World', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_149.mp3', duration: '02:07' },
{ name: '150.There Is A Song', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_150.mp3', duration: '01:47' },
{ name: '151.Angels From The', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_151.mp3', duration: '01:55' },
{ name: '152.Silent Night', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_152.mp3', duration: '03:16' },
{ name: '153.It Came Upon', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_153.mp3', duration: '03:25' },
{ name: '154.While Shepherds ', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_154.mp3', duration: '01:43' },
{ name: '155.We Three Kings', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_155.mp3', duration: '03:02' }, 
{ name: '156.Amazing Grace', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_156.mp3', duration: '02:39' },
{ name: '157.Oh Lord My God', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_157.mp3', duration: '03:36' },
{ name: '158.Days Are Filled', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_158.mp3', duration: '02:57' },
{ name: '159.God Be With You', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_159.mp3', duration: '02:44' },
{ name: '160.Abide With Me ', author: 'Melodies From Mount Zion', img: 'https://raw.githubusercontent.com/MountZionProject/MountZion_Melodies/main/Images/2.JPG', audio: 'Songs/Song_160.mp3', duration: '03:18' }                    
      ],
      pause: false });_defineProperty(this, "changeCurrentTime",


                                      
                                      
                                      


    e => {
      const duration = this.playerRef.duration;

      const playheadWidth = this.timelineRef.offsetWidth;
      const offsetWidht = this.timelineRef.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;

      const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

      this.playheadRef.style.width = userClickWidhtInPercent + "%";
      this.playerRef.currentTime = duration * userClickWidhtInPercent / 100;
    });_defineProperty(this, "hoverTimeLine",

    e => {
      const duration = this.playerRef.duration;

      const playheadWidth = this.timelineRef.offsetWidth;

      const offsetWidht = this.timelineRef.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;
      const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

      if (userClickWidhtInPercent <= 100) {
        this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
      }

      const time = duration * userClickWidhtInPercent / 100;

      if (time >= 0 && time <= duration) {
        this.hoverPlayheadRef.dataset.content = this.formatTime(time);
      }
    });_defineProperty(this, "resetTimeLine",

    () => {
      this.hoverPlayheadRef.style.width = 0;
    });_defineProperty(this, "timeUpdate",

    () => {
      const duration = this.playerRef.duration;
      const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
      const playPercent = 100 * (this.playerRef.currentTime / duration);
      this.playheadRef.style.width = playPercent + "%";
      const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
      this.setState({
        currentTime });

    });_defineProperty(this, "formatTime",

    currentTime => {
      const minutes = Math.floor(currentTime / 60);
      let seconds = Math.floor(currentTime % 60);

      seconds = seconds >= 10 ? seconds : "0" + seconds % 60;

      const formatTime = minutes + ":" + seconds;

      return formatTime;
    });_defineProperty(this, "updatePlayer",

    () => {
      const { musicList, index } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      this.playerRef.load();
    });_defineProperty(this, "nextSong",

    () => {
      const { musicList, index, pause } = this.state;

      this.setState({
        index: (index + 1) % musicList.length });

      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });_defineProperty(this, "prevSong",

    () => {
      const { musicList, index, pause } = this.state;

      this.setState({
        index: (index + musicList.length - 1) % musicList.length });

      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });_defineProperty(this, "playOrPause",


    () => {
      const { musicList, index, pause } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      if (!this.state.pause) {
        this.playerRef.play();
      } else {
        this.playerRef.pause();
      }
      this.setState({
        pause: !pause });

    });_defineProperty(this, "clickAudio",

    key => {
      const { pause } = this.state;

      this.setState({
        index: key });


      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });}componentDidMount() {this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);this.playerRef.addEventListener("ended", this.nextSong, false);this.timelineRef.addEventListener("click", this.changeCurrentTime, false);this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);}componentWillUnmount() {this.playerRef.removeEventListener("timeupdate", this.timeUpdate);this.playerRef.removeEventListener("ended", this.nextSong);this.timelineRef.removeEventListener("click", this.changeCurrentTime);this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);}


  render() {
    const { musicList, index, currentTime, pause } = this.state;
    const currentSong = musicList[index];
    return /*#__PURE__*/(
      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("div", { className: "current-song" }, /*#__PURE__*/
      React.createElement("audio", { ref: ref => this.playerRef = ref }, /*#__PURE__*/
      React.createElement("source", { src: currentSong.audio, type: "audio/ogg" }), "Your browser does not support the audio element."), /*#__PURE__*/


      React.createElement("div", { className: "img-wrap" }, /*#__PURE__*/
      React.createElement("img", { src: currentSong.img })), /*#__PURE__*/

      React.createElement("span", { className: "song-name" }, currentSong.name), /*#__PURE__*/
      React.createElement("span", { className: "song-autor" }, currentSong.author), /*#__PURE__*/

      React.createElement("div", { className: "time" }, /*#__PURE__*/
      React.createElement("div", { className: "current-time" }, currentTime), /*#__PURE__*/
      React.createElement("div", { className: "end-time" }, currentSong.duration)), /*#__PURE__*/


      React.createElement("div", { ref: ref => this.timelineRef = ref, id: "timeline" }, /*#__PURE__*/
      React.createElement("div", { ref: ref => this.playheadRef = ref, id: "playhead" }), /*#__PURE__*/
      React.createElement("div", { ref: ref => this.hoverPlayheadRef = ref, class: "hover-playhead", "data-content": "0:00" })), /*#__PURE__*/


      React.createElement("div", { className: "controls" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.prevSong, className: "prev prev-next current-btn" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-backward" })), /*#__PURE__*/

      React.createElement("button", { onClick: this.playOrPause, className: "play current-btn" },

      !pause ? /*#__PURE__*/React.createElement("i", { className: "fas fa-play" }) : /*#__PURE__*/
      React.createElement("i", { class: "fas fa-pause" })), /*#__PURE__*/


      React.createElement("button", { onClick: this.nextSong, className: "next prev-next current-btn" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-forward" })))), /*#__PURE__*/



      React.createElement("div", { className: "play-list" },
      musicList.map((music, key = 0) => /*#__PURE__*/
      React.createElement("div", { key: key,
        onClick: () => this.clickAudio(key),
        className: "track " + (
        index === key && !pause ? 'current-audio' : '') + (
        index === key && pause ? 'play-now' : '') }, /*#__PURE__*/

      React.createElement("img", { className: "track-img", src: music.img }), /*#__PURE__*/
      React.createElement("div", { className: "track-discr" }, /*#__PURE__*/
      React.createElement("span", { className: "track-name" }, music.name), /*#__PURE__*/
      React.createElement("span", { className: "track-author" }, music.author)), /*#__PURE__*/

      React.createElement("span", { className: "track-duration" },
      index === key ?
      currentTime :
      music.duration))))));







  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(CardProfile, null),
document.getElementById('root'));