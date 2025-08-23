export const testScenarios = {
  // Items that should trigger immediate purchase
    profitable: [
      {
        id: 1,
        name: "AK-47 | Redline",
        subtext: "Field-Tested",
        sitePrice: 75.00,
        buffBuy: 85.50,
        buffBid: 82.00,
        steamPercentage: 65.8,
        buyDisabled: false,
        expectedAction: "buy",
        notes: "Steam < 70%, Premium 14%, Spread 4.3%"
      },
      {
        id: 2,
        name: "AWP | Dragon Lore",
        subtext: "Minimal Wear",
        sitePrice: 2500.00,
        buffBuy: 2800.00,
        buffBid: 2750.00,
        steamPercentage: 55.2,
        buyDisabled: false,
        expectedAction: "buy",
        notes: "All conditions met perfectly"
      },
      {
        id: 3,
        name: "Karambit | Doppler",
        subtext: "Factory New - Phase 2",
        sitePrice: 680.00,
        buffBuy: 760.00,
        buffBid: 745.00,
        steamPercentage: 62.4,
        buyDisabled: false,
        expectedAction: "buy",
        notes: "High premium 11.8%, low spread 2%"
      },
      {
        id: 4,
        name: "M4A4 | Asiimov",
        subtext: "Field-Tested",
        sitePrice: 58.50,
        buffBuy: 65.20,
        buffBid: 63.80,
        steamPercentage: 69.9,
        buyDisabled: false,
        expectedAction: "buy",
        notes: "Barely under steam limit"
      },
      {
        id: 5,
        name: "Glock-18 | Fade",
        subtext: "Factory New - 95% Fade",
        sitePrice: 295.00,
        buffBuy: 330.00,
        buffBid: 322.00,
        steamPercentage: 61.3,
        buyDisabled: false,
        expectedAction: "buy",
        notes: "Premium 11.9%, small spread 2.5%"
      }
    ],

    // Items that should not trigger any action
    unprofitable: [
      {
        id: 6,
        name: "Glock-18 | Water Elemental",
        subtext: "Factory New",
        sitePrice: 45.00,
        buffBuy: 42.00,
        buffBid: 40.50,
        steamPercentage: 85.5,
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Steam too high, negative premium"
      },
      {
        id: 7,
        name: "M4A4 | Howl",
        subtext: "Well-Worn",
        sitePrice: 1200.00,
        buffBuy: 1150.00,
        buffBid: 1100.00,
        steamPercentage: 92.3,
        buyDisabled: true,
        expectedAction: "skip",
        notes: "Multiple failures: steam high, negative premium, button disabled"
      },
      {
        id: 8,
        name: "AK-47 | Fire Serpent",
        subtext: "Battle-Scarred",
        sitePrice: 890.00,
        buffBuy: 920.00,
        buffBid: 850.00,
        steamPercentage: 78.2,
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Steam too high, spread too wide (8.2%)"
      },
      {
        id: 9,
        name: "Desert Eagle | Blaze",
        subtext: "Factory New",
        sitePrice: 165.00,
        buffBuy: 170.00,
        buffBid: 155.00,
        steamPercentage: 71.5,
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Steam slightly high, spread too wide (9.7%)"
      },
      {
        id: 10,
        name: "StatTrak™ AK-47 | Case Hardened",
        subtext: "Minimal Wear - Blue Gem",
        sitePrice: 3200.00,
        buffBuy: 3100.00,
        buffBid: 2900.00,
        steamPercentage: 89.4,
        buyDisabled: false,
        expectedAction: "skip",
        notes: "High steam, negative premium, wide spread"
      }
    ],

    // Items that should trigger bargain attempts
    bargainOnly: [
      {
        id: 11,
        name: "Karambit | Fade",
        subtext: "Factory New - 90/5/5",
        sitePrice: 850.00,
        buffBuy: 950.00,
        buffBid: 880.00,
        steamPercentage: 68.5,
        buyDisabled: false,
        expectedAction: "bargain",
        notes: "Premium only 8.2%, but steam good, spread good",
        minBargain: 800.00
      },
      {
        id: 12,
        name: "Butterfly Knife | Tiger Tooth",
        subtext: "Factory New",
        sitePrice: 1100.00,
        buffBuy: 1180.00,
        buffBid: 1120.00,
        steamPercentage: 64.7,
        buyDisabled: false,
        expectedAction: "bargain",
        notes: "Premium 7.3%, conditions 1&3 met",
        minBargain: 1000.00
      },
      {
        id: 13,
        name: "AWP | Medusa",
        subtext: "Well-Worn",
        sitePrice: 2800.00,
        buffBuy: 3000.00,
        buffBid: 2900.00,
        steamPercentage: 59.8,
        buyDisabled: false,
        expectedAction: "bargain",
        notes: "Premium 7.1%, perfect steam/spread",
        minBargain: 2600.00
      },
      {
        id: 14,
        name: "Bayonet | Marble Fade",
        subtext: "Factory New - Fire & Ice",
        sitePrice: 740.00,
        buffBuy: 800.00,
        buffBid: 780.00,
        steamPercentage: 66.2,
        buyDisabled: false,
        expectedAction: "bargain",
        notes: "Premium 8.1%, small spread 2.6%",
        minBargain: 680.00
      },
      {
        id: 15,
        name: "M4A1-S | Knight",
        subtext: "Factory New",
        sitePrice: 320.00,
        buffBuy: 345.00,
        buffBid: 335.00,
        steamPercentage: 67.9,
        buyDisabled: false,
        expectedAction: "bargain",
        notes: "Premium 7.8%, very tight spread 3%",
        minBargain: 280.00
      }
    ],

    // Edge cases and boundary testing
    mixed: [
      {
        id: 16,
        name: "AK-47 | Vulcan",
        subtext: "Factory New",
        sitePrice: 145.00,
        buffBuy: 159.50,
        buffBid: 155.00,
        steamPercentage: 70.0, // Exactly at limit
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Exactly at steam limit (should fail)"
      },
      {
        id: 17,
        name: "AWP | Lightning Strike",
        subtext: "Factory New",
        sitePrice: 95.00,
        buffBuy: 104.50,
        buffBid: 101.75,
        steamPercentage: 69.9, // Just under limit
        buyDisabled: false,
        expectedAction: "buy",
        notes: "Just under steam limit (should pass)"
      },
      {
        id: 18,
        name: "Huntsman Knife | Slaughter",
        subtext: "Minimal Wear",
        sitePrice: 180.00,
        buffBuy: 198.00, // Exactly 10% premium
        buffBid: 191.25,
        steamPercentage: 65.5,
        buyDisabled: false,
        expectedAction: "buy",
        notes: "Exactly 10% premium (should pass)"
      },
      {
        id: 19,
        name: "P90 | Dragon King",
        subtext: "Factory New",
        sitePrice: 28.50,
        buffBuy: 31.32, // 9.9% premium
        buffBid: 30.75,
        steamPercentage: 68.2,
        buyDisabled: false,
        expectedAction: "bargain",
        notes: "Just under premium limit (should bargain)"
      },
      {
        id: 20,
        name: "Flip Knife | Doppler",
        subtext: "Factory New - Phase 4",
        sitePrice: 285.00,
        buffBuy: 327.75, // 15% spread exactly
        buffBid: 285.00,
        steamPercentage: 63.4,
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Spread exactly at 15% limit (should fail)"
      },
      {
        id: 21,
        name: "StatTrak™ M4A4 | Desolate Space",
        subtext: "Field-Tested",
        sitePrice: 45.80,
        buffBuy: 52.50,
        buffBid: 50.25,
        steamPercentage: 67.3,
        buyDisabled: false,
        expectedAction: "buy",
        notes: "Real scenario: good deal"
      },
      {
        id: 22,
        name: "USP-S | Kill Confirmed",
        subtext: "Minimal Wear",
        sitePrice: 78.90,
        buffBuy: 81.50,
        buffBid: 79.25,
        steamPercentage: 82.1,
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Real scenario: steam too high"
      },
      {
        id: 23,
        name: "Karambit | Case Hardened",
        subtext: "Well-Worn - Blue Gem Pattern",
        sitePrice: 1850.00,
        buffBuy: 2000.00,
        buffBid: 1925.00,
        steamPercentage: 58.7,
        buyDisabled: false,
        expectedAction: "bargain",
        notes: "Real scenario: premium 8.1%"
      },
      {
        id: 24,
        name: "AK-47 | Bloodsport",
        subtext: "Factory New - Crown Foil",
        sitePrice: 195.00,
        buffBuy: 220.00,
        buffBid: 210.00,
        steamPercentage: 91.5,
        buyDisabled: true,
        expectedAction: "skip",
        notes: "Real scenario: high steam + disabled"
      },
      {
        id: 25,
        name: "Gut Knife | Gamma Doppler",
        subtext: "Factory New - Phase 3",
        sitePrice: 125.00,
        buffBuy: 142.50,
        buffBid: 138.00,
        steamPercentage: 64.8,
        buyDisabled: false,
        expectedAction: "buy",
        notes: "Real scenario: 14% premium"
      },
      {
        id: 26,
        name: "AWP | Oni Taiji",
        subtext: "Field-Tested",
        sitePrice: 0, // Missing site price
        buffBuy: 185.50,
        buffBid: 180.25,
        steamPercentage: 72.3,
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Missing site price data"
      },
      {
        id: 27,
        name: "M4A1-S | Hyper Beast",
        subtext: "Factory New",
        sitePrice: 65.80,
        buffBuy: 0, // Missing buff buy
        buffBid: 68.50,
        steamPercentage: 69.2,
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Missing buff buy price"
      },
      {
        id: 28,
        name: "Desert Eagle | Printstream",
        subtext: "Factory New",
        sitePrice: 89.50,
        buffBuy: 98.75,
        buffBid: 95.20,
        steamPercentage: 0, // Missing steam percentage
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Missing steam percentage"
      },
      {
        id: 29,
        name: "Gloves | Pandora's Box",
        subtext: "Field-Tested",
        sitePrice: 1250.00,
        buffBuy: 1380.00,
        buffBid: 0, // Missing buff bid
        steamPercentage: 61.4,
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Missing buff bid price"
      },
      {
        id: 30,
        name: "", // Missing name
        subtext: "Factory New",
        sitePrice: 125.00,
        buffBuy: 140.00,
        buffBid: 135.00,
        steamPercentage: 66.7,
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Missing item name"
      },
      {
        id: 31,
        name: "Souvenir AWP | Dragon Lore",
        subtext: "Factory New - MLG Columbus 2016",
        sitePrice: 15000.00,
        buffBuy: 17500.00,
        buffBid: 16800.00,
        steamPercentage: 48.2,
        buyDisabled: false,
        expectedAction: "buy",
        notes: "Ultra high-value item"
      },
      {
        id: 32,
        name: "StatTrak™ Karambit | Case Hardened",
        subtext: "Factory New - Blue Gem #1",
        sitePrice: 25000.00,
        buffBuy: 28000.00,
        buffBid: 26500.00,
        steamPercentage: 52.1,
        buyDisabled: false,
        expectedAction: "buy",
        notes: "Extremely rare pattern"
      },
      {
        id: 33,
        name: "P2000 | Corticera",
        subtext: "Field-Tested",
        sitePrice: 0.85,
        buffBuy: 1.05,
        buffBid: 0.98,
        steamPercentage: 68.9,
        buyDisabled: false,
        expectedAction: "buy",
        notes: "Very low value item"
      },
      {
        id: 34,
        name: "Nova | Predator",
        subtext: "Battle-Scarred",
        sitePrice: 0.12,
        buffBuy: 0.15,
        buffBid: 0.13,
        steamPercentage: 89.7,
        buyDisabled: false,
        expectedAction: "skip",
        notes: "Steam percentage too high"
      }
    ],
  };