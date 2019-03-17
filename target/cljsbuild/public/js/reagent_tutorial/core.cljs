(ns reagent-tutorial.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [reitit.frontend :as reitit]
              [clerk.core :as clerk]
              [accountant.core :as accountant]))

(def page-num (reagent/atom 1))

(def coordinate (reagent/atom {:x 20 :y 20}))
;(def y-coordinate (reagent/atom {:value 20}))

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

(defn myHero []
  [:img.hero
   {:src "https://t1.daumcdn.net/cfile/tistory/99E2063F5C89011921"
    :style {:top (str (get @coordinate :y) "px") :left (str (get @coordinate :x) "px")}}])

(defn moving [e]
  (cond 
    (= (.-key e) "ArrowUp") (swap! coordinate update-in [:y] dec)
    (= (.-key e) "ArrowDown") (swap! coordinate update-in [:y] inc)
    (= (.-key e) "ArrowLeft") (swap! coordinate update-in [:x] dec)
    (= (.-key e) "ArrowRight") (swap! coordinate update-in [:x] inc)
    :else (println (.-key e))
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

(defn addEvent []
  (.addEventListener js/window "keydown" (fn [e] (moving e))))

(defn common-page []
    (fn []
      [:div
       [common-head]
       [common-nav]
       [common-article]
       [keytest]
       ;[:button {:on-click #(swap! coordinate update-in [:y] inc)} "Increment"]
       [myHero]
       ;[:button {:on-click #(println (get @coordinate :x) (get @coordinate :y))} "Print"]
       [common-footer]
       [:div (addEvent)]]))

(defn mount-root []
  (reagent/render [common-page] 
                  (.getElementById js/document "app"))
  )


(defn init! []
  (clerk/initialize!)
  (mount-root)
  )
