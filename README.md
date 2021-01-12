# FAKE-AGENCY

## Konzept
Die Webseite soll die Landingpage einer fiktiven Werbeagentur anzeigen. Der Inhalt besteht aus einer knappen Vorstellung und Philosophie der Agentur. Weiters sollen Dienstleistungen dargestellt werden, welche von dieser Firma angeboten werden. Treue Kunden werden mit ihrem Logo und - wenn sie es möchten - verlinkt. Das Kontaktformular ist mit einer MongoDB Datenbank verknüpft und speichert die übermittelten Daten eben auch dort ab. Aktuelle aber auch ältere Projekte(auf die man besonders stolz sein kann) sollen in einer Blog-Unterseite dargestellt und aktiv aktualisiert werden können. Desweiteren soll das Team auch eine Unterseite erhalten, damit sich der Kunde ein Bild machen kann.

## Intranet Anbindung
Die übermittelten Daten sollen auf einer extra Anwendung dargestellt werden. Diese ist nur lokal zugänglich, sodass nur Firmenmitglieder Zugriff darauf haben. Dort werden die übermittelten Kundennachrichten dargestellt. Ebenso soll über diese Seite der Blog aktualisiert werden können. Somit hat die Hauptanwendung die veröffentlicht wird nur Zugriff auf POST & GET Aktionen bezüglich der Datenbank. Ergo, Dinge können nur angezeigt/übermittelt aber nicht manipuliert oder gelöscht werden. 

## Features
1. Darkmode/Lightmode #check
2. Seitliche Schnellnavigation #check
3. Kontaktformular mit DB verbunden #check
4. Conten FadeIn onScroll #
5. Lade Animation #
6. Intranet-Seite #