(ns reagent-tutorial.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [reitit.frontend :as reitit]
              [clerk.core :as clerk]
              [accountant.core :as accountant]))

(def page-num (reagent/atom 1))

(defn common-head []
  [:h1 "my-several homepage"])

(defn common-nav []
  [:div
   [:input {:type "button" :class "menu" :value "Home" :on-click #(reset! page-num 1)}]
      [:input {:type "button" :class "menu" :value "Board" :on-click #(reset! page-num 2)}]
      [:input {:type "button" :class "menu" :value "Photo" :on-click #(reset! page-num 3)}]])

(defn common-article []
  (cond
    (= @page-num 1) [:div {:id "first-content"} "It is a homepage"]
    (= @page-num 2) [:div {:id "second-content"} "It is a board"]
    (= @page-num 3) [:div {:id "third-content"} "It is a photo"]))

(defn common-footer []
  [:footer {:class "footer"} "made by ssilb4"])

(defn common-page []
  [:div
   [common-head]
   [common-nav]
   [common-article]
   [common-footer]
  ]
)

(defn mount-root []
  (reagent/render [common-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (mount-root))
