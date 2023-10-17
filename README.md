# Website Performance Workshop 🦙

* [https://lama.thomaspuppe.de](https://lama.thomaspuppe.de)
* [https://lama.thomaspuppe.de/before.html](https://lama.thomaspuppe.de/before.html)
* [https://lama.thomaspuppe.de/after.html](https://lama.thomaspuppe.de/after.html)

---


## Präsentation

* [https://lama.thomaspuppe.de/Website-Performance_2023-10.pdf](https://lama.thomaspuppe.de/Website-Performance_2023-10.pdf)



## Tooling

* Chrome Devtools Network Filter: https://developer.chrome.com/docs/devtools/network/reference/#filter-by-property
* Request Map Generator: https://requestmap.webperf.tools/
* Request Map Generator: https://requestmap.pages.dev/
* System Font Stacks: https://modernfontstacks.com/
* CSS Modern Font Stacks: https://gist.github.com/don1138/5761014
* Font Style Matcher: https://meowni.ca/font-style-matcher/
* Bildformate: https://www.smashingmagazine.com/2021/09/modern-image-formats-avif-webp/
* Bildformate checken: https://webspeedtest.cloudinary.com/
* SVG optimieren: https://jakearchibald.github.io/svgomg/
* Responsive Images Checker: https://toolsaday.com/seo/responsive-image-checker
* Responsive Image Generator: https://responsivebreakpoints.com/
* Webfont-Features erkunden: https://wakamaifondue.com/
* Font Subsetting GUI: https://everythingfonts.com/subsetter
* Font Subsetting CLI: https://www.zachleat.com/web/glyphhanger
* Fonts transformieren und Subsetting: https://transfonter.org/
* Layout Shift gif Generator: https://defaced.dev/tools/layout-shift-gif-generator/
* DevTools Tips: https://devtoolstips.org/
* Pagespeed Insights: https://pagespeed.web.dev/
* Webpagetest: https://www.webpagetest.org/
* Performance Experimente vorbereiten: https://perfproxy.com/
* SpeedCurve: https://www.speedcurve.com/
* CrUX: https://developer.chrome.com/docs/crux/dashboard/


## Quellen zum Reinnerden ins Thema Website Performance

* [web.dev/fast](https://web.dev/fast)
* [github.com/davidsonfellipe/awesome-wpo](https://github.com/davidsonfellipe/awesome-wpo)
* [www.smashingmagazine.com/category/performance/](https://www.smashingmagazine.com/category/performance/)
* [perfplanet.com](https://perfplanet.com)
* [calibreapp.com/blog](https://calibreapp.com/blog)
* [speedcurve.com/blog](https://speedcurve.com/blog)
* [debugbear.com/blog](https://debugbear.com/blog)
* [simonhearne.com/posts](https://simonhearne.com/posts)
* [csswizardry.com/archive](https://csswizardry.com/archive)
* [timkadlec.com/remembers](https://timkadlec.com/remembers)


---

## Setup der lokalen Website

```
git clone https://github.com/thomaspuppe/performance-workshop.git
```

### lokaler Webserver

Wir brauchen die Adresse [http://localhost:8000/index.html](http://localhost:8000/index.html) mit einem lokalen Webserver.

Start eines lokalen Webservers via ...

* `python3 -m http.server 8000`
* `npm install -g node-static && static -p 8000`
* Big list of http static server one-liners: [https://gist.github.com/willurd/5720255](https://gist.github.com/willurd/5720255)
* Visual Studio Code Extension: "Live Server"

Oder ihr nutzt euren privaten Webserver oder Netlify/Vercel ... 

Der Aufruf ganz normal von der Festplatte via `file:///Users/puppe/Desktop/performance-workshop/index.html` funktioniert auch, uns fehlen dann aber wichtige Funktionen beim Testen.


## Für später

### Cumulative Layout Shift

* Chrome Devtools: Menü -> Show Console Drawer -> Rendering Tab -> Layout Shift Regions
* Chrome Web Store: Extension [Web Vitals](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma?hl=en)
* Chrome Web Store: Extension [CLS Visualizer](https://chrome.google.com/webstore/detail/cls-visualizer/jbbeihojggidiclbcneckhcblilapahn)


### Debugging

* [Resource Hint (rel=preload) Validator](https://www.debugbear.com/resource-hint-validator)
