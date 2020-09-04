# helse-arbeidsgiver-felles-frontend

Felles kode som kan deles mellom frontend applikasjonene for helse arbeidsgiver

## Slik starter du lokalt

Last ned dependencies 

<pre>
npm install
</pre>

Kjør koden

<pre>
npm start
</pre>

## Slik lager du ny versjon

I dette repo ligger det en GitHub workflow som publiserer nye pakker til GitHubs eget pakke registry. Denne workflowen
blir kjørt dersom du pusher en commit med en label som begynner på bokstaven v. Dersom du ønsker å deploye så bumper
du versjonsnummeret i package.json, også lager du en label med tilsvarende nummer som er prefikset med bokstaven v.
Denne labelen setter du på din commit og pusher til GitHub. 

### Eksempel

package.json

<pre>"version": "0.1.2"</pre>

Git label

<pre>v0.1.2</pre>


## Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes mot:

* tbd

### For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #helse-arbeidsgiver