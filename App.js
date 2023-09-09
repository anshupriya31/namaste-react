import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsu-C8khhxq3rfL3cUrV1bjL9fc3lBcCtrU0n8xnbYmkI2r_ccOVPhbConC9jrW90nZZs&usqp=CAU" alt="Image not loading"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        )
    };

const resList = [
    {
      info: {
        id: "396129",
        name: "Leon's - Burgers & Wings (Leon Grill)",
        cloudinaryImageId: "idul3mypguahz7zvggh3",
        locality: "E Block",
        areaName: "Jayalakhsmipuram",
        costForTwo: "₹350 for two",
        cuisines: [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "396129",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5300
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 5300
        },
        parentId: "371281",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 8.1,
          serviceability: "SERVICEABLE",
          slaString: "29 mins",
          lastMileTravelString: "8.1 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-e-block-jayalakhsmipuram-mysore-396129",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "448127",
        name: "Easy Bites by Hotel Empire",
        cloudinaryImageId: "d06b7fa84cb8f8193f60d4c2de172347",
        locality: "Kalidasa Road",
        areaName: "Gokulam",
        costForTwo: "₹150 for two",
        cuisines: [
          "Snacks",
          "American"
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "448127",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4300
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4300
        },
        parentId: "8503",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 6.3,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "6.3 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 03:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹40"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/easy-bites-by-hotel-empire-kalidasa-road-gokulam-mysore-448127",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "368801",
        name: "WarmOven Cake & Desserts",
        cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
        locality: "Shivarampet",
        areaName: "Yadavgiri",
        costForTwo: "₹200 for two",
        cuisines: [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "368801",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2500
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 2500
        },
        parentId: "9696",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 4.9,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "4.9 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 02:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-shivarampet-yadavgiri-mysore-368801",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "472876",
        name: "Samosa Singh",
        cloudinaryImageId: "77baefd8a5e319c828b4d7dff7260644",
        locality: "Kalidasa Road",
        areaName: "Vijay Nagar",
        costForTwo: "₹150 for two",
        cuisines: [
          "North Indian",
          "Indian",
          "Snacks"
        ],
        avgRating: 4,
        veg: true,
        feeDetails: {
          restaurantId: "472876",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4300
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4300
        },
        parentId: "5639",
        avgRatingString: "4.0",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 7.8,
          serviceability: "SERVICEABLE",
          slaString: "30 mins",
          lastMileTravelString: "7.8 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹40"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/samosa-singh-kalidasa-road-vijay-nagar-mysore-472876",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "368783",
        name: "Indiana Burgers",
        cloudinaryImageId: "tmlhnia5dyrb7cs5hmit",
        locality: "Shivarampet",
        areaName: "Yadavgiri",
        costForTwo: "₹150 for two",
        cuisines: [
          "Burgers",
          "American",
          "Fast Food",
          "Beverages",
          "Desserts"
        ],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "368783",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2500
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 2500
        },
        parentId: "5714",
        avgRatingString: "3.8",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 4.7,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "4.7 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/indiana-burgers-shivarampet-yadavgiri-mysore-368783",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "368815",
        name: "Kaati Zone Rolls & Wraps",
        cloudinaryImageId: "nkuulxykat0rkslonuys",
        locality: "Seebaiah Road",
        areaName: "Yadavgiri",
        costForTwo: "₹150 for two",
        cuisines: [
          "Fast Food",
          "Bengali",
          "Beverages",
          "Desserts"
        ],
        avgRating: 3.6,
        feeDetails: {
          restaurantId: "368815",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2500
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 2500
        },
        parentId: "248306",
        avgRatingString: "3.6",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 4.7,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "4.7 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-seebaiah-road-yadavgiri-mysore-368815",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "69906",
        name: "Hotel Empire",
        cloudinaryImageId: "seyiujth3uwiyvlokae1",
        locality: "Adipampa Road",
        areaName: "VV Mohalla",
        costForTwo: "₹250 for two",
        cuisines: [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "69906",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4300
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4300
        },
        parentId: "475",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 6.3,
          serviceability: "SERVICEABLE",
          slaString: "29 mins",
          lastMileTravelString: "6.3 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 03:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹40"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/hotel-empire-adipampa-road-vv-mohalla-mysore-69906",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "368788",
        name: "Cupcake Bliss Cake & Desserts",
        cloudinaryImageId: "40f193d8b23afb2988489dac1258962f",
        locality: "Seebaiah Road",
        areaName: "Yadavgiri",
        costForTwo: "₹200 for two",
        cuisines: [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        avgRating: 3.6,
        feeDetails: {
          restaurantId: "368788",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2500
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 2500
        },
        parentId: "66732",
        avgRatingString: "3.6",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 4.7,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "4.7 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹499",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/cupcake-bliss-cake-and-desserts-seebaiah-road-yadavgiri-mysore-368788",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "69630",
        name: "Domino's Pizza",
        cloudinaryImageId: "gmfvyw3wmttl7dmxj9ra",
        locality: "Lashkar Mohalla",
        areaName: "Mandi Mohalla",
        costForTwo: "₹700 for two",
        cuisines: [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "69630",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2500
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 2500
        },
        parentId: "2456",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 35,
          serviceability: "SERVICEABLE",
          slaString: "35 mins",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 03:59:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹699",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-lashkar-mohalla-mandi-mohalla-mysore-69630",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "339458",
        name: "Onesta",
        cloudinaryImageId: "q9lidmwik26okvsg9pnj",
        locality: "Gokulam Main Road",
        areaName: "Gokulam",
        costForTwo: "₹200 for two",
        cuisines: [
          "Italian",
          "Desserts",
          "Pizzas",
          "American",
          "Snacks"
        ],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "339458",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4300
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4300
        },
        parentId: "11785",
        avgRatingString: "3.9",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 6.5,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "6.5 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/onesta-main-road-gokulam-mysore-339458",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "496243",
        name: "Chinese Wok",
        cloudinaryImageId: "58ee0c742e8d56c3475db9ced65d2d47",
        locality: "Hyderali Road",
        areaName: "Gayathripuram",
        costForTwo: "₹250 for two",
        cuisines: [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "496243",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2500
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 2500
        },
        parentId: "61955",
        avgRatingString: "3.8",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "20 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/chinese-wok-hyderali-road-gayathripuram-mysore-496243",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "239451",
        name: "The Cake Room",
        cloudinaryImageId: "bznf8giidccjqwyegpum",
        locality: "Chadhuranga road",
        areaName: "Kuvempunagar",
        costForTwo: "₹300 for two",
        cuisines: [
          "Desserts"
        ],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "239451",
          fees: [
            {
              name: "BASE_TIME"
            },
            {
              name: "BASE_DISTANCE",
              fee: 5300
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 5300
        },
        parentId: "15498",
        avgRatingString: "4.4",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 9.7,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "9.7 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-10 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-cake-room-chadhuranga-road-kuvempunagar-mysore-239451",
        type: "WEBLINK"
      }
    }
  ];

  const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        costForTwo,
        sla
    } = resData?.info

    return (
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                cloudinaryImageId
            }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header /> 
            <Body />  
        </div>
        )
    };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)