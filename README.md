# Website Performance Workshop 🦙

* [https://lama.thomaspuppe.de](https://lama.thomaspuppe.de)
* [https://lama.thomaspuppe.de/before.html](https://lama.thomaspuppe.de/before.html)
* [https://lama.thomaspuppe.de/after.html](https://lama.thomaspuppe.de/after.html)


## Präsentation

* [https://lama.thomaspuppe.de/Website-Performance_2023-10.pdf](https://lama.thomaspuppe.de/Website-Performance_2023-10.pdf)


## Quellen zum Reinnerden ins Thema Website Performance

* web.dev/fast
* github.com/davidsonfellipe/awesome-wpo
* www.smashingmagazine.com/category/performance/
* perfplanet.com​
* calibreapp.com/blog
* speedcurve.com/blog
* debugbear.com/blog​
* simonhearne.com/posts
* csswizardry.com/archive
* timkadlec.com/remembers



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
