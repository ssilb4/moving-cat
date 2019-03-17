(ns reagent-tutorial.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [reitit.frontend :as reitit]
            [clerk.core :as clerk]
            [accountant.core :as accountant]))

(def page-num (reagent/atom 1))

(def coordinate (reagent/atom {:x 300 :y 300}))
;(def y-coordinate (reagent/atom {:value 20}))

(defn common-head []
  [:h1 "Moving Cat"])

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
  [:footer {:class "footer"} 
   [:p "This site was created by ssilb4 using cljs (reagent)."]
   ])

(defn readMe []
  [:div
   [:p "You can move the cat. If you press arrowkey or w,a,s,d, the cat moves."]
   [:p "below input is for mobile user."] 
   ])

(defn keytest []
  [:input#mobileInput
   {:on-key-up
    (fn [e]
      (moving (last (.-value (.-target e))))
      (set! (.-value (js/document.getElementById "mobileInput")) "")
      )
}])

(defn myHero []
  [:img.hero
   {:src "https://t1.daumcdn.net/cfile/tistory/99E2063F5C89011921"
    :style {:top (str (get @coordinate :y) "px") :left (str (get @coordinate :x) "px")}}])

(defn moving [e]
  (println e)
  (cond
    (= (.-key e) "ArrowUp") (swap! coordinate update-in [:y] dec)
    (= (.-key e) "ArrowDown") (swap! coordinate update-in [:y] inc)
    (= (.-key e) "ArrowLeft") (swap! coordinate update-in [:x] dec)
    (= (.-key e) "ArrowRight") (swap! coordinate update-in [:x] inc)
    (= (.-key e) "w") (swap! coordinate update-in [:y] dec)
    (= (.-key e) "s") (swap! coordinate update-in [:y] inc)
    (= (.-key e) "a") (swap! coordinate update-in [:x] dec)
    (= (.-key e) "d") (swap! coordinate update-in [:x] inc)
    (= e "w") (swap! coordinate update-in [:y] dec)
    (= e "s") (swap! coordinate update-in [:y] inc)
    (= e "a") (swap! coordinate update-in [:x] dec)
    (= e "d") (swap! coordinate update-in [:x] inc)
    ;(= (.-keyCode e) 229) (swap! coordinate update-in [:y] dec)
    ;:else (.alert js/window (.-key e))
    ;:else (.alert js/window (.fromCharCode js/String (.-key e)))))
    ;:else (println (.fromCharCode js/String (.-keyCode e)))
    ;:else (.alert js/window (.-which e))
    ;(= (.fromCharCode js/String (.-keyCode e)) "W") (swap! coordinate update-in [:y] dec)
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

(defn mobileMoving [e]
  ; (let [_char (.data e)]
  ;   (.alert js/window (.charCodeAt _char (int 0)))
  ;   )
  )

(defn addEvent []
  ;(do
  (.addEventListener js/window "keydown" (fn [e] (moving e)))
    ;(.addEventListener #test "textInput" (fn [e] (mobileMoving e)))
  ;)
  )

(defn common-page []
  (fn []
    [:div
     [common-head]
     [common-nav]
     [common-article]
     [readMe]
     [keytest]
       ;[:button {:on-click #(swap! coordinate update-in [:y] inc)} "Increment"]
     [myHero]
       ;[:button {:on-click #(println (get @coordinate :x) (get @coordinate :y))} "Print"]
     [common-footer]
     [:div (addEvent)]]))

(defn mount-root []
  (reagent/render [common-page]
                  (.getElementById js/document "app")))


(defn init! []
  (clerk/initialize!)
  (mount-root))
