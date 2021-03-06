"use strict";
var demodata = [{
    "address": "401 South Sycamore Street, Santa Ana, CA 92701, USA",
    "image": "01",
    "area": "460",
    "bedrooms": "1",
    "price": "8,780",
    "type": "Multifamily",
    "lat": "38.69449491746338",
    "lng": "35.54305801481928"
}, {
    "address": "649 West Adams Boulevard, Los Angeles, CA 90007, USA",
    "image": "02",
    "type": "Self Storage",
    "area": "371",
    "bedrooms": "1",
    "price": "4,555",
    "lat": "34.02902892690632",
    "lng": "34.02902892690632"
}, {
    "address": "958 Dewey Avenue, Los Angeles, CA 90006, USA",
    "image": "03",
    "type": "Mixed-Use",
    "area": "190",
    "bedrooms": "2",
    "price": "6,72M",
        "lat": "38.69449491746338",
        "lng": "35.54305801481928"
}, {
    "address": "1026 Ohio Avenue, Long Beach, CA 90804, USA",
    "image": "04",
    "type": "Multifamily",
    "area": "2516",
    "bedrooms": "1",
    "price": "2,5M",
    "lat": "33.77943269617864",
    "lng": "-118.16001892089844"
}, {
    "address": "514 East Myrtle Street, Santa Ana, CA 92701, USA",
    "image": "05",
    "type": "Multifamily",
    "area": "131",
    "bedrooms": "1",
    "price": "1,87M",
    "lat": "33.701113957359744",
    "lng": "-117.80158561706543"
}, {
    "address": "1230 West Martin Luther King Junior Boulevard, Los Angeles, CA 90037, USA",
    "image": "06",
    "type": "Retail",
    "area": "377",
    "bedrooms": "2",
    "price": "2,255",
        "lat": "38.69449491746338",
        "lng": "35.54305801481928"
}, {
    "address": "401 South Sycamore Street, Santa Ana, CA 92701, USA",
    "image": "07",
    "type": "Family Housing",
    "area": "460",
    "bedrooms": "1",
    "price": "6,21M",
    "lat": "33.70229160384012",
    "lng": "-117.80845207214355"
}, {
    "address": "649 West Adams Boulevard, Los Angeles, CA 90007, USA",
    "image": "08",
    "area": "371",
    "bedrooms": "",
    "price": "310K",
    "type": "Multifamily",
    "lat": "34.02902892690632",
    "lng": "34.02902892690632"
}, {
    "address": "958 Dewey Avenue, Los Angeles, CA 90006, USA",
    "image": "09",
    "type": "Seniors Housing",
    "area": "190",
    "bedrooms": "2",
    "price": "2,72M",
    "lat": "34.05379721731628",
    "lng": "-118.2952880859375"
}, {
    "address": "514 East Myrtle Street, Santa Ana, CA 92701, USA",
    "image": "11",
    "type": "Industrial",
    "area": "131",
    "bedrooms": "1",
    "price": "1,87M",
    "lat": "33.741113957359744",
    "lng": "-117.86158561706543"
}, {
    "address": "1230 West Martin Luther King Junior Boulevard, Los Angeles, CA 90037, USA",
    "image": "03",
    "type": "Industrial",
    "area": "377",
    "bedrooms": "2",
    "price": "2,44M",
    "lat": "34.00083482994298",
    "lng": "-118.30700469970703"
}, {
    "address": "401 South Sycamore Street, Santa Ana, CA 92701, USA",
    "image": "01",
    "area": "460",
    "bedrooms": "1",
    "price": "6,21M",
    "type": "Multifamily",
    "lat": "33.74229160384012",
    "lng": "-117.86845207214355"
}, {
    "address": "649 West Adams Boulevard, Los Angeles, CA 90007, USA",
    "image": "02",
    "type": "Self Storage",
    "area": "371",
    "bedrooms": "",
    "price": "35,110",
    "lat": "34.02902892690632",
    "lng": "34.02902892690632"
}, {
    "address": "958 Dewey Avenue, Los Angeles, CA 90006, USA",
    "image": "03",
    "type": "Mixed-Use",
    "area": "190",
    "bedrooms": "2",
    "price": "6,72M",
    "lat": "34.00379721731628",
    "lng": "-118.2052880859375"
}, {
    "address": "1026 Ohio Avenue, Long Beach, CA 90804, USA",
    "image": "04",
    "type": "Multifamily",
    "area": "",
    "bedrooms": "1",
    "price": "1,51M",
    "lat": "33.77943269617864",
    "lng": "-118.16001892089844"
}, {
    "address": "514 East Myrtle Street, Santa Ana, CA 92701, USA",
    "image": "05",
    "type": "Multifamily",
    "area": "131",
    "bedrooms": "1",
    "price": "1,87M",
    "lat": "33.701113957359744",
    "lng": "-117.80158561706543"
}, {
    "address": "1230 West Martin Luther King Junior Boulevard, Los Angeles, CA 90037, USA",
    "image": "06",
    "type": "Retail",
    "area": "377",
    "bedrooms": "2",
    "price": "225K",
    "lat": "34.01083482994298",
    "lng": "-118.29700469970703"
}, {
    "address": "401 South Sycamore Street, Santa Ana, CA 92701, USA",
    "image": "07",
    "type": "Single-Family Housing",
    "area": "460",
    "bedrooms": "1",
    "price": "1,21M",
    "lat": "33.70229160384012",
    "lng": "-117.80845207214355"
}, {
    "address": "649 West Adams Boulevard, Los Angeles, CA 90007, USA",
    "image": "08",
    "area": "371",
    "bedrooms": "",
    "price": "368K",
    "lat": "34.02902892690632",
    "lng": "34.02902892690632"
}, {
    "address": "958 Dewey Avenue, Los Angeles, CA 90006, USA",
    "image": "09",
    "type": "Seniors Housing",
    "area": "190",
    "bedrooms": "2",
    "price": "1,72M",
    "lat": "34.05379721731628",
    "lng": "-118.2952880859375"
}, {
    "address": "514 East Myrtle Street, Santa Ana, CA 92701, USA",
    "image": "11",
    "type": "Industrial",
    "area": "131",
    "bedrooms": "1",
    "price": "875K",
    "lat": "33.741113957359744",
    "lng": "-117.86158561706543"
}, {
    "address": "1230 West Martin Luther King Junior Boulevard, Los Angeles, CA 90037, USA",
    "image": "03",
    "type": "Medical Office",
    "area": "377",
    "bedrooms": "2",
    "price": "2,44M",
    "lat": "34.00083482994298",
    "lng": "-118.30700469970703"
}];