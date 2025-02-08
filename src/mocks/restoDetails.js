export const menuDetails = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "The Fusion Lounge",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "658210",
              name: "The Fusion Lounge",
              city: "Chhindwara",
              slugs: {
                restaurant: "the-fusion-lounge-chhindwara-city-chhindwara-city",
                city: "chhindwara",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
              locality: "Triloki nagar",
              areaName: "Railway Station",
              costForTwo: "30000",
              costForTwoMessage: "₹300 for two",
              cuisines: ["North Indian", "South Indian"],
              avgRating: 4.1,
              feeDetails: {
                restaurantId: "658210",
                fees: [{}],
              },
              parentId: "395453",
              avgRatingString: "4.1",
              totalRatingsString: "304 ratings",
              sla: {
                restaurantId: "658210",
                deliveryTime: 63,
                minDeliveryTime: 60,
                maxDeliveryTime: 65,
                lastMileTravel: 10.2,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_IT_IS_LONG_DISTANCE",
                zoneId: 2218,
                slaString: "60-65 MINS",
                lastMileTravelString: "10.2 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-02-02 23:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                shortDescriptionList: [
                  {
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "10% off upto ₹150|Use HSBCFEST Above ₹499",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "30% off upto ₹150|Use AXIS30 Above ₹200",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "the-fusion-lounge-chhindwara-city-chhindwara-city",
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    '3X42+RRH, Triloki Nagar, Chhindwara Beside "Hotel sinha residency "Madhya Pradesh 480001, India',
                },
                {
                  title: "Cuisines",
                  message: "North Indian,South Indian",
                },
              ],
              totalRatings: 304,
              aggregatedDiscountInfoV2: {
                shortDescriptionList: [
                  {
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "10% off upto ₹150|Use HSBCFEST Above ₹499",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "30% off upto ₹150|Use AXIS30 Above ₹200",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/658210",
              },
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "22.05705733686904,78.95239820000148",
              backgroundImageOverlayInfo: {},
              featuredSectionInfo: {},
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 2,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "10% OFF UPTO ₹150",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/c1779f43-0cfd-4cc3-ab65-323a857b3327_HSBC.png",
                      offerIds: ["48e163e2-2bb4-43a2-afde-a1fbb5e280c0"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE HSBCFEST",
                      description: "ABOVE ₹499",
                      offerType: "offers",
                      restId: "658210",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/c1779f43-0cfd-4cc3-ab65-323a857b3327_HSBC.png",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "30% OFF UPTO ₹150",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/c9e54b4a-4849-437d-a251-fd411db19028_AxisMenuLogo.png",
                      offerIds: ["4aec9661-3b16-47f4-8bce-36f6d95283f1"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE AXIS30",
                      description: "ABOVE ₹200",
                      offerType: "offers",
                      restId: "658210",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/c9e54b4a-4849-437d-a251-fd411db19028_AxisMenuLogo.png",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                      title: "Top Picks",
                      carousel: [
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "2355540",
                          creativeId: "TopPicks2024/107559680A.png",
                          title: "Paneer Pasanda",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "107559680",
                              name: "Paneer Pasanda",
                              category: "Main Course",
                              description:
                                "An indulgent and creamy paneer dish that is sure to tantalize your taste buds with its rich flavors and delicate spices.",
                              imageId: "40d0dc9019e473b63c0d2af398f7c95a",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "2355251",
                          creativeId: "TopPicks2024/107559681A.png",
                          title: "Paneer Tikka Masala",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "107559681",
                              name: "Paneer Tikka Masala",
                              category: "Main Course",
                              description:
                                "An flavorful and aromatic combination of tender paneer in a rich and creamy tomato-based sauce.",
                              imageId: "ec012b47edc9574db00bf2812fbcf0f4",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "2355253",
                          creativeId: "TopPicks2024/107559701A.png",
                          title: "Mushroom Masala",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "107559701",
                              name: "Mushroom Masala",
                              category: "Main Course",
                              description:
                                "A savory and flavorful vegetarian main course filled with rich mushrooms and aromatic spices.",
                              imageId: "727b932091c8bf65fc878fa01d3d93a4",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559478",
                              name: "Butter Tandoori Roti",
                              category: "Breads",
                              description:
                                "A delectable blend of buttery goodness and charred flavors, this indulgent bread is a must-try for bread lovers.",
                              imageId: "7b7f2ba882545956bc38b76dabae05b6",
                              inStock: 1,
                              isVeg: 1,
                              price: 2000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.6",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559495",
                              name: "Butter Naan",
                              category: "Breads",
                              description:
                                "North Indian bread with a generous serving of butter that tastes brilliant when paired with a gravy.",
                              imageId: "329f8195a751ca91de12177604599f17",
                              inStock: 1,
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                      subtitleSuffix: {},
                      categoryId: "-1",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Main Course",
                      categories: [
                        {
                          title: "Chicken ",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559559",
                                  name: "Chicken Rara Masala",
                                  category: "Main Course",
                                  description:
                                    "An indulgent chicken dish cooked in a rich, flavorful gravy that will leave your taste buds craving for more.",
                                  inStock: 1,
                                  price: 32000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559572",
                                  name: "Chicken Keema kaleji",
                                  category: "Main Course",
                                  description:
                                    "A delectable non-vegetarian main course bursting with flavors, featuring succulent chicken and tender kaleji.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/9f1eb23d-4209-4e8f-a585-6fc8873d9fbe_a8e6cd51-9b8f-4639-8935-a43cb93ed1c1.JPG",
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559544",
                                  name: "Chicken Murg Musalam",
                                  category: "Main Course",
                                  description:
                                    "An aromatic and flavorful non-veg main course that will transport your taste buds to a world of rich and satisfying flavors.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/7/0de4b2e7-0d98-4de5-b43c-6efae7f4dfca_278cd005-8f28-48f7-a9c1-d9b00080f20b.JPG",
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559524",
                                  name: "Chicken Handi",
                                  category: "Main Course",
                                  description:
                                    "A delectable and flavorful chicken dish that will satisfy your cravings for a hearty non-vegetarian main course.",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559580",
                                  name: "Chcken Lababdar",
                                  category: "Main Course",
                                  description:
                                    "A flavorful and vibrant main course bursting with rich flavors and succulent chicken.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/74785eb9-8043-470e-aae6-597014593c32_7283e30d-bd12-49af-8909-f0cbb4654848.JPG",
                                  inStock: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559500",
                                  name: "Chicken Masala",
                                  category: "Main Course",
                                  description:
                                    "Tender chicken in a rich and flavorful sauce, perfect for a satisfying and hearty main course.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/1/93b94447-6267-4807-adbd-95a1978bddb5_d0e8b134-cef3-40fa-ab3a-eeb4278fcf45.JPG",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.3",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559508",
                                  name: "Kadai Chicken",
                                  category: "Main Course",
                                  description:
                                    "A mouthwatering non-vegetarian delight that will satisfy your taste buds with its flavorful and aromatic blend.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/1/15c07e97-8803-4386-92d5-0606a768b3da_ec01f016-6b6d-4921-bf58-dc390898e49d.JPG",
                                  inStock: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559538",
                                  name: "Chicken Sahu Ji",
                                  category: "Main Course",
                                  description:
                                    "A succulent and flavorful chicken main course that will tantalize your taste buds.",
                                  inStock: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559514",
                                  name: "Chicken Kolhapuri",
                                  category: "Main Course",
                                  description:
                                    "A flavorful main course showcasing tender chicken in a rich, aromatic sauce that tantalizes the taste buds.",
                                  inStock: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559531",
                                  name: "Chicken Hyderabadi",
                                  category: "Main Course",
                                  description:
                                    "A delectable and flavorful chicken entree inspired by the regal Hyderabadi cuisine.",
                                  inStock: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559552",
                                  name: "Chicken Tikka Masala",
                                  category: "Main Course",
                                  description:
                                    "Succulent grilled chicken served in a rich and flavorful tomato-based sauce, this dish is perfect for a hearty and satisfying main course.",
                                  inStock: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559565",
                                  name: "Chicken Bhuna Masala",
                                  category: "Main Course",
                                  description:
                                    "A succulent and flavorful chicken dish that will delight your taste buds and transport you to the vibrant flavors of India.",
                                  inStock: 1,
                                  price: 32000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559585",
                                  name: "Chicken Matka Masala",
                                  category: "Main Course",
                                  description:
                                    "A flavorful and indulgent non-Veg dish that is perfect for the main course, Chicken Matka Masala is a true delight for your taste buds!",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/a4ccab2a-6891-411d-9d2d-d44d2a27f89d_824269c1-babe-4050-a4a8-4a09057be48a.JPG",
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559590",
                                  name: "Chicken Mughlai",
                                  category: "Main Course",
                                  description:
                                    "An all-time loved combo with finger-licking chicken Mughlai served along with chilli chicken, 1 lollipop and raitha.",
                                  inStock: 1,
                                  price: 32000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066183",
                        },
                        {
                          title: "Paneer",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559676",
                                  name: "Palak Paneer",
                                  category: "Main Course",
                                  description:
                                    "A wholesome and flavorful spinach and cheese dish that will tantalize your taste buds.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/1/5d193fa2-298d-492e-8fca-1f63fae52f72_49c7ad7a-92af-4fa8-bb79-c1320469c9a2.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559680",
                                  name: "Paneer Pasanda",
                                  category: "Main Course",
                                  description:
                                    "An indulgent and creamy paneer dish that is sure to tantalize your taste buds with its rich flavors and delicate spices.",
                                  imageId: "40d0dc9019e473b63c0d2af398f7c95a",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559682",
                                  name: "Paneer Kaju",
                                  category: "Main Course",
                                  description:
                                    "A delectable vegetarian main course that combines the rich creaminess of paneer with the indulgent crunch of cashews for a truly satisfying experience.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/4a37bdd3-6562-4e8e-b26d-6e7a7ef5870b_58daec85-8156-464c-82bb-2c419742270d.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559669",
                                  name: "Paneer Masala",
                                  category: "Main Course",
                                  description:
                                    "A rich and flavorful Indian dish that will tantalize your taste buds with its creamy sauce and aromatic spices.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/bab41dc6-ea80-4517-9ad9-a23fe773f225_30083aa8-04fc-4e59-95af-08d6744dfbe7.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "30 ratings",
                                      ratingCountV2: "30",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559675",
                                  name: "Paneer Lababdar",
                                  category: "Main Course",
                                  description:
                                    "A rich and creamy vegetable curry that is a perfect centerpiece for a satisfying vegetarian main course.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/9/00c4a5d9-7edb-4821-9b14-29b749a19a95_8117d510-acab-4076-abd4-c46528e5331a.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559679",
                                  name: "Shahi Paneer",
                                  category: "Main Course",
                                  description:
                                    "A creamy indulgence made by cooking paneer cubes in a tomato gravy seasoned with Indian spices.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/9886615b-b599-4a9e-a3e6-dfd0922c0ea2_c88e5a95-4a91-41e9-91d4-953fd4e4292f.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559672",
                                  name: "Kadhai Paneer",
                                  category: "Main Course",
                                  description:
                                    "A delightful and satisfying vegetarian main course with a delightful blend of flavors and richly cooked paneer.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/1/8c380d75-9e82-4a40-bd60-674048e37bad_101019c2-f0d4-4dae-811c-f2dfd74bf368.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.1",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559674",
                                  name: "Paneer Handi",
                                  category: "Main Course",
                                  description:
                                    "A rich and flavorful Indian vegetarian delight bursting with succulent paneer and aromatic spices.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/2e82a267-6a8e-4177-a181-710d7da556de_5b934428-7a50-41b7-a80d-a4ad858faa59.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559670",
                                  name: "Matar Paneer",
                                  category: "Main Course",
                                  description:
                                    "A delectable and flavorful dish that combines soft cottage cheese and tender green peas in a rich, creamy gravy.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/21f9a42a-95a1-4f92-84c8-9721f5c771b0_83b88739-993e-4b0b-a336-4401f10b1048.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559671",
                                  name: "Paneer Butter Masala",
                                  category: "Main Course",
                                  description:
                                    "A delightfully wholesome combo with soft roti (3pcs); served along with paneer butter masala, fryums and onion.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/3185c3ac-9eb3-43c2-97ba-8f9d5b8347bf_a410c799-3c99-4530-b4cb-5fec218dd732.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.6",
                                      ratingCount: "8 ratings",
                                      ratingCountV2: "8",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559677",
                                  name: "Paneer Kolhapuri",
                                  category: "Main Course",
                                  description:
                                    "Indulge in a flavorful and traditional Main Course dish that captures the essence of Kolhapur, Maharashtra with Paneer Kolhapuri.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/27f1dde5-72e9-4b17-8562-b9d174b387d4_532df8b6-986c-4b04-8716-383f174e18b2.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559681",
                                  name: "Paneer Tikka Masala",
                                  category: "Main Course",
                                  description:
                                    "An flavorful and aromatic combination of tender paneer in a rich and creamy tomato-based sauce.",
                                  imageId: "ec012b47edc9574db00bf2812fbcf0f4",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559683",
                                  name: "Paneer Hyderabadi",
                                  category: "Main Course",
                                  description:
                                    "A delectable and flavorful vegetarian delight from Hyderabad that will leave you craving for more.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/9/c3a6e674-ec4e-401b-bbd7-8287c986d06b_1c20fd47-f80b-40ce-a637-352221e9977a.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066079",
                        },
                        {
                          title: "Vegetables",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559701",
                                  name: "Mushroom Masala",
                                  category: "Main Course",
                                  description:
                                    "A savory and flavorful vegetarian main course filled with rich mushrooms and aromatic spices.",
                                  imageId: "727b932091c8bf65fc878fa01d3d93a4",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559703",
                                  name: "Matar Mushroom",
                                  category: "Main Course",
                                  description:
                                    "A delectable main course featuring a perfect combination of tender peas and succulent mushrooms.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/1/ebb8ca69-f5ef-4c3a-8354-23ce9ea5b2cd_246a7aab-63ff-4514-8153-15d2a1d27339.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559696",
                                  name: "Chole Masala",
                                  category: "Main Course",
                                  description:
                                    "A delectable and aromatic North Indian curry bursting with flavors, perfect for a fulfilling main course.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/0745b122-96c1-410f-a43d-2af485975d8e_2c038fb2-5189-45e3-9826-7d207555aad5.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559694",
                                  name: "Mix Veg",
                                  category: "Main Course",
                                  description:
                                    "A mouthwatering medley of vegetables cooked to perfection, offering a delightful main course experience.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/7/d9a0232d-6ad1-46d1-ac13-7427c2d46069_61e1dfb4-9d74-41d9-9ae0-74a76f385137.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559695",
                                  name: "Aloo Gobhi",
                                  category: "Main Course",
                                  description:
                                    "A mouthwatering and flavorful vegetarian main course featuring a delightful combination of potatoes and cauliflower.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559697",
                                  name: "Sev Tamatar",
                                  category: "Main Course",
                                  description:
                                    "A mouthwatering and flavorful veg dish with a tantalizing blend of tangy tomatoes and crispy sev.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.7",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559698",
                                  name: "Veg Kolhapuri",
                                  category: "Main Course",
                                  description:
                                    "A flavorful and aromatic Indian delight, bursting with a rich blend of regional spices and herbs.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559699",
                                  name: "Bhindi Masala",
                                  category: "Main Course",
                                  description:
                                    "A delightful and flavorful Indian main course featuring okra cooked with a special blend of aromatic spices.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/1/8ff2c9ef-7196-485b-9ba1-817d7ca10fa8_e045b39c-c088-45a7-8e56-14e7a2463367.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559476",
                                  name: "Veg egg curry",
                                  category: "Main Course",
                                  description:
                                    "A delectable and satisfying vegetarian curry bursting with flavors, perfect for a hearty main course.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559483",
                                  name: "Veg Deewani Handi",
                                  category: "Main Course",
                                  description:
                                    "A delectable blend of aromatic vegetables cooked to perfection in a deewani handi, offering a delightful indulgence for the main course.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066081",
                        },
                        {
                          title: "Egg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559645",
                                  name: "Egg Bhurji Curry",
                                  category: "Main Course",
                                  description:
                                    "A delectable egg dish bursting with flavorful curry goodness, perfect for a satisfying main course.",
                                  inStock: 1,
                                  price: 23000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "EGG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559647",
                                  name: "Egg Lababdar",
                                  category: "Main Course",
                                  description:
                                    "Indulge in a delectable blend of flavorful egg cooked to perfection, a delightful main course that will leave you craving for more.",
                                  inStock: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "EGG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559643",
                                  name: "Egg Bhurji",
                                  category: "Main Course",
                                  description:
                                    "A wholesome dish prepared with delectable eggs scarambled and flavored with masalas and assorted veggies.",
                                  inStock: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "EGG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559641",
                                  name: "Egg Masala",
                                  category: "Main Course",
                                  description:
                                    "A flavorful and satisfying entree showcasing eggs cooked in a luscious and aromatic gravy.",
                                  inStock: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "EGG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559638",
                                  name: "Egg Curry",
                                  category: "Main Course",
                                  description:
                                    "A flavorful and savory egg curry perfect for a satisfying main course.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/9d463177-6dcc-4c73-af86-48fed55ec925_28cd5ab0-e16f-489b-b1c8-45f8e7974b28.JPG",
                                  inStock: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "EGG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.6",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066085",
                        },
                        {
                          title: "Mutton",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559611",
                                  name: "Mutton Matka Masala",
                                  category: "Main Course",
                                  description:
                                    "Indulge in a robust and flavorsome non-veg main course that will tantalize your taste buds.",
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559597",
                                  name: "Mutton Masala",
                                  category: "Main Course",
                                  description:
                                    "A flavorful and satisfying main course showcasing tender mutton infused with aromatic spices.",
                                  inStock: 1,
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559602",
                                  name: "Mutton Rogan Josh",
                                  category: "Main Course",
                                  description:
                                    "Much loved recipe of mutton morsels cooked in freshly ground spice blend, immaculately cooked, and simmered to perfection. Best savoured with jrice or roti.",
                                  inStock: 1,
                                  price: 34000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559606",
                                  name: "Mutton Bhuna",
                                  category: "Main Course",
                                  description:
                                    "A flavorful and hearty mutton dish that will satisfy your cravings and add a touch of indulgence to your meal.",
                                  inStock: 1,
                                  price: 34000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559615",
                                  name: "Mutton Keema Kaleji",
                                  category: "Main Course",
                                  description:
                                    "A mouthwatering combination of mutton keema and kaleji that is sure to satisfy your cravings and make a flavorful main course.",
                                  inStock: 1,
                                  price: 32000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559619",
                                  name: "Mutton Hyderabadi",
                                  category: "Main Course",
                                  description:
                                    "Experience the royal flavors of Hyderabad with this tantalizing and rich non-vegetarian main course dish.",
                                  inStock: 1,
                                  price: 32000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559622",
                                  name: "Mutton Angara",
                                  category: "Main Course",
                                  description:
                                    "A tantalizing and flavorful main course that will satisfy meat lovers with its rich and aromatic essence.",
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066083",
                        },
                        {
                          title: "Chicken",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559492",
                                  name: "Butter Chicken",
                                  category: "Main Course",
                                  description:
                                    "A rich and flavorful non-Veg dish that is a delightful addition to any Main Course meal.",
                                  inStock: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066082",
                        },
                        {
                          title: "Chefs Special",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559684",
                                  name: "Paneer Kajiranga",
                                  category: "Main Course",
                                  description:
                                    "A delectable and flavorful veggie delight that will tantalize your taste buds.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559688",
                                  name: "Paneer Angara",
                                  category: "Main Course",
                                  description:
                                    "A flavorful and savory vegetarian delight that will satisfy taste buds with its rich and smoky flavors.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2025/1/13/336dd3f8-42e0-471a-aed4-357b714d3fcd_8eb94b40-ba1d-4799-828c-955d5600cc32.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559685",
                                  name: "Paneer Toofani",
                                  category: "Main Course",
                                  description:
                                    "A delectable and flavorful vegetarian delight that will take your taste buds on a tantalizing journey.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559686",
                                  name: "Paneer Lazeez",
                                  category: "Main Course",
                                  description:
                                    "A delectable vegetarian main course that promises a delightful burst of flavors.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559687",
                                  name: "Paneer Maharani",
                                  category: "Main Course",
                                  description:
                                    "A regal and flavorful veggie delight fit for any royal feast.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559689",
                                  name: "Paneer Kaleji",
                                  category: "Main Course",
                                  description:
                                    "A delectable vegetarian main course bursting with rich flavors and satisfying textures.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/3ec0ef98-186e-4bfb-ac28-05cc99765df5_e331d0a1-393a-4936-a2a4-f4a925246818.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559690",
                                  name: "Paneer Sahu ji",
                                  category: "Main Course",
                                  description:
                                    "A delectable and flavorful vegetarian dish that is perfect as a main course.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/2123fb5a-06b7-43c4-a2f8-00db2d764ecf_e8749daf-3d27-4e73-a664-e0da72b5b7e7.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559691",
                                  name: "Paneer Lachchedar",
                                  category: "Main Course",
                                  description:
                                    "Indulge in the rich and flavorful paneer dish, with its tantalizing layers of goodness.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559692",
                                  name: "Paneer Badshahi",
                                  category: "Main Course",
                                  description:
                                    "A regal and mouthwatering vegetarian delight fit for royalty.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/61faf132-3cf0-43eb-b150-96b36f81c9bc_abe26ba5-255c-4386-a701-49b439be8e91.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559693",
                                  name: "Paneer Bhuna Masala",
                                  category: "Main Course",
                                  description:
                                    "A delightful and flavorful vegetarian dish bursting with aromatic Indian spices.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/1/b18239f0-50ae-4776-a030-cf8eeb97d249_cd3b5561-1a89-4d87-b7e3-1a5d23530edd.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066080",
                        },
                      ],
                      categoryId: "31066069",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Biryani ",
                      categories: [
                        {
                          title: "Non Vegetarian ",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559595",
                                  name: "Chicken Biryani",
                                  category: "Biryani ",
                                  description:
                                    "Richly flavored aromatic rice layered with marinated chicken pieces in a delicate blend of whole spices.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/dabf99d0-5c51-480b-9895-bce02d2bde9f_e9ffa04d-e57a-4548-a085-0cc9c2e465cc.JPG",
                                  inStock: 1,
                                  price: 14000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "23775492",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "77446972",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 10000,
                                            id: "77446973",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.6",
                                      ratingCount: "47 ratings",
                                      ratingCountV2: "47",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559598",
                                  name: "Chicken Hyderabadi Biryani",
                                  category: "Biryani ",
                                  description:
                                    "Deliciously decadent flavored dum rice layered with chicken and indian whole spices, served with raita and gravy.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/9/a63f1f9a-30da-402b-8924-66bcdf42a877_d2117029-7534-4a64-907a-4ceb761d4786.JPG",
                                  inStock: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559601",
                                  name: "Chicken Matka Biryani",
                                  category: "Biryani ",
                                  description:
                                    "A flavorful and aromatic delight of tender chicken cooked with fragrant spices, layered with long grain basmati rice.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/21f391a5-0b0d-42ef-84d9-81b24dbcb717_839b6032-0527-4a3f-8bb8-dae9378080ac.JPG",
                                  inStock: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559607",
                                  name: "Mutton Hyderabadi Biryani",
                                  category: "Biryani ",
                                  description:
                                    "A fragrant and flavorful Biryani with succulent mutton, cooked to perfection in the Hyderabadi style.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/1/e08d08e4-1392-407a-b785-3964007a9a89_53efaf39-9d37-481d-976c-8f40af359c56.JPG",
                                  inStock: 1,
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559610",
                                  name: "Mutton Matka Biryani",
                                  category: "Biryani ",
                                  description:
                                    "A flavorsome and enticing Biryani made with tender mutton cooked in a traditional clay pot.",
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559593",
                                  name: "Egg Hyderabadi Biryani",
                                  category: "Biryani ",
                                  description:
                                    "A flavorful and aromatic rice dish with tender boiled eggs, exuding the rich flavors of Hyderabad.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/2e530a04-e0f2-4cc2-a886-0d6dbca5da54_fff3eb37-4364-4f19-b9ad-e4751a06d0df.JPG",
                                  inStock: 1,
                                  price: 12000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "EGG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559603",
                                  name: "Mutton Biryani",
                                  category: "Biryani ",
                                  description:
                                    "Deliciously decadent flavored dum rice layered with mutton and indian whole spices cooked in a pot.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/982acc3d-4727-40c0-b965-d62b335fc5c4_2fce2f3c-ad23-4fd4-b6e3-40ece233c298.JPG",
                                  inStock: 1,
                                  price: 16000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "23775497",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "77446974",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 13000,
                                            id: "77446975",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "12 ratings",
                                      ratingCountV2: "12",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066184",
                        },
                        {
                          title: "Vegetarian",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559584",
                                  name: "Paneer Biryani",
                                  category: "Biryani ",
                                  description:
                                    "Soft paneer cubes and flavored rice slow cooked in a delicious mix of Indian masala flavored with aromatic spices.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/f7658b36-95e0-4b08-bb51-e89cccd8acc9_638915f5-2704-4df8-8b6e-38232a7f719f.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "23775488",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "77446968",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 10000,
                                            id: "77446969",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "22 ratings",
                                      ratingCountV2: "22",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559588",
                                  name: "Veg Matka Biryani",
                                  category: "Biryani ",
                                  description:
                                    "Indulge in a flavorful and aromatic blend of fragrant rice and vegetables, perfectly cooked to create a delectable symphony of taste in every bite.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/71d4aebf-5585-46d1-acd6-959aa5152104_8ea246d8-8110-46ec-9431-bffa7f07d6c5.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559583",
                                  name: "Veg Hyderabadi Biryani",
                                  category: "Biryani ",
                                  description:
                                    "Nutritious biriyani, cooked with select spices and packed with vegetables; served with wholesome raita and gravy.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/748019d5-c27e-4be2-a287-2197cd1475f0_25db34ea-e4d3-4aee-ad48-b2253f16e8bf.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066181",
                        },
                        {
                          title: "Non Vegetarian",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559589",
                                  name: "Egg Biryani",
                                  category: "Biryani ",
                                  description:
                                    "Healthy yet wholesome boiled eggs covered in flavor-packed masala and slow cooked rice.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/9345c4dc-2b57-47e0-a5c5-01da2e0b28d6_6bf953bb-5c76-4888-9359-56bcc6cb696b.JPG",
                                  inStock: 1,
                                  price: 11000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "23775495",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "77446970",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 9000,
                                            id: "77446971",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "EGG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066182",
                        },
                      ],
                      categoryId: "31066180",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chinese Non Veg Starters",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559704",
                              name: "Chicken Lollipop",
                              category: "Chinese Non Veg Starters",
                              description:
                                "Everyone's favorite home-spiced chicken lollipop served straight from the tandoor.",
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559705",
                              name: "Chicken Chilli",
                              category: "Chinese Non Veg Starters",
                              description:
                                "Delight in the robust flavors of tender chicken, perfectly seasoned and cooked to perfection, offering a tantalizing start to your Chinese culinary journey.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/8a2422ae-759c-4c72-8910-248ef44e2f5f_8aab9068-75ee-49fd-bdb1-46784bf968c0.JPG",
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559473",
                              name: "Chicken Crispy",
                              category: "Chinese Non Veg Starters",
                              description:
                                "Crispy and flavorful Chinese chicken bites that will tantalize your taste buds.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/8c440d49-fcf1-4fcb-b255-38edc8688388_d00486f8-3f5e-45d7-a46f-fd1dd9c4078b.JPG",
                              inStock: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559498",
                              name: "Chicken Popcorn",
                              category: "Chinese Non Veg Starters",
                              description:
                                "Chunks of juicy chicken deep fried to perfection!",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559493",
                              name: "Honey Garlic Chicken",
                              category: "Chinese Non Veg Starters",
                              description:
                                "Tender chicken glazed with a sweet, aromatic honey garlic sauce, perfect for those craving a flavorful Chinese starter.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/e4afa87d-00f4-4940-8b8f-6dd3e82b158c_aa073a3b-5ef1-4982-93e7-c4b1eea1c02c.JPG",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559521",
                              name: "Barbeque Chicken Wings",
                              category: "Chinese Non Veg Starters",
                              description:
                                "Smoky and succulent, these grilled chicken wings are infused with the bold flavors of Chinese cuisine.",
                              inStock: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559504",
                              name: "Chicken Fried Sticks",
                              category: "Chinese Non Veg Starters",
                              description:
                                "Crispy and golden, these delightful Chinese chicken sticks are the perfect non-veg starter for any occasion.",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559566",
                              name: "Egg Fried",
                              category: "Chinese Non Veg Starters",
                              description:
                                "A delightful Chinese egg dish that is sure to tantalize your taste buds with its flavorful twist.",
                              inStock: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "EGG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559706",
                              name: "Chicken 65",
                              category: "Chinese Non Veg Starters",
                              description:
                                "A delectable Chinese non-veg starter that tantalizes your taste buds with a burst of flavors.",
                              inStock: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559479",
                              name: "Chicken Dragon",
                              category: "Chinese Non Veg Starters",
                              description:
                                "A succulent Chinese delight, bursting with flavors that will leave your taste buds craving for more.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/11abcb9e-fbf9-4cb8-8a09-d7a8a47e6627_69a15c4f-ba97-47f6-9097-290df5937c47.JPG",
                              inStock: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559487",
                              name: "Hot Garlic Chicken",
                              category: "Chinese Non Veg Starters",
                              description:
                                "Savor the bold flavors of tender garlic-infused chicken in this Chinese culinary delight.",
                              inStock: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559509",
                              name: "Tangy Lemon Chicken",
                              category: "Chinese Non Veg Starters",
                              description:
                                "A burst of tangy, refreshing flavors enhance tender chicken in this Chinese non-veg starter.",
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559515",
                              name: "Chicken Singapore",
                              category: "Chinese Non Veg Starters",
                              description:
                                "A delectable Chinese non-veg starter featuring tender and succulent chicken in a flavorful Singapore-inspired preparation.",
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066068",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Fried Rice",
                      categories: [
                        {
                          title: "Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559496",
                                  name: "Triple Chicken Schezwan Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "A succulent blend of savory chicken and flavorful fried rice that will satisfy your hunger.",
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559668",
                                  name: "Chicken Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "A slightly spicy dish made by tossing juicy chicken and rice in a flavorful sauce.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/0ed74adf-c3af-4ad0-833f-72f8dcffca53_a860cf62-72b2-4f3c-8cf8-a9156eda1726.JPG",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559474",
                                  name: "Chicken Schezwan Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "A tantalizing blend of tender chicken and flavorful fried rice that will leave your taste buds craving for more.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/d01c4d3a-c231-4efe-82a3-52018ca4f943_1bdb3ff0-3eb3-444e-919c-d49563cf4bd7.JPG",
                                  inStock: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559480",
                                  name: "Chicken Manchurian Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "A flavorsome fusion of tender chicken and fragrant fried rice that satisfies the craving for a hearty and savory meal.",
                                  inStock: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559485",
                                  name: "Crispy Chicken Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "A flavorful fusion of crispy chicken and fragrant fried rice that will leave your taste buds craving for more.",
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559491",
                                  name: "Singapore Chicken Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "A scrumptious combination of tender chicken and fragrant rice, pan-fried to perfection with tantalizing flavors.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/9/64f0299d-2ceb-4a3a-866b-1cd4429cdca0_f9717247-3b7a-4b95-96e7-209324fcd8fa.JPG",
                                  inStock: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066092",
                        },
                        {
                          title: "Veg ",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559664",
                                  name: "Manchurian Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "A delightfully indulgent combo of hot and spicy Manchurian served with hearty fried rice, pickle and onions.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/595ea2d9-4ecc-478b-b71f-8f36ac5bbac8_3be1cc77-04e9-4a01-9442-d8311e29bdeb.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559667",
                                  name: "Triple Schezwan Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "A combination of crispy noodles, fried rice, and a spicy vegetable gravy in a single-layered dish.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559663",
                                  name: "Veg Schezwan Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "A slightly spicy dish made by tossing vegetables and rice in a garlic and chilli flavored schezwan sauce.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559665",
                                  name: "Crispy Paneer Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "Delight in the irresistible crunch of our delectable fried rice, featuring crispy paneer that adds a delightful twist to this classic vegetarian dish.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/fa56a775-39a2-4dd9-af6c-8b166ed77e38_7f641ae7-f598-4487-8bb6-51c6cfbb2f85.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559666",
                                  name: "Singapore Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "A flavorful, Asian-inspired fried rice loaded with an array of colorful vegetables and bursting with delicious flavors.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066188",
                        },
                        {
                          title: "Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559662",
                                  name: "Veg Fried Rice",
                                  category: "Fried Rice",
                                  description:
                                    "A deliciously aromatic and flavorful dish prepared from rice and stir-fried vegetables.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066091",
                        },
                      ],
                      categoryId: "31066071",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Paratha ",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559513",
                              name: "Butter Aloo Paratha",
                              category: "Paratha ",
                              description:
                                "Super-soft paratha with a delicious seasoned potato stuffing topped with butter; served with curd and side dish.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/252e7519-4beb-4dd4-b100-35239baca592_a8987d90-ccf6-4027-b4ef-e905d618e796.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559535",
                              name: "Butter Mix Veg Paratha",
                              category: "Paratha ",
                              description:
                                "Mouthwatering paratha filled with a medley of vegetables, enhanced with the richness of butter.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/1/d90c5c6e-4eff-4085-a977-d85e04cc4e97_b7b96562-3f9d-4166-97f9-4620c8120e15.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559537",
                              name: "Stuffed Veg Butter Kulcha",
                              category: "Paratha ",
                              description:
                                "Deliciously buttery stuffed vegetable paratha bursting with flavor and satisfaction.",
                              inStock: 1,
                              isVeg: 1,
                              price: 9000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559540",
                              name: "Butter Chole Kulcha",
                              category: "Paratha ",
                              description:
                                "A delectable fusion of flavorful butter, delectable chole, and soft kulcha, offering a delightful burst of taste in every bite.",
                              inStock: 1,
                              isVeg: 1,
                              price: 12000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559526",
                              name: "Plain Paneer Paratha",
                              category: "Paratha ",
                              description:
                                "A flavorful paratha filled with fresh, soft paneer, offering a delightful combination of textures in each bite.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/28/3c76117e-ee8b-4a6c-a47d-98329eb02b4f_7410cc73-fec3-4a0e-8107-6bd4831a0d9e.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559516",
                              name: "Plain Onion Paratha",
                              category: "Paratha ",
                              description:
                                "Delicious and flavorful flatbread stuffed with a classic onion filling, perfect for any vegetarian meal.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/e67588e8-9a8c-4dbf-a209-eb4abe537ea9_92c45a93-37bb-45f3-9a66-6cb62010ce09.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559520",
                              name: "Plain Gobhi Paratha",
                              category: "Paratha ",
                              description:
                                "Savor the simple flavors of this classic vegetarian Paratha, loaded with the goodness of cauliflower.",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559530",
                              name: "Butter Paneer Paratha",
                              category: "Paratha ",
                              description:
                                "Super-soft paratha with a delicious seasoned paneer stuffing topped with butter; served with curd and side dish.",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559532",
                              name: "Plain Mix Veg Paratha",
                              category: "Paratha ",
                              description:
                                "A delectable mix of fresh vegetables wrapped in a warm, flaky paratha.",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559519",
                              name: "Butter Onion Paratha",
                              category: "Paratha ",
                              description:
                                "Indulge in the rich flavors of this delectable Paratha, generously filled with buttery onions.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/af23c5d1-f6f1-4145-8eb7-e3a68d5689b8_0146b591-c942-4467-8d58-dc3d00dc134f.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559525",
                              name: "Butter Gobhi Paratha",
                              category: "Paratha ",
                              description:
                                "A stuffed paratha bursting with the rich flavors of butter and cauliflower.",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066176",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Noodles ",
                      categories: [
                        {
                          title: "Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559660",
                                  name: "Chicken Schezwan Noodles",
                                  category: "Noodles ",
                                  description:
                                    "Delectable noodles tossed along with assorted fresh veggies, chicken, Schezwan sauce and spices - perfect to satisfy your hunger.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/3a7256db-7ef8-435b-8a42-f176ecf891e5_1099f0cf-c124-4ead-b5da-ace9294188f1.JPG",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559661",
                                  name: "Chicken Singapore Noodles",
                                  category: "Noodles ",
                                  description:
                                    "Delight in a flavorful combination of tender chicken and delectable noodles in this savory non-veg dish.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/9/f43ebd1a-84f7-476a-9343-904a1a95a731_58731e88-26b5-4790-b32a-0ee7a703ff40.JPG",
                                  inStock: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559658",
                                  name: "Chicken Noodles",
                                  category: "Noodles ",
                                  description:
                                    "A flavor-packed preparation with juicy chicken chunks and vegetables in a delicious dressing.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/9589abab-93a8-4d07-83ca-bb89f220d2ef_8c62d36a-6b90-438c-8b27-9ac30d46cf71.JPG",
                                  inStock: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559659",
                                  name: "Chicken Hakka Noodles",
                                  category: "Noodles ",
                                  description:
                                    "A vibrant and wholesome dish with noodles and juicy chicken chunks tossed in a tangy soy and tomato based dressing.",
                                  inStock: 1,
                                  price: 23000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066187",
                        },
                        {
                          title: "Veg ",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559655",
                                  name: "Schezwan Noodles",
                                  category: "Noodles ",
                                  description:
                                    "Vegetables and soft noodles that is tossed with vegetables in a flavorful schezwan sauce.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/1/4782ac3b-b1f9-45ac-bd35-665e5a4f6308_6fa7079e-368e-4094-be99-8865edcdd4d3.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559652",
                                  name: "Hakka Noodles",
                                  category: "Noodles ",
                                  description:
                                    "Delicious and flavorful noodles bursting with savory vegetable goodness, a delightful treat for noodle enthusiasts.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/cc5189fb-0c2d-4338-b834-c3be0fc68830_d1fcf68e-5873-4367-9fa7-5a3ee551bdcf.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559656",
                                  name: "Singapore Noodles",
                                  category: "Noodles ",
                                  description:
                                    "A Singaporean delicacy with soft and tender noodles tossed in a sweet and spicy sauce.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559657",
                                  name: "Chilli Garlic Noodles",
                                  category: "Noodles ",
                                  description:
                                    "Flavor-packed preparation with noodles and assorted vegetables in a spicy and aromatic chilli garlic sauce.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066186",
                        },
                      ],
                      categoryId: "31066185",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Breads",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559477",
                              name: "Plain Tandoori Roti",
                              category: "Breads",
                              description:
                                "A simple and flavorful bread straight from the Tandoor oven that perfectly complements any vegetarian meal.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/28/5ee59497-eb2e-492e-af71-5caabe00ed75_4e8c4ec4-ad99-48d4-8f33-0bd1975fc10f.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 1500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559502",
                              name: "Plain Paratha",
                              category: "Breads",
                              description:
                                "A simple and flavorful vegetable bread that will leave you wanting more.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/27/2845d717-a745-4e1e-9b67-41dd27971715_35de12ae-56f8-4339-abe1-99c99a011559.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 2000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559497",
                              name: "Butter Garlic Naan",
                              category: "Breads",
                              description:
                                "Deliciously buttery and infused with garlic, this aromatic bread is sure to satisfy any craving.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/9/3bafa15c-b4a3-4b3d-9560-74bcc3350977_d9ea0a9b-11e4-403e-95d3-0b90596e5f1c.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559478",
                              name: "Butter Tandoori Roti",
                              category: "Breads",
                              description:
                                "A delectable blend of buttery goodness and charred flavors, this indulgent bread is a must-try for bread lovers.",
                              imageId: "7b7f2ba882545956bc38b76dabae05b6",
                              inStock: 1,
                              isVeg: 1,
                              price: 2000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.6",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559471",
                              name: "Plain Tawa Roti",
                              category: "Breads",
                              description:
                                "A classic Indian bread, freshly cooked on a griddle, perfect to pair with your favorite curries and dishes.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/28/2e43cbc6-953a-4bfb-bf24-e84f6919ae5b_b2300b0a-6ff1-4914-b67a-cf4c9cda1029.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 1500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559495",
                              name: "Butter Naan",
                              category: "Breads",
                              description:
                                "North Indian bread with a generous serving of butter that tastes brilliant when paired with a gravy.",
                              imageId: "329f8195a751ca91de12177604599f17",
                              inStock: 1,
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559490",
                              name: "Plain Naan",
                              category: "Breads",
                              description:
                                "Soft and fluffy naan tastes amazing when paired with a gravy.",
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559484",
                              name: "Butter Tandoori Garlic Roti",
                              category: "Breads",
                              description:
                                "A delectable creation of fluffy garlic-infused roti with a luscious buttery twist straight from the tandoor.",
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559482",
                              name: "Plain Tandoori Garlic Roti",
                              category: "Breads",
                              description:
                                "A flavorful blend of traditional Indian flavors brings this garlic-infused roti to life.",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559489",
                              name: "Butter Missi Roti",
                              category: "Breads",
                              description:
                                "A delectable bread that combines the richness of butter with the traditional flavors of Missi Roti.",
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559507",
                              name: "Butter Lachcha Paratha",
                              category: "Breads",
                              description:
                                "Indulge in the flaky and buttery goodness of this delectable Indian bread, perfect for a flavorful meal.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/be788df8-1d98-43a2-80d2-55ac58b10af6_2d93ca3c-532d-4909-9155-d07871aa095e.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559475",
                              name: "Butter Tawa Roti",
                              category: "Breads",
                              description:
                                "A delectable bread creation cooked on a sizzling tawa and generously adorned with rich butter.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/9/500fe00c-b055-4059-b4fb-9b5e9d0efd83_096224ef-dfb6-4641-9faa-207781f8240b.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 2000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.4",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559506",
                              name: "Butter Paratha",
                              category: "Breads",
                              description:
                                "Indulge in the rich and buttery flavors of this classic Indian bread, perfect for a scrumptious vegetarian meal.",
                              inStock: 1,
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066059",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Soup",
                      categories: [
                        {
                          title: "Non Veg ",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559534",
                                  name: "Mushroom Chicken Soup",
                                  category: "Soup",
                                  description:
                                    "A comforting and flavorful soup with tender chicken and earthy mushrooms, perfect for warming up on a chilly day.",
                                  inStock: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559529",
                                  name: "Chicken Clear Soup",
                                  category: "Soup",
                                  description:
                                    "A delightfully flavor-packed clear soup with chopped veggies and chicken pieces - perfect to satiate your cravings.",
                                  inStock: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559518",
                                  name: "Cicken Hot & Sour Soup",
                                  category: "Soup",
                                  description:
                                    "A zesty and tangy soup bursting with flavors, perfect for those seeking a savory delight.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/9/a9adff55-bffd-42ea-a98d-a6e8a53a53d3_3f7b419d-7237-4fe9-89fc-4f27910f7cd4.JPG",
                                  inStock: 1,
                                  price: 15000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559523",
                                  name: "Chicken Sweet Corn Soup",
                                  category: "Soup",
                                  description:
                                    "A healthy soup that is packed with the goodness of tender chicken and nutritious corn.",
                                  inStock: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066171",
                        },
                        {
                          title: "Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559510",
                                  name: "Chicken Manchow Soup",
                                  category: "Soup",
                                  description:
                                    "A comforting chinese-style thick soup filled with tender, juicy chicken.",
                                  inStock: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066098",
                        },
                        {
                          title: "Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559472",
                                  name: "Veg Noodle Soup",
                                  category: "Soup",
                                  description:
                                    "A comforting and flavorful soup packed with delicious vegetables, perfect for warming your soul.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 8000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066097",
                        },
                        {
                          title: "Veg ",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559481",
                                  name: "Tomato Soup",
                                  category: "Soup",
                                  description:
                                    "A indulging soup that is packed with the tanginess and goodness of tomatoes.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/7/6fca85ac-37e2-4e1c-85b5-66bec8aa51b3_1a1271aa-17da-4723-a91c-5470ab5a733f.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 6000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559488",
                                  name: "Sweet Corn Soup",
                                  category: "Soup",
                                  description:
                                    "A scrumptious and comforting vegetarian soup bursting with the flavors of fresh sweet corn.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 10000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559494",
                                  name: "Hot & Sour Soup",
                                  category: "Soup",
                                  description:
                                    "A delightfully flavor-packed hot and sour soup with chopped veggies - perfect to satiate your cravings.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/42701e76-339e-4e90-9138-33edd6d99d7e_5e1bd256-dc45-4602-95a3-31fbde9c8617.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559499",
                                  name: "Manchow Soup",
                                  category: "Soup",
                                  description:
                                    "A comforting chinese-style thick mix vegetable soup.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559505",
                                  name: "Veg Clear Soup",
                                  category: "Soup",
                                  description:
                                    "A delightfully flavor-packed clear soup with chopped veggies - perfect to satiate your cravings.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066170",
                        },
                      ],
                      categoryId: "31066064",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chinese Veg Starters",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559608",
                              name: "Paneer Dragon",
                              category: "Chinese Veg Starters",
                              description:
                                "Delight in the tantalizing blend of flavors and textures that grace this Chinese-inspired vegetarian starter.",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559596",
                              name: "Chilli Paneer",
                              category: "Chinese Veg Starters",
                              description:
                                "A delectable Chinese veg starter bursting with flavors and a delightful combination of textures.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/c9b7d0fa-aac7-43a0-ac5e-d18ce591729c_a6d2301c-52f4-4668-afaa-f653f7a4ff5f.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559604",
                              name: "Paneer Manchurian Dry",
                              category: "Chinese Veg Starters",
                              description:
                                "Soft paneer chunks dipped in batter, fried to golden crispiness and tossed in a hot and spicy Manchurian sauce; served with a dip.",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559618",
                              name: "Veg Manchurian Dry",
                              category: "Chinese Veg Starters",
                              description:
                                "Delicious Chinese vegetable fritters bursting with flavor and textures, perfect as a starter!",
                              inStock: 1,
                              isVeg: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559592",
                              name: "Crispy Paneer",
                              category: "Chinese Veg Starters",
                              description:
                                "A delectable Chinese veg starter with a delightful crispy texture that will leave your taste buds wanting more.",
                              inStock: 1,
                              isVeg: 1,
                              price: 16000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559599",
                              name: "Paneer 65",
                              category: "Chinese Veg Starters",
                              description:
                                "Deliciously crispy thin and long dosa smothered with butter; served with sambhar and chutney - a typical South Indian breakfast.",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559616",
                              name: "Schezwan Paneer",
                              category: "Chinese Veg Starters",
                              description:
                                "Indulge in the flavors of a delectable Chinese veg starter bursting with rich and robust tastes.",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559621",
                              name: "Veg Spring Roll",
                              category: "Chinese Veg Starters",
                              description:
                                "Deep-fried, stuffed rolls packed with seasoned assorted veggies.",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066066",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Biryani",
                      categories: [
                        {
                          title: "Vegetarian",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559579",
                                  name: "Veg Biryani",
                                  category: "Biryani",
                                  description:
                                    "A flavorful combination of rice and assorted veggies cooked in a fragrant and flavorful masala seasoned with Indian whole spices.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/4/9/b7f823ab-9291-4be3-bb39-e5415ca70c35_5a6a3c4d-1a35-44c7-b7f0-02fd55b9fc83.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 10000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "23775489",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "77446966",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 8000,
                                            id: "77446967",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "29 ratings",
                                      ratingCountV2: "29",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066077",
                        },
                      ],
                      categoryId: "31066063",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Thali",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "108713390",
                              name: "Veg Thali",
                              category: "Thali",
                              description:
                                "A wholesome thali with rice, chapati, dal, sambhar, rasam, veg gravy, 2 types of dry subzi, veg gravy, curd curry and curd.",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "108713389",
                              name: "Fusion Special Veg Thali",
                              category: "Thali",
                              description:
                                "Matar mushroom masala + paneer kaleji + dal tadka + jeera rice + 5 naan/4 tandoori roti + dry papad [1 piece] + gulab jamun [2 piece]",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "39232439",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Tandoor Veg Starters",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559563",
                              name: "Paneer Malai Tikka",
                              category: "Tandoor Veg Starters",
                              description:
                                "Creamy, tender paneer marinated in a flavorful blend of spices and grilled to perfection in the traditional tandoor oven.",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559542",
                              name: "Hara Bhara Kebab",
                              category: "Tandoor Veg Starters",
                              description:
                                "Flavorsome preparation with minced, seasoned vegetable patty cooked to a crispy golden brown.",
                              inStock: 1,
                              isVeg: 1,
                              price: 16000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559569",
                              name: "Paneer Hariyali TIkka",
                              category: "Tandoor Veg Starters",
                              description:
                                "A flavorful and vibrant tandoor-grilled treat bursting with the natural goodness of fresh green herbs and succulent paneer.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/9/a0ea072d-1dcf-4f11-87ee-4777e4db73ac_ded3a412-50c9-475f-9606-336773716141.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066065",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Rice",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559548",
                              name: "Jeera Rice",
                              category: "Rice",
                              description:
                                "Aromatic rice cooked in a tempering of cumin and whole spices.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/7bf0de20-608e-4a21-9741-25642bd4b2a5_eb603ea4-95ce-4ac6-a9dd-dfbac27eb5c2.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "23775441",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "77446962",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 4000,
                                        id: "77446963",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559554",
                              name: "Garlic Rice",
                              category: "Rice",
                              description:
                                "Savor the aromatic goodness of this flavor-packed veg rice that will delight your taste buds.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/e605cf33-ff23-4e53-85b9-9271ff6ac787_ca6c5f8c-c9a5-4d56-a63c-4becf451b40e.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "23775440",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "77446964",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 5000,
                                        id: "77446965",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559543",
                              name: "Steamed Rice",
                              category: "Rice",
                              description:
                                "A flavorful and wholesome rice dish that is steamed to perfection, offering a delightful taste and texture.",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "23775442",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "77446960",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 4000,
                                        id: "77446961",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559551",
                              name: "Onion Rice",
                              category: "Rice",
                              description:
                                "A flavorful rice dish with a delightful hint of caramelized onions, perfect for any vegetarian craving a savory meal.",
                              inStock: 1,
                              isVeg: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559558",
                              name: "Biryani Rice",
                              category: "Rice",
                              description:
                                "A flavorsome rice dish that brings together aromatic spices and hearty vegetables to create a delectable culinary delight.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/9d8de256-29e7-49ec-95d9-6e24f4811519_42f8f84b-d547-4e5e-9ba9-2771ef454d78.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559560",
                              name: "Masala Rice",
                              category: "Rice",
                              description:
                                "A flavorful blend of aromatic spices infused with perfectly cooked rice, creating a delightful and satisfying vegetarian dish.",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559564",
                              name: "Onion Tomato Rice",
                              category: "Rice",
                              description:
                                "A tantalizing blend of savory flavors, this rice dish showcases the natural sweetness of onions and tomatoes, creating a delightful vegetarian option for rice lovers.",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066061",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Tandoor Non Veg Starters",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559630",
                              name: "Chicken Tikka",
                              category: "Tandoor Non Veg Starters",
                              description:
                                "Super soft chunks of chicken are coated with a spicy and peppery masala and grilled to perfection.",
                              inStock: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559635",
                              name: "Chicken Hariyali Tikka",
                              category: "Tandoor Non Veg Starters",
                              description:
                                "A succulent and flavorful tandoor-grilled chicken dish bursting with vibrant green flavors.",
                              inStock: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559639",
                              name: "Chicken Roast",
                              category: "Tandoor Non Veg Starters",
                              description:
                                "Deliciously roasted chicken in tandoor, bursting with flavors that will tantalize your taste buds.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/d8f6b32e-650b-4967-a22b-6c12494aca2c_df7a4b1f-ec79-4e23-af9a-68e499b9642b.JPG",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559633",
                              name: "Chicken Afghani Tikka",
                              category: "Tandoor Non Veg Starters",
                              description:
                                "Delectable chicken marinated and cooked to perfection in fragrant Afghani spices.",
                              inStock: 1,
                              price: 26000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559642",
                              name: "Makhmali Malai Chicken Tikka",
                              category: "Tandoor Non Veg Starters",
                              description:
                                "A succulent tandoori delight, infused with rich cream and tender chicken, offering an indulgent culinary experience.",
                              inStock: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066067",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Salad",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559536",
                              name: "Dahi Kachumbar",
                              category: "Salad",
                              description:
                                "A refreshing and tangy vegetable salad with a delightful blend of flavors.",
                              inStock: 1,
                              isVeg: 1,
                              price: 12000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559541",
                              name: "Green Salad",
                              category: "Salad",
                              description:
                                "Healthy green salad made from slices of garden fresh greens.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/31aa44a1-f8f5-49b2-bee5-e63056daee8b_002d6117-823f-4d66-a486-7c4ef473401b.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559546",
                              name: "Onion Salad",
                              category: "Salad",
                              description: "A salad made from onions.",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559550",
                              name: "Cucumber Salad",
                              category: "Salad",
                              description:
                                "A refreshing blend of crisp vegetables tossed in a zesty dressing, creating the perfect light and refreshing salad.",
                              inStock: 1,
                              isVeg: 1,
                              price: 10000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066073",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Dessert",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559587",
                              name: "Gulab jamun",
                              category: "Dessert",
                              description:
                                "Soft, spongy and delicious Indian dessert served with a generous helping of sugar syrup.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/28/4b2f4da4-9fc7-42c0-b6d7-8c4a9e727ec2_c55887b7-4919-4a9e-a891-dcccd3de5e4a.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066075",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Paratha",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559511",
                              name: "Plain Aloo Paratha",
                              category: "Paratha",
                              description:
                                "Delicately crafted, this traditional veg Paratha bursts with the pure flavor of exquisite Aloo.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/2/954c2491-fd38-41a4-96be-bcb7cc06e4c0_e8698216-0c28-408b-af67-ba741d1a102c.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066060",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Noodles",
                      categories: [
                        {
                          title: "Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107559650",
                                  name: "Veg Noodles",
                                  category: "Noodles",
                                  description:
                                    "A deliciously aromatic and flavorful dish made from perfectly cooked noodles and stir-fried vegetables.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/10/2/12c3cfd3-5416-4f4c-a835-d8853af271b3_a2759d2f-0edd-4b4d-9354-ebe509e02723.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "31066086",
                        },
                      ],
                      categoryId: "31066070",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Raita",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559512",
                              name: "Bondi Raita",
                              category: "Raita",
                              description:
                                "A refreshing and creamy blend of vegetables in a traditional raita, perfect for a cooling side dish.",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559528",
                              name: "Masala Raita",
                              category: "Raita",
                              description:
                                "A flavorful and creamy accompaniment that adds a burst of tangy and aromatic goodness to any meal.",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559517",
                              name: "Veg Raita",
                              category: "Raita",
                              description:
                                "A refreshing and creamy blend of vegetables, perfect to pair with your favorite Indian dishes.",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066072",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Daal ",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559605",
                              name: "Dal Tadka",
                              category: "Daal ",
                              description:
                                "A comforting and fragrant Indian lentil dish served with a tempering of aromatic spices.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/9/e90d3727-cd31-4639-97fd-b08c829871dc_4a04fdbf-571a-4448-868f-81d76cda77a4.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066172",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Papad",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559573",
                              name: "Fry Papad",
                              category: "Papad",
                              description:
                                "Crispy, golden-fried papad with a delightful crunch, a must-try delicacy that will leave your taste buds wanting more.",
                              inStock: 1,
                              isVeg: 1,
                              price: 1500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559577",
                              name: "Dry Papad",
                              category: "Papad",
                              description:
                                "A crispy delight that will tantalize your taste buds with its crunchy texture and flavorful punch.",
                              inStock: 1,
                              isVeg: 1,
                              price: 1500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066074",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Daal",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559600",
                              name: "Dal Fry",
                              category: "Daal",
                              description:
                                "A comforting and delicious preparation made with mixed daal cooked and tempered with onions, chillies and more in pure ghee.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/1/cd68f49f-3a34-4fd0-8e5c-b2c96cc65906_52a4fe07-fb75-4a9f-ac96-e6a7c889494a.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066076",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Pulav ",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559570",
                              name: "Veg Pulav",
                              category: "Pulav ",
                              description:
                                "A wholesome dish prepared by cooking chopped vegetables and rice in a flavorful Indian masala.",
                              inStock: 1,
                              isVeg: 1,
                              price: 16000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559575",
                              name: "Paneer Pulav",
                              category: "Pulav ",
                              description:
                                "A tantalizing blend of fragrant basmati rice and succulent paneer, Paneer Pulav is a delectable and flavorful vegetarian dish that will transport your taste buds to a world of aromatic delight.",
                              inStock: 1,
                              isVeg: 1,
                              price: 19000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559576",
                              name: "Kashmiri Pulav",
                              category: "Pulav ",
                              description:
                                "A fragrant and flavorful mix of aromatic rice and vegetables, blended with traditional Kashmiri spices, creating a delectable and irresistible pulav.",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066178",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Pulav",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107559567",
                              name: "Matar Pulav",
                              category: "Pulav",
                              description:
                                "A fragrant and flavorful rice dish cooked with tender green peas, offering a delightful culinary experience.",
                              inStock: 1,
                              isVeg: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "31066062",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 21422210002112"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "The Fusion Lounge",
                      area: "Railway Station",
                      completeAddress:
                        '3X42+RRH, Triloki Nagar, Chhindwara Beside "Hotel sinha residency "Madhya Pradesh 480001, India',
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "af1449dd-71d1-413e-8443-4b576d124da7",
  sid: "ipn0e990-01c9-4589-b857-e550927c2ee4",
  deviceId: "d0321bad-2870-5281-0c40-3cf718f1c4aa",
  csrfToken: "HpLdwMpobB6G-yU-57kepaszdeGo3HkRQ4KxLcxQ",
};
