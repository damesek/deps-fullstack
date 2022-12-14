(ns project.cljs.views.dashboard)


(defn dash []
[:div
 [:div.relative.z-40.md:hidden {:role "dialog" :aria-modal "true"}
  [:div.fixed.inset-0.bg-gray-600.bg-opacity-75]
  [:div.fixed.inset-0.z-40.flex
   [:div.relative.flex.w-full.max-w-xs.flex-1.flex-col.bg-white.pt-5.pb-4
    [:div.absolute.top-0.right-0.-mr-12.pt-2
     [:button.ml-1.flex.h-10.w-10.items-center.justify-center.rounded-full.focus:outline-none.focus:ring-2.focus:ring-inset.focus:ring-white {:type "button"}
      [:span.sr-only "Close sidebar"]
      [:svg.h-6.w-6.text-white {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
       [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M6 18L18 6M6 6l12 12"}]]]]
    [:div.flex.flex-shrink-0.items-center.px-4
     [:img.h-8.w-auto {:src "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" :alt "Your Company"}]]
    [:div.mt-5.h-0.flex-1.overflow-y-auto
     [:nav.space-y-1.px-2
      [:a.bg-gray-100.text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-base.font-medium {:href "#"}
       [:svg.text-gray-500.mr-4.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
        [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}]] "Dashboard"]
      [:a.text-gray-600.hover:bg-gray-50.hover:text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-base.font-medium {:href "#"}
       [:svg.text-gray-400.group-hover:text-gray-500.mr-4.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
        [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}]] "Team"]
      [:a.text-gray-600.hover:bg-gray-50.hover:text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-base.font-medium {:href "#"}
       [:svg.text-gray-400.group-hover:text-gray-500.mr-4.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
        [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"}]] "Projects"]
      [:a.text-gray-600.hover:bg-gray-50.hover:text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-base.font-medium {:href "#"}
       [:svg.text-gray-400.group-hover:text-gray-500.mr-4.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
        [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"}]] "Calendar"]
      [:a.text-gray-600.hover:bg-gray-50.hover:text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-base.font-medium {:href "#"}
       [:svg.text-gray-400.group-hover:text-gray-500.mr-4.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
        [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"}]] "Documents"]
      [:a.text-gray-600.hover:bg-gray-50.hover:text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-base.font-medium {:href "#"}
       [:svg.text-gray-400.group-hover:text-gray-500.mr-4.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
        [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"}]] "Reports"]]]]
   [:div.w-14.flex-shrink-0]]]
 [:div.hidden.md:fixed.md:inset-y-0.md:flex.md:w-64.md:flex-col
  [:div.flex.flex-grow.flex-col.overflow-y-auto.border-r.border-gray-200.bg-white.pt-5
   [:div.flex.flex-shrink-0.items-center.px-4
    [:img.h-8.w-auto {:src "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" :alt "Demo Project Dashboard"}]]
   [:div.mt-5.flex.flex-grow.flex-col
    [:nav.flex-1.space-y-1.px-2.pb-4
     [:a.bg-gray-100.text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-sm.font-medium {:href "#"}
      [:svg.text-gray-500.mr-3.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
       [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}]] "Dashboard"]
     [:a.text-gray-600.hover:bg-gray-50.hover:text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-sm.font-medium {:href "#"}
      [:svg.text-gray-400.group-hover:text-gray-500.mr-3.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
       [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}]] "Team"]
     [:a.text-gray-600.hover:bg-gray-50.hover:text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-sm.font-medium {:href "#"}
      [:svg.text-gray-400.group-hover:text-gray-500.mr-3.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
       [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"}]] "Projects"]
     [:a.text-gray-600.hover:bg-gray-50.hover:text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-sm.font-medium {:href "#"}
      [:svg.text-gray-400.group-hover:text-gray-500.mr-3.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
       [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"}]] "Calendar"]
     [:a.text-gray-600.hover:bg-gray-50.hover:text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-sm.font-medium {:href "#"}
      [:svg.text-gray-400.group-hover:text-gray-500.mr-3.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
       [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"}]] "Documents"]
     [:a.text-gray-600.hover:bg-gray-50.hover:text-gray-900.group.rounded-md.py-2.px-2.flex.items-center.text-sm.font-medium {:href "#"}
      [:svg.text-gray-400.group-hover:text-gray-500.mr-3.flex-shrink-0.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
       [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"}]] "Reports"]]]]]
 [:div.md:pl-64
  [:div.mx-auto.flex.max-w-4xl.flex-col.md:px-8.xl:px-0
   [:div.sticky.top-0.z-10.flex.h-16.flex-shrink-0.border-b.border-gray-200.bg-white
    [:button.border-r.border-gray-200.px-4.text-gray-500.focus:outline-none.focus:ring-2.focus:ring-inset.focus:ring-indigo-500.md:hidden {:type "button"}
     [:span.sr-only "Open sidebar"]
     [:svg.h-6.w-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor" :aria-hidden "true"}
      [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"}]]]]
   [:main.flex-1
    [:div.py-6
     [:div.px-4.sm:px-6.md:px-0
      [:h1.text-2xl.font-semibold.text-gray-900 "Dashboard"]]
     [:div.px-4.sm:px-6.md:px-0
      [:div.py-4
       [:div.h-96.rounded-lg.border-4.border-dashed.border-gray-200
        [:p.p-3.text-gray-700.font-light "test content"]]]]]]]]])