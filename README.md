# Website Performance Workshop 🦙

[https://lama.thomaspuppe.de](https://lama.thomaspuppe.de)


## Präsentation

* [https://lama.thomaspuppe.de/presentation.pdf](https://lama.thomaspuppe.de/presentation.pdf)


## Quellen zum Reinnerden ins Thema Website Performance

* [web.dev/fast](https://web.dev/fast/), [awesome-wpo](https://github.com/davidsonfellipe/awesome-wpo)
* Blogs von [CalibreApp](https://calibreapp.com/blog), [Harry Roberts](https://csswizardry.com/archive/), [Tim Kadlec](https://timkadlec.com/remembers/), [Smashing Magazine](https://www.smashingmagazine.com/category/performance/), [DebugBear](https://www.debugbear.com/blog), [perfplanet.com](https://www.perfplanet.com/)
* [perf-tooling.today](https://www.perf-tooling.today/)


Zur Diskussion um `system-ui` im System-Font-Stack: https://infinnie.github.io/blog/2017/systemui.html . Da geht es aber um chinesische Windows-Systeme. Also eher ein Nischen-Problem. Und der Hinweis im Blogpost (von 2017), dass Bootstrap `system-ui` aus seinem Font-Stack entfernt habe, stimmt auch nicht (mehr). Also alles halb so schlimm wie ich annahm. Sorry für die Verwirrung.


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
