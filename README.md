# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Laura van Rooijen

  #### Je startniveau:
  Blauw

  #### Je focus:
  Responsive plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp <br>
  <a>https://nl.gymshark.com</a>

  #### Screenshot(s) van de eerste pagina (small screen): 
  Gymshark home <br> 
  <img src="readme-images/gymshark.home.png" width="375px" alt="Gymshark home">

  #### Screenshot(s) van de tweede pagina (small screen):
  Gymshark leggings <br> 
  <img src="readme-images/gymshark.leggings.png" width="375px" alt="Gymshark leggings">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  - niet gebruik maken van id en class (niet semantisch)
  - cursor is niet hoognodig
  - img kan beter in eigen container (use flex-wrap, flex-base, width) padding op article
  
  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)
  - lijn tussen categorieen wordt opgelezen door screenreader

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  - list item in css doorgeven zodat het niet wordt opgelezen of de hele lijn eruit halen


  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  - de website is eenvoudig te besturen door de grote afbeeldingen en grote iconen. Ook wordt de kleur opgelezen door de screenreader 
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)
  - de website kan gebruikt worden met motorische moeilijkheden


  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)  
  - door gegevens op te slaan en autofill te gebruiken, is typen eventueel overbodig (account aanmaken)


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  - De kleur wordt beschreven met meerdere woorden. Er zou kunnen worden gedefinieerd wat 'marl' bijvoorbeeld betekend. 
  - De patronen worden wel duidelijk benoemd (adapt animal), maar zouden misschien nog duidelijker mogen
  - Wat Gymshark wel heel goed doet, is dat zij opties geven om 2 producten naast elkaar te laten zien, maar je kan ook kiezen of je 1 groot product op het scherm wilt weergeven

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  - Duidelijkere kleuren noemen 
  - Duidelijker de patronen benoemen

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/html.breakdown.png" width="375px" alt="breakdown van de hele pagina">
  
  Let op! Nieuwe breakdown sketch: <br>
  <img src="readme-images/new breakdown.jpeg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  - de basis opbouw van de website ging vrij makkelijk. De SVG's waren toegevoegd en de styling was goed in CSS over te nemen
  
  - de banner was nog niet helemaal goed (styling)
  - de articles staan nog niet naast elkaar
  - de categorieen missen nog
  - de footer mist nog
  - de svg's in de navbar hebben nog niet de goede styling


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | Hoe kan ik die navbar kloppend maken en de articles onder elkaar plaatsen?| ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - 1x h1 gebruiken
  - meerdere ul in nav 1
  - GEEN id, div of class!!!
  - end of types 
  - remake code breakdown
  - cursor = niet nodig

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  - De articles hebben nog niet de juiste styling 
(tip van Robert: [24/11 22:08] Robert Spier
Even kijken, ik zou die articles samen in een section zetten

[24/11 22:08] Robert Spier
Daar een body voor gebruiken is lastig voor de rest van je pagina

[24/11 22:09] Robert Spier
De section heeft vervolgens een display: flex nodig, zonder flex wrap, want daarmee laat je ze naast elkaar staan

[24/11 22:09] Robert Spier
De afbeeldingen zorgen ervoor dat de images te groot worden denk ik, dus als ze na deze regels css nog niet naast welkaar zijn kun je de article een flex-basis: 50% geven
)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - nav header meerdere ul gebruiken?
  - styling capslock h1+h2 in css stylen
  - class weg, end of type terug!!
  - img onderaan (screenreader) gebruik order om de styling weer te fixen in css (max width op img)
  - head pagina 2 wijzigen (meta)
  
  Todo:
  - nav doorsturen naar Yara (waarom is de banner niet over de hele site?)
  - Github updaten

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. [bron 1](https://nl.gymshark.com/)
  2. [bron 2](https://nl.gymshark.com/collections/new-releases/womens)
  3. [bron 3](https://validator.w3.org)
  4. bron 4

</details>
