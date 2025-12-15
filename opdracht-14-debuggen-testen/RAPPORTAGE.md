# RAPPORTAGE.md

## Project: Favorite Movies List

### Functionaliteit
De applicatie laat gebruikers toe:
- Films toe te voegen aan een favorietenlijst
- Films te verwijderen uit de lijst
- Duplicaten te voorkomen
- Een melding te tonen als de lijst leeg is

Componenten:
- `App.jsx` – hoofdcomponent met state en logica voor toevoegen/verwijderen
- `AddMovie.jsx` – formulier voor het toevoegen van films
- `MovieList.jsx` – lijstweergave van films met verwijderknoppen
- `Header.jsx` – titel/header van de applicatie

---

## Debug Report

### Bug 1: Typfout bij state setter in App.jsx
- **Probleem:** `setMovie([...movies, newMovie])` gaf een fout (`setMovie is not defined`).
- **Oorzaak:** De juiste state setter heet `setMovies`.
- **Oplossing:** Aangepast naar:
```jsx
setMovies([...movies, newMovie]);
Bug 2: Duplicaten konden toegevoegd worden
Probleem: Films konden meerdere keren toegevoegd worden.

Oorzaak: Geen check op duplicaten in addMovie.

Oplossing: Toegevoegd in addMovie:

jsx
if (movies.includes(newMovie)) {
  alert('This movie is already in your favorites!');
  return;
}
Bug 3: Lege film toevoegen mogelijk
Probleem: Lege string kon toegevoegd worden.

Oorzaak: Geen validatie op lege input in AddMovie.jsx.

Oplossing: Toegevoegd in handleSubmit:

jsx
if (title.trim() === '') {
  alert('Movie title cannot be empty');
  return;
}
Bug 4: Input veld werd niet geleegd na toevoegen
Probleem: Input bleef gevuld na toevoegen.

Oorzaak: setTitle('') stond niet correct in handleSubmit.

Oplossing: Toegevoegd direct na onAdd(title.trim()):

jsx
onAdd(title.trim());
setTitle('');
Test Report
User Story 1: Movies toevoegen aan favorietenlijst ✅ PASSED
Invoerveld aanwezig ✅

Voeg knop aanwezig ✅

Film wordt toegevoegd ✅

Film verschijnt onder bestaande favorieten ✅

Lege titel geeft foutmelding ✅

Invoerveld wordt leeg na toevoegen ✅

User Story 2: Films verwijderen uit favorietenlijst ✅ PASSED
Elke film heeft verwijderknop ✅

Film wordt verwijderd bij klikken ✅

Film verdwijnt direct uit lijst ✅

Geen foutmelding bij verwijderen ✅

User Story 3: Duplicate films voorkomen ✅ PASSED
Foutmelding bij dubbel toevoegen ✅

Film wordt niet toegevoegd bij duplicaat ✅

Geen duplicaten in lijst ✅

User Story 4: Lege lijstmelding tonen ✅ PASSED
Bericht verschijnt bij lege lijst ✅

Verdwijnt bij toevoegen eerste film ✅

Verschijnt opnieuw na verwijderen laatste film ✅

Test Scenario’s
Happy Path ✅ Alles werkt zoals verwacht

Error Handling ✅ Foutmeldingen bij lege titel en duplicaat werken

Edge Cases ✅ Spaties, speciale karakters en lange titels getest ✅

