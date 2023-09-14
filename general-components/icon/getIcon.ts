type TGetIcon = (icon: TIconString) => number
export type TIconString =
  | "Rewe"
  | "Lidl"
  | "Aldi S"
  | "CryFace"
  | "Settings"
  | "LightMode"
  | "DarkMode"
  | "AddCircle"
  | "CheckBox"
  | "CloseCircle"
  | "Trashcan"
  | "Save"
  | "Edit"
  | "CustomToolsRepair"
  | "CustomMarket"
  | "CustomMarket2"
  | "CustomHammerSale"
  | "CustomMarket3"
  | "CustomHandSale"
  | "CustomShoppingBags"
  | "CustomInvoice"
  | "CustomCalculator"
  | "CustomPayment"
  | "CustomCart"
  | "CustomPiggy"
  | "CustomGiftTruck"
  | "CustomSaleTag"

export const getIcon: TGetIcon = icon => {
  switch (icon) {
    case "CustomToolsRepair":
      return require("../../assets/svgs/custom-tools-repair.svg")
    case "CustomMarket":
      return require("../../assets/svgs/custom-market.svg")
    case "CustomMarket2":
      return require("../../assets/svgs/custom-market2.svg")
    case "CustomHammerSale":
      return require("../../assets/svgs/custom-hammer-sale.svg")
    case "CustomMarket3":
      return require("../../assets/svgs/custom-market3.svg")
    case "CustomHandSale":
      return require("../../assets/svgs/custom-hand-sale.svg")
    case "CustomShoppingBags":
      return require("../../assets/svgs/custom-shopping-bags.svg")
    case "CustomInvoice":
      return require("../../assets/svgs/custom-invoice.svg")
    case "CustomCalculator":
      return require("../../assets/svgs/custom-calculator.svg")
    case "CustomPayment":
      return require("../../assets/svgs/custom-payment.svg")
    case "CustomCart":
      return require("../../assets/svgs/custom-cart.svg")
    case "CustomPiggy":
      return require("../../assets/svgs/custom-piggy.svg")
    case "CustomGiftTruck":
      return require("../../assets/svgs/custom-gift-truck.svg")
    case "CustomSaleTag":
      return require("../../assets/svgs/custom-sale-tag.svg")
    case "Rewe":
      return require("../../assets/svgs/rewe-logo.svg")
    case "Lidl":
      return require("../../assets/svgs/lidl-logo.svg")
    case "Aldi S":
      return require("../../assets/svgs/aldi-s-logo.svg")
    case "CryFace":
      return require("../../assets/svgs/cry-face.svg")
    case "Settings":
      return require("../../assets/svgs/settings-icon.svg")
    case "LightMode":
      return require("../../assets/svgs/light-mode-icon.svg")
    case "DarkMode":
      return require("../../assets/svgs/dark-mode-icon.svg")
    case "AddCircle":
      return require("../../assets/svgs/add-circle.svg")
    case "CheckBox":
      return require("../../assets/svgs/check-box.svg")
    case "CloseCircle":
      return require("../../assets/svgs/close-circle.svg")
    case "Trashcan":
      return require("../../assets/svgs/trash-can.svg")
    case "Save":
      return require("../../assets/svgs/save.svg")
    case "Edit":
      return require("../../assets/svgs/edit.svg")
  }
}
