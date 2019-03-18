(ns reagent-tutorial.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [reitit.frontend :as reitit]
            [clerk.core :as clerk]
            [accountant.core :as accountant]))

(def page-num (reagent/atom 1))

(def coordinate (reagent/atom {:x 50 :y 300}))
(def fish-coordinate (reagent/atom {:x (rand-int 500) :y (rand-int 500) :status 1}))

(defn common-head []
  [:h1 "Moving Cat"])

(defn common-nav []
  [:div
   [:input {:type "button" :class "menu" :value "Read Me" :on-click (if (= @page-num 1) #(reset! page-num 2) #(reset! page-num 1))}]])

(defn readMe []
  [:div
   [:p "You can move the cat. If you press arrowkey or w,a,s,d, the cat moves."]
   [:p "and If you press c, the cat eat the fish."]
   [:p "below input is for mobile users."] 
   ])

(defn common-article []
  (cond
    (= @page-num 1) [:div {:id "unvisible-readme"} [:br]]
    (= @page-num 2) [:div {:id "visible-readme"} (readMe)]
    ))

(defn common-footer []
  [:footer {:class "footer"} 
   [:p "This site was created by ssilb4 using cljs (reagent)."]
   ])

(defn myFish []
  (if (= (get @fish-coordinate :status) 1)  
  [:img.fish
   {:src "https://t1.daumcdn.net/cfile/tistory/991804435C8F940A2D"
    :style {:position "absolute" :width "100px" :height "100px" :top (str (get @fish-coordinate :y) "px") :left (str (get @fish-coordinate :x) "px")}}]
  
  ;(if (= (get @fish-coordinate :status) 2)
  [:img.fish
   {:src "https://t1.daumcdn.net/cfile/tistory/99BAA2405C8F940A27"
    :style {:position "absolute" :width "100px" :height "100px" :top (str (get @fish-coordinate :y) "px") :left (str (get @fish-coordinate :x) "px")}}])
  )

(defn newFish []
  (swap! fish-coordinate assoc :status 1)
  (swap! fish-coordinate assoc :x (rand-int 500))
  (swap! fish-coordinate assoc :y (rand-int 500)))

(defn capture []
  (let [hx (+ (get @coordinate :x) 150)
        hy (+ (get @coordinate :y) 60)
        cx (+ (get @fish-coordinate :x) 20)
        cy (+ (get @fish-coordinate :y) 20)]
    (if (and (> 40 (- hx cx)) (< -5 (- hx cx)) (> 20 (- hy cy)) (< -20 (- hy cy)))
  (if (= (get @fish-coordinate :status) 1)
    (do
      (swap! fish-coordinate assoc :status 2)
      (js/setTimeout #(newFish) 1000))
   (str "test")                     ;(swap! fish-coordinate assoc :status 1)
   )
  (println hx hy cx cy )))
)

(defn moving [e]
  (println (.-key e))
  (cond
    (= (.-key e) "ArrowUp") (swap! coordinate update-in [:y] dec)
    (= (.-key e) "ArrowDown") (swap! coordinate update-in [:y] inc)
    (= (.-key e) "ArrowLeft") (swap! coordinate update-in [:x] dec)
    (= (.-key e) "ArrowRight") (swap! coordinate update-in [:x] inc)
    (= (.-key e) "w") (swap! coordinate update-in [:y] dec)
    (= (.-key e) "s") (swap! coordinate update-in [:y] inc)
    (= (.-key e) "a") (swap! coordinate update-in [:x] dec)
    (= (.-key e) "d") (swap! coordinate update-in [:x] inc)
    (= (.-key e) "c") (capture)
    (= e "w") (swap! coordinate update-in [:y] dec)
    (= e "s") (swap! coordinate update-in [:y] inc)
    (= e "a") (swap! coordinate update-in [:x] dec)
    (= e "d") (swap! coordinate update-in [:x] inc)
    ;:else (.alert js/window (.-key e))
    ;:else (.alert js/window (.-which e))
    ))

(defn keytest []
  [:input#mobileInput
   {:placeholder "It is for mobile user."

    :on-key-up
    (fn [e]
      (moving (last (.-value (.-target e))))
      (set! (.-value (js/document.getElementById "mobileInput")) "")
      )
}])

(defn myHero []
  [:img.hero
   {:src "https://t1.daumcdn.net/cfile/tistory/99E2063F5C89011921"
    :style {:top (str (get @coordinate :y) "px") :left (str (get @coordinate :x) "px")}}])



(defn addEvent []
  (.addEventListener js/window "keydown" (fn [e] (moving e)))
  )

(defn common-page []
  (fn []
    [:div
     [common-head]
     [common-nav]
     [common-article]
     [keytest]
     [myFish]
     [myHero]
     [common-footer]
     [:div (addEvent)]]))

(defn mount-root []
  (reagent/render [common-page]
                  (.getElementById js/document "app")))


(defn init! []
  (clerk/initialize!)
  (mount-root))
