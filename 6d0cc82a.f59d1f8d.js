(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{161:function(i,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return _})),s.d(t,"metadata",(function(){return S})),s.d(t,"rightToc",(function(){return l})),s.d(t,"default",(function(){return y}));var r=s(2),e=s(6),n=(s(0),s(163)),a=s(311),o=s(312),c=s(1151);class p extends c.d{constructor(){super(),this.onChange=i=>{this.code=i}}UNSAFE_componentWillMount(){this.code=this.props.code}componentDidUpdate(){}return(){c.d,code,scope,c.a,c.b,c.c,Result}}var j=p,_={id:"testEmbed",title:"Test"},S={id:"knowledge/references/testEmbed",isDocsHomePage:!1,title:"Test",description:"Code Sandbox",source:"@site/docs/knowledge/references/testEmbed.mdx",permalink:"/docs/knowledge/references/testEmbed",editUrl:"https://github.com/stove-labs/learn.stove-labs.com/edit/master/website/docs/knowledge/references/testEmbed.mdx"},l=[{value:"Code Sandbox",id:"code-sandbox",children:[]},{value:"Custom Codeblock for injecting programmatically",id:"custom-codeblock-for-injecting-programmatically",children:[]},{value:"React Terminal",id:"react-terminal",children:[]},{value:"Comparison",id:"comparison",children:[]}],d={rightToc:l};function y(i){var t=i.components,s=Object(e.a)(i,["components"]);return Object(n.b)("wrapper",Object(r.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"code-sandbox"},"Code Sandbox"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/relaxed-hooks-i2wl0?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.ts&theme=dark"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit relaxed-hooks-i2wl0"})))),Object(n.b)("iframe",{src:"https://codesandbox.io/embed/relaxed-hooks-i2wl0?expanddevtools=1&fontsize=12&hidenavigation=1&module=%2Fsrc%2Findex.ts&theme=dark",width:"850",height:"380",title:"relaxed-hooks-i2wl0",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(n.b)("h2",{id:"custom-codeblock-for-injecting-programmatically"},"Custom Codeblock for injecting programmatically"),Object(n.b)(a.a,{URL:"https://testnet-tezos.giganode.io/protocols",mdxType:"Fetch"}),Object(n.b)("h2",{id:"react-terminal"},"React Terminal"),Object(n.b)(o.a,{mdxType:"Terminal"}),Object(n.b)("h2",{id:"comparison"},"Comparison"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'I am a "normal" code block\n')),Object(n.b)(j,{mdxType:"CustomLiveProvider"}))}y.isMDXComponent=!0},311:function(i,t,s){"use strict";var r=s(2),e=s(0),n=s.n(e),a=s(218),o=s(231);let c;class p extends e.Component{constructor(i){super(i),c=i.URL,this.state={data:null,isLoading:!0}}componentDidMount(){this.setState({isLoading:!0}),fetch(c).then(i=>i.json()).then(i=>{console.log(i),this.setState({data:i,isLoading:!1})}).catch(i=>console.log(i))}render(){const{data:i,isLoading:t}=this.state;return t?n.a.createElement("p",null,"Loading ... Are you connected to the network?"):n.a.createElement(a.a,Object(r.a)({theme:o.a},a.b,{code:JSON.stringify(i,void 0,2),language:"json"}),({className:i,style:t,tokens:s,getLineProps:r,getTokenProps:e})=>n.a.createElement("pre",{className:i,style:t},s.map((i,t)=>n.a.createElement("div",r({line:i,key:t}),i.map((i,t)=>n.a.createElement("span",e({token:i,key:t})))))))}}t.a=p},312:function(i,t,s){"use strict";var r=s(0),e=s.n(r),n=s(432);class a extends r.Component{render(){return e.a.createElement("div",null,e.a.createElement(n.ReactTerminal,{inputStr:"print hello world!",theme:{...n.ReactThemes.dye,height:"25vh",width:"70%"}}))}}t.a=a},738:function(i,t,s){var r={"./Binary_Property/ASCII.js":739,"./Binary_Property/ASCII_Hex_Digit.js":740,"./Binary_Property/Alphabetic.js":741,"./Binary_Property/Any.js":742,"./Binary_Property/Assigned.js":743,"./Binary_Property/Bidi_Control.js":744,"./Binary_Property/Bidi_Mirrored.js":745,"./Binary_Property/Case_Ignorable.js":746,"./Binary_Property/Cased.js":747,"./Binary_Property/Changes_When_Casefolded.js":748,"./Binary_Property/Changes_When_Casemapped.js":749,"./Binary_Property/Changes_When_Lowercased.js":750,"./Binary_Property/Changes_When_NFKC_Casefolded.js":751,"./Binary_Property/Changes_When_Titlecased.js":752,"./Binary_Property/Changes_When_Uppercased.js":753,"./Binary_Property/Dash.js":754,"./Binary_Property/Default_Ignorable_Code_Point.js":755,"./Binary_Property/Deprecated.js":756,"./Binary_Property/Diacritic.js":757,"./Binary_Property/Emoji.js":758,"./Binary_Property/Emoji_Component.js":759,"./Binary_Property/Emoji_Modifier.js":760,"./Binary_Property/Emoji_Modifier_Base.js":761,"./Binary_Property/Emoji_Presentation.js":762,"./Binary_Property/Extended_Pictographic.js":763,"./Binary_Property/Extender.js":764,"./Binary_Property/Grapheme_Base.js":765,"./Binary_Property/Grapheme_Extend.js":766,"./Binary_Property/Hex_Digit.js":767,"./Binary_Property/IDS_Binary_Operator.js":768,"./Binary_Property/IDS_Trinary_Operator.js":769,"./Binary_Property/ID_Continue.js":770,"./Binary_Property/ID_Start.js":771,"./Binary_Property/Ideographic.js":772,"./Binary_Property/Join_Control.js":773,"./Binary_Property/Logical_Order_Exception.js":774,"./Binary_Property/Lowercase.js":775,"./Binary_Property/Math.js":776,"./Binary_Property/Noncharacter_Code_Point.js":777,"./Binary_Property/Pattern_Syntax.js":778,"./Binary_Property/Pattern_White_Space.js":779,"./Binary_Property/Quotation_Mark.js":780,"./Binary_Property/Radical.js":781,"./Binary_Property/Regional_Indicator.js":782,"./Binary_Property/Sentence_Terminal.js":783,"./Binary_Property/Soft_Dotted.js":784,"./Binary_Property/Terminal_Punctuation.js":785,"./Binary_Property/Unified_Ideograph.js":786,"./Binary_Property/Uppercase.js":787,"./Binary_Property/Variation_Selector.js":788,"./Binary_Property/White_Space.js":789,"./Binary_Property/XID_Continue.js":790,"./Binary_Property/XID_Start.js":791,"./General_Category/Cased_Letter.js":792,"./General_Category/Close_Punctuation.js":793,"./General_Category/Connector_Punctuation.js":794,"./General_Category/Control.js":795,"./General_Category/Currency_Symbol.js":796,"./General_Category/Dash_Punctuation.js":797,"./General_Category/Decimal_Number.js":798,"./General_Category/Enclosing_Mark.js":799,"./General_Category/Final_Punctuation.js":800,"./General_Category/Format.js":801,"./General_Category/Initial_Punctuation.js":802,"./General_Category/Letter.js":803,"./General_Category/Letter_Number.js":804,"./General_Category/Line_Separator.js":805,"./General_Category/Lowercase_Letter.js":806,"./General_Category/Mark.js":807,"./General_Category/Math_Symbol.js":808,"./General_Category/Modifier_Letter.js":809,"./General_Category/Modifier_Symbol.js":810,"./General_Category/Nonspacing_Mark.js":811,"./General_Category/Number.js":812,"./General_Category/Open_Punctuation.js":813,"./General_Category/Other.js":814,"./General_Category/Other_Letter.js":815,"./General_Category/Other_Number.js":816,"./General_Category/Other_Punctuation.js":817,"./General_Category/Other_Symbol.js":818,"./General_Category/Paragraph_Separator.js":819,"./General_Category/Private_Use.js":820,"./General_Category/Punctuation.js":821,"./General_Category/Separator.js":822,"./General_Category/Space_Separator.js":823,"./General_Category/Spacing_Mark.js":824,"./General_Category/Surrogate.js":825,"./General_Category/Symbol.js":826,"./General_Category/Titlecase_Letter.js":827,"./General_Category/Unassigned.js":828,"./General_Category/Uppercase_Letter.js":829,"./Script/Adlam.js":830,"./Script/Ahom.js":831,"./Script/Anatolian_Hieroglyphs.js":832,"./Script/Arabic.js":833,"./Script/Armenian.js":834,"./Script/Avestan.js":835,"./Script/Balinese.js":836,"./Script/Bamum.js":837,"./Script/Bassa_Vah.js":838,"./Script/Batak.js":839,"./Script/Bengali.js":840,"./Script/Bhaiksuki.js":841,"./Script/Bopomofo.js":842,"./Script/Brahmi.js":843,"./Script/Braille.js":844,"./Script/Buginese.js":845,"./Script/Buhid.js":846,"./Script/Canadian_Aboriginal.js":847,"./Script/Carian.js":848,"./Script/Caucasian_Albanian.js":849,"./Script/Chakma.js":850,"./Script/Cham.js":851,"./Script/Cherokee.js":852,"./Script/Chorasmian.js":853,"./Script/Common.js":854,"./Script/Coptic.js":855,"./Script/Cuneiform.js":856,"./Script/Cypriot.js":857,"./Script/Cyrillic.js":858,"./Script/Deseret.js":859,"./Script/Devanagari.js":860,"./Script/Dives_Akuru.js":861,"./Script/Dogra.js":862,"./Script/Duployan.js":863,"./Script/Egyptian_Hieroglyphs.js":864,"./Script/Elbasan.js":865,"./Script/Elymaic.js":866,"./Script/Ethiopic.js":867,"./Script/Georgian.js":868,"./Script/Glagolitic.js":869,"./Script/Gothic.js":870,"./Script/Grantha.js":871,"./Script/Greek.js":872,"./Script/Gujarati.js":873,"./Script/Gunjala_Gondi.js":874,"./Script/Gurmukhi.js":875,"./Script/Han.js":876,"./Script/Hangul.js":877,"./Script/Hanifi_Rohingya.js":878,"./Script/Hanunoo.js":879,"./Script/Hatran.js":880,"./Script/Hebrew.js":881,"./Script/Hiragana.js":882,"./Script/Imperial_Aramaic.js":883,"./Script/Inherited.js":884,"./Script/Inscriptional_Pahlavi.js":885,"./Script/Inscriptional_Parthian.js":886,"./Script/Javanese.js":887,"./Script/Kaithi.js":888,"./Script/Kannada.js":889,"./Script/Katakana.js":890,"./Script/Kayah_Li.js":891,"./Script/Kharoshthi.js":892,"./Script/Khitan_Small_Script.js":893,"./Script/Khmer.js":894,"./Script/Khojki.js":895,"./Script/Khudawadi.js":896,"./Script/Lao.js":897,"./Script/Latin.js":898,"./Script/Lepcha.js":899,"./Script/Limbu.js":900,"./Script/Linear_A.js":901,"./Script/Linear_B.js":902,"./Script/Lisu.js":903,"./Script/Lycian.js":904,"./Script/Lydian.js":905,"./Script/Mahajani.js":906,"./Script/Makasar.js":907,"./Script/Malayalam.js":908,"./Script/Mandaic.js":909,"./Script/Manichaean.js":910,"./Script/Marchen.js":911,"./Script/Masaram_Gondi.js":912,"./Script/Medefaidrin.js":913,"./Script/Meetei_Mayek.js":914,"./Script/Mende_Kikakui.js":915,"./Script/Meroitic_Cursive.js":916,"./Script/Meroitic_Hieroglyphs.js":917,"./Script/Miao.js":918,"./Script/Modi.js":919,"./Script/Mongolian.js":920,"./Script/Mro.js":921,"./Script/Multani.js":922,"./Script/Myanmar.js":923,"./Script/Nabataean.js":924,"./Script/Nandinagari.js":925,"./Script/New_Tai_Lue.js":926,"./Script/Newa.js":927,"./Script/Nko.js":928,"./Script/Nushu.js":929,"./Script/Nyiakeng_Puachue_Hmong.js":930,"./Script/Ogham.js":931,"./Script/Ol_Chiki.js":932,"./Script/Old_Hungarian.js":933,"./Script/Old_Italic.js":934,"./Script/Old_North_Arabian.js":935,"./Script/Old_Permic.js":936,"./Script/Old_Persian.js":937,"./Script/Old_Sogdian.js":938,"./Script/Old_South_Arabian.js":939,"./Script/Old_Turkic.js":940,"./Script/Oriya.js":941,"./Script/Osage.js":942,"./Script/Osmanya.js":943,"./Script/Pahawh_Hmong.js":944,"./Script/Palmyrene.js":945,"./Script/Pau_Cin_Hau.js":946,"./Script/Phags_Pa.js":947,"./Script/Phoenician.js":948,"./Script/Psalter_Pahlavi.js":949,"./Script/Rejang.js":950,"./Script/Runic.js":951,"./Script/Samaritan.js":952,"./Script/Saurashtra.js":953,"./Script/Sharada.js":954,"./Script/Shavian.js":955,"./Script/Siddham.js":956,"./Script/SignWriting.js":957,"./Script/Sinhala.js":958,"./Script/Sogdian.js":959,"./Script/Sora_Sompeng.js":960,"./Script/Soyombo.js":961,"./Script/Sundanese.js":962,"./Script/Syloti_Nagri.js":963,"./Script/Syriac.js":964,"./Script/Tagalog.js":965,"./Script/Tagbanwa.js":966,"./Script/Tai_Le.js":967,"./Script/Tai_Tham.js":968,"./Script/Tai_Viet.js":969,"./Script/Takri.js":970,"./Script/Tamil.js":971,"./Script/Tangut.js":972,"./Script/Telugu.js":973,"./Script/Thaana.js":974,"./Script/Thai.js":975,"./Script/Tibetan.js":976,"./Script/Tifinagh.js":977,"./Script/Tirhuta.js":978,"./Script/Ugaritic.js":979,"./Script/Vai.js":980,"./Script/Wancho.js":981,"./Script/Warang_Citi.js":982,"./Script/Yezidi.js":983,"./Script/Yi.js":984,"./Script/Zanabazar_Square.js":985,"./Script_Extensions/Adlam.js":986,"./Script_Extensions/Ahom.js":987,"./Script_Extensions/Anatolian_Hieroglyphs.js":988,"./Script_Extensions/Arabic.js":989,"./Script_Extensions/Armenian.js":990,"./Script_Extensions/Avestan.js":991,"./Script_Extensions/Balinese.js":992,"./Script_Extensions/Bamum.js":993,"./Script_Extensions/Bassa_Vah.js":994,"./Script_Extensions/Batak.js":995,"./Script_Extensions/Bengali.js":996,"./Script_Extensions/Bhaiksuki.js":997,"./Script_Extensions/Bopomofo.js":998,"./Script_Extensions/Brahmi.js":999,"./Script_Extensions/Braille.js":1e3,"./Script_Extensions/Buginese.js":1001,"./Script_Extensions/Buhid.js":1002,"./Script_Extensions/Canadian_Aboriginal.js":1003,"./Script_Extensions/Carian.js":1004,"./Script_Extensions/Caucasian_Albanian.js":1005,"./Script_Extensions/Chakma.js":1006,"./Script_Extensions/Cham.js":1007,"./Script_Extensions/Cherokee.js":1008,"./Script_Extensions/Chorasmian.js":1009,"./Script_Extensions/Common.js":1010,"./Script_Extensions/Coptic.js":1011,"./Script_Extensions/Cuneiform.js":1012,"./Script_Extensions/Cypriot.js":1013,"./Script_Extensions/Cyrillic.js":1014,"./Script_Extensions/Deseret.js":1015,"./Script_Extensions/Devanagari.js":1016,"./Script_Extensions/Dives_Akuru.js":1017,"./Script_Extensions/Dogra.js":1018,"./Script_Extensions/Duployan.js":1019,"./Script_Extensions/Egyptian_Hieroglyphs.js":1020,"./Script_Extensions/Elbasan.js":1021,"./Script_Extensions/Elymaic.js":1022,"./Script_Extensions/Ethiopic.js":1023,"./Script_Extensions/Georgian.js":1024,"./Script_Extensions/Glagolitic.js":1025,"./Script_Extensions/Gothic.js":1026,"./Script_Extensions/Grantha.js":1027,"./Script_Extensions/Greek.js":1028,"./Script_Extensions/Gujarati.js":1029,"./Script_Extensions/Gunjala_Gondi.js":1030,"./Script_Extensions/Gurmukhi.js":1031,"./Script_Extensions/Han.js":1032,"./Script_Extensions/Hangul.js":1033,"./Script_Extensions/Hanifi_Rohingya.js":1034,"./Script_Extensions/Hanunoo.js":1035,"./Script_Extensions/Hatran.js":1036,"./Script_Extensions/Hebrew.js":1037,"./Script_Extensions/Hiragana.js":1038,"./Script_Extensions/Imperial_Aramaic.js":1039,"./Script_Extensions/Inherited.js":1040,"./Script_Extensions/Inscriptional_Pahlavi.js":1041,"./Script_Extensions/Inscriptional_Parthian.js":1042,"./Script_Extensions/Javanese.js":1043,"./Script_Extensions/Kaithi.js":1044,"./Script_Extensions/Kannada.js":1045,"./Script_Extensions/Katakana.js":1046,"./Script_Extensions/Kayah_Li.js":1047,"./Script_Extensions/Kharoshthi.js":1048,"./Script_Extensions/Khitan_Small_Script.js":1049,"./Script_Extensions/Khmer.js":1050,"./Script_Extensions/Khojki.js":1051,"./Script_Extensions/Khudawadi.js":1052,"./Script_Extensions/Lao.js":1053,"./Script_Extensions/Latin.js":1054,"./Script_Extensions/Lepcha.js":1055,"./Script_Extensions/Limbu.js":1056,"./Script_Extensions/Linear_A.js":1057,"./Script_Extensions/Linear_B.js":1058,"./Script_Extensions/Lisu.js":1059,"./Script_Extensions/Lycian.js":1060,"./Script_Extensions/Lydian.js":1061,"./Script_Extensions/Mahajani.js":1062,"./Script_Extensions/Makasar.js":1063,"./Script_Extensions/Malayalam.js":1064,"./Script_Extensions/Mandaic.js":1065,"./Script_Extensions/Manichaean.js":1066,"./Script_Extensions/Marchen.js":1067,"./Script_Extensions/Masaram_Gondi.js":1068,"./Script_Extensions/Medefaidrin.js":1069,"./Script_Extensions/Meetei_Mayek.js":1070,"./Script_Extensions/Mende_Kikakui.js":1071,"./Script_Extensions/Meroitic_Cursive.js":1072,"./Script_Extensions/Meroitic_Hieroglyphs.js":1073,"./Script_Extensions/Miao.js":1074,"./Script_Extensions/Modi.js":1075,"./Script_Extensions/Mongolian.js":1076,"./Script_Extensions/Mro.js":1077,"./Script_Extensions/Multani.js":1078,"./Script_Extensions/Myanmar.js":1079,"./Script_Extensions/Nabataean.js":1080,"./Script_Extensions/Nandinagari.js":1081,"./Script_Extensions/New_Tai_Lue.js":1082,"./Script_Extensions/Newa.js":1083,"./Script_Extensions/Nko.js":1084,"./Script_Extensions/Nushu.js":1085,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":1086,"./Script_Extensions/Ogham.js":1087,"./Script_Extensions/Ol_Chiki.js":1088,"./Script_Extensions/Old_Hungarian.js":1089,"./Script_Extensions/Old_Italic.js":1090,"./Script_Extensions/Old_North_Arabian.js":1091,"./Script_Extensions/Old_Permic.js":1092,"./Script_Extensions/Old_Persian.js":1093,"./Script_Extensions/Old_Sogdian.js":1094,"./Script_Extensions/Old_South_Arabian.js":1095,"./Script_Extensions/Old_Turkic.js":1096,"./Script_Extensions/Oriya.js":1097,"./Script_Extensions/Osage.js":1098,"./Script_Extensions/Osmanya.js":1099,"./Script_Extensions/Pahawh_Hmong.js":1100,"./Script_Extensions/Palmyrene.js":1101,"./Script_Extensions/Pau_Cin_Hau.js":1102,"./Script_Extensions/Phags_Pa.js":1103,"./Script_Extensions/Phoenician.js":1104,"./Script_Extensions/Psalter_Pahlavi.js":1105,"./Script_Extensions/Rejang.js":1106,"./Script_Extensions/Runic.js":1107,"./Script_Extensions/Samaritan.js":1108,"./Script_Extensions/Saurashtra.js":1109,"./Script_Extensions/Sharada.js":1110,"./Script_Extensions/Shavian.js":1111,"./Script_Extensions/Siddham.js":1112,"./Script_Extensions/SignWriting.js":1113,"./Script_Extensions/Sinhala.js":1114,"./Script_Extensions/Sogdian.js":1115,"./Script_Extensions/Sora_Sompeng.js":1116,"./Script_Extensions/Soyombo.js":1117,"./Script_Extensions/Sundanese.js":1118,"./Script_Extensions/Syloti_Nagri.js":1119,"./Script_Extensions/Syriac.js":1120,"./Script_Extensions/Tagalog.js":1121,"./Script_Extensions/Tagbanwa.js":1122,"./Script_Extensions/Tai_Le.js":1123,"./Script_Extensions/Tai_Tham.js":1124,"./Script_Extensions/Tai_Viet.js":1125,"./Script_Extensions/Takri.js":1126,"./Script_Extensions/Tamil.js":1127,"./Script_Extensions/Tangut.js":1128,"./Script_Extensions/Telugu.js":1129,"./Script_Extensions/Thaana.js":1130,"./Script_Extensions/Thai.js":1131,"./Script_Extensions/Tibetan.js":1132,"./Script_Extensions/Tifinagh.js":1133,"./Script_Extensions/Tirhuta.js":1134,"./Script_Extensions/Ugaritic.js":1135,"./Script_Extensions/Vai.js":1136,"./Script_Extensions/Wancho.js":1137,"./Script_Extensions/Warang_Citi.js":1138,"./Script_Extensions/Yezidi.js":1139,"./Script_Extensions/Yi.js":1140,"./Script_Extensions/Zanabazar_Square.js":1141,"./index.js":1142,"./unicode-version.js":1143};function e(i){var t=n(i);return s(t)}function n(i){if(!s.o(r,i)){var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}return r[i]}e.keys=function(){return Object.keys(r)},e.resolve=n,i.exports=e,e.id=738}}]);