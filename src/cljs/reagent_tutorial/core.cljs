(ns reagent-tutorial.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [reitit.frontend :as reitit]
              [clerk.core :as clerk]
              [accountant.core :as accountant]))

(def page-num (reagent/atom 1))

(def x-coordinate (reagent/atom 0))
(def y-coordinate (reagent/atom 0))

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

(defn keytest []
  [:input
   {:on-key-press
    (fn [e]
      (println "key press" (.-key e))
      (if (= (.-key e) 13)
        (println "Enter")
        (println "Not Enter")))}
   ]
)

(defn myHero [x y]
  [:img.hero
   {:src "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png"
    :style {:top (str x "px") :left (str y "px")}}])

(defn moving [e]
  (cond 
    (= (.-key e) "ArrowUp") (println "I am UP")
    (= (.-key e) "ArrowDown") (do #(reset! x-coordinate 10) (println @x-coordinate))
    (= (.-key e) "ArrowLeft") (println "I am LEFT")
    (= (.-key e) "ArrowRight") #(swap! y-coordinate update-in inc)
    ))

; (defn common-page [x y]
;   [:div
;    [common-head]
;    [common-nav]
;    [common-article]
;    [keytest]
;    [myHero x y]
;    [common-footer]
;    ]
;   )

(defn common-page [x y]
  (let [component-state (reagent/atom {:count y})]
    (fn []
    [:div
     [common-head]
     [common-nav]
     [common-article]
     [keytest]
     [:button {:on-click #(swap! component-state update-in [:count] inc)} "Increment"]
     [myHero (get @component-state :count) y]
     [common-footer]])))

(defn mount-root []
  (reagent/render [common-page @x-coordinate @y-coordinate] 
                  (.getElementById js/document "app"))
  (.addEventListener js/window "keyup" (fn [e] (moving e))))


(defn init! []
  (clerk/initialize!)
  (mount-root)
  )
