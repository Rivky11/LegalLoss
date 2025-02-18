import { Helmet } from "react-helmet";
import { Img, Heading, Button } from "../../components";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import AllAddsProviderCubesRow from "../../components/AllAddsProviderCubesRow";
import CarPackageAdsProviderCubesRowthirtyone from "../../components/CarPackageAdsProviderCubesRowthirtyone";
import CarPackageAdsProviderCubesTwo from "../../components/CarPackageAdsProviderCubesTwo";
import React, { Suspense } from "react";
import { TabPanel, Tabs } from "react-tabs";

const data = [
  { image: "images/img_car_black_900_03.svg", twenty: "20", prop: "מודעות" },
  { image: "images/img_car_red_a700_03_1.svg", twenty: "20", prop: "מודעות בהמתנה לאישור" },
  { image: "images/img_car_light_green_800_1.svg", twenty: "20", prop: "מודעות מאושרות" },
  { image: "images/img_thumbs_up.svg", twenty: "20", prop: "מודעות למכרז" },
  { image: "images/img_television_yellow_800.svg", twenty: "20", prop: "חבילת מודעות במכרז" },
  { image: "images/img_car_gray_700_04.svg", twenty: "20", prop: "מודעות בארכיון" },
];
const data1 = [
  {
    prop: " חבילת מכרז",
    three: "3",
    prop1: "מחיר לחבילה:",
    prop2: "₪",
    threehundredtho: "800,000",
    prop3: "מחיר הרכב:",
    one: "₪",
    onehundredthous: "100,000",
    two: " חבילת מכרז",
    threeone: "3",
    threetwo: "3",
    one1: "מחיר לחבילה:",
    two1: "₪",
    p300000one: "800,000",
    one2: "מחיר הרכב:",
    threeoneOne: "₪",
    p100000one: "100,000",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop4: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two2: "אוטומטי",
    prop5: "שיקום",
    prop6: "לצפיה בחבילת מכרז",
    x85zeroone: "X8 – 5.0 שברולט",
    zipcode1: "2022",
    one3: "במוו",
    p2287One: "2287 נפח מנוע",
    fourone: "יד 4",
    five: "אוטומטי",
    one4: "לצפיה בחבילת מכרז",
    five1: "שיקום",
    five2: " חבילת מכרז",
    threethree: "3",
    threefour: "3",
    two3: "מחיר לחבילה:",
    fouroneOne: "₪",
    p300000two: "800,000",
    two4: "מחיר הרכב:",
    five3: "₪",
    p100000two: "100,000",
    x85zerotwo: "X8 – 5.0 במוו",
    zipcode2: "2022",
    two5: "במוו",
    p2287Two: "2287 נפח מנוע",
    fourtwo: "יד 4",
    eight: "אוטומטי",
    eight1: "שיקום",
    two6: "לצפיה בחבילת מכרז",
    prop7: " חבילת מכרז",
    threefive: "3",
    threesix: "3",
    prop8: "מחיר לחבילה:",
    six: "₪",
    p300000three: "800,000",
    three1: "מחיר הרכב:",
    seven: "₪",
    p100000three: "100,000",
    x85zerothree: "X8 – 5.0 שברולט",
    zipcode3: "2022",
    three2: "במוו",
    p2287One1: "2287 נפח מנוע",
    fourthree: "יד 4",
    eleven: "אוטומטי",
    eleven1: "שיקום",
    one5: "לצפיה בחבילת מכרז",
    one6: " חבילת מכרז",
    threeseven: "3",
    threeeight: "3",
    four1: "מחיר לחבילה:",
    eight2: "₪",
    p300000four: "800,000",
    nine: "₪",
    four2: "מחיר הרכב:",
    p100000four: "100,000",
    x85zerofour: "X8 – 5.0 במוו",
    zipcode4: "2022",
    four3: "במוו",
    p2287Two1: "2287 נפח מנוע",
    fourfour: "יד 4",
    ten: "אוטומטי",
    fourteen: "שיקום",
    two7: "לצפיה בחבילת מכרז",
    two8: " חבילת מכרז",
    threenine: "3",
    threeten: "3",
    five4: "מחיר לחבילה:",
    ten1: "₪",
    p300000five: "800,000",
    five5: "מחיר הרכב:",
    eleven2: "₪",
    p100000five: "100,000",
    x85zerofive: "X8 – 5.0 במוו",
    zipcode5: "2022",
    five6: "במוו",
    p22871: "2287 נפח מנוע",
    fourfive: "יד 4",
    twelve: "אוטומטי",
    prop9: "לצפיה בחבילת מכרז",
    nineteen: "שיקום",
    link: " חבילת מכרז",
    threeeleven: "3",
    threetwelve: "3",
    ten2: "מחיר לחבילה:",
    twelve1: "₪",
    p300000six: "800,000",
    six1: "מחיר הרכב:",
    thirteen: "₪",
    p100000six: "100,000",
    x85zerosix: "X8 – 5.0 שברולט",
    zipcode6: "2022",
    six2: "במוו",
    p2287Six: "2287 נפח מנוע",
    foursix: "יד 4",
    twenty: "אוטומטי",
    six3: "לצפיה בחבילת מכרז",
    nineteen1: "שיקום",
  },
  {
    prop: " חבילת מכרז",
    three: "3",
    prop1: "מחיר לחבילה:",
    prop2: "₪",
    threehundredtho: "800,000",
    prop3: "מחיר הרכב:",
    one: "₪",
    onehundredthous: "100,000",
    two: " חבילת מכרז",
    threeone: "3",
    threetwo: "3",
    one1: "מחיר לחבילה:",
    two1: "₪",
    p300000one: "800,000",
    one2: "מחיר הרכב:",
    threeoneOne: "₪",
    p100000one: "100,000",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop4: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two2: "אוטומטי",
    prop5: "שיקום",
    prop6: "לצפיה בחבילת מכרז",
    x85zeroone: "X8 – 5.0 שברולט",
    zipcode1: "2022",
    one3: "במוו",
    p2287One: "2287 נפח מנוע",
    fourone: "יד 4",
    five: "אוטומטי",
    one4: "לצפיה בחבילת מכרז",
    five1: "שיקום",
    five2: " חבילת מכרז",
    threethree: "3",
    threefour: "3",
    two3: "מחיר לחבילה:",
    fouroneOne: "₪",
    p300000two: "800,000",
    two4: "מחיר הרכב:",
    five3: "₪",
    p100000two: "100,000",
    x85zerotwo: "X8 – 5.0 במוו",
    zipcode2: "2022",
    two5: "במוו",
    p2287Two: "2287 נפח מנוע",
    fourtwo: "יד 4",
    eight: "אוטומטי",
    eight1: "שיקום",
    two6: "לצפיה בחבילת מכרז",
    prop7: " חבילת מכרז",
    threefive: "3",
    threesix: "3",
    prop8: "מחיר לחבילה:",
    six: "₪",
    p300000three: "800,000",
    three1: "מחיר הרכב:",
    seven: "₪",
    p100000three: "100,000",
    x85zerothree: "X8 – 5.0 שברולט",
    zipcode3: "2022",
    three2: "במוו",
    p2287One1: "2287 נפח מנוע",
    fourthree: "יד 4",
    eleven: "אוטומטי",
    eleven1: "שיקום",
    one5: "לצפיה בחבילת מכרז",
    one6: " חבילת מכרז",
    threeseven: "3",
    threeeight: "3",
    four1: "מחיר לחבילה:",
    eight2: "₪",
    p300000four: "800,000",
    nine: "₪",
    four2: "מחיר הרכב:",
    p100000four: "100,000",
    x85zerofour: "X8 – 5.0 במוו",
    zipcode4: "2022",
    four3: "במוו",
    p2287Two1: "2287 נפח מנוע",
    fourfour: "יד 4",
    ten: "אוטומטי",
    fourteen: "שיקום",
    two7: "לצפיה בחבילת מכרז",
    two8: " חבילת מכרז",
    threenine: "3",
    threeten: "3",
    five4: "מחיר לחבילה:",
    ten1: "₪",
    p300000five: "800,000",
    five5: "מחיר הרכב:",
    eleven2: "₪",
    p100000five: "100,000",
    x85zerofive: "X8 – 5.0 במוו",
    zipcode5: "2022",
    five6: "במוו",
    p22871: "2287 נפח מנוע",
    fourfive: "יד 4",
    twelve: "אוטומטי",
    prop9: "לצפיה בחבילת מכרז",
    nineteen: "שיקום",
    link: " חבילת מכרז",
    threeeleven: "3",
    threetwelve: "3",
    ten2: "מחיר לחבילה:",
    twelve1: "₪",
    p300000six: "800,000",
    six1: "מחיר הרכב:",
    thirteen: "₪",
    p100000six: "100,000",
    x85zerosix: "X8 – 5.0 שברולט",
    zipcode6: "2022",
    six2: "במוו",
    p2287Six: "2287 נפח מנוע",
    foursix: "יד 4",
    twenty: "אוטומטי",
    six3: "לצפיה בחבילת מכרז",
    nineteen1: "שיקום",
  },
  {
    prop: " חבילת מכרז",
    three: "3",
    prop1: "מחיר לחבילה:",
    prop2: "₪",
    threehundredtho: "800,000",
    prop3: "מחיר הרכב:",
    one: "₪",
    onehundredthous: "100,000",
    two: " חבילת מכרז",
    threeone: "3",
    threetwo: "3",
    one1: "מחיר לחבילה:",
    two1: "₪",
    p300000one: "800,000",
    one2: "מחיר הרכב:",
    threeoneOne: "₪",
    p100000one: "100,000",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop4: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two2: "אוטומטי",
    prop5: "שיקום",
    prop6: "לצפיה בחבילת מכרז",
    x85zeroone: "X8 – 5.0 שברולט",
    zipcode1: "2022",
    one3: "במוו",
    p2287One: "2287 נפח מנוע",
    fourone: "יד 4",
    five: "אוטומטי",
    one4: "לצפיה בחבילת מכרז",
    five1: "שיקום",
    five2: " חבילת מכרז",
    threethree: "3",
    threefour: "3",
    two3: "מחיר לחבילה:",
    fouroneOne: "₪",
    p300000two: "800,000",
    two4: "מחיר הרכב:",
    five3: "₪",
    p100000two: "100,000",
    x85zerotwo: "X8 – 5.0 במוו",
    zipcode2: "2022",
    two5: "במוו",
    p2287Two: "2287 נפח מנוע",
    fourtwo: "יד 4",
    eight: "אוטומטי",
    eight1: "שיקום",
    two6: "לצפיה בחבילת מכרז",
    prop7: " חבילת מכרז",
    threefive: "3",
    threesix: "3",
    prop8: "מחיר לחבילה:",
    six: "₪",
    p300000three: "800,000",
    three1: "מחיר הרכב:",
    seven: "₪",
    p100000three: "100,000",
    x85zerothree: "X8 – 5.0 שברולט",
    zipcode3: "2022",
    three2: "במוו",
    p2287One1: "2287 נפח מנוע",
    fourthree: "יד 4",
    eleven: "אוטומטי",
    eleven1: "שיקום",
    one5: "לצפיה בחבילת מכרז",
    one6: " חבילת מכרז",
    threeseven: "3",
    threeeight: "3",
    four1: "מחיר לחבילה:",
    eight2: "₪",
    p300000four: "800,000",
    nine: "₪",
    four2: "מחיר הרכב:",
    p100000four: "100,000",
    x85zerofour: "X8 – 5.0 במוו",
    zipcode4: "2022",
    four3: "במוו",
    p2287Two1: "2287 נפח מנוע",
    fourfour: "יד 4",
    ten: "אוטומטי",
    fourteen: "שיקום",
    two7: "לצפיה בחבילת מכרז",
    two8: " חבילת מכרז",
    threenine: "3",
    threeten: "3",
    five4: "מחיר לחבילה:",
    ten1: "₪",
    p300000five: "800,000",
    five5: "מחיר הרכב:",
    eleven2: "₪",
    p100000five: "100,000",
    x85zerofive: "X8 – 5.0 במוו",
    zipcode5: "2022",
    five6: "במוו",
    p22871: "2287 נפח מנוע",
    fourfive: "יד 4",
    twelve: "אוטומטי",
    prop9: "לצפיה בחבילת מכרז",
    nineteen: "שיקום",
    link: " חבילת מכרז",
    threeeleven: "3",
    threetwelve: "3",
    ten2: "מחיר לחבילה:",
    twelve1: "₪",
    p300000six: "800,000",
    six1: "מחיר הרכב:",
    thirteen: "₪",
    p100000six: "100,000",
    x85zerosix: "X8 – 5.0 שברולט",
    zipcode6: "2022",
    six2: "במוו",
    p2287Six: "2287 נפח מנוע",
    foursix: "יד 4",
    twenty: "אוטומטי",
    six3: "לצפיה בחבילת מכרז",
    nineteen1: "שיקום",
  },
  {
    prop: " חבילת מכרז",
    three: "3",
    prop1: "מחיר לחבילה:",
    prop2: "₪",
    threehundredtho: "800,000",
    prop3: "מחיר הרכב:",
    one: "₪",
    onehundredthous: "100,000",
    two: " חבילת מכרז",
    threeone: "3",
    threetwo: "3",
    one1: "מחיר לחבילה:",
    two1: "₪",
    p300000one: "800,000",
    one2: "מחיר הרכב:",
    threeoneOne: "₪",
    p100000one: "100,000",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop4: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two2: "אוטומטי",
    prop5: "שיקום",
    prop6: "לצפיה בחבילת מכרז",
    x85zeroone: "X8 – 5.0 שברולט",
    zipcode1: "2022",
    one3: "במוו",
    p2287One: "2287 נפח מנוע",
    fourone: "יד 4",
    five: "אוטומטי",
    one4: "לצפיה בחבילת מכרז",
    five1: "שיקום",
    five2: " חבילת מכרז",
    threethree: "3",
    threefour: "3",
    two3: "מחיר לחבילה:",
    fouroneOne: "₪",
    p300000two: "800,000",
    two4: "מחיר הרכב:",
    five3: "₪",
    p100000two: "100,000",
    x85zerotwo: "X8 – 5.0 במוו",
    zipcode2: "2022",
    two5: "במוו",
    p2287Two: "2287 נפח מנוע",
    fourtwo: "יד 4",
    eight: "אוטומטי",
    eight1: "שיקום",
    two6: "לצפיה בחבילת מכרז",
    prop7: " חבילת מכרז",
    threefive: "3",
    threesix: "3",
    prop8: "מחיר לחבילה:",
    six: "₪",
    p300000three: "800,000",
    three1: "מחיר הרכב:",
    seven: "₪",
    p100000three: "100,000",
    x85zerothree: "X8 – 5.0 שברולט",
    zipcode3: "2022",
    three2: "במוו",
    p2287One1: "2287 נפח מנוע",
    fourthree: "יד 4",
    eleven: "אוטומטי",
    eleven1: "שיקום",
    one5: "לצפיה בחבילת מכרז",
    one6: " חבילת מכרז",
    threeseven: "3",
    threeeight: "3",
    four1: "מחיר לחבילה:",
    eight2: "₪",
    p300000four: "800,000",
    nine: "₪",
    four2: "מחיר הרכב:",
    p100000four: "100,000",
    x85zerofour: "X8 – 5.0 במוו",
    zipcode4: "2022",
    four3: "במוו",
    p2287Two1: "2287 נפח מנוע",
    fourfour: "יד 4",
    ten: "אוטומטי",
    fourteen: "שיקום",
    two7: "לצפיה בחבילת מכרז",
    two8: " חבילת מכרז",
    threenine: "3",
    threeten: "3",
    five4: "מחיר לחבילה:",
    ten1: "₪",
    p300000five: "800,000",
    five5: "מחיר הרכב:",
    eleven2: "₪",
    p100000five: "100,000",
    x85zerofive: "X8 – 5.0 במוו",
    zipcode5: "2022",
    five6: "במוו",
    p22871: "2287 נפח מנוע",
    fourfive: "יד 4",
    twelve: "אוטומטי",
    prop9: "לצפיה בחבילת מכרז",
    nineteen: "שיקום",
    link: " חבילת מכרז",
    threeeleven: "3",
    threetwelve: "3",
    ten2: "מחיר לחבילה:",
    twelve1: "₪",
    p300000six: "800,000",
    six1: "מחיר הרכב:",
    thirteen: "₪",
    p100000six: "100,000",
    x85zerosix: "X8 – 5.0 שברולט",
    zipcode6: "2022",
    six2: "במוו",
    p2287Six: "2287 נפח מנוע",
    foursix: "יד 4",
    twenty: "אוטומטי",
    six3: "לצפיה בחבילת מכרז",
    nineteen1: "שיקום",
  },
  {
    prop: " חבילת מכרז",
    three: "3",
    prop1: "מחיר לחבילה:",
    prop2: "₪",
    threehundredtho: "800,000",
    prop3: "מחיר הרכב:",
    one: "₪",
    onehundredthous: "100,000",
    two: " חבילת מכרז",
    threeone: "3",
    threetwo: "3",
    one1: "מחיר לחבילה:",
    two1: "₪",
    p300000one: "800,000",
    one2: "מחיר הרכב:",
    threeoneOne: "₪",
    p100000one: "100,000",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop4: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two2: "אוטומטי",
    prop5: "שיקום",
    prop6: "לצפיה בחבילת מכרז",
    x85zeroone: "X8 – 5.0 שברולט",
    zipcode1: "2022",
    one3: "במוו",
    p2287One: "2287 נפח מנוע",
    fourone: "יד 4",
    five: "אוטומטי",
    one4: "לצפיה בחבילת מכרז",
    five1: "שיקום",
    five2: " חבילת מכרז",
    threethree: "3",
    threefour: "3",
    two3: "מחיר לחבילה:",
    fouroneOne: "₪",
    p300000two: "800,000",
    two4: "מחיר הרכב:",
    five3: "₪",
    p100000two: "100,000",
    x85zerotwo: "X8 – 5.0 במוו",
    zipcode2: "2022",
    two5: "במוו",
    p2287Two: "2287 נפח מנוע",
    fourtwo: "יד 4",
    eight: "אוטומטי",
    eight1: "שיקום",
    two6: "לצפיה בחבילת מכרז",
    prop7: " חבילת מכרז",
    threefive: "3",
    threesix: "3",
    prop8: "מחיר לחבילה:",
    six: "₪",
    p300000three: "800,000",
    three1: "מחיר הרכב:",
    seven: "₪",
    p100000three: "100,000",
    x85zerothree: "X8 – 5.0 שברולט",
    zipcode3: "2022",
    three2: "במוו",
    p2287One1: "2287 נפח מנוע",
    fourthree: "יד 4",
    eleven: "אוטומטי",
    eleven1: "שיקום",
    one5: "לצפיה בחבילת מכרז",
    one6: " חבילת מכרז",
    threeseven: "3",
    threeeight: "3",
    four1: "מחיר לחבילה:",
    eight2: "₪",
    p300000four: "800,000",
    nine: "₪",
    four2: "מחיר הרכב:",
    p100000four: "100,000",
    x85zerofour: "X8 – 5.0 במוו",
    zipcode4: "2022",
    four3: "במוו",
    p2287Two1: "2287 נפח מנוע",
    fourfour: "יד 4",
    ten: "אוטומטי",
    fourteen: "שיקום",
    two7: "לצפיה בחבילת מכרז",
    two8: " חבילת מכרז",
    threenine: "3",
    threeten: "3",
    five4: "מחיר לחבילה:",
    ten1: "₪",
    p300000five: "800,000",
    five5: "מחיר הרכב:",
    eleven2: "₪",
    p100000five: "100,000",
    x85zerofive: "X8 – 5.0 במוו",
    zipcode5: "2022",
    five6: "במוו",
    p22871: "2287 נפח מנוע",
    fourfive: "יד 4",
    twelve: "אוטומטי",
    prop9: "לצפיה בחבילת מכרז",
    nineteen: "שיקום",
    link: " חבילת מכרז",
    threeeleven: "3",
    threetwelve: "3",
    ten2: "מחיר לחבילה:",
    twelve1: "₪",
    p300000six: "800,000",
    six1: "מחיר הרכב:",
    thirteen: "₪",
    p100000six: "100,000",
    x85zerosix: "X8 – 5.0 שברולט",
    zipcode6: "2022",
    six2: "במוו",
    p2287Six: "2287 נפח מנוע",
    foursix: "יד 4",
    twenty: "אוטומטי",
    six3: "לצפיה בחבילת מכרז",
    nineteen1: "שיקום",
  },
  {
    prop: " חבילת מכרז",
    three: "3",
    prop1: "מחיר לחבילה:",
    prop2: "₪",
    threehundredtho: "800,000",
    prop3: "מחיר הרכב:",
    one: "₪",
    onehundredthous: "100,000",
    two: " חבילת מכרז",
    threeone: "3",
    threetwo: "3",
    one1: "מחיר לחבילה:",
    two1: "₪",
    p300000one: "800,000",
    one2: "מחיר הרכב:",
    threeoneOne: "₪",
    p100000one: "100,000",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop4: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two2: "אוטומטי",
    prop5: "שיקום",
    prop6: "לצפיה בחבילת מכרז",
    x85zeroone: "X8 – 5.0 שברולט",
    zipcode1: "2022",
    one3: "במוו",
    p2287One: "2287 נפח מנוע",
    fourone: "יד 4",
    five: "אוטומטי",
    one4: "לצפיה בחבילת מכרז",
    five1: "שיקום",
    five2: " חבילת מכרז",
    threethree: "3",
    threefour: "3",
    two3: "מחיר לחבילה:",
    fouroneOne: "₪",
    p300000two: "800,000",
    two4: "מחיר הרכב:",
    five3: "₪",
    p100000two: "100,000",
    x85zerotwo: "X8 – 5.0 במוו",
    zipcode2: "2022",
    two5: "במוו",
    p2287Two: "2287 נפח מנוע",
    fourtwo: "יד 4",
    eight: "אוטומטי",
    eight1: "שיקום",
    two6: "לצפיה בחבילת מכרז",
    prop7: " חבילת מכרז",
    threefive: "3",
    threesix: "3",
    prop8: "מחיר לחבילה:",
    six: "₪",
    p300000three: "800,000",
    three1: "מחיר הרכב:",
    seven: "₪",
    p100000three: "100,000",
    x85zerothree: "X8 – 5.0 שברולט",
    zipcode3: "2022",
    three2: "במוו",
    p2287One1: "2287 נפח מנוע",
    fourthree: "יד 4",
    eleven: "אוטומטי",
    eleven1: "שיקום",
    one5: "לצפיה בחבילת מכרז",
    one6: " חבילת מכרז",
    threeseven: "3",
    threeeight: "3",
    four1: "מחיר לחבילה:",
    eight2: "₪",
    p300000four: "800,000",
    nine: "₪",
    four2: "מחיר הרכב:",
    p100000four: "100,000",
    x85zerofour: "X8 – 5.0 במוו",
    zipcode4: "2022",
    four3: "במוו",
    p2287Two1: "2287 נפח מנוע",
    fourfour: "יד 4",
    ten: "אוטומטי",
    fourteen: "שיקום",
    two7: "לצפיה בחבילת מכרז",
    two8: " חבילת מכרז",
    threenine: "3",
    threeten: "3",
    five4: "מחיר לחבילה:",
    ten1: "₪",
    p300000five: "800,000",
    five5: "מחיר הרכב:",
    eleven2: "₪",
    p100000five: "100,000",
    x85zerofive: "X8 – 5.0 במוו",
    zipcode5: "2022",
    five6: "במוו",
    p22871: "2287 נפח מנוע",
    fourfive: "יד 4",
    twelve: "אוטומטי",
    prop9: "לצפיה בחבילת מכרז",
    nineteen: "שיקום",
    link: " חבילת מכרז",
    threeeleven: "3",
    threetwelve: "3",
    ten2: "מחיר לחבילה:",
    twelve1: "₪",
    p300000six: "800,000",
    six1: "מחיר הרכב:",
    thirteen: "₪",
    p100000six: "100,000",
    x85zerosix: "X8 – 5.0 שברולט",
    zipcode6: "2022",
    six2: "במוו",
    p2287Six: "2287 נפח מנוע",
    foursix: "יד 4",
    twenty: "אוטומטי",
    six3: "לצפיה בחבילת מכרז",
    nineteen1: "שיקום",
  },
  {
    prop: " חבילת מכרז",
    three: "3",
    prop1: "מחיר לחבילה:",
    prop2: "₪",
    threehundredtho: "800,000",
    prop3: "מחיר הרכב:",
    one: "₪",
    onehundredthous: "100,000",
    two: " חבילת מכרז",
    threeone: "3",
    threetwo: "3",
    one1: "מחיר לחבילה:",
    two1: "₪",
    p300000one: "800,000",
    one2: "מחיר הרכב:",
    threeoneOne: "₪",
    p100000one: "100,000",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop4: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two2: "אוטומטי",
    prop5: "שיקום",
    prop6: "לצפיה בחבילת מכרז",
    x85zeroone: "X8 – 5.0 שברולט",
    zipcode1: "2022",
    one3: "במוו",
    p2287One: "2287 נפח מנוע",
    fourone: "יד 4",
    five: "אוטומטי",
    one4: "לצפיה בחבילת מכרז",
    five1: "שיקום",
    five2: " חבילת מכרז",
    threethree: "3",
    threefour: "3",
    two3: "מחיר לחבילה:",
    fouroneOne: "₪",
    p300000two: "800,000",
    two4: "מחיר הרכב:",
    five3: "₪",
    p100000two: "100,000",
    x85zerotwo: "X8 – 5.0 במוו",
    zipcode2: "2022",
    two5: "במוו",
    p2287Two: "2287 נפח מנוע",
    fourtwo: "יד 4",
    eight: "אוטומטי",
    eight1: "שיקום",
    two6: "לצפיה בחבילת מכרז",
    prop7: " חבילת מכרז",
    threefive: "3",
    threesix: "3",
    prop8: "מחיר לחבילה:",
    six: "₪",
    p300000three: "800,000",
    three1: "מחיר הרכב:",
    seven: "₪",
    p100000three: "100,000",
    x85zerothree: "X8 – 5.0 שברולט",
    zipcode3: "2022",
    three2: "במוו",
    p2287One1: "2287 נפח מנוע",
    fourthree: "יד 4",
    eleven: "אוטומטי",
    eleven1: "שיקום",
    one5: "לצפיה בחבילת מכרז",
    one6: " חבילת מכרז",
    threeseven: "3",
    threeeight: "3",
    four1: "מחיר לחבילה:",
    eight2: "₪",
    p300000four: "800,000",
    nine: "₪",
    four2: "מחיר הרכב:",
    p100000four: "100,000",
    x85zerofour: "X8 – 5.0 במוו",
    zipcode4: "2022",
    four3: "במוו",
    p2287Two1: "2287 נפח מנוע",
    fourfour: "יד 4",
    ten: "אוטומטי",
    fourteen: "שיקום",
    two7: "לצפיה בחבילת מכרז",
    two8: " חבילת מכרז",
    threenine: "3",
    threeten: "3",
    five4: "מחיר לחבילה:",
    ten1: "₪",
    p300000five: "800,000",
    five5: "מחיר הרכב:",
    eleven2: "₪",
    p100000five: "100,000",
    x85zerofive: "X8 – 5.0 במוו",
    zipcode5: "2022",
    five6: "במוו",
    p22871: "2287 נפח מנוע",
    fourfive: "יד 4",
    twelve: "אוטומטי",
    prop9: "לצפיה בחבילת מכרז",
    nineteen: "שיקום",
    link: " חבילת מכרז",
    threeeleven: "3",
    threetwelve: "3",
    ten2: "מחיר לחבילה:",
    twelve1: "₪",
    p300000six: "800,000",
    six1: "מחיר הרכב:",
    thirteen: "₪",
    p100000six: "100,000",
    x85zerosix: "X8 – 5.0 שברולט",
    zipcode6: "2022",
    six2: "במוו",
    p2287Six: "2287 נפח מנוע",
    foursix: "יד 4",
    twenty: "אוטומטי",
    six3: "לצפיה בחבילת מכרז",
    nineteen1: "שיקום",
  },
  {
    prop: " חבילת מכרז",
    three: "3",
    prop1: "מחיר לחבילה:",
    prop2: "₪",
    threehundredtho: "800,000",
    prop3: "מחיר הרכב:",
    one: "₪",
    onehundredthous: "100,000",
    two: " חבילת מכרז",
    threeone: "3",
    threetwo: "3",
    one1: "מחיר לחבילה:",
    two1: "₪",
    p300000one: "800,000",
    one2: "מחיר הרכב:",
    threeoneOne: "₪",
    p100000one: "100,000",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop4: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two2: "אוטומטי",
    prop5: "שיקום",
    prop6: "לצפיה בחבילת מכרז",
    x85zeroone: "X8 – 5.0 שברולט",
    zipcode1: "2022",
    one3: "במוו",
    p2287One: "2287 נפח מנוע",
    fourone: "יד 4",
    five: "אוטומטי",
    one4: "לצפיה בחבילת מכרז",
    five1: "שיקום",
    five2: " חבילת מכרז",
    threethree: "3",
    threefour: "3",
    two3: "מחיר לחבילה:",
    fouroneOne: "₪",
    p300000two: "800,000",
    two4: "מחיר הרכב:",
    five3: "₪",
    p100000two: "100,000",
    x85zerotwo: "X8 – 5.0 במוו",
    zipcode2: "2022",
    two5: "במוו",
    p2287Two: "2287 נפח מנוע",
    fourtwo: "יד 4",
    eight: "אוטומטי",
    eight1: "שיקום",
    two6: "לצפיה בחבילת מכרז",
    prop7: " חבילת מכרז",
    threefive: "3",
    threesix: "3",
    prop8: "מחיר לחבילה:",
    six: "₪",
    p300000three: "800,000",
    three1: "מחיר הרכב:",
    seven: "₪",
    p100000three: "100,000",
    x85zerothree: "X8 – 5.0 שברולט",
    zipcode3: "2022",
    three2: "במוו",
    p2287One1: "2287 נפח מנוע",
    fourthree: "יד 4",
    eleven: "אוטומטי",
    eleven1: "שיקום",
    one5: "לצפיה בחבילת מכרז",
    one6: " חבילת מכרז",
    threeseven: "3",
    threeeight: "3",
    four1: "מחיר לחבילה:",
    eight2: "₪",
    p300000four: "800,000",
    nine: "₪",
    four2: "מחיר הרכב:",
    p100000four: "100,000",
    x85zerofour: "X8 – 5.0 במוו",
    zipcode4: "2022",
    four3: "במוו",
    p2287Two1: "2287 נפח מנוע",
    fourfour: "יד 4",
    ten: "אוטומטי",
    fourteen: "שיקום",
    two7: "לצפיה בחבילת מכרז",
    two8: " חבילת מכרז",
    threenine: "3",
    threeten: "3",
    five4: "מחיר לחבילה:",
    ten1: "₪",
    p300000five: "800,000",
    five5: "מחיר הרכב:",
    eleven2: "₪",
    p100000five: "100,000",
    x85zerofive: "X8 – 5.0 במוו",
    zipcode5: "2022",
    five6: "במוו",
    p22871: "2287 נפח מנוע",
    fourfive: "יד 4",
    twelve: "אוטומטי",
    prop9: "לצפיה בחבילת מכרז",
    nineteen: "שיקום",
    link: " חבילת מכרז",
    threeeleven: "3",
    threetwelve: "3",
    ten2: "מחיר לחבילה:",
    twelve1: "₪",
    p300000six: "800,000",
    six1: "מחיר הרכב:",
    thirteen: "₪",
    p100000six: "100,000",
    x85zerosix: "X8 – 5.0 שברולט",
    zipcode6: "2022",
    six2: "במוו",
    p2287Six: "2287 נפח מנוע",
    foursix: "יד 4",
    twenty: "אוטומטי",
    six3: "לצפיה בחבילת מכרז",
    nineteen1: "שיקום",
  },
];

export default function CarPackageAdsProviderCubesPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="relative h-[1178px]">
          <div className="absolute left-0 right-0 top-0 mx-auto h-[1080px] flex-1 bg-gray-100 shadow-xs" />
          <div className="container-12xl absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-center lg:px-5 md:px-5">
            <div className="w-full overflow-x-scroll">
              <div className="flex w-[1880px] items-start gap-10 md:flex-col">
                <div className="w-[10%] md:w-full">
                  <div className="rounded-[20px] bg-secondary-primary_white px-2.5 py-5 shadow-xs">
                    <div className="mb-[420px] flex flex-col gap-3">
                      <div className="relative h-[58px] content-end lg:h-auto md:h-auto">
                        <div className="mx-auto mb-2.5 h-[24px] flex-1 border-b border-solid border-gray-200" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center p-4">
                          <Heading as="h1" className="text-[18px] font-bold lg:text-[15px]">
                            המודעות שלי
                          </Heading>
                        </div>
                      </div>
                      <div className="mx-8 flex flex-col gap-2.5 md:mx-0 md:flex-row sm:flex-col">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {data.map((d, index) => (
                            <AllAddsProviderCubesRow {...d} key={"listtwenty" + index} />
                          ))}
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-start md:flex-col md:self-stretch">
                  <div className="flex flex-1 items-start md:flex-col md:self-stretch">
                    <Tabs
                      className="relative h-[1150px] flex-1 self-center md:w-full md:flex-none md:self-stretch"
                      selectedTabClassName="text-black-900_03 font-semibold text-[16px]"
                      selectedTabPanelClassName="px-8 mx-auto sm:px-4 !relative tab-panel--selected"
                    >
                      <div className="absolute left-0 right-0 top-0 mx-auto flex-1">
                        <div className="relative z-[1] mr-12 flex flex-col items-start gap-2 md:mr-0">
                          <div className="flex w-[14%] justify-center gap-1 rounded-br-lg bg-gray-100 lg:w-full md:w-full">
                            <div className="w-full">
                              <div className="flex items-center justify-center gap-1">
                                <Heading size="headingmd" as="h2" className="text-[12px] font-bold !text-gray-900_04">
                                  <span className="text-gray-900_04">&nbsp;</span>
                                  <span className="font-heebo font-medium text-gray-600">lbl_lbl23</span>
                                </Heading>
                                <Img src="images/img_signal.svg" alt="Signaloneone" className="h-[10px]" />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex items-center justify-center gap-0.5">
                                <Heading
                                  size="textxs"
                                  as="h3"
                                  className="!font-heebo text-[12px] font-medium !text-gray-600"
                                >
                                  מודעות במכרז
                                </Heading>
                                <Img
                                  src="images/img_vector_deep_orange_500.svg"
                                  alt="Vectoroneone"
                                  className="h-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative ml-6 h-[56px] self-stretch md:ml-0">
                            <div className="absolute bottom-0 left-0 right-0 top-0 mx-2.5 my-auto flex h-max flex-1 items-start justify-end gap-[22px] py-1.5 lg:mx-0 md:mx-0">
                              <Heading
                                size="h3_assistant_25px_m"
                                as="h4"
                                className="text-[25px] font-medium lg:text-[21px]"
                              >
                                מודעות רכבים שלי
                              </Heading>
                              <Img
                                src="images/img_car_red_a700_03_3.png"
                                alt="Caroneone"
                                className="mb-1.5 h-[36px] object-cover"
                              />
                            </div>
                            <div className="absolute left-0 right-0 top-[3.05px] mx-auto flex-1">
                              <div className="relative z-[2] flex gap-[15px]">
                                <Img
                                  src="images/img_button1_gray_100_01.svg"
                                  alt="Buttononeone"
                                  className="h-[32px] rounded-[10px]"
                                />
                                <Button size="md" className="w-[32px] rounded-[10px] px-1.5">
                                  <Img src="images/img_megaphone_gray_600_1.svg" />
                                </Button>
                              </div>
                              <div className="relative mt-[-28px] flex justify-center border-b border-solid border-gray-200 px-14 md:px-5 sm:px-4">
                                <CarPackageAdsProviderCubesTwo />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative mt-[-92px] h-[1080px] rounded-[20px] bg-secondary-primary_white shadow-xs" />
                      </div>
                      {[...Array(7)].map((_, index) => (
                        <TabPanel
                          key={`tab-panel${index}`}
                          className="absolute bottom-0 left-0 right-0 mx-auto flex-1 items-center px-8 sm:px-4"
                        >
                          <div className="absolute bottom-0 left-0 right-0 w-full flex-1">
                            <div className="flex flex-col gap-4">
                              <AllAddsProviderCubesColumnclose className="mr-2 md:mr-0" />
                              <div className="grid grid-cols-4 justify-center gap-7 overflow-x-scroll lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                  {data1.map((d, index) => (
                                    <CarPackageAdsProviderCubesRowthirtyone {...d} key={"Data2" + index} />
                                  ))}
                                </Suspense>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                      ))}
                    </Tabs>
                    <div className="relative z-[135] ml-[-82px] flex w-[12%] items-start justify-center md:ml-0 md:w-full">
                      <div className="flex flex-1 items-start">
                        <div className="relative z-[136] mt-10 flex flex-1 flex-col items-end gap-[30px]">
                          <Button size="6xl" className="mt-[60px] w-[52px] rounded-lg px-4">
                            <Img src="images/img_search_secondary__primary_white.svg" />
                          </Button>
                          <div className="flex flex-col gap-1 self-stretch">
                            <div className="flex justify-end px-3.5 py-4">
                              <Img
                                src="images/img__secondary__primary_white.svg"
                                alt="Imageoneone"
                                className="h-[20px]"
                              />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img
                                src="images/img__secondary__primary_white_20x20.svg"
                                alt="Imagetwoone"
                                className="h-[20px]"
                              />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img__20x20.svg" alt="Imagethreeone" className="h-[20px]" />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img__1.svg" alt="Imagefourone" className="h-[20px]" />
                            </div>
                            <div className="flex justify-end">
                              <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                                <Img src="images/img__2.svg" />
                              </Button>
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img__3.svg" alt="Imagefiveone" className="h-[20px]" />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img__4.svg" alt="Imagesixone" className="h-[20px]" />
                            </div>
                            <div className="relative h-[50px] content-center p-3.5 lg:h-auto md:h-auto">
                              <Img src="images/img_bell.svg" alt="Belloneone" className="ml-auto h-[20px]" />
                              <div className="absolute right-[26px] top-[17px] m-auto h-[6px] w-[6px] rounded-[3px] bg-red-a700" />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img_layers.png" alt="Layersoneone" className="h-[18px] object-cover" />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img__5.svg" alt="Imagesevenone" className="h-[20px]" />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img_search.svg" alt="Searchthreeone" className="h-[20px]" />
                            </div>
                          </div>
                        </div>
                        <div className="relative ml-[-70px] w-[30%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
                          <div className="mt-[896px] flex flex-col items-center gap-0.5">
                            <Heading
                              size="headinglg"
                              as="h5"
                              className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
                            >
                              גילי עטיה
                            </Heading>
                            <Heading
                              size="headingmd"
                              as="h6"
                              className="!font-inter text-[12px] font-semibold !text-red-a700_03"
                            >
                              ספק
                            </Heading>
                            <Heading
                              size="textxs"
                              as="p"
                              className="!font-inter text-[12px] font-medium !text-white-a700_7f underline"
                            >
                              התנתקות
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="relative z-[137] ml-[-88px] mt-[18px] flex w-[30%] justify-center">
                        <div className="flex w-full flex-col gap-1.5">
                          <Img
                            src="images/img_uuid_8da7836a_2_red_700.png"
                            alt="Uuid8da7836atwo"
                            className="mx-3 h-[28px] object-cover md:mx-0"
                          />
                          <div className="flex justify-center px-2.5">
                            <Heading
                              size="heading6xl"
                              as="h4"
                              className="!font-montserrat text-[25.98px] font-extrabold !text-red-a700_01 lg:text-[21px]"
                            >
                              <span className="text-secondary-primary_white">lbl_lbl_b</span>
                              <span className="text-red-a700_03">lbl_lbl_m</span>
                              <span className="text-secondary-primary_white">lbl_lbl_c</span>
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_tablist.png"
                    alt="Tablistthree"
                    className="relative z-[138] ml-[-88px] h-[40px] w-[6%] object-contain md:ml-0 md:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
