var travelResult = function(internationalInput, budgetInput, seasonInput, travelInput, preferenceInput) {
  if (internationalInput === "inside-usa") {
    if (budgetInput === "u5") {
      if (seasonInput === "winter") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Chicago, Illinois";
          } else if (preferenceInput === "explore") {
            return "Portland, Oregon";
          } else if (preferenceInput === "advanture") {
            return "Denver, Colorado";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Warm Springs, Oregon";
          } else if (preferenceInput === "explore") {
            return "Anchorage, Alaska";
          } else if (preferenceInput === "advanture") {
            return "Aspen, Colorado";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Boston, Massachusetts";
          } else if (preferenceInput === "explore") {
            return "New York City, New York";
          } else if (preferenceInput === "advanture") {
            return "Leavenworth, Washington";
          }
        }
      } else if (seasonInput === "spring") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Atlantic City, New Jersey";
          } else if (preferenceInput === "explore") {
            return "Seattle, Washington";
          } else if (preferenceInput === "advanture") {
            return "Oklahoma City, Oklahoma";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "U.S. Virgin Islands";
          } else if (preferenceInput === "explore") {
            return "Charleston, South Carolina";
          } else if (preferenceInput === "advanture") {
            return "Lexington, Kentucky";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Minneapolis, Minnesota";
          } else if (preferenceInput === "explore") {
            return "Buffalo, New York";
          } else if (preferenceInput === "advanture") {
            return "Orlando-Walt Disney World, Florida";
          }
        }
      } else if (seasonInput === "summer") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Venice, Florida";
          } else if (preferenceInput === "explore") {
            return "Tucson, Arizona";
          } else if (preferenceInput === "advanture") {
            return "Ithaca, New York";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Venice Beach, California";
          } else if (preferenceInput === "explore") {
            return "Washington, DC";
          } else if (preferenceInput === "advanture") {
            return "Las Vegas, Nevada";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "San Diego, California";
          } else if (preferenceInput === "explore") {
            return "Los Angeles, California";
          } else if (preferenceInput === "advanture") {
            return "Honolulu, Hawaii";
          }
        }
      } else if (seasonInput === "fall") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Bald Head Island, North Carolina";
          } else if (preferenceInput === "explore") {
            return "Katy Trail, Missouri";
          } else if (preferenceInput === "advanture") {
            return "Memphis, Tennessee";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Cape May, New Jersey";
          } else if (preferenceInput === "explore") {
            return "Machinac Island, Michigan";
          } else if (preferenceInput === "advanture") {
            return "Lancaster, Pennsylvania";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "San Antonio, Texas";
          } else if (preferenceInput === "explore") {
            return "Sedona, Arizona";
          } else if (preferenceInput === "advanture") {
            return "Mill Valley, California";
          }
        }
      }
    } else if (budgetInput === "o5") {
      if (seasonInput === "winter") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Corpus Christi, Texas";
          } else if (preferenceInput === "explore") {
            return "Hilo, Hawaii";
          } else if (preferenceInput === "advanture") {
            return "Lihue, Hawaii";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Tampa, Florida";
          } else if (preferenceInput === "explore") {
            return "Ann Arbor, Michigan";
          } else if (preferenceInput === "advanture") {
            return "Fairbanks, Alaska";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "West Palm Beach, Florida";
          } else if (preferenceInput === "explore") {
            return "Yuma, Arizona";
          } else if (preferenceInput === "advanture") {
            return "Leavenworth, Washington";
          }
        }
      } else if (seasonInput === "spring") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Phoenix, Arizona";
          } else if (preferenceInput === "explore") {
            return "Kansas City, Missouri";
          } else if (preferenceInput === "advanture") {
            return "Atlanta, Georgia";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "New Orleans, Louisiana";
          } else if (preferenceInput === "explore") {
            return "Houston, Texas";
          } else if (preferenceInput === "advanture") {
            return "Philadelphia, Pennsylvania";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Jacksonville, Florida";
          } else if (preferenceInput === "explore") {
            return "Orlando, Florida";
          } else if (preferenceInput === "advanture") {
            return "San Fransisco, California";
          }
        }
      } else if (seasonInput === "summer") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Big Sur, California";
          } else if (preferenceInput === "explore") {
            return "San Juan Islands, Washington";
          } else if (preferenceInput === "advanture") {
            return "Dallas, Texas";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Venice Beach, California";
          } else if (preferenceInput === "explore") {
            return "Miami, Florida";
          } else if (preferenceInput === "advanture") {
            return "Santa Barbara, California";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Honolulu, Hawaii";
          } else if (preferenceInput === "explore") {
            return "The Oregon Coast, Oregon";
          } else if (preferenceInput === "advanture") {
            return "Glacier National Park, Montana";
          }
        }
      } else if (seasonInput === "fall") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Tybee Island, Georgia";
          } else if (preferenceInput === "explore") {
            return "Louisville, Kentucky";
          } else if (preferenceInput === "advanture") {
            return "Boulder, Colorado";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Jackson Hole, Wyoming";
          } else if (preferenceInput === "explore") {
            return "Madison, Wisconsin";
          } else if (preferenceInput === "advanture") {
            return "Portland, Oregon";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Walla Walla, Washington";
          } else if (preferenceInput === "explore") {
            return "Baxter State Park, Maine";
          } else if (preferenceInput === "advanture") {
            return "Shenandoah Valley, Virginia";
          }
        }
      }
    }
  } else if (internationalInput === "outside-usa") {
    if (budgetInput === "u5") {
      if (seasonInput === "winter") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Vilnius, Lithuania";
          } else if (preferenceInput === "explore") {
            return "Seychelles";
          } else if (preferenceInput === "advanture") {
            return "Dublin, Ireland";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Abu Dhabi, UAE";
          } else if (preferenceInput === "explore") {
            return "New Taipei City, Taiwan";
          } else if (preferenceInput === "advanture") {
            return "San Juan, Puerto Rico";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Chiloe, Chile";
          } else if (preferenceInput === "explore") {
            return "Merida, Mexico";
          } else if (preferenceInput === "advanture") {
            return "Hluhluwe-Umfolozi Park, South Africa";
          }
        }
      } else if (seasonInput === "spring") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Rarotonga, Cook Islands";
          } else if (preferenceInput === "explore") {
            return "Hong Kong";
          } else if (preferenceInput === "advanture") {
            return "Mumbai, India";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Sochi, Russia";
          } else if (preferenceInput === "explore") {
            return "Moscow, Russia";
          } else if (preferenceInput === "advanture") {
            return "St. Petersburg, Russia";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Bermuda Islands";
          } else if (preferenceInput === "explore") {
            return "Reykjavik, Iceland";
          } else if (preferenceInput === "advanture") {
            return "Machu Picchu, Peru";
          }
        }
      } else if (seasonInput === "summer") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Samarkand, Uzbekistan";
          } else if (preferenceInput === "explore") {
            return "Beijing, China";
          } else if (preferenceInput === "advanture") {
            return "London, Great Britain";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Salar de Uyuni, Bolivia";
          } else if (preferenceInput === "explore") {
            return "Rio de Janeiro, Brazil";
          } else if (preferenceInput === "advanture") {
            return "Budapest, Hungary";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Bora Bora, French Polynesia";
          } else if (preferenceInput === "explore") {
            return "Vancouver, BC";
          } else if (preferenceInput === "advanture") {
            return "Antibes, France";
          }
        }
      } else if (seasonInput === "fall") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "North Island, Seychelles";
          } else if (preferenceInput === "explore") {
            return "Tokyo, Japan";
          } else if (preferenceInput === "advanture") {
            return "Chichen Itza";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Krabi, Thailand";
          } else if (preferenceInput === "explore") {
            return "Copenhagen, Denmark";
          } else if (preferenceInput === "advanture") {
            return "Dubrovnik, Croatia";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Sydney, Australia";
          } else if (preferenceInput === "explore") {
            return "Teotihuacan, Mexico";
          } else if (preferenceInput === "advanture") {
            return "Hue, Vietnam";
          }
        }
      }
    } else if (budgetInput === "o5") {
      if (seasonInput === "winter") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Goa, India";
          } else if (preferenceInput === "explore") {
            return "Shanghai, China";
          } else if (preferenceInput === "advanture") {
            return "Angkor Archaeological Park, Cambodia";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Maldives";
          } else if (preferenceInput === "explore") {
            return "Dubai, UAE";
          } else if (preferenceInput === "advanture") {
            return "Great Wall of China";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Caribbean Islands";
          } else if (preferenceInput === "explore") {
            return "Stonehenge in Wilkshire";
          } else if (preferenceInput === "advanture") {
            return "Pyramids of Giza, Egypt";
          }
        }
      } else if (seasonInput === "spring") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Tahiti, French Polynesia";
          } else if (preferenceInput === "explore") {
            return "Nishinomaru Garden, Japan";
          } else if (preferenceInput === "advanture") {
            return "Interlaken, Switzerland";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Natural Pool-Santorini, Greece";
          } else if (preferenceInput === "explore") {
            return "Santa Cruz, Argentina";
          } else if (preferenceInput === "advanture") {
            return "Terengganu, Malaysia";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Santorini, Greece";
          } else if (preferenceInput === "explore") {
            return "Paris, France";
          } else if (preferenceInput === "advanture") {
            return "Plitvice Lakes National Park, Croatia";
          }
        }
      } else if (seasonInput === "summer") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Zakynthos Island, Greece";
          } else if (preferenceInput === "explore") {
            return "Mount Roraima, Venezuela";
          } else if (preferenceInput === "advanture") {
            return "Tannourine, Lebanon";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "The Phi Phi Islands";
          } else if (preferenceInput === "explore") {
            return "Petra, Jordan";
          } else if (preferenceInput === "advanture") {
            return "Preikestolen, Norway";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Marsa Matruh, Egypt";
          } else if (preferenceInput === "explore") {
            return "Barcelona, Spain";
          } else if (preferenceInput === "advanture") {
            return "Aragon, Spain";
          }
        }
      } else if (seasonInput === "fall") {
        if (travelInput === "alone") {
          if (preferenceInput === "relax") {
            return "Kotor Bay, Montenegro";
          } else if (preferenceInput === "explore") {
            return "Santorini, Greece";
          } else if (preferenceInput === "advanture") {
            return "Marble Caverns of Carrera Lake, Chile";
          }
        } else if (travelInput === "friend") {
          if (preferenceInput === "relax") {
            return "Varadero, Cuba";
          } else if (preferenceInput === "explore") {
            return "Rothenburg ob der Tauber, Germany";
          } else if (preferenceInput === "advanture") {
            return "Kawasan Falls, The Philippines";
          }
        } else if (travelInput === "family") {
          if (preferenceInput === "relax") {
            return "Whitehaven Beach, Australia";
          } else if (preferenceInput === "explore") {
            return "The Shahara Bridge, Yemen";
          } else if (preferenceInput === "advanture") {
            return "The Dark Hedges, Northern Ireland";
          }
        }
      }
    }
  }
}


$(document).ready(function(){
  $("button#send-answers").click(function(event) {
    var internationalInput = $('input:radio[name=international]:checked').val();
    var budgetInput = $('input:radio[name=budget]:checked').val();
    var seasonInput = $('input:radio[name=season]:checked').val();
    var travelInput = $('input:radio[name=travel]:checked').val();
    var preferenceInput = $('input:radio[name=preference]:checked').val();

    var result = travelResult(internationalInput, budgetInput, seasonInput, travelInput, preferenceInput);

    event.preventDefault();

    $("#result").text(result);
    $("#suggestion").show();
  });
});
